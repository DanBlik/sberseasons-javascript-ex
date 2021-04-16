// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [[{
  qText: "Lorem ipsum",
  qNum: "NaN",
  qElemNumber: 207,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dolor sit",
  qNum: "NaN",
  qElemNumber: 713,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consectetur adipisicing",
  qNum: "NaN",
  qElemNumber: 599,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD",
  qNum: "NaN",
  qElemNumber: 2533,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-558",
  qNum: "NaN",
  qElemNumber: 1191581,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Верстка страницы новостей",
  qNum: "NaN",
  qElemNumber: 1124187,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "1",
  qNum: 1,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "Lorem ipsum",
  qNum: "NaN",
  qElemNumber: 207,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dolor sit",
  qNum: "NaN",
  qElemNumber: 713,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consectetur adipisicing",
  qNum: "NaN",
  qElemNumber: 599,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-395",
  qNum: "NaN",
  qElemNumber: 2532,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Работы по созданию опросов",
  qNum: "NaN",
  qElemNumber: 2109,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-586",
  qNum: "NaN",
  qElemNumber: 1199182,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Авторизация в системе пользователем",
  qNum: "NaN",
  qElemNumber: 1131339,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "1",
  qNum: 1,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "Lorem ipsum",
  qNum: "NaN",
  qElemNumber: 207,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dolor sit",
  qNum: "NaN",
  qElemNumber: 713,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consectetur adipisicing",
  qNum: "NaN",
  qElemNumber: 599,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-450",
  qNum: "NaN",
  qElemNumber: 2535,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "MVP API-шлюз",
  qNum: "NaN",
  qElemNumber: 2111,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-436",
  qNum: "NaN",
  qElemNumber: 1191591,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Взаимодействие с СУДИР на стороне старой площадки",
  qNum: "NaN",
  qElemNumber: 1124197,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "1",
  qNum: 1,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "Lorem ipsum",
  qNum: "NaN",
  qElemNumber: 207,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dolor sit",
  qNum: "NaN",
  qElemNumber: 713,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consectetur adipisicing",
  qNum: "NaN",
  qElemNumber: 599,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-501",
  qNum: "NaN",
  qElemNumber: 2536,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Quo autem",
  qNum: "NaN",
  qElemNumber: 2112,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-503",
  qNum: "NaN",
  qElemNumber: 887190,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "deserunt porro",
  qNum: "NaN",
  qElemNumber: 838752,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "1",
  qNum: 1,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "Lorem ipsum",
  qNum: "NaN",
  qElemNumber: 207,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dolor sit",
  qNum: "NaN",
  qElemNumber: 713,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consectetur adipisicing",
  qNum: "NaN",
  qElemNumber: 599,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-533",
  qNum: "NaN",
  qElemNumber: 2534,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "eum blanditiis",
  qNum: "NaN",
  qElemNumber: 2110,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "S-SBERCROWD-534",
  qNum: "NaN",
  qElemNumber: 887167,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "quod consectetur",
  qNum: "NaN",
  qElemNumber: 838730,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "1",
  qNum: 1,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "facilis earum",
  qNum: "NaN",
  qElemNumber: 250,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "neque vel",
  qNum: "NaN",
  qElemNumber: 1011,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "doloremque laboriosam",
  qNum: "NaN",
  qElemNumber: 863,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore",
  qNum: "NaN",
  qElemNumber: 3161,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore-587",
  qNum: "NaN",
  qElemNumber: 886258,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "ex doloribus",
  qNum: "NaN",
  qElemNumber: 837843,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "7",
  qNum: 7,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "facilis earum",
  qNum: "NaN",
  qElemNumber: 250,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "neque vel",
  qNum: "NaN",
  qElemNumber: 1011,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "doloremque laboriosam",
  qNum: "NaN",
  qElemNumber: 863,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore",
  qNum: "NaN",
  qElemNumber: 3161,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore-584",
  qNum: "NaN",
  qElemNumber: 888533,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Тогл isV4TaskListEnabled",
  qNum: "NaN",
  qElemNumber: 840060,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "7",
  qNum: 7,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "facilis earum",
  qNum: "NaN",
  qElemNumber: 250,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "neque vel",
  qNum: "NaN",
  qElemNumber: 1011,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "doloremque laboriosam",
  qNum: "NaN",
  qElemNumber: 863,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore",
  qNum: "NaN",
  qElemNumber: 3161,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore-624",
  qNum: "NaN",
  qElemNumber: 890108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "at sed eligendi",
  qNum: "NaN",
  qElemNumber: 841542,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "7",
  qNum: 7,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "facilis earum",
  qNum: "NaN",
  qElemNumber: 250,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "neque vel",
  qNum: "NaN",
  qElemNumber: 1011,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "doloremque laboriosam",
  qNum: "NaN",
  qElemNumber: 863,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore",
  qNum: "NaN",
  qElemNumber: 3161,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore-401",
  qNum: "NaN",
  qElemNumber: 1137167,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "eligendi natus",
  qNum: "NaN",
  qElemNumber: 1073461,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "7",
  qNum: 7,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "facilis earum",
  qNum: "NaN",
  qElemNumber: 250,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "neque vel",
  qNum: "NaN",
  qElemNumber: 1011,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "doloremque laboriosam",
  qNum: "NaN",
  qElemNumber: 863,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore",
  qNum: "NaN",
  qElemNumber: 3161,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore-617",
  qNum: "NaN",
  qElemNumber: 1190918,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "a minus",
  qNum: "NaN",
  qElemNumber: 1123606,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "7",
  qNum: 7,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "facilis earum",
  qNum: "NaN",
  qElemNumber: 250,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "neque vel",
  qNum: "NaN",
  qElemNumber: 1011,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "doloremque laboriosam",
  qNum: "NaN",
  qElemNumber: 863,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore",
  qNum: "NaN",
  qElemNumber: 3161,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore-618",
  qNum: "NaN",
  qElemNumber: 1190920,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Est, quaerat natus maiores",
  qNum: "NaN",
  qElemNumber: 1123608,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "7",
  qNum: 7,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "facilis earum",
  qNum: "NaN",
  qElemNumber: 250,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "neque vel",
  qNum: "NaN",
  qElemNumber: 1011,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "doloremque laboriosam",
  qNum: "NaN",
  qElemNumber: 863,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore",
  qNum: "NaN",
  qElemNumber: 3161,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "unde-dolore-447",
  qNum: "NaN",
  qElemNumber: 1605203,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "itaque veritatis iusto",
  qNum: "NaN",
  qElemNumber: 1446735,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "7",
  qNum: 7,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "aliquam optio aspernatur",
  qNum: "NaN",
  qElemNumber: 456,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "sapiente earum",
  qNum: "NaN",
  qElemNumber: 387,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dicta-modi",
  qNum: "NaN",
  qElemNumber: 1688,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dicta-modi-359",
  qNum: "NaN",
  qElemNumber: 1199117,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Обсуждение 'Принципы SOLID'",
  qNum: "NaN",
  qElemNumber: 1131275,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "1",
  qNum: 1,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "aliquam optio aspernatur",
  qNum: "NaN",
  qElemNumber: 456,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "sapiente earum",
  qNum: "NaN",
  qElemNumber: 387,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dicta-modi-166",
  qNum: "NaN",
  qElemNumber: 1687,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "fugiat incidunt",
  qNum: "NaN",
  qElemNumber: 1428,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dicta-modi-168",
  qNum: "NaN",
  qElemNumber: 1559106,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: " Minima necessitatibus",
  qNum: "NaN",
  qElemNumber: 1413729,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "2",
  qNum: 2,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "aliquam optio aspernatur",
  qNum: "NaN",
  qElemNumber: 456,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "sapiente earum",
  qNum: "NaN",
  qElemNumber: 387,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dicta-modi-166",
  qNum: "NaN",
  qElemNumber: 1687,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "fugiat incidunt",
  qNum: "NaN",
  qElemNumber: 1428,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dicta-modi-175",
  qNum: "NaN",
  qElemNumber: 1559155,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "dolore cupiditate",
  qNum: "NaN",
  qElemNumber: 1413761,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "2",
  qNum: 2,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates",
  qNum: "NaN",
  qElemNumber: 991,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-190",
  qNum: "NaN",
  qElemNumber: 763101,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Администратор. Назначение руководителей",
  qNum: "NaN",
  qElemNumber: 719849,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "5",
  qNum: 5,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates",
  qNum: "NaN",
  qElemNumber: 991,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-199",
  qNum: "NaN",
  qElemNumber: 770558,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "aut praesentium",
  qNum: "NaN",
  qElemNumber: 726798,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "5",
  qNum: 5,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates",
  qNum: "NaN",
  qElemNumber: 991,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-200",
  qNum: "NaN",
  qElemNumber: 772963,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Оптимизация отчета Мониторинг приказов по сервису МОС",
  qNum: "NaN",
  qElemNumber: 729019,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "5",
  qNum: 5,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates",
  qNum: "NaN",
  qElemNumber: 991,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-136",
  qNum: "NaN",
  qElemNumber: 1419575,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "МОС: Ограничить возможность ввести ставки  15+",
  qNum: "NaN",
  qElemNumber: 1312952,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "5",
  qNum: 5,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates",
  qNum: "NaN",
  qElemNumber: 991,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-170",
  qNum: "NaN",
  qElemNumber: 1435252,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "ФОС: Роль «Руководитель ФК ФОС Банка»",
  qNum: "NaN",
  qElemNumber: 1322435,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "5",
  qNum: 5,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-16",
  qNum: "NaN",
  qElemNumber: 989,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Развитие сервиса Моделирование орг. структуры III квартал",
  qNum: "NaN",
  qElemNumber: 855,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-150",
  qNum: "NaN",
  qElemNumber: 742712,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "МОС: оптимизация согласующих и подписанта приказа",
  qNum: "NaN",
  qElemNumber: 700815,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "2",
  qNum: 2,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-16",
  qNum: "NaN",
  qElemNumber: 989,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Развитие сервиса Моделирование орг. структуры III квартал",
  qNum: "NaN",
  qElemNumber: 855,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-176",
  qNum: "NaN",
  qElemNumber: 746585,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "МОС:Актуал.-я бланка/фронта (нов.бренд)",
  qNum: "NaN",
  qElemNumber: 704371,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "2",
  qNum: 2,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-17",
  qNum: "NaN",
  qElemNumber: 990,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Развитие сервиса Моделирование орг. структуры IV квартал",
  qNum: "NaN",
  qElemNumber: 856,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-132",
  qNum: "NaN",
  qElemNumber: 756215,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "МОС: Копирование ШД с изменением полей (JC и разряд)",
  qNum: "NaN",
  qElemNumber: 713422,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "3",
  qNum: 3,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-17",
  qNum: "NaN",
  qElemNumber: 990,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Развитие сервиса Моделирование орг. структуры IV квартал",
  qNum: "NaN",
  qElemNumber: 856,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-125",
  qNum: "NaN",
  qElemNumber: 756300,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Отчёт 'Мониторинг приказов сервиса МОС'",
  qNum: "NaN",
  qElemNumber: 713501,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "3",
  qNum: 3,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-17",
  qNum: "NaN",
  qElemNumber: 990,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Развитие сервиса Моделирование орг. структуры IV квартал",
  qNum: "NaN",
  qElemNumber: 856,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-131",
  qNum: "NaN",
  qElemNumber: 758265,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "МОС: Калькулятор нормативных расходов",
  qNum: "NaN",
  qElemNumber: 715334,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "3",
  qNum: 3,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-21",
  qNum: "NaN",
  qElemNumber: 992,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Расширение функциональности объектов 'ФОС Банка'",
  qNum: "NaN",
  qElemNumber: 857,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-177",
  qNum: "NaN",
  qElemNumber: 747079,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "ФОС: Уведомления",
  qNum: "NaN",
  qElemNumber: 704829,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "2",
  qNum: 2,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "reprehenderit rem enim sed",
  qNum: "NaN",
  qElemNumber: 108,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "magnam incidunt",
  qNum: "NaN",
  qElemNumber: 270,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "consequatur nihil",
  qNum: "NaN",
  qElemNumber: 230,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-21",
  qNum: "NaN",
  qElemNumber: 992,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Расширение функциональности объектов 'ФОС Банка'",
  qNum: "NaN",
  qElemNumber: 857,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "repellendus-voluptates-193",
  qNum: "NaN",
  qElemNumber: 763004,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Оптимизация сервиса уведомлений для участников 'ФОС банка'",
  qNum: "NaN",
  qElemNumber: 719759,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Story",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "2",
  qNum: 2,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "dolores quasi laudantium",
  qNum: "NaN",
  qElemNumber: 263,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Ad quasi facilis nobis",
  qNum: "NaN",
  qElemNumber: 1167,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Ad quasi facilis nobis",
  qNum: "NaN",
  qElemNumber: 1000,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "quia-voluptatem",
  qNum: "NaN",
  qElemNumber: 3336,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "quia-voluptatem-40",
  qNum: "NaN",
  qElemNumber: 1553569,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Разворачивание инфраструктуры для разработки в Альфе",
  qNum: "NaN",
  qElemNumber: 1409500,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "3",
  qNum: 3,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "dolores quasi laudantium",
  qNum: "NaN",
  qElemNumber: 263,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Ad quasi facilis nobis",
  qNum: "NaN",
  qElemNumber: 1167,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Ad quasi facilis nobis",
  qNum: "NaN",
  qElemNumber: 1000,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "quia-voluptatem",
  qNum: "NaN",
  qElemNumber: 3336,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "quia-voluptatem-44",
  qNum: "NaN",
  qElemNumber: 1556227,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "обновление справочников АС САБС",
  qNum: "NaN",
  qElemNumber: 1411463,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "3",
  qNum: 3,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}], [{
  qText: "dolores quasi laudantium",
  qNum: "NaN",
  qElemNumber: 263,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Кластер",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Ad quasi facilis nobis",
  qNum: "NaN",
  qElemNumber: 1167,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Команда",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Ad quasi facilis nobis",
  qNum: "NaN",
  qElemNumber: 1000,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Владелец продукта",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "quia-voluptatem",
  qNum: "NaN",
  qElemNumber: 3336,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Не вложены в фичу команды",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари Эпика",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Epic",
  qNum: "NaN",
  qElemNumber: 0,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип Эпик",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "quia-voluptatem-47",
  qNum: "NaN",
  qElemNumber: 1560354,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Ключ задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Интеграция ODBC между Hadoop и Qlik (DEV-стенды)",
  qNum: "NaN",
  qElemNumber: 1414698,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Саммари задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "Task",
  qNum: "NaN",
  qElemNumber: 1,
  qState: "O",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "dimension",
  qFallbackTitle: "Тип задачи",
  qMax: "NaN",
  qMin: "NaN",
  filterBy: null
}, {
  qText: "3",
  qNum: 3,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Закрытых задач в Фиче",
  qMax: 7,
  qMin: 1,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг Run",
  qMax: 0,
  qMin: 0,
  filterBy: null
}, {
  qText: "0",
  qNum: 0,
  qElemNumber: 0,
  qState: "L",
  qAttrExps: {
    qValues: [{
      qNum: "NaN"
    }]
  },
  qType: "measure",
  qFallbackTitle: "Флаг New",
  qMax: 0,
  qMin: 0,
  filterBy: null
}]];
exports.default = _default;
},{}],"src/result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  title: "Lorem ipsum",
  squads: [{
    title: "dolor sit",
    productOwner: "consectetur adipisicing",
    tagged: false,
    bound: "15% (mocked)",
    isRun: false,
    isNew: false,
    issues: [{
      data: {
        key: "S-SBERCROWD",
        title: "Не вложены в фичу команды",
        type: "Epic",
        qty: 1
      },
      children: [{
        data: {
          key: "S-SBERCROWD-558",
          title: "Верстка страницы новостей",
          type: "Task",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "S-SBERCROWD-395",
        title: "Работы по созданию опросов",
        type: "Epic",
        qty: 1
      },
      children: [{
        data: {
          key: "S-SBERCROWD-586",
          title: "Авторизация в системе пользователем",
          type: "Task",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "S-SBERCROWD-450",
        title: "MVP API-шлюз",
        type: "Epic",
        qty: 1
      },
      children: [{
        data: {
          key: "S-SBERCROWD-436",
          title: "Взаимодействие с СУДИР на стороне старой площадки",
          type: "Task",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "S-SBERCROWD-501",
        title: "Quo autem",
        type: "Epic",
        qty: 1
      },
      children: [{
        data: {
          key: "S-SBERCROWD-503",
          title: "deserunt porro",
          type: "Task",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "S-SBERCROWD-533",
        title: "eum blanditiis",
        type: "Epic",
        qty: 1
      },
      children: [{
        data: {
          key: "S-SBERCROWD-534",
          title: "quod consectetur",
          type: "Task",
          qty: 1
        }
      }]
    }]
  }]
}, {
  title: "facilis earum",
  squads: [{
    title: "neque vel",
    productOwner: "doloremque laboriosam",
    tagged: false,
    bound: "15% (mocked)",
    isRun: false,
    isNew: false,
    issues: [{
      data: {
        key: "unde-dolore",
        title: "Не вложены в фичу команды",
        type: "Epic",
        qty: 7
      },
      children: [{
        data: {
          key: "unde-dolore-587",
          title: "ex doloribus",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "unde-dolore-584",
          title: "Тогл isV4TaskListEnabled",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "unde-dolore-624",
          title: "at sed eligendi",
          type: "Task",
          qty: 1
        }
      }, {
        data: {
          key: "unde-dolore-401",
          title: "eligendi natus",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "unde-dolore-617",
          title: "a minus",
          type: "Task",
          qty: 1
        }
      }, {
        data: {
          key: "unde-dolore-618",
          title: "Est, quaerat natus maiores",
          type: "Task",
          qty: 1
        }
      }, {
        data: {
          key: "unde-dolore-447",
          title: "itaque veritatis iusto",
          type: "Task",
          qty: 1
        }
      }]
    }]
  }]
}, {
  title: "reprehenderit rem enim sed",
  squads: [{
    title: "aliquam optio aspernatur",
    productOwner: "sapiente earum",
    tagged: false,
    bound: "15% (mocked)",
    isRun: false,
    isNew: false,
    issues: [{
      data: {
        key: "dicta-modi",
        title: "Не вложены в фичу команды",
        type: "Epic",
        qty: 1
      },
      children: [{
        data: {
          key: "dicta-modi-359",
          title: "Обсуждение 'Принципы SOLID'",
          type: "Task",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "dicta-modi-166",
        title: "fugiat incidunt",
        type: "Epic",
        qty: 2
      },
      children: [{
        data: {
          key: "dicta-modi-168",
          title: " Minima necessitatibus",
          type: "Task",
          qty: 1
        }
      }, {
        data: {
          key: "dicta-modi-175",
          title: "dolore cupiditate",
          type: "Task",
          qty: 1
        }
      }]
    }]
  }, {
    title: "magnam incidunt",
    productOwner: "consequatur nihil",
    tagged: false,
    bound: "15% (mocked)",
    isRun: false,
    isNew: false,
    issues: [{
      data: {
        key: "repellendus-voluptates",
        title: "Не вложены в фичу команды",
        type: "Epic",
        qty: 5
      },
      children: [{
        data: {
          key: "repellendus-voluptates-190",
          title: "Администратор. Назначение руководителей",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-199",
          title: "aut praesentium",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-200",
          title: "Оптимизация отчета Мониторинг приказов по сервису МОС",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-136",
          title: "МОС: Ограничить возможность ввести ставки  15+",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-170",
          title: "ФОС: Роль «Руководитель ФК ФОС Банка»",
          type: "Story",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "repellendus-voluptates-16",
        title: "Развитие сервиса Моделирование орг. структуры III квартал",
        type: "Epic",
        qty: 2
      },
      children: [{
        data: {
          key: "repellendus-voluptates-150",
          title: "МОС: оптимизация согласующих и подписанта приказа",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-176",
          title: "МОС:Актуал.-я бланка/фронта (нов.бренд)",
          type: "Story",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "repellendus-voluptates-17",
        title: "Развитие сервиса Моделирование орг. структуры IV квартал",
        type: "Epic",
        qty: 3
      },
      children: [{
        data: {
          key: "repellendus-voluptates-132",
          title: "МОС: Копирование ШД с изменением полей (JC и разряд)",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-125",
          title: "Отчёт 'Мониторинг приказов сервиса МОС'",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-131",
          title: "МОС: Калькулятор нормативных расходов",
          type: "Story",
          qty: 1
        }
      }]
    }, {
      data: {
        key: "repellendus-voluptates-21",
        title: "Расширение функциональности объектов 'ФОС Банка'",
        type: "Epic",
        qty: 2
      },
      children: [{
        data: {
          key: "repellendus-voluptates-177",
          title: "ФОС: Уведомления",
          type: "Story",
          qty: 1
        }
      }, {
        data: {
          key: "repellendus-voluptates-193",
          title: "Оптимизация сервиса уведомлений для участников 'ФОС банка'",
          type: "Story",
          qty: 1
        }
      }]
    }]
  }]
}, {
  title: "dolores quasi laudantium",
  squads: [{
    title: "Ad quasi facilis nobis",
    productOwner: "Ad quasi facilis nobis",
    tagged: false,
    bound: "15% (mocked)",
    isRun: false,
    isNew: false,
    issues: [{
      data: {
        key: "quia-voluptatem",
        title: "Не вложены в фичу команды",
        type: "Epic",
        qty: 3
      },
      children: [{
        data: {
          key: "quia-voluptatem-40",
          title: "Разворачивание инфраструктуры для разработки в Альфе",
          type: "Task",
          qty: 1
        }
      }, {
        data: {
          key: "quia-voluptatem-44",
          title: "обновление справочников АС САБС",
          type: "Task",
          qty: 1
        }
      }, {
        data: {
          key: "quia-voluptatem-47",
          title: "Интеграция ODBC между Hadoop и Qlik (DEV-стенды)",
          type: "Task",
          qty: 1
        }
      }]
    }]
  }]
}];
exports.default = _default;
},{}],"node_modules/object-assign/index.js":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"node_modules/assert/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"node_modules/assert/node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/assert/node_modules/util/util.js":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = undefined || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = require('inherits');

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
},{"./support/isBuffer":"node_modules/assert/node_modules/util/support/isBufferBrowser.js","inherits":"node_modules/assert/node_modules/inherits/inherits_browser.js","process":"node_modules/process/browser.js"}],"node_modules/assert/assert.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';

var objectAssign = require('object-assign');

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"object-assign":"node_modules/object-assign/index.js","util/":"node_modules/assert/node_modules/util/util.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

var _data = _interopRequireDefault(require("./data"));

var _result = _interopRequireDefault(require("./result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = require('assert');

console.log(_data.default);
console.log(_result.default);

var res = _data.default.map(function (row) {
  return {
    cluster: row[0].qText,
    squad: row[1].qText,
    productOwner: row[2].qText,
    parentKey: row[3].qText,
    parentSummary: row[4].qText,
    parentType: row[5].qText,
    childKey: row[6].qText,
    childSummary: row[7].qText,
    childType: row[8].qText,
    childQty: row[9].qNum,
    isRun: Boolean(row[10].qNum),
    isNew: Boolean(row[11].qNum)
  };
}).reduce(function (acc, current) {
  var cluster = acc.find(function (cluster) {
    return cluster.title === current.cluster;
  });

  if (!cluster) {
    acc.push({
      title: current.cluster,
      squads: [{
        title: current.squad,
        isNew: current.isNew,
        isRun: current.isRun,
        bound: "15% (mocked)",
        productOwner: current.productOwner,
        tagged: false,
        issues: [{
          data: {
            key: current.parentKey,
            title: current.parentSummary,
            type: current.parentType,
            qty: current.childQty
          },
          children: [{
            data: {
              key: current.childKey,
              title: current.childSummary,
              type: current.childType,
              qty: 1
            }
          }]
        }]
      }]
    });
  }

  var squad = cluster === null || cluster === void 0 ? void 0 : cluster.squads.find(function (squad) {
    return squad.title === current.squad;
  });

  if (!squad) {
    cluster === null || cluster === void 0 ? void 0 : cluster.squads.push({
      title: current.squad,
      isNew: current.isNew,
      isRun: current.isRun,
      bound: "15% (mocked)",
      productOwner: current.productOwner,
      tagged: false,
      issues: [{
        data: {
          key: current.parentKey,
          title: current.parentSummary,
          type: current.parentType,
          qty: current.childQty
        },
        children: [{
          data: {
            key: current.childKey,
            title: current.childSummary,
            type: current.childType,
            qty: 1
          }
        }]
      }]
    });
  }

  var issue = squad === null || squad === void 0 ? void 0 : squad.issues.find(function (issue) {
    return issue.data.key === current.parentKey;
  });

  if (!issue) {
    squad === null || squad === void 0 ? void 0 : squad.issues.push({
      data: {
        key: current.parentKey,
        title: current.parentSummary,
        type: current.parentType,
        qty: current.childQty
      },
      children: [{
        data: {
          key: current.childKey,
          title: current.childSummary,
          type: current.childType,
          qty: 1
        }
      }]
    });
  }

  issue === null || issue === void 0 ? void 0 : issue.children.push({
    data: {
      key: current.childKey,
      title: current.childSummary,
      type: current.childType,
      qty: 1
    }
  }); // let issue = squad.issues.find(issue => issue.data.key === current.parentKey)
  // if (!issue) {
  //     issue = {
  //       data: {
  //         key: current.parentKey,
  //         title: current.parentSummary,
  //         type: current.parentType,
  //         qty: current.childQty,
  //       },
  //       children: []
  //     };
  //     squad.issues.push(issue)
  // }
  //let children = issue.find(child => )
  // acc.forEach((cluster) => {
  //     if (!cluster.squads.some(squad => squad.title === current.squad)) {
  //             cluster.squads.push({
  //                 title: current.squad,
  //                 isNew: current.isNew,
  //                 isRun: current.isRun,
  //                 issues: []
  //             })
  //     }
  // })
  // cluster.squads.forEach(squad => {
  //     if (!squad.issues.some(issue => issue["data"].key === current.parentKey)) {
  //             squad.issues.push({
  //                  data: {
  //                     key: current.parentKey,
  //                     title: current.parentSummary,
  //                     type: current.parentType,
  //                     qty: current.childQty
  //                  }, 
  //                  children: [],
  //             })
  //     }             
  // })
  // squad.issues.forEach(issue => {
  //     if (!squad.issues.some(issue => issue["children"].key === current.childKey)) {
  //         issue.children.push({
  //             data: {
  //                 key: current.childKey,
  //                 title: current.childSummary,
  //                 type: current.childType
  //              }
  //         })
  //     }
  // })

  return acc;
}, []);

console.log(res);
console.log(assert.deepStrictEqual(10, _result.default)); // const transformData = (data) => {
//     return data.map(el => {
//         return {
//             title: el[0].qText,
//             squads: {
//                 title: el[1].qText,
//                 productOwner: el[2].qText,
//                 bound: "15% (mocked)",
//                 isNew: Boolean(el[11].qNum),
//                 isRun: Boolean(el[10].qNum),
//                 issues: [{ // тут должен быть массив нескольких объектов
//                     data: {
//                         type: el[5].qText,
//                         key: el[3].qText,
//                         qty: el[9].qText,
//                         title: el[4].qText
//                     },
//                     children: [{
//                         key: el[6].qText,
//                         qty: el[9].qText,
//                         title: el[7].qText,
//                         type: el[8].qText
//                     }]
//                 }]
//             }
//         }
//     })
// }
// console.log(transformData(Data))
},{"./styles.css":"src/styles.css","./data":"src/data.js","./result":"src/result.js","assert":"node_modules/assert/assert.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52018" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map