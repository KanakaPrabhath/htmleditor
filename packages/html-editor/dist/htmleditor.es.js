import He, { createContext as bn, useContext as En, useReducer as vn, useMemo as je, useState as le, useCallback as F, useRef as ne, useEffect as ie, forwardRef as st, createElement as Ke, useLayoutEffect as xn, useImperativeHandle as Tn } from "react";
import { v4 as ct } from "uuid";
import { createPortal as An } from "react-dom";
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oe = { exports: {} }, ve = {};
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
function Pn() {
  if (vt) return ve;
  vt = 1;
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
  return ve.Fragment = t, ve.jsx = o, ve.jsxs = o, ve;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function wn() {
  return xt || (xt = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case O:
          return "StrictMode";
        case v:
          return "Suspense";
        case m:
          return "SuspenseList";
        case T:
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
          case N:
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
        var M = _.error, C = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return M.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(c);
      }
    }
    function n(c) {
      if (c === b) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === N)
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
      function M() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: M,
        configurable: !0
      });
    }
    function g() {
      var c = e(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function y(c, _, M, C, Z, H) {
      var I = M.ref;
      return c = {
        $$typeof: S,
        type: c,
        key: _,
        props: M,
        _owner: C
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
    function f(c, _, M, C, Z, H) {
      var I = _.children;
      if (I !== void 0)
        if (C)
          if ($(I)) {
            for (C = 0; C < I.length; C++)
              h(I[C]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(I);
      if (X.call(_, "key")) {
        I = e(c);
        var U = Object.keys(_).filter(function(Y) {
          return Y !== "key";
        });
        C = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", E[I + C] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          I,
          U,
          I
        ), E[I + C] = !0);
      }
      if (I = null, M !== void 0 && (o(M), I = "" + M), r(_) && (o(_.key), I = "" + _.key), "key" in _) {
        M = {};
        for (var V in _)
          V !== "key" && (M[V] = _[V]);
      } else M = _;
      return I && i(
        M,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), y(
        c,
        I,
        M,
        s(),
        Z,
        H
      );
    }
    function h(c) {
      p(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === N && (c._payload.status === "fulfilled" ? p(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function p(c) {
      return typeof c == "object" && c !== null && c.$$typeof === S;
    }
    var R = He, S = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), j = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), W = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, $ = Array.isArray, oe = console.createTask ? console.createTask : function() {
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
    xe.Fragment = b, xe.jsx = function(c, _, M) {
      var C = 1e4 > W.recentlyCreatedOwnerStacks++;
      return f(
        c,
        _,
        M,
        !1,
        C ? Error("react-stack-top-frame") : q,
        C ? oe(n(c)) : te
      );
    }, xe.jsxs = function(c, _, M) {
      var C = 1e4 > W.recentlyCreatedOwnerStacks++;
      return f(
        c,
        _,
        M,
        !0,
        C ? Error("react-stack-top-frame") : q,
        C ? oe(n(c)) : te
      );
    };
  })()), xe;
}
var Tt;
function Rn() {
  return Tt || (Tt = 1, process.env.NODE_ENV === "production" ? Oe.exports = Pn() : Oe.exports = wn()), Oe.exports;
}
var u = Rn();
const Xe = 100, Je = 50, Qe = 200, At = 5, et = (e) => e < Qe, tt = (e) => e > Je, Sn = 96, Ce = (e) => Math.round(e * Sn), De = {
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
}, fe = "NORMAL", $t = (e = fe) => {
  const t = De[e] || De[fe];
  return {
    top: Ce(t.top),
    bottom: Ce(t.bottom),
    left: Ce(t.left),
    right: Ce(t.right)
  };
}, kn = (e = fe) => {
  const t = $t(e);
  return t.top + t.bottom;
}, On = () => Object.keys(De), Cn = (e) => {
  const t = De[e];
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
}, Gt = "A4", lt = (e) => {
  const t = ce[e] || ce[Gt];
  return {
    width: t.width,
    height: t.height
  };
}, ta = (e) => Object.keys(ce).includes(e), na = () => Object.keys(ce), _e = Gt, me = "<p><br></p>", Mn = "continuous", Ae = (e, t = _e) => ({
  id: ct(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), Ie = (e) => typeof e != "string" || e.trim() === "" ? me : e, Ut = (e, t = _e) => (e.length > 0 ? e : [Ae(0, t)]).map((n, s) => ({
  id: n.id || ct(),
  index: s,
  size: n.size || t,
  content: Ie(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Nn = (e = _e) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: lt(e).height
}], nt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || _e, n = Ut(e.pages || [Ae(0, o)], o);
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
    editorMode: e.editorMode || Mn,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || Nn(o),
    zoomLevel: e.zoomLevel || Xe,
    pageMargins: e.pageMargins || fe,
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
      const { initialContent: n = me, pageSize: s = _e } = t.payload || {}, a = { ...Ae(0, s), content: Ie(n) };
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
        content: Ie(s)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case B.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = Ut(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : s.slice(0, -1).map((r, i) => ({
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
      s.splice(n, 0, Ae(n, e.pageSize));
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
      const n = Ie(t.payload);
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
          const y = g[s], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", y.parentNode.insertBefore(f, y.nextSibling), f.parentNode.insertBefore(h, f.nextSibling), r = i.innerHTML;
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
`) || me : e.continuousContent && e.continuousContent !== me && (a = [{ ...Ae(0, e.pageSize), content: e.continuousContent }]), {
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
      const n = e.zoomLevel + At;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case B.ZOOM_OUT: {
      if (!tt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - At;
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
}, Ft = bn(null), ra = ({ children: e, initialState: t = {} }) => {
  const [o, n] = vn(rt, nt(t)), s = je(() => ({
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
  }), []), a = je(() => ({
    state: o,
    actions: s,
    dispatch: n
  }), [o, s]);
  return /* @__PURE__ */ u.jsx(Ft.Provider, { value: a, children: e });
}, Wt = () => {
  const e = En(Ft);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, qt = () => {
  const { state: e } = Wt();
  return e;
}, Pe = () => {
  const { actions: e } = Wt();
  return e;
};
var Me = { exports: {} }, Ne = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function In() {
  if (_t) return J;
  _t = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
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
                case f:
                case S:
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
  return J.AsyncMode = g, J.ConcurrentMode = y, J.ContextConsumer = i, J.ContextProvider = r, J.Element = t, J.ForwardRef = f, J.Fragment = n, J.Lazy = S, J.Memo = R, J.Portal = o, J.Profiler = a, J.StrictMode = s, J.Suspense = h, J.isAsyncMode = function(l) {
    return j(l) || A(l) === g;
  }, J.isConcurrentMode = j, J.isContextConsumer = function(l) {
    return A(l) === i;
  }, J.isContextProvider = function(l) {
    return A(l) === r;
  }, J.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, J.isForwardRef = function(l) {
    return A(l) === f;
  }, J.isFragment = function(l) {
    return A(l) === n;
  }, J.isLazy = function(l) {
    return A(l) === S;
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
    return typeof l == "string" || typeof l == "function" || l === n || l === y || l === a || l === s || l === h || l === p || typeof l == "object" && l !== null && (l.$$typeof === S || l.$$typeof === R || l.$$typeof === r || l.$$typeof === i || l.$$typeof === f || l.$$typeof === b || l.$$typeof === O || l.$$typeof === D || l.$$typeof === d);
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
var Pt;
function Ln() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function A(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === y || k === a || k === s || k === h || k === p || typeof k == "object" && k !== null && (k.$$typeof === S || k.$$typeof === R || k.$$typeof === r || k.$$typeof === i || k.$$typeof === f || k.$$typeof === b || k.$$typeof === O || k.$$typeof === D || k.$$typeof === d);
    }
    function j(k) {
      if (typeof k == "object" && k !== null) {
        var se = k.$$typeof;
        switch (se) {
          case t:
            var he = k.type;
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
                  case f:
                  case S:
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
    var l = g, v = y, m = i, w = r, N = t, T = f, z = n, W = S, X = R, $ = o, oe = a, ee = s, G = h, q = !1;
    function te(k) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(k) || j(k) === g;
    }
    function E(k) {
      return j(k) === y;
    }
    function c(k) {
      return j(k) === i;
    }
    function _(k) {
      return j(k) === r;
    }
    function M(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function C(k) {
      return j(k) === f;
    }
    function Z(k) {
      return j(k) === n;
    }
    function H(k) {
      return j(k) === S;
    }
    function I(k) {
      return j(k) === R;
    }
    function U(k) {
      return j(k) === o;
    }
    function V(k) {
      return j(k) === a;
    }
    function Y(k) {
      return j(k) === s;
    }
    function ae(k) {
      return j(k) === h;
    }
    Q.AsyncMode = l, Q.ConcurrentMode = v, Q.ContextConsumer = m, Q.ContextProvider = w, Q.Element = N, Q.ForwardRef = T, Q.Fragment = z, Q.Lazy = W, Q.Memo = X, Q.Portal = $, Q.Profiler = oe, Q.StrictMode = ee, Q.Suspense = G, Q.isAsyncMode = te, Q.isConcurrentMode = E, Q.isContextConsumer = c, Q.isContextProvider = _, Q.isElement = M, Q.isForwardRef = C, Q.isFragment = Z, Q.isLazy = H, Q.isMemo = I, Q.isPortal = U, Q.isProfiler = V, Q.isStrictMode = Y, Q.isSuspense = ae, Q.isValidElementType = A, Q.typeOf = j;
  })()), Q;
}
var wt;
function Zt() {
  return wt || (wt = 1, process.env.NODE_ENV === "production" ? Ne.exports = In() : Ne.exports = Ln()), Ne.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ue, Rt;
function jn() {
  if (Rt) return Ue;
  Rt = 1;
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
      var g = Object.getOwnPropertyNames(r).map(function(f) {
        return r[f];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        y[f] = f;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ue = s() ? Object.assign : function(a, r) {
    for (var i, g = n(a), y, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var h in i)
        t.call(i, h) && (g[h] = i[h]);
      if (e) {
        y = e(i);
        for (var p = 0; p < y.length; p++)
          o.call(i, y[p]) && (g[y[p]] = i[y[p]]);
      }
    }
    return g;
  }, Ue;
}
var Fe, St;
function ut() {
  if (St) return Fe;
  St = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fe = e, Fe;
}
var We, kt;
function Yt() {
  return kt || (kt = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var qe, Ot;
function Dn() {
  if (Ot) return qe;
  Ot = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ut(), o = {}, n = /* @__PURE__ */ Yt();
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
      for (var f in a)
        if (n(a, f)) {
          var h;
          try {
            if (typeof a[f] != "function") {
              var p = Error(
                (g || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            h = a[f](r, f, g, i, null, t);
          } catch (S) {
            h = S;
          }
          if (h && !(h instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
var Ze, Ct;
function zn() {
  if (Ct) return Ze;
  Ct = 1;
  var e = Zt(), t = jn(), o = /* @__PURE__ */ ut(), n = /* @__PURE__ */ Yt(), s = /* @__PURE__ */ Dn(), a = function() {
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
    var y = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(E) {
      var c = E && (y && E[y] || E[f]);
      if (typeof c == "function")
        return c;
    }
    var p = "<<anonymous>>", R = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: D(),
      arrayOf: A,
      element: j(),
      elementType: l(),
      instanceOf: v,
      node: T(),
      objectOf: w,
      oneOf: m,
      oneOfType: N,
      shape: W,
      exact: X
    };
    function S(E, c) {
      return E === c ? E !== 0 || 1 / E === 1 / c : E !== E && c !== c;
    }
    function d(E, c) {
      this.message = E, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function b(E) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, _ = 0;
      function M(Z, H, I, U, V, Y, ae) {
        if (U = U || p, Y = Y || I, ae !== o) {
          if (g) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = U + ":" + I;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, _++);
          }
        }
        return H[I] == null ? Z ? H[I] === null ? new d("The " + V + " `" + Y + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new d("The " + V + " `" + Y + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : E(H, I, U, V, Y);
      }
      var C = M.bind(null, !1);
      return C.isRequired = M.bind(null, !0), C;
    }
    function O(E) {
      function c(_, M, C, Z, H, I) {
        var U = _[M], V = ee(U);
        if (V !== E) {
          var Y = G(U);
          return new d(
            "Invalid " + Z + " `" + H + "` of type " + ("`" + Y + "` supplied to `" + C + "`, expected ") + ("`" + E + "`."),
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
      function c(_, M, C, Z, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var I = _[M];
        if (!Array.isArray(I)) {
          var U = ee(I);
          return new d("Invalid " + Z + " `" + H + "` of type " + ("`" + U + "` supplied to `" + C + "`, expected an array."));
        }
        for (var V = 0; V < I.length; V++) {
          var Y = E(I, V, C, Z, H + "[" + V + "]", o);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(c);
    }
    function j() {
      function E(c, _, M, C, Z) {
        var H = c[_];
        if (!i(H)) {
          var I = ee(H);
          return new d("Invalid " + C + " `" + Z + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function l() {
      function E(c, _, M, C, Z) {
        var H = c[_];
        if (!e.isValidElementType(H)) {
          var I = ee(H);
          return new d("Invalid " + C + " `" + Z + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function v(E) {
      function c(_, M, C, Z, H) {
        if (!(_[M] instanceof E)) {
          var I = E.name || p, U = te(_[M]);
          return new d("Invalid " + Z + " `" + H + "` of type " + ("`" + U + "` supplied to `" + C + "`, expected ") + ("instance of `" + I + "`."));
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
      function c(_, M, C, Z, H) {
        for (var I = _[M], U = 0; U < E.length; U++)
          if (S(I, E[U]))
            return null;
        var V = JSON.stringify(E, function(ae, k) {
          var se = G(k);
          return se === "symbol" ? String(k) : k;
        });
        return new d("Invalid " + Z + " `" + H + "` of value `" + String(I) + "` " + ("supplied to `" + C + "`, expected one of " + V + "."));
      }
      return b(c);
    }
    function w(E) {
      function c(_, M, C, Z, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var I = _[M], U = ee(I);
        if (U !== "object")
          return new d("Invalid " + Z + " `" + H + "` of type " + ("`" + U + "` supplied to `" + C + "`, expected an object."));
        for (var V in I)
          if (n(I, V)) {
            var Y = E(I, V, C, Z, H + "." + V, o);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(c);
    }
    function N(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < E.length; c++) {
        var _ = E[c];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(_) + " at index " + c + "."
          ), r;
      }
      function M(C, Z, H, I, U) {
        for (var V = [], Y = 0; Y < E.length; Y++) {
          var ae = E[Y], k = ae(C, Z, H, I, U, o);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && V.push(k.data.expectedType);
        }
        var se = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new d("Invalid " + I + " `" + U + "` supplied to " + ("`" + H + "`" + se + "."));
      }
      return b(M);
    }
    function T() {
      function E(c, _, M, C, Z) {
        return $(c[_]) ? null : new d("Invalid " + C + " `" + Z + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function z(E, c, _, M, C) {
      return new d(
        (E || "React class") + ": " + c + " type `" + _ + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function W(E) {
      function c(_, M, C, Z, H) {
        var I = _[M], U = ee(I);
        if (U !== "object")
          return new d("Invalid " + Z + " `" + H + "` of type `" + U + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var V in E) {
          var Y = E[V];
          if (typeof Y != "function")
            return z(C, Z, H, V, G(Y));
          var ae = Y(I, V, C, Z, H + "." + V, o);
          if (ae)
            return ae;
        }
        return null;
      }
      return b(c);
    }
    function X(E) {
      function c(_, M, C, Z, H) {
        var I = _[M], U = ee(I);
        if (U !== "object")
          return new d("Invalid " + Z + " `" + H + "` of type `" + U + "` " + ("supplied to `" + C + "`, expected `object`."));
        var V = t({}, _[M], E);
        for (var Y in V) {
          var ae = E[Y];
          if (n(E, Y) && typeof ae != "function")
            return z(C, Z, H, Y, G(ae));
          if (!ae)
            return new d(
              "Invalid " + Z + " `" + H + "` key `" + Y + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(_[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var k = ae(I, Y, C, Z, H + "." + Y, o);
          if (k)
            return k;
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
            var _ = c.call(E), M;
            if (c !== E.entries) {
              for (; !(M = _.next()).done; )
                if (!$(M.value))
                  return !1;
            } else
              for (; !(M = _.next()).done; ) {
                var C = M.value;
                if (C && !$(C[1]))
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
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return R.checkPropTypes = s, R.resetWarningCache = s.resetWarningCache, R.PropTypes = R, R;
  }, Ze;
}
var Ye, Mt;
function Hn() {
  if (Mt) return Ye;
  Mt = 1;
  var e = /* @__PURE__ */ ut();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ye = function() {
    function n(r, i, g, y, f, h) {
      if (h !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
var Nt;
function Bn() {
  if (Nt) return Me.exports;
  if (Nt = 1, process.env.NODE_ENV !== "production") {
    var e = Zt(), t = !0;
    Me.exports = /* @__PURE__ */ zn()(e.isElement, t);
  } else
    Me.exports = /* @__PURE__ */ Hn()();
  return Me.exports;
}
var $n = /* @__PURE__ */ Bn();
const x = /* @__PURE__ */ _n($n), Vt = {
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
}, Gn = [
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
], Be = "16px", Un = (e) => Math.round(e * 96 / 72), Fn = (e) => Math.round(e * 72 / 96 * 2) / 2, oa = (e) => {
  const t = Object.values(Vt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Un(e)}px`;
}, aa = (e) => {
  const t = parseInt(e), o = Object.values(Vt).find((n) => n.px === t);
  return o ? o.pt : Fn(t);
}, ia = (e) => {
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
function sa({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: r,
  options: i = pe
}) {
  const g = n - t, y = s - o;
  let f = a, h = r;
  switch (e) {
    case P.TOP_LEFT:
      f = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r - y);
      break;
    case P.TOP_RIGHT:
      f = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM_LEFT:
      f = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r + y);
      break;
    case P.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r + y);
      break;
    case P.TOP:
      h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM:
      h = Math.max(i.minHeight, r + y);
      break;
    case P.LEFT:
      f = Math.max(i.minWidth, a - g);
      break;
    case P.RIGHT:
      f = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: f, height: h };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = a / r;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? f / p > h ? h = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, h * p) : [P.TOP, P.BOTTOM].includes(e) ? f = h * p : [P.LEFT, P.RIGHT].includes(e) && (h = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (h = f / (a / r))), i.maxHeight && h > i.maxHeight && (h = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = h * (a / r))), f = Math.max(i.minWidth, f), h = Math.max(i.minHeight, h), {
    width: Math.round(f),
    height: Math.round(h)
  };
}
function de(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ca(e) {
  return de(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function la(e, { width: t, height: o }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Kt(e, t = pe) {
  if (!de(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(P).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Wn(a), r.style.pointerEvents = "all", Xt(r, a, n.width, n.height), o.appendChild(r);
  }), o;
}
function Wn(e) {
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
function Xt(e, t, o, n) {
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
    Xt(s, a, o.width, o.height);
  });
}
function ye(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const qn = {
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
  fontSize: Be,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: pe,
  preserveAspectRatio: !0
}, Zn = () => {
  const [e, t] = le(It), o = Pe(), n = F((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const O = b.getRangeAt(0);
      if (!O.toString())
        return t((A) => ({ ...A, fontFamily: d })), !1;
      try {
        const A = document.createElement("span");
        A.style.fontFamily = d;
        const j = O.extractContents();
        return A.appendChild(j), O.insertNode(A), O.selectNodeContents(A), b.removeAllRanges(), b.addRange(O), t((l) => ({ ...l, fontFamily: d })), !0;
      } catch {
        return document.execCommand("fontName", !1, d), t((j) => ({ ...j, fontFamily: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font family change failed:", b), !1;
    }
  }, []), s = F((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const O = b.getRangeAt(0);
      if (!O.toString())
        return t((A) => ({ ...A, fontSize: d })), !1;
      try {
        const A = document.createElement("span");
        A.style.fontSize = d;
        const j = O.extractContents();
        return A.appendChild(j), O.insertNode(A), O.selectNodeContents(A), b.removeAllRanges(), b.addRange(O), t((l) => ({ ...l, fontSize: d })), !0;
      } catch {
        const j = qn[d] || "3";
        return document.execCommand("fontSize", !1, j), t((l) => ({ ...l, fontSize: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font size change failed:", b), !1;
    }
  }, []), a = F((d, b = null) => {
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
    } catch (O) {
      console.warn(`[useFormatting] Error executing command "${d}":`, O);
    }
  }, [s, n, o]), r = ne(null), i = ne(null), g = ne(null), y = ne(null), f = ne(pe);
  F((d) => {
    if (!de(d)) return;
    r.current && (ye(r.current), r.current = null), d.classList.add("selected");
    const b = Kt(d);
    b && (r.current = b, i.current = d, document.body.appendChild(b), t((O) => ({
      ...O,
      imageSelected: !0,
      preserveAspectRatio: f.current.preserveAspectRatio
    })));
  }, []);
  const h = F(() => {
    i.current && (i.current.classList.remove("selected"), i.current = null), r.current && (ye(r.current), r.current = null), g.current = null, y.current = null, t((d) => ({
      ...d,
      imageSelected: !1
    }));
  }, []), p = F(() => {
    const d = !f.current.preserveAspectRatio;
    f.current = {
      ...f.current,
      preserveAspectRatio: d,
      aspectRatio: d
    }, t((b) => ({
      ...b,
      preserveAspectRatio: d
    }));
  }, []);
  F((d, b, O) => {
    i.current && (g.current = {
      x: b,
      y: O,
      width: i.current.offsetWidth,
      height: i.current.offsetHeight
    }, y.current = d, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Vn(d));
  }, []), F((d, b) => {
    if (!i.current || !g.current || !y.current) return;
    const { x: O, y: D, width: A, height: j } = g.current, l = y.current, v = Kn({
      handler: l,
      startX: O,
      startY: D,
      currentX: d,
      currentY: b,
      startWidth: A,
      startHeight: j,
      options: f.current
    });
    Xn(i.current, v), r.current && ot(r.current, i.current);
  }, []), F(() => {
    if (g.current = null, y.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", i.current) {
      const d = new Event("input", { bubbles: !0, cancelable: !0 });
      i.current.dispatchEvent(d);
    }
  }, []);
  const R = F(() => {
    try {
      const d = window.getSelection();
      if (!d || d.rangeCount === 0)
        return;
      const b = d.getRangeAt(0), O = b.toString();
      let D = Be, A = "Arial", j = "p";
      if (O) {
        const v = b.startContainer, m = v.nodeType === Node.TEXT_NODE ? v.parentElement : v;
        if (m) {
          const w = window.getComputedStyle(m), N = w.fontSize, T = w.fontFamily;
          N && N.endsWith("px") && (D = N), T && T !== "serif" && (A = T.split(",")[0].replace(/['"]/g, "").trim());
          const z = Yn(m);
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
  }, []), S = F(() => {
    h(), t(It);
  }, [h]);
  return ie(() => () => {
    r.current && ye(r.current);
  }, []), {
    currentFormat: e,
    formatText: a,
    resetFormat: S,
    updateCurrentFormatFromSelection: R,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: p
  };
};
function Yn(e) {
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
function Vn(e) {
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
function Kn({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: r,
  options: i = pe
}) {
  const g = n - t, y = s - o;
  let f = a, h = r;
  switch (e) {
    case P.TOP_LEFT:
      f = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r - y);
      break;
    case P.TOP_RIGHT:
      f = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM_LEFT:
      f = Math.max(i.minWidth, a - g), h = Math.max(i.minHeight, r + y);
      break;
    case P.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, a + g), h = Math.max(i.minHeight, r + y);
      break;
    case P.TOP:
      h = Math.max(i.minHeight, r - y);
      break;
    case P.BOTTOM:
      h = Math.max(i.minHeight, r + y);
      break;
    case P.LEFT:
      f = Math.max(i.minWidth, a - g);
      break;
    case P.RIGHT:
      f = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: f, height: h };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = a / r;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? f / p > h ? h = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, h * p) : [P.TOP, P.BOTTOM].includes(e) ? f = h * p : [P.LEFT, P.RIGHT].includes(e) && (h = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (h = f / (a / r))), i.maxHeight && h > i.maxHeight && (h = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = h * (a / r))), f = Math.max(i.minWidth, f), h = Math.max(i.minHeight, h), {
    width: Math.round(f),
    height: Math.round(h)
  };
}
function Xn(e, { width: t, height: o }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const be = 'page-break, [data-page-break="true"]', Jt = (e) => ce[e] || ce.A4, Jn = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = Jt(o), s = e.querySelectorAll(be), a = [];
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
}, Qt = (e, t = 100, o = fe) => {
  const n = Jt(e), s = kn(o), a = n.height - s, r = t / 100;
  return a / r;
}, Qn = (e, t) => {
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
}, Lt = (e) => {
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
}, er = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, tr = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, nr = (e, t, o, n, s, a, r) => {
  if (!e)
    return !1;
  try {
    const g = Qt(o, n, s) * (t - 1), y = Array.from(e.children);
    let f = 0, h = null;
    for (let p = 0; p < y.length; p++) {
      const R = y[p];
      if (R.tagName === "PAGE-BREAK" || R.getAttribute("data-page-break") === "true")
        continue;
      const S = er(R);
      if (f + S > g) {
        h = R;
        break;
      }
      f += S;
    }
    if (h) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(p, h), a) {
        const R = e.innerHTML;
        a(R);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const R = document.createElement("p");
      if (R.innerHTML = "<br>", e.appendChild(R), a) {
        const S = e.innerHTML;
        a(S);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, rr = (e, t, o, n, s, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(be));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const y = window.getSelection();
    let f = !1, h = [], p = null;
    if (t === 0) {
      const S = g[0];
      if (!S)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let d = e.firstChild;
      for (; d && d !== S; )
        h.push(d), d = d.nextSibling;
      p = S;
    } else {
      const S = g[t - 1];
      if (!S)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const d = g[t];
      let b = S.nextSibling;
      for (; b && b !== d; )
        h.push(b), b = b.nextSibling;
      p = S;
    }
    if (y && y.rangeCount > 0) {
      const d = y.getRangeAt(0).startContainer;
      for (const b of h)
        if (b.contains(d) || b === d) {
          f = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), h.forEach((S) => {
      S.parentNode && S.remove();
    }), e.querySelectorAll(be).forEach((S, d) => {
      S.setAttribute("data-page-number", String(d + 2));
    }), f && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const S = e.innerHTML;
      n(S);
    }
    return s && setTimeout(() => {
      s(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, or = 200, ar = 50, jt = 3, ir = 20, en = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, sr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = en(a);
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
}, cr = (e, t, o, n, s, a, r, i) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const g = Qt(t, o, n);
    let y = Lt(e), f = !1, h = 0;
    for (let p = 0; p < y.length && h < jt; p++) {
      const R = y[p], S = sr(R, g);
      if (S && S.overflowIndex > 0) {
        let d = 0;
        for (let A = 0; A < R.length; A++) {
          const j = R[A];
          j && j.getBoundingClientRect && (d += en(j));
        }
        if (d - g < ir)
          continue;
        const O = p + 2;
        tr(S.overflowElement, O) && (f = !0, h++, y = Lt(e));
      }
    }
    if (f) {
      if (s) {
        const p = e.innerHTML;
        s(p);
      }
      setTimeout(() => {
        a && a(), h >= jt && i && setTimeout(() => {
          r.current || i();
        }, 100);
      }, ar);
    }
    return f;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    r.current = !1;
  }
}, lr = (e, t, o = or) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, ur = 400, tn = (e, t) => {
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
}, dr = (e, t, o, n) => {
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
        n ? n(o) : tn(t, o);
      }, ur);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, fr = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, pr = 300, gr = (e, t, o = 100, n = "NARROW") => {
  const s = Pe(), a = ne(null), r = ne(null), i = ne(e), g = ne(o), y = ne(n), f = ne(!1);
  ie(() => {
    i.current = e;
  }, [e]), ie(() => {
    g.current = o;
  }, [o]), ie(() => {
    y.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const h = F((l = {}) => t?.current ? Jn(t.current, l) : [], [t]), p = F((l = {}) => {
    const v = h(l);
    return s.updatePageBoundaries(v), v;
  }, [h, s]), R = F(async (l) => {
    if (!t?.current)
      return !1;
    const v = i.current || "A4", m = g.current || 100, w = y.current || "NARROW";
    return nr(
      t.current,
      l,
      v,
      m,
      w,
      s.updateContinuousContent,
      p
    );
  }, [t, s, p]), S = F(() => {
    if (!t?.current)
      return;
    const l = i.current || "A4", v = g.current || 100, m = y.current || "NARROW";
    cr(
      t.current,
      l,
      v,
      m,
      s.updateContinuousContent,
      p,
      f,
      S
    );
  }, [t, s, p]), d = F((l) => {
    lr(S, r, l);
  }, [S]), b = F((l = {}) => {
    const v = typeof l.delay == "number" ? l.delay : pr;
    fr(p, a, l, v);
  }, [p]), O = F((l) => !l?.current || !t?.current ? 0 : Qn(l.current, t.current), [t]), D = F((l) => {
    t?.current && tn(t.current, l);
  }, [t]), A = F((l, v) => {
    if (!v?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    dr(v.current, t.current, l, D);
  }, [t, D]), j = F((l) => t?.current ? rr(
    t.current,
    l,
    h,
    s.updateContinuousContent,
    p,
    D,
    S
  ) : !1, [t, h, s, p, D, S]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: b,
    updateBoundaries: p,
    getCurrentPage: O,
    scrollToPage: A,
    positionCursorAtPage: D,
    checkAndReflow: S,
    triggerAutoReflow: d,
    removePageAndContent: j,
    insertPageBreakAtBoundary: R,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, hr = "html-editor-storage", mr = 1, ue = "images";
function yr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function we() {
  return new Promise((e, t) => {
    const o = indexedDB.open(hr, mr);
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
function br(e) {
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
        const y = await we(), f = `editor-image-${yr()}`, p = y.transaction([ue], "readwrite").objectStore(ue), R = {
          key: f,
          dataUrl: r,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, S = p.add(R);
        S.onsuccess = () => {
          y.close(), t(f);
        }, S.onerror = () => {
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
async function Er(e) {
  try {
    const t = await we();
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
async function vr(e) {
  try {
    const t = await we();
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
async function ua() {
  try {
    const e = await we();
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
async function da() {
  try {
    const e = await we();
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
function xr(e) {
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
function Tr(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const o = document.createElement("div");
  return o.innerHTML = t, Le(o);
}
function Ar(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function Le(e) {
  const t = [], o = Array.from(e.childNodes);
  for (let n = 0; n < o.length; n++) {
    const s = o[n];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${xr(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s;
      if (a.tagName === "DIV") {
        const r = Le(a);
        r.trim() ? t.push(r) : t.push("<p><br></p>");
      } else if (a.tagName === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(a.tagName)) {
        const r = Ar(a), i = a.tagName.toLowerCase(), g = Ve(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      } else if (a.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(a.tagName)) {
        const r = Le(a), i = a.tagName.toLowerCase(), g = Ve(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      } else if (a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else {
        const r = Le(a), i = a.tagName.toLowerCase(), g = Ve(a);
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
const _r = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Pr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), Dt = (e) => {
  const t = Pr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, nn = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), wr = (e) => {
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
var Rr = {
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
const Sr = st(
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
      ...Rr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: nn("lucide", s),
      ...!a && !wr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...r.map(([y, f]) => Ke(y, f)),
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
    ({ className: n, ...s }, a) => Ke(Sr, {
      ref: a,
      iconNode: t,
      className: nn(
        `lucide-${_r(Dt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
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
const kr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Or = K("bold", kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Mr = K("chevron-left", Cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ir = K("chevron-right", Nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], jr = K("file-check", Lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ze = K("file-text", Dr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Hr = K("hash", zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], $r = K("heading-1", Br);
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
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Ur = K("heading-2", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Wr = K("heading-3", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Zr = K("image-upscale", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Vr = K("image", Yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Xr = K("italic", Kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Qr = K("link", Jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], to = K("list-indent-decrease", eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ro = K("list-indent-increase", no);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], ao = K("list-ordered", oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], rn = K("list", io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], co = K("plus", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], uo = K("redo", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], po = K("scaling", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ho = K("settings", go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], yo = K("strikethrough", mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Eo = K("table", bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], on = K("text-align-center", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], an = K("text-align-end", xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Ao = K("text-align-justify", To);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], sn = K("text-align-start", _o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], wo = K("trash-2", Po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], So = K("underline", Ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Oo = K("undo", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Mo = K("x", Co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Io = K("zoom-in", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], jo = K("zoom-out", Lo), Do = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: s }) => {
  const a = qt(), { pages: r, activePage: i, continuousContent: g, editorMode: y } = a, [f, h] = le(0), [p, R] = le([]);
  ie(() => {
    if (n !== void 0 && s !== void 0) {
      if (h(n), g) {
        const O = document.createElement("div");
        O.innerHTML = g;
        const D = O.querySelectorAll("h1, h2, h3, h4, h5, h6"), A = Array.from(D).map((j, l) => {
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
    r.forEach((O, D) => {
      if (O.content) {
        const A = document.createElement("div");
        A.innerHTML = O.content;
        const l = (A.textContent || A.innerText || "").trim().split(/\s+/).filter((m) => m.length > 0);
        d += l.length, A.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((m, w) => {
          const N = parseInt(m.tagName.charAt(1)), T = m.textContent.trim();
          T && b.push({
            id: `heading-${D}-${w}`,
            level: N,
            text: T,
            page: D + 1
          });
        });
      }
    }), h(d), R(b);
  }, [r, n, s, g]);
  const S = s !== void 0 ? s : r.length;
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
            /* @__PURE__ */ u.jsx(ze, { size: 18 }),
            /* @__PURE__ */ u.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ u.jsx(Ir, { size: 16 }) : /* @__PURE__ */ u.jsx(Mr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(jr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: S })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Hr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: f.toLocaleString() })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(ze, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: i + 1 })
            ] })
          ] }),
          p.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsxs("h3", { children: [
              /* @__PURE__ */ u.jsx(rn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "document-outline", "data-testid": "outline", children: p.map((d) => {
              const b = d.level === 1 ? $r : d.level === 2 ? Ur : Wr;
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
class zo {
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
const zt = new zo("Editor"), cn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), ln = 32;
function un(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const o = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? o - 1 : o + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * ln}px`, e.dataset.indentLevel = String(n));
}
function Ho(e, t) {
  un(e, t);
}
function Bo(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && cn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function $o() {
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
        if (y.tagName && cn.has(y.tagName.toUpperCase())) {
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
function Go(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), o = Math.max(0, t - 1);
    o === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${o * ln}px`, e.dataset.indentLevel = String(o));
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
  let o = $o();
  const n = t.getRangeAt(0);
  if (o.length === 0) {
    const r = Bo(n.startContainer);
    if (!r) return !1;
    o = [r];
  }
  const s = o[0], a = o[o.length - 1];
  o.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      Ho(r, e);
      return;
    }
    e ? Go(r) : un(r, !1);
  });
  try {
    const r = document.createRange(), i = (h) => h.nodeType === Node.TEXT_NODE ? h : document.createTreeWalker(
      h,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), g = (h) => {
      if (h.nodeType === Node.TEXT_NODE)
        return h;
      const p = document.createTreeWalker(
        h,
        NodeFilter.SHOW_TEXT,
        null
      );
      let R = null, S = p.nextNode();
      for (; S; )
        R = S, S = p.nextNode();
      return R;
    }, y = i(s);
    y ? r.setStart(y, 0) : r.setStart(s, 0);
    const f = g(a);
    f ? r.setEnd(f, f.length) : r.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(r);
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
function Uo(e) {
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
      const g = await br(r), y = await Er(g);
      if (y) {
        const h = `<img src="${y}" data-key="${g}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, h), zt.info("Image inserted", { key: g });
      }
      const f = document.getElementById("image-upload");
      f && (f.value = "");
    } catch (i) {
      zt.error("Error uploading image", i);
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
        children: /* @__PURE__ */ u.jsx(Oo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !s,
        title: "Redo",
        style: { opacity: s ? 1 : 0.5 },
        children: /* @__PURE__ */ u.jsx(uo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ u.jsx(Or, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ u.jsx(Xr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ u.jsx(So, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ u.jsx(yo, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ u.jsx(sn, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ u.jsx(on, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ u.jsx(an, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ u.jsx(Ao, { size: 16 })
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
        value: e.fontSize || Be,
        title: "Font Size",
        children: Gn.map(({ value: r, label: i }) => /* @__PURE__ */ u.jsx("option", { value: r, children: i }, r))
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
        children: /* @__PURE__ */ u.jsx(rn, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ u.jsx(ao, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(ro, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          at(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ u.jsx(to, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(Qr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ u.jsx(Eo, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ u.jsx(ze, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(Vr, { size: 16 })
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
function Fo(e) {
  if (!e || typeof e != "string")
    return e;
  const t = document.createElement("div");
  return t.innerHTML = e, Te(t);
}
function Te(e) {
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
        const r = Te(a);
        r.trim() ? t.push(`<p>${r}</p>`) : t.push("<p><br></p>");
      } else if (a.tagName === "P") {
        const r = Te(a);
        t.push(`<p>${r}</p>`);
      } else if (a.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(a.tagName)) {
        const r = Te(a), i = a.tagName.toLowerCase(), g = Ht(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      } else {
        const r = Te(a), i = a.tagName.toLowerCase(), g = Ht(a);
        t.push(`<${i}${g}>${r}</${i}>`);
      }
    }
  }
  return t.join("");
}
function Ht(e) {
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
function Wo(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let o = t.getData("text/html") || t.getData("text/plain");
  return o ? (t.getData("text/html") ? o = Fo(o) : o = qo(o), document.execCommand("insertHTML", !1, o), o) : null;
}
function qo(e) {
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
  onPaste: f,
  zoomLevel: h = 100,
  pageMargins: p = fe
}) => {
  const R = $t(p), S = h / 100, d = (l, v) => {
    if (!l) return !1;
    const m = l.getBoundingClientRect(), w = v - m.top;
    return w < R.top || w > m.height - R.bottom;
  }, b = (l) => l ? l.nodeType === Node.ELEMENT_NODE ? l.tagName === "PAGE-BREAK" || l.getAttribute("data-page-break") === "true" : l.parentElement && b(l.parentElement) : !1, O = (l) => {
    const v = window.getSelection();
    if (!v || v.rangeCount === 0) return;
    const m = v.getRangeAt(0), { startContainer: w, endContainer: N } = m;
    if ((b(w) || b(N)) && (l.key.length === 1 || l.key === "Enter" || l.key === " "))
      return l.preventDefault(), !1;
    if (Uo(l))
      return r && r(), !1;
    if ((l.key === "Backspace" || l.key === "Delete") && (b(w) || b(N)))
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
        const N = s.current.firstElementChild;
        if (N && N.tagName !== "PAGE-BREAK") {
          const T = document.createRange(), z = window.getSelection();
          T.setStart(N, 0), T.collapse(!0), z.removeAllRanges(), z.addRange(T);
        }
      } else {
        const N = s.current.lastElementChild;
        if (N && N.tagName !== "PAGE-BREAK") {
          const T = document.createRange(), z = window.getSelection();
          T.selectNodeContents(N), T.collapse(!1), z.removeAllRanges(), z.addRange(T);
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
    const v = Wo(l);
    f && f(l, v);
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
            fontSize: Be,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: O,
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
  pageMargins: fe
};
const pt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: n = fe,
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: y,
  onPageSizeChange: f,
  onPageMarginsChange: h,
  onZoomIn: p,
  onZoomOut: R,
  onZoomReset: S
} = {}) => {
  const d = Math.max(e?.length || 0, 1), b = (l) => {
    i && i(l);
  }, O = () => {
    g && g();
  }, D = (l) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    y && y(l);
  }, A = (l) => {
    f && f(l);
  }, j = (l) => {
    h && h(l);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ u.jsx(ho, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              children: On().map((l) => /* @__PURE__ */ u.jsx("option", { value: l, children: Cn(l) }, l))
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
          children: /* @__PURE__ */ u.jsx(jo, { size: 12 })
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
          onClick: p,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ u.jsx(Io, { size: 12 })
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
            /* @__PURE__ */ u.jsx(ze, { size: 14 }),
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
          children: /* @__PURE__ */ u.jsx(Mo, { size: 14 })
        }
      )
    ] }, l.id || `page-${v}`)) }),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: O,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ u.jsx(co, { size: 16 }),
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
const Zo = He.memo(pt), gt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: s = pe
}) => {
  const a = ne(null), r = ne(null), i = ne(null), g = ne(null), y = ne(s), f = ne(!1), h = Pe();
  ie(() => {
    y.current = s;
  }, [s]);
  const p = F((m) => {
    if (!de(m)) return;
    a.current && (ye(a.current), a.current = null), m.classList.add("selected");
    const w = Kt(m, y.current);
    w && (a.current = w, r.current = m, document.body.appendChild(w), w.querySelectorAll(".resize-handler").forEach((T) => {
      T.addEventListener("mousedown", S);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(m)));
  }, [o]), R = F(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (ye(a.current), a.current = null), i.current = null, g.current = null, f.current = !1, n && n();
  }, [n]), S = F((m) => {
    if (m.preventDefault(), m.stopPropagation(), !r.current) return;
    const w = m.currentTarget.dataset.handler, N = r.current.getBoundingClientRect(), T = window.pageYOffset || document.documentElement.scrollTop, z = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: m.clientX,
      y: m.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: m.clientX - N.left - z,
      offsetY: m.clientY - N.top - T
    }, g.current = w, f.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = j(w), document.addEventListener("mousemove", d), document.addEventListener("mouseup", b);
  }, []), d = F((m) => {
    if (!f.current || !r.current || !i.current || !g.current) return;
    m.preventDefault(), m.stopPropagation();
    const { x: w, y: N, width: T, height: z } = i.current, W = g.current, X = m.clientX, $ = m.clientY, oe = l({
      handler: W,
      startX: w,
      startY: N,
      currentX: X,
      currentY: $,
      startWidth: T,
      startHeight: z,
      options: y.current
    });
    v(r.current, oe), a.current && ot(a.current, r.current);
  }, []), b = F((m) => {
    if (f.current) {
      if (m.preventDefault(), m.stopPropagation(), r.current && i.current) {
        const w = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, N = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (w.width !== N.width || w.height !== N.height) && h.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: N } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: w } }
        );
      }
      if (i.current = null, g.current = null, f.current = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(w), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, h]), O = F((m) => {
    a.current && !a.current.contains(m.target) && R();
    const w = m.target;
    if (de(w)) {
      if (w === r.current)
        return;
      p(w);
    } else
      console.log("Clicked on non-image element");
  }, [p, R]), D = F((m) => {
    if ((m.key === "Delete" || m.key === "Backspace") && r.current && !f.current) {
      m.preventDefault();
      const w = r.current;
      if (w.parentNode) {
        w.parentNode.removeChild(w), R();
        const N = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(N);
      }
    }
    if (m.key === "Escape" && r.current && R(), r.current && !f.current) {
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === ">") {
        m.preventDefault();
        const w = r.current.offsetWidth, N = Math.min(y.current.maxWidth || 800, w + 10);
        v(r.current, { width: N, height: r.current.offsetHeight });
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(T);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "<") {
        m.preventDefault();
        const w = r.current.offsetWidth, N = Math.max(y.current.minWidth || 50, w - 10);
        v(r.current, { width: N, height: r.current.offsetHeight });
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(T);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "+") {
        m.preventDefault();
        const w = r.current.offsetHeight, N = Math.min(y.current.maxHeight || 600, w + 10);
        v(r.current, { width: r.current.offsetWidth, height: N });
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(T);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "-") {
        m.preventDefault();
        const w = r.current.offsetHeight, N = Math.max(y.current.minHeight || 50, w - 10);
        v(r.current, { width: r.current.offsetWidth, height: N });
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(T);
      }
      if ((m.ctrlKey || m.metaKey) && m.key === "r") {
        m.preventDefault(), v(r.current, { width: 300, height: 200 });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
    }
  }, [e, R]), A = F(() => {
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
    m.addEventListener("click", O), m.addEventListener("keydown", D);
    const w = m.closest(".editor-viewport");
    return w && w.addEventListener("scroll", A), window.addEventListener("resize", A), () => {
      m.removeEventListener("click", O), m.removeEventListener("keydown", D), w && w.removeEventListener("scroll", A), window.removeEventListener("resize", A), f.current && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && ye(a.current);
    };
  }, [e, O, D, A, d, b]), ie(() => {
    if (!e.current) return;
    const m = new MutationObserver((w) => {
      w.forEach((N) => {
        N.type === "childList" && (N.removedNodes.length > 0 && N.removedNodes.forEach((T) => {
          T.nodeType === Node.ELEMENT_NODE && de(T) && T === r.current && R();
        }), N.addedNodes.length > 0 && N.addedNodes.forEach((T) => {
          if (T.nodeType === Node.ELEMENT_NODE)
            if (de(T))
              setTimeout(() => {
                p(T);
              }, 50);
            else {
              const z = T.querySelectorAll ? T.querySelectorAll("img") : [];
              z.length > 0 && setTimeout(() => {
                p(z[0]);
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
  }, [e, R, p]);
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
    startY: N,
    currentX: T,
    currentY: z,
    startWidth: W,
    startHeight: X,
    options: $ = pe
  }) {
    const oe = T - w, ee = z - N;
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
  function v(m, { width: w, height: N }) {
    de(m) && (m.tagName === "IMG" ? (m.style.width = `${w}px`, m.style.height = `${N}px`, m.width = w, m.height = N) : m.tagName === "DIV" && (m.style.width = `${w}px`, m.style.height = `${N}px`));
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
  resizeOptions: pe
};
const ht = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: o,
  onDelete: n,
  onClose: s,
  initialPreserveAspectRatio: a = !0
}) => {
  const [r, i] = le({ top: 0, left: 0 }), [g, y] = le(!1), [f, h] = le("top"), [p, R] = le(a), S = ne(null), d = ne(null), b = Pe(), O = (T) => {
    if (!T) return null;
    const z = window.getComputedStyle(T);
    return {
      float: z.float || "none",
      margin: T.style.margin || "",
      display: z.display || "inline",
      width: T.style.width || T.width || "",
      height: T.style.height || T.height || "",
      aspectRatio: p
    };
  }, D = () => {
    if (!e) return "left";
    const T = window.getComputedStyle(e);
    return T.float || T.display === "block" ? "left" : T.display === "flex" && T.justifyContent === "center" ? "center" : T.float === "right" ? "right" : "left";
  }, [A, j] = le(D());
  ie(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ie(() => {
    if (e) {
      let T = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      T && (d.current = T);
    }
  }, [e]), xn(() => {
    if (!e || !S.current) return;
    const T = () => {
      const W = e.getBoundingClientRect(), X = S.current.getBoundingClientRect();
      d.current;
      const $ = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, oe = W.bottom >= 0 && W.top <= $.height && W.right >= 0 && W.left <= $.width;
      let ee = "top", G = 0, q = 0;
      if (oe) {
        const M = W.top - X.height - 10, C = $.height - W.bottom - X.height - 10;
        C > M && C > 0 ? (ee = "bottom", G = W.bottom + 10) : (ee = "top", G = W.top - X.height - 10);
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
    T();
    const z = () => {
      T();
    };
    return d.current && d.current.addEventListener("scroll", z), window.addEventListener("scroll", z), window.addEventListener("resize", z), () => {
      d.current && d.current.removeEventListener("scroll", z), window.removeEventListener("scroll", z), window.removeEventListener("resize", z), y(!1);
    };
  }, [e]), ie(() => {
    const T = (z) => {
      S.current && !S.current.contains(z.target) && z.target !== e && s();
    };
    return document.addEventListener("mousedown", T), () => {
      document.removeEventListener("mousedown", T);
    };
  }, [e, s]);
  const l = () => {
    if (e) {
      const T = O(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", j("left");
      const z = O(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: D(), state: T } }
      ), t && t("left");
    }
  }, v = () => {
    if (e) {
      const T = O(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", j("center");
      const z = O(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: D(), state: T } }
      ), t && t("center");
    }
  }, m = () => {
    if (e) {
      const T = O(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", j("right");
      const z = O(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: D(), state: T } }
      ), t && t("right");
    }
  }, w = () => {
    if (e && e.parentNode) {
      const T = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      b.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: T } }
      ), e.parentNode.removeChild(e), n && n(), s();
    }
  }, N = () => {
    const T = p, z = !p;
    R(z), b.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: z } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: T } }
    ), o && o(z);
  };
  return !e || typeof document > "u" ? null : An(
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: S,
        className: "image-tooltip-menu",
        "data-menu-position": f,
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
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: N,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ u.jsx(po, { size: 14 }) : /* @__PURE__ */ u.jsx(Zr, { size: 14 })
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
              children: /* @__PURE__ */ u.jsx(sn, { size: 14 })
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
              children: /* @__PURE__ */ u.jsx(on, { size: 14 })
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
              children: /* @__PURE__ */ u.jsx(an, { size: 14 })
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
              children: /* @__PURE__ */ u.jsx(wo, { size: 14 })
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
const Yo = 50, Vo = 50, Bt = 50, Ko = 100, Xo = 500, mt = st(({
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
}, f) => {
  const h = qt(), p = Pe(), { pageSize: R, pageMargins: S, continuousContent: d, pageBoundaries: b, activePage: O, zoomLevel: D, canUndo: A, canRedo: j } = h, l = ne(null), v = ne(null), { currentFormat: m, formatText: w, updateCurrentFormatFromSelection: N } = Zn(), [T, z] = le(!1), [W, X] = le(null), [$, oe] = le(!0), {
    checkAndUpdateBoundaries: ee,
    getCurrentPage: G,
    scrollToPage: q,
    updateBoundaries: te,
    triggerAutoReflow: E,
    removePageAndContent: c,
    insertPageBreakAtBoundary: _
  } = gr(R, v, D, S), M = je(() => lt(R), [R]), [C, Z] = le(!1), H = ne(null), I = ne(!1), U = ne(!1), V = ne(!1), Y = ne(d);
  ie(() => {
    if (v.current) {
      if (!V.current) {
        v.current.innerHTML = d, V.current = !0, Y.current = d;
        const L = setTimeout(() => {
          te();
        }, Yo);
        return () => clearTimeout(L);
      }
      if (Y.current !== d) {
        if (v.current.innerHTML !== d) {
          v.current.innerHTML = d;
          const re = setTimeout(() => {
            if (te(), I.current) {
              I.current = !1;
              const ge = Math.max(0, b.length - 1);
              p.setActivePage(ge), setTimeout(() => {
                q(ge, l);
              }, Bt);
            }
          }, Vo);
          return Y.current = d, () => clearTimeout(re);
        }
        Y.current = d;
      }
    }
  }, [d, te, b.length, p, q]), ie(() => {
    r && V.current && r(d);
  }, [d, r]), Tn(f, () => ({
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
      p.updateContinuousContent(L), v.current && (v.current.innerHTML = L, setTimeout(() => {
        te();
      }, 50));
    }
  }), [d, p, te, v]), ie(() => {
    const L = () => {
      N();
    };
    document.addEventListener("selectionchange", L);
    const re = () => {
      setTimeout(N, 10);
    };
    return v.current && v.current.addEventListener("focus", re), () => {
      document.removeEventListener("selectionchange", L), v.current && v.current.removeEventListener("focus", re);
    };
  }, [N]);
  const ae = F(() => {
    if (!v.current) return;
    let L = v.current.innerHTML;
    L = Tr(L), L !== v.current.innerHTML && (v.current.innerHTML = L), p.updateContinuousContent(L), ee(), E(200);
    const re = G(l);
    re !== O && p.setActivePage(re);
  }, [p, ee, G, O, E, l, v]), k = F((L) => {
    ae();
  }, [ae]), se = F((L) => {
    p.updatePageSize(L), te({ pageSize: L }), s && s(L);
  }, [p, te, s]), he = F((L) => {
    p.updatePageMargins(L), te({ pageMargins: L }), a && a(L);
  }, [p, te, a]), Ee = F((L) => {
    L < 0 || L >= b.length || (U.current = !0, p.setActivePage(L), q(L, l), setTimeout(() => {
      U.current = !1;
    }, Xo), t && t(L));
  }, [p, q, t, b.length]), yt = F(() => {
    const L = b.length + 1;
    _(L) && (I.current = !0, setTimeout(() => {
      if (I.current) {
        I.current = !1;
        const ge = Math.max(0, b.length - 1);
        p.setActivePage(ge), setTimeout(() => {
          q(ge, l);
        }, Bt);
      }
    }, 100)), o && o();
  }, [b.length, _, p, q, o]), fn = F(() => {
    const L = window.getSelection();
    if (L && L.rangeCount > 0) {
      if (!v?.current) return;
      const $e = `<page-break data-page-break="true" contenteditable="false" data-page-number="${v.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, $e), setTimeout(() => {
        te();
        const Ge = G(l);
        p.setActivePage(Ge);
      }, 150);
    }
  }, [te, G, p, l]), bt = F((L) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    c(L) && (p.setActivePage(0), n && n(L));
  }, [b.length, c, p, n]), Re = F(() => {
    p.zoomIn();
  }, [p]), Se = F(() => {
    p.zoomOut();
  }, [p]), ke = F(() => {
    p.resetZoom();
  }, [p]);
  ie(() => {
    const L = (re) => {
      if (re.ctrlKey || re.metaKey) {
        ["+", "=", "-", "_", "0"].includes(re.key) && re.preventDefault();
        const ge = document.activeElement === v.current, $e = document.activeElement === l.current, Ge = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ge || $e || !Ge)
          switch (re.key) {
            case "+":
            case "=":
              Re();
              break;
            case "-":
            case "_":
              Se();
              break;
            case "0":
              ke();
              break;
          }
      }
    };
    return window.addEventListener("keydown", L), () => {
      window.removeEventListener("keydown", L);
    };
  }, [Re, Se, ke]);
  const pn = F(() => {
    !l.current || !v.current || U.current || (H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      if (U.current) {
        H.current = null;
        return;
      }
      const L = G(l);
      L !== O && L >= 0 && p.setActivePage(L), H.current = null;
    }, Ko));
  }, [G, O, p]), gn = je(() => {
    if (!d) return 0;
    const re = d.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return re ? re.length : 0;
  }, [d]), hn = b.length || 1, mn = F((L) => {
    z(!0), X(L);
  }, []), Et = F(() => {
    z(!1), X(null);
  }, []), yn = F((L, re) => {
  }, []);
  return ie(() => () => {
    H.current && clearTimeout(H.current);
  }, []), /* @__PURE__ */ u.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ u.jsx(
      dt,
      {
        currentFormat: {
          ...m,
          imageSelected: T
        },
        onFormatText: w,
        onAddPageBreak: fn,
        canUndo: A,
        canRedo: j
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ u.jsx(
        Do,
        {
          editorView: null,
          isCollapsed: C,
          onToggle: () => Z((L) => !L),
          wordCount: gn,
          pageCount: hn
        }
      ),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: l,
          onScroll: pn,
          children: /* @__PURE__ */ u.jsx(
            ft,
            {
              content: d,
              dimensions: M,
              pageSize: R,
              pageMargins: S,
              pageBoundaries: b,
              editorRef: v,
              onInput: k,
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
          onImageSelect: mn,
          onImageDeselect: Et,
          onImageResize: yn,
          resizeOptions: {
            ...pe,
            preserveAspectRatio: $,
            aspectRatio: $
          }
        }
      ),
      T && W && /* @__PURE__ */ u.jsx(
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
              L && vr(L).catch((re) => {
                console.error("Failed to delete image from IndexedDB:", re);
              });
            }
          },
          onClose: Et
        }
      ),
      y && /* @__PURE__ */ u.jsx("div", { className: "page-manager-sidebar", children: e ? He.cloneElement(e, {
        onNavigate: Ee,
        onAddPage: yt,
        onDeletePage: bt,
        onPageSizeChange: se,
        onPageMarginsChange: he,
        zoomLevel: D,
        canZoomIn: et(D),
        canZoomOut: tt(D),
        onZoomIn: Re,
        onZoomOut: Se,
        onZoomReset: ke
      }) : /* @__PURE__ */ u.jsx(
        Zo,
        {
          pageBoundaries: b,
          activePage: O,
          pageSize: R,
          pageMargins: S,
          zoomLevel: D,
          canZoomIn: et(D),
          canZoomOut: tt(D),
          onNavigate: Ee,
          onAddPage: yt,
          onDeletePage: bt,
          onPageSizeChange: se,
          onPageMarginsChange: he,
          onZoomIn: Re,
          onZoomOut: Se,
          onZoomReset: ke
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
class dn extends He.Component {
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
dn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
dn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const fa = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Gn as COMMON_FONT_SIZES,
  Be as DEFAULT_FONT_SIZE,
  pe as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Gt as DEFAULT_PAGE_SIZE,
  ra as DocumentProvider,
  dt as EditorToolbar,
  dn as ErrorBoundary,
  Vt as FONT_SIZE_MAP,
  mt as HtmlEditor,
  gt as ImageResizeHandlers,
  fa as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  Zo as PageManager,
  ft as PageView,
  P as RESIZE_HANDLERS,
  Do as Sidebar,
  la as applyImageDimensions,
  sa as calculateResizeDimensions,
  ua as clearImages,
  Kt as createResizeOverlay,
  vr as deleteImage,
  da as getAllImageKeys,
  na as getAvailablePageSizes,
  Er as getImage,
  ca as getImageDimensions,
  lt as getPageDimensions,
  oa as getPixelValue,
  aa as getPointValue,
  de as isResizableImage,
  ia as isValidFontSize,
  ta as isValidPageSize,
  zo as logger,
  Fn as pixelsToPoints,
  Un as pointsToPixels,
  ye as removeResizeOverlay,
  br as saveImage,
  ot as updateResizeOverlay,
  gr as useContinuousReflow,
  Wt as useDocument,
  Pe as useDocumentActions,
  qt as useDocumentState,
  Zn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
