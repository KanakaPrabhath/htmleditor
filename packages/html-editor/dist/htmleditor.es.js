import be, { createContext as dt, useContext as ft, useReducer as pt, useMemo as me, useState as ye, useCallback as W, useRef as te, useEffect as oe, forwardRef as we, createElement as ke, useImperativeHandle as gt } from "react";
import { v4 as Re } from "uuid";
function ht(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var de = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function mt() {
  if (Le) return ie;
  Le = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function l(r, i, c) {
    var o = null;
    if (c !== void 0 && (o = "" + c), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      c = {};
      for (var u in i)
        u !== "key" && (c[u] = i[u]);
    } else c = i;
    return i = c.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return ie.Fragment = n, ie.jsx = l, ie.jsxs = l, ie;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function yt() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === U ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case O:
          return "Fragment";
        case _:
          return "Profiler";
        case R:
          return "StrictMode";
        case S:
          return "Suspense";
        case L:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case w:
            return "Portal";
          case k:
            return t.displayName || "Context";
          case A:
            return (t._context.displayName || "Context") + ".Consumer";
          case s:
            var f = t.render;
            return t = t.displayName, t || (t = f.displayName || f.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case M:
            return f = t.displayName || null, f !== null ? f : e(t.type) || "Memo";
          case B:
            f = t._payload, t = t._init;
            try {
              return e(t(f));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function l(t) {
      try {
        n(t);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var v = f.error, b = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return v.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), n(t);
      }
    }
    function r(t) {
      if (t === O) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === B)
        return "<...>";
      try {
        var f = e(t);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = V.A;
      return t === null ? null : t.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function o(t) {
      if (H.call(t, "key")) {
        var f = Object.getOwnPropertyDescriptor(t, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function u(t, f) {
      function v() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: v,
        configurable: !0
      });
    }
    function y() {
      var t = e(this.type);
      return X[t] || (X[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function p(t, f, v, b, I, j) {
      var T = v.ref;
      return t = {
        $$typeof: z,
        type: t,
        key: f,
        props: v,
        _owner: b
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function E(t, f, v, b, I, j) {
      var T = f.children;
      if (T !== void 0)
        if (b)
          if (Y(T)) {
            for (b = 0; b < T.length; b++)
              g(T[b]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(T);
      if (H.call(f, "key")) {
        T = e(t);
        var h = Object.keys(f).filter(function(D) {
          return D !== "key";
        });
        b = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", d[T + b] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          T,
          h,
          T
        ), d[T + b] = !0);
      }
      if (T = null, v !== void 0 && (l(v), T = "" + v), o(f) && (l(f.key), T = "" + f.key), "key" in f) {
        v = {};
        for (var N in f)
          N !== "key" && (v[N] = f[N]);
      } else v = f;
      return T && u(
        v,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), p(
        t,
        T,
        v,
        i(),
        I,
        j
      );
    }
    function g(t) {
      C(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === B && (t._payload.status === "fulfilled" ? C(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function C(t) {
      return typeof t == "object" && t !== null && t.$$typeof === z;
    }
    var x = be, z = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), k = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), V = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, Y = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var K, X = {}, ee = x.react_stack_bottom_frame.bind(
      x,
      c
    )(), ne = Q(r(c)), d = {};
    se.Fragment = O, se.jsx = function(t, f, v) {
      var b = 1e4 > V.recentlyCreatedOwnerStacks++;
      return E(
        t,
        f,
        v,
        !1,
        b ? Error("react-stack-top-frame") : ee,
        b ? Q(r(t)) : ne
      );
    }, se.jsxs = function(t, f, v) {
      var b = 1e4 > V.recentlyCreatedOwnerStacks++;
      return E(
        t,
        f,
        v,
        !0,
        b ? Error("react-stack-top-frame") : ee,
        b ? Q(r(t)) : ne
      );
    };
  })()), se;
}
var Be;
function Et() {
  return Be || (Be = 1, process.env.NODE_ENV === "production" ? de.exports = mt() : de.exports = yt()), de.exports;
}
var a = Et();
const le = "A4", ae = "<p><br></p>", bt = "continuous", Ce = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ce = (e, n = le) => ({
  id: Re(),
  index: e,
  size: n,
  content: ae,
  images: [],
  isBreakPoint: !1
}), he = (e) => typeof e != "string" || e.trim() === "" ? ae : e, tt = (e, n = le) => (e.length > 0 ? e : [ce(0, n)]).map((r, i) => ({
  id: r.id || Re(),
  index: i,
  size: r.size || n,
  content: he(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), vt = (e = le) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (Ce[e] || Ce.A4).height
}], Se = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), l = e.pageSize || le, r = tt(e.pages || [ce(0, l)], l);
  return {
    id: Re(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: l,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || bt,
    continuousContent: e.continuousContent || ae,
    pageBoundaries: e.pageBoundaries || vt(l)
  };
}, $ = {
  INITIALIZE_DOCUMENT: "INITIALIZE_DOCUMENT",
  UPDATE_TITLE: "UPDATE_TITLE",
  UPDATE_PAGE_CONTENT: "UPDATE_PAGE_CONTENT",
  UPDATE_PAGES: "UPDATE_PAGES",
  ADD_PAGE: "ADD_PAGE",
  DELETE_PAGE: "DELETE_PAGE",
  SET_ACTIVE_PAGE: "SET_ACTIVE_PAGE",
  UPDATE_PAGE_SIZE: "UPDATE_PAGE_SIZE",
  RESET_DOCUMENT: "RESET_DOCUMENT",
  UPDATE_CONTINUOUS_CONTENT: "UPDATE_CONTINUOUS_CONTENT",
  UPDATE_PAGE_BOUNDARIES: "UPDATE_PAGE_BOUNDARIES",
  ADD_PAGE_BREAK: "ADD_PAGE_BREAK",
  REMOVE_PAGE_BREAK: "REMOVE_PAGE_BREAK",
  SET_EDITOR_MODE: "SET_EDITOR_MODE",
  INSERT_PAGE_AT: "INSERT_PAGE_AT",
  MOVE_PAGE_TO: "MOVE_PAGE_TO",
  DUPLICATE_PAGE: "DUPLICATE_PAGE"
}, xt = (e, n) => {
  const l = (/* @__PURE__ */ new Date()).toISOString();
  switch (n.type) {
    case $.INITIALIZE_DOCUMENT: {
      const { initialContent: r = ae, pageSize: i = le } = n.payload || {}, c = { ...ce(0, i), content: he(r) };
      return Se({
        title: e.title,
        pageSize: i,
        pages: [c]
      });
    }
    case $.UPDATE_TITLE:
      return {
        ...e,
        title: n.payload,
        updatedAt: l
      };
    case $.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: i } = n.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const c = [...e.pages];
      return c[r] = {
        ...c[r],
        content: he(i)
      }, {
        ...e,
        pages: c,
        updatedAt: l
      };
    }
    case $.UPDATE_PAGES: {
      const r = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, i = tt(r.pages || [], e.pageSize), c = Array.isArray(r.pageBreaks) ? r.pageBreaks : i.slice(0, -1).map((o, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: c,
        totalPages: i.length,
        updatedAt: l
      };
    }
    case $.ADD_PAGE: {
      const r = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(r, 0, ce(r, e.pageSize));
      const c = i.map((u, y) => ({
        ...u,
        index: y,
        size: e.pageSize
      })), o = c.slice(0, -1).map((u, y) => ({
        id: `auto-break-${y}`,
        pageNumber: y + 1
      }));
      return {
        ...e,
        pages: c,
        activePage: r,
        pageBreaks: o,
        totalPages: c.length,
        updatedAt: l
      };
    }
    case $.DELETE_PAGE: {
      const r = n.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(r, 1);
      const c = i.map((y, p) => ({
        ...y,
        index: p,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= c.length ? o = c.length - 1 : r <= o && o > 0 && (o -= 1);
      const u = c.slice(0, -1).map((y, p) => ({
        id: `auto-break-${p}`,
        pageNumber: p + 1
      }));
      return {
        ...e,
        pages: c,
        activePage: o,
        pageBreaks: u,
        totalPages: c.length,
        updatedAt: l
      };
    }
    case $.SET_ACTIVE_PAGE: {
      const r = n.payload;
      if (r === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= i ? e : {
        ...e,
        activePage: r,
        updatedAt: l
      };
    }
    case $.UPDATE_PAGE_SIZE: {
      const r = n.payload;
      if (r === e.pageSize)
        return e;
      if (!Ce[r])
        return console.warn(`Invalid page size: ${r}`), e;
      const i = e.pages.map((o, u) => ({
        ...o,
        index: u,
        size: r
      })), c = i.slice(0, -1).map((o, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: c,
        updatedAt: l
      };
    }
    case $.RESET_DOCUMENT:
      return Se();
    case $.UPDATE_CONTINUOUS_CONTENT: {
      const r = he(n.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: l
      };
    }
    case $.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(n.payload) ? n.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const i = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: i,
        updatedAt: l
      };
    }
    case $.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: i } = n.payload || {}, c = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (r === "end")
        o = o + c + "<p><br></p>";
      else if (typeof r == "number") {
        const u = o.substring(0, r), y = o.substring(r);
        o = u + c + y;
      } else if (typeof i == "number" && typeof document < "u") {
        const u = document.createElement("div");
        u.innerHTML = o;
        const y = u.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && y.length === 0)
          o = o + c + "<p><br></p>";
        else if (i < y.length) {
          const p = y[i], E = document.createElement("page-break");
          E.setAttribute("data-page-break", "true"), E.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const g = document.createElement("p");
          g.innerHTML = "<br>", p.parentNode.insertBefore(E, p.nextSibling), E.parentNode.insertBefore(g, E.nextSibling), o = u.innerHTML;
        } else
          o = o + c + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: l
      };
    }
    case $.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = n.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const c = i.querySelectorAll('page-break, [data-page-break="true"]');
      return c[r] && c[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((u, y) => {
        u.setAttribute("data-page-number", String(y + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: l
      };
    }
    case $.SET_EDITOR_MODE: {
      const r = n.payload;
      if (r === e.editorMode)
        return e;
      let i = e.continuousContent, c = e.pages;
      return r === "continuous" ? i = e.pages.map((u) => u.content).filter((u) => u && u !== ae).join(`
`) || ae : e.continuousContent && e.continuousContent !== ae && (c = [{ ...ce(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: c,
        updatedAt: l
      };
    }
    default:
      return e;
  }
}, rt = dt(null), Xr = ({ children: e, initialState: n = {} }) => {
  const [l, r] = pt(xt, Se(n)), i = me(() => ({
    initializeDocument: (o) => r({ type: $.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => r({ type: $.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => r({ type: $.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => r({ type: $.UPDATE_PAGES, payload: o }),
    addPage: (o) => r({ type: $.ADD_PAGE, payload: o }),
    deletePage: (o) => r({ type: $.DELETE_PAGE, payload: o }),
    setActivePage: (o) => r({ type: $.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => r({ type: $.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => r({ type: $.RESET_DOCUMENT }),
    updateContinuousContent: (o) => r({ type: $.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => r({ type: $.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => r({ type: $.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => r({ type: $.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => r({ type: $.SET_EDITOR_MODE, payload: o }),
    insertPageAt: (o) => r({ type: $.INSERT_PAGE_AT, payload: o }),
    movePageTo: (o) => r({ type: $.MOVE_PAGE_TO, payload: o }),
    duplicatePage: (o) => r({ type: $.DUPLICATE_PAGE, payload: o })
  }), []), c = me(() => ({
    state: l,
    actions: i,
    dispatch: r
  }), [l, i]);
  return /* @__PURE__ */ a.jsx(rt.Provider, { value: c, children: e });
}, nt = () => {
  const e = ft(rt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, ot = () => {
  const { state: e } = nt();
  return e;
}, at = () => {
  const { actions: e } = nt();
  return e;
};
var fe = { exports: {} }, pe = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Tt() {
  if ($e) return q;
  $e = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, l = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, z = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function A(s) {
    if (typeof s == "object" && s !== null) {
      var S = s.$$typeof;
      switch (S) {
        case n:
          switch (s = s.type, s) {
            case y:
            case p:
            case r:
            case c:
            case i:
            case g:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case u:
                case E:
                case z:
                case x:
                case o:
                  return s;
                default:
                  return S;
              }
          }
        case l:
          return S;
      }
    }
  }
  function k(s) {
    return A(s) === p;
  }
  return q.AsyncMode = y, q.ConcurrentMode = p, q.ContextConsumer = u, q.ContextProvider = o, q.Element = n, q.ForwardRef = E, q.Fragment = r, q.Lazy = z, q.Memo = x, q.Portal = l, q.Profiler = c, q.StrictMode = i, q.Suspense = g, q.isAsyncMode = function(s) {
    return k(s) || A(s) === y;
  }, q.isConcurrentMode = k, q.isContextConsumer = function(s) {
    return A(s) === u;
  }, q.isContextProvider = function(s) {
    return A(s) === o;
  }, q.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === n;
  }, q.isForwardRef = function(s) {
    return A(s) === E;
  }, q.isFragment = function(s) {
    return A(s) === r;
  }, q.isLazy = function(s) {
    return A(s) === z;
  }, q.isMemo = function(s) {
    return A(s) === x;
  }, q.isPortal = function(s) {
    return A(s) === l;
  }, q.isProfiler = function(s) {
    return A(s) === c;
  }, q.isStrictMode = function(s) {
    return A(s) === i;
  }, q.isSuspense = function(s) {
    return A(s) === g;
  }, q.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === r || s === p || s === c || s === i || s === g || s === C || typeof s == "object" && s !== null && (s.$$typeof === z || s.$$typeof === x || s.$$typeof === o || s.$$typeof === u || s.$$typeof === E || s.$$typeof === O || s.$$typeof === R || s.$$typeof === _ || s.$$typeof === w);
  }, q.typeOf = A, q;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function At() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, l = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, z = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function A(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === r || m === p || m === c || m === i || m === g || m === C || typeof m == "object" && m !== null && (m.$$typeof === z || m.$$typeof === x || m.$$typeof === o || m.$$typeof === u || m.$$typeof === E || m.$$typeof === O || m.$$typeof === R || m.$$typeof === _ || m.$$typeof === w);
    }
    function k(m) {
      if (typeof m == "object" && m !== null) {
        var re = m.$$typeof;
        switch (re) {
          case n:
            var ue = m.type;
            switch (ue) {
              case y:
              case p:
              case r:
              case c:
              case i:
              case g:
                return ue;
              default:
                var Ie = ue && ue.$$typeof;
                switch (Ie) {
                  case u:
                  case E:
                  case z:
                  case x:
                  case o:
                    return Ie;
                  default:
                    return re;
                }
            }
          case l:
            return re;
        }
      }
    }
    var s = y, S = p, L = u, M = o, B = n, J = E, U = r, V = z, H = x, Y = l, Q = c, K = i, X = g, ee = !1;
    function ne(m) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(m) || k(m) === y;
    }
    function d(m) {
      return k(m) === p;
    }
    function t(m) {
      return k(m) === u;
    }
    function f(m) {
      return k(m) === o;
    }
    function v(m) {
      return typeof m == "object" && m !== null && m.$$typeof === n;
    }
    function b(m) {
      return k(m) === E;
    }
    function I(m) {
      return k(m) === r;
    }
    function j(m) {
      return k(m) === z;
    }
    function T(m) {
      return k(m) === x;
    }
    function h(m) {
      return k(m) === l;
    }
    function N(m) {
      return k(m) === c;
    }
    function D(m) {
      return k(m) === i;
    }
    function Z(m) {
      return k(m) === g;
    }
    G.AsyncMode = s, G.ConcurrentMode = S, G.ContextConsumer = L, G.ContextProvider = M, G.Element = B, G.ForwardRef = J, G.Fragment = U, G.Lazy = V, G.Memo = H, G.Portal = Y, G.Profiler = Q, G.StrictMode = K, G.Suspense = X, G.isAsyncMode = ne, G.isConcurrentMode = d, G.isContextConsumer = t, G.isContextProvider = f, G.isElement = v, G.isForwardRef = b, G.isFragment = I, G.isLazy = j, G.isMemo = T, G.isPortal = h, G.isProfiler = N, G.isStrictMode = D, G.isSuspense = Z, G.isValidElementType = A, G.typeOf = k;
  })()), G;
}
var qe;
function it() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? pe.exports = Tt() : pe.exports = At()), pe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ve, Ge;
function Pt() {
  if (Ge) return ve;
  Ge = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
  function r(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var o = {}, u = 0; u < 10; u++)
        o["_" + String.fromCharCode(u)] = u;
      var y = Object.getOwnPropertyNames(o).map(function(E) {
        return o[E];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        p[E] = E;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ve = i() ? Object.assign : function(c, o) {
    for (var u, y = r(c), p, E = 1; E < arguments.length; E++) {
      u = Object(arguments[E]);
      for (var g in u)
        n.call(u, g) && (y[g] = u[g]);
      if (e) {
        p = e(u);
        for (var C = 0; C < p.length; C++)
          l.call(u, p[C]) && (y[p[C]] = u[p[C]]);
      }
    }
    return y;
  }, ve;
}
var xe, He;
function je() {
  if (He) return xe;
  He = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xe = e, xe;
}
var Te, Ye;
function st() {
  return Ye || (Ye = 1, Te = Function.call.bind(Object.prototype.hasOwnProperty)), Te;
}
var Ae, Fe;
function _t() {
  if (Fe) return Ae;
  Fe = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ je(), l = {}, r = /* @__PURE__ */ st();
    e = function(c) {
      var o = "Warning: " + c;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(c, o, u, y, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in c)
        if (r(c, E)) {
          var g;
          try {
            if (typeof c[E] != "function") {
              var C = Error(
                (y || "React class") + ": " + u + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            g = c[E](o, E, y, u, null, n);
          } catch (z) {
            g = z;
          }
          if (g && !(g instanceof Error) && e(
            (y || "React class") + ": type specification of " + u + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in l)) {
            l[g.message] = !0;
            var x = p ? p() : "";
            e(
              "Failed " + u + " type: " + g.message + (x ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (l = {});
  }, Ae = i, Ae;
}
var Pe, Ve;
function kt() {
  if (Ve) return Pe;
  Ve = 1;
  var e = it(), n = Pt(), l = /* @__PURE__ */ je(), r = /* @__PURE__ */ st(), i = /* @__PURE__ */ _t(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(u) {
    var y = "Warning: " + u;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Pe = function(u, y) {
    var p = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function g(d) {
      var t = d && (p && d[p] || d[E]);
      if (typeof t == "function")
        return t;
    }
    var C = "<<anonymous>>", x = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: _(),
      arrayOf: A,
      element: k(),
      elementType: s(),
      instanceOf: S,
      node: J(),
      objectOf: M,
      oneOf: L,
      oneOfType: B,
      shape: V,
      exact: H
    };
    function z(d, t) {
      return d === t ? d !== 0 || 1 / d === 1 / t : d !== d && t !== t;
    }
    function w(d, t) {
      this.message = d, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function O(d) {
      if (process.env.NODE_ENV !== "production")
        var t = {}, f = 0;
      function v(I, j, T, h, N, D, Z) {
        if (h = h || C, D = D || T, Z !== l) {
          if (y) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = h + ":" + T;
            !t[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            f < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + h + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), t[re] = !0, f++);
          }
        }
        return j[T] == null ? I ? j[T] === null ? new w("The " + N + " `" + D + "` is marked as required " + ("in `" + h + "`, but its value is `null`.")) : new w("The " + N + " `" + D + "` is marked as required in " + ("`" + h + "`, but its value is `undefined`.")) : null : d(j, T, h, N, D);
      }
      var b = v.bind(null, !1);
      return b.isRequired = v.bind(null, !0), b;
    }
    function R(d) {
      function t(f, v, b, I, j, T) {
        var h = f[v], N = K(h);
        if (N !== d) {
          var D = X(h);
          return new w(
            "Invalid " + I + " `" + j + "` of type " + ("`" + D + "` supplied to `" + b + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return O(t);
    }
    function _() {
      return O(o);
    }
    function A(d) {
      function t(f, v, b, I, j) {
        if (typeof d != "function")
          return new w("Property `" + j + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var T = f[v];
        if (!Array.isArray(T)) {
          var h = K(T);
          return new w("Invalid " + I + " `" + j + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected an array."));
        }
        for (var N = 0; N < T.length; N++) {
          var D = d(T, N, b, I, j + "[" + N + "]", l);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return O(t);
    }
    function k() {
      function d(t, f, v, b, I) {
        var j = t[f];
        if (!u(j)) {
          var T = K(j);
          return new w("Invalid " + b + " `" + I + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(d);
    }
    function s() {
      function d(t, f, v, b, I) {
        var j = t[f];
        if (!e.isValidElementType(j)) {
          var T = K(j);
          return new w("Invalid " + b + " `" + I + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(d);
    }
    function S(d) {
      function t(f, v, b, I, j) {
        if (!(f[v] instanceof d)) {
          var T = d.name || C, h = ne(f[v]);
          return new w("Invalid " + I + " `" + j + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return O(t);
    }
    function L(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), o;
      function t(f, v, b, I, j) {
        for (var T = f[v], h = 0; h < d.length; h++)
          if (z(T, d[h]))
            return null;
        var N = JSON.stringify(d, function(Z, m) {
          var re = X(m);
          return re === "symbol" ? String(m) : m;
        });
        return new w("Invalid " + I + " `" + j + "` of value `" + String(T) + "` " + ("supplied to `" + b + "`, expected one of " + N + "."));
      }
      return O(t);
    }
    function M(d) {
      function t(f, v, b, I, j) {
        if (typeof d != "function")
          return new w("Property `" + j + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var T = f[v], h = K(T);
        if (h !== "object")
          return new w("Invalid " + I + " `" + j + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected an object."));
        for (var N in T)
          if (r(T, N)) {
            var D = d(T, N, b, I, j + "." + N, l);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return O(t);
    }
    function B(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var t = 0; t < d.length; t++) {
        var f = d[t];
        if (typeof f != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(f) + " at index " + t + "."
          ), o;
      }
      function v(b, I, j, T, h) {
        for (var N = [], D = 0; D < d.length; D++) {
          var Z = d[D], m = Z(b, I, j, T, h, l);
          if (m == null)
            return null;
          m.data && r(m.data, "expectedType") && N.push(m.data.expectedType);
        }
        var re = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new w("Invalid " + T + " `" + h + "` supplied to " + ("`" + j + "`" + re + "."));
      }
      return O(v);
    }
    function J() {
      function d(t, f, v, b, I) {
        return Y(t[f]) ? null : new w("Invalid " + b + " `" + I + "` supplied to " + ("`" + v + "`, expected a ReactNode."));
      }
      return O(d);
    }
    function U(d, t, f, v, b) {
      return new w(
        (d || "React class") + ": " + t + " type `" + f + "." + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function V(d) {
      function t(f, v, b, I, j) {
        var T = f[v], h = K(T);
        if (h !== "object")
          return new w("Invalid " + I + " `" + j + "` of type `" + h + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var N in d) {
          var D = d[N];
          if (typeof D != "function")
            return U(b, I, j, N, X(D));
          var Z = D(T, N, b, I, j + "." + N, l);
          if (Z)
            return Z;
        }
        return null;
      }
      return O(t);
    }
    function H(d) {
      function t(f, v, b, I, j) {
        var T = f[v], h = K(T);
        if (h !== "object")
          return new w("Invalid " + I + " `" + j + "` of type `" + h + "` " + ("supplied to `" + b + "`, expected `object`."));
        var N = n({}, f[v], d);
        for (var D in N) {
          var Z = d[D];
          if (r(d, D) && typeof Z != "function")
            return U(b, I, j, D, X(Z));
          if (!Z)
            return new w(
              "Invalid " + I + " `" + j + "` key `" + D + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(f[v], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var m = Z(T, D, b, I, j + "." + D, l);
          if (m)
            return m;
        }
        return null;
      }
      return O(t);
    }
    function Y(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(Y);
          if (d === null || u(d))
            return !0;
          var t = g(d);
          if (t) {
            var f = t.call(d), v;
            if (t !== d.entries) {
              for (; !(v = f.next()).done; )
                if (!Y(v.value))
                  return !1;
            } else
              for (; !(v = f.next()).done; ) {
                var b = v.value;
                if (b && !Y(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(d, t) {
      return d === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
    }
    function K(d) {
      var t = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : Q(t, d) ? "symbol" : t;
    }
    function X(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var t = K(d);
      if (t === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return t;
    }
    function ee(d) {
      var t = X(d);
      switch (t) {
        case "array":
        case "object":
          return "an " + t;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + t;
        default:
          return t;
      }
    }
    function ne(d) {
      return !d.constructor || !d.constructor.name ? C : d.constructor.name;
    }
    return x.checkPropTypes = i, x.resetWarningCache = i.resetWarningCache, x.PropTypes = x, x;
  }, Pe;
}
var _e, We;
function Ct() {
  if (We) return _e;
  We = 1;
  var e = /* @__PURE__ */ je();
  function n() {
  }
  function l() {
  }
  return l.resetWarningCache = n, _e = function() {
    function r(o, u, y, p, E, g) {
      if (g !== e) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var c = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: l,
      resetWarningCache: n
    };
    return c.PropTypes = c, c;
  }, _e;
}
var Je;
function St() {
  if (Je) return fe.exports;
  if (Je = 1, process.env.NODE_ENV !== "production") {
    var e = it(), n = !0;
    fe.exports = /* @__PURE__ */ kt()(e.isElement, n);
  } else
    fe.exports = /* @__PURE__ */ Ct()();
  return fe.exports;
}
var wt = /* @__PURE__ */ St();
const P = /* @__PURE__ */ ht(wt), Rt = {
  "10px": "1",
  "12px": "2",
  "14px": "3",
  "16px": "4",
  "18px": "5",
  "24px": "6",
  "32px": "7"
}, Ke = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: "12px"
}, jt = () => {
  const [e, n] = ye(Ke), l = W((o) => {
    n((u) => ({
      ...u,
      alignLeft: o === "left",
      alignCenter: o === "center",
      alignRight: o === "right",
      alignJustify: o === "justify"
    }));
  }, []), r = W((o) => {
    try {
      const u = window.getSelection();
      if (!u || u.rangeCount === 0)
        return !1;
      const y = u.getRangeAt(0);
      if (!y.toString())
        return n((E) => ({ ...E, fontSize: o })), !1;
      try {
        const E = document.createElement("span");
        E.style.fontSize = o;
        const g = y.extractContents();
        return E.appendChild(g), y.insertNode(E), y.selectNodeContents(E), u.removeAllRanges(), u.addRange(y), n((C) => ({ ...C, fontSize: o })), !0;
      } catch {
        const g = Rt[o] || "2";
        return document.execCommand("fontSize", !1, g), n((C) => ({ ...C, fontSize: o })), !0;
      }
    } catch (u) {
      return console.warn("[useFormatting] Font size change failed:", u), !1;
    }
  }, []), i = W((o, u = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (o === "fontSize") {
        r(u);
        return;
      }
      switch (document.execCommand(o, !1, u) || console.warn(`[useFormatting] Command "${o}" failed`), o) {
        case "bold":
          n((p) => ({ ...p, bold: !p.bold }));
          break;
        case "italic":
          n((p) => ({ ...p, italic: !p.italic }));
          break;
        case "underline":
          n((p) => ({ ...p, underline: !p.underline }));
          break;
        case "strikethrough":
          n((p) => ({ ...p, strikethrough: !p.strikethrough }));
          break;
        case "justifyLeft":
          l("left");
          break;
        case "justifyCenter":
          l("center");
          break;
        case "justifyRight":
          l("right");
          break;
        case "justifyFull":
          l("justify");
          break;
        case "fontName":
          n((p) => ({ ...p, fontFamily: u }));
          break;
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${o}":`, y);
    }
  }, [r, l]), c = W(() => {
    n(Ke);
  }, []);
  return {
    currentFormat: e,
    formatText: i,
    resetFormat: c
  };
}, ge = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, Ze = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Nt = 300, Ot = 500, Mt = 50, Dt = 'page-break, [data-page-break="true"]', It = (e, n) => {
  const l = at(), r = te(null), i = te(null), c = te(e), o = te(!1);
  oe(() => {
    c.current = e;
  }, [e]), oe(() => () => {
    r.current && clearTimeout(r.current), i.current && clearTimeout(i.current);
  }, []);
  const u = W((_, A) => {
    if (!_ || _.length === 0)
      return null;
    let k = 0;
    for (let s = 0; s < _.length; s++) {
      const S = _[s];
      if (!S || !S.getBoundingClientRect)
        continue;
      const L = S.getBoundingClientRect().height;
      if (k + L > A)
        return {
          overflowIndex: s,
          overflowElement: S,
          accumulatedHeight: k
        };
      k += L;
    }
    return null;
  }, []), y = W((_, A) => {
    if (!_ || !n?.current)
      return !1;
    try {
      const k = n.current, s = document.createElement("page-break");
      return s.setAttribute("data-page-break", "true"), s.setAttribute("contenteditable", "false"), s.setAttribute("data-page-number", A || "2"), _.parentNode.insertBefore(s, _), !0;
    } catch (k) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", k), !1;
    }
  }, [n]), p = W((_ = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const A = _.pageSize || c.current || "A4", k = ge[A] || ge.A4, s = n.current, S = s.querySelectorAll(Dt), L = [];
    L.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: k.height
    });
    const M = s.getBoundingClientRect(), B = s.scrollTop;
    return S.forEach((J, U) => {
      const H = J.getBoundingClientRect().top - M.top + B;
      L.push({
        id: `page-${U + 1}`,
        pageNumber: U + 2,
        top: H,
        height: k.height
      });
    }), L;
  }, [n]), E = W((_ = {}) => {
    const A = p(_);
    return l.updatePageBoundaries(A), A;
  }, [p, l]), g = W(() => {
    if (!(!n?.current || o.current))
      try {
        o.current = !0;
        const _ = n.current, A = c.current || "A4", s = (ge[A] || ge.A4).height - Ze.top - Ze.bottom, S = Array.from(_.children);
        if (S.length === 0)
          return;
        const L = S.filter(
          (U) => U.tagName === "PAGE-BREAK" || U.getAttribute("data-page-break") === "true"
        ), M = [];
        let B = [];
        for (const U of S)
          U.tagName === "PAGE-BREAK" || U.getAttribute("data-page-break") === "true" ? B.length > 0 && (M.push(B), B = []) : B.push(U);
        B.length > 0 && M.push(B), M.length === 0 && S.length > 0 && M.push(S.filter(
          (U) => !(U.tagName === "PAGE-BREAK" || U.getAttribute("data-page-break") === "true")
        ));
        let J = !1;
        for (let U = 0; U < M.length; U++) {
          const V = M[U], H = u(V, s);
          if (H && H.overflowIndex > 0) {
            const Y = U + 2;
            if (y(H.overflowElement, Y)) {
              J = !0;
              break;
            }
          }
        }
        if (J) {
          const U = _.innerHTML;
          l.updateContinuousContent(U), setTimeout(() => {
            E();
          }, Mt);
        }
      } catch (_) {
        console.warn("[checkAndReflow] Reflow failed:", _);
      } finally {
        o.current = !1;
      }
  }, [n, u, y, l, E]), C = W((_ = Ot) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, g();
    }, _);
  }, [g]), x = W((_ = {}) => {
    r.current && clearTimeout(r.current);
    const A = typeof _.delay == "number" ? _.delay : Nt;
    r.current = setTimeout(() => {
      r.current = null, E(_);
    }, Math.max(0, A));
  }, [E]), z = W((_) => {
    if (!_?.current || !n?.current)
      return 0;
    try {
      const A = _.current, s = n.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (s.length === 0)
        return 0;
      const S = A.getBoundingClientRect(), L = S.top + S.height / 2;
      for (let M = s.length - 1; M >= 0; M--)
        if (s[M].getBoundingClientRect().top < L)
          return M + 1;
      return 0;
    } catch (A) {
      return console.warn("[getCurrentPage] Failed to calculate page:", A), 0;
    }
  }, [n]), w = W((_) => {
    if (!n?.current)
      return;
    const A = n.current;
    A.focus();
    try {
      let k = null, s = 0;
      if (_ === 0)
        k = A.firstChild, s = 0;
      else {
        const L = A.querySelectorAll('page-break, [data-page-break="true"]')[_ - 1];
        L && L.nextSibling && (k = L.nextSibling, s = 0);
      }
      if (k) {
        const S = document.createRange(), L = window.getSelection();
        k.nodeType === Node.TEXT_NODE ? S.setStart(k, s) : S.setStart(k, 0), S.collapse(!0), L.removeAllRanges(), L.addRange(S);
      }
    } catch (k) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", k);
    }
  }, [n]), O = W((_, A) => {
    if (!A?.current || !n?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const k = A.current, s = n.current;
    try {
      let S = null;
      if (_ === 0)
        S = s;
      else {
        const M = s.querySelectorAll('page-break, [data-page-break="true"]')[_ - 1];
        if (M)
          S = M;
        else {
          console.warn("[scrollToPage] Page break not found for page", _);
          return;
        }
      }
      if (S) {
        const L = S.getBoundingClientRect(), M = k.getBoundingClientRect(), B = k.scrollTop + (L.top - M.top);
        console.log("[scrollToPage] Scrolling to page", _, "scrollTop:", B), k.scrollTo({
          top: B,
          behavior: "smooth"
        }), setTimeout(() => {
          w(_);
        }, 400);
      }
    } catch (S) {
      console.error("[scrollToPage] Error:", S);
    }
  }, [n, w]), R = W((_) => {
    if (!n?.current)
      return !1;
    const A = n.current;
    if (p().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const s = Array.from(A.querySelectorAll('page-break, [data-page-break="true"]'));
      if (_ > s.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const S = window.getSelection();
      let L = !1, M = [], B = null;
      if (_ === 0) {
        const V = s[0];
        if (!V)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let H = A.firstChild;
        for (; H && H !== V; )
          M.push(H), H = H.nextSibling;
        B = V;
      } else {
        const V = s[_ - 1];
        if (!V)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const H = s[_];
        let Y = V.nextSibling;
        for (; Y && Y !== H; )
          M.push(Y), Y = Y.nextSibling;
        B = V;
      }
      if (S && S.rangeCount > 0) {
        const H = S.getRangeAt(0).startContainer;
        for (const Y of M)
          if (Y.contains(H) || Y === H) {
            L = !0;
            break;
          }
      }
      B && B.parentNode && B.remove(), M.forEach((V) => {
        V.parentNode && V.remove();
      }), A.querySelectorAll('page-break, [data-page-break="true"]').forEach((V, H) => {
        V.setAttribute("data-page-number", String(H + 2));
      }), L && setTimeout(() => {
        w(0);
      }, 50);
      const U = A.innerHTML;
      return l.updateContinuousContent(U), setTimeout(() => {
        E();
      }, 100), !0;
    } catch (s) {
      return console.error("[removePageAndContent] Failed to remove page:", s), !1;
    }
  }, [n, p, l, E, w]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: x,
    updateBoundaries: E,
    getCurrentPage: z,
    scrollToPage: O,
    positionCursorAtPage: w,
    checkAndReflow: g,
    triggerAutoReflow: C,
    removePageAndContent: R,
    boundaryTimeoutRef: r,
    reflowTimeoutRef: i
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, l, r) => r ? r.toUpperCase() : l.toLowerCase()
), Xe = (e) => {
  const n = zt(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, ct = (...e) => e.filter((n, l, r) => !!n && n.trim() !== "" && r.indexOf(n) === l).join(" ").trim(), Bt = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = we(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: c,
    iconNode: o,
    ...u
  }, y) => ke(
    "svg",
    {
      ref: y,
      ...$t,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(l) * 24 / Number(n) : l,
      className: ct("lucide", i),
      ...!c && !Bt(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...o.map(([p, E]) => ke(p, E)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F = (e, n) => {
  const l = we(
    ({ className: r, ...i }, c) => ke(Ut, {
      ref: c,
      iconNode: n,
      className: ct(
        `lucide-${Lt(Xe(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return l.displayName = Xe(e), l;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Gt = F("bold", qt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Yt = F("chevron-left", Ht);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Vt = F("chevron-right", Ft);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Jt = F("file-check", Wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ee = F("file-text", Kt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Xt = F("hash", Zt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], er = F("heading-1", Qt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], rr = F("heading-2", tr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], or = F("heading-3", nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ir = F("image", ar);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], cr = F("italic", sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], ur = F("link", lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], fr = F("list-ordered", dr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], lt = F("list", pr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], hr = F("plus", gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], yr = F("redo", mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], br = F("settings", Er);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], xr = F("square-check-big", vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Ar = F("strikethrough", Tr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], _r = F("table", Pr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Cr = F("text-align-center", kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], wr = F("text-align-end", Sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], jr = F("text-align-justify", Rr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Or = F("text-align-start", Nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Dr = F("underline", Mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Lr = F("undo", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Br = F("x", zr), $r = ({ editorView: e, isCollapsed: n, onToggle: l, wordCount: r, pageCount: i }) => {
  const c = ot(), { pages: o, activePage: u, continuousContent: y, editorMode: p } = c, [E, g] = ye(0), [C, x] = ye([]);
  oe(() => {
    if (r !== void 0 && i !== void 0) {
      if (g(r), y) {
        const R = document.createElement("div");
        R.innerHTML = y;
        const _ = R.querySelectorAll("h1, h2, h3, h4, h5, h6"), A = Array.from(_).map((k, s) => {
          const S = parseInt(k.tagName.charAt(1)), L = k.textContent.trim();
          return L ? {
            id: `heading-${s}`,
            level: S,
            text: L,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        x(A);
      }
      return;
    }
    let w = 0;
    const O = [];
    o.forEach((R, _) => {
      if (R.content) {
        const A = document.createElement("div");
        A.innerHTML = R.content;
        const s = (A.textContent || A.innerText || "").trim().split(/\s+/).filter((L) => L.length > 0);
        w += s.length, A.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((L, M) => {
          const B = parseInt(L.tagName.charAt(1)), J = L.textContent.trim();
          J && O.push({
            id: `heading-${_}-${M}`,
            level: B,
            text: J,
            page: _ + 1
          });
        });
      }
    }), g(w), x(O);
  }, [o, r, i, y]);
  const z = i !== void 0 ? i : o.length;
  return /* @__PURE__ */ a.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ a.jsx(Ee, { size: 18 }),
            /* @__PURE__ */ a.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: l,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ a.jsx(Vt, { size: 16 }) : /* @__PURE__ */ a.jsx(Yt, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(Jt, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: z })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(Xt, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: E.toLocaleString() })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ a.jsx(Ee, { size: 14 }),
                /* @__PURE__ */ a.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: u + 1 })
            ] })
          ] }),
          C.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsxs("h3", { children: [
              /* @__PURE__ */ a.jsx(lt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "document-outline", "data-testid": "outline", children: C.map((w) => {
              const O = w.level === 1 ? er : w.level === 2 ? rr : or;
              return /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${w.level}`,
                  style: { marginLeft: `${(w.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ a.jsx(O, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ a.jsx("span", { className: "outline-text", children: w.text }),
                    /* @__PURE__ */ a.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      w.page
                    ] })
                  ]
                },
                w.id
              );
            }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ a.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ a.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Ur() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function qr(e) {
  return new Promise((n, l) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      l(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      l(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = (c) => {
      const o = c.target.result;
      if (o.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        l(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const p = `editor-image-${Ur()}`;
        localStorage.setItem(p, o), n(p);
      } catch (p) {
        p.name === "QuotaExceededError" ? l(new Error("Storage quota exceeded")) : l(p);
      }
    }, i.onerror = () => {
      l(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function Qr(e) {
  return localStorage.getItem(e);
}
function en(e) {
  localStorage.removeItem(e);
}
function tn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function rn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Gr {
  constructor(n = "Editor") {
    this.namespace = n;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(n, l, r) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${n}] ${l}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(n, l) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(n, l) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(n, l) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(n, l) {
  }
}
const Qe = new Gr("Editor"), Ne = ({
  currentFormat: e,
  onFormatText: n,
  onAddPageBreak: l
}) => {
  const r = async (i) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(i.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (i.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const o = await qr(i), u = localStorage.getItem(o);
      u && (document.execCommand("insertImage", !1, u), Qe.info("Image inserted", { key: o }));
    } catch (c) {
      Qe.error("Error uploading image", c);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("undo"),
        title: "Undo",
        children: /* @__PURE__ */ a.jsx(Lr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("redo"),
        title: "Redo",
        children: /* @__PURE__ */ a.jsx(yr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ a.jsx(Gt, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ a.jsx(cr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ a.jsx(Dr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ a.jsx(Ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ a.jsx(Or, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ a.jsx(Cr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ a.jsx(wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ a.jsx(jr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        onChange: (i) => n("fontName", i.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ a.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ a.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ a.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ a.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        onChange: (i) => n("fontSize", i.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ a.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ a.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ a.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ a.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ a.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ a.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ a.jsx(lt, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ a.jsx(fr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ a.jsx(xr, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => {
          const i = prompt("Enter URL:");
          i && n("createLink", i);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ a.jsx(ur, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => n("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ a.jsx(_r, { size: 16 })
      }
    ),
    l && /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: l,
        title: "Insert Page Break",
        children: /* @__PURE__ */ a.jsx(Ee, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (i) => i.target.files[0] && r(i.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ a.jsx(ir, { size: 16 })
      }
    )
  ] });
};
Ne.propTypes = {
  currentFormat: P.shape({
    bold: P.bool,
    italic: P.bool,
    underline: P.bool,
    strikethrough: P.bool,
    alignLeft: P.bool,
    alignCenter: P.bool,
    alignRight: P.bool,
    alignJustify: P.bool,
    fontFamily: P.string,
    fontSize: P.string
  }).isRequired,
  onFormatText: P.func.isRequired,
  onAddPageBreak: P.func
};
Ne.defaultProps = {
  onAddPageBreak: void 0
};
const Oe = ({
  content: e,
  dimensions: n,
  pageSize: l,
  pageBoundaries: r = [],
  editorRef: i,
  onInput: c,
  onKeyDown: o,
  onClick: u,
  onScroll: y
}) => {
  const p = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, E = (g) => {
    if (g.key === "Tab")
      return g.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const x = C.getRangeAt(0), { startContainer: z, endContainer: w } = x, O = (R) => R ? R.nodeType === Node.ELEMENT_NODE ? R.tagName === "PAGE-BREAK" || R.getAttribute("data-page-break") === "true" : R.parentElement && O(R.parentElement) : !1;
    if ((g.key === "Backspace" || g.key === "Delete") && (O(z) || O(w)))
      return g.preventDefault(), !1;
    o && o(g);
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${n.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh"
      },
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: i,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${n.height}px`,
            backgroundColor: "white",
            padding: `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px`,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            lineHeight: "1.15",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: c,
          onKeyDown: E,
          onClick: u,
          onScroll: y,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Oe.propTypes = {
  content: P.string.isRequired,
  dimensions: P.shape({
    width: P.number.isRequired,
    height: P.number.isRequired
  }).isRequired,
  pageSize: P.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: P.arrayOf(
    P.shape({
      id: P.string.isRequired,
      pageNumber: P.number.isRequired,
      top: P.number,
      height: P.number
    })
  ),
  editorRef: P.shape({
    current: P.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: P.func.isRequired,
  onKeyDown: P.func,
  onClick: P.func,
  onScroll: P.func
};
Oe.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0
};
const Me = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: n = 0,
  pageSize: l = "A4",
  onNavigate: r,
  onAddPage: i,
  onDeletePage: c,
  onPageSizeChange: o
} = {}) => {
  const u = Math.max(e?.length || 0, 1), y = (C) => {
    r && r(C);
  }, p = () => {
    i && i();
  }, E = (C) => {
    if (u <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    c && c(C);
  }, g = (C) => {
    o && o(C);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ a.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ a.jsx(br, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: l,
          onChange: (C) => g(C.target.value),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ a.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ a.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((C, x) => /* @__PURE__ */ a.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${x === n ? "active" : ""}`,
          onClick: () => y(x),
          "aria-label": `Go to page ${x + 1}`,
          "aria-current": x === n ? "page" : void 0,
          children: [
            /* @__PURE__ */ a.jsx(Ee, { size: 14 }),
            /* @__PURE__ */ a.jsxs("span", { children: [
              "Page ",
              x + 1
            ] })
          ]
        }
      ),
      u > 1 && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (z) => {
            z.stopPropagation(), E(x);
          },
          "aria-label": `Delete page ${x + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ a.jsx(Br, { size: 14 })
        }
      )
    ] }, C.id || `page-${x}`)) }),
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: p,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ a.jsx(hr, { size: 16 }),
          /* @__PURE__ */ a.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Me.propTypes = {
  pageBoundaries: P.arrayOf(
    P.shape({
      id: P.string.isRequired,
      pageNumber: P.number.isRequired,
      top: P.number,
      height: P.number
    })
  ),
  activePage: P.number,
  pageSize: P.oneOf(["A4", "Letter", "Legal"]),
  onNavigate: P.func,
  onAddPage: P.func,
  onDeletePage: P.func,
  onPageSizeChange: P.func
};
Me.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  onNavigate: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0
};
const Hr = be.memo(Me), et = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, Yr = 50, Fr = 50, Vr = 50, Wr = 100, Jr = 500, De = we(({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: l,
  onDeletePage: r,
  onPageSizeChange: i,
  onChange: c,
  showSidebar: o = !0,
  showToolbar: u = !0,
  showPageManager: y = !0
}, p) => {
  const E = ot(), g = at(), { pageSize: C, continuousContent: x, pageBoundaries: z, activePage: w } = E, O = te(null), R = te(null), { currentFormat: _, formatText: A } = jt(), {
    checkAndUpdateBoundaries: k,
    getCurrentPage: s,
    scrollToPage: S,
    positionCursorAtPage: L,
    updateBoundaries: M,
    triggerAutoReflow: B,
    removePageAndContent: J
  } = It(C, R), U = me(() => et[C] || et.A4, [C]), [V, H] = ye(!1), Y = te(null), Q = te(!1), K = te(!1), X = te(!1), ee = te(x);
  oe(() => {
    if (R.current) {
      if (!X.current) {
        R.current.innerHTML = x, X.current = !0, ee.current = x;
        const h = setTimeout(() => {
          M();
        }, Yr);
        return () => clearTimeout(h);
      }
      if (ee.current !== x) {
        if (R.current.innerHTML !== x) {
          R.current.innerHTML = x;
          const N = setTimeout(() => {
            if (M(), Q.current) {
              Q.current = !1;
              const D = Math.max(0, z.length - 1);
              g.setActivePage(D), setTimeout(() => {
                S(D, O);
              }, Vr);
            }
          }, Fr);
          return ee.current = x, () => clearTimeout(N);
        }
        ee.current = x;
      }
    }
  }, [x, M, z.length, g, S]), oe(() => {
    c && X.current && c(x);
  }, [x, c]), gt(p, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => x,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => x.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (h) => {
      g.updateContinuousContent(h), R.current && (R.current.innerHTML = h, setTimeout(() => {
        M();
      }, 50));
    }
  }), [x, g, M]), oe(() => {
    const h = setTimeout(() => {
      R.current && R.current.focus();
    }, 200);
    return () => clearTimeout(h);
  }, []);
  const ne = W((h) => {
    const N = h.currentTarget.innerHTML;
    g.updateContinuousContent(N), k(), B();
    const D = s(O);
    D !== w && g.setActivePage(D);
  }, [k, g, s, w, B, O]), d = W((h) => {
    g.updatePageSize(h), M({ pageSize: h }), i && i(h);
  }, [g, M, i]), t = W((h) => {
    h < 0 || h >= z.length || (K.current = !0, g.setActivePage(h), S(h, O), setTimeout(() => {
      K.current = !1;
    }, Jr), n && n(h));
  }, [g, S, n, z.length]), f = W(() => {
    Q.current = !0, g.addPageBreak({ position: "end" }), l && l();
  }, [g, l]), v = W(() => {
    const h = window.getSelection();
    if (h && h.rangeCount > 0) {
      if (!R?.current) return;
      const Z = `<page-break data-page-break="true" contenteditable="false" data-page-number="${R.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Z), setTimeout(() => {
        M();
        const m = s(O);
        g.setActivePage(m);
      }, 150);
    }
  }, [M, s, g, O]), b = W((h) => {
    if (z.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    J(h) && (g.setActivePage(0), r && r(h));
  }, [z.length, J, g, r]), I = W(() => {
    !O.current || !R.current || K.current || (Y.current && clearTimeout(Y.current), Y.current = setTimeout(() => {
      if (K.current) {
        Y.current = null;
        return;
      }
      const h = s(O);
      h !== w && h >= 0 && g.setActivePage(h), Y.current = null;
    }, Wr));
  }, [s, w, g]), j = me(() => {
    if (!x) return 0;
    const N = x.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return N ? N.length : 0;
  }, [x]), T = z.length || 1;
  return oe(() => () => {
    Y.current && clearTimeout(Y.current);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ a.jsx(
      Ne,
      {
        currentFormat: _,
        onFormatText: A,
        onAddPageBreak: v
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "editor-container", children: [
      o && /* @__PURE__ */ a.jsx(
        $r,
        {
          editorView: null,
          isCollapsed: V,
          onToggle: () => H((h) => !h),
          wordCount: j,
          pageCount: T
        }
      ),
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: O,
          onScroll: I,
          children: /* @__PURE__ */ a.jsx(
            Oe,
            {
              content: x,
              dimensions: U,
              pageSize: C,
              pageBoundaries: z,
              editorRef: R,
              onInput: ne,
              onClick: () => R.current?.focus()
            }
          )
        }
      ),
      y && /* @__PURE__ */ a.jsx("div", { className: "page-manager-sidebar", children: e ? be.cloneElement(e, {
        onNavigate: t,
        onAddPage: f,
        onDeletePage: b,
        onPageSizeChange: d
      }) : /* @__PURE__ */ a.jsx(
        Hr,
        {
          pageBoundaries: z,
          activePage: w,
          pageSize: C,
          onNavigate: t,
          onAddPage: f,
          onDeletePage: b,
          onPageSizeChange: d
        }
      ) })
    ] })
  ] });
});
De.displayName = "HtmlEditor";
De.propTypes = {
  pageManagerComponent: P.element,
  onNavigatePage: P.func,
  onAddPage: P.func,
  onDeletePage: P.func,
  onPageSizeChange: P.func,
  onChange: P.func,
  showSidebar: P.bool,
  showToolbar: P.bool,
  showPageManager: P.bool
};
De.defaultProps = {
  pageManagerComponent: null,
  onNavigatePage: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onChange: void 0,
  showSidebar: !0,
  showToolbar: !0,
  showPageManager: !0
};
class ut extends be.Component {
  constructor(n) {
    super(n), this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(n) {
    return { hasError: !0 };
  }
  componentDidCatch(n, l) {
    console.error("[ErrorBoundary] Caught error:", n), console.error("[ErrorBoundary] Error info:", l), this.setState({
      error: n,
      errorInfo: l
    }), this.props.onError && this.props.onError(n, l);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ a.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ a.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ a.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ a.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ a.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ a.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: this.handleReset,
          style: {
            marginTop: "15px",
            padding: "8px 16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          },
          children: "Try Again"
        }
      )
    ] }) : this.props.children;
  }
}
ut.propTypes = {
  children: P.node.isRequired,
  fallback: P.node,
  onError: P.func,
  onReset: P.func,
  showDetails: P.bool
};
ut.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const nn = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  Xr as DocumentProvider,
  Ne as EditorToolbar,
  ut as ErrorBoundary,
  De as HtmlEditor,
  nn as PAGE_DIMENSIONS,
  Hr as PageManager,
  Oe as PageView,
  $r as Sidebar,
  tn as clearImages,
  en as deleteImage,
  rn as getAllImageKeys,
  Qr as getImage,
  Gr as logger,
  qr as saveImage,
  It as useContinuousReflow,
  nt as useDocument,
  at as useDocumentActions,
  ot as useDocumentState,
  jt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
