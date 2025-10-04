import be, { createContext as dt, useContext as ft, useReducer as pt, useMemo as me, useState as ye, useCallback as W, useRef as te, useEffect as ae, forwardRef as Re, createElement as ke, useImperativeHandle as gt } from "react";
import { v4 as we } from "uuid";
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
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function i(r, s, l) {
    var n = null;
    if (l !== void 0 && (n = "" + l), s.key !== void 0 && (n = "" + s.key), "key" in s) {
      l = {};
      for (var u in s)
        u !== "key" && (l[u] = s[u]);
    } else l = s;
    return s = l.ref, {
      $$typeof: e,
      type: r,
      key: n,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return ie.Fragment = a, ie.jsx = i, ie.jsxs = i, ie;
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
        case w:
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
          case R:
            return "Portal";
          case k:
            return t.displayName || "Context";
          case P:
            return (t._context.displayName || "Context") + ".Consumer";
          case c:
            var p = t.render;
            return t = t.displayName, t || (t = p.displayName || p.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case M:
            return p = t.displayName || null, p !== null ? p : e(t.type) || "Memo";
          case B:
            p = t._payload, t = t._init;
            try {
              return e(t(p));
            } catch {
            }
        }
      return null;
    }
    function a(t) {
      return "" + t;
    }
    function i(t) {
      try {
        a(t);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var v = p.error, b = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return v.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), a(t);
      }
    }
    function r(t) {
      if (t === O) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === B)
        return "<...>";
      try {
        var p = e(t);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var t = V.A;
      return t === null ? null : t.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function n(t) {
      if (H.call(t, "key")) {
        var p = Object.getOwnPropertyDescriptor(t, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function u(t, p) {
      function v() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
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
    function f(t, p, v, b, I, j) {
      var T = v.ref;
      return t = {
        $$typeof: z,
        type: t,
        key: p,
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
    function E(t, p, v, b, I, j) {
      var T = p.children;
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
      if (H.call(p, "key")) {
        T = e(t);
        var h = Object.keys(p).filter(function(D) {
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
      if (T = null, v !== void 0 && (i(v), T = "" + v), n(p) && (i(p.key), T = "" + p.key), "key" in p) {
        v = {};
        for (var N in p)
          N !== "key" && (v[N] = p[N]);
      } else v = p;
      return T && u(
        v,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), f(
        t,
        T,
        v,
        s(),
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
    var x = be, z = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), k = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), V = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, Y = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var K, X = {}, ee = x.react_stack_bottom_frame.bind(
      x,
      l
    )(), ne = Q(r(l)), d = {};
    se.Fragment = O, se.jsx = function(t, p, v) {
      var b = 1e4 > V.recentlyCreatedOwnerStacks++;
      return E(
        t,
        p,
        v,
        !1,
        b ? Error("react-stack-top-frame") : ee,
        b ? Q(r(t)) : ne
      );
    }, se.jsxs = function(t, p, v) {
      var b = 1e4 > V.recentlyCreatedOwnerStacks++;
      return E(
        t,
        p,
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
var o = Et();
const le = "A4", oe = "<p><br></p>", bt = "continuous", Ce = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ce = (e, a = le) => ({
  id: we(),
  index: e,
  size: a,
  content: oe,
  images: [],
  isBreakPoint: !1
}), he = (e) => typeof e != "string" || e.trim() === "" ? oe : e, tt = (e, a = le) => (e.length > 0 ? e : [ce(0, a)]).map((r, s) => ({
  id: r.id || we(),
  index: s,
  size: r.size || a,
  content: he(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), vt = (e = le) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (Ce[e] || Ce.A4).height
}], Se = (e = {}) => {
  const a = (/* @__PURE__ */ new Date()).toISOString(), i = e.pageSize || le, r = tt(e.pages || [ce(0, i)], i);
  return {
    id: we(),
    title: e.title || "Untitled Document",
    createdAt: a,
    updatedAt: a,
    pageSize: i,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || bt,
    continuousContent: e.continuousContent || oe,
    pageBoundaries: e.pageBoundaries || vt(i)
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
}, xt = (e, a) => {
  const i = (/* @__PURE__ */ new Date()).toISOString();
  switch (a.type) {
    case $.INITIALIZE_DOCUMENT: {
      const { initialContent: r = oe, pageSize: s = le } = a.payload || {}, l = { ...ce(0, s), content: he(r) };
      return Se({
        title: e.title,
        pageSize: s,
        pages: [l]
      });
    }
    case $.UPDATE_TITLE:
      return {
        ...e,
        title: a.payload,
        updatedAt: i
      };
    case $.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: s } = a.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const l = [...e.pages];
      return l[r] = {
        ...l[r],
        content: he(s)
      }, {
        ...e,
        pages: l,
        updatedAt: i
      };
    }
    case $.UPDATE_PAGES: {
      const r = Array.isArray(a.payload) ? { pages: a.payload } : a.payload || {}, s = tt(r.pages || [], e.pageSize), l = Array.isArray(r.pageBreaks) ? r.pageBreaks : s.slice(0, -1).map((n, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: l,
        totalPages: s.length,
        updatedAt: i
      };
    }
    case $.ADD_PAGE: {
      const r = typeof a.payload?.index == "number" ? Math.min(Math.max(a.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(r, 0, ce(r, e.pageSize));
      const l = s.map((u, y) => ({
        ...u,
        index: y,
        size: e.pageSize
      })), n = l.slice(0, -1).map((u, y) => ({
        id: `auto-break-${y}`,
        pageNumber: y + 1
      }));
      return {
        ...e,
        pages: l,
        activePage: r,
        pageBreaks: n,
        totalPages: l.length,
        updatedAt: i
      };
    }
    case $.DELETE_PAGE: {
      const r = a.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(r, 1);
      const l = s.map((y, f) => ({
        ...y,
        index: f,
        size: e.pageSize
      }));
      let n = e.activePage;
      n >= l.length ? n = l.length - 1 : r <= n && n > 0 && (n -= 1);
      const u = l.slice(0, -1).map((y, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
      }));
      return {
        ...e,
        pages: l,
        activePage: n,
        pageBreaks: u,
        totalPages: l.length,
        updatedAt: i
      };
    }
    case $.SET_ACTIVE_PAGE: {
      const r = a.payload;
      if (r === e.activePage)
        return e;
      const s = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= s ? e : {
        ...e,
        activePage: r,
        updatedAt: i
      };
    }
    case $.UPDATE_PAGE_SIZE: {
      const r = a.payload;
      if (r === e.pageSize)
        return e;
      if (!Ce[r])
        return console.warn(`Invalid page size: ${r}`), e;
      const s = e.pages.map((n, u) => ({
        ...n,
        index: u,
        size: r
      })), l = s.slice(0, -1).map((n, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pageSize: r,
        pages: s,
        pageBreaks: l,
        updatedAt: i
      };
    }
    case $.RESET_DOCUMENT:
      return Se();
    case $.UPDATE_CONTINUOUS_CONTENT: {
      const r = he(a.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: i
      };
    }
    case $.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(a.payload) ? a.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const s = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: s,
        updatedAt: i
      };
    }
    case $.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: s } = a.payload || {}, l = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let n = e.continuousContent;
      if (r === "end")
        n = n + l + "<p><br></p>";
      else if (typeof r == "number") {
        const u = n.substring(0, r), y = n.substring(r);
        n = u + l + y;
      } else if (typeof s == "number" && typeof document < "u") {
        const u = document.createElement("div");
        u.innerHTML = n;
        const y = u.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && y.length === 0)
          n = n + l + "<p><br></p>";
        else if (s < y.length) {
          const f = y[s], E = document.createElement("page-break");
          E.setAttribute("data-page-break", "true"), E.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const g = document.createElement("p");
          g.innerHTML = "<br>", f.parentNode.insertBefore(E, f.nextSibling), E.parentNode.insertBefore(g, E.nextSibling), n = u.innerHTML;
        } else
          n = n + l + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: n,
        updatedAt: i
      };
    }
    case $.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = a.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const l = s.querySelectorAll('page-break, [data-page-break="true"]');
      return l[r] && l[r].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((u, y) => {
        u.setAttribute("data-page-number", String(y + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: i
      };
    }
    case $.SET_EDITOR_MODE: {
      const r = a.payload;
      if (r === e.editorMode)
        return e;
      let s = e.continuousContent, l = e.pages;
      return r === "continuous" ? s = e.pages.map((u) => u.content).filter((u) => u && u !== oe).join(`
`) || oe : e.continuousContent && e.continuousContent !== oe && (l = [{ ...ce(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: s,
        pages: l,
        updatedAt: i
      };
    }
    default:
      return e;
  }
}, rt = dt(null), Xr = ({ children: e, initialState: a = {} }) => {
  const [i, r] = pt(xt, Se(a)), s = me(() => ({
    initializeDocument: (n) => r({ type: $.INITIALIZE_DOCUMENT, payload: n }),
    updateTitle: (n) => r({ type: $.UPDATE_TITLE, payload: n }),
    updatePageContent: (n) => r({ type: $.UPDATE_PAGE_CONTENT, payload: n }),
    updatePages: (n) => r({ type: $.UPDATE_PAGES, payload: n }),
    addPage: (n) => r({ type: $.ADD_PAGE, payload: n }),
    deletePage: (n) => r({ type: $.DELETE_PAGE, payload: n }),
    setActivePage: (n) => r({ type: $.SET_ACTIVE_PAGE, payload: n }),
    updatePageSize: (n) => r({ type: $.UPDATE_PAGE_SIZE, payload: n }),
    resetDocument: () => r({ type: $.RESET_DOCUMENT }),
    updateContinuousContent: (n) => r({ type: $.UPDATE_CONTINUOUS_CONTENT, payload: n }),
    updatePageBoundaries: (n) => r({ type: $.UPDATE_PAGE_BOUNDARIES, payload: n }),
    addPageBreak: (n) => r({ type: $.ADD_PAGE_BREAK, payload: n }),
    removePageBreak: (n) => r({ type: $.REMOVE_PAGE_BREAK, payload: n }),
    setEditorMode: (n) => r({ type: $.SET_EDITOR_MODE, payload: n }),
    insertPageAt: (n) => r({ type: $.INSERT_PAGE_AT, payload: n }),
    movePageTo: (n) => r({ type: $.MOVE_PAGE_TO, payload: n }),
    duplicatePage: (n) => r({ type: $.DUPLICATE_PAGE, payload: n })
  }), []), l = me(() => ({
    state: i,
    actions: s,
    dispatch: r
  }), [i, s]);
  return /* @__PURE__ */ o.jsx(rt.Provider, { value: l, children: e });
}, nt = () => {
  const e = ft(rt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, at = () => {
  const { state: e } = nt();
  return e;
}, ot = () => {
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
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, n = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, z = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function P(c) {
    if (typeof c == "object" && c !== null) {
      var S = c.$$typeof;
      switch (S) {
        case a:
          switch (c = c.type, c) {
            case y:
            case f:
            case r:
            case l:
            case s:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case u:
                case E:
                case z:
                case x:
                case n:
                  return c;
                default:
                  return S;
              }
          }
        case i:
          return S;
      }
    }
  }
  function k(c) {
    return P(c) === f;
  }
  return q.AsyncMode = y, q.ConcurrentMode = f, q.ContextConsumer = u, q.ContextProvider = n, q.Element = a, q.ForwardRef = E, q.Fragment = r, q.Lazy = z, q.Memo = x, q.Portal = i, q.Profiler = l, q.StrictMode = s, q.Suspense = g, q.isAsyncMode = function(c) {
    return k(c) || P(c) === y;
  }, q.isConcurrentMode = k, q.isContextConsumer = function(c) {
    return P(c) === u;
  }, q.isContextProvider = function(c) {
    return P(c) === n;
  }, q.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === a;
  }, q.isForwardRef = function(c) {
    return P(c) === E;
  }, q.isFragment = function(c) {
    return P(c) === r;
  }, q.isLazy = function(c) {
    return P(c) === z;
  }, q.isMemo = function(c) {
    return P(c) === x;
  }, q.isPortal = function(c) {
    return P(c) === i;
  }, q.isProfiler = function(c) {
    return P(c) === l;
  }, q.isStrictMode = function(c) {
    return P(c) === s;
  }, q.isSuspense = function(c) {
    return P(c) === g;
  }, q.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === f || c === l || c === s || c === g || c === C || typeof c == "object" && c !== null && (c.$$typeof === z || c.$$typeof === x || c.$$typeof === n || c.$$typeof === u || c.$$typeof === E || c.$$typeof === O || c.$$typeof === w || c.$$typeof === _ || c.$$typeof === R);
  }, q.typeOf = P, q;
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
    var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, n = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, z = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function P(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === r || m === f || m === l || m === s || m === g || m === C || typeof m == "object" && m !== null && (m.$$typeof === z || m.$$typeof === x || m.$$typeof === n || m.$$typeof === u || m.$$typeof === E || m.$$typeof === O || m.$$typeof === w || m.$$typeof === _ || m.$$typeof === R);
    }
    function k(m) {
      if (typeof m == "object" && m !== null) {
        var re = m.$$typeof;
        switch (re) {
          case a:
            var ue = m.type;
            switch (ue) {
              case y:
              case f:
              case r:
              case l:
              case s:
              case g:
                return ue;
              default:
                var Ie = ue && ue.$$typeof;
                switch (Ie) {
                  case u:
                  case E:
                  case z:
                  case x:
                  case n:
                    return Ie;
                  default:
                    return re;
                }
            }
          case i:
            return re;
        }
      }
    }
    var c = y, S = f, L = u, M = n, B = a, J = E, U = r, V = z, H = x, Y = i, Q = l, K = s, X = g, ee = !1;
    function ne(m) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(m) || k(m) === y;
    }
    function d(m) {
      return k(m) === f;
    }
    function t(m) {
      return k(m) === u;
    }
    function p(m) {
      return k(m) === n;
    }
    function v(m) {
      return typeof m == "object" && m !== null && m.$$typeof === a;
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
      return k(m) === i;
    }
    function N(m) {
      return k(m) === l;
    }
    function D(m) {
      return k(m) === s;
    }
    function Z(m) {
      return k(m) === g;
    }
    G.AsyncMode = c, G.ConcurrentMode = S, G.ContextConsumer = L, G.ContextProvider = M, G.Element = B, G.ForwardRef = J, G.Fragment = U, G.Lazy = V, G.Memo = H, G.Portal = Y, G.Profiler = Q, G.StrictMode = K, G.Suspense = X, G.isAsyncMode = ne, G.isConcurrentMode = d, G.isContextConsumer = t, G.isContextProvider = p, G.isElement = v, G.isForwardRef = b, G.isFragment = I, G.isLazy = j, G.isMemo = T, G.isPortal = h, G.isProfiler = N, G.isStrictMode = D, G.isSuspense = Z, G.isValidElementType = P, G.typeOf = k;
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
  var e = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function r(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var n = {}, u = 0; u < 10; u++)
        n["_" + String.fromCharCode(u)] = u;
      var y = Object.getOwnPropertyNames(n).map(function(E) {
        return n[E];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        f[E] = E;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ve = s() ? Object.assign : function(l, n) {
    for (var u, y = r(l), f, E = 1; E < arguments.length; E++) {
      u = Object(arguments[E]);
      for (var g in u)
        a.call(u, g) && (y[g] = u[g]);
      if (e) {
        f = e(u);
        for (var C = 0; C < f.length; C++)
          i.call(u, f[C]) && (y[f[C]] = u[f[C]]);
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
    var a = /* @__PURE__ */ je(), i = {}, r = /* @__PURE__ */ st();
    e = function(l) {
      var n = "Warning: " + l;
      typeof console < "u" && console.error(n);
      try {
        throw new Error(n);
      } catch {
      }
    };
  }
  function s(l, n, u, y, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in l)
        if (r(l, E)) {
          var g;
          try {
            if (typeof l[E] != "function") {
              var C = Error(
                (y || "React class") + ": " + u + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            g = l[E](n, E, y, u, null, a);
          } catch (z) {
            g = z;
          }
          if (g && !(g instanceof Error) && e(
            (y || "React class") + ": type specification of " + u + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in i)) {
            i[g.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + u + " type: " + g.message + (x ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Ae = s, Ae;
}
var Pe, Ve;
function kt() {
  if (Ve) return Pe;
  Ve = 1;
  var e = it(), a = Pt(), i = /* @__PURE__ */ je(), r = /* @__PURE__ */ st(), s = /* @__PURE__ */ _t(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(u) {
    var y = "Warning: " + u;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function n() {
    return null;
  }
  return Pe = function(u, y) {
    var f = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function g(d) {
      var t = d && (f && d[f] || d[E]);
      if (typeof t == "function")
        return t;
    }
    var C = "<<anonymous>>", x = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: _(),
      arrayOf: P,
      element: k(),
      elementType: c(),
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
    function R(d, t) {
      this.message = d, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function O(d) {
      if (process.env.NODE_ENV !== "production")
        var t = {}, p = 0;
      function v(I, j, T, h, N, D, Z) {
        if (h = h || C, D = D || T, Z !== i) {
          if (y) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = h + ":" + T;
            !t[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            p < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + h + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), t[re] = !0, p++);
          }
        }
        return j[T] == null ? I ? j[T] === null ? new R("The " + N + " `" + D + "` is marked as required " + ("in `" + h + "`, but its value is `null`.")) : new R("The " + N + " `" + D + "` is marked as required in " + ("`" + h + "`, but its value is `undefined`.")) : null : d(j, T, h, N, D);
      }
      var b = v.bind(null, !1);
      return b.isRequired = v.bind(null, !0), b;
    }
    function w(d) {
      function t(p, v, b, I, j, T) {
        var h = p[v], N = K(h);
        if (N !== d) {
          var D = X(h);
          return new R(
            "Invalid " + I + " `" + j + "` of type " + ("`" + D + "` supplied to `" + b + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return O(t);
    }
    function _() {
      return O(n);
    }
    function P(d) {
      function t(p, v, b, I, j) {
        if (typeof d != "function")
          return new R("Property `" + j + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var T = p[v];
        if (!Array.isArray(T)) {
          var h = K(T);
          return new R("Invalid " + I + " `" + j + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected an array."));
        }
        for (var N = 0; N < T.length; N++) {
          var D = d(T, N, b, I, j + "[" + N + "]", i);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return O(t);
    }
    function k() {
      function d(t, p, v, b, I) {
        var j = t[p];
        if (!u(j)) {
          var T = K(j);
          return new R("Invalid " + b + " `" + I + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(d);
    }
    function c() {
      function d(t, p, v, b, I) {
        var j = t[p];
        if (!e.isValidElementType(j)) {
          var T = K(j);
          return new R("Invalid " + b + " `" + I + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(d);
    }
    function S(d) {
      function t(p, v, b, I, j) {
        if (!(p[v] instanceof d)) {
          var T = d.name || C, h = ne(p[v]);
          return new R("Invalid " + I + " `" + j + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return O(t);
    }
    function L(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), n;
      function t(p, v, b, I, j) {
        for (var T = p[v], h = 0; h < d.length; h++)
          if (z(T, d[h]))
            return null;
        var N = JSON.stringify(d, function(Z, m) {
          var re = X(m);
          return re === "symbol" ? String(m) : m;
        });
        return new R("Invalid " + I + " `" + j + "` of value `" + String(T) + "` " + ("supplied to `" + b + "`, expected one of " + N + "."));
      }
      return O(t);
    }
    function M(d) {
      function t(p, v, b, I, j) {
        if (typeof d != "function")
          return new R("Property `" + j + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var T = p[v], h = K(T);
        if (h !== "object")
          return new R("Invalid " + I + " `" + j + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected an object."));
        for (var N in T)
          if (r(T, N)) {
            var D = d(T, N, b, I, j + "." + N, i);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return O(t);
    }
    function B(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), n;
      for (var t = 0; t < d.length; t++) {
        var p = d[t];
        if (typeof p != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(p) + " at index " + t + "."
          ), n;
      }
      function v(b, I, j, T, h) {
        for (var N = [], D = 0; D < d.length; D++) {
          var Z = d[D], m = Z(b, I, j, T, h, i);
          if (m == null)
            return null;
          m.data && r(m.data, "expectedType") && N.push(m.data.expectedType);
        }
        var re = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new R("Invalid " + T + " `" + h + "` supplied to " + ("`" + j + "`" + re + "."));
      }
      return O(v);
    }
    function J() {
      function d(t, p, v, b, I) {
        return Y(t[p]) ? null : new R("Invalid " + b + " `" + I + "` supplied to " + ("`" + v + "`, expected a ReactNode."));
      }
      return O(d);
    }
    function U(d, t, p, v, b) {
      return new R(
        (d || "React class") + ": " + t + " type `" + p + "." + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function V(d) {
      function t(p, v, b, I, j) {
        var T = p[v], h = K(T);
        if (h !== "object")
          return new R("Invalid " + I + " `" + j + "` of type `" + h + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var N in d) {
          var D = d[N];
          if (typeof D != "function")
            return U(b, I, j, N, X(D));
          var Z = D(T, N, b, I, j + "." + N, i);
          if (Z)
            return Z;
        }
        return null;
      }
      return O(t);
    }
    function H(d) {
      function t(p, v, b, I, j) {
        var T = p[v], h = K(T);
        if (h !== "object")
          return new R("Invalid " + I + " `" + j + "` of type `" + h + "` " + ("supplied to `" + b + "`, expected `object`."));
        var N = a({}, p[v], d);
        for (var D in N) {
          var Z = d[D];
          if (r(d, D) && typeof Z != "function")
            return U(b, I, j, D, X(Z));
          if (!Z)
            return new R(
              "Invalid " + I + " `" + j + "` key `" + D + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(p[v], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var m = Z(T, D, b, I, j + "." + D, i);
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
            var p = t.call(d), v;
            if (t !== d.entries) {
              for (; !(v = p.next()).done; )
                if (!Y(v.value))
                  return !1;
            } else
              for (; !(v = p.next()).done; ) {
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
    return x.checkPropTypes = s, x.resetWarningCache = s.resetWarningCache, x.PropTypes = x, x;
  }, Pe;
}
var _e, We;
function Ct() {
  if (We) return _e;
  We = 1;
  var e = /* @__PURE__ */ je();
  function a() {
  }
  function i() {
  }
  return i.resetWarningCache = a, _e = function() {
    function r(n, u, y, f, E, g) {
      if (g !== e) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var l = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: i,
      resetWarningCache: a
    };
    return l.PropTypes = l, l;
  }, _e;
}
var Je;
function St() {
  if (Je) return fe.exports;
  if (Je = 1, process.env.NODE_ENV !== "production") {
    var e = it(), a = !0;
    fe.exports = /* @__PURE__ */ kt()(e.isElement, a);
  } else
    fe.exports = /* @__PURE__ */ Ct()();
  return fe.exports;
}
var Rt = /* @__PURE__ */ St();
const A = /* @__PURE__ */ ht(Rt), wt = {
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
  const [e, a] = ye(Ke), i = W((n) => {
    a((u) => ({
      ...u,
      alignLeft: n === "left",
      alignCenter: n === "center",
      alignRight: n === "right",
      alignJustify: n === "justify"
    }));
  }, []), r = W((n) => {
    try {
      const u = window.getSelection();
      if (!u || u.rangeCount === 0)
        return !1;
      const y = u.getRangeAt(0);
      if (!y.toString())
        return a((E) => ({ ...E, fontSize: n })), !1;
      try {
        const E = document.createElement("span");
        E.style.fontSize = n;
        const g = y.extractContents();
        return E.appendChild(g), y.insertNode(E), y.selectNodeContents(E), u.removeAllRanges(), u.addRange(y), a((C) => ({ ...C, fontSize: n })), !0;
      } catch {
        const g = wt[n] || "2";
        return document.execCommand("fontSize", !1, g), a((C) => ({ ...C, fontSize: n })), !0;
      }
    } catch (u) {
      return console.warn("[useFormatting] Font size change failed:", u), !1;
    }
  }, []), s = W((n, u = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (n === "fontSize") {
        r(u);
        return;
      }
      switch (document.execCommand(n, !1, u) || console.warn(`[useFormatting] Command "${n}" failed`), n) {
        case "bold":
          a((f) => ({ ...f, bold: !f.bold }));
          break;
        case "italic":
          a((f) => ({ ...f, italic: !f.italic }));
          break;
        case "underline":
          a((f) => ({ ...f, underline: !f.underline }));
          break;
        case "strikethrough":
          a((f) => ({ ...f, strikethrough: !f.strikethrough }));
          break;
        case "justifyLeft":
          i("left");
          break;
        case "justifyCenter":
          i("center");
          break;
        case "justifyRight":
          i("right");
          break;
        case "justifyFull":
          i("justify");
          break;
        case "fontName":
          a((f) => ({ ...f, fontFamily: u }));
          break;
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${n}":`, y);
    }
  }, [r, i]), l = W(() => {
    a(Ke);
  }, []);
  return {
    currentFormat: e,
    formatText: s,
    resetFormat: l
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
}, Nt = 300, Ot = 500, Mt = 50, Dt = 'page-break, [data-page-break="true"]', It = (e, a) => {
  const i = ot(), r = te(null), s = te(null), l = te(e), n = te(!1);
  ae(() => {
    l.current = e;
  }, [e]), ae(() => () => {
    r.current && clearTimeout(r.current), s.current && clearTimeout(s.current);
  }, []);
  const u = W((_, P) => {
    if (!_ || _.length === 0)
      return null;
    let k = 0;
    for (let c = 0; c < _.length; c++) {
      const S = _[c];
      if (!S || !S.getBoundingClientRect)
        continue;
      const L = S.getBoundingClientRect().height;
      if (k + L > P)
        return {
          overflowIndex: c,
          overflowElement: S,
          accumulatedHeight: k
        };
      k += L;
    }
    return null;
  }, []), y = W((_, P) => {
    if (!_ || !a?.current)
      return !1;
    try {
      const k = a.current, c = document.createElement("page-break");
      return c.setAttribute("data-page-break", "true"), c.setAttribute("contenteditable", "false"), c.setAttribute("data-page-number", P || "2"), _.parentNode.insertBefore(c, _), !0;
    } catch (k) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", k), !1;
    }
  }, [a]), f = W((_ = {}) => {
    if (!a?.current || typeof document > "u")
      return [];
    const P = _.pageSize || l.current || "A4", k = ge[P] || ge.A4, c = a.current, S = c.querySelectorAll(Dt), L = [];
    L.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: k.height
    });
    const M = c.getBoundingClientRect(), B = c.scrollTop;
    return S.forEach((J, U) => {
      const H = J.getBoundingClientRect().top - M.top + B;
      L.push({
        id: `page-${U + 1}`,
        pageNumber: U + 2,
        top: H,
        height: k.height
      });
    }), L;
  }, [a]), E = W((_ = {}) => {
    const P = f(_);
    return i.updatePageBoundaries(P), P;
  }, [f, i]), g = W(() => {
    if (!(!a?.current || n.current))
      try {
        n.current = !0;
        const _ = a.current, P = l.current || "A4", c = (ge[P] || ge.A4).height - Ze.top - Ze.bottom, S = Array.from(_.children);
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
          const V = M[U], H = u(V, c);
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
          i.updateContinuousContent(U), setTimeout(() => {
            E();
          }, Mt);
        }
      } catch (_) {
        console.warn("[checkAndReflow] Reflow failed:", _);
      } finally {
        n.current = !1;
      }
  }, [a, u, y, i, E]), C = W((_ = Ot) => {
    s.current && clearTimeout(s.current), s.current = setTimeout(() => {
      s.current = null, g();
    }, _);
  }, [g]), x = W((_ = {}) => {
    r.current && clearTimeout(r.current);
    const P = typeof _.delay == "number" ? _.delay : Nt;
    r.current = setTimeout(() => {
      r.current = null, E(_);
    }, Math.max(0, P));
  }, [E]), z = W((_) => {
    if (!_?.current || !a?.current)
      return 0;
    try {
      const P = _.current, c = a.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (c.length === 0)
        return 0;
      const S = P.getBoundingClientRect(), L = S.top + S.height / 2;
      for (let M = c.length - 1; M >= 0; M--)
        if (c[M].getBoundingClientRect().top < L)
          return M + 1;
      return 0;
    } catch (P) {
      return console.warn("[getCurrentPage] Failed to calculate page:", P), 0;
    }
  }, [a]), R = W((_) => {
    if (!a?.current)
      return;
    const P = a.current;
    P.focus();
    try {
      let k = null, c = 0;
      if (_ === 0)
        k = P.firstChild, c = 0;
      else {
        const L = P.querySelectorAll('page-break, [data-page-break="true"]')[_ - 1];
        L && L.nextSibling && (k = L.nextSibling, c = 0);
      }
      if (k) {
        const S = document.createRange(), L = window.getSelection();
        k.nodeType === Node.TEXT_NODE ? S.setStart(k, c) : S.setStart(k, 0), S.collapse(!0), L.removeAllRanges(), L.addRange(S);
      }
    } catch (k) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", k);
    }
  }, [a]), O = W((_, P) => {
    if (!P?.current || !a?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const k = P.current, c = a.current;
    try {
      let S = null;
      if (_ === 0)
        S = c;
      else {
        const M = c.querySelectorAll('page-break, [data-page-break="true"]')[_ - 1];
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
          R(_);
        }, 400);
      }
    } catch (S) {
      console.error("[scrollToPage] Error:", S);
    }
  }, [a, R]), w = W((_) => {
    if (!a?.current)
      return !1;
    const P = a.current;
    if (f().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const c = Array.from(P.querySelectorAll('page-break, [data-page-break="true"]'));
      if (_ > c.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const S = window.getSelection();
      let L = !1, M = [], B = null;
      if (_ === 0) {
        const V = c[0];
        if (!V)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let H = P.firstChild;
        for (; H && H !== V; )
          M.push(H), H = H.nextSibling;
        B = V;
      } else {
        const V = c[_ - 1];
        if (!V)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const H = c[_];
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
      }), P.querySelectorAll('page-break, [data-page-break="true"]').forEach((V, H) => {
        V.setAttribute("data-page-number", String(H + 2));
      }), L && setTimeout(() => {
        R(0);
      }, 50);
      const U = P.innerHTML;
      return i.updateContinuousContent(U), setTimeout(() => {
        E();
      }, 100), !0;
    } catch (c) {
      return console.error("[removePageAndContent] Failed to remove page:", c), !1;
    }
  }, [a, f, i, E, R]);
  return {
    calculatePageBoundaries: f,
    checkAndUpdateBoundaries: x,
    updateBoundaries: E,
    getCurrentPage: z,
    scrollToPage: O,
    positionCursorAtPage: R,
    checkAndReflow: g,
    triggerAutoReflow: C,
    removePageAndContent: w,
    boundaryTimeoutRef: r,
    reflowTimeoutRef: s
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
  (a, i, r) => r ? r.toUpperCase() : i.toLowerCase()
), Xe = (e) => {
  const a = zt(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, ct = (...e) => e.filter((a, i, r) => !!a && a.trim() !== "" && r.indexOf(a) === i).join(" ").trim(), Bt = (e) => {
  for (const a in e)
    if (a.startsWith("aria-") || a === "role" || a === "title")
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
const Ut = Re(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: l,
    iconNode: n,
    ...u
  }, y) => ke(
    "svg",
    {
      ref: y,
      ...$t,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: r ? Number(i) * 24 / Number(a) : i,
      className: ct("lucide", s),
      ...!l && !Bt(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...n.map(([f, E]) => ke(f, E)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F = (e, a) => {
  const i = Re(
    ({ className: r, ...s }, l) => ke(Ut, {
      ref: l,
      iconNode: a,
      className: ct(
        `lucide-${Lt(Xe(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return i.displayName = Xe(e), i;
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
], ar = F("heading-3", nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ir = F("image", or);
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
], Rr = F("text-align-end", Sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], jr = F("text-align-justify", wr);
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
], Br = F("x", zr), $r = ({ editorView: e, isCollapsed: a, onToggle: i, wordCount: r, pageCount: s }) => {
  const l = at(), { pages: n, activePage: u, continuousContent: y, editorMode: f } = l, [E, g] = ye(0), [C, x] = ye([]);
  ae(() => {
    if (r !== void 0 && s !== void 0) {
      if (g(r), y) {
        const w = document.createElement("div");
        w.innerHTML = y;
        const _ = w.querySelectorAll("h1, h2, h3, h4, h5, h6"), P = Array.from(_).map((k, c) => {
          const S = parseInt(k.tagName.charAt(1)), L = k.textContent.trim();
          return L ? {
            id: `heading-${c}`,
            level: S,
            text: L,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        x(P);
      }
      return;
    }
    let R = 0;
    const O = [];
    n.forEach((w, _) => {
      if (w.content) {
        const P = document.createElement("div");
        P.innerHTML = w.content;
        const c = (P.textContent || P.innerText || "").trim().split(/\s+/).filter((L) => L.length > 0);
        R += c.length, P.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((L, M) => {
          const B = parseInt(L.tagName.charAt(1)), J = L.textContent.trim();
          J && O.push({
            id: `heading-${_}-${M}`,
            level: B,
            text: J,
            page: _ + 1
          });
        });
      }
    }), g(R), x(O);
  }, [n, r, s, y]);
  const z = s !== void 0 ? s : n.length;
  return /* @__PURE__ */ o.jsxs(
    "aside",
    {
      className: `sidebar ${a ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ o.jsx(Ee, { size: 18 }),
            /* @__PURE__ */ o.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: i,
              "aria-label": a ? "Expand sidebar" : "Collapse sidebar",
              title: a ? "Expand sidebar" : "Collapse sidebar",
              children: a ? /* @__PURE__ */ o.jsx(Vt, { size: 16 }) : /* @__PURE__ */ o.jsx(Yt, { size: 16 })
            }
          )
        ] }),
        !a && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(Jt, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: z })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(Xt, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: E.toLocaleString() })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(Ee, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: u + 1 })
            ] })
          ] }),
          C.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsxs("h3", { children: [
              /* @__PURE__ */ o.jsx(lt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "document-outline", "data-testid": "outline", children: C.map((R) => {
              const O = R.level === 1 ? er : R.level === 2 ? rr : ar;
              return /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${R.level}`,
                  style: { marginLeft: `${(R.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ o.jsx(O, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ o.jsx("span", { className: "outline-text", children: R.text }),
                    /* @__PURE__ */ o.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      R.page
                    ] })
                  ]
                },
                R.id
              );
            }) })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ o.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ o.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Ur() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const a = Math.random() * 16 | 0;
    return (e === "x" ? a : a & 3 | 8).toString(16);
  });
}
function qr(e) {
  return new Promise((a, i) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      i(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      i(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const s = new FileReader();
    s.onload = (l) => {
      const n = l.target.result;
      if (n.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        i(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const f = `editor-image-${Ur()}`;
        localStorage.setItem(f, n), a(f);
      } catch (f) {
        f.name === "QuotaExceededError" ? i(new Error("Storage quota exceeded")) : i(f);
      }
    }, s.onerror = () => {
      i(new Error("Error reading image file"));
    }, s.readAsDataURL(e);
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
  constructor(a = "Editor") {
    this.namespace = a;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(a, i, r) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${a}] ${i}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(a, i) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(a, i) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(a, i) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(a, i) {
  }
}
const Qe = new Gr("Editor"), Ne = ({
  currentFormat: e,
  pageSize: a,
  onFormatText: i,
  onPageSizeChange: r,
  onAddPageBreak: s
}) => {
  const l = async (n) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(n.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (n.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const y = await qr(n), f = localStorage.getItem(y);
      f && (document.execCommand("insertImage", !1, f), Qe.info("Image inserted", { key: y }));
    } catch (u) {
      Qe.error("Error uploading image", u);
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ o.jsx(Gt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ o.jsx(cr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ o.jsx(Dr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ o.jsx(Ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ o.jsx(Or, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ o.jsx(Cr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ o.jsx(Rr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ o.jsx(jr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        onChange: (n) => i("fontName", n.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ o.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ o.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ o.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ o.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ o.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        onChange: (n) => i("fontSize", n.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ o.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ o.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ o.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ o.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ o.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ o.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ o.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ o.jsx(lt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ o.jsx(fr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ o.jsx(xr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => {
          const n = prompt("Enter URL:");
          n && i("createLink", n);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ o.jsx(ur, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ o.jsx(_r, { size: 16 })
      }
    ),
    s && /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: s,
        title: "Insert Page Break",
        children: /* @__PURE__ */ o.jsx(Ee, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("undo"),
        title: "Undo",
        children: /* @__PURE__ */ o.jsx(Lr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => i("redo"),
        title: "Redo",
        children: /* @__PURE__ */ o.jsx(yr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (n) => n.target.files[0] && l(n.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ o.jsx(ir, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        value: a,
        onChange: (n) => r(n.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ o.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ o.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ o.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
};
Ne.propTypes = {
  currentFormat: A.shape({
    bold: A.bool,
    italic: A.bool,
    underline: A.bool,
    strikethrough: A.bool,
    alignLeft: A.bool,
    alignCenter: A.bool,
    alignRight: A.bool,
    alignJustify: A.bool,
    fontFamily: A.string,
    fontSize: A.string
  }).isRequired,
  pageSize: A.oneOf(["A4", "Letter", "Legal"]).isRequired,
  onFormatText: A.func.isRequired,
  onPageSizeChange: A.func.isRequired,
  onAddPageBreak: A.func
};
Ne.defaultProps = {
  onAddPageBreak: void 0
};
const Oe = ({
  content: e,
  dimensions: a,
  pageSize: i,
  pageBoundaries: r = [],
  editorRef: s,
  onInput: l,
  onKeyDown: n,
  onClick: u,
  onScroll: y
}) => {
  const f = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, E = (g) => {
    if (g.key === "Tab")
      return g.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const x = C.getRangeAt(0), { startContainer: z, endContainer: R } = x, O = (w) => w ? w.nodeType === Node.ELEMENT_NODE ? w.tagName === "PAGE-BREAK" || w.getAttribute("data-page-break") === "true" : w.parentElement && O(w.parentElement) : !1;
    if ((g.key === "Backspace" || g.key === "Delete") && (O(z) || O(R)))
      return g.preventDefault(), !1;
    n && n(g);
  };
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${a.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh"
      },
      children: /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: s,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${a.height}px`,
            backgroundColor: "white",
            padding: `${f.top}px ${f.right}px ${f.bottom}px ${f.left}px`,
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
          onInput: l,
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
  content: A.string.isRequired,
  dimensions: A.shape({
    width: A.number.isRequired,
    height: A.number.isRequired
  }).isRequired,
  pageSize: A.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: A.arrayOf(
    A.shape({
      id: A.string.isRequired,
      pageNumber: A.number.isRequired,
      top: A.number,
      height: A.number
    })
  ),
  editorRef: A.shape({
    current: A.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: A.func.isRequired,
  onKeyDown: A.func,
  onClick: A.func,
  onScroll: A.func
};
Oe.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0
};
const Me = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: a = 0,
  pageSize: i = "A4",
  onNavigate: r,
  onAddPage: s,
  onDeletePage: l,
  onPageSizeChange: n
} = {}) => {
  const u = Math.max(e?.length || 0, 1), y = (C) => {
    r && r(C);
  }, f = () => {
    s && s();
  }, E = (C) => {
    if (u <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(C);
  }, g = (C) => {
    n && n(C);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ o.jsx(br, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: i,
          onChange: (C) => g(C.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ o.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ o.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((C, x) => /* @__PURE__ */ o.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${x === a ? "active" : ""}`,
          onClick: () => y(x),
          "aria-label": `Go to page ${x + 1}`,
          "aria-current": x === a ? "page" : void 0,
          children: [
            /* @__PURE__ */ o.jsx(Ee, { size: 14 }),
            /* @__PURE__ */ o.jsxs("span", { children: [
              "Page ",
              x + 1
            ] })
          ]
        }
      ),
      u > 1 && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (z) => {
            z.stopPropagation(), E(x);
          },
          "aria-label": `Delete page ${x + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ o.jsx(Br, { size: 14 })
        }
      )
    ] }, C.id || `page-${x}`)) }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: f,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ o.jsx(hr, { size: 16 }),
          /* @__PURE__ */ o.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Me.propTypes = {
  pageBoundaries: A.arrayOf(
    A.shape({
      id: A.string.isRequired,
      pageNumber: A.number.isRequired,
      top: A.number,
      height: A.number
    })
  ),
  activePage: A.number,
  pageSize: A.oneOf(["A4", "Letter", "Legal"]),
  onNavigate: A.func,
  onAddPage: A.func,
  onDeletePage: A.func,
  onPageSizeChange: A.func
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
}, Yr = 50, Fr = 50, Vr = 50, Wr = 100, Jr = 500, De = Re(({
  pageManagerComponent: e = null,
  onNavigatePage: a,
  onAddPage: i,
  onDeletePage: r,
  onPageSizeChange: s,
  onChange: l,
  showSidebar: n = !0,
  showToolbar: u = !0,
  showPageManager: y = !0
}, f) => {
  const E = at(), g = ot(), { pageSize: C, continuousContent: x, pageBoundaries: z, activePage: R } = E, O = te(null), w = te(null), { currentFormat: _, formatText: P } = jt(), {
    checkAndUpdateBoundaries: k,
    getCurrentPage: c,
    scrollToPage: S,
    positionCursorAtPage: L,
    updateBoundaries: M,
    triggerAutoReflow: B,
    removePageAndContent: J
  } = It(C, w), U = me(() => et[C] || et.A4, [C]), [V, H] = ye(!1), Y = te(null), Q = te(!1), K = te(!1), X = te(!1), ee = te(x);
  ae(() => {
    if (w.current) {
      if (!X.current) {
        w.current.innerHTML = x, X.current = !0, ee.current = x;
        const h = setTimeout(() => {
          M();
        }, Yr);
        return () => clearTimeout(h);
      }
      if (ee.current !== x) {
        if (w.current.innerHTML !== x) {
          w.current.innerHTML = x;
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
  }, [x, M, z.length, g, S]), ae(() => {
    l && X.current && l(x);
  }, [x, l]), gt(f, () => ({
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
      g.updateContinuousContent(h), w.current && (w.current.innerHTML = h, setTimeout(() => {
        M();
      }, 50));
    }
  }), [x, g, M]), ae(() => {
    const h = setTimeout(() => {
      w.current && w.current.focus();
    }, 200);
    return () => clearTimeout(h);
  }, []);
  const ne = W((h) => {
    const N = h.currentTarget.innerHTML;
    g.updateContinuousContent(N), k(), B();
    const D = c(O);
    D !== R && g.setActivePage(D);
  }, [k, g, c, R, B, O]), d = W((h) => {
    g.updatePageSize(h), M({ pageSize: h }), s && s(h);
  }, [g, M, s]), t = W((h) => {
    h < 0 || h >= z.length || (K.current = !0, g.setActivePage(h), S(h, O), setTimeout(() => {
      K.current = !1;
    }, Jr), a && a(h));
  }, [g, S, a, z.length]), p = W(() => {
    Q.current = !0, g.addPageBreak({ position: "end" }), i && i();
  }, [g, i]), v = W(() => {
    const h = window.getSelection();
    if (h && h.rangeCount > 0) {
      if (!w?.current) return;
      const Z = `<page-break data-page-break="true" contenteditable="false" data-page-number="${w.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Z), setTimeout(() => {
        M();
        const m = c(O);
        g.setActivePage(m);
      }, 150);
    }
  }, [M, c, g, O]), b = W((h) => {
    if (z.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    J(h) && (g.setActivePage(0), r && r(h));
  }, [z.length, J, g, r]), I = W(() => {
    !O.current || !w.current || K.current || (Y.current && clearTimeout(Y.current), Y.current = setTimeout(() => {
      if (K.current) {
        Y.current = null;
        return;
      }
      const h = c(O);
      h !== R && h >= 0 && g.setActivePage(h), Y.current = null;
    }, Wr));
  }, [c, R, g]), j = me(() => {
    if (!x) return 0;
    const N = x.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return N ? N.length : 0;
  }, [x]), T = z.length || 1;
  return ae(() => () => {
    Y.current && clearTimeout(Y.current);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ o.jsx(
      Ne,
      {
        currentFormat: _,
        pageSize: C,
        onFormatText: P,
        onPageSizeChange: d,
        onAddPageBreak: v
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "editor-container", children: [
      n && /* @__PURE__ */ o.jsx(
        $r,
        {
          editorView: null,
          isCollapsed: V,
          onToggle: () => H((h) => !h),
          wordCount: j,
          pageCount: T
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: O,
          onScroll: I,
          children: /* @__PURE__ */ o.jsx(
            Oe,
            {
              content: x,
              dimensions: U,
              pageSize: C,
              pageBoundaries: z,
              editorRef: w,
              onInput: ne,
              onClick: () => w.current?.focus()
            }
          )
        }
      ),
      y && /* @__PURE__ */ o.jsx("div", { className: "page-manager-sidebar", children: e ? be.cloneElement(e, {
        onNavigate: t,
        onAddPage: p,
        onDeletePage: b,
        onPageSizeChange: d
      }) : /* @__PURE__ */ o.jsx(
        Hr,
        {
          pageBoundaries: z,
          activePage: R,
          pageSize: C,
          onNavigate: t,
          onAddPage: p,
          onDeletePage: b,
          onPageSizeChange: d
        }
      ) })
    ] })
  ] });
});
De.displayName = "ContentEditableEditor";
De.propTypes = {
  pageManagerComponent: A.element,
  onNavigatePage: A.func,
  onAddPage: A.func,
  onDeletePage: A.func,
  onPageSizeChange: A.func,
  onChange: A.func,
  showSidebar: A.bool,
  showToolbar: A.bool,
  showPageManager: A.bool
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
  constructor(a) {
    super(a), this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(a) {
    return { hasError: !0 };
  }
  componentDidCatch(a, i) {
    console.error("[ErrorBoundary] Caught error:", a), console.error("[ErrorBoundary] Error info:", i), this.setState({
      error: a,
      errorInfo: i
    }), this.props.onError && this.props.onError(a, i);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ o.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ o.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ o.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ o.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ o.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ o.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ o.jsx(
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
  children: A.node.isRequired,
  fallback: A.node,
  onError: A.func,
  onReset: A.func,
  showDetails: A.bool
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
  De as ContentEditableEditor,
  Oe as ContinuousPageView,
  Xr as DocumentProvider,
  Ne as EditorToolbar,
  ut as ErrorBoundary,
  nn as PAGE_DIMENSIONS,
  Hr as PageManager,
  $r as Sidebar,
  tn as clearImages,
  en as deleteImage,
  rn as getAllImageKeys,
  Qr as getImage,
  Gr as logger,
  qr as saveImage,
  It as useContinuousReflow,
  nt as useDocument,
  ot as useDocumentActions,
  at as useDocumentState,
  jt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
