import We, { createContext as kn, useContext as Cn, useReducer as Mn, useMemo as xe, useState as de, useCallback as L, useRef as X, useEffect as ie, forwardRef as dt, createElement as nt, memo as Nn, useLayoutEffect as In, useImperativeHandle as Ln } from "react";
import { v4 as ft } from "uuid";
import { createPortal as Dn } from "react-dom";
function jn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var De = { exports: {} }, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Bn() {
  if (Ot) return _e;
  Ot = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      a = {};
      for (var i in s)
        i !== "key" && (a[i] = s[i]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return _e.Fragment = t, _e.jsx = r, _e.jsxs = r, _e;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Hn() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === oe ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case N:
          return "Fragment";
        case R:
          return "Profiler";
        case T:
          return "StrictMode";
        case h:
          return "Suspense";
        case S:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case A:
            return "Portal";
          case m:
            return u.displayName || "Context";
          case w:
            return (u._context.displayName || "Context") + ".Consumer";
          case c:
            var _ = u.render;
            return u = u.displayName, u || (u = _.displayName || _.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case j:
            return _ = u.displayName || null, _ !== null ? _ : e(u.type) || "Memo";
          case q:
            _ = u._payload, u = u._init;
            try {
              return e(u(_));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var M = _.error, C = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return M.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(u);
      }
    }
    function n(u) {
      if (u === N) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === q)
        return "<...>";
      try {
        var _ = e(u);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = Q.A;
      return u === null ? null : u.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(u) {
      if (I.call(u, "key")) {
        var _ = Object.getOwnPropertyDescriptor(u, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function i(u, _) {
      function M() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: M,
        configurable: !0
      });
    }
    function g() {
      var u = e(this.type);
      return J[u] || (J[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function l(u, _, M, C, $, z) {
      var D = M.ref;
      return u = {
        $$typeof: x,
        type: u,
        key: _,
        props: M,
        _owner: C
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function d(u, _, M, C, $, z) {
      var D = _.children;
      if (D !== void 0)
        if (C)
          if (F(D)) {
            for (C = 0; C < D.length; C++)
              f(D[C]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(D);
      if (I.call(_, "key")) {
        D = e(u);
        var H = Object.keys(_).filter(function(U) {
          return U !== "key";
        });
        C = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", E[D + C] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          D,
          H,
          D
        ), E[D + C] = !0);
      }
      if (D = null, M !== void 0 && (r(M), D = "" + M), o(_) && (r(_.key), D = "" + _.key), "key" in _) {
        M = {};
        for (var G in _)
          G !== "key" && (M[G] = _[G]);
      } else M = _;
      return D && i(
        M,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), l(
        u,
        D,
        M,
        s(),
        $,
        z
      );
    }
    function f(u) {
      p(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === q && (u._payload.status === "fulfilled" ? p(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function p(u) {
      return typeof u == "object" && u !== null && u.$$typeof === x;
    }
    var b = We, x = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), m = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), Q = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, F = Array.isArray, ee = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var K, J = {}, re = b.react_stack_bottom_frame.bind(
      b,
      a
    )(), se = ee(n(a)), E = {};
    Re.Fragment = N, Re.jsx = function(u, _, M) {
      var C = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return d(
        u,
        _,
        M,
        !1,
        C ? Error("react-stack-top-frame") : re,
        C ? ee(n(u)) : se
      );
    }, Re.jsxs = function(u, _, M) {
      var C = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return d(
        u,
        _,
        M,
        !0,
        C ? Error("react-stack-top-frame") : re,
        C ? ee(n(u)) : se
      );
    };
  })()), Re;
}
var Ct;
function zn() {
  return Ct || (Ct = 1, process.env.NODE_ENV === "production" ? De.exports = Bn() : De.exports = Hn()), De.exports;
}
var y = zn();
const rt = 100, ot = 50, at = 200, Mt = 5, it = (e) => e < at, st = (e) => e > ot, $n = 96, je = (e) => Math.round(e * $n), Fe = {
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
}, ge = "NORMAL", Vt = (e = ge) => {
  const t = Fe[e] || Fe[ge];
  return {
    top: je(t.top),
    bottom: je(t.bottom),
    left: je(t.left),
    right: je(t.right)
  };
}, Fn = (e = ge) => {
  const t = Vt(e);
  return t.top + t.bottom;
}, Un = () => Object.keys(Fe), Gn = (e) => {
  const t = Fe[e];
  return t ? t.label : "Unknown";
}, ue = {
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
}, Kt = "A4", pt = (e) => {
  const t = ue[e] || ue[Kt];
  return {
    width: t.width,
    height: t.height
  };
}, Oa = (e) => Object.keys(ue).includes(e), ka = () => Object.keys(ue), Oe = Kt, be = "<p><br></p>", qn = "continuous", we = (e, t = Oe) => ({
  id: ft(),
  index: e,
  size: t,
  content: be,
  images: [],
  isBreakPoint: !1
}), ze = (e) => typeof e != "string" || e.trim() === "" ? be : e, Xt = (e, t = Oe) => (e.length > 0 ? e : [we(0, t)]).map((n, s) => ({
  id: n.id || ft(),
  index: s,
  size: n.size || t,
  content: ze(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Wn = (e = Oe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: pt(e).height
}], ct = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Oe, n = Xt(e.pages || [we(0, r)], r);
  return {
    id: ft(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || qn,
    continuousContent: e.continuousContent || be,
    pageBoundaries: e.pageBoundaries || Wn(r),
    zoomLevel: e.zoomLevel || rt,
    pageMargins: e.pageMargins || ge,
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
}, lt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case B.INITIALIZE_DOCUMENT: {
      const { initialContent: n = be, pageSize: s = Oe } = t.payload || {}, a = { ...we(0, s), content: ze(n) };
      return ct({
        title: e.title,
        pageSize: s,
        pages: [a]
      });
    }
    case B.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case B.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: s } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: ze(s)
      }, {
        ...e,
        pages: a,
        updatedAt: r
      };
    }
    case B.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, s = Xt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : s.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: Math.min(e.activePage, s.length - 1),
        pageBreaks: a,
        totalPages: s.length,
        updatedAt: r
      };
    }
    case B.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, s = [...e.pages];
      s.splice(n, 0, we(n, e.pageSize));
      const a = s.map((i, g) => ({
        ...i,
        index: g,
        size: e.pageSize
      })), o = a.slice(0, -1).map((i, g) => ({
        id: `auto-break-${g}`,
        pageNumber: g + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: n,
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case B.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const s = [...e.pages];
      s.splice(n, 1);
      const a = s.map((g, l) => ({
        ...g,
        index: l,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= a.length ? o = a.length - 1 : n <= o && o > 0 && (o -= 1);
      const i = a.slice(0, -1).map((g, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pages: a,
        activePage: o,
        pageBreaks: i,
        totalPages: a.length,
        updatedAt: r
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
        updatedAt: r
      };
    }
    case B.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        pt(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const s = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: n
      })), a = s.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: s,
        pageBreaks: a,
        updatedAt: r
      };
    }
    case B.RESET_DOCUMENT:
      return ct();
    case B.UPDATE_CONTINUOUS_CONTENT: {
      const n = ze(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
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
        updatedAt: r
      };
    }
    case B.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: s } = t.payload || {}, a = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (n === "end")
        o = o + a + "<p><br></p>";
      else if (typeof n == "number") {
        const i = o.substring(0, n), g = o.substring(n);
        o = i + a + g;
      } else if (typeof s == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = o;
        const g = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (s === 0 && g.length === 0)
          o = o + a + "<p><br></p>";
        else if (s < g.length) {
          const l = g[s], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const f = document.createElement("p");
          f.innerHTML = "<br>", l.parentNode.insertBefore(d, l.nextSibling), d.parentNode.insertBefore(f, d.nextSibling), o = i.innerHTML;
        } else
          o = o + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: r
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
        updatedAt: r
      };
    }
    case B.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let s = e.continuousContent, a = e.pages;
      return n === "continuous" ? s = e.pages.map((i) => i.content).filter((i) => i && i !== be).join(`
`) || be : e.continuousContent && e.continuousContent !== be && (a = [{ ...we(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: s,
        pages: a,
        updatedAt: r
      };
    }
    case B.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < ot || n > at ? (console.warn(`Invalid zoom level: ${n}. Must be between ${ot} and ${at}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case B.ZOOM_IN: {
      if (!it(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Mt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case B.ZOOM_OUT: {
      if (!st(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Mt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case B.RESET_ZOOM:
      return e.zoomLevel === rt ? e : {
        ...e,
        zoomLevel: rt,
        updatedAt: r
      };
    case B.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
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
        updatedAt: r
      };
    }
    case B.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], s = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = lt(e, n.inverseOperation)), {
        ...a,
        undoStack: s,
        redoStack: [...e.redoStack, n],
        canUndo: s.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case B.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], s = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = lt(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: s,
        canUndo: !0,
        canRedo: s.length > 0,
        updatedAt: r
      };
    }
    case B.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: r
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
}, Jt = kn(null), Ca = ({ children: e, initialState: t = {} }) => {
  const [r, n] = Mn(lt, ct(t)), s = xe(() => ({
    initializeDocument: (o) => n({ type: B.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => n({ type: B.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => n({ type: B.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => n({ type: B.UPDATE_PAGES, payload: o }),
    addPage: (o) => n({ type: B.ADD_PAGE, payload: o }),
    deletePage: (o) => n({ type: B.DELETE_PAGE, payload: o }),
    setActivePage: (o) => n({ type: B.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => n({ type: B.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => n({ type: B.RESET_DOCUMENT }),
    updateContinuousContent: (o) => n({ type: B.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => n({ type: B.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => n({ type: B.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => n({ type: B.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => n({ type: B.SET_EDITOR_MODE, payload: o }),
    insertPageAt: (o) => n({ type: B.INSERT_PAGE_AT, payload: o }),
    movePageTo: (o) => n({ type: B.MOVE_PAGE_TO, payload: o }),
    duplicatePage: (o) => n({ type: B.DUPLICATE_PAGE, payload: o }),
    setZoomLevel: (o) => n({ type: B.SET_ZOOM_LEVEL, payload: o }),
    zoomIn: () => n({ type: B.ZOOM_IN }),
    zoomOut: () => n({ type: B.ZOOM_OUT }),
    resetZoom: () => n({ type: B.RESET_ZOOM }),
    updatePageMargins: (o) => n({ type: B.UPDATE_PAGE_MARGINS, payload: o }),
    // Undo/Redo actions
    recordOperation: (o, i) => n({
      type: B.RECORD_OPERATION,
      payload: { operation: o, inverseOperation: i }
    }),
    undo: () => n({ type: B.UNDO }),
    redo: () => n({ type: B.REDO }),
    clearUndoRedo: () => n({ type: B.CLEAR_UNDO_REDO })
  }), []), a = xe(() => ({
    state: r,
    actions: s,
    dispatch: n
  }), [r, s]);
  return /* @__PURE__ */ y.jsx(Jt.Provider, { value: a, children: e });
}, Qt = () => {
  const e = Cn(Jt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, en = () => {
  const { state: e } = Qt();
  return e;
}, ke = () => {
  const { actions: e } = Qt();
  return e;
};
var Be = { exports: {} }, He = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Zn() {
  if (Nt) return Y;
  Nt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function w(c) {
    if (typeof c == "object" && c !== null) {
      var h = c.$$typeof;
      switch (h) {
        case t:
          switch (c = c.type, c) {
            case g:
            case l:
            case n:
            case a:
            case s:
            case f:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case i:
                case d:
                case x:
                case b:
                case o:
                  return c;
                default:
                  return h;
              }
          }
        case r:
          return h;
      }
    }
  }
  function m(c) {
    return w(c) === l;
  }
  return Y.AsyncMode = g, Y.ConcurrentMode = l, Y.ContextConsumer = i, Y.ContextProvider = o, Y.Element = t, Y.ForwardRef = d, Y.Fragment = n, Y.Lazy = x, Y.Memo = b, Y.Portal = r, Y.Profiler = a, Y.StrictMode = s, Y.Suspense = f, Y.isAsyncMode = function(c) {
    return m(c) || w(c) === g;
  }, Y.isConcurrentMode = m, Y.isContextConsumer = function(c) {
    return w(c) === i;
  }, Y.isContextProvider = function(c) {
    return w(c) === o;
  }, Y.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, Y.isForwardRef = function(c) {
    return w(c) === d;
  }, Y.isFragment = function(c) {
    return w(c) === n;
  }, Y.isLazy = function(c) {
    return w(c) === x;
  }, Y.isMemo = function(c) {
    return w(c) === b;
  }, Y.isPortal = function(c) {
    return w(c) === r;
  }, Y.isProfiler = function(c) {
    return w(c) === a;
  }, Y.isStrictMode = function(c) {
    return w(c) === s;
  }, Y.isSuspense = function(c) {
    return w(c) === f;
  }, Y.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === l || c === a || c === s || c === f || c === p || typeof c == "object" && c !== null && (c.$$typeof === x || c.$$typeof === b || c.$$typeof === o || c.$$typeof === i || c.$$typeof === d || c.$$typeof === N || c.$$typeof === T || c.$$typeof === R || c.$$typeof === A);
  }, Y.typeOf = w, Y;
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
var It;
function Yn() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function w(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === l || O === a || O === s || O === f || O === p || typeof O == "object" && O !== null && (O.$$typeof === x || O.$$typeof === b || O.$$typeof === o || O.$$typeof === i || O.$$typeof === d || O.$$typeof === N || O.$$typeof === T || O.$$typeof === R || O.$$typeof === A);
    }
    function m(O) {
      if (typeof O == "object" && O !== null) {
        var ce = O.$$typeof;
        switch (ce) {
          case t:
            var Ee = O.type;
            switch (Ee) {
              case g:
              case l:
              case n:
              case a:
              case s:
              case f:
                return Ee;
              default:
                var ve = Ee && Ee.$$typeof;
                switch (ve) {
                  case i:
                  case d:
                  case x:
                  case b:
                  case o:
                    return ve;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var c = g, h = l, S = i, j = o, q = t, ne = d, oe = n, Q = x, I = b, F = r, ee = a, K = s, J = f, re = !1;
    function se(O) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(O) || m(O) === g;
    }
    function E(O) {
      return m(O) === l;
    }
    function u(O) {
      return m(O) === i;
    }
    function _(O) {
      return m(O) === o;
    }
    function M(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function C(O) {
      return m(O) === d;
    }
    function $(O) {
      return m(O) === n;
    }
    function z(O) {
      return m(O) === x;
    }
    function D(O) {
      return m(O) === b;
    }
    function H(O) {
      return m(O) === r;
    }
    function G(O) {
      return m(O) === a;
    }
    function U(O) {
      return m(O) === s;
    }
    function ae(O) {
      return m(O) === f;
    }
    V.AsyncMode = c, V.ConcurrentMode = h, V.ContextConsumer = S, V.ContextProvider = j, V.Element = q, V.ForwardRef = ne, V.Fragment = oe, V.Lazy = Q, V.Memo = I, V.Portal = F, V.Profiler = ee, V.StrictMode = K, V.Suspense = J, V.isAsyncMode = se, V.isConcurrentMode = E, V.isContextConsumer = u, V.isContextProvider = _, V.isElement = M, V.isForwardRef = C, V.isFragment = $, V.isLazy = z, V.isMemo = D, V.isPortal = H, V.isProfiler = G, V.isStrictMode = U, V.isSuspense = ae, V.isValidElementType = w, V.typeOf = m;
  })()), V;
}
var Lt;
function tn() {
  return Lt || (Lt = 1, process.env.NODE_ENV === "production" ? He.exports = Zn() : He.exports = Yn()), He.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ve, Dt;
function Vn() {
  if (Dt) return Ve;
  Dt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      for (var o = {}, i = 0; i < 10; i++)
        o["_" + String.fromCharCode(i)] = i;
      var g = Object.getOwnPropertyNames(o).map(function(d) {
        return o[d];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ve = s() ? Object.assign : function(a, o) {
    for (var i, g = n(a), l, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var f in i)
        t.call(i, f) && (g[f] = i[f]);
      if (e) {
        l = e(i);
        for (var p = 0; p < l.length; p++)
          r.call(i, l[p]) && (g[l[p]] = i[l[p]]);
      }
    }
    return g;
  }, Ve;
}
var Ke, jt;
function gt() {
  if (jt) return Ke;
  jt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ke = e, Ke;
}
var Xe, Bt;
function nn() {
  return Bt || (Bt = 1, Xe = Function.call.bind(Object.prototype.hasOwnProperty)), Xe;
}
var Je, Ht;
function Kn() {
  if (Ht) return Je;
  Ht = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ gt(), r = {}, n = /* @__PURE__ */ nn();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(a, o, i, g, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var f;
          try {
            if (typeof a[d] != "function") {
              var p = Error(
                (g || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = a[d](o, d, g, i, null, t);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var b = l ? l() : "";
            e(
              "Failed " + i + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Je = s, Je;
}
var Qe, zt;
function Xn() {
  if (zt) return Qe;
  zt = 1;
  var e = tn(), t = Vn(), r = /* @__PURE__ */ gt(), n = /* @__PURE__ */ nn(), s = /* @__PURE__ */ Kn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var g = "Warning: " + i;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Qe = function(i, g) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(E) {
      var u = E && (l && E[l] || E[d]);
      if (typeof u == "function")
        return u;
    }
    var p = "<<anonymous>>", b = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: R(),
      arrayOf: w,
      element: m(),
      elementType: c(),
      instanceOf: h,
      node: ne(),
      objectOf: j,
      oneOf: S,
      oneOfType: q,
      shape: Q,
      exact: I
    };
    function x(E, u) {
      return E === u ? E !== 0 || 1 / E === 1 / u : E !== E && u !== u;
    }
    function A(E, u) {
      this.message = E, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function N(E) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, _ = 0;
      function M($, z, D, H, G, U, ae) {
        if (H = H || p, U = U || D, ae !== r) {
          if (g) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = H + ":" + D;
            !u[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[ce] = !0, _++);
          }
        }
        return z[D] == null ? $ ? z[D] === null ? new A("The " + G + " `" + U + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new A("The " + G + " `" + U + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : E(z, D, H, G, U);
      }
      var C = M.bind(null, !1);
      return C.isRequired = M.bind(null, !0), C;
    }
    function T(E) {
      function u(_, M, C, $, z, D) {
        var H = _[M], G = K(H);
        if (G !== E) {
          var U = J(H);
          return new A(
            "Invalid " + $ + " `" + z + "` of type " + ("`" + U + "` supplied to `" + C + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return N(u);
    }
    function R() {
      return N(o);
    }
    function w(E) {
      function u(_, M, C, $, z) {
        if (typeof E != "function")
          return new A("Property `" + z + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var D = _[M];
        if (!Array.isArray(D)) {
          var H = K(D);
          return new A("Invalid " + $ + " `" + z + "` of type " + ("`" + H + "` supplied to `" + C + "`, expected an array."));
        }
        for (var G = 0; G < D.length; G++) {
          var U = E(D, G, C, $, z + "[" + G + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return N(u);
    }
    function m() {
      function E(u, _, M, C, $) {
        var z = u[_];
        if (!i(z)) {
          var D = K(z);
          return new A("Invalid " + C + " `" + $ + "` of type " + ("`" + D + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(E);
    }
    function c() {
      function E(u, _, M, C, $) {
        var z = u[_];
        if (!e.isValidElementType(z)) {
          var D = K(z);
          return new A("Invalid " + C + " `" + $ + "` of type " + ("`" + D + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(E);
    }
    function h(E) {
      function u(_, M, C, $, z) {
        if (!(_[M] instanceof E)) {
          var D = E.name || p, H = se(_[M]);
          return new A("Invalid " + $ + " `" + z + "` of type " + ("`" + H + "` supplied to `" + C + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return N(u);
    }
    function S(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function u(_, M, C, $, z) {
        for (var D = _[M], H = 0; H < E.length; H++)
          if (x(D, E[H]))
            return null;
        var G = JSON.stringify(E, function(ae, O) {
          var ce = J(O);
          return ce === "symbol" ? String(O) : O;
        });
        return new A("Invalid " + $ + " `" + z + "` of value `" + String(D) + "` " + ("supplied to `" + C + "`, expected one of " + G + "."));
      }
      return N(u);
    }
    function j(E) {
      function u(_, M, C, $, z) {
        if (typeof E != "function")
          return new A("Property `" + z + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var D = _[M], H = K(D);
        if (H !== "object")
          return new A("Invalid " + $ + " `" + z + "` of type " + ("`" + H + "` supplied to `" + C + "`, expected an object."));
        for (var G in D)
          if (n(D, G)) {
            var U = E(D, G, C, $, z + "." + G, r);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return N(u);
    }
    function q(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var u = 0; u < E.length; u++) {
        var _ = E[u];
        if (typeof _ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(_) + " at index " + u + "."
          ), o;
      }
      function M(C, $, z, D, H) {
        for (var G = [], U = 0; U < E.length; U++) {
          var ae = E[U], O = ae(C, $, z, D, H, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && G.push(O.data.expectedType);
        }
        var ce = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new A("Invalid " + D + " `" + H + "` supplied to " + ("`" + z + "`" + ce + "."));
      }
      return N(M);
    }
    function ne() {
      function E(u, _, M, C, $) {
        return F(u[_]) ? null : new A("Invalid " + C + " `" + $ + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return N(E);
    }
    function oe(E, u, _, M, C) {
      return new A(
        (E || "React class") + ": " + u + " type `" + _ + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function Q(E) {
      function u(_, M, C, $, z) {
        var D = _[M], H = K(D);
        if (H !== "object")
          return new A("Invalid " + $ + " `" + z + "` of type `" + H + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var G in E) {
          var U = E[G];
          if (typeof U != "function")
            return oe(C, $, z, G, J(U));
          var ae = U(D, G, C, $, z + "." + G, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return N(u);
    }
    function I(E) {
      function u(_, M, C, $, z) {
        var D = _[M], H = K(D);
        if (H !== "object")
          return new A("Invalid " + $ + " `" + z + "` of type `" + H + "` " + ("supplied to `" + C + "`, expected `object`."));
        var G = t({}, _[M], E);
        for (var U in G) {
          var ae = E[U];
          if (n(E, U) && typeof ae != "function")
            return oe(C, $, z, U, J(ae));
          if (!ae)
            return new A(
              "Invalid " + $ + " `" + z + "` key `" + U + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(_[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var O = ae(D, U, C, $, z + "." + U, r);
          if (O)
            return O;
        }
        return null;
      }
      return N(u);
    }
    function F(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(F);
          if (E === null || i(E))
            return !0;
          var u = f(E);
          if (u) {
            var _ = u.call(E), M;
            if (u !== E.entries) {
              for (; !(M = _.next()).done; )
                if (!F(M.value))
                  return !1;
            } else
              for (; !(M = _.next()).done; ) {
                var C = M.value;
                if (C && !F(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(E, u) {
      return E === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function K(E) {
      var u = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ee(u, E) ? "symbol" : u;
    }
    function J(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var u = K(E);
      if (u === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function re(E) {
      var u = J(E);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function se(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return b.checkPropTypes = s, b.resetWarningCache = s.resetWarningCache, b.PropTypes = b, b;
  }, Qe;
}
var et, $t;
function Jn() {
  if ($t) return et;
  $t = 1;
  var e = /* @__PURE__ */ gt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, et = function() {
    function n(o, i, g, l, d, f) {
      if (f !== e) {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, et;
}
var Ft;
function Qn() {
  if (Ft) return Be.exports;
  if (Ft = 1, process.env.NODE_ENV !== "production") {
    var e = tn(), t = !0;
    Be.exports = /* @__PURE__ */ Xn()(e.isElement, t);
  } else
    Be.exports = /* @__PURE__ */ Jn()();
  return Be.exports;
}
var er = /* @__PURE__ */ Qn();
const v = /* @__PURE__ */ jn(er), rn = {
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
}, tr = [
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
], Ze = "16px", nr = (e) => Math.round(e * 96 / 72), rr = (e) => Math.round(e * 72 / 96 * 2) / 2, Ma = (e) => {
  const t = Object.values(rn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${nr(e)}px`;
}, Na = (e) => {
  const t = parseInt(e), r = Object.values(rn).find((n) => n.px === t);
  return r ? r.pt : rr(t);
}, Ia = (e) => {
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
}, he = {
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
function La({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = he
}) {
  const g = n - t, l = s - r;
  let d = a, f = o;
  switch (e) {
    case P.TOP_LEFT:
      d = Math.max(i.minWidth, a - g), f = Math.max(i.minHeight, o - l);
      break;
    case P.TOP_RIGHT:
      d = Math.max(i.minWidth, a + g), f = Math.max(i.minHeight, o - l);
      break;
    case P.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - g), f = Math.max(i.minHeight, o + l);
      break;
    case P.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + g), f = Math.max(i.minHeight, o + l);
      break;
    case P.TOP:
      f = Math.max(i.minHeight, o - l);
      break;
    case P.BOTTOM:
      f = Math.max(i.minHeight, o + l);
      break;
    case P.LEFT:
      d = Math.max(i.minWidth, a - g);
      break;
    case P.RIGHT:
      d = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: d, height: f };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = a / o;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? d / p > f ? f = Math.max(i.minHeight, d / p) : d = Math.max(i.minWidth, f * p) : [P.TOP, P.BOTTOM].includes(e) ? d = f * p : [P.LEFT, P.RIGHT].includes(e) && (f = d / p);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (f = d / (a / o))), i.maxHeight && f > i.maxHeight && (f = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = f * (a / o))), d = Math.max(i.minWidth, d), f = Math.max(i.minHeight, f), {
    width: Math.round(d),
    height: Math.round(f)
  };
}
function pe(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Da(e) {
  return pe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ja(e, { width: t, height: r }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function on(e, t = he) {
  if (!pe(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(P).forEach((a) => {
    const o = document.createElement("div");
    o.className = `resize-handler resize-handler-${a}`, o.dataset.handler = a, o.style.position = "absolute", o.style.width = "10px", o.style.height = "10px", o.style.backgroundColor = "#007bff", o.style.border = "2px solid white", o.style.borderRadius = "50%", o.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", o.style.cursor = or(a), o.style.pointerEvents = "all", an(o, a, n.width, n.height), r.appendChild(o);
  }), r;
}
function or(e) {
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
function an(e, t, r, n) {
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
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case P.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case P.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case P.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ue(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((s) => {
    const a = s.dataset.handler;
    an(s, a, r.width, r.height);
  });
}
function Ae(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const ar = {
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
}, Ut = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Ze,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: he,
  preserveAspectRatio: !0
}, ir = () => {
  const [e, t] = de(Ut), r = ke(), n = L((T) => {
    try {
      const R = window.getSelection();
      if (!R || R.rangeCount === 0)
        return !1;
      const w = R.getRangeAt(0);
      if (!w.toString())
        return t((c) => ({ ...c, fontFamily: T })), !1;
      try {
        const c = document.createElement("span");
        c.style.fontFamily = T;
        const h = w.extractContents();
        return c.appendChild(h), w.insertNode(c), w.selectNodeContents(c), R.removeAllRanges(), R.addRange(w), t((S) => ({ ...S, fontFamily: T })), !0;
      } catch {
        return document.execCommand("fontName", !1, T), t((h) => ({ ...h, fontFamily: T })), !0;
      }
    } catch (R) {
      return console.warn("[useFormatting] Font family change failed:", R), !1;
    }
  }, []), s = L((T) => {
    try {
      const R = window.getSelection();
      if (!R || R.rangeCount === 0)
        return !1;
      const w = R.getRangeAt(0);
      if (!w.toString())
        return t((c) => ({ ...c, fontSize: T })), !1;
      try {
        const c = document.createElement("span");
        c.style.fontSize = T;
        const h = w.extractContents();
        return c.appendChild(h), w.insertNode(c), w.selectNodeContents(c), R.removeAllRanges(), R.addRange(w), t((S) => ({ ...S, fontSize: T })), !0;
      } catch {
        const h = ar[T] || "3";
        return document.execCommand("fontSize", !1, h), t((S) => ({ ...S, fontSize: T })), !0;
      }
    } catch (R) {
      return console.warn("[useFormatting] Font size change failed:", R), !1;
    }
  }, []), a = L((T) => {
    try {
      const R = window.getSelection();
      if (!R || R.rangeCount === 0)
        return !1;
      const w = R.getRangeAt(0), m = w.toString(), h = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[T];
      if (!h)
        return !1;
      if (!m) {
        const j = w.startContainer, q = j.nodeType === Node.TEXT_NODE ? j.parentElement : j, ne = Ge(q) || cr();
        return ne && (ne.style.textAlign = h, o(h)), !0;
      }
      const S = sr(w);
      if (S.length === 0) {
        const j = document.createElement("p");
        j.style.textAlign = h;
        const q = w.extractContents();
        j.appendChild(q), w.insertNode(j), w.selectNodeContents(j), R.removeAllRanges(), R.addRange(w);
      } else
        S.forEach((j) => {
          j.style.textAlign = h;
        });
      return o(h), !0;
    } catch (R) {
      return console.warn("[useFormatting] Text alignment failed:", R), !1;
    }
  }, []), o = L((T) => {
    t((R) => ({
      ...R,
      alignLeft: T === "left",
      alignCenter: T === "center",
      alignRight: T === "right",
      alignJustify: T === "justify"
    }));
  }, []), i = L((T, R = null) => {
    try {
      if (T === "undo") {
        r.undo();
        return;
      }
      if (T === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (T === "fontSize") {
        s(R);
        return;
      }
      if (T === "fontName") {
        n(R);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(T)) {
        a(T);
        return;
      }
      switch (document.execCommand(T, !1, R) || console.warn(`[useFormatting] Command "${T}" failed`), T) {
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
          t((m) => ({ ...m, headingLevel: R }));
          break;
        default:
          break;
      }
    } catch (w) {
      console.warn(`[useFormatting] Error executing command "${T}":`, w);
    }
  }, [s, n, r]), g = X(null), l = X(null), d = X(null), f = X(null), p = X(he);
  L((T) => {
    if (!pe(T)) return;
    g.current && (Ae(g.current), g.current = null), T.classList.add("selected");
    const R = on(T);
    R && (g.current = R, l.current = T, document.body.appendChild(R), t((w) => ({
      ...w,
      imageSelected: !0,
      preserveAspectRatio: p.current.preserveAspectRatio
    })));
  }, []);
  const b = L(() => {
    l.current && (l.current.classList.remove("selected"), l.current = null), g.current && (Ae(g.current), g.current = null), d.current = null, f.current = null, t((T) => ({
      ...T,
      imageSelected: !1
    }));
  }, []), x = L(() => {
    const T = !p.current.preserveAspectRatio;
    p.current = {
      ...p.current,
      preserveAspectRatio: T,
      aspectRatio: T
    }, t((R) => ({
      ...R,
      preserveAspectRatio: T
    }));
  }, []);
  L((T, R, w) => {
    l.current && (d.current = {
      x: R,
      y: w,
      width: l.current.offsetWidth,
      height: l.current.offsetHeight
    }, f.current = T, document.body.classList.add("resize-in-progress"), document.body.style.cursor = lr(T));
  }, []), L((T, R) => {
    if (!l.current || !d.current || !f.current) return;
    const { x: w, y: m, width: c, height: h } = d.current, S = f.current, j = ur({
      handler: S,
      startX: w,
      startY: m,
      currentX: T,
      currentY: R,
      startWidth: c,
      startHeight: h,
      options: p.current
    });
    dr(l.current, j), g.current && Ue(g.current, l.current);
  }, []), L(() => {
    if (d.current = null, f.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", l.current) {
      const T = new Event("input", { bubbles: !0, cancelable: !0 });
      l.current.dispatchEvent(T);
    }
  }, []);
  const A = L(() => {
    try {
      const T = window.getSelection();
      if (!T || T.rangeCount === 0)
        return;
      const R = T.getRangeAt(0), w = R.toString();
      let m = Ze, c = "Arial", h = "p", S = "left";
      if (w) {
        const q = R.startContainer, ne = q.nodeType === Node.TEXT_NODE ? q.parentElement : q;
        if (ne) {
          const oe = window.getComputedStyle(ne), Q = oe.fontSize, I = oe.fontFamily;
          Q && Q.endsWith("px") && (m = Q), I && I !== "serif" && (c = I.split(",")[0].replace(/['"]/g, "").trim());
          const F = Ge(ne);
          if (F) {
            const ee = F.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(ee) && (h = ee);
            const J = window.getComputedStyle(F).textAlign;
            ["left", "center", "right", "justify"].includes(J) && (S = J);
          }
        }
      }
      const j = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: S === "left",
        alignCenter: S === "center",
        alignRight: S === "right",
        alignJustify: S === "justify",
        fontFamily: c,
        fontSize: m,
        headingLevel: h
      };
      t((q) => ({
        ...q,
        ...j
      }));
    } catch (T) {
      console.warn("[useFormatting] Error updating format from selection:", T);
    }
  }, []), N = L(() => {
    b(), t(Ut);
  }, [b]);
  return ie(() => () => {
    g.current && Ae(g.current);
  }, []), {
    currentFormat: e,
    formatText: i,
    resetFormat: N,
    updateCurrentFormatFromSelection: A,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: x
  };
};
function Ge(e) {
  let t = e;
  for (; t && t !== document.body; ) {
    const r = t.tagName?.toLowerCase();
    if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(r))
      return t;
    if (t.contentEditable === "true" || t.contentEditable === "")
      break;
    t = t.parentElement;
  }
  return null;
}
function sr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, s = Ge(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), a = Ge(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (s === a && s)
    return [s];
  const o = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (g) => {
        const l = g.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(l) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = o.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = o.nextNode();
  return t;
}
function cr() {
  try {
    const e = window.getSelection();
    if (!e || e.rangeCount === 0)
      return null;
    const t = e.getRangeAt(0), r = document.createElement("p");
    return r.innerHTML = "<br>", t.insertNode(r), t.selectNodeContents(r), t.collapse(!0), e.removeAllRanges(), e.addRange(t), r;
  } catch (e) {
    return console.warn("[useFormatting] Failed to create paragraph at cursor:", e), null;
  }
}
function lr(e) {
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
function ur({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = he
}) {
  const g = n - t, l = s - r;
  let d = a, f = o;
  switch (e) {
    case P.TOP_LEFT:
      d = Math.max(i.minWidth, a - g), f = Math.max(i.minHeight, o - l);
      break;
    case P.TOP_RIGHT:
      d = Math.max(i.minWidth, a + g), f = Math.max(i.minHeight, o - l);
      break;
    case P.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - g), f = Math.max(i.minHeight, o + l);
      break;
    case P.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + g), f = Math.max(i.minHeight, o + l);
      break;
    case P.TOP:
      f = Math.max(i.minHeight, o - l);
      break;
    case P.BOTTOM:
      f = Math.max(i.minHeight, o + l);
      break;
    case P.LEFT:
      d = Math.max(i.minWidth, a - g);
      break;
    case P.RIGHT:
      d = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: d, height: f };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = a / o;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? d / p > f ? f = Math.max(i.minHeight, d / p) : d = Math.max(i.minWidth, f * p) : [P.TOP, P.BOTTOM].includes(e) ? d = f * p : [P.LEFT, P.RIGHT].includes(e) && (f = d / p);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (f = d / (a / o))), i.maxHeight && f > i.maxHeight && (f = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = f * (a / o))), d = Math.max(i.minWidth, d), f = Math.max(i.minHeight, f), {
    width: Math.round(d),
    height: Math.round(f)
  };
}
function dr(e, { width: t, height: r }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
const ye = 'page-break, [data-page-break="true"]', sn = (e) => ue[e] || ue.A4, fr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = sn(r), s = e.querySelectorAll(ye), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const o = e.getBoundingClientRect(), i = e.scrollTop;
  return s.forEach((g, l) => {
    const f = g.getBoundingClientRect().top - o.top + i;
    a.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: f,
      height: n.height
    });
  }), a;
}, cn = (e, t = 100, r = ge) => {
  const n = sn(e), s = Fn(r), a = n.height - s, o = t / 100;
  return a / o;
}, pr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(ye);
    if (r.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), s = n.top + n.height / 2;
    for (let a = r.length - 1; a >= 0; a--)
      if (r[a].getBoundingClientRect().top < s)
        return a + 1;
    return 0;
  } catch (r) {
    return console.warn("[getCurrentPage] Failed to calculate page:", r), 0;
  }
}, Gt = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let r = [], n = [];
  for (const s of t)
    s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true" ? n.length > 0 && (r.push(n), n = []) : n.push(s);
  return n.length > 0 && r.push(n), r.length === 0 && t.length > 0 && r.push(t.filter(
    (s) => !(s.tagName === "PAGE-BREAK" || s.getAttribute("data-page-break") === "true")
  )), r;
}, gr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const a = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, hr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, mr = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  try {
    const g = cn(r, n, s) * (t - 1), l = Array.from(e.children);
    let d = 0, f = null;
    for (let p = 0; p < l.length; p++) {
      const b = l[p];
      if (b.tagName === "PAGE-BREAK" || b.getAttribute("data-page-break") === "true")
        continue;
      const x = gr(b);
      if (d + x > g) {
        f = b;
        break;
      }
      d += x;
    }
    if (f) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), f.parentNode.insertBefore(p, f), a) {
        const b = e.innerHTML;
        a(b);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const b = document.createElement("p");
      if (b.innerHTML = "<br>", e.appendChild(b), a) {
        const x = e.innerHTML;
        a(x);
      }
      return o && setTimeout(() => {
        o();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, yr = (e, t, r, n, s, a, o) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(ye));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let d = !1, f = [], p = null;
    if (t === 0) {
      const x = g[0];
      if (!x)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let A = e.firstChild;
      for (; A && A !== x; )
        f.push(A), A = A.nextSibling;
      p = x;
    } else {
      const x = g[t - 1];
      if (!x)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const A = g[t];
      let N = x.nextSibling;
      for (; N && N !== A; )
        f.push(N), N = N.nextSibling;
      p = x;
    }
    if (l && l.rangeCount > 0) {
      const A = l.getRangeAt(0).startContainer;
      for (const N of f)
        if (N.contains(A) || N === A) {
          d = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), f.forEach((x) => {
      x.parentNode && x.remove();
    }), e.querySelectorAll(ye).forEach((x, A) => {
      x.setAttribute("data-page-number", String(A + 2));
    }), d && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const x = e.innerHTML;
      n(x);
    }
    return s && setTimeout(() => {
      s(), o && setTimeout(() => {
        o();
      }, 150);
    }, 100), !0;
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, Er = (e) => {
  if (e)
    try {
      e.querySelectorAll(ye).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Tr = (e, t, r, n, s) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Er(t), r) {
      const a = t.innerHTML;
      r(a);
    }
    return n && setTimeout(() => {
      n(), s && setTimeout(() => {
        s();
      }, 100);
    }, 50), !0;
  } catch (a) {
    return console.error("[removePageBreak] Failed to remove page break:", a), !1;
  }
}, br = 200, vr = 50, qt = 3, xr = 20, ln = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const a = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return a.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Ar = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (!a || !a.getBoundingClientRect)
      continue;
    const o = ln(a);
    if (o < 1)
      continue;
    if (r + o > t)
      return n === null ? s > 0 ? {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: r
      } : null : {
        overflowIndex: s,
        overflowElement: a,
        accumulatedHeight: r
      };
    r += o, n = a;
  }
  return null;
}, Pr = (e, t, r, n, s, a, o, i) => {
  if (!e || o.current)
    return !1;
  try {
    o.current = !0;
    const g = cn(t, r, n);
    let l = Gt(e), d = !1, f = 0;
    for (let p = 0; p < l.length && f < qt; p++) {
      const b = l[p], x = Ar(b, g);
      if (x && x.overflowIndex > 0) {
        let A = 0;
        for (let w = 0; w < b.length; w++) {
          const m = b[w];
          m && m.getBoundingClientRect && (A += ln(m));
        }
        if (A - g < xr)
          continue;
        const T = p + 2;
        hr(x.overflowElement, T) && (d = !0, f++, l = Gt(e));
      }
    }
    if (d) {
      if (s) {
        const p = e.innerHTML;
        s(p);
      }
      setTimeout(() => {
        a && a(), f >= qt && i && setTimeout(() => {
          o.current || i();
        }, 100);
      }, vr);
    }
    return d;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    o.current = !1;
  }
}, _r = (e, t, r = br) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, Rr = 400, un = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const a = e.querySelectorAll(ye)[t - 1];
        a && a.nextSibling && (r = a.nextSibling, n = 0);
      }
      if (r) {
        const s = document.createRange(), a = window.getSelection();
        r.nodeType === Node.TEXT_NODE ? s.setStart(r, n) : s.setStart(r, 0), s.collapse(!0), a.removeAllRanges(), a.addRange(s);
      }
    } catch (r) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", r);
    }
  }
}, wr = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let s = null;
    if (r === 0)
      s = t;
    else {
      const o = t.querySelectorAll(ye)[r - 1];
      if (o)
        s = o;
      else {
        console.warn("[scrollToPage] Page break not found for page", r);
        return;
      }
    }
    if (s) {
      const a = s.getBoundingClientRect(), o = e.getBoundingClientRect(), i = e.scrollTop + (a.top - o.top);
      e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(r) : un(t, r);
      }, Rr);
    }
  } catch (s) {
    console.error("[scrollToPage] Error:", s);
  }
}, Sr = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, Or = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const s = e.querySelectorAll(ye);
  for (const d of s)
    if (r.comparePoint(d, 0) > 0)
      n++;
    else
      break;
  const a = document.createRange();
  a.setStart(e, 0), a.setEnd(r.startContainer, r.startOffset);
  const i = a.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), g = i.length, l = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: l,
    charOffset: g
  };
}, kr = 300, Cr = (e, t, r = 100, n = "NARROW") => {
  const s = ke(), a = X(null), o = X(null), i = X(e), g = X(r), l = X(n), d = X(!1);
  ie(() => {
    i.current = e;
  }, [e]), ie(() => {
    g.current = r;
  }, [r]), ie(() => {
    l.current = n;
  }, [n]), ie(() => () => {
    a.current && clearTimeout(a.current), o.current && clearTimeout(o.current);
  }, []);
  const f = L((h = {}) => t?.current ? fr(t.current, h) : [], [t]), p = L((h = {}) => {
    const S = f(h);
    return s.updatePageBoundaries(S), S;
  }, [f, s]), b = L(async (h) => {
    if (!t?.current)
      return !1;
    const S = i.current || "A4", j = g.current || 100, q = l.current || "NARROW";
    return mr(
      t.current,
      h,
      S,
      j,
      q,
      s.updateContinuousContent,
      p
    );
  }, [t, s, p]), x = L(() => {
    if (!t?.current)
      return;
    const h = i.current || "A4", S = g.current || 100, j = l.current || "NARROW";
    Pr(
      t.current,
      h,
      S,
      j,
      s.updateContinuousContent,
      p,
      d,
      x
    );
  }, [t, s, p]), A = L((h) => {
    _r(x, o, h);
  }, [x]), N = L((h = {}) => {
    const S = typeof h.delay == "number" ? h.delay : kr;
    Sr(p, a, h, S);
  }, [p]), T = L((h) => !h?.current || !t?.current ? 0 : pr(h.current, t.current), [t]), R = L((h) => {
    t?.current && un(t.current, h);
  }, [t]), w = L((h, S) => {
    if (!S?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    wr(S.current, t.current, h, R);
  }, [t, R]), m = L((h) => t?.current ? yr(
    t.current,
    h,
    f,
    s.updateContinuousContent,
    p,
    R,
    x
  ) : !1, [t, f, s, p, R, x]), c = L((h) => t?.current ? Tr(
    h,
    t.current,
    s.updateContinuousContent,
    p,
    x
  ) : !1, [t, s, p, x]);
  return {
    calculatePageBoundaries: f,
    checkAndUpdateBoundaries: N,
    updateBoundaries: p,
    getCurrentPage: T,
    scrollToPage: w,
    positionCursorAtPage: R,
    checkAndReflow: x,
    triggerAutoReflow: A,
    removePageAndContent: m,
    removePageBreak: c,
    insertPageBreakAtBoundary: b,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: o
  };
}, Mr = "html-editor-storage", Nr = 1, fe = "images";
function Ir() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Ce() {
  return new Promise((e, t) => {
    const r = indexedDB.open(Mr, Nr);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const s = n.target.result;
      s.objectStoreNames.contains(fe) || s.createObjectStore(fe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function Lr(e) {
  return new Promise((t, r) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      r(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      r(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const s = new FileReader();
    s.onload = async (a) => {
      const o = a.target.result, g = o.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await Ce(), d = `editor-image-${Ir()}`, p = l.transaction([fe], "readwrite").objectStore(fe), b = {
          key: d,
          dataUrl: o,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, x = p.add(b);
        x.onsuccess = () => {
          l.close(), t(d);
        }, x.onerror = () => {
          l.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        r(l);
      }
    }, s.onerror = () => {
      r(new Error("Error reading image file"));
    }, s.readAsDataURL(e);
  });
}
async function Dr(e) {
  try {
    const t = await Ce();
    return new Promise((r, n) => {
      const o = t.transaction([fe], "readonly").objectStore(fe).get(e);
      o.onsuccess = () => {
        t.close();
        const i = o.result;
        r(i ? i.dataUrl : null);
      }, o.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function jr(e) {
  try {
    const t = await Ce();
    return new Promise((r, n) => {
      const o = t.transaction([fe], "readwrite").objectStore(fe).delete(e);
      o.onsuccess = () => {
        t.close(), r();
      }, o.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function Ba() {
  try {
    const e = await Ce();
    return new Promise((t, r) => {
      const a = e.transaction([fe], "readwrite").objectStore(fe).clear();
      a.onsuccess = () => {
        e.close(), t();
      }, a.onerror = () => {
        e.close(), r(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function Ha() {
  try {
    const e = await Ce();
    return new Promise((t, r) => {
      const a = e.transaction([fe], "readonly").objectStore(fe).getAllKeys();
      a.onsuccess = () => {
        e.close(), t(a.result || []);
      }, a.onerror = () => {
        e.close(), r(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
const Br = [
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
], Hr = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function zr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function dn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function $e(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Se(r) || "<p><br></p>";
}
function $r(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function Se(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    if (s.nodeType === Node.TEXT_NODE) {
      const a = s.textContent.trim();
      a && t.push(`<p>${zr(a)}</p>`);
    } else if (s.nodeType === Node.ELEMENT_NODE) {
      const a = s, o = a.tagName, i = o.toLowerCase(), g = dn(a);
      if (o === "DIV") {
        const l = Se(a);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (o === "P")
        t.push(a.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(o)) {
        const l = $r(a);
        t.push(`<${i}${g}>${l}</${i}>`);
      } else if (o === "BR")
        t.push("<p><br></p>");
      else if (o === "IMG")
        t.push(a.outerHTML);
      else if (["UL", "OL"].includes(o))
        t.push(Fr(a));
      else if (o === "LI")
        t.push(a.outerHTML);
      else if (o === "TABLE")
        t.push(Ur(a));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(o))
        t.push(a.outerHTML);
      else if (o === "BLOCKQUOTE") {
        const l = Se(a);
        t.push(`<blockquote${g}>${l}</blockquote>`);
      } else if (o === "PRE")
        t.push(a.outerHTML);
      else if (Br.includes(o))
        t.push(a.outerHTML);
      else if (o === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
        t.push(a.outerHTML);
      else if (o === "HR")
        t.push(a.outerHTML);
      else if (o === "FIGURE")
        t.push(a.outerHTML);
      else if (Hr.includes(o))
        t.push(a.outerHTML);
      else {
        const l = Se(a);
        t.push(`<${i}${g}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Fr(e) {
  const t = e.tagName.toLowerCase(), r = dn(e), n = [];
  return Array.from(e.children).forEach((s) => {
    if (s.tagName === "LI")
      n.push(s.outerHTML);
    else {
      const a = Se(s);
      a.trim() && n.push(`<li>${a}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Ur(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Wt = (e) => {
  const t = qr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, fn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Wr = (e) => {
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
const Yr = dt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: o,
    ...i
  }, g) => nt(
    "svg",
    {
      ref: g,
      ...Zr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: fn("lucide", s),
      ...!a && !Wr(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...o.map(([l, d]) => nt(l, d)),
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
const W = (e, t) => {
  const r = dt(
    ({ className: n, ...s }, a) => nt(Yr, {
      ref: a,
      iconNode: t,
      className: fn(
        `lucide-${Gr(Wt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = Wt(e), r;
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
], Kr = W("bold", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Jr = W("chevron-left", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], eo = W("chevron-right", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], no = W("file-check", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], qe = W("file-text", ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ao = W("hash", oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], so = W("heading-1", io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], lo = W("heading-2", co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], fo = W("heading-3", uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], go = W("image-upscale", po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], mo = W("image", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Eo = W("italic", yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], bo = W("link", To);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], xo = W("list-indent-decrease", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Po = W("list-indent-increase", Ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Ro = W("list-ordered", _o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], pn = W("list", wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Oo = W("plus", So);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Co = W("redo", ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], No = W("scaling", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Lo = W("settings", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], jo = W("strikethrough", Do);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Ho = W("table", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], gn = W("text-align-center", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], hn = W("text-align-end", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Uo = W("text-align-justify", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], mn = W("text-align-start", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Wo = W("trash-2", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Yo = W("underline", Zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Ko = W("undo", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Jo = W("x", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ea = W("zoom-in", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], na = W("zoom-out", ta), Zt = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const s = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(s).map((a, o) => {
    const i = parseInt(a.tagName.charAt(1)), g = a.textContent.trim();
    return g ? {
      id: `${r}heading-${o}`,
      level: i,
      text: g,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, ra = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, oa = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const s = en(), { pages: a, activePage: o, continuousContent: i } = s, [g, l] = de(0), [d, f] = de([]);
  ie(() => {
    if (r !== void 0 && n !== void 0) {
      l(r), f(Zt(i, 1, "continuous-"));
      return;
    }
    let b = 0;
    const x = [];
    a.forEach((A, N) => {
      b += ra(A.content), x.push(...Zt(A.content, N + 1, `page-${N}-`));
    }), l(b), f(x);
  }, [a, r, n, i]);
  const p = n !== void 0 ? n : a.length;
  return /* @__PURE__ */ y.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ y.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ y.jsx(qe, { size: 18 }),
            /* @__PURE__ */ y.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ y.jsx(eo, { size: 16 }) : /* @__PURE__ */ y.jsx(Jr, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(no, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: p })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(ao, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(qe, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: o + 1 })
            ] })
          ] }),
          d.length > 0 && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsxs("h3", { children: [
              /* @__PURE__ */ y.jsx(pn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ y.jsx("div", { className: "document-outline", "data-testid": "outline", children: d.map((b) => {
              const x = b.level === 1 ? so : b.level === 2 ? lo : fo;
              return /* @__PURE__ */ y.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${b.level}`,
                  style: { marginLeft: `${(b.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ y.jsx(x, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ y.jsx("span", { className: "outline-text", children: b.text }),
                    /* @__PURE__ */ y.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      b.page
                    ] })
                  ]
                },
                b.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class aa {
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
  _format(t, r, n) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${r}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, r) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, r) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, r) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, r) {
  }
}
const Yt = new aa("Editor"), yn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), En = 32;
function Tn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * En}px`, e.dataset.indentLevel = String(n));
}
function ia(e, t) {
  Tn(e, t);
}
function sa(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && yn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ca() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), r = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((o) => {
    document.createRange().selectNodeContents(o), t.intersectsNode(o) && r.add(o);
  }), r.size === 0 && n.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let l = i.parentElement;
      for (; l && l !== n; ) {
        if (l.tagName && yn.has(l.tagName.toUpperCase())) {
          r.add(l);
          break;
        }
        l = l.parentElement;
      }
    }
  }), Array.from(r).filter((o) => {
    let i = o.parentElement;
    for (; i; ) {
      if (r.has(i))
        return !1;
      i = i.parentElement;
    }
    return !0;
  })) : [];
}
function la(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * En}px`, e.dataset.indentLevel = String(r));
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
    let r = t.nextNode();
    for (; r; ) {
      const n = r.textContent;
      if (n.startsWith("    ")) {
        r.textContent = n.substring(4);
        break;
      }
      r = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function ut(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = ca();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const o = sa(n.startContainer);
    if (!o) return !1;
    r = [o];
  }
  const s = r[0], a = r[r.length - 1];
  r.forEach((o) => {
    if ((o.tagName ? o.tagName.toUpperCase() : "") === "LI") {
      ia(o, e);
      return;
    }
    e ? la(o) : Tn(o, !1);
  });
  try {
    const o = document.createRange(), i = (f) => f.nodeType === Node.TEXT_NODE ? f : document.createTreeWalker(
      f,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), g = (f) => {
      if (f.nodeType === Node.TEXT_NODE)
        return f;
      const p = document.createTreeWalker(
        f,
        NodeFilter.SHOW_TEXT,
        null
      );
      let b = null, x = p.nextNode();
      for (; x; )
        b = x, x = p.nextNode();
      return b;
    }, l = i(s);
    l ? o.setStart(l, 0) : o.setStart(s, 0);
    const d = g(a);
    d ? o.setEnd(d, d.length) : o.setEnd(a, a.childNodes.length), t.removeAllRanges(), t.addRange(o);
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
function ua(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && ut(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const da = [
  // English Fonts
  { value: "Segoe UI", label: "Segoe UI" },
  { value: "Arial", label: "Arial" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Georgia", label: "Georgia" },
  { value: "Verdana", label: "Verdana" },
  // Sinhala Fonts
  { value: "Noto Sans Sinhala", label: "Noto Sans Sinhala" },
  { value: "Iskoola Pota", label: "Iskoola Pota" },
  // Tamil Fonts
  { value: "Noto Sans Tamil", label: "Noto Sans Tamil" },
  // Unicode Fonts
  { value: "Noto Sans", label: "Noto Sans" }
], fa = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], pa = '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', ht = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  canUndo: n = !1,
  canRedo: s = !1
}) => {
  const a = async (l) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(l.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (l.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const f = await Lr(l), p = await Dr(f);
      if (p) {
        const x = `<img src="${p}" data-key="${f}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, x), Yt.info("Image inserted", { key: f });
      }
      const b = document.getElementById("image-upload");
      b && (b.value = "");
    } catch (d) {
      Yt.error("Error uploading image", d);
    }
  }, o = (l, d, f, p) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: () => t(l),
      className: e[d] ? "active" : "",
      title: p,
      children: /* @__PURE__ */ y.jsx(f, { size: 16 })
    },
    l
  ), i = (l, d, f, p = !1) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: l,
      disabled: p,
      title: f,
      style: { opacity: p ? 0.5 : 1 },
      children: /* @__PURE__ */ y.jsx(d, { size: 16 })
    },
    f
  ), g = () => /* @__PURE__ */ y.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ y.jsxs("div", { className: "editor-toolbar", children: [
    i(() => t("undo"), Ko, "Undo", !n),
    i(() => t("redo"), Co, "Redo", !s),
    g(),
    o("bold", "bold", Kr, "Bold"),
    o("italic", "italic", Eo, "Italic"),
    o("underline", "underline", Yo, "Underline"),
    o("strikethrough", "strikethrough", jo, "Strikethrough"),
    g(),
    o("justifyLeft", "alignLeft", mn, "Align Left"),
    o("justifyCenter", "alignCenter", gn, "Align Center"),
    o("justifyRight", "alignRight", hn, "Align Right"),
    o("justifyFull", "alignJustify", Uo, "Justify"),
    g(),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: da.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || Ze,
        title: "Font Size",
        children: tr.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: fa.map(({ value: l, label: d }) => /* @__PURE__ */ y.jsx("option", { value: l, children: d }, l))
      }
    ),
    g(),
    i(() => t("insertUnorderedList"), pn, "Bullet List"),
    i(() => t("insertOrderedList"), Ro, "Numbered List"),
    g(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          ut(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ y.jsx(Po, { size: 16 })
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          ut(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ y.jsx(xo, { size: 16 })
      }
    ),
    g(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && t("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ y.jsx(bo, { size: 16 })
      }
    ),
    i(() => t("insertHTML", pa), Ho, "Insert Table"),
    r && i(r, qe, "Insert Page Break"),
    g(),
    /* @__PURE__ */ y.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && a(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ y.jsx(mo, { size: 16 })
      }
    )
  ] });
};
ht.propTypes = {
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
ht.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function ga(e) {
  return !e || typeof e != "string" ? e : $e(e);
}
function ha(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = ga(r) : r = ma(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function ma(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((a) => a.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((a) => ya(a.trim())).join("<br>")}</p>`;
  }).join("");
}
function ya(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Te = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && Te(e.parentElement) : !1, mt = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: s,
  onClick: a,
  onScroll: o,
  onPaste: i,
  onRemovePageBreak: g,
  zoomLevel: l = 100,
  pageMargins: d = ge
}) => {
  const f = xe(() => Vt(d), [d]), p = l / 100, b = L((m, c) => {
    if (!m) return !1;
    const h = m.getBoundingClientRect(), S = c - h.top;
    return S < f.top || S > h.height - f.bottom;
  }, [f.top, f.bottom]), x = L((m, c) => {
    c.preventDefault();
    const h = m.getBoundingClientRect(), S = c.clientX - h.left, j = c.clientY - h.top, q = h.width - 40, ne = -12, oe = h.width - 20;
    S >= q && S <= oe && j >= ne && j <= 8 && g && g(m);
  }, [g]), A = L((m) => {
    m.preventDefault();
    const c = t.current.getBoundingClientRect();
    if (m.clientY - c.top < f.top) {
      const S = t.current.firstElementChild;
      if (S && S.tagName !== "PAGE-BREAK") {
        const j = document.createRange(), q = window.getSelection();
        j.setStart(S, 0), j.collapse(!0), q.removeAllRanges(), q.addRange(j);
      }
    } else {
      const S = t.current.lastElementChild;
      if (S && S.tagName !== "PAGE-BREAK") {
        const j = document.createRange(), q = window.getSelection();
        j.selectNodeContents(S), j.collapse(!1), q.removeAllRanges(), q.addRange(j);
      }
    }
  }, [t, f.top]), N = L((m) => {
    const c = window.getSelection();
    if (!c || c.rangeCount === 0) return;
    const h = c.getRangeAt(0), { startContainer: S, endContainer: j } = h;
    if ((Te(S) || Te(j)) && (m.key.length === 1 || m.key === "Enter" || m.key === " "))
      return m.preventDefault(), !1;
    if (ua(m))
      return n && n(), !1;
    if ((m.key === "Backspace" || m.key === "Delete") && (Te(S) || Te(j)))
      return m.preventDefault(), !1;
    s && s(m);
  }, [s, n]), T = L((m) => {
    if (!t.current) return;
    const c = m.target;
    if (Te(c)) {
      x(c, m);
      return;
    }
    if (b(t.current, m.clientY)) {
      A(m);
      return;
    }
    a && a(m);
  }, [t, a, x, A, b]), R = L((m) => {
    const c = window.getSelection();
    if (!c || c.rangeCount === 0) return;
    const h = c.getRangeAt(0), { startContainer: S } = h;
    if (Te(S))
      return m.preventDefault(), !1;
  }, []), w = L((m) => {
    const c = ha(m);
    i && i(m, c);
  }, [i]);
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${e.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh",
        transform: `scale(${p})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ref: t,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            backgroundColor: "white",
            padding: `${f.top}px ${f.right}px ${f.bottom}px ${f.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: Ze,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: N,
          onBeforeInput: R,
          onClick: T,
          onScroll: o,
          onPaste: w,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
mt.propTypes = {
  dimensions: v.shape({
    width: v.number.isRequired,
    height: v.number.isRequired
  }).isRequired,
  editorRef: v.shape({
    current: v.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: v.func.isRequired,
  onContentChange: v.func,
  onKeyDown: v.func,
  onClick: v.func,
  onScroll: v.func,
  onPaste: v.func,
  onRemovePageBreak: v.func,
  zoomLevel: v.number,
  pageMargins: v.string
};
mt.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: ge
};
const Ea = Nn(mt), yt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = ge,
  zoomLevel: s = 100,
  canZoomIn: a = !0,
  canZoomOut: o = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: l,
  onPageSizeChange: d,
  onPageMarginsChange: f,
  onZoomIn: p,
  onZoomOut: b,
  onZoomReset: x
} = {}) => {
  const A = Math.max(e?.length || 0, 1), N = (c) => {
    i && i(c);
  }, T = () => {
    g && g();
  }, R = (c) => {
    if (A <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(c);
  }, w = (c) => {
    d && d(c);
  }, m = (c) => {
    f && f(c);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ y.jsx(Lo, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ y.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: r,
              onChange: (c) => w(c.target.value),
              children: [
                /* @__PURE__ */ y.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ y.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ y.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ y.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (c) => m(c.target.value),
              children: Un().map((c) => /* @__PURE__ */ y.jsx("option", { value: c, children: Gn(c) }, c))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: b,
          disabled: !o,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ y.jsx(na, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsxs("span", { className: "zoom-level-display", children: [
        s,
        "%"
      ] }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: p,
          disabled: !a,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ y.jsx(ea, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: x,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "page-list", children: e.map((c, h) => /* @__PURE__ */ y.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${h === t ? "active" : ""}`,
          onClick: () => N(h),
          "aria-label": `Go to page ${h + 1}`,
          "aria-current": h === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ y.jsx(qe, { size: 14 }),
            /* @__PURE__ */ y.jsxs("span", { children: [
              "Page ",
              h + 1
            ] })
          ]
        }
      ),
      A > 1 && /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (S) => {
            S.stopPropagation(), R(h);
          },
          "aria-label": `Delete page ${h + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ y.jsx(Jo, { size: 14 })
        }
      )
    ] }, c.id || `page-${h}`)) }),
    /* @__PURE__ */ y.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: T,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ y.jsx(Oo, { size: 16 }),
          /* @__PURE__ */ y.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
yt.propTypes = {
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
yt.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: ge,
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
const Ta = We.memo(yt);
function ba(e) {
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
function va({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: s,
  startWidth: a,
  startHeight: o,
  options: i = he
}) {
  const g = n - t, l = s - r;
  let d = a, f = o;
  switch (e) {
    case P.TOP_LEFT:
      d = Math.max(i.minWidth, a - g), f = Math.max(i.minHeight, o - l);
      break;
    case P.TOP_RIGHT:
      d = Math.max(i.minWidth, a + g), f = Math.max(i.minHeight, o - l);
      break;
    case P.BOTTOM_LEFT:
      d = Math.max(i.minWidth, a - g), f = Math.max(i.minHeight, o + l);
      break;
    case P.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, a + g), f = Math.max(i.minHeight, o + l);
      break;
    case P.TOP:
      f = Math.max(i.minHeight, o - l);
      break;
    case P.BOTTOM:
      f = Math.max(i.minHeight, o + l);
      break;
    case P.LEFT:
      d = Math.max(i.minWidth, a - g);
      break;
    case P.RIGHT:
      d = Math.max(i.minWidth, a + g);
      break;
    default:
      return { width: d, height: f };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = a / o;
    [
      P.TOP_LEFT,
      P.TOP_RIGHT,
      P.BOTTOM_LEFT,
      P.BOTTOM_RIGHT
    ].includes(e) ? d / p > f ? f = Math.max(i.minHeight, d / p) : d = Math.max(i.minWidth, f * p) : [P.TOP, P.BOTTOM].includes(e) ? d = f * p : [P.LEFT, P.RIGHT].includes(e) && (f = d / p);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (f = d / (a / o))), i.maxHeight && f > i.maxHeight && (f = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = f * (a / o))), d = Math.max(i.minWidth, d), f = Math.max(i.minHeight, f), {
    width: Math.round(d),
    height: Math.round(f)
  };
}
function bn(e, { width: t, height: r }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function xa(e, t, r) {
  bn(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function Aa(e, t, r, n) {
  const { ctrlKey: s, metaKey: a, shiftKey: o, key: i } = e, g = s || a, l = r.offsetWidth, d = r.offsetHeight, p = {
    // Increase width
    ">": g && o ? () => ({
      width: Math.min(n.maxWidth || 800, l + 10),
      height: d
    }) : null,
    // Decrease width
    "<": g && o ? () => ({
      width: Math.max(n.minWidth || 50, l - 10),
      height: d
    }) : null,
    // Increase height
    "+": g && o ? () => ({
      width: l,
      height: Math.min(n.maxHeight || 600, d + 10)
    }) : null,
    // Decrease height
    "-": g && o ? () => ({
      width: l,
      height: Math.max(n.minHeight || 50, d - 10)
    }) : null,
    // Reset to default
    r: g && !o ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (p) {
    e.preventDefault();
    const b = p();
    return xa(t, r, b), !0;
  }
  return !1;
}
const Et = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: s = he
}) => {
  const a = X(null), o = X(null), i = X(null), g = X(null), l = X(s), d = X(!1), f = ke();
  ie(() => {
    l.current = s;
  }, [s]);
  const p = L((m) => {
    if (!pe(m)) return;
    a.current && (Ae(a.current), a.current = null), m.classList.add("selected");
    const c = on(m, l.current);
    c && (a.current = c, o.current = m, document.body.appendChild(c), c.querySelectorAll(".resize-handler").forEach((S) => {
      S.addEventListener("mousedown", x);
    }), r && r(m));
  }, [r]), b = L(() => {
    o.current && (o.current.classList.remove("selected"), o.current = null), a.current && (Ae(a.current), a.current = null), i.current = null, g.current = null, d.current = !1, n && n();
  }, [n]), x = L((m) => {
    if (m.preventDefault(), m.stopPropagation(), !o.current) return;
    const c = m.currentTarget.dataset.handler, h = o.current.getBoundingClientRect(), S = window.pageYOffset || document.documentElement.scrollTop, j = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: m.clientX,
      y: m.clientY,
      width: o.current.offsetWidth,
      height: o.current.offsetHeight,
      originalWidth: o.current.offsetWidth,
      originalHeight: o.current.offsetHeight,
      offsetX: m.clientX - h.left - j,
      offsetY: m.clientY - h.top - S
    }, g.current = c, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = ba(c), document.addEventListener("mousemove", A), document.addEventListener("mouseup", N);
  }, []), A = L((m) => {
    if (!d.current || !o.current || !i.current || !g.current) return;
    m.preventDefault(), m.stopPropagation();
    const { x: c, y: h, width: S, height: j } = i.current, q = g.current, ne = m.clientX, oe = m.clientY, Q = va({
      handler: q,
      startX: c,
      startY: h,
      currentX: ne,
      currentY: oe,
      startWidth: S,
      startHeight: j,
      options: l.current
    });
    bn(o.current, Q), a.current && Ue(a.current, o.current);
  }, []), N = L((m) => {
    if (d.current) {
      if (m.preventDefault(), m.stopPropagation(), o.current && i.current) {
        const c = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, h = {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        };
        (c.width !== h.width || c.height !== h.height) && f.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: h } },
          { type: "IMAGE_RESIZE", payload: { element: o.current, state: c } }
        );
      }
      if (i.current = null, g.current = null, d.current = !1, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", N), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current) {
        const c = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.dispatchEvent(c), t && t(o.current, {
          width: o.current.offsetWidth,
          height: o.current.offsetHeight
        });
      }
    }
  }, [t, f]), T = L((m) => {
    a.current && !a.current.contains(m.target) && b();
    const c = m.target;
    if (pe(c)) {
      if (c === o.current)
        return;
      p(c);
    }
  }, [p, b]), R = L((m) => {
    if ((m.key === "Delete" || m.key === "Backspace") && o.current && !d.current) {
      m.preventDefault();
      const c = o.current;
      if (c.parentNode) {
        c.parentNode.removeChild(c), b();
        const h = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(h);
      }
    }
    m.key === "Escape" && o.current && b(), o.current && !d.current && Aa(m, e, o.current, l.current);
  }, [e, b]), w = L(() => {
    a.current && o.current && Ue(a.current, o.current);
  }, []);
  return ie(() => {
    if (!e.current) return;
    const c = e.current.closest(".editor-viewport");
    return c && (c.addEventListener("scroll", w), window.addEventListener("scroll", w)), () => {
      c && c.removeEventListener("scroll", w), window.removeEventListener("scroll", w);
    };
  }, [e, w]), ie(() => {
    if (!e.current) return;
    const m = e.current;
    return m.addEventListener("click", T), m.addEventListener("keydown", R), window.addEventListener("resize", w), () => {
      m.removeEventListener("click", T), m.removeEventListener("keydown", R), window.removeEventListener("resize", w), d.current && (document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", N), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && Ae(a.current);
    };
  }, [e, T, R, w, A, N]), ie(() => {
    if (!e.current) return;
    const m = new MutationObserver((c) => {
      c.forEach((h) => {
        h.type === "childList" && (h.removedNodes.forEach((S) => {
          S.nodeType === Node.ELEMENT_NODE && pe(S) && S === o.current && b();
        }), h.addedNodes.forEach((S) => {
          if (S.nodeType !== Node.ELEMENT_NODE) return;
          if (pe(S)) {
            setTimeout(() => p(S), 50);
            return;
          }
          const j = S.querySelectorAll?.("img") || [];
          j.length > 0 && setTimeout(() => p(j[0]), 50);
        }));
      });
    });
    return m.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => m.disconnect();
  }, [e, b, p]), null;
};
Et.propTypes = {
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
Et.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: he
};
const Tt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: s,
  initialPreserveAspectRatio: a = !0
}) => {
  const [o, i] = de({ top: 0, left: 0 }), [g, l] = de(!1), [d, f] = de("top"), [p, b] = de(a), x = X(null), A = X(null), N = ke(), T = (I) => {
    if (!I)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (ee) => setTimeout(ee, 16))(() => {
      const ee = document.querySelector(".image-resize-overlay");
      ee && Ue(ee, I);
    });
  }, R = (I) => {
    if (!I) return null;
    const F = window.getComputedStyle(I);
    return {
      float: F.float || "none",
      margin: I.style.margin || "",
      display: F.display || "inline",
      width: I.style.width || I.width || "",
      height: I.style.height || I.height || "",
      aspectRatio: p
    };
  }, w = L(() => {
    if (!e) return "left";
    const I = window.getComputedStyle(e);
    return I.float === "right" ? "right" : I.float === "left" ? "left" : I.display === "block" && I.margin.includes("auto") ? "center" : "left";
  }, [e]), [m, c] = de("left");
  ie(() => {
    e && c(w());
  }, [e, w]);
  const h = L(() => {
    if (!e || !x.current) return;
    const I = e.getBoundingClientRect(), F = x.current.getBoundingClientRect(), ee = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, K = I.bottom >= 0 && I.top <= ee.height && I.right >= 0 && I.left <= ee.width;
    let J = "top", re = 0, se = 0;
    if (K) {
      const C = I.top - F.height - 10, $ = ee.height - I.bottom - F.height - 10;
      $ > C && $ > 0 ? (J = "bottom", re = I.bottom + 10) : (J = "top", re = I.top - F.height - 10);
    } else
      J = "top", re = 10;
    se = I.left + I.width / 2 - F.width / 2;
    const E = window.innerWidth, u = window.innerHeight;
    let _ = Math.max(10, Math.min(se, E - F.width - 10)), M = Math.max(10, Math.min(re, u - F.height - 10));
    i({ top: M, left: _ }), f(J), l(!0);
  }, [e]);
  In(() => {
    h();
    const I = () => {
      h();
    }, F = A.current;
    return F && F.addEventListener("scroll", I), window.addEventListener("scroll", I), window.addEventListener("resize", I), () => {
      F && F.removeEventListener("scroll", I), window.removeEventListener("scroll", I), window.removeEventListener("resize", I), l(!1);
    };
  }, [e, h]), ie(() => {
    const I = (F) => {
      x.current && !x.current.contains(F.target) && F.target !== e && s();
    };
    return document.addEventListener("mousedown", I), () => {
      document.removeEventListener("mousedown", I);
    };
  }, [e, s]);
  const S = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, j = (I) => {
    if (e && S[I]) {
      const F = R(e), ee = m, K = S[I];
      e.style.float = K.float, e.style.margin = K.margin, e.style.display = K.display, c(I), T(e);
      const J = R(e);
      N.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I, state: J } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: ee, state: F } }
      ), t && t(I);
    }
  }, q = () => {
    if (e && e.parentNode) {
      const I = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      N.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: I } }
      ), e.parentNode.removeChild(e), n && n(), s();
    }
  }, ne = () => {
    const I = p, F = !p;
    b(F), N.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: F } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: I } }
    ), r && r(F);
  }, oe = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, Q = (I) => ({
    ...oe,
    background: I ? "#007bff" : "transparent",
    color: I ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : Dn(
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: x,
        className: "image-tooltip-menu",
        "data-menu-position": d,
        "aria-hidden": !g,
        style: {
          position: "fixed",
          top: `${o.top}px`,
          left: `${o.left}px`,
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
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: ne,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ y.jsx(No, { size: 14 }) : /* @__PURE__ */ y.jsx(go, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "left" ? "active" : ""}`,
              onClick: () => j("left"),
              title: "Align Left",
              style: Q(m === "left"),
              children: /* @__PURE__ */ y.jsx(mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "center" ? "active" : ""}`,
              onClick: () => j("center"),
              title: "Align Center",
              style: Q(m === "center"),
              children: /* @__PURE__ */ y.jsx(gn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${m === "right" ? "active" : ""}`,
              onClick: () => j("right"),
              title: "Align Right",
              style: Q(m === "right"),
              children: /* @__PURE__ */ y.jsx(hn, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: q,
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
              children: /* @__PURE__ */ y.jsx(Wo, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Tt.propTypes = {
  imageElement: v.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: v.func,
  onAspectRatioToggle: v.func,
  onDelete: v.func,
  onClose: v.func.isRequired,
  initialPreserveAspectRatio: v.bool
};
Tt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Pa = 50, tt = 50, _a = 50, bt = dt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: s,
  onPageMarginsChange: a,
  onChange: o,
  showSidebar: i = !0,
  showToolbar: g = !0,
  showPageManager: l = !0
}, d) => {
  const f = en(), p = ke(), { pageSize: b, pageMargins: x, continuousContent: A, pageBoundaries: N, activePage: T, zoomLevel: R, canUndo: w, canRedo: m } = f, c = X(null), h = X(null), { currentFormat: S, formatText: j, updateCurrentFormatFromSelection: q } = ir(), [ne, oe] = de(!1), [Q, I] = de(null), [F, ee] = de(!0), K = X(null), {
    checkAndUpdateBoundaries: J,
    getCurrentPage: re,
    scrollToPage: se,
    updateBoundaries: E,
    triggerAutoReflow: u,
    removePageAndContent: _,
    removePageBreak: M,
    insertPageBreakAtBoundary: C
  } = Cr(b, h, R, x), $ = xe(() => pt(b), [b]), [z, D] = de(!1), H = X(null), G = X(!1), U = X(!1), ae = X(!1), O = X(A);
  ie(() => {
    if (h.current) {
      if (!ae.current) {
        h.current.innerHTML = A, ae.current = !0, O.current = A;
        const k = setTimeout(() => {
          E();
        }, Pa);
        return () => clearTimeout(k);
      }
      if (O.current !== A) {
        if (h.current.innerHTML !== A) {
          h.current.innerHTML = A;
          const Z = setTimeout(() => {
            E(), G.current && Ee();
          }, tt);
          return O.current = A, () => clearTimeout(Z);
        }
        O.current = A;
      }
    }
  }, [A, E, N.length, p, se]), ie(() => {
    o && ae.current && o(A);
  }, [A, o]);
  const ce = xe(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => h.current ? h.current.innerHTML : A,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (h.current ? h.current.innerHTML : A).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => h.current ? Or(h.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (k) => {
      const Z = $e(k);
      Z !== A && p.updateContinuousContent(Z), h.current && h.current.innerHTML !== Z && (h.current.innerHTML = Z), O.current = Z, h.current && setTimeout(() => {
        E();
      }, tt);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (k) => {
      if (!h.current || !k) return;
      const Z = $e(k), te = window.getSelection();
      let le = !1;
      if (te && te.rangeCount > 0) {
        const Ye = te.getRangeAt(0);
        h.current.contains(Ye.commonAncestorContainer) && (le = !0);
      }
      if (!le && K.current)
        try {
          te.removeAllRanges(), te.addRange(K.current);
        } catch (Ye) {
          console.warn("[insertContent] Failed to restore last cursor position:", Ye);
          const Pe = h.current.lastChild;
          if (Pe) {
            const Le = document.createRange();
            Pe.nodeType === Node.TEXT_NODE ? Le.setStart(Pe, Pe.textContent.length) : Le.setStartAfter(Pe), Le.collapse(!0), te.removeAllRanges(), te.addRange(Le);
          }
        }
      document.execCommand("insertHTML", !1, Z);
      const me = h.current.innerHTML;
      p.updateContinuousContent(me), O.current = me, setTimeout(() => {
        E(), u(200);
      }, tt);
    }
  }), [A, p, E, h, K, J]);
  Ln(d, () => ce, [ce]), ie(() => {
    const k = () => {
      if (q(), h.current) {
        const te = window.getSelection();
        if (te.rangeCount > 0) {
          const le = te.getRangeAt(0);
          le.collapsed && h.current.contains(le.commonAncestorContainer) && (K.current = le.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", k);
    const Z = () => {
      if (setTimeout(q, 10), K.current && h.current)
        try {
          const te = window.getSelection();
          te.removeAllRanges(), te.addRange(K.current);
        } catch (te) {
          console.warn("[handleFocus] Failed to restore cursor:", te);
        }
    };
    return h.current && h.current.addEventListener("focus", Z), () => {
      document.removeEventListener("selectionchange", k), h.current && h.current.removeEventListener("focus", Z);
    };
  }, [q]);
  const Ee = L(() => {
    G.current = !1;
    const k = Math.max(0, N.length - 1);
    p.setActivePage(k), setTimeout(() => {
      se(k, c);
    }, _a);
  }, [N.length, p, se]), ve = L(() => {
    if (!h.current) return;
    let k = h.current.innerHTML;
    k = $e(k), k !== h.current.innerHTML && (h.current.innerHTML = k);
    const Z = A;
    if (Z !== k) {
      const le = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: k
      }, me = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: Z
      };
      p.recordOperation(le, me);
    }
    p.updateContinuousContent(k), J(), u(200);
    const te = re(c);
    te !== T && p.setActivePage(te);
  }, [p, J, re, T, u, c, h, A]), xn = L((k) => {
    ve();
  }, [ve]), vt = L((k) => {
    p.updatePageSize(k), E({ pageSize: k }), s && s(k);
  }, [p, E, s]), xt = L((k) => {
    p.updatePageMargins(k), E({ pageMargins: k }), a && a(k);
  }, [p, E, a]), At = L((k) => {
    k < 0 || k >= N.length || (U.current = !0, p.setActivePage(k), se(k, c), setTimeout(() => {
      U.current = !1;
    }, NAVIGATION_LOCK_TIMEOUT), t && t(k));
  }, [p, se, t, N.length]), Pt = L(() => {
    const k = N.length + 1;
    C(k) && (G.current = !0, setTimeout(() => {
      G.current && Ee();
    }, 100)), r && r();
  }, [N.length, C, p, se, r]), An = L(() => {
    const k = window.getSelection();
    if (k && k.rangeCount > 0) {
      if (!h?.current) return;
      const le = `<page-break data-page-break="true" contenteditable="false" data-page-number="${h.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, le), setTimeout(() => {
        E();
        const me = re(c);
        p.setActivePage(me);
      }, 150);
    }
  }, [E, re, p, c]), Pn = L((k) => {
    if (!k) return;
    M(k) && setTimeout(() => {
      const te = re(c);
      p.setActivePage(te);
    }, 200);
  }, [M, re, p, c]), _t = L((k) => {
    if (N.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    _(k) && (p.setActivePage(0), n && n(k));
  }, [N.length, _, p, n]), Me = L(() => {
    p.zoomIn();
  }, [p]), Ne = L(() => {
    p.zoomOut();
  }, [p]), Ie = L(() => {
    p.resetZoom();
  }, [p]), Rt = L(() => {
    p.undo();
  }, [p]), wt = L(() => {
    p.redo();
  }, [p]);
  ie(() => {
    const k = (Z) => {
      if (Z.ctrlKey || Z.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(Z.key) && Z.preventDefault();
        const te = document.activeElement === h.current, le = document.activeElement === c.current, me = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (te || le || !me)
          switch (Z.key) {
            case "+":
            case "=":
              Me();
              break;
            case "-":
            case "_":
              Ne();
              break;
            case "0":
              Ie();
              break;
            case "z":
              Z.shiftKey || Rt();
              break;
            case "y":
              wt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", k), () => {
      window.removeEventListener("keydown", k);
    };
  }, [Me, Ne, Ie, Rt, wt]);
  const _n = L(() => {
    !c.current || !h.current || U.current || (H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      if (U.current) {
        H.current = null;
        return;
      }
      const k = re(c);
      k !== T && k >= 0 && p.setActivePage(k), H.current = null;
    }, SCROLL_DEBOUNCE));
  }, [re, T, p]), Rn = xe(() => {
    if (!A) return 0;
    const Z = A.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return Z ? Z.length : 0;
  }, [A]), wn = N.length || 1, Sn = L((k) => {
    oe(!0), I(k);
  }, []), St = L(() => {
    oe(!1), I(null);
  }, []), On = L((k, Z) => {
  }, []);
  return ie(() => () => {
    H.current && clearTimeout(H.current);
  }, []), /* @__PURE__ */ y.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ y.jsx(
      ht,
      {
        currentFormat: {
          ...S,
          imageSelected: ne
        },
        onFormatText: j,
        onAddPageBreak: An,
        canUndo: w,
        canRedo: m
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ y.jsx(
        oa,
        {
          editorView: null,
          isCollapsed: z,
          onToggle: () => D((k) => !k),
          wordCount: Rn,
          pageCount: wn
        }
      ),
      /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: c,
          onScroll: _n,
          children: /* @__PURE__ */ y.jsx(
            Ea,
            {
              content: A,
              dimensions: $,
              pageSize: b,
              pageMargins: x,
              pageBoundaries: N,
              editorRef: h,
              onInput: xn,
              onContentChange: ve,
              onClick: () => h.current?.focus(),
              onRemovePageBreak: Pn,
              zoomLevel: R
            }
          )
        }
      ),
      /* @__PURE__ */ y.jsx(
        Et,
        {
          editorRef: h,
          onImageSelect: Sn,
          onImageDeselect: St,
          onImageResize: On,
          resizeOptions: {
            ...he,
            preserveAspectRatio: F,
            aspectRatio: F
          }
        }
      ),
      ne && Q && /* @__PURE__ */ y.jsx(
        Tt,
        {
          imageElement: Q,
          initialPreserveAspectRatio: F,
          onAlignChange: (k) => {
          },
          onAspectRatioToggle: (k) => {
            ee(k);
          },
          onDelete: () => {
            if (Q) {
              const k = Q.getAttribute("data-key");
              k && jr(k).catch((Z) => {
                console.error("Failed to delete image from IndexedDB:", Z);
              });
            }
          },
          onClose: St
        }
      ),
      l && /* @__PURE__ */ y.jsx("div", { className: "page-manager-sidebar", children: e ? We.cloneElement(e, {
        onNavigate: At,
        onAddPage: Pt,
        onDeletePage: _t,
        onPageSizeChange: vt,
        onPageMarginsChange: xt,
        zoomLevel: R,
        canZoomIn: it(R),
        canZoomOut: st(R),
        onZoomIn: Me,
        onZoomOut: Ne,
        onZoomReset: Ie
      }) : /* @__PURE__ */ y.jsx(
        Ta,
        {
          pageBoundaries: N,
          activePage: T,
          pageSize: b,
          pageMargins: x,
          zoomLevel: R,
          canZoomIn: it(R),
          canZoomOut: st(R),
          onNavigate: At,
          onAddPage: Pt,
          onDeletePage: _t,
          onPageSizeChange: vt,
          onPageMarginsChange: xt,
          onZoomIn: Me,
          onZoomOut: Ne,
          onZoomReset: Ie
        }
      ) })
    ] })
  ] });
});
bt.displayName = "HtmlEditor";
bt.propTypes = {
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
bt.defaultProps = {
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
class vn extends We.Component {
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
  componentDidCatch(t, r) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", r), this.setState({
      error: t,
      errorInfo: r
    }), this.props.onError && this.props.onError(t, r);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ y.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ y.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ y.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ y.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ y.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ y.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ y.jsx(
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
vn.propTypes = {
  children: v.node.isRequired,
  fallback: v.node,
  onError: v.func,
  onReset: v.func,
  showDetails: v.bool
};
vn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const za = {
  A4: { width: ue.A4.width, height: ue.A4.height },
  Letter: { width: ue.Letter.width, height: ue.Letter.height },
  Legal: { width: ue.Legal.width, height: ue.Legal.height }
};
export {
  tr as COMMON_FONT_SIZES,
  Ze as DEFAULT_FONT_SIZE,
  he as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Kt as DEFAULT_PAGE_SIZE,
  Ca as DocumentProvider,
  ht as EditorToolbar,
  vn as ErrorBoundary,
  rn as FONT_SIZE_MAP,
  bt as HtmlEditor,
  Et as ImageResizeHandlers,
  za as PAGE_DIMENSIONS,
  ue as PAGE_SIZES,
  Ta as PageManager,
  Ea as PageView,
  P as RESIZE_HANDLERS,
  oa as Sidebar,
  ja as applyImageDimensions,
  La as calculateResizeDimensions,
  Ba as clearImages,
  on as createResizeOverlay,
  jr as deleteImage,
  Ha as getAllImageKeys,
  ka as getAvailablePageSizes,
  Dr as getImage,
  Da as getImageDimensions,
  pt as getPageDimensions,
  Ma as getPixelValue,
  Na as getPointValue,
  pe as isResizableImage,
  Ia as isValidFontSize,
  Oa as isValidPageSize,
  aa as logger,
  rr as pixelsToPoints,
  nr as pointsToPixels,
  Ae as removeResizeOverlay,
  Lr as saveImage,
  Ue as updateResizeOverlay,
  Cr as useContinuousReflow,
  Qt as useDocument,
  ke as useDocumentActions,
  en as useDocumentState,
  ir as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
