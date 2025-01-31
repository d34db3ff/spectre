import Handlebars from 'handlebars'
import moment from 'moment'

export default function () {
  // ===== register helpers ======
  Handlebars.registerHelper('asset', (path) =>
    (path == 'favicon.ico') ? '/'.concat(path) : '/assets/'.concat(path)
  );
  Handlebars.registerHelper('date', (...attrs) => {
    const options = attrs.pop();
    
    let date;
    if ('ctime' in options.hash) {
      date = options.hash['ctime'];
    } else {
      date = Date();
    }
    return moment(date).format(options.hash['format']);
  });
  
  Handlebars.registerHelper('excerpt', (text) => 
    Object.is(text, null) ? null : text.substring(0, 140)
  );
  Handlebars.registerHelper('url', (url) =>
    url.startsWith('/') ? url : "/".concat(url)
  );
  Handlebars.registerHelper('page_url', (page) =>
    (page == 1) ? '/' : '/page/'.concat(page)
  );
}
