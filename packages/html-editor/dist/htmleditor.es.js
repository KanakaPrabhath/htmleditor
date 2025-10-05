import be, { createContext as vt, useContext as Et, useReducer as bt, useMemo as ye, useState as ve, useCallback as K, useRef as ne, useEffect as ae, forwardRef as Ie, createElement as Ce, useImperativeHandle as xt } from "react";
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
function _t() {
  if (qe) return se;
  qe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function l(t, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var d in i)
        d !== "key" && (s[d] = i[d]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: t,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return se.Fragment = n, se.jsx = l, se.jsxs = l, se;
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
var Ze;
function At() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === F ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case I:
          return "Fragment";
        case w:
          return "Profiler";
        case M:
          return "StrictMode";
        case S:
          return "Suspense";
        case A:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case k:
            return "Portal";
          case m:
            return r.displayName || "Context";
          case C:
            return (r._context.displayName || "Context") + ".Consumer";
          case c:
            var g = r.render;
            return r = r.displayName, r || (r = g.displayName || g.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case z:
            return g = r.displayName || null, g !== null ? g : e(r.type) || "Memo";
          case j:
            g = r._payload, r = r._init;
            try {
              return e(r(g));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function l(r) {
      try {
        n(r);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var b = g.error, x = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return b.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), n(r);
      }
    }
    function t(r) {
      if (r === I) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === j)
        return "<...>";
      try {
        var g = e(r);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = te.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(r) {
      if (J.call(r, "key")) {
        var g = Object.getOwnPropertyDescriptor(r, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function d(r, g) {
      function b() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: b,
        configurable: !0
      });
    }
    function y() {
      var r = e(this.type);
      return X[r] || (X[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function h(r, g, b, x, D, O) {
      var T = b.ref;
      return r = {
        $$typeof: $,
        type: r,
        key: g,
        props: b,
        _owner: x
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function E(r, g, b, x, D, O) {
      var T = g.children;
      if (T !== void 0)
        if (x)
          if (G(T)) {
            for (x = 0; x < T.length; x++)
              p(T[x]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(T);
      if (J.call(g, "key")) {
        T = e(r);
        var R = Object.keys(g).filter(function(U) {
          return U !== "key";
        });
        x = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", f[T + x] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          T,
          R,
          T
        ), f[T + x] = !0);
      }
      if (T = null, b !== void 0 && (l(b), T = "" + b), a(g) && (l(g.key), T = "" + g.key), "key" in g) {
        b = {};
        for (var q in g)
          q !== "key" && (b[q] = g[q]);
      } else b = g;
      return T && d(
        b,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), h(
        r,
        T,
        b,
        i(),
        D,
        O
      );
    }
    function p(r) {
      P(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === j && (r._payload.status === "fulfilled" ? P(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function P(r) {
      return typeof r == "object" && r !== null && r.$$typeof === $;
    }
    var _ = be, $ = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), m = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), te = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, G = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var N, X = {}, ee = _.react_stack_bottom_frame.bind(
      _,
      s
    )(), re = Z(t(s)), f = {};
    ce.Fragment = I, ce.jsx = function(r, g, b) {
      var x = 1e4 > te.recentlyCreatedOwnerStacks++;
      return E(
        r,
        g,
        b,
        !1,
        x ? Error("react-stack-top-frame") : ee,
        x ? Z(t(r)) : re
      );
    }, ce.jsxs = function(r, g, b) {
      var x = 1e4 > te.recentlyCreatedOwnerStacks++;
      return E(
        r,
        g,
        b,
        !0,
        x ? Error("react-stack-top-frame") : ee,
        x ? Z(t(r)) : re
      );
    };
  })()), ce;
}
var Ge;
function Pt() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? fe.exports = _t() : fe.exports = At()), fe.exports;
}
var o = Pt();
const Se = 100, Oe = 50, we = 200, He = 25, Re = (e) => e < we, je = (e) => e > Oe, ue = "A4", ie = "<p><br></p>", kt = "continuous", Ne = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, le = (e, n = ue) => ({
  id: De(),
  index: e,
  size: n,
  content: ie,
  images: [],
  isBreakPoint: !1
}), me = (e) => typeof e != "string" || e.trim() === "" ? ie : e, st = (e, n = ue) => (e.length > 0 ? e : [le(0, n)]).map((t, i) => ({
  id: t.id || De(),
  index: i,
  size: t.size || n,
  content: me(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), Ct = (e = ue) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (Ne[e] || Ne.A4).height
}], Me = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), l = e.pageSize || ue, t = st(e.pages || [le(0, l)], l);
  return {
    id: De(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
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
}, L = {
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
}, St = (e, n) => {
  const l = (/* @__PURE__ */ new Date()).toISOString();
  switch (n.type) {
    case L.INITIALIZE_DOCUMENT: {
      const { initialContent: t = ie, pageSize: i = ue } = n.payload || {}, s = { ...le(0, i), content: me(t) };
      return Me({
        title: e.title,
        pageSize: i,
        pages: [s]
      });
    }
    case L.UPDATE_TITLE:
      return {
        ...e,
        title: n.payload,
        updatedAt: l
      };
    case L.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: i } = n.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[t] = {
        ...s[t],
        content: me(i)
      }, {
        ...e,
        pages: s,
        updatedAt: l
      };
    }
    case L.UPDATE_PAGES: {
      const t = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, i = st(t.pages || [], e.pageSize), s = Array.isArray(t.pageBreaks) ? t.pageBreaks : i.slice(0, -1).map((a, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: s,
        totalPages: i.length,
        updatedAt: l
      };
    }
    case L.ADD_PAGE: {
      const t = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(t, 0, le(t, e.pageSize));
      const s = i.map((d, y) => ({
        ...d,
        index: y,
        size: e.pageSize
      })), a = s.slice(0, -1).map((d, y) => ({
        id: `auto-break-${y}`,
        pageNumber: y + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: t,
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: l
      };
    }
    case L.DELETE_PAGE: {
      const t = n.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(t, 1);
      const s = i.map((y, h) => ({
        ...y,
        index: h,
        size: e.pageSize
      }));
      let a = e.activePage;
      a >= s.length ? a = s.length - 1 : t <= a && a > 0 && (a -= 1);
      const d = s.slice(0, -1).map((y, h) => ({
        id: `auto-break-${h}`,
        pageNumber: h + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: a,
        pageBreaks: d,
        totalPages: s.length,
        updatedAt: l
      };
    }
    case L.SET_ACTIVE_PAGE: {
      const t = n.payload;
      if (t === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t < 0 || t >= i ? e : {
        ...e,
        activePage: t,
        updatedAt: l
      };
    }
    case L.UPDATE_PAGE_SIZE: {
      const t = n.payload;
      if (t === e.pageSize)
        return e;
      if (!Ne[t])
        return console.warn(`Invalid page size: ${t}`), e;
      const i = e.pages.map((a, d) => ({
        ...a,
        index: d,
        size: t
      })), s = i.slice(0, -1).map((a, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
      }));
      return {
        ...e,
        pageSize: t,
        pages: i,
        pageBreaks: s,
        updatedAt: l
      };
    }
    case L.RESET_DOCUMENT:
      return Me();
    case L.UPDATE_CONTINUOUS_CONTENT: {
      const t = me(n.payload);
      return t === e.continuousContent ? e : {
        ...e,
        continuousContent: t,
        updatedAt: l
      };
    }
    case L.UPDATE_PAGE_BOUNDARIES: {
      const t = Array.isArray(n.payload) ? n.payload : [];
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
    case L.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: i } = n.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let a = e.continuousContent;
      if (t === "end")
        a = a + s + "<p><br></p>";
      else if (typeof t == "number") {
        const d = a.substring(0, t), y = a.substring(t);
        a = d + s + y;
      } else if (typeof i == "number" && typeof document < "u") {
        const d = document.createElement("div");
        d.innerHTML = a;
        const y = d.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && y.length === 0)
          a = a + s + "<p><br></p>";
        else if (i < y.length) {
          const h = y[i], E = document.createElement("page-break");
          E.setAttribute("data-page-break", "true"), E.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const p = document.createElement("p");
          p.innerHTML = "<br>", h.parentNode.insertBefore(E, h.nextSibling), E.parentNode.insertBefore(p, E.nextSibling), a = d.innerHTML;
        } else
          a = a + s + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: a,
        updatedAt: l
      };
    }
    case L.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = n.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const s = i.querySelectorAll('page-break, [data-page-break="true"]');
      return s[t] && s[t].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((d, y) => {
        d.setAttribute("data-page-number", String(y + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: l
      };
    }
    case L.SET_EDITOR_MODE: {
      const t = n.payload;
      if (t === e.editorMode)
        return e;
      let i = e.continuousContent, s = e.pages;
      return t === "continuous" ? i = e.pages.map((d) => d.content).filter((d) => d && d !== ie).join(`
`) || ie : e.continuousContent && e.continuousContent !== ie && (s = [{ ...le(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: t,
        continuousContent: i,
        pages: s,
        updatedAt: l
      };
    }
    case L.SET_ZOOM_LEVEL: {
      const t = n.payload;
      return t < Oe || t > we ? (console.warn(`Invalid zoom level: ${t}. Must be between ${Oe} and ${we}.`), e) : t === e.zoomLevel ? e : {
        ...e,
        zoomLevel: t,
        updatedAt: l
      };
    }
    case L.ZOOM_IN: {
      if (!Re(e.zoomLevel))
        return e;
      const t = e.zoomLevel + He;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: l
      };
    }
    case L.ZOOM_OUT: {
      if (!je(e.zoomLevel))
        return e;
      const t = e.zoomLevel - He;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: l
      };
    }
    case L.RESET_ZOOM:
      return e.zoomLevel === Se ? e : {
        ...e,
        zoomLevel: Se,
        updatedAt: l
      };
    default:
      return e;
  }
}, ct = vt(null), cn = ({ children: e, initialState: n = {} }) => {
  const [l, t] = bt(St, Me(n)), i = ye(() => ({
    initializeDocument: (a) => t({ type: L.INITIALIZE_DOCUMENT, payload: a }),
    updateTitle: (a) => t({ type: L.UPDATE_TITLE, payload: a }),
    updatePageContent: (a) => t({ type: L.UPDATE_PAGE_CONTENT, payload: a }),
    updatePages: (a) => t({ type: L.UPDATE_PAGES, payload: a }),
    addPage: (a) => t({ type: L.ADD_PAGE, payload: a }),
    deletePage: (a) => t({ type: L.DELETE_PAGE, payload: a }),
    setActivePage: (a) => t({ type: L.SET_ACTIVE_PAGE, payload: a }),
    updatePageSize: (a) => t({ type: L.UPDATE_PAGE_SIZE, payload: a }),
    resetDocument: () => t({ type: L.RESET_DOCUMENT }),
    updateContinuousContent: (a) => t({ type: L.UPDATE_CONTINUOUS_CONTENT, payload: a }),
    updatePageBoundaries: (a) => t({ type: L.UPDATE_PAGE_BOUNDARIES, payload: a }),
    addPageBreak: (a) => t({ type: L.ADD_PAGE_BREAK, payload: a }),
    removePageBreak: (a) => t({ type: L.REMOVE_PAGE_BREAK, payload: a }),
    setEditorMode: (a) => t({ type: L.SET_EDITOR_MODE, payload: a }),
    insertPageAt: (a) => t({ type: L.INSERT_PAGE_AT, payload: a }),
    movePageTo: (a) => t({ type: L.MOVE_PAGE_TO, payload: a }),
    duplicatePage: (a) => t({ type: L.DUPLICATE_PAGE, payload: a }),
    setZoomLevel: (a) => t({ type: L.SET_ZOOM_LEVEL, payload: a }),
    zoomIn: () => t({ type: L.ZOOM_IN }),
    zoomOut: () => t({ type: L.ZOOM_OUT }),
    resetZoom: () => t({ type: L.RESET_ZOOM })
  }), []), s = ye(() => ({
    state: l,
    actions: i,
    dispatch: t
  }), [l, i]);
  return /* @__PURE__ */ o.jsx(ct.Provider, { value: s, children: e });
}, lt = () => {
  const e = Et(ct);
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
function Ot() {
  if (Ye) return H;
  Ye = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, l = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function C(c) {
    if (typeof c == "object" && c !== null) {
      var S = c.$$typeof;
      switch (S) {
        case n:
          switch (c = c.type, c) {
            case y:
            case h:
            case t:
            case s:
            case i:
            case p:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case d:
                case E:
                case $:
                case _:
                case a:
                  return c;
                default:
                  return S;
              }
          }
        case l:
          return S;
      }
    }
  }
  function m(c) {
    return C(c) === h;
  }
  return H.AsyncMode = y, H.ConcurrentMode = h, H.ContextConsumer = d, H.ContextProvider = a, H.Element = n, H.ForwardRef = E, H.Fragment = t, H.Lazy = $, H.Memo = _, H.Portal = l, H.Profiler = s, H.StrictMode = i, H.Suspense = p, H.isAsyncMode = function(c) {
    return m(c) || C(c) === y;
  }, H.isConcurrentMode = m, H.isContextConsumer = function(c) {
    return C(c) === d;
  }, H.isContextProvider = function(c) {
    return C(c) === a;
  }, H.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === n;
  }, H.isForwardRef = function(c) {
    return C(c) === E;
  }, H.isFragment = function(c) {
    return C(c) === t;
  }, H.isLazy = function(c) {
    return C(c) === $;
  }, H.isMemo = function(c) {
    return C(c) === _;
  }, H.isPortal = function(c) {
    return C(c) === l;
  }, H.isProfiler = function(c) {
    return C(c) === s;
  }, H.isStrictMode = function(c) {
    return C(c) === i;
  }, H.isSuspense = function(c) {
    return C(c) === p;
  }, H.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === t || c === h || c === s || c === i || c === p || c === P || typeof c == "object" && c !== null && (c.$$typeof === $ || c.$$typeof === _ || c.$$typeof === a || c.$$typeof === d || c.$$typeof === E || c.$$typeof === I || c.$$typeof === M || c.$$typeof === w || c.$$typeof === k);
  }, H.typeOf = C, H;
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
function wt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, l = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function C(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === t || u === h || u === s || u === i || u === p || u === P || typeof u == "object" && u !== null && (u.$$typeof === $ || u.$$typeof === _ || u.$$typeof === a || u.$$typeof === d || u.$$typeof === E || u.$$typeof === I || u.$$typeof === M || u.$$typeof === w || u.$$typeof === k);
    }
    function m(u) {
      if (typeof u == "object" && u !== null) {
        var W = u.$$typeof;
        switch (W) {
          case n:
            var oe = u.type;
            switch (oe) {
              case y:
              case h:
              case t:
              case s:
              case i:
              case p:
                return oe;
              default:
                var de = oe && oe.$$typeof;
                switch (de) {
                  case d:
                  case E:
                  case $:
                  case _:
                  case a:
                    return de;
                  default:
                    return W;
                }
            }
          case l:
            return W;
        }
      }
    }
    var c = y, S = h, A = d, z = a, j = n, B = E, F = t, te = $, J = _, G = l, Z = s, N = i, X = p, ee = !1;
    function re(u) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(u) || m(u) === y;
    }
    function f(u) {
      return m(u) === h;
    }
    function r(u) {
      return m(u) === d;
    }
    function g(u) {
      return m(u) === a;
    }
    function b(u) {
      return typeof u == "object" && u !== null && u.$$typeof === n;
    }
    function x(u) {
      return m(u) === E;
    }
    function D(u) {
      return m(u) === t;
    }
    function O(u) {
      return m(u) === $;
    }
    function T(u) {
      return m(u) === _;
    }
    function R(u) {
      return m(u) === l;
    }
    function q(u) {
      return m(u) === s;
    }
    function U(u) {
      return m(u) === i;
    }
    function Q(u) {
      return m(u) === p;
    }
    Y.AsyncMode = c, Y.ConcurrentMode = S, Y.ContextConsumer = A, Y.ContextProvider = z, Y.Element = j, Y.ForwardRef = B, Y.Fragment = F, Y.Lazy = te, Y.Memo = J, Y.Portal = G, Y.Profiler = Z, Y.StrictMode = N, Y.Suspense = X, Y.isAsyncMode = re, Y.isConcurrentMode = f, Y.isContextConsumer = r, Y.isContextProvider = g, Y.isElement = b, Y.isForwardRef = x, Y.isFragment = D, Y.isLazy = O, Y.isMemo = T, Y.isPortal = R, Y.isProfiler = q, Y.isStrictMode = U, Y.isSuspense = Q, Y.isValidElementType = C, Y.typeOf = m;
  })()), Y;
}
var Fe;
function ft() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? ge.exports = Ot() : ge.exports = wt()), ge.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, We;
function Rt() {
  if (We) return xe;
  We = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
  function t(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, d = 0; d < 10; d++)
        a["_" + String.fromCharCode(d)] = d;
      var y = Object.getOwnPropertyNames(a).map(function(E) {
        return a[E];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        h[E] = E;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = i() ? Object.assign : function(s, a) {
    for (var d, y = t(s), h, E = 1; E < arguments.length; E++) {
      d = Object(arguments[E]);
      for (var p in d)
        n.call(d, p) && (y[p] = d[p]);
      if (e) {
        h = e(d);
        for (var P = 0; P < h.length; P++)
          l.call(d, h[P]) && (y[h[P]] = d[h[P]]);
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
var _e, Je;
function pt() {
  return Je || (Je = 1, _e = Function.call.bind(Object.prototype.hasOwnProperty)), _e;
}
var Ae, Xe;
function jt() {
  if (Xe) return Ae;
  Xe = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Le(), l = {}, t = /* @__PURE__ */ pt();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, d, y, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in s)
        if (t(s, E)) {
          var p;
          try {
            if (typeof s[E] != "function") {
              var P = Error(
                (y || "React class") + ": " + d + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            p = s[E](a, E, y, d, null, n);
          } catch ($) {
            p = $;
          }
          if (p && !(p instanceof Error) && e(
            (y || "React class") + ": type specification of " + d + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in l)) {
            l[p.message] = !0;
            var _ = h ? h() : "";
            e(
              "Failed " + d + " type: " + p.message + (_ ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (l = {});
  }, Ae = i, Ae;
}
var Pe, Qe;
function Nt() {
  if (Qe) return Pe;
  Qe = 1;
  var e = ft(), n = Rt(), l = /* @__PURE__ */ Le(), t = /* @__PURE__ */ pt(), i = /* @__PURE__ */ jt(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
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
    var h = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function p(f) {
      var r = f && (h && f[h] || f[E]);
      if (typeof r == "function")
        return r;
    }
    var P = "<<anonymous>>", _ = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: w(),
      arrayOf: C,
      element: m(),
      elementType: c(),
      instanceOf: S,
      node: B(),
      objectOf: z,
      oneOf: A,
      oneOfType: j,
      shape: te,
      exact: J
    };
    function $(f, r) {
      return f === r ? f !== 0 || 1 / f === 1 / r : f !== f && r !== r;
    }
    function k(f, r) {
      this.message = f, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function I(f) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, g = 0;
      function b(D, O, T, R, q, U, Q) {
        if (R = R || P, U = U || T, Q !== l) {
          if (y) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var W = R + ":" + T;
            !r[W] && // Avoid spamming the console because they are often not actionable except for lib authors
            g < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[W] = !0, g++);
          }
        }
        return O[T] == null ? D ? O[T] === null ? new k("The " + q + " `" + U + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new k("The " + q + " `" + U + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : f(O, T, R, q, U);
      }
      var x = b.bind(null, !1);
      return x.isRequired = b.bind(null, !0), x;
    }
    function M(f) {
      function r(g, b, x, D, O, T) {
        var R = g[b], q = N(R);
        if (q !== f) {
          var U = X(R);
          return new k(
            "Invalid " + D + " `" + O + "` of type " + ("`" + U + "` supplied to `" + x + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return I(r);
    }
    function w() {
      return I(a);
    }
    function C(f) {
      function r(g, b, x, D, O) {
        if (typeof f != "function")
          return new k("Property `" + O + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var T = g[b];
        if (!Array.isArray(T)) {
          var R = N(T);
          return new k("Invalid " + D + " `" + O + "` of type " + ("`" + R + "` supplied to `" + x + "`, expected an array."));
        }
        for (var q = 0; q < T.length; q++) {
          var U = f(T, q, x, D, O + "[" + q + "]", l);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return I(r);
    }
    function m() {
      function f(r, g, b, x, D) {
        var O = r[g];
        if (!d(O)) {
          var T = N(O);
          return new k("Invalid " + x + " `" + D + "` of type " + ("`" + T + "` supplied to `" + b + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(f);
    }
    function c() {
      function f(r, g, b, x, D) {
        var O = r[g];
        if (!e.isValidElementType(O)) {
          var T = N(O);
          return new k("Invalid " + x + " `" + D + "` of type " + ("`" + T + "` supplied to `" + b + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(f);
    }
    function S(f) {
      function r(g, b, x, D, O) {
        if (!(g[b] instanceof f)) {
          var T = f.name || P, R = re(g[b]);
          return new k("Invalid " + D + " `" + O + "` of type " + ("`" + R + "` supplied to `" + x + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return I(r);
    }
    function A(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function r(g, b, x, D, O) {
        for (var T = g[b], R = 0; R < f.length; R++)
          if ($(T, f[R]))
            return null;
        var q = JSON.stringify(f, function(Q, u) {
          var W = X(u);
          return W === "symbol" ? String(u) : u;
        });
        return new k("Invalid " + D + " `" + O + "` of value `" + String(T) + "` " + ("supplied to `" + x + "`, expected one of " + q + "."));
      }
      return I(r);
    }
    function z(f) {
      function r(g, b, x, D, O) {
        if (typeof f != "function")
          return new k("Property `" + O + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var T = g[b], R = N(T);
        if (R !== "object")
          return new k("Invalid " + D + " `" + O + "` of type " + ("`" + R + "` supplied to `" + x + "`, expected an object."));
        for (var q in T)
          if (t(T, q)) {
            var U = f(T, q, x, D, O + "." + q, l);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return I(r);
    }
    function j(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var r = 0; r < f.length; r++) {
        var g = f[r];
        if (typeof g != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(g) + " at index " + r + "."
          ), a;
      }
      function b(x, D, O, T, R) {
        for (var q = [], U = 0; U < f.length; U++) {
          var Q = f[U], u = Q(x, D, O, T, R, l);
          if (u == null)
            return null;
          u.data && t(u.data, "expectedType") && q.push(u.data.expectedType);
        }
        var W = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new k("Invalid " + T + " `" + R + "` supplied to " + ("`" + O + "`" + W + "."));
      }
      return I(b);
    }
    function B() {
      function f(r, g, b, x, D) {
        return G(r[g]) ? null : new k("Invalid " + x + " `" + D + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
      }
      return I(f);
    }
    function F(f, r, g, b, x) {
      return new k(
        (f || "React class") + ": " + r + " type `" + g + "." + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function te(f) {
      function r(g, b, x, D, O) {
        var T = g[b], R = N(T);
        if (R !== "object")
          return new k("Invalid " + D + " `" + O + "` of type `" + R + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var q in f) {
          var U = f[q];
          if (typeof U != "function")
            return F(x, D, O, q, X(U));
          var Q = U(T, q, x, D, O + "." + q, l);
          if (Q)
            return Q;
        }
        return null;
      }
      return I(r);
    }
    function J(f) {
      function r(g, b, x, D, O) {
        var T = g[b], R = N(T);
        if (R !== "object")
          return new k("Invalid " + D + " `" + O + "` of type `" + R + "` " + ("supplied to `" + x + "`, expected `object`."));
        var q = n({}, g[b], f);
        for (var U in q) {
          var Q = f[U];
          if (t(f, U) && typeof Q != "function")
            return F(x, D, O, U, X(Q));
          if (!Q)
            return new k(
              "Invalid " + D + " `" + O + "` key `" + U + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(g[b], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var u = Q(T, U, x, D, O + "." + U, l);
          if (u)
            return u;
        }
        return null;
      }
      return I(r);
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
          var r = p(f);
          if (r) {
            var g = r.call(f), b;
            if (r !== f.entries) {
              for (; !(b = g.next()).done; )
                if (!G(b.value))
                  return !1;
            } else
              for (; !(b = g.next()).done; ) {
                var x = b.value;
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
    function Z(f, r) {
      return f === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function N(f) {
      var r = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : Z(r, f) ? "symbol" : r;
    }
    function X(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var r = N(f);
      if (r === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function ee(f) {
      var r = X(f);
      switch (r) {
        case "array":
        case "object":
          return "an " + r;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + r;
        default:
          return r;
      }
    }
    function re(f) {
      return !f.constructor || !f.constructor.name ? P : f.constructor.name;
    }
    return _.checkPropTypes = i, _.resetWarningCache = i.resetWarningCache, _.PropTypes = _, _;
  }, Pe;
}
var ke, et;
function Mt() {
  if (et) return ke;
  et = 1;
  var e = /* @__PURE__ */ Le();
  function n() {
  }
  function l() {
  }
  return l.resetWarningCache = n, ke = function() {
    function t(a, d, y, h, E, p) {
      if (p !== e) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    t.isRequired = t;
    function i() {
      return t;
    }
    var s = {
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
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, ke;
}
var tt;
function It() {
  if (tt) return pe.exports;
  if (tt = 1, process.env.NODE_ENV !== "production") {
    var e = ft(), n = !0;
    pe.exports = /* @__PURE__ */ Nt()(e.isElement, n);
  } else
    pe.exports = /* @__PURE__ */ Mt()();
  return pe.exports;
}
var Dt = /* @__PURE__ */ It();
const v = /* @__PURE__ */ Tt(Dt), Lt = {
  "10px": "1",
  "12px": "2",
  "14px": "3",
  "16px": "4",
  "18px": "5",
  "24px": "6",
  "32px": "7"
}, rt = {
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
  const [e, n] = ve(rt), l = K((a) => {
    n((d) => ({
      ...d,
      alignLeft: a === "left",
      alignCenter: a === "center",
      alignRight: a === "right",
      alignJustify: a === "justify"
    }));
  }, []), t = K((a) => {
    try {
      const d = window.getSelection();
      if (!d || d.rangeCount === 0)
        return !1;
      const y = d.getRangeAt(0);
      if (!y.toString())
        return n((E) => ({ ...E, fontSize: a })), !1;
      try {
        const E = document.createElement("span");
        E.style.fontSize = a;
        const p = y.extractContents();
        return E.appendChild(p), y.insertNode(E), y.selectNodeContents(E), d.removeAllRanges(), d.addRange(y), n((P) => ({ ...P, fontSize: a })), !0;
      } catch {
        const p = Lt[a] || "2";
        return document.execCommand("fontSize", !1, p), n((P) => ({ ...P, fontSize: a })), !0;
      }
    } catch (d) {
      return console.warn("[useFormatting] Font size change failed:", d), !1;
    }
  }, []), i = K((a, d = null) => {
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
          n((h) => ({ ...h, bold: !h.bold }));
          break;
        case "italic":
          n((h) => ({ ...h, italic: !h.italic }));
          break;
        case "underline":
          n((h) => ({ ...h, underline: !h.underline }));
          break;
        case "strikethrough":
          n((h) => ({ ...h, strikethrough: !h.strikethrough }));
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
          n((h) => ({ ...h, fontFamily: d }));
          break;
        case "formatBlock":
          n((h) => ({ ...h, headingLevel: d }));
          break;
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${a}":`, y);
    }
  }, [t, l]), s = K(() => {
    n(rt);
  }, []);
  return {
    currentFormat: e,
    formatText: i,
    resetFormat: s
  };
}, he = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, nt = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, $t = 300, Bt = 500, Ut = 50, qt = 'page-break, [data-page-break="true"]', Zt = (e, n, l = 100) => {
  const t = dt(), i = ne(null), s = ne(null), a = ne(e), d = ne(l), y = ne(!1);
  ae(() => {
    a.current = e;
  }, [e]), ae(() => {
    d.current = l;
  }, [l]), ae(() => () => {
    i.current && clearTimeout(i.current), s.current && clearTimeout(s.current);
  }, []);
  const h = K((m, c) => {
    if (!m || m.length === 0)
      return null;
    let S = 0;
    for (let A = 0; A < m.length; A++) {
      const z = m[A];
      if (!z || !z.getBoundingClientRect)
        continue;
      const j = z.getBoundingClientRect().height;
      if (S + j > c)
        return {
          overflowIndex: A,
          overflowElement: z,
          accumulatedHeight: S
        };
      S += j;
    }
    return null;
  }, []), E = K((m, c) => {
    if (!m || !n?.current)
      return !1;
    try {
      const S = n.current, A = document.createElement("page-break");
      return A.setAttribute("data-page-break", "true"), A.setAttribute("contenteditable", "false"), A.setAttribute("data-page-number", c || "2"), m.parentNode.insertBefore(A, m), !0;
    } catch (S) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", S), !1;
    }
  }, [n]), p = K((m = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const c = m.pageSize || a.current || "A4", S = he[c] || he.A4, A = n.current, z = A.querySelectorAll(qt), j = [];
    j.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: S.height
    });
    const B = A.getBoundingClientRect(), F = A.scrollTop;
    return z.forEach((te, J) => {
      const Z = te.getBoundingClientRect().top - B.top + F;
      j.push({
        id: `page-${J + 1}`,
        pageNumber: J + 2,
        top: Z,
        height: S.height
      });
    }), j;
  }, [n]), P = K((m = {}) => {
    const c = p(m);
    return t.updatePageBoundaries(c), c;
  }, [p, t]), _ = K(() => {
    if (!(!n?.current || y.current))
      try {
        y.current = !0;
        const m = n.current, c = a.current || "A4", S = d.current || 100, z = (he[c] || he.A4).height - nt.top - nt.bottom, j = S / 100, B = z / j, F = Array.from(m.children);
        if (F.length === 0)
          return;
        const te = F.filter(
          (N) => N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true"
        ), J = [];
        let G = [];
        for (const N of F)
          N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true" ? G.length > 0 && (J.push(G), G = []) : G.push(N);
        G.length > 0 && J.push(G), J.length === 0 && F.length > 0 && J.push(F.filter(
          (N) => !(N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true")
        ));
        let Z = !1;
        for (let N = 0; N < J.length; N++) {
          const X = J[N], ee = h(X, B);
          if (ee && ee.overflowIndex > 0) {
            const re = N + 2;
            if (E(ee.overflowElement, re)) {
              Z = !0;
              break;
            }
          }
        }
        if (Z) {
          const N = m.innerHTML;
          t.updateContinuousContent(N), setTimeout(() => {
            P();
          }, Ut);
        }
      } catch (m) {
        console.warn("[checkAndReflow] Reflow failed:", m);
      } finally {
        y.current = !1;
      }
  }, [n, h, E, t, P]), $ = K((m = Bt) => {
    s.current && clearTimeout(s.current), s.current = setTimeout(() => {
      s.current = null, _();
    }, m);
  }, [_]), k = K((m = {}) => {
    i.current && clearTimeout(i.current);
    const c = typeof m.delay == "number" ? m.delay : $t;
    i.current = setTimeout(() => {
      i.current = null, P(m);
    }, Math.max(0, c));
  }, [P]), I = K((m) => {
    if (!m?.current || !n?.current)
      return 0;
    try {
      const c = m.current, A = n.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (A.length === 0)
        return 0;
      const z = c.getBoundingClientRect(), j = z.top + z.height / 2;
      for (let B = A.length - 1; B >= 0; B--)
        if (A[B].getBoundingClientRect().top < j)
          return B + 1;
      return 0;
    } catch (c) {
      return console.warn("[getCurrentPage] Failed to calculate page:", c), 0;
    }
  }, [n]), M = K((m) => {
    if (!n?.current)
      return;
    const c = n.current;
    c.focus();
    try {
      let S = null, A = 0;
      if (m === 0)
        S = c.firstChild, A = 0;
      else {
        const j = c.querySelectorAll('page-break, [data-page-break="true"]')[m - 1];
        j && j.nextSibling && (S = j.nextSibling, A = 0);
      }
      if (S) {
        const z = document.createRange(), j = window.getSelection();
        S.nodeType === Node.TEXT_NODE ? z.setStart(S, A) : z.setStart(S, 0), z.collapse(!0), j.removeAllRanges(), j.addRange(z);
      }
    } catch (S) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", S);
    }
  }, [n]), w = K((m, c) => {
    if (!c?.current || !n?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const S = c.current, A = n.current;
    try {
      let z = null;
      if (m === 0)
        z = A;
      else {
        const B = A.querySelectorAll('page-break, [data-page-break="true"]')[m - 1];
        if (B)
          z = B;
        else {
          console.warn("[scrollToPage] Page break not found for page", m);
          return;
        }
      }
      if (z) {
        const j = z.getBoundingClientRect(), B = S.getBoundingClientRect(), F = S.scrollTop + (j.top - B.top);
        console.log("[scrollToPage] Scrolling to page", m, "scrollTop:", F), S.scrollTo({
          top: F,
          behavior: "smooth"
        }), setTimeout(() => {
          M(m);
        }, 400);
      }
    } catch (z) {
      console.error("[scrollToPage] Error:", z);
    }
  }, [n, M]), C = K((m) => {
    if (!n?.current)
      return !1;
    const c = n.current;
    if (p().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const A = Array.from(c.querySelectorAll('page-break, [data-page-break="true"]'));
      if (m > A.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const z = window.getSelection();
      let j = !1, B = [], F = null;
      if (m === 0) {
        const G = A[0];
        if (!G)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let Z = c.firstChild;
        for (; Z && Z !== G; )
          B.push(Z), Z = Z.nextSibling;
        F = G;
      } else {
        const G = A[m - 1];
        if (!G)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const Z = A[m];
        let N = G.nextSibling;
        for (; N && N !== Z; )
          B.push(N), N = N.nextSibling;
        F = G;
      }
      if (z && z.rangeCount > 0) {
        const Z = z.getRangeAt(0).startContainer;
        for (const N of B)
          if (N.contains(Z) || N === Z) {
            j = !0;
            break;
          }
      }
      F && F.parentNode && F.remove(), B.forEach((G) => {
        G.parentNode && G.remove();
      }), c.querySelectorAll('page-break, [data-page-break="true"]').forEach((G, Z) => {
        G.setAttribute("data-page-number", String(Z + 2));
      }), j && setTimeout(() => {
        M(0);
      }, 50);
      const J = c.innerHTML;
      return t.updateContinuousContent(J), setTimeout(() => {
        P();
      }, 100), !0;
    } catch (A) {
      return console.error("[removePageAndContent] Failed to remove page:", A), !1;
    }
  }, [n, p, t, P, M]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: k,
    updateBoundaries: P,
    getCurrentPage: I,
    scrollToPage: w,
    positionCursorAtPage: M,
    checkAndReflow: _,
    triggerAutoReflow: $,
    removePageAndContent: C,
    boundaryTimeoutRef: i,
    reflowTimeoutRef: s
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ht = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, l, t) => t ? t.toUpperCase() : l.toLowerCase()
), ot = (e) => {
  const n = Ht(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, gt = (...e) => e.filter((n, l, t) => !!n && n.trim() !== "" && t.indexOf(n) === l).join(" ").trim(), Yt = (e) => {
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
    size: n = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: t,
    className: i = "",
    children: s,
    iconNode: a,
    ...d
  }, y) => Ce(
    "svg",
    {
      ref: y,
      ...Vt,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: t ? Number(l) * 24 / Number(n) : l,
      className: gt("lucide", i),
      ...!s && !Yt(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...a.map(([h, E]) => Ce(h, E)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = (e, n) => {
  const l = Ie(
    ({ className: t, ...i }, s) => Ce(Ft, {
      ref: s,
      iconNode: n,
      className: gt(
        `lucide-${Gt(ot(e))}`,
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
], Kt = V("bold", Wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xt = V("chevron-left", Jt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], er = V("chevron-right", Qt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], rr = V("file-check", tr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ee = V("file-text", nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ar = V("hash", or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], sr = V("heading-1", ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], lr = V("heading-2", cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], dr = V("heading-3", ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], pr = V("image", fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], hr = V("italic", gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], yr = V("link", mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Er = V("list-ordered", vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], ht = V("list", br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Tr = V("plus", xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Ar = V("redo", _r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], kr = V("settings", Pr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Sr = V("strikethrough", Cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], wr = V("table", Or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], jr = V("text-align-center", Rr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Mr = V("text-align-end", Nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Dr = V("text-align-justify", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], zr = V("text-align-start", Lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Br = V("underline", $r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], qr = V("undo", Ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Gr = V("x", Zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Yr = V("zoom-in", Hr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Fr = V("zoom-out", Vr), Wr = ({ editorView: e, isCollapsed: n, onToggle: l, wordCount: t, pageCount: i }) => {
  const s = ut(), { pages: a, activePage: d, continuousContent: y, editorMode: h } = s, [E, p] = ve(0), [P, _] = ve([]);
  ae(() => {
    if (t !== void 0 && i !== void 0) {
      if (p(t), y) {
        const M = document.createElement("div");
        M.innerHTML = y;
        const w = M.querySelectorAll("h1, h2, h3, h4, h5, h6"), C = Array.from(w).map((m, c) => {
          const S = parseInt(m.tagName.charAt(1)), A = m.textContent.trim();
          return A ? {
            id: `heading-${c}`,
            level: S,
            text: A,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        _(C);
      }
      return;
    }
    let k = 0;
    const I = [];
    a.forEach((M, w) => {
      if (M.content) {
        const C = document.createElement("div");
        C.innerHTML = M.content;
        const c = (C.textContent || C.innerText || "").trim().split(/\s+/).filter((A) => A.length > 0);
        k += c.length, C.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((A, z) => {
          const j = parseInt(A.tagName.charAt(1)), B = A.textContent.trim();
          B && I.push({
            id: `heading-${w}-${z}`,
            level: j,
            text: B,
            page: w + 1
          });
        });
      }
    }), p(k), _(I);
  }, [a, t, i, y]);
  const $ = i !== void 0 ? i : a.length;
  return /* @__PURE__ */ o.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
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
              onClick: l,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ o.jsx(er, { size: 16 }) : /* @__PURE__ */ o.jsx(Xt, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(rr, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: $ })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(ar, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: E.toLocaleString() })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(Ee, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: d + 1 })
            ] })
          ] }),
          P.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsxs("h3", { children: [
              /* @__PURE__ */ o.jsx(ht, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "document-outline", "data-testid": "outline", children: P.map((k) => {
              const I = k.level === 1 ? sr : k.level === 2 ? lr : dr;
              return /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${k.level}`,
                  style: { marginLeft: `${(k.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ o.jsx(I, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ o.jsx("span", { className: "outline-text", children: k.text }),
                    /* @__PURE__ */ o.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      k.page
                    ] })
                  ]
                },
                k.id
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
function Kr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Jr(e) {
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
    i.onload = (s) => {
      const a = s.target.result;
      if (a.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        l(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const h = `editor-image-${Kr()}`;
        localStorage.setItem(h, a), n(h);
      } catch (h) {
        h.name === "QuotaExceededError" ? l(new Error("Storage quota exceeded")) : l(h);
      }
    }, i.onerror = () => {
      l(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function ln(e) {
  return localStorage.getItem(e);
}
function un(e) {
  localStorage.removeItem(e);
}
function dn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function fn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Xr {
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
  _format(n, l, t) {
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
const at = new Xr("Editor"), ze = ({
  currentFormat: e,
  onFormatText: n,
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
      const a = await Jr(i), d = localStorage.getItem(a);
      d && (document.execCommand("insertImage", !1, d), at.info("Image inserted", { key: a }));
    } catch (s) {
      at.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("undo"),
        title: "Undo",
        children: /* @__PURE__ */ o.jsx(qr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("redo"),
        title: "Redo",
        children: /* @__PURE__ */ o.jsx(Ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ o.jsx(Kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ o.jsx(hr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ o.jsx(Br, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ o.jsx(Sr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ o.jsx(zr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ o.jsx(jr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ o.jsx(Mr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ o.jsx(Dr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsxs(
      "select",
      {
        onChange: (i) => n("fontName", i.target.value),
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
        onChange: (i) => n("fontSize", i.target.value),
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
        onChange: (i) => n("formatBlock", i.target.value),
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
        onClick: () => n("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ o.jsx(ht, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ o.jsx(Er, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => {
          const i = prompt("Enter URL:");
          i && n("createLink", i);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ o.jsx(yr, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => n("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ o.jsx(wr, { size: 16 })
      }
    ),
    l && /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: l,
        title: "Insert Page Break",
        children: /* @__PURE__ */ o.jsx(Ee, { size: 16 })
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
        children: /* @__PURE__ */ o.jsx(pr, { size: 16 })
      }
    )
  ] });
};
ze.propTypes = {
  currentFormat: v.shape({
    bold: v.bool,
    italic: v.bool,
    underline: v.bool,
    strikethrough: v.bool,
    alignLeft: v.bool,
    alignCenter: v.bool,
    alignRight: v.bool,
    alignJustify: v.bool,
    fontFamily: v.string,
    fontSize: v.string,
    headingLevel: v.string
  }).isRequired,
  onFormatText: v.func.isRequired,
  onAddPageBreak: v.func
};
ze.defaultProps = {
  onAddPageBreak: void 0
};
const $e = ({
  content: e,
  dimensions: n,
  pageSize: l,
  pageBoundaries: t = [],
  editorRef: i,
  onInput: s,
  onKeyDown: a,
  onClick: d,
  onScroll: y,
  zoomLevel: h = 100
}) => {
  const E = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, p = h / 100, P = (_) => {
    if (_.key === "Tab")
      return _.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const $ = window.getSelection();
    if (!$ || $.rangeCount === 0) return;
    const k = $.getRangeAt(0), { startContainer: I, endContainer: M } = k, w = (C) => C ? C.nodeType === Node.ELEMENT_NODE ? C.tagName === "PAGE-BREAK" || C.getAttribute("data-page-break") === "true" : C.parentElement && w(C.parentElement) : !1;
    if ((_.key === "Backspace" || _.key === "Delete") && (w(I) || w(M)))
      return _.preventDefault(), !1;
    a && a(_);
  };
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${n.width * p}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${p})`,
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
            minHeight: `${n.height}px`,
            backgroundColor: "white",
            padding: `${E.top}px ${E.right}px ${E.bottom}px ${E.left}px`,
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
          onInput: s,
          onKeyDown: P,
          onClick: d,
          onScroll: y,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
$e.propTypes = {
  content: v.string.isRequired,
  dimensions: v.shape({
    width: v.number.isRequired,
    height: v.number.isRequired
  }).isRequired,
  pageSize: v.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: v.arrayOf(
    v.shape({
      id: v.string.isRequired,
      pageNumber: v.number.isRequired,
      top: v.number,
      height: v.number
    })
  ),
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: v.func.isRequired,
  onKeyDown: v.func,
  onClick: v.func,
  onScroll: v.func,
  zoomLevel: v.number
};
$e.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100
};
const Be = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: n = 0,
  pageSize: l = "A4",
  zoomLevel: t = 100,
  canZoomIn: i = !0,
  canZoomOut: s = !0,
  onNavigate: a,
  onAddPage: d,
  onDeletePage: y,
  onPageSizeChange: h,
  onZoomIn: E,
  onZoomOut: p,
  onZoomReset: P
} = {}) => {
  const _ = Math.max(e?.length || 0, 1), $ = (w) => {
    a && a(w);
  }, k = () => {
    d && d();
  }, I = (w) => {
    if (_ <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    y && y(w);
  }, M = (w) => {
    h && h(w);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ o.jsx(kr, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: l,
          onChange: (w) => M(w.target.value),
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
          onClick: p,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ o.jsx(Fr, { size: 14 })
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: "zoom-reset-button",
          onClick: P,
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
          onClick: E,
          disabled: !i,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ o.jsx(Yr, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((w, C) => /* @__PURE__ */ o.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${C === n ? "active" : ""}`,
          onClick: () => $(C),
          "aria-label": `Go to page ${C + 1}`,
          "aria-current": C === n ? "page" : void 0,
          children: [
            /* @__PURE__ */ o.jsx(Ee, { size: 14 }),
            /* @__PURE__ */ o.jsxs("span", { children: [
              "Page ",
              C + 1
            ] })
          ]
        }
      ),
      _ > 1 && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (m) => {
            m.stopPropagation(), I(C);
          },
          "aria-label": `Delete page ${C + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ o.jsx(Gr, { size: 14 })
        }
      )
    ] }, w.id || `page-${C}`)) }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: k,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ o.jsx(Tr, { size: 16 }),
          /* @__PURE__ */ o.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Be.propTypes = {
  pageBoundaries: v.arrayOf(
    v.shape({
      id: v.string.isRequired,
      pageNumber: v.number.isRequired,
      top: v.number,
      height: v.number
    })
  ),
  activePage: v.number,
  pageSize: v.oneOf(["A4", "Letter", "Legal"]),
  zoomLevel: v.number,
  canZoomIn: v.bool,
  canZoomOut: v.bool,
  onNavigate: v.func,
  onAddPage: v.func,
  onDeletePage: v.func,
  onPageSizeChange: v.func,
  onZoomIn: v.func,
  onZoomOut: v.func,
  onZoomReset: v.func
};
Be.defaultProps = {
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
const Qr = be.memo(Be), it = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, en = 50, tn = 50, rn = 50, nn = 100, on = 500, Ue = Ie(({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: l,
  onDeletePage: t,
  onPageSizeChange: i,
  onChange: s,
  showSidebar: a = !0,
  showToolbar: d = !0,
  showPageManager: y = !0
}, h) => {
  const E = ut(), p = dt(), { pageSize: P, continuousContent: _, pageBoundaries: $, activePage: k, zoomLevel: I } = E, M = ne(null), w = ne(null), { currentFormat: C, formatText: m } = zt(), {
    checkAndUpdateBoundaries: c,
    getCurrentPage: S,
    scrollToPage: A,
    positionCursorAtPage: z,
    updateBoundaries: j,
    triggerAutoReflow: B,
    removePageAndContent: F
  } = Zt(P, w, I), te = ye(() => it[P] || it.A4, [P]), [J, G] = ve(!1), Z = ne(null), N = ne(!1), X = ne(!1), ee = ne(!1), re = ne(_);
  ae(() => {
    if (w.current) {
      if (!ee.current) {
        w.current.innerHTML = _, ee.current = !0, re.current = _;
        const u = setTimeout(() => {
          j();
        }, en);
        return () => clearTimeout(u);
      }
      if (re.current !== _) {
        if (w.current.innerHTML !== _) {
          w.current.innerHTML = _;
          const W = setTimeout(() => {
            if (j(), N.current) {
              N.current = !1;
              const oe = Math.max(0, $.length - 1);
              p.setActivePage(oe), setTimeout(() => {
                A(oe, M);
              }, rn);
            }
          }, tn);
          return re.current = _, () => clearTimeout(W);
        }
        re.current = _;
      }
    }
  }, [_, j, $.length, p, A]), ae(() => {
    s && ee.current && s(_);
  }, [_, s]), xt(h, () => ({
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
      p.updateContinuousContent(u), w.current && (w.current.innerHTML = u, setTimeout(() => {
        j();
      }, 50));
    }
  }), [_, p, j]), ae(() => {
    const u = setTimeout(() => {
      w.current && w.current.focus();
    }, 200);
    return () => clearTimeout(u);
  }, []);
  const f = K((u) => {
    const W = u.currentTarget.innerHTML;
    p.updateContinuousContent(W), c(), B();
    const oe = S(M);
    oe !== k && p.setActivePage(oe);
  }, [c, p, S, k, B, M]), r = K((u) => {
    p.updatePageSize(u), j({ pageSize: u }), i && i(u);
  }, [p, j, i]), g = K((u) => {
    u < 0 || u >= $.length || (X.current = !0, p.setActivePage(u), A(u, M), setTimeout(() => {
      X.current = !1;
    }, on), n && n(u));
  }, [p, A, n, $.length]), b = K(() => {
    N.current = !0, p.addPageBreak({ position: "end" }), l && l();
  }, [p, l]), x = K(() => {
    const u = window.getSelection();
    if (u && u.rangeCount > 0) {
      if (!w?.current) return;
      const de = `<page-break data-page-break="true" contenteditable="false" data-page-number="${w.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, de), setTimeout(() => {
        j();
        const yt = S(M);
        p.setActivePage(yt);
      }, 150);
    }
  }, [j, S, p, M]), D = K((u) => {
    if ($.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    F(u) && (p.setActivePage(0), t && t(u));
  }, [$.length, F, p, t]), O = K(() => {
    p.zoomIn(), setTimeout(() => {
      c({ delay: 100 }), B(500);
    }, 100);
  }, [p, c, B]), T = K(() => {
    p.zoomOut(), setTimeout(() => {
      c({ delay: 100 }), B(500);
    }, 100);
  }, [p, c, B]), R = K(() => {
    p.resetZoom(), setTimeout(() => {
      c({ delay: 100 }), B(500);
    }, 100);
  }, [p, c, B]);
  ae(() => {
    const u = (W) => {
      if (!(!w.current && !M.current) && (W.ctrlKey || W.metaKey))
        switch (W.key) {
          case "+":
          case "=":
            W.preventDefault(), O();
            break;
          case "-":
          case "_":
            W.preventDefault(), T();
            break;
          case "0":
            W.preventDefault(), R();
            break;
        }
    };
    return window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    };
  }, [O, T, R]);
  const q = K(() => {
    !M.current || !w.current || X.current || (Z.current && clearTimeout(Z.current), Z.current = setTimeout(() => {
      if (X.current) {
        Z.current = null;
        return;
      }
      const u = S(M);
      u !== k && u >= 0 && p.setActivePage(u), Z.current = null;
    }, nn));
  }, [S, k, p]), U = ye(() => {
    if (!_) return 0;
    const W = _.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return W ? W.length : 0;
  }, [_]), Q = $.length || 1;
  return ae(() => () => {
    Z.current && clearTimeout(Z.current);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ o.jsx(
      ze,
      {
        currentFormat: C,
        onFormatText: m,
        onAddPageBreak: x
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "editor-container", children: [
      a && /* @__PURE__ */ o.jsx(
        Wr,
        {
          editorView: null,
          isCollapsed: J,
          onToggle: () => G((u) => !u),
          wordCount: U,
          pageCount: Q
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: M,
          onScroll: q,
          children: /* @__PURE__ */ o.jsx(
            $e,
            {
              content: _,
              dimensions: te,
              pageSize: P,
              pageBoundaries: $,
              editorRef: w,
              onInput: f,
              onClick: () => w.current?.focus(),
              zoomLevel: I
            }
          )
        }
      ),
      y && /* @__PURE__ */ o.jsx("div", { className: "page-manager-sidebar", children: e ? be.cloneElement(e, {
        onNavigate: g,
        onAddPage: b,
        onDeletePage: D,
        onPageSizeChange: r,
        zoomLevel: I,
        canZoomIn: Re(I),
        canZoomOut: je(I),
        onZoomIn: O,
        onZoomOut: T,
        onZoomReset: R
      }) : /* @__PURE__ */ o.jsx(
        Qr,
        {
          pageBoundaries: $,
          activePage: k,
          pageSize: P,
          zoomLevel: I,
          canZoomIn: Re(I),
          canZoomOut: je(I),
          onNavigate: g,
          onAddPage: b,
          onDeletePage: D,
          onPageSizeChange: r,
          onZoomIn: O,
          onZoomOut: T,
          onZoomReset: R
        }
      ) })
    ] })
  ] });
});
Ue.displayName = "HtmlEditor";
Ue.propTypes = {
  pageManagerComponent: v.element,
  onNavigatePage: v.func,
  onAddPage: v.func,
  onDeletePage: v.func,
  onPageSizeChange: v.func,
  onChange: v.func,
  showSidebar: v.bool,
  showToolbar: v.bool,
  showPageManager: v.bool
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
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
mt.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const pn = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  cn as DocumentProvider,
  ze as EditorToolbar,
  mt as ErrorBoundary,
  Ue as HtmlEditor,
  pn as PAGE_DIMENSIONS,
  Qr as PageManager,
  $e as PageView,
  Wr as Sidebar,
  dn as clearImages,
  un as deleteImage,
  fn as getAllImageKeys,
  ln as getImage,
  Xr as logger,
  Jr as saveImage,
  Zt as useContinuousReflow,
  lt as useDocument,
  dt as useDocumentActions,
  ut as useDocumentState,
  zt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
