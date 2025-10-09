import Ne, { createContext as Vt, useContext as Kt, useReducer as Xt, useMemo as Me, useState as ve, useCallback as D, useRef as te, useEffect as ie, forwardRef as Ke, createElement as Ge, useImperativeHandle as Jt } from "react";
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
  function o(r, s, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      n = {};
      for (var i in s)
        i !== "key" && (n[i] = s[i]);
    } else n = s;
    return s = n.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: n
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
        return c.$$typeof === G ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case P:
          return "Fragment";
        case R:
          return "Profiler";
        case I:
          return "StrictMode";
        case j:
          return "Suspense";
        case q:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case E:
            return "Portal";
          case O:
            return c.displayName || "Context";
          case w:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var A = c.render;
            return c = c.displayName, c || (c = A.displayName || A.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case h:
            return A = c.displayName || null, A !== null ? A : e(c.type) || "Memo";
          case k:
            A = c._payload, c = c._init;
            try {
              return e(c(A));
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
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var M = A.error, S = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return M.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(c);
      }
    }
    function r(c) {
      if (c === P) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === k)
        return "<...>";
      try {
        var A = e(c);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = Y.A;
      return c === null ? null : c.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(c) {
      if (re.call(c, "key")) {
        var A = Object.getOwnPropertyDescriptor(c, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function i(c, A) {
      function M() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: M,
        configurable: !0
      });
    }
    function g() {
      var c = e(this.type);
      return ne[c] || (ne[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, A, M, S, U, L) {
      var C = M.ref;
      return c = {
        $$typeof: b,
        type: c,
        key: A,
        props: M,
        _owner: S
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: g
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
        value: U
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function f(c, A, M, S, U, L) {
      var C = A.children;
      if (C !== void 0)
        if (S)
          if (Q(C)) {
            for (S = 0; S < C.length; S++)
              d(C[S]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(C);
      if (re.call(A, "key")) {
        C = e(c);
        var B = Object.keys(A).filter(function(F) {
          return F !== "key";
        });
        S = 0 < B.length ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}", y[C + S] || (B = 0 < B.length ? "{" + B.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          C,
          B,
          C
        ), y[C + S] = !0);
      }
      if (C = null, M !== void 0 && (o(M), C = "" + M), a(A) && (o(A.key), C = "" + A.key), "key" in A) {
        M = {};
        for (var Z in A)
          Z !== "key" && (M[Z] = A[Z]);
      } else M = A;
      return C && i(
        M,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        C,
        M,
        s(),
        U,
        L
      );
    }
    function d(c) {
      p(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === k && (c._payload.status === "fulfilled" ? p(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function p(c) {
      return typeof c == "object" && c !== null && c.$$typeof === b;
    }
    var T = Ne, b = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), O = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), Y = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, Q = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var ee, ne = {}, X = T.react_stack_bottom_frame.bind(
      T,
      n
    )(), W = H(r(n)), y = {};
    Ee.Fragment = P, Ee.jsx = function(c, A, M) {
      var S = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return f(
        c,
        A,
        M,
        !1,
        S ? Error("react-stack-top-frame") : X,
        S ? H(r(c)) : W
      );
    }, Ee.jsxs = function(c, A, M) {
      var S = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return f(
        c,
        A,
        M,
        !0,
        S ? Error("react-stack-top-frame") : X,
        S ? H(r(c)) : W
      );
    };
  })()), Ee;
}
var ct;
function rr() {
  return ct || (ct = 1, process.env.NODE_ENV === "production" ? _e.exports = er() : _e.exports = tr()), _e.exports;
}
var l = rr();
const Ue = 100, Fe = 50, qe = 200, lt = 5, Ze = (e) => e < qe, We = (e) => e > Fe, nr = 96, Oe = (e) => Math.round(e * nr), Se = {
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
}, fe = "NORMAL", Ot = (e = fe) => {
  const t = Se[e] || Se[fe];
  return {
    top: Oe(t.top),
    bottom: Oe(t.bottom),
    left: Oe(t.left),
    right: Oe(t.right)
  };
}, ar = (e = fe) => {
  const t = Ot(e);
  return t.top + t.bottom;
}, or = () => Object.keys(Se), sr = (e) => {
  const t = Se[e];
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
}, ua = (e) => Object.keys(ce).includes(e), da = () => Object.keys(ce), xe = kt, ge = "<p><br></p>", ir = "continuous", Te = (e, t = xe) => ({
  id: Xe(),
  index: e,
  size: t,
  content: ge,
  images: [],
  isBreakPoint: !1
}), we = (e) => typeof e != "string" || e.trim() === "" ? ge : e, Rt = (e, t = xe) => (e.length > 0 ? e : [Te(0, t)]).map((r, s) => ({
  id: r.id || Xe(),
  index: s,
  size: r.size || t,
  content: we(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), cr = (e = xe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Je(e).height
}], Ye = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || xe, r = Rt(e.pages || [Te(0, o)], o);
  return {
    id: Xe(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || ir,
    continuousContent: e.continuousContent || ge,
    pageBoundaries: e.pageBoundaries || cr(o),
    zoomLevel: e.zoomLevel || Ue,
    pageMargins: e.pageMargins || fe
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
      const { initialContent: r = ge, pageSize: s = xe } = t.payload || {}, n = { ...Te(0, s), content: we(r) };
      return Ye({
        title: e.title,
        pageSize: s,
        pages: [n]
      });
    }
    case $.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case $.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: s } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const n = [...e.pages];
      return n[r] = {
        ...n[r],
        content: we(s)
      }, {
        ...e,
        pages: n,
        updatedAt: o
      };
    }
    case $.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = Rt(r.pages || [], e.pageSize), n = Array.isArray(r.pageBreaks) ? r.pageBreaks : s.slice(0, -1).map((a, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: n,
        totalPages: s.length,
        updatedAt: o
      };
    }
    case $.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(r, 0, Te(r, e.pageSize));
      const n = s.map((i, g) => ({
        ...i,
        index: g,
        size: e.pageSize
      })), a = n.slice(0, -1).map((i, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
      }));
      return {
        ...e,
        pages: n,
        activePage: r,
        pageBreaks: a,
        totalPages: n.length,
        updatedAt: o
      };
    }
    case $.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(r, 1);
      const n = s.map((g, m) => ({
        ...g,
        index: m,
        size: e.pageSize
      }));
      let a = e.activePage;
      a >= n.length ? a = n.length - 1 : r <= a && a > 0 && (a -= 1);
      const i = n.slice(0, -1).map((g, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: n,
        activePage: a,
        pageBreaks: i,
        totalPages: n.length,
        updatedAt: o
      };
    }
    case $.SET_ACTIVE_PAGE: {
      const r = t.payload;
      if (r === e.activePage)
        return e;
      const s = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= s ? e : {
        ...e,
        activePage: r,
        updatedAt: o
      };
    }
    case $.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        Je(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const s = e.pages.map((a, i) => ({
        ...a,
        index: i,
        size: r
      })), n = s.slice(0, -1).map((a, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pageSize: r,
        pages: s,
        pageBreaks: n,
        updatedAt: o
      };
    }
    case $.RESET_DOCUMENT:
      return Ye();
    case $.UPDATE_CONTINUOUS_CONTENT: {
      const r = we(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case $.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(t.payload) ? t.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const s = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: s,
        updatedAt: o
      };
    }
    case $.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: s } = t.payload || {}, n = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let a = e.continuousContent;
      if (r === "end")
        a = a + n + "<p><br></p>";
      else if (typeof r == "number") {
        const i = a.substring(0, r), g = a.substring(r);
        a = i + n + g;
      } else if (typeof s == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = a;
        const g = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && g.length === 0)
          a = a + n + "<p><br></p>";
        else if (s < g.length) {
          const m = g[s], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", m.parentNode.insertBefore(f, m.nextSibling), f.parentNode.insertBefore(d, f.nextSibling), a = i.innerHTML;
        } else
          a = a + n + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: a,
        updatedAt: o
      };
    }
    case $.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const n = s.querySelectorAll('page-break, [data-page-break="true"]');
      return n[r] && n[r].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, g) => {
        i.setAttribute("data-page-number", String(g + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: o
      };
    }
    case $.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let s = e.continuousContent, n = e.pages;
      return r === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== ge).join(`
`) || ge : e.continuousContent && e.continuousContent !== ge && (n = [{ ...Te(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: s,
        pages: n,
        updatedAt: o
      };
    }
    case $.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < Fe || r > qe ? (console.warn(`Invalid zoom level: ${r}. Must be between ${Fe} and ${qe}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: o
      };
    }
    case $.ZOOM_IN: {
      if (!Ze(e.zoomLevel))
        return e;
      const r = e.zoomLevel + lt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: o
      };
    }
    case $.ZOOM_OUT: {
      if (!We(e.zoomLevel))
        return e;
      const r = e.zoomLevel - lt;
      return {
        ...e,
        zoomLevel: r,
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
}, wt = Vt(null), fa = ({ children: e, initialState: t = {} }) => {
  const [o, r] = Xt(lr, Ye(t)), s = Me(() => ({
    initializeDocument: (a) => r({ type: $.INITIALIZE_DOCUMENT, payload: a }),
    updateTitle: (a) => r({ type: $.UPDATE_TITLE, payload: a }),
    updatePageContent: (a) => r({ type: $.UPDATE_PAGE_CONTENT, payload: a }),
    updatePages: (a) => r({ type: $.UPDATE_PAGES, payload: a }),
    addPage: (a) => r({ type: $.ADD_PAGE, payload: a }),
    deletePage: (a) => r({ type: $.DELETE_PAGE, payload: a }),
    setActivePage: (a) => r({ type: $.SET_ACTIVE_PAGE, payload: a }),
    updatePageSize: (a) => r({ type: $.UPDATE_PAGE_SIZE, payload: a }),
    resetDocument: () => r({ type: $.RESET_DOCUMENT }),
    updateContinuousContent: (a) => r({ type: $.UPDATE_CONTINUOUS_CONTENT, payload: a }),
    updatePageBoundaries: (a) => r({ type: $.UPDATE_PAGE_BOUNDARIES, payload: a }),
    addPageBreak: (a) => r({ type: $.ADD_PAGE_BREAK, payload: a }),
    removePageBreak: (a) => r({ type: $.REMOVE_PAGE_BREAK, payload: a }),
    setEditorMode: (a) => r({ type: $.SET_EDITOR_MODE, payload: a }),
    insertPageAt: (a) => r({ type: $.INSERT_PAGE_AT, payload: a }),
    movePageTo: (a) => r({ type: $.MOVE_PAGE_TO, payload: a }),
    duplicatePage: (a) => r({ type: $.DUPLICATE_PAGE, payload: a }),
    setZoomLevel: (a) => r({ type: $.SET_ZOOM_LEVEL, payload: a }),
    zoomIn: () => r({ type: $.ZOOM_IN }),
    zoomOut: () => r({ type: $.ZOOM_OUT }),
    resetZoom: () => r({ type: $.RESET_ZOOM }),
    updatePageMargins: (a) => r({ type: $.UPDATE_PAGE_MARGINS, payload: a })
  }), []), n = Me(() => ({
    state: o,
    actions: s,
    dispatch: r
  }), [o, s]);
  return /* @__PURE__ */ l.jsx(wt.Provider, { value: n, children: e });
}, Mt = () => {
  const e = Kt(wt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, St = () => {
  const { state: e } = Mt();
  return e;
}, Ct = () => {
  const { actions: e } = Mt();
  return e;
};
var ke = { exports: {} }, Re = { exports: {} }, V = {};
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
  if (ut) return V;
  ut = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function w(u) {
    if (typeof u == "object" && u !== null) {
      var j = u.$$typeof;
      switch (j) {
        case t:
          switch (u = u.type, u) {
            case g:
            case m:
            case r:
            case n:
            case s:
            case d:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case i:
                case f:
                case b:
                case T:
                case a:
                  return u;
                default:
                  return j;
              }
          }
        case o:
          return j;
      }
    }
  }
  function O(u) {
    return w(u) === m;
  }
  return V.AsyncMode = g, V.ConcurrentMode = m, V.ContextConsumer = i, V.ContextProvider = a, V.Element = t, V.ForwardRef = f, V.Fragment = r, V.Lazy = b, V.Memo = T, V.Portal = o, V.Profiler = n, V.StrictMode = s, V.Suspense = d, V.isAsyncMode = function(u) {
    return O(u) || w(u) === g;
  }, V.isConcurrentMode = O, V.isContextConsumer = function(u) {
    return w(u) === i;
  }, V.isContextProvider = function(u) {
    return w(u) === a;
  }, V.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, V.isForwardRef = function(u) {
    return w(u) === f;
  }, V.isFragment = function(u) {
    return w(u) === r;
  }, V.isLazy = function(u) {
    return w(u) === b;
  }, V.isMemo = function(u) {
    return w(u) === T;
  }, V.isPortal = function(u) {
    return w(u) === o;
  }, V.isProfiler = function(u) {
    return w(u) === n;
  }, V.isStrictMode = function(u) {
    return w(u) === s;
  }, V.isSuspense = function(u) {
    return w(u) === d;
  }, V.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === m || u === n || u === s || u === d || u === p || typeof u == "object" && u !== null && (u.$$typeof === b || u.$$typeof === T || u.$$typeof === a || u.$$typeof === i || u.$$typeof === f || u.$$typeof === P || u.$$typeof === I || u.$$typeof === R || u.$$typeof === E);
  }, V.typeOf = w, V;
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
var dt;
function dr() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function w(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === m || _ === n || _ === s || _ === d || _ === p || typeof _ == "object" && _ !== null && (_.$$typeof === b || _.$$typeof === T || _.$$typeof === a || _.$$typeof === i || _.$$typeof === f || _.$$typeof === P || _.$$typeof === I || _.$$typeof === R || _.$$typeof === E);
    }
    function O(_) {
      if (typeof _ == "object" && _ !== null) {
        var se = _.$$typeof;
        switch (se) {
          case t:
            var he = _.type;
            switch (he) {
              case g:
              case m:
              case r:
              case n:
              case s:
              case d:
                return he;
              default:
                var Ae = he && he.$$typeof;
                switch (Ae) {
                  case i:
                  case f:
                  case b:
                  case T:
                  case a:
                    return Ae;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var u = g, j = m, q = i, h = a, k = t, N = f, G = r, Y = b, re = T, Q = o, H = n, ee = s, ne = d, X = !1;
    function W(_) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(_) || O(_) === g;
    }
    function y(_) {
      return O(_) === m;
    }
    function c(_) {
      return O(_) === i;
    }
    function A(_) {
      return O(_) === a;
    }
    function M(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function S(_) {
      return O(_) === f;
    }
    function U(_) {
      return O(_) === r;
    }
    function L(_) {
      return O(_) === b;
    }
    function C(_) {
      return O(_) === T;
    }
    function B(_) {
      return O(_) === o;
    }
    function Z(_) {
      return O(_) === n;
    }
    function F(_) {
      return O(_) === s;
    }
    function ae(_) {
      return O(_) === d;
    }
    K.AsyncMode = u, K.ConcurrentMode = j, K.ContextConsumer = q, K.ContextProvider = h, K.Element = k, K.ForwardRef = N, K.Fragment = G, K.Lazy = Y, K.Memo = re, K.Portal = Q, K.Profiler = H, K.StrictMode = ee, K.Suspense = ne, K.isAsyncMode = W, K.isConcurrentMode = y, K.isContextConsumer = c, K.isContextProvider = A, K.isElement = M, K.isForwardRef = S, K.isFragment = U, K.isLazy = L, K.isMemo = C, K.isPortal = B, K.isProfiler = Z, K.isStrictMode = F, K.isSuspense = ae, K.isValidElementType = w, K.typeOf = O;
  })()), K;
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
  function r(n) {
    if (n == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(n);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var n = new String("abc");
      if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
        return !1;
      for (var a = {}, i = 0; i < 10; i++)
        a["_" + String.fromCharCode(i)] = i;
      var g = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        m[f] = f;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = s() ? Object.assign : function(n, a) {
    for (var i, g = r(n), m, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var d in i)
        t.call(i, d) && (g[d] = i[d]);
      if (e) {
        m = e(i);
        for (var p = 0; p < m.length; p++)
          o.call(i, m[p]) && (g[m[p]] = i[m[p]]);
      }
    }
    return g;
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
function It() {
  return ht || (ht = 1, ze = Function.call.bind(Object.prototype.hasOwnProperty)), ze;
}
var Be, mt;
function pr() {
  if (mt) return Be;
  mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Qe(), o = {}, r = /* @__PURE__ */ It();
    e = function(n) {
      var a = "Warning: " + n;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function s(n, a, i, g, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in n)
        if (r(n, f)) {
          var d;
          try {
            if (typeof n[f] != "function") {
              var p = Error(
                (g || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = n[f](a, f, g, i, null, t);
          } catch (b) {
            d = b;
          }
          if (d && !(d instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in o)) {
            o[d.message] = !0;
            var T = m ? m() : "";
            e(
              "Failed " + i + " type: " + d.message + (T ?? "")
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
  var e = Nt(), t = fr(), o = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ It(), s = /* @__PURE__ */ pr(), n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = function(i) {
    var g = "Warning: " + i;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return He = function(i, g) {
    var m = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(y) {
      var c = y && (m && y[m] || y[f]);
      if (typeof c == "function")
        return c;
    }
    var p = "<<anonymous>>", T = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: R(),
      arrayOf: w,
      element: O(),
      elementType: u(),
      instanceOf: j,
      node: N(),
      objectOf: h,
      oneOf: q,
      oneOfType: k,
      shape: Y,
      exact: re
    };
    function b(y, c) {
      return y === c ? y !== 0 || 1 / y === 1 / c : y !== y && c !== c;
    }
    function E(y, c) {
      this.message = y, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function P(y) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, A = 0;
      function M(U, L, C, B, Z, F, ae) {
        if (B = B || p, F = F || C, ae !== o) {
          if (g) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = B + ":" + C;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (n(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, A++);
          }
        }
        return L[C] == null ? U ? L[C] === null ? new E("The " + Z + " `" + F + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new E("The " + Z + " `" + F + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : y(L, C, B, Z, F);
      }
      var S = M.bind(null, !1);
      return S.isRequired = M.bind(null, !0), S;
    }
    function I(y) {
      function c(A, M, S, U, L, C) {
        var B = A[M], Z = ee(B);
        if (Z !== y) {
          var F = ne(B);
          return new E(
            "Invalid " + U + " `" + L + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return P(c);
    }
    function R() {
      return P(a);
    }
    function w(y) {
      function c(A, M, S, U, L) {
        if (typeof y != "function")
          return new E("Property `" + L + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var C = A[M];
        if (!Array.isArray(C)) {
          var B = ee(C);
          return new E("Invalid " + U + " `" + L + "` of type " + ("`" + B + "` supplied to `" + S + "`, expected an array."));
        }
        for (var Z = 0; Z < C.length; Z++) {
          var F = y(C, Z, S, U, L + "[" + Z + "]", o);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return P(c);
    }
    function O() {
      function y(c, A, M, S, U) {
        var L = c[A];
        if (!i(L)) {
          var C = ee(L);
          return new E("Invalid " + S + " `" + U + "` of type " + ("`" + C + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return P(y);
    }
    function u() {
      function y(c, A, M, S, U) {
        var L = c[A];
        if (!e.isValidElementType(L)) {
          var C = ee(L);
          return new E("Invalid " + S + " `" + U + "` of type " + ("`" + C + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return P(y);
    }
    function j(y) {
      function c(A, M, S, U, L) {
        if (!(A[M] instanceof y)) {
          var C = y.name || p, B = W(A[M]);
          return new E("Invalid " + U + " `" + L + "` of type " + ("`" + B + "` supplied to `" + S + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return P(c);
    }
    function q(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? n(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : n("Invalid argument supplied to oneOf, expected an array.")), a;
      function c(A, M, S, U, L) {
        for (var C = A[M], B = 0; B < y.length; B++)
          if (b(C, y[B]))
            return null;
        var Z = JSON.stringify(y, function(ae, _) {
          var se = ne(_);
          return se === "symbol" ? String(_) : _;
        });
        return new E("Invalid " + U + " `" + L + "` of value `" + String(C) + "` " + ("supplied to `" + S + "`, expected one of " + Z + "."));
      }
      return P(c);
    }
    function h(y) {
      function c(A, M, S, U, L) {
        if (typeof y != "function")
          return new E("Property `" + L + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var C = A[M], B = ee(C);
        if (B !== "object")
          return new E("Invalid " + U + " `" + L + "` of type " + ("`" + B + "` supplied to `" + S + "`, expected an object."));
        for (var Z in C)
          if (r(C, Z)) {
            var F = y(C, Z, S, U, L + "." + Z, o);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return P(c);
    }
    function k(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && n("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var c = 0; c < y.length; c++) {
        var A = y[c];
        if (typeof A != "function")
          return n(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + X(A) + " at index " + c + "."
          ), a;
      }
      function M(S, U, L, C, B) {
        for (var Z = [], F = 0; F < y.length; F++) {
          var ae = y[F], _ = ae(S, U, L, C, B, o);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && Z.push(_.data.expectedType);
        }
        var se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new E("Invalid " + C + " `" + B + "` supplied to " + ("`" + L + "`" + se + "."));
      }
      return P(M);
    }
    function N() {
      function y(c, A, M, S, U) {
        return Q(c[A]) ? null : new E("Invalid " + S + " `" + U + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return P(y);
    }
    function G(y, c, A, M, S) {
      return new E(
        (y || "React class") + ": " + c + " type `" + A + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function Y(y) {
      function c(A, M, S, U, L) {
        var C = A[M], B = ee(C);
        if (B !== "object")
          return new E("Invalid " + U + " `" + L + "` of type `" + B + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var Z in y) {
          var F = y[Z];
          if (typeof F != "function")
            return G(S, U, L, Z, ne(F));
          var ae = F(C, Z, S, U, L + "." + Z, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return P(c);
    }
    function re(y) {
      function c(A, M, S, U, L) {
        var C = A[M], B = ee(C);
        if (B !== "object")
          return new E("Invalid " + U + " `" + L + "` of type `" + B + "` " + ("supplied to `" + S + "`, expected `object`."));
        var Z = t({}, A[M], y);
        for (var F in Z) {
          var ae = y[F];
          if (r(y, F) && typeof ae != "function")
            return G(S, U, L, F, ne(ae));
          if (!ae)
            return new E(
              "Invalid " + U + " `" + L + "` key `" + F + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(A[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var _ = ae(C, F, S, U, L + "." + F, o);
          if (_)
            return _;
        }
        return null;
      }
      return P(c);
    }
    function Q(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(Q);
          if (y === null || i(y))
            return !0;
          var c = d(y);
          if (c) {
            var A = c.call(y), M;
            if (c !== y.entries) {
              for (; !(M = A.next()).done; )
                if (!Q(M.value))
                  return !1;
            } else
              for (; !(M = A.next()).done; ) {
                var S = M.value;
                if (S && !Q(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function H(y, c) {
      return y === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function ee(y) {
      var c = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : H(c, y) ? "symbol" : c;
    }
    function ne(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var c = ee(y);
      if (c === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function X(y) {
      var c = ne(y);
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
    function W(y) {
      return !y.constructor || !y.constructor.name ? p : y.constructor.name;
    }
    return T.checkPropTypes = s, T.resetWarningCache = s.resetWarningCache, T.PropTypes = T, T;
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
    function r(a, i, g, m, f, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var n = {
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
      checkPropTypes: o,
      resetWarningCache: t
    };
    return n.PropTypes = n, n;
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
const v = /* @__PURE__ */ Qt(yr), jt = {
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
], et = "16px", Er = (e) => Math.round(e * 96 / 72), Tr = (e) => Math.round(e * 72 / 96 * 2) / 2, pa = (e) => {
  const t = Object.values(jt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Er(e)}px`;
}, ga = (e) => {
  const t = parseInt(e), o = Object.values(jt).find((r) => r.px === t);
  return o ? o.pt : Tr(t);
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
}, pe = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, x = {
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
  currentX: r,
  currentY: s,
  startWidth: n,
  startHeight: a,
  options: i = pe
}) {
  const g = r - t, m = s - o;
  let f = n, d = a;
  switch (e) {
    case x.TOP_LEFT:
      f = Math.max(i.minWidth, n - g), d = Math.max(i.minHeight, a - m);
      break;
    case x.TOP_RIGHT:
      f = Math.max(i.minWidth, n + g), d = Math.max(i.minHeight, a - m);
      break;
    case x.BOTTOM_LEFT:
      f = Math.max(i.minWidth, n - g), d = Math.max(i.minHeight, a + m);
      break;
    case x.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, n + g), d = Math.max(i.minHeight, a + m);
      break;
    case x.TOP:
      d = Math.max(i.minHeight, a - m);
      break;
    case x.BOTTOM:
      d = Math.max(i.minHeight, a + m);
      break;
    case x.LEFT:
      f = Math.max(i.minWidth, n - g);
      break;
    case x.RIGHT:
      f = Math.max(i.minWidth, n + g);
      break;
    default:
      return { width: f, height: d };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = n / a;
    [
      x.TOP_LEFT,
      x.TOP_RIGHT,
      x.BOTTOM_LEFT,
      x.BOTTOM_RIGHT
    ].includes(e) ? f / p > d ? d = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, d * p) : [x.TOP, x.BOTTOM].includes(e) ? f = d * p : [x.LEFT, x.RIGHT].includes(e) && (d = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (d = f / (n / a))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = d * (n / a))), f = Math.max(i.minWidth, f), d = Math.max(i.minHeight, d), {
    width: Math.round(f),
    height: Math.round(d)
  };
}
function de(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ya(e) {
  return de(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ba(e, { width: t, height: o }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Lt(e, t = pe) {
  if (!de(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  o.style.top = `${r.top}px`, o.style.left = `${r.left}px`, o.style.width = `${r.width}px`, o.style.height = `${r.height}px`, Object.values(x).forEach((i) => {
    const g = document.createElement("div");
    g.className = `resize-handler resize-handler-${i}`, g.dataset.handler = i, g.style.position = "absolute", g.style.width = "10px", g.style.height = "10px", g.style.backgroundColor = "#007bff", g.style.border = "2px solid white", g.style.borderRadius = "50%", g.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", g.style.cursor = vr(i), g.style.pointerEvents = "all", Dt(g, i, r.width, r.height), o.appendChild(g);
  });
  const n = document.createElement("div");
  return n.className = "aspect-ratio-toggle", t.preserveAspectRatio && t.aspectRatio ? (n.innerHTML = "🔓", n.title = "Toggle aspect ratio preservation (currently ON)") : (n.innerHTML = "🔗", n.title = "Toggle aspect ratio preservation (currently OFF)"), n.style.position = "absolute", n.style.top = "-15px", n.style.right = "-15px", n.style.width = "20px", n.style.height = "20px", n.style.backgroundColor = "#007bff", n.style.color = "white", n.style.borderRadius = "50%", n.style.display = "flex", n.style.alignItems = "center", n.style.justifyContent = "center", n.style.fontSize = "12px", n.style.cursor = "pointer", n.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", n.style.pointerEvents = "all", o.appendChild(n), o;
}
function vr(e) {
  switch (e) {
    case x.TOP_LEFT:
    case x.BOTTOM_RIGHT:
      return "nwse-resize";
    case x.TOP_RIGHT:
    case x.BOTTOM_LEFT:
      return "nesw-resize";
    case x.TOP:
    case x.BOTTOM:
      return "ns-resize";
    case x.LEFT:
    case x.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Dt(e, t, o, r) {
  switch (t) {
    case x.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case x.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case x.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case x.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case x.TOP:
      e.style.top = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case x.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case x.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case x.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ve(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const n = s.dataset.handler;
    Dt(s, n, o.width, o.height);
  });
}
function me(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const xr = {
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
}, Tt = {
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
  imageResizeOptions: pe,
  preserveAspectRatio: !0
}, Pr = () => {
  const [e, t] = ve(Tt), o = D((T) => {
    t((b) => ({
      ...b,
      alignLeft: T === "left",
      alignCenter: T === "center",
      alignRight: T === "right",
      alignJustify: T === "justify"
    }));
  }, []), r = D((T) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const E = b.getRangeAt(0);
      if (!E.toString())
        return t((I) => ({ ...I, fontSize: T })), !1;
      try {
        const I = document.createElement("span");
        I.style.fontSize = T;
        const R = E.extractContents();
        return I.appendChild(R), E.insertNode(I), E.selectNodeContents(I), b.removeAllRanges(), b.addRange(E), t((w) => ({ ...w, fontSize: T })), !0;
      } catch {
        const R = xr[T] || "2";
        return document.execCommand("fontSize", !1, R), t((w) => ({ ...w, fontSize: T })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font size change failed:", b), !1;
    }
  }, []), s = D((T, b = null) => {
    try {
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (T === "fontSize") {
        r(b);
        return;
      }
      switch (document.execCommand(T, !1, b) || console.warn(`[useFormatting] Command "${T}" failed`), T) {
        case "bold":
          t((P) => ({ ...P, bold: !P.bold }));
          break;
        case "italic":
          t((P) => ({ ...P, italic: !P.italic }));
          break;
        case "underline":
          t((P) => ({ ...P, underline: !P.underline }));
          break;
        case "strikethrough":
          t((P) => ({ ...P, strikethrough: !P.strikethrough }));
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
          t((P) => ({ ...P, fontFamily: b }));
        case "formatBlock":
          t((P) => ({ ...P, headingLevel: b }));
        default:
          break;
      }
    } catch (E) {
      console.warn(`[useFormatting] Error executing command "${T}":`, E);
    }
  }, [r, o]), n = te(null), a = te(null), i = te(null), g = te(null), m = te(pe);
  D((T) => {
    if (!de(T)) return;
    n.current && (me(n.current), n.current = null), T.classList.add("selected");
    const b = Lt(T);
    b && (n.current = b, a.current = T, document.body.appendChild(b), t((E) => ({
      ...E,
      imageSelected: !0,
      preserveAspectRatio: m.current.preserveAspectRatio
    })));
  }, []);
  const f = D(() => {
    a.current && (a.current.classList.remove("selected"), a.current = null), n.current && (me(n.current), n.current = null), i.current = null, g.current = null, t((T) => ({
      ...T,
      imageSelected: !1
    }));
  }, []), d = D(() => {
    const T = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: T,
      aspectRatio: T
    }, t((b) => ({
      ...b,
      preserveAspectRatio: T
    }));
  }, []);
  D((T, b, E) => {
    a.current && (i.current = {
      x: b,
      y: E,
      width: a.current.offsetWidth,
      height: a.current.offsetHeight
    }, g.current = T, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Ar(T));
  }, []), D((T, b) => {
    if (!a.current || !i.current || !g.current) return;
    const { x: E, y: P, width: I, height: R } = i.current, w = g.current, O = _r({
      handler: w,
      startX: E,
      startY: P,
      currentX: T,
      currentY: b,
      startWidth: I,
      startHeight: R,
      options: m.current
    });
    Or(a.current, O), n.current && Ve(n.current, a.current);
  }, []), D(() => {
    if (i.current = null, g.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", a.current) {
      const T = new Event("input", { bubbles: !0, cancelable: !0 });
      a.current.dispatchEvent(T);
    }
  }, []);
  const p = D(() => {
    f(), t(Tt);
  }, [f]);
  return ie(() => () => {
    n.current && me(n.current);
  }, []), {
    currentFormat: e,
    formatText: s,
    resetFormat: p,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: d
  };
};
function Ar(e) {
  switch (e) {
    case x.TOP_LEFT:
    case x.BOTTOM_RIGHT:
      return "nwse-resize";
    case x.TOP_RIGHT:
    case x.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case x.BOTTOM:
      return "ns-resize";
    case x.LEFT:
    case x.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function _r({
  handler: e,
  startX: t,
  startY: o,
  currentX: r,
  currentY: s,
  startWidth: n,
  startHeight: a,
  options: i = pe
}) {
  const g = r - t, m = s - o;
  let f = n, d = a;
  switch (e) {
    case x.TOP_LEFT:
      f = Math.max(i.minWidth, n - g), d = Math.max(i.minHeight, a - m);
      break;
    case x.TOP_RIGHT:
      f = Math.max(i.minWidth, n + g), d = Math.max(i.minHeight, a - m);
      break;
    case x.BOTTOM_LEFT:
      f = Math.max(i.minWidth, n - g), d = Math.max(i.minHeight, a + m);
      break;
    case x.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, n + g), d = Math.max(i.minHeight, a + m);
      break;
    case x.TOP:
      d = Math.max(i.minHeight, a - m);
      break;
    case x.BOTTOM:
      d = Math.max(i.minHeight, a + m);
      break;
    case x.LEFT:
      f = Math.max(i.minWidth, n - g);
      break;
    case x.RIGHT:
      f = Math.max(i.minWidth, n + g);
      break;
    default:
      return { width: f, height: d };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = n / a;
    [
      x.TOP_LEFT,
      x.TOP_RIGHT,
      x.BOTTOM_LEFT,
      x.BOTTOM_RIGHT
    ].includes(e) ? f / p > d ? d = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, d * p) : [x.TOP, x.BOTTOM].includes(e) ? f = d * p : [x.LEFT, x.RIGHT].includes(e) && (d = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (d = f / (n / a))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = d * (n / a))), f = Math.max(i.minWidth, f), d = Math.max(i.minHeight, d), {
    width: Math.round(f),
    height: Math.round(d)
  };
}
function Or(e, { width: t, height: o }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const ye = 'page-break, [data-page-break="true"]', zt = (e) => ce[e] || ce.A4, kr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", r = zt(o), s = e.querySelectorAll(ye), n = [];
  n.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const a = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((g, m) => {
    const d = g.getBoundingClientRect().top - a.top + i;
    n.push({
      id: `page-${m + 1}`,
      pageNumber: m + 2,
      top: d,
      height: r.height
    });
  }), n;
}, Bt = (e, t = 100, o = fe) => {
  const r = zt(e), s = ar(o), n = r.height - s, a = t / 100;
  return n / a;
}, Rr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(ye);
    if (o.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), s = r.top + r.height / 2;
    for (let n = o.length - 1; n >= 0; n--)
      if (o[n].getBoundingClientRect().top < s)
        return n + 1;
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
  let o = [], r = [];
  for (const s of t)
    s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true" ? r.length > 0 && (o.push(r), r = []) : r.push(s);
  return r.length > 0 && o.push(r), o.length === 0 && t.length > 0 && o.push(t.filter(
    (s) => !(s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true")
  )), o;
}, wr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Mr = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, Sr = (e, t, o, r, s, n, a) => {
  if (!e)
    return !1;
  try {
    const g = Bt(o, r, s) * (t - 1), m = Array.from(e.children);
    let f = 0, d = null;
    for (let p = 0; p < m.length; p++) {
      const T = m[p];
      if (T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true")
        continue;
      const b = wr(T);
      if (f + b > g) {
        d = T;
        break;
      }
      f += b;
    }
    if (d) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(p, d), n) {
        const T = e.innerHTML;
        n(T);
      }
      return a && setTimeout(() => {
        a();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const T = document.createElement("p");
      if (T.innerHTML = "<br>", e.appendChild(T), n) {
        const b = e.innerHTML;
        n(b);
      }
      return a && setTimeout(() => {
        a();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Cr = (e, t, o, r, s, n, a) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(ye));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const m = window.getSelection();
    let f = !1, d = [], p = null;
    if (t === 0) {
      const b = g[0];
      if (!b)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let E = e.firstChild;
      for (; E && E !== b; )
        d.push(E), E = E.nextSibling;
      p = b;
    } else {
      const b = g[t - 1];
      if (!b)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const E = g[t];
      let P = b.nextSibling;
      for (; P && P !== E; )
        d.push(P), P = P.nextSibling;
      p = b;
    }
    if (m && m.rangeCount > 0) {
      const E = m.getRangeAt(0).startContainer;
      for (const P of d)
        if (P.contains(E) || P === E) {
          f = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), d.forEach((b) => {
      b.parentNode && b.remove();
    }), e.querySelectorAll(ye).forEach((b, E) => {
      b.setAttribute("data-page-number", String(E + 2));
    }), f && n && setTimeout(() => {
      n(0);
    }, 50), r) {
      const b = e.innerHTML;
      r(b);
    }
    return s && setTimeout(() => {
      s(), a && setTimeout(() => {
        a();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, Nr = 200, Ir = 50, xt = 3, jr = 20, Ht = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Lr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, r = null;
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    if (!n || !n.getBoundingClientRect)
      continue;
    const a = Ht(n);
    if (a < 1)
      continue;
    if (o + a > t)
      return r === null ? s > 0 ? {
        overflowIndex: s,
        overflowElement: n,
        accumulatedHeight: o
      } : null : {
        overflowIndex: s,
        overflowElement: n,
        accumulatedHeight: o
      };
    o += a, r = n;
  }
  return null;
}, Dr = (e, t, o, r, s, n, a, i) => {
  if (!e || a.current)
    return !1;
  try {
    a.current = !0;
    const g = Bt(t, o, r);
    let m = vt(e), f = !1, d = 0;
    for (let p = 0; p < m.length && d < xt; p++) {
      const T = m[p], b = Lr(T, g);
      if (b && b.overflowIndex > 0) {
        let E = 0;
        for (let w = 0; w < T.length; w++) {
          const O = T[w];
          O && O.getBoundingClientRect && (E += Ht(O));
        }
        if (E - g < jr)
          continue;
        const I = p + 2;
        Mr(b.overflowElement, I) && (f = !0, d++, m = vt(e));
      }
    }
    if (f) {
      if (s) {
        const p = e.innerHTML;
        s(p);
      }
      setTimeout(() => {
        n && n(), d >= xt && i && setTimeout(() => {
          a.current || i();
        }, 100);
      }, Ir);
    }
    return f;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    a.current = !1;
  }
}, zr = (e, t, o = Nr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, Br = 400, $t = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, r = 0;
      if (t === 0)
        o = e.firstChild, r = 0;
      else {
        const n = e.querySelectorAll(ye)[t - 1];
        n && n.nextSibling && (o = n.nextSibling, r = 0);
      }
      if (o) {
        const s = document.createRange(), n = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? s.setStart(o, r) : s.setStart(o, 0), s.collapse(!0), n.removeAllRanges(), n.addRange(s);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, Hr = (e, t, o, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (o === 0)
      s = t;
    else {
      const a = t.querySelectorAll(ye)[o - 1];
      if (a)
        s = a;
      else {
        console.warn("[scrollToPage] Page break not found for page", o);
        return;
      }
    }
    if (s) {
      const n = s.getBoundingClientRect(), a = e.getBoundingClientRect(), i = e.scrollTop + (n.top - a.top);
      console.log("[scrollToPage] Scrolling to page", o, "scrollTop:", i), e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(o) : $t(t, o);
      }, Br);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, $r = (e, t, o = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, r));
}, Gr = 300, Ur = (e, t, o = 100, r = "NARROW") => {
  const s = Ct(), n = te(null), a = te(null), i = te(e), g = te(o), m = te(r), f = te(!1);
  ie(() => {
    i.current = e;
  }, [e]), ie(() => {
    g.current = o;
  }, [o]), ie(() => {
    m.current = r;
  }, [r]), ie(() => () => {
    n.current && clearTimeout(n.current), a.current && clearTimeout(a.current);
  }, []);
  const d = D((u = {}) => t?.current ? kr(t.current, u) : [], [t]), p = D((u = {}) => {
    const j = d(u);
    return s.updatePageBoundaries(j), j;
  }, [d, s]), T = D(async (u) => {
    if (!t?.current)
      return !1;
    const j = i.current || "A4", q = g.current || 100, h = m.current || "NARROW";
    return Sr(
      t.current,
      u,
      j,
      q,
      h,
      s.updateContinuousContent,
      p
    );
  }, [t, s, p]), b = D(() => {
    if (!t?.current)
      return;
    const u = i.current || "A4", j = g.current || 100, q = m.current || "NARROW";
    Dr(
      t.current,
      u,
      j,
      q,
      s.updateContinuousContent,
      p,
      f,
      b
    );
  }, [t, s, p]), E = D((u) => {
    zr(b, a, u);
  }, [b]), P = D((u = {}) => {
    const j = typeof u.delay == "number" ? u.delay : Gr;
    $r(p, n, u, j);
  }, [p]), I = D((u) => !u?.current || !t?.current ? 0 : Rr(u.current, t.current), [t]), R = D((u) => {
    t?.current && $t(t.current, u);
  }, [t]), w = D((u, j) => {
    if (!j?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Hr(j.current, t.current, u, R);
  }, [t, R]), O = D((u) => t?.current ? Cr(
    t.current,
    u,
    d,
    s.updateContinuousContent,
    p,
    R,
    b
  ) : !1, [t, d, s, p, R, b]);
  return {
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: P,
    updateBoundaries: p,
    getCurrentPage: I,
    scrollToPage: w,
    positionCursorAtPage: R,
    checkAndReflow: b,
    triggerAutoReflow: E,
    removePageAndContent: O,
    insertPageBreakAtBoundary: T,
    boundaryTimeoutRef: n,
    reflowTimeoutRef: a
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, r) => r ? r.toUpperCase() : o.toLowerCase()
), Pt = (e) => {
  const t = qr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Gt = (...e) => e.filter((t, o, r) => !!t && t.trim() !== "" && r.indexOf(t) === o).join(" ").trim(), Zr = (e) => {
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
var Wr = {
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
    absoluteStrokeWidth: r,
    className: s = "",
    children: n,
    iconNode: a,
    ...i
  }, g) => Ge(
    "svg",
    {
      ref: g,
      ...Wr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(o) * 24 / Number(t) : o,
      className: Gt("lucide", s),
      ...!n && !Zr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...a.map(([m, f]) => Ge(m, f)),
      ...Array.isArray(n) ? n : [n]
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
  const o = Ke(
    ({ className: r, ...s }, n) => Ge(Yr, {
      ref: n,
      iconNode: t,
      className: Gt(
        `lucide-${Fr(Pt(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return o.displayName = Pt(e), o;
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
], Kr = J("bold", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Jr = J("chevron-left", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], en = J("chevron-right", Qr);
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
], rn = J("file-check", tn);
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
], Ce = J("file-text", nn);
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
], on = J("hash", an);
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
], cn = J("heading-1", sn);
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
], un = J("heading-2", ln);
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
], fn = J("heading-3", dn);
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
], gn = J("image", pn);
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
], mn = J("italic", hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], bn = J("link", yn);
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
], Tn = J("list-ordered", En);
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
], Ut = J("list", vn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Pn = J("plus", xn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], _n = J("redo", An);
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
], kn = J("settings", On);
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
], wn = J("strikethrough", Rn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Sn = J("table", Mn);
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
], Nn = J("text-align-center", Cn);
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
], jn = J("text-align-end", In);
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
], Dn = J("text-align-justify", Ln);
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
], Bn = J("text-align-start", zn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], $n = J("underline", Hn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Un = J("undo", Gn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], qn = J("x", Fn);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Wn = J("zoom-in", Zn);
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
], Vn = J("zoom-out", Yn), Kn = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: r, pageCount: s }) => {
  const n = St(), { pages: a, activePage: i, continuousContent: g, editorMode: m } = n, [f, d] = ve(0), [p, T] = ve([]);
  ie(() => {
    if (r !== void 0 && s !== void 0) {
      if (d(r), g) {
        const I = document.createElement("div");
        I.innerHTML = g;
        const R = I.querySelectorAll("h1, h2, h3, h4, h5, h6"), w = Array.from(R).map((O, u) => {
          const j = parseInt(O.tagName.charAt(1)), q = O.textContent.trim();
          return q ? {
            id: `heading-${u}`,
            level: j,
            text: q,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        T(w);
      }
      return;
    }
    let E = 0;
    const P = [];
    a.forEach((I, R) => {
      if (I.content) {
        const w = document.createElement("div");
        w.innerHTML = I.content;
        const u = (w.textContent || w.innerText || "").trim().split(/\s+/).filter((q) => q.length > 0);
        E += u.length, w.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((q, h) => {
          const k = parseInt(q.tagName.charAt(1)), N = q.textContent.trim();
          N && P.push({
            id: `heading-${R}-${h}`,
            level: k,
            text: N,
            page: R + 1
          });
        });
      }
    }), d(E), T(P);
  }, [a, r, s, g]);
  const b = s !== void 0 ? s : a.length;
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
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: b })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(on, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: f.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: i + 1 })
            ] })
          ] }),
          p.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(Ut, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: p.map((E) => {
              const P = E.level === 1 ? cn : E.level === 2 ? un : fn;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${E.level}`,
                  style: { marginLeft: `${(E.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(P, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: E.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      E.page
                    ] })
                  ]
                },
                E.id
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
function Pe() {
  return new Promise((e, t) => {
    const o = indexedDB.open(Xn, Jn);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (r) => {
      const s = r.target.result;
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
    s.onload = async (n) => {
      const a = n.target.result, g = a.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = await Pe(), f = `editor-image-${Qn()}`, p = m.transaction([le], "readwrite").objectStore(le), T = {
          key: f,
          dataUrl: a,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, b = p.add(T);
        b.onsuccess = () => {
          m.close(), t(f);
        }, b.onerror = () => {
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
    const t = await Pe();
    return new Promise((o, r) => {
      const a = t.transaction([le], "readonly").objectStore(le).get(e);
      a.onsuccess = () => {
        t.close();
        const i = a.result;
        o(i ? i.dataUrl : null);
      }, a.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Ea(e) {
  try {
    const t = await Pe();
    return new Promise((o, r) => {
      const a = t.transaction([le], "readwrite").objectStore(le).delete(e);
      a.onsuccess = () => {
        t.close(), o();
      }, a.onerror = () => {
        t.close(), r(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function Ta() {
  try {
    const e = await Pe();
    return new Promise((t, o) => {
      const n = e.transaction([le], "readwrite").objectStore(le).clear();
      n.onsuccess = () => {
        e.close(), t();
      }, n.onerror = () => {
        e.close(), o(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function va() {
  try {
    const e = await Pe();
    return new Promise((t, o) => {
      const n = e.transaction([le], "readonly").objectStore(le).getAllKeys();
      n.onsuccess = () => {
        e.close(), t(n.result || []);
      }, n.onerror = () => {
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
const At = new ra("Editor"), tt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o
}) => {
  const r = async (s) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(s.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (s.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const a = await ea(s), i = await ta(a);
      i && (document.execCommand("insertImage", !1, i), At.info("Image inserted", { key: a }));
    } catch (n) {
      At.error("Error uploading image", n);
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
        children: /* @__PURE__ */ l.jsx(jn, { size: 16 })
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
        children: br.map(({ value: s, label: n, pt: a }) => /* @__PURE__ */ l.jsx("option", { value: s, children: n }, s))
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
        children: /* @__PURE__ */ l.jsx(Tn, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(Sn, { size: 16 })
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
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (s) => s.target.files[0] && r(s.target.files[0]),
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
  pageBoundaries: r = [],
  editorRef: s,
  onInput: n,
  onKeyDown: a,
  onClick: i,
  onScroll: g,
  zoomLevel: m = 100,
  pageMargins: f = fe
}) => {
  const d = Ot(f), p = m / 100, T = (R, w) => {
    if (!R) return !1;
    const O = R.getBoundingClientRect(), u = w - O.top;
    return u < d.top || u > O.height - d.bottom;
  }, b = (R) => R ? R.nodeType === Node.ELEMENT_NODE ? R.tagName === "PAGE-BREAK" || R.getAttribute("data-page-break") === "true" : R.parentElement && b(R.parentElement) : !1, E = (R) => {
    const w = window.getSelection();
    if (!w || w.rangeCount === 0) return;
    const O = w.getRangeAt(0), { startContainer: u, endContainer: j } = O;
    if ((b(u) || b(j)) && (R.key.length === 1 || R.key === "Enter" || R.key === " "))
      return R.preventDefault(), !1;
    if (R.key === "Tab")
      return R.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((R.key === "Backspace" || R.key === "Delete") && (b(u) || b(j)))
      return R.preventDefault(), !1;
    a && a(R);
  }, P = (R) => {
    if (!s.current) return;
    const w = R.target;
    if (b(w)) {
      R.preventDefault();
      return;
    }
    if (T(s.current, R.clientY)) {
      R.preventDefault();
      const O = s.current.getBoundingClientRect();
      if (R.clientY - O.top < d.top) {
        const j = s.current.firstElementChild;
        if (j && j.tagName !== "PAGE-BREAK") {
          const q = document.createRange(), h = window.getSelection();
          q.setStart(j, 0), q.collapse(!0), h.removeAllRanges(), h.addRange(q);
        }
      } else {
        const j = s.current.lastElementChild;
        if (j && j.tagName !== "PAGE-BREAK") {
          const q = document.createRange(), h = window.getSelection();
          q.selectNodeContents(j), q.collapse(!1), h.removeAllRanges(), h.addRange(q);
        }
      }
      return;
    }
    i && i(R);
  }, I = (R) => {
    const w = window.getSelection();
    if (!w || w.rangeCount === 0) return;
    const O = w.getRangeAt(0), { startContainer: u } = O;
    if (b(u))
      return R.preventDefault(), !1;
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
        transform: `scale(${p})`,
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
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`,
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
          onInput: n,
          onKeyDown: E,
          onBeforeInput: I,
          onClick: P,
          onScroll: g,
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
  pageMargins: fe
};
const nt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: r = fe,
  zoomLevel: s = 100,
  canZoomIn: n = !0,
  canZoomOut: a = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: m,
  onPageSizeChange: f,
  onPageMarginsChange: d,
  onZoomIn: p,
  onZoomOut: T,
  onZoomReset: b
} = {}) => {
  const E = Math.max(e?.length || 0, 1), P = (u) => {
    i && i(u);
  }, I = () => {
    g && g();
  }, R = (u) => {
    if (E <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(u);
  }, w = (u) => {
    f && f(u);
  }, O = (u) => {
    d && d(u);
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
              onChange: (u) => w(u.target.value),
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
              onChange: (u) => O(u.target.value),
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
          onClick: T,
          disabled: !a,
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
          onClick: p,
          disabled: !n,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(Wn, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: b,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, j) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${j === t ? "active" : ""}`,
          onClick: () => P(j),
          "aria-label": `Go to page ${j + 1}`,
          "aria-current": j === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Ce, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              j + 1
            ] })
          ]
        }
      ),
      E > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (q) => {
            q.stopPropagation(), R(j);
          },
          "aria-label": `Delete page ${j + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(qn, { size: 14 })
        }
      )
    ] }, u.id || `page-${j}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: I,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(Pn, { size: 16 }),
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
  pageMargins: fe,
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
  onImageDeselect: r,
  resizeOptions: s = pe
}) => {
  const n = te(null), a = te(null), i = te(null), g = te(null), m = te(s), f = te(!1);
  ie(() => {
    m.current = s;
  }, [s]);
  const d = D((h) => {
    if (!de(h)) return;
    n.current && (me(n.current), n.current = null), h.classList.add("selected");
    const k = Lt(h, m.current);
    if (k) {
      n.current = k, a.current = h, document.body.appendChild(k), k.querySelectorAll(".resize-handler").forEach((Y) => {
        Y.addEventListener("mousedown", E);
      });
      const G = k.querySelector(".aspect-ratio-toggle");
      G && G.addEventListener("click", T), o && o(h);
    }
  }, [o]), p = D(() => {
    a.current && (a.current.classList.remove("selected"), a.current = null), n.current && (me(n.current), n.current = null), i.current = null, g.current = null, f.current = !1, r && r();
  }, [r]), T = D((h) => {
    h.preventDefault(), h.stopPropagation();
    const k = !m.current.preserveAspectRatio;
    m.current = {
      ...m.current,
      preserveAspectRatio: k,
      aspectRatio: k
    };
    const N = h.currentTarget;
    k ? (N.innerHTML = "🔓", N.title = "Toggle aspect ratio preservation (currently ON)", N.classList.remove("locked")) : (N.innerHTML = "🔗", N.title = "Toggle aspect ratio preservation (currently OFF)", N.classList.add("locked"));
  }, []), b = D((h, k) => {
    h && (k ? (h.innerHTML = "🔓", h.title = "Toggle aspect ratio preservation (currently ON)", h.classList.remove("locked")) : (h.innerHTML = "🔗", h.title = "Toggle aspect ratio preservation (currently OFF)", h.classList.add("locked")));
  }, []), E = D((h) => {
    if (h.preventDefault(), h.stopPropagation(), !a.current) return;
    const k = h.currentTarget.dataset.handler, N = a.current.getBoundingClientRect(), G = window.pageYOffset || document.documentElement.scrollTop, Y = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: h.clientX,
      y: h.clientY,
      width: a.current.offsetWidth,
      height: a.current.offsetHeight,
      offsetX: h.clientX - N.left - Y,
      offsetY: h.clientY - N.top - G
    }, g.current = k, f.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = u(k), document.addEventListener("mousemove", P), document.addEventListener("mouseup", I);
  }, []), P = D((h) => {
    if (!f.current || !a.current || !i.current || !g.current) return;
    h.preventDefault(), h.stopPropagation();
    const { x: k, y: N, width: G, height: Y } = i.current, re = g.current, Q = h.clientX, H = h.clientY, ee = j({
      handler: re,
      startX: k,
      startY: N,
      currentX: Q,
      currentY: H,
      startWidth: G,
      startHeight: Y,
      options: m.current
    });
    q(a.current, ee), n.current && Ve(n.current, a.current);
  }, []), I = D((h) => {
    if (f.current && (h.preventDefault(), h.stopPropagation(), i.current = null, g.current = null, f.current = !1, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", I), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", a.current)) {
      const k = new Event("input", { bubbles: !0, cancelable: !0 });
      a.current.dispatchEvent(k), t && t(a.current, {
        width: a.current.offsetWidth,
        height: a.current.offsetHeight
      });
    }
  }, [t]), R = D((h) => {
    n.current && !n.current.contains(h.target) && p();
    const k = h.target;
    if (de(k)) {
      if (k === a.current)
        return;
      d(k);
    }
  }, [d, p]), w = D((h) => {
    if ((h.key === "Delete" || h.key === "Backspace") && a.current && !f.current) {
      h.preventDefault();
      const k = a.current;
      if (k.parentNode) {
        k.parentNode.removeChild(k), p();
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(N);
      }
    }
    if (h.key === "Escape" && a.current && p(), a.current && !f.current) {
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === ">") {
        h.preventDefault();
        const k = a.current.offsetWidth, N = Math.min(m.current.maxWidth || 800, k + 10);
        q(a.current, { width: N, height: a.current.offsetHeight });
        const G = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(G);
      }
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === "<") {
        h.preventDefault();
        const k = a.current.offsetWidth, N = Math.max(m.current.minWidth || 50, k - 10);
        q(a.current, { width: N, height: a.current.offsetHeight });
        const G = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(G);
      }
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === "+") {
        h.preventDefault();
        const k = a.current.offsetHeight, N = Math.min(m.current.maxHeight || 600, k + 10);
        q(a.current, { width: a.current.offsetWidth, height: N });
        const G = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(G);
      }
      if ((h.ctrlKey || h.metaKey) && h.shiftKey && h.key === "-") {
        h.preventDefault();
        const k = a.current.offsetHeight, N = Math.max(m.current.minHeight || 50, k - 10);
        q(a.current, { width: a.current.offsetWidth, height: N });
        const G = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(G);
      }
      if ((h.ctrlKey || h.metaKey) && h.key === "r") {
        h.preventDefault(), q(a.current, { width: 300, height: 200 });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((h.ctrlKey || h.metaKey) && h.altKey && h.key === "l") {
        h.preventDefault();
        const k = !m.current.preserveAspectRatio;
        if (m.current = {
          ...m.current,
          preserveAspectRatio: k,
          aspectRatio: k
        }, n.current) {
          const N = n.current.querySelector(".aspect-ratio-toggle");
          N && b(N, k);
        }
      }
    }
  }, [e, p]), O = D(() => {
    n.current && a.current && Ve(n.current, a.current);
  }, []);
  ie(() => {
    if (!e.current) return;
    const k = e.current.closest(".editor-viewport");
    return k && (k.addEventListener("scroll", O), window.addEventListener("scroll", O)), () => {
      k && k.removeEventListener("scroll", O), window.removeEventListener("scroll", O);
    };
  }, [e, O]), ie(() => {
    if (!e.current) return;
    const h = e.current;
    h.addEventListener("click", R), h.addEventListener("keydown", w);
    const k = h.closest(".editor-viewport");
    return k && k.addEventListener("scroll", O), window.addEventListener("resize", O), () => {
      h.removeEventListener("click", R), h.removeEventListener("keydown", w), k && k.removeEventListener("scroll", O), window.removeEventListener("resize", O), f.current && (document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", I), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), n.current && me(n.current);
    };
  }, [e, R, w, O, P, I]), ie(() => {
    if (!e.current) return;
    const h = new MutationObserver((k) => {
      k.forEach((N) => {
        N.type === "childList" && (N.removedNodes.length > 0 && N.removedNodes.forEach((G) => {
          G.nodeType === Node.ELEMENT_NODE && de(G) && G === a.current && p();
        }), N.addedNodes.length > 0 && N.addedNodes.forEach((G) => {
          if (G.nodeType === Node.ELEMENT_NODE)
            if (de(G))
              setTimeout(() => {
                d(G);
              }, 50);
            else {
              const Y = G.querySelectorAll ? G.querySelectorAll("img") : [];
              Y.length > 0 && setTimeout(() => {
                d(Y[0]);
              }, 50);
            }
        }));
      });
    });
    return h.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      h.disconnect();
    };
  }, [e, p, d]);
  function u(h) {
    switch (h) {
      case x.TOP_LEFT:
      case x.BOTTOM_RIGHT:
        return "nwse-resize";
      case x.TOP_RIGHT:
      case x.BOTTOM_LEFT:
        return "nesw-resize";
      case x.TOP:
      case x.BOTTOM:
        return "ns-resize";
      case x.LEFT:
      case x.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function j({
    handler: h,
    startX: k,
    startY: N,
    currentX: G,
    currentY: Y,
    startWidth: re,
    startHeight: Q,
    options: H = pe
  }) {
    const ee = G - k, ne = Y - N;
    let X = re, W = Q;
    switch (h) {
      case x.TOP_LEFT:
        X = Math.max(H.minWidth, re - ee), W = Math.max(H.minHeight, Q - ne);
        break;
      case x.TOP_RIGHT:
        X = Math.max(H.minWidth, re + ee), W = Math.max(H.minHeight, Q - ne);
        break;
      case x.BOTTOM_LEFT:
        X = Math.max(H.minWidth, re - ee), W = Math.max(H.minHeight, Q + ne);
        break;
      case x.BOTTOM_RIGHT:
        X = Math.max(H.minWidth, re + ee), W = Math.max(H.minHeight, Q + ne);
        break;
      case x.TOP:
        W = Math.max(H.minHeight, Q - ne);
        break;
      case x.BOTTOM:
        W = Math.max(H.minHeight, Q + ne);
        break;
      case x.LEFT:
        X = Math.max(H.minWidth, re - ee);
        break;
      case x.RIGHT:
        X = Math.max(H.minWidth, re + ee);
        break;
      default:
        return { width: X, height: W };
    }
    if (H.preserveAspectRatio && H.aspectRatio) {
      const y = re / Q;
      [
        x.TOP_LEFT,
        x.TOP_RIGHT,
        x.BOTTOM_LEFT,
        x.BOTTOM_RIGHT
      ].includes(h) ? X / y > W ? W = Math.max(H.minHeight, X / y) : X = Math.max(H.minWidth, W * y) : [x.TOP, x.BOTTOM].includes(h) ? X = W * y : [x.LEFT, x.RIGHT].includes(h) && (W = X / y);
    }
    return H.maxWidth && X > H.maxWidth && (X = H.maxWidth, H.preserveAspectRatio && H.aspectRatio && (W = X / (re / Q))), H.maxHeight && W > H.maxHeight && (W = H.maxHeight, H.preserveAspectRatio && H.aspectRatio && (X = W * (re / Q))), X = Math.max(H.minWidth, X), W = Math.max(H.minHeight, W), {
      width: Math.round(X),
      height: Math.round(W)
    };
  }
  function q(h, { width: k, height: N }) {
    de(h) && (h.tagName === "IMG" ? (h.style.width = `${k}px`, h.style.height = `${N}px`, h.width = k, h.height = N) : h.tagName === "DIV" && (h.style.width = `${k}px`, h.style.height = `${N}px`));
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
  resizeOptions: pe
};
const aa = 50, oa = 50, _t = 50, sa = 100, ia = 500, ot = Ke(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: r,
  onPageSizeChange: s,
  onPageMarginsChange: n,
  onChange: a,
  showSidebar: i = !0,
  showToolbar: g = !0,
  showPageManager: m = !0
}, f) => {
  const d = St(), p = Ct(), { pageSize: T, pageMargins: b, continuousContent: E, pageBoundaries: P, activePage: I, zoomLevel: R } = d, w = te(null), O = te(null), { currentFormat: u, formatText: j } = Pr(), [q, h] = ve(!1), {
    checkAndUpdateBoundaries: k,
    getCurrentPage: N,
    scrollToPage: G,
    updateBoundaries: Y,
    triggerAutoReflow: re,
    removePageAndContent: Q,
    insertPageBreakAtBoundary: H
  } = Ur(T, O, R, b), ee = Me(() => Je(T), [T]), [ne, X] = ve(!1), W = te(null), y = te(!1), c = te(!1), A = te(!1), M = te(E);
  ie(() => {
    if (O.current) {
      if (!A.current) {
        O.current.innerHTML = E, A.current = !0, M.current = E;
        const z = setTimeout(() => {
          Y();
        }, aa);
        return () => clearTimeout(z);
      }
      if (M.current !== E) {
        if (O.current.innerHTML !== E) {
          O.current.innerHTML = E;
          const oe = setTimeout(() => {
            if (Y(), y.current) {
              y.current = !1;
              const ue = Math.max(0, P.length - 1);
              p.setActivePage(ue), setTimeout(() => {
                G(ue, w);
              }, _t);
            }
          }, oa);
          return M.current = E, () => clearTimeout(oe);
        }
        M.current = E;
      }
    }
  }, [E, Y, P.length, p, G]), ie(() => {
    a && A.current && a(E);
  }, [E, a]), Jt(f, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => E,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => E.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (z) => {
      p.updateContinuousContent(z), O.current && (O.current.innerHTML = z, setTimeout(() => {
        Y();
      }, 50));
    }
  }), [E, p, Y]), ie(() => {
    const z = setTimeout(() => {
      O.current && O.current.focus();
    }, 200);
    return () => clearTimeout(z);
  }, []);
  const S = D((z) => {
    const oe = z.currentTarget.innerHTML;
    p.updateContinuousContent(oe), k(), re(200);
    const ue = N(w);
    ue !== I && p.setActivePage(ue);
  }, [k, p, N, I, re, w]), U = D((z) => {
    p.updatePageSize(z), Y({ pageSize: z }), s && s(z);
  }, [p, Y, s]), L = D((z) => {
    p.updatePageMargins(z), Y({ pageMargins: z }), n && n(z);
  }, [p, Y, n]), C = D((z) => {
    z < 0 || z >= P.length || (c.current = !0, p.setActivePage(z), G(z, w), setTimeout(() => {
      c.current = !1;
    }, ia), t && t(z));
  }, [p, G, t, P.length]), B = D(() => {
    const z = P.length + 1;
    H(z) && (y.current = !0, setTimeout(() => {
      if (y.current) {
        y.current = !1;
        const ue = Math.max(0, P.length - 1);
        p.setActivePage(ue), setTimeout(() => {
          G(ue, w);
        }, _t);
      }
    }, 100)), o && o();
  }, [P.length, H, p, G, o]), Z = D(() => {
    const z = window.getSelection();
    if (z && z.rangeCount > 0) {
      if (!O?.current) return;
      const Ie = `<page-break data-page-break="true" contenteditable="false" data-page-number="${O.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Ie), setTimeout(() => {
        Y();
        const je = N(w);
        p.setActivePage(je);
      }, 150);
    }
  }, [Y, N, p, w]), F = D((z) => {
    if (P.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Q(z) && (p.setActivePage(0), r && r(z));
  }, [P.length, Q, p, r]), ae = D(() => {
    p.zoomIn();
  }, [p]), _ = D(() => {
    p.zoomOut();
  }, [p]), se = D(() => {
    p.resetZoom();
  }, [p]);
  ie(() => {
    const z = (oe) => {
      if (oe.ctrlKey || oe.metaKey) {
        ["+", "=", "-", "_", "0"].includes(oe.key) && oe.preventDefault();
        const ue = document.activeElement === O.current, Ie = document.activeElement === w.current, je = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ue || Ie || !je)
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
    return window.addEventListener("keydown", z), () => {
      window.removeEventListener("keydown", z);
    };
  }, [ae, _, se]);
  const he = D(() => {
    !w.current || !O.current || c.current || (W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      if (c.current) {
        W.current = null;
        return;
      }
      const z = N(w);
      z !== I && z >= 0 && p.setActivePage(z), W.current = null;
    }, sa));
  }, [N, I, p]), Ae = Me(() => {
    if (!E) return 0;
    const oe = E.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return oe ? oe.length : 0;
  }, [E]), qt = P.length || 1, Zt = D((z) => {
    h(!0);
  }, []), Wt = D(() => {
    h(!1);
  }, []), Yt = D((z, oe) => {
  }, []);
  return ie(() => () => {
    W.current && clearTimeout(W.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ l.jsx(
      tt,
      {
        currentFormat: {
          ...u,
          imageSelected: q
        },
        onFormatText: j,
        onAddPageBreak: Z
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ l.jsx(
        Kn,
        {
          editorView: null,
          isCollapsed: ne,
          onToggle: () => X((z) => !z),
          wordCount: Ae,
          pageCount: qt
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: w,
          onScroll: he,
          children: /* @__PURE__ */ l.jsx(
            rt,
            {
              content: E,
              dimensions: ee,
              pageSize: T,
              pageMargins: b,
              pageBoundaries: P,
              editorRef: O,
              onInput: S,
              onClick: () => O.current?.focus(),
              zoomLevel: R
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        at,
        {
          editorRef: O,
          onImageSelect: Zt,
          onImageDeselect: Wt,
          onImageResize: Yt
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? Ne.cloneElement(e, {
        onNavigate: C,
        onAddPage: B,
        onDeletePage: F,
        onPageSizeChange: U,
        onPageMarginsChange: L,
        zoomLevel: R,
        canZoomIn: Ze(R),
        canZoomOut: We(R),
        onZoomIn: ae,
        onZoomOut: _,
        onZoomReset: se
      }) : /* @__PURE__ */ l.jsx(
        na,
        {
          pageBoundaries: P,
          activePage: I,
          pageSize: T,
          pageMargins: b,
          zoomLevel: R,
          canZoomIn: Ze(R),
          canZoomOut: We(R),
          onNavigate: C,
          onAddPage: B,
          onDeletePage: F,
          onPageSizeChange: U,
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
const xa = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  br as COMMON_FONT_SIZES,
  et as DEFAULT_FONT_SIZE,
  pe as DEFAULT_IMAGE_RESIZE_OPTIONS,
  kt as DEFAULT_PAGE_SIZE,
  fa as DocumentProvider,
  tt as EditorToolbar,
  Ft as ErrorBoundary,
  jt as FONT_SIZE_MAP,
  ot as HtmlEditor,
  at as ImageResizeHandlers,
  xa as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  na as PageManager,
  rt as PageView,
  x as RESIZE_HANDLERS,
  Kn as Sidebar,
  ba as applyImageDimensions,
  ma as calculateResizeDimensions,
  Ta as clearImages,
  Lt as createResizeOverlay,
  Ea as deleteImage,
  va as getAllImageKeys,
  da as getAvailablePageSizes,
  ta as getImage,
  ya as getImageDimensions,
  Je as getPageDimensions,
  pa as getPixelValue,
  ga as getPointValue,
  de as isResizableImage,
  ha as isValidFontSize,
  ua as isValidPageSize,
  ra as logger,
  Tr as pixelsToPoints,
  Er as pointsToPixels,
  me as removeResizeOverlay,
  ea as saveImage,
  Ve as updateResizeOverlay,
  Ur as useContinuousReflow,
  Mt as useDocument,
  Ct as useDocumentActions,
  St as useDocumentState,
  Pr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
