import je, { createContext as rn, useContext as on, useReducer as an, useMemo as Ce, useState as le, useCallback as H, useRef as te, useEffect as re, forwardRef as Je, createElement as Fe, useLayoutEffect as sn, useImperativeHandle as cn } from "react";
import { v4 as Qe } from "uuid";
import { createPortal as ln } from "react-dom";
function un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ke = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function dn() {
  if (ut) return Ee;
  ut = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(r, i, a) {
    var n = null;
    if (a !== void 0 && (n = "" + a), i.key !== void 0 && (n = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: r,
      key: n,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Ee.Fragment = t, Ee.jsx = o, Ee.jsxs = o, Ee;
}
var ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function fn() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === Z ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case _:
          return "Fragment";
        case T:
          return "Profiler";
        case I:
          return "StrictMode";
        case d:
          return "Suspense";
        case A:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case m:
            return "Portal";
          case S:
            return c.displayName || "Context";
          case O:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var w = c.render;
            return c = c.displayName, c || (c = w.displayName || w.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case C:
            return w = c.displayName || null, w !== null ? w : e(c.type) || "Memo";
          case D:
            w = c._payload, c = c._init;
            try {
              return e(c(w));
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
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var R = w.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return R.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(c);
      }
    }
    function r(c) {
      if (c === _) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === D)
        return "<...>";
      try {
        var w = e(c);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = ee.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function n(c) {
      if (B.call(c, "key")) {
        var w = Object.getOwnPropertyDescriptor(c, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, w) {
      function R() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: R,
        configurable: !0
      });
    }
    function h() {
      var c = e(this.type);
      return W[c] || (W[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function b(c, w, R, M, $, z) {
      var N = R.ref;
      return c = {
        $$typeof: y,
        type: c,
        key: w,
        props: R,
        _owner: M
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: h
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
        value: $
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function g(c, w, R, M, $, z) {
      var N = w.children;
      if (N !== void 0)
        if (M)
          if (X(N)) {
            for (M = 0; M < N.length; M++)
              p(N[M]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(N);
      if (B.call(w, "key")) {
        N = e(c);
        var G = Object.keys(w).filter(function(F) {
          return F !== "key";
        });
        M = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", x[N + M] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          N,
          G,
          N
        ), x[N + M] = !0);
      }
      if (N = null, R !== void 0 && (o(R), N = "" + R), n(w) && (o(w.key), N = "" + w.key), "key" in w) {
        R = {};
        for (var q in w)
          q !== "key" && (R[q] = w[q]);
      } else R = w;
      return N && s(
        R,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), b(
        c,
        N,
        R,
        i(),
        $,
        z
      );
    }
    function p(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === D && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === y;
    }
    var E = je, y = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), S = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), ee = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, X = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var j, W = {}, ne = E.react_stack_bottom_frame.bind(
      E,
      a
    )(), ie = Q(r(a)), x = {};
    ve.Fragment = _, ve.jsx = function(c, w, R) {
      var M = 1e4 > ee.recentlyCreatedOwnerStacks++;
      return g(
        c,
        w,
        R,
        !1,
        M ? Error("react-stack-top-frame") : ne,
        M ? Q(r(c)) : ie
      );
    }, ve.jsxs = function(c, w, R) {
      var M = 1e4 > ee.recentlyCreatedOwnerStacks++;
      return g(
        c,
        w,
        R,
        !0,
        M ? Error("react-stack-top-frame") : ne,
        M ? Q(r(c)) : ie
      );
    };
  })()), ve;
}
var ft;
function pn() {
  return ft || (ft = 1, process.env.NODE_ENV === "production" ? ke.exports = dn() : ke.exports = fn()), ke.exports;
}
var l = pn();
const We = 100, qe = 50, Ze = 200, pt = 5, Ye = (e) => e < Ze, Ve = (e) => e > qe, gn = 96, Oe = (e) => Math.round(e * gn), Ne = {
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
}, pe = "NORMAL", Mt = (e = pe) => {
  const t = Ne[e] || Ne[pe];
  return {
    top: Oe(t.top),
    bottom: Oe(t.bottom),
    left: Oe(t.left),
    right: Oe(t.right)
  };
}, hn = (e = pe) => {
  const t = Mt(e);
  return t.top + t.bottom;
}, mn = () => Object.keys(Ne), yn = (e) => {
  const t = Ne[e];
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
}, St = "A4", et = (e) => {
  const t = ce[e] || ce[St];
  return {
    width: t.width,
    height: t.height
  };
}, vo = (e) => Object.keys(ce).includes(e), To = () => Object.keys(ce), Ae = St, ye = "<p><br></p>", bn = "continuous", Te = (e, t = Ae) => ({
  id: Qe(),
  index: e,
  size: t,
  content: ye,
  images: [],
  isBreakPoint: !1
}), Se = (e) => typeof e != "string" || e.trim() === "" ? ye : e, Ct = (e, t = Ae) => (e.length > 0 ? e : [Te(0, t)]).map((r, i) => ({
  id: r.id || Qe(),
  index: i,
  size: r.size || t,
  content: Se(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), xn = (e = Ae) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: et(e).height
}], Ke = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || Ae, r = Ct(e.pages || [Te(0, o)], o);
  return {
    id: Qe(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || bn,
    continuousContent: e.continuousContent || ye,
    pageBoundaries: e.pageBoundaries || xn(o),
    zoomLevel: e.zoomLevel || We,
    pageMargins: e.pageMargins || pe
  };
}, U = {
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
}, En = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case U.INITIALIZE_DOCUMENT: {
      const { initialContent: r = ye, pageSize: i = Ae } = t.payload || {}, a = { ...Te(0, i), content: Se(r) };
      return Ke({
        title: e.title,
        pageSize: i,
        pages: [a]
      });
    }
    case U.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case U.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: i } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[r] = {
        ...a[r],
        content: Se(i)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Ct(r.pages || [], e.pageSize), a = Array.isArray(r.pageBreaks) ? r.pageBreaks : i.slice(0, -1).map((n, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: a,
        totalPages: i.length,
        updatedAt: o
      };
    }
    case U.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(r, 0, Te(r, e.pageSize));
      const a = i.map((s, h) => ({
        ...s,
        index: h,
        size: e.pageSize
      })), n = a.slice(0, -1).map((s, h) => ({
        id: `auto-break-${h}`,
        pageNumber: h + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: r,
        pageBreaks: n,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case U.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(r, 1);
      const a = i.map((h, b) => ({
        ...h,
        index: b,
        size: e.pageSize
      }));
      let n = e.activePage;
      n >= a.length ? n = a.length - 1 : r <= n && n > 0 && (n -= 1);
      const s = a.slice(0, -1).map((h, b) => ({
        id: `auto-break-${b}`,
        pageNumber: b + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: s,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case U.SET_ACTIVE_PAGE: {
      const r = t.payload;
      if (r === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= i ? e : {
        ...e,
        activePage: r,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        et(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const i = e.pages.map((n, s) => ({
        ...n,
        index: s,
        size: r
      })), a = i.slice(0, -1).map((n, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pageSize: r,
        pages: i,
        pageBreaks: a,
        updatedAt: o
      };
    }
    case U.RESET_DOCUMENT:
      return Ke();
    case U.UPDATE_CONTINUOUS_CONTENT: {
      const r = Se(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(t.payload) ? t.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const i = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: i,
        updatedAt: o
      };
    }
    case U.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: i } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let n = e.continuousContent;
      if (r === "end")
        n = n + a + "<p><br></p>";
      else if (typeof r == "number") {
        const s = n.substring(0, r), h = n.substring(r);
        n = s + a + h;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = n;
        const h = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && h.length === 0)
          n = n + a + "<p><br></p>";
        else if (i < h.length) {
          const b = h[i], g = document.createElement("page-break");
          g.setAttribute("data-page-break", "true"), g.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const p = document.createElement("p");
          p.innerHTML = "<br>", b.parentNode.insertBefore(g, b.nextSibling), g.parentNode.insertBefore(p, g.nextSibling), n = s.innerHTML;
        } else
          n = n + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case U.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const a = i.querySelectorAll('page-break, [data-page-break="true"]');
      return a[r] && a[r].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, h) => {
        s.setAttribute("data-page-number", String(h + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: o
      };
    }
    case U.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let i = e.continuousContent, a = e.pages;
      return r === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== ye).join(`
`) || ye : e.continuousContent && e.continuousContent !== ye && (a = [{ ...Te(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: i,
        pages: a,
        updatedAt: o
      };
    }
    case U.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < qe || r > Ze ? (console.warn(`Invalid zoom level: ${r}. Must be between ${qe} and ${Ze}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: o
      };
    }
    case U.ZOOM_IN: {
      if (!Ye(e.zoomLevel))
        return e;
      const r = e.zoomLevel + pt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: o
      };
    }
    case U.ZOOM_OUT: {
      if (!Ve(e.zoomLevel))
        return e;
      const r = e.zoomLevel - pt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: o
      };
    }
    case U.RESET_ZOOM:
      return e.zoomLevel === We ? e : {
        ...e,
        zoomLevel: We,
        updatedAt: o
      };
    case U.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: o
      };
    }
    default:
      return e;
  }
}, Nt = rn(null), Ao = ({ children: e, initialState: t = {} }) => {
  const [o, r] = an(En, Ke(t)), i = Ce(() => ({
    initializeDocument: (n) => r({ type: U.INITIALIZE_DOCUMENT, payload: n }),
    updateTitle: (n) => r({ type: U.UPDATE_TITLE, payload: n }),
    updatePageContent: (n) => r({ type: U.UPDATE_PAGE_CONTENT, payload: n }),
    updatePages: (n) => r({ type: U.UPDATE_PAGES, payload: n }),
    addPage: (n) => r({ type: U.ADD_PAGE, payload: n }),
    deletePage: (n) => r({ type: U.DELETE_PAGE, payload: n }),
    setActivePage: (n) => r({ type: U.SET_ACTIVE_PAGE, payload: n }),
    updatePageSize: (n) => r({ type: U.UPDATE_PAGE_SIZE, payload: n }),
    resetDocument: () => r({ type: U.RESET_DOCUMENT }),
    updateContinuousContent: (n) => r({ type: U.UPDATE_CONTINUOUS_CONTENT, payload: n }),
    updatePageBoundaries: (n) => r({ type: U.UPDATE_PAGE_BOUNDARIES, payload: n }),
    addPageBreak: (n) => r({ type: U.ADD_PAGE_BREAK, payload: n }),
    removePageBreak: (n) => r({ type: U.REMOVE_PAGE_BREAK, payload: n }),
    setEditorMode: (n) => r({ type: U.SET_EDITOR_MODE, payload: n }),
    insertPageAt: (n) => r({ type: U.INSERT_PAGE_AT, payload: n }),
    movePageTo: (n) => r({ type: U.MOVE_PAGE_TO, payload: n }),
    duplicatePage: (n) => r({ type: U.DUPLICATE_PAGE, payload: n }),
    setZoomLevel: (n) => r({ type: U.SET_ZOOM_LEVEL, payload: n }),
    zoomIn: () => r({ type: U.ZOOM_IN }),
    zoomOut: () => r({ type: U.ZOOM_OUT }),
    resetZoom: () => r({ type: U.RESET_ZOOM }),
    updatePageMargins: (n) => r({ type: U.UPDATE_PAGE_MARGINS, payload: n })
  }), []), a = Ce(() => ({
    state: o,
    actions: i,
    dispatch: r
  }), [o, i]);
  return /* @__PURE__ */ l.jsx(Nt.Provider, { value: a, children: e });
}, It = () => {
  const e = on(Nt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, jt = () => {
  const { state: e } = It();
  return e;
}, Lt = () => {
  const { actions: e } = It();
  return e;
};
var Re = { exports: {} }, Me = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function vn() {
  if (gt) return V;
  gt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, n = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function O(u) {
    if (typeof u == "object" && u !== null) {
      var d = u.$$typeof;
      switch (d) {
        case t:
          switch (u = u.type, u) {
            case h:
            case b:
            case r:
            case a:
            case i:
            case p:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case g:
                case y:
                case E:
                case n:
                  return u;
                default:
                  return d;
              }
          }
        case o:
          return d;
      }
    }
  }
  function S(u) {
    return O(u) === b;
  }
  return V.AsyncMode = h, V.ConcurrentMode = b, V.ContextConsumer = s, V.ContextProvider = n, V.Element = t, V.ForwardRef = g, V.Fragment = r, V.Lazy = y, V.Memo = E, V.Portal = o, V.Profiler = a, V.StrictMode = i, V.Suspense = p, V.isAsyncMode = function(u) {
    return S(u) || O(u) === h;
  }, V.isConcurrentMode = S, V.isContextConsumer = function(u) {
    return O(u) === s;
  }, V.isContextProvider = function(u) {
    return O(u) === n;
  }, V.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, V.isForwardRef = function(u) {
    return O(u) === g;
  }, V.isFragment = function(u) {
    return O(u) === r;
  }, V.isLazy = function(u) {
    return O(u) === y;
  }, V.isMemo = function(u) {
    return O(u) === E;
  }, V.isPortal = function(u) {
    return O(u) === o;
  }, V.isProfiler = function(u) {
    return O(u) === a;
  }, V.isStrictMode = function(u) {
    return O(u) === i;
  }, V.isSuspense = function(u) {
    return O(u) === p;
  }, V.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === b || u === a || u === i || u === p || u === f || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === E || u.$$typeof === n || u.$$typeof === s || u.$$typeof === g || u.$$typeof === _ || u.$$typeof === I || u.$$typeof === T || u.$$typeof === m);
  }, V.typeOf = O, V;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function Tn() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, n = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function O(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === r || k === b || k === a || k === i || k === p || k === f || typeof k == "object" && k !== null && (k.$$typeof === y || k.$$typeof === E || k.$$typeof === n || k.$$typeof === s || k.$$typeof === g || k.$$typeof === _ || k.$$typeof === I || k.$$typeof === T || k.$$typeof === m);
    }
    function S(k) {
      if (typeof k == "object" && k !== null) {
        var se = k.$$typeof;
        switch (se) {
          case t:
            var he = k.type;
            switch (he) {
              case h:
              case b:
              case r:
              case a:
              case i:
              case p:
                return he;
              default:
                var me = he && he.$$typeof;
                switch (me) {
                  case s:
                  case g:
                  case y:
                  case E:
                  case n:
                    return me;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var u = h, d = b, A = s, C = n, D = t, Y = g, Z = r, ee = y, B = E, X = o, Q = a, j = i, W = p, ne = !1;
    function ie(k) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(k) || S(k) === h;
    }
    function x(k) {
      return S(k) === b;
    }
    function c(k) {
      return S(k) === s;
    }
    function w(k) {
      return S(k) === n;
    }
    function R(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function M(k) {
      return S(k) === g;
    }
    function $(k) {
      return S(k) === r;
    }
    function z(k) {
      return S(k) === y;
    }
    function N(k) {
      return S(k) === E;
    }
    function G(k) {
      return S(k) === o;
    }
    function q(k) {
      return S(k) === a;
    }
    function F(k) {
      return S(k) === i;
    }
    function oe(k) {
      return S(k) === p;
    }
    K.AsyncMode = u, K.ConcurrentMode = d, K.ContextConsumer = A, K.ContextProvider = C, K.Element = D, K.ForwardRef = Y, K.Fragment = Z, K.Lazy = ee, K.Memo = B, K.Portal = X, K.Profiler = Q, K.StrictMode = j, K.Suspense = W, K.isAsyncMode = ie, K.isConcurrentMode = x, K.isContextConsumer = c, K.isContextProvider = w, K.isElement = R, K.isForwardRef = M, K.isFragment = $, K.isLazy = z, K.isMemo = N, K.isPortal = G, K.isProfiler = q, K.isStrictMode = F, K.isSuspense = oe, K.isValidElementType = O, K.typeOf = S;
  })()), K;
}
var mt;
function Dt() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? Me.exports = vn() : Me.exports = Tn()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ze, yt;
function An() {
  if (yt) return ze;
  yt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var n = {}, s = 0; s < 10; s++)
        n["_" + String.fromCharCode(s)] = s;
      var h = Object.getOwnPropertyNames(n).map(function(g) {
        return n[g];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        b[g] = g;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ze = i() ? Object.assign : function(a, n) {
    for (var s, h = r(a), b, g = 1; g < arguments.length; g++) {
      s = Object(arguments[g]);
      for (var p in s)
        t.call(s, p) && (h[p] = s[p]);
      if (e) {
        b = e(s);
        for (var f = 0; f < b.length; f++)
          o.call(s, b[f]) && (h[b[f]] = s[b[f]]);
      }
    }
    return h;
  }, ze;
}
var Be, bt;
function tt() {
  if (bt) return Be;
  bt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = e, Be;
}
var $e, xt;
function zt() {
  return xt || (xt = 1, $e = Function.call.bind(Object.prototype.hasOwnProperty)), $e;
}
var He, Et;
function Pn() {
  if (Et) return He;
  Et = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ tt(), o = {}, r = /* @__PURE__ */ zt();
    e = function(a) {
      var n = "Warning: " + a;
      typeof console < "u" && console.error(n);
      try {
        throw new Error(n);
      } catch {
      }
    };
  }
  function i(a, n, s, h, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in a)
        if (r(a, g)) {
          var p;
          try {
            if (typeof a[g] != "function") {
              var f = Error(
                (h || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            p = a[g](n, g, h, s, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (h || "React class") + ": type specification of " + s + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in o)) {
            o[p.message] = !0;
            var E = b ? b() : "";
            e(
              "Failed " + s + " type: " + p.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, He = i, He;
}
var Ge, vt;
function _n() {
  if (vt) return Ge;
  vt = 1;
  var e = Dt(), t = An(), o = /* @__PURE__ */ tt(), r = /* @__PURE__ */ zt(), i = /* @__PURE__ */ Pn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var h = "Warning: " + s;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function n() {
    return null;
  }
  return Ge = function(s, h) {
    var b = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function p(x) {
      var c = x && (b && x[b] || x[g]);
      if (typeof c == "function")
        return c;
    }
    var f = "<<anonymous>>", E = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: T(),
      arrayOf: O,
      element: S(),
      elementType: u(),
      instanceOf: d,
      node: Y(),
      objectOf: C,
      oneOf: A,
      oneOfType: D,
      shape: ee,
      exact: B
    };
    function y(x, c) {
      return x === c ? x !== 0 || 1 / x === 1 / c : x !== x && c !== c;
    }
    function m(x, c) {
      this.message = x, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function _(x) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, w = 0;
      function R($, z, N, G, q, F, oe) {
        if (G = G || f, F = F || N, oe !== o) {
          if (h) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = G + ":" + N;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, w++);
          }
        }
        return z[N] == null ? $ ? z[N] === null ? new m("The " + q + " `" + F + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new m("The " + q + " `" + F + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : x(z, N, G, q, F);
      }
      var M = R.bind(null, !1);
      return M.isRequired = R.bind(null, !0), M;
    }
    function I(x) {
      function c(w, R, M, $, z, N) {
        var G = w[R], q = j(G);
        if (q !== x) {
          var F = W(G);
          return new m(
            "Invalid " + $ + " `" + z + "` of type " + ("`" + F + "` supplied to `" + M + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return _(c);
    }
    function T() {
      return _(n);
    }
    function O(x) {
      function c(w, R, M, $, z) {
        if (typeof x != "function")
          return new m("Property `" + z + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var N = w[R];
        if (!Array.isArray(N)) {
          var G = j(N);
          return new m("Invalid " + $ + " `" + z + "` of type " + ("`" + G + "` supplied to `" + M + "`, expected an array."));
        }
        for (var q = 0; q < N.length; q++) {
          var F = x(N, q, M, $, z + "[" + q + "]", o);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return _(c);
    }
    function S() {
      function x(c, w, R, M, $) {
        var z = c[w];
        if (!s(z)) {
          var N = j(z);
          return new m("Invalid " + M + " `" + $ + "` of type " + ("`" + N + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(x);
    }
    function u() {
      function x(c, w, R, M, $) {
        var z = c[w];
        if (!e.isValidElementType(z)) {
          var N = j(z);
          return new m("Invalid " + M + " `" + $ + "` of type " + ("`" + N + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(x);
    }
    function d(x) {
      function c(w, R, M, $, z) {
        if (!(w[R] instanceof x)) {
          var N = x.name || f, G = ie(w[R]);
          return new m("Invalid " + $ + " `" + z + "` of type " + ("`" + G + "` supplied to `" + M + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return _(c);
    }
    function A(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), n;
      function c(w, R, M, $, z) {
        for (var N = w[R], G = 0; G < x.length; G++)
          if (y(N, x[G]))
            return null;
        var q = JSON.stringify(x, function(oe, k) {
          var se = W(k);
          return se === "symbol" ? String(k) : k;
        });
        return new m("Invalid " + $ + " `" + z + "` of value `" + String(N) + "` " + ("supplied to `" + M + "`, expected one of " + q + "."));
      }
      return _(c);
    }
    function C(x) {
      function c(w, R, M, $, z) {
        if (typeof x != "function")
          return new m("Property `" + z + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var N = w[R], G = j(N);
        if (G !== "object")
          return new m("Invalid " + $ + " `" + z + "` of type " + ("`" + G + "` supplied to `" + M + "`, expected an object."));
        for (var q in N)
          if (r(N, q)) {
            var F = x(N, q, M, $, z + "." + q, o);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return _(c);
    }
    function D(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), n;
      for (var c = 0; c < x.length; c++) {
        var w = x[c];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(w) + " at index " + c + "."
          ), n;
      }
      function R(M, $, z, N, G) {
        for (var q = [], F = 0; F < x.length; F++) {
          var oe = x[F], k = oe(M, $, z, N, G, o);
          if (k == null)
            return null;
          k.data && r(k.data, "expectedType") && q.push(k.data.expectedType);
        }
        var se = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new m("Invalid " + N + " `" + G + "` supplied to " + ("`" + z + "`" + se + "."));
      }
      return _(R);
    }
    function Y() {
      function x(c, w, R, M, $) {
        return X(c[w]) ? null : new m("Invalid " + M + " `" + $ + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return _(x);
    }
    function Z(x, c, w, R, M) {
      return new m(
        (x || "React class") + ": " + c + " type `" + w + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function ee(x) {
      function c(w, R, M, $, z) {
        var N = w[R], G = j(N);
        if (G !== "object")
          return new m("Invalid " + $ + " `" + z + "` of type `" + G + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var q in x) {
          var F = x[q];
          if (typeof F != "function")
            return Z(M, $, z, q, W(F));
          var oe = F(N, q, M, $, z + "." + q, o);
          if (oe)
            return oe;
        }
        return null;
      }
      return _(c);
    }
    function B(x) {
      function c(w, R, M, $, z) {
        var N = w[R], G = j(N);
        if (G !== "object")
          return new m("Invalid " + $ + " `" + z + "` of type `" + G + "` " + ("supplied to `" + M + "`, expected `object`."));
        var q = t({}, w[R], x);
        for (var F in q) {
          var oe = x[F];
          if (r(x, F) && typeof oe != "function")
            return Z(M, $, z, F, W(oe));
          if (!oe)
            return new m(
              "Invalid " + $ + " `" + z + "` key `" + F + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(w[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var k = oe(N, F, M, $, z + "." + F, o);
          if (k)
            return k;
        }
        return null;
      }
      return _(c);
    }
    function X(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(X);
          if (x === null || s(x))
            return !0;
          var c = p(x);
          if (c) {
            var w = c.call(x), R;
            if (c !== x.entries) {
              for (; !(R = w.next()).done; )
                if (!X(R.value))
                  return !1;
            } else
              for (; !(R = w.next()).done; ) {
                var M = R.value;
                if (M && !X(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(x, c) {
      return x === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function j(x) {
      var c = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Q(c, x) ? "symbol" : c;
    }
    function W(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var c = j(x);
      if (c === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function ne(x) {
      var c = W(x);
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
    function ie(x) {
      return !x.constructor || !x.constructor.name ? f : x.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, Ge;
}
var Ue, Tt;
function wn() {
  if (Tt) return Ue;
  Tt = 1;
  var e = /* @__PURE__ */ tt();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ue = function() {
    function r(n, s, h, b, g, p) {
      if (p !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
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
      checkPropTypes: o,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ue;
}
var At;
function kn() {
  if (At) return Re.exports;
  if (At = 1, process.env.NODE_ENV !== "production") {
    var e = Dt(), t = !0;
    Re.exports = /* @__PURE__ */ _n()(e.isElement, t);
  } else
    Re.exports = /* @__PURE__ */ wn()();
  return Re.exports;
}
var On = /* @__PURE__ */ kn();
const v = /* @__PURE__ */ un(On), Bt = {
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
}, Rn = [
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
], nt = "16px", Mn = (e) => Math.round(e * 96 / 72), Sn = (e) => Math.round(e * 72 / 96 * 2) / 2, Po = (e) => {
  const t = Object.values(Bt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Mn(e)}px`;
}, _o = (e) => {
  const t = parseInt(e), o = Object.values(Bt).find((r) => r.px === t);
  return o ? o.pt : Sn(t);
}, wo = (e) => {
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
}, P = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function ko({
  handler: e,
  startX: t,
  startY: o,
  currentX: r,
  currentY: i,
  startWidth: a,
  startHeight: n,
  options: s = ge
}) {
  const h = r - t, b = i - o;
  let g = a, p = n;
  switch (e) {
    case P.TOP_LEFT:
      g = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, n - b);
      break;
    case P.TOP_RIGHT:
      g = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, n - b);
      break;
    case P.BOTTOM_LEFT:
      g = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, n + b);
      break;
    case P.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, n + b);
      break;
    case P.TOP:
      p = Math.max(s.minHeight, n - b);
      break;
    case P.BOTTOM:
      p = Math.max(s.minHeight, n + b);
      break;
    case P.LEFT:
      g = Math.max(s.minWidth, a - h);
      break;
    case P.RIGHT:
      g = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: g, height: p };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / n;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? g / f > p ? p = Math.max(s.minHeight, g / f) : g = Math.max(s.minWidth, p * f) : [P.TOP, P.BOTTOM].includes(e) ? g = p * f : [P.LEFT, P.RIGHT].includes(e) && (p = g / f);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (p = g / (a / n))), s.maxHeight && p > s.maxHeight && (p = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = p * (a / n))), g = Math.max(s.minWidth, g), p = Math.max(s.minHeight, p), {
    width: Math.round(g),
    height: Math.round(p)
  };
}
function fe(e) {
  return e ? (console.log("Checking if element is resizable image:", e, "tagName:", e.tagName), e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none" ? (console.log("Element is a DIV with background image, returning true"), !0) : (console.log("Element is not a resizable image, returning false"), !1)) : !1;
}
function Oo(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Ro(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function $t(e, t = ge) {
  if (!fe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return o.style.top = `${r.top}px`, o.style.left = `${r.left}px`, o.style.width = `${r.width}px`, o.style.height = `${r.height}px`, Object.values(P).forEach((a) => {
    const n = document.createElement("div");
    n.className = `resize-handler resize-handler-${a}`, n.dataset.handler = a, n.style.position = "absolute", n.style.width = "10px", n.style.height = "10px", n.style.backgroundColor = "#007bff", n.style.border = "2px solid white", n.style.borderRadius = "50%", n.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", n.style.cursor = Cn(a), n.style.pointerEvents = "all", Ht(n, a, r.width, r.height), o.appendChild(n);
  }), o;
}
function Cn(e) {
  switch (e) {
    case P.TOP_LEFT:
    case P.BOTTOM_RIGHT:
      return "nwse-resize";
    case P.TOP_RIGHT:
    case P.BOTTOM_LEFT:
      return "nesw-resize";
    case P.TOP:
    case P.BOTTOM:
      return "ns-resize";
    case P.LEFT:
    case P.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ht(e, t, o, r) {
  switch (t) {
    case P.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case P.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case P.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case P.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case P.TOP:
      e.style.top = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case P.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case P.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case P.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Xe(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    Ht(i, a, o.width, o.height);
  });
}
function be(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Nn = {
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
}, Pt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: nt,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, In = () => {
  const [e, t] = le(Pt), o = H((E) => {
    t((y) => ({
      ...y,
      alignLeft: E === "left",
      alignCenter: E === "center",
      alignRight: E === "right",
      alignJustify: E === "justify"
    }));
  }, []), r = H((E) => {
    try {
      const y = window.getSelection();
      if (!y || y.rangeCount === 0)
        return !1;
      const m = y.getRangeAt(0);
      if (!m.toString())
        return t((I) => ({ ...I, fontSize: E })), !1;
      try {
        const I = document.createElement("span");
        I.style.fontSize = E;
        const T = m.extractContents();
        return I.appendChild(T), m.insertNode(I), m.selectNodeContents(I), y.removeAllRanges(), y.addRange(m), t((O) => ({ ...O, fontSize: E })), !0;
      } catch {
        const T = Nn[E] || "2";
        return document.execCommand("fontSize", !1, T), t((O) => ({ ...O, fontSize: E })), !0;
      }
    } catch (y) {
      return console.warn("[useFormatting] Font size change failed:", y), !1;
    }
  }, []), i = H((E, y = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (E === "fontSize") {
        r(y);
        return;
      }
      switch (document.execCommand(E, !1, y) || console.warn(`[useFormatting] Command "${E}" failed`), E) {
        case "bold":
          t((_) => ({ ..._, bold: !_.bold }));
          break;
        case "italic":
          t((_) => ({ ..._, italic: !_.italic }));
          break;
        case "underline":
          t((_) => ({ ..._, underline: !_.underline }));
          break;
        case "strikethrough":
          t((_) => ({ ..._, strikethrough: !_.strikethrough }));
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
          t((_) => ({ ..._, fontFamily: y }));
        case "formatBlock":
          t((_) => ({ ..._, headingLevel: y }));
        default:
          break;
      }
    } catch (m) {
      console.warn(`[useFormatting] Error executing command "${E}":`, m);
    }
  }, [r, o]), a = te(null), n = te(null), s = te(null), h = te(null), b = te(ge);
  H((E) => {
    if (!fe(E)) return;
    a.current && (be(a.current), a.current = null), E.classList.add("selected");
    const y = $t(E);
    y && (a.current = y, n.current = E, document.body.appendChild(y), t((m) => ({
      ...m,
      imageSelected: !0,
      preserveAspectRatio: b.current.preserveAspectRatio
    })));
  }, []);
  const g = H(() => {
    n.current && (n.current.classList.remove("selected"), n.current = null), a.current && (be(a.current), a.current = null), s.current = null, h.current = null, t((E) => ({
      ...E,
      imageSelected: !1
    }));
  }, []), p = H(() => {
    const E = !b.current.preserveAspectRatio;
    b.current = {
      ...b.current,
      preserveAspectRatio: E,
      aspectRatio: E
    }, t((y) => ({
      ...y,
      preserveAspectRatio: E
    }));
  }, []);
  H((E, y, m) => {
    n.current && (s.current = {
      x: y,
      y: m,
      width: n.current.offsetWidth,
      height: n.current.offsetHeight
    }, h.current = E, document.body.classList.add("resize-in-progress"), document.body.style.cursor = jn(E));
  }, []), H((E, y) => {
    if (!n.current || !s.current || !h.current) return;
    const { x: m, y: _, width: I, height: T } = s.current, O = h.current, S = Ln({
      handler: O,
      startX: m,
      startY: _,
      currentX: E,
      currentY: y,
      startWidth: I,
      startHeight: T,
      options: b.current
    });
    Dn(n.current, S), a.current && Xe(a.current, n.current);
  }, []), H(() => {
    if (s.current = null, h.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", n.current) {
      const E = new Event("input", { bubbles: !0, cancelable: !0 });
      n.current.dispatchEvent(E);
    }
  }, []);
  const f = H(() => {
    g(), t(Pt);
  }, [g]);
  return re(() => () => {
    a.current && be(a.current);
  }, []), {
    currentFormat: e,
    formatText: i,
    resetFormat: f,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: p
  };
};
function jn(e) {
  switch (e) {
    case P.TOP_LEFT:
    case P.BOTTOM_RIGHT:
      return "nwse-resize";
    case P.TOP_RIGHT:
    case P.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case P.BOTTOM:
      return "ns-resize";
    case P.LEFT:
    case P.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ln({
  handler: e,
  startX: t,
  startY: o,
  currentX: r,
  currentY: i,
  startWidth: a,
  startHeight: n,
  options: s = ge
}) {
  const h = r - t, b = i - o;
  let g = a, p = n;
  switch (e) {
    case P.TOP_LEFT:
      g = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, n - b);
      break;
    case P.TOP_RIGHT:
      g = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, n - b);
      break;
    case P.BOTTOM_LEFT:
      g = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, n + b);
      break;
    case P.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, n + b);
      break;
    case P.TOP:
      p = Math.max(s.minHeight, n - b);
      break;
    case P.BOTTOM:
      p = Math.max(s.minHeight, n + b);
      break;
    case P.LEFT:
      g = Math.max(s.minWidth, a - h);
      break;
    case P.RIGHT:
      g = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: g, height: p };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / n;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? g / f > p ? p = Math.max(s.minHeight, g / f) : g = Math.max(s.minWidth, p * f) : [P.TOP, P.BOTTOM].includes(e) ? g = p * f : [P.LEFT, P.RIGHT].includes(e) && (p = g / f);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (p = g / (a / n))), s.maxHeight && p > s.maxHeight && (p = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = p * (a / n))), g = Math.max(s.minWidth, g), p = Math.max(s.minHeight, p), {
    width: Math.round(g),
    height: Math.round(p)
  };
}
function Dn(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const xe = 'page-break, [data-page-break="true"]', Gt = (e) => ce[e] || ce.A4, zn = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", r = Gt(o), i = e.querySelectorAll(xe), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const n = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((h, b) => {
    const p = h.getBoundingClientRect().top - n.top + s;
    a.push({
      id: `page-${b + 1}`,
      pageNumber: b + 2,
      top: p,
      height: r.height
    });
  }), a;
}, Ut = (e, t = 100, o = pe) => {
  const r = Gt(e), i = hn(o), a = r.height - i, n = t / 100;
  return a / n;
}, Bn = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(xe);
    if (o.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), i = r.top + r.height / 2;
    for (let a = o.length - 1; a >= 0; a--)
      if (o[a].getBoundingClientRect().top < i)
        return a + 1;
    return 0;
  } catch (o) {
    return console.warn("[getCurrentPage] Failed to calculate page:", o), 0;
  }
}, _t = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let o = [], r = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? r.length > 0 && (o.push(r), r = []) : r.push(i);
  return r.length > 0 && o.push(r), o.length === 0 && t.length > 0 && o.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), o;
}, $n = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Hn = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, Gn = (e, t, o, r, i, a, n) => {
  if (!e)
    return !1;
  try {
    const h = Ut(o, r, i) * (t - 1), b = Array.from(e.children);
    let g = 0, p = null;
    for (let f = 0; f < b.length; f++) {
      const E = b[f];
      if (E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true")
        continue;
      const y = $n(E);
      if (g + y > h) {
        p = E;
        break;
      }
      g += y;
    }
    if (p) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), p.parentNode.insertBefore(f, p), a) {
        const E = e.innerHTML;
        a(E);
      }
      return n && setTimeout(() => {
        n();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const E = document.createElement("p");
      if (E.innerHTML = "<br>", e.appendChild(E), a) {
        const y = e.innerHTML;
        a(y);
      }
      return n && setTimeout(() => {
        n();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, Un = (e, t, o, r, i, a, n) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const h = Array.from(e.querySelectorAll(xe));
    if (t > h.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const b = window.getSelection();
    let g = !1, p = [], f = null;
    if (t === 0) {
      const y = h[0];
      if (!y)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let m = e.firstChild;
      for (; m && m !== y; )
        p.push(m), m = m.nextSibling;
      f = y;
    } else {
      const y = h[t - 1];
      if (!y)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const m = h[t];
      let _ = y.nextSibling;
      for (; _ && _ !== m; )
        p.push(_), _ = _.nextSibling;
      f = y;
    }
    if (b && b.rangeCount > 0) {
      const m = b.getRangeAt(0).startContainer;
      for (const _ of p)
        if (_.contains(m) || _ === m) {
          g = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), p.forEach((y) => {
      y.parentNode && y.remove();
    }), e.querySelectorAll(xe).forEach((y, m) => {
      y.setAttribute("data-page-number", String(m + 2));
    }), g && a && setTimeout(() => {
      a(0);
    }, 50), r) {
      const y = e.innerHTML;
      r(y);
    }
    return i && setTimeout(() => {
      i(), n && setTimeout(() => {
        n();
      }, 150);
    }, 100), !0;
  } catch (h) {
    return console.error("[removePageAndContent] Failed to remove page:", h), !1;
  }
}, Fn = 200, Wn = 50, wt = 3, qn = 20, Ft = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Zn = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, r = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const n = Ft(a);
    if (n < 1)
      continue;
    if (o + n > t)
      return r === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      } : null : {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      };
    o += n, r = a;
  }
  return null;
}, Yn = (e, t, o, r, i, a, n, s) => {
  if (!e || n.current)
    return !1;
  try {
    n.current = !0;
    const h = Ut(t, o, r);
    let b = _t(e), g = !1, p = 0;
    for (let f = 0; f < b.length && p < wt; f++) {
      const E = b[f], y = Zn(E, h);
      if (y && y.overflowIndex > 0) {
        let m = 0;
        for (let O = 0; O < E.length; O++) {
          const S = E[O];
          S && S.getBoundingClientRect && (m += Ft(S));
        }
        if (m - h < qn)
          continue;
        const I = f + 2;
        Hn(y.overflowElement, I) && (g = !0, p++, b = _t(e));
      }
    }
    if (g) {
      if (i) {
        const f = e.innerHTML;
        i(f);
      }
      setTimeout(() => {
        a && a(), p >= wt && s && setTimeout(() => {
          n.current || s();
        }, 100);
      }, Wn);
    }
    return g;
  } catch (h) {
    return console.warn("[checkAndReflow] Reflow failed:", h), !1;
  } finally {
    n.current = !1;
  }
}, Vn = (e, t, o = Fn) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, Kn = 400, Wt = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, r = 0;
      if (t === 0)
        o = e.firstChild, r = 0;
      else {
        const a = e.querySelectorAll(xe)[t - 1];
        a && a.nextSibling && (o = a.nextSibling, r = 0);
      }
      if (o) {
        const i = document.createRange(), a = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? i.setStart(o, r) : i.setStart(o, 0), i.collapse(!0), a.removeAllRanges(), a.addRange(i);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, Xn = (e, t, o, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (o === 0)
      i = t;
    else {
      const n = t.querySelectorAll(xe)[o - 1];
      if (n)
        i = n;
      else {
        console.warn("[scrollToPage] Page break not found for page", o);
        return;
      }
    }
    if (i) {
      const a = i.getBoundingClientRect(), n = e.getBoundingClientRect(), s = e.scrollTop + (a.top - n.top);
      console.log("[scrollToPage] Scrolling to page", o, "scrollTop:", s), e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(o) : Wt(t, o);
      }, Kn);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Jn = (e, t, o = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, r));
}, Qn = 300, er = (e, t, o = 100, r = "NARROW") => {
  const i = Lt(), a = te(null), n = te(null), s = te(e), h = te(o), b = te(r), g = te(!1);
  re(() => {
    s.current = e;
  }, [e]), re(() => {
    h.current = o;
  }, [o]), re(() => {
    b.current = r;
  }, [r]), re(() => () => {
    a.current && clearTimeout(a.current), n.current && clearTimeout(n.current);
  }, []);
  const p = H((u = {}) => t?.current ? zn(t.current, u) : [], [t]), f = H((u = {}) => {
    const d = p(u);
    return i.updatePageBoundaries(d), d;
  }, [p, i]), E = H(async (u) => {
    if (!t?.current)
      return !1;
    const d = s.current || "A4", A = h.current || 100, C = b.current || "NARROW";
    return Gn(
      t.current,
      u,
      d,
      A,
      C,
      i.updateContinuousContent,
      f
    );
  }, [t, i, f]), y = H(() => {
    if (!t?.current)
      return;
    const u = s.current || "A4", d = h.current || 100, A = b.current || "NARROW";
    Yn(
      t.current,
      u,
      d,
      A,
      i.updateContinuousContent,
      f,
      g,
      y
    );
  }, [t, i, f]), m = H((u) => {
    Vn(y, n, u);
  }, [y]), _ = H((u = {}) => {
    const d = typeof u.delay == "number" ? u.delay : Qn;
    Jn(f, a, u, d);
  }, [f]), I = H((u) => !u?.current || !t?.current ? 0 : Bn(u.current, t.current), [t]), T = H((u) => {
    t?.current && Wt(t.current, u);
  }, [t]), O = H((u, d) => {
    if (!d?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Xn(d.current, t.current, u, T);
  }, [t, T]), S = H((u) => t?.current ? Un(
    t.current,
    u,
    p,
    i.updateContinuousContent,
    f,
    T,
    y
  ) : !1, [t, p, i, f, T, y]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: _,
    updateBoundaries: f,
    getCurrentPage: I,
    scrollToPage: O,
    positionCursorAtPage: T,
    checkAndReflow: y,
    triggerAutoReflow: m,
    removePageAndContent: S,
    insertPageBreakAtBoundary: E,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: n
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, r) => r ? r.toUpperCase() : o.toLowerCase()
), kt = (e) => {
  const t = nr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, qt = (...e) => e.filter((t, o, r) => !!t && t.trim() !== "" && r.indexOf(t) === o).join(" ").trim(), rr = (e) => {
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
var or = {
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
const ar = Je(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: a,
    iconNode: n,
    ...s
  }, h) => Fe(
    "svg",
    {
      ref: h,
      ...or,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(o) * 24 / Number(t) : o,
      className: qt("lucide", i),
      ...!a && !rr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...n.map(([b, g]) => Fe(b, g)),
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
const J = (e, t) => {
  const o = Je(
    ({ className: r, ...i }, a) => Fe(ar, {
      ref: a,
      iconNode: t,
      className: qt(
        `lucide-${tr(kt(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return o.displayName = kt(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], sr = J("bold", ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], lr = J("chevron-left", cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], dr = J("chevron-right", ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], pr = J("file-check", fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ie = J("file-text", gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], mr = J("hash", hr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], br = J("heading-1", yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Er = J("heading-2", xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Tr = J("heading-3", vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Pr = J("image", Ar);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], wr = J("italic", _r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Or = J("link", kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Mr = J("list-ordered", Rr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Zt = J("list", Sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Nr = J("plus", Cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], jr = J("redo", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Dr = J("settings", Lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Br = J("strikethrough", zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Hr = J("table", $r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Yt = J("text-align-center", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Vt = J("text-align-end", Ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Wr = J("text-align-justify", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Kt = J("text-align-start", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Yr = J("trash-2", Zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Kr = J("underline", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Jr = J("undo", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], eo = J("x", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], no = J("zoom-in", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], oo = J("zoom-out", ro), ao = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: r, pageCount: i }) => {
  const a = jt(), { pages: n, activePage: s, continuousContent: h, editorMode: b } = a, [g, p] = le(0), [f, E] = le([]);
  re(() => {
    if (r !== void 0 && i !== void 0) {
      if (p(r), h) {
        const I = document.createElement("div");
        I.innerHTML = h;
        const T = I.querySelectorAll("h1, h2, h3, h4, h5, h6"), O = Array.from(T).map((S, u) => {
          const d = parseInt(S.tagName.charAt(1)), A = S.textContent.trim();
          return A ? {
            id: `heading-${u}`,
            level: d,
            text: A,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        E(O);
      }
      return;
    }
    let m = 0;
    const _ = [];
    n.forEach((I, T) => {
      if (I.content) {
        const O = document.createElement("div");
        O.innerHTML = I.content;
        const u = (O.textContent || O.innerText || "").trim().split(/\s+/).filter((A) => A.length > 0);
        m += u.length, O.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((A, C) => {
          const D = parseInt(A.tagName.charAt(1)), Y = A.textContent.trim();
          Y && _.push({
            id: `heading-${T}-${C}`,
            level: D,
            text: Y,
            page: T + 1
          });
        });
      }
    }), p(m), E(_);
  }, [n, r, i, h]);
  const y = i !== void 0 ? i : n.length;
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
            /* @__PURE__ */ l.jsx(Ie, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(dr, { size: 16 }) : /* @__PURE__ */ l.jsx(lr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(pr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: y })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(mr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Ie, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(Zt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((m) => {
              const _ = m.level === 1 ? br : m.level === 2 ? Er : Tr;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${m.level}`,
                  style: { marginLeft: `${(m.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(_, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: m.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      m.page
                    ] })
                  ]
                },
                m.id
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
}, io = "html-editor-storage", so = 1, ue = "images";
function co() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Pe() {
  return new Promise((e, t) => {
    const o = indexedDB.open(io, so);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (r) => {
      const i = r.target.result;
      i.objectStoreNames.contains(ue) || i.createObjectStore(ue, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function lo(e) {
  return new Promise((t, o) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      o(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      o(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = async (a) => {
      const n = a.target.result, h = n.split(",")[1].length * 3 / 4;
      if (h > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const b = await Pe(), g = `editor-image-${co()}`, f = b.transaction([ue], "readwrite").objectStore(ue), E = {
          key: g,
          dataUrl: n,
          size: h,
          type: e.type,
          timestamp: Date.now()
        }, y = f.add(E);
        y.onsuccess = () => {
          b.close(), t(g);
        }, y.onerror = () => {
          b.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (b) {
        o(b);
      }
    }, i.onerror = () => {
      o(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function uo(e) {
  try {
    const t = await Pe();
    return new Promise((o, r) => {
      const n = t.transaction([ue], "readonly").objectStore(ue).get(e);
      n.onsuccess = () => {
        t.close();
        const s = n.result;
        o(s ? s.dataUrl : null);
      }, n.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Mo(e) {
  try {
    const t = await Pe();
    return new Promise((o, r) => {
      const n = t.transaction([ue], "readwrite").objectStore(ue).delete(e);
      n.onsuccess = () => {
        t.close(), o();
      }, n.onerror = () => {
        t.close(), r(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function So() {
  try {
    const e = await Pe();
    return new Promise((t, o) => {
      const a = e.transaction([ue], "readwrite").objectStore(ue).clear();
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
async function Co() {
  try {
    const e = await Pe();
    return new Promise((t, o) => {
      const a = e.transaction([ue], "readonly").objectStore(ue).getAllKeys();
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
class fo {
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
  _format(t, o, r) {
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
const Ot = new fo("Editor"), rt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o
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
      const n = await lo(i), s = await uo(n);
      s && (document.execCommand("insertImage", !1, s), Ot.info("Image inserted", { key: n }));
    } catch (a) {
      Ot.error("Error uploading image", a);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("undo"),
        title: "Undo",
        children: /* @__PURE__ */ l.jsx(Jr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        title: "Redo",
        children: /* @__PURE__ */ l.jsx(jr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(sr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(Kr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(Br, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(Kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(Yt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(Vt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(Wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (i) => t("fontName", i.target.value),
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
        onChange: (i) => t("fontSize", i.target.value),
        defaultValue: nt,
        title: "Font Size",
        children: Rn.map(({ value: i, label: a, pt: n }) => /* @__PURE__ */ l.jsx("option", { value: i, children: a }, i))
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (i) => t("formatBlock", i.target.value),
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
        children: /* @__PURE__ */ l.jsx(Zt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(Mr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          const i = prompt("Enter URL:");
          i && t("createLink", i);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(Or, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(Hr, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(Ie, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (i) => i.target.files[0] && r(i.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(Pr, { size: 16 })
      }
    )
  ] });
};
rt.propTypes = {
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
rt.defaultProps = {
  onAddPageBreak: void 0
};
const ot = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: r = [],
  editorRef: i,
  onInput: a,
  onKeyDown: n,
  onClick: s,
  onScroll: h,
  zoomLevel: b = 100,
  pageMargins: g = pe
}) => {
  const p = Mt(g), f = b / 100, E = (T, O) => {
    if (!T) return !1;
    const S = T.getBoundingClientRect(), u = O - S.top;
    return u < p.top || u > S.height - p.bottom;
  }, y = (T) => T ? T.nodeType === Node.ELEMENT_NODE ? T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true" : T.parentElement && y(T.parentElement) : !1, m = (T) => {
    const O = window.getSelection();
    if (!O || O.rangeCount === 0) return;
    const S = O.getRangeAt(0), { startContainer: u, endContainer: d } = S;
    if ((y(u) || y(d)) && (T.key.length === 1 || T.key === "Enter" || T.key === " "))
      return T.preventDefault(), !1;
    if (T.key === "Tab")
      return T.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((T.key === "Backspace" || T.key === "Delete") && (y(u) || y(d)))
      return T.preventDefault(), !1;
    n && n(T);
  }, _ = (T) => {
    if (!i.current) return;
    const O = T.target;
    if (y(O)) {
      T.preventDefault();
      return;
    }
    if (E(i.current, T.clientY)) {
      T.preventDefault();
      const S = i.current.getBoundingClientRect();
      if (T.clientY - S.top < p.top) {
        const d = i.current.firstElementChild;
        if (d && d.tagName !== "PAGE-BREAK") {
          const A = document.createRange(), C = window.getSelection();
          A.setStart(d, 0), A.collapse(!0), C.removeAllRanges(), C.addRange(A);
        }
      } else {
        const d = i.current.lastElementChild;
        if (d && d.tagName !== "PAGE-BREAK") {
          const A = document.createRange(), C = window.getSelection();
          A.selectNodeContents(d), A.collapse(!1), C.removeAllRanges(), C.addRange(A);
        }
      }
      return;
    }
    s && s(T);
  }, I = (T) => {
    const O = window.getSelection();
    if (!O || O.rangeCount === 0) return;
    const S = O.getRangeAt(0), { startContainer: u } = S;
    if (y(u))
      return T.preventDefault(), !1;
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
        transform: `scale(${f})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: i,
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
            fontSize: nt,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: m,
          onBeforeInput: I,
          onClick: _,
          onScroll: h,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
ot.propTypes = {
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
ot.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100,
  pageMargins: pe
};
const at = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: r = pe,
  zoomLevel: i = 100,
  canZoomIn: a = !0,
  canZoomOut: n = !0,
  onNavigate: s,
  onAddPage: h,
  onDeletePage: b,
  onPageSizeChange: g,
  onPageMarginsChange: p,
  onZoomIn: f,
  onZoomOut: E,
  onZoomReset: y
} = {}) => {
  const m = Math.max(e?.length || 0, 1), _ = (u) => {
    s && s(u);
  }, I = () => {
    h && h();
  }, T = (u) => {
    if (m <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    b && b(u);
  }, O = (u) => {
    g && g(u);
  }, S = (u) => {
    p && p(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(Dr, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: r,
              onChange: (u) => S(u.target.value),
              children: mn().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: yn(u) }, u))
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
          onClick: E,
          disabled: !n,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(oo, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: "zoom-level-display", children: [
        i,
        "%"
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: f,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(no, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: y,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, d) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${d === t ? "active" : ""}`,
          onClick: () => _(d),
          "aria-label": `Go to page ${d + 1}`,
          "aria-current": d === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Ie, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              d + 1
            ] })
          ]
        }
      ),
      m > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (A) => {
            A.stopPropagation(), T(d);
          },
          "aria-label": `Delete page ${d + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(eo, { size: 14 })
        }
      )
    ] }, u.id || `page-${d}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: I,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(Nr, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
at.propTypes = {
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
at.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: pe,
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
const po = je.memo(at), it = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: r,
  resizeOptions: i = ge
}) => {
  const a = te(null), n = te(null), s = te(null), h = te(null), b = te(i), g = te(!1);
  re(() => {
    b.current = i;
  }, [i]);
  const p = H((d) => {
    if (!fe(d)) return;
    a.current && (be(a.current), a.current = null), d.classList.add("selected");
    const A = $t(d, b.current);
    A && (a.current = A, n.current = d, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((D) => {
      D.addEventListener("mousedown", E);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(d)));
  }, [o]), f = H(() => {
    n.current && (n.current.classList.remove("selected"), n.current = null), a.current && (be(a.current), a.current = null), s.current = null, h.current = null, g.current = !1, r && r();
  }, [r]), E = H((d) => {
    if (d.preventDefault(), d.stopPropagation(), !n.current) return;
    const A = d.currentTarget.dataset.handler, C = n.current.getBoundingClientRect(), D = window.pageYOffset || document.documentElement.scrollTop, Y = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: d.clientX,
      y: d.clientY,
      width: n.current.offsetWidth,
      height: n.current.offsetHeight,
      offsetX: d.clientX - C.left - Y,
      offsetY: d.clientY - C.top - D
    }, h.current = A, g.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = O(A), document.addEventListener("mousemove", y), document.addEventListener("mouseup", m);
  }, []), y = H((d) => {
    if (!g.current || !n.current || !s.current || !h.current) return;
    d.preventDefault(), d.stopPropagation();
    const { x: A, y: C, width: D, height: Y } = s.current, Z = h.current, ee = d.clientX, B = d.clientY, X = S({
      handler: Z,
      startX: A,
      startY: C,
      currentX: ee,
      currentY: B,
      startWidth: D,
      startHeight: Y,
      options: b.current
    });
    u(n.current, X), a.current && Xe(a.current, n.current);
  }, []), m = H((d) => {
    if (g.current && (d.preventDefault(), d.stopPropagation(), s.current = null, h.current = null, g.current = !1, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", m), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", n.current)) {
      const A = new Event("input", { bubbles: !0, cancelable: !0 });
      n.current.dispatchEvent(A), t && t(n.current, {
        width: n.current.offsetWidth,
        height: n.current.offsetHeight
      });
    }
  }, [t]), _ = H((d) => {
    console.log("handleEditorClick called with target:", d.target), a.current && !a.current.contains(d.target) && (console.log("Clicking outside image, clearing selection"), f());
    const A = d.target;
    if (fe(A)) {
      if (console.log("Clicked on a resizable image"), A === n.current) {
        console.log("Image already selected, not reselecting");
        return;
      }
      console.log("Selecting new image"), p(A);
    } else
      console.log("Clicked on non-image element");
  }, [p, f]), I = H((d) => {
    if ((d.key === "Delete" || d.key === "Backspace") && n.current && !g.current) {
      d.preventDefault();
      const A = n.current;
      if (A.parentNode) {
        A.parentNode.removeChild(A), f();
        const C = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(C);
      }
    }
    if (d.key === "Escape" && n.current && f(), n.current && !g.current) {
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === ">") {
        d.preventDefault();
        const A = n.current.offsetWidth, C = Math.min(b.current.maxWidth || 800, A + 10);
        u(n.current, { width: C, height: n.current.offsetHeight });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === "<") {
        d.preventDefault();
        const A = n.current.offsetWidth, C = Math.max(b.current.minWidth || 50, A - 10);
        u(n.current, { width: C, height: n.current.offsetHeight });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === "+") {
        d.preventDefault();
        const A = n.current.offsetHeight, C = Math.min(b.current.maxHeight || 600, A + 10);
        u(n.current, { width: n.current.offsetWidth, height: C });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.shiftKey && d.key === "-") {
        d.preventDefault();
        const A = n.current.offsetHeight, C = Math.max(b.current.minHeight || 50, A - 10);
        u(n.current, { width: n.current.offsetWidth, height: C });
        const D = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(D);
      }
      if ((d.ctrlKey || d.metaKey) && d.key === "r") {
        d.preventDefault(), u(n.current, { width: 300, height: 200 });
        const A = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(A);
      }
    }
  }, [e, f]), T = H(() => {
    a.current && n.current && Xe(a.current, n.current);
  }, []);
  re(() => {
    if (!e.current) return;
    const A = e.current.closest(".editor-viewport");
    return A && (A.addEventListener("scroll", T), window.addEventListener("scroll", T)), () => {
      A && A.removeEventListener("scroll", T), window.removeEventListener("scroll", T);
    };
  }, [e, T]), re(() => {
    if (!e.current) return;
    const d = e.current;
    d.addEventListener("click", _), d.addEventListener("keydown", I);
    const A = d.closest(".editor-viewport");
    return A && A.addEventListener("scroll", T), window.addEventListener("resize", T), () => {
      d.removeEventListener("click", _), d.removeEventListener("keydown", I), A && A.removeEventListener("scroll", T), window.removeEventListener("resize", T), g.current && (document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", m), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && be(a.current);
    };
  }, [e, _, I, T, y, m]), re(() => {
    if (!e.current) return;
    const d = new MutationObserver((A) => {
      A.forEach((C) => {
        C.type === "childList" && (C.removedNodes.length > 0 && C.removedNodes.forEach((D) => {
          D.nodeType === Node.ELEMENT_NODE && fe(D) && D === n.current && f();
        }), C.addedNodes.length > 0 && C.addedNodes.forEach((D) => {
          if (D.nodeType === Node.ELEMENT_NODE)
            if (fe(D))
              setTimeout(() => {
                p(D);
              }, 50);
            else {
              const Y = D.querySelectorAll ? D.querySelectorAll("img") : [];
              Y.length > 0 && setTimeout(() => {
                p(Y[0]);
              }, 50);
            }
        }));
      });
    });
    return d.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      d.disconnect();
    };
  }, [e, f, p]);
  function O(d) {
    switch (d) {
      case P.TOP_LEFT:
      case P.BOTTOM_RIGHT:
        return "nwse-resize";
      case P.TOP_RIGHT:
      case P.BOTTOM_LEFT:
        return "nesw-resize";
      case P.TOP:
      case P.BOTTOM:
        return "ns-resize";
      case P.LEFT:
      case P.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function S({
    handler: d,
    startX: A,
    startY: C,
    currentX: D,
    currentY: Y,
    startWidth: Z,
    startHeight: ee,
    options: B = ge
  }) {
    const X = D - A, Q = Y - C;
    let j = Z, W = ee;
    switch (d) {
      case P.TOP_LEFT:
        j = Math.max(B.minWidth, Z - X), W = Math.max(B.minHeight, ee - Q);
        break;
      case P.TOP_RIGHT:
        j = Math.max(B.minWidth, Z + X), W = Math.max(B.minHeight, ee - Q);
        break;
      case P.BOTTOM_LEFT:
        j = Math.max(B.minWidth, Z - X), W = Math.max(B.minHeight, ee + Q);
        break;
      case P.BOTTOM_RIGHT:
        j = Math.max(B.minWidth, Z + X), W = Math.max(B.minHeight, ee + Q);
        break;
      case P.TOP:
        W = Math.max(B.minHeight, ee - Q);
        break;
      case P.BOTTOM:
        W = Math.max(B.minHeight, ee + Q);
        break;
      case P.LEFT:
        j = Math.max(B.minWidth, Z - X);
        break;
      case P.RIGHT:
        j = Math.max(B.minWidth, Z + X);
        break;
      default:
        return { width: j, height: W };
    }
    if (B.preserveAspectRatio && B.aspectRatio) {
      const ne = Z / ee;
      [
        P.TOP_LEFT,
        P.TOP_RIGHT,
        P.BOTTOM_LEFT,
        P.BOTTOM_RIGHT
      ].includes(d) ? j / ne > W ? W = Math.max(B.minHeight, j / ne) : j = Math.max(B.minWidth, W * ne) : [P.TOP, P.BOTTOM].includes(d) ? j = W * ne : [P.LEFT, P.RIGHT].includes(d) && (W = j / ne);
    }
    return B.maxWidth && j > B.maxWidth && (j = B.maxWidth, B.preserveAspectRatio && B.aspectRatio && (W = j / (Z / ee))), B.maxHeight && W > B.maxHeight && (W = B.maxHeight, B.preserveAspectRatio && B.aspectRatio && (j = W * (Z / ee))), j = Math.max(B.minWidth, j), W = Math.max(B.minHeight, W), {
      width: Math.round(j),
      height: Math.round(W)
    };
  }
  function u(d, { width: A, height: C }) {
    fe(d) && (d.tagName === "IMG" ? (d.style.width = `${A}px`, d.style.height = `${C}px`, d.width = A, d.height = C) : d.tagName === "DIV" && (d.style.width = `${A}px`, d.style.height = `${C}px`));
  }
  return null;
};
it.propTypes = {
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
it.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const st = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: o,
  onDelete: r,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [n, s] = le({ top: 0, left: 0 }), [h, b] = le(!1), [g, p] = le("top"), [f, E] = le(a), y = te(null), m = te(null), _ = () => {
    if (!e) return "left";
    const C = window.getComputedStyle(e);
    return C.float || C.display === "block" ? "left" : C.display === "flex" && C.justifyContent === "center" ? "center" : C.float === "right" ? "right" : "left";
  }, [I, T] = le(_());
  re(() => (console.log("ImageTooltipMenu mounted with imageElement:", e), () => {
    console.log("ImageTooltipMenu unmounted");
  }), [e]), re(() => {
    if (e) {
      let C = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      C && (m.current = C);
    }
  }, [e]), sn(() => {
    if (!e || !y.current) return;
    const C = () => {
      const Y = e.getBoundingClientRect(), Z = y.current.getBoundingClientRect();
      m.current;
      const ee = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, B = Y.bottom >= 0 && Y.top <= ee.height && Y.right >= 0 && Y.left <= ee.width;
      let X = "top", Q = 0, j = 0;
      if (B) {
        const c = Y.top - Z.height - 10, w = ee.height - Y.bottom - Z.height - 10;
        w > c && w > 0 ? (X = "bottom", Q = Y.bottom + 10) : (X = "top", Q = Y.top - Z.height - 10);
      } else
        X = "top", Q = 10;
      j = Y.left + Y.width / 2 - Z.width / 2;
      const W = window.innerWidth, ne = window.innerHeight;
      let ie = j, x = Q;
      j < 10 ? ie = 10 : j + Z.width > W - 10 && (ie = W - Z.width - 10), Q < 10 ? x = 10 : Q + Z.height > ne - 10 && (x = ne - Z.height - 10), s({
        top: x,
        left: ie
      }), p(X), b(!0);
    };
    C();
    const D = () => {
      C();
    };
    return m.current && m.current.addEventListener("scroll", D), window.addEventListener("scroll", D), window.addEventListener("resize", D), () => {
      m.current && m.current.removeEventListener("scroll", D), window.removeEventListener("scroll", D), window.removeEventListener("resize", D), b(!1);
    };
  }, [e]), re(() => {
    const C = (D) => {
      y.current && !y.current.contains(D.target) && D.target !== e && i();
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [e, i]);
  const O = () => {
    e && (e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", T("left"), t && t("left"));
  }, S = () => {
    e && (e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", T("center"), t && t("center"));
  }, u = () => {
    e && (e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", T("right"), t && t("right"));
  }, d = () => {
    e && e.parentNode && (e.parentNode.removeChild(e), r && r(), i());
  }, A = () => {
    const C = !f;
    E(C), o && o(C);
  };
  return !e || (console.log("Rendering ImageTooltipMenu with position:", n, "isVisible:", h), typeof document > "u") ? null : ln(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: y,
        className: "image-tooltip-menu",
        "data-menu-position": g,
        "aria-hidden": !h,
        style: {
          position: "fixed",
          top: `${n.top}px`,
          left: `${n.left}px`,
          zIndex: 999,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "2px",
          alignItems: "center",
          pointerEvents: h ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: h ? 1 : 0,
          visibility: h ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${f ? "" : "active"}`,
              onClick: A,
              title: `Toggle aspect ratio preservation (currently ${f ? "ON" : "OFF"})`,
              children: f ? "🔓" : "🔗"
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${I === "left" ? "active" : ""}`,
              onClick: O,
              title: "Align Left",
              style: {
                background: I === "left" ? "#007bff" : "transparent",
                color: I === "left" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(Kt, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${I === "center" ? "active" : ""}`,
              onClick: S,
              title: "Align Center",
              style: {
                background: I === "center" ? "#007bff" : "transparent",
                color: I === "center" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(Yt, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${I === "right" ? "active" : ""}`,
              onClick: u,
              title: "Align Right",
              style: {
                background: I === "right" ? "#007bff" : "transparent",
                color: I === "right" ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(Vt, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: d,
              title: "Delete Image",
              style: {
                background: "transparent",
                color: "#dc3545",
                border: "1px solid #dc3545",
                borderRadius: "4px",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "28px",
                height: "28px"
              },
              children: /* @__PURE__ */ l.jsx(Yr, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
st.propTypes = {
  imageElement: v.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: v.func,
  onAspectRatioToggle: v.func,
  onDelete: v.func,
  onClose: v.func.isRequired,
  initialPreserveAspectRatio: v.bool
};
st.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const go = 50, ho = 50, Rt = 50, mo = 100, yo = 500, ct = Je(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: r,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: n,
  showSidebar: s = !0,
  showToolbar: h = !0,
  showPageManager: b = !0
}, g) => {
  const p = jt(), f = Lt(), { pageSize: E, pageMargins: y, continuousContent: m, pageBoundaries: _, activePage: I, zoomLevel: T } = p, O = te(null), S = te(null), { currentFormat: u, formatText: d } = In(), [A, C] = le(!1), [D, Y] = le(null), [Z, ee] = le(!0), {
    checkAndUpdateBoundaries: B,
    getCurrentPage: X,
    scrollToPage: Q,
    updateBoundaries: j,
    triggerAutoReflow: W,
    removePageAndContent: ne,
    insertPageBreakAtBoundary: ie
  } = er(E, S, T, y), x = Ce(() => et(E), [E]), [c, w] = le(!1), R = te(null), M = te(!1), $ = te(!1), z = te(!1), N = te(m);
  re(() => {
    if (S.current) {
      if (!z.current) {
        S.current.innerHTML = m, z.current = !0, N.current = m;
        const L = setTimeout(() => {
          j();
        }, go);
        return () => clearTimeout(L);
      }
      if (N.current !== m) {
        if (S.current.innerHTML !== m) {
          S.current.innerHTML = m;
          const ae = setTimeout(() => {
            if (j(), M.current) {
              M.current = !1;
              const de = Math.max(0, _.length - 1);
              f.setActivePage(de), setTimeout(() => {
                Q(de, O);
              }, Rt);
            }
          }, ho);
          return N.current = m, () => clearTimeout(ae);
        }
        N.current = m;
      }
    }
  }, [m, j, _.length, f, Q]), re(() => {
    n && z.current && n(m);
  }, [m, n]), cn(g, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => m,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => m.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (L) => {
      f.updateContinuousContent(L), S.current && (S.current.innerHTML = L, setTimeout(() => {
        j();
      }, 50));
    }
  }), [m, f, j]), re(() => {
    const L = setTimeout(() => {
      S.current && S.current.focus();
    }, 200);
    return () => clearTimeout(L);
  }, []);
  const G = H((L) => {
    const ae = L.currentTarget.innerHTML;
    f.updateContinuousContent(ae), B(), W(200);
    const de = X(O);
    de !== I && f.setActivePage(de);
  }, [B, f, X, I, W, O]), q = H((L) => {
    f.updatePageSize(L), j({ pageSize: L }), i && i(L);
  }, [f, j, i]), F = H((L) => {
    f.updatePageMargins(L), j({ pageMargins: L }), a && a(L);
  }, [f, j, a]), oe = H((L) => {
    L < 0 || L >= _.length || ($.current = !0, f.setActivePage(L), Q(L, O), setTimeout(() => {
      $.current = !1;
    }, yo), t && t(L));
  }, [f, Q, t, _.length]), k = H(() => {
    const L = _.length + 1;
    ie(L) && (M.current = !0, setTimeout(() => {
      if (M.current) {
        M.current = !1;
        const de = Math.max(0, _.length - 1);
        f.setActivePage(de), setTimeout(() => {
          Q(de, O);
        }, Rt);
      }
    }, 100)), o && o();
  }, [_.length, ie, f, Q, o]), se = H(() => {
    const L = window.getSelection();
    if (L && L.rangeCount > 0) {
      if (!S?.current) return;
      const Le = `<page-break data-page-break="true" contenteditable="false" data-page-number="${S.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Le), setTimeout(() => {
        j();
        const De = X(O);
        f.setActivePage(De);
      }, 150);
    }
  }, [j, X, f, O]), he = H((L) => {
    if (_.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    ne(L) && (f.setActivePage(0), r && r(L));
  }, [_.length, ne, f, r]), me = H(() => {
    f.zoomIn();
  }, [f]), _e = H(() => {
    f.zoomOut();
  }, [f]), we = H(() => {
    f.resetZoom();
  }, [f]);
  re(() => {
    const L = (ae) => {
      if (ae.ctrlKey || ae.metaKey) {
        ["+", "=", "-", "_", "0"].includes(ae.key) && ae.preventDefault();
        const de = document.activeElement === S.current, Le = document.activeElement === O.current, De = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (de || Le || !De)
          switch (ae.key) {
            case "+":
            case "=":
              me();
              break;
            case "-":
            case "_":
              _e();
              break;
            case "0":
              we();
              break;
          }
      }
    };
    return window.addEventListener("keydown", L), () => {
      window.removeEventListener("keydown", L);
    };
  }, [me, _e, we]);
  const Jt = H(() => {
    !O.current || !S.current || $.current || (R.current && clearTimeout(R.current), R.current = setTimeout(() => {
      if ($.current) {
        R.current = null;
        return;
      }
      const L = X(O);
      L !== I && L >= 0 && f.setActivePage(L), R.current = null;
    }, mo));
  }, [X, I, f]), Qt = Ce(() => {
    if (!m) return 0;
    const ae = m.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return ae ? ae.length : 0;
  }, [m]), en = _.length || 1, tn = H((L) => {
    console.log("handleImageSelect called with:", L), C(!0), Y(L);
  }, []), lt = H(() => {
    console.log("handleImageDeselect called"), C(!1), Y(null);
  }, []), nn = H((L, ae) => {
  }, []);
  return re(() => () => {
    R.current && clearTimeout(R.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    h && /* @__PURE__ */ l.jsx(
      rt,
      {
        currentFormat: {
          ...u,
          imageSelected: A
        },
        onFormatText: d,
        onAddPageBreak: se
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        ao,
        {
          editorView: null,
          isCollapsed: c,
          onToggle: () => w((L) => !L),
          wordCount: Qt,
          pageCount: en
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: O,
          onScroll: Jt,
          children: /* @__PURE__ */ l.jsx(
            ot,
            {
              content: m,
              dimensions: x,
              pageSize: E,
              pageMargins: y,
              pageBoundaries: _,
              editorRef: S,
              onInput: G,
              onClick: () => S.current?.focus(),
              zoomLevel: T
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        it,
        {
          editorRef: S,
          onImageSelect: tn,
          onImageDeselect: lt,
          onImageResize: nn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: Z,
            aspectRatio: Z
          }
        }
      ),
      console.log("Rendering check - imageSelected:", A, "selectedImage:", D) || A && D && /* @__PURE__ */ l.jsx(
        st,
        {
          imageElement: D,
          initialPreserveAspectRatio: Z,
          onAlignChange: (L) => {
            console.log("Image alignment changed to:", L);
          },
          onAspectRatioToggle: (L) => {
            ee(L), console.log("Aspect ratio toggled to:", L);
          },
          onDelete: () => {
            console.log("Image deleted");
          },
          onClose: lt
        }
      ),
      b && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? je.cloneElement(e, {
        onNavigate: oe,
        onAddPage: k,
        onDeletePage: he,
        onPageSizeChange: q,
        onPageMarginsChange: F,
        zoomLevel: T,
        canZoomIn: Ye(T),
        canZoomOut: Ve(T),
        onZoomIn: me,
        onZoomOut: _e,
        onZoomReset: we
      }) : /* @__PURE__ */ l.jsx(
        po,
        {
          pageBoundaries: _,
          activePage: I,
          pageSize: E,
          pageMargins: y,
          zoomLevel: T,
          canZoomIn: Ye(T),
          canZoomOut: Ve(T),
          onNavigate: oe,
          onAddPage: k,
          onDeletePage: he,
          onPageSizeChange: q,
          onPageMarginsChange: F,
          onZoomIn: me,
          onZoomOut: _e,
          onZoomReset: we
        }
      ) })
    ] })
  ] });
});
ct.displayName = "HtmlEditor";
ct.propTypes = {
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
ct.defaultProps = {
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
class Xt extends je.Component {
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
Xt.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
Xt.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const No = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Rn as COMMON_FONT_SIZES,
  nt as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  St as DEFAULT_PAGE_SIZE,
  Ao as DocumentProvider,
  rt as EditorToolbar,
  Xt as ErrorBoundary,
  Bt as FONT_SIZE_MAP,
  ct as HtmlEditor,
  it as ImageResizeHandlers,
  No as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  po as PageManager,
  ot as PageView,
  P as RESIZE_HANDLERS,
  ao as Sidebar,
  Ro as applyImageDimensions,
  ko as calculateResizeDimensions,
  So as clearImages,
  $t as createResizeOverlay,
  Mo as deleteImage,
  Co as getAllImageKeys,
  To as getAvailablePageSizes,
  uo as getImage,
  Oo as getImageDimensions,
  et as getPageDimensions,
  Po as getPixelValue,
  _o as getPointValue,
  fe as isResizableImage,
  wo as isValidFontSize,
  vo as isValidPageSize,
  fo as logger,
  Sn as pixelsToPoints,
  Mn as pointsToPixels,
  be as removeResizeOverlay,
  lo as saveImage,
  Xe as updateResizeOverlay,
  er as useContinuousReflow,
  It as useDocument,
  Lt as useDocumentActions,
  jt as useDocumentState,
  In as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
