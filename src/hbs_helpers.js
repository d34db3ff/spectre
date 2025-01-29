import Handlebars  from 'handlebars'

export default function () {
  // ===== register helpers ======
  Handlebars.registerHelper('asset', function (path){
    return '/assets/' + path;
  });
  Handlebars.registerHelper('date', function (){});
  Handlebars.registerHelper('excerpt', function (){
    return "114514";
  });
  Handlebars.registerHelper('page_url', function (){});
  Handlebars.registerHelper('url', function (){});
}
