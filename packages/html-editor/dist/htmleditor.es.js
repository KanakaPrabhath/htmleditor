import xe, { createContext as kt, useContext as St, useReducer as Ct, useMemo as be, useState as Ee, useCallback as Z, useRef as J, useEffect as ae, forwardRef as De, createElement as Ce, useImperativeHandle as wt } from "react";
import { v4 as Le } from "uuid";
function Ot(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} }, le = {};
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
function Rt() {
  if (qe) return le;
  qe = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function a(n, r, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), r.key !== void 0 && (i = "" + r.key), "key" in r) {
      s = {};
      for (var l in r)
        l !== "key" && (s[l] = r[l]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return le.Fragment = t, le.jsx = a, le.jsxs = a, le;
}
var ue = {};
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
function jt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === re ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case w:
          return "Fragment";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case $:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
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
          case b:
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
    function t(o) {
      return "" + o;
    }
    function a(o) {
      try {
        t(o);
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
        ), t(o);
      }
    }
    function n(o) {
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
      var o = oe.A;
      return o === null ? null : o.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(o) {
      if (ie.call(o, "key")) {
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
    function f(o, y, A, P, N, R) {
      var k = A.ref;
      return o = {
        $$typeof: C,
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
          if (ne(k)) {
            for (P = 0; P < k.length; P++)
              d(k[P]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(k);
      if (ie.call(y, "key")) {
        k = e(o);
        var j = Object.keys(y).filter(function(I) {
          return I !== "key";
        });
        P = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", p[k + P] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), p[k + P] = !0);
      }
      if (k = null, A !== void 0 && (a(A), k = "" + A), i(y) && (a(y.key), k = "" + y.key), "key" in y) {
        A = {};
        for (var D in y)
          D !== "key" && (A[D] = y[D]);
      } else A = y;
      return k && l(
        A,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), f(
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
      return typeof o == "object" && o !== null && o.$$typeof === C;
    }
    var v = xe, C = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), O = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), oe = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = Object.prototype.hasOwnProperty, ne = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var q, V = {}, ee = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), te = F(n(s)), p = {};
    ue.Fragment = w, ue.jsx = function(o, y, A) {
      var P = 1e4 > oe.recentlyCreatedOwnerStacks++;
      return h(
        o,
        y,
        A,
        !1,
        P ? Error("react-stack-top-frame") : ee,
        P ? F(n(o)) : te
      );
    }, ue.jsxs = function(o, y, A) {
      var P = 1e4 > oe.recentlyCreatedOwnerStacks++;
      return h(
        o,
        y,
        A,
        !0,
        P ? Error("react-stack-top-frame") : ee,
        P ? F(n(o)) : te
      );
    };
  })()), ue;
}
var Ye;
function Nt() {
  return Ye || (Ye = 1, process.env.NODE_ENV === "production" ? ge.exports = Rt() : ge.exports = jt()), ge.exports;
}
var c = Nt();
const we = 100, Oe = 50, Re = 200, Fe = 5, je = (e) => e < Re, Ne = (e) => e > Oe, pe = "A4", se = "<p><br></p>", Mt = "continuous", Me = {
  A4: { width: 595, height: 842 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 }
}, de = (e, t = pe) => ({
  id: Le(),
  index: e,
  size: t,
  content: se,
  images: [],
  isBreakPoint: !1
}), ye = (e) => typeof e != "string" || e.trim() === "" ? se : e, dt = (e, t = pe) => (e.length > 0 ? e : [de(0, t)]).map((n, r) => ({
  id: n.id || Le(),
  index: r,
  size: n.size || t,
  content: ye(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), It = (e = pe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: (Me[e] || Me.A4).height
}], Ie = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || pe, n = dt(e.pages || [de(0, a)], a);
  return {
    id: Le(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: a,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Mt,
    continuousContent: e.continuousContent || se,
    pageBoundaries: e.pageBoundaries || It(a),
    zoomLevel: e.zoomLevel || we
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
}, Dt = (e, t) => {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case M.INITIALIZE_DOCUMENT: {
      const { initialContent: n = se, pageSize: r = pe } = t.payload || {}, s = { ...de(0, r), content: ye(n) };
      return Ie({
        title: e.title,
        pageSize: r,
        pages: [s]
      });
    }
    case M.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: a
      };
    case M.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: r } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[n] = {
        ...s[n],
        content: ye(r)
      }, {
        ...e,
        pages: s,
        updatedAt: a
      };
    }
    case M.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, r = dt(n.pages || [], e.pageSize), s = Array.isArray(n.pageBreaks) ? n.pageBreaks : r.slice(0, -1).map((i, l) => ({
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
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, r = [...e.pages];
      r.splice(n, 0, de(n, e.pageSize));
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
        activePage: n,
        pageBreaks: i,
        totalPages: s.length,
        updatedAt: a
      };
    }
    case M.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const r = [...e.pages];
      r.splice(n, 1);
      const s = r.map((m, f) => ({
        ...m,
        index: f,
        size: e.pageSize
      }));
      let i = e.activePage;
      i >= s.length ? i = s.length - 1 : n <= i && i > 0 && (i -= 1);
      const l = s.slice(0, -1).map((m, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
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
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= r ? e : {
        ...e,
        activePage: n,
        updatedAt: a
      };
    }
    case M.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      if (!Me[n])
        return console.warn(`Invalid page size: ${n}`), e;
      const r = e.pages.map((i, l) => ({
        ...i,
        index: l,
        size: n
      })), s = r.slice(0, -1).map((i, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: r,
        pageBreaks: s,
        updatedAt: a
      };
    }
    case M.RESET_DOCUMENT:
      return Ie();
    case M.UPDATE_CONTINUOUS_CONTENT: {
      const n = ye(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: a
      };
    }
    case M.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const r = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: r,
        updatedAt: a
      };
    }
    case M.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: r } = t.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let i = e.continuousContent;
      if (n === "end")
        i = i + s + "<p><br></p>";
      else if (typeof n == "number") {
        const l = i.substring(0, n), m = i.substring(n);
        i = l + s + m;
      } else if (typeof r == "number" && typeof document < "u") {
        const l = document.createElement("div");
        l.innerHTML = i;
        const m = l.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && m.length === 0)
          i = i + s + "<p><br></p>";
        else if (r < m.length) {
          const f = m[r], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", f.parentNode.insertBefore(h, f.nextSibling), h.parentNode.insertBefore(d, h.nextSibling), i = l.innerHTML;
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
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const r = document.createElement("div");
      r.innerHTML = e.continuousContent;
      const s = r.querySelectorAll('page-break, [data-page-break="true"]');
      return s[n] && s[n].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, m) => {
        l.setAttribute("data-page-number", String(m + 2));
      }), {
        ...e,
        continuousContent: r.innerHTML,
        updatedAt: a
      };
    }
    case M.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let r = e.continuousContent, s = e.pages;
      return n === "continuous" ? r = e.pages.map((l) => l.content).filter((l) => l && l !== se).join(`
`) || se : e.continuousContent && e.continuousContent !== se && (s = [{ ...de(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: r,
        pages: s,
        updatedAt: a
      };
    }
    case M.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Oe || n > Re ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Oe} and ${Re}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case M.ZOOM_IN: {
      if (!je(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Fe;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case M.ZOOM_OUT: {
      if (!Ne(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Fe;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case M.RESET_ZOOM:
      return e.zoomLevel === we ? e : {
        ...e,
        zoomLevel: we,
        updatedAt: a
      };
    default:
      return e;
  }
}, pt = kt(null), Rr = ({ children: e, initialState: t = {} }) => {
  const [a, n] = Ct(Dt, Ie(t)), r = be(() => ({
    initializeDocument: (i) => n({ type: M.INITIALIZE_DOCUMENT, payload: i }),
    updateTitle: (i) => n({ type: M.UPDATE_TITLE, payload: i }),
    updatePageContent: (i) => n({ type: M.UPDATE_PAGE_CONTENT, payload: i }),
    updatePages: (i) => n({ type: M.UPDATE_PAGES, payload: i }),
    addPage: (i) => n({ type: M.ADD_PAGE, payload: i }),
    deletePage: (i) => n({ type: M.DELETE_PAGE, payload: i }),
    setActivePage: (i) => n({ type: M.SET_ACTIVE_PAGE, payload: i }),
    updatePageSize: (i) => n({ type: M.UPDATE_PAGE_SIZE, payload: i }),
    resetDocument: () => n({ type: M.RESET_DOCUMENT }),
    updateContinuousContent: (i) => n({ type: M.UPDATE_CONTINUOUS_CONTENT, payload: i }),
    updatePageBoundaries: (i) => n({ type: M.UPDATE_PAGE_BOUNDARIES, payload: i }),
    addPageBreak: (i) => n({ type: M.ADD_PAGE_BREAK, payload: i }),
    removePageBreak: (i) => n({ type: M.REMOVE_PAGE_BREAK, payload: i }),
    setEditorMode: (i) => n({ type: M.SET_EDITOR_MODE, payload: i }),
    insertPageAt: (i) => n({ type: M.INSERT_PAGE_AT, payload: i }),
    movePageTo: (i) => n({ type: M.MOVE_PAGE_TO, payload: i }),
    duplicatePage: (i) => n({ type: M.DUPLICATE_PAGE, payload: i }),
    setZoomLevel: (i) => n({ type: M.SET_ZOOM_LEVEL, payload: i }),
    zoomIn: () => n({ type: M.ZOOM_IN }),
    zoomOut: () => n({ type: M.ZOOM_OUT }),
    resetZoom: () => n({ type: M.RESET_ZOOM })
  }), []), s = be(() => ({
    state: a,
    actions: r,
    dispatch: n
  }), [a, r]);
  return /* @__PURE__ */ c.jsx(pt.Provider, { value: s, children: e });
}, ft = () => {
  const e = St(pt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, gt = () => {
  const { state: e } = ft();
  return e;
}, ht = () => {
  const { actions: e } = ft();
  return e;
};
var he = { exports: {} }, me = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Lt() {
  if (Ve) return L;
  Ve = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function b(g) {
    if (typeof g == "object" && g !== null) {
      var $ = g.$$typeof;
      switch ($) {
        case t:
          switch (g = g.type, g) {
            case m:
            case f:
            case n:
            case s:
            case r:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case h:
                case C:
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
    return b(g) === f;
  }
  return L.AsyncMode = m, L.ConcurrentMode = f, L.ContextConsumer = l, L.ContextProvider = i, L.Element = t, L.ForwardRef = h, L.Fragment = n, L.Lazy = C, L.Memo = v, L.Portal = a, L.Profiler = s, L.StrictMode = r, L.Suspense = d, L.isAsyncMode = function(g) {
    return O(g) || b(g) === m;
  }, L.isConcurrentMode = O, L.isContextConsumer = function(g) {
    return b(g) === l;
  }, L.isContextProvider = function(g) {
    return b(g) === i;
  }, L.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, L.isForwardRef = function(g) {
    return b(g) === h;
  }, L.isFragment = function(g) {
    return b(g) === n;
  }, L.isLazy = function(g) {
    return b(g) === C;
  }, L.isMemo = function(g) {
    return b(g) === v;
  }, L.isPortal = function(g) {
    return b(g) === a;
  }, L.isProfiler = function(g) {
    return b(g) === s;
  }, L.isStrictMode = function(g) {
    return b(g) === r;
  }, L.isSuspense = function(g) {
    return b(g) === d;
  }, L.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === f || g === s || g === r || g === d || g === x || typeof g == "object" && g !== null && (g.$$typeof === C || g.$$typeof === v || g.$$typeof === i || g.$$typeof === l || g.$$typeof === h || g.$$typeof === w || g.$$typeof === E || g.$$typeof === S || g.$$typeof === _);
  }, L.typeOf = b, L;
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
var We;
function zt() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function b(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === f || u === s || u === r || u === d || u === x || typeof u == "object" && u !== null && (u.$$typeof === C || u.$$typeof === v || u.$$typeof === i || u.$$typeof === l || u.$$typeof === h || u.$$typeof === w || u.$$typeof === E || u.$$typeof === S || u.$$typeof === _);
    }
    function O(u) {
      if (typeof u == "object" && u !== null) {
        var U = u.$$typeof;
        switch (U) {
          case t:
            var W = u.type;
            switch (W) {
              case m:
              case f:
              case n:
              case s:
              case r:
              case d:
                return W;
              default:
                var fe = W && W.$$typeof;
                switch (fe) {
                  case l:
                  case h:
                  case C:
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
    var g = m, $ = f, H = l, G = i, K = t, Q = h, re = n, oe = C, ie = v, ne = a, F = s, q = r, V = d, ee = !1;
    function te(u) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(u) || O(u) === m;
    }
    function p(u) {
      return O(u) === f;
    }
    function o(u) {
      return O(u) === l;
    }
    function y(u) {
      return O(u) === i;
    }
    function A(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function P(u) {
      return O(u) === h;
    }
    function N(u) {
      return O(u) === n;
    }
    function R(u) {
      return O(u) === C;
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
    z.AsyncMode = g, z.ConcurrentMode = $, z.ContextConsumer = H, z.ContextProvider = G, z.Element = K, z.ForwardRef = Q, z.Fragment = re, z.Lazy = oe, z.Memo = ie, z.Portal = ne, z.Profiler = F, z.StrictMode = q, z.Suspense = V, z.isAsyncMode = te, z.isConcurrentMode = p, z.isContextConsumer = o, z.isContextProvider = y, z.isElement = A, z.isForwardRef = P, z.isFragment = N, z.isLazy = R, z.isMemo = k, z.isPortal = j, z.isProfiler = D, z.isStrictMode = I, z.isSuspense = Y, z.isValidElementType = b, z.typeOf = O;
  })()), z;
}
var Ke;
function mt() {
  return Ke || (Ke = 1, process.env.NODE_ENV === "production" ? me.exports = Lt() : me.exports = zt()), me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Te, Je;
function Bt() {
  if (Je) return Te;
  Je = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function n(s) {
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
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        f[h] = h;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Te = r() ? Object.assign : function(s, i) {
    for (var l, m = n(s), f, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var d in l)
        t.call(l, d) && (m[d] = l[d]);
      if (e) {
        f = e(l);
        for (var x = 0; x < f.length; x++)
          a.call(l, f[x]) && (m[f[x]] = l[f[x]]);
      }
    }
    return m;
  }, Te;
}
var Ae, Xe;
function ze() {
  if (Xe) return Ae;
  Xe = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = e, Ae;
}
var Pe, Qe;
function yt() {
  return Qe || (Qe = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var _e, et;
function $t() {
  if (et) return _e;
  et = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ze(), a = {}, n = /* @__PURE__ */ yt();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function r(s, i, l, m, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (n(s, h)) {
          var d;
          try {
            if (typeof s[h] != "function") {
              var x = Error(
                (m || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            d = s[h](i, h, m, l, null, t);
          } catch (C) {
            d = C;
          }
          if (d && !(d instanceof Error) && e(
            (m || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in a)) {
            a[d.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + l + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (a = {});
  }, _e = r, _e;
}
var ke, tt;
function Ut() {
  if (tt) return ke;
  tt = 1;
  var e = mt(), t = Bt(), a = /* @__PURE__ */ ze(), n = /* @__PURE__ */ yt(), r = /* @__PURE__ */ $t(), s = function() {
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
  return ke = function(l, m) {
    var f = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function d(p) {
      var o = p && (f && p[f] || p[h]);
      if (typeof o == "function")
        return o;
    }
    var x = "<<anonymous>>", v = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: S(),
      arrayOf: b,
      element: O(),
      elementType: g(),
      instanceOf: $,
      node: Q(),
      objectOf: G,
      oneOf: H,
      oneOfType: K,
      shape: oe,
      exact: ie
    };
    function C(p, o) {
      return p === o ? p !== 0 || 1 / p === 1 / o : p !== p && o !== o;
    }
    function _(p, o) {
      this.message = p, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function w(p) {
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
        return R[k] == null ? N ? R[k] === null ? new _("The " + D + " `" + I + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new _("The " + D + " `" + I + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : p(R, k, j, D, I);
      }
      var P = A.bind(null, !1);
      return P.isRequired = A.bind(null, !0), P;
    }
    function E(p) {
      function o(y, A, P, N, R, k) {
        var j = y[A], D = q(j);
        if (D !== p) {
          var I = V(j);
          return new _(
            "Invalid " + N + " `" + R + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return w(o);
    }
    function S() {
      return w(i);
    }
    function b(p) {
      function o(y, A, P, N, R) {
        if (typeof p != "function")
          return new _("Property `" + R + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var k = y[A];
        if (!Array.isArray(k)) {
          var j = q(k);
          return new _("Invalid " + N + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected an array."));
        }
        for (var D = 0; D < k.length; D++) {
          var I = p(k, D, P, N, R + "[" + D + "]", a);
          if (I instanceof Error)
            return I;
        }
        return null;
      }
      return w(o);
    }
    function O() {
      function p(o, y, A, P, N) {
        var R = o[y];
        if (!l(R)) {
          var k = q(R);
          return new _("Invalid " + P + " `" + N + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(p);
    }
    function g() {
      function p(o, y, A, P, N) {
        var R = o[y];
        if (!e.isValidElementType(R)) {
          var k = q(R);
          return new _("Invalid " + P + " `" + N + "` of type " + ("`" + k + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(p);
    }
    function $(p) {
      function o(y, A, P, N, R) {
        if (!(y[A] instanceof p)) {
          var k = p.name || x, j = te(y[A]);
          return new _("Invalid " + N + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return w(o);
    }
    function H(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function o(y, A, P, N, R) {
        for (var k = y[A], j = 0; j < p.length; j++)
          if (C(k, p[j]))
            return null;
        var D = JSON.stringify(p, function(Y, u) {
          var U = V(u);
          return U === "symbol" ? String(u) : u;
        });
        return new _("Invalid " + N + " `" + R + "` of value `" + String(k) + "` " + ("supplied to `" + P + "`, expected one of " + D + "."));
      }
      return w(o);
    }
    function G(p) {
      function o(y, A, P, N, R) {
        if (typeof p != "function")
          return new _("Property `" + R + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var k = y[A], j = q(k);
        if (j !== "object")
          return new _("Invalid " + N + " `" + R + "` of type " + ("`" + j + "` supplied to `" + P + "`, expected an object."));
        for (var D in k)
          if (n(k, D)) {
            var I = p(k, D, P, N, R + "." + D, a);
            if (I instanceof Error)
              return I;
          }
        return null;
      }
      return w(o);
    }
    function K(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var o = 0; o < p.length; o++) {
        var y = p[o];
        if (typeof y != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(y) + " at index " + o + "."
          ), i;
      }
      function A(P, N, R, k, j) {
        for (var D = [], I = 0; I < p.length; I++) {
          var Y = p[I], u = Y(P, N, R, k, j, a);
          if (u == null)
            return null;
          u.data && n(u.data, "expectedType") && D.push(u.data.expectedType);
        }
        var U = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new _("Invalid " + k + " `" + j + "` supplied to " + ("`" + R + "`" + U + "."));
      }
      return w(A);
    }
    function Q() {
      function p(o, y, A, P, N) {
        return ne(o[y]) ? null : new _("Invalid " + P + " `" + N + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return w(p);
    }
    function re(p, o, y, A, P) {
      return new _(
        (p || "React class") + ": " + o + " type `" + y + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function oe(p) {
      function o(y, A, P, N, R) {
        var k = y[A], j = q(k);
        if (j !== "object")
          return new _("Invalid " + N + " `" + R + "` of type `" + j + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var D in p) {
          var I = p[D];
          if (typeof I != "function")
            return re(P, N, R, D, V(I));
          var Y = I(k, D, P, N, R + "." + D, a);
          if (Y)
            return Y;
        }
        return null;
      }
      return w(o);
    }
    function ie(p) {
      function o(y, A, P, N, R) {
        var k = y[A], j = q(k);
        if (j !== "object")
          return new _("Invalid " + N + " `" + R + "` of type `" + j + "` " + ("supplied to `" + P + "`, expected `object`."));
        var D = t({}, y[A], p);
        for (var I in D) {
          var Y = p[I];
          if (n(p, I) && typeof Y != "function")
            return re(P, N, R, I, V(Y));
          if (!Y)
            return new _(
              "Invalid " + N + " `" + R + "` key `" + I + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(y[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var u = Y(k, I, P, N, R + "." + I, a);
          if (u)
            return u;
        }
        return null;
      }
      return w(o);
    }
    function ne(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(ne);
          if (p === null || l(p))
            return !0;
          var o = d(p);
          if (o) {
            var y = o.call(p), A;
            if (o !== p.entries) {
              for (; !(A = y.next()).done; )
                if (!ne(A.value))
                  return !1;
            } else
              for (; !(A = y.next()).done; ) {
                var P = A.value;
                if (P && !ne(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function F(p, o) {
      return p === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function q(p) {
      var o = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : F(o, p) ? "symbol" : o;
    }
    function V(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var o = q(p);
      if (o === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function ee(p) {
      var o = V(p);
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
    function te(p) {
      return !p.constructor || !p.constructor.name ? x : p.constructor.name;
    }
    return v.checkPropTypes = r, v.resetWarningCache = r.resetWarningCache, v.PropTypes = v, v;
  }, ke;
}
var Se, nt;
function Ht() {
  if (nt) return Se;
  nt = 1;
  var e = /* @__PURE__ */ ze();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, Se = function() {
    function n(i, l, m, f, h, d) {
      if (d !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    n.isRequired = n;
    function r() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: r,
      element: n,
      elementType: n,
      instanceOf: r,
      node: n,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Se;
}
var rt;
function Zt() {
  if (rt) return he.exports;
  if (rt = 1, process.env.NODE_ENV !== "production") {
    var e = mt(), t = !0;
    he.exports = /* @__PURE__ */ Ut()(e.isElement, t);
  } else
    he.exports = /* @__PURE__ */ Ht()();
  return he.exports;
}
var qt = /* @__PURE__ */ Zt();
const T = /* @__PURE__ */ Ot(qt), bt = {
  "7.5pt": { pt: 7.5, px: 10, label: "7.5" },
  "9pt": { pt: 9, px: 12, label: "9" },
  "10pt": { pt: 10, px: 13, label: "10" },
  "11pt": { pt: 11, px: 15, label: "11" },
  "12pt": { pt: 12, px: 16, label: "12" },
  "14pt": { pt: 14, px: 19, label: "14" },
  "16pt": { pt: 16, px: 21, label: "16" },
  "18pt": { pt: 18, px: 24, label: "18" },
  "20pt": { pt: 20, px: 27, label: "20" },
  "22pt": { pt: 22, px: 29, label: "22" },
  "24pt": { pt: 24, px: 32, label: "24" },
  "26pt": { pt: 26, px: 35, label: "26" },
  "28pt": { pt: 28, px: 37, label: "28" },
  "36pt": { pt: 36, px: 48, label: "36" },
  "48pt": { pt: 48, px: 64, label: "48" },
  "72pt": { pt: 72, px: 96, label: "72" }
}, Gt = [
  { value: "10px", label: "7.5", pt: 7.5 },
  // 7.5 pt ≈ 10 px
  { value: "12px", label: "9", pt: 9 },
  // 9 pt ≈ 12 px
  { value: "13px", label: "10", pt: 10 },
  // 10 pt ≈ 13 px
  { value: "15px", label: "11", pt: 11 },
  // 11 pt ≈ 15 px (default in Word)
  { value: "16px", label: "12", pt: 12 },
  // 12 pt ≈ 16 px
  { value: "19px", label: "14", pt: 14 },
  // 14 pt ≈ 19 px
  { value: "21px", label: "16", pt: 16 },
  // 16 pt ≈ 21 px
  { value: "24px", label: "18", pt: 18 },
  // 18 pt ≈ 24 px
  { value: "27px", label: "20", pt: 20 },
  // 20 pt ≈ 27 px
  { value: "32px", label: "24", pt: 24 },
  // 24 pt ≈ 32 px
  { value: "37px", label: "28", pt: 28 },
  // 28 pt ≈ 37 px
  { value: "48px", label: "36", pt: 36 },
  // 36 pt ≈ 48 px
  { value: "64px", label: "48", pt: 48 },
  // 48 pt ≈ 64 px
  { value: "96px", label: "72", pt: 72 }
  // 72 pt ≈ 96 px
], Be = "16px", Yt = (e) => Math.round(e * 96 / 72), Ft = (e) => Math.round(e * 72 / 96 * 2) / 2, jr = (e) => {
  const t = Object.values(bt).find((a) => a.pt === e);
  return t ? `${t.px}px` : `${Yt(e)}px`;
}, Nr = (e) => {
  const t = parseInt(e), a = Object.values(bt).find((n) => n.px === t);
  return a ? a.pt : Ft(t);
}, Mr = (e) => {
  if (!e) return !1;
  if (e.endsWith("px")) {
    const t = parseInt(e);
    return t >= 8 && t <= 144;
  }
  if (e.endsWith("pt")) {
    const t = parseFloat(e);
    return t >= 6 && t <= 108;
  }
  return !1;
}, Vt = {
  "10px": "1",
  // 7.5 pt
  "12px": "2",
  // 9 pt
  "13px": "2",
  // 10 pt
  "15px": "3",
  // 11 pt (Word default)
  "16px": "3",
  // 12 pt
  "19px": "4",
  // 14 pt
  "21px": "4",
  // 16 pt
  "24px": "5",
  // 18 pt
  "27px": "5",
  // 20 pt
  "32px": "6",
  // 24 pt
  "37px": "6",
  // 28 pt
  "48px": "6",
  // 36 pt
  "64px": "7",
  // 48 pt
  "96px": "7"
  // 72 pt
}, ot = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Be,
  headingLevel: "p"
  // Add heading level tracking
}, Wt = () => {
  const [e, t] = Ee(ot), a = Z((i) => {
    t((l) => ({
      ...l,
      alignLeft: i === "left",
      alignCenter: i === "center",
      alignRight: i === "right",
      alignJustify: i === "justify"
    }));
  }, []), n = Z((i) => {
    try {
      const l = window.getSelection();
      if (!l || l.rangeCount === 0)
        return !1;
      const m = l.getRangeAt(0);
      if (!m.toString())
        return t((h) => ({ ...h, fontSize: i })), !1;
      try {
        const h = document.createElement("span");
        h.style.fontSize = i;
        const d = m.extractContents();
        return h.appendChild(d), m.insertNode(h), m.selectNodeContents(h), l.removeAllRanges(), l.addRange(m), t((x) => ({ ...x, fontSize: i })), !0;
      } catch {
        const d = Vt[i] || "2";
        return document.execCommand("fontSize", !1, d), t((x) => ({ ...x, fontSize: i })), !0;
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
        n(l);
        return;
      }
      switch (document.execCommand(i, !1, l) || console.warn(`[useFormatting] Command "${i}" failed`), i) {
        case "bold":
          t((f) => ({ ...f, bold: !f.bold }));
          break;
        case "italic":
          t((f) => ({ ...f, italic: !f.italic }));
          break;
        case "underline":
          t((f) => ({ ...f, underline: !f.underline }));
          break;
        case "strikethrough":
          t((f) => ({ ...f, strikethrough: !f.strikethrough }));
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
          t((f) => ({ ...f, fontFamily: l }));
          break;
        case "formatBlock":
          t((f) => ({ ...f, headingLevel: l }));
          break;
        default:
          break;
      }
    } catch (m) {
      console.warn(`[useFormatting] Error executing command "${i}":`, m);
    }
  }, [n, a]), s = Z(() => {
    t(ot);
  }, []);
  return {
    currentFormat: e,
    formatText: r,
    resetFormat: s
  };
}, X = {
  A4: {
    name: "A4",
    width: 794,
    // 210mm = 210 * 96 / 25.4 ≈ 794px (Word A4 width)
    height: 1123,
    // 297mm = 297 * 96 / 25.4 ≈ 1123px (Word A4 height)
    widthMm: 210,
    heightMm: 297,
    widthIn: 8.27,
    heightIn: 11.69
  },
  Letter: {
    name: "Letter",
    width: 816,
    // 8.5 inches = 8.5 * 96 = 816px (Word Letter width)
    height: 1056,
    // 11 inches = 11 * 96 = 1056px (Word Letter height)
    widthMm: 216,
    heightMm: 279,
    widthIn: 8.5,
    heightIn: 11
  },
  Legal: {
    name: "Legal",
    width: 816,
    // 8.5 inches = 8.5 * 96 = 816px (Word Legal width)
    height: 1344,
    // 14 inches = 14 * 96 = 1344px (Word Legal height)
    widthMm: 216,
    heightMm: 356,
    widthIn: 8.5,
    heightIn: 14
  }
}, Kt = "A4", Jt = (e) => {
  const t = X[e] || X[Kt];
  return {
    width: t.width,
    height: t.height
  };
}, Ir = (e) => Object.keys(X).includes(e), Dr = () => Object.keys(X), at = {
  top: 40,
  bottom: 40
}, ce = 'page-break, [data-page-break="true"]', Et = (e) => X[e] || X.A4, Xt = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const a = t.pageSize || "A4", n = Et(a), r = e.querySelectorAll(ce), s = [];
  s.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const i = e.getBoundingClientRect(), l = e.scrollTop;
  return r.forEach((m, f) => {
    const d = m.getBoundingClientRect().top - i.top + l;
    s.push({
      id: `page-${f + 1}`,
      pageNumber: f + 2,
      top: d,
      height: n.height
    });
  }), s;
}, vt = (e, t = 100) => {
  const n = Et(e).height - at.top - at.bottom, r = t / 100;
  return n / r;
}, Qt = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const a = t.querySelectorAll(ce);
    if (a.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), r = n.top + n.height / 2;
    for (let s = a.length - 1; s >= 0; s--)
      if (a[s].getBoundingClientRect().top < r)
        return s + 1;
    return 0;
  } catch (a) {
    return console.warn("[getCurrentPage] Failed to calculate page:", a), 0;
  }
}, it = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let a = [], n = [];
  for (const r of t)
    r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true" ? n.length > 0 && (a.push(n), n = []) : n.push(r);
  return n.length > 0 && a.push(n), a.length === 0 && t.length > 0 && a.push(t.filter(
    (r) => !(r.tagName === "PAGE-BREAK" || r.getAttribute("data-page-break") === "true")
  )), a;
}, en = (e, t) => {
  if (!e)
    return !1;
  try {
    const a = document.createElement("page-break");
    return a.setAttribute("data-page-break", "true"), a.setAttribute("contenteditable", "false"), a.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(a, e), !0;
  } catch (a) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", a), !1;
  }
}, tn = (e, t, a, n, r, s) => {
  if (!e)
    return !1;
  try {
    const l = vt(a, n) * (t - 1), m = Array.from(e.children);
    let f = 0, h = null;
    for (let d = 0; d < m.length; d++) {
      const x = m[d];
      if (x.tagName === "PAGE-BREAK" || x.getAttribute("data-page-break") === "true")
        continue;
      const v = x.getBoundingClientRect().height;
      if (f + v > l) {
        h = x;
        break;
      }
      f += v;
    }
    if (h) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(d, h), r) {
        const x = e.innerHTML;
        r(x);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), e.appendChild(d);
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
}, nn = (e, t, a, n, r, s, i) => {
  if (!e)
    return !1;
  if (a().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const m = Array.from(e.querySelectorAll(ce));
    if (t > m.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const f = window.getSelection();
    let h = !1, d = [], x = null;
    if (t === 0) {
      const C = m[0];
      if (!C)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let _ = e.firstChild;
      for (; _ && _ !== C; )
        d.push(_), _ = _.nextSibling;
      x = C;
    } else {
      const C = m[t - 1];
      if (!C)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const _ = m[t];
      let w = C.nextSibling;
      for (; w && w !== _; )
        d.push(w), w = w.nextSibling;
      x = C;
    }
    if (f && f.rangeCount > 0) {
      const _ = f.getRangeAt(0).startContainer;
      for (const w of d)
        if (w.contains(_) || w === _) {
          h = !0;
          break;
        }
    }
    if (x && x.parentNode && x.remove(), d.forEach((C) => {
      C.parentNode && C.remove();
    }), e.querySelectorAll(ce).forEach((C, _) => {
      C.setAttribute("data-page-number", String(_ + 2));
    }), h && s && setTimeout(() => {
      s(0);
    }, 50), n) {
      const C = e.innerHTML;
      n(C);
    }
    return r && setTimeout(() => {
      r(), i && setTimeout(() => {
        i();
      }, 150);
    }, 100), !0;
  } catch (m) {
    return console.error("[removePageAndContent] Failed to remove page:", m), !1;
  }
}, rn = 200, on = 50, st = 3, an = 20, sn = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let a = 0, n = null;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (!s || !s.getBoundingClientRect)
      continue;
    const i = s.getBoundingClientRect().height;
    if (i < 1)
      continue;
    if (a + i > t)
      return n === null ? r > 0 ? {
        overflowIndex: r,
        overflowElement: s,
        accumulatedHeight: a
      } : null : {
        overflowIndex: r,
        overflowElement: s,
        accumulatedHeight: a
      };
    a += i, n = s;
  }
  return null;
}, cn = (e, t, a, n, r, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const l = vt(t, a);
    let m = it(e), f = !1, h = 0;
    for (let d = 0; d < m.length && h < st; d++) {
      const x = m[d], v = sn(x, l);
      if (v && v.overflowIndex > 0) {
        let C = 0;
        for (let S = 0; S < x.length; S++) {
          const b = x[S];
          b && b.getBoundingClientRect && (C += b.getBoundingClientRect().height);
        }
        if (C - l < an)
          continue;
        const w = d + 2;
        en(v.overflowElement, w) && (f = !0, h++, m = it(e));
      }
    }
    if (f) {
      if (n) {
        const d = e.innerHTML;
        n(d);
      }
      setTimeout(() => {
        r && r(), h >= st && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, on);
    }
    return f;
  } catch (l) {
    return console.warn("[checkAndReflow] Reflow failed:", l), !1;
  } finally {
    s.current = !1;
  }
}, ln = (e, t, a = rn) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, a);
}, un = 400, xt = (e, t) => {
  if (e) {
    e.focus();
    try {
      let a = null, n = 0;
      if (t === 0)
        a = e.firstChild, n = 0;
      else {
        const s = e.querySelectorAll(ce)[t - 1];
        s && s.nextSibling && (a = s.nextSibling, n = 0);
      }
      if (a) {
        const r = document.createRange(), s = window.getSelection();
        a.nodeType === Node.TEXT_NODE ? r.setStart(a, n) : r.setStart(a, 0), r.collapse(!0), s.removeAllRanges(), s.addRange(r);
      }
    } catch (a) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", a);
    }
  }
}, dn = (e, t, a, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let r = null;
    if (a === 0)
      r = t;
    else {
      const i = t.querySelectorAll(ce)[a - 1];
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
        n ? n(a) : xt(t, a);
      }, un);
    }
  } catch (r) {
    console.error("[scrollToPage] Error:", r);
  }
}, pn = (e, t, a = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(a);
  }, Math.max(0, n));
}, fn = 300, gn = (e, t, a = 100) => {
  const n = ht(), r = J(null), s = J(null), i = J(e), l = J(a), m = J(!1);
  ae(() => {
    i.current = e;
  }, [e]), ae(() => {
    l.current = a;
  }, [a]), ae(() => () => {
    r.current && clearTimeout(r.current), s.current && clearTimeout(s.current);
  }, []);
  const f = Z((b = {}) => t?.current ? Xt(t.current, b) : [], [t]), h = Z((b = {}) => {
    const O = f(b);
    return n.updatePageBoundaries(O), O;
  }, [f, n]), d = Z(async (b) => {
    if (!t?.current)
      return !1;
    const O = i.current || "A4", g = l.current || 100;
    return tn(
      t.current,
      b,
      O,
      g,
      n.updateContinuousContent,
      h
    );
  }, [t, n, h]), x = Z(() => {
    if (!t?.current)
      return;
    const b = i.current || "A4", O = l.current || 100;
    cn(
      t.current,
      b,
      O,
      n.updateContinuousContent,
      h,
      m,
      x
    );
  }, [t, n, h]), v = Z((b) => {
    ln(x, s, b);
  }, [x]), C = Z((b = {}) => {
    const O = typeof b.delay == "number" ? b.delay : fn;
    pn(h, r, b, O);
  }, [h]), _ = Z((b) => !b?.current || !t?.current ? 0 : Qt(b.current, t.current), [t]), w = Z((b) => {
    t?.current && xt(t.current, b);
  }, [t]), E = Z((b, O) => {
    if (!O?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    dn(O.current, t.current, b, w);
  }, [t, w]), S = Z((b) => t?.current ? nn(
    t.current,
    b,
    f,
    n.updateContinuousContent,
    h,
    w,
    x
  ) : !1, [t, f, n, h, w, x]);
  return {
    calculatePageBoundaries: f,
    checkAndUpdateBoundaries: C,
    updateBoundaries: h,
    getCurrentPage: _,
    scrollToPage: E,
    positionCursorAtPage: w,
    checkAndReflow: x,
    triggerAutoReflow: v,
    removePageAndContent: S,
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
const hn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), ct = (e) => {
  const t = mn(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Tt = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), yn = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bn = {
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
const En = De(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: n,
    className: r = "",
    children: s,
    iconNode: i,
    ...l
  }, m) => Ce(
    "svg",
    {
      ref: m,
      ...bn,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(a) * 24 / Number(t) : a,
      className: Tt("lucide", r),
      ...!s && !yn(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...i.map(([f, h]) => Ce(f, h)),
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
const B = (e, t) => {
  const a = De(
    ({ className: n, ...r }, s) => Ce(En, {
      ref: s,
      iconNode: t,
      className: Tt(
        `lucide-${hn(ct(e))}`,
        `lucide-${e}`,
        n
      ),
      ...r
    })
  );
  return a.displayName = ct(e), a;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], xn = B("bold", vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], An = B("chevron-left", Tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], _n = B("chevron-right", Pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Sn = B("file-check", kn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ve = B("file-text", Cn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], On = B("hash", wn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], jn = B("heading-1", Rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Mn = B("heading-2", Nn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Dn = B("heading-3", In);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], zn = B("image", Ln);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], $n = B("italic", Bn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Hn = B("link", Un);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], qn = B("list-ordered", Zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], At = B("list", Gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Fn = B("plus", Yn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Wn = B("redo", Vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Jn = B("settings", Kn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Qn = B("strikethrough", Xn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], tr = B("table", er);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], rr = B("text-align-center", nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], ar = B("text-align-end", or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], sr = B("text-align-justify", ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], lr = B("text-align-start", cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], dr = B("underline", ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], fr = B("undo", pr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], hr = B("x", gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], yr = B("zoom-in", mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Er = B("zoom-out", br), vr = ({ editorView: e, isCollapsed: t, onToggle: a, wordCount: n, pageCount: r }) => {
  const s = gt(), { pages: i, activePage: l, continuousContent: m, editorMode: f } = s, [h, d] = Ee(0), [x, v] = Ee([]);
  ae(() => {
    if (n !== void 0 && r !== void 0) {
      if (d(n), m) {
        const E = document.createElement("div");
        E.innerHTML = m;
        const S = E.querySelectorAll("h1, h2, h3, h4, h5, h6"), b = Array.from(S).map((O, g) => {
          const $ = parseInt(O.tagName.charAt(1)), H = O.textContent.trim();
          return H ? {
            id: `heading-${g}`,
            level: $,
            text: H,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        v(b);
      }
      return;
    }
    let _ = 0;
    const w = [];
    i.forEach((E, S) => {
      if (E.content) {
        const b = document.createElement("div");
        b.innerHTML = E.content;
        const g = (b.textContent || b.innerText || "").trim().split(/\s+/).filter((H) => H.length > 0);
        _ += g.length, b.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((H, G) => {
          const K = parseInt(H.tagName.charAt(1)), Q = H.textContent.trim();
          Q && w.push({
            id: `heading-${S}-${G}`,
            level: K,
            text: Q,
            page: S + 1
          });
        });
      }
    }), d(_), v(w);
  }, [i, n, r, m]);
  const C = r !== void 0 ? r : i.length;
  return /* @__PURE__ */ c.jsxs(
    "aside",
    {
      className: `sidebar ${t ? "collapsed" : ""}`,
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
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ c.jsx(_n, { size: 16 }) : /* @__PURE__ */ c.jsx(An, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ c.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ c.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(Sn, { size: 14 }),
                /* @__PURE__ */ c.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ c.jsx("span", { className: "stat-value", children: C })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ c.jsx(On, { size: 14 }),
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
              /* @__PURE__ */ c.jsx(At, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "document-outline", "data-testid": "outline", children: x.map((_) => {
              const w = _.level === 1 ? jn : _.level === 2 ? Mn : Dn;
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
function xr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Tr(e) {
  return new Promise((t, a) => {
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
        const f = `editor-image-${xr()}`;
        localStorage.setItem(f, i), t(f);
      } catch (f) {
        f.name === "QuotaExceededError" ? a(new Error("Storage quota exceeded")) : a(f);
      }
    }, r.onerror = () => {
      a(new Error("Error reading image file"));
    }, r.readAsDataURL(e);
  });
}
function Lr(e) {
  return localStorage.getItem(e);
}
function zr(e) {
  localStorage.removeItem(e);
}
function Br() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function $r() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Ar {
  constructor(t = "Editor") {
    this.namespace = t;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(t, a, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${a}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, a) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, a) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, a) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, a) {
  }
}
const lt = new Ar("Editor"), $e = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: a
}) => {
  const n = async (r) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(r.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (r.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const i = await Tr(r), l = localStorage.getItem(i);
      l && (document.execCommand("insertImage", !1, l), lt.info("Image inserted", { key: i }));
    } catch (s) {
      lt.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("undo"),
        title: "Undo",
        children: /* @__PURE__ */ c.jsx(fr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("redo"),
        title: "Redo",
        children: /* @__PURE__ */ c.jsx(Wn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ c.jsx(xn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ c.jsx($n, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ c.jsx(dr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ c.jsx(Qn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ c.jsx(lr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ c.jsx(rr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ c.jsx(ar, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ c.jsx(sr, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
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
    /* @__PURE__ */ c.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        defaultValue: Be,
        title: "Font Size",
        children: Gt.map(({ value: r, label: s, pt: i }) => /* @__PURE__ */ c.jsx("option", { value: r, children: s }, r))
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "select",
      {
        onChange: (r) => t("formatBlock", r.target.value),
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
        onClick: () => t("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ c.jsx(At, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ c.jsx(qn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => {
          const r = prompt("Enter URL:");
          r && t("createLink", r);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ c.jsx(Hn, { size: 16 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ c.jsx(tr, { size: 16 })
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
        onChange: (r) => r.target.files[0] && n(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ c.jsx(zn, { size: 16 })
      }
    )
  ] });
};
$e.propTypes = {
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
$e.defaultProps = {
  onAddPageBreak: void 0
};
const Ue = ({
  content: e,
  dimensions: t,
  pageSize: a,
  pageBoundaries: n = [],
  editorRef: r,
  onInput: s,
  onKeyDown: i,
  onClick: l,
  onScroll: m,
  zoomLevel: f = 100
}) => {
  const h = {
    top: 48,
    bottom: 48,
    left: 48,
    right: 48
  }, d = f / 100, x = (E, S) => {
    if (!E) return !1;
    const b = E.getBoundingClientRect(), O = S - b.top;
    return O < h.top || O > b.height - h.bottom;
  }, v = (E) => E ? E.nodeType === Node.ELEMENT_NODE ? E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true" : E.parentElement && v(E.parentElement) : !1, C = (E) => {
    const S = window.getSelection();
    if (!S || S.rangeCount === 0) return;
    const b = S.getRangeAt(0), { startContainer: O, endContainer: g } = b;
    if ((v(O) || v(g)) && (E.key.length === 1 || E.key === "Enter" || E.key === " "))
      return E.preventDefault(), !1;
    if (E.key === "Tab")
      return E.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((E.key === "Backspace" || E.key === "Delete") && (v(O) || v(g)))
      return E.preventDefault(), !1;
    i && i(E);
  }, _ = (E) => {
    if (!r.current) return;
    const S = E.target;
    if (v(S)) {
      E.preventDefault();
      return;
    }
    if (x(r.current, E.clientY)) {
      E.preventDefault();
      const b = r.current.getBoundingClientRect();
      if (E.clientY - b.top < h.top) {
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
    l && l(E);
  }, w = (E) => {
    const S = window.getSelection();
    if (!S || S.rangeCount === 0) return;
    const b = S.getRangeAt(0), { startContainer: O } = b;
    if (v(O))
      return E.preventDefault(), !1;
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${t.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${d})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: [
        n.map((E, S) => {
          const b = E.top + t.height;
          return /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "page-height-marker",
              style: {
                position: "absolute",
                top: `${b}px`,
                left: 0,
                right: 0,
                height: "2px",
                backgroundColor: "red",
                zIndex: 10,
                pointerEvents: "none"
              },
              title: `End of Page ${E.pageNumber} (${t.height}px)`
            },
            `boundary-marker-${E.id}`
          );
        }),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            ref: r,
            contentEditable: !0,
            suppressContentEditableWarning: !0,
            className: "continuous-content",
            style: {
              position: "relative",
              zIndex: 1,
              minHeight: `${t.height}px`,
              width: `${t.width}px`,
              backgroundColor: "white",
              padding: `${h.top}px ${h.right}px ${h.bottom}px ${h.left}px`,
              boxSizing: "border-box",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              outline: "none",
              cursor: "text",
              fontFamily: "Arial, sans-serif",
              fontSize: Be,
              lineHeight: "1.15",
              color: "#333",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              border: "1px solid #e0e0e0"
            },
            onInput: s,
            onKeyDown: C,
            onBeforeInput: w,
            onClick: _,
            onScroll: m,
            "data-testid": "continuous-editor"
          }
        )
      ]
    }
  );
};
Ue.propTypes = {
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
Ue.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100
};
const He = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: a = "A4",
  zoomLevel: n = 100,
  canZoomIn: r = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: l,
  onDeletePage: m,
  onPageSizeChange: f,
  onZoomIn: h,
  onZoomOut: d,
  onZoomReset: x
} = {}) => {
  const v = Math.max(e?.length || 0, 1), C = (S) => {
    i && i(S);
  }, _ = () => {
    l && l();
  }, w = (S) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(S);
  }, E = (S) => {
    f && f(S);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ c.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ c.jsx(Jn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ c.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: a,
          onChange: (S) => E(S.target.value),
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
          children: /* @__PURE__ */ c.jsx(Er, { size: 14 })
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
            n,
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
          children: /* @__PURE__ */ c.jsx(yr, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((S, b) => /* @__PURE__ */ c.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${b === t ? "active" : ""}`,
          onClick: () => C(b),
          "aria-label": `Go to page ${b + 1}`,
          "aria-current": b === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ c.jsx(ve, { size: 14 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              "Page ",
              b + 1
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
            O.stopPropagation(), w(b);
          },
          "aria-label": `Delete page ${b + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ c.jsx(hr, { size: 14 })
        }
      )
    ] }, S.id || `page-${b}`)) }),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: _,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ c.jsx(Fn, { size: 16 }),
          /* @__PURE__ */ c.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
He.propTypes = {
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
He.defaultProps = {
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
const Pr = xe.memo(He), _r = 50, kr = 50, ut = 50, Sr = 100, Cr = 500, Ze = De(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: a,
  onDeletePage: n,
  onPageSizeChange: r,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: l = !0,
  showPageManager: m = !0
}, f) => {
  const h = gt(), d = ht(), { pageSize: x, continuousContent: v, pageBoundaries: C, activePage: _, zoomLevel: w } = h, E = J(null), S = J(null), { currentFormat: b, formatText: O } = Wt(), {
    checkAndUpdateBoundaries: g,
    getCurrentPage: $,
    scrollToPage: H,
    updateBoundaries: G,
    triggerAutoReflow: K,
    removePageAndContent: Q,
    insertPageBreakAtBoundary: re
  } = gn(x, S, w), oe = be(() => Jt(x), [x]), [ie, ne] = Ee(!1), F = J(null), q = J(!1), V = J(!1), ee = J(!1), te = J(v);
  ae(() => {
    if (S.current) {
      if (!ee.current) {
        S.current.innerHTML = v, ee.current = !0, te.current = v;
        const u = setTimeout(() => {
          G();
        }, _r);
        return () => clearTimeout(u);
      }
      if (te.current !== v) {
        if (S.current.innerHTML !== v) {
          S.current.innerHTML = v;
          const U = setTimeout(() => {
            if (G(), q.current) {
              q.current = !1;
              const W = Math.max(0, C.length - 1);
              d.setActivePage(W), setTimeout(() => {
                H(W, E);
              }, ut);
            }
          }, kr);
          return te.current = v, () => clearTimeout(U);
        }
        te.current = v;
      }
    }
  }, [v, G, C.length, d, H]), ae(() => {
    s && ee.current && s(v);
  }, [v, s]), wt(f, () => ({
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
      d.updateContinuousContent(u), S.current && (S.current.innerHTML = u, setTimeout(() => {
        G();
      }, 50));
    }
  }), [v, d, G]), ae(() => {
    const u = setTimeout(() => {
      S.current && S.current.focus();
    }, 200);
    return () => clearTimeout(u);
  }, []);
  const p = Z((u) => {
    const U = u.currentTarget.innerHTML;
    d.updateContinuousContent(U), g(), K(200);
    const W = $(E);
    W !== _ && d.setActivePage(W);
  }, [g, d, $, _, K, E]), o = Z((u) => {
    d.updatePageSize(u), G({ pageSize: u }), r && r(u);
  }, [d, G, r]), y = Z((u) => {
    u < 0 || u >= C.length || (V.current = !0, d.setActivePage(u), H(u, E), setTimeout(() => {
      V.current = !1;
    }, Cr), t && t(u));
  }, [d, H, t, C.length]), A = Z(() => {
    const u = C.length + 1;
    re(u) && (q.current = !0, setTimeout(() => {
      if (q.current) {
        q.current = !1;
        const W = Math.max(0, C.length - 1);
        d.setActivePage(W), setTimeout(() => {
          H(W, E);
        }, ut);
      }
    }, 100)), a && a();
  }, [C.length, re, d, H, a]), P = Z(() => {
    const u = window.getSelection();
    if (u && u.rangeCount > 0) {
      if (!S?.current) return;
      const fe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${S.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, fe), setTimeout(() => {
        G();
        const _t = $(E);
        d.setActivePage(_t);
      }, 150);
    }
  }, [G, $, d, E]), N = Z((u) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Q(u) && (d.setActivePage(0), n && n(u));
  }, [C.length, Q, d, n]), R = Z(() => {
    d.zoomIn();
  }, [d]), k = Z(() => {
    d.zoomOut();
  }, [d]), j = Z(() => {
    d.resetZoom();
  }, [d]);
  ae(() => {
    const u = (U) => {
      if (!(!S.current && !E.current) && (U.ctrlKey || U.metaKey))
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
    !E.current || !S.current || V.current || (F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      if (V.current) {
        F.current = null;
        return;
      }
      const u = $(E);
      u !== _ && u >= 0 && d.setActivePage(u), F.current = null;
    }, Sr));
  }, [$, _, d]), I = be(() => {
    if (!v) return 0;
    const U = v.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return U ? U.length : 0;
  }, [v]), Y = C.length || 1;
  return ae(() => () => {
    F.current && clearTimeout(F.current);
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ c.jsx(
      $e,
      {
        currentFormat: b,
        onFormatText: O,
        onAddPageBreak: P
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ c.jsx(
        vr,
        {
          editorView: null,
          isCollapsed: ie,
          onToggle: () => ne((u) => !u),
          wordCount: I,
          pageCount: Y
        }
      ),
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: E,
          onScroll: D,
          children: /* @__PURE__ */ c.jsx(
            Ue,
            {
              content: v,
              dimensions: oe,
              pageSize: x,
              pageBoundaries: C,
              editorRef: S,
              onInput: p,
              onClick: () => S.current?.focus(),
              zoomLevel: w
            }
          )
        }
      ),
      m && /* @__PURE__ */ c.jsx("div", { className: "page-manager-sidebar", children: e ? xe.cloneElement(e, {
        onNavigate: y,
        onAddPage: A,
        onDeletePage: N,
        onPageSizeChange: o,
        zoomLevel: w,
        canZoomIn: je(w),
        canZoomOut: Ne(w),
        onZoomIn: R,
        onZoomOut: k,
        onZoomReset: j
      }) : /* @__PURE__ */ c.jsx(
        Pr,
        {
          pageBoundaries: C,
          activePage: _,
          pageSize: x,
          zoomLevel: w,
          canZoomIn: je(w),
          canZoomOut: Ne(w),
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
Ze.displayName = "HtmlEditor";
Ze.propTypes = {
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
Ze.defaultProps = {
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
class Pt extends xe.Component {
  constructor(t) {
    super(t), this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, a) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", a), this.setState({
      error: t,
      errorInfo: a
    }), this.props.onError && this.props.onError(t, a);
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
Pt.propTypes = {
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
Pt.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Ur = {
  A4: { width: X.A4.width, height: X.A4.height },
  Letter: { width: X.Letter.width, height: X.Letter.height },
  Legal: { width: X.Legal.width, height: X.Legal.height }
};
export {
  Gt as COMMON_FONT_SIZES,
  Be as DEFAULT_FONT_SIZE,
  Kt as DEFAULT_PAGE_SIZE,
  Rr as DocumentProvider,
  $e as EditorToolbar,
  Pt as ErrorBoundary,
  bt as FONT_SIZE_MAP,
  Ze as HtmlEditor,
  Ur as PAGE_DIMENSIONS,
  X as PAGE_SIZES,
  Pr as PageManager,
  Ue as PageView,
  vr as Sidebar,
  Br as clearImages,
  zr as deleteImage,
  $r as getAllImageKeys,
  Dr as getAvailablePageSizes,
  Lr as getImage,
  Jt as getPageDimensions,
  jr as getPixelValue,
  Nr as getPointValue,
  Mr as isValidFontSize,
  Ir as isValidPageSize,
  Ar as logger,
  Ft as pixelsToPoints,
  Yt as pointsToPixels,
  Tr as saveImage,
  gn as useContinuousReflow,
  ft as useDocument,
  ht as useDocumentActions,
  gt as useDocumentState,
  Wt as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
