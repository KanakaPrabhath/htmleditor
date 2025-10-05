import be, { createContext as Et, useContext as vt, useReducer as bt, useMemo as ye, useState as Ee, useCallback as J, useRef as re, useEffect as ae, forwardRef as Ie, createElement as Ce, useImperativeHandle as xt } from "react";
import { v4 as De } from "uuid";
function Tt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fe = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function At() {
  if (qe) return se;
  qe = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function l(t, i, c) {
    var a = null;
    if (c !== void 0 && (a = "" + c), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      c = {};
      for (var d in i)
        d !== "key" && (c[d] = i[d]);
    } else c = i;
    return i = c.ref, {
      $$typeof: e,
      type: t,
      key: a,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return se.Fragment = r, se.jsx = l, se.jsxs = l, se;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function _t() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === V ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case I:
          return "Fragment";
        case C:
          return "Profiler";
        case E:
          return "StrictMode";
        case P:
          return "Suspense";
        case k:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case j:
            return "Portal";
          case g:
            return n.displayName || "Context";
          case R:
            return (n._context.displayName || "Context") + ".Consumer";
          case s:
            var p = n.render;
            return n = n.displayName, n || (n = p.displayName || p.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case D:
            return p = n.displayName || null, p !== null ? p : e(n.type) || "Memo";
          case N:
            p = n._payload, n = n._init;
            try {
              return e(n(p));
            } catch {
            }
        }
      return null;
    }
    function r(n) {
      return "" + n;
    }
    function l(n) {
      try {
        r(n);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var A = p.error, x = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return A.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), r(n);
      }
    }
    function t(n) {
      if (n === I) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === N)
        return "<...>";
      try {
        var p = e(n);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var n = te.A;
      return n === null ? null : n.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function a(n) {
      if (X.call(n, "key")) {
        var p = Object.getOwnPropertyDescriptor(n, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function d(n, p) {
      function A() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: A,
        configurable: !0
      });
    }
    function y() {
      var n = e(this.type);
      return Q[n] || (Q[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function m(n, p, A, x, M, S) {
      var v = A.ref;
      return n = {
        $$typeof: U,
        type: n,
        key: p,
        props: A,
        _owner: x
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function b(n, p, A, x, M, S) {
      var v = p.children;
      if (v !== void 0)
        if (x)
          if (G(v)) {
            for (x = 0; x < v.length; x++)
              h(v[x]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(v);
      if (X.call(p, "key")) {
        v = e(n);
        var w = Object.keys(p).filter(function(B) {
          return B !== "key";
        });
        x = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", f[v + x] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          v,
          w,
          v
        ), f[v + x] = !0);
      }
      if (v = null, A !== void 0 && (l(A), v = "" + A), a(p) && (l(p.key), v = "" + p.key), "key" in p) {
        A = {};
        for (var L in p)
          L !== "key" && (A[L] = p[L]);
      } else A = p;
      return v && d(
        A,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), m(
        n,
        v,
        A,
        i(),
        M,
        S
      );
    }
    function h(n) {
      O(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === N && (n._payload.status === "fulfilled" ? O(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function O(n) {
      return typeof n == "object" && n !== null && n.$$typeof === U;
    }
    var _ = be, U = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), g = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), te = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, G = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var Z, Q = {}, ne = _.react_stack_bottom_frame.bind(
      _,
      c
    )(), F = q(t(c)), f = {};
    ce.Fragment = I, ce.jsx = function(n, p, A) {
      var x = 1e4 > te.recentlyCreatedOwnerStacks++;
      return b(
        n,
        p,
        A,
        !1,
        x ? Error("react-stack-top-frame") : ne,
        x ? q(t(n)) : F
      );
    }, ce.jsxs = function(n, p, A) {
      var x = 1e4 > te.recentlyCreatedOwnerStacks++;
      return b(
        n,
        p,
        A,
        !0,
        x ? Error("react-stack-top-frame") : ne,
        x ? q(t(n)) : F
      );
    };
  })()), ce;
}
var Ze;
function Pt() {
  return Ze || (Ze = 1, process.env.NODE_ENV === "production" ? fe.exports = At() : fe.exports = _t()), fe.exports;
}
var o = Pt();
const Se = 100, we = 50, Re = 200, He = 5, Oe = (e) => e < Re, je = (e) => e > we, ue = "A4", ie = "<p><br></p>", kt = "continuous", Ne = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, le = (e, r = ue) => ({
  id: De(),
  index: e,
  size: r,
  content: ie,
  images: [],
  isBreakPoint: !1
}), me = (e) => typeof e != "string" || e.trim() === "" ? ie : e, st = (e, r = ue) => (e.length > 0 ? e : [le(0, r)]).map((t, i) => ({
  id: t.id || De(),
  index: i,
  size: t.size || r,
  content: me(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), Ct = (e = ue) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (Ne[e] || Ne.A4).height
}], Me = (e = {}) => {
  const r = (/* @__PURE__ */ new Date()).toISOString(), l = e.pageSize || ue, t = st(e.pages || [le(0, l)], l);
  return {
    id: De(),
    title: e.title || "Untitled Document",
    createdAt: r,
    updatedAt: r,
    pageSize: l,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    editorMode: e.editorMode || kt,
    continuousContent: e.continuousContent || ie,
    pageBoundaries: e.pageBoundaries || Ct(l),
    zoomLevel: e.zoomLevel || Se
  };
}, z = {
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
  DUPLICATE_PAGE: "DUPLICATE_PAGE",
  SET_ZOOM_LEVEL: "SET_ZOOM_LEVEL",
  ZOOM_IN: "ZOOM_IN",
  ZOOM_OUT: "ZOOM_OUT",
  RESET_ZOOM: "RESET_ZOOM"
}, St = (e, r) => {
  const l = (/* @__PURE__ */ new Date()).toISOString();
  switch (r.type) {
    case z.INITIALIZE_DOCUMENT: {
      const { initialContent: t = ie, pageSize: i = ue } = r.payload || {}, c = { ...le(0, i), content: me(t) };
      return Me({
        title: e.title,
        pageSize: i,
        pages: [c]
      });
    }
    case z.UPDATE_TITLE:
      return {
        ...e,
        title: r.payload,
        updatedAt: l
      };
    case z.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: i } = r.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const c = [...e.pages];
      return c[t] = {
        ...c[t],
        content: me(i)
      }, {
        ...e,
        pages: c,
        updatedAt: l
      };
    }
    case z.UPDATE_PAGES: {
      const t = Array.isArray(r.payload) ? { pages: r.payload } : r.payload || {}, i = st(t.pages || [], e.pageSize), c = Array.isArray(t.pageBreaks) ? t.pageBreaks : i.slice(0, -1).map((a, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
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
    case z.ADD_PAGE: {
      const t = typeof r.payload?.index == "number" ? Math.min(Math.max(r.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(t, 0, le(t, e.pageSize));
      const c = i.map((d, y) => ({
        ...d,
        index: y,
        size: e.pageSize
      })), a = c.slice(0, -1).map((d, y) => ({
        id: `auto-break-${y}`,
        pageNumber: y + 1
      }));
      return {
        ...e,
        pages: c,
        activePage: t,
        pageBreaks: a,
        totalPages: c.length,
        updatedAt: l
      };
    }
    case z.DELETE_PAGE: {
      const t = r.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(t, 1);
      const c = i.map((y, m) => ({
        ...y,
        index: m,
        size: e.pageSize
      }));
      let a = e.activePage;
      a >= c.length ? a = c.length - 1 : t <= a && a > 0 && (a -= 1);
      const d = c.slice(0, -1).map((y, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: c,
        activePage: a,
        pageBreaks: d,
        totalPages: c.length,
        updatedAt: l
      };
    }
    case z.SET_ACTIVE_PAGE: {
      const t = r.payload;
      if (t === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t < 0 || t >= i ? e : {
        ...e,
        activePage: t,
        updatedAt: l
      };
    }
    case z.UPDATE_PAGE_SIZE: {
      const t = r.payload;
      if (t === e.pageSize)
        return e;
      if (!Ne[t])
        return console.warn(`Invalid page size: ${t}`), e;
      const i = e.pages.map((a, d) => ({
        ...a,
        index: d,
        size: t
      })), c = i.slice(0, -1).map((a, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
      }));
      return {
        ...e,
        pageSize: t,
        pages: i,
        pageBreaks: c,
        updatedAt: l
      };
    }
    case z.RESET_DOCUMENT:
      return Me();
    case z.UPDATE_CONTINUOUS_CONTENT: {
      const t = me(r.payload);
      return t === e.continuousContent ? e : {
        ...e,
        continuousContent: t,
        updatedAt: l
      };
    }
    case z.UPDATE_PAGE_BOUNDARIES: {
      const t = Array.isArray(r.payload) ? r.payload : [];
      if (t.length === e.pageBoundaries.length && t.length > 0 && t[0].id === e.pageBoundaries[0]?.id && t[t.length - 1].id === e.pageBoundaries[t.length - 1]?.id)
        return e;
      const i = e.activePage >= t.length ? Math.max(0, t.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: t,
        totalPages: t.length,
        activePage: i,
        updatedAt: l
      };
    }
    case z.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: i } = r.payload || {}, c = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let a = e.continuousContent;
      if (t === "end")
        a = a + c + "<p><br></p>";
      else if (typeof t == "number") {
        const d = a.substring(0, t), y = a.substring(t);
        a = d + c + y;
      } else if (typeof i == "number" && typeof document < "u") {
        const d = document.createElement("div");
        d.innerHTML = a;
        const y = d.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && y.length === 0)
          a = a + c + "<p><br></p>";
        else if (i < y.length) {
          const m = y[i], b = document.createElement("page-break");
          b.setAttribute("data-page-break", "true"), b.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", m.parentNode.insertBefore(b, m.nextSibling), b.parentNode.insertBefore(h, b.nextSibling), a = d.innerHTML;
        } else
          a = a + c + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: a,
        updatedAt: l
      };
    }
    case z.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = r.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const c = i.querySelectorAll('page-break, [data-page-break="true"]');
      return c[t] && c[t].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((d, y) => {
        d.setAttribute("data-page-number", String(y + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: l
      };
    }
    case z.SET_EDITOR_MODE: {
      const t = r.payload;
      if (t === e.editorMode)
        return e;
      let i = e.continuousContent, c = e.pages;
      return t === "continuous" ? i = e.pages.map((d) => d.content).filter((d) => d && d !== ie).join(`
`) || ie : e.continuousContent && e.continuousContent !== ie && (c = [{ ...le(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: t,
        continuousContent: i,
        pages: c,
        updatedAt: l
      };
    }
    case z.SET_ZOOM_LEVEL: {
      const t = r.payload;
      return t < we || t > Re ? (console.warn(`Invalid zoom level: ${t}. Must be between ${we} and ${Re}.`), e) : t === e.zoomLevel ? e : {
        ...e,
        zoomLevel: t,
        updatedAt: l
      };
    }
    case z.ZOOM_IN: {
      if (!Oe(e.zoomLevel))
        return e;
      const t = e.zoomLevel + He;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: l
      };
    }
    case z.ZOOM_OUT: {
      if (!je(e.zoomLevel))
        return e;
      const t = e.zoomLevel - He;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: l
      };
    }
    case z.RESET_ZOOM:
      return e.zoomLevel === Se ? e : {
        ...e,
        zoomLevel: Se,
        updatedAt: l
      };
    default:
      return e;
  }
}, ct = Et(null), cr = ({ children: e, initialState: r = {} }) => {
  const [l, t] = bt(St, Me(r)), i = ye(() => ({
    initializeDocument: (a) => t({ type: z.INITIALIZE_DOCUMENT, payload: a }),
    updateTitle: (a) => t({ type: z.UPDATE_TITLE, payload: a }),
    updatePageContent: (a) => t({ type: z.UPDATE_PAGE_CONTENT, payload: a }),
    updatePages: (a) => t({ type: z.UPDATE_PAGES, payload: a }),
    addPage: (a) => t({ type: z.ADD_PAGE, payload: a }),
    deletePage: (a) => t({ type: z.DELETE_PAGE, payload: a }),
    setActivePage: (a) => t({ type: z.SET_ACTIVE_PAGE, payload: a }),
    updatePageSize: (a) => t({ type: z.UPDATE_PAGE_SIZE, payload: a }),
    resetDocument: () => t({ type: z.RESET_DOCUMENT }),
    updateContinuousContent: (a) => t({ type: z.UPDATE_CONTINUOUS_CONTENT, payload: a }),
    updatePageBoundaries: (a) => t({ type: z.UPDATE_PAGE_BOUNDARIES, payload: a }),
    addPageBreak: (a) => t({ type: z.ADD_PAGE_BREAK, payload: a }),
    removePageBreak: (a) => t({ type: z.REMOVE_PAGE_BREAK, payload: a }),
    setEditorMode: (a) => t({ type: z.SET_EDITOR_MODE, payload: a }),
    insertPageAt: (a) => t({ type: z.INSERT_PAGE_AT, payload: a }),
    movePageTo: (a) => t({ type: z.MOVE_PAGE_TO, payload: a }),
    duplicatePage: (a) => t({ type: z.DUPLICATE_PAGE, payload: a }),
    setZoomLevel: (a) => t({ type: z.SET_ZOOM_LEVEL, payload: a }),
    zoomIn: () => t({ type: z.ZOOM_IN }),
    zoomOut: () => t({ type: z.ZOOM_OUT }),
    resetZoom: () => t({ type: z.RESET_ZOOM })
  }), []), c = ye(() => ({
    state: l,
    actions: i,
    dispatch: t
  }), [l, i]);
  return /* @__PURE__ */ o.jsx(ct.Provider, { value: c, children: e });
}, lt = () => {
  const e = vt(ct);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, ut = () => {
  const { state: e } = lt();
  return e;
}, dt = () => {
  const { actions: e } = lt();
  return e;
};
var pe = { exports: {} }, ge = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function wt() {
  if (Ye) return H;
  Ye = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, l = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, U = e ? Symbol.for("react.lazy") : 60116, j = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function R(s) {
    if (typeof s == "object" && s !== null) {
      var P = s.$$typeof;
      switch (P) {
        case r:
          switch (s = s.type, s) {
            case y:
            case m:
            case t:
            case c:
            case i:
            case h:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case d:
                case b:
                case U:
                case _:
                case a:
                  return s;
                default:
                  return P;
              }
          }
        case l:
          return P;
      }
    }
  }
  function g(s) {
    return R(s) === m;
  }
  return H.AsyncMode = y, H.ConcurrentMode = m, H.ContextConsumer = d, H.ContextProvider = a, H.Element = r, H.ForwardRef = b, H.Fragment = t, H.Lazy = U, H.Memo = _, H.Portal = l, H.Profiler = c, H.StrictMode = i, H.Suspense = h, H.isAsyncMode = function(s) {
    return g(s) || R(s) === y;
  }, H.isConcurrentMode = g, H.isContextConsumer = function(s) {
    return R(s) === d;
  }, H.isContextProvider = function(s) {
    return R(s) === a;
  }, H.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === r;
  }, H.isForwardRef = function(s) {
    return R(s) === b;
  }, H.isFragment = function(s) {
    return R(s) === t;
  }, H.isLazy = function(s) {
    return R(s) === U;
  }, H.isMemo = function(s) {
    return R(s) === _;
  }, H.isPortal = function(s) {
    return R(s) === l;
  }, H.isProfiler = function(s) {
    return R(s) === c;
  }, H.isStrictMode = function(s) {
    return R(s) === i;
  }, H.isSuspense = function(s) {
    return R(s) === h;
  }, H.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === t || s === m || s === c || s === i || s === h || s === O || typeof s == "object" && s !== null && (s.$$typeof === U || s.$$typeof === _ || s.$$typeof === a || s.$$typeof === d || s.$$typeof === b || s.$$typeof === I || s.$$typeof === E || s.$$typeof === C || s.$$typeof === j);
  }, H.typeOf = R, H;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Rt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, l = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, U = e ? Symbol.for("react.lazy") : 60116, j = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function R(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === t || u === m || u === c || u === i || u === h || u === O || typeof u == "object" && u !== null && (u.$$typeof === U || u.$$typeof === _ || u.$$typeof === a || u.$$typeof === d || u.$$typeof === b || u.$$typeof === I || u.$$typeof === E || u.$$typeof === C || u.$$typeof === j);
    }
    function g(u) {
      if (typeof u == "object" && u !== null) {
        var K = u.$$typeof;
        switch (K) {
          case r:
            var oe = u.type;
            switch (oe) {
              case y:
              case m:
              case t:
              case c:
              case i:
              case h:
                return oe;
              default:
                var de = oe && oe.$$typeof;
                switch (de) {
                  case d:
                  case b:
                  case U:
                  case _:
                  case a:
                    return de;
                  default:
                    return K;
                }
            }
          case l:
            return K;
        }
      }
    }
    var s = y, P = m, k = d, D = a, N = r, $ = b, V = t, te = U, X = _, G = l, q = c, Z = i, Q = h, ne = !1;
    function F(u) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(u) || g(u) === y;
    }
    function f(u) {
      return g(u) === m;
    }
    function n(u) {
      return g(u) === d;
    }
    function p(u) {
      return g(u) === a;
    }
    function A(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function x(u) {
      return g(u) === b;
    }
    function M(u) {
      return g(u) === t;
    }
    function S(u) {
      return g(u) === U;
    }
    function v(u) {
      return g(u) === _;
    }
    function w(u) {
      return g(u) === l;
    }
    function L(u) {
      return g(u) === c;
    }
    function B(u) {
      return g(u) === i;
    }
    function ee(u) {
      return g(u) === h;
    }
    Y.AsyncMode = s, Y.ConcurrentMode = P, Y.ContextConsumer = k, Y.ContextProvider = D, Y.Element = N, Y.ForwardRef = $, Y.Fragment = V, Y.Lazy = te, Y.Memo = X, Y.Portal = G, Y.Profiler = q, Y.StrictMode = Z, Y.Suspense = Q, Y.isAsyncMode = F, Y.isConcurrentMode = f, Y.isContextConsumer = n, Y.isContextProvider = p, Y.isElement = A, Y.isForwardRef = x, Y.isFragment = M, Y.isLazy = S, Y.isMemo = v, Y.isPortal = w, Y.isProfiler = L, Y.isStrictMode = B, Y.isSuspense = ee, Y.isValidElementType = R, Y.typeOf = g;
  })()), Y;
}
var Fe;
function ft() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? ge.exports = wt() : ge.exports = Rt()), ge.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, We;
function Ot() {
  if (We) return xe;
  We = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
  function t(c) {
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
      for (var a = {}, d = 0; d < 10; d++)
        a["_" + String.fromCharCode(d)] = d;
      var y = Object.getOwnPropertyNames(a).map(function(b) {
        return a[b];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        m[b] = b;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = i() ? Object.assign : function(c, a) {
    for (var d, y = t(c), m, b = 1; b < arguments.length; b++) {
      d = Object(arguments[b]);
      for (var h in d)
        r.call(d, h) && (y[h] = d[h]);
      if (e) {
        m = e(d);
        for (var O = 0; O < m.length; O++)
          l.call(d, m[O]) && (y[m[O]] = d[m[O]]);
      }
    }
    return y;
  }, xe;
}
var Te, Ke;
function Le() {
  if (Ke) return Te;
  Ke = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Te = e, Te;
}
var Ae, Je;
function pt() {
  return Je || (Je = 1, Ae = Function.call.bind(Object.prototype.hasOwnProperty)), Ae;
}
var _e, Xe;
function jt() {
  if (Xe) return _e;
  Xe = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = /* @__PURE__ */ Le(), l = {}, t = /* @__PURE__ */ pt();
    e = function(c) {
      var a = "Warning: " + c;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(c, a, d, y, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in c)
        if (t(c, b)) {
          var h;
          try {
            if (typeof c[b] != "function") {
              var O = Error(
                (y || "React class") + ": " + d + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw O.name = "Invariant Violation", O;
            }
            h = c[b](a, b, y, d, null, r);
          } catch (U) {
            h = U;
          }
          if (h && !(h instanceof Error) && e(
            (y || "React class") + ": type specification of " + d + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in l)) {
            l[h.message] = !0;
            var _ = m ? m() : "";
            e(
              "Failed " + d + " type: " + h.message + (_ ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (l = {});
  }, _e = i, _e;
}
var Pe, Qe;
function Nt() {
  if (Qe) return Pe;
  Qe = 1;
  var e = ft(), r = Ot(), l = /* @__PURE__ */ Le(), t = /* @__PURE__ */ pt(), i = /* @__PURE__ */ jt(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(d) {
    var y = "Warning: " + d;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Pe = function(d, y) {
    var m = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function h(f) {
      var n = f && (m && f[m] || f[b]);
      if (typeof n == "function")
        return n;
    }
    var O = "<<anonymous>>", _ = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: C(),
      arrayOf: R,
      element: g(),
      elementType: s(),
      instanceOf: P,
      node: $(),
      objectOf: D,
      oneOf: k,
      oneOfType: N,
      shape: te,
      exact: X
    };
    function U(f, n) {
      return f === n ? f !== 0 || 1 / f === 1 / n : f !== f && n !== n;
    }
    function j(f, n) {
      this.message = f, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    j.prototype = Error.prototype;
    function I(f) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, p = 0;
      function A(M, S, v, w, L, B, ee) {
        if (w = w || O, B = B || v, ee !== l) {
          if (y) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var K = w + ":" + v;
            !n[K] && // Avoid spamming the console because they are often not actionable except for lib authors
            p < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + w + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[K] = !0, p++);
          }
        }
        return S[v] == null ? M ? S[v] === null ? new j("The " + L + " `" + B + "` is marked as required " + ("in `" + w + "`, but its value is `null`.")) : new j("The " + L + " `" + B + "` is marked as required in " + ("`" + w + "`, but its value is `undefined`.")) : null : f(S, v, w, L, B);
      }
      var x = A.bind(null, !1);
      return x.isRequired = A.bind(null, !0), x;
    }
    function E(f) {
      function n(p, A, x, M, S, v) {
        var w = p[A], L = Z(w);
        if (L !== f) {
          var B = Q(w);
          return new j(
            "Invalid " + M + " `" + S + "` of type " + ("`" + B + "` supplied to `" + x + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return I(n);
    }
    function C() {
      return I(a);
    }
    function R(f) {
      function n(p, A, x, M, S) {
        if (typeof f != "function")
          return new j("Property `" + S + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var v = p[A];
        if (!Array.isArray(v)) {
          var w = Z(v);
          return new j("Invalid " + M + " `" + S + "` of type " + ("`" + w + "` supplied to `" + x + "`, expected an array."));
        }
        for (var L = 0; L < v.length; L++) {
          var B = f(v, L, x, M, S + "[" + L + "]", l);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return I(n);
    }
    function g() {
      function f(n, p, A, x, M) {
        var S = n[p];
        if (!d(S)) {
          var v = Z(S);
          return new j("Invalid " + x + " `" + M + "` of type " + ("`" + v + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(f);
    }
    function s() {
      function f(n, p, A, x, M) {
        var S = n[p];
        if (!e.isValidElementType(S)) {
          var v = Z(S);
          return new j("Invalid " + x + " `" + M + "` of type " + ("`" + v + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(f);
    }
    function P(f) {
      function n(p, A, x, M, S) {
        if (!(p[A] instanceof f)) {
          var v = f.name || O, w = F(p[A]);
          return new j("Invalid " + M + " `" + S + "` of type " + ("`" + w + "` supplied to `" + x + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return I(n);
    }
    function k(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), a;
      function n(p, A, x, M, S) {
        for (var v = p[A], w = 0; w < f.length; w++)
          if (U(v, f[w]))
            return null;
        var L = JSON.stringify(f, function(ee, u) {
          var K = Q(u);
          return K === "symbol" ? String(u) : u;
        });
        return new j("Invalid " + M + " `" + S + "` of value `" + String(v) + "` " + ("supplied to `" + x + "`, expected one of " + L + "."));
      }
      return I(n);
    }
    function D(f) {
      function n(p, A, x, M, S) {
        if (typeof f != "function")
          return new j("Property `" + S + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var v = p[A], w = Z(v);
        if (w !== "object")
          return new j("Invalid " + M + " `" + S + "` of type " + ("`" + w + "` supplied to `" + x + "`, expected an object."));
        for (var L in v)
          if (t(v, L)) {
            var B = f(v, L, x, M, S + "." + L, l);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return I(n);
    }
    function N(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var n = 0; n < f.length; n++) {
        var p = f[n];
        if (typeof p != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(p) + " at index " + n + "."
          ), a;
      }
      function A(x, M, S, v, w) {
        for (var L = [], B = 0; B < f.length; B++) {
          var ee = f[B], u = ee(x, M, S, v, w, l);
          if (u == null)
            return null;
          u.data && t(u.data, "expectedType") && L.push(u.data.expectedType);
        }
        var K = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new j("Invalid " + v + " `" + w + "` supplied to " + ("`" + S + "`" + K + "."));
      }
      return I(A);
    }
    function $() {
      function f(n, p, A, x, M) {
        return G(n[p]) ? null : new j("Invalid " + x + " `" + M + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return I(f);
    }
    function V(f, n, p, A, x) {
      return new j(
        (f || "React class") + ": " + n + " type `" + p + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function te(f) {
      function n(p, A, x, M, S) {
        var v = p[A], w = Z(v);
        if (w !== "object")
          return new j("Invalid " + M + " `" + S + "` of type `" + w + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var L in f) {
          var B = f[L];
          if (typeof B != "function")
            return V(x, M, S, L, Q(B));
          var ee = B(v, L, x, M, S + "." + L, l);
          if (ee)
            return ee;
        }
        return null;
      }
      return I(n);
    }
    function X(f) {
      function n(p, A, x, M, S) {
        var v = p[A], w = Z(v);
        if (w !== "object")
          return new j("Invalid " + M + " `" + S + "` of type `" + w + "` " + ("supplied to `" + x + "`, expected `object`."));
        var L = r({}, p[A], f);
        for (var B in L) {
          var ee = f[B];
          if (t(f, B) && typeof ee != "function")
            return V(x, M, S, B, Q(ee));
          if (!ee)
            return new j(
              "Invalid " + M + " `" + S + "` key `" + B + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(p[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var u = ee(v, B, x, M, S + "." + B, l);
          if (u)
            return u;
        }
        return null;
      }
      return I(n);
    }
    function G(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(G);
          if (f === null || d(f))
            return !0;
          var n = h(f);
          if (n) {
            var p = n.call(f), A;
            if (n !== f.entries) {
              for (; !(A = p.next()).done; )
                if (!G(A.value))
                  return !1;
            } else
              for (; !(A = p.next()).done; ) {
                var x = A.value;
                if (x && !G(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(f, n) {
      return f === "symbol" ? !0 : n ? n["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && n instanceof Symbol : !1;
    }
    function Z(f) {
      var n = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : q(n, f) ? "symbol" : n;
    }
    function Q(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var n = Z(f);
      if (n === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function ne(f) {
      var n = Q(f);
      switch (n) {
        case "array":
        case "object":
          return "an " + n;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + n;
        default:
          return n;
      }
    }
    function F(f) {
      return !f.constructor || !f.constructor.name ? O : f.constructor.name;
    }
    return _.checkPropTypes = i, _.resetWarningCache = i.resetWarningCache, _.PropTypes = _, _;
  }, Pe;
}
var ke, et;
function Mt() {
  if (et) return ke;
  et = 1;
  var e = /* @__PURE__ */ Le();
  function r() {
  }
  function l() {
  }
  return l.resetWarningCache = r, ke = function() {
    function t(a, d, y, m, b, h) {
      if (h !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    t.isRequired = t;
    function i() {
      return t;
    }
    var c = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: i,
      element: t,
      elementType: t,
      instanceOf: i,
      node: t,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: l,
      resetWarningCache: r
    };
    return c.PropTypes = c, c;
  }, ke;
}
var tt;
function It() {
  if (tt) return pe.exports;
  if (tt = 1, process.env.NODE_ENV !== "production") {
    var e = ft(), r = !0;
    pe.exports = /* @__PURE__ */ Nt()(e.isElement, r);
  } else
    pe.exports = /* @__PURE__ */ Mt()();
  return pe.exports;
}
var Dt = /* @__PURE__ */ It();
const T = /* @__PURE__ */ Tt(Dt), Lt = {
  "10px": "1",
  "12px": "2",
  "14px": "3",
  "16px": "4",
  "18px": "5",
  "24px": "6",
  "32px": "7"
}, nt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: "12px",
  headingLevel: "p"
  // Add heading level tracking
}, zt = () => {
  const [e, r] = Ee(nt), l = J((a) => {
    r((d) => ({
      ...d,
      alignLeft: a === "left",
      alignCenter: a === "center",
      alignRight: a === "right",
      alignJustify: a === "justify"
    }));
  }, []), t = J((a) => {
    try {
      const d = window.getSelection();
      if (!d || d.rangeCount === 0)
        return !1;
      const y = d.getRangeAt(0);
      if (!y.toString())
        return r((b) => ({ ...b, fontSize: a })), !1;
      try {
        const b = document.createElement("span");
        b.style.fontSize = a;
        const h = y.extractContents();
        return b.appendChild(h), y.insertNode(b), y.selectNodeContents(b), d.removeAllRanges(), d.addRange(y), r((O) => ({ ...O, fontSize: a })), !0;
      } catch {
        const h = Lt[a] || "2";
        return document.execCommand("fontSize", !1, h), r((O) => ({ ...O, fontSize: a })), !0;
      }
    } catch (d) {
      return console.warn("[useFormatting] Font size change failed:", d), !1;
    }
  }, []), i = J((a, d = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (a === "fontSize") {
        t(d);
        return;
      }
      switch (document.execCommand(a, !1, d) || console.warn(`[useFormatting] Command "${a}" failed`), a) {
        case "bold":
          r((m) => ({ ...m, bold: !m.bold }));
          break;
        case "italic":
          r((m) => ({ ...m, italic: !m.italic }));
          break;
        case "underline":
          r((m) => ({ ...m, underline: !m.underline }));
          break;
        case "strikethrough":
          r((m) => ({ ...m, strikethrough: !m.strikethrough }));
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
          r((m) => ({ ...m, fontFamily: d }));
          break;
        case "formatBlock":
          r((m) => ({ ...m, headingLevel: d }));
          break;
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${a}":`, y);
    }
  }, [t, l]), c = J(() => {
    r(nt);
  }, []);
  return {
    currentFormat: e,
    formatText: i,
    resetFormat: c
  };
}, he = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
}, rt = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Bt = 300, $t = 200, Ut = 50, qt = 'page-break, [data-page-break="true"]', Gt = (e, r, l = 100) => {
  const t = dt(), i = re(null), c = re(null), a = re(e), d = re(l), y = re(!1);
  ae(() => {
    a.current = e;
  }, [e]), ae(() => {
    d.current = l;
  }, [l]), ae(() => () => {
    i.current && clearTimeout(i.current), c.current && clearTimeout(c.current);
  }, []);
  const m = J((g, s) => {
    if (!g || g.length === 0)
      return null;
    let P = 0, k = null;
    for (let D = 0; D < g.length; D++) {
      const N = g[D];
      if (!N || !N.getBoundingClientRect)
        continue;
      const $ = N.getBoundingClientRect().height;
      if ($ < 1)
        continue;
      if (P + $ > s)
        return k === null ? D > 0 ? {
          overflowIndex: D,
          overflowElement: N,
          accumulatedHeight: P
        } : null : {
          overflowIndex: D,
          overflowElement: N,
          accumulatedHeight: P
        };
      P += $, k = N;
    }
    return null;
  }, []), b = J((g, s) => {
    if (!g || !r?.current)
      return !1;
    try {
      const P = r.current, k = document.createElement("page-break");
      return k.setAttribute("data-page-break", "true"), k.setAttribute("contenteditable", "false"), k.setAttribute("data-page-number", s || "2"), g.parentNode.insertBefore(k, g), !0;
    } catch (P) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", P), !1;
    }
  }, [r]), h = J((g = {}) => {
    if (!r?.current || typeof document > "u")
      return [];
    const s = g.pageSize || a.current || "A4", P = he[s] || he.A4, k = r.current, D = k.querySelectorAll(qt), N = [];
    N.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: P.height
    });
    const $ = k.getBoundingClientRect(), V = k.scrollTop;
    return D.forEach((te, X) => {
      const q = te.getBoundingClientRect().top - $.top + V;
      N.push({
        id: `page-${X + 1}`,
        pageNumber: X + 2,
        top: q,
        height: P.height
      });
    }), N;
  }, [r]), O = J((g = {}) => {
    const s = h(g);
    return t.updatePageBoundaries(s), s;
  }, [h, t]), _ = J(() => {
    if (!(!r?.current || y.current))
      try {
        y.current = !0;
        const g = r.current, s = a.current || "A4", P = d.current || 100, D = (he[s] || he.A4).height - rt.top - rt.bottom, N = P / 100, $ = D / N, V = Array.from(g.children);
        if (V.length === 0)
          return;
        const te = V.filter(
          (F) => F.tagName === "PAGE-BREAK" || F.getAttribute("data-page-break") === "true"
        ), X = [];
        let G = [];
        for (const F of V)
          F.tagName === "PAGE-BREAK" || F.getAttribute("data-page-break") === "true" ? G.length > 0 && (X.push(G), G = []) : G.push(F);
        G.length > 0 && X.push(G), X.length === 0 && V.length > 0 && X.push(V.filter(
          (F) => !(F.tagName === "PAGE-BREAK" || F.getAttribute("data-page-break") === "true")
        ));
        let q = !1, Z = 0;
        const Q = 3, ne = 20;
        for (let F = 0; F < X.length && Z < Q; F++) {
          const f = X[F], n = m(f, $);
          if (n && n.overflowIndex > 0) {
            let p = 0;
            for (let S = 0; S < f.length; S++) {
              const v = f[S];
              v && v.getBoundingClientRect && (p += v.getBoundingClientRect().height);
            }
            if (p - $ < ne)
              continue;
            const x = F + 2;
            if (b(n.overflowElement, x)) {
              q = !0, Z++;
              const S = Array.from(g.children), v = [];
              let w = [];
              for (const L of S)
                L.tagName === "PAGE-BREAK" || L.getAttribute("data-page-break") === "true" ? w.length > 0 && (v.push(w), w = []) : w.push(L);
              w.length > 0 && v.push(w), X = v;
            }
          }
        }
        if (q) {
          const F = g.innerHTML;
          t.updateContinuousContent(F), setTimeout(() => {
            O(), Z >= Q && setTimeout(() => {
              y.current || _();
            }, 100);
          }, Ut);
        }
      } catch (g) {
        console.warn("[checkAndReflow] Reflow failed:", g);
      } finally {
        y.current = !1;
      }
  }, [r, m, b, t, O]), U = J((g = $t) => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, _();
    }, g);
  }, [_]), j = J((g = {}) => {
    i.current && clearTimeout(i.current);
    const s = typeof g.delay == "number" ? g.delay : Bt;
    i.current = setTimeout(() => {
      i.current = null, O(g);
    }, Math.max(0, s));
  }, [O]), I = J((g) => {
    if (!g?.current || !r?.current)
      return 0;
    try {
      const s = g.current, k = r.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (k.length === 0)
        return 0;
      const D = s.getBoundingClientRect(), N = D.top + D.height / 2;
      for (let $ = k.length - 1; $ >= 0; $--)
        if (k[$].getBoundingClientRect().top < N)
          return $ + 1;
      return 0;
    } catch (s) {
      return console.warn("[getCurrentPage] Failed to calculate page:", s), 0;
    }
  }, [r]), E = J((g) => {
    if (!r?.current)
      return;
    const s = r.current;
    s.focus();
    try {
      let P = null, k = 0;
      if (g === 0)
        P = s.firstChild, k = 0;
      else {
        const N = s.querySelectorAll('page-break, [data-page-break="true"]')[g - 1];
        N && N.nextSibling && (P = N.nextSibling, k = 0);
      }
      if (P) {
        const D = document.createRange(), N = window.getSelection();
        P.nodeType === Node.TEXT_NODE ? D.setStart(P, k) : D.setStart(P, 0), D.collapse(!0), N.removeAllRanges(), N.addRange(D);
      }
    } catch (P) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", P);
    }
  }, [r]), C = J((g, s) => {
    if (!s?.current || !r?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const P = s.current, k = r.current;
    try {
      let D = null;
      if (g === 0)
        D = k;
      else {
        const $ = k.querySelectorAll('page-break, [data-page-break="true"]')[g - 1];
        if ($)
          D = $;
        else {
          console.warn("[scrollToPage] Page break not found for page", g);
          return;
        }
      }
      if (D) {
        const N = D.getBoundingClientRect(), $ = P.getBoundingClientRect(), V = P.scrollTop + (N.top - $.top);
        console.log("[scrollToPage] Scrolling to page", g, "scrollTop:", V), P.scrollTo({
          top: V,
          behavior: "smooth"
        }), setTimeout(() => {
          E(g);
        }, 400);
      }
    } catch (D) {
      console.error("[scrollToPage] Error:", D);
    }
  }, [r, E]), R = J((g) => {
    if (!r?.current)
      return !1;
    const s = r.current;
    if (h().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const k = Array.from(s.querySelectorAll('page-break, [data-page-break="true"]'));
      if (g > k.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const D = window.getSelection();
      let N = !1, $ = [], V = null;
      if (g === 0) {
        const G = k[0];
        if (!G)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let q = s.firstChild;
        for (; q && q !== G; )
          $.push(q), q = q.nextSibling;
        V = G;
      } else {
        const G = k[g - 1];
        if (!G)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const q = k[g];
        let Z = G.nextSibling;
        for (; Z && Z !== q; )
          $.push(Z), Z = Z.nextSibling;
        V = G;
      }
      if (D && D.rangeCount > 0) {
        const q = D.getRangeAt(0).startContainer;
        for (const Z of $)
          if (Z.contains(q) || Z === q) {
            N = !0;
            break;
          }
      }
      V && V.parentNode && V.remove(), $.forEach((G) => {
        G.parentNode && G.remove();
      }), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((G, q) => {
        G.setAttribute("data-page-number", String(q + 2));
      }), N && setTimeout(() => {
        E(0);
      }, 50);
      const X = s.innerHTML;
      return t.updateContinuousContent(X), setTimeout(() => {
        O();
      }, 100), !0;
    } catch (k) {
      return console.error("[removePageAndContent] Failed to remove page:", k), !1;
    }
  }, [r, h, t, O, E]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: j,
    updateBoundaries: O,
    getCurrentPage: I,
    scrollToPage: C,
    positionCursorAtPage: E,
    checkAndReflow: _,
    triggerAutoReflow: U,
    removePageAndContent: R,
    boundaryTimeoutRef: i,
    reflowTimeoutRef: c
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ht = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, l, t) => t ? t.toUpperCase() : l.toLowerCase()
), ot = (e) => {
  const r = Ht(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, gt = (...e) => e.filter((r, l, t) => !!r && r.trim() !== "" && t.indexOf(r) === l).join(" ").trim(), Yt = (e) => {
  for (const r in e)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vt = {
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
const Ft = Ie(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: t,
    className: i = "",
    children: c,
    iconNode: a,
    ...d
  }, y) => Ce(
    "svg",
    {
      ref: y,
      ...Vt,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: t ? Number(l) * 24 / Number(r) : l,
      className: gt("lucide", i),
      ...!c && !Yt(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...a.map(([m, b]) => Ce(m, b)),
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
const W = (e, r) => {
  const l = Ie(
    ({ className: t, ...i }, c) => Ce(Ft, {
      ref: c,
      iconNode: r,
      className: gt(
        `lucide-${Zt(ot(e))}`,
        `lucide-${e}`,
        t
      ),
      ...i
    })
  );
  return l.displayName = ot(e), l;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Kt = W("bold", Wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xt = W("chevron-left", Jt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], en = W("chevron-right", Qt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], nn = W("file-check", tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ve = W("file-text", rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], an = W("hash", on);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], cn = W("heading-1", sn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], un = W("heading-2", ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], fn = W("heading-3", dn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], gn = W("image", pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], mn = W("italic", hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], En = W("link", yn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], bn = W("list-ordered", vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], ht = W("list", xn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], An = W("plus", Tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Pn = W("redo", _n);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Cn = W("settings", kn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], wn = W("strikethrough", Sn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], On = W("table", Rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Nn = W("text-align-center", jn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], In = W("text-align-end", Mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Ln = W("text-align-justify", Dn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Bn = W("text-align-start", zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Un = W("underline", $n);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Gn = W("undo", qn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Hn = W("x", Zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Vn = W("zoom-in", Yn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Wn = W("zoom-out", Fn), Kn = ({ editorView: e, isCollapsed: r, onToggle: l, wordCount: t, pageCount: i }) => {
  const c = ut(), { pages: a, activePage: d, continuousContent: y, editorMode: m } = c, [b, h] = Ee(0), [O, _] = Ee([]);
  ae(() => {
    if (t !== void 0 && i !== void 0) {
      if (h(t), y) {
        const E = document.createElement("div");
        E.innerHTML = y;
        const C = E.querySelectorAll("h1, h2, h3, h4, h5, h6"), R = Array.from(C).map((g, s) => {
          const P = parseInt(g.tagName.charAt(1)), k = g.textContent.trim();
          return k ? {
            id: `heading-${s}`,
            level: P,
            text: k,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        _(R);
      }
      return;
    }
    let j = 0;
    const I = [];
    a.forEach((E, C) => {
      if (E.content) {
        const R = document.createElement("div");
        R.innerHTML = E.content;
        const s = (R.textContent || R.innerText || "").trim().split(/\s+/).filter((k) => k.length > 0);
        j += s.length, R.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((k, D) => {
          const N = parseInt(k.tagName.charAt(1)), $ = k.textContent.trim();
          $ && I.push({
            id: `heading-${C}-${D}`,
            level: N,
            text: $,
            page: C + 1
          });
        });
      }
    }), h(j), _(I);
  }, [a, t, i, y]);
  const U = i !== void 0 ? i : a.length;
  return /* @__PURE__ */ o.jsxs(
    "aside",
    {
      className: `sidebar ${r ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ o.jsx(ve, { size: 18 }),
            /* @__PURE__ */ o.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: l,
              "aria-label": r ? "Expand sidebar" : "Collapse sidebar",
              title: r ? "Expand sidebar" : "Collapse sidebar",
              children: r ? /* @__PURE__ */ o.jsx(en, { size: 16 }) : /* @__PURE__ */ o.jsx(Xt, { size: 16 })
            }
          )
        ] }),
        !r && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(nn, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: U })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(an, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: b.toLocaleString() })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(ve, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: d + 1 })
            ] })
          ] }),
          O.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsxs("h3", { children: [
              /* @__PURE__ */ o.jsx(ht, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "document-outline", "data-testid": "outline", children: O.map((j) => {
              const I = j.level === 1 ? cn : j.level === 2 ? un : fn;
              return /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${j.level}`,
                  style: { marginLeft: `${(j.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ o.jsx(I, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ o.jsx("span", { className: "outline-text", children: j.text }),
                    /* @__PURE__ */ o.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      j.page
                    ] })
                  ]
                },
                j.id
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
function Jn() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const r = Math.random() * 16 | 0;
    return (e === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Xn(e) {
  return new Promise((r, l) => {
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
      const a = c.target.result;
      if (a.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        l(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = `editor-image-${Jn()}`;
        localStorage.setItem(m, a), r(m);
      } catch (m) {
        m.name === "QuotaExceededError" ? l(new Error("Storage quota exceeded")) : l(m);
      }
    }, i.onerror = () => {
      l(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function lr(e) {
  return localStorage.getItem(e);
}
function ur(e) {
  localStorage.removeItem(e);
}
function dr() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function fr() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Qn {
  constructor(r = "Editor") {
    this.namespace = r;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(r, l, t) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${r}] ${l}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(r, l) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(r, l) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(r, l) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(r, l) {
  }
}
const at = new Qn("Editor"), ze = ({
  currentFormat: e,
  onFormatText: r,
  onAddPageBreak: l
}) => {
  const t = async (i) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(i.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (i.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const a = await Xn(i), d = localStorage.getItem(a);
      d && (document.execCommand("insertImage", !1, d), at.info("Image inserted", { key: a }));
    } catch (c) {
      at.error("Error uploading image", c);
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("undo"),
        title: "Undo",
        children: /* @__PURE__ */ o.jsx(Gn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("redo"),
        title: "Redo",
        children: /* @__PURE__ */ o.jsx(Pn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ o.jsx(Kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ o.jsx(mn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ o.jsx(Un, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ o.jsx(wn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ o.jsx(Bn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ o.jsx(Nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ o.jsx(In, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ o.jsx(Ln, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        onChange: (i) => r("fontName", i.target.value),
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
        onChange: (i) => r("fontSize", i.target.value),
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
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        onChange: (i) => r("formatBlock", i.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: [
          /* @__PURE__ */ o.jsx("option", { value: "p", children: "Normal" }),
          /* @__PURE__ */ o.jsx("option", { value: "h1", children: "Heading 1" }),
          /* @__PURE__ */ o.jsx("option", { value: "h2", children: "Heading 2" }),
          /* @__PURE__ */ o.jsx("option", { value: "h3", children: "Heading 3" }),
          /* @__PURE__ */ o.jsx("option", { value: "h4", children: "Heading 4" }),
          /* @__PURE__ */ o.jsx("option", { value: "h5", children: "Heading 5" }),
          /* @__PURE__ */ o.jsx("option", { value: "h6", children: "Heading 6" })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ o.jsx(ht, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ o.jsx(bn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => {
          const i = prompt("Enter URL:");
          i && r("createLink", i);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ o.jsx(En, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ o.jsx(On, { size: 16 })
      }
    ),
    l && /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: l,
        title: "Insert Page Break",
        children: /* @__PURE__ */ o.jsx(ve, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (i) => i.target.files[0] && t(i.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ o.jsx(gn, { size: 16 })
      }
    )
  ] });
};
ze.propTypes = {
  currentFormat: T.shape({
    bold: T.bool,
    italic: T.bool,
    underline: T.bool,
    strikethrough: T.bool,
    alignLeft: T.bool,
    alignCenter: T.bool,
    alignRight: T.bool,
    alignJustify: T.bool,
    fontFamily: T.string,
    fontSize: T.string,
    headingLevel: T.string
  }).isRequired,
  onFormatText: T.func.isRequired,
  onAddPageBreak: T.func
};
ze.defaultProps = {
  onAddPageBreak: void 0
};
const Be = ({
  content: e,
  dimensions: r,
  pageSize: l,
  pageBoundaries: t = [],
  editorRef: i,
  onInput: c,
  onKeyDown: a,
  onClick: d,
  onScroll: y,
  zoomLevel: m = 100
}) => {
  const b = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, h = m / 100, O = (E, C) => {
    if (!E) return !1;
    const R = E.getBoundingClientRect(), g = C - R.top;
    return g < b.top || g > R.height - b.bottom;
  }, _ = (E) => E ? E.nodeType === Node.ELEMENT_NODE ? E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true" : E.parentElement && _(E.parentElement) : !1, U = (E) => {
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const R = C.getRangeAt(0), { startContainer: g, endContainer: s } = R;
    if ((_(g) || _(s)) && (E.key.length === 1 || E.key === "Enter" || E.key === " "))
      return E.preventDefault(), !1;
    if (E.key === "Tab")
      return E.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((E.key === "Backspace" || E.key === "Delete") && (_(g) || _(s)))
      return E.preventDefault(), !1;
    a && a(E);
  }, j = (E) => {
    if (!i.current) return;
    const C = E.target;
    if (_(C)) {
      E.preventDefault();
      return;
    }
    if (O(i.current, E.clientY)) {
      E.preventDefault();
      const R = i.current.getBoundingClientRect();
      if (E.clientY - R.top < b.top) {
        const s = i.current.firstElementChild;
        if (s && s.tagName !== "PAGE-BREAK") {
          const P = document.createRange(), k = window.getSelection();
          P.setStart(s, 0), P.collapse(!0), k.removeAllRanges(), k.addRange(P);
        }
      } else {
        const s = i.current.lastElementChild;
        if (s && s.tagName !== "PAGE-BREAK") {
          const P = document.createRange(), k = window.getSelection();
          P.selectNodeContents(s), P.collapse(!1), k.removeAllRanges(), k.addRange(P);
        }
      }
      return;
    }
    d && d(E);
  }, I = (E) => {
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const R = C.getRangeAt(0), { startContainer: g } = R;
    if (_(g))
      return E.preventDefault(), !1;
  };
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${r.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${h})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: i,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${r.height}px`,
            width: `${r.width}px`,
            backgroundColor: "white",
            padding: `${b.top}px ${b.right}px ${b.bottom}px ${b.left}px`,
            boxSizing: "border-box",
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
          onKeyDown: U,
          onBeforeInput: I,
          onClick: j,
          onScroll: y,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Be.propTypes = {
  content: T.string.isRequired,
  dimensions: T.shape({
    width: T.number.isRequired,
    height: T.number.isRequired
  }).isRequired,
  pageSize: T.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      pageNumber: T.number.isRequired,
      top: T.number,
      height: T.number
    })
  ),
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: T.func.isRequired,
  onKeyDown: T.func,
  onClick: T.func,
  onScroll: T.func,
  zoomLevel: T.number
};
Be.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100
};
const $e = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: r = 0,
  pageSize: l = "A4",
  zoomLevel: t = 100,
  canZoomIn: i = !0,
  canZoomOut: c = !0,
  onNavigate: a,
  onAddPage: d,
  onDeletePage: y,
  onPageSizeChange: m,
  onZoomIn: b,
  onZoomOut: h,
  onZoomReset: O
} = {}) => {
  const _ = Math.max(e?.length || 0, 1), U = (C) => {
    a && a(C);
  }, j = () => {
    d && d();
  }, I = (C) => {
    if (_ <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    y && y(C);
  }, E = (C) => {
    m && m(C);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ o.jsx(Cn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: l,
          onChange: (C) => E(C.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ o.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ o.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "zoom-controls", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button",
          onClick: h,
          disabled: !c,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ o.jsx(Wn, { size: 14 })
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: "zoom-reset-button",
          onClick: O,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: [
            t,
            "%"
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button",
          onClick: b,
          disabled: !i,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ o.jsx(Vn, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((C, R) => /* @__PURE__ */ o.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${R === r ? "active" : ""}`,
          onClick: () => U(R),
          "aria-label": `Go to page ${R + 1}`,
          "aria-current": R === r ? "page" : void 0,
          children: [
            /* @__PURE__ */ o.jsx(ve, { size: 14 }),
            /* @__PURE__ */ o.jsxs("span", { children: [
              "Page ",
              R + 1
            ] })
          ]
        }
      ),
      _ > 1 && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (g) => {
            g.stopPropagation(), I(R);
          },
          "aria-label": `Delete page ${R + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ o.jsx(Hn, { size: 14 })
        }
      )
    ] }, C.id || `page-${R}`)) }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: j,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ o.jsx(An, { size: 16 }),
          /* @__PURE__ */ o.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
$e.propTypes = {
  pageBoundaries: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      pageNumber: T.number.isRequired,
      top: T.number,
      height: T.number
    })
  ),
  activePage: T.number,
  pageSize: T.oneOf(["A4", "Letter", "Legal"]),
  zoomLevel: T.number,
  canZoomIn: T.bool,
  canZoomOut: T.bool,
  onNavigate: T.func,
  onAddPage: T.func,
  onDeletePage: T.func,
  onPageSizeChange: T.func,
  onZoomIn: T.func,
  onZoomOut: T.func,
  onZoomReset: T.func
};
$e.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  zoomLevel: 100,
  canZoomIn: !0,
  canZoomOut: !0,
  onNavigate: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onZoomIn: void 0,
  onZoomOut: void 0,
  onZoomReset: void 0
};
const er = be.memo($e), it = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
}, tr = 50, nr = 50, rr = 50, or = 100, ar = 500, Ue = Ie(({
  pageManagerComponent: e = null,
  onNavigatePage: r,
  onAddPage: l,
  onDeletePage: t,
  onPageSizeChange: i,
  onChange: c,
  showSidebar: a = !0,
  showToolbar: d = !0,
  showPageManager: y = !0
}, m) => {
  const b = ut(), h = dt(), { pageSize: O, continuousContent: _, pageBoundaries: U, activePage: j, zoomLevel: I } = b, E = re(null), C = re(null), { currentFormat: R, formatText: g } = zt(), {
    checkAndUpdateBoundaries: s,
    getCurrentPage: P,
    scrollToPage: k,
    positionCursorAtPage: D,
    updateBoundaries: N,
    triggerAutoReflow: $,
    removePageAndContent: V
  } = Gt(O, C, I), te = ye(() => it[O] || it.A4, [O]), [X, G] = Ee(!1), q = re(null), Z = re(!1), Q = re(!1), ne = re(!1), F = re(_);
  ae(() => {
    if (C.current) {
      if (!ne.current) {
        C.current.innerHTML = _, ne.current = !0, F.current = _;
        const u = setTimeout(() => {
          N();
        }, tr);
        return () => clearTimeout(u);
      }
      if (F.current !== _) {
        if (C.current.innerHTML !== _) {
          C.current.innerHTML = _;
          const K = setTimeout(() => {
            if (N(), Z.current) {
              Z.current = !1;
              const oe = Math.max(0, U.length - 1);
              h.setActivePage(oe), setTimeout(() => {
                k(oe, E);
              }, rr);
            }
          }, nr);
          return F.current = _, () => clearTimeout(K);
        }
        F.current = _;
      }
    }
  }, [_, N, U.length, h, k]), ae(() => {
    c && ne.current && c(_);
  }, [_, c]), xt(m, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => _,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => _.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (u) => {
      h.updateContinuousContent(u), C.current && (C.current.innerHTML = u, setTimeout(() => {
        N();
      }, 50));
    }
  }), [_, h, N]), ae(() => {
    const u = setTimeout(() => {
      C.current && C.current.focus();
    }, 200);
    return () => clearTimeout(u);
  }, []);
  const f = J((u) => {
    const K = u.currentTarget.innerHTML;
    h.updateContinuousContent(K), s(), $(200);
    const oe = P(E);
    oe !== j && h.setActivePage(oe);
  }, [s, h, P, j, $, E]), n = J((u) => {
    h.updatePageSize(u), N({ pageSize: u }), i && i(u);
  }, [h, N, i]), p = J((u) => {
    u < 0 || u >= U.length || (Q.current = !0, h.setActivePage(u), k(u, E), setTimeout(() => {
      Q.current = !1;
    }, ar), r && r(u));
  }, [h, k, r, U.length]), A = J(() => {
    Z.current = !0, h.addPageBreak({ position: "end" }), l && l();
  }, [h, l]), x = J(() => {
    const u = window.getSelection();
    if (u && u.rangeCount > 0) {
      if (!C?.current) return;
      const de = `<page-break data-page-break="true" contenteditable="false" data-page-number="${C.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, de), setTimeout(() => {
        N();
        const yt = P(E);
        h.setActivePage(yt);
      }, 150);
    }
  }, [N, P, h, E]), M = J((u) => {
    if (U.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    V(u) && (h.setActivePage(0), t && t(u));
  }, [U.length, V, h, t]), S = J(() => {
    h.zoomIn();
  }, [h]), v = J(() => {
    h.zoomOut();
  }, [h]), w = J(() => {
    h.resetZoom();
  }, [h]);
  ae(() => {
    const u = (K) => {
      if (!(!C.current && !E.current) && (K.ctrlKey || K.metaKey))
        switch (K.key) {
          case "+":
          case "=":
            K.preventDefault(), S();
            break;
          case "-":
          case "_":
            K.preventDefault(), v();
            break;
          case "0":
            K.preventDefault(), w();
            break;
        }
    };
    return window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    };
  }, [S, v, w]);
  const L = J(() => {
    !E.current || !C.current || Q.current || (q.current && clearTimeout(q.current), q.current = setTimeout(() => {
      if (Q.current) {
        q.current = null;
        return;
      }
      const u = P(E);
      u !== j && u >= 0 && h.setActivePage(u), q.current = null;
    }, or));
  }, [P, j, h]), B = ye(() => {
    if (!_) return 0;
    const K = _.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return K ? K.length : 0;
  }, [_]), ee = U.length || 1;
  return ae(() => () => {
    q.current && clearTimeout(q.current);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ o.jsx(
      ze,
      {
        currentFormat: R,
        onFormatText: g,
        onAddPageBreak: x
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "editor-container", children: [
      a && /* @__PURE__ */ o.jsx(
        Kn,
        {
          editorView: null,
          isCollapsed: X,
          onToggle: () => G((u) => !u),
          wordCount: B,
          pageCount: ee
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: E,
          onScroll: L,
          children: /* @__PURE__ */ o.jsx(
            Be,
            {
              content: _,
              dimensions: te,
              pageSize: O,
              pageBoundaries: U,
              editorRef: C,
              onInput: f,
              onClick: () => C.current?.focus(),
              zoomLevel: I
            }
          )
        }
      ),
      y && /* @__PURE__ */ o.jsx("div", { className: "page-manager-sidebar", children: e ? be.cloneElement(e, {
        onNavigate: p,
        onAddPage: A,
        onDeletePage: M,
        onPageSizeChange: n,
        zoomLevel: I,
        canZoomIn: Oe(I),
        canZoomOut: je(I),
        onZoomIn: S,
        onZoomOut: v,
        onZoomReset: w
      }) : /* @__PURE__ */ o.jsx(
        er,
        {
          pageBoundaries: U,
          activePage: j,
          pageSize: O,
          zoomLevel: I,
          canZoomIn: Oe(I),
          canZoomOut: je(I),
          onNavigate: p,
          onAddPage: A,
          onDeletePage: M,
          onPageSizeChange: n,
          onZoomIn: S,
          onZoomOut: v,
          onZoomReset: w
        }
      ) })
    ] })
  ] });
});
Ue.displayName = "HtmlEditor";
Ue.propTypes = {
  pageManagerComponent: T.element,
  onNavigatePage: T.func,
  onAddPage: T.func,
  onDeletePage: T.func,
  onPageSizeChange: T.func,
  onChange: T.func,
  showSidebar: T.bool,
  showToolbar: T.bool,
  showPageManager: T.bool
};
Ue.defaultProps = {
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
class mt extends be.Component {
  constructor(r) {
    super(r), this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0 };
  }
  componentDidCatch(r, l) {
    console.error("[ErrorBoundary] Caught error:", r), console.error("[ErrorBoundary] Error info:", l), this.setState({
      error: r,
      errorInfo: l
    }), this.props.onError && this.props.onError(r, l);
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
mt.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
mt.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const pr = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  cr as DocumentProvider,
  ze as EditorToolbar,
  mt as ErrorBoundary,
  Ue as HtmlEditor,
  pr as PAGE_DIMENSIONS,
  er as PageManager,
  Be as PageView,
  Kn as Sidebar,
  dr as clearImages,
  ur as deleteImage,
  fr as getAllImageKeys,
  lr as getImage,
  Qn as logger,
  Xn as saveImage,
  Gt as useContinuousReflow,
  lt as useDocument,
  dt as useDocumentActions,
  ut as useDocumentState,
  zt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
