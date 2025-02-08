import Handlebars from 'handlebars';
// import asciidoctor from 'asciidoctor'
import init_hbs from './hbs_tpl.compiled'
import register_helpers from './hbs_helpers'
// const Asciidoctor = asciidoctor()

interface Env {
	DATA: KVNamespace;
	SETTINGS: KVNamespace;
}

async function router(path: string, data: KVNamespace, settings: KVNamespace) {
	if (path.startsWith('/page/')) {
		return handle_index(path, data, settings);
	} else if (path === '/portal/' || path === '/about/') {
		// TODO: find a better way to distinguish pages from posts.
		return handle_page(path, data, settings);
	} else {
		return handle_post(path, data, settings);
	}
}

async function handle_index(path: string, data: KVNamespace, settings: KVNamespace) {
	const site = JSON.parse(await settings.get('site') || '{}');
	const navigation = JSON.parse(await settings.get("navigation") || '{}');
	let posts = JSON.parse(await settings.get('posts') || '{}');
	const current_page = parseInt(path.split('/')[2]);
	const total_pages = Math.floor((posts.length + 4) / 5);
	
	if (isNaN(current_page) || !Number.isInteger(current_page) || Math.sign(current_page) != 1 || current_page > total_pages) {
		throw new Error('index out of range.');
	}
	
	let paged_posts = posts.reverse().slice(current_page * 5 - 5, current_page * 5);
	const pagination = { current_page, total_pages, prev: current_page - 1, next: (current_page === total_pages) ? 0 : current_page + 1 };
	let page_data = { meta_title: site.title, body_class: (path === '/page/1/') ? 'home-template' : 'paged' };

	return Handlebars.templates['index.hbs']({ "page": page_data, paged_posts, site, navigation, pagination });
}

async function handle_page(path: string, data: KVNamespace, settings: KVNamespace) {
	const site = JSON.parse(await settings.get('site') || '{}');
	const navigation = JSON.parse(await settings.get('navigation') || '{}');
	const page_data = JSON.parse(await data.get(path) || '{}');
	const post = page_data.post;
	const page = page_data.page;

	return Handlebars.templates['page.hbs']({ page, post, site, navigation });
}

async function handle_post(path: string, data: KVNamespace, settings: KVNamespace) {
	const site = JSON.parse(await settings.get("site") || '{}');
	const navigation = JSON.parse(await settings.get("navigation") || '{}');
	const page_data = JSON.parse(await data.get(path) || '{}');

	if (Object.keys(page_data).length == 0) {
		throw new Error('not found.');
	}

	const post = page_data.post;
	const page = page_data.page;

	return Handlebars.templates['post.hbs']({ page, post, site, navigation });
}

function normalize(path: string) {
	if (path === '/') {
		path = '/page/1/'
	}
	return path.endsWith('/') ? path : path.concat('/')
}

init_hbs();
register_helpers();

export default {
	async fetch(request, env, ctx): Promise<Response> {
		let { pathname } = new URL(request.url);
		return new Response(await router(normalize(pathname), env.DATA, env.SETTINGS), {
			headers: {
				"content-type": "text/html;charset=UTF-8"
			}
		});
	}
} satisfies ExportedHandler<Env>;
