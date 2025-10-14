import $e, { createContext as Tn, useContext as xn, useReducer as An, useMemo as ze, useState as le, useCallback as U, useRef as ne, useEffect as ie, forwardRef as st, createElement as Ke, useLayoutEffect as _n, useImperativeHandle as Pn } from "react";
import { v4 as ct } from "uuid";
import { createPortal as wn } from "react-dom";
function Rn(e) {
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
var xt;
function On() {
  if (xt) return xe;
  xt = 1;
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
var At;
function Sn() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === z ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case b:
          return "Fragment";
        case D:
          return "Profiler";
        case k:
          return "StrictMode";
        case v:
          return "Suspense";
        case m:
          return "SuspenseList";
        case x:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case d:
            return "Portal";
          case j:
            return c.displayName || "Context";
          case A:
            return (c._context.displayName || "Context") + ".Consumer";
          case l:
            var _ = c.render;
            return c = c.displayName, c || (c = _.displayName || _.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case w:
            return _ = c.displayName || null, _ !== null ? _ : e(c.type) || "Memo";
          case M:
            _ = c._payload, c = c._init;
            try {
              return e(c(_));
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
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var C = _.error, N = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return C.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(c);
      }
    }
    function n(c) {
      if (c === b) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === M)
        return "<...>";
      try {
        var _ = e(c);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = W.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function r(c) {
      if (X.call(c, "key")) {
        var _ = Object.getOwnPropertyDescriptor(c, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function i(c, _) {
      function C() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: C,
        configurable: !0
      });
    }
    function g() {
      var c = e(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function y(c, _, C, N, Z, H) {
      var I = C.ref;
      return c = {
        $$typeof: O,
        type: c,
        key: _,
        props: C,
        _owner: N
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(c, "ref", {
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
        value: Z
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function p(c, _, C, N, Z, H) {
      var I = _.children;
      if (I !== void 0)
        if (N)
          if ($(I)) {
            for (N = 0; N < I.length; N++)
              h(I[N]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(I);
      if (X.call(_, "key")) {
        I = e(c);
        var F = Object.keys(_).filter(function(Y) {
          return Y !== "key";
        });
        N = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", E[I + N] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          I,
          F,
          I
        ), E[I + N] = !0);
      }
      if (I = null, C !== void 0 && (o(C), I = "" + C), r(_) && (o(_.key), I = "" + _.key), "key" in _) {
        C = {};
        for (var V in _)
          V !== "key" && (C[V] = _[V]);
      } else C = _;
      return I && i(
        C,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), y(
        c,
        I,
        C,
        s(),
        Z,
        H
      );
    }
    function h(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === M && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === O;
    }
    var R = $e, O = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), j = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), W = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, $ = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var ee, G = {}, q = R.react_stack_bottom_frame.bind(
      R,
      a
    )(), te = oe(n(a)), E = {};
    Ae.Fragment = b, Ae.jsx = function(c, _, C) {
      var N = 1e4 > W.recentlyCreatedOwnerStacks++;
      return p(
        c,
        _,
        C,
        !1,
        N ? Error("react-stack-top-frame") : q,
        N ? oe(n(c)) : te
      );
    }, Ae.jsxs = function(c, _, C) {
      var N = 1e4 > W.recentlyCreatedOwnerStacks++;
      return p(
        c,
        _,
        C,
        !0,
        N ? Error("react-stack-top-frame") : q,
        N ? oe(n(c)) : te
      );
    };
  })()), Ae;
}
var _t;
function kn() {
  return _t || (_t = 1, process.env.NODE_ENV === "production" ? Ce.exports = On() : Ce.exports = Sn()), Ce.exports;
}
var u = kn();
const Xe = 100, Je = 50, Qe = 200, Pt = 5, et = (e) => e < Qe, tt = (e) => e > Je, Nn = 96, Me = (e) => Math.round(e * Nn), He = {
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
  const t = He[e] || He[pe];
  return {
    top: Me(t.top),
    bottom: Me(t.bottom),
    left: Me(t.left),
    right: Me(t.right)
  };
}, Cn = (e = pe) => {
  const t = Ft(e);
  return t.top + t.bottom;
}, Mn = () => Object.keys(He), In = (e) => {
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
}, Wt = "A4", lt = (e) => {
  const t = ce[e] || ce[Wt];
  return {
    width: t.width,
    height: t.height
  };
}, oa = (e) => Object.keys(ce).includes(e), aa = () => Object.keys(ce), we = Wt, me = "<p><br></p>", Ln = "continuous", Pe = (e, t = we) => ({
  id: ct(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), je = (e) => typeof e != "string" || e.trim() === "" ? me : e, qt = (e, t = we) => (e.length > 0 ? e : [Pe(0, t)]).map((n, s) => ({
  id: n.id || ct(),
  index: s,
  size: n.size || t,
  content: je(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), jn = (e = we) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: lt(e).height
}], nt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || we, n = qt(e.pages || [Pe(0, o)], o);
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
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || jn(o),
    zoomLevel: e.zoomLevel || Xe,
    pageMargins: e.pageMargins || pe,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, B = {
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
}, rt = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case B.INITIALIZE_DOCUMENT: {
      const { initialContent: n = me, pageSize: s = we } = t.payload || {}, a = { ...Pe(0, s), content: je(n) };
      return nt({
        title: e.title,
        pageSize: s,
        pages: [a]
      });
    }
    case B.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case B.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: s } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: je(s)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case B.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = qt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : s.slice(0, -1).map((r, i) => ({
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
    case B.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(n, 0, Pe(n, e.pageSize));
      const a = s.map((i, g) => ({
        ...i,
        index: g,
        size: e.pageSize
      })), r = a.slice(0, -1).map((i, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
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
    case B.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(n, 1);
      const a = s.map((g, y) => ({
        ...g,
        index: y,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const i = a.slice(0, -1).map((g, y) => ({
        id: `auto-break-${y}`,
        pageNumber: y + 1
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
    case B.SET_ACTIVE_PAGE: {
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
    case B.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        lt(n);
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
    case B.RESET_DOCUMENT:
      return nt();
    case B.UPDATE_CONTINUOUS_CONTENT: {
      const n = je(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case B.UPDATE_PAGE_BOUNDARIES: {
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
    case B.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: s } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + a + "<p><br></p>";
      else if (typeof n == "number") {
        const i = r.substring(0, n), g = r.substring(n);
        r = i + a + g;
      } else if (typeof s == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = r;
        const g = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && g.length === 0)
          r = r + a + "<p><br></p>";
        else if (s < g.length) {
          const y = g[s], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", y.parentNode.insertBefore(p, y.nextSibling), p.parentNode.insertBefore(h, p.nextSibling), r = i.innerHTML;
        } else
          r = r + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case B.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const s = document.createElement("div");
      s.innerHTML = e.continuousContent;
      const a = s.querySelectorAll('page-break, [data-page-break="true"]');
      return a[n] && a[n].remove(), s.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, g) => {
        i.setAttribute("data-page-number", String(g + 2));
      }), {
        ...e,
        continuousContent: s.innerHTML,
        updatedAt: o
      };
    }
    case B.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let s = e.continuousContent, a = e.pages;
      return n === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== me).join(`
`) || me : e.continuousContent && e.continuousContent !== me && (a = [{ ...Pe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: s,
        pages: a,
        updatedAt: o
      };
    }
    case B.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Je || n > Qe ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Je} and ${Qe}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case B.ZOOM_IN: {
      if (!et(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Pt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case B.ZOOM_OUT: {
      if (!tt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Pt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case B.RESET_ZOOM:
      return e.zoomLevel === Xe ? e : {
        ...e,
        zoomLevel: Xe,
        updatedAt: o
      };
    case B.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: o
      };
    }
    case B.RECORD_OPERATION: {
      const { operation: n, inverseOperation: s } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: s }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: o
      };
    }
    case B.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], s = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = rt(e, n.inverseOperation)), {
        ...a,
        undoStack: s,
        redoStack: [...e.redoStack, n],
        canUndo: s.length > 0,
        canRedo: !0,
        updatedAt: o
      };
    }
    case B.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], s = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = rt(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: s,
        canUndo: !0,
        canRedo: s.length > 0,
        updatedAt: o
      };
    }
    case B.CLEAR_UNDO_REDO:
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
      const { element: n, state: s } = t.payload;
      return n && s && (n.style.float = s.float, n.style.margin = s.margin, n.style.display = s.display, s.width && (n.style.width = s.width), s.height && (n.style.height = s.height)), e;
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
      const { element: n, state: s } = t.payload;
      return n && s && (s.width && (n.style.width = s.width), s.height && (n.style.height = s.height)), e;
    }
    default:
      return e;
  }
}, Zt = Tn(null), ia = ({ children: e, initialState: t = {} }) => {
  const [o, n] = An(rt, nt(t)), s = ze(() => ({
    initializeDocument: (r) => n({ type: B.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: B.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: B.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: B.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: B.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: B.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: B.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: B.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: B.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: B.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: B.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: B.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: B.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: B.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: B.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: B.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: B.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: B.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: B.ZOOM_IN }),
    zoomOut: () => n({ type: B.ZOOM_OUT }),
    resetZoom: () => n({ type: B.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: B.UPDATE_PAGE_MARGINS, payload: r }),
    // Undo/Redo actions
    recordOperation: (r, i) => n({
      type: B.RECORD_OPERATION,
      payload: { operation: r, inverseOperation: i }
    }),
    undo: () => n({ type: B.UNDO }),
    redo: () => n({ type: B.REDO }),
    clearUndoRedo: () => n({ type: B.CLEAR_UNDO_REDO })
  }), []), a = ze(() => ({
    state: o,
    actions: s,
    dispatch: n
  }), [o, s]);
  return /* @__PURE__ */ u.jsx(Zt.Provider, { value: a, children: e });
}, Yt = () => {
  const e = xn(Zt);
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
var Ie = { exports: {} }, Le = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function Dn() {
  if (wt) return J;
  wt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function A(l) {
    if (typeof l == "object" && l !== null) {
      var v = l.$$typeof;
      switch (v) {
        case t:
          switch (l = l.type, l) {
            case g:
            case y:
            case n:
            case a:
            case s:
            case h:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case i:
                case p:
                case O:
                case R:
                case r:
                  return l;
                default:
                  return v;
              }
          }
        case o:
          return v;
      }
    }
  }
  function j(l) {
    return A(l) === y;
  }
  return J.AsyncMode = g, J.ConcurrentMode = y, J.ContextConsumer = i, J.ContextProvider = r, J.Element = t, J.ForwardRef = p, J.Fragment = n, J.Lazy = O, J.Memo = R, J.Portal = o, J.Profiler = a, J.StrictMode = s, J.Suspense = h, J.isAsyncMode = function(l) {
    return j(l) || A(l) === g;
  }, J.isConcurrentMode = j, J.isContextConsumer = function(l) {
    return A(l) === i;
  }, J.isContextProvider = function(l) {
    return A(l) === r;
  }, J.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, J.isForwardRef = function(l) {
    return A(l) === p;
  }, J.isFragment = function(l) {
    return A(l) === n;
  }, J.isLazy = function(l) {
    return A(l) === O;
  }, J.isMemo = function(l) {
    return A(l) === R;
  }, J.isPortal = function(l) {
    return A(l) === o;
  }, J.isProfiler = function(l) {
    return A(l) === a;
  }, J.isStrictMode = function(l) {
    return A(l) === s;
  }, J.isSuspense = function(l) {
    return A(l) === h;
  }, J.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === y || l === a || l === s || l === h || l === f || typeof l == "object" && l !== null && (l.$$typeof === O || l.$$typeof === R || l.$$typeof === r || l.$$typeof === i || l.$$typeof === p || l.$$typeof === b || l.$$typeof === k || l.$$typeof === D || l.$$typeof === d);
  }, J.typeOf = A, J;
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
var Rt;
function zn() {
  return Rt || (Rt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function A(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === y || S === a || S === s || S === h || S === f || typeof S == "object" && S !== null && (S.$$typeof === O || S.$$typeof === R || S.$$typeof === r || S.$$typeof === i || S.$$typeof === p || S.$$typeof === b || S.$$typeof === k || S.$$typeof === D || S.$$typeof === d);
    }
    function j(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case t:
            var he = S.type;
            switch (he) {
              case g:
              case y:
              case n:
              case a:
              case s:
              case h:
                return he;
              default:
                var Ee = he && he.$$typeof;
                switch (Ee) {
                  case i:
                  case p:
                  case O:
                  case R:
                  case r:
                    return Ee;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var l = g, v = y, m = i, w = r, M = t, x = p, z = n, W = O, X = R, $ = o, oe = a, ee = s, G = h, q = !1;
    function te(S) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(S) || j(S) === g;
    }
    function E(S) {
      return j(S) === y;
    }
    function c(S) {
      return j(S) === i;
    }
    function _(S) {
      return j(S) === r;
    }
    function C(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function N(S) {
      return j(S) === p;
    }
    function Z(S) {
      return j(S) === n;
    }
    function H(S) {
      return j(S) === O;
    }
    function I(S) {
      return j(S) === R;
    }
    function F(S) {
      return j(S) === o;
    }
    function V(S) {
      return j(S) === a;
    }
    function Y(S) {
      return j(S) === s;
    }
    function ae(S) {
      return j(S) === h;
    }
    Q.AsyncMode = l, Q.ConcurrentMode = v, Q.ContextConsumer = m, Q.ContextProvider = w, Q.Element = M, Q.ForwardRef = x, Q.Fragment = z, Q.Lazy = W, Q.Memo = X, Q.Portal = $, Q.Profiler = oe, Q.StrictMode = ee, Q.Suspense = G, Q.isAsyncMode = te, Q.isConcurrentMode = E, Q.isContextConsumer = c, Q.isContextProvider = _, Q.isElement = C, Q.isForwardRef = N, Q.isFragment = Z, Q.isLazy = H, Q.isMemo = I, Q.isPortal = F, Q.isProfiler = V, Q.isStrictMode = Y, Q.isSuspense = ae, Q.isValidElementType = A, Q.typeOf = j;
  })()), Q;
}
var Ot;
function Kt() {
  return Ot || (Ot = 1, process.env.NODE_ENV === "production" ? Le.exports = Dn() : Le.exports = zn()), Le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, St;
function Hn() {
  if (St) return Ge;
  St = 1;
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
      var g = Object.getOwnPropertyNames(r).map(function(p) {
        return r[p];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        y[p] = p;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = s() ? Object.assign : function(a, r) {
    for (var i, g = n(a), y, p = 1; p < arguments.length; p++) {
      i = Object(arguments[p]);
      for (var h in i)
        t.call(i, h) && (g[h] = i[h]);
      if (e) {
        y = e(i);
        for (var f = 0; f < y.length; f++)
          o.call(i, y[f]) && (g[y[f]] = i[y[f]]);
      }
    }
    return g;
  }, Ge;
}
var Fe, kt;
function ut() {
  if (kt) return Fe;
  kt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = e, Fe;
}
var We, Nt;
function Xt() {
  return Nt || (Nt = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var qe, Ct;
function Bn() {
  if (Ct) return qe;
  Ct = 1;
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
  function s(a, r, i, g, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var h;
          try {
            if (typeof a[p] != "function") {
              var f = Error(
                (g || "React class") + ": " + i + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            h = a[p](r, p, g, i, null, t);
          } catch (O) {
            h = O;
          }
          if (h && !(h instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in o)) {
            o[h.message] = !0;
            var R = y ? y() : "";
            e(
              "Failed " + i + " type: " + h.message + (R ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, qe = s, qe;
}
var Ze, Mt;
function $n() {
  if (Mt) return Ze;
  Mt = 1;
  var e = Kt(), t = Hn(), o = /* @__PURE__ */ ut(), n = /* @__PURE__ */ Xt(), s = /* @__PURE__ */ Bn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var g = "Warning: " + i;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return Ze = function(i, g) {
    var y = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(E) {
      var c = E && (y && E[y] || E[p]);
      if (typeof c == "function")
        return c;
    }
    var f = "<<anonymous>>", R = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: D(),
      arrayOf: A,
      element: j(),
      elementType: l(),
      instanceOf: v,
      node: x(),
      objectOf: w,
      oneOf: m,
      oneOfType: M,
      shape: W,
      exact: X
    };
    function O(E, c) {
      return E === c ? E !== 0 || 1 / E === 1 / c : E !== E && c !== c;
    }
    function d(E, c) {
      this.message = E, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function b(E) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, _ = 0;
      function C(Z, H, I, F, V, Y, ae) {
        if (F = F || f, Y = Y || I, ae !== o) {
          if (g) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = F + ":" + I;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, _++);
          }
        }
        return H[I] == null ? Z ? H[I] === null ? new d("The " + V + " `" + Y + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new d("The " + V + " `" + Y + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : E(H, I, F, V, Y);
      }
      var N = C.bind(null, !1);
      return N.isRequired = C.bind(null, !0), N;
    }
    function k(E) {
      function c(_, C, N, Z, H, I) {
        var F = _[C], V = ee(F);
        if (V !== E) {
          var Y = G(F);
          return new d(
            "Invalid " + Z + " `" + H + "` of type " + ("`" + Y + "` supplied to `" + N + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return b(c);
    }
    function D() {
      return b(r);
    }
    function A(E) {
      function c(_, C, N, Z, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var I = _[C];
        if (!Array.isArray(I)) {
          var F = ee(I);
          return new d("Invalid " + Z + " `" + H + "` of type " + ("`" + F + "` supplied to `" + N + "`, expected an array."));
        }
        for (var V = 0; V < I.length; V++) {
          var Y = E(I, V, N, Z, H + "[" + V + "]", o);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(c);
    }
    function j() {
      function E(c, _, C, N, Z) {
        var H = c[_];
        if (!i(H)) {
          var I = ee(H);
          return new d("Invalid " + N + " `" + Z + "` of type " + ("`" + I + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function l() {
      function E(c, _, C, N, Z) {
        var H = c[_];
        if (!e.isValidElementType(H)) {
          var I = ee(H);
          return new d("Invalid " + N + " `" + Z + "` of type " + ("`" + I + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function v(E) {
      function c(_, C, N, Z, H) {
        if (!(_[C] instanceof E)) {
          var I = E.name || f, F = te(_[C]);
          return new d("Invalid " + Z + " `" + H + "` of type " + ("`" + F + "` supplied to `" + N + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return b(c);
    }
    function m(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(_, C, N, Z, H) {
        for (var I = _[C], F = 0; F < E.length; F++)
          if (O(I, E[F]))
            return null;
        var V = JSON.stringify(E, function(ae, S) {
          var se = G(S);
          return se === "symbol" ? String(S) : S;
        });
        return new d("Invalid " + Z + " `" + H + "` of value `" + String(I) + "` " + ("supplied to `" + N + "`, expected one of " + V + "."));
      }
      return b(c);
    }
    function w(E) {
      function c(_, C, N, Z, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var I = _[C], F = ee(I);
        if (F !== "object")
          return new d("Invalid " + Z + " `" + H + "` of type " + ("`" + F + "` supplied to `" + N + "`, expected an object."));
        for (var V in I)
          if (n(I, V)) {
            var Y = E(I, V, N, Z, H + "." + V, o);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(c);
    }
    function M(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < E.length; c++) {
        var _ = E[c];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(_) + " at index " + c + "."
          ), r;
      }
      function C(N, Z, H, I, F) {
        for (var V = [], Y = 0; Y < E.length; Y++) {
          var ae = E[Y], S = ae(N, Z, H, I, F, o);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && V.push(S.data.expectedType);
        }
        var se = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new d("Invalid " + I + " `" + F + "` supplied to " + ("`" + H + "`" + se + "."));
      }
      return b(C);
    }
    function x() {
      function E(c, _, C, N, Z) {
        return $(c[_]) ? null : new d("Invalid " + N + " `" + Z + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function z(E, c, _, C, N) {
      return new d(
        (E || "React class") + ": " + c + " type `" + _ + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function W(E) {
      function c(_, C, N, Z, H) {
        var I = _[C], F = ee(I);
        if (F !== "object")
          return new d("Invalid " + Z + " `" + H + "` of type `" + F + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var V in E) {
          var Y = E[V];
          if (typeof Y != "function")
            return z(N, Z, H, V, G(Y));
          var ae = Y(I, V, N, Z, H + "." + V, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return b(c);
    }
    function X(E) {
      function c(_, C, N, Z, H) {
        var I = _[C], F = ee(I);
        if (F !== "object")
          return new d("Invalid " + Z + " `" + H + "` of type `" + F + "` " + ("supplied to `" + N + "`, expected `object`."));
        var V = t({}, _[C], E);
        for (var Y in V) {
          var ae = E[Y];
          if (n(E, Y) && typeof ae != "function")
            return z(N, Z, H, Y, G(ae));
          if (!ae)
            return new d(
              "Invalid " + Z + " `" + H + "` key `" + Y + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(_[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var S = ae(I, Y, N, Z, H + "." + Y, o);
          if (S)
            return S;
        }
        return null;
      }
      return b(c);
    }
    function $(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every($);
          if (E === null || i(E))
            return !0;
          var c = h(E);
          if (c) {
            var _ = c.call(E), C;
            if (c !== E.entries) {
              for (; !(C = _.next()).done; )
                if (!$(C.value))
                  return !1;
            } else
              for (; !(C = _.next()).done; ) {
                var N = C.value;
                if (N && !$(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(E, c) {
      return E === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function ee(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : oe(c, E) ? "symbol" : c;
    }
    function G(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var c = ee(E);
      if (c === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function q(E) {
      var c = G(E);
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
    function te(E) {
      return !E.constructor || !E.constructor.name ? f : E.constructor.name;
    }
    return R.checkPropTypes = s, R.resetWarningCache = s.resetWarningCache, R.PropTypes = R, R;
  }, Ze;
}
var Ye, It;
function Un() {
  if (It) return Ye;
  It = 1;
  var e = /* @__PURE__ */ ut();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ye = function() {
    function n(r, i, g, y, p, h) {
      if (h !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
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
  }, Ye;
}
var Lt;
function Gn() {
  if (Lt) return Ie.exports;
  if (Lt = 1, process.env.NODE_ENV !== "production") {
    var e = Kt(), t = !0;
    Ie.exports = /* @__PURE__ */ $n()(e.isElement, t);
  } else
    Ie.exports = /* @__PURE__ */ Un()();
  return Ie.exports;
}
var Fn = /* @__PURE__ */ Gn();
const T = /* @__PURE__ */ Rn(Fn), Jt = {
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
], Ue = "16px", qn = (e) => Math.round(e * 96 / 72), Zn = (e) => Math.round(e * 72 / 96 * 2) / 2, sa = (e) => {
  const t = Object.values(Jt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${qn(e)}px`;
}, ca = (e) => {
  const t = parseInt(e), o = Object.values(Jt).find((n) => n.px === t);
  return o ? o.pt : Zn(t);
}, la = (e) => {
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
function ua({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: r,
  options: i = ge
}) {
  const g = n - t, y = s - o;
  let p = a, h = r;
  switch (e) {
    case P.TOP_LEFT:
      p = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r - y);
      break;
    case P.TOP_RIGHT:
      p = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM_LEFT:
      p = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r + y);
      break;
    case P.BOTTOM_RIGHT:
      p = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r + y);
      break;
    case P.TOP:
      h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM:
      h = Math.max(i.minHeight, r + y);
      break;
    case P.LEFT:
      p = Math.max(i.minWidth, a - g);
      break;
    case P.RIGHT:
      p = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: p, height: h };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const f = a / r;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? p / f > h ? h = Math.max(i.minHeight, p / f) : p = Math.max(i.minWidth, h * f) : [P.TOP, P.BOTTOM].includes(e) ? p = h * f : [P.LEFT, P.RIGHT].includes(e) && (h = p / f);
  }
  return i.maxWidth && p > i.maxWidth && (p = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (h = p / (a / r))), i.maxHeight && h > i.maxHeight && (h = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (p = h * (a / r))), p = Math.max(i.minWidth, p), h = Math.max(i.minHeight, h), {
    width: Math.round(p),
    height: Math.round(h)
  };
}
function fe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function da(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function fa(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Qt(e, t = ge) {
  if (!fe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(P).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Yn(a), r.style.pointerEvents = "all", en(r, a, n.width, n.height), o.appendChild(r);
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
function en(e, t, o, n) {
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
function ot(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const a = s.dataset.handler;
    en(s, a, o.width, o.height);
  });
}
function ye(e) {
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
  fontSize: Ue,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Kn = () => {
  const [e, t] = le(jt), o = Re(), n = U((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const k = b.getRangeAt(0);
      if (!k.toString())
        return t((A) => ({ ...A, fontFamily: d })), !1;
      try {
        const A = document.createElement("span");
        A.style.fontFamily = d;
        const j = k.extractContents();
        return A.appendChild(j), k.insertNode(A), k.selectNodeContents(A), b.removeAllRanges(), b.addRange(k), t((l) => ({ ...l, fontFamily: d })), !0;
      } catch {
        return document.execCommand("fontName", !1, d), t((j) => ({ ...j, fontFamily: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font family change failed:", b), !1;
    }
  }, []), s = U((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const k = b.getRangeAt(0);
      if (!k.toString())
        return t((A) => ({ ...A, fontSize: d })), !1;
      try {
        const A = document.createElement("span");
        A.style.fontSize = d;
        const j = k.extractContents();
        return A.appendChild(j), k.insertNode(A), k.selectNodeContents(A), b.removeAllRanges(), b.addRange(k), t((l) => ({ ...l, fontSize: d })), !0;
      } catch {
        const j = Vn[d] || "3";
        return document.execCommand("fontSize", !1, j), t((l) => ({ ...l, fontSize: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font size change failed:", b), !1;
    }
  }, []), a = U((d, b = null) => {
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
        s(b);
        return;
      }
      if (d === "fontName") {
        n(b);
        return;
      }
      switch (document.execCommand(d, !1, b) || console.warn(`[useFormatting] Command "${d}" failed`), d) {
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
          t((D) => ({ ...D, headingLevel: b }));
          break;
        default:
          break;
      }
    } catch (k) {
      console.warn(`[useFormatting] Error executing command "${d}":`, k);
    }
  }, [s, n, o]), r = ne(null), i = ne(null), g = ne(null), y = ne(null), p = ne(ge);
  U((d) => {
    if (!fe(d)) return;
    r.current && (ye(r.current), r.current = null), d.classList.add("selected");
    const b = Qt(d);
    b && (r.current = b, i.current = d, document.body.appendChild(b), t((k) => ({
      ...k,
      imageSelected: !0,
      preserveAspectRatio: p.current.preserveAspectRatio
    })));
  }, []);
  const h = U(() => {
    i.current && (i.current.classList.remove("selected"), i.current = null), r.current && (ye(r.current), r.current = null), g.current = null, y.current = null, t((d) => ({
      ...d,
      imageSelected: !1
    }));
  }, []), f = U(() => {
    const d = !p.current.preserveAspectRatio;
    p.current = {
      ...p.current,
      preserveAspectRatio: d,
      aspectRatio: d
    }, t((b) => ({
      ...b,
      preserveAspectRatio: d
    }));
  }, []);
  U((d, b, k) => {
    i.current && (g.current = {
      x: b,
      y: k,
      width: i.current.offsetWidth,
      height: i.current.offsetHeight
    }, y.current = d, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Jn(d));
  }, []), U((d, b) => {
    if (!i.current || !g.current || !y.current) return;
    const { x: k, y: D, width: A, height: j } = g.current, l = y.current, v = Qn({
      handler: l,
      startX: k,
      startY: D,
      currentX: d,
      currentY: b,
      startWidth: A,
      startHeight: j,
      options: p.current
    });
    er(i.current, v), r.current && ot(r.current, i.current);
  }, []), U(() => {
    if (g.current = null, y.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", i.current) {
      const d = new Event("input", { bubbles: !0, cancelable: !0 });
      i.current.dispatchEvent(d);
    }
  }, []);
  const R = U(() => {
    try {
      const d = window.getSelection();
      if (!d || d.rangeCount === 0)
        return;
      const b = d.getRangeAt(0), k = b.toString();
      let D = Ue, A = "Arial", j = "p";
      if (k) {
        const v = b.startContainer, m = v.nodeType === Node.TEXT_NODE ? v.parentElement : v;
        if (m) {
          const w = window.getComputedStyle(m), M = w.fontSize, x = w.fontFamily;
          M && M.endsWith("px") && (D = M), x && x !== "serif" && (A = x.split(",")[0].replace(/['"]/g, "").trim());
          const z = Xn(m);
          if (z) {
            const W = z.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(W) && (j = W);
          }
        }
      }
      const l = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: document.queryCommandState("justifyLeft"),
        alignCenter: document.queryCommandState("justifyCenter"),
        alignRight: document.queryCommandState("justifyRight"),
        alignJustify: document.queryCommandState("justifyFull"),
        fontFamily: A,
        fontSize: D,
        headingLevel: j
      };
      t((v) => ({
        ...v,
        ...l
      }));
    } catch (d) {
      console.warn("[useFormatting] Error updating format from selection:", d);
    }
  }, []), O = U(() => {
    h(), t(jt);
  }, [h]);
  return ie(() => () => {
    r.current && ye(r.current);
  }, []), {
    currentFormat: e,
    formatText: a,
    resetFormat: O,
    updateCurrentFormatFromSelection: R,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: f
  };
};
function Xn(e) {
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
function Jn(e) {
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
function Qn({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: r,
  options: i = ge
}) {
  const g = n - t, y = s - o;
  let p = a, h = r;
  switch (e) {
    case P.TOP_LEFT:
      p = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r - y);
      break;
    case P.TOP_RIGHT:
      p = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM_LEFT:
      p = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r + y);
      break;
    case P.BOTTOM_RIGHT:
      p = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r + y);
      break;
    case P.TOP:
      h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM:
      h = Math.max(i.minHeight, r + y);
      break;
    case P.LEFT:
      p = Math.max(i.minWidth, a - g);
      break;
    case P.RIGHT:
      p = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: p, height: h };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const f = a / r;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? p / f > h ? h = Math.max(i.minHeight, p / f) : p = Math.max(i.minWidth, h * f) : [P.TOP, P.BOTTOM].includes(e) ? p = h * f : [P.LEFT, P.RIGHT].includes(e) && (h = p / f);
  }
  return i.maxWidth && p > i.maxWidth && (p = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (h = p / (a / r))), i.maxHeight && h > i.maxHeight && (h = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (p = h * (a / r))), p = Math.max(i.minWidth, p), h = Math.max(i.minHeight, h), {
    width: Math.round(p),
    height: Math.round(h)
  };
}
function er(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const be = 'page-break, [data-page-break="true"]', tn = (e) => ce[e] || ce.A4, tr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = tn(o), s = e.querySelectorAll(be), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((g, y) => {
    const h = g.getBoundingClientRect().top - r.top + i;
    a.push({
      id: `page-${y + 1}`,
      pageNumber: y + 2,
      top: h,
      height: n.height
    });
  }), a;
}, nn = (e, t = 100, o = pe) => {
  const n = tn(e), s = Cn(o), a = n.height - s, r = t / 100;
  return a / r;
}, nr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const o = t.querySelectorAll(be);
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
}, Dt = (e) => {
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
}, rr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, or = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, ar = (e, t, o, n, s, a, r) => {
  if (!e)
    return !1;
  try {
    const g = nn(o, n, s) * (t - 1), y = Array.from(e.children);
    let p = 0, h = null;
    for (let f = 0; f < y.length; f++) {
      const R = y[f];
      if (R.tagName === "PAGE-BREAK" || R.getAttribute("data-page-break") === "true")
        continue;
      const O = rr(R);
      if (p + O > g) {
        h = R;
        break;
      }
      p += O;
    }
    if (h) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(f, h), a) {
        const R = e.innerHTML;
        a(R);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const R = document.createElement("p");
      if (R.innerHTML = "<br>", e.appendChild(R), a) {
        const O = e.innerHTML;
        a(O);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, ir = (e, t, o, n, s, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(be));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const y = window.getSelection();
    let p = !1, h = [], f = null;
    if (t === 0) {
      const O = g[0];
      if (!O)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let d = e.firstChild;
      for (; d && d !== O; )
        h.push(d), d = d.nextSibling;
      f = O;
    } else {
      const O = g[t - 1];
      if (!O)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const d = g[t];
      let b = O.nextSibling;
      for (; b && b !== d; )
        h.push(b), b = b.nextSibling;
      f = O;
    }
    if (y && y.rangeCount > 0) {
      const d = y.getRangeAt(0).startContainer;
      for (const b of h)
        if (b.contains(d) || b === d) {
          p = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), h.forEach((O) => {
      O.parentNode && O.remove();
    }), e.querySelectorAll(be).forEach((O, d) => {
      O.setAttribute("data-page-number", String(d + 2));
    }), p && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const O = e.innerHTML;
      n(O);
    }
    return s && setTimeout(() => {
      s(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, sr = 200, cr = 50, zt = 3, lr = 20, rn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, ur = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = rn(a);
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
}, dr = (e, t, o, n, s, a, r, i) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const g = nn(t, o, n);
    let y = Dt(e), p = !1, h = 0;
    for (let f = 0; f < y.length && h < zt; f++) {
      const R = y[f], O = ur(R, g);
      if (O && O.overflowIndex > 0) {
        let d = 0;
        for (let A = 0; A < R.length; A++) {
          const j = R[A];
          j && j.getBoundingClientRect && (d += rn(j));
        }
        if (d - g < lr)
          continue;
        const k = f + 2;
        or(O.overflowElement, k) && (p = !0, h++, y = Dt(e));
      }
    }
    if (p) {
      if (s) {
        const f = e.innerHTML;
        s(f);
      }
      setTimeout(() => {
        a && a(), h >= zt && i && setTimeout(() => {
          r.current || i();
        }, 100);
      }, cr);
    }
    return p;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    r.current = !1;
  }
}, fr = (e, t, o = sr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, pr = 400, on = (e, t) => {
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
        const s = document.createRange(), a = window.getSelection();
        o.nodeType === Node.TEXT_NODE ? s.setStart(o, n) : s.setStart(o, 0), s.collapse(!0), a.removeAllRanges(), a.addRange(s);
      }
    } catch (o) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", o);
    }
  }
}, gr = (e, t, o, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (o === 0)
      s = t;
    else {
      const r = t.querySelectorAll(be)[o - 1];
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
        n ? n(o) : on(t, o);
      }, pr);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, hr = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, mr = 300, yr = (e, t, o = 100, n = "NARROW") => {
  const s = Re(), a = ne(null), r = ne(null), i = ne(e), g = ne(o), y = ne(n), p = ne(!1);
  ie(() => {
    i.current = e;
  }, [e]), ie(() => {
    g.current = o;
  }, [o]), ie(() => {
    y.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const h = U((l = {}) => t?.current ? tr(t.current, l) : [], [t]), f = U((l = {}) => {
    const v = h(l);
    return s.updatePageBoundaries(v), v;
  }, [h, s]), R = U(async (l) => {
    if (!t?.current)
      return !1;
    const v = i.current || "A4", m = g.current || 100, w = y.current || "NARROW";
    return ar(
      t.current,
      l,
      v,
      m,
      w,
      s.updateContinuousContent,
      f
    );
  }, [t, s, f]), O = U(() => {
    if (!t?.current)
      return;
    const l = i.current || "A4", v = g.current || 100, m = y.current || "NARROW";
    dr(
      t.current,
      l,
      v,
      m,
      s.updateContinuousContent,
      f,
      p,
      O
    );
  }, [t, s, f]), d = U((l) => {
    fr(O, r, l);
  }, [O]), b = U((l = {}) => {
    const v = typeof l.delay == "number" ? l.delay : mr;
    hr(f, a, l, v);
  }, [f]), k = U((l) => !l?.current || !t?.current ? 0 : nr(l.current, t.current), [t]), D = U((l) => {
    t?.current && on(t.current, l);
  }, [t]), A = U((l, v) => {
    if (!v?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    gr(v.current, t.current, l, D);
  }, [t, D]), j = U((l) => t?.current ? ir(
    t.current,
    l,
    h,
    s.updateContinuousContent,
    f,
    D,
    O
  ) : !1, [t, h, s, f, D, O]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: b,
    updateBoundaries: f,
    getCurrentPage: k,
    scrollToPage: A,
    positionCursorAtPage: D,
    checkAndReflow: O,
    triggerAutoReflow: d,
    removePageAndContent: j,
    insertPageBreakAtBoundary: R,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, br = "html-editor-storage", Er = 1, ue = "images";
function vr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Oe() {
  return new Promise((e, t) => {
    const o = indexedDB.open(br, Er);
    o.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, o.onsuccess = () => {
      e(o.result);
    }, o.onupgradeneeded = (n) => {
      const s = n.target.result;
      s.objectStoreNames.contains(ue) || s.createObjectStore(ue, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
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
    const s = new FileReader();
    s.onload = async (a) => {
      const r = a.target.result, g = r.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        o(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const y = await Oe(), p = `editor-image-${vr()}`, f = y.transaction([ue], "readwrite").objectStore(ue), R = {
          key: p,
          dataUrl: r,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, O = f.add(R);
        O.onsuccess = () => {
          y.close(), t(p);
        }, O.onerror = () => {
          y.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (y) {
        o(y);
      }
    }, s.onerror = () => {
      o(new Error("Error reading image file"));
    }, s.readAsDataURL(e);
  });
}
async function xr(e) {
  try {
    const t = await Oe();
    return new Promise((o, n) => {
      const r = t.transaction([ue], "readonly").objectStore(ue).get(e);
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
async function Ar(e) {
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
async function pa() {
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
async function ga() {
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
function _r(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Ve(e) {
  const t = [];
  for (let o = 0; o < e.attributes.length; o++) {
    const n = e.attributes[o];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function Pr(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const o = document.createElement("div");
  return o.innerHTML = t, De(o);
}
function wr(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function De(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const s = o[n];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${_r(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s;
      if (a.tagName === "DIV") {
        const r = De(a);
        r.trim() ? t.push(r) : t.push("<p><br></p>");
      } else if (a.tagName === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(a.tagName)) {
        const r = wr(a), i = a.tagName.toLowerCase(), g = Ve(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      } else if (a.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(a.tagName)) {
        const r = De(a), i = a.tagName.toLowerCase(), g = Ve(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      } else if (a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else {
        const r = De(a), i = a.tagName.toLowerCase(), g = Ve(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "<p><br></p>" : t.join("");
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Or = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), Ht = (e) => {
  const t = Or(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, an = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), Sr = (e) => {
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
var kr = {
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
const Nr = st(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: r,
    ...i
  }, g) => Ke(
    "svg",
    {
      ref: g,
      ...kr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: an("lucide", s),
      ...!a && !Sr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...r.map(([y, p]) => Ke(y, p)),
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
const K = (e, t) => {
  const o = st(
    ({ className: n, ...s }, a) => Ke(Nr, {
      ref: a,
      iconNode: t,
      className: an(
        `lucide-${Rr(Ht(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return o.displayName = Ht(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Mr = K("bold", Cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Lr = K("chevron-left", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Dr = K("chevron-right", jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Hr = K("file-check", zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Be = K("file-text", Br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Ur = K("hash", $r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Fr = K("heading-1", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], qr = K("heading-2", Wr);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Yr = K("heading-3", Zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Kr = K("image-upscale", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Jr = K("image", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], eo = K("italic", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], no = K("link", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], oo = K("list-indent-decrease", ro);
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
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], io = K("list-indent-increase", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], co = K("list-ordered", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], sn = K("list", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], fo = K("plus", uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], go = K("redo", po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], mo = K("scaling", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], bo = K("settings", yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], vo = K("strikethrough", Eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], xo = K("table", To);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], cn = K("text-align-center", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], ln = K("text-align-end", _o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], wo = K("text-align-justify", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], un = K("text-align-start", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], So = K("trash-2", Oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], No = K("underline", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Mo = K("undo", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Lo = K("x", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Do = K("zoom-in", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ho = K("zoom-out", zo), Bo = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: s }) => {
  const a = Vt(), { pages: r, activePage: i, continuousContent: g, editorMode: y } = a, [p, h] = le(0), [f, R] = le([]);
  ie(() => {
    if (n !== void 0 && s !== void 0) {
      if (h(n), g) {
        const k = document.createElement("div");
        k.innerHTML = g;
        const D = k.querySelectorAll("h1, h2, h3, h4, h5, h6"), A = Array.from(D).map((j, l) => {
          const v = parseInt(j.tagName.charAt(1)), m = j.textContent.trim();
          return m ? {
            id: `heading-${l}`,
            level: v,
            text: m,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        R(A);
      }
      return;
    }
    let d = 0;
    const b = [];
    r.forEach((k, D) => {
      if (k.content) {
        const A = document.createElement("div");
        A.innerHTML = k.content;
        const l = (A.textContent || A.innerText || "").trim().split(/\s+/).filter((m) => m.length > 0);
        d += l.length, A.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((m, w) => {
          const M = parseInt(m.tagName.charAt(1)), x = m.textContent.trim();
          x && b.push({
            id: `heading-${D}-${w}`,
            level: M,
            text: x,
            page: D + 1
          });
        });
      }
    }), h(d), R(b);
  }, [r, n, s, g]);
  const O = s !== void 0 ? s : r.length;
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
              children: t ? /* @__PURE__ */ u.jsx(Dr, { size: 16 }) : /* @__PURE__ */ u.jsx(Lr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Hr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: O })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Ur, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Be, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: i + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsxs("h3", { children: [
              /* @__PURE__ */ u.jsx(sn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((d) => {
              const b = d.level === 1 ? Fr : d.level === 2 ? qr : Yr;
              return /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ u.jsx(b, { size: 12, className: "outline-icon" }),
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
class $o {
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
const Bt = new $o("Editor"), dn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), fn = 32;
function pn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const o = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? o - 1 : o + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * fn}px`, e.dataset.indentLevel = String(n));
}
function Uo(e, t) {
  pn(e, t);
}
function Go(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && dn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Fo() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), o = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((r) => {
    document.createRange().selectNodeContents(r), t.intersectsNode(r) && o.add(r);
  }), o.size === 0 && n.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let y = i.parentElement;
      for (; y && y !== n; ) {
        if (y.tagName && dn.has(y.tagName.toUpperCase())) {
          o.add(y);
          break;
        }
        y = y.parentElement;
      }
    }
  }), Array.from(o).filter((r) => {
    let i = r.parentElement;
    for (; i; ) {
      if (o.has(i))
        return !1;
      i = i.parentElement;
    }
    return !0;
  })) : [];
}
function Wo(e) {
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
function at(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let o = Fo();
  const n = t.getRangeAt(0);
  if (o.length === 0) {
    const r = Go(n.startContainer);
    if (!r) return !1;
    o = [r];
  }
  const s = o[0], a = o[o.length - 1];
  o.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      Uo(r, e);
      return;
    }
    e ? Wo(r) : pn(r, !1);
  });
  try {
    const r = document.createRange(), i = (h) => h.nodeType === Node.TEXT_NODE ? h : document.createTreeWalker(
      h,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), g = (h) => {
      if (h.nodeType === Node.TEXT_NODE)
        return h;
      const f = document.createTreeWalker(
        h,
        NodeFilter.SHOW_TEXT,
        null
      );
      let R = null, O = f.nextNode();
      for (; O; )
        R = O, O = f.nextNode();
      return R;
    }, y = i(s);
    y ? r.setStart(y, 0) : r.setStart(s, 0);
    const p = g(a);
    p ? r.setEnd(p, p.length) : r.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(r);
  } catch {
    try {
      const i = document.createRange();
      i.setStartBefore(s), i.setEndAfter(a), t.removeAllRanges(), t.addRange(i);
    } catch (i) {
      console.warn("Could not restore selection after indentation:", i);
    }
  }
  return !0;
}
function qo(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, o = window.getSelection(), n = o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
  return o && o.rangeCount > 0 && n && !n.collapsed && at(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const dt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: o,
  canUndo: n = !1,
  canRedo: s = !1
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
      const g = await Tr(r), y = await xr(g);
      if (y) {
        const h = `<img src="${y}" data-key="${g}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, h), Bt.info("Image inserted", { key: g });
      }
      const p = document.getElementById("image-upload");
      p && (p.value = "");
    } catch (i) {
      Bt.error("Error uploading image", i);
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
        children: /* @__PURE__ */ u.jsx(Mo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !s,
        title: "Redo",
        style: { opacity: s ? 1 : 0.5 },
        children: /* @__PURE__ */ u.jsx(go, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ u.jsx(Mr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ u.jsx(eo, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(vo, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(wo, { size: 16 })
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
        children: Wn.map(({ value: r, label: i }) => /* @__PURE__ */ u.jsx("option", { value: r, children: i }, r))
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
        children: /* @__PURE__ */ u.jsx(co, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          at(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ u.jsx(io, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          at(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ u.jsx(oo, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(no, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ u.jsx(xo, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(Jr, { size: 16 })
      }
    )
  ] });
};
dt.propTypes = {
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
  onAddPageBreak: T.func,
  canUndo: T.bool,
  canRedo: T.bool
};
dt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Zo(e) {
  if (!e || typeof e != "string")
    return e;
  const t = document.createElement("div");
  return t.innerHTML = e, _e(t);
}
function _e(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const s = o[n];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      if (a)
        if (a.match(/^\s*$/) && a.includes(`
`)) {
          const r = a.split(`
`).filter((i) => i.trim());
          r.length > 0 ? r.forEach((i) => {
            i.trim() && t.push(`<p>${it(i.trim())}</p>`);
          }) : t.push("<p><br></p>");
        } else
          t.push(`<p>${it(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s;
      if (a.tagName === "DIV") {
        const r = _e(a);
        r.trim() ? t.push(`<p>${r}</p>`) : t.push("<p><br></p>");
      } else if (a.tagName === "P") {
        const r = _e(a);
        t.push(`<p>${r}</p>`);
      } else if (a.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(a.tagName)) {
        const r = _e(a), i = a.tagName.toLowerCase(), g = $t(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      } else {
        const r = _e(a), i = a.tagName.toLowerCase(), g = $t(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      }
    }
  }
  return t.join("");
}
function $t(e) {
  const t = [];
  for (let o = 0; o < e.attributes.length; o++) {
    const n = e.attributes[o];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function it(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Yo(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let o = t.getData("text/html") || t.getData("text/plain");
  return o ? (t.getData("text/html") ? o = Zo(o) : o = Vo(o), document.execCommand("insertHTML", !1, o), o) : null;
}
function Vo(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((o) => o.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((o) => {
    const n = o.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => it(a.trim())).join("<br>")}</p>`;
  }).join("");
}
const ft = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: n = [],
  editorRef: s,
  onInput: a,
  onContentChange: r,
  onKeyDown: i,
  onClick: g,
  onScroll: y,
  onPaste: p,
  zoomLevel: h = 100,
  pageMargins: f = pe
}) => {
  const R = Ft(f), O = h / 100, d = (l, v) => {
    if (!l) return !1;
    const m = l.getBoundingClientRect(), w = v - m.top;
    return w < R.top || w > m.height - R.bottom;
  }, b = (l) => l ? l.nodeType === Node.ELEMENT_NODE ? l.tagName === "PAGE-BREAK" || l.getAttribute("data-page-break") === "true" : l.parentElement && b(l.parentElement) : !1, k = (l) => {
    const v = window.getSelection();
    if (!v || v.rangeCount === 0) return;
    const m = v.getRangeAt(0), { startContainer: w, endContainer: M } = m;
    if ((b(w) || b(M)) && (l.key.length === 1 || l.key === "Enter" || l.key === " "))
      return l.preventDefault(), !1;
    if (qo(l))
      return r && r(), !1;
    if ((l.key === "Backspace" || l.key === "Delete") && (b(w) || b(M)))
      return l.preventDefault(), !1;
    i && i(l);
  }, D = (l) => {
    if (!s.current) return;
    const v = l.target;
    if (b(v)) {
      l.preventDefault();
      return;
    }
    if (d(s.current, l.clientY)) {
      l.preventDefault();
      const m = s.current.getBoundingClientRect();
      if (l.clientY - m.top < R.top) {
        const M = s.current.firstElementChild;
        if (M && M.tagName !== "PAGE-BREAK") {
          const x = document.createRange(), z = window.getSelection();
          x.setStart(M, 0), x.collapse(!0), z.removeAllRanges(), z.addRange(x);
        }
      } else {
        const M = s.current.lastElementChild;
        if (M && M.tagName !== "PAGE-BREAK") {
          const x = document.createRange(), z = window.getSelection();
          x.selectNodeContents(M), x.collapse(!1), z.removeAllRanges(), z.addRange(x);
        }
      }
      return;
    }
    g && g(l);
  }, A = (l) => {
    const v = window.getSelection();
    if (!v || v.rangeCount === 0) return;
    const m = v.getRangeAt(0), { startContainer: w } = m;
    if (b(w))
      return l.preventDefault(), !1;
  }, j = (l) => {
    const v = Yo(l);
    p && p(l, v);
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
        transform: `scale(${O})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ u.jsx(
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
            padding: `${R.top}px ${R.right}px ${R.bottom}px ${R.left}px`,
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
          onKeyDown: k,
          onBeforeInput: A,
          onClick: D,
          onScroll: y,
          onPaste: j,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
ft.propTypes = {
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
  onContentChange: T.func,
  onKeyDown: T.func,
  onClick: T.func,
  onScroll: T.func,
  onPaste: T.func,
  zoomLevel: T.number,
  pageMargins: T.string
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
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: y,
  onPageSizeChange: p,
  onPageMarginsChange: h,
  onZoomIn: f,
  onZoomOut: R,
  onZoomReset: O
} = {}) => {
  const d = Math.max(e?.length || 0, 1), b = (l) => {
    i && i(l);
  }, k = () => {
    g && g();
  }, D = (l) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    y && y(l);
  }, A = (l) => {
    p && p(l);
  }, j = (l) => {
    h && h(l);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ u.jsx(bo, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (l) => A(l.target.value),
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
              onChange: (l) => j(l.target.value),
              children: Mn().map((l) => /* @__PURE__ */ u.jsx("option", { value: l, children: In(l) }, l))
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
          children: /* @__PURE__ */ u.jsx(Ho, { size: 12 })
        }
      ),
      /* @__PURE__ */ u.jsxs("span", { className: "zoom-level-display", children: [
        s,
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
          children: /* @__PURE__ */ u.jsx(Do, { size: 12 })
        }
      ),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: O,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((l, v) => /* @__PURE__ */ u.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ u.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${v === t ? "active" : ""}`,
          onClick: () => b(v),
          "aria-label": `Go to page ${v + 1}`,
          "aria-current": v === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ u.jsx(Be, { size: 14 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              "Page ",
              v + 1
            ] })
          ]
        }
      ),
      d > 1 && /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (m) => {
            m.stopPropagation(), D(v);
          },
          "aria-label": `Delete page ${v + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ u.jsx(Lo, { size: 14 })
        }
      )
    ] }, l.id || `page-${v}`)) }),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: k,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ u.jsx(fo, { size: 16 }),
          /* @__PURE__ */ u.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
pt.propTypes = {
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
  pageMargins: T.string,
  zoomLevel: T.number,
  canZoomIn: T.bool,
  canZoomOut: T.bool,
  onNavigate: T.func,
  onAddPage: T.func,
  onDeletePage: T.func,
  onPageSizeChange: T.func,
  onPageMarginsChange: T.func,
  onZoomIn: T.func,
  onZoomOut: T.func,
  onZoomReset: T.func
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
const Ko = $e.memo(pt), gt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: s = ge
}) => {
  const a = ne(null), r = ne(null), i = ne(null), g = ne(null), y = ne(s), p = ne(!1), h = Re();
  ie(() => {
    y.current = s;
  }, [s]);
  const f = U((m) => {
    if (!fe(m)) return;
    a.current && (ye(a.current), a.current = null), m.classList.add("selected");
    const w = Qt(m, y.current);
    w && (a.current = w, r.current = m, document.body.appendChild(w), w.querySelectorAll(".resize-handler").forEach((x) => {
      x.addEventListener("mousedown", O);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(m)));
  }, [o]), R = U(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (ye(a.current), a.current = null), i.current = null, g.current = null, p.current = !1, n && n();
  }, [n]), O = U((m) => {
    if (m.preventDefault(), m.stopPropagation(), !r.current) return;
    const w = m.currentTarget.dataset.handler, M = r.current.getBoundingClientRect(), x = window.pageYOffset || document.documentElement.scrollTop, z = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: m.clientX,
      y: m.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: m.clientX - M.left - z,
      offsetY: m.clientY - M.top - x
    }, g.current = w, p.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = j(w), document.addEventListener("mousemove", d), document.addEventListener("mouseup", b);
  }, []), d = U((m) => {
    if (!p.current || !r.current || !i.current || !g.current) return;
    m.preventDefault(), m.stopPropagation();
    const { x: w, y: M, width: x, height: z } = i.current, W = g.current, X = m.clientX, $ = m.clientY, oe = l({
      handler: W,
      startX: w,
      startY: M,
      currentX: X,
      currentY: $,
      startWidth: x,
      startHeight: z,
      options: y.current
    });
    v(r.current, oe), a.current && ot(a.current, r.current);
  }, []), b = U((m) => {
    if (p.current) {
      if (m.preventDefault(), m.stopPropagation(), r.current && i.current) {
        const w = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, M = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (w.width !== M.width || w.height !== M.height) && h.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: M } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: w } }
        );
      }
      if (i.current = null, g.current = null, p.current = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(w), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, h]), k = U((m) => {
    a.current && !a.current.contains(m.target) && R();
    const w = m.target;
    if (fe(w)) {
      if (w === r.current)
        return;
      f(w);
    } else
      console.log("Clicked on non-image element");
  }, [f, R]), D = U((m) => {
    if ((m.key === "Delete" || m.key === "Backspace") && r.current && !p.current) {
      m.preventDefault();
      const w = r.current;
      if (w.parentNode) {
        w.parentNode.removeChild(w), R();
        const M = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(M);
      }
    }
    if (m.key === "Escape" && r.current && R(), r.current && !p.current) {
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === ">") {
        m.preventDefault();
        const w = r.current.offsetWidth, M = Math.min(y.current.maxWidth || 800, w + 10);
        v(r.current, { width: M, height: r.current.offsetHeight });
        const x = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(x);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "<") {
        m.preventDefault();
        const w = r.current.offsetWidth, M = Math.max(y.current.minWidth || 50, w - 10);
        v(r.current, { width: M, height: r.current.offsetHeight });
        const x = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(x);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "+") {
        m.preventDefault();
        const w = r.current.offsetHeight, M = Math.min(y.current.maxHeight || 600, w + 10);
        v(r.current, { width: r.current.offsetWidth, height: M });
        const x = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(x);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "-") {
        m.preventDefault();
        const w = r.current.offsetHeight, M = Math.max(y.current.minHeight || 50, w - 10);
        v(r.current, { width: r.current.offsetWidth, height: M });
        const x = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(x);
      }
      if ((m.ctrlKey || m.metaKey) && m.key === "r") {
        m.preventDefault(), v(r.current, { width: 300, height: 200 });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
    }
  }, [e, R]), A = U(() => {
    a.current && r.current && ot(a.current, r.current);
  }, []);
  ie(() => {
    if (!e.current) return;
    const w = e.current.closest(".editor-viewport");
    return w && (w.addEventListener("scroll", A), window.addEventListener("scroll", A)), () => {
      w && w.removeEventListener("scroll", A), window.removeEventListener("scroll", A);
    };
  }, [e, A]), ie(() => {
    if (!e.current) return;
    const m = e.current;
    m.addEventListener("click", k), m.addEventListener("keydown", D);
    const w = m.closest(".editor-viewport");
    return w && w.addEventListener("scroll", A), window.addEventListener("resize", A), () => {
      m.removeEventListener("click", k), m.removeEventListener("keydown", D), w && w.removeEventListener("scroll", A), window.removeEventListener("resize", A), p.current && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && ye(a.current);
    };
  }, [e, k, D, A, d, b]), ie(() => {
    if (!e.current) return;
    const m = new MutationObserver((w) => {
      w.forEach((M) => {
        M.type === "childList" && (M.removedNodes.length > 0 && M.removedNodes.forEach((x) => {
          x.nodeType === Node.ELEMENT_NODE && fe(x) && x === r.current && R();
        }), M.addedNodes.length > 0 && M.addedNodes.forEach((x) => {
          if (x.nodeType === Node.ELEMENT_NODE)
            if (fe(x))
              setTimeout(() => {
                f(x);
              }, 50);
            else {
              const z = x.querySelectorAll ? x.querySelectorAll("img") : [];
              z.length > 0 && setTimeout(() => {
                f(z[0]);
              }, 50);
            }
        }));
      });
    });
    return m.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => {
      m.disconnect();
    };
  }, [e, R, f]);
  function j(m) {
    switch (m) {
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
  function l({
    handler: m,
    startX: w,
    startY: M,
    currentX: x,
    currentY: z,
    startWidth: W,
    startHeight: X,
    options: $ = ge
  }) {
    const oe = x - w, ee = z - M;
    let G = W, q = X;
    switch (m) {
      case P.TOP_LEFT:
        G = Math.max($.minWidth, W - oe), q = Math.max($.minHeight, X - ee);
        break;
      case P.TOP_RIGHT:
        G = Math.max($.minWidth, W + oe), q = Math.max($.minHeight, X - ee);
        break;
      case P.BOTTOM_LEFT:
        G = Math.max($.minWidth, W - oe), q = Math.max($.minHeight, X + ee);
        break;
      case P.BOTTOM_RIGHT:
        G = Math.max($.minWidth, W + oe), q = Math.max($.minHeight, X + ee);
        break;
      case P.TOP:
        q = Math.max($.minHeight, X - ee);
        break;
      case P.BOTTOM:
        q = Math.max($.minHeight, X + ee);
        break;
      case P.LEFT:
        G = Math.max($.minWidth, W - oe);
        break;
      case P.RIGHT:
        G = Math.max($.minWidth, W + oe);
        break;
      default:
        return { width: G, height: q };
    }
    if ($.preserveAspectRatio && $.aspectRatio) {
      const te = W / X;
      [
        P.TOP_LEFT,
        P.TOP_RIGHT,
        P.BOTTOM_LEFT,
        P.BOTTOM_RIGHT
      ].includes(m) ? G / te > q ? q = Math.max($.minHeight, G / te) : G = Math.max($.minWidth, q * te) : [P.TOP, P.BOTTOM].includes(m) ? G = q * te : [P.LEFT, P.RIGHT].includes(m) && (q = G / te);
    }
    return $.maxWidth && G > $.maxWidth && (G = $.maxWidth, $.preserveAspectRatio && $.aspectRatio && (q = G / (W / X))), $.maxHeight && q > $.maxHeight && (q = $.maxHeight, $.preserveAspectRatio && $.aspectRatio && (G = q * (W / X))), G = Math.max($.minWidth, G), q = Math.max($.minHeight, q), {
      width: Math.round(G),
      height: Math.round(q)
    };
  }
  function v(m, { width: w, height: M }) {
    fe(m) && (m.tagName === "IMG" ? (m.style.width = `${w}px`, m.style.height = `${M}px`, m.width = w, m.height = M) : m.tagName === "DIV" && (m.style.width = `${w}px`, m.style.height = `${M}px`));
  }
  return null;
};
gt.propTypes = {
  editorRef: T.shape({
    current: T.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: T.func,
  onImageSelect: T.func,
  onImageDeselect: T.func,
  resizeOptions: T.shape({
    minWidth: T.number,
    minHeight: T.number,
    maxWidth: T.number,
    maxHeight: T.number,
    aspectRatio: T.bool,
    preserveAspectRatio: T.bool,
    defaultWidth: T.number,
    defaultHeight: T.number
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
  onClose: s,
  initialPreserveAspectRatio: a = !0
}) => {
  const [r, i] = le({ top: 0, left: 0 }), [g, y] = le(!1), [p, h] = le("top"), [f, R] = le(a), O = ne(null), d = ne(null), b = Re(), k = (x) => {
    if (!x) return null;
    const z = window.getComputedStyle(x);
    return {
      float: z.float || "none",
      margin: x.style.margin || "",
      display: z.display || "inline",
      width: x.style.width || x.width || "",
      height: x.style.height || x.height || "",
      aspectRatio: f
    };
  }, D = () => {
    if (!e) return "left";
    const x = window.getComputedStyle(e);
    return x.float || x.display === "block" ? "left" : x.display === "flex" && x.justifyContent === "center" ? "center" : x.float === "right" ? "right" : "left";
  }, [A, j] = le(D());
  ie(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ie(() => {
    if (e) {
      let x = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      x && (d.current = x);
    }
  }, [e]), _n(() => {
    if (!e || !O.current) return;
    const x = () => {
      const W = e.getBoundingClientRect(), X = O.current.getBoundingClientRect();
      d.current;
      const $ = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, oe = W.bottom >= 0 && W.top <= $.height && W.right >= 0 && W.left <= $.width;
      let ee = "top", G = 0, q = 0;
      if (oe) {
        const C = W.top - X.height - 10, N = $.height - W.bottom - X.height - 10;
        N > C && N > 0 ? (ee = "bottom", G = W.bottom + 10) : (ee = "top", G = W.top - X.height - 10);
      } else
        ee = "top", G = 10;
      q = W.left + W.width / 2 - X.width / 2;
      const te = window.innerWidth, E = window.innerHeight;
      let c = q, _ = G;
      q < 10 ? c = 10 : q + X.width > te - 10 && (c = te - X.width - 10), G < 10 ? _ = 10 : G + X.height > E - 10 && (_ = E - X.height - 10), i({
        top: _,
        left: c
      }), h(ee), y(!0);
    };
    x();
    const z = () => {
      x();
    };
    return d.current && d.current.addEventListener("scroll", z), window.addEventListener("scroll", z), window.addEventListener("resize", z), () => {
      d.current && d.current.removeEventListener("scroll", z), window.removeEventListener("scroll", z), window.removeEventListener("resize", z), y(!1);
    };
  }, [e]), ie(() => {
    const x = (z) => {
      O.current && !O.current.contains(z.target) && z.target !== e && s();
    };
    return document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [e, s]);
  const l = () => {
    if (e) {
      const x = k(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", j("left");
      const z = k(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: D(), state: x } }
      ), t && t("left");
    }
  }, v = () => {
    if (e) {
      const x = k(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", j("center");
      const z = k(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: D(), state: x } }
      ), t && t("center");
    }
  }, m = () => {
    if (e) {
      const x = k(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", j("right");
      const z = k(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: D(), state: x } }
      ), t && t("right");
    }
  }, w = () => {
    if (e && e.parentNode) {
      const x = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      b.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: x } }
      ), e.parentNode.removeChild(e), n && n(), s();
    }
  }, M = () => {
    const x = f, z = !f;
    R(z), b.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: z } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: x } }
    ), o && o(z);
  };
  return !e || typeof document > "u" ? null : wn(
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: O,
        className: "image-tooltip-menu",
        "data-menu-position": p,
        "aria-hidden": !g,
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
          pointerEvents: g ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: g ? 1 : 0,
          visibility: g ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${f ? "" : "active"}`,
              onClick: M,
              title: `Toggle aspect ratio preservation (currently ${f ? "ON" : "OFF"})`,
              children: f ? /* @__PURE__ */ u.jsx(mo, { size: 14 }) : /* @__PURE__ */ u.jsx(Kr, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${A === "left" ? "active" : ""}`,
              onClick: l,
              title: "Align Left",
              style: {
                background: A === "left" ? "#007bff" : "transparent",
                color: A === "left" ? "#fff" : "#333",
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
              className: `tooltip-button ${A === "center" ? "active" : ""}`,
              onClick: v,
              title: "Align Center",
              style: {
                background: A === "center" ? "#007bff" : "transparent",
                color: A === "center" ? "#fff" : "#333",
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
              className: `tooltip-button ${A === "right" ? "active" : ""}`,
              onClick: m,
              title: "Align Right",
              style: {
                background: A === "right" ? "#007bff" : "transparent",
                color: A === "right" ? "#fff" : "#333",
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
              onClick: w,
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
              children: /* @__PURE__ */ u.jsx(So, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
ht.propTypes = {
  imageElement: T.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: T.func,
  onAspectRatioToggle: T.func,
  onDelete: T.func,
  onClose: T.func.isRequired,
  initialPreserveAspectRatio: T.bool
};
ht.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Xo = 50, Jo = 50, Ut = 50, Qo = 100, ea = 500, Gt = "UPDATE_CONTINUOUS_CONTENT", mt = st(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: s,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: i = !0,
  showToolbar: g = !0,
  showPageManager: y = !0
}, p) => {
  const h = Vt(), f = Re(), { pageSize: R, pageMargins: O, continuousContent: d, pageBoundaries: b, activePage: k, zoomLevel: D, canUndo: A, canRedo: j } = h, l = ne(null), v = ne(null), { currentFormat: m, formatText: w, updateCurrentFormatFromSelection: M } = Kn(), [x, z] = le(!1), [W, X] = le(null), [$, oe] = le(!0), {
    checkAndUpdateBoundaries: ee,
    getCurrentPage: G,
    scrollToPage: q,
    updateBoundaries: te,
    triggerAutoReflow: E,
    removePageAndContent: c,
    insertPageBreakAtBoundary: _
  } = yr(R, v, D, O), C = ze(() => lt(R), [R]), [N, Z] = le(!1), H = ne(null), I = ne(!1), F = ne(!1), V = ne(!1), Y = ne(d);
  ie(() => {
    if (v.current) {
      if (!V.current) {
        v.current.innerHTML = d, V.current = !0, Y.current = d;
        const L = setTimeout(() => {
          te();
        }, Xo);
        return () => clearTimeout(L);
      }
      if (Y.current !== d) {
        if (v.current.innerHTML !== d) {
          v.current.innerHTML = d;
          const re = setTimeout(() => {
            if (te(), I.current) {
              I.current = !1;
              const de = Math.max(0, b.length - 1);
              f.setActivePage(de), setTimeout(() => {
                q(de, l);
              }, Ut);
            }
          }, Jo);
          return Y.current = d, () => clearTimeout(re);
        }
        Y.current = d;
      }
    }
  }, [d, te, b.length, f, q]), ie(() => {
    r && V.current && r(d);
  }, [d, r]), Pn(p, () => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => v.current ? v.current.innerHTML : d,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (v.current ? v.current.innerHTML : d).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (L) => {
      f.updateContinuousContent(L), v.current && (v.current.innerHTML = L, setTimeout(() => {
        te();
      }, 50));
    }
  }), [d, f, te, v]), ie(() => {
    const L = () => {
      M();
    };
    document.addEventListener("selectionchange", L);
    const re = () => {
      setTimeout(M, 10);
    };
    return v.current && v.current.addEventListener("focus", re), () => {
      document.removeEventListener("selectionchange", L), v.current && v.current.removeEventListener("focus", re);
    };
  }, [M]);
  const ae = U(() => {
    if (!v.current) return;
    let L = v.current.innerHTML;
    L = Pr(L), L !== v.current.innerHTML && (v.current.innerHTML = L);
    const re = d;
    if (re !== L) {
      const ve = {
        type: Gt,
        payload: L
      }, Te = {
        type: Gt,
        payload: re
      };
      f.recordOperation(ve, Te);
    }
    f.updateContinuousContent(L), ee(), E(200);
    const de = G(l);
    de !== k && f.setActivePage(de);
  }, [f, ee, G, k, E, l, v, d]), S = U((L) => {
    ae();
  }, [ae]), se = U((L) => {
    f.updatePageSize(L), te({ pageSize: L }), s && s(L);
  }, [f, te, s]), he = U((L) => {
    f.updatePageMargins(L), te({ pageMargins: L }), a && a(L);
  }, [f, te, a]), Ee = U((L) => {
    L < 0 || L >= b.length || (F.current = !0, f.setActivePage(L), q(L, l), setTimeout(() => {
      F.current = !1;
    }, ea), t && t(L));
  }, [f, q, t, b.length]), yt = U(() => {
    const L = b.length + 1;
    _(L) && (I.current = !0, setTimeout(() => {
      if (I.current) {
        I.current = !1;
        const de = Math.max(0, b.length - 1);
        f.setActivePage(de), setTimeout(() => {
          q(de, l);
        }, Ut);
      }
    }, 100)), o && o();
  }, [b.length, _, f, q, o]), hn = U(() => {
    const L = window.getSelection();
    if (L && L.rangeCount > 0) {
      if (!v?.current) return;
      const ve = `<page-break data-page-break="true" contenteditable="false" data-page-number="${v.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ve), setTimeout(() => {
        te();
        const Te = G(l);
        f.setActivePage(Te);
      }, 150);
    }
  }, [te, G, f, l]), bt = U((L) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    c(L) && (f.setActivePage(0), n && n(L));
  }, [b.length, c, f, n]), Se = U(() => {
    f.zoomIn();
  }, [f]), ke = U(() => {
    f.zoomOut();
  }, [f]), Ne = U(() => {
    f.resetZoom();
  }, [f]), Et = U(() => {
    f.undo();
  }, [f]), vt = U(() => {
    f.redo();
  }, [f]);
  ie(() => {
    const L = (re) => {
      if (re.ctrlKey || re.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(re.key) && re.preventDefault();
        const de = document.activeElement === v.current, ve = document.activeElement === l.current, Te = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (de || ve || !Te)
          switch (re.key) {
            case "+":
            case "=":
              Se();
              break;
            case "-":
            case "_":
              ke();
              break;
            case "0":
              Ne();
              break;
            case "z":
              re.shiftKey || Et();
              break;
            case "y":
              vt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", L), () => {
      window.removeEventListener("keydown", L);
    };
  }, [Se, ke, Ne, Et, vt]);
  const mn = U(() => {
    !l.current || !v.current || F.current || (H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      if (F.current) {
        H.current = null;
        return;
      }
      const L = G(l);
      L !== k && L >= 0 && f.setActivePage(L), H.current = null;
    }, Qo));
  }, [G, k, f]), yn = ze(() => {
    if (!d) return 0;
    const re = d.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return re ? re.length : 0;
  }, [d]), bn = b.length || 1, En = U((L) => {
    z(!0), X(L);
  }, []), Tt = U(() => {
    z(!1), X(null);
  }, []), vn = U((L, re) => {
  }, []);
  return ie(() => () => {
    H.current && clearTimeout(H.current);
  }, []), /* @__PURE__ */ u.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ u.jsx(
      dt,
      {
        currentFormat: {
          ...m,
          imageSelected: x
        },
        onFormatText: w,
        onAddPageBreak: hn,
        canUndo: A,
        canRedo: j
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ u.jsx(
        Bo,
        {
          editorView: null,
          isCollapsed: N,
          onToggle: () => Z((L) => !L),
          wordCount: yn,
          pageCount: bn
        }
      ),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: l,
          onScroll: mn,
          children: /* @__PURE__ */ u.jsx(
            ft,
            {
              content: d,
              dimensions: C,
              pageSize: R,
              pageMargins: O,
              pageBoundaries: b,
              editorRef: v,
              onInput: S,
              onContentChange: ae,
              onClick: () => v.current?.focus(),
              zoomLevel: D
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsx(
        gt,
        {
          editorRef: v,
          onImageSelect: En,
          onImageDeselect: Tt,
          onImageResize: vn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: $,
            aspectRatio: $
          }
        }
      ),
      x && W && /* @__PURE__ */ u.jsx(
        ht,
        {
          imageElement: W,
          initialPreserveAspectRatio: $,
          onAlignChange: (L) => {
          },
          onAspectRatioToggle: (L) => {
            oe(L);
          },
          onDelete: () => {
            if (W) {
              const L = W.getAttribute("data-key");
              L && Ar(L).catch((re) => {
                console.error("Failed to delete image from IndexedDB:", re);
              });
            }
          },
          onClose: Tt
        }
      ),
      y && /* @__PURE__ */ u.jsx("div", { className: "page-manager-sidebar", children: e ? $e.cloneElement(e, {
        onNavigate: Ee,
        onAddPage: yt,
        onDeletePage: bt,
        onPageSizeChange: se,
        onPageMarginsChange: he,
        zoomLevel: D,
        canZoomIn: et(D),
        canZoomOut: tt(D),
        onZoomIn: Se,
        onZoomOut: ke,
        onZoomReset: Ne
      }) : /* @__PURE__ */ u.jsx(
        Ko,
        {
          pageBoundaries: b,
          activePage: k,
          pageSize: R,
          pageMargins: O,
          zoomLevel: D,
          canZoomIn: et(D),
          canZoomOut: tt(D),
          onNavigate: Ee,
          onAddPage: yt,
          onDeletePage: bt,
          onPageSizeChange: se,
          onPageMarginsChange: he,
          onZoomIn: Se,
          onZoomOut: ke,
          onZoomReset: Ne
        }
      ) })
    ] })
  ] });
});
mt.displayName = "HtmlEditor";
mt.propTypes = {
  pageManagerComponent: T.element,
  onNavigatePage: T.func,
  onAddPage: T.func,
  onDeletePage: T.func,
  onPageSizeChange: T.func,
  onPageMarginsChange: T.func,
  onChange: T.func,
  showSidebar: T.bool,
  showToolbar: T.bool,
  showPageManager: T.bool
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
class gn extends $e.Component {
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
  children: T.node.isRequired,
  fallback: T.node,
  onError: T.func,
  onReset: T.func,
  showDetails: T.bool
};
gn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const ha = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Wn as COMMON_FONT_SIZES,
  Ue as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Wt as DEFAULT_PAGE_SIZE,
  ia as DocumentProvider,
  dt as EditorToolbar,
  gn as ErrorBoundary,
  Jt as FONT_SIZE_MAP,
  mt as HtmlEditor,
  gt as ImageResizeHandlers,
  ha as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  Ko as PageManager,
  ft as PageView,
  P as RESIZE_HANDLERS,
  Bo as Sidebar,
  fa as applyImageDimensions,
  ua as calculateResizeDimensions,
  pa as clearImages,
  Qt as createResizeOverlay,
  Ar as deleteImage,
  ga as getAllImageKeys,
  aa as getAvailablePageSizes,
  xr as getImage,
  da as getImageDimensions,
  lt as getPageDimensions,
  sa as getPixelValue,
  ca as getPointValue,
  fe as isResizableImage,
  la as isValidFontSize,
  oa as isValidPageSize,
  $o as logger,
  Zn as pixelsToPoints,
  qn as pointsToPixels,
  ye as removeResizeOverlay,
  Tr as saveImage,
  ot as updateResizeOverlay,
  yr as useContinuousReflow,
  Yt as useDocument,
  Re as useDocumentActions,
  Vt as useDocumentState,
  Kn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
