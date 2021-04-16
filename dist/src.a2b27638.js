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
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

var _data = _interopRequireDefault(require("./data"));

var _result = _interopRequireDefault(require("./result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        parentOwner: current.productOwner,
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
      parentOwner: current.productOwner,
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

console.log(res); // const transformData = (data) => {
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
},{"./styles.css":"src/styles.css","./data":"src/data.js","./result":"src/result.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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