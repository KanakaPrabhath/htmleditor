import be, { createContext as _t, useContext as kt, useReducer as Ct, useMemo as ye, useState as Ee, useCallback as Z, useRef as J, useEffect as oe, forwardRef as Ie, createElement as Ce, useImperativeHandle as St } from "react";
import { v4 as De } from "uuid";
function wt(e) {
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
var He;
function Ot() {
  if (He) return ce;
  He = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(t, r, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), r.key !== void 0 && (i = "" + r.key), "key" in r) {
      s = {};
      for (var l in r)
        l !== "key" && (s[l] = r[l]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: t,
      key: i,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return ce.Fragment = n, ce.jsx = a, ce.jsxs = a, ce;
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
function Rt() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === ne ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case w:
          return "Fragment";
        case C:
          return "Profiler";
        case b:
          return "StrictMode";
        case $:
          return "Suspense";
        case H:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case _:
            return "Portal";
          case O:
            return o.displayName || "Context";
          case E:
            return (o._context.displayName || "Context") + ".Consumer";
          case g:
            var y = o.render;
            return o = o.displayName, o || (o = y.displayName || y.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case G:
            return y = o.displayName || null, y !== null ? y : e(o.type) || "Memo";
          case K:
            y = o._payload, o = o._init;
            try {
              return e(o(y));
            } catch {
            }
        }
      return null;
    }
    function n(o) {
      return "" + o;
    }
    function a(o) {
      try {
        n(o);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var A = y.error, P = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return A.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), n(o);
      }
    }
    function t(o) {
      if (o === w) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === K)
        return "<...>";
      try {
        var y = e(o);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var o = re.A;
      return o === null ? null : o.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(o) {
      if (ae.call(o, "key")) {
        var y = Object.getOwnPropertyDescriptor(o, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, y) {
      function A() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: A,
        configurable: !0
      });
    }
    function m() {
      var o = e(this.type);
      return V[o] || (V[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function p(o, y, A, P, N, R) {
      var k = A.ref;
      return o = {
        $$typeof: S,
        type: o,
        key: y,
        props: A,
        _owner: P
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function h(o, y, A, P, N, R) {
      var k = y.children;
      if (k !== void 0)
        if (P)
          if (te(k)) {
            for (P = 0; P < k.length; P++)
              d(k[P]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(k);
      if (ae.call(y, "key")) {
        k = e(o);
        var j = Object.keys(y).filter(function(I) {
          return I !== "key";
        });
        P = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", f[k + P] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          k,
          j,
          k
        ), f[k + P] = !0);
      }
      if (k = null, A !== void 0 && (a(A), k = "" + A), i(y) && (a(y.key), k = "" + y.key), "key" in y) {
        A = {};
        for (var D in y)
          D !== "key" && (A[D] = y[D]);
      } else A = y;
      return k && l(
        A,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), p(
        o,
        k,
        A,
        r(),
        N,
        R
      );
    }
    function d(o) {
      x(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === K && (o._payload.status === "fulfilled" ? x(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function x(o) {
      return typeof o == "object" && o !== null && o.$$typeof === S;
    }
    var v = be, S = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), O = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), re = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = Object.prototype.hasOwnProperty, te = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var q, V = {}, Q = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), ee = F(t(s)), f = {};
    le.Fragment = w, le.jsx = function(o, y, A) {
      var P = 1e4 > re.recentlyCreatedOwnerStacks++;
      return h(
        o,
        y,
        A,
        !1,
        P ? Error("react-stack-top-frame") : Q,
        P ? F(t(o)) : ee
      );
    }, le.jsxs = function(o, y, A) {
      var P = 1e4 > re.recentlyCreatedOwnerStacks++;
      return h(
        o,
        y,
        A,
        !0,
        P ? Error("react-stack-top-frame") : Q,
        P ? F(t(o)) : ee
      );
    };
  })()), le;
}
var qe;
function jt() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? pe.exports = Ot() : pe.exports = Rt()), pe.exports;
}
var c = jt();
const Se = 100, we = 50, Oe = 200, Ge = 5, Re = (e) => e < Oe, je = (e) => e > we, de = "A4", ie = "<p><br></p>", Nt = "continuous", Ne = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
}, ue = (e, n = de) => ({
  id: De(),
  index: e,
  size: n,
  content: ie,
  images: [],
  isBreakPoint: !1
}), me = (e) => typeof e != "string" || e.trim() === "" ? ie : e, dt = (e, n = de) => (e.length > 0 ? e : [ue(0, n)]).map((t, r) => ({
  id: t.id || De(),
  index: r,
  size: t.size || n,
  content: me(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), Mt = (e = de) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (Ne[e] || Ne.A4).height
}], Me = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || de, t = dt(e.pages || [ue(0, a)], a);
  return {
    id: De(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    editorMode: e.editorMode || Nt,
    continuousContent: e.continuousContent || ie,
    pageBoundaries: e.pageBoundaries || Mt(a),
    zoomLevel: e.zoomLevel || Se
  };
}, M = {
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
}, It = (e, n) => {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  switch (n.type) {
    case M.INITIALIZE_DOCUMENT: {
      const { initialContent: t = ie, pageSize: r = de } = n.payload || {}, s = { ...ue(0, r), content: me(t) };
      return Me({
        title: e.title,
        pageSize: r,
        pages: [s]
      });
    }
    case M.UPDATE_TITLE:
      return {
        ...e,
        title: n.payload,
        updatedAt: a
      };
    case M.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: r } = n.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[t] = {
        ...s[t],
        content: me(r)
      }, {
        ...e,
        pages: s,
        updatedAt: a
      };
    }
    case M.UPDATE_PAGES: {
      const t = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, r = dt(t.pages || [], e.pageSize), s = Array.isArray(t.pageBreaks) ? t.pageBreaks : r.slice(0, -1).map((i, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pages: r,
        activePage: Math.min(e.activePage, r.length - 1),
        pageBreaks: s,
        totalPages: r.length,
        updatedAt: a
      };
    }
    case M.ADD_PAGE: {
      const t = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length, r = [...e.pages];
      r.splice(t, 0, ue(t, e.pageSize));
      const s = r.map((l, m) => ({
        ...l,
        index: m,
        size: e.pageSize
      })), i = s.slice(0, -1).map((l, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: t,
        pageBreaks: i,
        totalPages: s.length,
        updatedAt: a
      };
    }
    case M.DELETE_PAGE: {
      const t = n.payload;
      if (e.pages.length <= 1)
        return e;
      const r = [...e.pages];
      r.splice(t, 1);
      const s = r.map((m, p) => ({
        ...m,
        index: p,
        size: e.pageSize
      }));
      let i = e.activePage;
      i >= s.length ? i = s.length - 1 : t <= i && i > 0 && (i -= 1);
      const l = s.slice(0, -1).map((m, p) => ({
        id: `auto-break-${p}`,
        pageNumber: p + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: i,
        pageBreaks: l,
        totalPages: s.length,
        updatedAt: a
      };
    }
    case M.SET_ACTIVE_PAGE: {
      const t = n.payload;
      if (t === e.activePage)
        return e;
      const r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t < 0 || t >= r ? e : {
        ...e,
        activePage: t,
        updatedAt: a
      };
    }
    case M.UPDATE_PAGE_SIZE: {
      const t = n.payload;
      if (t === e.pageSize)
        return e;
      if (!Ne[t])
        return console.warn(`Invalid page size: ${t}`), e;
      const r = e.pages.map((i, l) => ({
        ...i,
        index: l,
        size: t
      })), s = r.slice(0, -1).map((i, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pageSize: t,
        pages: r,
        pageBreaks: s,
        updatedAt: a
      };
    }
    case M.RESET_DOCUMENT:
      return Me();
    case M.UPDATE_CONTINUOUS_CONTENT: {
      const t = me(n.payload);
      return t === e.continuousContent ? e : {
        ...e,
        continuousContent: t,
        updatedAt: a
      };
    }
    case M.UPDATE_PAGE_BOUNDARIES: {
      const t = Array.isArray(n.payload) ? n.payload : [];
      if (t.length === e.pageBoundaries.length && t.length > 0 && t[0].id === e.pageBoundaries[0]?.id && t[t.length - 1].id === e.pageBoundaries[t.length - 1]?.id)
        return e;
      const r = e.activePage >= t.length ? Math.max(0, t.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: t,
        totalPages: t.length,
        activePage: r,
        updatedAt: a
      };
    }
    case M.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: r } = n.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let i = e.continuousContent;
      if (t === "end")
        i = i + s + "<p><br></p>";
      else if (typeof t == "number") {
        const l = i.substring(0, t), m = i.substring(t);
        i = l + s + m;
      } else if (typeof r == "number" && typeof document < "u") {
        const l = document.createElement("div");
        l.innerHTML = i;
        const m = l.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && m.length === 0)
          i = i + s + "<p><br></p>";
        else if (r < m.length) {
          const p = m[r], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", p.parentNode.insertBefore(h, p.nextSibling), h.parentNode.insertBefore(d, h.nextSibling), i = l.innerHTML;
        } else
          i = i + s + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: i,
        updatedAt: a
      };
    }
    case M.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = n.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const r = document.createElement("div");
      r.innerHTML = e.continuousContent;
      const s = r.querySelectorAll('page-break, [data-page-break="true"]');
      return s[t] && s[t].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, m) => {
        l.setAttribute("data-page-number", String(m + 2));
      }), {
        ...e,
        continuousContent: r.innerHTML,
        updatedAt: a
      };
    }
    case M.SET_EDITOR_MODE: {
      const t = n.payload;
      if (t === e.editorMode)
        return e;
      let r = e.continuousContent, s = e.pages;
      return t === "continuous" ? r = e.pages.map((l) => l.content).filter((l) => l && l !== ie).join(`
`) || ie : e.continuousContent && e.continuousContent !== ie && (s = [{ ...ue(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: t,
        continuousContent: r,
        pages: s,
        updatedAt: a
      };
    }
    case M.SET_ZOOM_LEVEL: {
      const t = n.payload;
      return t < we || t > Oe ? (console.warn(`Invalid zoom level: ${t}. Must be between ${we} and ${Oe}.`), e) : t === e.zoomLevel ? e : {
        ...e,
        zoomLevel: t,
        updatedAt: a
      };
    }
    case M.ZOOM_IN: {
      if (!Re(e.zoomLevel))
        return e;
      const t = e.zoomLevel + Ge;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: a
      };
    }
    case M.ZOOM_OUT: {
      if (!je(e.zoomLevel))
        return e;
      const t = e.zoomLevel - Ge;
      return {
        ...e,
        zoomLevel: t,
        updatedAt: a
      };
    }
    case M.RESET_ZOOM:
      return e.zoomLevel === Se ? e : {
        ...e,
        zoomLevel: Se,
        updatedAt: a
      };
    default:
      return e;
  }
}, ft = _t(null), _r = ({ children: e, initialState: n = {} }) => {
  const [a, t] = Ct(It, Me(n)), r = ye(() => ({
    initializeDocument: (i) => t({ type: M.INITIALIZE_DOCUMENT, payload: i }),
    updateTitle: (i) => t({ type: M.UPDATE_TITLE, payload: i }),
    updatePageContent: (i) => t({ type: M.UPDATE_PAGE_CONTENT, payload: i }),
    updatePages: (i) => t({ type: M.UPDATE_PAGES, payload: i }),
    addPage: (i) => t({ type: M.ADD_PAGE, payload: i }),
    deletePage: (i) => t({ type: M.DELETE_PAGE, payload: i }),
    setActivePage: (i) => t({ type: M.SET_ACTIVE_PAGE, payload: i }),
    updatePageSize: (i) => t({ type: M.UPDATE_PAGE_SIZE, payload: i }),
    resetDocument: () => t({ type: M.RESET_DOCUMENT }),
    updateContinuousContent: (i) => t({ type: M.UPDATE_CONTINUOUS_CONTENT, payload: i }),
    updatePageBoundaries: (i) => t({ type: M.UPDATE_PAGE_BOUNDARIES, payload: i }),
    addPageBreak: (i) => t({ type: M.ADD_PAGE_BREAK, payload: i }),
    removePageBreak: (i) => t({ type: M.REMOVE_PAGE_BREAK, payload: i }),
    setEditorMode: (i) => t({ type: M.SET_EDITOR_MODE, payload: i }),
    insertPageAt: (i) => t({ type: M.INSERT_PAGE_AT, payload: i }),
    movePageTo: (i) => t({ type: M.MOVE_PAGE_TO, payload: i }),
    duplicatePage: (i) => t({ type: M.DUPLICATE_PAGE, payload: i }),
    setZoomLevel: (i) => t({ type: M.SET_ZOOM_LEVEL, payload: i }),
    zoomIn: () => t({ type: M.ZOOM_IN }),
    zoomOut: () => t({ type: M.ZOOM_OUT }),
    resetZoom: () => t({ type: M.RESET_ZOOM })
  }), []), s = ye(() => ({
    state: a,
    actions: r,
    dispatch: t
  }), [a, r]);
  return /* @__PURE__ */ c.jsx(ft.Provider, { value: s, children: e });
}, pt = () => {
  const e = kt(ft);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, gt = () => {
  const { state: e } = pt();
  return e;
}, ht = () => {
  const { actions: e } = pt();
  return e;
};
var ge = { exports: {} }, he = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Dt() {
  if (Ye) return L;
  Ye = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var $ = g.$$typeof;
      switch ($) {
        case n:
          switch (g = g.type, g) {
            case m:
            case p:
            case t:
            case s:
            case r:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case h:
                case S:
                case v:
                case i:
                  return g;
                default:
                  return $;
              }
          }
        case a:
          return $;
      }
    }
  }
  function O(g) {
    return E(g) === p;
  }
  return L.AsyncMode = m, L.ConcurrentMode = p, L.ContextConsumer = l, L.ContextProvider = i, L.Element = n, L.ForwardRef = h, L.Fragment = t, L.Lazy = S, L.Memo = v, L.Portal = a, L.Profiler = s, L.StrictMode = r, L.Suspense = d, L.isAsyncMode = function(g) {
    return O(g) || E(g) === m;
  }, L.isConcurrentMode = O, L.isContextConsumer = function(g) {
    return E(g) === l;
  }, L.isContextProvider = function(g) {
    return E(g) === i;
  }, L.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === n;
  }, L.isForwardRef = function(g) {
    return E(g) === h;
  }, L.isFragment = function(g) {
    return E(g) === t;
  }, L.isLazy = function(g) {
    return E(g) === S;
  }, L.isMemo = function(g) {
    return E(g) === v;
  }, L.isPortal = function(g) {
    return E(g) === a;
  }, L.isProfiler = function(g) {
    return E(g) === s;
  }, L.isStrictMode = function(g) {
    return E(g) === r;
  }, L.isSuspense = function(g) {
    return E(g) === d;
  }, L.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === p || g === s || g === r || g === d || g === x || typeof g == "object" && g !== null && (g.$$typeof === S || g.$$typeof === v || g.$$typeof === i || g.$$typeof === l || g.$$typeof === h || g.$$typeof === w || g.$$typeof === b || g.$$typeof === C || g.$$typeof === _);
  }, L.typeOf = E, L;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Lt() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function E(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === t || u === p || u === s || u === r || u === d || u === x || typeof u == "object" && u !== null && (u.$$typeof === S || u.$$typeof === v || u.$$typeof === i || u.$$typeof === l || u.$$typeof === h || u.$$typeof === w || u.$$typeof === b || u.$$typeof === C || u.$$typeof === _);
    }
    function O(u) {
      if (typeof u == "object" && u !== null) {
        var U = u.$$typeof;
        switch (U) {
          case n:
            var W = u.type;
            switch (W) {
              case m:
              case p:
              case t:
              case s:
              case r:
              case d:
                return W;
              default:
                var fe = W && W.$$typeof;
                switch (fe) {
                  case l:
                  case h:
                  case S:
                  case v:
                  case i:
                    return fe;
                  default:
                    return U;
                }
            }
          case a:
            return U;
        }
      }
    }
    var g = m, $ = p, H = l, G = i, K = n, X = h, ne = t, re = S, ae = v, te = a, F = s, q = r, V = d, Q = !1;
    function ee(u) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(u) || O(u) === m;
    }
    function f(u) {
      return O(u) === p;
    }
    function o(u) {
      return O(u) === l;
    }
    function y(u) {
      return O(u) === i;
    }
    function A(u) {
      return typeof u == "object" && u !== null && u.$$typeof === n;
    }
    function P(u) {
      return O(u) === h;
    }
    function N(u) {
      return O(u) === t;
    }
    function R(u) {
      return O(u) === S;
    }
    function k(u) {
      return O(u) === v;
    }
    function j(u) {
      return O(u) === a;
    }
    function D(u) {
      return O(u) === s;
    }
    function I(u) {
      return O(u) === r;
    }
    function Y(u) {
      return O(u) === d;
    }
    z.AsyncMode = g, z.ConcurrentMode = $, z.ContextConsumer = H, z.ContextProvider = G, z.Element = K, z.ForwardRef = X, z.Fragment = ne, z.Lazy = re, z.Memo = ae, z.Portal = te, z.Profiler = F, z.StrictMode = q, z.Suspense = V, z.isAsyncMode = ee, z.isConcurrentMode = f, z.isContextConsumer = o, z.isContextProvider = y, z.isElement = A, z.isForwardRef = P, z.isFragment = N, z.isLazy = R, z.isMemo = k, z.isPortal = j, z.isProfiler = D, z.isStrictMode = I, z.isSuspense = Y, z.isValidElementType = E, z.typeOf = O;
  })()), z;
}
var Ve;
function mt() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? he.exports = Dt() : he.exports = Lt()), he.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, We;
function zt() {
  if (We) return xe;
  We = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function t(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, l = 0; l < 10; l++)
        i["_" + String.fromCharCode(l)] = l;
      var m = Object.getOwnPropertyNames(i).map(function(h) {
        return i[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = r() ? Object.assign : function(s, i) {
    for (var l, m = t(s), p, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var d in l)
        n.call(l, d) && (m[d] = l[d]);
      if (e) {
        p = e(l);
        for (var x = 0; x < p.length; x++)
          a.call(l, p[x]) && (m[p[x]] = l[p[x]]);
      }
    }
    return m;
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
function yt() {
  return Je || (Je = 1, Ae = Function.call.bind(Object.prototype.hasOwnProperty)), Ae;
}
var Pe, Xe;
function Bt() {
  if (Xe) return Pe;
  Xe = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Le(), a = {}, t = /* @__PURE__ */ yt();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function r(s, i, l, m, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (t(s, h)) {
          var d;
          try {
            if (typeof s[h] != "function") {
              var x = Error(
                (m || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            d = s[h](i, h, m, l, null, n);
          } catch (S) {
            d = S;
          }
          if (d && !(d instanceof Error) && e(
            (m || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in a)) {
            a[d.message] = !0;
            var v = p ? p() : "";
            e(
              "Failed " + l + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (a = {});
  }, Pe = r, Pe;
}
var _e, Qe;
function $t() {
  if (Qe) return _e;
  Qe = 1;
  var e = mt(), n = zt(), a = /* @__PURE__ */ Le(), t = /* @__PURE__ */ yt(), r = /* @__PURE__ */ Bt(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var m = "Warning: " + l;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return _e = function(l, m) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function d(f) {
      var o = f && (p && f[p] || f[h]);
      if (typeof o == "function")
        return o;
    }
    var x = "<<anonymous>>", v = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: C(),
      arrayOf: E,
      element: O(),
      elementType: g(),
      instanceOf: $,
      node: X(),
      objectOf: G,
      oneOf: H,
      oneOfType: K,
      shape: re,
      exact: ae
    };
    function S(f, o) {
      return f === o ? f !== 0 || 1 / f === 1 / o : f !== f && o !== o;
    }
    function _(f, o) {
      this.message = f, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function w(f) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, y = 0;
      function A(N, R, k, j, D, I, Y) {
        if (j = j || x, I = I || k, Y !== a) {
          if (m) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var U = j + ":" + k;
            !o[U] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + I + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[U] = !0, y++);
          }
        }
        return R[k] == null ? N ? R[k] === null ? new _("The " + D + " `" + I + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new _("The " + D + " `" + I + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : f(R, k, j, D, I);
      }
      var P = A.bind(null, !1);
      return P.isRequired = A.bind(null, !0), P;
    }
    function b(f) {
      function o(y, A, P, N, R, k) {
        var j = y[A], D = q(j);
        if (D !== f) {
          var I = V(j);
          return new _(
            "Invalid " + N + " `" + R + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return w(o);
    }
    function C() {
      return w(i);
    }
    function E(f) {
      function o(y, A, P, N, R) {
        if (typeof f != "function")
          return new _("Property `" + R + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var k = y[A];
        if (!Array.isArray(k)) {
          var j = q(k);
          return new _("Invalid " + N + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected an array."));
        }
        for (var D = 0; D < k.length; D++) {
          var I = f(k, D, P, N, R + "[" + D + "]", a);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return w(o);
    }
    function O() {
      function f(o, y, A, P, N) {
        var R = o[y];
        if (!l(R)) {
          var k = q(R);
          return new _("Invalid " + P + " `" + N + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(f);
    }
    function g() {
      function f(o, y, A, P, N) {
        var R = o[y];
        if (!e.isValidElementType(R)) {
          var k = q(R);
          return new _("Invalid " + P + " `" + N + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(f);
    }
    function $(f) {
      function o(y, A, P, N, R) {
        if (!(y[A] instanceof f)) {
          var k = f.name || x, j = ee(y[A]);
          return new _("Invalid " + N + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return w(o);
    }
    function H(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function o(y, A, P, N, R) {
        for (var k = y[A], j = 0; j < f.length; j++)
          if (S(k, f[j]))
            return null;
        var D = JSON.stringify(f, function(Y, u) {
          var U = V(u);
          return U === "symbol" ? String(u) : u;
        });
        return new _("Invalid " + N + " `" + R + "` of value `" + String(k) + "` " + ("supplied to `" + P + "`, expected one of " + D + "."));
      }
      return w(o);
    }
    function G(f) {
      function o(y, A, P, N, R) {
        if (typeof f != "function")
          return new _("Property `" + R + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var k = y[A], j = q(k);
        if (j !== "object")
          return new _("Invalid " + N + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected an object."));
        for (var D in k)
          if (t(k, D)) {
            var I = f(k, D, P, N, R + "." + D, a);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return w(o);
    }
    function K(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var o = 0; o < f.length; o++) {
        var y = f[o];
        if (typeof y != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(y) + " at index " + o + "."
          ), i;
      }
      function A(P, N, R, k, j) {
        for (var D = [], I = 0; I < f.length; I++) {
          var Y = f[I], u = Y(P, N, R, k, j, a);
          if (u == null)
            return null;
          u.data && t(u.data, "expectedType") && D.push(u.data.expectedType);
        }
        var U = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new _("Invalid " + k + " `" + j + "` supplied to " + ("`" + R + "`" + U + "."));
      }
      return w(A);
    }
    function X() {
      function f(o, y, A, P, N) {
        return te(o[y]) ? null : new _("Invalid " + P + " `" + N + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return w(f);
    }
    function ne(f, o, y, A, P) {
      return new _(
        (f || "React class") + ": " + o + " type `" + y + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function re(f) {
      function o(y, A, P, N, R) {
        var k = y[A], j = q(k);
        if (j !== "object")
          return new _("Invalid " + N + " `" + R + "` of type `" + j + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var D in f) {
          var I = f[D];
          if (typeof I != "function")
            return ne(P, N, R, D, V(I));
          var Y = I(k, D, P, N, R + "." + D, a);
          if (Y)
            return Y;
        }
        return null;
      }
      return w(o);
    }
    function ae(f) {
      function o(y, A, P, N, R) {
        var k = y[A], j = q(k);
        if (j !== "object")
          return new _("Invalid " + N + " `" + R + "` of type `" + j + "` " + ("supplied to `" + P + "`, expected `object`."));
        var D = n({}, y[A], f);
        for (var I in D) {
          var Y = f[I];
          if (t(f, I) && typeof Y != "function")
            return ne(P, N, R, I, V(Y));
          if (!Y)
            return new _(
              "Invalid " + N + " `" + R + "` key `" + I + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(y[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var u = Y(k, I, P, N, R + "." + I, a);
          if (u)
            return u;
        }
        return null;
      }
      return w(o);
    }
    function te(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(te);
          if (f === null || l(f))
            return !0;
          var o = d(f);
          if (o) {
            var y = o.call(f), A;
            if (o !== f.entries) {
              for (; !(A = y.next()).done; )
                if (!te(A.value))
                  return !1;
            } else
              for (; !(A = y.next()).done; ) {
                var P = A.value;
                if (P && !te(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function F(f, o) {
      return f === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function q(f) {
      var o = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : F(o, f) ? "symbol" : o;
    }
    function V(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var o = q(f);
      if (o === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function Q(f) {
      var o = V(f);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function ee(f) {
      return !f.constructor || !f.constructor.name ? x : f.constructor.name;
    }
    return v.checkPropTypes = r, v.resetWarningCache = r.resetWarningCache, v.PropTypes = v, v;
  }, _e;
}
var ke, et;
function Ut() {
  if (et) return ke;
  et = 1;
  var e = /* @__PURE__ */ Le();
  function n() {
  }
  function a() {
  }
  return a.resetWarningCache = n, ke = function() {
    function t(i, l, m, p, h, d) {
      if (d !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    t.isRequired = t;
    function r() {
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
      arrayOf: r,
      element: t,
      elementType: t,
      instanceOf: r,
      node: t,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: a,
      resetWarningCache: n
    };
    return s.PropTypes = s, s;
  }, ke;
}
var tt;
function Ht() {
  if (tt) return ge.exports;
  if (tt = 1, process.env.NODE_ENV !== "production") {
    var e = mt(), n = !0;
    ge.exports = /* @__PURE__ */ $t()(e.isElement, n);
  } else
    ge.exports = /* @__PURE__ */ Ut()();
  return ge.exports;
}
var Zt = /* @__PURE__ */ Ht();
const T = /* @__PURE__ */ wt(Zt), qt = {
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
}, Gt = () => {
  const [e, n] = Ee(nt), a = Z((i) => {
    n((l) => ({
      ...l,
      alignLeft: i === "left",
      alignCenter: i === "center",
      alignRight: i === "right",
      alignJustify: i === "justify"
    }));
  }, []), t = Z((i) => {
    try {
      const l = window.getSelection();
      if (!l || l.rangeCount === 0)
        return !1;
      const m = l.getRangeAt(0);
      if (!m.toString())
        return n((h) => ({ ...h, fontSize: i })), !1;
      try {
        const h = document.createElement("span");
        h.style.fontSize = i;
        const d = m.extractContents();
        return h.appendChild(d), m.insertNode(h), m.selectNodeContents(h), l.removeAllRanges(), l.addRange(m), n((x) => ({ ...x, fontSize: i })), !0;
      } catch {
        const d = qt[i] || "2";
        return document.execCommand("fontSize", !1, d), n((x) => ({ ...x, fontSize: i })), !0;
      }
    } catch (l) {
      return console.warn("[useFormatting] Font size change failed:", l), !1;
    }
  }, []), r = Z((i, l = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (i === "fontSize") {
        t(l);
        return;
      }
      switch (document.execCommand(i, !1, l) || console.warn(`[useFormatting] Command "${i}" failed`), i) {
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
          a("left");
          break;
        case "justifyCenter":
          a("center");
          break;
        case "justifyRight":
          a("right");
          break;
        case "justifyFull":
          a("justify");
          break;
        case "fontName":
          n((p) => ({ ...p, fontFamily: l }));
          break;
        case "formatBlock":
          n((p) => ({ ...p, headingLevel: l }));
          break;
        default:
          break;
      }
    } catch (m) {
      console.warn(`[useFormatting] Error executing command "${i}":`, m);
    }
  }, [t, a]), s = Z(() => {
    n(nt);
  }, []);
  return {
    currentFormat: e,
    formatText: r,
    resetFormat: s
  };
}, rt = {
  A4: {
    name: "A4",
    width: 595,
    // 210mm = 210 * 72 / 25.4 ≈ 595px
    height: 842,
    // 297mm = 297 * 72 / 25.4 ≈ 842px
    widthMm: 210,
    heightMm: 297,
    widthIn: 8.27,
    heightIn: 11.69
  },
  Letter: {
    name: "Letter",
    width: 612,
    // 8.5 inches = 8.5 * 72 = 612px
    height: 792,
    // 11 inches = 11 * 72 = 792px
    widthMm: 216,
    heightMm: 279,
    widthIn: 8.5,
    heightIn: 11
  },
  Legal: {
    name: "Legal",
    width: 612,
    // 8.5 inches = 8.5 * 72 = 612px
    height: 1008,
    // 14 inches = 14 * 72 = 1008px
    widthMm: 216,
    heightMm: 356,
    widthIn: 8.5,
    heightIn: 14
  }
}, ot = {
  top: 40,
  bottom: 40
}, se = 'page-break, [data-page-break="true"]', Et = (e) => rt[e] || rt.A4, Yt = (e, n = {}) => {
  if (!e || typeof document > "u")
    return [];
  const a = n.pageSize || "A4", t = Et(a), r = e.querySelectorAll(se), s = [];
  s.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: t.height
  });
  const i = e.getBoundingClientRect(), l = e.scrollTop;
  return r.forEach((m, p) => {
    const d = m.getBoundingClientRect().top - i.top + l;
    s.push({
      id: `page-${p + 1}`,
      pageNumber: p + 2,
      top: d,
      height: t.height
    });
  }), s;
}, vt = (e, n = 100) => {
  const t = Et(e).height - ot.top - ot.bottom, r = n / 100;
  return t / r;
}, Ft = (e, n) => {
  if (!e || !n)
    return 0;
  try {
    const a = n.querySelectorAll(se);
    if (a.length === 0)
      return 0;
    const t = e.getBoundingClientRect(), r = t.top + t.height / 2;
    for (let s = a.length - 1; s >= 0; s--)
      if (a[s].getBoundingClientRect().top < r)
        return s + 1;
    return 0;
  } catch (a) {
    return console.warn("[getCurrentPage] Failed to calculate page:", a), 0;
  }
}, at = (e) => {
  if (!e)
    return [];
  const n = Array.from(e.children);
  if (n.length === 0)
    return [];
  let a = [], t = [];
  for (const r of n)
    r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true" ? t.length > 0 && (a.push(t), t = []) : t.push(r);
  return t.length > 0 && a.push(t), a.length === 0 && n.length > 0 && a.push(n.filter(
    (r) => !(r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true")
  )), a;
}, Vt = (e, n) => {
  if (!e)
    return !1;
  try {
    const a = document.createElement("page-break");
    return a.setAttribute("data-page-break", "true"), a.setAttribute("contenteditable", "false"), a.setAttribute("data-page-number", n || "2"), e.parentNode.insertBefore(a, e), !0;
  } catch (a) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", a), !1;
  }
}, Wt = (e, n, a, t, r, s) => {
  if (!e)
    return !1;
  try {
    const l = vt(a, t) * (n - 1), m = Array.from(e.children);
    let p = 0, h = null;
    for (let d = 0; d < m.length; d++) {
      const x = m[d];
      if (x.tagName === "PAGE-BREAK" || x.getAttribute("data-page-break") === "true")
        continue;
      const v = x.getBoundingClientRect().height;
      if (p + v > l) {
        h = x;
        break;
      }
      p += v;
    }
    if (h) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(n)), h.parentNode.insertBefore(d, h), r) {
        const x = e.innerHTML;
        r(x);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(n)), e.appendChild(d);
      const x = document.createElement("p");
      if (x.innerHTML = "<br>", e.appendChild(x), r) {
        const v = e.innerHTML;
        r(v);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Kt = (e, n, a, t, r, s, i) => {
  if (!e)
    return !1;
  if (a().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const m = Array.from(e.querySelectorAll(se));
    if (n > m.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const p = window.getSelection();
    let h = !1, d = [], x = null;
    if (n === 0) {
      const S = m[0];
      if (!S)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let _ = e.firstChild;
      for (; _ && _ !== S; )
        d.push(_), _ = _.nextSibling;
      x = S;
    } else {
      const S = m[n - 1];
      if (!S)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const _ = m[n];
      let w = S.nextSibling;
      for (; w && w !== _; )
        d.push(w), w = w.nextSibling;
      x = S;
    }
    if (p && p.rangeCount > 0) {
      const _ = p.getRangeAt(0).startContainer;
      for (const w of d)
        if (w.contains(_) || w === _) {
          h = !0;
          break;
        }
    }
    if (x && x.parentNode && x.remove(), d.forEach((S) => {
      S.parentNode && S.remove();
    }), e.querySelectorAll(se).forEach((S, _) => {
      S.setAttribute("data-page-number", String(_ + 2));
    }), h && s && setTimeout(() => {
      s(0);
    }, 50), t) {
      const S = e.innerHTML;
      t(S);
    }
    return r && setTimeout(() => {
      r(), i && setTimeout(() => {
        i();
      }, 150);
    }, 100), !0;
  } catch (m) {
    return console.error("[removePageAndContent] Failed to remove page:", m), !1;
  }
}, Jt = 200, Xt = 50, it = 3, Qt = 20, en = (e, n) => {
  if (!e || e.length === 0)
    return null;
  let a = 0, t = null;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (!s || !s.getBoundingClientRect)
      continue;
    const i = s.getBoundingClientRect().height;
    if (i < 1)
      continue;
    if (a + i > n)
      return t === null ? r > 0 ? {
        overflowIndex: r,
        overflowElement: s,
        accumulatedHeight: a
      } : null : {
        overflowIndex: r,
        overflowElement: s,
        accumulatedHeight: a
      };
    a += i, t = s;
  }
  return null;
}, tn = (e, n, a, t, r, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const l = vt(n, a);
    let m = at(e), p = !1, h = 0;
    for (let d = 0; d < m.length && h < it; d++) {
      const x = m[d], v = en(x, l);
      if (v && v.overflowIndex > 0) {
        let S = 0;
        for (let C = 0; C < x.length; C++) {
          const E = x[C];
          E && E.getBoundingClientRect && (S += E.getBoundingClientRect().height);
        }
        if (S - l < Qt)
          continue;
        const w = d + 2;
        Vt(v.overflowElement, w) && (p = !0, h++, m = at(e));
      }
    }
    if (p) {
      if (t) {
        const d = e.innerHTML;
        t(d);
      }
      setTimeout(() => {
        r && r(), h >= it && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, Xt);
    }
    return p;
  } catch (l) {
    return console.warn("[checkAndReflow] Reflow failed:", l), !1;
  } finally {
    s.current = !1;
  }
}, nn = (e, n, a = Jt) => {
  n.current && clearTimeout(n.current), n.current = setTimeout(() => {
    n.current = null, e();
  }, a);
}, rn = 400, bt = (e, n) => {
  if (e) {
    e.focus();
    try {
      let a = null, t = 0;
      if (n === 0)
        a = e.firstChild, t = 0;
      else {
        const s = e.querySelectorAll(se)[n - 1];
        s && s.nextSibling && (a = s.nextSibling, t = 0);
      }
      if (a) {
        const r = document.createRange(), s = window.getSelection();
        a.nodeType === Node.TEXT_NODE ? r.setStart(a, t) : r.setStart(a, 0), r.collapse(!0), s.removeAllRanges(), s.addRange(r);
      }
    } catch (a) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", a);
    }
  }
}, on = (e, n, a, t) => {
  if (!e || !n) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let r = null;
    if (a === 0)
      r = n;
    else {
      const i = n.querySelectorAll(se)[a - 1];
      if (i)
        r = i;
      else {
        console.warn("[scrollToPage] Page break not found for page", a);
        return;
      }
    }
    if (r) {
      const s = r.getBoundingClientRect(), i = e.getBoundingClientRect(), l = e.scrollTop + (s.top - i.top);
      console.log("[scrollToPage] Scrolling to page", a, "scrollTop:", l), e.scrollTo({
        top: l,
        behavior: "smooth"
      }), setTimeout(() => {
        t ? t(a) : bt(n, a);
      }, rn);
    }
  } catch (r) {
    console.error("[scrollToPage] Error:", r);
  }
}, an = (e, n, a = {}, t = 300) => {
  n.current && clearTimeout(n.current), n.current = setTimeout(() => {
    n.current = null, e(a);
  }, Math.max(0, t));
}, sn = 300, cn = (e, n, a = 100) => {
  const t = ht(), r = J(null), s = J(null), i = J(e), l = J(a), m = J(!1);
  oe(() => {
    i.current = e;
  }, [e]), oe(() => {
    l.current = a;
  }, [a]), oe(() => () => {
    r.current && clearTimeout(r.current), s.current && clearTimeout(s.current);
  }, []);
  const p = Z((E = {}) => n?.current ? Yt(n.current, E) : [], [n]), h = Z((E = {}) => {
    const O = p(E);
    return t.updatePageBoundaries(O), O;
  }, [p, t]), d = Z(async (E) => {
    if (!n?.current)
      return !1;
    const O = i.current || "A4", g = l.current || 100;
    return Wt(
      n.current,
      E,
      O,
      g,
      t.updateContinuousContent,
      h
    );
  }, [n, t, h]), x = Z(() => {
    if (!n?.current)
      return;
    const E = i.current || "A4", O = l.current || 100;
    tn(
      n.current,
      E,
      O,
      t.updateContinuousContent,
      h,
      m,
      x
    );
  }, [n, t, h]), v = Z((E) => {
    nn(x, s, E);
  }, [x]), S = Z((E = {}) => {
    const O = typeof E.delay == "number" ? E.delay : sn;
    an(h, r, E, O);
  }, [h]), _ = Z((E) => !E?.current || !n?.current ? 0 : Ft(E.current, n.current), [n]), w = Z((E) => {
    n?.current && bt(n.current, E);
  }, [n]), b = Z((E, O) => {
    if (!O?.current || !n?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    on(O.current, n.current, E, w);
  }, [n, w]), C = Z((E) => n?.current ? Kt(
    n.current,
    E,
    p,
    t.updateContinuousContent,
    h,
    w,
    x
  ) : !1, [n, p, t, h, w, x]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: S,
    updateBoundaries: h,
    getCurrentPage: _,
    scrollToPage: b,
    positionCursorAtPage: w,
    checkAndReflow: x,
    triggerAutoReflow: v,
    removePageAndContent: C,
    insertPageBreakAtBoundary: d,
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
const ln = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), un = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, a, t) => t ? t.toUpperCase() : a.toLowerCase()
), st = (e) => {
  const n = un(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, xt = (...e) => e.filter((n, a, t) => !!n && n.trim() !== "" && t.indexOf(n) === a).join(" ").trim(), dn = (e) => {
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
var fn = {
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
const pn = Ie(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: t,
    className: r = "",
    children: s,
    iconNode: i,
    ...l
  }, m) => Ce(
    "svg",
    {
      ref: m,
      ...fn,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: t ? Number(a) * 24 / Number(n) : a,
      className: xt("lucide", r),
      ...!s && !dn(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...i.map(([p, h]) => Ce(p, h)),
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
const B = (e, n) => {
  const a = Ie(
    ({ className: t, ...r }, s) => Ce(pn, {
      ref: s,
      iconNode: n,
      className: xt(
        `lucide-${ln(st(e))}`,
        `lucide-${e}`,
        t
      ),
      ...r
    })
  );
  return a.displayName = st(e), a;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], hn = B("bold", gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], yn = B("chevron-left", mn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], vn = B("chevron-right", En);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], xn = B("file-check", bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ve = B("file-text", Tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Pn = B("hash", An);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], kn = B("heading-1", _n);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Sn = B("heading-2", Cn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], On = B("heading-3", wn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], jn = B("image", Rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Mn = B("italic", Nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Dn = B("link", In);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], zn = B("list-ordered", Ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Tt = B("list", Bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Un = B("plus", $n);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Zn = B("redo", Hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Gn = B("settings", qn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Fn = B("strikethrough", Yn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Wn = B("table", Vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Jn = B("text-align-center", Kn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Qn = B("text-align-end", Xn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], tr = B("text-align-justify", er);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], rr = B("text-align-start", nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], ar = B("underline", or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], sr = B("undo", ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], lr = B("x", cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], dr = B("zoom-in", ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], pr = B("zoom-out", fr), gr = ({ editorView: e, isCollapsed: n, onToggle: a, wordCount: t, pageCount: r }) => {
  const s = gt(), { pages: i, activePage: l, continuousContent: m, editorMode: p } = s, [h, d] = Ee(0), [x, v] = Ee([]);
  oe(() => {
    if (t !== void 0 && r !== void 0) {
      if (d(t), m) {
        const b = document.createElement("div");
        b.innerHTML = m;
        const C = b.querySelectorAll("h1, h2, h3, h4, h5, h6"), E = Array.from(C).map((O, g) => {
          const $ = parseInt(O.tagName.charAt(1)), H = O.textContent.trim();
          return H ? {
            id: `heading-${g}`,
            level: $,
            text: H,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        v(E);
      }
      return;
    }
    let _ = 0;
    const w = [];
    i.forEach((b, C) => {
      if (b.content) {
        const E = document.createElement("div");
        E.innerHTML = b.content;
        const g = (E.textContent || E.innerText || "").trim().split(/\s+/).filter((H) => H.length > 0);
        _ += g.length, E.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((H, G) => {
          const K = parseInt(H.tagName.charAt(1)), X = H.textContent.trim();
          X && w.push({
            id: `heading-${C}-${G}`,
            level: K,
            text: X,
            page: C + 1
          });
        });
      }
    }), d(_), v(w);
  }, [i, t, r, m]);
  const S = r !== void 0 ? r : i.length;
  return /* @__PURE__ */ c.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ c.jsx(ve, { size: 18 }),
            /* @__PURE__ */ c.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ c.jsx(vn, { size: 16 }) : /* @__PURE__ */ c.jsx(yn, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(xn, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: S })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Pn, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: h.toLocaleString() })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(ve, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: l + 1 })
            ] })
          ] }),
          x.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsxs("h3", { children: [
              /* @__PURE__ */ c.jsx(Tt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "document-outline", "data-testid": "outline", children: x.map((_) => {
              const w = _.level === 1 ? kn : _.level === 2 ? Sn : On;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${_.level}`,
                  style: { marginLeft: `${(_.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ c.jsx(w, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ c.jsx("span", { className: "outline-text", children: _.text }),
                    /* @__PURE__ */ c.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      _.page
                    ] })
                  ]
                },
                _.id
              );
            }) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ c.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ c.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function hr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function mr(e) {
  return new Promise((n, a) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      a(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      a(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const r = new FileReader();
    r.onload = (s) => {
      const i = s.target.result;
      if (i.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const p = `editor-image-${hr()}`;
        localStorage.setItem(p, i), n(p);
      } catch (p) {
        p.name === "QuotaExceededError" ? a(new Error("Storage quota exceeded")) : a(p);
      }
    }, r.onerror = () => {
      a(new Error("Error reading image file"));
    }, r.readAsDataURL(e);
  });
}
function kr(e) {
  return localStorage.getItem(e);
}
function Cr(e) {
  localStorage.removeItem(e);
}
function Sr() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function wr() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class yr {
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
  _format(n, a, t) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${n}] ${a}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(n, a) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(n, a) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(n, a) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(n, a) {
  }
}
const ct = new yr("Editor"), ze = ({
  currentFormat: e,
  onFormatText: n,
  onAddPageBreak: a
}) => {
  const t = async (r) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(r.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (r.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const i = await mr(r), l = localStorage.getItem(i);
      l && (document.execCommand("insertImage", !1, l), ct.info("Image inserted", { key: i }));
    } catch (s) {
      ct.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("undo"),
        title: "Undo",
        children: /* @__PURE__ */ c.jsx(sr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("redo"),
        title: "Redo",
        children: /* @__PURE__ */ c.jsx(Zn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ c.jsx(hn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ c.jsx(Mn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ c.jsx(ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ c.jsx(Fn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ c.jsx(rr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ c.jsx(Jn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ c.jsx(Qn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ c.jsx(tr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (r) => n("fontName", r.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ c.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ c.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ c.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ c.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (r) => n("fontSize", r.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ c.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ c.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ c.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ c.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ c.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ c.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (r) => n("formatBlock", r.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: [
          /* @__PURE__ */ c.jsx("option", { value: "p", children: "Normal" }),
          /* @__PURE__ */ c.jsx("option", { value: "h1", children: "Heading 1" }),
          /* @__PURE__ */ c.jsx("option", { value: "h2", children: "Heading 2" }),
          /* @__PURE__ */ c.jsx("option", { value: "h3", children: "Heading 3" }),
          /* @__PURE__ */ c.jsx("option", { value: "h4", children: "Heading 4" }),
          /* @__PURE__ */ c.jsx("option", { value: "h5", children: "Heading 5" }),
          /* @__PURE__ */ c.jsx("option", { value: "h6", children: "Heading 6" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ c.jsx(Tt, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ c.jsx(zn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => {
          const r = prompt("Enter URL:");
          r && n("createLink", r);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ c.jsx(Dn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => n("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ c.jsx(Wn, { size: 16 })
      }
    ),
    a && /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: a,
        title: "Insert Page Break",
        children: /* @__PURE__ */ c.jsx(ve, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (r) => r.target.files[0] && t(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ c.jsx(jn, { size: 16 })
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
  dimensions: n,
  pageSize: a,
  pageBoundaries: t = [],
  editorRef: r,
  onInput: s,
  onKeyDown: i,
  onClick: l,
  onScroll: m,
  zoomLevel: p = 100
}) => {
  const h = {
    top: 40,
    bottom: 40,
    left: 40,
    right: 40
  }, d = p / 100, x = (b, C) => {
    if (!b) return !1;
    const E = b.getBoundingClientRect(), O = C - E.top;
    return O < h.top || O > E.height - h.bottom;
  }, v = (b) => b ? b.nodeType === Node.ELEMENT_NODE ? b.tagName === "PAGE-BREAK" || b.getAttribute("data-page-break") === "true" : b.parentElement && v(b.parentElement) : !1, S = (b) => {
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const E = C.getRangeAt(0), { startContainer: O, endContainer: g } = E;
    if ((v(O) || v(g)) && (b.key.length === 1 || b.key === "Enter" || b.key === " "))
      return b.preventDefault(), !1;
    if (b.key === "Tab")
      return b.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((b.key === "Backspace" || b.key === "Delete") && (v(O) || v(g)))
      return b.preventDefault(), !1;
    i && i(b);
  }, _ = (b) => {
    if (!r.current) return;
    const C = b.target;
    if (v(C)) {
      b.preventDefault();
      return;
    }
    if (x(r.current, b.clientY)) {
      b.preventDefault();
      const E = r.current.getBoundingClientRect();
      if (b.clientY - E.top < h.top) {
        const g = r.current.firstElementChild;
        if (g && g.tagName !== "PAGE-BREAK") {
          const $ = document.createRange(), H = window.getSelection();
          $.setStart(g, 0), $.collapse(!0), H.removeAllRanges(), H.addRange($);
        }
      } else {
        const g = r.current.lastElementChild;
        if (g && g.tagName !== "PAGE-BREAK") {
          const $ = document.createRange(), H = window.getSelection();
          $.selectNodeContents(g), $.collapse(!1), H.removeAllRanges(), H.addRange($);
        }
      }
      return;
    }
    l && l(b);
  }, w = (b) => {
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const E = C.getRangeAt(0), { startContainer: O } = E;
    if (v(O))
      return b.preventDefault(), !1;
  };
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${n.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${d})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: r,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${n.height}px`,
            width: `${n.width}px`,
            backgroundColor: "white",
            padding: `${h.top}px ${h.right}px ${h.bottom}px ${h.left}px`,
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
          onInput: s,
          onKeyDown: S,
          onBeforeInput: w,
          onClick: _,
          onScroll: m,
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
  activePage: n = 0,
  pageSize: a = "A4",
  zoomLevel: t = 100,
  canZoomIn: r = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: l,
  onDeletePage: m,
  onPageSizeChange: p,
  onZoomIn: h,
  onZoomOut: d,
  onZoomReset: x
} = {}) => {
  const v = Math.max(e?.length || 0, 1), S = (C) => {
    i && i(C);
  }, _ = () => {
    l && l();
  }, w = (C) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(C);
  }, b = (C) => {
    p && p(C);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ c.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ c.jsx(Gn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ c.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: a,
          onChange: (C) => b(C.target.value),
          children: [
            /* @__PURE__ */ c.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ c.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ c.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "zoom-controls", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button",
          onClick: d,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ c.jsx(pr, { size: 14 })
        }
      ),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: "zoom-reset-button",
          onClick: x,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: [
            t,
            "%"
          ]
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button",
          onClick: h,
          disabled: !r,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ c.jsx(dr, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((C, E) => /* @__PURE__ */ c.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${E === n ? "active" : ""}`,
          onClick: () => S(E),
          "aria-label": `Go to page ${E + 1}`,
          "aria-current": E === n ? "page" : void 0,
          children: [
            /* @__PURE__ */ c.jsx(ve, { size: 14 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              "Page ",
              E + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (O) => {
            O.stopPropagation(), w(E);
          },
          "aria-label": `Delete page ${E + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ c.jsx(lr, { size: 14 })
        }
      )
    ] }, C.id || `page-${E}`)) }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: _,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ c.jsx(Un, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { children: "Add Page" })
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
const Er = be.memo($e), lt = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
}, vr = 50, br = 50, ut = 50, xr = 100, Tr = 500, Ue = Ie(({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: a,
  onDeletePage: t,
  onPageSizeChange: r,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: l = !0,
  showPageManager: m = !0
}, p) => {
  const h = gt(), d = ht(), { pageSize: x, continuousContent: v, pageBoundaries: S, activePage: _, zoomLevel: w } = h, b = J(null), C = J(null), { currentFormat: E, formatText: O } = Gt(), {
    checkAndUpdateBoundaries: g,
    getCurrentPage: $,
    scrollToPage: H,
    updateBoundaries: G,
    triggerAutoReflow: K,
    removePageAndContent: X,
    insertPageBreakAtBoundary: ne
  } = cn(x, C, w), re = ye(() => lt[x] || lt.A4, [x]), [ae, te] = Ee(!1), F = J(null), q = J(!1), V = J(!1), Q = J(!1), ee = J(v);
  oe(() => {
    if (C.current) {
      if (!Q.current) {
        C.current.innerHTML = v, Q.current = !0, ee.current = v;
        const u = setTimeout(() => {
          G();
        }, vr);
        return () => clearTimeout(u);
      }
      if (ee.current !== v) {
        if (C.current.innerHTML !== v) {
          C.current.innerHTML = v;
          const U = setTimeout(() => {
            if (G(), q.current) {
              q.current = !1;
              const W = Math.max(0, S.length - 1);
              d.setActivePage(W), setTimeout(() => {
                H(W, b);
              }, ut);
            }
          }, br);
          return ee.current = v, () => clearTimeout(U);
        }
        ee.current = v;
      }
    }
  }, [v, G, S.length, d, H]), oe(() => {
    s && Q.current && s(v);
  }, [v, s]), St(p, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => v.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (u) => {
      d.updateContinuousContent(u), C.current && (C.current.innerHTML = u, setTimeout(() => {
        G();
      }, 50));
    }
  }), [v, d, G]), oe(() => {
    const u = setTimeout(() => {
      C.current && C.current.focus();
    }, 200);
    return () => clearTimeout(u);
  }, []);
  const f = Z((u) => {
    const U = u.currentTarget.innerHTML;
    d.updateContinuousContent(U), g(), K(200);
    const W = $(b);
    W !== _ && d.setActivePage(W);
  }, [g, d, $, _, K, b]), o = Z((u) => {
    d.updatePageSize(u), G({ pageSize: u }), r && r(u);
  }, [d, G, r]), y = Z((u) => {
    u < 0 || u >= S.length || (V.current = !0, d.setActivePage(u), H(u, b), setTimeout(() => {
      V.current = !1;
    }, Tr), n && n(u));
  }, [d, H, n, S.length]), A = Z(() => {
    const u = S.length + 1;
    ne(u) && (q.current = !0, setTimeout(() => {
      if (q.current) {
        q.current = !1;
        const W = Math.max(0, S.length - 1);
        d.setActivePage(W), setTimeout(() => {
          H(W, b);
        }, ut);
      }
    }, 100)), a && a();
  }, [S.length, ne, d, H, a]), P = Z(() => {
    const u = window.getSelection();
    if (u && u.rangeCount > 0) {
      if (!C?.current) return;
      const fe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${C.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, fe), setTimeout(() => {
        G();
        const Pt = $(b);
        d.setActivePage(Pt);
      }, 150);
    }
  }, [G, $, d, b]), N = Z((u) => {
    if (S.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    X(u) && (d.setActivePage(0), t && t(u));
  }, [S.length, X, d, t]), R = Z(() => {
    d.zoomIn();
  }, [d]), k = Z(() => {
    d.zoomOut();
  }, [d]), j = Z(() => {
    d.resetZoom();
  }, [d]);
  oe(() => {
    const u = (U) => {
      if (!(!C.current && !b.current) && (U.ctrlKey || U.metaKey))
        switch (U.key) {
          case "+":
          case "=":
            U.preventDefault(), R();
            break;
          case "-":
          case "_":
            U.preventDefault(), k();
            break;
          case "0":
            U.preventDefault(), j();
            break;
        }
    };
    return window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    };
  }, [R, k, j]);
  const D = Z(() => {
    !b.current || !C.current || V.current || (F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      if (V.current) {
        F.current = null;
        return;
      }
      const u = $(b);
      u !== _ && u >= 0 && d.setActivePage(u), F.current = null;
    }, xr));
  }, [$, _, d]), I = ye(() => {
    if (!v) return 0;
    const U = v.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return U ? U.length : 0;
  }, [v]), Y = S.length || 1;
  return oe(() => () => {
    F.current && clearTimeout(F.current);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ c.jsx(
      ze,
      {
        currentFormat: E,
        onFormatText: O,
        onAddPageBreak: P
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ c.jsx(
        gr,
        {
          editorView: null,
          isCollapsed: ae,
          onToggle: () => te((u) => !u),
          wordCount: I,
          pageCount: Y
        }
      ),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: b,
          onScroll: D,
          children: /* @__PURE__ */ c.jsx(
            Be,
            {
              content: v,
              dimensions: re,
              pageSize: x,
              pageBoundaries: S,
              editorRef: C,
              onInput: f,
              onClick: () => C.current?.focus(),
              zoomLevel: w
            }
          )
        }
      ),
      m && /* @__PURE__ */ c.jsx("div", { className: "page-manager-sidebar", children: e ? be.cloneElement(e, {
        onNavigate: y,
        onAddPage: A,
        onDeletePage: N,
        onPageSizeChange: o,
        zoomLevel: w,
        canZoomIn: Re(w),
        canZoomOut: je(w),
        onZoomIn: R,
        onZoomOut: k,
        onZoomReset: j
      }) : /* @__PURE__ */ c.jsx(
        Er,
        {
          pageBoundaries: S,
          activePage: _,
          pageSize: x,
          zoomLevel: w,
          canZoomIn: Re(w),
          canZoomOut: je(w),
          onNavigate: y,
          onAddPage: A,
          onDeletePage: N,
          onPageSizeChange: o,
          onZoomIn: R,
          onZoomOut: k,
          onZoomReset: j
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
class At extends be.Component {
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
  componentDidCatch(n, a) {
    console.error("[ErrorBoundary] Caught error:", n), console.error("[ErrorBoundary] Error info:", a), this.setState({
      error: n,
      errorInfo: a
    }), this.props.onError && this.props.onError(n, a);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ c.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ c.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ c.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ c.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ c.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ c.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
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
At.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
At.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Or = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
};
export {
  _r as DocumentProvider,
  ze as EditorToolbar,
  At as ErrorBoundary,
  Ue as HtmlEditor,
  Or as PAGE_DIMENSIONS,
  Er as PageManager,
  Be as PageView,
  gr as Sidebar,
  Sr as clearImages,
  Cr as deleteImage,
  wr as getAllImageKeys,
  kr as getImage,
  yr as logger,
  mr as saveImage,
  cn as useContinuousReflow,
  pt as useDocument,
  ht as useDocumentActions,
  gt as useDocumentState,
  Gt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
