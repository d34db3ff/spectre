import Handlebars from 'handlebars'

export default function () {
  // ===== templates =======
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <title>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? lookupProperty(stack1,"meta_title") : stack1), depth0))
    + "</title>\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"shortcut icon\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"favicon.ico",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":13,"column":36},"end":{"line":13,"column":59}}}))
    + "\">\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"css/screen.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":16,"column":49},"end":{"line":16,"column":75}}}))
    + "\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"css/patch.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":74}}}))
    + "\" />\n\n</head>\n<body class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? lookupProperty(stack1,"body_class") : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"navigation"),depth0,{"name":"navigation","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"site-wrapper\">\n\n        <header class=\"main-header\" style=\"background-image: url('/assets/img/dusk.webp')\">\n            <nav class=\"main-nav overlay clearfix\">\n               <label class=\"menu-button icon-menu\" for=\"nav-switch\"><span class=\"word\">菜单</span></label>\n            </nav>\n            <div class=\"vertical\">\n                <div class=\"main-header-content inner\">\n                    <h1 class=\"page-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\n                    <h2 class=\"page-description\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</h2>\n                </div>\n            </div>\n            <a class=\"scroll-down icon-arrow-left\" href=\"#content\" data-offset=\"-45\"></a>\n        </header>\n\n        <main id=\"content\" class=\"content\" role=\"main\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"loop"),depth0,{"name":"loop","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        </main>\n\n        <footer class=\"site-footer clearfix\">\n            <section class=\"copyright\"><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</a> &copy; "
    + alias2(lookupProperty(helpers,"date").call(alias3,{"name":"date","hash":{"format":"YYYY"},"data":data,"loc":{"start":{"line":47,"column":88},"end":{"line":47,"column":110}}}))
    + "</section>\n	    <section class=\"poweredby\">Proudly published with <a href=\"https://ghost.org\">Ghost</a> &amp; Modified by Minty </br> <noscript>This website is JavaScript-Free™ </noscript></section>\n        </footer>\n\n    </div>\n\n</body>\n</html>\n\n";
},"usePartial":true,"useData":true});
templates['page.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "overlay";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <title>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? lookupProperty(stack1,"meta_title") : stack1), depth0))
    + "</title>\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"shortcut icon\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"favicon.ico",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":13,"column":36},"end":{"line":13,"column":59}}}))
    + "\">\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"css/screen.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":16,"column":49},"end":{"line":16,"column":75}}}))
    + "\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"css/patch.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":74}}}))
    + "\" />\n\n</head>\n<body class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? lookupProperty(stack1,"body_class") : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"navigation"),depth0,{"name":"navigation","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"site-wrapper\">\n\n    <header class=\"main-header post-head no-cover\">\n        <nav class=\"main-nav "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":29},"end":{"line":26,"column":64}}})) != null ? stack1 : "")
    + " clearfix\">\n                <label class=\"menu-button icon-menu\" for=\"nav-switch\"><span class=\"word\">菜单</span></label>\n        </nav>\n    </header>\n\n    <main class=\"content\" role=\"main\">\n        <article class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? lookupProperty(stack1,"post_class") : stack1), depth0))
    + "\">\n\n            <header class=\"post-header\">\n                <h1 class=\"post-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\n            </header>\n\n            <section class=\"post-content\">\n                "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? lookupProperty(stack1,"html") : stack1), depth0)) != null ? stack1 : "")
    + "\n            </section>\n\n        </article>\n    </main>\n\n        <footer class=\"site-footer clearfix\">\n            <section class=\"copyright\"><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</a> &copy; "
    + alias2(lookupProperty(helpers,"date").call(alias3,{"name":"date","hash":{"format":"YYYY"},"data":data,"loc":{"start":{"line":46,"column":88},"end":{"line":46,"column":110}}}))
    + "</section>\n	    <section class=\"poweredby\">Proudly published with <a href=\"https://ghost.org\">Ghost</a> &amp; Modified by Minty </br> <noscript>This website is JavaScript-Free™ </noscript></section>\n        </footer>\n\n    </div>\n\n</body>\n</html>\n";
},"usePartial":true,"useData":true});
templates['post.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\" style=\"background-image: url("
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"img_url") : depth0), depth0))
    + ")";
},"3":function(container,depth0,helpers,partials,data) {
    return "no-cover";
},"5":function(container,depth0,helpers,partials,data) {
    return "overlay";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <title>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? lookupProperty(stack1,"meta_title") : stack1), depth0))
    + "</title>\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"shortcut icon\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"favicon.ico",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":13,"column":36},"end":{"line":13,"column":59}}}))
    + "\">\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"css/screen.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":16,"column":49},"end":{"line":16,"column":75}}}))
    + "\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias2(lookupProperty(helpers,"asset").call(alias3,"css/patch.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":74}}}))
    + "\" />\n\n</head>\n<body class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? lookupProperty(stack1,"body_class") : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"navigation"),depth0,{"name":"navigation","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"site-wrapper\">\n\n        <header class=\"main-header post-head "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":25,"column":45},"end":{"line":25,"column":132}}})) != null ? stack1 : "")
    + "\">\n            <nav class=\"main-nav "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":33},"end":{"line":26,"column":68}}})) != null ? stack1 : "")
    + " clearfix\">\n                    <label class=\"menu-button icon-menu\" for=\"nav-switch\"><span class=\"word\">菜单</span></label>\n            </nav>\n        </header>\n\n        <main class=\"content\" role=\"main\">\n            <article class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? lookupProperty(stack1,"post_class") : stack1), depth0))
    + "\">\n\n                <header class=\"post-header\">\n                    <h1 class=\"post-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\n                    <section class=\"post-meta\">\n                        <time class=\"post-date\" datetime=\""
    + alias2(lookupProperty(helpers,"date").call(alias3,{"name":"date","hash":{"format":"YYYY-MM-DD"},"data":data,"loc":{"start":{"line":37,"column":58},"end":{"line":37,"column":86}}}))
    + "\">"
    + alias2(lookupProperty(helpers,"date").call(alias3,{"name":"date","hash":{"format":"YYYY/MM/DD"},"data":data,"loc":{"start":{"line":37,"column":88},"end":{"line":37,"column":116}}}))
    + "</time>\n                    </section>\n                </header>\n\n                <section class=\"post-content\">\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? lookupProperty(stack1,"html") : stack1), depth0)) != null ? stack1 : "")
    + "\n                </section>\n\n                <footer class=\"post-footer\">\n                    <!-- The Ultimate Comment System from Web 5.0 -->\n                    <div id=\"comment\">\n                       <a href=\"mailto:the@stella.observer?subject=[COMMENT] "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\">\n                           <button type=\"button\" class=\"subscribe-button\">&gt; Send Me a Comment</button>\n                       </a> \n                    </div>\n                    <noscript>The Ultimate Comment System from Web 5.0.</noscript>\n                </footer>\n            </article>\n        </main>\n\n        <footer class=\"site-footer clearfix\">\n            <section class=\"copyright\"><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</a> &copy; "
    + alias2(lookupProperty(helpers,"date").call(alias3,{"name":"date","hash":{"format":"YYYY"},"data":data,"loc":{"start":{"line":58,"column":88},"end":{"line":58,"column":110}}}))
    + "</section>\n	    <section class=\"poweredby\">Proudly published with <a href=\"https://ghost.org\">Ghost</a> &amp; Modified by Minty </br> <noscript>This website is JavaScript-Free™ </noscript></section>\n        </footer>\n\n    </div>\n\n</body>\n</html>\n";
},"usePartial":true,"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['loop'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"post_class") : depth0), depth0))
    + "\">\n    <header class=\"post-header\">\n        <h2 class=\"post-title\"><a href=\""
    + alias2(lookupProperty(helpers,"url").call(alias3,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":10,"column":40},"end":{"line":10,"column":47}}}))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0)) != null ? stack1 : "")
    + "</a></h2>\n    </header>\n    <section class=\"post-excerpt\">\n        <p>"
    + alias2(lookupProperty(helpers,"excerpt").call(alias3,{"name":"excerpt","hash":{"characters":"140"},"data":data,"loc":{"start":{"line":13,"column":11},"end":{"line":13,"column":39}}}))
    + " <a class=\"read-more\" href=\""
    + alias2(lookupProperty(helpers,"url").call(alias3,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":13,"column":67},"end":{"line":13,"column":74}}}))
    + "\">&raquo;</a></p>\n    </section>\n    <footer class=\"post-meta\">\n        "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"authors") : depth0), depth0))
    + "\n        <time class=\"post-date\" datetime=\""
    + alias2(lookupProperty(helpers,"date").call(alias3,{"name":"date","hash":{"format":"YYYY-MM-DD"},"data":data,"loc":{"start":{"line":17,"column":42},"end":{"line":17,"column":70}}}))
    + "\">"
    + alias2(lookupProperty(helpers,"date").call(alias3,{"name":"date","hash":{"format":"YYYY-MM-DD"},"data":data,"loc":{"start":{"line":17,"column":72},"end":{"line":17,"column":100}}}))
    + "</time>\n    </footer>\n</article>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"extra-pagination inner\">\n    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"pagination") : depth0), depth0))
    + "\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"posts") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"pagination") : depth0), depth0))
    + "\n";
},"useData":true});
Handlebars.partials['navigation'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"current") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":54}}})) != null ? stack1 : "")
    + "><a href=\""
    + alias2(lookupProperty(helpers,"url").call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":9,"column":64},"end":{"line":9,"column":71}}}))
    + "\">"
    + alias2(container.lambda((depth0 != null ? lookupProperty(depth0,"label") : depth0), depth0))
    + "</a></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"nav-current\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input hidden type=\"checkbox\" id=\"nav-switch\">\n<nav class=\"nav\">\n<h3 class=\"nav-title\">菜单</h3>\n<label class=\"nav-close\" for=\"nav-switch\">\n<span class=\"hidden\">关闭</span>\n</label>\n<ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"navigation") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n<a class=\"subscribe-button icon-feed\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "/rss/\">订阅</a>\n</nav>\n<label class=\"nav-cover\" for=\"nav-switch\"></label>\n";
},"useData":true});
Handlebars.partials['pagination'] = template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a class=\"newer-posts\" href=\""
    + container.escapeExpression(lookupProperty(helpers,"page_url").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"prev") : depth0),{"name":"page_url","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":54}}}))
    + "\">&larr; 上一页</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a class=\"older-posts\" href=\""
    + container.escapeExpression(lookupProperty(helpers,"page_url").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"next") : depth0),{"name":"page_url","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":54}}}))
    + "\">下一页 &rarr;</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"pagination\" role=\"navigation\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"prev") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":11}}})) != null ? stack1 : "")
    + "    <span class=\"page-number\">第 "
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"page") : depth0), depth0))
    + " 页 &frasl; 共 "
    + alias3(alias2((depth0 != null ? lookupProperty(depth0,"pages") : depth0), depth0))
    + " 页</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"next") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "</nav>";
},"useData":true});
})();
}