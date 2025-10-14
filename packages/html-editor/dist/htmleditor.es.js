import Ge, { createContext as An, useContext as Pn, useReducer as _n, useMemo as He, useState as ue, useCallback as $, useRef as re, useEffect as ie, forwardRef as st, createElement as Je, useLayoutEffect as wn, useImperativeHandle as Rn } from "react";
import { v4 as ct } from "uuid";
import { createPortal as Sn } from "react-dom";
function kn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Me = { exports: {} }, xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function On() {
  if (At) return xe;
  At = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(n, i, a) {
    var r = null;
    if (a !== void 0 && (r = "" + a), i.key !== void 0 && (r = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: r,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return xe.Fragment = t, xe.jsx = o, xe.jsxs = o, xe;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Cn() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === M ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case C:
          return "Fragment";
        case A:
          return "Profiler";
        case E:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case v:
            return "Portal";
          case B:
            return c.displayName || "Context";
          case P:
            return (c._context.displayName || "Context") + ".Consumer";
          case p:
            var w = c.render;
            return c = c.displayName, c || (c = w.displayName || w.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case b:
            return w = c.displayName || null, w !== null ? w : e(c.type) || "Memo";
          case O:
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
        var N = w.error, I = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return N.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(c);
      }
    }
    function n(c) {
      if (c === C) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === O)
        return "<...>";
      try {
        var w = e(c);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = D.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(c) {
      if (q.call(c, "key")) {
        var w = Object.getOwnPropertyDescriptor(c, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, w) {
      function N() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: N,
        configurable: !0
      });
    }
    function m() {
      var c = e(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function g(c, w, N, I, Z, W) {
      var L = N.ref;
      return c = {
        $$typeof: _,
        type: c,
        key: w,
        props: N,
        _owner: I
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: m
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
        value: Z
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function h(c, w, N, I, Z, W) {
      var L = w.children;
      if (L !== void 0)
        if (I)
          if (z(L)) {
            for (I = 0; I < L.length; I++)
              y(L[I]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(L);
      if (q.call(w, "key")) {
        L = e(c);
        var F = Object.keys(w).filter(function(K) {
          return K !== "key";
        });
        I = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", T[L + I] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          L,
          F,
          L
        ), T[L + I] = !0);
      }
      if (L = null, N !== void 0 && (o(N), L = "" + N), r(w) && (o(w.key), L = "" + w.key), "key" in w) {
        N = {};
        for (var V in w)
          V !== "key" && (N[V] = w[V]);
      } else N = w;
      return L && s(
        N,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), g(
        c,
        L,
        N,
        i(),
        Z,
        W
      );
    }
    function y(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === O && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === _;
    }
    var k = Ge, _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), B = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), D = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, z = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var ne, G = {}, Y = k.react_stack_bottom_frame.bind(
      k,
      a
    )(), Q = oe(n(a)), T = {};
    Ae.Fragment = C, Ae.jsx = function(c, w, N) {
      var I = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        c,
        w,
        N,
        !1,
        I ? Error("react-stack-top-frame") : Y,
        I ? oe(n(c)) : Q
      );
    }, Ae.jsxs = function(c, w, N) {
      var I = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        c,
        w,
        N,
        !0,
        I ? Error("react-stack-top-frame") : Y,
        I ? oe(n(c)) : Q
      );
    };
  })()), Ae;
}
var _t;
function Mn() {
  return _t || (_t = 1, process.env.NODE_ENV === "production" ? Me.exports = On() : Me.exports = Cn()), Me.exports;
}
var l = Mn();
const Qe = 100, et = 50, tt = 200, wt = 5, nt = (e) => e < tt, rt = (e) => e > et, Nn = 96, Ne = (e) => Math.round(e * Nn), Be = {
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
}, pe = "NORMAL", Ft = (e = pe) => {
  const t = Be[e] || Be[pe];
  return {
    top: Ne(t.top),
    bottom: Ne(t.bottom),
    left: Ne(t.left),
    right: Ne(t.right)
  };
}, In = (e = pe) => {
  const t = Ft(e);
  return t.top + t.bottom;
}, Ln = () => Object.keys(Be), jn = (e) => {
  const t = Be[e];
  return t ? t.label : "Unknown";
}, le = {
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
}, qt = "A4", lt = (e) => {
  const t = le[e] || le[qt];
  return {
    width: t.width,
    height: t.height
  };
}, fa = (e) => Object.keys(le).includes(e), pa = () => Object.keys(le), we = qt, Ee = "<p><br></p>", Dn = "continuous", Pe = (e, t = we) => ({
  id: ct(),
  index: e,
  size: t,
  content: Ee,
  images: [],
  isBreakPoint: !1
}), je = (e) => typeof e != "string" || e.trim() === "" ? Ee : e, Wt = (e, t = we) => (e.length > 0 ? e : [Pe(0, t)]).map((n, i) => ({
  id: n.id || ct(),
  index: i,
  size: n.size || t,
  content: je(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Hn = (e = we) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: lt(e).height
}], ot = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || we, n = Wt(e.pages || [Pe(0, o)], o);
  return {
    id: ct(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Dn,
    continuousContent: e.continuousContent || Ee,
    pageBoundaries: e.pageBoundaries || Hn(o),
    zoomLevel: e.zoomLevel || Qe,
    pageMargins: e.pageMargins || pe,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
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
  UPDATE_PAGE_MARGINS: "UPDATE_PAGE_MARGINS",
  // Undo/Redo actions
  RECORD_OPERATION: "RECORD_OPERATION",
  UNDO: "UNDO",
  REDO: "REDO",
  CLEAR_UNDO_REDO: "CLEAR_UNDO_REDO"
}, at = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case U.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Ee, pageSize: i = we } = t.payload || {}, a = { ...Pe(0, i), content: je(n) };
      return ot({
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
      const { pageIndex: n, content: i } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: je(i)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Wt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((r, s) => ({
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
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(n, 0, Pe(n, e.pageSize));
      const a = i.map((s, m) => ({
        ...s,
        index: m,
        size: e.pageSize
      })), r = a.slice(0, -1).map((s, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
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
    case U.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const a = i.map((m, g) => ({
        ...m,
        index: g,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = a.slice(0, -1).map((m, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: r,
        pageBreaks: s,
        totalPages: a.length,
        updatedAt: o
      };
    }
    case U.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= i ? e : {
        ...e,
        activePage: n,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        lt(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const i = e.pages.map((r, s) => ({
        ...r,
        index: s,
        size: n
      })), a = i.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: i,
        pageBreaks: a,
        updatedAt: o
      };
    }
    case U.RESET_DOCUMENT:
      return ot();
    case U.UPDATE_CONTINUOUS_CONTENT: {
      const n = je(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case U.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const i = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: i,
        updatedAt: o
      };
    }
    case U.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: i } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + a + "<p><br></p>";
      else if (typeof n == "number") {
        const s = r.substring(0, n), m = r.substring(n);
        r = s + a + m;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = r;
        const m = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && m.length === 0)
          r = r + a + "<p><br></p>";
        else if (i < m.length) {
          const g = m[i], h = document.createElement("page-break");
          h.setAttribute("data-page-break", "true"), h.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const y = document.createElement("p");
          y.innerHTML = "<br>", g.parentNode.insertBefore(h, g.nextSibling), h.parentNode.insertBefore(y, h.nextSibling), r = s.innerHTML;
        } else
          r = r + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case U.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const a = i.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, m) => {
        s.setAttribute("data-page-number", String(m + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: o
      };
    }
    case U.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let i = e.continuousContent, a = e.pages;
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== Ee).join(`
`) || Ee : e.continuousContent && e.continuousContent !== Ee && (a = [{ ...Pe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: a,
        updatedAt: o
      };
    }
    case U.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < et || n > tt ? (console.warn(`Invalid zoom level: ${n}. Must be between ${et} and ${tt}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.ZOOM_IN: {
      if (!nt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + wt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.ZOOM_OUT: {
      if (!rt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - wt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.RESET_ZOOM:
      return e.zoomLevel === Qe ? e : {
        ...e,
        zoomLevel: Qe,
        updatedAt: o
      };
    case U.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: o
      };
    }
    case U.RECORD_OPERATION: {
      const { operation: n, inverseOperation: i } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: i }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: o
      };
    }
    case U.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = at(e, n.inverseOperation)), {
        ...a,
        undoStack: i,
        redoStack: [...e.redoStack, n],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: o
      };
    }
    case U.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = at(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: o
      };
    }
    case U.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: o
      };
    // Image operation actions (for undo/redo)
    case "IMAGE_ALIGN": {
      const { element: n, state: i } = t.payload;
      return n && i && (n.style.float = i.float, n.style.margin = i.margin, n.style.display = i.display, i.width && (n.style.width = i.width), i.height && (n.style.height = i.height)), e;
    }
    case "IMAGE_DELETE": {
      const { element: n } = t.payload;
      return n && n.parentNode && n.parentNode.removeChild(n), e;
    }
    case "IMAGE_REINSERT": {
      const { state: n } = t.payload;
      return n && n.parent && n.element && (n.nextSibling ? n.parent.insertBefore(n.element, n.nextSibling) : n.parent.appendChild(n.element)), e;
    }
    case "IMAGE_ASPECT_RATIO":
      return e;
    case "IMAGE_RESIZE": {
      const { element: n, state: i } = t.payload;
      return n && i && (i.width && (n.style.width = i.width), i.height && (n.style.height = i.height)), e;
    }
    default:
      return e;
  }
}, Zt = An(null), ga = ({ children: e, initialState: t = {} }) => {
  const [o, n] = _n(at, ot(t)), i = He(() => ({
    initializeDocument: (r) => n({ type: U.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: U.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: U.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: U.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: U.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: U.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: U.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: U.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: U.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: U.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: U.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: U.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: U.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: U.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: U.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: U.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: U.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: U.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: U.ZOOM_IN }),
    zoomOut: () => n({ type: U.ZOOM_OUT }),
    resetZoom: () => n({ type: U.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: U.UPDATE_PAGE_MARGINS, payload: r }),
    // Undo/Redo actions
    recordOperation: (r, s) => n({
      type: U.RECORD_OPERATION,
      payload: { operation: r, inverseOperation: s }
    }),
    undo: () => n({ type: U.UNDO }),
    redo: () => n({ type: U.REDO }),
    clearUndoRedo: () => n({ type: U.CLEAR_UNDO_REDO })
  }), []), a = He(() => ({
    state: o,
    actions: i,
    dispatch: n
  }), [o, i]);
  return /* @__PURE__ */ l.jsx(Zt.Provider, { value: a, children: e });
}, Yt = () => {
  const e = Pn(Zt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Vt = () => {
  const { state: e } = Yt();
  return e;
}, Re = () => {
  const { actions: e } = Yt();
  return e;
};
var Ie = { exports: {} }, Le = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function Bn() {
  if (Rt) return ee;
  Rt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function P(p) {
    if (typeof p == "object" && p !== null) {
      var d = p.$$typeof;
      switch (d) {
        case t:
          switch (p = p.type, p) {
            case m:
            case g:
            case n:
            case a:
            case i:
            case y:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case h:
                case _:
                case k:
                case r:
                  return p;
                default:
                  return d;
              }
          }
        case o:
          return d;
      }
    }
  }
  function B(p) {
    return P(p) === g;
  }
  return ee.AsyncMode = m, ee.ConcurrentMode = g, ee.ContextConsumer = s, ee.ContextProvider = r, ee.Element = t, ee.ForwardRef = h, ee.Fragment = n, ee.Lazy = _, ee.Memo = k, ee.Portal = o, ee.Profiler = a, ee.StrictMode = i, ee.Suspense = y, ee.isAsyncMode = function(p) {
    return B(p) || P(p) === m;
  }, ee.isConcurrentMode = B, ee.isContextConsumer = function(p) {
    return P(p) === s;
  }, ee.isContextProvider = function(p) {
    return P(p) === r;
  }, ee.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ee.isForwardRef = function(p) {
    return P(p) === h;
  }, ee.isFragment = function(p) {
    return P(p) === n;
  }, ee.isLazy = function(p) {
    return P(p) === _;
  }, ee.isMemo = function(p) {
    return P(p) === k;
  }, ee.isPortal = function(p) {
    return P(p) === o;
  }, ee.isProfiler = function(p) {
    return P(p) === a;
  }, ee.isStrictMode = function(p) {
    return P(p) === i;
  }, ee.isSuspense = function(p) {
    return P(p) === y;
  }, ee.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === g || p === a || p === i || p === y || p === f || typeof p == "object" && p !== null && (p.$$typeof === _ || p.$$typeof === k || p.$$typeof === r || p.$$typeof === s || p.$$typeof === h || p.$$typeof === C || p.$$typeof === E || p.$$typeof === A || p.$$typeof === v);
  }, ee.typeOf = P, ee;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function zn() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function P(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === g || S === a || S === i || S === y || S === f || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === k || S.$$typeof === r || S.$$typeof === s || S.$$typeof === h || S.$$typeof === C || S.$$typeof === E || S.$$typeof === A || S.$$typeof === v);
    }
    function B(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case t:
            var me = S.type;
            switch (me) {
              case m:
              case g:
              case n:
              case a:
              case i:
              case y:
                return me;
              default:
                var ve = me && me.$$typeof;
                switch (ve) {
                  case s:
                  case h:
                  case _:
                  case k:
                  case r:
                    return ve;
                  default:
                    return ce;
                }
            }
          case o:
            return ce;
        }
      }
    }
    var p = m, d = g, u = s, b = r, O = t, H = h, M = n, D = _, q = k, z = o, oe = a, ne = i, G = y, Y = !1;
    function Q(S) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(S) || B(S) === m;
    }
    function T(S) {
      return B(S) === g;
    }
    function c(S) {
      return B(S) === s;
    }
    function w(S) {
      return B(S) === r;
    }
    function N(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function I(S) {
      return B(S) === h;
    }
    function Z(S) {
      return B(S) === n;
    }
    function W(S) {
      return B(S) === _;
    }
    function L(S) {
      return B(S) === k;
    }
    function F(S) {
      return B(S) === o;
    }
    function V(S) {
      return B(S) === a;
    }
    function K(S) {
      return B(S) === i;
    }
    function ae(S) {
      return B(S) === y;
    }
    te.AsyncMode = p, te.ConcurrentMode = d, te.ContextConsumer = u, te.ContextProvider = b, te.Element = O, te.ForwardRef = H, te.Fragment = M, te.Lazy = D, te.Memo = q, te.Portal = z, te.Profiler = oe, te.StrictMode = ne, te.Suspense = G, te.isAsyncMode = Q, te.isConcurrentMode = T, te.isContextConsumer = c, te.isContextProvider = w, te.isElement = N, te.isForwardRef = I, te.isFragment = Z, te.isLazy = W, te.isMemo = L, te.isPortal = F, te.isProfiler = V, te.isStrictMode = K, te.isSuspense = ae, te.isValidElementType = P, te.typeOf = B;
  })()), te;
}
var kt;
function Kt() {
  return kt || (kt = 1, process.env.NODE_ENV === "production" ? Le.exports = Bn() : Le.exports = zn()), Le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qe, Ot;
function $n() {
  if (Ot) return qe;
  Ot = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function n(a) {
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
      for (var r = {}, s = 0; s < 10; s++)
        r["_" + String.fromCharCode(s)] = s;
      var m = Object.getOwnPropertyNames(r).map(function(h) {
        return r[h];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        g[h] = h;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qe = i() ? Object.assign : function(a, r) {
    for (var s, m = n(a), g, h = 1; h < arguments.length; h++) {
      s = Object(arguments[h]);
      for (var y in s)
        t.call(s, y) && (m[y] = s[y]);
      if (e) {
        g = e(s);
        for (var f = 0; f < g.length; f++)
          o.call(s, g[f]) && (m[g[f]] = s[g[f]]);
      }
    }
    return m;
  }, qe;
}
var We, Ct;
function ut() {
  if (Ct) return We;
  Ct = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return We = e, We;
}
var Ze, Mt;
function Xt() {
  return Mt || (Mt = 1, Ze = Function.call.bind(Object.prototype.hasOwnProperty)), Ze;
}
var Ye, Nt;
function Un() {
  if (Nt) return Ye;
  Nt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ut(), o = {}, n = /* @__PURE__ */ Xt();
    e = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function i(a, r, s, m, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (n(a, h)) {
          var y;
          try {
            if (typeof a[h] != "function") {
              var f = Error(
                (m || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            y = a[h](r, h, m, s, null, t);
          } catch (_) {
            y = _;
          }
          if (y && !(y instanceof Error) && e(
            (m || "React class") + ": type specification of " + s + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in o)) {
            o[y.message] = !0;
            var k = g ? g() : "";
            e(
              "Failed " + s + " type: " + y.message + (k ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Ye = i, Ye;
}
var Ve, It;
function Gn() {
  if (It) return Ve;
  It = 1;
  var e = Kt(), t = $n(), o = /* @__PURE__ */ ut(), n = /* @__PURE__ */ Xt(), i = /* @__PURE__ */ Un(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var m = "Warning: " + s;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return Ve = function(s, m) {
    var g = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(T) {
      var c = T && (g && T[g] || T[h]);
      if (typeof c == "function")
        return c;
    }
    var f = "<<anonymous>>", k = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: A(),
      arrayOf: P,
      element: B(),
      elementType: p(),
      instanceOf: d,
      node: H(),
      objectOf: b,
      oneOf: u,
      oneOfType: O,
      shape: D,
      exact: q
    };
    function _(T, c) {
      return T === c ? T !== 0 || 1 / T === 1 / c : T !== T && c !== c;
    }
    function v(T, c) {
      this.message = T, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function C(T) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, w = 0;
      function N(Z, W, L, F, V, K, ae) {
        if (F = F || f, K = K || L, ae !== o) {
          if (m) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = F + ":" + L;
            !c[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[ce] = !0, w++);
          }
        }
        return W[L] == null ? Z ? W[L] === null ? new v("The " + V + " `" + K + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new v("The " + V + " `" + K + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : T(W, L, F, V, K);
      }
      var I = N.bind(null, !1);
      return I.isRequired = N.bind(null, !0), I;
    }
    function E(T) {
      function c(w, N, I, Z, W, L) {
        var F = w[N], V = ne(F);
        if (V !== T) {
          var K = G(F);
          return new v(
            "Invalid " + Z + " `" + W + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return C(c);
    }
    function A() {
      return C(r);
    }
    function P(T) {
      function c(w, N, I, Z, W) {
        if (typeof T != "function")
          return new v("Property `" + W + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var L = w[N];
        if (!Array.isArray(L)) {
          var F = ne(L);
          return new v("Invalid " + Z + " `" + W + "` of type " + ("`" + F + "` supplied to `" + I + "`, expected an array."));
        }
        for (var V = 0; V < L.length; V++) {
          var K = T(L, V, I, Z, W + "[" + V + "]", o);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return C(c);
    }
    function B() {
      function T(c, w, N, I, Z) {
        var W = c[w];
        if (!s(W)) {
          var L = ne(W);
          return new v("Invalid " + I + " `" + Z + "` of type " + ("`" + L + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(T);
    }
    function p() {
      function T(c, w, N, I, Z) {
        var W = c[w];
        if (!e.isValidElementType(W)) {
          var L = ne(W);
          return new v("Invalid " + I + " `" + Z + "` of type " + ("`" + L + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(T);
    }
    function d(T) {
      function c(w, N, I, Z, W) {
        if (!(w[N] instanceof T)) {
          var L = T.name || f, F = Q(w[N]);
          return new v("Invalid " + Z + " `" + W + "` of type " + ("`" + F + "` supplied to `" + I + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return C(c);
    }
    function u(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(w, N, I, Z, W) {
        for (var L = w[N], F = 0; F < T.length; F++)
          if (_(L, T[F]))
            return null;
        var V = JSON.stringify(T, function(ae, S) {
          var ce = G(S);
          return ce === "symbol" ? String(S) : S;
        });
        return new v("Invalid " + Z + " `" + W + "` of value `" + String(L) + "` " + ("supplied to `" + I + "`, expected one of " + V + "."));
      }
      return C(c);
    }
    function b(T) {
      function c(w, N, I, Z, W) {
        if (typeof T != "function")
          return new v("Property `" + W + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var L = w[N], F = ne(L);
        if (F !== "object")
          return new v("Invalid " + Z + " `" + W + "` of type " + ("`" + F + "` supplied to `" + I + "`, expected an object."));
        for (var V in L)
          if (n(L, V)) {
            var K = T(L, V, I, Z, W + "." + V, o);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return C(c);
    }
    function O(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < T.length; c++) {
        var w = T[c];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(w) + " at index " + c + "."
          ), r;
      }
      function N(I, Z, W, L, F) {
        for (var V = [], K = 0; K < T.length; K++) {
          var ae = T[K], S = ae(I, Z, W, L, F, o);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && V.push(S.data.expectedType);
        }
        var ce = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new v("Invalid " + L + " `" + F + "` supplied to " + ("`" + W + "`" + ce + "."));
      }
      return C(N);
    }
    function H() {
      function T(c, w, N, I, Z) {
        return z(c[w]) ? null : new v("Invalid " + I + " `" + Z + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return C(T);
    }
    function M(T, c, w, N, I) {
      return new v(
        (T || "React class") + ": " + c + " type `" + w + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function D(T) {
      function c(w, N, I, Z, W) {
        var L = w[N], F = ne(L);
        if (F !== "object")
          return new v("Invalid " + Z + " `" + W + "` of type `" + F + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var V in T) {
          var K = T[V];
          if (typeof K != "function")
            return M(I, Z, W, V, G(K));
          var ae = K(L, V, I, Z, W + "." + V, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return C(c);
    }
    function q(T) {
      function c(w, N, I, Z, W) {
        var L = w[N], F = ne(L);
        if (F !== "object")
          return new v("Invalid " + Z + " `" + W + "` of type `" + F + "` " + ("supplied to `" + I + "`, expected `object`."));
        var V = t({}, w[N], T);
        for (var K in V) {
          var ae = T[K];
          if (n(T, K) && typeof ae != "function")
            return M(I, Z, W, K, G(ae));
          if (!ae)
            return new v(
              "Invalid " + Z + " `" + W + "` key `" + K + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(w[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var S = ae(L, K, I, Z, W + "." + K, o);
          if (S)
            return S;
        }
        return null;
      }
      return C(c);
    }
    function z(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(z);
          if (T === null || s(T))
            return !0;
          var c = y(T);
          if (c) {
            var w = c.call(T), N;
            if (c !== T.entries) {
              for (; !(N = w.next()).done; )
                if (!z(N.value))
                  return !1;
            } else
              for (; !(N = w.next()).done; ) {
                var I = N.value;
                if (I && !z(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(T, c) {
      return T === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function ne(T) {
      var c = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : oe(c, T) ? "symbol" : c;
    }
    function G(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var c = ne(T);
      if (c === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function Y(T) {
      var c = G(T);
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
    function Q(T) {
      return !T.constructor || !T.constructor.name ? f : T.constructor.name;
    }
    return k.checkPropTypes = i, k.resetWarningCache = i.resetWarningCache, k.PropTypes = k, k;
  }, Ve;
}
var Ke, Lt;
function Fn() {
  if (Lt) return Ke;
  Lt = 1;
  var e = /* @__PURE__ */ ut();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ke = function() {
    function n(r, s, m, g, h, y) {
      if (y !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function i() {
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
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ke;
}
var jt;
function qn() {
  if (jt) return Ie.exports;
  if (jt = 1, process.env.NODE_ENV !== "production") {
    var e = Kt(), t = !0;
    Ie.exports = /* @__PURE__ */ Gn()(e.isElement, t);
  } else
    Ie.exports = /* @__PURE__ */ Fn()();
  return Ie.exports;
}
var Wn = /* @__PURE__ */ qn();
const x = /* @__PURE__ */ kn(Wn), Jt = {
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
}, Zn = [
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
], Fe = "16px", Yn = (e) => Math.round(e * 96 / 72), Vn = (e) => Math.round(e * 72 / 96 * 2) / 2, ha = (e) => {
  const t = Object.values(Jt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Yn(e)}px`;
}, ma = (e) => {
  const t = parseInt(e), o = Object.values(Jt).find((n) => n.px === t);
  return o ? o.pt : Vn(t);
}, ya = (e) => {
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
}, R = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Ea({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const m = n - t, g = i - o;
  let h = a, y = r;
  switch (e) {
    case R.TOP_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r - g);
      break;
    case R.TOP_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r - g);
      break;
    case R.BOTTOM_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r + g);
      break;
    case R.BOTTOM_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r + g);
      break;
    case R.TOP:
      y = Math.max(s.minHeight, r - g);
      break;
    case R.BOTTOM:
      y = Math.max(s.minHeight, r + g);
      break;
    case R.LEFT:
      h = Math.max(s.minWidth, a - m);
      break;
    case R.RIGHT:
      h = Math.max(s.minWidth, a + m);
      break;
    default:
      return { width: h, height: y };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      R.TOP_LEFT,
      R.TOP_RIGHT,
      R.BOTTOM_LEFT,
      R.BOTTOM_RIGHT
    ].includes(e) ? h / f > y ? y = Math.max(s.minHeight, h / f) : h = Math.max(s.minWidth, y * f) : [R.TOP, R.BOTTOM].includes(e) ? h = y * f : [R.LEFT, R.RIGHT].includes(e) && (y = h / f);
  }
  return s.maxWidth && h > s.maxWidth && (h = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (y = h / (a / r))), s.maxHeight && y > s.maxHeight && (y = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (h = y * (a / r))), h = Math.max(s.minWidth, h), y = Math.max(s.minHeight, y), {
    width: Math.round(h),
    height: Math.round(y)
  };
}
function fe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ba(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Ta(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Qt(e, t = ge) {
  if (!fe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(R).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Kn(a), r.style.pointerEvents = "all", en(r, a, n.width, n.height), o.appendChild(r);
  }), o;
}
function Kn(e) {
  switch (e) {
    case R.TOP_LEFT:
    case R.BOTTOM_RIGHT:
      return "nwse-resize";
    case R.TOP_RIGHT:
    case R.BOTTOM_LEFT:
      return "nesw-resize";
    case R.TOP:
    case R.BOTTOM:
      return "ns-resize";
    case R.LEFT:
    case R.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function en(e, t, o, n) {
  switch (t) {
    case R.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case R.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case R.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case R.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case R.TOP:
      e.style.top = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case R.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case R.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case R.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function ze(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    en(i, a, o.width, o.height);
  });
}
function Te(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Xn = {
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
}, Dt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Fe,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Jn = () => {
  const [e, t] = ue(Dt), o = Re(), n = $((E) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const P = A.getRangeAt(0);
      if (!P.toString())
        return t((p) => ({ ...p, fontFamily: E })), !1;
      try {
        const p = document.createElement("span");
        p.style.fontFamily = E;
        const d = P.extractContents();
        return p.appendChild(d), P.insertNode(p), P.selectNodeContents(p), A.removeAllRanges(), A.addRange(P), t((u) => ({ ...u, fontFamily: E })), !0;
      } catch {
        return document.execCommand("fontName", !1, E), t((d) => ({ ...d, fontFamily: E })), !0;
      }
    } catch (A) {
      return console.warn("[useFormatting] Font family change failed:", A), !1;
    }
  }, []), i = $((E) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const P = A.getRangeAt(0);
      if (!P.toString())
        return t((p) => ({ ...p, fontSize: E })), !1;
      try {
        const p = document.createElement("span");
        p.style.fontSize = E;
        const d = P.extractContents();
        return p.appendChild(d), P.insertNode(p), P.selectNodeContents(p), A.removeAllRanges(), A.addRange(P), t((u) => ({ ...u, fontSize: E })), !0;
      } catch {
        const d = Xn[E] || "3";
        return document.execCommand("fontSize", !1, d), t((u) => ({ ...u, fontSize: E })), !0;
      }
    } catch (A) {
      return console.warn("[useFormatting] Font size change failed:", A), !1;
    }
  }, []), a = $((E) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const P = A.getRangeAt(0), B = P.toString(), d = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[E];
      if (!d)
        return !1;
      if (!B) {
        const b = P.startContainer, O = b.nodeType === Node.TEXT_NODE ? b.parentElement : b, H = $e(O) || er();
        return H && (H.style.textAlign = d, r(d)), !0;
      }
      const u = Qn(P);
      if (u.length === 0) {
        const b = document.createElement("p");
        b.style.textAlign = d;
        const O = P.extractContents();
        b.appendChild(O), P.insertNode(b), P.selectNodeContents(b), A.removeAllRanges(), A.addRange(P);
      } else
        u.forEach((b) => {
          b.style.textAlign = d;
        });
      return r(d), !0;
    } catch (A) {
      return console.warn("[useFormatting] Text alignment failed:", A), !1;
    }
  }, []), r = $((E) => {
    t((A) => ({
      ...A,
      alignLeft: E === "left",
      alignCenter: E === "center",
      alignRight: E === "right",
      alignJustify: E === "justify"
    }));
  }, []), s = $((E, A = null) => {
    try {
      if (E === "undo") {
        o.undo();
        return;
      }
      if (E === "redo") {
        o.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (E === "fontSize") {
        i(A);
        return;
      }
      if (E === "fontName") {
        n(A);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(E)) {
        a(E);
        return;
      }
      switch (document.execCommand(E, !1, A) || console.warn(`[useFormatting] Command "${E}" failed`), E) {
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
        case "justifyLeft":
        case "justifyCenter":
        case "justifyRight":
        case "justifyFull":
        case "fontName":
          break;
        case "formatBlock":
          t((B) => ({ ...B, headingLevel: A }));
          break;
        default:
          break;
      }
    } catch (P) {
      console.warn(`[useFormatting] Error executing command "${E}":`, P);
    }
  }, [i, n, o]), m = re(null), g = re(null), h = re(null), y = re(null), f = re(ge);
  $((E) => {
    if (!fe(E)) return;
    m.current && (Te(m.current), m.current = null), E.classList.add("selected");
    const A = Qt(E);
    A && (m.current = A, g.current = E, document.body.appendChild(A), t((P) => ({
      ...P,
      imageSelected: !0,
      preserveAspectRatio: f.current.preserveAspectRatio
    })));
  }, []);
  const k = $(() => {
    g.current && (g.current.classList.remove("selected"), g.current = null), m.current && (Te(m.current), m.current = null), h.current = null, y.current = null, t((E) => ({
      ...E,
      imageSelected: !1
    }));
  }, []), _ = $(() => {
    const E = !f.current.preserveAspectRatio;
    f.current = {
      ...f.current,
      preserveAspectRatio: E,
      aspectRatio: E
    }, t((A) => ({
      ...A,
      preserveAspectRatio: E
    }));
  }, []);
  $((E, A, P) => {
    g.current && (h.current = {
      x: A,
      y: P,
      width: g.current.offsetWidth,
      height: g.current.offsetHeight
    }, y.current = E, document.body.classList.add("resize-in-progress"), document.body.style.cursor = tr(E));
  }, []), $((E, A) => {
    if (!g.current || !h.current || !y.current) return;
    const { x: P, y: B, width: p, height: d } = h.current, u = y.current, b = nr({
      handler: u,
      startX: P,
      startY: B,
      currentX: E,
      currentY: A,
      startWidth: p,
      startHeight: d,
      options: f.current
    });
    rr(g.current, b), m.current && ze(m.current, g.current);
  }, []), $(() => {
    if (h.current = null, y.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", g.current) {
      const E = new Event("input", { bubbles: !0, cancelable: !0 });
      g.current.dispatchEvent(E);
    }
  }, []);
  const v = $(() => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return;
      const A = E.getRangeAt(0), P = A.toString();
      let B = Fe, p = "Arial", d = "p", u = "left";
      if (P) {
        const O = A.startContainer, H = O.nodeType === Node.TEXT_NODE ? O.parentElement : O;
        if (H) {
          const M = window.getComputedStyle(H), D = M.fontSize, q = M.fontFamily;
          D && D.endsWith("px") && (B = D), q && q !== "serif" && (p = q.split(",")[0].replace(/['"]/g, "").trim());
          const z = $e(H);
          if (z) {
            const oe = z.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(oe) && (d = oe);
            const G = window.getComputedStyle(z).textAlign;
            ["left", "center", "right", "justify"].includes(G) && (u = G);
          }
        }
      }
      const b = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: u === "left",
        alignCenter: u === "center",
        alignRight: u === "right",
        alignJustify: u === "justify",
        fontFamily: p,
        fontSize: B,
        headingLevel: d
      };
      t((O) => ({
        ...O,
        ...b
      }));
    } catch (E) {
      console.warn("[useFormatting] Error updating format from selection:", E);
    }
  }, []), C = $(() => {
    k(), t(Dt);
  }, [k]);
  return ie(() => () => {
    m.current && Te(m.current);
  }, []), {
    currentFormat: e,
    formatText: s,
    resetFormat: C,
    updateCurrentFormatFromSelection: v,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: _
  };
};
function $e(e) {
  let t = e;
  for (; t && t !== document.body; ) {
    const o = t.tagName?.toLowerCase();
    if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(o))
      return t;
    if (t.contentEditable === "true" || t.contentEditable === "")
      break;
    t = t.parentElement;
  }
  return null;
}
function Qn(e) {
  const t = [], o = e.startContainer, n = e.endContainer, i = $e(
    o.nodeType === Node.TEXT_NODE ? o.parentElement : o
  ), a = $e(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (i === a && i)
    return [i];
  const r = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (m) => {
        const g = m.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(g) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let s = r.nextNode();
  for (; s; )
    e.intersectsNode(s) && t.push(s), s = r.nextNode();
  return t;
}
function er() {
  try {
    const e = window.getSelection();
    if (!e || e.rangeCount === 0)
      return null;
    const t = e.getRangeAt(0), o = document.createElement("p");
    return o.innerHTML = "<br>", t.insertNode(o), t.selectNodeContents(o), t.collapse(!0), e.removeAllRanges(), e.addRange(t), o;
  } catch (e) {
    return console.warn("[useFormatting] Failed to create paragraph at cursor:", e), null;
  }
}
function tr(e) {
  switch (e) {
    case R.TOP_LEFT:
    case R.BOTTOM_RIGHT:
      return "nwse-resize";
    case R.TOP_RIGHT:
    case R.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case R.BOTTOM:
      return "ns-resize";
    case R.LEFT:
    case R.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function nr({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const m = n - t, g = i - o;
  let h = a, y = r;
  switch (e) {
    case R.TOP_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r - g);
      break;
    case R.TOP_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r - g);
      break;
    case R.BOTTOM_LEFT:
      h = Math.max(s.minWidth, a - m), y = Math.max(s.minHeight, r + g);
      break;
    case R.BOTTOM_RIGHT:
      h = Math.max(s.minWidth, a + m), y = Math.max(s.minHeight, r + g);
      break;
    case R.TOP:
      y = Math.max(s.minHeight, r - g);
      break;
    case R.BOTTOM:
      y = Math.max(s.minHeight, r + g);
      break;
    case R.LEFT:
      h = Math.max(s.minWidth, a - m);
      break;
    case R.RIGHT:
      h = Math.max(s.minWidth, a + m);
      break;
    default:
      return { width: h, height: y };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      R.TOP_LEFT,
      R.TOP_RIGHT,
      R.BOTTOM_LEFT,
      R.BOTTOM_RIGHT
    ].includes(e) ? h / f > y ? y = Math.max(s.minHeight, h / f) : h = Math.max(s.minWidth, y * f) : [R.TOP, R.BOTTOM].includes(e) ? h = y * f : [R.LEFT, R.RIGHT].includes(e) && (y = h / f);
  }
  return s.maxWidth && h > s.maxWidth && (h = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (y = h / (a / r))), s.maxHeight && y > s.maxHeight && (y = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (h = y * (a / r))), h = Math.max(s.minWidth, h), y = Math.max(s.minHeight, y), {
    width: Math.round(h),
    height: Math.round(y)
  };
}
function rr(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const be = 'page-break, [data-page-break="true"]', tn = (e) => le[e] || le.A4, or = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = tn(o), i = e.querySelectorAll(be), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((m, g) => {
    const y = m.getBoundingClientRect().top - r.top + s;
    a.push({
      id: `page-${g + 1}`,
      pageNumber: g + 2,
      top: y,
      height: n.height
    });
  }), a;
}, nn = (e, t = 100, o = pe) => {
  const n = tn(e), i = In(o), a = n.height - i, r = t / 100;
  return a / r;
}, ar = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(be);
    if (o.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), i = n.top + n.height / 2;
    for (let a = o.length - 1; a >= 0; a--)
      if (o[a].getBoundingClientRect().top < i)
        return a + 1;
    return 0;
  } catch (o) {
    return console.warn("[getCurrentPage] Failed to calculate page:", o), 0;
  }
}, Ht = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let o = [], n = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? n.length > 0 && (o.push(n), n = []) : n.push(i);
  return n.length > 0 && o.push(n), o.length === 0 && t.length > 0 && o.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), o;
}, ir = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const o = e.querySelectorAll("img"), n = e.textContent.trim();
    if (o.length === 1 && !n) {
      const a = o[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, sr = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, cr = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  try {
    const m = nn(o, n, i) * (t - 1), g = Array.from(e.children);
    let h = 0, y = null;
    for (let f = 0; f < g.length; f++) {
      const k = g[f];
      if (k.tagName === "PAGE-BREAK" || k.getAttribute("data-page-break") === "true")
        continue;
      const _ = ir(k);
      if (h + _ > m) {
        y = k;
        break;
      }
      h += _;
    }
    if (y) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), y.parentNode.insertBefore(f, y), a) {
        const k = e.innerHTML;
        a(k);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const k = document.createElement("p");
      if (k.innerHTML = "<br>", e.appendChild(k), a) {
        const _ = e.innerHTML;
        a(_);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, lr = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const m = Array.from(e.querySelectorAll(be));
    if (t > m.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const g = window.getSelection();
    let h = !1, y = [], f = null;
    if (t === 0) {
      const _ = m[0];
      if (!_)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== _; )
        y.push(v), v = v.nextSibling;
      f = _;
    } else {
      const _ = m[t - 1];
      if (!_)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = m[t];
      let C = _.nextSibling;
      for (; C && C !== v; )
        y.push(C), C = C.nextSibling;
      f = _;
    }
    if (g && g.rangeCount > 0) {
      const v = g.getRangeAt(0).startContainer;
      for (const C of y)
        if (C.contains(v) || C === v) {
          h = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), y.forEach((_) => {
      _.parentNode && _.remove();
    }), e.querySelectorAll(be).forEach((_, v) => {
      _.setAttribute("data-page-number", String(v + 2));
    }), h && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const _ = e.innerHTML;
      n(_);
    }
    return i && setTimeout(() => {
      i(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (m) {
    return console.error("[removePageAndContent] Failed to remove page:", m), !1;
  }
}, ur = (e) => {
  if (e)
    try {
      e.querySelectorAll(be).forEach((o, n) => {
        o.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, dr = (e, t, o, n, i) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), ur(t), o) {
      const a = t.innerHTML;
      o(a);
    }
    return n && setTimeout(() => {
      n(), i && setTimeout(() => {
        i();
      }, 100);
    }, 50), !0;
  } catch (a) {
    return console.error("[removePageBreak] Failed to remove page break:", a), !1;
  }
}, fr = 200, pr = 50, Bt = 3, gr = 20, rn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const o = e.querySelectorAll("img"), n = e.textContent.trim();
    if (o.length === 1 && !n) {
      const a = o[0].getBoundingClientRect(), s = window.getComputedStyle(e).textAlign;
      if (s === "center" || s === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, hr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = rn(a);
    if (r < 1)
      continue;
    if (o + r > t)
      return n === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      } : null : {
        overflowIndex: i,
        overflowElement: a,
        accumulatedHeight: o
      };
    o += r, n = a;
  }
  return null;
}, mr = (e, t, o, n, i, a, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const m = nn(t, o, n);
    let g = Ht(e), h = !1, y = 0;
    for (let f = 0; f < g.length && y < Bt; f++) {
      const k = g[f], _ = hr(k, m);
      if (_ && _.overflowIndex > 0) {
        let v = 0;
        for (let P = 0; P < k.length; P++) {
          const B = k[P];
          B && B.getBoundingClientRect && (v += rn(B));
        }
        if (v - m < gr)
          continue;
        const E = f + 2;
        sr(_.overflowElement, E) && (h = !0, y++, g = Ht(e));
      }
    }
    if (h) {
      if (i) {
        const f = e.innerHTML;
        i(f);
      }
      setTimeout(() => {
        a && a(), y >= Bt && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, pr);
    }
    return h;
  } catch (m) {
    return console.warn("[checkAndReflow] Reflow failed:", m), !1;
  } finally {
    r.current = !1;
  }
}, yr = (e, t, o = fr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, Er = 400, on = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, n = 0;
      if (t === 0)
        o = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(be)[t - 1];
        a && a.nextSibling && (o = a.nextSibling, n = 0);
      }
      if (o) {
        const i = document.createRange(), a = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? i.setStart(o, n) : i.setStart(o, 0), i.collapse(!0), a.removeAllRanges(), a.addRange(i);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, br = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (o === 0)
      i = t;
    else {
      const r = t.querySelectorAll(be)[o - 1];
      if (r)
        i = r;
      else {
        console.warn("[scrollToPage] Page break not found for page", o);
        return;
      }
    }
    if (i) {
      const a = i.getBoundingClientRect(), r = e.getBoundingClientRect(), s = e.scrollTop + (a.top - r.top);
      console.log("[scrollToPage] Scrolling to page", o, "scrollTop:", s), e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(o) : on(t, o);
      }, Er);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, Tr = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, vr = 300, xr = (e, t, o = 100, n = "NARROW") => {
  const i = Re(), a = re(null), r = re(null), s = re(e), m = re(o), g = re(n), h = re(!1);
  ie(() => {
    s.current = e;
  }, [e]), ie(() => {
    m.current = o;
  }, [o]), ie(() => {
    g.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const y = $((d = {}) => t?.current ? or(t.current, d) : [], [t]), f = $((d = {}) => {
    const u = y(d);
    return i.updatePageBoundaries(u), u;
  }, [y, i]), k = $(async (d) => {
    if (!t?.current)
      return !1;
    const u = s.current || "A4", b = m.current || 100, O = g.current || "NARROW";
    return cr(
      t.current,
      d,
      u,
      b,
      O,
      i.updateContinuousContent,
      f
    );
  }, [t, i, f]), _ = $(() => {
    if (!t?.current)
      return;
    const d = s.current || "A4", u = m.current || 100, b = g.current || "NARROW";
    mr(
      t.current,
      d,
      u,
      b,
      i.updateContinuousContent,
      f,
      h,
      _
    );
  }, [t, i, f]), v = $((d) => {
    yr(_, r, d);
  }, [_]), C = $((d = {}) => {
    const u = typeof d.delay == "number" ? d.delay : vr;
    Tr(f, a, d, u);
  }, [f]), E = $((d) => !d?.current || !t?.current ? 0 : ar(d.current, t.current), [t]), A = $((d) => {
    t?.current && on(t.current, d);
  }, [t]), P = $((d, u) => {
    if (!u?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    br(u.current, t.current, d, A);
  }, [t, A]), B = $((d) => t?.current ? lr(
    t.current,
    d,
    y,
    i.updateContinuousContent,
    f,
    A,
    _
  ) : !1, [t, y, i, f, A, _]), p = $((d) => t?.current ? dr(
    d,
    t.current,
    i.updateContinuousContent,
    f,
    _
  ) : !1, [t, i, f, _]);
  return {
    calculatePageBoundaries: y,
    checkAndUpdateBoundaries: C,
    updateBoundaries: f,
    getCurrentPage: E,
    scrollToPage: P,
    positionCursorAtPage: A,
    checkAndReflow: _,
    triggerAutoReflow: v,
    removePageAndContent: B,
    removePageBreak: p,
    insertPageBreakAtBoundary: k,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, Ar = "html-editor-storage", Pr = 1, de = "images";
function _r() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Se() {
  return new Promise((e, t) => {
    const o = indexedDB.open(Ar, Pr);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(de) || i.createObjectStore(de, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function wr(e) {
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
      const r = a.target.result, m = r.split(",")[1].length * 3 / 4;
      if (m > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const g = await Se(), h = `editor-image-${_r()}`, f = g.transaction([de], "readwrite").objectStore(de), k = {
          key: h,
          dataUrl: r,
          size: m,
          type: e.type,
          timestamp: Date.now()
        }, _ = f.add(k);
        _.onsuccess = () => {
          g.close(), t(h);
        }, _.onerror = () => {
          g.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (g) {
        o(g);
      }
    }, i.onerror = () => {
      o(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function Rr(e) {
  try {
    const t = await Se();
    return new Promise((o, n) => {
      const r = t.transaction([de], "readonly").objectStore(de).get(e);
      r.onsuccess = () => {
        t.close();
        const s = r.result;
        o(s ? s.dataUrl : null);
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function Sr(e) {
  try {
    const t = await Se();
    return new Promise((o, n) => {
      const r = t.transaction([de], "readwrite").objectStore(de).delete(e);
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
async function va() {
  try {
    const e = await Se();
    return new Promise((t, o) => {
      const a = e.transaction([de], "readwrite").objectStore(de).clear();
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
async function xa() {
  try {
    const e = await Se();
    return new Promise((t, o) => {
      const a = e.transaction([de], "readonly").objectStore(de).getAllKeys();
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
const kr = [
  "SPAN",
  "STRONG",
  "EM",
  "B",
  "I",
  "U",
  "S",
  "STRIKE",
  "DEL",
  "INS",
  "SUB",
  "SUP",
  "MARK",
  "SMALL",
  "CODE",
  "KBD",
  "SAMP",
  "VAR",
  "A",
  "ABBR",
  "CITE",
  "DFN",
  "TIME"
], Or = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function Cr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function an(e) {
  const t = [];
  for (let o = 0; o < e.attributes.length; o++) {
    const n = e.attributes[o];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function De(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const o = document.createElement("div");
  return o.innerHTML = t, _e(o) || "<p><br></p>";
}
function Mr(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function _e(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      a && t.push(`<p>${Cr(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i, r = a.tagName, s = r.toLowerCase(), m = an(a);
      if (r === "DIV") {
        const g = _e(a);
        g.trim() ? t.push(g) : t.push("<p><br></p>");
      } else if (r === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(r)) {
        const g = Mr(a);
        t.push(`<${s}${m}>${g}</${s}>`);
      } else if (r === "BR")
        t.push("<p><br></p>");
      else if (r === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(r))
        t.push(Nr(a));
      else if (r === "LI")
        t.push(a.outerHTML);
      else if (r === "TABLE")
        t.push(Ir(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(r))
        t.push(a.outerHTML);
      else if (r === "BLOCKQUOTE") {
        const g = _e(a);
        t.push(`<blockquote${m}>${g}</blockquote>`);
      } else if (r === "PRE")
        t.push(a.outerHTML);
      else if (kr.includes(r))
        t.push(a.outerHTML);
      else if (r === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (r === "HR")
        t.push(a.outerHTML);
      else if (r === "FIGURE")
        t.push(a.outerHTML);
      else if (Or.includes(r))
        t.push(a.outerHTML);
      else {
        const g = _e(a);
        t.push(`<${s}${m}>${g}</${s}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Nr(e) {
  const t = e.tagName.toLowerCase(), o = an(e), n = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      n.push(i.outerHTML);
    else {
      const a = _e(i);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${o}><li><br></li></${t}>` : `<${t}${o}>${n.join("")}</${t}>`;
}
function Ir(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), zt = (e) => {
  const t = jr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, sn = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), Dr = (e) => {
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
var Hr = {
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
const Br = st(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: r,
    ...s
  }, m) => Je(
    "svg",
    {
      ref: m,
      ...Hr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: sn("lucide", i),
      ...!a && !Dr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([g, h]) => Je(g, h)),
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
  const o = st(
    ({ className: n, ...i }, a) => Je(Br, {
      ref: a,
      iconNode: t,
      className: sn(
        `lucide-${Lr(zt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return o.displayName = zt(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], $r = X("bold", zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Gr = X("chevron-left", Ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], qr = X("chevron-right", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Zr = X("file-check", Wr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ue = X("file-text", Yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Kr = X("hash", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Jr = X("heading-1", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], eo = X("heading-2", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], no = X("heading-3", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], oo = X("image-upscale", ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], io = X("image", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], co = X("italic", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], uo = X("link", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], po = X("list-indent-decrease", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ho = X("list-indent-increase", go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], yo = X("list-ordered", mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], cn = X("list", Eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], To = X("plus", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], xo = X("redo", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Po = X("scaling", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], wo = X("settings", _o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], So = X("strikethrough", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Oo = X("table", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], ln = X("text-align-center", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], un = X("text-align-end", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Io = X("text-align-justify", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], dn = X("text-align-start", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Do = X("trash-2", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Bo = X("underline", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], $o = X("undo", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Go = X("x", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], qo = X("zoom-in", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Zo = X("zoom-out", Wo), Yo = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: i }) => {
  const a = Vt(), { pages: r, activePage: s, continuousContent: m, editorMode: g } = a, [h, y] = ue(0), [f, k] = ue([]);
  ie(() => {
    if (n !== void 0 && i !== void 0) {
      if (y(n), m) {
        const E = document.createElement("div");
        E.innerHTML = m;
        const A = E.querySelectorAll("h1, h2, h3, h4, h5, h6"), P = Array.from(A).map((B, p) => {
          const d = parseInt(B.tagName.charAt(1)), u = B.textContent.trim();
          return u ? {
            id: `heading-${p}`,
            level: d,
            text: u,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        k(P);
      }
      return;
    }
    let v = 0;
    const C = [];
    r.forEach((E, A) => {
      if (E.content) {
        const P = document.createElement("div");
        P.innerHTML = E.content;
        const p = (P.textContent || P.innerText || "").trim().split(/\s+/).filter((u) => u.length > 0);
        v += p.length, P.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((u, b) => {
          const O = parseInt(u.tagName.charAt(1)), H = u.textContent.trim();
          H && C.push({
            id: `heading-${A}-${b}`,
            level: O,
            text: H,
            page: A + 1
          });
        });
      }
    }), y(v), k(C);
  }, [r, n, i, m]);
  const _ = i !== void 0 ? i : r.length;
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
            /* @__PURE__ */ l.jsx(Ue, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(qr, { size: 16 }) : /* @__PURE__ */ l.jsx(Gr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Zr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: _ })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Kr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: h.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Ue, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(cn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((v) => {
              const C = v.level === 1 ? Jr : v.level === 2 ? eo : no;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${v.level}`,
                  style: { marginLeft: `${(v.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(C, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: v.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      v.page
                    ] })
                  ]
                },
                v.id
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
};
class Vo {
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
const $t = new Vo("Editor"), fn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), pn = 32;
function gn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const o = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? o - 1 : o + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * pn}px`, e.dataset.indentLevel = String(n));
}
function Ko(e, t) {
  gn(e, t);
}
function Xo(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && fn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Jo() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), o = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((r) => {
    document.createRange().selectNodeContents(r), t.intersectsNode(r) && o.add(r);
  }), o.size === 0 && n.querySelectorAll("img").forEach((s) => {
    if (document.createRange().selectNode(s), t.intersectsNode(s)) {
      let g = s.parentElement;
      for (; g && g !== n; ) {
        if (g.tagName && fn.has(g.tagName.toUpperCase())) {
          o.add(g);
          break;
        }
        g = g.parentElement;
      }
    }
  }), Array.from(o).filter((r) => {
    let s = r.parentElement;
    for (; s; ) {
      if (o.has(s))
        return !1;
      s = s.parentElement;
    }
    return !0;
  })) : [];
}
function Qo(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), o = Math.max(0, t - 1);
    o === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${o * pn}px`, e.dataset.indentLevel = String(o));
    return;
  }
  if (e.innerHTML.startsWith("&nbsp;&nbsp;&nbsp;&nbsp;")) {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
    return;
  }
  try {
    const t = document.createTreeWalker(
      e,
      NodeFilter.SHOW_TEXT,
      null
    );
    let o = t.nextNode();
    for (; o; ) {
      const n = o.textContent;
      if (n.startsWith("    ")) {
        o.textContent = n.substring(4);
        break;
      }
      o = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function it(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let o = Jo();
  const n = t.getRangeAt(0);
  if (o.length === 0) {
    const r = Xo(n.startContainer);
    if (!r) return !1;
    o = [r];
  }
  const i = o[0], a = o[o.length - 1];
  o.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      Ko(r, e);
      return;
    }
    e ? Qo(r) : gn(r, !1);
  });
  try {
    const r = document.createRange(), s = (y) => y.nodeType === Node.TEXT_NODE ? y : document.createTreeWalker(
      y,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), m = (y) => {
      if (y.nodeType === Node.TEXT_NODE)
        return y;
      const f = document.createTreeWalker(
        y,
        NodeFilter.SHOW_TEXT,
        null
      );
      let k = null, _ = f.nextNode();
      for (; _; )
        k = _, _ = f.nextNode();
      return k;
    }, g = s(i);
    g ? r.setStart(g, 0) : r.setStart(i, 0);
    const h = m(a);
    h ? r.setEnd(h, h.length) : r.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(r);
  } catch {
    try {
      const s = document.createRange();
      s.setStartBefore(i), s.setEndAfter(a), t.removeAllRanges(), t.addRange(s);
    } catch (s) {
      console.warn("Could not restore selection after indentation:", s);
    }
  }
  return !0;
}
function ea(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, o = window.getSelection(), n = o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
  return o && o.rangeCount > 0 && n && !n.collapsed && it(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const dt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o,
  canUndo: n = !1,
  canRedo: i = !1
}) => {
  const a = async (r) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(r.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (r.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const m = await wr(r), g = await Rr(m);
      if (g) {
        const y = `<img src="${g}" data-key="${m}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, y), $t.info("Image inserted", { key: m });
      }
      const h = document.getElementById("image-upload");
      h && (h.value = "");
    } catch (s) {
      $t.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("undo"),
        disabled: !n,
        title: "Undo",
        style: { opacity: n ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx($o, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(xo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx($r, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(co, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(Bo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(So, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(dn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(ln, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(un, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(Io, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "Segoe UI", children: "Segoe UI " }),
          /* @__PURE__ */ l.jsx("option", { value: "Arial", children: "Arial " }),
          /* @__PURE__ */ l.jsx("option", { value: "Times New Roman", children: "Times New Roman " }),
          /* @__PURE__ */ l.jsx("option", { value: "Courier New", children: "Courier New " }),
          /* @__PURE__ */ l.jsx("option", { value: "Georgia", children: "Georgia " }),
          /* @__PURE__ */ l.jsx("option", { value: "Verdana", children: "Verdana " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Sinhala", children: "Noto Sans Sinhala " }),
          /* @__PURE__ */ l.jsx("option", { value: "Iskoola Pota", children: "Iskoola Pota " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Tamil", children: "Noto Sans Tamil " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans", children: "Noto Sans " })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        value: e.fontSize || Fe,
        title: "Font Size",
        children: Zn.map(({ value: r, label: s }) => /* @__PURE__ */ l.jsx("option", { value: r, children: s }, r))
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("formatBlock", r.target.value),
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
        children: /* @__PURE__ */ l.jsx(cn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(yo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          it(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ l.jsx(ho, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          it(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ l.jsx(po, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          const r = prompt("Enter URL:");
          r && t("createLink", r);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ l.jsx(uo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(Oo, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(Ue, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (r) => r.target.files[0] && a(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(io, { size: 16 })
      }
    )
  ] });
};
dt.propTypes = {
  currentFormat: x.shape({
    bold: x.bool,
    italic: x.bool,
    underline: x.bool,
    strikethrough: x.bool,
    alignLeft: x.bool,
    alignCenter: x.bool,
    alignRight: x.bool,
    alignJustify: x.bool,
    fontFamily: x.string,
    fontSize: x.string,
    headingLevel: x.string
  }).isRequired,
  onFormatText: x.func.isRequired,
  onAddPageBreak: x.func,
  canUndo: x.bool,
  canRedo: x.bool
};
dt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function ta(e) {
  return !e || typeof e != "string" ? e : De(e);
}
function na(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let o = t.getData("text/html") || t.getData("text/plain");
  return o ? (t.getData("text/html") ? o = ta(o) : o = ra(o), document.execCommand("insertHTML", !1, o), o) : null;
}
function ra(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((o) => o.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((o) => {
    const n = o.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => oa(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function oa(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ft = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: n = [],
  editorRef: i,
  onInput: a,
  onContentChange: r,
  onKeyDown: s,
  onClick: m,
  onScroll: g,
  onPaste: h,
  onRemovePageBreak: y,
  zoomLevel: f = 100,
  pageMargins: k = pe
}) => {
  const _ = Ft(k), v = f / 100, C = (d, u) => {
    if (!d) return !1;
    const b = d.getBoundingClientRect(), O = u - b.top;
    return O < _.top || O > b.height - _.bottom;
  }, E = (d) => d ? d.nodeType === Node.ELEMENT_NODE ? d.tagName === "PAGE-BREAK" || d.getAttribute("data-page-break") === "true" : d.parentElement && E(d.parentElement) : !1, A = (d) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const b = u.getRangeAt(0), { startContainer: O, endContainer: H } = b;
    if ((E(O) || E(H)) && (d.key.length === 1 || d.key === "Enter" || d.key === " "))
      return d.preventDefault(), !1;
    if (ea(d))
      return r && r(), !1;
    if ((d.key === "Backspace" || d.key === "Delete") && (E(O) || E(H)))
      return d.preventDefault(), !1;
    s && s(d);
  }, P = (d) => {
    if (!i.current) return;
    const u = d.target;
    if (E(u)) {
      d.preventDefault();
      const b = u.getBoundingClientRect(), O = d.clientX - b.left, H = d.clientY - b.top, M = b.width - 40, D = -12, q = b.width - 20;
      O >= M && O <= q && H >= D && H <= 8 && y && y(u);
      return;
    }
    if (C(i.current, d.clientY)) {
      d.preventDefault();
      const b = i.current.getBoundingClientRect();
      if (d.clientY - b.top < _.top) {
        const H = i.current.firstElementChild;
        if (H && H.tagName !== "PAGE-BREAK") {
          const M = document.createRange(), D = window.getSelection();
          M.setStart(H, 0), M.collapse(!0), D.removeAllRanges(), D.addRange(M);
        }
      } else {
        const H = i.current.lastElementChild;
        if (H && H.tagName !== "PAGE-BREAK") {
          const M = document.createRange(), D = window.getSelection();
          M.selectNodeContents(H), M.collapse(!1), D.removeAllRanges(), D.addRange(M);
        }
      }
      return;
    }
    m && m(d);
  }, B = (d) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const b = u.getRangeAt(0), { startContainer: O } = b;
    if (E(O))
      return d.preventDefault(), !1;
  }, p = (d) => {
    const u = na(d);
    h && h(d, u);
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
        transform: `scale(${v})`,
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
            padding: `${_.top}px ${_.right}px ${_.bottom}px ${_.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: Fe,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: A,
          onBeforeInput: B,
          onClick: P,
          onScroll: g,
          onPaste: p,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
ft.propTypes = {
  content: x.string.isRequired,
  dimensions: x.shape({
    width: x.number.isRequired,
    height: x.number.isRequired
  }).isRequired,
  pageSize: x.oneOf(["A4", "Letter", "Legal"]).isRequired,
  pageBoundaries: x.arrayOf(
    x.shape({
      id: x.string.isRequired,
      pageNumber: x.number.isRequired,
      top: x.number,
      height: x.number
    })
  ),
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: x.func.isRequired,
  onContentChange: x.func,
  onKeyDown: x.func,
  onClick: x.func,
  onScroll: x.func,
  onPaste: x.func,
  onRemovePageBreak: x.func,
  zoomLevel: x.number,
  pageMargins: x.string
};
ft.defaultProps = {
  pageBoundaries: [],
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: pe
};
const pt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: n = pe,
  zoomLevel: i = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: s,
  onAddPage: m,
  onDeletePage: g,
  onPageSizeChange: h,
  onPageMarginsChange: y,
  onZoomIn: f,
  onZoomOut: k,
  onZoomReset: _
} = {}) => {
  const v = Math.max(e?.length || 0, 1), C = (p) => {
    s && s(p);
  }, E = () => {
    m && m();
  }, A = (p) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    g && g(p);
  }, P = (p) => {
    h && h(p);
  }, B = (p) => {
    y && y(p);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(wo, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (p) => P(p.target.value),
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
              onChange: (p) => B(p.target.value),
              children: Ln().map((p) => /* @__PURE__ */ l.jsx("option", { value: p, children: jn(p) }, p))
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
          onClick: k,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(Zo, { size: 12 })
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
          children: /* @__PURE__ */ l.jsx(qo, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: _,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((p, d) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${d === t ? "active" : ""}`,
          onClick: () => C(d),
          "aria-label": `Go to page ${d + 1}`,
          "aria-current": d === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Ue, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              d + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (u) => {
            u.stopPropagation(), A(d);
          },
          "aria-label": `Delete page ${d + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(Go, { size: 14 })
        }
      )
    ] }, p.id || `page-${d}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: E,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(To, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
pt.propTypes = {
  pageBoundaries: x.arrayOf(
    x.shape({
      id: x.string.isRequired,
      pageNumber: x.number.isRequired,
      top: x.number,
      height: x.number
    })
  ),
  activePage: x.number,
  pageSize: x.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: x.string,
  zoomLevel: x.number,
  canZoomIn: x.bool,
  canZoomOut: x.bool,
  onNavigate: x.func,
  onAddPage: x.func,
  onDeletePage: x.func,
  onPageSizeChange: x.func,
  onPageMarginsChange: x.func,
  onZoomIn: x.func,
  onZoomOut: x.func,
  onZoomReset: x.func
};
pt.defaultProps = {
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
const aa = Ge.memo(pt), gt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: i = ge
}) => {
  const a = re(null), r = re(null), s = re(null), m = re(null), g = re(i), h = re(!1), y = Re();
  ie(() => {
    g.current = i;
  }, [i]);
  const f = $((u) => {
    if (!fe(u)) return;
    a.current && (Te(a.current), a.current = null), u.classList.add("selected");
    const b = Qt(u, g.current);
    b && (a.current = b, r.current = u, document.body.appendChild(b), b.querySelectorAll(".resize-handler").forEach((H) => {
      H.addEventListener("mousedown", _);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(u)));
  }, [o]), k = $(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (Te(a.current), a.current = null), s.current = null, m.current = null, h.current = !1, n && n();
  }, [n]), _ = $((u) => {
    if (u.preventDefault(), u.stopPropagation(), !r.current) return;
    const b = u.currentTarget.dataset.handler, O = r.current.getBoundingClientRect(), H = window.pageYOffset || document.documentElement.scrollTop, M = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: u.clientX,
      y: u.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: u.clientX - O.left - M,
      offsetY: u.clientY - O.top - H
    }, m.current = b, h.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = B(b), document.addEventListener("mousemove", v), document.addEventListener("mouseup", C);
  }, []), v = $((u) => {
    if (!h.current || !r.current || !s.current || !m.current) return;
    u.preventDefault(), u.stopPropagation();
    const { x: b, y: O, width: H, height: M } = s.current, D = m.current, q = u.clientX, z = u.clientY, oe = p({
      handler: D,
      startX: b,
      startY: O,
      currentX: q,
      currentY: z,
      startWidth: H,
      startHeight: M,
      options: g.current
    });
    d(r.current, oe), a.current && ze(a.current, r.current);
  }, []), C = $((u) => {
    if (h.current) {
      if (u.preventDefault(), u.stopPropagation(), r.current && s.current) {
        const b = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, O = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (b.width !== O.width || b.height !== O.height) && y.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: O } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: b } }
        );
      }
      if (s.current = null, m.current = null, h.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const b = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(b), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, y]), E = $((u) => {
    a.current && !a.current.contains(u.target) && k();
    const b = u.target;
    if (fe(b)) {
      if (b === r.current)
        return;
      f(b);
    } else
      console.log("Clicked on non-image element");
  }, [f, k]), A = $((u) => {
    if ((u.key === "Delete" || u.key === "Backspace") && r.current && !h.current) {
      u.preventDefault();
      const b = r.current;
      if (b.parentNode) {
        b.parentNode.removeChild(b), k();
        const O = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(O);
      }
    }
    if (u.key === "Escape" && r.current && k(), r.current && !h.current) {
      if ((u.ctrlKey || u.metaKey) && u.shiftKey && u.key === ">") {
        u.preventDefault();
        const b = r.current.offsetWidth, O = Math.min(g.current.maxWidth || 800, b + 10);
        d(r.current, { width: O, height: r.current.offsetHeight });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((u.ctrlKey || u.metaKey) && u.shiftKey && u.key === "<") {
        u.preventDefault();
        const b = r.current.offsetWidth, O = Math.max(g.current.minWidth || 50, b - 10);
        d(r.current, { width: O, height: r.current.offsetHeight });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((u.ctrlKey || u.metaKey) && u.shiftKey && u.key === "+") {
        u.preventDefault();
        const b = r.current.offsetHeight, O = Math.min(g.current.maxHeight || 600, b + 10);
        d(r.current, { width: r.current.offsetWidth, height: O });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((u.ctrlKey || u.metaKey) && u.shiftKey && u.key === "-") {
        u.preventDefault();
        const b = r.current.offsetHeight, O = Math.max(g.current.minHeight || 50, b - 10);
        d(r.current, { width: r.current.offsetWidth, height: O });
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(H);
      }
      if ((u.ctrlKey || u.metaKey) && u.key === "r") {
        u.preventDefault(), d(r.current, { width: 300, height: 200 });
        const b = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(b);
      }
    }
  }, [e, k]), P = $(() => {
    a.current && r.current && ze(a.current, r.current);
  }, []);
  ie(() => {
    if (!e.current) return;
    const b = e.current.closest(".editor-viewport");
    return b && (b.addEventListener("scroll", P), window.addEventListener("scroll", P)), () => {
      b && b.removeEventListener("scroll", P), window.removeEventListener("scroll", P);
    };
  }, [e, P]), ie(() => {
    if (!e.current) return;
    const u = e.current;
    u.addEventListener("click", E), u.addEventListener("keydown", A);
    const b = u.closest(".editor-viewport");
    return b && b.addEventListener("scroll", P), window.addEventListener("resize", P), () => {
      u.removeEventListener("click", E), u.removeEventListener("keydown", A), b && b.removeEventListener("scroll", P), window.removeEventListener("resize", P), h.current && (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", C), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && Te(a.current);
    };
  }, [e, E, A, P, v, C]), ie(() => {
    if (!e.current) return;
    const u = new MutationObserver((b) => {
      b.forEach((O) => {
        O.type === "childList" && (O.removedNodes.length > 0 && O.removedNodes.forEach((H) => {
          H.nodeType === Node.ELEMENT_NODE && fe(H) && H === r.current && k();
        }), O.addedNodes.length > 0 && O.addedNodes.forEach((H) => {
          if (H.nodeType === Node.ELEMENT_NODE)
            if (fe(H))
              setTimeout(() => {
                f(H);
              }, 50);
            else {
              const M = H.querySelectorAll ? H.querySelectorAll("img") : [];
              M.length > 0 && setTimeout(() => {
                f(M[0]);
              }, 50);
            }
        }));
      });
    });
    return u.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      u.disconnect();
    };
  }, [e, k, f]);
  function B(u) {
    switch (u) {
      case R.TOP_LEFT:
      case R.BOTTOM_RIGHT:
        return "nwse-resize";
      case R.TOP_RIGHT:
      case R.BOTTOM_LEFT:
        return "nesw-resize";
      case R.TOP:
      case R.BOTTOM:
        return "ns-resize";
      case R.LEFT:
      case R.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function p({
    handler: u,
    startX: b,
    startY: O,
    currentX: H,
    currentY: M,
    startWidth: D,
    startHeight: q,
    options: z = ge
  }) {
    const oe = H - b, ne = M - O;
    let G = D, Y = q;
    switch (u) {
      case R.TOP_LEFT:
        G = Math.max(z.minWidth, D - oe), Y = Math.max(z.minHeight, q - ne);
        break;
      case R.TOP_RIGHT:
        G = Math.max(z.minWidth, D + oe), Y = Math.max(z.minHeight, q - ne);
        break;
      case R.BOTTOM_LEFT:
        G = Math.max(z.minWidth, D - oe), Y = Math.max(z.minHeight, q + ne);
        break;
      case R.BOTTOM_RIGHT:
        G = Math.max(z.minWidth, D + oe), Y = Math.max(z.minHeight, q + ne);
        break;
      case R.TOP:
        Y = Math.max(z.minHeight, q - ne);
        break;
      case R.BOTTOM:
        Y = Math.max(z.minHeight, q + ne);
        break;
      case R.LEFT:
        G = Math.max(z.minWidth, D - oe);
        break;
      case R.RIGHT:
        G = Math.max(z.minWidth, D + oe);
        break;
      default:
        return { width: G, height: Y };
    }
    if (z.preserveAspectRatio && z.aspectRatio) {
      const Q = D / q;
      [
        R.TOP_LEFT,
        R.TOP_RIGHT,
        R.BOTTOM_LEFT,
        R.BOTTOM_RIGHT
      ].includes(u) ? G / Q > Y ? Y = Math.max(z.minHeight, G / Q) : G = Math.max(z.minWidth, Y * Q) : [R.TOP, R.BOTTOM].includes(u) ? G = Y * Q : [R.LEFT, R.RIGHT].includes(u) && (Y = G / Q);
    }
    return z.maxWidth && G > z.maxWidth && (G = z.maxWidth, z.preserveAspectRatio && z.aspectRatio && (Y = G / (D / q))), z.maxHeight && Y > z.maxHeight && (Y = z.maxHeight, z.preserveAspectRatio && z.aspectRatio && (G = Y * (D / q))), G = Math.max(z.minWidth, G), Y = Math.max(z.minHeight, Y), {
      width: Math.round(G),
      height: Math.round(Y)
    };
  }
  function d(u, { width: b, height: O }) {
    fe(u) && (u.tagName === "IMG" ? (u.style.width = `${b}px`, u.style.height = `${O}px`, u.width = b, u.height = O) : u.tagName === "DIV" && (u.style.width = `${b}px`, u.style.height = `${O}px`));
  }
  return null;
};
gt.propTypes = {
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: x.func,
  onImageSelect: x.func,
  onImageDeselect: x.func,
  resizeOptions: x.shape({
    minWidth: x.number,
    minHeight: x.number,
    maxWidth: x.number,
    maxHeight: x.number,
    aspectRatio: x.bool,
    preserveAspectRatio: x.bool,
    defaultWidth: x.number,
    defaultHeight: x.number
  })
};
gt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const ht = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: o,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [r, s] = ue({ top: 0, left: 0 }), [m, g] = ue(!1), [h, y] = ue("top"), [f, k] = ue(a), _ = re(null), v = re(null), C = Re(), E = (M) => {
    if (!M)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (q) => setTimeout(q, 16))(() => {
      const q = document.querySelector(".image-resize-overlay");
      q && ze(q, M);
    });
  }, A = (M) => {
    if (!M) return null;
    const D = window.getComputedStyle(M);
    return {
      float: D.float || "none",
      margin: M.style.margin || "",
      display: D.display || "inline",
      width: M.style.width || M.width || "",
      height: M.style.height || M.height || "",
      aspectRatio: f
    };
  }, P = () => {
    if (!e) return "left";
    const M = window.getComputedStyle(e);
    return M.float || M.display === "block" ? "left" : M.display === "flex" && M.justifyContent === "center" ? "center" : M.float === "right" ? "right" : "left";
  }, [B, p] = ue(P());
  ie(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ie(() => {
    if (e) {
      let M = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      M && (v.current = M);
    }
  }, [e]), wn(() => {
    if (!e || !_.current) return;
    const M = () => {
      const q = e.getBoundingClientRect(), z = _.current.getBoundingClientRect();
      v.current;
      const oe = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, ne = q.bottom >= 0 && q.top <= oe.height && q.right >= 0 && q.left <= oe.width;
      let G = "top", Y = 0, Q = 0;
      if (ne) {
        const I = q.top - z.height - 10, Z = oe.height - q.bottom - z.height - 10;
        Z > I && Z > 0 ? (G = "bottom", Y = q.bottom + 10) : (G = "top", Y = q.top - z.height - 10);
      } else
        G = "top", Y = 10;
      Q = q.left + q.width / 2 - z.width / 2;
      const T = window.innerWidth, c = window.innerHeight;
      let w = Q, N = Y;
      Q < 10 ? w = 10 : Q + z.width > T - 10 && (w = T - z.width - 10), Y < 10 ? N = 10 : Y + z.height > c - 10 && (N = c - z.height - 10), s({
        top: N,
        left: w
      }), y(G), g(!0);
    };
    M();
    const D = () => {
      M();
    };
    return v.current && v.current.addEventListener("scroll", D), window.addEventListener("scroll", D), window.addEventListener("resize", D), () => {
      v.current && v.current.removeEventListener("scroll", D), window.removeEventListener("scroll", D), window.removeEventListener("resize", D), g(!1);
    };
  }, [e]), ie(() => {
    const M = (D) => {
      _.current && !_.current.contains(D.target) && D.target !== e && i();
    };
    return document.addEventListener("mousedown", M), () => {
      document.removeEventListener("mousedown", M);
    };
  }, [e, i]);
  const d = () => {
    if (e) {
      const M = A(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", p("left"), E(e);
      const D = A(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: D } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: P(), state: M } }
      ), t && t("left");
    }
  }, u = () => {
    if (e) {
      const M = A(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", p("center"), E(e);
      const D = A(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: D } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: P(), state: M } }
      ), t && t("center");
    }
  }, b = () => {
    if (e) {
      const M = A(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", p("right"), E(e);
      const D = A(e);
      C.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: D } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: P(), state: M } }
      ), t && t("right");
    }
  }, O = () => {
    if (e && e.parentNode) {
      const M = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      C.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: M } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, H = () => {
    const M = f, D = !f;
    k(D), C.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: D } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: M } }
    ), o && o(D);
  };
  return !e || typeof document > "u" ? null : Sn(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: _,
        className: "image-tooltip-menu",
        "data-menu-position": h,
        "aria-hidden": !m,
        style: {
          position: "fixed",
          top: `${r.top}px`,
          left: `${r.left}px`,
          zIndex: 999,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "2px",
          alignItems: "center",
          pointerEvents: m ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: m ? 1 : 0,
          visibility: m ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${f ? "" : "active"}`,
              onClick: H,
              title: `Toggle aspect ratio preservation (currently ${f ? "ON" : "OFF"})`,
              children: f ? /* @__PURE__ */ l.jsx(Po, { size: 14 }) : /* @__PURE__ */ l.jsx(oo, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${B === "left" ? "active" : ""}`,
              onClick: d,
              title: "Align Left",
              style: {
                background: B === "left" ? "#007bff" : "transparent",
                color: B === "left" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ l.jsx(dn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${B === "center" ? "active" : ""}`,
              onClick: u,
              title: "Align Center",
              style: {
                background: B === "center" ? "#007bff" : "transparent",
                color: B === "center" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ l.jsx(ln, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${B === "right" ? "active" : ""}`,
              onClick: b,
              title: "Align Right",
              style: {
                background: B === "right" ? "#007bff" : "transparent",
                color: B === "right" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ l.jsx(un, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: O,
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
              children: /* @__PURE__ */ l.jsx(Do, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
ht.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
ht.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const ia = 50, Xe = 50, Ut = 50, sa = 100, ca = 500, Gt = "UPDATE_CONTINUOUS_CONTENT", mt = st(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: m = !0,
  showPageManager: g = !0
}, h) => {
  const y = Vt(), f = Re(), { pageSize: k, pageMargins: _, continuousContent: v, pageBoundaries: C, activePage: E, zoomLevel: A, canUndo: P, canRedo: B } = y, p = re(null), d = re(null), { currentFormat: u, formatText: b, updateCurrentFormatFromSelection: O } = Jn(), [H, M] = ue(!1), [D, q] = ue(null), [z, oe] = ue(!0), {
    checkAndUpdateBoundaries: ne,
    getCurrentPage: G,
    scrollToPage: Y,
    updateBoundaries: Q,
    triggerAutoReflow: T,
    removePageAndContent: c,
    removePageBreak: w,
    insertPageBreakAtBoundary: N
  } = xr(k, d, A, _), I = He(() => lt(k), [k]), [Z, W] = ue(!1), L = re(null), F = re(!1), V = re(!1), K = re(!1), ae = re(v);
  ie(() => {
    if (d.current) {
      if (!K.current) {
        d.current.innerHTML = v, K.current = !0, ae.current = v;
        const j = setTimeout(() => {
          Q();
        }, ia);
        return () => clearTimeout(j);
      }
      if (ae.current !== v) {
        if (d.current.innerHTML !== v) {
          d.current.innerHTML = v;
          const J = setTimeout(() => {
            if (Q(), F.current) {
              F.current = !1;
              const se = Math.max(0, C.length - 1);
              f.setActivePage(se), setTimeout(() => {
                Y(se, p);
              }, Ut);
            }
          }, Xe);
          return ae.current = v, () => clearTimeout(J);
        }
        ae.current = v;
      }
    }
  }, [v, Q, C.length, f, Y]), ie(() => {
    r && K.current && r(v);
  }, [v, r]), Rn(h, () => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => d.current ? d.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (d.current ? d.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (j) => {
      const J = De(j);
      J !== v && f.updateContinuousContent(J), d.current && d.current.innerHTML !== J && (d.current.innerHTML = J), ae.current = J, d.current && setTimeout(() => {
        Q();
      }, Xe);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * @param {string} html - HTML content to insert
     */
    insertContent: (j) => {
      if (!d.current || !j) return;
      const J = De(j), se = window.getSelection();
      if (se && se.rangeCount > 0) {
        const ye = se.getRangeAt(0);
        if (d.current.contains(ye.commonAncestorContainer)) {
          document.execCommand("insertHTML", !1, J);
          const he = d.current.innerHTML;
          f.updateContinuousContent(he), ae.current = he, setTimeout(() => {
            Q(), T(200);
          }, Xe);
        }
      }
    }
  }), [v, f, Q, d]), ie(() => {
    const j = () => {
      O();
    };
    document.addEventListener("selectionchange", j);
    const J = () => {
      setTimeout(O, 10);
    };
    return d.current && d.current.addEventListener("focus", J), () => {
      document.removeEventListener("selectionchange", j), d.current && d.current.removeEventListener("focus", J);
    };
  }, [O]);
  const S = $(() => {
    if (!d.current) return;
    let j = d.current.innerHTML;
    j = De(j), j !== d.current.innerHTML && (d.current.innerHTML = j);
    const J = v;
    if (J !== j) {
      const ye = {
        type: Gt,
        payload: j
      }, he = {
        type: Gt,
        payload: J
      };
      f.recordOperation(ye, he);
    }
    f.updateContinuousContent(j), ne(), T(200);
    const se = G(p);
    se !== E && f.setActivePage(se);
  }, [f, ne, G, E, T, p, d, v]), ce = $((j) => {
    S();
  }, [S]), me = $((j) => {
    f.updatePageSize(j), Q({ pageSize: j }), i && i(j);
  }, [f, Q, i]), ve = $((j) => {
    f.updatePageMargins(j), Q({ pageMargins: j }), a && a(j);
  }, [f, Q, a]), yt = $((j) => {
    j < 0 || j >= C.length || (V.current = !0, f.setActivePage(j), Y(j, p), setTimeout(() => {
      V.current = !1;
    }, ca), t && t(j));
  }, [f, Y, t, C.length]), Et = $(() => {
    const j = C.length + 1;
    N(j) && (F.current = !0, setTimeout(() => {
      if (F.current) {
        F.current = !1;
        const se = Math.max(0, C.length - 1);
        f.setActivePage(se), setTimeout(() => {
          Y(se, p);
        }, Ut);
      }
    }, 100)), o && o();
  }, [C.length, N, f, Y, o]), mn = $(() => {
    const j = window.getSelection();
    if (j && j.rangeCount > 0) {
      if (!d?.current) return;
      const ye = `<page-break data-page-break="true" contenteditable="false" data-page-number="${d.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ye), setTimeout(() => {
        Q();
        const he = G(p);
        f.setActivePage(he);
      }, 150);
    }
  }, [Q, G, f, p]), yn = $((j) => {
    if (!j) return;
    w(j) && setTimeout(() => {
      const se = G(p);
      f.setActivePage(se);
    }, 200);
  }, [w, G, f, p]), bt = $((j) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    c(j) && (f.setActivePage(0), n && n(j));
  }, [C.length, c, f, n]), ke = $(() => {
    f.zoomIn();
  }, [f]), Oe = $(() => {
    f.zoomOut();
  }, [f]), Ce = $(() => {
    f.resetZoom();
  }, [f]), Tt = $(() => {
    f.undo();
  }, [f]), vt = $(() => {
    f.redo();
  }, [f]);
  ie(() => {
    const j = (J) => {
      if (J.ctrlKey || J.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(J.key) && J.preventDefault();
        const se = document.activeElement === d.current, ye = document.activeElement === p.current, he = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (se || ye || !he)
          switch (J.key) {
            case "+":
            case "=":
              ke();
              break;
            case "-":
            case "_":
              Oe();
              break;
            case "0":
              Ce();
              break;
            case "z":
              J.shiftKey || Tt();
              break;
            case "y":
              vt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", j), () => {
      window.removeEventListener("keydown", j);
    };
  }, [ke, Oe, Ce, Tt, vt]);
  const En = $(() => {
    !p.current || !d.current || V.current || (L.current && clearTimeout(L.current), L.current = setTimeout(() => {
      if (V.current) {
        L.current = null;
        return;
      }
      const j = G(p);
      j !== E && j >= 0 && f.setActivePage(j), L.current = null;
    }, sa));
  }, [G, E, f]), bn = He(() => {
    if (!v) return 0;
    const J = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return J ? J.length : 0;
  }, [v]), Tn = C.length || 1, vn = $((j) => {
    M(!0), q(j);
  }, []), xt = $(() => {
    M(!1), q(null);
  }, []), xn = $((j, J) => {
  }, []);
  return ie(() => () => {
    L.current && clearTimeout(L.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    m && /* @__PURE__ */ l.jsx(
      dt,
      {
        currentFormat: {
          ...u,
          imageSelected: H
        },
        onFormatText: b,
        onAddPageBreak: mn,
        canUndo: P,
        canRedo: B
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        Yo,
        {
          editorView: null,
          isCollapsed: Z,
          onToggle: () => W((j) => !j),
          wordCount: bn,
          pageCount: Tn
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: p,
          onScroll: En,
          children: /* @__PURE__ */ l.jsx(
            ft,
            {
              content: v,
              dimensions: I,
              pageSize: k,
              pageMargins: _,
              pageBoundaries: C,
              editorRef: d,
              onInput: ce,
              onContentChange: S,
              onClick: () => d.current?.focus(),
              onRemovePageBreak: yn,
              zoomLevel: A
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        gt,
        {
          editorRef: d,
          onImageSelect: vn,
          onImageDeselect: xt,
          onImageResize: xn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: z,
            aspectRatio: z
          }
        }
      ),
      H && D && /* @__PURE__ */ l.jsx(
        ht,
        {
          imageElement: D,
          initialPreserveAspectRatio: z,
          onAlignChange: (j) => {
          },
          onAspectRatioToggle: (j) => {
            oe(j);
          },
          onDelete: () => {
            if (D) {
              const j = D.getAttribute("data-key");
              j && Sr(j).catch((J) => {
                console.error("Failed to delete image from IndexedDB:", J);
              });
            }
          },
          onClose: xt
        }
      ),
      g && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? Ge.cloneElement(e, {
        onNavigate: yt,
        onAddPage: Et,
        onDeletePage: bt,
        onPageSizeChange: me,
        onPageMarginsChange: ve,
        zoomLevel: A,
        canZoomIn: nt(A),
        canZoomOut: rt(A),
        onZoomIn: ke,
        onZoomOut: Oe,
        onZoomReset: Ce
      }) : /* @__PURE__ */ l.jsx(
        aa,
        {
          pageBoundaries: C,
          activePage: E,
          pageSize: k,
          pageMargins: _,
          zoomLevel: A,
          canZoomIn: nt(A),
          canZoomOut: rt(A),
          onNavigate: yt,
          onAddPage: Et,
          onDeletePage: bt,
          onPageSizeChange: me,
          onPageMarginsChange: ve,
          onZoomIn: ke,
          onZoomOut: Oe,
          onZoomReset: Ce
        }
      ) })
    ] })
  ] });
});
mt.displayName = "HtmlEditor";
mt.propTypes = {
  pageManagerComponent: x.element,
  onNavigatePage: x.func,
  onAddPage: x.func,
  onDeletePage: x.func,
  onPageSizeChange: x.func,
  onPageMarginsChange: x.func,
  onChange: x.func,
  showSidebar: x.bool,
  showToolbar: x.bool,
  showPageManager: x.bool
};
mt.defaultProps = {
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
class hn extends Ge.Component {
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
hn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
hn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Aa = {
  A4: { width: le.A4.width, height: le.A4.height },
  Letter: { width: le.Letter.width, height: le.Letter.height },
  Legal: { width: le.Legal.width, height: le.Legal.height }
};
export {
  Zn as COMMON_FONT_SIZES,
  Fe as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  qt as DEFAULT_PAGE_SIZE,
  ga as DocumentProvider,
  dt as EditorToolbar,
  hn as ErrorBoundary,
  Jt as FONT_SIZE_MAP,
  mt as HtmlEditor,
  gt as ImageResizeHandlers,
  Aa as PAGE_DIMENSIONS,
  le as PAGE_SIZES,
  aa as PageManager,
  ft as PageView,
  R as RESIZE_HANDLERS,
  Yo as Sidebar,
  Ta as applyImageDimensions,
  Ea as calculateResizeDimensions,
  va as clearImages,
  Qt as createResizeOverlay,
  Sr as deleteImage,
  xa as getAllImageKeys,
  pa as getAvailablePageSizes,
  Rr as getImage,
  ba as getImageDimensions,
  lt as getPageDimensions,
  ha as getPixelValue,
  ma as getPointValue,
  fe as isResizableImage,
  ya as isValidFontSize,
  fa as isValidPageSize,
  Vo as logger,
  Vn as pixelsToPoints,
  Yn as pointsToPixels,
  Te as removeResizeOverlay,
  wr as saveImage,
  ze as updateResizeOverlay,
  xr as useContinuousReflow,
  Yt as useDocument,
  Re as useDocumentActions,
  Vt as useDocumentState,
  Jn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
