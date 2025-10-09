import Ne, { createContext as Vt, useContext as Kt, useReducer as Xt, useMemo as Se, useState as ve, useCallback as z, useRef as J, useEffect as ie, forwardRef as Ke, createElement as Ge, useImperativeHandle as Jt } from "react";
import { v4 as Xe } from "uuid";
function Qt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _e = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function er() {
  if (st) return be;
  st = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(n, s, a) {
    var r = null;
    if (a !== void 0 && (r = "" + a), s.key !== void 0 && (r = "" + s.key), "key" in s) {
      a = {};
      for (var i in s)
        i !== "key" && (a[i] = s[i]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: r,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return be.Fragment = t, be.jsx = o, be.jsxs = o, be;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function tr() {
  return it || (it = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === te ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case A:
          return "Fragment";
        case k:
          return "Profiler";
        case I:
          return "StrictMode";
        case N:
          return "Suspense";
        case h:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case y:
            return "Portal";
          case S:
            return c.displayName || "Context";
          case O:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var P = c.render;
            return c = c.displayName, c || (c = P.displayName || P.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case R:
            return P = c.displayName || null, P !== null ? P : e(c.type) || "Memo";
          case j:
            P = c._payload, c = c._init;
            try {
              return e(c(P));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function o(c) {
      try {
        t(c);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var w = P.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return w.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(c);
      }
    }
    function n(c) {
      if (c === A) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === j)
        return "<...>";
      try {
        var P = e(c);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = q.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(c) {
      if (Q.call(c, "key")) {
        var P = Object.getOwnPropertyDescriptor(c, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function i(c, P) {
      function w() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: w,
        configurable: !0
      });
    }
    function f() {
      var c = e(this.type);
      return Z[c] || (Z[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, P, w, M, G, L) {
      var C = w.ref;
      return c = {
        $$typeof: E,
        type: c,
        key: P,
        props: w,
        _owner: M
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function d(c, P, w, M, G, L) {
      var C = P.children;
      if (C !== void 0)
        if (M)
          if (B(C)) {
            for (M = 0; M < C.length; M++)
              p(C[M]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(C);
      if (Q.call(P, "key")) {
        C = e(c);
        var H = Object.keys(P).filter(function(U) {
          return U !== "key";
        });
        M = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", b[C + M] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          C,
          H,
          C
        ), b[C + M] = !0);
      }
      if (C = null, w !== void 0 && (o(w), C = "" + w), r(P) && (o(P.key), C = "" + P.key), "key" in P) {
        w = {};
        for (var F in P)
          F !== "key" && (w[F] = P[F]);
      } else w = P;
      return C && i(
        w,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        C,
        w,
        s(),
        G,
        L
      );
    }
    function p(c) {
      g(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === j && (c._payload.status === "fulfilled" ? g(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function g(c) {
      return typeof c == "object" && c !== null && c.$$typeof === E;
    }
    var x = Ne, E = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), S = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), q = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, B = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var ee, Z = {}, K = x.react_stack_bottom_frame.bind(
      x,
      a
    )(), re = ne(n(a)), b = {};
    Ee.Fragment = A, Ee.jsx = function(c, P, w) {
      var M = 1e4 > q.recentlyCreatedOwnerStacks++;
      return d(
        c,
        P,
        w,
        !1,
        M ? Error("react-stack-top-frame") : K,
        M ? ne(n(c)) : re
      );
    }, Ee.jsxs = function(c, P, w) {
      var M = 1e4 > q.recentlyCreatedOwnerStacks++;
      return d(
        c,
        P,
        w,
        !0,
        M ? Error("react-stack-top-frame") : K,
        M ? ne(n(c)) : re
      );
    };
  })()), Ee;
}
var ct;
function rr() {
  return ct || (ct = 1, process.env.NODE_ENV === "production" ? _e.exports = er() : _e.exports = tr()), _e.exports;
}
var l = rr();
const Ue = 100, Fe = 50, We = 200, lt = 5, qe = (e) => e < We, Ze = (e) => e > Fe, nr = 96, Oe = (e) => Math.round(e * nr), Me = {
  NORMAL: {
    name: "Normal",
    label: 'Normal (1")',
    top: 1,
    bottom: 1,
    left: 1,
    right: 1
  },
  NARROW: {
    name: "Narrow",
    label: 'Narrow (0.5")',
    top: 0.5,
    bottom: 0.5,
    left: 0.5,
    right: 0.5
  },
  MODERATE: {
    name: "Moderate",
    label: 'Moderate (1" / 0.75")',
    top: 1,
    bottom: 1,
    left: 0.75,
    right: 0.75
  },
  WIDE: {
    name: "Wide",
    label: 'Wide (1" / 2")',
    top: 1,
    bottom: 1,
    left: 2,
    right: 2
  },
  OFFICE_2003: {
    name: "Office 2003",
    label: 'Office 2003 (1" / 1.25")',
    top: 1,
    bottom: 1,
    left: 1.25,
    right: 1.25
  }
}, de = "NORMAL", Ot = (e = de) => {
  const t = Me[e] || Me[de];
  return {
    top: Oe(t.top),
    bottom: Oe(t.bottom),
    left: Oe(t.left),
    right: Oe(t.right)
  };
}, ar = (e = de) => {
  const t = Ot(e);
  return t.top + t.bottom;
}, or = () => Object.keys(Me), sr = (e) => {
  const t = Me[e];
  return t ? t.label : "Unknown";
}, ce = {
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
}, kt = "A4", Je = (e) => {
  const t = ce[e] || ce[kt];
  return {
    width: t.width,
    height: t.height
  };
}, ua = (e) => Object.keys(ce).includes(e), da = () => Object.keys(ce), Te = kt, pe = "<p><br></p>", ir = "continuous", xe = (e, t = Te) => ({
  id: Xe(),
  index: e,
  size: t,
  content: pe,
  images: [],
  isBreakPoint: !1
}), we = (e) => typeof e != "string" || e.trim() === "" ? pe : e, Rt = (e, t = Te) => (e.length > 0 ? e : [xe(0, t)]).map((n, s) => ({
  id: n.id || Xe(),
  index: s,
  size: n.size || t,
  content: we(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), cr = (e = Te) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Je(e).height
}], Ye = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || Te, n = Rt(e.pages || [xe(0, o)], o);
  return {
    id: Xe(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || ir,
    continuousContent: e.continuousContent || pe,
    pageBoundaries: e.pageBoundaries || cr(o),
    zoomLevel: e.zoomLevel || Ue,
    pageMargins: e.pageMargins || de
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
  DUPLICATE_PAGE: "DUPLICATE_PAGE",
  SET_ZOOM_LEVEL: "SET_ZOOM_LEVEL",
  ZOOM_IN: "ZOOM_IN",
  ZOOM_OUT: "ZOOM_OUT",
  RESET_ZOOM: "RESET_ZOOM",
  UPDATE_PAGE_MARGINS: "UPDATE_PAGE_MARGINS"
}, lr = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case $.INITIALIZE_DOCUMENT: {
      const { initialContent: n = pe, pageSize: s = Te } = t.payload || {}, a = { ...xe(0, s), content: we(n) };
      return Ye({
        title: e.title,
        pageSize: s,
        pages: [a]
      });
    }
    case $.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case $.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: s } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: we(s)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case $.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = Rt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : s.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: o
      };
    }
    case $.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(n, 0, xe(n, e.pageSize));
      const a = s.map((i, f) => ({
        ...i,
        index: f,
        size: e.pageSize
      })), r = a.slice(0, -1).map((i, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: r,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case $.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(n, 1);
      const a = s.map((f, m) => ({
        ...f,
        index: m,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const i = a.slice(0, -1).map((f, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: r,
        pageBreaks: i,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case $.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const s = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= s ? e : {
        ...e,
        activePage: n,
        updatedAt: o
      };
    }
    case $.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        Je(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const s = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: n
      })), a = s.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: s,
        pageBreaks: a,
        updatedAt: o
      };
    }
    case $.RESET_DOCUMENT:
      return Ye();
    case $.UPDATE_CONTINUOUS_CONTENT: {
      const n = we(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case $.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const s = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: s,
        updatedAt: o
      };
    }
    case $.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: s } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + a + "<p><br></p>";
      else if (typeof n == "number") {
        const i = r.substring(0, n), f = r.substring(n);
        r = i + a + f;
      } else if (typeof s == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = r;
        const f = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && f.length === 0)
          r = r + a + "<p><br></p>";
        else if (s < f.length) {
          const m = f[s], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const p = document.createElement("p");
          p.innerHTML = "<br>", m.parentNode.insertBefore(d, m.nextSibling), d.parentNode.insertBefore(p, d.nextSibling), r = i.innerHTML;
        } else
          r = r + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case $.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const a = s.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, f) => {
        i.setAttribute("data-page-number", String(f + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: o
      };
    }
    case $.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let s = e.continuousContent, a = e.pages;
      return n === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== pe).join(`
`) || pe : e.continuousContent && e.continuousContent !== pe && (a = [{ ...xe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: s,
        pages: a,
        updatedAt: o
      };
    }
    case $.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Fe || n > We ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Fe} and ${We}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case $.ZOOM_IN: {
      if (!qe(e.zoomLevel))
        return e;
      const n = e.zoomLevel + lt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case $.ZOOM_OUT: {
      if (!Ze(e.zoomLevel))
        return e;
      const n = e.zoomLevel - lt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case $.RESET_ZOOM:
      return e.zoomLevel === Ue ? e : {
        ...e,
        zoomLevel: Ue,
        updatedAt: o
      };
    case $.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: o
      };
    }
    default:
      return e;
  }
}, wt = Vt(null), fa = ({ children: e, initialState: t = {} }) => {
  const [o, n] = Xt(lr, Ye(t)), s = Se(() => ({
    initializeDocument: (r) => n({ type: $.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: $.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: $.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: $.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: $.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: $.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: $.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: $.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: $.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: $.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: $.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: $.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: $.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: $.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: $.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: $.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: $.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: $.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: $.ZOOM_IN }),
    zoomOut: () => n({ type: $.ZOOM_OUT }),
    resetZoom: () => n({ type: $.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: $.UPDATE_PAGE_MARGINS, payload: r })
  }), []), a = Se(() => ({
    state: o,
    actions: s,
    dispatch: n
  }), [o, s]);
  return /* @__PURE__ */ l.jsx(wt.Provider, { value: a, children: e });
}, St = () => {
  const e = Kt(wt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Mt = () => {
  const { state: e } = St();
  return e;
}, Ct = () => {
  const { actions: e } = St();
  return e;
};
var ke = { exports: {} }, Re = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function ur() {
  if (ut) return Y;
  ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function O(u) {
    if (typeof u == "object" && u !== null) {
      var N = u.$$typeof;
      switch (N) {
        case t:
          switch (u = u.type, u) {
            case f:
            case m:
            case n:
            case a:
            case s:
            case p:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case i:
                case d:
                case E:
                case x:
                case r:
                  return u;
                default:
                  return N;
              }
          }
        case o:
          return N;
      }
    }
  }
  function S(u) {
    return O(u) === m;
  }
  return Y.AsyncMode = f, Y.ConcurrentMode = m, Y.ContextConsumer = i, Y.ContextProvider = r, Y.Element = t, Y.ForwardRef = d, Y.Fragment = n, Y.Lazy = E, Y.Memo = x, Y.Portal = o, Y.Profiler = a, Y.StrictMode = s, Y.Suspense = p, Y.isAsyncMode = function(u) {
    return S(u) || O(u) === f;
  }, Y.isConcurrentMode = S, Y.isContextConsumer = function(u) {
    return O(u) === i;
  }, Y.isContextProvider = function(u) {
    return O(u) === r;
  }, Y.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, Y.isForwardRef = function(u) {
    return O(u) === d;
  }, Y.isFragment = function(u) {
    return O(u) === n;
  }, Y.isLazy = function(u) {
    return O(u) === E;
  }, Y.isMemo = function(u) {
    return O(u) === x;
  }, Y.isPortal = function(u) {
    return O(u) === o;
  }, Y.isProfiler = function(u) {
    return O(u) === a;
  }, Y.isStrictMode = function(u) {
    return O(u) === s;
  }, Y.isSuspense = function(u) {
    return O(u) === p;
  }, Y.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === m || u === a || u === s || u === p || u === g || typeof u == "object" && u !== null && (u.$$typeof === E || u.$$typeof === x || u.$$typeof === r || u.$$typeof === i || u.$$typeof === d || u.$$typeof === A || u.$$typeof === I || u.$$typeof === k || u.$$typeof === y);
  }, Y.typeOf = O, Y;
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
var dt;
function dr() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function O(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === m || _ === a || _ === s || _ === p || _ === g || typeof _ == "object" && _ !== null && (_.$$typeof === E || _.$$typeof === x || _.$$typeof === r || _.$$typeof === i || _.$$typeof === d || _.$$typeof === A || _.$$typeof === I || _.$$typeof === k || _.$$typeof === y);
    }
    function S(_) {
      if (typeof _ == "object" && _ !== null) {
        var se = _.$$typeof;
        switch (se) {
          case t:
            var he = _.type;
            switch (he) {
              case f:
              case m:
              case n:
              case a:
              case s:
              case p:
                return he;
              default:
                var Pe = he && he.$$typeof;
                switch (Pe) {
                  case i:
                  case d:
                  case E:
                  case x:
                  case r:
                    return Pe;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var u = f, N = m, h = i, R = r, j = t, W = d, te = n, q = E, Q = x, B = o, ne = a, ee = s, Z = p, K = !1;
    function re(_) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(_) || S(_) === f;
    }
    function b(_) {
      return S(_) === m;
    }
    function c(_) {
      return S(_) === i;
    }
    function P(_) {
      return S(_) === r;
    }
    function w(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function M(_) {
      return S(_) === d;
    }
    function G(_) {
      return S(_) === n;
    }
    function L(_) {
      return S(_) === E;
    }
    function C(_) {
      return S(_) === x;
    }
    function H(_) {
      return S(_) === o;
    }
    function F(_) {
      return S(_) === a;
    }
    function U(_) {
      return S(_) === s;
    }
    function ae(_) {
      return S(_) === p;
    }
    V.AsyncMode = u, V.ConcurrentMode = N, V.ContextConsumer = h, V.ContextProvider = R, V.Element = j, V.ForwardRef = W, V.Fragment = te, V.Lazy = q, V.Memo = Q, V.Portal = B, V.Profiler = ne, V.StrictMode = ee, V.Suspense = Z, V.isAsyncMode = re, V.isConcurrentMode = b, V.isContextConsumer = c, V.isContextProvider = P, V.isElement = w, V.isForwardRef = M, V.isFragment = G, V.isLazy = L, V.isMemo = C, V.isPortal = H, V.isProfiler = F, V.isStrictMode = U, V.isSuspense = ae, V.isValidElementType = O, V.typeOf = S;
  })()), V;
}
var ft;
function Nt() {
  return ft || (ft = 1, process.env.NODE_ENV === "production" ? Re.exports = ur() : Re.exports = dr()), Re.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Le, pt;
function fr() {
  if (pt) return Le;
  pt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var r = {}, i = 0; i < 10; i++)
        r["_" + String.fromCharCode(i)] = i;
      var f = Object.getOwnPropertyNames(r).map(function(d) {
        return r[d];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        m[d] = d;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = s() ? Object.assign : function(a, r) {
    for (var i, f = n(a), m, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var p in i)
        t.call(i, p) && (f[p] = i[p]);
      if (e) {
        m = e(i);
        for (var g = 0; g < m.length; g++)
          o.call(i, m[g]) && (f[m[g]] = i[m[g]]);
      }
    }
    return f;
  }, Le;
}
var De, gt;
function Qe() {
  if (gt) return De;
  gt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return De = e, De;
}
var ze, ht;
function jt() {
  return ht || (ht = 1, ze = Function.call.bind(Object.prototype.hasOwnProperty)), ze;
}
var Be, mt;
function pr() {
  if (mt) return Be;
  mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Qe(), o = {}, n = /* @__PURE__ */ jt();
    e = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function s(a, r, i, f, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var p;
          try {
            if (typeof a[d] != "function") {
              var g = Error(
                (f || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = a[d](r, d, f, i, null, t);
          } catch (E) {
            p = E;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in o)) {
            o[p.message] = !0;
            var x = m ? m() : "";
            e(
              "Failed " + i + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Be = s, Be;
}
var He, yt;
function gr() {
  if (yt) return He;
  yt = 1;
  var e = Nt(), t = fr(), o = /* @__PURE__ */ Qe(), n = /* @__PURE__ */ jt(), s = /* @__PURE__ */ pr(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var f = "Warning: " + i;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return He = function(i, f) {
    var m = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(b) {
      var c = b && (m && b[m] || b[d]);
      if (typeof c == "function")
        return c;
    }
    var g = "<<anonymous>>", x = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: k(),
      arrayOf: O,
      element: S(),
      elementType: u(),
      instanceOf: N,
      node: W(),
      objectOf: R,
      oneOf: h,
      oneOfType: j,
      shape: q,
      exact: Q
    };
    function E(b, c) {
      return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
    }
    function y(b, c) {
      this.message = b, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function A(b) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, P = 0;
      function w(G, L, C, H, F, U, ae) {
        if (H = H || g, U = U || C, ae !== o) {
          if (f) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = H + ":" + C;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, P++);
          }
        }
        return L[C] == null ? G ? L[C] === null ? new y("The " + F + " `" + U + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new y("The " + F + " `" + U + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : b(L, C, H, F, U);
      }
      var M = w.bind(null, !1);
      return M.isRequired = w.bind(null, !0), M;
    }
    function I(b) {
      function c(P, w, M, G, L, C) {
        var H = P[w], F = ee(H);
        if (F !== b) {
          var U = Z(H);
          return new y(
            "Invalid " + G + " `" + L + "` of type " + ("`" + U + "` supplied to `" + M + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return A(c);
    }
    function k() {
      return A(r);
    }
    function O(b) {
      function c(P, w, M, G, L) {
        if (typeof b != "function")
          return new y("Property `" + L + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var C = P[w];
        if (!Array.isArray(C)) {
          var H = ee(C);
          return new y("Invalid " + G + " `" + L + "` of type " + ("`" + H + "` supplied to `" + M + "`, expected an array."));
        }
        for (var F = 0; F < C.length; F++) {
          var U = b(C, F, M, G, L + "[" + F + "]", o);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return A(c);
    }
    function S() {
      function b(c, P, w, M, G) {
        var L = c[P];
        if (!i(L)) {
          var C = ee(L);
          return new y("Invalid " + M + " `" + G + "` of type " + ("`" + C + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(b);
    }
    function u() {
      function b(c, P, w, M, G) {
        var L = c[P];
        if (!e.isValidElementType(L)) {
          var C = ee(L);
          return new y("Invalid " + M + " `" + G + "` of type " + ("`" + C + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(b);
    }
    function N(b) {
      function c(P, w, M, G, L) {
        if (!(P[w] instanceof b)) {
          var C = b.name || g, H = re(P[w]);
          return new y("Invalid " + G + " `" + L + "` of type " + ("`" + H + "` supplied to `" + M + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return A(c);
    }
    function h(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(P, w, M, G, L) {
        for (var C = P[w], H = 0; H < b.length; H++)
          if (E(C, b[H]))
            return null;
        var F = JSON.stringify(b, function(ae, _) {
          var se = Z(_);
          return se === "symbol" ? String(_) : _;
        });
        return new y("Invalid " + G + " `" + L + "` of value `" + String(C) + "` " + ("supplied to `" + M + "`, expected one of " + F + "."));
      }
      return A(c);
    }
    function R(b) {
      function c(P, w, M, G, L) {
        if (typeof b != "function")
          return new y("Property `" + L + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var C = P[w], H = ee(C);
        if (H !== "object")
          return new y("Invalid " + G + " `" + L + "` of type " + ("`" + H + "` supplied to `" + M + "`, expected an object."));
        for (var F in C)
          if (n(C, F)) {
            var U = b(C, F, M, G, L + "." + F, o);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return A(c);
    }
    function j(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < b.length; c++) {
        var P = b[c];
        if (typeof P != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(P) + " at index " + c + "."
          ), r;
      }
      function w(M, G, L, C, H) {
        for (var F = [], U = 0; U < b.length; U++) {
          var ae = b[U], _ = ae(M, G, L, C, H, o);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && F.push(_.data.expectedType);
        }
        var se = F.length > 0 ? ", expected one of type [" + F.join(", ") + "]" : "";
        return new y("Invalid " + C + " `" + H + "` supplied to " + ("`" + L + "`" + se + "."));
      }
      return A(w);
    }
    function W() {
      function b(c, P, w, M, G) {
        return B(c[P]) ? null : new y("Invalid " + M + " `" + G + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return A(b);
    }
    function te(b, c, P, w, M) {
      return new y(
        (b || "React class") + ": " + c + " type `" + P + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function q(b) {
      function c(P, w, M, G, L) {
        var C = P[w], H = ee(C);
        if (H !== "object")
          return new y("Invalid " + G + " `" + L + "` of type `" + H + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var F in b) {
          var U = b[F];
          if (typeof U != "function")
            return te(M, G, L, F, Z(U));
          var ae = U(C, F, M, G, L + "." + F, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return A(c);
    }
    function Q(b) {
      function c(P, w, M, G, L) {
        var C = P[w], H = ee(C);
        if (H !== "object")
          return new y("Invalid " + G + " `" + L + "` of type `" + H + "` " + ("supplied to `" + M + "`, expected `object`."));
        var F = t({}, P[w], b);
        for (var U in F) {
          var ae = b[U];
          if (n(b, U) && typeof ae != "function")
            return te(M, G, L, U, Z(ae));
          if (!ae)
            return new y(
              "Invalid " + G + " `" + L + "` key `" + U + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(P[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var _ = ae(C, U, M, G, L + "." + U, o);
          if (_)
            return _;
        }
        return null;
      }
      return A(c);
    }
    function B(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(B);
          if (b === null || i(b))
            return !0;
          var c = p(b);
          if (c) {
            var P = c.call(b), w;
            if (c !== b.entries) {
              for (; !(w = P.next()).done; )
                if (!B(w.value))
                  return !1;
            } else
              for (; !(w = P.next()).done; ) {
                var M = w.value;
                if (M && !B(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(b, c) {
      return b === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function ee(b) {
      var c = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : ne(c, b) ? "symbol" : c;
    }
    function Z(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var c = ee(b);
      if (c === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function K(b) {
      var c = Z(b);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function re(b) {
      return !b.constructor || !b.constructor.name ? g : b.constructor.name;
    }
    return x.checkPropTypes = s, x.resetWarningCache = s.resetWarningCache, x.PropTypes = x, x;
  }, He;
}
var $e, bt;
function hr() {
  if (bt) return $e;
  bt = 1;
  var e = /* @__PURE__ */ Qe();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, $e = function() {
    function n(r, i, f, m, d, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function s() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, $e;
}
var Et;
function mr() {
  if (Et) return ke.exports;
  if (Et = 1, process.env.NODE_ENV !== "production") {
    var e = Nt(), t = !0;
    ke.exports = /* @__PURE__ */ gr()(e.isElement, t);
  } else
    ke.exports = /* @__PURE__ */ hr()();
  return ke.exports;
}
var yr = /* @__PURE__ */ mr();
const v = /* @__PURE__ */ Qt(yr), It = {
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
}, br = [
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
], et = "16px", Er = (e) => Math.round(e * 96 / 72), xr = (e) => Math.round(e * 72 / 96 * 2) / 2, pa = (e) => {
  const t = Object.values(It).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Er(e)}px`;
}, ga = (e) => {
  const t = parseInt(e), o = Object.values(It).find((n) => n.px === t);
  return o ? o.pt : xr(t);
}, ha = (e) => {
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
}, ge = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, T = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function ma({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: r,
  options: i = ge
}) {
  const f = n - t, m = s - o;
  let d = a, p = r;
  switch (e) {
    case T.TOP_LEFT:
      d = Math.max(i.minWidth, a - f), p = Math.max(i.minHeight, r - m);
      break;
    case T.TOP_RIGHT:
      d = Math.max(i.minWidth, a + f), p = Math.max(i.minHeight, r - m);
      break;
    case T.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - f), p = Math.max(i.minHeight, r + m);
      break;
    case T.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + f), p = Math.max(i.minHeight, r + m);
      break;
    case T.TOP:
      p = Math.max(i.minHeight, r - m);
      break;
    case T.BOTTOM:
      p = Math.max(i.minHeight, r + m);
      break;
    case T.LEFT:
      d = Math.max(i.minWidth, a - f);
      break;
    case T.RIGHT:
      d = Math.max(i.minWidth, a + f);
      break;
    default:
      return { width: d, height: p };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const g = a / r;
    [
      T.TOP_LEFT,
      T.TOP_RIGHT,
      T.BOTTOM_LEFT,
      T.BOTTOM_RIGHT
    ].includes(e) ? d / g > p ? p = Math.max(i.minHeight, d / g) : d = Math.max(i.minWidth, p * g) : [T.TOP, T.BOTTOM].includes(e) ? d = p * g : [T.LEFT, T.RIGHT].includes(e) && (p = d / g);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (p = d / (a / r))), i.maxHeight && p > i.maxHeight && (p = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = p * (a / r))), d = Math.max(i.minWidth, d), p = Math.max(i.minHeight, p), {
    width: Math.round(d),
    height: Math.round(p)
  };
}
function fe(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ya(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ba(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Lt(e) {
  if (!fe(e)) return null;
  const t = document.createElement("div");
  t.className = "image-resize-overlay", t.style.position = "absolute", t.style.zIndex = "1000", t.style.pointerEvents = "none";
  const o = e.getBoundingClientRect(), n = window.pageYOffset || document.documentElement.scrollTop, s = window.pageXOffset || document.documentElement.scrollLeft;
  t.style.top = `${o.top + n}px`, t.style.left = `${o.left + s}px`, t.style.width = `${o.width}px`, t.style.height = `${o.height}px`, Object.values(T).forEach((i) => {
    const f = document.createElement("div");
    f.className = `resize-handler resize-handler-${i}`, f.dataset.handler = i, f.style.position = "absolute", f.style.width = "10px", f.style.height = "10px", f.style.backgroundColor = "#007bff", f.style.border = "2px solid white", f.style.borderRadius = "50%", f.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", f.style.cursor = vr(i), f.style.pointerEvents = "all", Dt(f, i, o.width, o.height), t.appendChild(f);
  });
  const r = document.createElement("div");
  return r.className = "aspect-ratio-toggle", r.innerHTML = "🔗", r.title = "Toggle aspect ratio preservation", r.style.position = "absolute", r.style.top = "-15px", r.style.right = "-15px", r.style.width = "20px", r.style.height = "20px", r.style.backgroundColor = "#007bff", r.style.color = "white", r.style.borderRadius = "50%", r.style.display = "flex", r.style.alignItems = "center", r.style.justifyContent = "center", r.style.fontSize = "12px", r.style.cursor = "pointer", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.pointerEvents = "all", t.appendChild(r), t;
}
function vr(e) {
  switch (e) {
    case T.TOP_LEFT:
    case T.BOTTOM_RIGHT:
      return "nwse-resize";
    case T.TOP_RIGHT:
    case T.BOTTOM_LEFT:
      return "nesw-resize";
    case T.TOP:
    case T.BOTTOM:
      return "ns-resize";
    case T.LEFT:
    case T.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Dt(e, t, o, n) {
  switch (t) {
    case T.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case T.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case T.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case T.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case T.TOP:
      e.style.top = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case T.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case T.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case T.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ve(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect(), n = window.pageYOffset || document.documentElement.scrollTop, s = window.pageXOffset || document.documentElement.scrollLeft;
  e.style.top = `${o.top + n}px`, e.style.left = `${o.left + s}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((r) => {
    const i = r.dataset.handler;
    Dt(r, i, o.width, o.height);
  });
}
function me(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Tr = {
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
}, xt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: et,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Ar = () => {
  const [e, t] = ve(xt), o = z((x) => {
    t((E) => ({
      ...E,
      alignLeft: x === "left",
      alignCenter: x === "center",
      alignRight: x === "right",
      alignJustify: x === "justify"
    }));
  }, []), n = z((x) => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return !1;
      const y = E.getRangeAt(0);
      if (!y.toString())
        return t((I) => ({ ...I, fontSize: x })), !1;
      try {
        const I = document.createElement("span");
        I.style.fontSize = x;
        const k = y.extractContents();
        return I.appendChild(k), y.insertNode(I), y.selectNodeContents(I), E.removeAllRanges(), E.addRange(y), t((O) => ({ ...O, fontSize: x })), !0;
      } catch {
        const k = Tr[x] || "2";
        return document.execCommand("fontSize", !1, k), t((O) => ({ ...O, fontSize: x })), !0;
      }
    } catch (E) {
      return console.warn("[useFormatting] Font size change failed:", E), !1;
    }
  }, []), s = z((x, E = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (x === "fontSize") {
        n(E);
        return;
      }
      switch (document.execCommand(x, !1, E) || console.warn(`[useFormatting] Command "${x}" failed`), x) {
        case "bold":
          t((A) => ({ ...A, bold: !A.bold }));
          break;
        case "italic":
          t((A) => ({ ...A, italic: !A.italic }));
          break;
        case "underline":
          t((A) => ({ ...A, underline: !A.underline }));
          break;
        case "strikethrough":
          t((A) => ({ ...A, strikethrough: !A.strikethrough }));
        case "justifyLeft":
          o("left");
          break;
        case "justifyCenter":
          o("center");
        case "justifyRight":
          o("right");
        case "justifyFull":
          o("justify");
        case "fontName":
          t((A) => ({ ...A, fontFamily: E }));
        case "formatBlock":
          t((A) => ({ ...A, headingLevel: E }));
        default:
          break;
      }
    } catch (y) {
      console.warn(`[useFormatting] Error executing command "${x}":`, y);
    }
  }, [n, o]), a = J(null), r = J(null), i = J(null), f = J(null), m = J(ge);
  z((x) => {
    if (!fe(x)) return;
    a.current && (me(a.current), a.current = null), x.classList.add("selected");
    const E = Lt(x);
    E && (a.current = E, r.current = x, document.body.appendChild(E), t((y) => ({
      ...y,
      imageSelected: !0,
      preserveAspectRatio: m.current.preserveAspectRatio
    })));
  }, []);
  const d = z(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (me(a.current), a.current = null), i.current = null, f.current = null, t((x) => ({
      ...x,
      imageSelected: !1
    }));
  }, []), p = z(() => {
    const x = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: x,
      aspectRatio: x
    }, t((E) => ({
      ...E,
      preserveAspectRatio: x
    }));
  }, []);
  z((x, E, y) => {
    r.current && (i.current = {
      x: E,
      y,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight
    }, f.current = x, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Pr(x));
  }, []), z((x, E) => {
    if (!r.current || !i.current || !f.current) return;
    const { x: y, y: A, width: I, height: k } = i.current, O = f.current, S = _r({
      handler: O,
      startX: y,
      startY: A,
      currentX: x,
      currentY: E,
      startWidth: I,
      startHeight: k,
      options: m.current
    });
    Or(r.current, S), a.current && Ve(a.current, r.current);
  }, []), z(() => {
    if (i.current = null, f.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
      const x = new Event("input", { bubbles: !0, cancelable: !0 });
      r.current.dispatchEvent(x);
    }
  }, []);
  const g = z(() => {
    d(), t(xt);
  }, [d]);
  return ie(() => () => {
    a.current && me(a.current);
  }, []), {
    currentFormat: e,
    formatText: s,
    resetFormat: g,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: p
  };
};
function Pr(e) {
  switch (e) {
    case T.TOP_LEFT:
    case T.BOTTOM_RIGHT:
      return "nwse-resize";
    case T.TOP_RIGHT:
    case T.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case T.BOTTOM:
      return "ns-resize";
    case T.LEFT:
    case T.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function _r({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: r,
  options: i = ge
}) {
  const f = n - t, m = s - o;
  let d = a, p = r;
  switch (e) {
    case T.TOP_LEFT:
      d = Math.max(i.minWidth, a - f), p = Math.max(i.minHeight, r - m);
      break;
    case T.TOP_RIGHT:
      d = Math.max(i.minWidth, a + f), p = Math.max(i.minHeight, r - m);
      break;
    case T.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - f), p = Math.max(i.minHeight, r + m);
      break;
    case T.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + f), p = Math.max(i.minHeight, r + m);
      break;
    case T.TOP:
      p = Math.max(i.minHeight, r - m);
      break;
    case T.BOTTOM:
      p = Math.max(i.minHeight, r + m);
      break;
    case T.LEFT:
      d = Math.max(i.minWidth, a - f);
      break;
    case T.RIGHT:
      d = Math.max(i.minWidth, a + f);
      break;
    default:
      return { width: d, height: p };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const g = a / r;
    [
      T.TOP_LEFT,
      T.TOP_RIGHT,
      T.BOTTOM_LEFT,
      T.BOTTOM_RIGHT
    ].includes(e) ? d / g > p ? p = Math.max(i.minHeight, d / g) : d = Math.max(i.minWidth, p * g) : [T.TOP, T.BOTTOM].includes(e) ? d = p * g : [T.LEFT, T.RIGHT].includes(e) && (p = d / g);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (p = d / (a / r))), i.maxHeight && p > i.maxHeight && (p = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = p * (a / r))), d = Math.max(i.minWidth, d), p = Math.max(i.minHeight, p), {
    width: Math.round(d),
    height: Math.round(p)
  };
}
function Or(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const ye = 'page-break, [data-page-break="true"]', zt = (e) => ce[e] || ce.A4, kr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = zt(o), s = e.querySelectorAll(ye), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((f, m) => {
    const p = f.getBoundingClientRect().top - r.top + i;
    a.push({
      id: `page-${m + 1}`,
      pageNumber: m + 2,
      top: p,
      height: n.height
    });
  }), a;
}, Bt = (e, t = 100, o = de) => {
  const n = zt(e), s = ar(o), a = n.height - s, r = t / 100;
  return a / r;
}, Rr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(ye);
    if (o.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), s = n.top + n.height / 2;
    for (let a = o.length - 1; a >= 0; a--)
      if (o[a].getBoundingClientRect().top < s)
        return a + 1;
    return 0;
  } catch (o) {
    return console.warn("[getCurrentPage] Failed to calculate page:", o), 0;
  }
}, vt = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let o = [], n = [];
  for (const s of t)
    s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true" ? n.length > 0 && (o.push(n), n = []) : n.push(s);
  return n.length > 0 && o.push(n), o.length === 0 && t.length > 0 && o.push(t.filter(
    (s) => !(s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true")
  )), o;
}, wr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Sr = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, Mr = (e, t, o, n, s, a, r) => {
  if (!e)
    return !1;
  try {
    const f = Bt(o, n, s) * (t - 1), m = Array.from(e.children);
    let d = 0, p = null;
    for (let g = 0; g < m.length; g++) {
      const x = m[g];
      if (x.tagName === "PAGE-BREAK" || x.getAttribute("data-page-break") === "true")
        continue;
      const E = wr(x);
      if (d + E > f) {
        p = x;
        break;
      }
      d += E;
    }
    if (p) {
      const g = document.createElement("page-break");
      if (g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), p.parentNode.insertBefore(g, p), a) {
        const x = e.innerHTML;
        a(x);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const g = document.createElement("page-break");
      g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), e.appendChild(g);
      const x = document.createElement("p");
      if (x.innerHTML = "<br>", e.appendChild(x), a) {
        const E = e.innerHTML;
        a(E);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Cr = (e, t, o, n, s, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const f = Array.from(e.querySelectorAll(ye));
    if (t > f.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const m = window.getSelection();
    let d = !1, p = [], g = null;
    if (t === 0) {
      const E = f[0];
      if (!E)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let y = e.firstChild;
      for (; y && y !== E; )
        p.push(y), y = y.nextSibling;
      g = E;
    } else {
      const E = f[t - 1];
      if (!E)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const y = f[t];
      let A = E.nextSibling;
      for (; A && A !== y; )
        p.push(A), A = A.nextSibling;
      g = E;
    }
    if (m && m.rangeCount > 0) {
      const y = m.getRangeAt(0).startContainer;
      for (const A of p)
        if (A.contains(y) || A === y) {
          d = !0;
          break;
        }
    }
    if (g && g.parentNode && g.remove(), p.forEach((E) => {
      E.parentNode && E.remove();
    }), e.querySelectorAll(ye).forEach((E, y) => {
      E.setAttribute("data-page-number", String(y + 2));
    }), d && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const E = e.innerHTML;
      n(E);
    }
    return s && setTimeout(() => {
      s(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (f) {
    return console.error("[removePageAndContent] Failed to remove page:", f), !1;
  }
}, Nr = 200, jr = 50, Tt = 3, Ir = 20, Ht = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Lr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = Ht(a);
    if (r < 1)
      continue;
    if (o + r > t)
      return n === null ? s > 0 ? {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: o
      } : null : {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: o
      };
    o += r, n = a;
  }
  return null;
}, Dr = (e, t, o, n, s, a, r, i) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const f = Bt(t, o, n);
    let m = vt(e), d = !1, p = 0;
    for (let g = 0; g < m.length && p < Tt; g++) {
      const x = m[g], E = Lr(x, f);
      if (E && E.overflowIndex > 0) {
        let y = 0;
        for (let O = 0; O < x.length; O++) {
          const S = x[O];
          S && S.getBoundingClientRect && (y += Ht(S));
        }
        if (y - f < Ir)
          continue;
        const I = g + 2;
        Sr(E.overflowElement, I) && (d = !0, p++, m = vt(e));
      }
    }
    if (d) {
      if (s) {
        const g = e.innerHTML;
        s(g);
      }
      setTimeout(() => {
        a && a(), p >= Tt && i && setTimeout(() => {
          r.current || i();
        }, 100);
      }, jr);
    }
    return d;
  } catch (f) {
    return console.warn("[checkAndReflow] Reflow failed:", f), !1;
  } finally {
    r.current = !1;
  }
}, zr = (e, t, o = Nr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, Br = 400, $t = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, n = 0;
      if (t === 0)
        o = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(ye)[t - 1];
        a && a.nextSibling && (o = a.nextSibling, n = 0);
      }
      if (o) {
        const s = document.createRange(), a = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? s.setStart(o, n) : s.setStart(o, 0), s.collapse(!0), a.removeAllRanges(), a.addRange(s);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, Hr = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (o === 0)
      s = t;
    else {
      const r = t.querySelectorAll(ye)[o - 1];
      if (r)
        s = r;
      else {
        console.warn("[scrollToPage] Page break not found for page", o);
        return;
      }
    }
    if (s) {
      const a = s.getBoundingClientRect(), r = e.getBoundingClientRect(), i = e.scrollTop + (a.top - r.top);
      console.log("[scrollToPage] Scrolling to page", o, "scrollTop:", i), e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(o) : $t(t, o);
      }, Br);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, $r = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, Gr = 300, Ur = (e, t, o = 100, n = "NARROW") => {
  const s = Ct(), a = J(null), r = J(null), i = J(e), f = J(o), m = J(n), d = J(!1);
  ie(() => {
    i.current = e;
  }, [e]), ie(() => {
    f.current = o;
  }, [o]), ie(() => {
    m.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const p = z((u = {}) => t?.current ? kr(t.current, u) : [], [t]), g = z((u = {}) => {
    const N = p(u);
    return s.updatePageBoundaries(N), N;
  }, [p, s]), x = z(async (u) => {
    if (!t?.current)
      return !1;
    const N = i.current || "A4", h = f.current || 100, R = m.current || "NARROW";
    return Mr(
      t.current,
      u,
      N,
      h,
      R,
      s.updateContinuousContent,
      g
    );
  }, [t, s, g]), E = z(() => {
    if (!t?.current)
      return;
    const u = i.current || "A4", N = f.current || 100, h = m.current || "NARROW";
    Dr(
      t.current,
      u,
      N,
      h,
      s.updateContinuousContent,
      g,
      d,
      E
    );
  }, [t, s, g]), y = z((u) => {
    zr(E, r, u);
  }, [E]), A = z((u = {}) => {
    const N = typeof u.delay == "number" ? u.delay : Gr;
    $r(g, a, u, N);
  }, [g]), I = z((u) => !u?.current || !t?.current ? 0 : Rr(u.current, t.current), [t]), k = z((u) => {
    t?.current && $t(t.current, u);
  }, [t]), O = z((u, N) => {
    if (!N?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Hr(N.current, t.current, u, k);
  }, [t, k]), S = z((u) => t?.current ? Cr(
    t.current,
    u,
    p,
    s.updateContinuousContent,
    g,
    k,
    E
  ) : !1, [t, p, s, g, k, E]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: A,
    updateBoundaries: g,
    getCurrentPage: I,
    scrollToPage: O,
    positionCursorAtPage: k,
    checkAndReflow: E,
    triggerAutoReflow: y,
    removePageAndContent: S,
    insertPageBreakAtBoundary: x,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), At = (e) => {
  const t = Wr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Gt = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), qr = (e) => {
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
var Zr = {
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
const Yr = Ke(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: r,
    ...i
  }, f) => Ge(
    "svg",
    {
      ref: f,
      ...Zr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: Gt("lucide", s),
      ...!a && !qr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...r.map(([m, d]) => Ge(m, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = (e, t) => {
  const o = Ke(
    ({ className: n, ...s }, a) => Ge(Yr, {
      ref: a,
      iconNode: t,
      className: Gt(
        `lucide-${Fr(At(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return o.displayName = At(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Kr = X("bold", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Jr = X("chevron-left", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], en = X("chevron-right", Qr);
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
], rn = X("file-check", tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ce = X("file-text", nn);
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
], on = X("hash", an);
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
], cn = X("heading-1", sn);
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
], un = X("heading-2", ln);
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
], fn = X("heading-3", dn);
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
], gn = X("image", pn);
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
], mn = X("italic", hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], bn = X("link", yn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], xn = X("list-ordered", En);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Ut = X("list", vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], An = X("plus", Tn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], _n = X("redo", Pn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], kn = X("settings", On);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], wn = X("strikethrough", Rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Mn = X("table", Sn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Nn = X("text-align-center", Cn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], In = X("text-align-end", jn);
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
], Dn = X("text-align-justify", Ln);
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
], Bn = X("text-align-start", zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], $n = X("underline", Hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Un = X("undo", Gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Wn = X("x", Fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Zn = X("zoom-in", qn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Vn = X("zoom-out", Yn), Kn = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: s }) => {
  const a = Mt(), { pages: r, activePage: i, continuousContent: f, editorMode: m } = a, [d, p] = ve(0), [g, x] = ve([]);
  ie(() => {
    if (n !== void 0 && s !== void 0) {
      if (p(n), f) {
        const I = document.createElement("div");
        I.innerHTML = f;
        const k = I.querySelectorAll("h1, h2, h3, h4, h5, h6"), O = Array.from(k).map((S, u) => {
          const N = parseInt(S.tagName.charAt(1)), h = S.textContent.trim();
          return h ? {
            id: `heading-${u}`,
            level: N,
            text: h,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        x(O);
      }
      return;
    }
    let y = 0;
    const A = [];
    r.forEach((I, k) => {
      if (I.content) {
        const O = document.createElement("div");
        O.innerHTML = I.content;
        const u = (O.textContent || O.innerText || "").trim().split(/\s+/).filter((h) => h.length > 0);
        y += u.length, O.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h, R) => {
          const j = parseInt(h.tagName.charAt(1)), W = h.textContent.trim();
          W && A.push({
            id: `heading-${k}-${R}`,
            level: j,
            text: W,
            page: k + 1
          });
        });
      }
    }), p(y), x(A);
  }, [r, n, s, f]);
  const E = s !== void 0 ? s : r.length;
  return /* @__PURE__ */ l.jsxs(
    "aside",
    {
      className: `sidebar ${t ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ l.jsx(Ce, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(en, { size: 16 }) : /* @__PURE__ */ l.jsx(Jr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(rn, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: E })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(on, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: d.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: i + 1 })
            ] })
          ] }),
          g.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(Ut, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: g.map((y) => {
              const A = y.level === 1 ? cn : y.level === 2 ? un : fn;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${y.level}`,
                  style: { marginLeft: `${(y.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(A, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: y.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      y.page
                    ] })
                  ]
                },
                y.id
              );
            }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ l.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ l.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
}, Xn = "html-editor-storage", Jn = 1, le = "images";
function Qn() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Ae() {
  return new Promise((e, t) => {
    const o = indexedDB.open(Xn, Jn);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (n) => {
      const s = n.target.result;
      s.objectStoreNames.contains(le) || s.createObjectStore(le, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function ea(e) {
  return new Promise((t, o) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      o(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      o(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const s = new FileReader();
    s.onload = async (a) => {
      const r = a.target.result, f = r.split(",")[1].length * 3 / 4;
      if (f > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = await Ae(), d = `editor-image-${Qn()}`, g = m.transaction([le], "readwrite").objectStore(le), x = {
          key: d,
          dataUrl: r,
          size: f,
          type: e.type,
          timestamp: Date.now()
        }, E = g.add(x);
        E.onsuccess = () => {
          m.close(), t(d);
        }, E.onerror = () => {
          m.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (m) {
        o(m);
      }
    }, s.onerror = () => {
      o(new Error("Error reading image file"));
    }, s.readAsDataURL(e);
  });
}
async function ta(e) {
  try {
    const t = await Ae();
    return new Promise((o, n) => {
      const r = t.transaction([le], "readonly").objectStore(le).get(e);
      r.onsuccess = () => {
        t.close();
        const i = r.result;
        o(i ? i.dataUrl : null);
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Ea(e) {
  try {
    const t = await Ae();
    return new Promise((o, n) => {
      const r = t.transaction([le], "readwrite").objectStore(le).delete(e);
      r.onsuccess = () => {
        t.close(), o();
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function xa() {
  try {
    const e = await Ae();
    return new Promise((t, o) => {
      const a = e.transaction([le], "readwrite").objectStore(le).clear();
      a.onsuccess = () => {
        e.close(), t();
      }, a.onerror = () => {
        e.close(), o(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function va() {
  try {
    const e = await Ae();
    return new Promise((t, o) => {
      const a = e.transaction([le], "readonly").objectStore(le).getAllKeys();
      a.onsuccess = () => {
        e.close(), t(a.result || []);
      }, a.onerror = () => {
        e.close(), o(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
class ra {
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
  _format(t, o, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${o}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, o) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, o) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, o) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, o) {
  }
}
const Pt = new ra("Editor"), tt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o
}) => {
  const n = async (s) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(s.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (s.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const r = await ea(s), i = await ta(r);
      i && (document.execCommand("insertImage", !1, i), Pt.info("Image inserted", { key: r }));
    } catch (a) {
      Pt.error("Error uploading image", a);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("undo"),
        title: "Undo",
        children: /* @__PURE__ */ l.jsx(Un, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        title: "Redo",
        children: /* @__PURE__ */ l.jsx(_n, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(Kr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(mn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx($n, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(wn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(Bn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(Nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(In, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(Dn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (s) => t("fontName", s.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ l.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ l.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ l.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ l.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (s) => t("fontSize", s.target.value),
        defaultValue: et,
        title: "Font Size",
        children: br.map(({ value: s, label: a, pt: r }) => /* @__PURE__ */ l.jsx("option", { value: s, children: a }, s))
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (s) => t("formatBlock", s.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "p", children: "Normal" }),
          /* @__PURE__ */ l.jsx("option", { value: "h1", children: "Heading 1" }),
          /* @__PURE__ */ l.jsx("option", { value: "h2", children: "Heading 2" }),
          /* @__PURE__ */ l.jsx("option", { value: "h3", children: "Heading 3" }),
          /* @__PURE__ */ l.jsx("option", { value: "h4", children: "Heading 4" }),
          /* @__PURE__ */ l.jsx("option", { value: "h5", children: "Heading 5" }),
          /* @__PURE__ */ l.jsx("option", { value: "h6", children: "Heading 6" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ l.jsx(Ut, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(xn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          const s = prompt("Enter URL:");
          s && t("createLink", s);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(bn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(Mn, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(Ce, { size: 16 })
      }
    ),
    e.imageSelected && /* @__PURE__ */ l.jsxs("div", { className: "toolbar-group", children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: () => t("toggleImageAspectRatio"),
          title: e.preserveAspectRatio ? "Toggle aspect ratio preservation (currently ON)" : "Toggle aspect ratio preservation (currently OFF)",
          className: `toolbar-button ${e.preserveAspectRatio ? "active" : ""}`,
          children: e.preserveAspectRatio ? "🔗" : "🔓"
        }
      ),
      /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
      /* @__PURE__ */ l.jsxs("div", { className: "toolbar-group", children: [
        /* @__PURE__ */ l.jsxs(
          "select",
          {
            title: "Image width",
            className: "toolbar-button",
            onChange: (s) => {
              const a = s.target.value;
              a === "auto" ? (document.execCommand("styleWithCSS", !1, !0), document.execCommand("removeFormat", !1, "width")) : (document.execCommand("styleWithCSS", !1, !0), document.execCommand("styleWithCSS", !1, `width: ${a}`));
            },
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Width..." }),
              /* @__PURE__ */ l.jsx("option", { value: "auto", children: "Auto" }),
              /* @__PURE__ */ l.jsx("option", { value: "100px", children: "100px" }),
              /* @__PURE__ */ l.jsx("option", { value: "200px", children: "200px" }),
              /* @__PURE__ */ l.jsx("option", { value: "300px", children: "300px" }),
              /* @__PURE__ */ l.jsx("option", { value: "50%", children: "50%" }),
              /* @__PURE__ */ l.jsx("option", { value: "100%", children: "100%" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "select",
          {
            title: "Image height",
            className: "toolbar-button",
            onChange: (s) => {
              const a = s.target.value;
              a === "auto" ? (document.execCommand("styleWithCSS", !1, !0), document.execCommand("removeFormat", !1, "height")) : (document.execCommand("styleWithCSS", !1, !0), document.execCommand("styleWithCSS", !1, `height: ${a}`));
            },
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "", children: "Height..." }),
              /* @__PURE__ */ l.jsx("option", { value: "auto", children: "Auto" }),
              /* @__PURE__ */ l.jsx("option", { value: "100px", children: "100px" }),
              /* @__PURE__ */ l.jsx("option", { value: "200px", children: "200px" }),
              /* @__PURE__ */ l.jsx("option", { value: "300px", children: "300px" }),
              /* @__PURE__ */ l.jsx("option", { value: "50%", children: "50%" }),
              /* @__PURE__ */ l.jsx("option", { value: "100%", children: "100%" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (s) => s.target.files[0] && n(s.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(gn, { size: 16 })
      }
    )
  ] });
};
tt.propTypes = {
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
tt.defaultProps = {
  onAddPageBreak: void 0
};
const rt = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: n = [],
  editorRef: s,
  onInput: a,
  onKeyDown: r,
  onClick: i,
  onScroll: f,
  zoomLevel: m = 100,
  pageMargins: d = de
}) => {
  const p = Ot(d), g = m / 100, x = (k, O) => {
    if (!k) return !1;
    const S = k.getBoundingClientRect(), u = O - S.top;
    return u < p.top || u > S.height - p.bottom;
  }, E = (k) => k ? k.nodeType === Node.ELEMENT_NODE ? k.tagName === "PAGE-BREAK" || k.getAttribute("data-page-break") === "true" : k.parentElement && E(k.parentElement) : !1, y = (k) => {
    const O = window.getSelection();
    if (!O || O.rangeCount === 0) return;
    const S = O.getRangeAt(0), { startContainer: u, endContainer: N } = S;
    if ((E(u) || E(N)) && (k.key.length === 1 || k.key === "Enter" || k.key === " "))
      return k.preventDefault(), !1;
    if (k.key === "Tab")
      return k.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((k.key === "Backspace" || k.key === "Delete") && (E(u) || E(N)))
      return k.preventDefault(), !1;
    r && r(k);
  }, A = (k) => {
    if (!s.current) return;
    const O = k.target;
    if (E(O)) {
      k.preventDefault();
      return;
    }
    if (x(s.current, k.clientY)) {
      k.preventDefault();
      const S = s.current.getBoundingClientRect();
      if (k.clientY - S.top < p.top) {
        const N = s.current.firstElementChild;
        if (N && N.tagName !== "PAGE-BREAK") {
          const h = document.createRange(), R = window.getSelection();
          h.setStart(N, 0), h.collapse(!0), R.removeAllRanges(), R.addRange(h);
        }
      } else {
        const N = s.current.lastElementChild;
        if (N && N.tagName !== "PAGE-BREAK") {
          const h = document.createRange(), R = window.getSelection();
          h.selectNodeContents(N), h.collapse(!1), R.removeAllRanges(), R.addRange(h);
        }
      }
      return;
    }
    i && i(k);
  }, I = (k) => {
    const O = window.getSelection();
    if (!O || O.rangeCount === 0) return;
    const S = O.getRangeAt(0), { startContainer: u } = S;
    if (E(u))
      return k.preventDefault(), !1;
  };
  return /* @__PURE__ */ l.jsx(
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
        transform: `scale(${g})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: s,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${t.height}px`,
            width: `${t.width}px`,
            backgroundColor: "white",
            padding: `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: et,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: y,
          onBeforeInput: I,
          onClick: A,
          onScroll: f,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
rt.propTypes = {
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
  zoomLevel: v.number,
  pageMargins: v.string
};
rt.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100,
  pageMargins: de
};
const nt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: n = de,
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: i,
  onAddPage: f,
  onDeletePage: m,
  onPageSizeChange: d,
  onPageMarginsChange: p,
  onZoomIn: g,
  onZoomOut: x,
  onZoomReset: E
} = {}) => {
  const y = Math.max(e?.length || 0, 1), A = (u) => {
    i && i(u);
  }, I = () => {
    f && f();
  }, k = (u) => {
    if (y <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(u);
  }, O = (u) => {
    d && d(u);
  }, S = (u) => {
    p && p(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(kn, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ l.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: o,
              onChange: (u) => O(u.target.value),
              children: [
                /* @__PURE__ */ l.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ l.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ l.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ l.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (u) => S(u.target.value),
              children: or().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: sr(u) }, u))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: x,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(Vn, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: "zoom-level-display", children: [
        s,
        "%"
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: g,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(Zn, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: E,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, N) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${N === t ? "active" : ""}`,
          onClick: () => A(N),
          "aria-label": `Go to page ${N + 1}`,
          "aria-current": N === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              N + 1
            ] })
          ]
        }
      ),
      y > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (h) => {
            h.stopPropagation(), k(N);
          },
          "aria-label": `Delete page ${N + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(Wn, { size: 14 })
        }
      )
    ] }, u.id || `page-${N}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: I,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(An, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
nt.propTypes = {
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
  pageMargins: v.string,
  zoomLevel: v.number,
  canZoomIn: v.bool,
  canZoomOut: v.bool,
  onNavigate: v.func,
  onAddPage: v.func,
  onDeletePage: v.func,
  onPageSizeChange: v.func,
  onPageMarginsChange: v.func,
  onZoomIn: v.func,
  onZoomOut: v.func,
  onZoomReset: v.func
};
nt.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: de,
  zoomLevel: 100,
  canZoomIn: !0,
  canZoomOut: !0,
  onNavigate: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onPageMarginsChange: void 0,
  onZoomIn: void 0,
  onZoomOut: void 0,
  onZoomReset: void 0
};
const na = Ne.memo(nt), at = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: s = ge
}) => {
  const a = J(null), r = J(null), i = J(null), f = J(null), m = J(s), d = J(!1);
  ie(() => {
    m.current = s;
  }, [s]);
  const p = z((h) => {
    if (!fe(h)) return;
    a.current && (me(a.current), a.current = null), h.classList.add("selected");
    const R = Lt(h);
    if (R) {
      a.current = R, r.current = h, document.body.appendChild(R), R.querySelectorAll(".resize-handler").forEach((te) => {
        te.addEventListener("mousedown", E);
      });
      const W = R.querySelector(".aspect-ratio-toggle");
      W && W.addEventListener("click", x), o && o(h);
    }
  }, [o]), g = z(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (me(a.current), a.current = null), i.current = null, f.current = null, d.current = !1, n && n();
  }, [n]), x = z((h) => {
    h.preventDefault(), h.stopPropagation();
    const R = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: R,
      aspectRatio: R
    };
    const j = h.currentTarget;
    R ? (j.innerHTML = "🔗", j.title = "Toggle aspect ratio preservation (currently ON)", j.classList.remove("locked")) : (j.innerHTML = "🔓", j.title = "Toggle aspect ratio preservation (currently OFF)", j.classList.add("locked"));
  }, []), E = z((h) => {
    if (h.preventDefault(), h.stopPropagation(), !r.current) return;
    const R = h.currentTarget.dataset.handler, j = r.current.getBoundingClientRect(), W = window.pageYOffset || document.documentElement.scrollTop, te = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: h.clientX,
      y: h.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      offsetX: h.clientX - j.left - te,
      offsetY: h.clientY - j.top - W
    }, f.current = R, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = S(R), document.addEventListener("mousemove", y), document.addEventListener("mouseup", A);
  }, []), y = z((h) => {
    if (!d.current || !r.current || !i.current || !f.current) return;
    h.preventDefault(), h.stopPropagation();
    const { x: R, y: j, width: W, height: te } = i.current, q = f.current, Q = h.clientX, B = h.clientY, ne = u({
      handler: q,
      startX: R,
      startY: j,
      currentX: Q,
      currentY: B,
      startWidth: W,
      startHeight: te,
      options: m.current
    });
    N(r.current, ne), a.current && Ve(a.current, r.current);
  }, []), A = z((h) => {
    if (d.current && (h.preventDefault(), h.stopPropagation(), i.current = null, f.current = null, d.current = !1, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current)) {
      const R = new Event("input", { bubbles: !0, cancelable: !0 });
      r.current.dispatchEvent(R), t && t(r.current, {
        width: r.current.offsetWidth,
        height: r.current.offsetHeight
      });
    }
  }, [t]), I = z((h) => {
    a.current && !a.current.contains(h.target) && g();
    const R = h.target;
    if (fe(R)) {
      if (R === r.current)
        return;
      p(R);
    }
  }, [p, g]), k = z((h) => {
    if ((h.key === "Delete" || h.key === "Backspace") && r.current && !d.current) {
      h.preventDefault();
      const R = r.current;
      if (R.parentNode) {
        R.parentNode.removeChild(R), g();
        const j = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(j);
      }
    }
    if (h.key === "Escape" && r.current && g(), r.current && !d.current) {
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === ">") {
        h.preventDefault();
        const R = r.current.offsetWidth, j = Math.min(m.current.maxWidth || 800, R + 10);
        N(r.current, { width: j, height: r.current.offsetHeight });
        const W = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(W);
      }
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === "<") {
        h.preventDefault();
        const R = r.current.offsetWidth, j = Math.max(m.current.minWidth || 50, R - 10);
        N(r.current, { width: j, height: r.current.offsetHeight });
        const W = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(W);
      }
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === "+") {
        h.preventDefault();
        const R = r.current.offsetHeight, j = Math.min(m.current.maxHeight || 600, R + 10);
        N(r.current, { width: r.current.offsetWidth, height: j });
        const W = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(W);
      }
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === "-") {
        h.preventDefault();
        const R = r.current.offsetHeight, j = Math.max(m.current.minHeight || 50, R - 10);
        N(r.current, { width: r.current.offsetWidth, height: j });
        const W = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(W);
      }
      if ((h.ctrlKey || h.metaKey) && h.key === "r") {
        h.preventDefault(), N(r.current, { width: 300, height: 200 });
        const R = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(R);
      }
      if ((h.ctrlKey || h.metaKey) && h.altKey && h.key === "l") {
        h.preventDefault();
        const R = !m.current.preserveAspectRatio;
        if (m.current = {
          ...m.current,
          preserveAspectRatio: R,
          aspectRatio: R
        }, a.current) {
          const j = a.current.querySelector(".aspect-ratio-toggle");
          j && (R ? (j.innerHTML = "🔗", j.title = "Toggle aspect ratio preservation (currently ON)", j.classList.remove("locked")) : (j.innerHTML = "🔓", j.title = "Toggle aspect ratio preservation (currently OFF)", j.classList.add("locked")));
        }
      }
    }
  }, [e, g]), O = z(() => {
    a.current && r.current && Ve(a.current, r.current);
  }, []);
  ie(() => {
    if (!e.current) return;
    const h = e.current;
    h.addEventListener("click", I), h.addEventListener("keydown", k);
    const R = h.closest(".editor-viewport");
    return R && R.addEventListener("scroll", O), window.addEventListener("resize", O), () => {
      h.removeEventListener("click", I), h.removeEventListener("keydown", k), R && R.removeEventListener("scroll", O), window.removeEventListener("resize", O), d.current && (document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && me(a.current);
    };
  }, [e, I, k, O, y, A]);
  function S(h) {
    switch (h) {
      case T.TOP_LEFT:
      case T.BOTTOM_RIGHT:
        return "nwse-resize";
      case T.TOP_RIGHT:
      case T.BOTTOM_LEFT:
        return "nesw-resize";
      case T.TOP:
      case T.BOTTOM:
        return "ns-resize";
      case T.LEFT:
      case T.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function u({
    handler: h,
    startX: R,
    startY: j,
    currentX: W,
    currentY: te,
    startWidth: q,
    startHeight: Q,
    options: B = ge
  }) {
    const ne = W - R, ee = te - j;
    let Z = q, K = Q;
    switch (h) {
      case T.TOP_LEFT:
        Z = Math.max(B.minWidth, q - ne), K = Math.max(B.minHeight, Q - ee);
        break;
      case T.TOP_RIGHT:
        Z = Math.max(B.minWidth, q + ne), K = Math.max(B.minHeight, Q - ee);
        break;
      case T.BOTTOM_LEFT:
        Z = Math.max(B.minWidth, q - ne), K = Math.max(B.minHeight, Q + ee);
        break;
      case T.BOTTOM_RIGHT:
        Z = Math.max(B.minWidth, q + ne), K = Math.max(B.minHeight, Q + ee);
        break;
      case T.TOP:
        K = Math.max(B.minHeight, Q - ee);
        break;
      case T.BOTTOM:
        K = Math.max(B.minHeight, Q + ee);
        break;
      case T.LEFT:
        Z = Math.max(B.minWidth, q - ne);
        break;
      case T.RIGHT:
        Z = Math.max(B.minWidth, q + ne);
        break;
      default:
        return { width: Z, height: K };
    }
    if (B.preserveAspectRatio && B.aspectRatio) {
      const re = q / Q;
      [
        T.TOP_LEFT,
        T.TOP_RIGHT,
        T.BOTTOM_LEFT,
        T.BOTTOM_RIGHT
      ].includes(h) ? Z / re > K ? K = Math.max(B.minHeight, Z / re) : Z = Math.max(B.minWidth, K * re) : [T.TOP, T.BOTTOM].includes(h) ? Z = K * re : [T.LEFT, T.RIGHT].includes(h) && (K = Z / re);
    }
    return B.maxWidth && Z > B.maxWidth && (Z = B.maxWidth, B.preserveAspectRatio && B.aspectRatio && (K = Z / (q / Q))), B.maxHeight && K > B.maxHeight && (K = B.maxHeight, B.preserveAspectRatio && B.aspectRatio && (Z = K * (q / Q))), Z = Math.max(B.minWidth, Z), K = Math.max(B.minHeight, K), {
      width: Math.round(Z),
      height: Math.round(K)
    };
  }
  function N(h, { width: R, height: j }) {
    fe(h) && (h.tagName === "IMG" ? (h.style.width = `${R}px`, h.style.height = `${j}px`, h.width = R, h.height = j) : h.tagName === "DIV" && (h.style.width = `${R}px`, h.style.height = `${j}px`));
  }
  return null;
};
at.propTypes = {
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: v.func,
  onImageSelect: v.func,
  onImageDeselect: v.func,
  resizeOptions: v.shape({
    minWidth: v.number,
    minHeight: v.number,
    maxWidth: v.number,
    maxHeight: v.number,
    aspectRatio: v.bool,
    preserveAspectRatio: v.bool,
    defaultWidth: v.number,
    defaultHeight: v.number
  })
};
at.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const aa = 50, oa = 50, _t = 50, sa = 100, ia = 500, ot = Ke(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: s,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: i = !0,
  showToolbar: f = !0,
  showPageManager: m = !0
}, d) => {
  const p = Mt(), g = Ct(), { pageSize: x, pageMargins: E, continuousContent: y, pageBoundaries: A, activePage: I, zoomLevel: k } = p, O = J(null), S = J(null), { currentFormat: u, formatText: N } = Ar(), [h, R] = ve(!1), {
    checkAndUpdateBoundaries: j,
    getCurrentPage: W,
    scrollToPage: te,
    updateBoundaries: q,
    triggerAutoReflow: Q,
    removePageAndContent: B,
    insertPageBreakAtBoundary: ne
  } = Ur(x, S, k, E), ee = Se(() => Je(x), [x]), [Z, K] = ve(!1), re = J(null), b = J(!1), c = J(!1), P = J(!1), w = J(y);
  ie(() => {
    if (S.current) {
      if (!P.current) {
        S.current.innerHTML = y, P.current = !0, w.current = y;
        const D = setTimeout(() => {
          q();
        }, aa);
        return () => clearTimeout(D);
      }
      if (w.current !== y) {
        if (S.current.innerHTML !== y) {
          S.current.innerHTML = y;
          const oe = setTimeout(() => {
            if (q(), b.current) {
              b.current = !1;
              const ue = Math.max(0, A.length - 1);
              g.setActivePage(ue), setTimeout(() => {
                te(ue, O);
              }, _t);
            }
          }, oa);
          return w.current = y, () => clearTimeout(oe);
        }
        w.current = y;
      }
    }
  }, [y, q, A.length, g, te]), ie(() => {
    r && P.current && r(y);
  }, [y, r]), Jt(d, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => y,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => y.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (D) => {
      g.updateContinuousContent(D), S.current && (S.current.innerHTML = D, setTimeout(() => {
        q();
      }, 50));
    }
  }), [y, g, q]), ie(() => {
    const D = setTimeout(() => {
      S.current && S.current.focus();
    }, 200);
    return () => clearTimeout(D);
  }, []);
  const M = z((D) => {
    const oe = D.currentTarget.innerHTML;
    g.updateContinuousContent(oe), j(), Q(200);
    const ue = W(O);
    ue !== I && g.setActivePage(ue);
  }, [j, g, W, I, Q, O]), G = z((D) => {
    g.updatePageSize(D), q({ pageSize: D }), s && s(D);
  }, [g, q, s]), L = z((D) => {
    g.updatePageMargins(D), q({ pageMargins: D }), a && a(D);
  }, [g, q, a]), C = z((D) => {
    D < 0 || D >= A.length || (c.current = !0, g.setActivePage(D), te(D, O), setTimeout(() => {
      c.current = !1;
    }, ia), t && t(D));
  }, [g, te, t, A.length]), H = z(() => {
    const D = A.length + 1;
    ne(D) && (b.current = !0, setTimeout(() => {
      if (b.current) {
        b.current = !1;
        const ue = Math.max(0, A.length - 1);
        g.setActivePage(ue), setTimeout(() => {
          te(ue, O);
        }, _t);
      }
    }, 100)), o && o();
  }, [A.length, ne, g, te, o]), F = z(() => {
    const D = window.getSelection();
    if (D && D.rangeCount > 0) {
      if (!S?.current) return;
      const je = `<page-break data-page-break="true" contenteditable="false" data-page-number="${S.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, je), setTimeout(() => {
        q();
        const Ie = W(O);
        g.setActivePage(Ie);
      }, 150);
    }
  }, [q, W, g, O]), U = z((D) => {
    if (A.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    B(D) && (g.setActivePage(0), n && n(D));
  }, [A.length, B, g, n]), ae = z(() => {
    g.zoomIn();
  }, [g]), _ = z(() => {
    g.zoomOut();
  }, [g]), se = z(() => {
    g.resetZoom();
  }, [g]);
  ie(() => {
    const D = (oe) => {
      if (oe.ctrlKey || oe.metaKey) {
        ["+", "=", "-", "_", "0"].includes(oe.key) && oe.preventDefault();
        const ue = document.activeElement === S.current, je = document.activeElement === O.current, Ie = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ue || je || !Ie)
          switch (oe.key) {
            case "+":
            case "=":
              ae();
              break;
            case "-":
            case "_":
              _();
              break;
            case "0":
              se();
              break;
          }
      }
    };
    return window.addEventListener("keydown", D), () => {
      window.removeEventListener("keydown", D);
    };
  }, [ae, _, se]);
  const he = z(() => {
    !O.current || !S.current || c.current || (re.current && clearTimeout(re.current), re.current = setTimeout(() => {
      if (c.current) {
        re.current = null;
        return;
      }
      const D = W(O);
      D !== I && D >= 0 && g.setActivePage(D), re.current = null;
    }, sa));
  }, [W, I, g]), Pe = Se(() => {
    if (!y) return 0;
    const oe = y.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return oe ? oe.length : 0;
  }, [y]), Wt = A.length || 1, qt = z((D) => {
    R(!0);
  }, []), Zt = z(() => {
    R(!1);
  }, []), Yt = z((D, oe) => {
  }, []);
  return ie(() => () => {
    re.current && clearTimeout(re.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    f && /* @__PURE__ */ l.jsx(
      tt,
      {
        currentFormat: {
          ...u,
          imageSelected: h
        },
        onFormatText: N,
        onAddPageBreak: F
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ l.jsx(
        Kn,
        {
          editorView: null,
          isCollapsed: Z,
          onToggle: () => K((D) => !D),
          wordCount: Pe,
          pageCount: Wt
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: O,
          onScroll: he,
          children: /* @__PURE__ */ l.jsx(
            rt,
            {
              content: y,
              dimensions: ee,
              pageSize: x,
              pageMargins: E,
              pageBoundaries: A,
              editorRef: S,
              onInput: M,
              onClick: () => S.current?.focus(),
              zoomLevel: k
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        at,
        {
          editorRef: S,
          onImageSelect: qt,
          onImageDeselect: Zt,
          onImageResize: Yt
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? Ne.cloneElement(e, {
        onNavigate: C,
        onAddPage: H,
        onDeletePage: U,
        onPageSizeChange: G,
        onPageMarginsChange: L,
        zoomLevel: k,
        canZoomIn: qe(k),
        canZoomOut: Ze(k),
        onZoomIn: ae,
        onZoomOut: _,
        onZoomReset: se
      }) : /* @__PURE__ */ l.jsx(
        na,
        {
          pageBoundaries: A,
          activePage: I,
          pageSize: x,
          pageMargins: E,
          zoomLevel: k,
          canZoomIn: qe(k),
          canZoomOut: Ze(k),
          onNavigate: C,
          onAddPage: H,
          onDeletePage: U,
          onPageSizeChange: G,
          onPageMarginsChange: L,
          onZoomIn: ae,
          onZoomOut: _,
          onZoomReset: se
        }
      ) })
    ] })
  ] });
});
ot.displayName = "HtmlEditor";
ot.propTypes = {
  pageManagerComponent: v.element,
  onNavigatePage: v.func,
  onAddPage: v.func,
  onDeletePage: v.func,
  onPageSizeChange: v.func,
  onPageMarginsChange: v.func,
  onChange: v.func,
  showSidebar: v.bool,
  showToolbar: v.bool,
  showPageManager: v.bool
};
ot.defaultProps = {
  pageManagerComponent: null,
  onNavigatePage: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onPageMarginsChange: void 0,
  onChange: void 0,
  showSidebar: !0,
  showToolbar: !0,
  showPageManager: !0
};
class Ft extends Ne.Component {
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
  componentDidCatch(t, o) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", o), this.setState({
      error: t,
      errorInfo: o
    }), this.props.onError && this.props.onError(t, o);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ l.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ l.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ l.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ l.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ l.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ l.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ l.jsx(
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
Ft.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
Ft.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Ta = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  br as COMMON_FONT_SIZES,
  et as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  kt as DEFAULT_PAGE_SIZE,
  fa as DocumentProvider,
  tt as EditorToolbar,
  Ft as ErrorBoundary,
  It as FONT_SIZE_MAP,
  ot as HtmlEditor,
  at as ImageResizeHandlers,
  Ta as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  na as PageManager,
  rt as PageView,
  T as RESIZE_HANDLERS,
  Kn as Sidebar,
  ba as applyImageDimensions,
  ma as calculateResizeDimensions,
  xa as clearImages,
  Lt as createResizeOverlay,
  Ea as deleteImage,
  va as getAllImageKeys,
  da as getAvailablePageSizes,
  ta as getImage,
  ya as getImageDimensions,
  Je as getPageDimensions,
  pa as getPixelValue,
  ga as getPointValue,
  fe as isResizableImage,
  ha as isValidFontSize,
  ua as isValidPageSize,
  ra as logger,
  xr as pixelsToPoints,
  Er as pointsToPixels,
  me as removeResizeOverlay,
  ea as saveImage,
  Ve as updateResizeOverlay,
  Ur as useContinuousReflow,
  St as useDocument,
  Ct as useDocumentActions,
  Mt as useDocumentState,
  Ar as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
