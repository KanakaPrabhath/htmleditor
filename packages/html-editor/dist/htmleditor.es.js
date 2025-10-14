import Ge, { createContext as xn, useContext as vn, useReducer as An, useMemo as He, useState as ue, useCallback as G, useRef as re, useEffect as ie, forwardRef as st, createElement as Je, useLayoutEffect as _n, useImperativeHandle as wn } from "react";
import { v4 as ct } from "uuid";
import { createPortal as Pn } from "react-dom";
function Rn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Me = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Sn() {
  if (vt) return ve;
  vt = 1;
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
  return ve.Fragment = t, ve.jsx = o, ve.jsxs = o, ve;
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
var At;
function On() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === I ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case O:
          return "Fragment";
        case A:
          return "Profiler";
        case E:
          return "StrictMode";
        case y:
          return "Suspense";
        case g:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case T:
            return "Portal";
          case D:
            return l.displayName || "Context";
          case _:
            return (l._context.displayName || "Context") + ".Consumer";
          case c:
            var w = l.render;
            return l = l.displayName, l || (l = w.displayName || w.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case v:
            return w = l.displayName || null, w !== null ? w : e(l.type) || "Memo";
          case C:
            w = l._payload, l = l._init;
            try {
              return e(l(w));
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
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var M = w.error, N = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return M.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(l);
      }
    }
    function n(l) {
      if (l === O) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === C)
        return "<...>";
      try {
        var w = e(l);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var l = B.A;
      return l === null ? null : l.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(l) {
      if (q.call(l, "key")) {
        var w = Object.getOwnPropertyDescriptor(l, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function s(l, w) {
      function M() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: M,
        configurable: !0
      });
    }
    function h() {
      var l = e(this.type);
      return F[l] || (F[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function f(l, w, M, N, Z, $) {
      var L = M.ref;
      return l = {
        $$typeof: S,
        type: l,
        key: w,
        props: M,
        _owner: N
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: h
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
        value: Z
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function p(l, w, M, N, Z, $) {
      var L = w.children;
      if (L !== void 0)
        if (N)
          if (H(L)) {
            for (N = 0; N < L.length; N++)
              m(L[N]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(L);
      if (q.call(w, "key")) {
        L = e(l);
        var W = Object.keys(w).filter(function(V) {
          return V !== "key";
        });
        N = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", b[L + N] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          L,
          W,
          L
        ), b[L + N] = !0);
      }
      if (L = null, M !== void 0 && (o(M), L = "" + M), r(w) && (o(w.key), L = "" + w.key), "key" in w) {
        M = {};
        for (var K in w)
          K !== "key" && (M[K] = w[K]);
      } else M = w;
      return L && s(
        M,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), f(
        l,
        L,
        M,
        i(),
        Z,
        $
      );
    }
    function m(l) {
      d(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === C && (l._payload.status === "fulfilled" ? d(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function d(l) {
      return typeof l == "object" && l !== null && l.$$typeof === S;
    }
    var R = Ge, S = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), D = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), B = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, H = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var ne, F = {}, Y = R.react_stack_bottom_frame.bind(
      R,
      a
    )(), Q = oe(n(a)), b = {};
    Ae.Fragment = O, Ae.jsx = function(l, w, M) {
      var N = 1e4 > B.recentlyCreatedOwnerStacks++;
      return p(
        l,
        w,
        M,
        !1,
        N ? Error("react-stack-top-frame") : Y,
        N ? oe(n(l)) : Q
      );
    }, Ae.jsxs = function(l, w, M) {
      var N = 1e4 > B.recentlyCreatedOwnerStacks++;
      return p(
        l,
        w,
        M,
        !0,
        N ? Error("react-stack-top-frame") : Y,
        N ? oe(n(l)) : Q
      );
    };
  })()), Ae;
}
var _t;
function kn() {
  return _t || (_t = 1, process.env.NODE_ENV === "production" ? Me.exports = Sn() : Me.exports = On()), Me.exports;
}
var u = kn();
const Qe = 100, et = 50, tt = 200, wt = 5, nt = (e) => e < tt, rt = (e) => e > et, Cn = 96, Ne = (e) => Math.round(e * Cn), ze = {
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
}, pe = "NORMAL", Gt = (e = pe) => {
  const t = ze[e] || ze[pe];
  return {
    top: Ne(t.top),
    bottom: Ne(t.bottom),
    left: Ne(t.left),
    right: Ne(t.right)
  };
}, Mn = (e = pe) => {
  const t = Gt(e);
  return t.top + t.bottom;
}, Nn = () => Object.keys(ze), In = (e) => {
  const t = ze[e];
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
}, Ft = "A4", lt = (e) => {
  const t = le[e] || le[Ft];
  return {
    width: t.width,
    height: t.height
  };
}, ca = (e) => Object.keys(le).includes(e), la = () => Object.keys(le), Pe = Ft, Ee = "<p><br></p>", Ln = "continuous", _e = (e, t = Pe) => ({
  id: ct(),
  index: e,
  size: t,
  content: Ee,
  images: [],
  isBreakPoint: !1
}), je = (e) => typeof e != "string" || e.trim() === "" ? Ee : e, Wt = (e, t = Pe) => (e.length > 0 ? e : [_e(0, t)]).map((n, i) => ({
  id: n.id || ct(),
  index: i,
  size: n.size || t,
  content: je(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), jn = (e = Pe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: lt(e).height
}], ot = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || Pe, n = Wt(e.pages || [_e(0, o)], o);
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
    editorMode: e.editorMode || Ln,
    continuousContent: e.continuousContent || Ee,
    pageBoundaries: e.pageBoundaries || jn(o),
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
      const { initialContent: n = Ee, pageSize: i = Pe } = t.payload || {}, a = { ..._e(0, i), content: je(n) };
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
      i.splice(n, 0, _e(n, e.pageSize));
      const a = i.map((s, h) => ({
        ...s,
        index: h,
        size: e.pageSize
      })), r = a.slice(0, -1).map((s, h) => ({
        id: `auto-break-${h}`,
        pageNumber: h + 1
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
      const a = i.map((h, f) => ({
        ...h,
        index: f,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = a.slice(0, -1).map((h, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
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
        const s = r.substring(0, n), h = r.substring(n);
        r = s + a + h;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = r;
        const h = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && h.length === 0)
          r = r + a + "<p><br></p>";
        else if (i < h.length) {
          const f = h[i], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const m = document.createElement("p");
          m.innerHTML = "<br>", f.parentNode.insertBefore(p, f.nextSibling), p.parentNode.insertBefore(m, p.nextSibling), r = s.innerHTML;
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
      return a[n] && a[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, h) => {
        s.setAttribute("data-page-number", String(h + 2));
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
`) || Ee : e.continuousContent && e.continuousContent !== Ee && (a = [{ ..._e(0, e.pageSize), content: e.continuousContent }]), {
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
}, qt = xn(null), ua = ({ children: e, initialState: t = {} }) => {
  const [o, n] = An(at, ot(t)), i = He(() => ({
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
  return /* @__PURE__ */ u.jsx(qt.Provider, { value: a, children: e });
}, Zt = () => {
  const e = vn(qt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Yt = () => {
  const { state: e } = Zt();
  return e;
}, Re = () => {
  const { actions: e } = Zt();
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
var Pt;
function Dn() {
  if (Pt) return ee;
  Pt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function _(c) {
    if (typeof c == "object" && c !== null) {
      var y = c.$$typeof;
      switch (y) {
        case t:
          switch (c = c.type, c) {
            case h:
            case f:
            case n:
            case a:
            case i:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case p:
                case S:
                case R:
                case r:
                  return c;
                default:
                  return y;
              }
          }
        case o:
          return y;
      }
    }
  }
  function D(c) {
    return _(c) === f;
  }
  return ee.AsyncMode = h, ee.ConcurrentMode = f, ee.ContextConsumer = s, ee.ContextProvider = r, ee.Element = t, ee.ForwardRef = p, ee.Fragment = n, ee.Lazy = S, ee.Memo = R, ee.Portal = o, ee.Profiler = a, ee.StrictMode = i, ee.Suspense = m, ee.isAsyncMode = function(c) {
    return D(c) || _(c) === h;
  }, ee.isConcurrentMode = D, ee.isContextConsumer = function(c) {
    return _(c) === s;
  }, ee.isContextProvider = function(c) {
    return _(c) === r;
  }, ee.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, ee.isForwardRef = function(c) {
    return _(c) === p;
  }, ee.isFragment = function(c) {
    return _(c) === n;
  }, ee.isLazy = function(c) {
    return _(c) === S;
  }, ee.isMemo = function(c) {
    return _(c) === R;
  }, ee.isPortal = function(c) {
    return _(c) === o;
  }, ee.isProfiler = function(c) {
    return _(c) === a;
  }, ee.isStrictMode = function(c) {
    return _(c) === i;
  }, ee.isSuspense = function(c) {
    return _(c) === m;
  }, ee.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === f || c === a || c === i || c === m || c === d || typeof c == "object" && c !== null && (c.$$typeof === S || c.$$typeof === R || c.$$typeof === r || c.$$typeof === s || c.$$typeof === p || c.$$typeof === O || c.$$typeof === E || c.$$typeof === A || c.$$typeof === T);
  }, ee.typeOf = _, ee;
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
var Rt;
function Hn() {
  return Rt || (Rt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function _(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === a || k === i || k === m || k === d || typeof k == "object" && k !== null && (k.$$typeof === S || k.$$typeof === R || k.$$typeof === r || k.$$typeof === s || k.$$typeof === p || k.$$typeof === O || k.$$typeof === E || k.$$typeof === A || k.$$typeof === T);
    }
    function D(k) {
      if (typeof k == "object" && k !== null) {
        var ce = k.$$typeof;
        switch (ce) {
          case t:
            var me = k.type;
            switch (me) {
              case h:
              case f:
              case n:
              case a:
              case i:
              case m:
                return me;
              default:
                var xe = me && me.$$typeof;
                switch (xe) {
                  case s:
                  case p:
                  case S:
                  case R:
                  case r:
                    return xe;
                  default:
                    return ce;
                }
            }
          case o:
            return ce;
        }
      }
    }
    var c = h, y = f, g = s, v = r, C = t, z = p, I = n, B = S, q = R, H = o, oe = a, ne = i, F = m, Y = !1;
    function Q(k) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(k) || D(k) === h;
    }
    function b(k) {
      return D(k) === f;
    }
    function l(k) {
      return D(k) === s;
    }
    function w(k) {
      return D(k) === r;
    }
    function M(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function N(k) {
      return D(k) === p;
    }
    function Z(k) {
      return D(k) === n;
    }
    function $(k) {
      return D(k) === S;
    }
    function L(k) {
      return D(k) === R;
    }
    function W(k) {
      return D(k) === o;
    }
    function K(k) {
      return D(k) === a;
    }
    function V(k) {
      return D(k) === i;
    }
    function ae(k) {
      return D(k) === m;
    }
    te.AsyncMode = c, te.ConcurrentMode = y, te.ContextConsumer = g, te.ContextProvider = v, te.Element = C, te.ForwardRef = z, te.Fragment = I, te.Lazy = B, te.Memo = q, te.Portal = H, te.Profiler = oe, te.StrictMode = ne, te.Suspense = F, te.isAsyncMode = Q, te.isConcurrentMode = b, te.isContextConsumer = l, te.isContextProvider = w, te.isElement = M, te.isForwardRef = N, te.isFragment = Z, te.isLazy = $, te.isMemo = L, te.isPortal = W, te.isProfiler = K, te.isStrictMode = V, te.isSuspense = ae, te.isValidElementType = _, te.typeOf = D;
  })()), te;
}
var St;
function Vt() {
  return St || (St = 1, process.env.NODE_ENV === "production" ? Le.exports = Dn() : Le.exports = Hn()), Le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var We, Ot;
function zn() {
  if (Ot) return We;
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
      var h = Object.getOwnPropertyNames(r).map(function(p) {
        return r[p];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return We = i() ? Object.assign : function(a, r) {
    for (var s, h = n(a), f, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var m in s)
        t.call(s, m) && (h[m] = s[m]);
      if (e) {
        f = e(s);
        for (var d = 0; d < f.length; d++)
          o.call(s, f[d]) && (h[f[d]] = s[f[d]]);
      }
    }
    return h;
  }, We;
}
var qe, kt;
function ut() {
  if (kt) return qe;
  kt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qe = e, qe;
}
var Ze, Ct;
function Kt() {
  return Ct || (Ct = 1, Ze = Function.call.bind(Object.prototype.hasOwnProperty)), Ze;
}
var Ye, Mt;
function Bn() {
  if (Mt) return Ye;
  Mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ut(), o = {}, n = /* @__PURE__ */ Kt();
    e = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function i(a, r, s, h, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var m;
          try {
            if (typeof a[p] != "function") {
              var d = Error(
                (h || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            m = a[p](r, p, h, s, null, t);
          } catch (S) {
            m = S;
          }
          if (m && !(m instanceof Error) && e(
            (h || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in o)) {
            o[m.message] = !0;
            var R = f ? f() : "";
            e(
              "Failed " + s + " type: " + m.message + (R ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Ye = i, Ye;
}
var Ve, Nt;
function $n() {
  if (Nt) return Ve;
  Nt = 1;
  var e = Vt(), t = zn(), o = /* @__PURE__ */ ut(), n = /* @__PURE__ */ Kt(), i = /* @__PURE__ */ Bn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var h = "Warning: " + s;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return Ve = function(s, h) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(b) {
      var l = b && (f && b[f] || b[p]);
      if (typeof l == "function")
        return l;
    }
    var d = "<<anonymous>>", R = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: A(),
      arrayOf: _,
      element: D(),
      elementType: c(),
      instanceOf: y,
      node: z(),
      objectOf: v,
      oneOf: g,
      oneOfType: C,
      shape: B,
      exact: q
    };
    function S(b, l) {
      return b === l ? b !== 0 || 1 / b === 1 / l : b !== b && l !== l;
    }
    function T(b, l) {
      this.message = b, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function O(b) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, w = 0;
      function M(Z, $, L, W, K, V, ae) {
        if (W = W || d, V = V || L, ae !== o) {
          if (h) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = W + ":" + L;
            !l[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ce] = !0, w++);
          }
        }
        return $[L] == null ? Z ? $[L] === null ? new T("The " + K + " `" + V + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new T("The " + K + " `" + V + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : b($, L, W, K, V);
      }
      var N = M.bind(null, !1);
      return N.isRequired = M.bind(null, !0), N;
    }
    function E(b) {
      function l(w, M, N, Z, $, L) {
        var W = w[M], K = ne(W);
        if (K !== b) {
          var V = F(W);
          return new T(
            "Invalid " + Z + " `" + $ + "` of type " + ("`" + V + "` supplied to `" + N + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return O(l);
    }
    function A() {
      return O(r);
    }
    function _(b) {
      function l(w, M, N, Z, $) {
        if (typeof b != "function")
          return new T("Property `" + $ + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var L = w[M];
        if (!Array.isArray(L)) {
          var W = ne(L);
          return new T("Invalid " + Z + " `" + $ + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected an array."));
        }
        for (var K = 0; K < L.length; K++) {
          var V = b(L, K, N, Z, $ + "[" + K + "]", o);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return O(l);
    }
    function D() {
      function b(l, w, M, N, Z) {
        var $ = l[w];
        if (!s($)) {
          var L = ne($);
          return new T("Invalid " + N + " `" + Z + "` of type " + ("`" + L + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(b);
    }
    function c() {
      function b(l, w, M, N, Z) {
        var $ = l[w];
        if (!e.isValidElementType($)) {
          var L = ne($);
          return new T("Invalid " + N + " `" + Z + "` of type " + ("`" + L + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(b);
    }
    function y(b) {
      function l(w, M, N, Z, $) {
        if (!(w[M] instanceof b)) {
          var L = b.name || d, W = Q(w[M]);
          return new T("Invalid " + Z + " `" + $ + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return O(l);
    }
    function g(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function l(w, M, N, Z, $) {
        for (var L = w[M], W = 0; W < b.length; W++)
          if (S(L, b[W]))
            return null;
        var K = JSON.stringify(b, function(ae, k) {
          var ce = F(k);
          return ce === "symbol" ? String(k) : k;
        });
        return new T("Invalid " + Z + " `" + $ + "` of value `" + String(L) + "` " + ("supplied to `" + N + "`, expected one of " + K + "."));
      }
      return O(l);
    }
    function v(b) {
      function l(w, M, N, Z, $) {
        if (typeof b != "function")
          return new T("Property `" + $ + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var L = w[M], W = ne(L);
        if (W !== "object")
          return new T("Invalid " + Z + " `" + $ + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected an object."));
        for (var K in L)
          if (n(L, K)) {
            var V = b(L, K, N, Z, $ + "." + K, o);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return O(l);
    }
    function C(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var l = 0; l < b.length; l++) {
        var w = b[l];
        if (typeof w != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(w) + " at index " + l + "."
          ), r;
      }
      function M(N, Z, $, L, W) {
        for (var K = [], V = 0; V < b.length; V++) {
          var ae = b[V], k = ae(N, Z, $, L, W, o);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && K.push(k.data.expectedType);
        }
        var ce = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new T("Invalid " + L + " `" + W + "` supplied to " + ("`" + $ + "`" + ce + "."));
      }
      return O(M);
    }
    function z() {
      function b(l, w, M, N, Z) {
        return H(l[w]) ? null : new T("Invalid " + N + " `" + Z + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return O(b);
    }
    function I(b, l, w, M, N) {
      return new T(
        (b || "React class") + ": " + l + " type `" + w + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function B(b) {
      function l(w, M, N, Z, $) {
        var L = w[M], W = ne(L);
        if (W !== "object")
          return new T("Invalid " + Z + " `" + $ + "` of type `" + W + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var K in b) {
          var V = b[K];
          if (typeof V != "function")
            return I(N, Z, $, K, F(V));
          var ae = V(L, K, N, Z, $ + "." + K, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return O(l);
    }
    function q(b) {
      function l(w, M, N, Z, $) {
        var L = w[M], W = ne(L);
        if (W !== "object")
          return new T("Invalid " + Z + " `" + $ + "` of type `" + W + "` " + ("supplied to `" + N + "`, expected `object`."));
        var K = t({}, w[M], b);
        for (var V in K) {
          var ae = b[V];
          if (n(b, V) && typeof ae != "function")
            return I(N, Z, $, V, F(ae));
          if (!ae)
            return new T(
              "Invalid " + Z + " `" + $ + "` key `" + V + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(w[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var k = ae(L, V, N, Z, $ + "." + V, o);
          if (k)
            return k;
        }
        return null;
      }
      return O(l);
    }
    function H(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(H);
          if (b === null || s(b))
            return !0;
          var l = m(b);
          if (l) {
            var w = l.call(b), M;
            if (l !== b.entries) {
              for (; !(M = w.next()).done; )
                if (!H(M.value))
                  return !1;
            } else
              for (; !(M = w.next()).done; ) {
                var N = M.value;
                if (N && !H(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(b, l) {
      return b === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function ne(b) {
      var l = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : oe(l, b) ? "symbol" : l;
    }
    function F(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var l = ne(b);
      if (l === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function Y(b) {
      var l = F(b);
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
    function Q(b) {
      return !b.constructor || !b.constructor.name ? d : b.constructor.name;
    }
    return R.checkPropTypes = i, R.resetWarningCache = i.resetWarningCache, R.PropTypes = R, R;
  }, Ve;
}
var Ke, It;
function Un() {
  if (It) return Ke;
  It = 1;
  var e = /* @__PURE__ */ ut();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ke = function() {
    function n(r, s, h, f, p, m) {
      if (m !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
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
var Lt;
function Gn() {
  if (Lt) return Ie.exports;
  if (Lt = 1, process.env.NODE_ENV !== "production") {
    var e = Vt(), t = !0;
    Ie.exports = /* @__PURE__ */ $n()(e.isElement, t);
  } else
    Ie.exports = /* @__PURE__ */ Un()();
  return Ie.exports;
}
var Fn = /* @__PURE__ */ Gn();
const x = /* @__PURE__ */ Rn(Fn), Xt = {
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
}, Wn = [
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
], Fe = "16px", qn = (e) => Math.round(e * 96 / 72), Zn = (e) => Math.round(e * 72 / 96 * 2) / 2, da = (e) => {
  const t = Object.values(Xt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${qn(e)}px`;
}, fa = (e) => {
  const t = parseInt(e), o = Object.values(Xt).find((n) => n.px === t);
  return o ? o.pt : Zn(t);
}, pa = (e) => {
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
function ga({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const h = n - t, f = i - o;
  let p = a, m = r;
  switch (e) {
    case P.TOP_LEFT:
      p = Math.max(s.minWidth, a - h), m = Math.max(s.minHeight, r - f);
      break;
    case P.TOP_RIGHT:
      p = Math.max(s.minWidth, a + h), m = Math.max(s.minHeight, r - f);
      break;
    case P.BOTTOM_LEFT:
      p = Math.max(s.minWidth, a - h), m = Math.max(s.minHeight, r + f);
      break;
    case P.BOTTOM_RIGHT:
      p = Math.max(s.minWidth, a + h), m = Math.max(s.minHeight, r + f);
      break;
    case P.TOP:
      m = Math.max(s.minHeight, r - f);
      break;
    case P.BOTTOM:
      m = Math.max(s.minHeight, r + f);
      break;
    case P.LEFT:
      p = Math.max(s.minWidth, a - h);
      break;
    case P.RIGHT:
      p = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: p, height: m };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const d = a / r;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? p / d > m ? m = Math.max(s.minHeight, p / d) : p = Math.max(s.minWidth, m * d) : [P.TOP, P.BOTTOM].includes(e) ? p = m * d : [P.LEFT, P.RIGHT].includes(e) && (m = p / d);
  }
  return s.maxWidth && p > s.maxWidth && (p = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (m = p / (a / r))), s.maxHeight && m > s.maxHeight && (m = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (p = m * (a / r))), p = Math.max(s.minWidth, p), m = Math.max(s.minHeight, m), {
    width: Math.round(p),
    height: Math.round(m)
  };
}
function fe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ha(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ma(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Jt(e, t = ge) {
  if (!fe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(P).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Yn(a), r.style.pointerEvents = "all", Qt(r, a, n.width, n.height), o.appendChild(r);
  }), o;
}
function Yn(e) {
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
function Qt(e, t, o, n) {
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
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case P.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Be(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    Qt(i, a, o.width, o.height);
  });
}
function be(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Vn = {
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
}, jt = {
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
}, Kn = () => {
  const [e, t] = ue(jt), o = Re(), n = G((E) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const _ = A.getRangeAt(0);
      if (!_.toString())
        return t((c) => ({ ...c, fontFamily: E })), !1;
      try {
        const c = document.createElement("span");
        c.style.fontFamily = E;
        const y = _.extractContents();
        return c.appendChild(y), _.insertNode(c), _.selectNodeContents(c), A.removeAllRanges(), A.addRange(_), t((g) => ({ ...g, fontFamily: E })), !0;
      } catch {
        return document.execCommand("fontName", !1, E), t((y) => ({ ...y, fontFamily: E })), !0;
      }
    } catch (A) {
      return console.warn("[useFormatting] Font family change failed:", A), !1;
    }
  }, []), i = G((E) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const _ = A.getRangeAt(0);
      if (!_.toString())
        return t((c) => ({ ...c, fontSize: E })), !1;
      try {
        const c = document.createElement("span");
        c.style.fontSize = E;
        const y = _.extractContents();
        return c.appendChild(y), _.insertNode(c), _.selectNodeContents(c), A.removeAllRanges(), A.addRange(_), t((g) => ({ ...g, fontSize: E })), !0;
      } catch {
        const y = Vn[E] || "3";
        return document.execCommand("fontSize", !1, y), t((g) => ({ ...g, fontSize: E })), !0;
      }
    } catch (A) {
      return console.warn("[useFormatting] Font size change failed:", A), !1;
    }
  }, []), a = G((E) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const _ = A.getRangeAt(0), D = _.toString(), y = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[E];
      if (!y)
        return !1;
      if (!D) {
        const v = _.startContainer, C = v.nodeType === Node.TEXT_NODE ? v.parentElement : v, z = $e(C) || Jn();
        return z && (z.style.textAlign = y, r(y)), !0;
      }
      const g = Xn(_);
      if (g.length === 0) {
        const v = document.createElement("p");
        v.style.textAlign = y;
        const C = _.extractContents();
        v.appendChild(C), _.insertNode(v), _.selectNodeContents(v), A.removeAllRanges(), A.addRange(_);
      } else
        g.forEach((v) => {
          v.style.textAlign = y;
        });
      return r(y), !0;
    } catch (A) {
      return console.warn("[useFormatting] Text alignment failed:", A), !1;
    }
  }, []), r = G((E) => {
    t((A) => ({
      ...A,
      alignLeft: E === "left",
      alignCenter: E === "center",
      alignRight: E === "right",
      alignJustify: E === "justify"
    }));
  }, []), s = G((E, A = null) => {
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
          t((D) => ({ ...D, headingLevel: A }));
          break;
        default:
          break;
      }
    } catch (_) {
      console.warn(`[useFormatting] Error executing command "${E}":`, _);
    }
  }, [i, n, o]), h = re(null), f = re(null), p = re(null), m = re(null), d = re(ge);
  G((E) => {
    if (!fe(E)) return;
    h.current && (be(h.current), h.current = null), E.classList.add("selected");
    const A = Jt(E);
    A && (h.current = A, f.current = E, document.body.appendChild(A), t((_) => ({
      ..._,
      imageSelected: !0,
      preserveAspectRatio: d.current.preserveAspectRatio
    })));
  }, []);
  const R = G(() => {
    f.current && (f.current.classList.remove("selected"), f.current = null), h.current && (be(h.current), h.current = null), p.current = null, m.current = null, t((E) => ({
      ...E,
      imageSelected: !1
    }));
  }, []), S = G(() => {
    const E = !d.current.preserveAspectRatio;
    d.current = {
      ...d.current,
      preserveAspectRatio: E,
      aspectRatio: E
    }, t((A) => ({
      ...A,
      preserveAspectRatio: E
    }));
  }, []);
  G((E, A, _) => {
    f.current && (p.current = {
      x: A,
      y: _,
      width: f.current.offsetWidth,
      height: f.current.offsetHeight
    }, m.current = E, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Qn(E));
  }, []), G((E, A) => {
    if (!f.current || !p.current || !m.current) return;
    const { x: _, y: D, width: c, height: y } = p.current, g = m.current, v = er({
      handler: g,
      startX: _,
      startY: D,
      currentX: E,
      currentY: A,
      startWidth: c,
      startHeight: y,
      options: d.current
    });
    tr(f.current, v), h.current && Be(h.current, f.current);
  }, []), G(() => {
    if (p.current = null, m.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", f.current) {
      const E = new Event("input", { bubbles: !0, cancelable: !0 });
      f.current.dispatchEvent(E);
    }
  }, []);
  const T = G(() => {
    try {
      const E = window.getSelection();
      if (!E || E.rangeCount === 0)
        return;
      const A = E.getRangeAt(0), _ = A.toString();
      let D = Fe, c = "Arial", y = "p", g = "left";
      if (_) {
        const C = A.startContainer, z = C.nodeType === Node.TEXT_NODE ? C.parentElement : C;
        if (z) {
          const I = window.getComputedStyle(z), B = I.fontSize, q = I.fontFamily;
          B && B.endsWith("px") && (D = B), q && q !== "serif" && (c = q.split(",")[0].replace(/['"]/g, "").trim());
          const H = $e(z);
          if (H) {
            const oe = H.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(oe) && (y = oe);
            const F = window.getComputedStyle(H).textAlign;
            ["left", "center", "right", "justify"].includes(F) && (g = F);
          }
        }
      }
      const v = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: g === "left",
        alignCenter: g === "center",
        alignRight: g === "right",
        alignJustify: g === "justify",
        fontFamily: c,
        fontSize: D,
        headingLevel: y
      };
      t((C) => ({
        ...C,
        ...v
      }));
    } catch (E) {
      console.warn("[useFormatting] Error updating format from selection:", E);
    }
  }, []), O = G(() => {
    R(), t(jt);
  }, [R]);
  return ie(() => () => {
    h.current && be(h.current);
  }, []), {
    currentFormat: e,
    formatText: s,
    resetFormat: O,
    updateCurrentFormatFromSelection: T,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: S
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
function Xn(e) {
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
      acceptNode: (h) => {
        const f = h.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(f) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let s = r.nextNode();
  for (; s; )
    e.intersectsNode(s) && t.push(s), s = r.nextNode();
  return t;
}
function Jn() {
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
function Qn(e) {
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
function er({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const h = n - t, f = i - o;
  let p = a, m = r;
  switch (e) {
    case P.TOP_LEFT:
      p = Math.max(s.minWidth, a - h), m = Math.max(s.minHeight, r - f);
      break;
    case P.TOP_RIGHT:
      p = Math.max(s.minWidth, a + h), m = Math.max(s.minHeight, r - f);
      break;
    case P.BOTTOM_LEFT:
      p = Math.max(s.minWidth, a - h), m = Math.max(s.minHeight, r + f);
      break;
    case P.BOTTOM_RIGHT:
      p = Math.max(s.minWidth, a + h), m = Math.max(s.minHeight, r + f);
      break;
    case P.TOP:
      m = Math.max(s.minHeight, r - f);
      break;
    case P.BOTTOM:
      m = Math.max(s.minHeight, r + f);
      break;
    case P.LEFT:
      p = Math.max(s.minWidth, a - h);
      break;
    case P.RIGHT:
      p = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: p, height: m };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const d = a / r;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? p / d > m ? m = Math.max(s.minHeight, p / d) : p = Math.max(s.minWidth, m * d) : [P.TOP, P.BOTTOM].includes(e) ? p = m * d : [P.LEFT, P.RIGHT].includes(e) && (m = p / d);
  }
  return s.maxWidth && p > s.maxWidth && (p = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (m = p / (a / r))), s.maxHeight && m > s.maxHeight && (m = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (p = m * (a / r))), p = Math.max(s.minWidth, p), m = Math.max(s.minHeight, m), {
    width: Math.round(p),
    height: Math.round(m)
  };
}
function tr(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const Te = 'page-break, [data-page-break="true"]', en = (e) => le[e] || le.A4, nr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = en(o), i = e.querySelectorAll(Te), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((h, f) => {
    const m = h.getBoundingClientRect().top - r.top + s;
    a.push({
      id: `page-${f + 1}`,
      pageNumber: f + 2,
      top: m,
      height: n.height
    });
  }), a;
}, tn = (e, t = 100, o = pe) => {
  const n = en(e), i = Mn(o), a = n.height - i, r = t / 100;
  return a / r;
}, rr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(Te);
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
}, Dt = (e) => {
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
}, or = (e) => {
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
}, ar = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, ir = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  try {
    const h = tn(o, n, i) * (t - 1), f = Array.from(e.children);
    let p = 0, m = null;
    for (let d = 0; d < f.length; d++) {
      const R = f[d];
      if (R.tagName === "PAGE-BREAK" || R.getAttribute("data-page-break") === "true")
        continue;
      const S = or(R);
      if (p + S > h) {
        m = R;
        break;
      }
      p += S;
    }
    if (m) {
      const d = document.createElement("page-break");
      if (d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), m.parentNode.insertBefore(d, m), a) {
        const R = e.innerHTML;
        a(R);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const d = document.createElement("page-break");
      d.setAttribute("data-page-break", "true"), d.setAttribute("contenteditable", "false"), d.setAttribute("data-page-number", String(t)), e.appendChild(d);
      const R = document.createElement("p");
      if (R.innerHTML = "<br>", e.appendChild(R), a) {
        const S = e.innerHTML;
        a(S);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, sr = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const h = Array.from(e.querySelectorAll(Te));
    if (t > h.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const f = window.getSelection();
    let p = !1, m = [], d = null;
    if (t === 0) {
      const S = h[0];
      if (!S)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let T = e.firstChild;
      for (; T && T !== S; )
        m.push(T), T = T.nextSibling;
      d = S;
    } else {
      const S = h[t - 1];
      if (!S)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const T = h[t];
      let O = S.nextSibling;
      for (; O && O !== T; )
        m.push(O), O = O.nextSibling;
      d = S;
    }
    if (f && f.rangeCount > 0) {
      const T = f.getRangeAt(0).startContainer;
      for (const O of m)
        if (O.contains(T) || O === T) {
          p = !0;
          break;
        }
    }
    if (d && d.parentNode && d.remove(), m.forEach((S) => {
      S.parentNode && S.remove();
    }), e.querySelectorAll(Te).forEach((S, T) => {
      S.setAttribute("data-page-number", String(T + 2));
    }), p && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const S = e.innerHTML;
      n(S);
    }
    return i && setTimeout(() => {
      i(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (h) {
    return console.error("[removePageAndContent] Failed to remove page:", h), !1;
  }
}, cr = 200, lr = 50, Ht = 3, ur = 20, nn = (e) => {
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
}, dr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = nn(a);
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
}, fr = (e, t, o, n, i, a, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const h = tn(t, o, n);
    let f = Dt(e), p = !1, m = 0;
    for (let d = 0; d < f.length && m < Ht; d++) {
      const R = f[d], S = dr(R, h);
      if (S && S.overflowIndex > 0) {
        let T = 0;
        for (let _ = 0; _ < R.length; _++) {
          const D = R[_];
          D && D.getBoundingClientRect && (T += nn(D));
        }
        if (T - h < ur)
          continue;
        const E = d + 2;
        ar(S.overflowElement, E) && (p = !0, m++, f = Dt(e));
      }
    }
    if (p) {
      if (i) {
        const d = e.innerHTML;
        i(d);
      }
      setTimeout(() => {
        a && a(), m >= Ht && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, lr);
    }
    return p;
  } catch (h) {
    return console.warn("[checkAndReflow] Reflow failed:", h), !1;
  } finally {
    r.current = !1;
  }
}, pr = (e, t, o = cr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, gr = 400, rn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let o = null, n = 0;
      if (t === 0)
        o = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(Te)[t - 1];
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
}, hr = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (o === 0)
      i = t;
    else {
      const r = t.querySelectorAll(Te)[o - 1];
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
        n ? n(o) : rn(t, o);
      }, gr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, mr = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, yr = 300, Er = (e, t, o = 100, n = "NARROW") => {
  const i = Re(), a = re(null), r = re(null), s = re(e), h = re(o), f = re(n), p = re(!1);
  ie(() => {
    s.current = e;
  }, [e]), ie(() => {
    h.current = o;
  }, [o]), ie(() => {
    f.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const m = G((c = {}) => t?.current ? nr(t.current, c) : [], [t]), d = G((c = {}) => {
    const y = m(c);
    return i.updatePageBoundaries(y), y;
  }, [m, i]), R = G(async (c) => {
    if (!t?.current)
      return !1;
    const y = s.current || "A4", g = h.current || 100, v = f.current || "NARROW";
    return ir(
      t.current,
      c,
      y,
      g,
      v,
      i.updateContinuousContent,
      d
    );
  }, [t, i, d]), S = G(() => {
    if (!t?.current)
      return;
    const c = s.current || "A4", y = h.current || 100, g = f.current || "NARROW";
    fr(
      t.current,
      c,
      y,
      g,
      i.updateContinuousContent,
      d,
      p,
      S
    );
  }, [t, i, d]), T = G((c) => {
    pr(S, r, c);
  }, [S]), O = G((c = {}) => {
    const y = typeof c.delay == "number" ? c.delay : yr;
    mr(d, a, c, y);
  }, [d]), E = G((c) => !c?.current || !t?.current ? 0 : rr(c.current, t.current), [t]), A = G((c) => {
    t?.current && rn(t.current, c);
  }, [t]), _ = G((c, y) => {
    if (!y?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    hr(y.current, t.current, c, A);
  }, [t, A]), D = G((c) => t?.current ? sr(
    t.current,
    c,
    m,
    i.updateContinuousContent,
    d,
    A,
    S
  ) : !1, [t, m, i, d, A, S]);
  return {
    calculatePageBoundaries: m,
    checkAndUpdateBoundaries: O,
    updateBoundaries: d,
    getCurrentPage: E,
    scrollToPage: _,
    positionCursorAtPage: A,
    checkAndReflow: S,
    triggerAutoReflow: T,
    removePageAndContent: D,
    insertPageBreakAtBoundary: R,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, br = "html-editor-storage", Tr = 1, de = "images";
function xr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Se() {
  return new Promise((e, t) => {
    const o = indexedDB.open(br, Tr);
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
function vr(e) {
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
      const r = a.target.result, h = r.split(",")[1].length * 3 / 4;
      if (h > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const f = await Se(), p = `editor-image-${xr()}`, d = f.transaction([de], "readwrite").objectStore(de), R = {
          key: p,
          dataUrl: r,
          size: h,
          type: e.type,
          timestamp: Date.now()
        }, S = d.add(R);
        S.onsuccess = () => {
          f.close(), t(p);
        }, S.onerror = () => {
          f.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (f) {
        o(f);
      }
    }, i.onerror = () => {
      o(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function Ar(e) {
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
async function _r(e) {
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
async function ya() {
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
async function Ea() {
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
const wr = [
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
], Pr = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function Rr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function on(e) {
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
  return o.innerHTML = t, we(o) || "<p><br></p>";
}
function Sr(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function we(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const a = i.textContent.trim();
      a && t.push(`<p>${Rr(a)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const a = i, r = a.tagName, s = r.toLowerCase(), h = on(a);
      if (r === "DIV") {
        const f = we(a);
        f.trim() ? t.push(f) : t.push("<p><br></p>");
      } else if (r === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(r)) {
        const f = Sr(a);
        t.push(`<${s}${h}>${f}</${s}>`);
      } else if (r === "BR")
        t.push("<p><br></p>");
      else if (r === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(r))
        t.push(Or(a));
      else if (r === "LI")
        t.push(a.outerHTML);
      else if (r === "TABLE")
        t.push(kr(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(r))
        t.push(a.outerHTML);
      else if (r === "BLOCKQUOTE") {
        const f = we(a);
        t.push(`<blockquote${h}>${f}</blockquote>`);
      } else if (r === "PRE")
        t.push(a.outerHTML);
      else if (wr.includes(r))
        t.push(a.outerHTML);
      else if (r === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (r === "HR")
        t.push(a.outerHTML);
      else if (r === "FIGURE")
        t.push(a.outerHTML);
      else if (Pr.includes(r))
        t.push(a.outerHTML);
      else {
        const f = we(a);
        t.push(`<${s}${h}>${f}</${s}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Or(e) {
  const t = e.tagName.toLowerCase(), o = on(e), n = [];
  return Array.from(e.children).forEach((i) => {
    if (i.tagName === "LI")
      n.push(i.outerHTML);
    else {
      const a = we(i);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${o}><li><br></li></${t}>` : `<${t}${o}>${n.join("")}</${t}>`;
}
function kr(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), zt = (e) => {
  const t = Mr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, an = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), Nr = (e) => {
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
var Ir = {
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
const Lr = st(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: r,
    ...s
  }, h) => Je(
    "svg",
    {
      ref: h,
      ...Ir,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: an("lucide", i),
      ...!a && !Nr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([f, p]) => Je(f, p)),
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
    ({ className: n, ...i }, a) => Je(Lr, {
      ref: a,
      iconNode: t,
      className: an(
        `lucide-${Cr(zt(e))}`,
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
const jr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Dr = X("bold", jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], zr = X("chevron-left", Hr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], $r = X("chevron-right", Br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Gr = X("file-check", Ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ue = X("file-text", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], qr = X("hash", Wr);
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
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Yr = X("heading-1", Zr);
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
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Kr = X("heading-2", Vr);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Jr = X("heading-3", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], eo = X("image-upscale", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], no = X("image", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], oo = X("italic", ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], io = X("link", ao);
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
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], co = X("list-indent-decrease", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], uo = X("list-indent-increase", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], po = X("list-ordered", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], sn = X("list", go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], mo = X("plus", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Eo = X("redo", yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], To = X("scaling", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], vo = X("settings", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], _o = X("strikethrough", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Po = X("table", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], cn = X("text-align-center", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], ln = X("text-align-end", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], ko = X("text-align-justify", Oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], un = X("text-align-start", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], No = X("trash-2", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Lo = X("underline", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Do = X("undo", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], zo = X("x", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], $o = X("zoom-in", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Go = X("zoom-out", Uo), Fo = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: i }) => {
  const a = Yt(), { pages: r, activePage: s, continuousContent: h, editorMode: f } = a, [p, m] = ue(0), [d, R] = ue([]);
  ie(() => {
    if (n !== void 0 && i !== void 0) {
      if (m(n), h) {
        const E = document.createElement("div");
        E.innerHTML = h;
        const A = E.querySelectorAll("h1, h2, h3, h4, h5, h6"), _ = Array.from(A).map((D, c) => {
          const y = parseInt(D.tagName.charAt(1)), g = D.textContent.trim();
          return g ? {
            id: `heading-${c}`,
            level: y,
            text: g,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        R(_);
      }
      return;
    }
    let T = 0;
    const O = [];
    r.forEach((E, A) => {
      if (E.content) {
        const _ = document.createElement("div");
        _.innerHTML = E.content;
        const c = (_.textContent || _.innerText || "").trim().split(/\s+/).filter((g) => g.length > 0);
        T += c.length, _.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((g, v) => {
          const C = parseInt(g.tagName.charAt(1)), z = g.textContent.trim();
          z && O.push({
            id: `heading-${A}-${v}`,
            level: C,
            text: z,
            page: A + 1
          });
        });
      }
    }), m(T), R(O);
  }, [r, n, i, h]);
  const S = i !== void 0 ? i : r.length;
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
            /* @__PURE__ */ u.jsx(Ue, { size: 18 }),
            /* @__PURE__ */ u.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ u.jsx($r, { size: 16 }) : /* @__PURE__ */ u.jsx(zr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Gr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: S })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(qr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Ue, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          d.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsxs("h3", { children: [
              /* @__PURE__ */ u.jsx(sn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "document-outline", "data-testid": "outline", children: d.map((T) => {
              const O = T.level === 1 ? Yr : T.level === 2 ? Kr : Jr;
              return /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${T.level}`,
                  style: { marginLeft: `${(T.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ u.jsx(O, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ u.jsx("span", { className: "outline-text", children: T.text }),
                    /* @__PURE__ */ u.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      T.page
                    ] })
                  ]
                },
                T.id
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
class Wo {
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
const Bt = new Wo("Editor"), dn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), fn = 32;
function pn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const o = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? o - 1 : o + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * fn}px`, e.dataset.indentLevel = String(n));
}
function qo(e, t) {
  pn(e, t);
}
function Zo(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && dn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Yo() {
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
      let f = s.parentElement;
      for (; f && f !== n; ) {
        if (f.tagName && dn.has(f.tagName.toUpperCase())) {
          o.add(f);
          break;
        }
        f = f.parentElement;
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
function Vo(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), o = Math.max(0, t - 1);
    o === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${o * fn}px`, e.dataset.indentLevel = String(o));
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
  let o = Yo();
  const n = t.getRangeAt(0);
  if (o.length === 0) {
    const r = Zo(n.startContainer);
    if (!r) return !1;
    o = [r];
  }
  const i = o[0], a = o[o.length - 1];
  o.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      qo(r, e);
      return;
    }
    e ? Vo(r) : pn(r, !1);
  });
  try {
    const r = document.createRange(), s = (m) => m.nodeType === Node.TEXT_NODE ? m : document.createTreeWalker(
      m,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), h = (m) => {
      if (m.nodeType === Node.TEXT_NODE)
        return m;
      const d = document.createTreeWalker(
        m,
        NodeFilter.SHOW_TEXT,
        null
      );
      let R = null, S = d.nextNode();
      for (; S; )
        R = S, S = d.nextNode();
      return R;
    }, f = s(i);
    f ? r.setStart(f, 0) : r.setStart(i, 0);
    const p = h(a);
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
function Ko(e) {
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
      const h = await vr(r), f = await Ar(h);
      if (f) {
        const m = `<img src="${f}" data-key="${h}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, m), Bt.info("Image inserted", { key: h });
      }
      const p = document.getElementById("image-upload");
      p && (p.value = "");
    } catch (s) {
      Bt.error("Error uploading image", s);
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
        children: /* @__PURE__ */ u.jsx(Do, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ u.jsx(Eo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ u.jsx(Dr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ u.jsx(oo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ u.jsx(Lo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ u.jsx(_o, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ u.jsx(un, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ u.jsx(cn, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ u.jsx(ln, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ u.jsx(ko, { size: 16 })
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
        value: e.fontSize || Fe,
        title: "Font Size",
        children: Wn.map(({ value: r, label: s }) => /* @__PURE__ */ u.jsx("option", { value: r, children: s }, r))
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
        children: /* @__PURE__ */ u.jsx(sn, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ u.jsx(po, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          it(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ u.jsx(uo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          it(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ u.jsx(co, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(io, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ u.jsx(Po, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ u.jsx(Ue, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(no, { size: 16 })
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
function Xo(e) {
  return !e || typeof e != "string" ? e : De(e);
}
function Jo(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let o = t.getData("text/html") || t.getData("text/plain");
  return o ? (t.getData("text/html") ? o = Xo(o) : o = Qo(o), document.execCommand("insertHTML", !1, o), o) : null;
}
function Qo(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((o) => o.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((o) => {
    const n = o.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => ea(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function ea(e) {
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
  onClick: h,
  onScroll: f,
  onPaste: p,
  zoomLevel: m = 100,
  pageMargins: d = pe
}) => {
  const R = Gt(d), S = m / 100, T = (c, y) => {
    if (!c) return !1;
    const g = c.getBoundingClientRect(), v = y - g.top;
    return v < R.top || v > g.height - R.bottom;
  }, O = (c) => c ? c.nodeType === Node.ELEMENT_NODE ? c.tagName === "PAGE-BREAK" || c.getAttribute("data-page-break") === "true" : c.parentElement && O(c.parentElement) : !1, E = (c) => {
    const y = window.getSelection();
    if (!y || y.rangeCount === 0) return;
    const g = y.getRangeAt(0), { startContainer: v, endContainer: C } = g;
    if ((O(v) || O(C)) && (c.key.length === 1 || c.key === "Enter" || c.key === " "))
      return c.preventDefault(), !1;
    if (Ko(c))
      return r && r(), !1;
    if ((c.key === "Backspace" || c.key === "Delete") && (O(v) || O(C)))
      return c.preventDefault(), !1;
    s && s(c);
  }, A = (c) => {
    if (!i.current) return;
    const y = c.target;
    if (O(y)) {
      c.preventDefault();
      return;
    }
    if (T(i.current, c.clientY)) {
      c.preventDefault();
      const g = i.current.getBoundingClientRect();
      if (c.clientY - g.top < R.top) {
        const C = i.current.firstElementChild;
        if (C && C.tagName !== "PAGE-BREAK") {
          const z = document.createRange(), I = window.getSelection();
          z.setStart(C, 0), z.collapse(!0), I.removeAllRanges(), I.addRange(z);
        }
      } else {
        const C = i.current.lastElementChild;
        if (C && C.tagName !== "PAGE-BREAK") {
          const z = document.createRange(), I = window.getSelection();
          z.selectNodeContents(C), z.collapse(!1), I.removeAllRanges(), I.addRange(z);
        }
      }
      return;
    }
    h && h(c);
  }, _ = (c) => {
    const y = window.getSelection();
    if (!y || y.rangeCount === 0) return;
    const g = y.getRangeAt(0), { startContainer: v } = g;
    if (O(v))
      return c.preventDefault(), !1;
  }, D = (c) => {
    const y = Jo(c);
    p && p(c, y);
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
        transform: `scale(${S})`,
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
            padding: `${R.top}px ${R.right}px ${R.bottom}px ${R.left}px`,
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
          onKeyDown: E,
          onBeforeInput: _,
          onClick: A,
          onScroll: f,
          onPaste: D,
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
  onAddPage: h,
  onDeletePage: f,
  onPageSizeChange: p,
  onPageMarginsChange: m,
  onZoomIn: d,
  onZoomOut: R,
  onZoomReset: S
} = {}) => {
  const T = Math.max(e?.length || 0, 1), O = (c) => {
    s && s(c);
  }, E = () => {
    h && h();
  }, A = (c) => {
    if (T <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    f && f(c);
  }, _ = (c) => {
    p && p(c);
  }, D = (c) => {
    m && m(c);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ u.jsx(vo, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (c) => _(c.target.value),
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
              onChange: (c) => D(c.target.value),
              children: Nn().map((c) => /* @__PURE__ */ u.jsx("option", { value: c, children: In(c) }, c))
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
          onClick: R,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ u.jsx(Go, { size: 12 })
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
          onClick: d,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ u.jsx($o, { size: 12 })
        }
      ),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: S,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((c, y) => /* @__PURE__ */ u.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ u.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${y === t ? "active" : ""}`,
          onClick: () => O(y),
          "aria-label": `Go to page ${y + 1}`,
          "aria-current": y === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ u.jsx(Ue, { size: 14 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              "Page ",
              y + 1
            ] })
          ]
        }
      ),
      T > 1 && /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (g) => {
            g.stopPropagation(), A(y);
          },
          "aria-label": `Delete page ${y + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ u.jsx(zo, { size: 14 })
        }
      )
    ] }, c.id || `page-${y}`)) }),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: E,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ u.jsx(mo, { size: 16 }),
          /* @__PURE__ */ u.jsx("span", { children: "Add Page" })
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
const ta = Ge.memo(pt), gt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: i = ge
}) => {
  const a = re(null), r = re(null), s = re(null), h = re(null), f = re(i), p = re(!1), m = Re();
  ie(() => {
    f.current = i;
  }, [i]);
  const d = G((g) => {
    if (!fe(g)) return;
    a.current && (be(a.current), a.current = null), g.classList.add("selected");
    const v = Jt(g, f.current);
    v && (a.current = v, r.current = g, document.body.appendChild(v), v.querySelectorAll(".resize-handler").forEach((z) => {
      z.addEventListener("mousedown", S);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(g)));
  }, [o]), R = G(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (be(a.current), a.current = null), s.current = null, h.current = null, p.current = !1, n && n();
  }, [n]), S = G((g) => {
    if (g.preventDefault(), g.stopPropagation(), !r.current) return;
    const v = g.currentTarget.dataset.handler, C = r.current.getBoundingClientRect(), z = window.pageYOffset || document.documentElement.scrollTop, I = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: g.clientX,
      y: g.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: g.clientX - C.left - I,
      offsetY: g.clientY - C.top - z
    }, h.current = v, p.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = D(v), document.addEventListener("mousemove", T), document.addEventListener("mouseup", O);
  }, []), T = G((g) => {
    if (!p.current || !r.current || !s.current || !h.current) return;
    g.preventDefault(), g.stopPropagation();
    const { x: v, y: C, width: z, height: I } = s.current, B = h.current, q = g.clientX, H = g.clientY, oe = c({
      handler: B,
      startX: v,
      startY: C,
      currentX: q,
      currentY: H,
      startWidth: z,
      startHeight: I,
      options: f.current
    });
    y(r.current, oe), a.current && Be(a.current, r.current);
  }, []), O = G((g) => {
    if (p.current) {
      if (g.preventDefault(), g.stopPropagation(), r.current && s.current) {
        const v = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, C = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (v.width !== C.width || v.height !== C.height) && m.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: C } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: v } }
        );
      }
      if (s.current = null, h.current = null, p.current = !1, document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", O), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const v = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(v), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, m]), E = G((g) => {
    a.current && !a.current.contains(g.target) && R();
    const v = g.target;
    if (fe(v)) {
      if (v === r.current)
        return;
      d(v);
    } else
      console.log("Clicked on non-image element");
  }, [d, R]), A = G((g) => {
    if ((g.key === "Delete" || g.key === "Backspace") && r.current && !p.current) {
      g.preventDefault();
      const v = r.current;
      if (v.parentNode) {
        v.parentNode.removeChild(v), R();
        const C = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(C);
      }
    }
    if (g.key === "Escape" && r.current && R(), r.current && !p.current) {
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === ">") {
        g.preventDefault();
        const v = r.current.offsetWidth, C = Math.min(f.current.maxWidth || 800, v + 10);
        y(r.current, { width: C, height: r.current.offsetHeight });
        const z = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(z);
      }
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === "<") {
        g.preventDefault();
        const v = r.current.offsetWidth, C = Math.max(f.current.minWidth || 50, v - 10);
        y(r.current, { width: C, height: r.current.offsetHeight });
        const z = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(z);
      }
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === "+") {
        g.preventDefault();
        const v = r.current.offsetHeight, C = Math.min(f.current.maxHeight || 600, v + 10);
        y(r.current, { width: r.current.offsetWidth, height: C });
        const z = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(z);
      }
      if ((g.ctrlKey || g.metaKey) && g.shiftKey && g.key === "-") {
        g.preventDefault();
        const v = r.current.offsetHeight, C = Math.max(f.current.minHeight || 50, v - 10);
        y(r.current, { width: r.current.offsetWidth, height: C });
        const z = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(z);
      }
      if ((g.ctrlKey || g.metaKey) && g.key === "r") {
        g.preventDefault(), y(r.current, { width: 300, height: 200 });
        const v = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(v);
      }
    }
  }, [e, R]), _ = G(() => {
    a.current && r.current && Be(a.current, r.current);
  }, []);
  ie(() => {
    if (!e.current) return;
    const v = e.current.closest(".editor-viewport");
    return v && (v.addEventListener("scroll", _), window.addEventListener("scroll", _)), () => {
      v && v.removeEventListener("scroll", _), window.removeEventListener("scroll", _);
    };
  }, [e, _]), ie(() => {
    if (!e.current) return;
    const g = e.current;
    g.addEventListener("click", E), g.addEventListener("keydown", A);
    const v = g.closest(".editor-viewport");
    return v && v.addEventListener("scroll", _), window.addEventListener("resize", _), () => {
      g.removeEventListener("click", E), g.removeEventListener("keydown", A), v && v.removeEventListener("scroll", _), window.removeEventListener("resize", _), p.current && (document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", O), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && be(a.current);
    };
  }, [e, E, A, _, T, O]), ie(() => {
    if (!e.current) return;
    const g = new MutationObserver((v) => {
      v.forEach((C) => {
        C.type === "childList" && (C.removedNodes.length > 0 && C.removedNodes.forEach((z) => {
          z.nodeType === Node.ELEMENT_NODE && fe(z) && z === r.current && R();
        }), C.addedNodes.length > 0 && C.addedNodes.forEach((z) => {
          if (z.nodeType === Node.ELEMENT_NODE)
            if (fe(z))
              setTimeout(() => {
                d(z);
              }, 50);
            else {
              const I = z.querySelectorAll ? z.querySelectorAll("img") : [];
              I.length > 0 && setTimeout(() => {
                d(I[0]);
              }, 50);
            }
        }));
      });
    });
    return g.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      g.disconnect();
    };
  }, [e, R, d]);
  function D(g) {
    switch (g) {
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
  function c({
    handler: g,
    startX: v,
    startY: C,
    currentX: z,
    currentY: I,
    startWidth: B,
    startHeight: q,
    options: H = ge
  }) {
    const oe = z - v, ne = I - C;
    let F = B, Y = q;
    switch (g) {
      case P.TOP_LEFT:
        F = Math.max(H.minWidth, B - oe), Y = Math.max(H.minHeight, q - ne);
        break;
      case P.TOP_RIGHT:
        F = Math.max(H.minWidth, B + oe), Y = Math.max(H.minHeight, q - ne);
        break;
      case P.BOTTOM_LEFT:
        F = Math.max(H.minWidth, B - oe), Y = Math.max(H.minHeight, q + ne);
        break;
      case P.BOTTOM_RIGHT:
        F = Math.max(H.minWidth, B + oe), Y = Math.max(H.minHeight, q + ne);
        break;
      case P.TOP:
        Y = Math.max(H.minHeight, q - ne);
        break;
      case P.BOTTOM:
        Y = Math.max(H.minHeight, q + ne);
        break;
      case P.LEFT:
        F = Math.max(H.minWidth, B - oe);
        break;
      case P.RIGHT:
        F = Math.max(H.minWidth, B + oe);
        break;
      default:
        return { width: F, height: Y };
    }
    if (H.preserveAspectRatio && H.aspectRatio) {
      const Q = B / q;
      [
        P.TOP_LEFT,
        P.TOP_RIGHT,
        P.BOTTOM_LEFT,
        P.BOTTOM_RIGHT
      ].includes(g) ? F / Q > Y ? Y = Math.max(H.minHeight, F / Q) : F = Math.max(H.minWidth, Y * Q) : [P.TOP, P.BOTTOM].includes(g) ? F = Y * Q : [P.LEFT, P.RIGHT].includes(g) && (Y = F / Q);
    }
    return H.maxWidth && F > H.maxWidth && (F = H.maxWidth, H.preserveAspectRatio && H.aspectRatio && (Y = F / (B / q))), H.maxHeight && Y > H.maxHeight && (Y = H.maxHeight, H.preserveAspectRatio && H.aspectRatio && (F = Y * (B / q))), F = Math.max(H.minWidth, F), Y = Math.max(H.minHeight, Y), {
      width: Math.round(F),
      height: Math.round(Y)
    };
  }
  function y(g, { width: v, height: C }) {
    fe(g) && (g.tagName === "IMG" ? (g.style.width = `${v}px`, g.style.height = `${C}px`, g.width = v, g.height = C) : g.tagName === "DIV" && (g.style.width = `${v}px`, g.style.height = `${C}px`));
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
  const [r, s] = ue({ top: 0, left: 0 }), [h, f] = ue(!1), [p, m] = ue("top"), [d, R] = ue(a), S = re(null), T = re(null), O = Re(), E = (I) => {
    if (!I)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (q) => setTimeout(q, 16))(() => {
      const q = document.querySelector(".image-resize-overlay");
      q && Be(q, I);
    });
  }, A = (I) => {
    if (!I) return null;
    const B = window.getComputedStyle(I);
    return {
      float: B.float || "none",
      margin: I.style.margin || "",
      display: B.display || "inline",
      width: I.style.width || I.width || "",
      height: I.style.height || I.height || "",
      aspectRatio: d
    };
  }, _ = () => {
    if (!e) return "left";
    const I = window.getComputedStyle(e);
    return I.float || I.display === "block" ? "left" : I.display === "flex" && I.justifyContent === "center" ? "center" : I.float === "right" ? "right" : "left";
  }, [D, c] = ue(_());
  ie(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ie(() => {
    if (e) {
      let I = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      I && (T.current = I);
    }
  }, [e]), _n(() => {
    if (!e || !S.current) return;
    const I = () => {
      const q = e.getBoundingClientRect(), H = S.current.getBoundingClientRect();
      T.current;
      const oe = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, ne = q.bottom >= 0 && q.top <= oe.height && q.right >= 0 && q.left <= oe.width;
      let F = "top", Y = 0, Q = 0;
      if (ne) {
        const N = q.top - H.height - 10, Z = oe.height - q.bottom - H.height - 10;
        Z > N && Z > 0 ? (F = "bottom", Y = q.bottom + 10) : (F = "top", Y = q.top - H.height - 10);
      } else
        F = "top", Y = 10;
      Q = q.left + q.width / 2 - H.width / 2;
      const b = window.innerWidth, l = window.innerHeight;
      let w = Q, M = Y;
      Q < 10 ? w = 10 : Q + H.width > b - 10 && (w = b - H.width - 10), Y < 10 ? M = 10 : Y + H.height > l - 10 && (M = l - H.height - 10), s({
        top: M,
        left: w
      }), m(F), f(!0);
    };
    I();
    const B = () => {
      I();
    };
    return T.current && T.current.addEventListener("scroll", B), window.addEventListener("scroll", B), window.addEventListener("resize", B), () => {
      T.current && T.current.removeEventListener("scroll", B), window.removeEventListener("scroll", B), window.removeEventListener("resize", B), f(!1);
    };
  }, [e]), ie(() => {
    const I = (B) => {
      S.current && !S.current.contains(B.target) && B.target !== e && i();
    };
    return document.addEventListener("mousedown", I), () => {
      document.removeEventListener("mousedown", I);
    };
  }, [e, i]);
  const y = () => {
    if (e) {
      const I = A(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", c("left"), E(e);
      const B = A(e);
      O.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: B } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: _(), state: I } }
      ), t && t("left");
    }
  }, g = () => {
    if (e) {
      const I = A(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", c("center"), E(e);
      const B = A(e);
      O.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: B } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: _(), state: I } }
      ), t && t("center");
    }
  }, v = () => {
    if (e) {
      const I = A(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", c("right"), E(e);
      const B = A(e);
      O.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: B } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: _(), state: I } }
      ), t && t("right");
    }
  }, C = () => {
    if (e && e.parentNode) {
      const I = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      O.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: I } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, z = () => {
    const I = d, B = !d;
    R(B), O.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: B } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: I } }
    ), o && o(B);
  };
  return !e || typeof document > "u" ? null : Pn(
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: S,
        className: "image-tooltip-menu",
        "data-menu-position": p,
        "aria-hidden": !h,
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
          pointerEvents: h ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: h ? 1 : 0,
          visibility: h ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${d ? "" : "active"}`,
              onClick: z,
              title: `Toggle aspect ratio preservation (currently ${d ? "ON" : "OFF"})`,
              children: d ? /* @__PURE__ */ u.jsx(To, { size: 14 }) : /* @__PURE__ */ u.jsx(eo, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${D === "left" ? "active" : ""}`,
              onClick: y,
              title: "Align Left",
              style: {
                background: D === "left" ? "#007bff" : "transparent",
                color: D === "left" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ u.jsx(un, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${D === "center" ? "active" : ""}`,
              onClick: g,
              title: "Align Center",
              style: {
                background: D === "center" ? "#007bff" : "transparent",
                color: D === "center" ? "#fff" : "#333",
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
              className: `tooltip-button ${D === "right" ? "active" : ""}`,
              onClick: v,
              title: "Align Right",
              style: {
                background: D === "right" ? "#007bff" : "transparent",
                color: D === "right" ? "#fff" : "#333",
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
              className: "tooltip-button delete-button",
              onClick: C,
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
              children: /* @__PURE__ */ u.jsx(No, { size: 14 })
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
const na = 50, Xe = 50, $t = 50, ra = 100, oa = 500, Ut = "UPDATE_CONTINUOUS_CONTENT", mt = st(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: h = !0,
  showPageManager: f = !0
}, p) => {
  const m = Yt(), d = Re(), { pageSize: R, pageMargins: S, continuousContent: T, pageBoundaries: O, activePage: E, zoomLevel: A, canUndo: _, canRedo: D } = m, c = re(null), y = re(null), { currentFormat: g, formatText: v, updateCurrentFormatFromSelection: C } = Kn(), [z, I] = ue(!1), [B, q] = ue(null), [H, oe] = ue(!0), {
    checkAndUpdateBoundaries: ne,
    getCurrentPage: F,
    scrollToPage: Y,
    updateBoundaries: Q,
    triggerAutoReflow: b,
    removePageAndContent: l,
    insertPageBreakAtBoundary: w
  } = Er(R, y, A, S), M = He(() => lt(R), [R]), [N, Z] = ue(!1), $ = re(null), L = re(!1), W = re(!1), K = re(!1), V = re(T);
  ie(() => {
    if (y.current) {
      if (!K.current) {
        y.current.innerHTML = T, K.current = !0, V.current = T;
        const j = setTimeout(() => {
          Q();
        }, na);
        return () => clearTimeout(j);
      }
      if (V.current !== T) {
        if (y.current.innerHTML !== T) {
          y.current.innerHTML = T;
          const J = setTimeout(() => {
            if (Q(), L.current) {
              L.current = !1;
              const se = Math.max(0, O.length - 1);
              d.setActivePage(se), setTimeout(() => {
                Y(se, c);
              }, $t);
            }
          }, Xe);
          return V.current = T, () => clearTimeout(J);
        }
        V.current = T;
      }
    }
  }, [T, Q, O.length, d, Y]), ie(() => {
    r && K.current && r(T);
  }, [T, r]), wn(p, () => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => y.current ? y.current.innerHTML : T,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (y.current ? y.current.innerHTML : T).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (j) => {
      const J = De(j);
      J !== T && d.updateContinuousContent(J), y.current && y.current.innerHTML !== J && (y.current.innerHTML = J), V.current = J, y.current && setTimeout(() => {
        Q();
      }, Xe);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * @param {string} html - HTML content to insert
     */
    insertContent: (j) => {
      if (!y.current || !j) return;
      const J = De(j), se = window.getSelection();
      if (se && se.rangeCount > 0) {
        const ye = se.getRangeAt(0);
        if (y.current.contains(ye.commonAncestorContainer)) {
          document.execCommand("insertHTML", !1, J);
          const he = y.current.innerHTML;
          d.updateContinuousContent(he), V.current = he, setTimeout(() => {
            Q(), b(200);
          }, Xe);
        }
      }
    }
  }), [T, d, Q, y]), ie(() => {
    const j = () => {
      C();
    };
    document.addEventListener("selectionchange", j);
    const J = () => {
      setTimeout(C, 10);
    };
    return y.current && y.current.addEventListener("focus", J), () => {
      document.removeEventListener("selectionchange", j), y.current && y.current.removeEventListener("focus", J);
    };
  }, [C]);
  const ae = G(() => {
    if (!y.current) return;
    let j = y.current.innerHTML;
    j = De(j), j !== y.current.innerHTML && (y.current.innerHTML = j);
    const J = T;
    if (J !== j) {
      const ye = {
        type: Ut,
        payload: j
      }, he = {
        type: Ut,
        payload: J
      };
      d.recordOperation(ye, he);
    }
    d.updateContinuousContent(j), ne(), b(200);
    const se = F(c);
    se !== E && d.setActivePage(se);
  }, [d, ne, F, E, b, c, y, T]), k = G((j) => {
    ae();
  }, [ae]), ce = G((j) => {
    d.updatePageSize(j), Q({ pageSize: j }), i && i(j);
  }, [d, Q, i]), me = G((j) => {
    d.updatePageMargins(j), Q({ pageMargins: j }), a && a(j);
  }, [d, Q, a]), xe = G((j) => {
    j < 0 || j >= O.length || (W.current = !0, d.setActivePage(j), Y(j, c), setTimeout(() => {
      W.current = !1;
    }, oa), t && t(j));
  }, [d, Y, t, O.length]), yt = G(() => {
    const j = O.length + 1;
    w(j) && (L.current = !0, setTimeout(() => {
      if (L.current) {
        L.current = !1;
        const se = Math.max(0, O.length - 1);
        d.setActivePage(se), setTimeout(() => {
          Y(se, c);
        }, $t);
      }
    }, 100)), o && o();
  }, [O.length, w, d, Y, o]), hn = G(() => {
    const j = window.getSelection();
    if (j && j.rangeCount > 0) {
      if (!y?.current) return;
      const ye = `<page-break data-page-break="true" contenteditable="false" data-page-number="${y.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ye), setTimeout(() => {
        Q();
        const he = F(c);
        d.setActivePage(he);
      }, 150);
    }
  }, [Q, F, d, c]), Et = G((j) => {
    if (O.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    l(j) && (d.setActivePage(0), n && n(j));
  }, [O.length, l, d, n]), Oe = G(() => {
    d.zoomIn();
  }, [d]), ke = G(() => {
    d.zoomOut();
  }, [d]), Ce = G(() => {
    d.resetZoom();
  }, [d]), bt = G(() => {
    d.undo();
  }, [d]), Tt = G(() => {
    d.redo();
  }, [d]);
  ie(() => {
    const j = (J) => {
      if (J.ctrlKey || J.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(J.key) && J.preventDefault();
        const se = document.activeElement === y.current, ye = document.activeElement === c.current, he = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (se || ye || !he)
          switch (J.key) {
            case "+":
            case "=":
              Oe();
              break;
            case "-":
            case "_":
              ke();
              break;
            case "0":
              Ce();
              break;
            case "z":
              J.shiftKey || bt();
              break;
            case "y":
              Tt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", j), () => {
      window.removeEventListener("keydown", j);
    };
  }, [Oe, ke, Ce, bt, Tt]);
  const mn = G(() => {
    !c.current || !y.current || W.current || ($.current && clearTimeout($.current), $.current = setTimeout(() => {
      if (W.current) {
        $.current = null;
        return;
      }
      const j = F(c);
      j !== E && j >= 0 && d.setActivePage(j), $.current = null;
    }, ra));
  }, [F, E, d]), yn = He(() => {
    if (!T) return 0;
    const J = T.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return J ? J.length : 0;
  }, [T]), En = O.length || 1, bn = G((j) => {
    I(!0), q(j);
  }, []), xt = G(() => {
    I(!1), q(null);
  }, []), Tn = G((j, J) => {
  }, []);
  return ie(() => () => {
    $.current && clearTimeout($.current);
  }, []), /* @__PURE__ */ u.jsxs("div", { className: "multi-page-editor", children: [
    h && /* @__PURE__ */ u.jsx(
      dt,
      {
        currentFormat: {
          ...g,
          imageSelected: z
        },
        onFormatText: v,
        onAddPageBreak: hn,
        canUndo: _,
        canRedo: D
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ u.jsx(
        Fo,
        {
          editorView: null,
          isCollapsed: N,
          onToggle: () => Z((j) => !j),
          wordCount: yn,
          pageCount: En
        }
      ),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: c,
          onScroll: mn,
          children: /* @__PURE__ */ u.jsx(
            ft,
            {
              content: T,
              dimensions: M,
              pageSize: R,
              pageMargins: S,
              pageBoundaries: O,
              editorRef: y,
              onInput: k,
              onContentChange: ae,
              onClick: () => y.current?.focus(),
              zoomLevel: A
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsx(
        gt,
        {
          editorRef: y,
          onImageSelect: bn,
          onImageDeselect: xt,
          onImageResize: Tn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: H,
            aspectRatio: H
          }
        }
      ),
      z && B && /* @__PURE__ */ u.jsx(
        ht,
        {
          imageElement: B,
          initialPreserveAspectRatio: H,
          onAlignChange: (j) => {
          },
          onAspectRatioToggle: (j) => {
            oe(j);
          },
          onDelete: () => {
            if (B) {
              const j = B.getAttribute("data-key");
              j && _r(j).catch((J) => {
                console.error("Failed to delete image from IndexedDB:", J);
              });
            }
          },
          onClose: xt
        }
      ),
      f && /* @__PURE__ */ u.jsx("div", { className: "page-manager-sidebar", children: e ? Ge.cloneElement(e, {
        onNavigate: xe,
        onAddPage: yt,
        onDeletePage: Et,
        onPageSizeChange: ce,
        onPageMarginsChange: me,
        zoomLevel: A,
        canZoomIn: nt(A),
        canZoomOut: rt(A),
        onZoomIn: Oe,
        onZoomOut: ke,
        onZoomReset: Ce
      }) : /* @__PURE__ */ u.jsx(
        ta,
        {
          pageBoundaries: O,
          activePage: E,
          pageSize: R,
          pageMargins: S,
          zoomLevel: A,
          canZoomIn: nt(A),
          canZoomOut: rt(A),
          onNavigate: xe,
          onAddPage: yt,
          onDeletePage: Et,
          onPageSizeChange: ce,
          onPageMarginsChange: me,
          onZoomIn: Oe,
          onZoomOut: ke,
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
class gn extends Ge.Component {
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
gn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
gn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const ba = {
  A4: { width: le.A4.width, height: le.A4.height },
  Letter: { width: le.Letter.width, height: le.Letter.height },
  Legal: { width: le.Legal.width, height: le.Legal.height }
};
export {
  Wn as COMMON_FONT_SIZES,
  Fe as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Ft as DEFAULT_PAGE_SIZE,
  ua as DocumentProvider,
  dt as EditorToolbar,
  gn as ErrorBoundary,
  Xt as FONT_SIZE_MAP,
  mt as HtmlEditor,
  gt as ImageResizeHandlers,
  ba as PAGE_DIMENSIONS,
  le as PAGE_SIZES,
  ta as PageManager,
  ft as PageView,
  P as RESIZE_HANDLERS,
  Fo as Sidebar,
  ma as applyImageDimensions,
  ga as calculateResizeDimensions,
  ya as clearImages,
  Jt as createResizeOverlay,
  _r as deleteImage,
  Ea as getAllImageKeys,
  la as getAvailablePageSizes,
  Ar as getImage,
  ha as getImageDimensions,
  lt as getPageDimensions,
  da as getPixelValue,
  fa as getPointValue,
  fe as isResizableImage,
  pa as isValidFontSize,
  ca as isValidPageSize,
  Wo as logger,
  Zn as pixelsToPoints,
  qn as pointsToPixels,
  be as removeResizeOverlay,
  vr as saveImage,
  Be as updateResizeOverlay,
  Er as useContinuousReflow,
  Zt as useDocument,
  Re as useDocumentActions,
  Yt as useDocumentState,
  Kn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
