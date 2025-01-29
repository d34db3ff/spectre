import Handlebars from 'handlebars';
// import asciidoctor from 'asciidoctor'
import init_hbs from './hbs_tpl.compiled'
import register_helpers from './hbs_helpers'
// const Asciidoctor = asciidoctor()

interface Env {
	data: KVNamespace;
	settings: KVNamespace;
}

async function router(path, data, settings) {
	if (path === '/' || path.startsWith("/page/")) {
		return handle_index(path, data, settings);
	} else if (path === '/portal/' || path === '/about/') {
		// TODO: find a better way to distinguish pages from posts.
		return handle_page(path, data, settings);
	} else {
		return handle_post(path, data, settings);
	}
}

async function handle_index(path, data, settings) {
	const site = JSON.parse(await settings.get("site"));
	const navigation = JSON.parse(await settings.get("navigation"));
	const posts = JSON.parse(await settings.get("posts"));
	let page_data;
	if (path === '/') {
		page_data = JSON.parse(await data.get(path));
	} else {
		page_data = JSON.parse(await data.get(path));
		// TODO: handle pagination
	}
	return Handlebars.templates['index.hbs']({ "page": page_data.page, posts, site, navigation });
}

async function handle_page(path, data, settings) {
	const site = JSON.parse(await settings.get("site"));
	const navigation = JSON.parse(await settings.get("navigation"));
	const page_data = JSON.parse(await data.get(path));
	const post = page_data.post;
	const page = page_data.page;

	return Handlebars.templates['page.hbs']({ page, post, site, navigation });
}

async function handle_post(path, data, settings) {
	const site = JSON.parse(await settings.get("site"));
	const navigation = JSON.parse(await settings.get("navigation"));
	const page_data = JSON.parse(await data.get(path));
	const post = page_data.post;
	const page = page_data.page;

	return Handlebars.templates['post.hbs']({ page, post, site, navigation });
}

init_hbs();
register_helpers();

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const { pathname } = new URL(request.url);
		return new Response(await router(pathname, env.DATA, env.SETTINGS), {
			headers: {
				"content-type": "text/html;charset=UTF-8"
			}
		});
	}
} satisfies ExportedHandler<Env>;
