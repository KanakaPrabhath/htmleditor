import xe, { createContext as bt, useContext as vt, useReducer as xt, useMemo as Ee, useState as be, useCallback as X, useRef as oe, useEffect as ae, forwardRef as De, createElement as Se, useImperativeHandle as Tt } from "react";
import { v4 as Le } from "uuid";
function At(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pe = { exports: {} }, ce = {};
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
  if (qe) return ce;
  qe = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function u(t, i, c) {
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
  return ce.Fragment = r, ce.jsx = u, ce.jsxs = u, ce;
}
var le = {};
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
function Pt() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === G ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case B:
          return "Fragment";
        case k:
          return "Profiler";
        case b:
          return "StrictMode";
        case v:
          return "Suspense";
        case _:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case O:
            return "Portal";
          case $:
            return n.displayName || "Context";
          case R:
            return (n._context.displayName || "Context") + ".Consumer";
          case s:
            var p = n.render;
            return n = n.displayName, n || (n = p.displayName || p.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case j:
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
    function u(n) {
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
      if (n === B) return "<>";
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
      var n = W.A;
      return n === null ? null : n.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function a(n) {
      if (te.call(n, "key")) {
        var p = Object.getOwnPropertyDescriptor(n, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function d(n, p) {
      function A() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: A,
        configurable: !0
      });
    }
    function m() {
      var n = e(this.type);
      return L[n] || (L[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function h(n, p, A, x, z, C) {
      var y = A.ref;
      return n = {
        $$typeof: I,
        type: n,
        key: p,
        props: A,
        _owner: x
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: m
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
        value: z
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function E(n, p, A, x, z, C) {
      var y = p.children;
      if (y !== void 0)
        if (x)
          if (Q(y)) {
            for (x = 0; x < y.length; x++)
              g(y[x]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(y);
      if (te.call(p, "key")) {
        y = e(n);
        var S = Object.keys(p).filter(function(Z) {
          return Z !== "key";
        });
        x = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", f[y + x] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          y,
          S,
          y
        ), f[y + x] = !0);
      }
      if (y = null, A !== void 0 && (u(A), y = "" + A), a(p) && (u(p.key), y = "" + p.key), "key" in p) {
        A = {};
        for (var U in p)
          U !== "key" && (A[U] = p[U]);
      } else A = p;
      return y && d(
        A,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), h(
        n,
        y,
        A,
        i(),
        z,
        C
      );
    }
    function g(n) {
      w(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === N && (n._payload.status === "fulfilled" ? w(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function w(n) {
      return typeof n == "object" && n !== null && n.$$typeof === I;
    }
    var P = xe, I = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), W = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = Object.prototype.hasOwnProperty, Q = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var M, L = {}, ee = P.react_stack_bottom_frame.bind(
      P,
      c
    )(), Y = q(t(c)), f = {};
    le.Fragment = B, le.jsx = function(n, p, A) {
      var x = 1e4 > W.recentlyCreatedOwnerStacks++;
      return E(
        n,
        p,
        A,
        !1,
        x ? Error("react-stack-top-frame") : ee,
        x ? q(t(n)) : Y
      );
    }, le.jsxs = function(n, p, A) {
      var x = 1e4 > W.recentlyCreatedOwnerStacks++;
      return E(
        n,
        p,
        A,
        !0,
        x ? Error("react-stack-top-frame") : ee,
        x ? q(t(n)) : Y
      );
    };
  })()), le;
}
var Ge;
function kt() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? pe.exports = _t() : pe.exports = Pt()), pe.exports;
}
var o = kt();
const we = 100, Re = 50, Oe = 200, Ye = 5, je = (e) => e < Oe, Ne = (e) => e > Re, de = "A4", ie = "<p><br></p>", Ct = "continuous", Me = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
}, ue = (e, r = de) => ({
  id: Le(),
  index: e,
  size: r,
  content: ie,
  images: [],
  isBreakPoint: !1
}), ye = (e) => typeof e != "string" || e.trim() === "" ? ie : e, ct = (e, r = de) => (e.length > 0 ? e : [ue(0, r)]).map((t, i) => ({
  id: t.id || Le(),
  index: i,
  size: t.size || r,
  content: ye(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), St = (e = de) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (Me[e] || Me.A4).height
}], Ie = (e = {}) => {
  const r = (/* @__PURE__ */ new Date()).toISOString(), u = e.pageSize || de, t = ct(e.pages || [ue(0, u)], u);
  return {
    id: Le(),
    title: e.title || "Untitled Document",
    createdAt: r,
    updatedAt: r,
    pageSize: u,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    editorMode: e.editorMode || Ct,
    continuousContent: e.continuousContent || ie,
    pageBoundaries: e.pageBoundaries || St(u),
    zoomLevel: e.zoomLevel || we
  };
}, H = {
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
}, wt = (e, r) => {
  const u = (/* @__PURE__ */ new Date()).toISOString();
  switch (r.type) {
    case H.INITIALIZE_DOCUMENT: {
      const { initialContent: t = ie, pageSize: i = de } = r.payload || {}, c = { ...ue(0, i), content: ye(t) };
      return Ie({
        title: e.title,
        pageSize: i,
        pages: [c]
      });
    }
    case H.UPDATE_TITLE:
      return {
        ...e,
        title: r.payload,
        updatedAt: u
      };
    case H.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: i } = r.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const c = [...e.pages];
      return c[t] = {
        ...c[t],
        content: ye(i)
      }, {
        ...e,
        pages: c,
        updatedAt: u
      };
    }
    case H.UPDATE_PAGES: {
      const t = Array.isArray(r.payload) ? { pages: r.payload } : r.payload || {}, i = ct(t.pages || [], e.pageSize), c = Array.isArray(t.pageBreaks) ? t.pageBreaks : i.slice(0, -1).map((a, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: c,
        totalPages: i.length,
        updatedAt: u
      };
    }
    case H.ADD_PAGE: {
      const t = typeof r.payload?.index == "number" ? Math.min(Math.max(r.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(t, 0, ue(t, e.pageSize));
      const c = i.map((d, m) => ({
        ...d,
        index: m,
        size: e.pageSize
      })), a = c.slice(0, -1).map((d, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: c,
        activePage: t,
        pageBreaks: a,
        totalPages: c.length,
        updatedAt: u
      };
    }
    case H.DELETE_PAGE: {
      const t = r.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(t, 1);
      const c = i.map((m, h) => ({
        ...m,
        index: h,
        size: e.pageSize
      }));
      let a = e.activePage;
      a >= c.length ? a = c.length - 1 : t <= a && a > 0 && (a -= 1);
      const d = c.slice(0, -1).map((m, h) => ({
        id: `auto-break-${h}`,
        pageNumber: h + 1
      }));
      return {
        ...e,
        pages: c,
        activePage: a,
        pageBreaks: d,
        totalPages: c.length,
        updatedAt: u
      };
    }
    case H.SET_ACTIVE_PAGE: {
      const t = r.payload;
      if (t === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t < 0 || t >= i ? e : {
        ...e,
        activePage: t,
        updatedAt: u
      };
    }
    case H.UPDATE_PAGE_SIZE: {
      const t = r.payload;
      if (t === e.pageSize)
        return e;
      if (!Me[t])
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
        updatedAt: u
      };
    }
    case H.RESET_DOCUMENT:
      return Ie();
    case H.UPDATE_CONTINUOUS_CONTENT: {
      const t = ye(r.payload);
      return t === e.continuousContent ? e : {
        ...e,
        continuousContent: t,
        updatedAt: u
      };
    }
    case H.UPDATE_PAGE_BOUNDARIES: {
      const t = Array.isArray(r.payload) ? r.payload : [];
      if (t.length === e.pageBoundaries.length && t.length > 0 && t[0].id === e.pageBoundaries[0]?.id && t[t.length - 1].id === e.pageBoundaries[t.length - 1]?.id)
        return e;
      const i = e.activePage >= t.length ? Math.max(0, t.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: t,
        totalPages: t.length,
        activePage: i,
        updatedAt: u
      };
    }
    case H.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: i } = r.payload || {}, c = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let a = e.continuousContent;
      if (t === "end")
        a = a + c + "<p><br></p>";
      else if (typeof t == "number") {
        const d = a.substring(0, t), m = a.substring(t);
        a = d + c + m;
      } else if (typeof i == "number" && typeof document < "u") {
        const d = document.createElement("div");
        d.innerHTML = a;
        const m = d.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && m.length === 0)
          a = a + c + "<p><br></p>";
        else if (i < m.length) {
          const h = m[i], E = document.createElement("page-break");
          E.setAttribute("data-page-break", "true"), E.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const g = document.createElement("p");
          g.innerHTML = "<br>", h.parentNode.insertBefore(E, h.nextSibling), E.parentNode.insertBefore(g, E.nextSibling), a = d.innerHTML;
        } else
          a = a + c + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: a,
        updatedAt: u
      };
    }
    case H.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = r.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const c = i.querySelectorAll('page-break, [data-page-break="true"]');
      return c[t] && c[t].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((d, m) => {
        d.setAttribute("data-page-number", String(m + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: u
      };
    }
    case H.SET_EDITOR_MODE: {
      const t = r.payload;
      if (t === e.editorMode)
        return e;
      let i = e.continuousContent, c = e.pages;
      return t === "continuous" ? i = e.pages.map((d) => d.content).filter((d) => d && d !== ie).join(`
`) || ie : e.continuousContent && e.continuousContent !== ie && (c = [{ ...ue(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: t,
        continuousContent: i,
        pages: c,
        updatedAt: u
      };
    }
    case H.SET_ZOOM_LEVEL: {
      const t = r.payload;
      return t < Re || t > Oe ? (console.warn(`Invalid zoom level: ${t}. Must be between ${Re} and ${Oe}.`), e) : t === e.zoomLevel ? e : {
        ...e,
        zoomLevel: t,
        updatedAt: u
      };
    }
    case H.ZOOM_IN: {
      if (!je(e.zoomLevel))
        return e;
      const t = e.zoomLevel + Ye;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: u
      };
    }
    case H.ZOOM_OUT: {
      if (!Ne(e.zoomLevel))
        return e;
      const t = e.zoomLevel - Ye;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: u
      };
    }
    case H.RESET_ZOOM:
      return e.zoomLevel === we ? e : {
        ...e,
        zoomLevel: we,
        updatedAt: u
      };
    default:
      return e;
  }
}, lt = bt(null), cr = ({ children: e, initialState: r = {} }) => {
  const [u, t] = xt(wt, Ie(r)), i = Ee(() => ({
    initializeDocument: (a) => t({ type: H.INITIALIZE_DOCUMENT, payload: a }),
    updateTitle: (a) => t({ type: H.UPDATE_TITLE, payload: a }),
    updatePageContent: (a) => t({ type: H.UPDATE_PAGE_CONTENT, payload: a }),
    updatePages: (a) => t({ type: H.UPDATE_PAGES, payload: a }),
    addPage: (a) => t({ type: H.ADD_PAGE, payload: a }),
    deletePage: (a) => t({ type: H.DELETE_PAGE, payload: a }),
    setActivePage: (a) => t({ type: H.SET_ACTIVE_PAGE, payload: a }),
    updatePageSize: (a) => t({ type: H.UPDATE_PAGE_SIZE, payload: a }),
    resetDocument: () => t({ type: H.RESET_DOCUMENT }),
    updateContinuousContent: (a) => t({ type: H.UPDATE_CONTINUOUS_CONTENT, payload: a }),
    updatePageBoundaries: (a) => t({ type: H.UPDATE_PAGE_BOUNDARIES, payload: a }),
    addPageBreak: (a) => t({ type: H.ADD_PAGE_BREAK, payload: a }),
    removePageBreak: (a) => t({ type: H.REMOVE_PAGE_BREAK, payload: a }),
    setEditorMode: (a) => t({ type: H.SET_EDITOR_MODE, payload: a }),
    insertPageAt: (a) => t({ type: H.INSERT_PAGE_AT, payload: a }),
    movePageTo: (a) => t({ type: H.MOVE_PAGE_TO, payload: a }),
    duplicatePage: (a) => t({ type: H.DUPLICATE_PAGE, payload: a }),
    setZoomLevel: (a) => t({ type: H.SET_ZOOM_LEVEL, payload: a }),
    zoomIn: () => t({ type: H.ZOOM_IN }),
    zoomOut: () => t({ type: H.ZOOM_OUT }),
    resetZoom: () => t({ type: H.RESET_ZOOM })
  }), []), c = Ee(() => ({
    state: u,
    actions: i,
    dispatch: t
  }), [u, i]);
  return /* @__PURE__ */ o.jsx(lt.Provider, { value: c, children: e });
}, ut = () => {
  const e = vt(lt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, dt = () => {
  const { state: e } = ut();
  return e;
}, ft = () => {
  const { actions: e } = ut();
  return e;
};
var ge = { exports: {} }, he = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Rt() {
  if (Fe) return F;
  Fe = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, u = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, B = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function R(s) {
    if (typeof s == "object" && s !== null) {
      var v = s.$$typeof;
      switch (v) {
        case r:
          switch (s = s.type, s) {
            case m:
            case h:
            case t:
            case c:
            case i:
            case g:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case d:
                case E:
                case I:
                case P:
                case a:
                  return s;
                default:
                  return v;
              }
          }
        case u:
          return v;
      }
    }
  }
  function $(s) {
    return R(s) === h;
  }
  return F.AsyncMode = m, F.ConcurrentMode = h, F.ContextConsumer = d, F.ContextProvider = a, F.Element = r, F.ForwardRef = E, F.Fragment = t, F.Lazy = I, F.Memo = P, F.Portal = u, F.Profiler = c, F.StrictMode = i, F.Suspense = g, F.isAsyncMode = function(s) {
    return $(s) || R(s) === m;
  }, F.isConcurrentMode = $, F.isContextConsumer = function(s) {
    return R(s) === d;
  }, F.isContextProvider = function(s) {
    return R(s) === a;
  }, F.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === r;
  }, F.isForwardRef = function(s) {
    return R(s) === E;
  }, F.isFragment = function(s) {
    return R(s) === t;
  }, F.isLazy = function(s) {
    return R(s) === I;
  }, F.isMemo = function(s) {
    return R(s) === P;
  }, F.isPortal = function(s) {
    return R(s) === u;
  }, F.isProfiler = function(s) {
    return R(s) === c;
  }, F.isStrictMode = function(s) {
    return R(s) === i;
  }, F.isSuspense = function(s) {
    return R(s) === g;
  }, F.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === t || s === h || s === c || s === i || s === g || s === w || typeof s == "object" && s !== null && (s.$$typeof === I || s.$$typeof === P || s.$$typeof === a || s.$$typeof === d || s.$$typeof === E || s.$$typeof === B || s.$$typeof === b || s.$$typeof === k || s.$$typeof === O);
  }, F.typeOf = R, F;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Ot() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, u = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, E = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, B = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function R(l) {
      return typeof l == "string" || typeof l == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      l === t || l === h || l === c || l === i || l === g || l === w || typeof l == "object" && l !== null && (l.$$typeof === I || l.$$typeof === P || l.$$typeof === a || l.$$typeof === d || l.$$typeof === E || l.$$typeof === B || l.$$typeof === b || l.$$typeof === k || l.$$typeof === O);
    }
    function $(l) {
      if (typeof l == "object" && l !== null) {
        var J = l.$$typeof;
        switch (J) {
          case r:
            var re = l.type;
            switch (re) {
              case m:
              case h:
              case t:
              case c:
              case i:
              case g:
                return re;
              default:
                var fe = re && re.$$typeof;
                switch (fe) {
                  case d:
                  case E:
                  case I:
                  case P:
                  case a:
                    return fe;
                  default:
                    return J;
                }
            }
          case u:
            return J;
        }
      }
    }
    var s = m, v = h, _ = d, j = a, N = r, D = E, G = t, W = I, te = P, Q = u, q = c, M = i, L = g, ee = !1;
    function Y(l) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(l) || $(l) === m;
    }
    function f(l) {
      return $(l) === h;
    }
    function n(l) {
      return $(l) === d;
    }
    function p(l) {
      return $(l) === a;
    }
    function A(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }
    function x(l) {
      return $(l) === E;
    }
    function z(l) {
      return $(l) === t;
    }
    function C(l) {
      return $(l) === I;
    }
    function y(l) {
      return $(l) === P;
    }
    function S(l) {
      return $(l) === u;
    }
    function U(l) {
      return $(l) === c;
    }
    function Z(l) {
      return $(l) === i;
    }
    function ne(l) {
      return $(l) === g;
    }
    V.AsyncMode = s, V.ConcurrentMode = v, V.ContextConsumer = _, V.ContextProvider = j, V.Element = N, V.ForwardRef = D, V.Fragment = G, V.Lazy = W, V.Memo = te, V.Portal = Q, V.Profiler = q, V.StrictMode = M, V.Suspense = L, V.isAsyncMode = Y, V.isConcurrentMode = f, V.isContextConsumer = n, V.isContextProvider = p, V.isElement = A, V.isForwardRef = x, V.isFragment = z, V.isLazy = C, V.isMemo = y, V.isPortal = S, V.isProfiler = U, V.isStrictMode = Z, V.isSuspense = ne, V.isValidElementType = R, V.typeOf = $;
  })()), V;
}
var We;
function pt() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? he.exports = Rt() : he.exports = Ot()), he.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Te, Ke;
function jt() {
  if (Ke) return Te;
  Ke = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
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
      var m = Object.getOwnPropertyNames(a).map(function(E) {
        return a[E];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        h[E] = E;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Te = i() ? Object.assign : function(c, a) {
    for (var d, m = t(c), h, E = 1; E < arguments.length; E++) {
      d = Object(arguments[E]);
      for (var g in d)
        r.call(d, g) && (m[g] = d[g]);
      if (e) {
        h = e(d);
        for (var w = 0; w < h.length; w++)
          u.call(d, h[w]) && (m[h[w]] = d[h[w]]);
      }
    }
    return m;
  }, Te;
}
var Ae, Je;
function ze() {
  if (Je) return Ae;
  Je = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = e, Ae;
}
var _e, Xe;
function gt() {
  return Xe || (Xe = 1, _e = Function.call.bind(Object.prototype.hasOwnProperty)), _e;
}
var Pe, Qe;
function Nt() {
  if (Qe) return Pe;
  Qe = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = /* @__PURE__ */ ze(), u = {}, t = /* @__PURE__ */ gt();
    e = function(c) {
      var a = "Warning: " + c;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(c, a, d, m, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var E in c)
        if (t(c, E)) {
          var g;
          try {
            if (typeof c[E] != "function") {
              var w = Error(
                (m || "React class") + ": " + d + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            g = c[E](a, E, m, d, null, r);
          } catch (I) {
            g = I;
          }
          if (g && !(g instanceof Error) && e(
            (m || "React class") + ": type specification of " + d + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in u)) {
            u[g.message] = !0;
            var P = h ? h() : "";
            e(
              "Failed " + d + " type: " + g.message + (P ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (u = {});
  }, Pe = i, Pe;
}
var ke, et;
function Mt() {
  if (et) return ke;
  et = 1;
  var e = pt(), r = jt(), u = /* @__PURE__ */ ze(), t = /* @__PURE__ */ gt(), i = /* @__PURE__ */ Nt(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(d) {
    var m = "Warning: " + d;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return ke = function(d, m) {
    var h = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function g(f) {
      var n = f && (h && f[h] || f[E]);
      if (typeof n == "function")
        return n;
    }
    var w = "<<anonymous>>", P = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: k(),
      arrayOf: R,
      element: $(),
      elementType: s(),
      instanceOf: v,
      node: D(),
      objectOf: j,
      oneOf: _,
      oneOfType: N,
      shape: W,
      exact: te
    };
    function I(f, n) {
      return f === n ? f !== 0 || 1 / f === 1 / n : f !== f && n !== n;
    }
    function O(f, n) {
      this.message = f, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function B(f) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, p = 0;
      function A(z, C, y, S, U, Z, ne) {
        if (S = S || w, Z = Z || y, ne !== u) {
          if (m) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw l.name = "Invariant Violation", l;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = S + ":" + y;
            !n[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            p < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[J] = !0, p++);
          }
        }
        return C[y] == null ? z ? C[y] === null ? new O("The " + U + " `" + Z + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new O("The " + U + " `" + Z + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : f(C, y, S, U, Z);
      }
      var x = A.bind(null, !1);
      return x.isRequired = A.bind(null, !0), x;
    }
    function b(f) {
      function n(p, A, x, z, C, y) {
        var S = p[A], U = M(S);
        if (U !== f) {
          var Z = L(S);
          return new O(
            "Invalid " + z + " `" + C + "` of type " + ("`" + Z + "` supplied to `" + x + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return B(n);
    }
    function k() {
      return B(a);
    }
    function R(f) {
      function n(p, A, x, z, C) {
        if (typeof f != "function")
          return new O("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var y = p[A];
        if (!Array.isArray(y)) {
          var S = M(y);
          return new O("Invalid " + z + " `" + C + "` of type " + ("`" + S + "` supplied to `" + x + "`, expected an array."));
        }
        for (var U = 0; U < y.length; U++) {
          var Z = f(y, U, x, z, C + "[" + U + "]", u);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return B(n);
    }
    function $() {
      function f(n, p, A, x, z) {
        var C = n[p];
        if (!d(C)) {
          var y = M(C);
          return new O("Invalid " + x + " `" + z + "` of type " + ("`" + y + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(f);
    }
    function s() {
      function f(n, p, A, x, z) {
        var C = n[p];
        if (!e.isValidElementType(C)) {
          var y = M(C);
          return new O("Invalid " + x + " `" + z + "` of type " + ("`" + y + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(f);
    }
    function v(f) {
      function n(p, A, x, z, C) {
        if (!(p[A] instanceof f)) {
          var y = f.name || w, S = Y(p[A]);
          return new O("Invalid " + z + " `" + C + "` of type " + ("`" + S + "` supplied to `" + x + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return B(n);
    }
    function _(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), a;
      function n(p, A, x, z, C) {
        for (var y = p[A], S = 0; S < f.length; S++)
          if (I(y, f[S]))
            return null;
        var U = JSON.stringify(f, function(ne, l) {
          var J = L(l);
          return J === "symbol" ? String(l) : l;
        });
        return new O("Invalid " + z + " `" + C + "` of value `" + String(y) + "` " + ("supplied to `" + x + "`, expected one of " + U + "."));
      }
      return B(n);
    }
    function j(f) {
      function n(p, A, x, z, C) {
        if (typeof f != "function")
          return new O("Property `" + C + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var y = p[A], S = M(y);
        if (S !== "object")
          return new O("Invalid " + z + " `" + C + "` of type " + ("`" + S + "` supplied to `" + x + "`, expected an object."));
        for (var U in y)
          if (t(y, U)) {
            var Z = f(y, U, x, z, C + "." + U, u);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return B(n);
    }
    function N(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var n = 0; n < f.length; n++) {
        var p = f[n];
        if (typeof p != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(p) + " at index " + n + "."
          ), a;
      }
      function A(x, z, C, y, S) {
        for (var U = [], Z = 0; Z < f.length; Z++) {
          var ne = f[Z], l = ne(x, z, C, y, S, u);
          if (l == null)
            return null;
          l.data && t(l.data, "expectedType") && U.push(l.data.expectedType);
        }
        var J = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new O("Invalid " + y + " `" + S + "` supplied to " + ("`" + C + "`" + J + "."));
      }
      return B(A);
    }
    function D() {
      function f(n, p, A, x, z) {
        return Q(n[p]) ? null : new O("Invalid " + x + " `" + z + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return B(f);
    }
    function G(f, n, p, A, x) {
      return new O(
        (f || "React class") + ": " + n + " type `" + p + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function W(f) {
      function n(p, A, x, z, C) {
        var y = p[A], S = M(y);
        if (S !== "object")
          return new O("Invalid " + z + " `" + C + "` of type `" + S + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var U in f) {
          var Z = f[U];
          if (typeof Z != "function")
            return G(x, z, C, U, L(Z));
          var ne = Z(y, U, x, z, C + "." + U, u);
          if (ne)
            return ne;
        }
        return null;
      }
      return B(n);
    }
    function te(f) {
      function n(p, A, x, z, C) {
        var y = p[A], S = M(y);
        if (S !== "object")
          return new O("Invalid " + z + " `" + C + "` of type `" + S + "` " + ("supplied to `" + x + "`, expected `object`."));
        var U = r({}, p[A], f);
        for (var Z in U) {
          var ne = f[Z];
          if (t(f, Z) && typeof ne != "function")
            return G(x, z, C, Z, L(ne));
          if (!ne)
            return new O(
              "Invalid " + z + " `" + C + "` key `" + Z + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(p[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var l = ne(y, Z, x, z, C + "." + Z, u);
          if (l)
            return l;
        }
        return null;
      }
      return B(n);
    }
    function Q(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(Q);
          if (f === null || d(f))
            return !0;
          var n = g(f);
          if (n) {
            var p = n.call(f), A;
            if (n !== f.entries) {
              for (; !(A = p.next()).done; )
                if (!Q(A.value))
                  return !1;
            } else
              for (; !(A = p.next()).done; ) {
                var x = A.value;
                if (x && !Q(x[1]))
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
    function M(f) {
      var n = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : q(n, f) ? "symbol" : n;
    }
    function L(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var n = M(f);
      if (n === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function ee(f) {
      var n = L(f);
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
    function Y(f) {
      return !f.constructor || !f.constructor.name ? w : f.constructor.name;
    }
    return P.checkPropTypes = i, P.resetWarningCache = i.resetWarningCache, P.PropTypes = P, P;
  }, ke;
}
var Ce, tt;
function It() {
  if (tt) return Ce;
  tt = 1;
  var e = /* @__PURE__ */ ze();
  function r() {
  }
  function u() {
  }
  return u.resetWarningCache = r, Ce = function() {
    function t(a, d, m, h, E, g) {
      if (g !== e) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
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
      checkPropTypes: u,
      resetWarningCache: r
    };
    return c.PropTypes = c, c;
  }, Ce;
}
var nt;
function Dt() {
  if (nt) return ge.exports;
  if (nt = 1, process.env.NODE_ENV !== "production") {
    var e = pt(), r = !0;
    ge.exports = /* @__PURE__ */ Mt()(e.isElement, r);
  } else
    ge.exports = /* @__PURE__ */ It()();
  return ge.exports;
}
var Lt = /* @__PURE__ */ Dt();
const T = /* @__PURE__ */ At(Lt), zt = {
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
}, Bt = () => {
  const [e, r] = be(rt), u = X((a) => {
    r((d) => ({
      ...d,
      alignLeft: a === "left",
      alignCenter: a === "center",
      alignRight: a === "right",
      alignJustify: a === "justify"
    }));
  }, []), t = X((a) => {
    try {
      const d = window.getSelection();
      if (!d || d.rangeCount === 0)
        return !1;
      const m = d.getRangeAt(0);
      if (!m.toString())
        return r((E) => ({ ...E, fontSize: a })), !1;
      try {
        const E = document.createElement("span");
        E.style.fontSize = a;
        const g = m.extractContents();
        return E.appendChild(g), m.insertNode(E), m.selectNodeContents(E), d.removeAllRanges(), d.addRange(m), r((w) => ({ ...w, fontSize: a })), !0;
      } catch {
        const g = zt[a] || "2";
        return document.execCommand("fontSize", !1, g), r((w) => ({ ...w, fontSize: a })), !0;
      }
    } catch (d) {
      return console.warn("[useFormatting] Font size change failed:", d), !1;
    }
  }, []), i = X((a, d = null) => {
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
          r((h) => ({ ...h, bold: !h.bold }));
          break;
        case "italic":
          r((h) => ({ ...h, italic: !h.italic }));
          break;
        case "underline":
          r((h) => ({ ...h, underline: !h.underline }));
          break;
        case "strikethrough":
          r((h) => ({ ...h, strikethrough: !h.strikethrough }));
          break;
        case "justifyLeft":
          u("left");
          break;
        case "justifyCenter":
          u("center");
          break;
        case "justifyRight":
          u("right");
          break;
        case "justifyFull":
          u("justify");
          break;
        case "fontName":
          r((h) => ({ ...h, fontFamily: d }));
          break;
        case "formatBlock":
          r((h) => ({ ...h, headingLevel: d }));
          break;
        default:
          break;
      }
    } catch (m) {
      console.warn(`[useFormatting] Error executing command "${a}":`, m);
    }
  }, [t, u]), c = X(() => {
    r(rt);
  }, []);
  return {
    currentFormat: e,
    formatText: i,
    resetFormat: c
  };
}, se = {
  A4: { width: 595, height: 842 },
  // 210mm × 297mm at 72 DPI
  Letter: { width: 612, height: 792 },
  // 8.5" × 11" at 72 DPI
  Legal: { width: 612, height: 1008 }
  // 8.5" × 14" at 72 DPI
}, me = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, $t = 300, Ut = 200, Ht = 50, qt = 'page-break, [data-page-break="true"]', Zt = (e, r, u = 100) => {
  const t = ft(), i = oe(null), c = oe(null), a = oe(e), d = oe(u), m = oe(!1);
  ae(() => {
    a.current = e;
  }, [e]), ae(() => {
    d.current = u;
  }, [u]), ae(() => () => {
    i.current && clearTimeout(i.current), c.current && clearTimeout(c.current);
  }, []);
  const h = X((s, v) => {
    if (!s || s.length === 0)
      return null;
    let _ = 0, j = null;
    for (let N = 0; N < s.length; N++) {
      const D = s[N];
      if (!D || !D.getBoundingClientRect)
        continue;
      const G = D.getBoundingClientRect().height;
      if (G < 1)
        continue;
      if (_ + G > v)
        return j === null ? N > 0 ? {
          overflowIndex: N,
          overflowElement: D,
          accumulatedHeight: _
        } : null : {
          overflowIndex: N,
          overflowElement: D,
          accumulatedHeight: _
        };
      _ += G, j = D;
    }
    return null;
  }, []), E = X((s, v) => {
    if (!s || !r?.current)
      return !1;
    try {
      const _ = document.createElement("page-break");
      return _.setAttribute("data-page-break", "true"), _.setAttribute("contenteditable", "false"), _.setAttribute("data-page-number", v || "2"), s.parentNode.insertBefore(_, s), !0;
    } catch (_) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", _), !1;
    }
  }, [r]), g = X((s = {}) => {
    if (!r?.current || typeof document > "u")
      return [];
    const v = s.pageSize || a.current || "A4", _ = se[v] || se.A4, j = r.current, N = j.querySelectorAll(qt), D = [];
    D.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: _.height
    });
    const G = j.getBoundingClientRect(), W = j.scrollTop;
    return N.forEach((te, Q) => {
      const M = te.getBoundingClientRect().top - G.top + W;
      D.push({
        id: `page-${Q + 1}`,
        pageNumber: Q + 2,
        top: M,
        height: _.height
      });
    }), D;
  }, [r]), w = X((s = {}) => {
    const v = g(s);
    return t.updatePageBoundaries(v), v;
  }, [g, t]), P = X((s) => {
    if (!r?.current)
      return !1;
    try {
      const v = r.current, _ = a.current || "A4", j = d.current || 100, D = (se[_] || se.A4).height - me.top - me.bottom, G = j / 100, te = D / G * (s - 1), Q = Array.from(v.children);
      let q = 0, M = null;
      for (let L = 0; L < Q.length; L++) {
        const ee = Q[L];
        if (ee.tagName === "PAGE-BREAK" || ee.getAttribute("data-page-break") === "true")
          continue;
        const Y = ee.getBoundingClientRect().height;
        if (q + Y > te) {
          M = ee;
          break;
        }
        q += Y;
      }
      if (M) {
        const L = document.createElement("page-break");
        L.setAttribute("data-page-break", "true"), L.setAttribute("contenteditable", "false"), L.setAttribute("data-page-number", String(s)), M.parentNode.insertBefore(L, M);
        const ee = v.innerHTML;
        return t.updateContinuousContent(ee), setTimeout(() => {
          w();
        }, 50), !0;
      } else {
        const L = document.createElement("page-break");
        L.setAttribute("data-page-break", "true"), L.setAttribute("contenteditable", "false"), L.setAttribute("data-page-number", String(s)), v.appendChild(L);
        const ee = document.createElement("p");
        ee.innerHTML = "<br>", v.appendChild(ee);
        const Y = v.innerHTML;
        return t.updateContinuousContent(Y), setTimeout(() => {
          w();
        }, 50), !0;
      }
    } catch (v) {
      return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", v), !1;
    }
  }, [r, t, w]), I = X(() => {
    if (!(!r?.current || m.current))
      try {
        m.current = !0;
        const s = r.current, v = a.current || "A4", _ = d.current || 100, N = (se[v] || se.A4).height - me.top - me.bottom, D = _ / 100, G = N / D, W = Array.from(s.children);
        if (W.length === 0)
          return;
        let te = [], Q = [];
        for (const Y of W)
          Y.tagName === "PAGE-BREAK" || Y.getAttribute("data-page-break") === "true" ? Q.length > 0 && (te.push(Q), Q = []) : Q.push(Y);
        Q.length > 0 && te.push(Q), te.length === 0 && W.length > 0 && te.push(W.filter(
          (Y) => !(Y.tagName === "PAGE-BREAK" || Y.getAttribute("data-page-break") === "true")
        ));
        let q = !1, M = 0;
        const L = 3, ee = 20;
        for (let Y = 0; Y < te.length && M < L; Y++) {
          const f = te[Y], n = h(f, G);
          if (n && n.overflowIndex > 0) {
            let p = 0;
            for (let C = 0; C < f.length; C++) {
              const y = f[C];
              y && y.getBoundingClientRect && (p += y.getBoundingClientRect().height);
            }
            if (p - G < ee)
              continue;
            const x = Y + 2;
            if (E(n.overflowElement, x)) {
              q = !0, M++;
              const C = Array.from(s.children), y = [];
              let S = [];
              for (const U of C)
                U.tagName === "PAGE-BREAK" || U.getAttribute("data-page-break") === "true" ? S.length > 0 && (y.push(S), S = []) : S.push(U);
              S.length > 0 && y.push(S), te = y;
            }
          }
        }
        if (q) {
          const Y = s.innerHTML;
          t.updateContinuousContent(Y), setTimeout(() => {
            w(), M >= L && setTimeout(() => {
              m.current || I();
            }, 100);
          }, Ht);
        }
      } catch (s) {
        console.warn("[checkAndReflow] Reflow failed:", s);
      } finally {
        m.current = !1;
      }
  }, [r, h, E, t, w]), O = X((s = Ut) => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, I();
    }, s);
  }, [I]), B = X((s = {}) => {
    i.current && clearTimeout(i.current);
    const v = typeof s.delay == "number" ? s.delay : $t;
    i.current = setTimeout(() => {
      i.current = null, w(s);
    }, Math.max(0, v));
  }, [w]), b = X((s) => {
    if (!s?.current || !r?.current)
      return 0;
    try {
      const v = s.current, j = r.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (j.length === 0)
        return 0;
      const N = v.getBoundingClientRect(), D = N.top + N.height / 2;
      for (let G = j.length - 1; G >= 0; G--)
        if (j[G].getBoundingClientRect().top < D)
          return G + 1;
      return 0;
    } catch (v) {
      return console.warn("[getCurrentPage] Failed to calculate page:", v), 0;
    }
  }, [r]), k = X((s) => {
    if (!r?.current)
      return;
    const v = r.current;
    v.focus();
    try {
      let _ = null, j = 0;
      if (s === 0)
        _ = v.firstChild, j = 0;
      else {
        const D = v.querySelectorAll('page-break, [data-page-break="true"]')[s - 1];
        D && D.nextSibling && (_ = D.nextSibling, j = 0);
      }
      if (_) {
        const N = document.createRange(), D = window.getSelection();
        _.nodeType === Node.TEXT_NODE ? N.setStart(_, j) : N.setStart(_, 0), N.collapse(!0), D.removeAllRanges(), D.addRange(N);
      }
    } catch (_) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", _);
    }
  }, [r]), R = X((s, v) => {
    if (!v?.current || !r?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const _ = v.current, j = r.current;
    try {
      let N = null;
      if (s === 0)
        N = j;
      else {
        const G = j.querySelectorAll('page-break, [data-page-break="true"]')[s - 1];
        if (G)
          N = G;
        else {
          console.warn("[scrollToPage] Page break not found for page", s);
          return;
        }
      }
      if (N) {
        const D = N.getBoundingClientRect(), G = _.getBoundingClientRect(), W = _.scrollTop + (D.top - G.top);
        console.log("[scrollToPage] Scrolling to page", s, "scrollTop:", W), _.scrollTo({
          top: W,
          behavior: "smooth"
        }), setTimeout(() => {
          k(s);
        }, 400);
      }
    } catch (N) {
      console.error("[scrollToPage] Error:", N);
    }
  }, [r, k]), $ = X((s) => {
    if (!r?.current)
      return !1;
    const v = r.current;
    if (g().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const j = Array.from(v.querySelectorAll('page-break, [data-page-break="true"]'));
      if (s > j.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const N = window.getSelection();
      let D = !1, G = [], W = null;
      if (s === 0) {
        const q = j[0];
        if (!q)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let M = v.firstChild;
        for (; M && M !== q; )
          G.push(M), M = M.nextSibling;
        W = q;
      } else {
        const q = j[s - 1];
        if (!q)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const M = j[s];
        let L = q.nextSibling;
        for (; L && L !== M; )
          G.push(L), L = L.nextSibling;
        W = q;
      }
      if (N && N.rangeCount > 0) {
        const M = N.getRangeAt(0).startContainer;
        for (const L of G)
          if (L.contains(M) || L === M) {
            D = !0;
            break;
          }
      }
      W && W.parentNode && W.remove(), G.forEach((q) => {
        q.parentNode && q.remove();
      }), v.querySelectorAll('page-break, [data-page-break="true"]').forEach((q, M) => {
        q.setAttribute("data-page-number", String(M + 2));
      }), D && setTimeout(() => {
        k(0);
      }, 50);
      const Q = v.innerHTML;
      return t.updateContinuousContent(Q), setTimeout(() => {
        w(), setTimeout(() => {
          I();
        }, 150);
      }, 100), !0;
    } catch (j) {
      return console.error("[removePageAndContent] Failed to remove page:", j), !1;
    }
  }, [r, g, t, w, k, I]);
  return {
    calculatePageBoundaries: g,
    checkAndUpdateBoundaries: B,
    updateBoundaries: w,
    getCurrentPage: b,
    scrollToPage: R,
    positionCursorAtPage: k,
    checkAndReflow: I,
    triggerAutoReflow: O,
    removePageAndContent: $,
    insertPageBreakAtBoundary: P,
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
const Gt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, u, t) => t ? t.toUpperCase() : u.toLowerCase()
), ot = (e) => {
  const r = Yt(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, ht = (...e) => e.filter((r, u, t) => !!r && r.trim() !== "" && t.indexOf(r) === u).join(" ").trim(), Ft = (e) => {
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
const Wt = De(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: t,
    className: i = "",
    children: c,
    iconNode: a,
    ...d
  }, m) => Se(
    "svg",
    {
      ref: m,
      ...Vt,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: t ? Number(u) * 24 / Number(r) : u,
      className: ht("lucide", i),
      ...!c && !Ft(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...a.map(([h, E]) => Se(h, E)),
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
const K = (e, r) => {
  const u = De(
    ({ className: t, ...i }, c) => Se(Wt, {
      ref: c,
      iconNode: r,
      className: ht(
        `lucide-${Gt(ot(e))}`,
        `lucide-${e}`,
        t
      ),
      ...i
    })
  );
  return u.displayName = ot(e), u;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Jt = K("bold", Kt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Qt = K("chevron-left", Xt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], tn = K("chevron-right", en);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], rn = K("file-check", nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ve = K("file-text", on);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], sn = K("hash", an);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], ln = K("heading-1", cn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], dn = K("heading-2", un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], pn = K("heading-3", fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], hn = K("image", gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], yn = K("italic", mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], bn = K("link", En);
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
], xn = K("list-ordered", vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], mt = K("list", Tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _n = K("plus", An);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], kn = K("redo", Pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Sn = K("settings", Cn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Rn = K("strikethrough", wn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], jn = K("table", On);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Mn = K("text-align-center", Nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Dn = K("text-align-end", In);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], zn = K("text-align-justify", Ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], $n = K("text-align-start", Bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Hn = K("underline", Un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Zn = K("undo", qn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Yn = K("x", Gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Vn = K("zoom-in", Fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Kn = K("zoom-out", Wn), Jn = ({ editorView: e, isCollapsed: r, onToggle: u, wordCount: t, pageCount: i }) => {
  const c = dt(), { pages: a, activePage: d, continuousContent: m, editorMode: h } = c, [E, g] = be(0), [w, P] = be([]);
  ae(() => {
    if (t !== void 0 && i !== void 0) {
      if (g(t), m) {
        const b = document.createElement("div");
        b.innerHTML = m;
        const k = b.querySelectorAll("h1, h2, h3, h4, h5, h6"), R = Array.from(k).map(($, s) => {
          const v = parseInt($.tagName.charAt(1)), _ = $.textContent.trim();
          return _ ? {
            id: `heading-${s}`,
            level: v,
            text: _,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        P(R);
      }
      return;
    }
    let O = 0;
    const B = [];
    a.forEach((b, k) => {
      if (b.content) {
        const R = document.createElement("div");
        R.innerHTML = b.content;
        const s = (R.textContent || R.innerText || "").trim().split(/\s+/).filter((_) => _.length > 0);
        O += s.length, R.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((_, j) => {
          const N = parseInt(_.tagName.charAt(1)), D = _.textContent.trim();
          D && B.push({
            id: `heading-${k}-${j}`,
            level: N,
            text: D,
            page: k + 1
          });
        });
      }
    }), g(O), P(B);
  }, [a, t, i, m]);
  const I = i !== void 0 ? i : a.length;
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
              onClick: u,
              "aria-label": r ? "Expand sidebar" : "Collapse sidebar",
              title: r ? "Expand sidebar" : "Collapse sidebar",
              children: r ? /* @__PURE__ */ o.jsx(tn, { size: 16 }) : /* @__PURE__ */ o.jsx(Qt, { size: 16 })
            }
          )
        ] }),
        !r && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(rn, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: I })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(sn, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: E.toLocaleString() })
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ o.jsx(ve, { size: 14 }),
                /* @__PURE__ */ o.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ o.jsx("span", { className: "stat-value", children: d + 1 })
            ] })
          ] }),
          w.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ o.jsxs("h3", { children: [
              /* @__PURE__ */ o.jsx(mt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "document-outline", "data-testid": "outline", children: w.map((O) => {
              const B = O.level === 1 ? ln : O.level === 2 ? dn : pn;
              return /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${O.level}`,
                  style: { marginLeft: `${(O.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ o.jsx(B, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ o.jsx("span", { className: "outline-text", children: O.text }),
                    /* @__PURE__ */ o.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      O.page
                    ] })
                  ]
                },
                O.id
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
function Xn() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const r = Math.random() * 16 | 0;
    return (e === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Qn(e) {
  return new Promise((r, u) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      u(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      u(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = (c) => {
      const a = c.target.result;
      if (a.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        u(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const h = `editor-image-${Xn()}`;
        localStorage.setItem(h, a), r(h);
      } catch (h) {
        h.name === "QuotaExceededError" ? u(new Error("Storage quota exceeded")) : u(h);
      }
    }, i.onerror = () => {
      u(new Error("Error reading image file"));
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
class er {
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
  _format(r, u, t) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${r}] ${u}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(r, u) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(r, u) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(r, u) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(r, u) {
  }
}
const at = new er("Editor"), Be = ({
  currentFormat: e,
  onFormatText: r,
  onAddPageBreak: u
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
      const a = await Qn(i), d = localStorage.getItem(a);
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
        children: /* @__PURE__ */ o.jsx(Zn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("redo"),
        title: "Redo",
        children: /* @__PURE__ */ o.jsx(kn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ o.jsx(Jt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ o.jsx(yn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ o.jsx(Hn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ o.jsx(Rn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ o.jsx($n, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ o.jsx(Mn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ o.jsx(Dn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ o.jsx(zn, { size: 16 })
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
        children: /* @__PURE__ */ o.jsx(mt, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ o.jsx(xn, { size: 16 })
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
        children: /* @__PURE__ */ o.jsx(bn, { size: 16 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => r("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ o.jsx(jn, { size: 16 })
      }
    ),
    u && /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: u,
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
        children: /* @__PURE__ */ o.jsx(hn, { size: 16 })
      }
    )
  ] });
};
Be.propTypes = {
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
Be.defaultProps = {
  onAddPageBreak: void 0
};
const $e = ({
  content: e,
  dimensions: r,
  pageSize: u,
  pageBoundaries: t = [],
  editorRef: i,
  onInput: c,
  onKeyDown: a,
  onClick: d,
  onScroll: m,
  zoomLevel: h = 100
}) => {
  const E = {
    top: 40,
    bottom: 40,
    left: 40,
    right: 40
  }, g = h / 100, w = (b, k) => {
    if (!b) return !1;
    const R = b.getBoundingClientRect(), $ = k - R.top;
    return $ < E.top || $ > R.height - E.bottom;
  }, P = (b) => b ? b.nodeType === Node.ELEMENT_NODE ? b.tagName === "PAGE-BREAK" || b.getAttribute("data-page-break") === "true" : b.parentElement && P(b.parentElement) : !1, I = (b) => {
    const k = window.getSelection();
    if (!k || k.rangeCount === 0) return;
    const R = k.getRangeAt(0), { startContainer: $, endContainer: s } = R;
    if ((P($) || P(s)) && (b.key.length === 1 || b.key === "Enter" || b.key === " "))
      return b.preventDefault(), !1;
    if (b.key === "Tab")
      return b.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((b.key === "Backspace" || b.key === "Delete") && (P($) || P(s)))
      return b.preventDefault(), !1;
    a && a(b);
  }, O = (b) => {
    if (!i.current) return;
    const k = b.target;
    if (P(k)) {
      b.preventDefault();
      return;
    }
    if (w(i.current, b.clientY)) {
      b.preventDefault();
      const R = i.current.getBoundingClientRect();
      if (b.clientY - R.top < E.top) {
        const s = i.current.firstElementChild;
        if (s && s.tagName !== "PAGE-BREAK") {
          const v = document.createRange(), _ = window.getSelection();
          v.setStart(s, 0), v.collapse(!0), _.removeAllRanges(), _.addRange(v);
        }
      } else {
        const s = i.current.lastElementChild;
        if (s && s.tagName !== "PAGE-BREAK") {
          const v = document.createRange(), _ = window.getSelection();
          v.selectNodeContents(s), v.collapse(!1), _.removeAllRanges(), _.addRange(v);
        }
      }
      return;
    }
    d && d(b);
  }, B = (b) => {
    const k = window.getSelection();
    if (!k || k.rangeCount === 0) return;
    const R = k.getRangeAt(0), { startContainer: $ } = R;
    if (P($))
      return b.preventDefault(), !1;
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
        transform: `scale(${g})`,
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
            padding: `${E.top}px ${E.right}px ${E.bottom}px ${E.left}px`,
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
          onKeyDown: I,
          onBeforeInput: B,
          onClick: O,
          onScroll: m,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
$e.propTypes = {
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
$e.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100
};
const Ue = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: r = 0,
  pageSize: u = "A4",
  zoomLevel: t = 100,
  canZoomIn: i = !0,
  canZoomOut: c = !0,
  onNavigate: a,
  onAddPage: d,
  onDeletePage: m,
  onPageSizeChange: h,
  onZoomIn: E,
  onZoomOut: g,
  onZoomReset: w
} = {}) => {
  const P = Math.max(e?.length || 0, 1), I = (k) => {
    a && a(k);
  }, O = () => {
    d && d();
  }, B = (k) => {
    if (P <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(k);
  }, b = (k) => {
    h && h(k);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ o.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ o.jsx(Sn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: u,
          onChange: (k) => b(k.target.value),
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
          onClick: g,
          disabled: !c,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ o.jsx(Kn, { size: 14 })
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: "zoom-reset-button",
          onClick: w,
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
          children: /* @__PURE__ */ o.jsx(Vn, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((k, R) => /* @__PURE__ */ o.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${R === r ? "active" : ""}`,
          onClick: () => I(R),
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
      P > 1 && /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: ($) => {
            $.stopPropagation(), B(R);
          },
          "aria-label": `Delete page ${R + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ o.jsx(Yn, { size: 14 })
        }
      )
    ] }, k.id || `page-${R}`)) }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: O,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ o.jsx(_n, { size: 16 }),
          /* @__PURE__ */ o.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Ue.propTypes = {
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
Ue.defaultProps = {
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
const tr = xe.memo(Ue), it = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
}, nr = 50, rr = 50, st = 50, or = 100, ar = 500, He = De(({
  pageManagerComponent: e = null,
  onNavigatePage: r,
  onAddPage: u,
  onDeletePage: t,
  onPageSizeChange: i,
  onChange: c,
  showSidebar: a = !0,
  showToolbar: d = !0,
  showPageManager: m = !0
}, h) => {
  const E = dt(), g = ft(), { pageSize: w, continuousContent: P, pageBoundaries: I, activePage: O, zoomLevel: B } = E, b = oe(null), k = oe(null), { currentFormat: R, formatText: $ } = Bt(), {
    checkAndUpdateBoundaries: s,
    getCurrentPage: v,
    scrollToPage: _,
    updateBoundaries: j,
    triggerAutoReflow: N,
    removePageAndContent: D,
    insertPageBreakAtBoundary: G
  } = Zt(w, k, B), W = Ee(() => it[w] || it.A4, [w]), [te, Q] = be(!1), q = oe(null), M = oe(!1), L = oe(!1), ee = oe(!1), Y = oe(P);
  ae(() => {
    if (k.current) {
      if (!ee.current) {
        k.current.innerHTML = P, ee.current = !0, Y.current = P;
        const l = setTimeout(() => {
          j();
        }, nr);
        return () => clearTimeout(l);
      }
      if (Y.current !== P) {
        if (k.current.innerHTML !== P) {
          k.current.innerHTML = P;
          const J = setTimeout(() => {
            if (j(), M.current) {
              M.current = !1;
              const re = Math.max(0, I.length - 1);
              g.setActivePage(re), setTimeout(() => {
                _(re, b);
              }, st);
            }
          }, rr);
          return Y.current = P, () => clearTimeout(J);
        }
        Y.current = P;
      }
    }
  }, [P, j, I.length, g, _]), ae(() => {
    c && ee.current && c(P);
  }, [P, c]), Tt(h, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => P,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => P.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (l) => {
      g.updateContinuousContent(l), k.current && (k.current.innerHTML = l, setTimeout(() => {
        j();
      }, 50));
    }
  }), [P, g, j]), ae(() => {
    const l = setTimeout(() => {
      k.current && k.current.focus();
    }, 200);
    return () => clearTimeout(l);
  }, []);
  const f = X((l) => {
    const J = l.currentTarget.innerHTML;
    g.updateContinuousContent(J), s(), N(200);
    const re = v(b);
    re !== O && g.setActivePage(re);
  }, [s, g, v, O, N, b]), n = X((l) => {
    g.updatePageSize(l), j({ pageSize: l }), i && i(l);
  }, [g, j, i]), p = X((l) => {
    l < 0 || l >= I.length || (L.current = !0, g.setActivePage(l), _(l, b), setTimeout(() => {
      L.current = !1;
    }, ar), r && r(l));
  }, [g, _, r, I.length]), A = X(() => {
    const l = I.length + 1;
    G(l) && (M.current = !0, setTimeout(() => {
      if (M.current) {
        M.current = !1;
        const re = Math.max(0, I.length - 1);
        g.setActivePage(re), setTimeout(() => {
          _(re, b);
        }, st);
      }
    }, 100)), u && u();
  }, [I.length, G, g, _, u]), x = X(() => {
    const l = window.getSelection();
    if (l && l.rangeCount > 0) {
      if (!k?.current) return;
      const fe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${k.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, fe), setTimeout(() => {
        j();
        const Et = v(b);
        g.setActivePage(Et);
      }, 150);
    }
  }, [j, v, g, b]), z = X((l) => {
    if (I.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    D(l) && (g.setActivePage(0), t && t(l));
  }, [I.length, D, g, t]), C = X(() => {
    g.zoomIn();
  }, [g]), y = X(() => {
    g.zoomOut();
  }, [g]), S = X(() => {
    g.resetZoom();
  }, [g]);
  ae(() => {
    const l = (J) => {
      if (!(!k.current && !b.current) && (J.ctrlKey || J.metaKey))
        switch (J.key) {
          case "+":
          case "=":
            J.preventDefault(), C();
            break;
          case "-":
          case "_":
            J.preventDefault(), y();
            break;
          case "0":
            J.preventDefault(), S();
            break;
        }
    };
    return window.addEventListener("keydown", l), () => {
      window.removeEventListener("keydown", l);
    };
  }, [C, y, S]);
  const U = X(() => {
    !b.current || !k.current || L.current || (q.current && clearTimeout(q.current), q.current = setTimeout(() => {
      if (L.current) {
        q.current = null;
        return;
      }
      const l = v(b);
      l !== O && l >= 0 && g.setActivePage(l), q.current = null;
    }, or));
  }, [v, O, g]), Z = Ee(() => {
    if (!P) return 0;
    const J = P.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return J ? J.length : 0;
  }, [P]), ne = I.length || 1;
  return ae(() => () => {
    q.current && clearTimeout(q.current);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ o.jsx(
      Be,
      {
        currentFormat: R,
        onFormatText: $,
        onAddPageBreak: x
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "editor-container", children: [
      a && /* @__PURE__ */ o.jsx(
        Jn,
        {
          editorView: null,
          isCollapsed: te,
          onToggle: () => Q((l) => !l),
          wordCount: Z,
          pageCount: ne
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: b,
          onScroll: U,
          children: /* @__PURE__ */ o.jsx(
            $e,
            {
              content: P,
              dimensions: W,
              pageSize: w,
              pageBoundaries: I,
              editorRef: k,
              onInput: f,
              onClick: () => k.current?.focus(),
              zoomLevel: B
            }
          )
        }
      ),
      m && /* @__PURE__ */ o.jsx("div", { className: "page-manager-sidebar", children: e ? xe.cloneElement(e, {
        onNavigate: p,
        onAddPage: A,
        onDeletePage: z,
        onPageSizeChange: n,
        zoomLevel: B,
        canZoomIn: je(B),
        canZoomOut: Ne(B),
        onZoomIn: C,
        onZoomOut: y,
        onZoomReset: S
      }) : /* @__PURE__ */ o.jsx(
        tr,
        {
          pageBoundaries: I,
          activePage: O,
          pageSize: w,
          zoomLevel: B,
          canZoomIn: je(B),
          canZoomOut: Ne(B),
          onNavigate: p,
          onAddPage: A,
          onDeletePage: z,
          onPageSizeChange: n,
          onZoomIn: C,
          onZoomOut: y,
          onZoomReset: S
        }
      ) })
    ] })
  ] });
});
He.displayName = "HtmlEditor";
He.propTypes = {
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
He.defaultProps = {
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
class yt extends xe.Component {
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
  componentDidCatch(r, u) {
    console.error("[ErrorBoundary] Caught error:", r), console.error("[ErrorBoundary] Error info:", u), this.setState({
      error: r,
      errorInfo: u
    }), this.props.onError && this.props.onError(r, u);
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
yt.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
yt.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const pr = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
};
export {
  cr as DocumentProvider,
  Be as EditorToolbar,
  yt as ErrorBoundary,
  He as HtmlEditor,
  pr as PAGE_DIMENSIONS,
  tr as PageManager,
  $e as PageView,
  Jn as Sidebar,
  dr as clearImages,
  ur as deleteImage,
  fr as getAllImageKeys,
  lr as getImage,
  er as logger,
  Qn as saveImage,
  Zt as useContinuousReflow,
  ut as useDocument,
  ft as useDocumentActions,
  dt as useDocumentState,
  Bt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
