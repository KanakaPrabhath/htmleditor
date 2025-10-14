import $e, { createContext as Tn, useContext as vn, useReducer as xn, useMemo as De, useState as le, useCallback as G, useRef as ne, useEffect as ie, forwardRef as at, createElement as Ve, useLayoutEffect as An, useImperativeHandle as _n } from "react";
import { v4 as it } from "uuid";
import { createPortal as Pn } from "react-dom";
function wn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ce = { exports: {} }, xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Rn() {
  if (Tt) return xe;
  Tt = 1;
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
var vt;
function On() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === C ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case E:
          return "Fragment";
        case D:
          return "Profiler";
        case S:
          return "StrictMode";
        case b:
          return "Suspense";
        case y:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case d:
            return "Portal";
          case L:
            return l.displayName || "Context";
          case w:
            return (l._context.displayName || "Context") + ".Consumer";
          case c:
            var x = l.render;
            return l = l.displayName, l || (l = x.displayName || x.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case _:
            return x = l.displayName || null, x !== null ? x : e(l.type) || "Memo";
          case N:
            x = l._payload, l = l._init;
            try {
              return e(l(x));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function o(l) {
      try {
        t(l);
        var x = !1;
      } catch {
        x = !0;
      }
      if (x) {
        x = console;
        var k = x.error, M = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return k.call(
          x,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(l);
      }
    }
    function n(l) {
      if (l === E) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === N)
        return "<...>";
      try {
        var x = e(l);
        return x ? "<" + x + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var l = H.A;
      return l === null ? null : l.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(l) {
      if (V.call(l, "key")) {
        var x = Object.getOwnPropertyDescriptor(l, "key").get;
        if (x && x.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function s(l, x) {
      function k() {
        re || (re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          x
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: k,
        configurable: !0
      });
    }
    function m() {
      var l = e(this.type);
      return q[l] || (q[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function g(l, x, k, M, W, $) {
      var I = k.ref;
      return l = {
        $$typeof: R,
        type: l,
        key: x,
        props: k,
        _owner: M
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function p(l, x, k, M, W, $) {
      var I = x.children;
      if (I !== void 0)
        if (M)
          if (z(I)) {
            for (M = 0; M < I.length; M++)
              h(I[M]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(I);
      if (V.call(x, "key")) {
        I = e(l);
        var F = Object.keys(x).filter(function(Y) {
          return Y !== "key";
        });
        M = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", T[I + M] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          I,
          F,
          I
        ), T[I + M] = !0);
      }
      if (I = null, k !== void 0 && (o(k), I = "" + k), r(x) && (o(x.key), I = "" + x.key), "key" in x) {
        k = {};
        for (var K in x)
          K !== "key" && (k[K] = x[K]);
      } else k = x;
      return I && s(
        k,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), g(
        l,
        I,
        k,
        i(),
        W,
        $
      );
    }
    function h(l) {
      f(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === N && (l._payload.status === "fulfilled" ? f(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function f(l) {
      return typeof l == "object" && l !== null && l.$$typeof === R;
    }
    var P = $e, R = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), L = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), H = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, z = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var re, q = {}, Z = P.react_stack_bottom_frame.bind(
      P,
      a
    )(), ee = oe(n(a)), T = {};
    Ae.Fragment = E, Ae.jsx = function(l, x, k) {
      var M = 1e4 > H.recentlyCreatedOwnerStacks++;
      return p(
        l,
        x,
        k,
        !1,
        M ? Error("react-stack-top-frame") : Z,
        M ? oe(n(l)) : ee
      );
    }, Ae.jsxs = function(l, x, k) {
      var M = 1e4 > H.recentlyCreatedOwnerStacks++;
      return p(
        l,
        x,
        k,
        !0,
        M ? Error("react-stack-top-frame") : Z,
        M ? oe(n(l)) : ee
      );
    };
  })()), Ae;
}
var xt;
function Sn() {
  return xt || (xt = 1, process.env.NODE_ENV === "production" ? Ce.exports = Rn() : Ce.exports = On()), Ce.exports;
}
var u = Sn();
const Ke = 100, Xe = 50, Je = 200, At = 5, Qe = (e) => e < Je, et = (e) => e > Xe, kn = 96, Ne = (e) => Math.round(e * kn), He = {
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
}, pe = "NORMAL", Ut = (e = pe) => {
  const t = He[e] || He[pe];
  return {
    top: Ne(t.top),
    bottom: Ne(t.bottom),
    left: Ne(t.left),
    right: Ne(t.right)
  };
}, Mn = (e = pe) => {
  const t = Ut(e);
  return t.top + t.bottom;
}, Cn = () => Object.keys(He), Nn = (e) => {
  const t = He[e];
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
}, Gt = "A4", st = (e) => {
  const t = ce[e] || ce[Gt];
  return {
    width: t.width,
    height: t.height
  };
}, ia = (e) => Object.keys(ce).includes(e), sa = () => Object.keys(ce), we = Gt, me = "<p><br></p>", In = "continuous", _e = (e, t = we) => ({
  id: it(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), je = (e) => typeof e != "string" || e.trim() === "" ? me : e, Ft = (e, t = we) => (e.length > 0 ? e : [_e(0, t)]).map((n, i) => ({
  id: n.id || it(),
  index: i,
  size: n.size || t,
  content: je(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Ln = (e = we) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: st(e).height
}], tt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || we, n = Ft(e.pages || [_e(0, o)], o);
  return {
    id: it(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || In,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || Ln(o),
    zoomLevel: e.zoomLevel || Ke,
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
}, nt = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case U.INITIALIZE_DOCUMENT: {
      const { initialContent: n = me, pageSize: i = we } = t.payload || {}, a = { ..._e(0, i), content: je(n) };
      return tt({
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
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Ft(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((r, s) => ({
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
      i.splice(n, 0, _e(n, e.pageSize));
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
        st(n);
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
      return tt();
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
          const g = m[i], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", g.parentNode.insertBefore(p, g.nextSibling), p.parentNode.insertBefore(h, p.nextSibling), r = s.innerHTML;
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
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== me).join(`
`) || me : e.continuousContent && e.continuousContent !== me && (a = [{ ..._e(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: a,
        updatedAt: o
      };
    }
    case U.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Xe || n > Je ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Xe} and ${Je}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.ZOOM_IN: {
      if (!Qe(e.zoomLevel))
        return e;
      const n = e.zoomLevel + At;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.ZOOM_OUT: {
      if (!et(e.zoomLevel))
        return e;
      const n = e.zoomLevel - At;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case U.RESET_ZOOM:
      return e.zoomLevel === Ke ? e : {
        ...e,
        zoomLevel: Ke,
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
      return n.inverseOperation && (a = nt(e, n.inverseOperation)), {
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
      return n.operation && (a = nt(e, n.operation)), {
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
}, qt = Tn(null), ca = ({ children: e, initialState: t = {} }) => {
  const [o, n] = xn(nt, tt(t)), i = De(() => ({
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
  }), []), a = De(() => ({
    state: o,
    actions: i,
    dispatch: n
  }), [o, i]);
  return /* @__PURE__ */ u.jsx(qt.Provider, { value: a, children: e });
}, Wt = () => {
  const e = vn(qt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Zt = () => {
  const { state: e } = Wt();
  return e;
}, Re = () => {
  const { actions: e } = Wt();
  return e;
};
var Ie = { exports: {} }, Le = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function jn() {
  if (_t) return J;
  _t = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function w(c) {
    if (typeof c == "object" && c !== null) {
      var b = c.$$typeof;
      switch (b) {
        case t:
          switch (c = c.type, c) {
            case m:
            case g:
            case n:
            case a:
            case i:
            case h:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case p:
                case R:
                case P:
                case r:
                  return c;
                default:
                  return b;
              }
          }
        case o:
          return b;
      }
    }
  }
  function L(c) {
    return w(c) === g;
  }
  return J.AsyncMode = m, J.ConcurrentMode = g, J.ContextConsumer = s, J.ContextProvider = r, J.Element = t, J.ForwardRef = p, J.Fragment = n, J.Lazy = R, J.Memo = P, J.Portal = o, J.Profiler = a, J.StrictMode = i, J.Suspense = h, J.isAsyncMode = function(c) {
    return L(c) || w(c) === m;
  }, J.isConcurrentMode = L, J.isContextConsumer = function(c) {
    return w(c) === s;
  }, J.isContextProvider = function(c) {
    return w(c) === r;
  }, J.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, J.isForwardRef = function(c) {
    return w(c) === p;
  }, J.isFragment = function(c) {
    return w(c) === n;
  }, J.isLazy = function(c) {
    return w(c) === R;
  }, J.isMemo = function(c) {
    return w(c) === P;
  }, J.isPortal = function(c) {
    return w(c) === o;
  }, J.isProfiler = function(c) {
    return w(c) === a;
  }, J.isStrictMode = function(c) {
    return w(c) === i;
  }, J.isSuspense = function(c) {
    return w(c) === h;
  }, J.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === g || c === a || c === i || c === h || c === f || typeof c == "object" && c !== null && (c.$$typeof === R || c.$$typeof === P || c.$$typeof === r || c.$$typeof === s || c.$$typeof === p || c.$$typeof === E || c.$$typeof === S || c.$$typeof === D || c.$$typeof === d);
  }, J.typeOf = w, J;
}
var Q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Dn() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, P = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function w(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === g || O === a || O === i || O === h || O === f || typeof O == "object" && O !== null && (O.$$typeof === R || O.$$typeof === P || O.$$typeof === r || O.$$typeof === s || O.$$typeof === p || O.$$typeof === E || O.$$typeof === S || O.$$typeof === D || O.$$typeof === d);
    }
    function L(O) {
      if (typeof O == "object" && O !== null) {
        var se = O.$$typeof;
        switch (se) {
          case t:
            var he = O.type;
            switch (he) {
              case m:
              case g:
              case n:
              case a:
              case i:
              case h:
                return he;
              default:
                var be = he && he.$$typeof;
                switch (be) {
                  case s:
                  case p:
                  case R:
                  case P:
                  case r:
                    return be;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var c = m, b = g, y = s, _ = r, N = t, B = p, C = n, H = R, V = P, z = o, oe = a, re = i, q = h, Z = !1;
    function ee(O) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(O) || L(O) === m;
    }
    function T(O) {
      return L(O) === g;
    }
    function l(O) {
      return L(O) === s;
    }
    function x(O) {
      return L(O) === r;
    }
    function k(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return L(O) === p;
    }
    function W(O) {
      return L(O) === n;
    }
    function $(O) {
      return L(O) === R;
    }
    function I(O) {
      return L(O) === P;
    }
    function F(O) {
      return L(O) === o;
    }
    function K(O) {
      return L(O) === a;
    }
    function Y(O) {
      return L(O) === i;
    }
    function ae(O) {
      return L(O) === h;
    }
    Q.AsyncMode = c, Q.ConcurrentMode = b, Q.ContextConsumer = y, Q.ContextProvider = _, Q.Element = N, Q.ForwardRef = B, Q.Fragment = C, Q.Lazy = H, Q.Memo = V, Q.Portal = z, Q.Profiler = oe, Q.StrictMode = re, Q.Suspense = q, Q.isAsyncMode = ee, Q.isConcurrentMode = T, Q.isContextConsumer = l, Q.isContextProvider = x, Q.isElement = k, Q.isForwardRef = M, Q.isFragment = W, Q.isLazy = $, Q.isMemo = I, Q.isPortal = F, Q.isProfiler = K, Q.isStrictMode = Y, Q.isSuspense = ae, Q.isValidElementType = w, Q.typeOf = L;
  })()), Q;
}
var wt;
function Yt() {
  return wt || (wt = 1, process.env.NODE_ENV === "production" ? Le.exports = jn() : Le.exports = Dn()), Le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, Rt;
function Hn() {
  if (Rt) return Ge;
  Rt = 1;
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
      var m = Object.getOwnPropertyNames(r).map(function(p) {
        return r[p];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        g[p] = p;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = i() ? Object.assign : function(a, r) {
    for (var s, m = n(a), g, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var h in s)
        t.call(s, h) && (m[h] = s[h]);
      if (e) {
        g = e(s);
        for (var f = 0; f < g.length; f++)
          o.call(s, g[f]) && (m[g[f]] = s[g[f]]);
      }
    }
    return m;
  }, Ge;
}
var Fe, Ot;
function ct() {
  if (Ot) return Fe;
  Ot = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = e, Fe;
}
var qe, St;
function Vt() {
  return St || (St = 1, qe = Function.call.bind(Object.prototype.hasOwnProperty)), qe;
}
var We, kt;
function zn() {
  if (kt) return We;
  kt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ct(), o = {}, n = /* @__PURE__ */ Vt();
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
      for (var p in a)
        if (n(a, p)) {
          var h;
          try {
            if (typeof a[p] != "function") {
              var f = Error(
                (m || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            h = a[p](r, p, m, s, null, t);
          } catch (R) {
            h = R;
          }
          if (h && !(h instanceof Error) && e(
            (m || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in o)) {
            o[h.message] = !0;
            var P = g ? g() : "";
            e(
              "Failed " + s + " type: " + h.message + (P ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, We = i, We;
}
var Ze, Mt;
function Bn() {
  if (Mt) return Ze;
  Mt = 1;
  var e = Yt(), t = Hn(), o = /* @__PURE__ */ ct(), n = /* @__PURE__ */ Vt(), i = /* @__PURE__ */ zn(), a = function() {
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
  return Ze = function(s, m) {
    var g = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(T) {
      var l = T && (g && T[g] || T[p]);
      if (typeof l == "function")
        return l;
    }
    var f = "<<anonymous>>", P = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: D(),
      arrayOf: w,
      element: L(),
      elementType: c(),
      instanceOf: b,
      node: B(),
      objectOf: _,
      oneOf: y,
      oneOfType: N,
      shape: H,
      exact: V
    };
    function R(T, l) {
      return T === l ? T !== 0 || 1 / T === 1 / l : T !== T && l !== l;
    }
    function d(T, l) {
      this.message = T, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function E(T) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, x = 0;
      function k(W, $, I, F, K, Y, ae) {
        if (F = F || f, Y = Y || I, ae !== o) {
          if (m) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = F + ":" + I;
            !l[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            x < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[se] = !0, x++);
          }
        }
        return $[I] == null ? W ? $[I] === null ? new d("The " + K + " `" + Y + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new d("The " + K + " `" + Y + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : T($, I, F, K, Y);
      }
      var M = k.bind(null, !1);
      return M.isRequired = k.bind(null, !0), M;
    }
    function S(T) {
      function l(x, k, M, W, $, I) {
        var F = x[k], K = re(F);
        if (K !== T) {
          var Y = q(F);
          return new d(
            "Invalid " + W + " `" + $ + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return E(l);
    }
    function D() {
      return E(r);
    }
    function w(T) {
      function l(x, k, M, W, $) {
        if (typeof T != "function")
          return new d("Property `" + $ + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var I = x[k];
        if (!Array.isArray(I)) {
          var F = re(I);
          return new d("Invalid " + W + " `" + $ + "` of type " + ("`" + F + "` supplied to `" + M + "`, expected an array."));
        }
        for (var K = 0; K < I.length; K++) {
          var Y = T(I, K, M, W, $ + "[" + K + "]", o);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return E(l);
    }
    function L() {
      function T(l, x, k, M, W) {
        var $ = l[x];
        if (!s($)) {
          var I = re($);
          return new d("Invalid " + M + " `" + W + "` of type " + ("`" + I + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(T);
    }
    function c() {
      function T(l, x, k, M, W) {
        var $ = l[x];
        if (!e.isValidElementType($)) {
          var I = re($);
          return new d("Invalid " + M + " `" + W + "` of type " + ("`" + I + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(T);
    }
    function b(T) {
      function l(x, k, M, W, $) {
        if (!(x[k] instanceof T)) {
          var I = T.name || f, F = ee(x[k]);
          return new d("Invalid " + W + " `" + $ + "` of type " + ("`" + F + "` supplied to `" + M + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return E(l);
    }
    function y(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function l(x, k, M, W, $) {
        for (var I = x[k], F = 0; F < T.length; F++)
          if (R(I, T[F]))
            return null;
        var K = JSON.stringify(T, function(ae, O) {
          var se = q(O);
          return se === "symbol" ? String(O) : O;
        });
        return new d("Invalid " + W + " `" + $ + "` of value `" + String(I) + "` " + ("supplied to `" + M + "`, expected one of " + K + "."));
      }
      return E(l);
    }
    function _(T) {
      function l(x, k, M, W, $) {
        if (typeof T != "function")
          return new d("Property `" + $ + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var I = x[k], F = re(I);
        if (F !== "object")
          return new d("Invalid " + W + " `" + $ + "` of type " + ("`" + F + "` supplied to `" + M + "`, expected an object."));
        for (var K in I)
          if (n(I, K)) {
            var Y = T(I, K, M, W, $ + "." + K, o);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return E(l);
    }
    function N(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var l = 0; l < T.length; l++) {
        var x = T[l];
        if (typeof x != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(x) + " at index " + l + "."
          ), r;
      }
      function k(M, W, $, I, F) {
        for (var K = [], Y = 0; Y < T.length; Y++) {
          var ae = T[Y], O = ae(M, W, $, I, F, o);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && K.push(O.data.expectedType);
        }
        var se = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new d("Invalid " + I + " `" + F + "` supplied to " + ("`" + $ + "`" + se + "."));
      }
      return E(k);
    }
    function B() {
      function T(l, x, k, M, W) {
        return z(l[x]) ? null : new d("Invalid " + M + " `" + W + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return E(T);
    }
    function C(T, l, x, k, M) {
      return new d(
        (T || "React class") + ": " + l + " type `" + x + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function H(T) {
      function l(x, k, M, W, $) {
        var I = x[k], F = re(I);
        if (F !== "object")
          return new d("Invalid " + W + " `" + $ + "` of type `" + F + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var K in T) {
          var Y = T[K];
          if (typeof Y != "function")
            return C(M, W, $, K, q(Y));
          var ae = Y(I, K, M, W, $ + "." + K, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return E(l);
    }
    function V(T) {
      function l(x, k, M, W, $) {
        var I = x[k], F = re(I);
        if (F !== "object")
          return new d("Invalid " + W + " `" + $ + "` of type `" + F + "` " + ("supplied to `" + M + "`, expected `object`."));
        var K = t({}, x[k], T);
        for (var Y in K) {
          var ae = T[Y];
          if (n(T, Y) && typeof ae != "function")
            return C(M, W, $, Y, q(ae));
          if (!ae)
            return new d(
              "Invalid " + W + " `" + $ + "` key `" + Y + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(x[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var O = ae(I, Y, M, W, $ + "." + Y, o);
          if (O)
            return O;
        }
        return null;
      }
      return E(l);
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
          var l = h(T);
          if (l) {
            var x = l.call(T), k;
            if (l !== T.entries) {
              for (; !(k = x.next()).done; )
                if (!z(k.value))
                  return !1;
            } else
              for (; !(k = x.next()).done; ) {
                var M = k.value;
                if (M && !z(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(T, l) {
      return T === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function re(T) {
      var l = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : oe(l, T) ? "symbol" : l;
    }
    function q(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var l = re(T);
      if (l === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function Z(T) {
      var l = q(T);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function ee(T) {
      return !T.constructor || !T.constructor.name ? f : T.constructor.name;
    }
    return P.checkPropTypes = i, P.resetWarningCache = i.resetWarningCache, P.PropTypes = P, P;
  }, Ze;
}
var Ye, Ct;
function $n() {
  if (Ct) return Ye;
  Ct = 1;
  var e = /* @__PURE__ */ ct();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ye = function() {
    function n(r, s, m, g, p, h) {
      if (h !== e) {
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
  }, Ye;
}
var Nt;
function Un() {
  if (Nt) return Ie.exports;
  if (Nt = 1, process.env.NODE_ENV !== "production") {
    var e = Yt(), t = !0;
    Ie.exports = /* @__PURE__ */ Bn()(e.isElement, t);
  } else
    Ie.exports = /* @__PURE__ */ $n()();
  return Ie.exports;
}
var Gn = /* @__PURE__ */ Un();
const v = /* @__PURE__ */ wn(Gn), Kt = {
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
}, Fn = [
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
], Ue = "16px", qn = (e) => Math.round(e * 96 / 72), Wn = (e) => Math.round(e * 72 / 96 * 2) / 2, la = (e) => {
  const t = Object.values(Kt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${qn(e)}px`;
}, ua = (e) => {
  const t = parseInt(e), o = Object.values(Kt).find((n) => n.px === t);
  return o ? o.pt : Wn(t);
}, da = (e) => {
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
}, A = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function fa({
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
  let p = a, h = r;
  switch (e) {
    case A.TOP_LEFT:
      p = Math.max(s.minWidth, a - m), h = Math.max(s.minHeight, r - g);
      break;
    case A.TOP_RIGHT:
      p = Math.max(s.minWidth, a + m), h = Math.max(s.minHeight, r - g);
      break;
    case A.BOTTOM_LEFT:
      p = Math.max(s.minWidth, a - m), h = Math.max(s.minHeight, r + g);
      break;
    case A.BOTTOM_RIGHT:
      p = Math.max(s.minWidth, a + m), h = Math.max(s.minHeight, r + g);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - g);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + g);
      break;
    case A.LEFT:
      p = Math.max(s.minWidth, a - m);
      break;
    case A.RIGHT:
      p = Math.max(s.minWidth, a + m);
      break;
    default:
      return { width: p, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? p / f > h ? h = Math.max(s.minHeight, p / f) : p = Math.max(s.minWidth, h * f) : [A.TOP, A.BOTTOM].includes(e) ? p = h * f : [A.LEFT, A.RIGHT].includes(e) && (h = p / f);
  }
  return s.maxWidth && p > s.maxWidth && (p = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = p / (a / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (p = h * (a / r))), p = Math.max(s.minWidth, p), h = Math.max(s.minHeight, h), {
    width: Math.round(p),
    height: Math.round(h)
  };
}
function fe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function pa(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ga(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Xt(e, t = ge) {
  if (!fe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(A).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Zn(a), r.style.pointerEvents = "all", Jt(r, a, n.width, n.height), o.appendChild(r);
  }), o;
}
function Zn(e) {
  switch (e) {
    case A.TOP_LEFT:
    case A.BOTTOM_RIGHT:
      return "nwse-resize";
    case A.TOP_RIGHT:
    case A.BOTTOM_LEFT:
      return "nesw-resize";
    case A.TOP:
    case A.BOTTOM:
      return "ns-resize";
    case A.LEFT:
    case A.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Jt(e, t, o, n) {
  switch (t) {
    case A.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case A.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case A.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case A.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case A.TOP:
      e.style.top = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case A.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${o / 2 + -5}px`;
      break;
    case A.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case A.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function ze(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    Jt(i, a, o.width, o.height);
  });
}
function ye(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Yn = {
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
}, It = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Ue,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Vn = () => {
  const [e, t] = le(It), o = Re(), n = G((d) => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return !1;
      const S = E.getRangeAt(0);
      if (!S.toString())
        return t((w) => ({ ...w, fontFamily: d })), !1;
      try {
        const w = document.createElement("span");
        w.style.fontFamily = d;
        const L = S.extractContents();
        return w.appendChild(L), S.insertNode(w), S.selectNodeContents(w), E.removeAllRanges(), E.addRange(S), t((c) => ({ ...c, fontFamily: d })), !0;
      } catch {
        return document.execCommand("fontName", !1, d), t((L) => ({ ...L, fontFamily: d })), !0;
      }
    } catch (E) {
      return console.warn("[useFormatting] Font family change failed:", E), !1;
    }
  }, []), i = G((d) => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return !1;
      const S = E.getRangeAt(0);
      if (!S.toString())
        return t((w) => ({ ...w, fontSize: d })), !1;
      try {
        const w = document.createElement("span");
        w.style.fontSize = d;
        const L = S.extractContents();
        return w.appendChild(L), S.insertNode(w), S.selectNodeContents(w), E.removeAllRanges(), E.addRange(S), t((c) => ({ ...c, fontSize: d })), !0;
      } catch {
        const L = Yn[d] || "3";
        return document.execCommand("fontSize", !1, L), t((c) => ({ ...c, fontSize: d })), !0;
      }
    } catch (E) {
      return console.warn("[useFormatting] Font size change failed:", E), !1;
    }
  }, []), a = G((d, E = null) => {
    try {
      if (d === "undo") {
        o.undo();
        return;
      }
      if (d === "redo") {
        o.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (d === "fontSize") {
        i(E);
        return;
      }
      if (d === "fontName") {
        n(E);
        return;
      }
      switch (document.execCommand(d, !1, E) || console.warn(`[useFormatting] Command "${d}" failed`), d) {
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
          t((D) => ({ ...D, headingLevel: E }));
          break;
        default:
          break;
      }
    } catch (S) {
      console.warn(`[useFormatting] Error executing command "${d}":`, S);
    }
  }, [i, n, o]), r = ne(null), s = ne(null), m = ne(null), g = ne(null), p = ne(ge);
  G((d) => {
    if (!fe(d)) return;
    r.current && (ye(r.current), r.current = null), d.classList.add("selected");
    const E = Xt(d);
    E && (r.current = E, s.current = d, document.body.appendChild(E), t((S) => ({
      ...S,
      imageSelected: !0,
      preserveAspectRatio: p.current.preserveAspectRatio
    })));
  }, []);
  const h = G(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), r.current && (ye(r.current), r.current = null), m.current = null, g.current = null, t((d) => ({
      ...d,
      imageSelected: !1
    }));
  }, []), f = G(() => {
    const d = !p.current.preserveAspectRatio;
    p.current = {
      ...p.current,
      preserveAspectRatio: d,
      aspectRatio: d
    }, t((E) => ({
      ...E,
      preserveAspectRatio: d
    }));
  }, []);
  G((d, E, S) => {
    s.current && (m.current = {
      x: E,
      y: S,
      width: s.current.offsetWidth,
      height: s.current.offsetHeight
    }, g.current = d, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Xn(d));
  }, []), G((d, E) => {
    if (!s.current || !m.current || !g.current) return;
    const { x: S, y: D, width: w, height: L } = m.current, c = g.current, b = Jn({
      handler: c,
      startX: S,
      startY: D,
      currentX: d,
      currentY: E,
      startWidth: w,
      startHeight: L,
      options: p.current
    });
    Qn(s.current, b), r.current && ze(r.current, s.current);
  }, []), G(() => {
    if (m.current = null, g.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", s.current) {
      const d = new Event("input", { bubbles: !0, cancelable: !0 });
      s.current.dispatchEvent(d);
    }
  }, []);
  const P = G(() => {
    try {
      const d = window.getSelection();
      if (!d || d.rangeCount === 0)
        return;
      const E = d.getRangeAt(0), S = E.toString();
      let D = Ue, w = "Arial", L = "p";
      if (S) {
        const b = E.startContainer, y = b.nodeType === Node.TEXT_NODE ? b.parentElement : b;
        if (y) {
          const _ = window.getComputedStyle(y), N = _.fontSize, B = _.fontFamily;
          N && N.endsWith("px") && (D = N), B && B !== "serif" && (w = B.split(",")[0].replace(/['"]/g, "").trim());
          const C = Kn(y);
          if (C) {
            const H = C.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(H) && (L = H);
          }
        }
      }
      const c = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: document.queryCommandState("justifyLeft"),
        alignCenter: document.queryCommandState("justifyCenter"),
        alignRight: document.queryCommandState("justifyRight"),
        alignJustify: document.queryCommandState("justifyFull"),
        fontFamily: w,
        fontSize: D,
        headingLevel: L
      };
      t((b) => ({
        ...b,
        ...c
      }));
    } catch (d) {
      console.warn("[useFormatting] Error updating format from selection:", d);
    }
  }, []), R = G(() => {
    h(), t(It);
  }, [h]);
  return ie(() => () => {
    r.current && ye(r.current);
  }, []), {
    currentFormat: e,
    formatText: a,
    resetFormat: R,
    updateCurrentFormatFromSelection: P,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: f
  };
};
function Kn(e) {
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
function Xn(e) {
  switch (e) {
    case A.TOP_LEFT:
    case A.BOTTOM_RIGHT:
      return "nwse-resize";
    case A.TOP_RIGHT:
    case A.BOTTOM_LEFT:
      return "nesw-resize";
    case RESIZE_HANDLRES.TOP:
    case A.BOTTOM:
      return "ns-resize";
    case A.LEFT:
    case A.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Jn({
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
  let p = a, h = r;
  switch (e) {
    case A.TOP_LEFT:
      p = Math.max(s.minWidth, a - m), h = Math.max(s.minHeight, r - g);
      break;
    case A.TOP_RIGHT:
      p = Math.max(s.minWidth, a + m), h = Math.max(s.minHeight, r - g);
      break;
    case A.BOTTOM_LEFT:
      p = Math.max(s.minWidth, a - m), h = Math.max(s.minHeight, r + g);
      break;
    case A.BOTTOM_RIGHT:
      p = Math.max(s.minWidth, a + m), h = Math.max(s.minHeight, r + g);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - g);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + g);
      break;
    case A.LEFT:
      p = Math.max(s.minWidth, a - m);
      break;
    case A.RIGHT:
      p = Math.max(s.minWidth, a + m);
      break;
    default:
      return { width: p, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? p / f > h ? h = Math.max(s.minHeight, p / f) : p = Math.max(s.minWidth, h * f) : [A.TOP, A.BOTTOM].includes(e) ? p = h * f : [A.LEFT, A.RIGHT].includes(e) && (h = p / f);
  }
  return s.maxWidth && p > s.maxWidth && (p = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = p / (a / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (p = h * (a / r))), p = Math.max(s.minWidth, p), h = Math.max(s.minHeight, h), {
    width: Math.round(p),
    height: Math.round(h)
  };
}
function Qn(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const Ee = 'page-break, [data-page-break="true"]', Qt = (e) => ce[e] || ce.A4, er = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = Qt(o), i = e.querySelectorAll(Ee), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((m, g) => {
    const h = m.getBoundingClientRect().top - r.top + s;
    a.push({
      id: `page-${g + 1}`,
      pageNumber: g + 2,
      top: h,
      height: n.height
    });
  }), a;
}, en = (e, t = 100, o = pe) => {
  const n = Qt(e), i = Mn(o), a = n.height - i, r = t / 100;
  return a / r;
}, tr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(Ee);
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
}, Lt = (e) => {
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
}, nr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, rr = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, or = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  try {
    const m = en(o, n, i) * (t - 1), g = Array.from(e.children);
    let p = 0, h = null;
    for (let f = 0; f < g.length; f++) {
      const P = g[f];
      if (P.tagName === "PAGE-BREAK" || P.getAttribute("data-page-break") === "true")
        continue;
      const R = nr(P);
      if (p + R > m) {
        h = P;
        break;
      }
      p += R;
    }
    if (h) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(f, h), a) {
        const P = e.innerHTML;
        a(P);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const P = document.createElement("p");
      if (P.innerHTML = "<br>", e.appendChild(P), a) {
        const R = e.innerHTML;
        a(R);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, ar = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const m = Array.from(e.querySelectorAll(Ee));
    if (t > m.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const g = window.getSelection();
    let p = !1, h = [], f = null;
    if (t === 0) {
      const R = m[0];
      if (!R)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let d = e.firstChild;
      for (; d && d !== R; )
        h.push(d), d = d.nextSibling;
      f = R;
    } else {
      const R = m[t - 1];
      if (!R)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const d = m[t];
      let E = R.nextSibling;
      for (; E && E !== d; )
        h.push(E), E = E.nextSibling;
      f = R;
    }
    if (g && g.rangeCount > 0) {
      const d = g.getRangeAt(0).startContainer;
      for (const E of h)
        if (E.contains(d) || E === d) {
          p = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), h.forEach((R) => {
      R.parentNode && R.remove();
    }), e.querySelectorAll(Ee).forEach((R, d) => {
      R.setAttribute("data-page-number", String(d + 2));
    }), p && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const R = e.innerHTML;
      n(R);
    }
    return i && setTimeout(() => {
      i(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (m) {
    return console.error("[removePageAndContent] Failed to remove page:", m), !1;
  }
}, ir = 200, sr = 50, jt = 3, cr = 20, tn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, lr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = tn(a);
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
}, ur = (e, t, o, n, i, a, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const m = en(t, o, n);
    let g = Lt(e), p = !1, h = 0;
    for (let f = 0; f < g.length && h < jt; f++) {
      const P = g[f], R = lr(P, m);
      if (R && R.overflowIndex > 0) {
        let d = 0;
        for (let w = 0; w < P.length; w++) {
          const L = P[w];
          L && L.getBoundingClientRect && (d += tn(L));
        }
        if (d - m < cr)
          continue;
        const S = f + 2;
        rr(R.overflowElement, S) && (p = !0, h++, g = Lt(e));
      }
    }
    if (p) {
      if (i) {
        const f = e.innerHTML;
        i(f);
      }
      setTimeout(() => {
        a && a(), h >= jt && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, sr);
    }
    return p;
  } catch (m) {
    return console.warn("[checkAndReflow] Reflow failed:", m), !1;
  } finally {
    r.current = !1;
  }
}, dr = (e, t, o = ir) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, fr = 400, nn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, n = 0;
      if (t === 0)
        o = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(Ee)[t - 1];
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
}, pr = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (o === 0)
      i = t;
    else {
      const r = t.querySelectorAll(Ee)[o - 1];
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
        n ? n(o) : nn(t, o);
      }, fr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, gr = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, hr = 300, mr = (e, t, o = 100, n = "NARROW") => {
  const i = Re(), a = ne(null), r = ne(null), s = ne(e), m = ne(o), g = ne(n), p = ne(!1);
  ie(() => {
    s.current = e;
  }, [e]), ie(() => {
    m.current = o;
  }, [o]), ie(() => {
    g.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const h = G((c = {}) => t?.current ? er(t.current, c) : [], [t]), f = G((c = {}) => {
    const b = h(c);
    return i.updatePageBoundaries(b), b;
  }, [h, i]), P = G(async (c) => {
    if (!t?.current)
      return !1;
    const b = s.current || "A4", y = m.current || 100, _ = g.current || "NARROW";
    return or(
      t.current,
      c,
      b,
      y,
      _,
      i.updateContinuousContent,
      f
    );
  }, [t, i, f]), R = G(() => {
    if (!t?.current)
      return;
    const c = s.current || "A4", b = m.current || 100, y = g.current || "NARROW";
    ur(
      t.current,
      c,
      b,
      y,
      i.updateContinuousContent,
      f,
      p,
      R
    );
  }, [t, i, f]), d = G((c) => {
    dr(R, r, c);
  }, [R]), E = G((c = {}) => {
    const b = typeof c.delay == "number" ? c.delay : hr;
    gr(f, a, c, b);
  }, [f]), S = G((c) => !c?.current || !t?.current ? 0 : tr(c.current, t.current), [t]), D = G((c) => {
    t?.current && nn(t.current, c);
  }, [t]), w = G((c, b) => {
    if (!b?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    pr(b.current, t.current, c, D);
  }, [t, D]), L = G((c) => t?.current ? ar(
    t.current,
    c,
    h,
    i.updateContinuousContent,
    f,
    D,
    R
  ) : !1, [t, h, i, f, D, R]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: E,
    updateBoundaries: f,
    getCurrentPage: S,
    scrollToPage: w,
    positionCursorAtPage: D,
    checkAndReflow: R,
    triggerAutoReflow: d,
    removePageAndContent: L,
    insertPageBreakAtBoundary: P,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, yr = "html-editor-storage", Er = 1, ue = "images";
function br() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Oe() {
  return new Promise((e, t) => {
    const o = indexedDB.open(yr, Er);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(ue) || i.createObjectStore(ue, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function Tr(e) {
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
        const g = await Oe(), p = `editor-image-${br()}`, f = g.transaction([ue], "readwrite").objectStore(ue), P = {
          key: p,
          dataUrl: r,
          size: m,
          type: e.type,
          timestamp: Date.now()
        }, R = f.add(P);
        R.onsuccess = () => {
          g.close(), t(p);
        }, R.onerror = () => {
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
async function vr(e) {
  try {
    const t = await Oe();
    return new Promise((o, n) => {
      const r = t.transaction([ue], "readonly").objectStore(ue).get(e);
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
async function xr(e) {
  try {
    const t = await Oe();
    return new Promise((o, n) => {
      const r = t.transaction([ue], "readwrite").objectStore(ue).delete(e);
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
async function ha() {
  try {
    const e = await Oe();
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
async function ma() {
  try {
    const e = await Oe();
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
const Ar = [
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
], _r = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function Pr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function rn(e) {
  const t = [];
  for (let o = 0; o < e.attributes.length; o++) {
    const n = e.attributes[o];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function rt(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const o = document.createElement("div");
  return o.innerHTML = t, Pe(o) || "<p><br></p>";
}
function wr(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function Pe(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      a && t.push(`<p>${Pr(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i, r = a.tagName, s = r.toLowerCase(), m = rn(a);
      if (r === "DIV") {
        const g = Pe(a);
        g.trim() ? t.push(g) : t.push("<p><br></p>");
      } else if (r === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(r)) {
        const g = wr(a);
        t.push(`<${s}${m}>${g}</${s}>`);
      } else if (r === "BR")
        t.push("<p><br></p>");
      else if (r === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(r))
        t.push(Rr(a));
      else if (r === "LI")
        t.push(a.outerHTML);
      else if (r === "TABLE")
        t.push(Or(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(r))
        t.push(a.outerHTML);
      else if (r === "BLOCKQUOTE") {
        const g = Pe(a);
        t.push(`<blockquote${m}>${g}</blockquote>`);
      } else if (r === "PRE")
        t.push(a.outerHTML);
      else if (Ar.includes(r))
        t.push(a.outerHTML);
      else if (r === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (r === "HR")
        t.push(a.outerHTML);
      else if (r === "FIGURE")
        t.push(a.outerHTML);
      else if (_r.includes(r))
        t.push(a.outerHTML);
      else {
        const g = Pe(a);
        t.push(`<${s}${m}>${g}</${s}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Rr(e) {
  const t = e.tagName.toLowerCase(), o = rn(e), n = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      n.push(i.outerHTML);
    else {
      const a = Pe(i);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${o}><li><br></li></${t}>` : `<${t}${o}>${n.join("")}</${t}>`;
}
function Or(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), kr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), Dt = (e) => {
  const t = kr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, on = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), Mr = (e) => {
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
var Cr = {
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
const Nr = at(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: r,
    ...s
  }, m) => Ve(
    "svg",
    {
      ref: m,
      ...Cr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: on("lucide", i),
      ...!a && !Mr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([g, p]) => Ve(g, p)),
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
  const o = at(
    ({ className: n, ...i }, a) => Ve(Nr, {
      ref: a,
      iconNode: t,
      className: on(
        `lucide-${Sr(Dt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return o.displayName = Dt(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Lr = X("bold", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Dr = X("chevron-left", jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], zr = X("chevron-right", Hr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], $r = X("file-check", Br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Be = X("file-text", Ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Fr = X("hash", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Wr = X("heading-1", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Yr = X("heading-2", Zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Kr = X("heading-3", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Jr = X("image-upscale", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], eo = X("image", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], no = X("italic", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], oo = X("link", ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], io = X("list-indent-decrease", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], co = X("list-indent-increase", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], uo = X("list-ordered", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], an = X("list", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], go = X("plus", po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], mo = X("redo", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Eo = X("scaling", yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], To = X("settings", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], xo = X("strikethrough", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], _o = X("table", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], sn = X("text-align-center", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], cn = X("text-align-end", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Oo = X("text-align-justify", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], ln = X("text-align-start", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Mo = X("trash-2", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], No = X("underline", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Lo = X("undo", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Do = X("x", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], zo = X("zoom-in", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], $o = X("zoom-out", Bo), Uo = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: i }) => {
  const a = Zt(), { pages: r, activePage: s, continuousContent: m, editorMode: g } = a, [p, h] = le(0), [f, P] = le([]);
  ie(() => {
    if (n !== void 0 && i !== void 0) {
      if (h(n), m) {
        const S = document.createElement("div");
        S.innerHTML = m;
        const D = S.querySelectorAll("h1, h2, h3, h4, h5, h6"), w = Array.from(D).map((L, c) => {
          const b = parseInt(L.tagName.charAt(1)), y = L.textContent.trim();
          return y ? {
            id: `heading-${c}`,
            level: b,
            text: y,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        P(w);
      }
      return;
    }
    let d = 0;
    const E = [];
    r.forEach((S, D) => {
      if (S.content) {
        const w = document.createElement("div");
        w.innerHTML = S.content;
        const c = (w.textContent || w.innerText || "").trim().split(/\s+/).filter((y) => y.length > 0);
        d += c.length, w.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((y, _) => {
          const N = parseInt(y.tagName.charAt(1)), B = y.textContent.trim();
          B && E.push({
            id: `heading-${D}-${_}`,
            level: N,
            text: B,
            page: D + 1
          });
        });
      }
    }), h(d), P(E);
  }, [r, n, i, m]);
  const R = i !== void 0 ? i : r.length;
  return /* @__PURE__ */ u.jsxs(
    "aside",
    {
      className: `sidebar ${t ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ u.jsx(Be, { size: 18 }),
            /* @__PURE__ */ u.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ u.jsx(zr, { size: 16 }) : /* @__PURE__ */ u.jsx(Dr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx($r, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: R })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Fr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Be, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsxs("h3", { children: [
              /* @__PURE__ */ u.jsx(an, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((d) => {
              const E = d.level === 1 ? Wr : d.level === 2 ? Yr : Kr;
              return /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ u.jsx(E, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ u.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ u.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      d.page
                    ] })
                  ]
                },
                d.id
              );
            }) })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ u.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ u.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
class Go {
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
const Ht = new Go("Editor"), un = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), dn = 32;
function fn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const o = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? o - 1 : o + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * dn}px`, e.dataset.indentLevel = String(n));
}
function Fo(e, t) {
  fn(e, t);
}
function qo(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && un.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Wo() {
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
        if (g.tagName && un.has(g.tagName.toUpperCase())) {
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
function Zo(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), o = Math.max(0, t - 1);
    o === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${o * dn}px`, e.dataset.indentLevel = String(o));
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
function ot(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let o = Wo();
  const n = t.getRangeAt(0);
  if (o.length === 0) {
    const r = qo(n.startContainer);
    if (!r) return !1;
    o = [r];
  }
  const i = o[0], a = o[o.length - 1];
  o.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      Fo(r, e);
      return;
    }
    e ? Zo(r) : fn(r, !1);
  });
  try {
    const r = document.createRange(), s = (h) => h.nodeType === Node.TEXT_NODE ? h : document.createTreeWalker(
      h,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), m = (h) => {
      if (h.nodeType === Node.TEXT_NODE)
        return h;
      const f = document.createTreeWalker(
        h,
        NodeFilter.SHOW_TEXT,
        null
      );
      let P = null, R = f.nextNode();
      for (; R; )
        P = R, R = f.nextNode();
      return P;
    }, g = s(i);
    g ? r.setStart(g, 0) : r.setStart(i, 0);
    const p = m(a);
    p ? r.setEnd(p, p.length) : r.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(r);
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
function Yo(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, o = window.getSelection(), n = o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
  return o && o.rangeCount > 0 && n && !n.collapsed && ot(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const lt = ({
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
      const m = await Tr(r), g = await vr(m);
      if (g) {
        const h = `<img src="${g}" data-key="${m}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, h), Ht.info("Image inserted", { key: m });
      }
      const p = document.getElementById("image-upload");
      p && (p.value = "");
    } catch (s) {
      Ht.error("Error uploading image", s);
    }
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("undo"),
        disabled: !n,
        title: "Undo",
        style: { opacity: n ? 1 : 0.5 },
        children: /* @__PURE__ */ u.jsx(Lo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ u.jsx(mo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ u.jsx(Lr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ u.jsx(no, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ u.jsx(No, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ u.jsx(xo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ u.jsx(ln, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ u.jsx(sn, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ u.jsx(cn, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ u.jsx(Oo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: [
          /* @__PURE__ */ u.jsx("option", { value: "Segoe UI", children: "Segoe UI " }),
          /* @__PURE__ */ u.jsx("option", { value: "Arial", children: "Arial " }),
          /* @__PURE__ */ u.jsx("option", { value: "Times New Roman", children: "Times New Roman " }),
          /* @__PURE__ */ u.jsx("option", { value: "Courier New", children: "Courier New " }),
          /* @__PURE__ */ u.jsx("option", { value: "Georgia", children: "Georgia " }),
          /* @__PURE__ */ u.jsx("option", { value: "Verdana", children: "Verdana " }),
          /* @__PURE__ */ u.jsx("option", { value: "Noto Sans Sinhala", children: "Noto Sans Sinhala " }),
          /* @__PURE__ */ u.jsx("option", { value: "Iskoola Pota", children: "Iskoola Pota " }),
          /* @__PURE__ */ u.jsx("option", { value: "Noto Sans Tamil", children: "Noto Sans Tamil " }),
          /* @__PURE__ */ u.jsx("option", { value: "Noto Sans", children: "Noto Sans " })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        value: e.fontSize || Ue,
        title: "Font Size",
        children: Fn.map(({ value: r, label: s }) => /* @__PURE__ */ u.jsx("option", { value: r, children: s }, r))
      }
    ),
    /* @__PURE__ */ u.jsxs(
      "select",
      {
        onChange: (r) => t("formatBlock", r.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: [
          /* @__PURE__ */ u.jsx("option", { value: "p", children: "Normal" }),
          /* @__PURE__ */ u.jsx("option", { value: "h1", children: "Heading 1" }),
          /* @__PURE__ */ u.jsx("option", { value: "h2", children: "Heading 2" }),
          /* @__PURE__ */ u.jsx("option", { value: "h3", children: "Heading 3" }),
          /* @__PURE__ */ u.jsx("option", { value: "h4", children: "Heading 4" }),
          /* @__PURE__ */ u.jsx("option", { value: "h5", children: "Heading 5" }),
          /* @__PURE__ */ u.jsx("option", { value: "h6", children: "Heading 6" })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ u.jsx(an, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ u.jsx(uo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          ot(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ u.jsx(co, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          ot(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ u.jsx(io, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          const r = prompt("Enter URL:");
          r && t("createLink", r);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ u.jsx(oo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ u.jsx(_o, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ u.jsx(Be, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (r) => r.target.files[0] && a(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ u.jsx(eo, { size: 16 })
      }
    )
  ] });
};
lt.propTypes = {
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
  onAddPageBreak: v.func,
  canUndo: v.bool,
  canRedo: v.bool
};
lt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Vo(e) {
  return !e || typeof e != "string" ? e : rt(e);
}
function Ko(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let o = t.getData("text/html") || t.getData("text/plain");
  return o ? (t.getData("text/html") ? o = Vo(o) : o = Xo(o), document.execCommand("insertHTML", !1, o), o) : null;
}
function Xo(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((o) => o.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((o) => {
    const n = o.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => Jo(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function Jo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ut = ({
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
  onPaste: p,
  zoomLevel: h = 100,
  pageMargins: f = pe
}) => {
  const P = Ut(f), R = h / 100, d = (c, b) => {
    if (!c) return !1;
    const y = c.getBoundingClientRect(), _ = b - y.top;
    return _ < P.top || _ > y.height - P.bottom;
  }, E = (c) => c ? c.nodeType === Node.ELEMENT_NODE ? c.tagName === "PAGE-BREAK" || c.getAttribute("data-page-break") === "true" : c.parentElement && E(c.parentElement) : !1, S = (c) => {
    const b = window.getSelection();
    if (!b || b.rangeCount === 0) return;
    const y = b.getRangeAt(0), { startContainer: _, endContainer: N } = y;
    if ((E(_) || E(N)) && (c.key.length === 1 || c.key === "Enter" || c.key === " "))
      return c.preventDefault(), !1;
    if (Yo(c))
      return r && r(), !1;
    if ((c.key === "Backspace" || c.key === "Delete") && (E(_) || E(N)))
      return c.preventDefault(), !1;
    s && s(c);
  }, D = (c) => {
    if (!i.current) return;
    const b = c.target;
    if (E(b)) {
      c.preventDefault();
      return;
    }
    if (d(i.current, c.clientY)) {
      c.preventDefault();
      const y = i.current.getBoundingClientRect();
      if (c.clientY - y.top < P.top) {
        const N = i.current.firstElementChild;
        if (N && N.tagName !== "PAGE-BREAK") {
          const B = document.createRange(), C = window.getSelection();
          B.setStart(N, 0), B.collapse(!0), C.removeAllRanges(), C.addRange(B);
        }
      } else {
        const N = i.current.lastElementChild;
        if (N && N.tagName !== "PAGE-BREAK") {
          const B = document.createRange(), C = window.getSelection();
          B.selectNodeContents(N), B.collapse(!1), C.removeAllRanges(), C.addRange(B);
        }
      }
      return;
    }
    m && m(c);
  }, w = (c) => {
    const b = window.getSelection();
    if (!b || b.rangeCount === 0) return;
    const y = b.getRangeAt(0), { startContainer: _ } = y;
    if (E(_))
      return c.preventDefault(), !1;
  }, L = (c) => {
    const b = Ko(c);
    p && p(c, b);
  };
  return /* @__PURE__ */ u.jsx(
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
        transform: `scale(${R})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ u.jsx(
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
            padding: `${P.top}px ${P.right}px ${P.bottom}px ${P.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: Ue,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: S,
          onBeforeInput: w,
          onClick: D,
          onScroll: g,
          onPaste: L,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
ut.propTypes = {
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
  onContentChange: v.func,
  onKeyDown: v.func,
  onClick: v.func,
  onScroll: v.func,
  onPaste: v.func,
  zoomLevel: v.number,
  pageMargins: v.string
};
ut.defaultProps = {
  pageBoundaries: [],
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  zoomLevel: 100,
  pageMargins: pe
};
const dt = ({
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
  onPageSizeChange: p,
  onPageMarginsChange: h,
  onZoomIn: f,
  onZoomOut: P,
  onZoomReset: R
} = {}) => {
  const d = Math.max(e?.length || 0, 1), E = (c) => {
    s && s(c);
  }, S = () => {
    m && m();
  }, D = (c) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    g && g(c);
  }, w = (c) => {
    p && p(c);
  }, L = (c) => {
    h && h(c);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ u.jsx(To, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ u.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: o,
              onChange: (c) => w(c.target.value),
              children: [
                /* @__PURE__ */ u.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ u.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ u.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ u.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (c) => L(c.target.value),
              children: Cn().map((c) => /* @__PURE__ */ u.jsx("option", { value: c, children: Nn(c) }, c))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: P,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ u.jsx($o, { size: 12 })
        }
      ),
      /* @__PURE__ */ u.jsxs("span", { className: "zoom-level-display", children: [
        i,
        "%"
      ] }),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: f,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ u.jsx(zo, { size: 12 })
        }
      ),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: R,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((c, b) => /* @__PURE__ */ u.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ u.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${b === t ? "active" : ""}`,
          onClick: () => E(b),
          "aria-label": `Go to page ${b + 1}`,
          "aria-current": b === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ u.jsx(Be, { size: 14 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              "Page ",
              b + 1
            ] })
          ]
        }
      ),
      d > 1 && /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (y) => {
            y.stopPropagation(), D(b);
          },
          "aria-label": `Delete page ${b + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ u.jsx(Do, { size: 14 })
        }
      )
    ] }, c.id || `page-${b}`)) }),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: S,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ u.jsx(go, { size: 16 }),
          /* @__PURE__ */ u.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
dt.propTypes = {
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
dt.defaultProps = {
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
const Qo = $e.memo(dt), ft = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: i = ge
}) => {
  const a = ne(null), r = ne(null), s = ne(null), m = ne(null), g = ne(i), p = ne(!1), h = Re();
  ie(() => {
    g.current = i;
  }, [i]);
  const f = G((y) => {
    if (!fe(y)) return;
    a.current && (ye(a.current), a.current = null), y.classList.add("selected");
    const _ = Xt(y, g.current);
    _ && (a.current = _, r.current = y, document.body.appendChild(_), _.querySelectorAll(".resize-handler").forEach((B) => {
      B.addEventListener("mousedown", R);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(y)));
  }, [o]), P = G(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (ye(a.current), a.current = null), s.current = null, m.current = null, p.current = !1, n && n();
  }, [n]), R = G((y) => {
    if (y.preventDefault(), y.stopPropagation(), !r.current) return;
    const _ = y.currentTarget.dataset.handler, N = r.current.getBoundingClientRect(), B = window.pageYOffset || document.documentElement.scrollTop, C = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: y.clientX,
      y: y.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: y.clientX - N.left - C,
      offsetY: y.clientY - N.top - B
    }, m.current = _, p.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = L(_), document.addEventListener("mousemove", d), document.addEventListener("mouseup", E);
  }, []), d = G((y) => {
    if (!p.current || !r.current || !s.current || !m.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: _, y: N, width: B, height: C } = s.current, H = m.current, V = y.clientX, z = y.clientY, oe = c({
      handler: H,
      startX: _,
      startY: N,
      currentX: V,
      currentY: z,
      startWidth: B,
      startHeight: C,
      options: g.current
    });
    b(r.current, oe), a.current && ze(a.current, r.current);
  }, []), E = G((y) => {
    if (p.current) {
      if (y.preventDefault(), y.stopPropagation(), r.current && s.current) {
        const _ = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, N = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (_.width !== N.width || _.height !== N.height) && h.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: N } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: _ } }
        );
      }
      if (s.current = null, m.current = null, p.current = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", E), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const _ = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(_), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, h]), S = G((y) => {
    a.current && !a.current.contains(y.target) && P();
    const _ = y.target;
    if (fe(_)) {
      if (_ === r.current)
        return;
      f(_);
    } else
      console.log("Clicked on non-image element");
  }, [f, P]), D = G((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && r.current && !p.current) {
      y.preventDefault();
      const _ = r.current;
      if (_.parentNode) {
        _.parentNode.removeChild(_), P();
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(N);
      }
    }
    if (y.key === "Escape" && r.current && P(), r.current && !p.current) {
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === ">") {
        y.preventDefault();
        const _ = r.current.offsetWidth, N = Math.min(g.current.maxWidth || 800, _ + 10);
        b(r.current, { width: N, height: r.current.offsetHeight });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "<") {
        y.preventDefault();
        const _ = r.current.offsetWidth, N = Math.max(g.current.minWidth || 50, _ - 10);
        b(r.current, { width: N, height: r.current.offsetHeight });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "+") {
        y.preventDefault();
        const _ = r.current.offsetHeight, N = Math.min(g.current.maxHeight || 600, _ + 10);
        b(r.current, { width: r.current.offsetWidth, height: N });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "-") {
        y.preventDefault();
        const _ = r.current.offsetHeight, N = Math.max(g.current.minHeight || 50, _ - 10);
        b(r.current, { width: r.current.offsetWidth, height: N });
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
      if ((y.ctrlKey || y.metaKey) && y.key === "r") {
        y.preventDefault(), b(r.current, { width: 300, height: 200 });
        const _ = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(_);
      }
    }
  }, [e, P]), w = G(() => {
    a.current && r.current && ze(a.current, r.current);
  }, []);
  ie(() => {
    if (!e.current) return;
    const _ = e.current.closest(".editor-viewport");
    return _ && (_.addEventListener("scroll", w), window.addEventListener("scroll", w)), () => {
      _ && _.removeEventListener("scroll", w), window.removeEventListener("scroll", w);
    };
  }, [e, w]), ie(() => {
    if (!e.current) return;
    const y = e.current;
    y.addEventListener("click", S), y.addEventListener("keydown", D);
    const _ = y.closest(".editor-viewport");
    return _ && _.addEventListener("scroll", w), window.addEventListener("resize", w), () => {
      y.removeEventListener("click", S), y.removeEventListener("keydown", D), _ && _.removeEventListener("scroll", w), window.removeEventListener("resize", w), p.current && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", E), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && ye(a.current);
    };
  }, [e, S, D, w, d, E]), ie(() => {
    if (!e.current) return;
    const y = new MutationObserver((_) => {
      _.forEach((N) => {
        N.type === "childList" && (N.removedNodes.length > 0 && N.removedNodes.forEach((B) => {
          B.nodeType === Node.ELEMENT_NODE && fe(B) && B === r.current && P();
        }), N.addedNodes.length > 0 && N.addedNodes.forEach((B) => {
          if (B.nodeType === Node.ELEMENT_NODE)
            if (fe(B))
              setTimeout(() => {
                f(B);
              }, 50);
            else {
              const C = B.querySelectorAll ? B.querySelectorAll("img") : [];
              C.length > 0 && setTimeout(() => {
                f(C[0]);
              }, 50);
            }
        }));
      });
    });
    return y.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      y.disconnect();
    };
  }, [e, P, f]);
  function L(y) {
    switch (y) {
      case A.TOP_LEFT:
      case A.BOTTOM_RIGHT:
        return "nwse-resize";
      case A.TOP_RIGHT:
      case A.BOTTOM_LEFT:
        return "nesw-resize";
      case A.TOP:
      case A.BOTTOM:
        return "ns-resize";
      case A.LEFT:
      case A.RIGHT:
        return "ew-resize";
      default:
        return "default";
    }
  }
  function c({
    handler: y,
    startX: _,
    startY: N,
    currentX: B,
    currentY: C,
    startWidth: H,
    startHeight: V,
    options: z = ge
  }) {
    const oe = B - _, re = C - N;
    let q = H, Z = V;
    switch (y) {
      case A.TOP_LEFT:
        q = Math.max(z.minWidth, H - oe), Z = Math.max(z.minHeight, V - re);
        break;
      case A.TOP_RIGHT:
        q = Math.max(z.minWidth, H + oe), Z = Math.max(z.minHeight, V - re);
        break;
      case A.BOTTOM_LEFT:
        q = Math.max(z.minWidth, H - oe), Z = Math.max(z.minHeight, V + re);
        break;
      case A.BOTTOM_RIGHT:
        q = Math.max(z.minWidth, H + oe), Z = Math.max(z.minHeight, V + re);
        break;
      case A.TOP:
        Z = Math.max(z.minHeight, V - re);
        break;
      case A.BOTTOM:
        Z = Math.max(z.minHeight, V + re);
        break;
      case A.LEFT:
        q = Math.max(z.minWidth, H - oe);
        break;
      case A.RIGHT:
        q = Math.max(z.minWidth, H + oe);
        break;
      default:
        return { width: q, height: Z };
    }
    if (z.preserveAspectRatio && z.aspectRatio) {
      const ee = H / V;
      [
        A.TOP_LEFT,
        A.TOP_RIGHT,
        A.BOTTOM_LEFT,
        A.BOTTOM_RIGHT
      ].includes(y) ? q / ee > Z ? Z = Math.max(z.minHeight, q / ee) : q = Math.max(z.minWidth, Z * ee) : [A.TOP, A.BOTTOM].includes(y) ? q = Z * ee : [A.LEFT, A.RIGHT].includes(y) && (Z = q / ee);
    }
    return z.maxWidth && q > z.maxWidth && (q = z.maxWidth, z.preserveAspectRatio && z.aspectRatio && (Z = q / (H / V))), z.maxHeight && Z > z.maxHeight && (Z = z.maxHeight, z.preserveAspectRatio && z.aspectRatio && (q = Z * (H / V))), q = Math.max(z.minWidth, q), Z = Math.max(z.minHeight, Z), {
      width: Math.round(q),
      height: Math.round(Z)
    };
  }
  function b(y, { width: _, height: N }) {
    fe(y) && (y.tagName === "IMG" ? (y.style.width = `${_}px`, y.style.height = `${N}px`, y.width = _, y.height = N) : y.tagName === "DIV" && (y.style.width = `${_}px`, y.style.height = `${N}px`));
  }
  return null;
};
ft.propTypes = {
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
ft.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const pt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: o,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [r, s] = le({ top: 0, left: 0 }), [m, g] = le(!1), [p, h] = le("top"), [f, P] = le(a), R = ne(null), d = ne(null), E = Re(), S = (C) => {
    if (!C)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (V) => setTimeout(V, 16))(() => {
      const V = document.querySelector(".image-resize-overlay");
      V && ze(V, C);
    });
  }, D = (C) => {
    if (!C) return null;
    const H = window.getComputedStyle(C);
    return {
      float: H.float || "none",
      margin: C.style.margin || "",
      display: H.display || "inline",
      width: C.style.width || C.width || "",
      height: C.style.height || C.height || "",
      aspectRatio: f
    };
  }, w = () => {
    if (!e) return "left";
    const C = window.getComputedStyle(e);
    return C.float || C.display === "block" ? "left" : C.display === "flex" && C.justifyContent === "center" ? "center" : C.float === "right" ? "right" : "left";
  }, [L, c] = le(w());
  ie(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ie(() => {
    if (e) {
      let C = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      C && (d.current = C);
    }
  }, [e]), An(() => {
    if (!e || !R.current) return;
    const C = () => {
      const V = e.getBoundingClientRect(), z = R.current.getBoundingClientRect();
      d.current;
      const oe = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, re = V.bottom >= 0 && V.top <= oe.height && V.right >= 0 && V.left <= oe.width;
      let q = "top", Z = 0, ee = 0;
      if (re) {
        const M = V.top - z.height - 10, W = oe.height - V.bottom - z.height - 10;
        W > M && W > 0 ? (q = "bottom", Z = V.bottom + 10) : (q = "top", Z = V.top - z.height - 10);
      } else
        q = "top", Z = 10;
      ee = V.left + V.width / 2 - z.width / 2;
      const T = window.innerWidth, l = window.innerHeight;
      let x = ee, k = Z;
      ee < 10 ? x = 10 : ee + z.width > T - 10 && (x = T - z.width - 10), Z < 10 ? k = 10 : Z + z.height > l - 10 && (k = l - z.height - 10), s({
        top: k,
        left: x
      }), h(q), g(!0);
    };
    C();
    const H = () => {
      C();
    };
    return d.current && d.current.addEventListener("scroll", H), window.addEventListener("scroll", H), window.addEventListener("resize", H), () => {
      d.current && d.current.removeEventListener("scroll", H), window.removeEventListener("scroll", H), window.removeEventListener("resize", H), g(!1);
    };
  }, [e]), ie(() => {
    const C = (H) => {
      R.current && !R.current.contains(H.target) && H.target !== e && i();
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [e, i]);
  const b = () => {
    if (e) {
      const C = D(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", c("left"), S(e);
      const H = D(e);
      E.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: H } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: w(), state: C } }
      ), t && t("left");
    }
  }, y = () => {
    if (e) {
      const C = D(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", c("center"), S(e);
      const H = D(e);
      E.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: H } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: w(), state: C } }
      ), t && t("center");
    }
  }, _ = () => {
    if (e) {
      const C = D(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", c("right"), S(e);
      const H = D(e);
      E.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: H } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: w(), state: C } }
      ), t && t("right");
    }
  }, N = () => {
    if (e && e.parentNode) {
      const C = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      E.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: C } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, B = () => {
    const C = f, H = !f;
    P(H), E.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: H } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: C } }
    ), o && o(H);
  };
  return !e || typeof document > "u" ? null : Pn(
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: R,
        className: "image-tooltip-menu",
        "data-menu-position": p,
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
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${f ? "" : "active"}`,
              onClick: B,
              title: `Toggle aspect ratio preservation (currently ${f ? "ON" : "OFF"})`,
              children: f ? /* @__PURE__ */ u.jsx(Eo, { size: 14 }) : /* @__PURE__ */ u.jsx(Jr, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${L === "left" ? "active" : ""}`,
              onClick: b,
              title: "Align Left",
              style: {
                background: L === "left" ? "#007bff" : "transparent",
                color: L === "left" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ u.jsx(ln, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${L === "center" ? "active" : ""}`,
              onClick: y,
              title: "Align Center",
              style: {
                background: L === "center" ? "#007bff" : "transparent",
                color: L === "center" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ u.jsx(sn, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${L === "right" ? "active" : ""}`,
              onClick: _,
              title: "Align Right",
              style: {
                background: L === "right" ? "#007bff" : "transparent",
                color: L === "right" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ u.jsx(cn, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: N,
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
              children: /* @__PURE__ */ u.jsx(Mo, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
pt.propTypes = {
  imageElement: v.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: v.func,
  onAspectRatioToggle: v.func,
  onDelete: v.func,
  onClose: v.func.isRequired,
  initialPreserveAspectRatio: v.bool
};
pt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const ea = 50, zt = 50, Bt = 50, ta = 100, na = 500, $t = "UPDATE_CONTINUOUS_CONTENT", gt = at(({
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
}, p) => {
  const h = Zt(), f = Re(), { pageSize: P, pageMargins: R, continuousContent: d, pageBoundaries: E, activePage: S, zoomLevel: D, canUndo: w, canRedo: L } = h, c = ne(null), b = ne(null), { currentFormat: y, formatText: _, updateCurrentFormatFromSelection: N } = Vn(), [B, C] = le(!1), [H, V] = le(null), [z, oe] = le(!0), {
    checkAndUpdateBoundaries: re,
    getCurrentPage: q,
    scrollToPage: Z,
    updateBoundaries: ee,
    triggerAutoReflow: T,
    removePageAndContent: l,
    insertPageBreakAtBoundary: x
  } = mr(P, b, D, R), k = De(() => st(P), [P]), [M, W] = le(!1), $ = ne(null), I = ne(!1), F = ne(!1), K = ne(!1), Y = ne(d);
  ie(() => {
    if (b.current) {
      if (!K.current) {
        b.current.innerHTML = d, K.current = !0, Y.current = d;
        const j = setTimeout(() => {
          ee();
        }, ea);
        return () => clearTimeout(j);
      }
      if (Y.current !== d) {
        if (b.current.innerHTML !== d) {
          b.current.innerHTML = d;
          const te = setTimeout(() => {
            if (ee(), I.current) {
              I.current = !1;
              const de = Math.max(0, E.length - 1);
              f.setActivePage(de), setTimeout(() => {
                Z(de, c);
              }, Bt);
            }
          }, zt);
          return Y.current = d, () => clearTimeout(te);
        }
        Y.current = d;
      }
    }
  }, [d, ee, E.length, f, Z]), ie(() => {
    r && K.current && r(d);
  }, [d, r]), _n(p, () => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => b.current ? b.current.innerHTML : d,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (b.current ? b.current.innerHTML : d).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (j) => {
      const te = rt(j);
      te !== d && f.updateContinuousContent(te), b.current && b.current.innerHTML !== te && (b.current.innerHTML = te), Y.current = te, b.current && setTimeout(() => {
        ee();
      }, zt);
    }
  }), [d, f, ee, b]), ie(() => {
    const j = () => {
      N();
    };
    document.addEventListener("selectionchange", j);
    const te = () => {
      setTimeout(N, 10);
    };
    return b.current && b.current.addEventListener("focus", te), () => {
      document.removeEventListener("selectionchange", j), b.current && b.current.removeEventListener("focus", te);
    };
  }, [N]);
  const ae = G(() => {
    if (!b.current) return;
    let j = b.current.innerHTML;
    j = rt(j), j !== b.current.innerHTML && (b.current.innerHTML = j);
    const te = d;
    if (te !== j) {
      const Te = {
        type: $t,
        payload: j
      }, ve = {
        type: $t,
        payload: te
      };
      f.recordOperation(Te, ve);
    }
    f.updateContinuousContent(j), re(), T(200);
    const de = q(c);
    de !== S && f.setActivePage(de);
  }, [f, re, q, S, T, c, b, d]), O = G((j) => {
    ae();
  }, [ae]), se = G((j) => {
    f.updatePageSize(j), ee({ pageSize: j }), i && i(j);
  }, [f, ee, i]), he = G((j) => {
    f.updatePageMargins(j), ee({ pageMargins: j }), a && a(j);
  }, [f, ee, a]), be = G((j) => {
    j < 0 || j >= E.length || (F.current = !0, f.setActivePage(j), Z(j, c), setTimeout(() => {
      F.current = !1;
    }, na), t && t(j));
  }, [f, Z, t, E.length]), ht = G(() => {
    const j = E.length + 1;
    x(j) && (I.current = !0, setTimeout(() => {
      if (I.current) {
        I.current = !1;
        const de = Math.max(0, E.length - 1);
        f.setActivePage(de), setTimeout(() => {
          Z(de, c);
        }, Bt);
      }
    }, 100)), o && o();
  }, [E.length, x, f, Z, o]), gn = G(() => {
    const j = window.getSelection();
    if (j && j.rangeCount > 0) {
      if (!b?.current) return;
      const Te = `<page-break data-page-break="true" contenteditable="false" data-page-number="${b.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Te), setTimeout(() => {
        ee();
        const ve = q(c);
        f.setActivePage(ve);
      }, 150);
    }
  }, [ee, q, f, c]), mt = G((j) => {
    if (E.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    l(j) && (f.setActivePage(0), n && n(j));
  }, [E.length, l, f, n]), Se = G(() => {
    f.zoomIn();
  }, [f]), ke = G(() => {
    f.zoomOut();
  }, [f]), Me = G(() => {
    f.resetZoom();
  }, [f]), yt = G(() => {
    f.undo();
  }, [f]), Et = G(() => {
    f.redo();
  }, [f]);
  ie(() => {
    const j = (te) => {
      if (te.ctrlKey || te.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(te.key) && te.preventDefault();
        const de = document.activeElement === b.current, Te = document.activeElement === c.current, ve = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (de || Te || !ve)
          switch (te.key) {
            case "+":
            case "=":
              Se();
              break;
            case "-":
            case "_":
              ke();
              break;
            case "0":
              Me();
              break;
            case "z":
              te.shiftKey || yt();
              break;
            case "y":
              Et();
              break;
          }
      }
    };
    return window.addEventListener("keydown", j), () => {
      window.removeEventListener("keydown", j);
    };
  }, [Se, ke, Me, yt, Et]);
  const hn = G(() => {
    !c.current || !b.current || F.current || ($.current && clearTimeout($.current), $.current = setTimeout(() => {
      if (F.current) {
        $.current = null;
        return;
      }
      const j = q(c);
      j !== S && j >= 0 && f.setActivePage(j), $.current = null;
    }, ta));
  }, [q, S, f]), mn = De(() => {
    if (!d) return 0;
    const te = d.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return te ? te.length : 0;
  }, [d]), yn = E.length || 1, En = G((j) => {
    C(!0), V(j);
  }, []), bt = G(() => {
    C(!1), V(null);
  }, []), bn = G((j, te) => {
  }, []);
  return ie(() => () => {
    $.current && clearTimeout($.current);
  }, []), /* @__PURE__ */ u.jsxs("div", { className: "multi-page-editor", children: [
    m && /* @__PURE__ */ u.jsx(
      lt,
      {
        currentFormat: {
          ...y,
          imageSelected: B
        },
        onFormatText: _,
        onAddPageBreak: gn,
        canUndo: w,
        canRedo: L
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ u.jsx(
        Uo,
        {
          editorView: null,
          isCollapsed: M,
          onToggle: () => W((j) => !j),
          wordCount: mn,
          pageCount: yn
        }
      ),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: c,
          onScroll: hn,
          children: /* @__PURE__ */ u.jsx(
            ut,
            {
              content: d,
              dimensions: k,
              pageSize: P,
              pageMargins: R,
              pageBoundaries: E,
              editorRef: b,
              onInput: O,
              onContentChange: ae,
              onClick: () => b.current?.focus(),
              zoomLevel: D
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsx(
        ft,
        {
          editorRef: b,
          onImageSelect: En,
          onImageDeselect: bt,
          onImageResize: bn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: z,
            aspectRatio: z
          }
        }
      ),
      B && H && /* @__PURE__ */ u.jsx(
        pt,
        {
          imageElement: H,
          initialPreserveAspectRatio: z,
          onAlignChange: (j) => {
          },
          onAspectRatioToggle: (j) => {
            oe(j);
          },
          onDelete: () => {
            if (H) {
              const j = H.getAttribute("data-key");
              j && xr(j).catch((te) => {
                console.error("Failed to delete image from IndexedDB:", te);
              });
            }
          },
          onClose: bt
        }
      ),
      g && /* @__PURE__ */ u.jsx("div", { className: "page-manager-sidebar", children: e ? $e.cloneElement(e, {
        onNavigate: be,
        onAddPage: ht,
        onDeletePage: mt,
        onPageSizeChange: se,
        onPageMarginsChange: he,
        zoomLevel: D,
        canZoomIn: Qe(D),
        canZoomOut: et(D),
        onZoomIn: Se,
        onZoomOut: ke,
        onZoomReset: Me
      }) : /* @__PURE__ */ u.jsx(
        Qo,
        {
          pageBoundaries: E,
          activePage: S,
          pageSize: P,
          pageMargins: R,
          zoomLevel: D,
          canZoomIn: Qe(D),
          canZoomOut: et(D),
          onNavigate: be,
          onAddPage: ht,
          onDeletePage: mt,
          onPageSizeChange: se,
          onPageMarginsChange: he,
          onZoomIn: Se,
          onZoomOut: ke,
          onZoomReset: Me
        }
      ) })
    ] })
  ] });
});
gt.displayName = "HtmlEditor";
gt.propTypes = {
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
gt.defaultProps = {
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
class pn extends $e.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ u.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ u.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ u.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ u.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ u.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ u.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ u.jsx(
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
pn.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
pn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const ya = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Fn as COMMON_FONT_SIZES,
  Ue as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Gt as DEFAULT_PAGE_SIZE,
  ca as DocumentProvider,
  lt as EditorToolbar,
  pn as ErrorBoundary,
  Kt as FONT_SIZE_MAP,
  gt as HtmlEditor,
  ft as ImageResizeHandlers,
  ya as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  Qo as PageManager,
  ut as PageView,
  A as RESIZE_HANDLERS,
  Uo as Sidebar,
  ga as applyImageDimensions,
  fa as calculateResizeDimensions,
  ha as clearImages,
  Xt as createResizeOverlay,
  xr as deleteImage,
  ma as getAllImageKeys,
  sa as getAvailablePageSizes,
  vr as getImage,
  pa as getImageDimensions,
  st as getPageDimensions,
  la as getPixelValue,
  ua as getPointValue,
  fe as isResizableImage,
  da as isValidFontSize,
  ia as isValidPageSize,
  Go as logger,
  Wn as pixelsToPoints,
  qn as pointsToPixels,
  ye as removeResizeOverlay,
  Tr as saveImage,
  ze as updateResizeOverlay,
  mr as useContinuousReflow,
  Wt as useDocument,
  Re as useDocumentActions,
  Zt as useDocumentState,
  Vn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
