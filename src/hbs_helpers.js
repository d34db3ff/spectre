import Handlebars from 'handlebars'
import moment from 'moment'
import _ from 'lodash'

export default function () {
  // ===== register helpers ======
  Handlebars.registerHelper('asset', (path) =>
    (path == 'favicon.ico') ? '/'.concat(path) : '/assets/'.concat(path)
  );
  Handlebars.registerHelper('date', (...attrs) => {
    const options = attrs.pop();
    let date;
    if (!_.isEmpty(attrs)){
      date = attrs.shift();
    } else {
      date = Date();
    }
    return moment(date).format(options.hash['format']);
  });
  
  Handlebars.registerHelper('excerpt', (text) => 
    text.substring(0, 140)
  );
  Handlebars.registerHelper('url', (url) =>
    url.startsWith('/') ? url : "/".concat(url)
  );
  Handlebars.registerHelper('page_url', (page) =>
    (page_url == 1) ? '/' : '/page/'.concat(page)
  );
}
