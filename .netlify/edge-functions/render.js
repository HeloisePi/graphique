var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/ssr.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component10) {
  current_component = component10;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component10, name) {
  if (!component10 || !component10.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component10;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css12) => css12.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index10 = 0;
      while (index10 < str.length) {
        var eqIdx = str.indexOf("=", index10);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index10);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index10 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index10, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index10 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var css$2, HeaderMobile, css$1, Header, css, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    css$2 = {
      code: ".headershow.svelte-1tbacnn .active.svelte-1tbacnn{display:block}.hamburger.svelte-1tbacnn.svelte-1tbacnn{display:none}.cross.svelte-1tbacnn.svelte-1tbacnn{display:none}.menu.svelte-1tbacnn.svelte-1tbacnn{width:3rem;height:3rem;position:absolute;right:1rem}.menu.svelte-1tbacnn img.svelte-1tbacnn{width:100%;height:100%}.headermobile.svelte-1tbacnn.svelte-1tbacnn{top:0;left:0;z-index:3;position:fixed}.headershow.svelte-1tbacnn.svelte-1tbacnn{height:70px;width:100vw;display:flex;justify-content:space-between;align-items:center;border:1px solid black;padding:1rem;z-index:4}.blur.svelte-1tbacnn.svelte-1tbacnn{z-index:3;position:fixed;top:0;width:100vw;height:70px;-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:blur(10px);backdrop-filter:blur(10px)}.toggle.svelte-1tbacnn.svelte-1tbacnn{width:3rem;height:3rem;z-index:100}.logo.svelte-1tbacnn.svelte-1tbacnn{width:4rem;height:fit-content}.close.svelte-1tbacnn.svelte-1tbacnn{transform:translateX(100%)}.slide.svelte-1tbacnn.svelte-1tbacnn{background-color:white;height:100vh;width:50vw;right:0;position:absolute;padding:5%;display:flex;flex-direction:column;gap:1rem}a.svelte-1tbacnn.svelte-1tbacnn{color:black}",
      map: null
    };
    HeaderMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$2);
      return `<div class="blur svelte-1tbacnn"></div> <header class="headermobile svelte-1tbacnn" data-svelte-h="svelte-wnz6fq"><div class="headershow svelte-1tbacnn"><a href="../../" class="svelte-1tbacnn"><img class="logo svelte-1tbacnn" src="/images/logo.webp" alt="logo"></a> <div class="toggle svelte-1tbacnn"></div> <div class="menu svelte-1tbacnn"><img class="hamburger active svelte-1tbacnn" src="/images/logo/hamburger.svg" alt="hamburger menu"> <img class="cross svelte-1tbacnn" src="/images/logo/cross.svg" alt="cross menu"></div></div> <div class="slide close svelte-1tbacnn"><a class="close-menu svelte-1tbacnn" href="../saga"><p>La Saga</p></a> <a class="close-menu svelte-1tbacnn" href="../creationSerge"><p>Les Cr\xE9ations de Serge</p></a> <a class="close-menu svelte-1tbacnn" href="../#about"><p>Qui sommes nous ?</p></a> <a class="close-menu svelte-1tbacnn" href="../#contact"><p>Contact</p></a></div> </header>`;
    });
    css$1 = {
      code: "header.svelte-671zye{display:flex;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid black ;position:fixed;width:100vw;z-index:4}img.svelte-671zye{width:4rem}.link.svelte-671zye{display:flex;gap:2rem}.blur.svelte-671zye{z-index:3;position:fixed;top:0;width:100vw;height:70px;-webkit-filter:blur(10px);-moz-filter:blur(10px);-o-filter:blur(10px);-ms-filter:blur(10px);filter:blur(10px);backdrop-filter:blur(10px)}a.svelte-671zye{color:black}",
      map: null
    };
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$1);
      return `<div class="blur svelte-671zye"></div> <header class="svelte-671zye" data-svelte-h="svelte-1ubqjcc"><a href="../../" class="svelte-671zye"><img src="/images/logo.webp" alt="logo" class="svelte-671zye"></a> <div class="link svelte-671zye"><a href="../saga" class="svelte-671zye"><p>La Saga</p></a> <a href="../creationSerge" class="svelte-671zye"><p>Les Cr\xE9ations de Serge</p></a> <a href="../#about" class="svelte-671zye"><p>Qui sommes nous ?</p></a> <a href="../#contact" class="svelte-671zye"><p>Contact</p></a></div> </header>`;
    });
    css = {
      code: "main.svelte-49j5jp.svelte-49j5jp{background-image:url(/images/background.webp);background-size:cover;background-size:unset;background-repeat:repeat}footer.svelte-49j5jp.svelte-49j5jp{border-top:1px solid black;height:3rem;display:flex;justify-content:center;align-items:center;text-align:center}.headerMobile.svelte-49j5jp.svelte-49j5jp{display:none}@media screen and (max-width: 500px){footer.svelte-49j5jp p.svelte-49j5jp{font-size:14px}}@media screen and (max-width: 870px){.headerMobile.svelte-49j5jp.svelte-49j5jp{display:block}.headerdesktop.svelte-49j5jp.svelte-49j5jp{display:none}}",
      map: null
    };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<div class="app"><div class="headerdesktop svelte-49j5jp">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div> <div class="headerMobile svelte-49j5jp">${validate_component(HeaderMobile, "HeaderMobile").$$render($$result, {}, {}, {})}</div> <main class="svelte-49j5jp">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-49j5jp" data-svelte-h="svelte-6vf5i4"><p class="svelte-49j5jp">\xA9 2023 - Tous droits r\xE9serv\xE9s \xE0 la team Pinpin  - Mentions l\xE9gales</p></footer> </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    imports = ["_app/immutable/nodes/0.1f37054f.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js"];
    stylesheets = ["_app/immutable/assets/0.b6e381f5.css"];
    fonts = ["_app/immutable/assets/Montserrat-Regular.c3fb0280.ttf", "_app/immutable/assets/Branch.ad3f0f9a.ttf"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_ssr();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.4e24ffb8.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/singletons.ce0d6404.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.js
var page_exports = {};
var init_page = __esm({
  ".svelte-kit/output/server/entries/pages/_page.js"() {
  }
});

// .svelte-kit/output/server/chunks/Bouton.js
var css2, Bouton;
var init_Bouton = __esm({
  ".svelte-kit/output/server/chunks/Bouton.js"() {
    init_ssr();
    css2 = {
      code: 'a.svelte-3od14j{text-decoration:none;height:fit-content;width:fit-content;position:relative}a.svelte-3od14j::before{content:"";bottom:-0.25rem;position:absolute;background-color:black;width:100%;height:1px;transition:width 0.35s ease-out}a.svelte-3od14j:hover::before{background-color:#D7B764;width:5px}p.svelte-3od14j{color:black;transition:0.35s ease-out}p.svelte-3od14j:hover{color:#D7B764}',
      map: null
    };
    Bouton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { src } = $$props;
      if ($$props.src === void 0 && $$bindings.src && src !== void 0)
        $$bindings.src(src);
      $$result.css.add(css2);
      return `<a${add_attribute("href", src, 0)} class="svelte-3od14j"><p class="svelte-3od14j">${slots.default ? slots.default({}) : ``} &gt;</p> </a>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css$5, About, css$4, Contact, css$3, CreationSerge, css$22, Hero, css$12, Saga, css3, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_ssr();
    init_Bouton();
    css$5 = {
      code: "section.svelte-tja097.svelte-tja097{padding-top:10rem;width:40vw;margin:auto;display:flex;flex-direction:column;gap:3rem}h2.svelte-tja097.svelte-tja097{text-align:center}.people.svelte-tja097.svelte-tja097{display:flex;justify-content:space-between}.people.svelte-tja097 div.svelte-tja097{display:flex;flex-direction:column;align-items:center}.people.svelte-tja097 p.svelte-tja097{text-align:center}img.svelte-tja097.svelte-tja097{width:15vw}@media screen and (max-width: 1100px){section.svelte-tja097.svelte-tja097{width:50vw}}@media screen and (max-width: 800px){section.svelte-tja097.svelte-tja097{width:60vw}img.svelte-tja097.svelte-tja097{width:20vw}}@media screen and (max-width: 600px){section.svelte-tja097.svelte-tja097{width:70vw}}@media screen and (max-width: 490px){section.svelte-tja097.svelte-tja097{width:90vw}}",
      map: null
    };
    About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$5);
      return `<section id="about" class="svelte-tja097" data-svelte-h="svelte-1ufvs8m"><h2 class="svelte-tja097">Qui sommes nous ?</h2> <div class="people svelte-tja097"><div class=" svelte-tja097"><img src="/images/mariane.webp" alt="Mariane" class="svelte-tja097"> <p class="svelte-tja097">Mariane Gahengi</p></div> <div class=" svelte-tja097"><img src="/images/serge.webp" alt="Serge" class="svelte-tja097"> <p class="svelte-tja097">Serge Pingitore</p></div></div> <p>La Team Pinpin est 
        compos\xE9e d\u2019un fr\xE8re et d\u2019une soeur ainsi que de la fille de cette derni\xE8re.
         En travaillant ensemble sur leur projet litt\xE9raire et artistique, ils ont
          pu cr\xE9er des histoires plus vivantes et m\xE9morables, ainsi que renforcer les
           th\xE8mes et les \xE9motions pr\xE9sents dans le texte. 
        Team Pinpin est le r\xE9sultat d\u2019une exp\xE9rience familiale enrichissante et complice.</p> </section>`;
    });
    css$4 = {
      code: "section.svelte-hn8fhu.svelte-hn8fhu{padding-top:10rem;width:40vw;margin:auto;display:flex;flex-direction:column;gap:2rem}.line.svelte-hn8fhu.svelte-hn8fhu{position:absolute;width:100vw;left:0;transform:translateY(-15rem)}h2.svelte-hn8fhu.svelte-hn8fhu{text-align:center}a.svelte-hn8fhu.svelte-hn8fhu{text-align:center;color:black}p.svelte-hn8fhu.svelte-hn8fhu{margin-bottom:1rem}.logo.svelte-hn8fhu.svelte-hn8fhu{display:flex;gap:2rem}.sale.svelte-hn8fhu div.svelte-hn8fhu{display:flex;align-items:end}@media screen and (max-width: 1100px){section.svelte-hn8fhu.svelte-hn8fhu{width:50vw}}@media screen and (max-width: 800px){section.svelte-hn8fhu.svelte-hn8fhu{width:60vw}}@media screen and (max-width: 600px){section.svelte-hn8fhu.svelte-hn8fhu{width:70vw}}@media screen and (max-width: 490px){section.svelte-hn8fhu.svelte-hn8fhu{width:90vw}.logoImg.svelte-hn8fhu.svelte-hn8fhu{width:2rem}.descriptionLogo.svelte-hn8fhu.svelte-hn8fhu{font-size:12px}.linkExterneImg.svelte-hn8fhu.svelte-hn8fhu{width:0.5rem}.logo.svelte-hn8fhu.svelte-hn8fhu{gap:1rem}}",
      map: null
    };
    Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$4);
      return `<section id="contact" class="svelte-hn8fhu" data-svelte-h="svelte-gd8pky"><img class="line svelte-hn8fhu" src="/images/line/line1.svg" alt="Line"> <h2 class="svelte-hn8fhu">Contact</h2> <p class="svelte-hn8fhu">Si vous avez des questions, des commentaires ou des id\xE9es \xE0 partager,
         n\u2019h\xE9sitez pas \xE0 nous contacter. Nous serions ravis d\u2019\xE9changer avec vous!</p> <div class="teampinpin"><p class="svelte-hn8fhu">La team Pinpin</p> <div class="logo svelte-hn8fhu"><a href="https://www.linkedin.com/in/marianegahengi/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/linkedin.svg" alt="linkedin de la team Pinpin"> <p class="descriptionLogo svelte-hn8fhu">Linkedin <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="mariane.gahengi@gmail.com" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/mail.svg" alt="mail d'un des membres de la team Pinpin"> <p class="descriptionLogo svelte-hn8fhu">Mail <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a></div></div> <div class="mariane right"><p class="svelte-hn8fhu">Mariane Gahengi</p> <div class="logo svelte-hn8fhu"><a href="mariane.gahengi@gmail.com" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/mail.svg" alt="mail de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">Mail <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="https://www.linkedin.com/in/marianegahengi/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/linkedin.svg" alt="linkedin de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">Linkedin <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="https://www.facebook.com/people/Mariane-Gahengi/pfbid036EWt4qbs9QmZ94SsWNMfCk4Edrr12hiLbRw4kvvS9keofi9sGvrQrYXDqemEnDMLl/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/facebook.svg" alt="facebook de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">Facebook <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="https://www.instagram.com/marianegahengi/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/instagram.svg" alt="instagram de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">Instagram <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a></div></div> <div class="sale right svelte-hn8fhu"><p class="svelte-hn8fhu">En vente sur :</p> <div class="logo svelte-hn8fhu"><a href="https://www.amazon.fr/m%C3%A9daillons-oubli%C3%A9s-Mariane-Gahengi/dp/2384411195/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Z11S9AI77GKY&keywords=les+m%C3%A9daillons+oubli%C3%A9s&qid=1683803969&sprefix=les+m%C3%A9daillons+oubli%C3%A9s%2Caps%2C119&sr=8-1" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/amazon.svg" alt="amazon"> <p class="descriptionLogo svelte-hn8fhu">Amazon <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="https://www.editions-maia.com/livre/quatre-1-les-medaillons-oublies/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/maya.svg" alt="maya"> <p class="descriptionLogo svelte-hn8fhu">\xC9dition maya <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a></div></div> <div class="serge"><p class="svelte-hn8fhu">Serge Pingitore</p> <div class="logo svelte-hn8fhu"><a href="mariane.gahengi@gmail.com" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/mail.svg" alt="mail de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">Mail <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="https://www.linkedin.com/in/marianegahengi/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/linkedin.svg" alt="linkedin de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">LinkedIn <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="https://www.facebook.com/people/Mariane-Gahengi/pfbid036EWt4qbs9QmZ94SsWNMfCk4Edrr12hiLbRw4kvvS9keofi9sGvrQrYXDqemEnDMLl/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/facebook.svg" alt="facebook de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">Facebook <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a> <a href="https://www.instagram.com/marianegahengi/" class="svelte-hn8fhu"><img class="logoImg svelte-hn8fhu" src="images/logo/instagram.svg" alt="instagram de Mariane Gahengi"> <p class="descriptionLogo svelte-hn8fhu">Instagram <img class="linkExterneImg svelte-hn8fhu" src="/images/logo/externe.svg" alt="lien externe"></p></a></div></div> </section>`;
    });
    css$3 = {
      code: "section.svelte-13h6nf1.svelte-13h6nf1{padding-top:10rem}h2.svelte-13h6nf1.svelte-13h6nf1{text-align:center}.contenaireCreationSerge.svelte-13h6nf1.svelte-13h6nf1{border:1px solid  #D7B764;padding:2rem;width:70vw;margin:auto;display:flex;flex-direction:column;align-items:center;gap:2rem;background-color:white;background-image:url(/images/background.webp);background-size:cover;background-size:unset;background-repeat:repeat}.imageTableau.svelte-13h6nf1.svelte-13h6nf1{display:flex;gap:4rem}.imageTableau.svelte-13h6nf1 img.svelte-13h6nf1{width:15vw}.line.svelte-13h6nf1.svelte-13h6nf1{position:absolute;width:100vw;transform:translateY(-30rem);z-index:-1}@media screen and (max-width: 950px){.imageTableau.svelte-13h6nf1 .tableau2.svelte-13h6nf1{transform:scale(110%);z-index:1;width:10rem}.imageTableau.svelte-13h6nf1 .tableau1.svelte-13h6nf1{transform:translate(6rem, 1rem);width:10rem}.imageTableau.svelte-13h6nf1 .tableau3.svelte-13h6nf1{transform:translate(-6rem, 1rem);width:10rem;z-index:0}}@media screen and (max-width: 645px){.contenaireCreationSerge.svelte-13h6nf1.svelte-13h6nf1{padding:1rem;gap:2rem;width:90vw}}@media screen and (max-width: 525px){.imageTableau.svelte-13h6nf1 .tableau1.svelte-13h6nf1,.imageTableau.svelte-13h6nf1 .tableau2.svelte-13h6nf1,.imageTableau.svelte-13h6nf1 .tableau3.svelte-13h6nf1{width:30vw}}",
      map: null
    };
    CreationSerge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$3);
      return `<section id="creationSerge" class="svelte-13h6nf1"><div class="contenaireCreationSerge svelte-13h6nf1"><h2 class="svelte-13h6nf1" data-svelte-h="svelte-1xjb6rl">Les Cr\xE9ations de Serge</h2> <div class="imageTableau svelte-13h6nf1" data-svelte-h="svelte-1otipf3"><img class="tableau1 svelte-13h6nf1" src="/images/tableau1.webp" alt="tableau"> <img class="tableau2 svelte-13h6nf1" src="/images/tableau2.webp" alt="tableau"> <img class="tableau3 svelte-13h6nf1" src="/images/tableau3.webp" alt="tableau"></div> ${validate_component(Bouton, "Bouton").$$render($$result, { src: "../creationSerge" }, {}, {
        default: () => {
          return `Voir plus`;
        }
      })}</div> <img class="line svelte-13h6nf1" src="/images/line/line3.svg" alt="line"> </section>`;
    });
    css$22 = {
      code: "section.svelte-137qzd6{width:100vw;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center}p.svelte-137qzd6{width:40vw;text-align:center}img.svelte-137qzd6{position:absolute;transform:translateY(18vw);width:100vw}@media screen and (max-width: 720px){p.svelte-137qzd6{width:60vw}}@media screen and (max-width: 400px){h1.svelte-137qzd6{font-size:50px;text-align:center}p.svelte-137qzd6{width:90vw}}",
      map: null
    };
    Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$22);
      return `<section class="svelte-137qzd6" data-svelte-h="svelte-4vm72r"><h1 class="svelte-137qzd6">Team PinPin</h1> <p class="svelte-137qzd6">\u201CLes deux arts d\u2019\xE9crire et de dessiner
         sont naturellement associ\xE9s.\u201D (Charles Dickens)</p> <img src="/images/line/line2.svg" alt="line" class="svelte-137qzd6"> </section>`;
    });
    css$12 = {
      code: ".contenaireSaga.svelte-1rlh8v2.svelte-1rlh8v2{padding-top:10rem;display:flex;gap:4rem;border:1px solid  #D7B764;align-items:center;padding:4rem;width:70vw;margin:auto}.contenaireSaga.svelte-1rlh8v2 div.svelte-1rlh8v2{display:flex;flex-direction:column;gap:0.25rem}@media screen and (max-width: 1100px){.contenaireSaga.svelte-1rlh8v2.svelte-1rlh8v2{display:flex;align-items:center;flex-direction:column;justify-content:center}}@media screen and (max-width: 645px){.contenaireSaga.svelte-1rlh8v2.svelte-1rlh8v2{padding:1rem;gap:1rem;width:90vw}}@media screen and (max-width: 280px){img.svelte-1rlh8v2.svelte-1rlh8v2{width:-webkit-fill-available}}",
      map: null
    };
    Saga = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$12);
      return `<section class="contenaireSaga svelte-1rlh8v2" id="saga"><img src="/images/book.webp" alt="Livre saga" class="svelte-1rlh8v2"> <div class="svelte-1rlh8v2"><h2 data-svelte-h="svelte-1vi56nr">La Saga QUATRE</h2> <p data-svelte-h="svelte-q5dtow">QUATRE, romans de fantasy, suit les aventures de Rashele, Dyane,
             Tim et Side. Au commencement, ils ne se connaissent pas et
              vivent dans quatre continents
             diff\xE9rents. Ils d\xE9couvrent par la suite qu\u2019ils sont les h\xE9ritiers
              de grandes familles mandat\xE9es par les quatre M\xE8res et P\xE8res Fondateurs
               de l\u2019Humanit\xE9 pour prot\xE9ger l\u2019Homme de lui-m\xEAme.
            Mariane Gahengi et Serge Pingitore, autrices et illustrateur, vous proposent
             un format novateur o\xF9 l\u2019\xE9criture s\u2019allie aux croquis, aux illustrations 
             et \xE0 la bande dessin\xE9e pour emmener le lecteur dans l\u2019imaginaire narratif.</p> ${validate_component(Bouton, "Bouton").$$render($$result, { src: "/saga" }, {}, {
        default: () => {
          return `Voir plus`;
        }
      })}</div> </section>`;
    });
    css3 = {
      code: "section.svelte-1gbfa03{display:flex;flex-direction:column;gap:5rem;padding-bottom:10rem}",
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css3);
      return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <section class="svelte-1gbfa03">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Saga, "Saga").$$render($$result, {}, {}, {})} ${validate_component(CreationSerge, "CreationSerge").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </section>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3,
  universal: () => page_exports,
  universal_id: () => universal_id
});
var index3, component_cache3, component3, universal_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page();
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    universal_id = "src/routes/+page.js";
    imports3 = ["_app/immutable/nodes/2.72e0c228.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/Bouton.63e65b90.js"];
    stylesheets3 = ["_app/immutable/assets/2.dfbc7875.css", "_app/immutable/assets/Bouton.25f3c1be.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/chunks/FilAriane.js
var css4, FilAriane;
var init_FilAriane = __esm({
  ".svelte-kit/output/server/chunks/FilAriane.js"() {
    init_ssr();
    css4 = {
      code: ".filAriane.svelte-qumwfx{text-align:center;color:black;padding-top:5rem}a.svelte-qumwfx{color:black}a.svelte-qumwfx:hover{text-decoration:underline}p.svelte-qumwfx{display:flex;justify-content:center;gap:0.25rem}",
      map: null
    };
    FilAriane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { pageName } = $$props;
      let { pageSrc } = $$props;
      if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
        $$bindings.pageName(pageName);
      if ($$props.pageSrc === void 0 && $$bindings.pageSrc && pageSrc !== void 0)
        $$bindings.pageSrc(pageSrc);
      $$result.css.add(css4);
      return `<p class="filAriane svelte-qumwfx"><a href="../" class="svelte-qumwfx" data-svelte-h="svelte-z0a1um">Team Pinpin</a> &gt; <a${add_attribute("href", pageSrc, 0)} class="svelte-qumwfx">${escape(pageName)}</a> ${slots.default ? slots.default({}) : ``}</p>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/creationSerge/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
var css$13, Photo, css5, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/creationSerge/_page.svelte.js"() {
    init_ssr();
    init_Bouton();
    init_FilAriane();
    css$13 = {
      code: "section.svelte-jwzpi5.svelte-jwzpi5{width:max-content;display:flex;flex-direction:column;justify-content:center;align-items:center;height:44vh}h2.svelte-jwzpi5.svelte-jwzpi5{text-align:center}.images.svelte-jwzpi5.svelte-jwzpi5{display:flex;width:auto;margin-top:4rem}img.svelte-jwzpi5.svelte-jwzpi5{width:inherit;transition:500ms}img.svelte-jwzpi5.svelte-jwzpi5:hover{transform:scale(110%)}section.svelte-jwzpi5 div.svelte-jwzpi5{width:13rem;height:13rem}.start.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(3rem)}.end.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(-3rem)}.midel.svelte-jwzpi5.svelte-jwzpi5{transform:translateY(-3rem);z-index:1}.midelImg.svelte-jwzpi5.svelte-jwzpi5{z-index:0;position:relative}.bouton.svelte-jwzpi5.svelte-jwzpi5{margin-top:3rem;transform:translateX(9rem);width:fit-content}@media screen and (max-width: 700px){.start.svelte-jwzpi5.svelte-jwzpi5,.midel.svelte-jwzpi5.svelte-jwzpi5,.end.svelte-jwzpi5.svelte-jwzpi5,img.svelte-jwzpi5.svelte-jwzpi5{width:15vw;height:15vw}.bouton.svelte-jwzpi5.svelte-jwzpi5{margin-top:1rem;transform:translateX(0)}h2.svelte-jwzpi5.svelte-jwzpi5{font-size:20px;text-wrap:nowrap}.start.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(0.5vw)}.end.svelte-jwzpi5.svelte-jwzpi5{transform:translateX(-0.5vw)}.midel.svelte-jwzpi5.svelte-jwzpi5{transform:translateY(-1vw);z-index:1}.images.svelte-jwzpi5.svelte-jwzpi5{margin-top:1rem;height:fit-content}section.svelte-jwzpi5.svelte-jwzpi5{width:fit-content;height:fit-content}}",
      map: null
    };
    Photo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title } = $$props;
      let { srcImg1 } = $$props;
      let { srcImg2 } = $$props;
      let { srcImg3 } = $$props;
      let { src } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.srcImg1 === void 0 && $$bindings.srcImg1 && srcImg1 !== void 0)
        $$bindings.srcImg1(srcImg1);
      if ($$props.srcImg2 === void 0 && $$bindings.srcImg2 && srcImg2 !== void 0)
        $$bindings.srcImg2(srcImg2);
      if ($$props.srcImg3 === void 0 && $$bindings.srcImg3 && srcImg3 !== void 0)
        $$bindings.srcImg3(srcImg3);
      if ($$props.src === void 0 && $$bindings.src && src !== void 0)
        $$bindings.src(src);
      $$result.css.add(css$13);
      return `<section class="svelte-jwzpi5"><h2 class="svelte-jwzpi5">${escape(title)}</h2> <div class="images svelte-jwzpi5"><div class="start svelte-jwzpi5"><img${add_attribute("src", srcImg1, 0)} alt="image1" class="svelte-jwzpi5"></div> <div class="midel svelte-jwzpi5"><img class="midelImg svelte-jwzpi5"${add_attribute("src", srcImg2, 0)} alt="image2"></div> <div class="end svelte-jwzpi5"><img${add_attribute("src", srcImg3, 0)} alt="image3" class="svelte-jwzpi5"></div></div> <div class="bouton svelte-jwzpi5">${validate_component(Bouton, "Bouton").$$render($$result, { src }, {}, {
        default: () => {
          return `Voir plus`;
        }
      })}</div> </section>`;
    });
    css5 = {
      code: ".instruction.svelte-e5w9hf.svelte-e5w9hf{margin-left:10rem;margin-bottom:2rem}.images.svelte-e5w9hf.svelte-e5w9hf{width:100vw;padding-left:2rem;padding-right:2rem;display:flex;overflow:scroll;scroll-behavior:auto;scroll-margin-block-start:20px;overflow-x:scroll}h1.svelte-e5w9hf.svelte-e5w9hf{text-align:center;margin-top:3rem}p.svelte-e5w9hf.svelte-e5w9hf{width:50vw}.about.svelte-e5w9hf.svelte-e5w9hf{width:100vw;height:60vh;padding:10rem;display:flex;flex-direction:column;justify-content:space-between}.about.svelte-e5w9hf div.svelte-e5w9hf{width:100%;display:flex;justify-content:end}.right.svelte-e5w9hf.svelte-e5w9hf{text-align:right}@media screen and (max-width: 1000px){.about.svelte-e5w9hf.svelte-e5w9hf{height:80vh}}@media screen and (max-width: 700px){.about.svelte-e5w9hf.svelte-e5w9hf{height:fit-content;padding:2rem;width:100vw;margin:auto;display:flex;justify-content:center;flex-direction:column;align-items:center}.right.svelte-e5w9hf.svelte-e5w9hf{text-align:start}.about.svelte-e5w9hf div.svelte-e5w9hf{width:fit-content;display:block}p.svelte-e5w9hf.svelte-e5w9hf{width:fit-content}.images.svelte-e5w9hf.svelte-e5w9hf{gap:2rem}.instruction.svelte-e5w9hf.svelte-e5w9hf{margin-left:50%;transform:translateX(-50%)}}@media screen and (max-width: 755px){h1.svelte-e5w9hf.svelte-e5w9hf{font-size:50px;text-align:center}}@media screen and (max-width: 555px){h1.svelte-e5w9hf.svelte-e5w9hf{font-size:35px}}",
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css5);
      return `${$$result.head += `<!-- HEAD_svelte-1kk1fpe_START -->${$$result.title = `<title>Les Cr\xE9ation de Serge</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1kk1fpe_END -->`, ""} ${validate_component(FilAriane, "FilAriane").$$render(
        $$result,
        {
          pageName: "Les cr\xE9ations de Serge",
          pageSrc: "/creationSerge"
        },
        {},
        {}
      )}  <h1 class="svelte-e5w9hf" data-svelte-h="svelte-1id4ccf">Les cr\xE9ations de Serge</h1> <div class="about svelte-e5w9hf" data-svelte-h="svelte-cyjmys"><p class="svelte-e5w9hf">Mon inspiration trouve sa source dans ce qui m\u2019\xE9meut : 
        l\u2019expression d\u2019un regard, la tendresse d\u2019un visage ou encore l\u2019atmosph\xE8re
        d\u2019un paysage.
        Et j\u2019essaie humblement de r\xE9v\xE9ler cette \xE9motion dans mes \u0153uvres.\xA0</p> <div class=" svelte-e5w9hf"><p class="right svelte-e5w9hf">Je suis peintre amateur autodidacte et j\u2019ai red\xE9couvert en 2020 le bonheur
            de peindre
            et de dessiner sans contrainte, juste pour le plaisir de la cr\xE9ation.</p></div></div> <p class="instruction svelte-e5w9hf" data-svelte-h="svelte-13cga0d">Glisse sur le c\xF4t\xE9 pour voir mes peintures \u{1F58C}\uFE0F</p> <div class="images svelte-e5w9hf">${validate_component(Photo, "Photo").$$render(
        $$result,
        {
          title: "Les noirs et blancs",
          srcImg1: "/images/photoCreationSerge/img1.webp",
          srcImg2: "/images/photoCreationSerge/img2.webp",
          srcImg3: "/images/photoCreationSerge/img3.webp",
          src: "/creationSerge/lesnoirsetblancs"
        },
        {},
        {}
      )} ${validate_component(Photo, "Photo").$$render(
        $$result,
        {
          title: "Les Huiles ",
          srcImg1: "/images/photoCreationSerge/img4.webp",
          srcImg2: "/images/photoCreationSerge/img5.webp",
          srcImg3: "/images/photoCreationSerge/img6.webp",
          src: "/creationSerge/leshuiles"
        },
        {},
        {}
      )} ${validate_component(Photo, "Photo").$$render(
        $$result,
        {
          title: "Paysage",
          srcImg1: "/images/photoCreationSerge/img7.webp",
          srcImg2: "/images/photoCreationSerge/img8.webp",
          srcImg3: "/images/photoCreationSerge/img9.webp",
          src: "/creationSerge/paysage"
        },
        {},
        {}
      )} ${validate_component(Photo, "Photo").$$render(
        $$result,
        {
          title: "M\xE9canique",
          srcImg1: "/images/photoCreationSerge/img10.webp",
          srcImg2: "/images/photoCreationSerge/img11.webp",
          srcImg3: "/images/photoCreationSerge/img12.webp",
          src: "/creationSerge/mecanique"
        },
        {},
        {}
      )} </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    imports4 = ["_app/immutable/nodes/3.df246609.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/Bouton.63e65b90.js", "_app/immutable/chunks/FilAriane.0e0b4448.js"];
    stylesheets4 = ["_app/immutable/assets/3.1c53a1ea.css", "_app/immutable/assets/Bouton.25f3c1be.css", "_app/immutable/assets/FilAriane.bd523b4f.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/chunks/imagesList.js
var css6, GridImage, mecanique, leshuiles, lesnoirsetblancs, paysage;
var init_imagesList = __esm({
  ".svelte-kit/output/server/chunks/imagesList.js"() {
    init_ssr();
    css6 = {
      code: "div.svelte-k0dkau{margin-top:5rem;padding-bottom:5vh;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;row-gap:3rem}@media screen and (max-width: 820px){div.svelte-k0dkau{grid-template-columns:1fr 1fr}}@media screen and (max-width: 578px){div.svelte-k0dkau{grid-template-columns:1fr}}",
      map: null
    };
    GridImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css6);
      return `<div class="svelte-k0dkau">${slots.default ? slots.default({}) : ``}</div>`;
    });
    mecanique = ["/images/painting/mecanique/1.webp", "/images/painting/mecanique/2.webp", "/images/painting/mecanique/3.webp"];
    leshuiles = ["/images/painting/leshuiles/1.webp", "/images/painting/leshuiles/2.webp", "/images/painting/leshuiles/3.webp"];
    lesnoirsetblancs = ["/images/painting/lesnoirsetblancs/1.webp", "/images/painting/lesnoirsetblancs/2.webp", "/images/painting/lesnoirsetblancs/3.webp"];
    paysage = ["/images/painting/paysage/1.webp", "/images/painting/paysage/2.webp", "/images/painting/paysage/3.webp"];
  }
});

// .svelte-kit/output/server/entries/pages/creationSerge/leshuiles/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page3
});
var css7, Page3;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/creationSerge/leshuiles/_page.svelte.js"() {
    init_ssr();
    init_FilAriane();
    init_imagesList();
    css7 = {
      code: "div.svelte-42ysri{margin-bottom:10rem}h1.svelte-42ysri{margin-top:5rem;text-align:center}img.svelte-42ysri{width:15rem;height:fit-content;transition:500ms}img.svelte-42ysri:hover{transform:scale(110%)}",
      map: null
    };
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css7);
      return `${validate_component(FilAriane, "FilAriane").$$render(
        $$result,
        {
          pageName: "Les cr\xE9ations de Serge",
          pageSrc: "/creationSerge"
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-1cg2jcq">&gt;</p> <a href="/creationSerge/leshuiles" data-svelte-h="svelte-j1o5e7">les huiles</a>`;
          }
        }
      )} <h1 class="svelte-42ysri" data-svelte-h="svelte-1nlvosi">Les Huiles</h1> <div class="svelte-42ysri">${validate_component(GridImage, "GridImage").$$render($$result, {}, {}, {
        default: () => {
          return `${each(leshuiles, (src) => {
            return `<img${add_attribute("src", src, 0)} alt="tableau Serge Pingitore sur le th\xE9me des huiles" class="svelte-42ysri">`;
          })}`;
        }
      })} </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component_cache5, component5, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    index5 = 4;
    component5 = async () => component_cache5 ?? (component_cache5 = (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default);
    imports5 = ["_app/immutable/nodes/4.1f0b08e9.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/imagesList.bab69bc2.js", "_app/immutable/chunks/FilAriane.0e0b4448.js"];
    stylesheets5 = ["_app/immutable/assets/4.e384cdac.css", "_app/immutable/assets/imagesList.09cbb91a.css", "_app/immutable/assets/FilAriane.bd523b4f.css"];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/creationSerge/lesnoirsetblancs/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page4
});
var css8, Page4;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/creationSerge/lesnoirsetblancs/_page.svelte.js"() {
    init_ssr();
    init_FilAriane();
    init_imagesList();
    css8 = {
      code: "div.svelte-42ysri{margin-bottom:10rem}h1.svelte-42ysri{margin-top:5rem;text-align:center}img.svelte-42ysri{width:15rem;height:fit-content;transition:500ms}img.svelte-42ysri:hover{transform:scale(110%)}",
      map: null
    };
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css8);
      return `${validate_component(FilAriane, "FilAriane").$$render(
        $$result,
        {
          pageName: "Les cr\xE9ations de Serge",
          pageSrc: "/creationSerge"
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-1cg2jcq">&gt;</p> <a href="/creationSerge/lesnoirsetblancs" data-svelte-h="svelte-7xr6vf">les noirs et blancs</a>`;
          }
        }
      )} <h1 class="svelte-42ysri" data-svelte-h="svelte-19nwwht">Les noirs et blancs</h1> <div class="svelte-42ysri">${validate_component(GridImage, "GridImage").$$render($$result, {}, {}, {
        default: () => {
          return `${each(lesnoirsetblancs, (src) => {
            return `<img${add_attribute("src", src, 0)} alt="tableau Serge Pingitore sur le th\xE9me du noir et blanc" class="svelte-42ysri">`;
          })}`;
        }
      })} </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component_cache6, component6, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    index6 = 5;
    component6 = async () => component_cache6 ?? (component_cache6 = (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default);
    imports6 = ["_app/immutable/nodes/5.18ef0f1b.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/imagesList.bab69bc2.js", "_app/immutable/chunks/FilAriane.0e0b4448.js"];
    stylesheets6 = ["_app/immutable/assets/4.e384cdac.css", "_app/immutable/assets/imagesList.09cbb91a.css", "_app/immutable/assets/FilAriane.bd523b4f.css"];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/creationSerge/mecanique/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => Page5
});
var css9, Page5;
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/creationSerge/mecanique/_page.svelte.js"() {
    init_ssr();
    init_FilAriane();
    init_imagesList();
    css9 = {
      code: "div.svelte-42ysri{margin-bottom:10rem}h1.svelte-42ysri{margin-top:5rem;text-align:center}img.svelte-42ysri{width:15rem;height:fit-content;transition:500ms}img.svelte-42ysri:hover{transform:scale(110%)}",
      map: null
    };
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css9);
      return `${validate_component(FilAriane, "FilAriane").$$render(
        $$result,
        {
          pageName: "Les cr\xE9ations de Serge",
          pageSrc: "/creationSerge"
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-1cg2jcq">&gt;</p> <a href="/creationSerge/mecanique" data-svelte-h="svelte-1yp9mal">mecanique</a>`;
          }
        }
      )} <h1 class="svelte-42ysri" data-svelte-h="svelte-12hyjh2">M\xE9canique</h1> <div class="svelte-42ysri">${validate_component(GridImage, "GridImage").$$render($$result, {}, {}, {
        default: () => {
          return `${each(mecanique, (src) => {
            return `<img${add_attribute("src", src, 0)} alt="tableau Serge Pingitore sur le th\xE9me de la m\xE9canique" class="svelte-42ysri">`;
          })}`;
        }
      })} </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component_cache7, component7, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component7 = async () => component_cache7 ?? (component_cache7 = (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default);
    imports7 = ["_app/immutable/nodes/6.2be3140a.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/imagesList.bab69bc2.js", "_app/immutable/chunks/FilAriane.0e0b4448.js"];
    stylesheets7 = ["_app/immutable/assets/4.e384cdac.css", "_app/immutable/assets/imagesList.09cbb91a.css", "_app/immutable/assets/FilAriane.bd523b4f.css"];
    fonts7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/creationSerge/paysage/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => Page6
});
var css10, Page6;
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/creationSerge/paysage/_page.svelte.js"() {
    init_ssr();
    init_FilAriane();
    init_imagesList();
    css10 = {
      code: "div.svelte-42ysri{margin-bottom:10rem}h1.svelte-42ysri{margin-top:5rem;text-align:center}img.svelte-42ysri{width:15rem;height:fit-content;transition:500ms}img.svelte-42ysri:hover{transform:scale(110%)}",
      map: null
    };
    Page6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css10);
      return `${validate_component(FilAriane, "FilAriane").$$render(
        $$result,
        {
          pageName: "Les cr\xE9ations de Serge",
          pageSrc: "/creationSerge"
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-1cg2jcq">&gt;</p> <a href="/creationSerge/paysage" data-svelte-h="svelte-6l50rh">paysage</a>`;
          }
        }
      )} <h1 class="svelte-42ysri" data-svelte-h="svelte-1bsvkuk">Paysage</h1> <div class="svelte-42ysri">${validate_component(GridImage, "GridImage").$$render($$result, {}, {}, {
        default: () => {
          return `${each(paysage, (src) => {
            return `<img${add_attribute("src", src, 0)} alt="tableau Serge Pingitore sur le th\xE9me des paysages" class="svelte-42ysri">`;
          })}`;
        }
      })} </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  fonts: () => fonts8,
  imports: () => imports8,
  index: () => index8,
  stylesheets: () => stylesheets8
});
var index8, component_cache8, component8, imports8, stylesheets8, fonts8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    index8 = 7;
    component8 = async () => component_cache8 ?? (component_cache8 = (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default);
    imports8 = ["_app/immutable/nodes/7.7593f69b.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/imagesList.bab69bc2.js", "_app/immutable/chunks/FilAriane.0e0b4448.js"];
    stylesheets8 = ["_app/immutable/assets/4.e384cdac.css", "_app/immutable/assets/imagesList.09cbb91a.css", "_app/immutable/assets/FilAriane.bd523b4f.css"];
    fonts8 = [];
  }
});

// .svelte-kit/output/server/entries/pages/saga/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => Page7
});
var css$52, SagaTitle, css$42, Tome, css$32, Carousel, css$23, Quotation, css$14, Opinion, css11, Page7;
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/saga/_page.svelte.js"() {
    init_ssr();
    init_FilAriane();
    css$52 = {
      code: 'h2.svelte-11pjq2l::after{content:"";background-color:#D7B764;width:60%;height:1px;display:block;margin-bottom:2rem}',
      map: null
    };
    SagaTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$52);
      return `<h2 class="svelte-11pjq2l">${slots.default ? slots.default({}) : ``}</h2>`;
    });
    css$42 = {
      code: ".imageDescription.svelte-1ep0hbe{display:flex;gap:1rem}.tome.svelte-1ep0hbe{margin:0 auto}.description.svelte-1ep0hbe{margin-bottom:1rem}@media screen and (max-width: 720px){.imageDescription.svelte-1ep0hbe{flex-direction:column}}",
      map: null
    };
    Tome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { tomeNumber } = $$props;
      let { description } = $$props;
      let { question } = $$props;
      let { srcBuy = "" } = $$props;
      let { link = "" } = $$props;
      console.log(link);
      if ($$props.tomeNumber === void 0 && $$bindings.tomeNumber && tomeNumber !== void 0)
        $$bindings.tomeNumber(tomeNumber);
      if ($$props.description === void 0 && $$bindings.description && description !== void 0)
        $$bindings.description(description);
      if ($$props.question === void 0 && $$bindings.question && question !== void 0)
        $$bindings.question(question);
      if ($$props.srcBuy === void 0 && $$bindings.srcBuy && srcBuy !== void 0)
        $$bindings.srcBuy(srcBuy);
      if ($$props.link === void 0 && $$bindings.link && link !== void 0)
        $$bindings.link(link);
      $$result.css.add(css$42);
      return `<div class="tome svelte-1ep0hbe">${validate_component(SagaTitle, "SagaTitle").$$render($$result, {}, {}, {
        default: () => {
          return `Tome ${escape(tomeNumber)}`;
        }
      })} <div class="imageDescription svelte-1ep0hbe">${slots.default ? slots.default({}) : ``} <div class="descriptionBouton"><p class="description svelte-1ep0hbe">${escape(description)}</p> <p>${escape(question)}</p> ${link ? `<a${add_attribute("href", link, 0)}><p data-svelte-h="svelte-epi4jj">En savoir plus &gt;</p></a>` : ``} ${srcBuy ? `<a${add_attribute("href", srcBuy, 0)}><p data-svelte-h="svelte-1al0rso">Acheter &gt;</p></a>` : ``}</div></div> </div>`;
    });
    css$32 = {
      code: ".carousel.svelte-1eq3z6j{display:flex;gap:5rem;overflow:scroll;scroll-behavior:auto;scroll-margin-block-start:750px;overflow-x:scroll;overflow-y:hidden}.firstQuotation.svelte-1eq3z6j{transform:translate(-6rem, 2rem)}.endQuotation.svelte-1eq3z6j{transform:translate(0rem, -3rem);margin-left:80vw}@media screen and (max-width: 1000px){img.svelte-1eq3z6j{display:none}}",
      map: null
    };
    Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$32);
      return `<div class="contenaire"><img class="firstQuotation svelte-1eq3z6j" src="/images/logo/quotation.svg" alt="guillement"> <div class="carousel svelte-1eq3z6j">${slots.default ? slots.default({}) : ``}</div> <img class="endQuotation svelte-1eq3z6j" src="/images/logo/quotationEnd.svg" alt="guillement"> </div>`;
    });
    css$23 = {
      code: "p.svelte-8pwumj{width:750px}.name.svelte-8pwumj{text-align:end}div.svelte-8pwumj{display:flex;flex-direction:column;gap:1rem}@media screen and (max-width: 1000px){p.svelte-8pwumj{width:50vw;font-size:12px}}@media screen and (max-width: 400px){p.svelte-8pwumj{width:70vw}}",
      map: null
    };
    Quotation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { opinion } = $$props;
      let { namePersonne } = $$props;
      if ($$props.opinion === void 0 && $$bindings.opinion && opinion !== void 0)
        $$bindings.opinion(opinion);
      if ($$props.namePersonne === void 0 && $$bindings.namePersonne && namePersonne !== void 0)
        $$bindings.namePersonne(namePersonne);
      $$result.css.add(css$23);
      return `<div class=" svelte-8pwumj"><p class="svelte-8pwumj">${escape(opinion)}</p> <p class="name svelte-8pwumj">${escape(namePersonne)}</p> </div>`;
    });
    css$14 = {
      code: "div.svelte-18anm1t,a.svelte-18anm1t{display:flex;justify-content:center ;align-items:center;flex-direction:column}p.svelte-18anm1t{text-align:center}img.svelte-18anm1t{width:100px}@media screen and (max-width: 900px){img.svelte-18anm1t{width:50px}p.svelte-18anm1t{font-size:12px}}",
      map: null
    };
    Opinion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { srcImg } = $$props;
      let { name } = $$props;
      let { link } = $$props;
      if ($$props.srcImg === void 0 && $$bindings.srcImg && srcImg !== void 0)
        $$bindings.srcImg(srcImg);
      if ($$props.name === void 0 && $$bindings.name && name !== void 0)
        $$bindings.name(name);
      if ($$props.link === void 0 && $$bindings.link && link !== void 0)
        $$bindings.link(link);
      $$result.css.add(css$14);
      return `<div class="svelte-18anm1t"><a${add_attribute("href", link, 0)} class="svelte-18anm1t"><img${add_attribute("src", srcImg, 0)} alt="De profil" class="svelte-18anm1t"> <p class="svelte-18anm1t">${escape(name)}</p></a> </div>`;
    });
    css11 = {
      code: "section.svelte-1whc0me.svelte-1whc0me{display:flex;flex-direction:column;gap:9rem}.allOpinion.svelte-1whc0me.svelte-1whc0me{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;row-gap:1rem;padding-bottom:10rem;margin:0 auto}@media screen and (max-width: 1100px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr 1fr 1fr 1fr}}@media screen and (max-width: 750px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr 1fr 1fr}div.svelte-1whc0me .citation.svelte-1whc0me{width:90%}}@media screen and (max-width: 450px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr 1fr}}@media screen and (max-width: 326px){.allOpinion.svelte-1whc0me.svelte-1whc0me{grid-template-columns:1fr}}section.svelte-1whc0me.svelte-1whc0me{width:80vw;margin:0 auto}h1.svelte-1whc0me.svelte-1whc0me{text-align:center}.citation.svelte-1whc0me.svelte-1whc0me{text-align:center;width:50%;margin:0 auto}",
      map: null
    };
    Page7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css11);
      return `${$$result.head += `<!-- HEAD_svelte-ucqweu_START -->${$$result.title = `<title>La Saga Illustr\xE9e</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-ucqweu_END -->`, ""} ${validate_component(FilAriane, "FilAriane").$$render(
        $$result,
        {
          pageName: "La Saga Illustr\xE9e",
          pageSrc: "/saga"
        },
        {},
        {}
      )} <section class="svelte-1whc0me"><div class=" svelte-1whc0me" data-svelte-h="svelte-ka1xb9"><h1 class="svelte-1whc0me">La Saga Illustr\xE9e</h1> <p class="citation svelte-1whc0me">Laissez-vous entra\xEEner dans
            un univers captivant o\xF9 r\xE9el et imaginaire se c\xF4toient dans
            une \xE9pop\xE9e fascinante.</p></div> ${validate_component(Tome, "Tome").$$render(
        $$result,
        {
          tomeNumber: "1",
          description: "Dans un univers all\xE9gorique qui pourrait ressembler au n\xF4tre,\n        une catastrophe mondiale survenue vingt et un ans plus t\xF4t a tu\xE9 beaucoup d\u2019humains,\n        tout en conf\xE9rant des dons sp\xE9ciaux aux survivants. Cependant, nos h\xE9ros, quatre\n        jeunes adultes (une Europ\xE9enne, une Am\xE9ricaine, un Africain et un Asiatique) n\u2019en\n        ont pas\u2026 apparemment. Ils ne se connaissent pas et ne vivent pas sur le m\xEAme\n        continent. Toutefois, ils sont n\xE9s tous les quatre orphelins, un quatre avril\n        \xE0 minuit, lors de l\u2019\xE9clipse plan\xE9taire. \xC0 l\u2019approche de leur anniversaire, ils\n        font des r\xEAves \xE9tranges et comprennent qu\u2019ils doivent se rendre \xE0 un endroit\n        pr\xE9cis sans savoir pourquoi. Un oracle s\xE9culaire leur confie une mission :\n        retrouver les m\xE9daillons oubli\xE9s. D\xE8s lors, ils ne se quitteront plus et nous\n        les suivrons dans leur qu\xEAte \xE0 Paris, Le Caire, Bali, en passant par\n        Saint-P\xE9tersbourg et l\u2019Italie, mais aussi en Nouvelle-Z\xE9lande. ",
          question: "Que repr\xE9sentent ces m\xE9daillons ? Peut-\xEAtre cela a-t-il un lien avant la l\xE9gende ancienne que la vieille chamane raconte \xE0 sa petite fille au d\xE9but du roman ?\n        \xCAtes-vous pr\xEAts \xE0 d\xE9couvrir leur histoire ?",
          srcBuy: "https://www.amazon.fr/m%C3%A9daillons-oubli%C3%A9s-Mariane-Gahengi/dp/2384411195/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=Z11S9AI77GKY&keywords=les+m%C3%A9daillons+oubli%C3%A9s&qid=1683803969&sprefix=les+m%C3%A9daillons+oubli%C3%A9s,aps,119&sr=8-1",
          link: ""
        },
        {},
        {
          default: () => {
            return `<img src="/images/book.webp" alt="couverture tome 1">`;
          }
        }
      )} ${validate_component(Tome, "Tome").$$render(
        $$result,
        {
          tomeNumber: "2",
          description: "Les premi\xE8res notes de Non, je ne regrette rien, r\xE9sonnent dans les \xE9couteurs discrets de la jeune fille. Elle marque le rythme de mouvements saccad\xE9s de la t\xEAte, ses yeux brid\xE9s ferm\xE9s, ses deux longues tresses africaines blondes se balan\xE7ant d\u2019un c\xF4t\xE9 et de l\u2019autre d\u2019un visage rond et noir. Elle agite les bras, tenant une fine baguette invisible de la main droite, imitant le chef d\u2019orchestre dans sa volont\xE9 de synchroniser les cuivres, les basses et les violons. Tout son corps, cal\xE9 dans un fauteuil, devant trois \xE9crans sur lesquels des lignes ininterrompues de chiffres d\xE9filent, vibre, se laissant transporter par l\u2019envol\xE9e des altos. Soudain, elle entrouvre les yeux, les \xE9carquille, fronce son nez aquilin. Le bleu profond de son regard est attir\xE9 par un cercle concentrique tournoyant, entour\xE9 de points noirs, qui appara\xEEt sur le fond blanc des ordinateurs.",
          question: "Quel est ce message ? Aiderez-vous les Quatre et leurs nouveaux amis \xE0 r\xE9soudre ce nouveau myst\xE8re ?",
          srcBuy: "",
          link: ""
        },
        {},
        {
          default: () => {
            return `<slop data-svelte-h="svelte-x3uzjv"><img src="/images/saga/tome2.webp" alt="couverture tome 2"> <p>En cours d\u2019\xE9criture</p></slop>`;
          }
        }
      )} <div class="">${validate_component(SagaTitle, "SagaTitle").$$render($$result, {}, {}, {
        default: () => {
          return `Ils donnent leurs avis`;
        }
      })} <p data-svelte-h="svelte-7oco1y">Glisse sur le cot\xE9 pour voir les avis</p> ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Quotation, "Quotation").$$render(
            $$result,
            {
              opinion: "WoW. J\u2019ai ador\xE9 me plonger dans cet univers fantastique. Ce 1er tome est tr\xE8s prometteur. Le lecteur est plong\xE9 dans cette qu\xEAte, aux c\xF4t\xE9s de ce groupe de jeunes adultes. L\u2019univers est riche en descriptions, et permet au lecteur de ce plonger pleinement dans sa lecture. Tour \xE0 tour, on suit chacun de ces personnages aux 4 coins du monde. J\u2019ai beaucoup aim\xE9 le fait que chaque personnage ai son caract\xE8re bien \xE0 lui, sa personnalit\xE9 bien marqu\xE9. On sent le r\xE9el travail de l\u2019auteure lors de l\u2019\xE9criture de ce livre, les d\xE9tails parfaitement bien travaill\xE9s afin que rien ne soit laiss\xE9 dans le flou. La dynamique de l\u2019\xE9criture et la fluidit\xE9 de la plume, transporte et tient en haleine le lecteur. J\u2019ai h\xE2te de voir ce que nous r\xE9serve la suite.Je recommande vivement ce superbe univers.",
              namePersonne: "mi_and_my_books, via instagram"
            },
            {},
            {}
          )} ${validate_component(Quotation, "Quotation").$$render(
            $$result,
            {
              opinion: "J\u2019ai d\xE9couvert cette \u0153uvre car l\u2019autrice m\u2019a fait confiance et pour \xE7a je lui dis MERCI! J\u2019ai directement \xE9t\xE9 happ\xE9e par l\u2019histoire. Les illustrions ont \xE9t\xE9 magnifiques et m\u2019ont permis de me plonger encore plus dans ma lecture. La plume est d\xE9taill\xE9e mais fluide ce qui facilite et rend la lecture tr\xE8s plaisante. Elle est imag\xE9e ce qui m\u2019a permis de laisser vagabonder mon imagination et m\u2019a donn\xE9 la sensation d\u2019\xEAtre pr\xE9sente aux diff\xE9rents lieux \u{1F970} Les Quatres quant \xE0 eux sont simples et bien d\xE9velopp\xE9s. Malgr\xE9 l\u2019univers sur les dons, on s\u2019attache et s\u2019identifie \xE0 eux ! On peut suivre leur aventure et le danger qu\u2019ils courent gr\xE2ce aux diff\xE9rents PDV ce qui est un \xE9norme + pour moi car j\u2019appr\xE9cie le fait d\u2019avoir un POV omniscient ! Ainsi, on peut suivre leur \xE9volution mental et amical car n\u2019oublions pas qu\u2019\xE0 la base ce sont 4 adolescents que tout oppose mais qui partagent 2 choses : leurs voyages dans le monde onirique et leur anniversaire Allez vous le procurer pour passer un bon moment !",
              namePersonne: "Dubois Gwenola, via Book.Node"
            },
            {},
            {}
          )} ${validate_component(Quotation, "Quotation").$$render(
            $$result,
            {
              opinion: "Au d\xE9but j\u2019ai eu un peu de mal \xE0 rentrer dans l\u2019histoire. Mais d\xE8s le premier rebondissement j\u2019\xE9tais dedans et j\u2019ai encha\xEEn\xE9 les pages. Le livre est plut\xF4t court donc cela a aid\xE9. L\u2019\xE9criture est vraiment addictive. Les personnages sont attachants, j\u2019ai v\xE9cu chaque aventures avec eux. Les illustrations apportent une immersion en plus dans l\u2019histoire., tout comme les lieux et paysages qui sont tr\xE8s bien d\xE9taill\xE9s.",
              namePersonne: "Les Lectures de Charlotte, via wordpress.com"
            },
            {},
            {}
          )} ${validate_component(Quotation, "Quotation").$$render(
            $$result,
            {
              opinion: "Une petite lecture bien agr\xE9able pour changer de mes chers polars et thrillers. Tout d'abord, je vais vous parler du public cible. A mon sens, on est sur du tout public, jeunes et adultes y trouveront leur compte. \n            Le style est fluide, tr\xE8s agr\xE9able et on est vite pris dans l'histoire. J'aime beaucoup que l'auteure varille dans le vocabulaire pour s'adapter aux personnages et au narrateur. Quand aux quatre protagonistes, ils sont excellemment bien con\xE7us. \n            Touchanst et int\xE9ressants, ils sont tr\xE8s r\xE9alistes, tout comme les paysages et d\xE9cor.\n            L'histoire avec une enqu\xEAte minutieuse pour retrouver les fameux m\xE9daillons est tr\xE8s bien con\xE7ue.\n            Je vous conseille vivement cette petite histoire\n            \n            ",
              namePersonne: "randy_tout, via gleeph"
            },
            {},
            {}
          )} ${validate_component(Quotation, "Quotation").$$render(
            $$result,
            {
              opinion: "Ce livre \xE9tait tr\xE8s chouette. L'\xE9criture \xE9tait fluide, les lieux \xE9taient d\xE9taill\xE9s de telle mani\xE8re qu'il n'\xE9tait pas difficile de se les repr\xE9senter. Par sa plume l'auteur \xE0 su me faire voyager \xE0 travers son histoire. J'avais parfois m\xEAme l'impression de voir un film tellement les sc\xE8nes se jouaient parfaitement dans mon esprit.\n            Les personnages, eux \xE9taient attachants, toujours en action ce qui fait que l'on ne s'ennuyait jamais.\n            Alors si cette lecture vous int\xE9resse, \xE0 vos poste et bonne lecture, elle le m\xE9rite!",
              namePersonne: "Atraxi, via instagram"
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(SagaTitle, "SagaTitle").$$render($$result, {}, {}, {
        default: () => {
          return `Voir d&#39;autres avis`;
        }
      })} <div class="allOpinion svelte-1whc0me">${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/1.webp",
          name: "Ang\xE9lique",
          link: "https://booknode.com/quatre_tome_1_les_medaillons_oublies_03458466"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/2.webp",
          name: "la_bibiotheque_de_ju",
          link: "https://www.instagram.com/p/Cu4x9pYKeXS/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/3.webp",
          name: "Val\xE9rie",
          link: "https://www.instagram.com/reel/Cu2Eru1RQUU/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/4.webp",
          name: "Clara",
          link: "https://petitehirondelle.fr/2023/08/02/quatre-tome-1-les-medaillons-oublies-mariane-gahengi-maia/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/5.webp",
          name: "MarieFourmi",
          link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3555712"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/6.webp",
          name: "Atraxi",
          link: "https://www.instagram.com/p/Cq7e_VfqIii/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/7.webp",
          name: "lireetpartage",
          link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3316007"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/8.webp",
          name: "Christine\n            Le Bouffo",
          link: "https://www.calameo.com/read/0065702885c591add7a66"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/9.webp",
          name: "bulles de livres",
          link: "https://www.instagram.com/p/CkbuixsruJQ/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/10.webp",
          name: "sylvicha",
          link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3241566"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/11.webp",
          name: "Navol",
          link: "https://www.facebook.com/photo/?fbid=653019436391805&set=a.263320925361660"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/12.webp",
          name: "Mi_and_my_books",
          link: "https://www.instagram.com/p/CpxNqxzKv_Z/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/13.webp",
          name: "Marina_42",
          link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3311295"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/14.webp",
          name: "Codrick \n            S. Mutima",
          link: "https://m.facebook.com/story.php?story_fbid=pfbid02Pm2vnxsDSxgxBWtohi2t4EARcjyMbypbZyC1AyzmAimXtTt6F3XM8wLZTH4dFQfNl&id=100083027117728"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/15.webp",
          name: "Critiques de \n            Margaux",
          link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3158871"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/16.webp",
          name: "Lila Deslys",
          link: "https://lila-deslys.blogspot.com/2022/09/chronique-quatre-1-mariane-gahengi.html"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/17.webp",
          name: "Dubois Gwenola",
          link: "https://booknode.com/quatre_tome_1_les_medaillons_oublies_03458466/commentaires/23889611"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/18.webp",
          name: "bookread",
          link: "https://www.tiktok.com/@.bookread/video/7227892648252640539"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/19.webp",
          name: "lectures_decha",
          link: "https://lecturesdecharlotteword.wordpress.com/2022/09/25/les-medaillons-oublies-de-mariane-gahengi/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/20.webp",
          name: "bull_livres",
          link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3289089"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/21.webp",
          name: "randy_tout",
          link: "https://gleeph.com/share/review/9782384411191-7B36756D831D4C0192129F9A7625000D?_branch_match_id=1187634126043349724&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nL1kvPSU0tyNDLSy3RL400M8jwNU8MqUoCAMDYkNQiAAAA"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/22.webp",
          name: "Nathalie Cussonnier",
          link: "https://www.facebook.com/photo/?fbid=206701555551770&set=a.114106001477993"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/23.webp",
          name: "poudredenuage",
          link: "https://www.instagram.com/p/CsqK3S-qTqv/?img_index=1"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/24.webp",
          name: "Sous la plume\n            de Garance",
          link: "http://souslaplumedegarance.hautetfort.com/archive/2023/05/30/les-medaillon-oublies-tome-1-un-roman-de-fantasy-initiatique-6445559.html#more"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/34.webp",
          name: "Leslivresdepatmol",
          link: "https://www.instagram.com/p/Ct6KjCILnhM/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/25.webp",
          name: "Cassyleedria",
          link: "https://www.tiktok.com/@sarahsandra13/video/7248865921186483483?is_from_webapp=1&web_id=7248153000173471259"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/26.webp",
          name: "valoulauwers",
          link: "https://www.tiktok.com/@valouvalou476/video/7249349193632943387?_r=1&_t=8dW5vuhtkZm"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/27.webp",
          name: "bibli_olivres",
          link: "https://www.instagram.com/p/CuFoRPqtG9K/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/28.webp",
          name: "la.liseuse.en.serie\n            \n            ",
          link: "https://www.instagram.com/p/CuMC9l9qFnl/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/29.webp",
          name: "Livresduracoon",
          link: "https://www.instagram.com/p/Cw9pObDqPuF/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/30.webp",
          name: "onionidra\n            \n            ",
          link: "https://www.instagram.com/p/Cw-xS2GMU7T/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/31.webp",
          name: "LaBulleCoco",
          link: "https://www.babelio.com/livres/Gahengi-Les-medaillons-oublies/1446538/critiques/3622060?modifier=1"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/32.webp",
          name: "dans_les_yeux_de_mallia\n            \n            ",
          link: "https://www.instagram.com/p/Cyz-T3iKkNb/"
        },
        {},
        {}
      )} ${validate_component(Opinion, "Opinion").$$render(
        $$result,
        {
          srcImg: "/images/opinion/33.webp",
          name: "Traicy Books",
          link: "https://www.instagram.com/p/Cy9-D5DupvQ/?img_index=1"
        },
        {},
        {}
      )}</div></div> </section>`;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  fonts: () => fonts9,
  imports: () => imports9,
  index: () => index9,
  stylesheets: () => stylesheets9
});
var index9, component_cache9, component9, imports9, stylesheets9, fonts9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    index9 = 8;
    component9 = async () => component_cache9 ?? (component_cache9 = (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default);
    imports9 = ["_app/immutable/nodes/8.5ef837e0.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js", "_app/immutable/chunks/FilAriane.0e0b4448.js"];
    stylesheets9 = ["_app/immutable/assets/8.0e7452c6.css", "_app/immutable/assets/FilAriane.bd523b4f.css"];
    fonts9 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_ssr();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page2);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "dcw0db"
};
function get_hooks() {
  return {};
}

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index11 = p++;
    indexes.set(thing, index11);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index11] = `["${key2}",${flatten(value2)}]`;
        return index11;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index11] = str;
    return index11;
  }
  const index10 = flatten(value);
  if (index10 < 0)
    return `${index10}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_ssr();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
  "HEAD"
]);
var PAGE_METHODS = /* @__PURE__ */ new Set(["GET", "POST", "HEAD"]);
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
var HttpError = class {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ActionFailure = class {
  /**
   * @param {number} status
   * @param {T} [data]
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, body);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$3.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var encoder$3 = new TextEncoder();
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder$3.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers
    });
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | import('../runtime/control.js').HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = Array.from(ENDPOINT_METHODS).filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push('"parent":1');
  if (node.uses?.route)
    uses.push('"route":1');
  if (node.uses?.url)
    uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler2 = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler2 = mod.GET;
  }
  if (!handler2) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler2(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (ENDPOINT_METHODS.has(method) && !PAGE_METHODS.has(method)) {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
async function load_server_data({
  event,
  state,
  node,
  parent,
  // TODO 2.0: Remove this
  track_server_fetches
}) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      if (track_server_fetches) {
        uses.dependencies.add(url2.href);
      }
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: cloned_headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    else if (key2 === "age")
      age = value;
    else if (key2 === "vary" && value.trim() === "*")
      varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets10 = new Set(client.stylesheets);
  const fonts10 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets10.add(url);
      for (const url of node.fonts)
        fonts10.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets10) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts10) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s(assets)}`,
      `base: ${base_expression}`,
      `env: ${s(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({}),
        track_server_fetches: options2.track_server_fetches
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      e instanceof HttpError ? e.status : 500,
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var encoder = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !state.prerendering) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index10 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index10]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: get_option(nodes, "ssr") ?? true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      set_internal(name, value, { ...defaults, ...opts });
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, opts) {
    const path = opts.path ?? default_path;
    new_cookies[name] = {
      name,
      value,
      options: {
        ...opts,
        path
      }
    };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix2 = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix2) ? decoded.slice(prefix2.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            set_internal(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "fallback",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    set_private_env(
      filter_private_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    set_public_env(
      filter_public_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve }) => resolve(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/netlify-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".DS_Store", "favicon.png", "images/.DS_Store", "images/background.webp", "images/book.webp", "images/line/.DS_Store", "images/line/line1.svg", "images/line/line2.svg", "images/line/line3.svg", "images/line/line4.svg", "images/line/line5.svg", "images/logo/amazon.svg", "images/logo/arrow.svg", "images/logo/cross.svg", "images/logo/externe.svg", "images/logo/facebook.svg", "images/logo/hamburger.svg", "images/logo/instagram.svg", "images/logo/linkedin.svg", "images/logo/mail.svg", "images/logo/maya.svg", "images/logo/quotation.svg", "images/logo/quotationEnd.svg", "images/logo.webp", "images/mariane.webp", "images/opinion/.DS_Store", "images/opinion/1.webp", "images/opinion/10.webp", "images/opinion/11.webp", "images/opinion/12.webp", "images/opinion/13.webp", "images/opinion/14.webp", "images/opinion/15.webp", "images/opinion/16.webp", "images/opinion/17.webp", "images/opinion/18.webp", "images/opinion/19.webp", "images/opinion/2.webp", "images/opinion/20.webp", "images/opinion/21.webp", "images/opinion/22.webp", "images/opinion/23.webp", "images/opinion/24.webp", "images/opinion/25.webp", "images/opinion/26.webp", "images/opinion/27.webp", "images/opinion/28.webp", "images/opinion/29.webp", "images/opinion/3.webp", "images/opinion/30.webp", "images/opinion/31.webp", "images/opinion/32.webp", "images/opinion/33.webp", "images/opinion/34.webp", "images/opinion/4.webp", "images/opinion/5.webp", "images/opinion/6.webp", "images/opinion/7.webp", "images/opinion/8.webp", "images/opinion/9.webp", "images/painting/.DS_Store", "images/painting/leshuiles/.DS_Store", "images/painting/leshuiles/1.webp", "images/painting/leshuiles/2.webp", "images/painting/leshuiles/3.webp", "images/painting/lesnoirsetblancs/.DS_Store", "images/painting/lesnoirsetblancs/1.webp", "images/painting/lesnoirsetblancs/2.webp", "images/painting/lesnoirsetblancs/3.webp", "images/painting/mecanique/.DS_Store", "images/painting/mecanique/1.webp", "images/painting/mecanique/2.webp", "images/painting/mecanique/3.webp", "images/painting/paysage/.DS_Store", "images/painting/paysage/1.webp", "images/painting/paysage/2.webp", "images/painting/paysage/3.webp", "images/photoCreationSerge/.DS_Store", "images/photoCreationSerge/img1.webp", "images/photoCreationSerge/img10.webp", "images/photoCreationSerge/img11.webp", "images/photoCreationSerge/img12.webp", "images/photoCreationSerge/img2.webp", "images/photoCreationSerge/img3.webp", "images/photoCreationSerge/img4.webp", "images/photoCreationSerge/img5.webp", "images/photoCreationSerge/img6.webp", "images/photoCreationSerge/img7.webp", "images/photoCreationSerge/img8.webp", "images/photoCreationSerge/img9.webp", "images/saga/.DS_Store", "images/saga/tome2.webp", "images/serge.webp", "images/tableau1.webp", "images/tableau2.webp", "images/tableau3.webp", "robots.txt"]),
    mimeTypes: { ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml", ".txt": "text/plain" },
    _: {
      client: { "start": "_app/immutable/entry/start.421466d3.js", "app": "_app/immutable/entry/app.ecd02e54.js", "imports": ["_app/immutable/entry/start.421466d3.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/singletons.ce0d6404.js", "_app/immutable/entry/app.ecd02e54.js", "_app/immutable/chunks/scheduler.63274e7e.js", "_app/immutable/chunks/index.2226f978.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6))),
        __memo(() => Promise.resolve().then(() => (init__7(), __exports7))),
        __memo(() => Promise.resolve().then(() => (init__8(), __exports8))),
        __memo(() => Promise.resolve().then(() => (init__9(), __exports9)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/creationSerge",
          pattern: /^\/creationSerge\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/creationSerge/leshuiles",
          pattern: /^\/creationSerge\/leshuiles\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/creationSerge/lesnoirsetblancs",
          pattern: /^\/creationSerge\/lesnoirsetblancs\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        },
        {
          id: "/creationSerge/mecanique",
          pattern: /^\/creationSerge\/mecanique\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 6 },
          endpoint: null
        },
        {
          id: "/creationSerge/paysage",
          pattern: /^\/creationSerge\/paysage\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 7 },
          endpoint: null
        },
        {
          id: "/saga",
          pattern: /^\/saga\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 8 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appPath}/`;
var initialized = server.init({
  // @ts-ignore
  env: Deno.env.toObject()
});
async function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  await initialized;
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file = pathname.substring(1);
  try {
    file = decodeURIComponent(file);
  } catch (err) {
  }
  return manifest.assets.has(file) || manifest.assets.has(file + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=render.js.map
