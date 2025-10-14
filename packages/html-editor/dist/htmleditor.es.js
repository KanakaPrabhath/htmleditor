import He, { createContext as mn, useContext as yn, useReducer as bn, useMemo as je, useState as le, useCallback as q, useRef as te, useEffect as oe, forwardRef as ot, createElement as Ye, useLayoutEffect as En, useImperativeHandle as xn } from "react";
import { v4 as it } from "uuid";
import { createPortal as Tn } from "react-dom";
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Se = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function An() {
  if (bt) return Ee;
  bt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function a(n, i, o) {
    var r = null;
    if (o !== void 0 && (r = "" + o), i.key !== void 0 && (r = "" + i.key), "key" in i) {
      o = {};
      for (var s in i)
        s !== "key" && (o[s] = i[s]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: n,
      key: r,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return Ee.Fragment = t, Ee.jsx = a, Ee.jsxs = a, Ee;
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
var Et;
function _n() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === F ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case b:
          return "Fragment";
        case I:
          return "Profiler";
        case M:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case d:
            return "Portal";
          case T:
            return c.displayName || "Context";
          case _:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var v = c.render;
            return c = c.displayName, c || (c = v.displayName || v.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case P:
            return v = c.displayName || null, v !== null ? v : e(c.type) || "Memo";
          case j:
            v = c._payload, c = c._init;
            try {
              return e(c(v));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function a(c) {
      try {
        t(c);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var C = v.error, N = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return C.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(c);
      }
    }
    function n(c) {
      if (c === b) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === j)
        return "<...>";
      try {
        var v = e(c);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = V.A;
      return c === null ? null : c.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function r(c) {
      if (X.call(c, "key")) {
        var v = Object.getOwnPropertyDescriptor(c, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, v) {
      function C() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: C,
        configurable: !0
      });
    }
    function p() {
      var c = e(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, v, C, N, $, H) {
      var L = C.ref;
      return c = {
        $$typeof: R,
        type: c,
        key: v,
        props: C,
        _owner: N
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: p
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
        value: H
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function g(c, v, C, N, $, H) {
      var L = v.children;
      if (L !== void 0)
        if (N)
          if (B(L)) {
            for (N = 0; N < L.length; N++)
              h(L[N]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(L);
      if (X.call(v, "key")) {
        L = e(c);
        var W = Object.keys(v).filter(function(Y) {
          return Y !== "key";
        });
        N = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", E[L + N] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), E[L + N] = !0);
      }
      if (L = null, C !== void 0 && (a(C), L = "" + C), r(v) && (a(v.key), L = "" + v.key), "key" in v) {
        C = {};
        for (var Z in v)
          Z !== "key" && (C[Z] = v[Z]);
      } else C = v;
      return L && s(
        C,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        L,
        C,
        i(),
        $,
        H
      );
    }
    function h(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === j && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === R;
    }
    var O = He, R = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), T = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), V = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, B = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    O = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var J, G = {}, U = O.react_stack_bottom_frame.bind(
      O,
      o
    )(), ae = re(n(o)), E = {};
    xe.Fragment = b, xe.jsx = function(c, v, C) {
      var N = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        c,
        v,
        C,
        !1,
        N ? Error("react-stack-top-frame") : U,
        N ? re(n(c)) : ae
      );
    }, xe.jsxs = function(c, v, C) {
      var N = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        c,
        v,
        C,
        !0,
        N ? Error("react-stack-top-frame") : U,
        N ? re(n(c)) : ae
      );
    };
  })()), xe;
}
var xt;
function Pn() {
  return xt || (xt = 1, process.env.NODE_ENV === "production" ? Se.exports = An() : Se.exports = _n()), Se.exports;
}
var l = Pn();
const Ve = 100, Ke = 50, Xe = 200, Tt = 5, Je = (e) => e < Xe, Qe = (e) => e > Ke, wn = 96, Me = (e) => Math.round(e * wn), De = {
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
}, pe = "NORMAL", Bt = (e = pe) => {
  const t = De[e] || De[pe];
  return {
    top: Me(t.top),
    bottom: Me(t.bottom),
    left: Me(t.left),
    right: Me(t.right)
  };
}, Rn = (e = pe) => {
  const t = Bt(e);
  return t.top + t.bottom;
}, kn = () => Object.keys(De), On = (e) => {
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
}, $t = "A4", st = (e) => {
  const t = ce[e] || ce[$t];
  return {
    width: t.width,
    height: t.height
  };
}, Ka = (e) => Object.keys(ce).includes(e), Xa = () => Object.keys(ce), Ae = $t, me = "<p><br></p>", Sn = "continuous", ve = (e, t = Ae) => ({
  id: it(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), Ie = (e) => typeof e != "string" || e.trim() === "" ? me : e, Gt = (e, t = Ae) => (e.length > 0 ? e : [ve(0, t)]).map((n, i) => ({
  id: n.id || it(),
  index: i,
  size: n.size || t,
  content: Ie(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Mn = (e = Ae) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: st(e).height
}], et = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || Ae, n = Gt(e.pages || [ve(0, a)], a);
  return {
    id: it(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: a,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Sn,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || Mn(a),
    zoomLevel: e.zoomLevel || Ve,
    pageMargins: e.pageMargins || pe,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, z = {
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
}, tt = (e, t) => {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = me, pageSize: i = Ae } = t.payload || {}, o = { ...ve(0, i), content: Ie(n) };
      return et({
        title: e.title,
        pageSize: i,
        pages: [o]
      });
    }
    case z.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: a
      };
    case z.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: i } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[n] = {
        ...o[n],
        content: Ie(i)
      }, {
        ...e,
        pages: o,
        updatedAt: a
      };
    }
    case z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Gt(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pages: i,
        activePage: Math.min(e.activePage, i.length - 1),
        pageBreaks: o,
        totalPages: i.length,
        updatedAt: a
      };
    }
    case z.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(n, 0, ve(n, e.pageSize));
      const o = i.map((s, p) => ({
        ...s,
        index: p,
        size: e.pageSize
      })), r = o.slice(0, -1).map((s, p) => ({
        id: `auto-break-${p}`,
        pageNumber: p + 1
      }));
      return {
        ...e,
        pages: o,
        activePage: n,
        pageBreaks: r,
        totalPages: o.length,
        updatedAt: a
      };
    }
    case z.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const o = i.map((p, m) => ({
        ...p,
        index: m,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= o.length ? r = o.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = o.slice(0, -1).map((p, m) => ({
        id: `auto-break-${m}`,
        pageNumber: m + 1
      }));
      return {
        ...e,
        pages: o,
        activePage: r,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: a
      };
    }
    case z.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const i = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= i ? e : {
        ...e,
        activePage: n,
        updatedAt: a
      };
    }
    case z.UPDATE_PAGE_SIZE: {
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
      })), o = i.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      }));
      return {
        ...e,
        pageSize: n,
        pages: i,
        pageBreaks: o,
        updatedAt: a
      };
    }
    case z.RESET_DOCUMENT:
      return et();
    case z.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ie(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: a
      };
    }
    case z.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const i = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: i,
        updatedAt: a
      };
    }
    case z.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: i } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + o + "<p><br></p>";
      else if (typeof n == "number") {
        const s = r.substring(0, n), p = r.substring(n);
        r = s + o + p;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = r;
        const p = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && p.length === 0)
          r = r + o + "<p><br></p>";
        else if (i < p.length) {
          const m = p[i], g = document.createElement("page-break");
          g.setAttribute("data-page-break", "true"), g.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", m.parentNode.insertBefore(g, m.nextSibling), g.parentNode.insertBefore(h, g.nextSibling), r = s.innerHTML;
        } else
          r = r + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: a
      };
    }
    case z.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const o = i.querySelectorAll('page-break, [data-page-break="true"]');
      return o[n] && o[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, p) => {
        s.setAttribute("data-page-number", String(p + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: a
      };
    }
    case z.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let i = e.continuousContent, o = e.pages;
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== me).join(`
`) || me : e.continuousContent && e.continuousContent !== me && (o = [{ ...ve(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: o,
        updatedAt: a
      };
    }
    case z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Ke || n > Xe ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Ke} and ${Xe}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case z.ZOOM_IN: {
      if (!Je(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Tt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case z.ZOOM_OUT: {
      if (!Qe(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Tt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case z.RESET_ZOOM:
      return e.zoomLevel === Ve ? e : {
        ...e,
        zoomLevel: Ve,
        updatedAt: a
      };
    case z.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: a
      };
    }
    case z.RECORD_OPERATION: {
      const { operation: n, inverseOperation: i } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: i }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: a
      };
    }
    case z.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let o = e;
      return n.inverseOperation && (o = tt(e, n.inverseOperation)), {
        ...o,
        undoStack: i,
        redoStack: [...e.redoStack, n],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: a
      };
    }
    case z.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let o = e;
      return n.operation && (o = tt(e, n.operation)), {
        ...o,
        undoStack: [...e.undoStack, n],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: a
      };
    }
    case z.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: a
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
}, Ut = mn(null), Ja = ({ children: e, initialState: t = {} }) => {
  const [a, n] = bn(tt, et(t)), i = je(() => ({
    initializeDocument: (r) => n({ type: z.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: z.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: z.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: z.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: z.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: z.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: z.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: z.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: z.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: z.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: z.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: z.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: z.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: z.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: z.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: z.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: z.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: z.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: z.ZOOM_IN }),
    zoomOut: () => n({ type: z.ZOOM_OUT }),
    resetZoom: () => n({ type: z.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: z.UPDATE_PAGE_MARGINS, payload: r }),
    // Undo/Redo actions
    recordOperation: (r, s) => n({
      type: z.RECORD_OPERATION,
      payload: { operation: r, inverseOperation: s }
    }),
    undo: () => n({ type: z.UNDO }),
    redo: () => n({ type: z.REDO }),
    clearUndoRedo: () => n({ type: z.CLEAR_UNDO_REDO })
  }), []), o = je(() => ({
    state: a,
    actions: i,
    dispatch: n
  }), [a, i]);
  return /* @__PURE__ */ l.jsx(Ut.Provider, { value: o, children: e });
}, Ft = () => {
  const e = yn(Ut);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Wt = () => {
  const { state: e } = Ft();
  return e;
}, _e = () => {
  const { actions: e } = Ft();
  return e;
};
var Ne = { exports: {} }, Ce = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Nn() {
  if (vt) return Q;
  vt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function _(u) {
    if (typeof u == "object" && u !== null) {
      var S = u.$$typeof;
      switch (S) {
        case t:
          switch (u = u.type, u) {
            case p:
            case m:
            case n:
            case o:
            case i:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case g:
                case R:
                case O:
                case r:
                  return u;
                default:
                  return S;
              }
          }
        case a:
          return S;
      }
    }
  }
  function T(u) {
    return _(u) === m;
  }
  return Q.AsyncMode = p, Q.ConcurrentMode = m, Q.ContextConsumer = s, Q.ContextProvider = r, Q.Element = t, Q.ForwardRef = g, Q.Fragment = n, Q.Lazy = R, Q.Memo = O, Q.Portal = a, Q.Profiler = o, Q.StrictMode = i, Q.Suspense = h, Q.isAsyncMode = function(u) {
    return T(u) || _(u) === p;
  }, Q.isConcurrentMode = T, Q.isContextConsumer = function(u) {
    return _(u) === s;
  }, Q.isContextProvider = function(u) {
    return _(u) === r;
  }, Q.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, Q.isForwardRef = function(u) {
    return _(u) === g;
  }, Q.isFragment = function(u) {
    return _(u) === n;
  }, Q.isLazy = function(u) {
    return _(u) === R;
  }, Q.isMemo = function(u) {
    return _(u) === O;
  }, Q.isPortal = function(u) {
    return _(u) === a;
  }, Q.isProfiler = function(u) {
    return _(u) === o;
  }, Q.isStrictMode = function(u) {
    return _(u) === i;
  }, Q.isSuspense = function(u) {
    return _(u) === h;
  }, Q.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === m || u === o || u === i || u === h || u === f || typeof u == "object" && u !== null && (u.$$typeof === R || u.$$typeof === O || u.$$typeof === r || u.$$typeof === s || u.$$typeof === g || u.$$typeof === b || u.$$typeof === M || u.$$typeof === I || u.$$typeof === d);
  }, Q.typeOf = _, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Cn() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, O = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function _(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === m || k === o || k === i || k === h || k === f || typeof k == "object" && k !== null && (k.$$typeof === R || k.$$typeof === O || k.$$typeof === r || k.$$typeof === s || k.$$typeof === g || k.$$typeof === b || k.$$typeof === M || k.$$typeof === I || k.$$typeof === d);
    }
    function T(k) {
      if (typeof k == "object" && k !== null) {
        var se = k.$$typeof;
        switch (se) {
          case t:
            var he = k.type;
            switch (he) {
              case p:
              case m:
              case n:
              case o:
              case i:
              case h:
                return he;
              default:
                var we = he && he.$$typeof;
                switch (we) {
                  case s:
                  case g:
                  case R:
                  case O:
                  case r:
                    return we;
                  default:
                    return se;
                }
            }
          case a:
            return se;
        }
      }
    }
    var u = p, S = m, y = s, P = r, j = t, w = g, F = n, V = R, X = O, B = a, re = o, J = i, G = h, U = !1;
    function ae(k) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(k) || T(k) === p;
    }
    function E(k) {
      return T(k) === m;
    }
    function c(k) {
      return T(k) === s;
    }
    function v(k) {
      return T(k) === r;
    }
    function C(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function N(k) {
      return T(k) === g;
    }
    function $(k) {
      return T(k) === n;
    }
    function H(k) {
      return T(k) === R;
    }
    function L(k) {
      return T(k) === O;
    }
    function W(k) {
      return T(k) === a;
    }
    function Z(k) {
      return T(k) === o;
    }
    function Y(k) {
      return T(k) === i;
    }
    function ie(k) {
      return T(k) === h;
    }
    ee.AsyncMode = u, ee.ConcurrentMode = S, ee.ContextConsumer = y, ee.ContextProvider = P, ee.Element = j, ee.ForwardRef = w, ee.Fragment = F, ee.Lazy = V, ee.Memo = X, ee.Portal = B, ee.Profiler = re, ee.StrictMode = J, ee.Suspense = G, ee.isAsyncMode = ae, ee.isConcurrentMode = E, ee.isContextConsumer = c, ee.isContextProvider = v, ee.isElement = C, ee.isForwardRef = N, ee.isFragment = $, ee.isLazy = H, ee.isMemo = L, ee.isPortal = W, ee.isProfiler = Z, ee.isStrictMode = Y, ee.isSuspense = ie, ee.isValidElementType = _, ee.typeOf = T;
  })()), ee;
}
var _t;
function qt() {
  return _t || (_t = 1, process.env.NODE_ENV === "production" ? Ce.exports = Nn() : Ce.exports = Cn()), Ce.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, Pt;
function In() {
  if (Pt) return Ge;
  Pt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var r = {}, s = 0; s < 10; s++)
        r["_" + String.fromCharCode(s)] = s;
      var p = Object.getOwnPropertyNames(r).map(function(g) {
        return r[g];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        m[g] = g;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = i() ? Object.assign : function(o, r) {
    for (var s, p = n(o), m, g = 1; g < arguments.length; g++) {
      s = Object(arguments[g]);
      for (var h in s)
        t.call(s, h) && (p[h] = s[h]);
      if (e) {
        m = e(s);
        for (var f = 0; f < m.length; f++)
          a.call(s, m[f]) && (p[m[f]] = s[m[f]]);
      }
    }
    return p;
  }, Ge;
}
var Ue, wt;
function ct() {
  if (wt) return Ue;
  wt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ue = e, Ue;
}
var Fe, Rt;
function Zt() {
  return Rt || (Rt = 1, Fe = Function.call.bind(Object.prototype.hasOwnProperty)), Fe;
}
var We, kt;
function Ln() {
  if (kt) return We;
  kt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ct(), a = {}, n = /* @__PURE__ */ Zt();
    e = function(o) {
      var r = "Warning: " + o;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function i(o, r, s, p, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in o)
        if (n(o, g)) {
          var h;
          try {
            if (typeof o[g] != "function") {
              var f = Error(
                (p || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            h = o[g](r, g, p, s, null, t);
          } catch (R) {
            h = R;
          }
          if (h && !(h instanceof Error) && e(
            (p || "React class") + ": type specification of " + s + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in a)) {
            a[h.message] = !0;
            var O = m ? m() : "";
            e(
              "Failed " + s + " type: " + h.message + (O ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (a = {});
  }, We = i, We;
}
var qe, Ot;
function jn() {
  if (Ot) return qe;
  Ot = 1;
  var e = qt(), t = In(), a = /* @__PURE__ */ ct(), n = /* @__PURE__ */ Zt(), i = /* @__PURE__ */ Ln(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var p = "Warning: " + s;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return qe = function(s, p) {
    var m = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function h(E) {
      var c = E && (m && E[m] || E[g]);
      if (typeof c == "function")
        return c;
    }
    var f = "<<anonymous>>", O = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: I(),
      arrayOf: _,
      element: T(),
      elementType: u(),
      instanceOf: S,
      node: w(),
      objectOf: P,
      oneOf: y,
      oneOfType: j,
      shape: V,
      exact: X
    };
    function R(E, c) {
      return E === c ? E !== 0 || 1 / E === 1 / c : E !== E && c !== c;
    }
    function d(E, c) {
      this.message = E, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function b(E) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, v = 0;
      function C($, H, L, W, Z, Y, ie) {
        if (W = W || f, Y = Y || L, ie !== a) {
          if (p) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = W + ":" + L;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, v++);
          }
        }
        return H[L] == null ? $ ? H[L] === null ? new d("The " + Z + " `" + Y + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new d("The " + Z + " `" + Y + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : E(H, L, W, Z, Y);
      }
      var N = C.bind(null, !1);
      return N.isRequired = C.bind(null, !0), N;
    }
    function M(E) {
      function c(v, C, N, $, H, L) {
        var W = v[C], Z = J(W);
        if (Z !== E) {
          var Y = G(W);
          return new d(
            "Invalid " + $ + " `" + H + "` of type " + ("`" + Y + "` supplied to `" + N + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return b(c);
    }
    function I() {
      return b(r);
    }
    function _(E) {
      function c(v, C, N, $, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var L = v[C];
        if (!Array.isArray(L)) {
          var W = J(L);
          return new d("Invalid " + $ + " `" + H + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected an array."));
        }
        for (var Z = 0; Z < L.length; Z++) {
          var Y = E(L, Z, N, $, H + "[" + Z + "]", a);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(c);
    }
    function T() {
      function E(c, v, C, N, $) {
        var H = c[v];
        if (!s(H)) {
          var L = J(H);
          return new d("Invalid " + N + " `" + $ + "` of type " + ("`" + L + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function u() {
      function E(c, v, C, N, $) {
        var H = c[v];
        if (!e.isValidElementType(H)) {
          var L = J(H);
          return new d("Invalid " + N + " `" + $ + "` of type " + ("`" + L + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function S(E) {
      function c(v, C, N, $, H) {
        if (!(v[C] instanceof E)) {
          var L = E.name || f, W = ae(v[C]);
          return new d("Invalid " + $ + " `" + H + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return b(c);
    }
    function y(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(v, C, N, $, H) {
        for (var L = v[C], W = 0; W < E.length; W++)
          if (R(L, E[W]))
            return null;
        var Z = JSON.stringify(E, function(ie, k) {
          var se = G(k);
          return se === "symbol" ? String(k) : k;
        });
        return new d("Invalid " + $ + " `" + H + "` of value `" + String(L) + "` " + ("supplied to `" + N + "`, expected one of " + Z + "."));
      }
      return b(c);
    }
    function P(E) {
      function c(v, C, N, $, H) {
        if (typeof E != "function")
          return new d("Property `" + H + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var L = v[C], W = J(L);
        if (W !== "object")
          return new d("Invalid " + $ + " `" + H + "` of type " + ("`" + W + "` supplied to `" + N + "`, expected an object."));
        for (var Z in L)
          if (n(L, Z)) {
            var Y = E(L, Z, N, $, H + "." + Z, a);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(c);
    }
    function j(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < E.length; c++) {
        var v = E[c];
        if (typeof v != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(v) + " at index " + c + "."
          ), r;
      }
      function C(N, $, H, L, W) {
        for (var Z = [], Y = 0; Y < E.length; Y++) {
          var ie = E[Y], k = ie(N, $, H, L, W, a);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && Z.push(k.data.expectedType);
        }
        var se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new d("Invalid " + L + " `" + W + "` supplied to " + ("`" + H + "`" + se + "."));
      }
      return b(C);
    }
    function w() {
      function E(c, v, C, N, $) {
        return B(c[v]) ? null : new d("Invalid " + N + " `" + $ + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function F(E, c, v, C, N) {
      return new d(
        (E || "React class") + ": " + c + " type `" + v + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function V(E) {
      function c(v, C, N, $, H) {
        var L = v[C], W = J(L);
        if (W !== "object")
          return new d("Invalid " + $ + " `" + H + "` of type `" + W + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var Z in E) {
          var Y = E[Z];
          if (typeof Y != "function")
            return F(N, $, H, Z, G(Y));
          var ie = Y(L, Z, N, $, H + "." + Z, a);
          if (ie)
            return ie;
        }
        return null;
      }
      return b(c);
    }
    function X(E) {
      function c(v, C, N, $, H) {
        var L = v[C], W = J(L);
        if (W !== "object")
          return new d("Invalid " + $ + " `" + H + "` of type `" + W + "` " + ("supplied to `" + N + "`, expected `object`."));
        var Z = t({}, v[C], E);
        for (var Y in Z) {
          var ie = E[Y];
          if (n(E, Y) && typeof ie != "function")
            return F(N, $, H, Y, G(ie));
          if (!ie)
            return new d(
              "Invalid " + $ + " `" + H + "` key `" + Y + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(v[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var k = ie(L, Y, N, $, H + "." + Y, a);
          if (k)
            return k;
        }
        return null;
      }
      return b(c);
    }
    function B(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(B);
          if (E === null || s(E))
            return !0;
          var c = h(E);
          if (c) {
            var v = c.call(E), C;
            if (c !== E.entries) {
              for (; !(C = v.next()).done; )
                if (!B(C.value))
                  return !1;
            } else
              for (; !(C = v.next()).done; ) {
                var N = C.value;
                if (N && !B(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(E, c) {
      return E === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function J(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : re(c, E) ? "symbol" : c;
    }
    function G(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var c = J(E);
      if (c === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function U(E) {
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
    function ae(E) {
      return !E.constructor || !E.constructor.name ? f : E.constructor.name;
    }
    return O.checkPropTypes = i, O.resetWarningCache = i.resetWarningCache, O.PropTypes = O, O;
  }, qe;
}
var Ze, St;
function Dn() {
  if (St) return Ze;
  St = 1;
  var e = /* @__PURE__ */ ct();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, Ze = function() {
    function n(r, s, p, m, g, h) {
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
    var o = {
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
      checkPropTypes: a,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Ze;
}
var Mt;
function zn() {
  if (Mt) return Ne.exports;
  if (Mt = 1, process.env.NODE_ENV !== "production") {
    var e = qt(), t = !0;
    Ne.exports = /* @__PURE__ */ jn()(e.isElement, t);
  } else
    Ne.exports = /* @__PURE__ */ Dn()();
  return Ne.exports;
}
var Hn = /* @__PURE__ */ zn();
const x = /* @__PURE__ */ vn(Hn), Yt = {
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
}, Bn = [
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
], lt = "16px", $n = (e) => Math.round(e * 96 / 72), Gn = (e) => Math.round(e * 72 / 96 * 2) / 2, Qa = (e) => {
  const t = Object.values(Yt).find((a) => a.pt === e);
  return t ? `${t.px}px` : `${$n(e)}px`;
}, eo = (e) => {
  const t = parseInt(e), a = Object.values(Yt).find((n) => n.px === t);
  return a ? a.pt : Gn(t);
}, to = (e) => {
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
function no({
  handler: e,
  startX: t,
  startY: a,
  currentX: n,
  currentY: i,
  startWidth: o,
  startHeight: r,
  options: s = ge
}) {
  const p = n - t, m = i - a;
  let g = o, h = r;
  switch (e) {
    case A.TOP_LEFT:
      g = Math.max(s.minWidth, o - p), h = Math.max(s.minHeight, r - m);
      break;
    case A.TOP_RIGHT:
      g = Math.max(s.minWidth, o + p), h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM_LEFT:
      g = Math.max(s.minWidth, o - p), h = Math.max(s.minHeight, r + m);
      break;
    case A.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, o + p), h = Math.max(s.minHeight, r + m);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + m);
      break;
    case A.LEFT:
      g = Math.max(s.minWidth, o - p);
      break;
    case A.RIGHT:
      g = Math.max(s.minWidth, o + p);
      break;
    default:
      return { width: g, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = o / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? g / f > h ? h = Math.max(s.minHeight, g / f) : g = Math.max(s.minWidth, h * f) : [A.TOP, A.BOTTOM].includes(e) ? g = h * f : [A.LEFT, A.RIGHT].includes(e) && (h = g / f);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = g / (o / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = h * (o / r))), g = Math.max(s.minWidth, g), h = Math.max(s.minHeight, h), {
    width: Math.round(g),
    height: Math.round(h)
  };
}
function fe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ro(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function ao(e, { width: t, height: a }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
function Vt(e, t = ge) {
  if (!fe(e)) return null;
  const a = document.createElement("div");
  a.className = "image-resize-overlay", a.style.position = "fixed", a.style.zIndex = "1000", a.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return a.style.top = `${n.top}px`, a.style.left = `${n.left}px`, a.style.width = `${n.width}px`, a.style.height = `${n.height}px`, Object.values(A).forEach((o) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${o}`, r.dataset.handler = o, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Un(o), r.style.pointerEvents = "all", Kt(r, o, n.width, n.height), a.appendChild(r);
  }), a;
}
function Un(e) {
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
function Kt(e, t, a, n) {
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
      e.style.top = "-5px", e.style.left = `${a / 2 + -5}px`;
      break;
    case A.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${a / 2 + -5}px`;
      break;
    case A.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case A.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function nt(e, t) {
  if (!e || !t) return;
  const a = t.getBoundingClientRect();
  e.style.top = `${a.top}px`, e.style.left = `${a.left}px`, e.style.width = `${a.width}px`, e.style.height = `${a.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const o = i.dataset.handler;
    Kt(i, o, a.width, a.height);
  });
}
function ye(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Fn = {
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
}, Nt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: lt,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Wn = () => {
  const [e, t] = le(Nt), a = _e(), n = q((d) => {
    t((b) => ({
      ...b,
      alignLeft: d === "left",
      alignCenter: d === "center",
      alignRight: d === "right",
      alignJustify: d === "justify"
    }));
  }, []), i = q((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const M = b.getRangeAt(0);
      if (!M.toString())
        return t((_) => ({ ..._, fontFamily: d })), !1;
      try {
        const _ = document.createElement("span");
        _.style.fontFamily = d;
        const T = M.extractContents();
        return _.appendChild(T), M.insertNode(_), M.selectNodeContents(_), b.removeAllRanges(), b.addRange(M), t((u) => ({ ...u, fontFamily: d })), !0;
      } catch {
        return document.execCommand("fontName", !1, d), t((T) => ({ ...T, fontFamily: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font family change failed:", b), !1;
    }
  }, []), o = q((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const M = b.getRangeAt(0);
      if (!M.toString())
        return t((_) => ({ ..._, fontSize: d })), !1;
      try {
        const _ = document.createElement("span");
        _.style.fontSize = d;
        const T = M.extractContents();
        return _.appendChild(T), M.insertNode(_), M.selectNodeContents(_), b.removeAllRanges(), b.addRange(M), t((u) => ({ ...u, fontSize: d })), !0;
      } catch {
        const T = Fn[d] || "3";
        return document.execCommand("fontSize", !1, T), t((u) => ({ ...u, fontSize: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font size change failed:", b), !1;
    }
  }, []), r = q((d, b = null) => {
    try {
      if (d === "undo") {
        a.undo();
        return;
      }
      if (d === "redo") {
        a.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (d === "fontSize") {
        o(b);
        return;
      }
      if (d === "fontName") {
        i(b);
        return;
      }
      switch (document.execCommand(d, !1, b) || console.warn(`[useFormatting] Command "${d}" failed`), d) {
        case "bold":
          t((I) => ({ ...I, bold: !I.bold }));
          break;
        case "italic":
          t((I) => ({ ...I, italic: !I.italic }));
          break;
        case "underline":
          t((I) => ({ ...I, underline: !I.underline }));
          break;
        case "strikethrough":
          t((I) => ({ ...I, strikethrough: !I.strikethrough }));
          break;
        case "justifyLeft":
          n("left");
          break;
        case "justifyCenter":
          n("center");
          break;
        case "justifyRight":
          n("right");
          break;
        case "justifyFull":
          n("justify");
          break;
        case "fontName":
          t((I) => ({ ...I, fontFamily: b }));
          break;
        case "formatBlock":
          t((I) => ({ ...I, headingLevel: b }));
          break;
        default:
          break;
      }
    } catch (M) {
      console.warn(`[useFormatting] Error executing command "${d}":`, M);
    }
  }, [o, i, n, a]), s = te(null), p = te(null), m = te(null), g = te(null), h = te(ge);
  q((d) => {
    if (!fe(d)) return;
    s.current && (ye(s.current), s.current = null), d.classList.add("selected");
    const b = Vt(d);
    b && (s.current = b, p.current = d, document.body.appendChild(b), t((M) => ({
      ...M,
      imageSelected: !0,
      preserveAspectRatio: h.current.preserveAspectRatio
    })));
  }, []);
  const f = q(() => {
    p.current && (p.current.classList.remove("selected"), p.current = null), s.current && (ye(s.current), s.current = null), m.current = null, g.current = null, t((d) => ({
      ...d,
      imageSelected: !1
    }));
  }, []), O = q(() => {
    const d = !h.current.preserveAspectRatio;
    h.current = {
      ...h.current,
      preserveAspectRatio: d,
      aspectRatio: d
    }, t((b) => ({
      ...b,
      preserveAspectRatio: d
    }));
  }, []);
  q((d, b, M) => {
    p.current && (m.current = {
      x: b,
      y: M,
      width: p.current.offsetWidth,
      height: p.current.offsetHeight
    }, g.current = d, document.body.classList.add("resize-in-progress"), document.body.style.cursor = qn(d));
  }, []), q((d, b) => {
    if (!p.current || !m.current || !g.current) return;
    const { x: M, y: I, width: _, height: T } = m.current, u = g.current, S = Zn({
      handler: u,
      startX: M,
      startY: I,
      currentX: d,
      currentY: b,
      startWidth: _,
      startHeight: T,
      options: h.current
    });
    Yn(p.current, S), s.current && nt(s.current, p.current);
  }, []), q(() => {
    if (m.current = null, g.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", p.current) {
      const d = new Event("input", { bubbles: !0, cancelable: !0 });
      p.current.dispatchEvent(d);
    }
  }, []);
  const R = q(() => {
    f(), t(Nt);
  }, [f]);
  return oe(() => () => {
    s.current && ye(s.current);
  }, []), {
    currentFormat: e,
    formatText: r,
    resetFormat: R,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: O
  };
};
function qn(e) {
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
function Zn({
  handler: e,
  startX: t,
  startY: a,
  currentX: n,
  currentY: i,
  startWidth: o,
  startHeight: r,
  options: s = ge
}) {
  const p = n - t, m = i - a;
  let g = o, h = r;
  switch (e) {
    case A.TOP_LEFT:
      g = Math.max(s.minWidth, o - p), h = Math.max(s.minHeight, r - m);
      break;
    case A.TOP_RIGHT:
      g = Math.max(s.minWidth, o + p), h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM_LEFT:
      g = Math.max(s.minWidth, o - p), h = Math.max(s.minHeight, r + m);
      break;
    case A.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, o + p), h = Math.max(s.minHeight, r + m);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + m);
      break;
    case A.LEFT:
      g = Math.max(s.minWidth, o - p);
      break;
    case A.RIGHT:
      g = Math.max(s.minWidth, o + p);
      break;
    default:
      return { width: g, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = o / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? g / f > h ? h = Math.max(s.minHeight, g / f) : g = Math.max(s.minWidth, h * f) : [A.TOP, A.BOTTOM].includes(e) ? g = h * f : [A.LEFT, A.RIGHT].includes(e) && (h = g / f);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = g / (o / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = h * (o / r))), g = Math.max(s.minWidth, g), h = Math.max(s.minHeight, h), {
    width: Math.round(g),
    height: Math.round(h)
  };
}
function Yn(e, { width: t, height: a }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
const be = 'page-break, [data-page-break="true"]', Xt = (e) => ce[e] || ce.A4, Vn = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const a = t.pageSize || "A4", n = Xt(a), i = e.querySelectorAll(be), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((p, m) => {
    const h = p.getBoundingClientRect().top - r.top + s;
    o.push({
      id: `page-${m + 1}`,
      pageNumber: m + 2,
      top: h,
      height: n.height
    });
  }), o;
}, Jt = (e, t = 100, a = pe) => {
  const n = Xt(e), i = Rn(a), o = n.height - i, r = t / 100;
  return o / r;
}, Kn = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const a = t.querySelectorAll(be);
    if (a.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), i = n.top + n.height / 2;
    for (let o = a.length - 1; o >= 0; o--)
      if (a[o].getBoundingClientRect().top < i)
        return o + 1;
    return 0;
  } catch (a) {
    return console.warn("[getCurrentPage] Failed to calculate page:", a), 0;
  }
}, Ct = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let a = [], n = [];
  for (const i of t)
    i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true" ? n.length > 0 && (a.push(n), n = []) : n.push(i);
  return n.length > 0 && a.push(n), a.length === 0 && t.length > 0 && a.push(t.filter(
    (i) => !(i.tagName === "PAGE-BREAK" || i.getAttribute("data-page-break") === "true")
  )), a;
}, Xn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Jn = (e, t) => {
  if (!e)
    return !1;
  try {
    const a = document.createElement("page-break");
    return a.setAttribute("data-page-break", "true"), a.setAttribute("contenteditable", "false"), a.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(a, e), !0;
  } catch (a) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", a), !1;
  }
}, Qn = (e, t, a, n, i, o, r) => {
  if (!e)
    return !1;
  try {
    const p = Jt(a, n, i) * (t - 1), m = Array.from(e.children);
    let g = 0, h = null;
    for (let f = 0; f < m.length; f++) {
      const O = m[f];
      if (O.tagName === "PAGE-BREAK" || O.getAttribute("data-page-break") === "true")
        continue;
      const R = Xn(O);
      if (g + R > p) {
        h = O;
        break;
      }
      g += R;
    }
    if (h) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(f, h), o) {
        const O = e.innerHTML;
        o(O);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const O = document.createElement("p");
      if (O.innerHTML = "<br>", e.appendChild(O), o) {
        const R = e.innerHTML;
        o(R);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, er = (e, t, a, n, i, o, r) => {
  if (!e)
    return !1;
  if (a().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const p = Array.from(e.querySelectorAll(be));
    if (t > p.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const m = window.getSelection();
    let g = !1, h = [], f = null;
    if (t === 0) {
      const R = p[0];
      if (!R)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let d = e.firstChild;
      for (; d && d !== R; )
        h.push(d), d = d.nextSibling;
      f = R;
    } else {
      const R = p[t - 1];
      if (!R)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const d = p[t];
      let b = R.nextSibling;
      for (; b && b !== d; )
        h.push(b), b = b.nextSibling;
      f = R;
    }
    if (m && m.rangeCount > 0) {
      const d = m.getRangeAt(0).startContainer;
      for (const b of h)
        if (b.contains(d) || b === d) {
          g = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), h.forEach((R) => {
      R.parentNode && R.remove();
    }), e.querySelectorAll(be).forEach((R, d) => {
      R.setAttribute("data-page-number", String(d + 2));
    }), g && o && setTimeout(() => {
      o(0);
    }, 50), n) {
      const R = e.innerHTML;
      n(R);
    }
    return i && setTimeout(() => {
      i(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (p) {
    return console.error("[removePageAndContent] Failed to remove page:", p), !1;
  }
}, tr = 200, nr = 50, It = 3, rr = 20, Qt = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, ar = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let a = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (!o || !o.getBoundingClientRect)
      continue;
    const r = Qt(o);
    if (r < 1)
      continue;
    if (a + r > t)
      return n === null ? i > 0 ? {
        overflowIndex: i,
        overflowElement: o,
        accumulatedHeight: a
      } : null : {
        overflowIndex: i,
        overflowElement: o,
        accumulatedHeight: a
      };
    a += r, n = o;
  }
  return null;
}, or = (e, t, a, n, i, o, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const p = Jt(t, a, n);
    let m = Ct(e), g = !1, h = 0;
    for (let f = 0; f < m.length && h < It; f++) {
      const O = m[f], R = ar(O, p);
      if (R && R.overflowIndex > 0) {
        let d = 0;
        for (let _ = 0; _ < O.length; _++) {
          const T = O[_];
          T && T.getBoundingClientRect && (d += Qt(T));
        }
        if (d - p < rr)
          continue;
        const M = f + 2;
        Jn(R.overflowElement, M) && (g = !0, h++, m = Ct(e));
      }
    }
    if (g) {
      if (i) {
        const f = e.innerHTML;
        i(f);
      }
      setTimeout(() => {
        o && o(), h >= It && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, nr);
    }
    return g;
  } catch (p) {
    return console.warn("[checkAndReflow] Reflow failed:", p), !1;
  } finally {
    r.current = !1;
  }
}, ir = (e, t, a = tr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, a);
}, sr = 400, en = (e, t) => {
  if (e) {
    e.focus();
    try {
      let a = null, n = 0;
      if (t === 0)
        a = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(be)[t - 1];
        o && o.nextSibling && (a = o.nextSibling, n = 0);
      }
      if (a) {
        const i = document.createRange(), o = window.getSelection();
        a.nodeType === Node.TEXT_NODE ? i.setStart(a, n) : i.setStart(a, 0), i.collapse(!0), o.removeAllRanges(), o.addRange(i);
      }
    } catch (a) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", a);
    }
  }
}, cr = (e, t, a, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let i = null;
    if (a === 0)
      i = t;
    else {
      const r = t.querySelectorAll(be)[a - 1];
      if (r)
        i = r;
      else {
        console.warn("[scrollToPage] Page break not found for page", a);
        return;
      }
    }
    if (i) {
      const o = i.getBoundingClientRect(), r = e.getBoundingClientRect(), s = e.scrollTop + (o.top - r.top);
      console.log("[scrollToPage] Scrolling to page", a, "scrollTop:", s), e.scrollTo({
        top: s,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(a) : en(t, a);
      }, sr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, lr = (e, t, a = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(a);
  }, Math.max(0, n));
}, ur = 300, dr = (e, t, a = 100, n = "NARROW") => {
  const i = _e(), o = te(null), r = te(null), s = te(e), p = te(a), m = te(n), g = te(!1);
  oe(() => {
    s.current = e;
  }, [e]), oe(() => {
    p.current = a;
  }, [a]), oe(() => {
    m.current = n;
  }, [n]), oe(() => () => {
    o.current && clearTimeout(o.current), r.current && clearTimeout(r.current);
  }, []);
  const h = q((u = {}) => t?.current ? Vn(t.current, u) : [], [t]), f = q((u = {}) => {
    const S = h(u);
    return i.updatePageBoundaries(S), S;
  }, [h, i]), O = q(async (u) => {
    if (!t?.current)
      return !1;
    const S = s.current || "A4", y = p.current || 100, P = m.current || "NARROW";
    return Qn(
      t.current,
      u,
      S,
      y,
      P,
      i.updateContinuousContent,
      f
    );
  }, [t, i, f]), R = q(() => {
    if (!t?.current)
      return;
    const u = s.current || "A4", S = p.current || 100, y = m.current || "NARROW";
    or(
      t.current,
      u,
      S,
      y,
      i.updateContinuousContent,
      f,
      g,
      R
    );
  }, [t, i, f]), d = q((u) => {
    ir(R, r, u);
  }, [R]), b = q((u = {}) => {
    const S = typeof u.delay == "number" ? u.delay : ur;
    lr(f, o, u, S);
  }, [f]), M = q((u) => !u?.current || !t?.current ? 0 : Kn(u.current, t.current), [t]), I = q((u) => {
    t?.current && en(t.current, u);
  }, [t]), _ = q((u, S) => {
    if (!S?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    cr(S.current, t.current, u, I);
  }, [t, I]), T = q((u) => t?.current ? er(
    t.current,
    u,
    h,
    i.updateContinuousContent,
    f,
    I,
    R
  ) : !1, [t, h, i, f, I, R]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: b,
    updateBoundaries: f,
    getCurrentPage: M,
    scrollToPage: _,
    positionCursorAtPage: I,
    checkAndReflow: R,
    triggerAutoReflow: d,
    removePageAndContent: T,
    insertPageBreakAtBoundary: O,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: r
  };
}, fr = "html-editor-storage", pr = 1, ue = "images";
function gr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Pe() {
  return new Promise((e, t) => {
    const a = indexedDB.open(fr, pr);
    a.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, a.onsuccess = () => {
      e(a.result);
    }, a.onupgradeneeded = (n) => {
      const i = n.target.result;
      i.objectStoreNames.contains(ue) || i.createObjectStore(ue, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function hr(e) {
  return new Promise((t, a) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      a(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      a(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = async (o) => {
      const r = o.target.result, p = r.split(",")[1].length * 3 / 4;
      if (p > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = await Pe(), g = `editor-image-${gr()}`, f = m.transaction([ue], "readwrite").objectStore(ue), O = {
          key: g,
          dataUrl: r,
          size: p,
          type: e.type,
          timestamp: Date.now()
        }, R = f.add(O);
        R.onsuccess = () => {
          m.close(), t(g);
        }, R.onerror = () => {
          m.close(), a(new Error("Failed to save image to IndexedDB"));
        };
      } catch (m) {
        a(m);
      }
    }, i.onerror = () => {
      a(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function mr(e) {
  try {
    const t = await Pe();
    return new Promise((a, n) => {
      const r = t.transaction([ue], "readonly").objectStore(ue).get(e);
      r.onsuccess = () => {
        t.close();
        const s = r.result;
        a(s ? s.dataUrl : null);
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function yr(e) {
  try {
    const t = await Pe();
    return new Promise((a, n) => {
      const r = t.transaction([ue], "readwrite").objectStore(ue).delete(e);
      r.onsuccess = () => {
        t.close(), a();
      }, r.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function oo() {
  try {
    const e = await Pe();
    return new Promise((t, a) => {
      const o = e.transaction([ue], "readwrite").objectStore(ue).clear();
      o.onsuccess = () => {
        e.close(), t();
      }, o.onerror = () => {
        e.close(), a(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function io() {
  try {
    const e = await Pe();
    return new Promise((t, a) => {
      const o = e.transaction([ue], "readonly").objectStore(ue).getAllKeys();
      o.onsuccess = () => {
        e.close(), t(o.result || []);
      }, o.onerror = () => {
        e.close(), a(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
function br(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Lt(e) {
  const t = [];
  for (let a = 0; a < e.attributes.length; a++) {
    const n = e.attributes[a];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function Er(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const a = document.createElement("div");
  return a.innerHTML = t, Le(a);
}
function Le(e) {
  const t = [], a = Array.from(e.childNodes);
  for (let n = 0; n < a.length; n++) {
    const i = a[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      o && t.push(`<p>${br(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i;
      if (o.tagName === "DIV") {
        const r = Le(o);
        r.trim() ? t.push(r) : t.push("<p><br></p>");
      } else if (o.tagName === "P")
        t.push(o.outerHTML);
      else if (o.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(o.tagName)) {
        const r = Le(o), s = o.tagName.toLowerCase(), p = Lt(o);
        t.push(`<${s}${p}>${r}</${s}>`);
      } else if (o.tagName === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else {
        const r = Le(o), s = o.tagName.toLowerCase(), p = Lt(o);
        t.push(`<${s}${p}>${r}</${s}>`);
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
const xr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), jt = (e) => {
  const t = Tr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, tn = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), vr = (e) => {
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
var Ar = {
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
const _r = ot(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: o,
    iconNode: r,
    ...s
  }, p) => Ye(
    "svg",
    {
      ref: p,
      ...Ar,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(a) * 24 / Number(t) : a,
      className: tn("lucide", i),
      ...!o && !vr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([m, g]) => Ye(m, g)),
      ...Array.isArray(o) ? o : [o]
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
  const a = ot(
    ({ className: n, ...i }, o) => Ye(_r, {
      ref: o,
      iconNode: t,
      className: tn(
        `lucide-${xr(jt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return a.displayName = jt(e), a;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], wr = K("bold", Pr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], kr = K("chevron-left", Rr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Sr = K("chevron-right", Or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Nr = K("file-check", Mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ze = K("file-text", Cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Lr = K("hash", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Dr = K("heading-1", jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Hr = K("heading-2", zr);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], $r = K("heading-3", Br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Ur = K("image-upscale", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Wr = K("image", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Zr = K("italic", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Vr = K("link", Yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Xr = K("list-indent-decrease", Kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], Qr = K("list-indent-increase", Jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], ta = K("list-ordered", ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], nn = K("list", na);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], aa = K("plus", ra);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], ia = K("redo", oa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], ca = K("scaling", sa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ua = K("settings", la);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], fa = K("strikethrough", da);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pa = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], ga = K("table", pa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], rn = K("text-align-center", ha);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], an = K("text-align-end", ma);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], ba = K("text-align-justify", ya);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], on = K("text-align-start", Ea);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ta = K("trash-2", xa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Aa = K("underline", va);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Pa = K("undo", _a);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ra = K("x", wa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ka = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Oa = K("zoom-in", ka);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sa = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ma = K("zoom-out", Sa), Na = ({ editorView: e, isCollapsed: t, onToggle: a, wordCount: n, pageCount: i }) => {
  const o = Wt(), { pages: r, activePage: s, continuousContent: p, editorMode: m } = o, [g, h] = le(0), [f, O] = le([]);
  oe(() => {
    if (n !== void 0 && i !== void 0) {
      if (h(n), p) {
        const M = document.createElement("div");
        M.innerHTML = p;
        const I = M.querySelectorAll("h1, h2, h3, h4, h5, h6"), _ = Array.from(I).map((T, u) => {
          const S = parseInt(T.tagName.charAt(1)), y = T.textContent.trim();
          return y ? {
            id: `heading-${u}`,
            level: S,
            text: y,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        O(_);
      }
      return;
    }
    let d = 0;
    const b = [];
    r.forEach((M, I) => {
      if (M.content) {
        const _ = document.createElement("div");
        _.innerHTML = M.content;
        const u = (_.textContent || _.innerText || "").trim().split(/\s+/).filter((y) => y.length > 0);
        d += u.length, _.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((y, P) => {
          const j = parseInt(y.tagName.charAt(1)), w = y.textContent.trim();
          w && b.push({
            id: `heading-${I}-${P}`,
            level: j,
            text: w,
            page: I + 1
          });
        });
      }
    }), h(d), O(b);
  }, [r, n, i, p]);
  const R = i !== void 0 ? i : r.length;
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
            /* @__PURE__ */ l.jsx(ze, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(Sr, { size: 16 }) : /* @__PURE__ */ l.jsx(kr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Nr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: R })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Lr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(ze, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(nn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((d) => {
              const b = d.level === 1 ? Dr : d.level === 2 ? Hr : $r;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(b, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      d.page
                    ] })
                  ]
                },
                d.id
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
class Ca {
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
const Dt = new Ca("Editor"), sn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), cn = 32;
function ln(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const a = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? a - 1 : a + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * cn}px`, e.dataset.indentLevel = String(n));
}
function Ia(e, t) {
  ln(e, t);
}
function La(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && sn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ja() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), a = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((r) => {
    document.createRange().selectNodeContents(r), t.intersectsNode(r) && a.add(r);
  }), a.size === 0 && n.querySelectorAll("img").forEach((s) => {
    if (document.createRange().selectNode(s), t.intersectsNode(s)) {
      let m = s.parentElement;
      for (; m && m !== n; ) {
        if (m.tagName && sn.has(m.tagName.toUpperCase())) {
          a.add(m);
          break;
        }
        m = m.parentElement;
      }
    }
  }), Array.from(a).filter((r) => {
    let s = r.parentElement;
    for (; s; ) {
      if (a.has(s))
        return !1;
      s = s.parentElement;
    }
    return !0;
  })) : [];
}
function Da(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), a = Math.max(0, t - 1);
    a === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${a * cn}px`, e.dataset.indentLevel = String(a));
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
    let a = t.nextNode();
    for (; a; ) {
      const n = a.textContent;
      if (n.startsWith("    ")) {
        a.textContent = n.substring(4);
        break;
      }
      a = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function rt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let a = ja();
  const n = t.getRangeAt(0);
  if (a.length === 0) {
    const r = La(n.startContainer);
    if (!r) return !1;
    a = [r];
  }
  const i = a[0], o = a[a.length - 1];
  a.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      Ia(r, e);
      return;
    }
    e ? Da(r) : ln(r, !1);
  });
  try {
    const r = document.createRange(), s = (h) => h.nodeType === Node.TEXT_NODE ? h : document.createTreeWalker(
      h,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), p = (h) => {
      if (h.nodeType === Node.TEXT_NODE)
        return h;
      const f = document.createTreeWalker(
        h,
        NodeFilter.SHOW_TEXT,
        null
      );
      let O = null, R = f.nextNode();
      for (; R; )
        O = R, R = f.nextNode();
      return O;
    }, m = s(i);
    m ? r.setStart(m, 0) : r.setStart(i, 0);
    const g = p(o);
    g ? r.setEnd(g, g.length) : r.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(r);
  } catch {
    try {
      const s = document.createRange();
      s.setStartBefore(i), s.setEndAfter(o), t.removeAllRanges(), t.addRange(s);
    } catch (s) {
      console.warn("Could not restore selection after indentation:", s);
    }
  }
  return !0;
}
function za(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, a = window.getSelection(), n = a && a.rangeCount > 0 ? a.getRangeAt(0) : null;
  return a && a.rangeCount > 0 && n && !n.collapsed && rt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const ut = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: a,
  canUndo: n = !1,
  canRedo: i = !1
}) => {
  const o = async (r) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(r.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (r.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const p = await hr(r), m = await mr(p);
      if (m) {
        const h = `<img src="${m}" data-key="${p}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, h), Dt.info("Image inserted", { key: p });
      }
      const g = document.getElementById("image-upload");
      g && (g.value = "");
    } catch (s) {
      Dt.error("Error uploading image", s);
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
        children: /* @__PURE__ */ l.jsx(Pa, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(ia, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(Zr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(Aa, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(fa, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(on, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(rn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(an, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(ba, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
        defaultValue: "Segoe UI",
        title: "Font Family",
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "Segoe UI", children: "Segoe UI " }),
          /* @__PURE__ */ l.jsx("option", { value: "Arial", children: "Arial " }),
          /* @__PURE__ */ l.jsx("option", { value: "Times New Roman", children: "Times New Roman " }),
          /* @__PURE__ */ l.jsx("option", { value: "Courier New", children: "Courier New " }),
          /* @__PURE__ */ l.jsx("option", { value: "Georgia", children: "Georgia " }),
          /* @__PURE__ */ l.jsx("option", { value: "Verdana", children: "Verdana " }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Sinhala", children: "Noto Sans Sinhala (සිංහල)" }),
          /* @__PURE__ */ l.jsx("option", { value: "Iskoola Pota", children: "Iskoola Pota (සිංහල)" }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans Tamil", children: "Noto Sans Tamil (தமிழ்)" }),
          /* @__PURE__ */ l.jsx("option", { value: "Noto Sans", children: "Noto Sans (Unicode)" })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        defaultValue: lt,
        title: "Font Size",
        children: Bn.map(({ value: r, label: s }) => /* @__PURE__ */ l.jsx("option", { value: r, children: s }, r))
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
        children: /* @__PURE__ */ l.jsx(nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(ta, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          rt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ l.jsx(Qr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => {
          rt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ l.jsx(Xr, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(Vr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(ga, { size: 16 })
      }
    ),
    a && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: a,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(ze, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (r) => r.target.files[0] && o(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ l.jsx(Wr, { size: 16 })
      }
    )
  ] });
};
ut.propTypes = {
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
ut.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Ha(e) {
  if (!e || typeof e != "string")
    return e;
  const t = document.createElement("div");
  return t.innerHTML = e, Te(t);
}
function Te(e) {
  const t = [], a = Array.from(e.childNodes);
  for (let n = 0; n < a.length; n++) {
    const i = a[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      if (o)
        if (o.match(/^\s*$/) && o.includes(`
`)) {
          const r = o.split(`
`).filter((s) => s.trim());
          r.length > 0 ? r.forEach((s) => {
            s.trim() && t.push(`<p>${at(s.trim())}</p>`);
          }) : t.push("<p><br></p>");
        } else
          t.push(`<p>${at(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i;
      if (o.tagName === "DIV") {
        const r = Te(o);
        r.trim() ? t.push(`<p>${r}</p>`) : t.push("<p><br></p>");
      } else if (o.tagName === "P") {
        const r = Te(o);
        t.push(`<p>${r}</p>`);
      } else if (o.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(o.tagName)) {
        const r = Te(o), s = o.tagName.toLowerCase(), p = zt(o);
        t.push(`<${s}${p}>${r}</${s}>`);
      } else {
        const r = Te(o), s = o.tagName.toLowerCase(), p = zt(o);
        t.push(`<${s}${p}>${r}</${s}>`);
      }
    }
  }
  return t.join("");
}
function zt(e) {
  const t = [];
  for (let a = 0; a < e.attributes.length; a++) {
    const n = e.attributes[a];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function at(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Ba(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let a = t.getData("text/html") || t.getData("text/plain");
  return a ? (t.getData("text/html") ? a = Ha(a) : a = $a(a), document.execCommand("insertHTML", !1, a), a) : null;
}
function $a(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((a) => a.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((a) => {
    const n = a.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => at(o.trim())).join("<br>")}</p>`;
  }).join("");
}
const dt = ({
  content: e,
  dimensions: t,
  pageSize: a,
  pageBoundaries: n = [],
  editorRef: i,
  onInput: o,
  onKeyDown: r,
  onClick: s,
  onScroll: p,
  onPaste: m,
  zoomLevel: g = 100,
  pageMargins: h = pe
}) => {
  const f = Bt(h), O = g / 100, R = (T, u) => {
    if (!T) return !1;
    const S = T.getBoundingClientRect(), y = u - S.top;
    return y < f.top || y > S.height - f.bottom;
  }, d = (T) => T ? T.nodeType === Node.ELEMENT_NODE ? T.tagName === "PAGE-BREAK" || T.getAttribute("data-page-break") === "true" : T.parentElement && d(T.parentElement) : !1, b = (T) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const S = u.getRangeAt(0), { startContainer: y, endContainer: P } = S;
    if ((d(y) || d(P)) && (T.key.length === 1 || T.key === "Enter" || T.key === " "))
      return T.preventDefault(), !1;
    if (za(T))
      return !1;
    if ((T.key === "Backspace" || T.key === "Delete") && (d(y) || d(P)))
      return T.preventDefault(), !1;
    r && r(T);
  }, M = (T) => {
    if (!i.current) return;
    const u = T.target;
    if (d(u)) {
      T.preventDefault();
      return;
    }
    if (R(i.current, T.clientY)) {
      T.preventDefault();
      const S = i.current.getBoundingClientRect();
      if (T.clientY - S.top < f.top) {
        const P = i.current.firstElementChild;
        if (P && P.tagName !== "PAGE-BREAK") {
          const j = document.createRange(), w = window.getSelection();
          j.setStart(P, 0), j.collapse(!0), w.removeAllRanges(), w.addRange(j);
        }
      } else {
        const P = i.current.lastElementChild;
        if (P && P.tagName !== "PAGE-BREAK") {
          const j = document.createRange(), w = window.getSelection();
          j.selectNodeContents(P), j.collapse(!1), w.removeAllRanges(), w.addRange(j);
        }
      }
      return;
    }
    s && s(T);
  }, I = (T) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const S = u.getRangeAt(0), { startContainer: y } = S;
    if (d(y))
      return T.preventDefault(), !1;
  }, _ = (T) => {
    const u = Ba(T);
    m && m(T, u);
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
        transform: `scale(${O})`,
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
            padding: `${f.top}px ${f.right}px ${f.bottom}px ${f.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: lt,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: o,
          onKeyDown: b,
          onBeforeInput: I,
          onClick: M,
          onScroll: p,
          onPaste: _,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
dt.propTypes = {
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
  onKeyDown: x.func,
  onClick: x.func,
  onScroll: x.func,
  onPaste: x.func,
  zoomLevel: x.number,
  pageMargins: x.string
};
dt.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  zoomLevel: 100,
  pageMargins: pe
};
const ft = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: a = "A4",
  pageMargins: n = pe,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: r = !0,
  onNavigate: s,
  onAddPage: p,
  onDeletePage: m,
  onPageSizeChange: g,
  onPageMarginsChange: h,
  onZoomIn: f,
  onZoomOut: O,
  onZoomReset: R
} = {}) => {
  const d = Math.max(e?.length || 0, 1), b = (u) => {
    s && s(u);
  }, M = () => {
    p && p();
  }, I = (u) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(u);
  }, _ = (u) => {
    g && g(u);
  }, T = (u) => {
    h && h(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(ua, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: a,
              onChange: (u) => _(u.target.value),
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
              onChange: (u) => T(u.target.value),
              children: kn().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: On(u) }, u))
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
          onClick: O,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(Ma, { size: 12 })
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
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(Oa, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
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
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, S) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${S === t ? "active" : ""}`,
          onClick: () => b(S),
          "aria-label": `Go to page ${S + 1}`,
          "aria-current": S === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(ze, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              S + 1
            ] })
          ]
        }
      ),
      d > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (y) => {
            y.stopPropagation(), I(S);
          },
          "aria-label": `Delete page ${S + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(Ra, { size: 14 })
        }
      )
    ] }, u.id || `page-${S}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: M,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(aa, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
ft.propTypes = {
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
ft.defaultProps = {
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
const Ga = He.memo(ft), pt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: a,
  onImageDeselect: n,
  resizeOptions: i = ge
}) => {
  const o = te(null), r = te(null), s = te(null), p = te(null), m = te(i), g = te(!1), h = _e();
  oe(() => {
    m.current = i;
  }, [i]);
  const f = q((y) => {
    if (!fe(y)) return;
    o.current && (ye(o.current), o.current = null), y.classList.add("selected");
    const P = Vt(y, m.current);
    P && (o.current = P, r.current = y, document.body.appendChild(P), P.querySelectorAll(".resize-handler").forEach((w) => {
      w.addEventListener("mousedown", R);
    }), a && (console.log("Image selected, calling onImageSelect callback"), a(y)));
  }, [a]), O = q(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), o.current && (ye(o.current), o.current = null), s.current = null, p.current = null, g.current = !1, n && n();
  }, [n]), R = q((y) => {
    if (y.preventDefault(), y.stopPropagation(), !r.current) return;
    const P = y.currentTarget.dataset.handler, j = r.current.getBoundingClientRect(), w = window.pageYOffset || document.documentElement.scrollTop, F = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: y.clientX,
      y: y.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: y.clientX - j.left - F,
      offsetY: y.clientY - j.top - w
    }, p.current = P, g.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = T(P), document.addEventListener("mousemove", d), document.addEventListener("mouseup", b);
  }, []), d = q((y) => {
    if (!g.current || !r.current || !s.current || !p.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: P, y: j, width: w, height: F } = s.current, V = p.current, X = y.clientX, B = y.clientY, re = u({
      handler: V,
      startX: P,
      startY: j,
      currentX: X,
      currentY: B,
      startWidth: w,
      startHeight: F,
      options: m.current
    });
    S(r.current, re), o.current && nt(o.current, r.current);
  }, []), b = q((y) => {
    if (g.current) {
      if (y.preventDefault(), y.stopPropagation(), r.current && s.current) {
        const P = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, j = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (P.width !== j.width || P.height !== j.height) && h.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: j } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: P } }
        );
      }
      if (s.current = null, p.current = null, g.current = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(P), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, h]), M = q((y) => {
    o.current && !o.current.contains(y.target) && O();
    const P = y.target;
    if (fe(P)) {
      if (P === r.current)
        return;
      f(P);
    } else
      console.log("Clicked on non-image element");
  }, [f, O]), I = q((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && r.current && !g.current) {
      y.preventDefault();
      const P = r.current;
      if (P.parentNode) {
        P.parentNode.removeChild(P), O();
        const j = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(j);
      }
    }
    if (y.key === "Escape" && r.current && O(), r.current && !g.current) {
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === ">") {
        y.preventDefault();
        const P = r.current.offsetWidth, j = Math.min(m.current.maxWidth || 800, P + 10);
        S(r.current, { width: j, height: r.current.offsetHeight });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "<") {
        y.preventDefault();
        const P = r.current.offsetWidth, j = Math.max(m.current.minWidth || 50, P - 10);
        S(r.current, { width: j, height: r.current.offsetHeight });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "+") {
        y.preventDefault();
        const P = r.current.offsetHeight, j = Math.min(m.current.maxHeight || 600, P + 10);
        S(r.current, { width: r.current.offsetWidth, height: j });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "-") {
        y.preventDefault();
        const P = r.current.offsetHeight, j = Math.max(m.current.minHeight || 50, P - 10);
        S(r.current, { width: r.current.offsetWidth, height: j });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.key === "r") {
        y.preventDefault(), S(r.current, { width: 300, height: 200 });
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(P);
      }
    }
  }, [e, O]), _ = q(() => {
    o.current && r.current && nt(o.current, r.current);
  }, []);
  oe(() => {
    if (!e.current) return;
    const P = e.current.closest(".editor-viewport");
    return P && (P.addEventListener("scroll", _), window.addEventListener("scroll", _)), () => {
      P && P.removeEventListener("scroll", _), window.removeEventListener("scroll", _);
    };
  }, [e, _]), oe(() => {
    if (!e.current) return;
    const y = e.current;
    y.addEventListener("click", M), y.addEventListener("keydown", I);
    const P = y.closest(".editor-viewport");
    return P && P.addEventListener("scroll", _), window.addEventListener("resize", _), () => {
      y.removeEventListener("click", M), y.removeEventListener("keydown", I), P && P.removeEventListener("scroll", _), window.removeEventListener("resize", _), g.current && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && ye(o.current);
    };
  }, [e, M, I, _, d, b]), oe(() => {
    if (!e.current) return;
    const y = new MutationObserver((P) => {
      P.forEach((j) => {
        j.type === "childList" && (j.removedNodes.length > 0 && j.removedNodes.forEach((w) => {
          w.nodeType === Node.ELEMENT_NODE && fe(w) && w === r.current && O();
        }), j.addedNodes.length > 0 && j.addedNodes.forEach((w) => {
          if (w.nodeType === Node.ELEMENT_NODE)
            if (fe(w))
              setTimeout(() => {
                f(w);
              }, 50);
            else {
              const F = w.querySelectorAll ? w.querySelectorAll("img") : [];
              F.length > 0 && setTimeout(() => {
                f(F[0]);
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
  }, [e, O, f]);
  function T(y) {
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
  function u({
    handler: y,
    startX: P,
    startY: j,
    currentX: w,
    currentY: F,
    startWidth: V,
    startHeight: X,
    options: B = ge
  }) {
    const re = w - P, J = F - j;
    let G = V, U = X;
    switch (y) {
      case A.TOP_LEFT:
        G = Math.max(B.minWidth, V - re), U = Math.max(B.minHeight, X - J);
        break;
      case A.TOP_RIGHT:
        G = Math.max(B.minWidth, V + re), U = Math.max(B.minHeight, X - J);
        break;
      case A.BOTTOM_LEFT:
        G = Math.max(B.minWidth, V - re), U = Math.max(B.minHeight, X + J);
        break;
      case A.BOTTOM_RIGHT:
        G = Math.max(B.minWidth, V + re), U = Math.max(B.minHeight, X + J);
        break;
      case A.TOP:
        U = Math.max(B.minHeight, X - J);
        break;
      case A.BOTTOM:
        U = Math.max(B.minHeight, X + J);
        break;
      case A.LEFT:
        G = Math.max(B.minWidth, V - re);
        break;
      case A.RIGHT:
        G = Math.max(B.minWidth, V + re);
        break;
      default:
        return { width: G, height: U };
    }
    if (B.preserveAspectRatio && B.aspectRatio) {
      const ae = V / X;
      [
        A.TOP_LEFT,
        A.TOP_RIGHT,
        A.BOTTOM_LEFT,
        A.BOTTOM_RIGHT
      ].includes(y) ? G / ae > U ? U = Math.max(B.minHeight, G / ae) : G = Math.max(B.minWidth, U * ae) : [A.TOP, A.BOTTOM].includes(y) ? G = U * ae : [A.LEFT, A.RIGHT].includes(y) && (U = G / ae);
    }
    return B.maxWidth && G > B.maxWidth && (G = B.maxWidth, B.preserveAspectRatio && B.aspectRatio && (U = G / (V / X))), B.maxHeight && U > B.maxHeight && (U = B.maxHeight, B.preserveAspectRatio && B.aspectRatio && (G = U * (V / X))), G = Math.max(B.minWidth, G), U = Math.max(B.minHeight, U), {
      width: Math.round(G),
      height: Math.round(U)
    };
  }
  function S(y, { width: P, height: j }) {
    fe(y) && (y.tagName === "IMG" ? (y.style.width = `${P}px`, y.style.height = `${j}px`, y.width = P, y.height = j) : y.tagName === "DIV" && (y.style.width = `${P}px`, y.style.height = `${j}px`));
  }
  return null;
};
pt.propTypes = {
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
pt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const gt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: a,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [r, s] = le({ top: 0, left: 0 }), [p, m] = le(!1), [g, h] = le("top"), [f, O] = le(o), R = te(null), d = te(null), b = _e(), M = (w) => {
    if (!w) return null;
    const F = window.getComputedStyle(w);
    return {
      float: F.float || "none",
      margin: w.style.margin || "",
      display: F.display || "inline",
      width: w.style.width || w.width || "",
      height: w.style.height || w.height || "",
      aspectRatio: f
    };
  }, I = () => {
    if (!e) return "left";
    const w = window.getComputedStyle(e);
    return w.float || w.display === "block" ? "left" : w.display === "flex" && w.justifyContent === "center" ? "center" : w.float === "right" ? "right" : "left";
  }, [_, T] = le(I());
  oe(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), oe(() => {
    if (e) {
      let w = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      w && (d.current = w);
    }
  }, [e]), En(() => {
    if (!e || !R.current) return;
    const w = () => {
      const V = e.getBoundingClientRect(), X = R.current.getBoundingClientRect();
      d.current;
      const B = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, re = V.bottom >= 0 && V.top <= B.height && V.right >= 0 && V.left <= B.width;
      let J = "top", G = 0, U = 0;
      if (re) {
        const C = V.top - X.height - 10, N = B.height - V.bottom - X.height - 10;
        N > C && N > 0 ? (J = "bottom", G = V.bottom + 10) : (J = "top", G = V.top - X.height - 10);
      } else
        J = "top", G = 10;
      U = V.left + V.width / 2 - X.width / 2;
      const ae = window.innerWidth, E = window.innerHeight;
      let c = U, v = G;
      U < 10 ? c = 10 : U + X.width > ae - 10 && (c = ae - X.width - 10), G < 10 ? v = 10 : G + X.height > E - 10 && (v = E - X.height - 10), s({
        top: v,
        left: c
      }), h(J), m(!0);
    };
    w();
    const F = () => {
      w();
    };
    return d.current && d.current.addEventListener("scroll", F), window.addEventListener("scroll", F), window.addEventListener("resize", F), () => {
      d.current && d.current.removeEventListener("scroll", F), window.removeEventListener("scroll", F), window.removeEventListener("resize", F), m(!1);
    };
  }, [e]), oe(() => {
    const w = (F) => {
      R.current && !R.current.contains(F.target) && F.target !== e && i();
    };
    return document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [e, i]);
  const u = () => {
    if (e) {
      const w = M(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", T("left");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: w } }
      ), t && t("left");
    }
  }, S = () => {
    if (e) {
      const w = M(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", T("center");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: w } }
      ), t && t("center");
    }
  }, y = () => {
    if (e) {
      const w = M(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", T("right");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: w } }
      ), t && t("right");
    }
  }, P = () => {
    if (e && e.parentNode) {
      const w = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      b.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: w } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, j = () => {
    const w = f, F = !f;
    O(F), b.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: F } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: w } }
    ), a && a(F);
  };
  return !e || typeof document > "u" ? null : Tn(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: R,
        className: "image-tooltip-menu",
        "data-menu-position": g,
        "aria-hidden": !p,
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
          pointerEvents: p ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: p ? 1 : 0,
          visibility: p ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${f ? "" : "active"}`,
              onClick: j,
              title: `Toggle aspect ratio preservation (currently ${f ? "ON" : "OFF"})`,
              children: f ? /* @__PURE__ */ l.jsx(ca, { size: 14 }) : /* @__PURE__ */ l.jsx(Ur, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "left" ? "active" : ""}`,
              onClick: u,
              title: "Align Left",
              style: {
                background: _ === "left" ? "#007bff" : "transparent",
                color: _ === "left" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ l.jsx(on, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "center" ? "active" : ""}`,
              onClick: S,
              title: "Align Center",
              style: {
                background: _ === "center" ? "#007bff" : "transparent",
                color: _ === "center" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ l.jsx(rn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "right" ? "active" : ""}`,
              onClick: y,
              title: "Align Right",
              style: {
                background: _ === "right" ? "#007bff" : "transparent",
                color: _ === "right" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ l.jsx(an, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: P,
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
              children: /* @__PURE__ */ l.jsx(Ta, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
gt.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
gt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Ua = 50, Fa = 50, Ht = 50, Wa = 100, qa = 500, ht = ot(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: a,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: p = !0,
  showPageManager: m = !0
}, g) => {
  const h = Wt(), f = _e(), { pageSize: O, pageMargins: R, continuousContent: d, pageBoundaries: b, activePage: M, zoomLevel: I, canUndo: _, canRedo: T } = h, u = te(null), S = te(null), { currentFormat: y, formatText: P } = Wn(), [j, w] = le(!1), [F, V] = le(null), [X, B] = le(!0), {
    checkAndUpdateBoundaries: re,
    getCurrentPage: J,
    scrollToPage: G,
    updateBoundaries: U,
    triggerAutoReflow: ae,
    removePageAndContent: E,
    insertPageBreakAtBoundary: c
  } = dr(O, S, I, R), v = je(() => st(O), [O]), [C, N] = le(!1), $ = te(null), H = te(!1), L = te(!1), W = te(!1), Z = te(d);
  oe(() => {
    if (S.current) {
      if (!W.current) {
        S.current.innerHTML = d, W.current = !0, Z.current = d;
        const D = setTimeout(() => {
          U();
        }, Ua);
        return () => clearTimeout(D);
      }
      if (Z.current !== d) {
        if (S.current.innerHTML !== d) {
          S.current.innerHTML = d;
          const ne = setTimeout(() => {
            if (U(), H.current) {
              H.current = !1;
              const de = Math.max(0, b.length - 1);
              f.setActivePage(de), setTimeout(() => {
                G(de, u);
              }, Ht);
            }
          }, Fa);
          return Z.current = d, () => clearTimeout(ne);
        }
        Z.current = d;
      }
    }
  }, [d, U, b.length, f, G]), oe(() => {
    r && W.current && r(d);
  }, [d, r]), xn(g, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => d,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => d.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (D) => {
      f.updateContinuousContent(D), S.current && (S.current.innerHTML = D, setTimeout(() => {
        U();
      }, 50));
    }
  }), [d, f, U]), oe(() => {
    const D = setTimeout(() => {
      S.current && S.current.focus();
    }, 200);
    return () => clearTimeout(D);
  }, []);
  const Y = q((D) => {
    let ne = D.currentTarget.innerHTML;
    ne = Er(ne), ne !== D.currentTarget.innerHTML && (D.currentTarget.innerHTML = ne), f.updateContinuousContent(ne), re(), ae(200);
    const de = J(u);
    de !== M && f.setActivePage(de);
  }, [re, f, J, M, ae, u]), ie = q((D) => {
    f.updatePageSize(D), U({ pageSize: D }), i && i(D);
  }, [f, U, i]), k = q((D) => {
    f.updatePageMargins(D), U({ pageMargins: D }), o && o(D);
  }, [f, U, o]), se = q((D) => {
    D < 0 || D >= b.length || (L.current = !0, f.setActivePage(D), G(D, u), setTimeout(() => {
      L.current = !1;
    }, qa), t && t(D));
  }, [f, G, t, b.length]), he = q(() => {
    const D = b.length + 1;
    c(D) && (H.current = !0, setTimeout(() => {
      if (H.current) {
        H.current = !1;
        const de = Math.max(0, b.length - 1);
        f.setActivePage(de), setTimeout(() => {
          G(de, u);
        }, Ht);
      }
    }, 100)), a && a();
  }, [b.length, c, f, G, a]), we = q(() => {
    const D = window.getSelection();
    if (D && D.rangeCount > 0) {
      if (!S?.current) return;
      const Be = `<page-break data-page-break="true" contenteditable="false" data-page-number="${S.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Be), setTimeout(() => {
        U();
        const $e = J(u);
        f.setActivePage($e);
      }, 150);
    }
  }, [U, J, f, u]), mt = q((D) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    E(D) && (f.setActivePage(0), n && n(D));
  }, [b.length, E, f, n]), Re = q(() => {
    f.zoomIn();
  }, [f]), ke = q(() => {
    f.zoomOut();
  }, [f]), Oe = q(() => {
    f.resetZoom();
  }, [f]);
  oe(() => {
    const D = (ne) => {
      if (ne.ctrlKey || ne.metaKey) {
        ["+", "=", "-", "_", "0"].includes(ne.key) && ne.preventDefault();
        const de = document.activeElement === S.current, Be = document.activeElement === u.current, $e = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (de || Be || !$e)
          switch (ne.key) {
            case "+":
            case "=":
              Re();
              break;
            case "-":
            case "_":
              ke();
              break;
            case "0":
              Oe();
              break;
          }
      }
    };
    return window.addEventListener("keydown", D), () => {
      window.removeEventListener("keydown", D);
    };
  }, [Re, ke, Oe]);
  const dn = q(() => {
    !u.current || !S.current || L.current || ($.current && clearTimeout($.current), $.current = setTimeout(() => {
      if (L.current) {
        $.current = null;
        return;
      }
      const D = J(u);
      D !== M && D >= 0 && f.setActivePage(D), $.current = null;
    }, Wa));
  }, [J, M, f]), fn = je(() => {
    if (!d) return 0;
    const ne = d.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return ne ? ne.length : 0;
  }, [d]), pn = b.length || 1, gn = q((D) => {
    w(!0), V(D);
  }, []), yt = q(() => {
    w(!1), V(null);
  }, []), hn = q((D, ne) => {
  }, []);
  return oe(() => () => {
    $.current && clearTimeout($.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    p && /* @__PURE__ */ l.jsx(
      ut,
      {
        currentFormat: {
          ...y,
          imageSelected: j
        },
        onFormatText: P,
        onAddPageBreak: we,
        canUndo: _,
        canRedo: T
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        Na,
        {
          editorView: null,
          isCollapsed: C,
          onToggle: () => N((D) => !D),
          wordCount: fn,
          pageCount: pn
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: u,
          onScroll: dn,
          children: /* @__PURE__ */ l.jsx(
            dt,
            {
              content: d,
              dimensions: v,
              pageSize: O,
              pageMargins: R,
              pageBoundaries: b,
              editorRef: S,
              onInput: Y,
              onClick: () => S.current?.focus(),
              zoomLevel: I
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        pt,
        {
          editorRef: S,
          onImageSelect: gn,
          onImageDeselect: yt,
          onImageResize: hn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: X,
            aspectRatio: X
          }
        }
      ),
      j && F && /* @__PURE__ */ l.jsx(
        gt,
        {
          imageElement: F,
          initialPreserveAspectRatio: X,
          onAlignChange: (D) => {
          },
          onAspectRatioToggle: (D) => {
            B(D);
          },
          onDelete: () => {
            if (F) {
              const D = F.getAttribute("data-key");
              D && yr(D).catch((ne) => {
                console.error("Failed to delete image from IndexedDB:", ne);
              });
            }
          },
          onClose: yt
        }
      ),
      m && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? He.cloneElement(e, {
        onNavigate: se,
        onAddPage: he,
        onDeletePage: mt,
        onPageSizeChange: ie,
        onPageMarginsChange: k,
        zoomLevel: I,
        canZoomIn: Je(I),
        canZoomOut: Qe(I),
        onZoomIn: Re,
        onZoomOut: ke,
        onZoomReset: Oe
      }) : /* @__PURE__ */ l.jsx(
        Ga,
        {
          pageBoundaries: b,
          activePage: M,
          pageSize: O,
          pageMargins: R,
          zoomLevel: I,
          canZoomIn: Je(I),
          canZoomOut: Qe(I),
          onNavigate: se,
          onAddPage: he,
          onDeletePage: mt,
          onPageSizeChange: ie,
          onPageMarginsChange: k,
          onZoomIn: Re,
          onZoomOut: ke,
          onZoomReset: Oe
        }
      ) })
    ] })
  ] });
});
ht.displayName = "HtmlEditor";
ht.propTypes = {
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
ht.defaultProps = {
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
class un extends He.Component {
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
un.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
un.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const so = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Bn as COMMON_FONT_SIZES,
  lt as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  $t as DEFAULT_PAGE_SIZE,
  Ja as DocumentProvider,
  ut as EditorToolbar,
  un as ErrorBoundary,
  Yt as FONT_SIZE_MAP,
  ht as HtmlEditor,
  pt as ImageResizeHandlers,
  so as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  Ga as PageManager,
  dt as PageView,
  A as RESIZE_HANDLERS,
  Na as Sidebar,
  ao as applyImageDimensions,
  no as calculateResizeDimensions,
  oo as clearImages,
  Vt as createResizeOverlay,
  yr as deleteImage,
  io as getAllImageKeys,
  Xa as getAvailablePageSizes,
  mr as getImage,
  ro as getImageDimensions,
  st as getPageDimensions,
  Qa as getPixelValue,
  eo as getPointValue,
  fe as isResizableImage,
  to as isValidFontSize,
  Ka as isValidPageSize,
  Ca as logger,
  Gn as pixelsToPoints,
  $n as pointsToPixels,
  ye as removeResizeOverlay,
  hr as saveImage,
  nt as updateResizeOverlay,
  dr as useContinuousReflow,
  Ft as useDocument,
  _e as useDocumentActions,
  Wt as useDocumentState,
  Wn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
