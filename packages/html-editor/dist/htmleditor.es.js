import He, { createContext as yn, useContext as bn, useReducer as En, useMemo as je, useState as le, useCallback as W, useRef as te, useEffect as oe, forwardRef as ot, createElement as Ye, useLayoutEffect as xn, useImperativeHandle as Tn } from "react";
import { v4 as it } from "uuid";
import { createPortal as vn } from "react-dom";
function An(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Se = { exports: {} }, xe = {};
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
function _n() {
  if (bt) return xe;
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
  return xe.Fragment = t, xe.jsx = a, xe.jsxs = a, xe;
}
var Te = {};
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
function Pn() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === z ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case b:
          return "Fragment";
        case C:
          return "Profiler";
        case S:
          return "StrictMode";
        case T:
          return "Suspense";
        case y:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case d:
            return "Portal";
          case D:
            return c.displayName || "Context";
          case _:
            return (c._context.displayName || "Context") + ".Consumer";
          case l:
            var v = c.render;
            return c = c.displayName, c || (c = v.displayName || v.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case k:
            return v = c.displayName || null, v !== null ? v : e(c.type) || "Memo";
          case L:
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
        var N = v.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return N.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(c);
      }
    }
    function n(c) {
      if (c === b) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === L)
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
      function N() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: N,
        configurable: !0
      });
    }
    function f() {
      var c = e(this.type);
      return U[c] || (U[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, v, N, M, G, B) {
      var I = N.ref;
      return c = {
        $$typeof: R,
        type: c,
        key: v,
        props: N,
        _owner: M
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(c, "ref", {
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
        value: B
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function p(c, v, N, M, G, B) {
      var I = v.children;
      if (I !== void 0)
        if (M)
          if ($(I)) {
            for (M = 0; M < I.length; M++)
              h(I[M]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(I);
      if (X.call(v, "key")) {
        I = e(c);
        var q = Object.keys(v).filter(function(Y) {
          return Y !== "key";
        });
        M = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", E[I + M] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          I,
          q,
          I
        ), E[I + M] = !0);
      }
      if (I = null, N !== void 0 && (a(N), I = "" + N), r(v) && (a(v.key), I = "" + v.key), "key" in v) {
        N = {};
        for (var Z in v)
          Z !== "key" && (N[Z] = v[Z]);
      } else N = v;
      return I && s(
        N,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        I,
        N,
        i(),
        G,
        B
      );
    }
    function h(c) {
      g(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === L && (c._payload.status === "fulfilled" ? g(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function g(c) {
      return typeof c == "object" && c !== null && c.$$typeof === R;
    }
    var w = He, R = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), D = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), V = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, $ = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var J, U = {}, F = w.react_stack_bottom_frame.bind(
      w,
      o
    )(), ae = ne(n(o)), E = {};
    Te.Fragment = b, Te.jsx = function(c, v, N) {
      var M = 1e4 > V.recentlyCreatedOwnerStacks++;
      return p(
        c,
        v,
        N,
        !1,
        M ? Error("react-stack-top-frame") : F,
        M ? ne(n(c)) : ae
      );
    }, Te.jsxs = function(c, v, N) {
      var M = 1e4 > V.recentlyCreatedOwnerStacks++;
      return p(
        c,
        v,
        N,
        !0,
        M ? Error("react-stack-top-frame") : F,
        M ? ne(n(c)) : ae
      );
    };
  })()), Te;
}
var xt;
function wn() {
  return xt || (xt = 1, process.env.NODE_ENV === "production" ? Se.exports = _n() : Se.exports = Pn()), Se.exports;
}
var u = wn();
const Ve = 100, Ke = 50, Xe = 200, Tt = 5, Je = (e) => e < Xe, Qe = (e) => e > Ke, Rn = 96, Me = (e) => Math.round(e * Rn), De = {
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
}, fe = "NORMAL", Bt = (e = fe) => {
  const t = De[e] || De[fe];
  return {
    top: Me(t.top),
    bottom: Me(t.bottom),
    left: Me(t.left),
    right: Me(t.right)
  };
}, kn = (e = fe) => {
  const t = Bt(e);
  return t.top + t.bottom;
}, On = () => Object.keys(De), Sn = (e) => {
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
}, Xa = (e) => Object.keys(ce).includes(e), Ja = () => Object.keys(ce), _e = $t, me = "<p><br></p>", Mn = "continuous", Ae = (e, t = _e) => ({
  id: it(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), Ie = (e) => typeof e != "string" || e.trim() === "" ? me : e, Gt = (e, t = _e) => (e.length > 0 ? e : [Ae(0, t)]).map((n, i) => ({
  id: n.id || it(),
  index: i,
  size: n.size || t,
  content: Ie(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Nn = (e = _e) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: st(e).height
}], et = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || _e, n = Gt(e.pages || [Ae(0, a)], a);
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
    editorMode: e.editorMode || Mn,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || Nn(a),
    zoomLevel: e.zoomLevel || Ve,
    pageMargins: e.pageMargins || fe,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, H = {
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
    case H.INITIALIZE_DOCUMENT: {
      const { initialContent: n = me, pageSize: i = _e } = t.payload || {}, o = { ...Ae(0, i), content: Ie(n) };
      return et({
        title: e.title,
        pageSize: i,
        pages: [o]
      });
    }
    case H.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: a
      };
    case H.UPDATE_PAGE_CONTENT: {
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
    case H.UPDATE_PAGES: {
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
    case H.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(n, 0, Ae(n, e.pageSize));
      const o = i.map((s, f) => ({
        ...s,
        index: f,
        size: e.pageSize
      })), r = o.slice(0, -1).map((s, f) => ({
        id: `auto-break-${f}`,
        pageNumber: f + 1
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
    case H.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const o = i.map((f, m) => ({
        ...f,
        index: m,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= o.length ? r = o.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = o.slice(0, -1).map((f, m) => ({
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
    case H.SET_ACTIVE_PAGE: {
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
    case H.UPDATE_PAGE_SIZE: {
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
    case H.RESET_DOCUMENT:
      return et();
    case H.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ie(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: a
      };
    }
    case H.UPDATE_PAGE_BOUNDARIES: {
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
    case H.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: i } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let r = e.continuousContent;
      if (n === "end")
        r = r + o + "<p><br></p>";
      else if (typeof n == "number") {
        const s = r.substring(0, n), f = r.substring(n);
        r = s + o + f;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = r;
        const f = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && f.length === 0)
          r = r + o + "<p><br></p>";
        else if (i < f.length) {
          const m = f[i], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", m.parentNode.insertBefore(p, m.nextSibling), p.parentNode.insertBefore(h, p.nextSibling), r = s.innerHTML;
        } else
          r = r + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: a
      };
    }
    case H.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const i = document.createElement("div");
      i.innerHTML = e.continuousContent;
      const o = i.querySelectorAll('page-break, [data-page-break="true"]');
      return o[n] && o[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, f) => {
        s.setAttribute("data-page-number", String(f + 2));
      }), {
        ...e,
        continuousContent: i.innerHTML,
        updatedAt: a
      };
    }
    case H.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let i = e.continuousContent, o = e.pages;
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== me).join(`
`) || me : e.continuousContent && e.continuousContent !== me && (o = [{ ...Ae(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: o,
        updatedAt: a
      };
    }
    case H.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Ke || n > Xe ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Ke} and ${Xe}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case H.ZOOM_IN: {
      if (!Je(e.zoomLevel))
        return e;
      const n = e.zoomLevel + Tt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case H.ZOOM_OUT: {
      if (!Qe(e.zoomLevel))
        return e;
      const n = e.zoomLevel - Tt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case H.RESET_ZOOM:
      return e.zoomLevel === Ve ? e : {
        ...e,
        zoomLevel: Ve,
        updatedAt: a
      };
    case H.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: a
      };
    }
    case H.RECORD_OPERATION: {
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
    case H.UNDO: {
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
    case H.REDO: {
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
    case H.CLEAR_UNDO_REDO:
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
}, Ut = yn(null), Qa = ({ children: e, initialState: t = {} }) => {
  const [a, n] = En(tt, et(t)), i = je(() => ({
    initializeDocument: (r) => n({ type: H.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: H.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: H.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: H.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: H.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: H.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: H.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: H.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: H.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: H.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: H.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: H.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: H.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: H.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: H.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: H.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: H.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: H.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: H.ZOOM_IN }),
    zoomOut: () => n({ type: H.ZOOM_OUT }),
    resetZoom: () => n({ type: H.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: H.UPDATE_PAGE_MARGINS, payload: r }),
    // Undo/Redo actions
    recordOperation: (r, s) => n({
      type: H.RECORD_OPERATION,
      payload: { operation: r, inverseOperation: s }
    }),
    undo: () => n({ type: H.UNDO }),
    redo: () => n({ type: H.REDO }),
    clearUndoRedo: () => n({ type: H.CLEAR_UNDO_REDO })
  }), []), o = je(() => ({
    state: a,
    actions: i,
    dispatch: n
  }), [a, i]);
  return /* @__PURE__ */ u.jsx(Ut.Provider, { value: o, children: e });
}, Ft = () => {
  const e = bn(Ut);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Wt = () => {
  const { state: e } = Ft();
  return e;
}, Pe = () => {
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
function Cn() {
  if (vt) return Q;
  vt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function _(l) {
    if (typeof l == "object" && l !== null) {
      var T = l.$$typeof;
      switch (T) {
        case t:
          switch (l = l.type, l) {
            case f:
            case m:
            case n:
            case o:
            case i:
            case h:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case s:
                case p:
                case R:
                case w:
                case r:
                  return l;
                default:
                  return T;
              }
          }
        case a:
          return T;
      }
    }
  }
  function D(l) {
    return _(l) === m;
  }
  return Q.AsyncMode = f, Q.ConcurrentMode = m, Q.ContextConsumer = s, Q.ContextProvider = r, Q.Element = t, Q.ForwardRef = p, Q.Fragment = n, Q.Lazy = R, Q.Memo = w, Q.Portal = a, Q.Profiler = o, Q.StrictMode = i, Q.Suspense = h, Q.isAsyncMode = function(l) {
    return D(l) || _(l) === f;
  }, Q.isConcurrentMode = D, Q.isContextConsumer = function(l) {
    return _(l) === s;
  }, Q.isContextProvider = function(l) {
    return _(l) === r;
  }, Q.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, Q.isForwardRef = function(l) {
    return _(l) === p;
  }, Q.isFragment = function(l) {
    return _(l) === n;
  }, Q.isLazy = function(l) {
    return _(l) === R;
  }, Q.isMemo = function(l) {
    return _(l) === w;
  }, Q.isPortal = function(l) {
    return _(l) === a;
  }, Q.isProfiler = function(l) {
    return _(l) === o;
  }, Q.isStrictMode = function(l) {
    return _(l) === i;
  }, Q.isSuspense = function(l) {
    return _(l) === h;
  }, Q.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === m || l === o || l === i || l === h || l === g || typeof l == "object" && l !== null && (l.$$typeof === R || l.$$typeof === w || l.$$typeof === r || l.$$typeof === s || l.$$typeof === p || l.$$typeof === b || l.$$typeof === S || l.$$typeof === C || l.$$typeof === d);
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
function In() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function _(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === m || O === o || O === i || O === h || O === g || typeof O == "object" && O !== null && (O.$$typeof === R || O.$$typeof === w || O.$$typeof === r || O.$$typeof === s || O.$$typeof === p || O.$$typeof === b || O.$$typeof === S || O.$$typeof === C || O.$$typeof === d);
    }
    function D(O) {
      if (typeof O == "object" && O !== null) {
        var se = O.$$typeof;
        switch (se) {
          case t:
            var he = O.type;
            switch (he) {
              case f:
              case m:
              case n:
              case o:
              case i:
              case h:
                return he;
              default:
                var Ee = he && he.$$typeof;
                switch (Ee) {
                  case s:
                  case p:
                  case R:
                  case w:
                  case r:
                    return Ee;
                  default:
                    return se;
                }
            }
          case a:
            return se;
        }
      }
    }
    var l = f, T = m, y = s, k = r, L = t, P = p, z = n, V = R, X = w, $ = a, ne = o, J = i, U = h, F = !1;
    function ae(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(O) || D(O) === f;
    }
    function E(O) {
      return D(O) === m;
    }
    function c(O) {
      return D(O) === s;
    }
    function v(O) {
      return D(O) === r;
    }
    function N(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return D(O) === p;
    }
    function G(O) {
      return D(O) === n;
    }
    function B(O) {
      return D(O) === R;
    }
    function I(O) {
      return D(O) === w;
    }
    function q(O) {
      return D(O) === a;
    }
    function Z(O) {
      return D(O) === o;
    }
    function Y(O) {
      return D(O) === i;
    }
    function ie(O) {
      return D(O) === h;
    }
    ee.AsyncMode = l, ee.ConcurrentMode = T, ee.ContextConsumer = y, ee.ContextProvider = k, ee.Element = L, ee.ForwardRef = P, ee.Fragment = z, ee.Lazy = V, ee.Memo = X, ee.Portal = $, ee.Profiler = ne, ee.StrictMode = J, ee.Suspense = U, ee.isAsyncMode = ae, ee.isConcurrentMode = E, ee.isContextConsumer = c, ee.isContextProvider = v, ee.isElement = N, ee.isForwardRef = M, ee.isFragment = G, ee.isLazy = B, ee.isMemo = I, ee.isPortal = q, ee.isProfiler = Z, ee.isStrictMode = Y, ee.isSuspense = ie, ee.isValidElementType = _, ee.typeOf = D;
  })()), ee;
}
var _t;
function qt() {
  return _t || (_t = 1, process.env.NODE_ENV === "production" ? Ce.exports = Cn() : Ce.exports = In()), Ce.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, Pt;
function Ln() {
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
      var f = Object.getOwnPropertyNames(r).map(function(p) {
        return r[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        m[p] = p;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = i() ? Object.assign : function(o, r) {
    for (var s, f = n(o), m, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var h in s)
        t.call(s, h) && (f[h] = s[h]);
      if (e) {
        m = e(s);
        for (var g = 0; g < m.length; g++)
          a.call(s, m[g]) && (f[m[g]] = s[m[g]]);
      }
    }
    return f;
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
function jn() {
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
  function i(o, r, s, f, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in o)
        if (n(o, p)) {
          var h;
          try {
            if (typeof o[p] != "function") {
              var g = Error(
                (f || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = o[p](r, p, f, s, null, t);
          } catch (R) {
            h = R;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in a)) {
            a[h.message] = !0;
            var w = m ? m() : "";
            e(
              "Failed " + s + " type: " + h.message + (w ?? "")
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
function Dn() {
  if (Ot) return qe;
  Ot = 1;
  var e = qt(), t = Ln(), a = /* @__PURE__ */ ct(), n = /* @__PURE__ */ Zt(), i = /* @__PURE__ */ jn(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return qe = function(s, f) {
    var m = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(E) {
      var c = E && (m && E[m] || E[p]);
      if (typeof c == "function")
        return c;
    }
    var g = "<<anonymous>>", w = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: C(),
      arrayOf: _,
      element: D(),
      elementType: l(),
      instanceOf: T,
      node: P(),
      objectOf: k,
      oneOf: y,
      oneOfType: L,
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
      function N(G, B, I, q, Z, Y, ie) {
        if (q = q || g, Y = Y || I, ie !== a) {
          if (f) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = q + ":" + I;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, v++);
          }
        }
        return B[I] == null ? G ? B[I] === null ? new d("The " + Z + " `" + Y + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new d("The " + Z + " `" + Y + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : E(B, I, q, Z, Y);
      }
      var M = N.bind(null, !1);
      return M.isRequired = N.bind(null, !0), M;
    }
    function S(E) {
      function c(v, N, M, G, B, I) {
        var q = v[N], Z = J(q);
        if (Z !== E) {
          var Y = U(q);
          return new d(
            "Invalid " + G + " `" + B + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return b(c);
    }
    function C() {
      return b(r);
    }
    function _(E) {
      function c(v, N, M, G, B) {
        if (typeof E != "function")
          return new d("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var I = v[N];
        if (!Array.isArray(I)) {
          var q = J(I);
          return new d("Invalid " + G + " `" + B + "` of type " + ("`" + q + "` supplied to `" + M + "`, expected an array."));
        }
        for (var Z = 0; Z < I.length; Z++) {
          var Y = E(I, Z, M, G, B + "[" + Z + "]", a);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(c);
    }
    function D() {
      function E(c, v, N, M, G) {
        var B = c[v];
        if (!s(B)) {
          var I = J(B);
          return new d("Invalid " + M + " `" + G + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function l() {
      function E(c, v, N, M, G) {
        var B = c[v];
        if (!e.isValidElementType(B)) {
          var I = J(B);
          return new d("Invalid " + M + " `" + G + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function T(E) {
      function c(v, N, M, G, B) {
        if (!(v[N] instanceof E)) {
          var I = E.name || g, q = ae(v[N]);
          return new d("Invalid " + G + " `" + B + "` of type " + ("`" + q + "` supplied to `" + M + "`, expected ") + ("instance of `" + I + "`."));
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
      function c(v, N, M, G, B) {
        for (var I = v[N], q = 0; q < E.length; q++)
          if (R(I, E[q]))
            return null;
        var Z = JSON.stringify(E, function(ie, O) {
          var se = U(O);
          return se === "symbol" ? String(O) : O;
        });
        return new d("Invalid " + G + " `" + B + "` of value `" + String(I) + "` " + ("supplied to `" + M + "`, expected one of " + Z + "."));
      }
      return b(c);
    }
    function k(E) {
      function c(v, N, M, G, B) {
        if (typeof E != "function")
          return new d("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var I = v[N], q = J(I);
        if (q !== "object")
          return new d("Invalid " + G + " `" + B + "` of type " + ("`" + q + "` supplied to `" + M + "`, expected an object."));
        for (var Z in I)
          if (n(I, Z)) {
            var Y = E(I, Z, M, G, B + "." + Z, a);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(c);
    }
    function L(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < E.length; c++) {
        var v = E[c];
        if (typeof v != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(v) + " at index " + c + "."
          ), r;
      }
      function N(M, G, B, I, q) {
        for (var Z = [], Y = 0; Y < E.length; Y++) {
          var ie = E[Y], O = ie(M, G, B, I, q, a);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && Z.push(O.data.expectedType);
        }
        var se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new d("Invalid " + I + " `" + q + "` supplied to " + ("`" + B + "`" + se + "."));
      }
      return b(N);
    }
    function P() {
      function E(c, v, N, M, G) {
        return $(c[v]) ? null : new d("Invalid " + M + " `" + G + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function z(E, c, v, N, M) {
      return new d(
        (E || "React class") + ": " + c + " type `" + v + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function V(E) {
      function c(v, N, M, G, B) {
        var I = v[N], q = J(I);
        if (q !== "object")
          return new d("Invalid " + G + " `" + B + "` of type `" + q + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var Z in E) {
          var Y = E[Z];
          if (typeof Y != "function")
            return z(M, G, B, Z, U(Y));
          var ie = Y(I, Z, M, G, B + "." + Z, a);
          if (ie)
            return ie;
        }
        return null;
      }
      return b(c);
    }
    function X(E) {
      function c(v, N, M, G, B) {
        var I = v[N], q = J(I);
        if (q !== "object")
          return new d("Invalid " + G + " `" + B + "` of type `" + q + "` " + ("supplied to `" + M + "`, expected `object`."));
        var Z = t({}, v[N], E);
        for (var Y in Z) {
          var ie = E[Y];
          if (n(E, Y) && typeof ie != "function")
            return z(M, G, B, Y, U(ie));
          if (!ie)
            return new d(
              "Invalid " + G + " `" + B + "` key `" + Y + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(v[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var O = ie(I, Y, M, G, B + "." + Y, a);
          if (O)
            return O;
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
          if (E === null || s(E))
            return !0;
          var c = h(E);
          if (c) {
            var v = c.call(E), N;
            if (c !== E.entries) {
              for (; !(N = v.next()).done; )
                if (!$(N.value))
                  return !1;
            } else
              for (; !(N = v.next()).done; ) {
                var M = N.value;
                if (M && !$(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(E, c) {
      return E === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function J(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ne(c, E) ? "symbol" : c;
    }
    function U(E) {
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
    function F(E) {
      var c = U(E);
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
      return !E.constructor || !E.constructor.name ? g : E.constructor.name;
    }
    return w.checkPropTypes = i, w.resetWarningCache = i.resetWarningCache, w.PropTypes = w, w;
  }, qe;
}
var Ze, St;
function zn() {
  if (St) return Ze;
  St = 1;
  var e = /* @__PURE__ */ ct();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, Ze = function() {
    function n(r, s, f, m, p, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
function Hn() {
  if (Mt) return Ne.exports;
  if (Mt = 1, process.env.NODE_ENV !== "production") {
    var e = qt(), t = !0;
    Ne.exports = /* @__PURE__ */ Dn()(e.isElement, t);
  } else
    Ne.exports = /* @__PURE__ */ zn()();
  return Ne.exports;
}
var Bn = /* @__PURE__ */ Hn();
const x = /* @__PURE__ */ An(Bn), Yt = {
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
}, $n = [
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
], lt = "16px", Gn = (e) => Math.round(e * 96 / 72), Un = (e) => Math.round(e * 72 / 96 * 2) / 2, eo = (e) => {
  const t = Object.values(Yt).find((a) => a.pt === e);
  return t ? `${t.px}px` : `${Gn(e)}px`;
}, to = (e) => {
  const t = parseInt(e), a = Object.values(Yt).find((n) => n.px === t);
  return a ? a.pt : Un(t);
}, no = (e) => {
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
function ro({
  handler: e,
  startX: t,
  startY: a,
  currentX: n,
  currentY: i,
  startWidth: o,
  startHeight: r,
  options: s = pe
}) {
  const f = n - t, m = i - a;
  let p = o, h = r;
  switch (e) {
    case A.TOP_LEFT:
      p = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r - m);
      break;
    case A.TOP_RIGHT:
      p = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM_LEFT:
      p = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r + m);
      break;
    case A.BOTTOM_RIGHT:
      p = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r + m);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + m);
      break;
    case A.LEFT:
      p = Math.max(s.minWidth, o - f);
      break;
    case A.RIGHT:
      p = Math.max(s.minWidth, o + f);
      break;
    default:
      return { width: p, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const g = o / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? p / g > h ? h = Math.max(s.minHeight, p / g) : p = Math.max(s.minWidth, h * g) : [A.TOP, A.BOTTOM].includes(e) ? p = h * g : [A.LEFT, A.RIGHT].includes(e) && (h = p / g);
  }
  return s.maxWidth && p > s.maxWidth && (p = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = p / (o / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (p = h * (o / r))), p = Math.max(s.minWidth, p), h = Math.max(s.minHeight, h), {
    width: Math.round(p),
    height: Math.round(h)
  };
}
function de(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function ao(e) {
  return de(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function oo(e, { width: t, height: a }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
function Vt(e, t = pe) {
  if (!de(e)) return null;
  const a = document.createElement("div");
  a.className = "image-resize-overlay", a.style.position = "fixed", a.style.zIndex = "1000", a.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return a.style.top = `${n.top}px`, a.style.left = `${n.left}px`, a.style.width = `${n.width}px`, a.style.height = `${n.height}px`, Object.values(A).forEach((o) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${o}`, r.dataset.handler = o, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Fn(o), r.style.pointerEvents = "all", Kt(r, o, n.width, n.height), a.appendChild(r);
  }), a;
}
function Fn(e) {
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
const Wn = {
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
  imageResizeOptions: pe,
  preserveAspectRatio: !0
}, qn = () => {
  const [e, t] = le(Nt), a = Pe(), n = W((d) => {
    t((b) => ({
      ...b,
      alignLeft: d === "left",
      alignCenter: d === "center",
      alignRight: d === "right",
      alignJustify: d === "justify"
    }));
  }, []), i = W((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const S = b.getRangeAt(0);
      if (!S.toString())
        return t((_) => ({ ..._, fontFamily: d })), !1;
      try {
        const _ = document.createElement("span");
        _.style.fontFamily = d;
        const D = S.extractContents();
        return _.appendChild(D), S.insertNode(_), S.selectNodeContents(_), b.removeAllRanges(), b.addRange(S), t((l) => ({ ...l, fontFamily: d })), !0;
      } catch {
        return document.execCommand("fontName", !1, d), t((D) => ({ ...D, fontFamily: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font family change failed:", b), !1;
    }
  }, []), o = W((d) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const S = b.getRangeAt(0);
      if (!S.toString())
        return t((_) => ({ ..._, fontSize: d })), !1;
      try {
        const _ = document.createElement("span");
        _.style.fontSize = d;
        const D = S.extractContents();
        return _.appendChild(D), S.insertNode(_), S.selectNodeContents(_), b.removeAllRanges(), b.addRange(S), t((l) => ({ ...l, fontSize: d })), !0;
      } catch {
        const D = Wn[d] || "3";
        return document.execCommand("fontSize", !1, D), t((l) => ({ ...l, fontSize: d })), !0;
      }
    } catch (b) {
      return console.warn("[useFormatting] Font size change failed:", b), !1;
    }
  }, []), r = W((d, b = null) => {
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
          t((C) => ({ ...C, bold: !C.bold }));
          break;
        case "italic":
          t((C) => ({ ...C, italic: !C.italic }));
          break;
        case "underline":
          t((C) => ({ ...C, underline: !C.underline }));
          break;
        case "strikethrough":
          t((C) => ({ ...C, strikethrough: !C.strikethrough }));
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
          t((C) => ({ ...C, fontFamily: b }));
          break;
        case "formatBlock":
          t((C) => ({ ...C, headingLevel: b }));
          break;
        default:
          break;
      }
    } catch (S) {
      console.warn(`[useFormatting] Error executing command "${d}":`, S);
    }
  }, [o, i, n, a]), s = te(null), f = te(null), m = te(null), p = te(null), h = te(pe);
  W((d) => {
    if (!de(d)) return;
    s.current && (ye(s.current), s.current = null), d.classList.add("selected");
    const b = Vt(d);
    b && (s.current = b, f.current = d, document.body.appendChild(b), t((S) => ({
      ...S,
      imageSelected: !0,
      preserveAspectRatio: h.current.preserveAspectRatio
    })));
  }, []);
  const g = W(() => {
    f.current && (f.current.classList.remove("selected"), f.current = null), s.current && (ye(s.current), s.current = null), m.current = null, p.current = null, t((d) => ({
      ...d,
      imageSelected: !1
    }));
  }, []), w = W(() => {
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
  W((d, b, S) => {
    f.current && (m.current = {
      x: b,
      y: S,
      width: f.current.offsetWidth,
      height: f.current.offsetHeight
    }, p.current = d, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Zn(d));
  }, []), W((d, b) => {
    if (!f.current || !m.current || !p.current) return;
    const { x: S, y: C, width: _, height: D } = m.current, l = p.current, T = Yn({
      handler: l,
      startX: S,
      startY: C,
      currentX: d,
      currentY: b,
      startWidth: _,
      startHeight: D,
      options: h.current
    });
    Vn(f.current, T), s.current && nt(s.current, f.current);
  }, []), W(() => {
    if (m.current = null, p.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", f.current) {
      const d = new Event("input", { bubbles: !0, cancelable: !0 });
      f.current.dispatchEvent(d);
    }
  }, []);
  const R = W(() => {
    g(), t(Nt);
  }, [g]);
  return oe(() => () => {
    s.current && ye(s.current);
  }, []), {
    currentFormat: e,
    formatText: r,
    resetFormat: R,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: w
  };
};
function Zn(e) {
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
function Yn({
  handler: e,
  startX: t,
  startY: a,
  currentX: n,
  currentY: i,
  startWidth: o,
  startHeight: r,
  options: s = pe
}) {
  const f = n - t, m = i - a;
  let p = o, h = r;
  switch (e) {
    case A.TOP_LEFT:
      p = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r - m);
      break;
    case A.TOP_RIGHT:
      p = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM_LEFT:
      p = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r + m);
      break;
    case A.BOTTOM_RIGHT:
      p = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r + m);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - m);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + m);
      break;
    case A.LEFT:
      p = Math.max(s.minWidth, o - f);
      break;
    case A.RIGHT:
      p = Math.max(s.minWidth, o + f);
      break;
    default:
      return { width: p, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const g = o / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? p / g > h ? h = Math.max(s.minHeight, p / g) : p = Math.max(s.minWidth, h * g) : [A.TOP, A.BOTTOM].includes(e) ? p = h * g : [A.LEFT, A.RIGHT].includes(e) && (h = p / g);
  }
  return s.maxWidth && p > s.maxWidth && (p = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = p / (o / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (p = h * (o / r))), p = Math.max(s.minWidth, p), h = Math.max(s.minHeight, h), {
    width: Math.round(p),
    height: Math.round(h)
  };
}
function Vn(e, { width: t, height: a }) {
  de(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
const be = 'page-break, [data-page-break="true"]', Xt = (e) => ce[e] || ce.A4, Kn = (e, t = {}) => {
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
  return i.forEach((f, m) => {
    const h = f.getBoundingClientRect().top - r.top + s;
    o.push({
      id: `page-${m + 1}`,
      pageNumber: m + 2,
      top: h,
      height: n.height
    });
  }), o;
}, Jt = (e, t = 100, a = fe) => {
  const n = Xt(e), i = kn(a), o = n.height - i, r = t / 100;
  return o / r;
}, Xn = (e, t) => {
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
}, Jn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Qn = (e, t) => {
  if (!e)
    return !1;
  try {
    const a = document.createElement("page-break");
    return a.setAttribute("data-page-break", "true"), a.setAttribute("contenteditable", "false"), a.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(a, e), !0;
  } catch (a) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", a), !1;
  }
}, er = (e, t, a, n, i, o, r) => {
  if (!e)
    return !1;
  try {
    const f = Jt(a, n, i) * (t - 1), m = Array.from(e.children);
    let p = 0, h = null;
    for (let g = 0; g < m.length; g++) {
      const w = m[g];
      if (w.tagName === "PAGE-BREAK" || w.getAttribute("data-page-break") === "true")
        continue;
      const R = Jn(w);
      if (p + R > f) {
        h = w;
        break;
      }
      p += R;
    }
    if (h) {
      const g = document.createElement("page-break");
      if (g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(g, h), o) {
        const w = e.innerHTML;
        o(w);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const g = document.createElement("page-break");
      g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", String(t)), e.appendChild(g);
      const w = document.createElement("p");
      if (w.innerHTML = "<br>", e.appendChild(w), o) {
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
}, tr = (e, t, a, n, i, o, r) => {
  if (!e)
    return !1;
  if (a().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const f = Array.from(e.querySelectorAll(be));
    if (t > f.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const m = window.getSelection();
    let p = !1, h = [], g = null;
    if (t === 0) {
      const R = f[0];
      if (!R)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let d = e.firstChild;
      for (; d && d !== R; )
        h.push(d), d = d.nextSibling;
      g = R;
    } else {
      const R = f[t - 1];
      if (!R)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const d = f[t];
      let b = R.nextSibling;
      for (; b && b !== d; )
        h.push(b), b = b.nextSibling;
      g = R;
    }
    if (m && m.rangeCount > 0) {
      const d = m.getRangeAt(0).startContainer;
      for (const b of h)
        if (b.contains(d) || b === d) {
          p = !0;
          break;
        }
    }
    if (g && g.parentNode && g.remove(), h.forEach((R) => {
      R.parentNode && R.remove();
    }), e.querySelectorAll(be).forEach((R, d) => {
      R.setAttribute("data-page-number", String(d + 2));
    }), p && o && setTimeout(() => {
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
  } catch (f) {
    return console.error("[removePageAndContent] Failed to remove page:", f), !1;
  }
}, nr = 200, rr = 50, It = 3, ar = 20, Qt = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, or = (e, t) => {
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
}, ir = (e, t, a, n, i, o, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const f = Jt(t, a, n);
    let m = Ct(e), p = !1, h = 0;
    for (let g = 0; g < m.length && h < It; g++) {
      const w = m[g], R = or(w, f);
      if (R && R.overflowIndex > 0) {
        let d = 0;
        for (let _ = 0; _ < w.length; _++) {
          const D = w[_];
          D && D.getBoundingClientRect && (d += Qt(D));
        }
        if (d - f < ar)
          continue;
        const S = g + 2;
        Qn(R.overflowElement, S) && (p = !0, h++, m = Ct(e));
      }
    }
    if (p) {
      if (i) {
        const g = e.innerHTML;
        i(g);
      }
      setTimeout(() => {
        o && o(), h >= It && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, rr);
    }
    return p;
  } catch (f) {
    return console.warn("[checkAndReflow] Reflow failed:", f), !1;
  } finally {
    r.current = !1;
  }
}, sr = (e, t, a = nr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, a);
}, cr = 400, en = (e, t) => {
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
}, lr = (e, t, a, n) => {
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
      }, cr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, ur = (e, t, a = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(a);
  }, Math.max(0, n));
}, dr = 300, fr = (e, t, a = 100, n = "NARROW") => {
  const i = Pe(), o = te(null), r = te(null), s = te(e), f = te(a), m = te(n), p = te(!1);
  oe(() => {
    s.current = e;
  }, [e]), oe(() => {
    f.current = a;
  }, [a]), oe(() => {
    m.current = n;
  }, [n]), oe(() => () => {
    o.current && clearTimeout(o.current), r.current && clearTimeout(r.current);
  }, []);
  const h = W((l = {}) => t?.current ? Kn(t.current, l) : [], [t]), g = W((l = {}) => {
    const T = h(l);
    return i.updatePageBoundaries(T), T;
  }, [h, i]), w = W(async (l) => {
    if (!t?.current)
      return !1;
    const T = s.current || "A4", y = f.current || 100, k = m.current || "NARROW";
    return er(
      t.current,
      l,
      T,
      y,
      k,
      i.updateContinuousContent,
      g
    );
  }, [t, i, g]), R = W(() => {
    if (!t?.current)
      return;
    const l = s.current || "A4", T = f.current || 100, y = m.current || "NARROW";
    ir(
      t.current,
      l,
      T,
      y,
      i.updateContinuousContent,
      g,
      p,
      R
    );
  }, [t, i, g]), d = W((l) => {
    sr(R, r, l);
  }, [R]), b = W((l = {}) => {
    const T = typeof l.delay == "number" ? l.delay : dr;
    ur(g, o, l, T);
  }, [g]), S = W((l) => !l?.current || !t?.current ? 0 : Xn(l.current, t.current), [t]), C = W((l) => {
    t?.current && en(t.current, l);
  }, [t]), _ = W((l, T) => {
    if (!T?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    lr(T.current, t.current, l, C);
  }, [t, C]), D = W((l) => t?.current ? tr(
    t.current,
    l,
    h,
    i.updateContinuousContent,
    g,
    C,
    R
  ) : !1, [t, h, i, g, C, R]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: b,
    updateBoundaries: g,
    getCurrentPage: S,
    scrollToPage: _,
    positionCursorAtPage: C,
    checkAndReflow: R,
    triggerAutoReflow: d,
    removePageAndContent: D,
    insertPageBreakAtBoundary: w,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: r
  };
}, pr = "html-editor-storage", gr = 1, ue = "images";
function hr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function we() {
  return new Promise((e, t) => {
    const a = indexedDB.open(pr, gr);
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
function mr(e) {
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
      const r = o.target.result, f = r.split(",")[1].length * 3 / 4;
      if (f > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = await we(), p = `editor-image-${hr()}`, g = m.transaction([ue], "readwrite").objectStore(ue), w = {
          key: p,
          dataUrl: r,
          size: f,
          type: e.type,
          timestamp: Date.now()
        }, R = g.add(w);
        R.onsuccess = () => {
          m.close(), t(p);
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
async function yr(e) {
  try {
    const t = await we();
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
async function br(e) {
  try {
    const t = await we();
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
async function io() {
  try {
    const e = await we();
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
async function so() {
  try {
    const e = await we();
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
function Er(e) {
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
function xr(e) {
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
      o && t.push(`<p>${Er(o)}</p>`);
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
        const r = Le(o), s = o.tagName.toLowerCase(), f = Lt(o);
        t.push(`<${s}${f}>${r}</${s}>`);
      } else if (o.tagName === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else {
        const r = Le(o), s = o.tagName.toLowerCase(), f = Lt(o);
        t.push(`<${s}${f}>${r}</${s}>`);
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
const Tr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), jt = (e) => {
  const t = vr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, tn = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), Ar = (e) => {
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
var _r = {
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
const Pr = ot(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: o,
    iconNode: r,
    ...s
  }, f) => Ye(
    "svg",
    {
      ref: f,
      ..._r,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(a) * 24 / Number(t) : a,
      className: tn("lucide", i),
      ...!o && !Ar(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([m, p]) => Ye(m, p)),
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
    ({ className: n, ...i }, o) => Ye(Pr, {
      ref: o,
      iconNode: t,
      className: tn(
        `lucide-${Tr(jt(e))}`,
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
const wr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Rr = K("bold", wr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Or = K("chevron-left", kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Mr = K("chevron-right", Sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Cr = K("file-check", Nr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ze = K("file-text", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], jr = K("hash", Lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], zr = K("heading-1", Dr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Br = K("heading-2", Hr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Gr = K("heading-3", $r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Fr = K("image-upscale", Ur);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], qr = K("image", Wr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Yr = K("italic", Zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Kr = K("link", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], Jr = K("list-indent-decrease", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ea = K("list-indent-increase", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], na = K("list-ordered", ta);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], nn = K("list", ra);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], oa = K("plus", aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], sa = K("redo", ia);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], la = K("scaling", ca);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], da = K("settings", ua);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], pa = K("strikethrough", fa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], ha = K("table", ga);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], rn = K("text-align-center", ma);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], an = K("text-align-end", ya);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Ea = K("text-align-justify", ba);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], on = K("text-align-start", xa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], va = K("trash-2", Ta);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], _a = K("underline", Aa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pa = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], wa = K("undo", Pa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ka = K("x", Ra);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Sa = K("zoom-in", Oa);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ma = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Na = K("zoom-out", Ma), Ca = ({ editorView: e, isCollapsed: t, onToggle: a, wordCount: n, pageCount: i }) => {
  const o = Wt(), { pages: r, activePage: s, continuousContent: f, editorMode: m } = o, [p, h] = le(0), [g, w] = le([]);
  oe(() => {
    if (n !== void 0 && i !== void 0) {
      if (h(n), f) {
        const S = document.createElement("div");
        S.innerHTML = f;
        const C = S.querySelectorAll("h1, h2, h3, h4, h5, h6"), _ = Array.from(C).map((D, l) => {
          const T = parseInt(D.tagName.charAt(1)), y = D.textContent.trim();
          return y ? {
            id: `heading-${l}`,
            level: T,
            text: y,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        w(_);
      }
      return;
    }
    let d = 0;
    const b = [];
    r.forEach((S, C) => {
      if (S.content) {
        const _ = document.createElement("div");
        _.innerHTML = S.content;
        const l = (_.textContent || _.innerText || "").trim().split(/\s+/).filter((y) => y.length > 0);
        d += l.length, _.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((y, k) => {
          const L = parseInt(y.tagName.charAt(1)), P = y.textContent.trim();
          P && b.push({
            id: `heading-${C}-${k}`,
            level: L,
            text: P,
            page: C + 1
          });
        });
      }
    }), h(d), w(b);
  }, [r, n, i, f]);
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
            /* @__PURE__ */ u.jsx(ze, { size: 18 }),
            /* @__PURE__ */ u.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ u.jsx(Mr, { size: 16 }) : /* @__PURE__ */ u.jsx(Or, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(Cr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: R })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(jr, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: p.toLocaleString() })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ u.jsx(ze, { size: 14 }),
                /* @__PURE__ */ u.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          g.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ u.jsxs("h3", { children: [
              /* @__PURE__ */ u.jsx(nn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "document-outline", "data-testid": "outline", children: g.map((d) => {
              const b = d.level === 1 ? zr : d.level === 2 ? Br : Gr;
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
class Ia {
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
const Dt = new Ia("Editor"), sn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), cn = 32;
function ln(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const a = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? a - 1 : a + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * cn}px`, e.dataset.indentLevel = String(n));
}
function La(e, t) {
  ln(e, t);
}
function ja(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && sn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Da() {
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
function za(e) {
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
  let a = Da();
  const n = t.getRangeAt(0);
  if (a.length === 0) {
    const r = ja(n.startContainer);
    if (!r) return !1;
    a = [r];
  }
  const i = a[0], o = a[a.length - 1];
  a.forEach((r) => {
    if ((r.tagName ? r.tagName.toUpperCase() : "") === "LI") {
      La(r, e);
      return;
    }
    e ? za(r) : ln(r, !1);
  });
  try {
    const r = document.createRange(), s = (h) => h.nodeType === Node.TEXT_NODE ? h : document.createTreeWalker(
      h,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), f = (h) => {
      if (h.nodeType === Node.TEXT_NODE)
        return h;
      const g = document.createTreeWalker(
        h,
        NodeFilter.SHOW_TEXT,
        null
      );
      let w = null, R = g.nextNode();
      for (; R; )
        w = R, R = g.nextNode();
      return w;
    }, m = s(i);
    m ? r.setStart(m, 0) : r.setStart(i, 0);
    const p = f(o);
    p ? r.setEnd(p, p.length) : r.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(r);
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
function Ha(e) {
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
      const f = await mr(r), m = await yr(f);
      if (m) {
        const h = `<img src="${m}" data-key="${f}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, h), Dt.info("Image inserted", { key: f });
      }
      const p = document.getElementById("image-upload");
      p && (p.value = "");
    } catch (s) {
      Dt.error("Error uploading image", s);
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
        children: /* @__PURE__ */ u.jsx(wa, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ u.jsx(sa, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ u.jsx(Rr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ u.jsx(Yr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ u.jsx(_a, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ u.jsx(pa, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ u.jsx(on, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ u.jsx(rn, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(Ea, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
        defaultValue: "Segoe UI",
        title: "Font Family",
        children: [
          /* @__PURE__ */ u.jsx("option", { value: "Segoe UI", children: "Segoe UI " }),
          /* @__PURE__ */ u.jsx("option", { value: "Arial", children: "Arial " }),
          /* @__PURE__ */ u.jsx("option", { value: "Times New Roman", children: "Times New Roman " }),
          /* @__PURE__ */ u.jsx("option", { value: "Courier New", children: "Courier New " }),
          /* @__PURE__ */ u.jsx("option", { value: "Georgia", children: "Georgia " }),
          /* @__PURE__ */ u.jsx("option", { value: "Verdana", children: "Verdana " }),
          /* @__PURE__ */ u.jsx("option", { value: "Noto Sans Sinhala", children: "Noto Sans Sinhala (සිංහල)" }),
          /* @__PURE__ */ u.jsx("option", { value: "Iskoola Pota", children: "Iskoola Pota (සිංහල)" }),
          /* @__PURE__ */ u.jsx("option", { value: "Noto Sans Tamil", children: "Noto Sans Tamil (தமிழ்)" }),
          /* @__PURE__ */ u.jsx("option", { value: "Noto Sans", children: "Noto Sans (Unicode)" })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(
      "select",
      {
        onChange: (r) => t("fontSize", r.target.value),
        defaultValue: lt,
        title: "Font Size",
        children: $n.map(({ value: r, label: s }) => /* @__PURE__ */ u.jsx("option", { value: r, children: s }, r))
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
        children: /* @__PURE__ */ u.jsx(nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ u.jsx(na, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          rt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ u.jsx(ea, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          rt(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ u.jsx(Jr, { size: 16 })
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
        children: /* @__PURE__ */ u.jsx(Kr, { size: 16 })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ u.jsx(ha, { size: 16 })
      }
    ),
    a && /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: a,
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
        onChange: (r) => r.target.files[0] && o(r.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ u.jsx(qr, { size: 16 })
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
function Ba(e) {
  if (!e || typeof e != "string")
    return e;
  const t = document.createElement("div");
  return t.innerHTML = e, ve(t);
}
function ve(e) {
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
        const r = ve(o);
        r.trim() ? t.push(`<p>${r}</p>`) : t.push("<p><br></p>");
      } else if (o.tagName === "P") {
        const r = ve(o);
        t.push(`<p>${r}</p>`);
      } else if (o.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(o.tagName)) {
        const r = ve(o), s = o.tagName.toLowerCase(), f = zt(o);
        t.push(`<${s}${f}>${r}</${s}>`);
      } else {
        const r = ve(o), s = o.tagName.toLowerCase(), f = zt(o);
        t.push(`<${s}${f}>${r}</${s}>`);
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
function $a(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let a = t.getData("text/html") || t.getData("text/plain");
  return a ? (t.getData("text/html") ? a = Ba(a) : a = Ga(a), document.execCommand("insertHTML", !1, a), a) : null;
}
function Ga(e) {
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
  onContentChange: r,
  onKeyDown: s,
  onClick: f,
  onScroll: m,
  onPaste: p,
  zoomLevel: h = 100,
  pageMargins: g = fe
}) => {
  const w = Bt(g), R = h / 100, d = (l, T) => {
    if (!l) return !1;
    const y = l.getBoundingClientRect(), k = T - y.top;
    return k < w.top || k > y.height - w.bottom;
  }, b = (l) => l ? l.nodeType === Node.ELEMENT_NODE ? l.tagName === "PAGE-BREAK" || l.getAttribute("data-page-break") === "true" : l.parentElement && b(l.parentElement) : !1, S = (l) => {
    const T = window.getSelection();
    if (!T || T.rangeCount === 0) return;
    const y = T.getRangeAt(0), { startContainer: k, endContainer: L } = y;
    if ((b(k) || b(L)) && (l.key.length === 1 || l.key === "Enter" || l.key === " "))
      return l.preventDefault(), !1;
    if (Ha(l))
      return r && r(), !1;
    if ((l.key === "Backspace" || l.key === "Delete") && (b(k) || b(L)))
      return l.preventDefault(), !1;
    s && s(l);
  }, C = (l) => {
    if (!i.current) return;
    const T = l.target;
    if (b(T)) {
      l.preventDefault();
      return;
    }
    if (d(i.current, l.clientY)) {
      l.preventDefault();
      const y = i.current.getBoundingClientRect();
      if (l.clientY - y.top < w.top) {
        const L = i.current.firstElementChild;
        if (L && L.tagName !== "PAGE-BREAK") {
          const P = document.createRange(), z = window.getSelection();
          P.setStart(L, 0), P.collapse(!0), z.removeAllRanges(), z.addRange(P);
        }
      } else {
        const L = i.current.lastElementChild;
        if (L && L.tagName !== "PAGE-BREAK") {
          const P = document.createRange(), z = window.getSelection();
          P.selectNodeContents(L), P.collapse(!1), z.removeAllRanges(), z.addRange(P);
        }
      }
      return;
    }
    f && f(l);
  }, _ = (l) => {
    const T = window.getSelection();
    if (!T || T.rangeCount === 0) return;
    const y = T.getRangeAt(0), { startContainer: k } = y;
    if (b(k))
      return l.preventDefault(), !1;
  }, D = (l) => {
    const T = $a(l);
    p && p(l, T);
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
            padding: `${w.top}px ${w.right}px ${w.bottom}px ${w.left}px`,
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
          onKeyDown: S,
          onBeforeInput: _,
          onClick: C,
          onScroll: m,
          onPaste: D,
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
  onContentChange: x.func,
  onKeyDown: x.func,
  onClick: x.func,
  onScroll: x.func,
  onPaste: x.func,
  zoomLevel: x.number,
  pageMargins: x.string
};
dt.defaultProps = {
  pageBoundaries: [],
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  zoomLevel: 100,
  pageMargins: fe
};
const ft = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: a = "A4",
  pageMargins: n = fe,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: r = !0,
  onNavigate: s,
  onAddPage: f,
  onDeletePage: m,
  onPageSizeChange: p,
  onPageMarginsChange: h,
  onZoomIn: g,
  onZoomOut: w,
  onZoomReset: R
} = {}) => {
  const d = Math.max(e?.length || 0, 1), b = (l) => {
    s && s(l);
  }, S = () => {
    f && f();
  }, C = (l) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    m && m(l);
  }, _ = (l) => {
    p && p(l);
  }, D = (l) => {
    h && h(l);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ u.jsx(da, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              value: a,
              onChange: (l) => _(l.target.value),
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
              onChange: (l) => D(l.target.value),
              children: On().map((l) => /* @__PURE__ */ u.jsx("option", { value: l, children: Sn(l) }, l))
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
          onClick: w,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ u.jsx(Na, { size: 12 })
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
          onClick: g,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ u.jsx(Sa, { size: 12 })
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
    /* @__PURE__ */ u.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((l, T) => /* @__PURE__ */ u.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ u.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${T === t ? "active" : ""}`,
          onClick: () => b(T),
          "aria-label": `Go to page ${T + 1}`,
          "aria-current": T === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ u.jsx(ze, { size: 14 }),
            /* @__PURE__ */ u.jsxs("span", { children: [
              "Page ",
              T + 1
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
            y.stopPropagation(), C(T);
          },
          "aria-label": `Delete page ${T + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ u.jsx(ka, { size: 14 })
        }
      )
    ] }, l.id || `page-${T}`)) }),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: S,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ u.jsx(oa, { size: 16 }),
          /* @__PURE__ */ u.jsx("span", { children: "Add Page" })
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
const Ua = He.memo(ft), pt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: a,
  onImageDeselect: n,
  resizeOptions: i = pe
}) => {
  const o = te(null), r = te(null), s = te(null), f = te(null), m = te(i), p = te(!1), h = Pe();
  oe(() => {
    m.current = i;
  }, [i]);
  const g = W((y) => {
    if (!de(y)) return;
    o.current && (ye(o.current), o.current = null), y.classList.add("selected");
    const k = Vt(y, m.current);
    k && (o.current = k, r.current = y, document.body.appendChild(k), k.querySelectorAll(".resize-handler").forEach((P) => {
      P.addEventListener("mousedown", R);
    }), a && (console.log("Image selected, calling onImageSelect callback"), a(y)));
  }, [a]), w = W(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), o.current && (ye(o.current), o.current = null), s.current = null, f.current = null, p.current = !1, n && n();
  }, [n]), R = W((y) => {
    if (y.preventDefault(), y.stopPropagation(), !r.current) return;
    const k = y.currentTarget.dataset.handler, L = r.current.getBoundingClientRect(), P = window.pageYOffset || document.documentElement.scrollTop, z = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: y.clientX,
      y: y.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: y.clientX - L.left - z,
      offsetY: y.clientY - L.top - P
    }, f.current = k, p.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = D(k), document.addEventListener("mousemove", d), document.addEventListener("mouseup", b);
  }, []), d = W((y) => {
    if (!p.current || !r.current || !s.current || !f.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: k, y: L, width: P, height: z } = s.current, V = f.current, X = y.clientX, $ = y.clientY, ne = l({
      handler: V,
      startX: k,
      startY: L,
      currentX: X,
      currentY: $,
      startWidth: P,
      startHeight: z,
      options: m.current
    });
    T(r.current, ne), o.current && nt(o.current, r.current);
  }, []), b = W((y) => {
    if (p.current) {
      if (y.preventDefault(), y.stopPropagation(), r.current && s.current) {
        const k = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, L = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (k.width !== L.width || k.height !== L.height) && h.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: L } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: k } }
        );
      }
      if (s.current = null, f.current = null, p.current = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(k), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, h]), S = W((y) => {
    o.current && !o.current.contains(y.target) && w();
    const k = y.target;
    if (de(k)) {
      if (k === r.current)
        return;
      g(k);
    } else
      console.log("Clicked on non-image element");
  }, [g, w]), C = W((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && r.current && !p.current) {
      y.preventDefault();
      const k = r.current;
      if (k.parentNode) {
        k.parentNode.removeChild(k), w();
        const L = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(L);
      }
    }
    if (y.key === "Escape" && r.current && w(), r.current && !p.current) {
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === ">") {
        y.preventDefault();
        const k = r.current.offsetWidth, L = Math.min(m.current.maxWidth || 800, k + 10);
        T(r.current, { width: L, height: r.current.offsetHeight });
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(P);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "<") {
        y.preventDefault();
        const k = r.current.offsetWidth, L = Math.max(m.current.minWidth || 50, k - 10);
        T(r.current, { width: L, height: r.current.offsetHeight });
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(P);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "+") {
        y.preventDefault();
        const k = r.current.offsetHeight, L = Math.min(m.current.maxHeight || 600, k + 10);
        T(r.current, { width: r.current.offsetWidth, height: L });
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(P);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "-") {
        y.preventDefault();
        const k = r.current.offsetHeight, L = Math.max(m.current.minHeight || 50, k - 10);
        T(r.current, { width: r.current.offsetWidth, height: L });
        const P = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(P);
      }
      if ((y.ctrlKey || y.metaKey) && y.key === "r") {
        y.preventDefault(), T(r.current, { width: 300, height: 200 });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
    }
  }, [e, w]), _ = W(() => {
    o.current && r.current && nt(o.current, r.current);
  }, []);
  oe(() => {
    if (!e.current) return;
    const k = e.current.closest(".editor-viewport");
    return k && (k.addEventListener("scroll", _), window.addEventListener("scroll", _)), () => {
      k && k.removeEventListener("scroll", _), window.removeEventListener("scroll", _);
    };
  }, [e, _]), oe(() => {
    if (!e.current) return;
    const y = e.current;
    y.addEventListener("click", S), y.addEventListener("keydown", C);
    const k = y.closest(".editor-viewport");
    return k && k.addEventListener("scroll", _), window.addEventListener("resize", _), () => {
      y.removeEventListener("click", S), y.removeEventListener("keydown", C), k && k.removeEventListener("scroll", _), window.removeEventListener("resize", _), p.current && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && ye(o.current);
    };
  }, [e, S, C, _, d, b]), oe(() => {
    if (!e.current) return;
    const y = new MutationObserver((k) => {
      k.forEach((L) => {
        L.type === "childList" && (L.removedNodes.length > 0 && L.removedNodes.forEach((P) => {
          P.nodeType === Node.ELEMENT_NODE && de(P) && P === r.current && w();
        }), L.addedNodes.length > 0 && L.addedNodes.forEach((P) => {
          if (P.nodeType === Node.ELEMENT_NODE)
            if (de(P))
              setTimeout(() => {
                g(P);
              }, 50);
            else {
              const z = P.querySelectorAll ? P.querySelectorAll("img") : [];
              z.length > 0 && setTimeout(() => {
                g(z[0]);
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
  }, [e, w, g]);
  function D(y) {
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
  function l({
    handler: y,
    startX: k,
    startY: L,
    currentX: P,
    currentY: z,
    startWidth: V,
    startHeight: X,
    options: $ = pe
  }) {
    const ne = P - k, J = z - L;
    let U = V, F = X;
    switch (y) {
      case A.TOP_LEFT:
        U = Math.max($.minWidth, V - ne), F = Math.max($.minHeight, X - J);
        break;
      case A.TOP_RIGHT:
        U = Math.max($.minWidth, V + ne), F = Math.max($.minHeight, X - J);
        break;
      case A.BOTTOM_LEFT:
        U = Math.max($.minWidth, V - ne), F = Math.max($.minHeight, X + J);
        break;
      case A.BOTTOM_RIGHT:
        U = Math.max($.minWidth, V + ne), F = Math.max($.minHeight, X + J);
        break;
      case A.TOP:
        F = Math.max($.minHeight, X - J);
        break;
      case A.BOTTOM:
        F = Math.max($.minHeight, X + J);
        break;
      case A.LEFT:
        U = Math.max($.minWidth, V - ne);
        break;
      case A.RIGHT:
        U = Math.max($.minWidth, V + ne);
        break;
      default:
        return { width: U, height: F };
    }
    if ($.preserveAspectRatio && $.aspectRatio) {
      const ae = V / X;
      [
        A.TOP_LEFT,
        A.TOP_RIGHT,
        A.BOTTOM_LEFT,
        A.BOTTOM_RIGHT
      ].includes(y) ? U / ae > F ? F = Math.max($.minHeight, U / ae) : U = Math.max($.minWidth, F * ae) : [A.TOP, A.BOTTOM].includes(y) ? U = F * ae : [A.LEFT, A.RIGHT].includes(y) && (F = U / ae);
    }
    return $.maxWidth && U > $.maxWidth && (U = $.maxWidth, $.preserveAspectRatio && $.aspectRatio && (F = U / (V / X))), $.maxHeight && F > $.maxHeight && (F = $.maxHeight, $.preserveAspectRatio && $.aspectRatio && (U = F * (V / X))), U = Math.max($.minWidth, U), F = Math.max($.minHeight, F), {
      width: Math.round(U),
      height: Math.round(F)
    };
  }
  function T(y, { width: k, height: L }) {
    de(y) && (y.tagName === "IMG" ? (y.style.width = `${k}px`, y.style.height = `${L}px`, y.width = k, y.height = L) : y.tagName === "DIV" && (y.style.width = `${k}px`, y.style.height = `${L}px`));
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
  resizeOptions: pe
};
const gt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: a,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [r, s] = le({ top: 0, left: 0 }), [f, m] = le(!1), [p, h] = le("top"), [g, w] = le(o), R = te(null), d = te(null), b = Pe(), S = (P) => {
    if (!P) return null;
    const z = window.getComputedStyle(P);
    return {
      float: z.float || "none",
      margin: P.style.margin || "",
      display: z.display || "inline",
      width: P.style.width || P.width || "",
      height: P.style.height || P.height || "",
      aspectRatio: g
    };
  }, C = () => {
    if (!e) return "left";
    const P = window.getComputedStyle(e);
    return P.float || P.display === "block" ? "left" : P.display === "flex" && P.justifyContent === "center" ? "center" : P.float === "right" ? "right" : "left";
  }, [_, D] = le(C());
  oe(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), oe(() => {
    if (e) {
      let P = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      P && (d.current = P);
    }
  }, [e]), xn(() => {
    if (!e || !R.current) return;
    const P = () => {
      const V = e.getBoundingClientRect(), X = R.current.getBoundingClientRect();
      d.current;
      const $ = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, ne = V.bottom >= 0 && V.top <= $.height && V.right >= 0 && V.left <= $.width;
      let J = "top", U = 0, F = 0;
      if (ne) {
        const N = V.top - X.height - 10, M = $.height - V.bottom - X.height - 10;
        M > N && M > 0 ? (J = "bottom", U = V.bottom + 10) : (J = "top", U = V.top - X.height - 10);
      } else
        J = "top", U = 10;
      F = V.left + V.width / 2 - X.width / 2;
      const ae = window.innerWidth, E = window.innerHeight;
      let c = F, v = U;
      F < 10 ? c = 10 : F + X.width > ae - 10 && (c = ae - X.width - 10), U < 10 ? v = 10 : U + X.height > E - 10 && (v = E - X.height - 10), s({
        top: v,
        left: c
      }), h(J), m(!0);
    };
    P();
    const z = () => {
      P();
    };
    return d.current && d.current.addEventListener("scroll", z), window.addEventListener("scroll", z), window.addEventListener("resize", z), () => {
      d.current && d.current.removeEventListener("scroll", z), window.removeEventListener("scroll", z), window.removeEventListener("resize", z), m(!1);
    };
  }, [e]), oe(() => {
    const P = (z) => {
      R.current && !R.current.contains(z.target) && z.target !== e && i();
    };
    return document.addEventListener("mousedown", P), () => {
      document.removeEventListener("mousedown", P);
    };
  }, [e, i]);
  const l = () => {
    if (e) {
      const P = S(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", D("left");
      const z = S(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: C(), state: P } }
      ), t && t("left");
    }
  }, T = () => {
    if (e) {
      const P = S(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", D("center");
      const z = S(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: C(), state: P } }
      ), t && t("center");
    }
  }, y = () => {
    if (e) {
      const P = S(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", D("right");
      const z = S(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: z } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: C(), state: P } }
      ), t && t("right");
    }
  }, k = () => {
    if (e && e.parentNode) {
      const P = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      b.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: P } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, L = () => {
    const P = g, z = !g;
    w(z), b.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: z } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: P } }
    ), a && a(z);
  };
  return !e || typeof document > "u" ? null : vn(
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: R,
        className: "image-tooltip-menu",
        "data-menu-position": p,
        "aria-hidden": !f,
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
          pointerEvents: f ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: f ? 1 : 0,
          visibility: f ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${g ? "" : "active"}`,
              onClick: L,
              title: `Toggle aspect ratio preservation (currently ${g ? "ON" : "OFF"})`,
              children: g ? /* @__PURE__ */ u.jsx(la, { size: 14 }) : /* @__PURE__ */ u.jsx(Fr, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "left" ? "active" : ""}`,
              onClick: l,
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
              children: /* @__PURE__ */ u.jsx(on, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "center" ? "active" : ""}`,
              onClick: T,
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
              children: /* @__PURE__ */ u.jsx(rn, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
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
              children: /* @__PURE__ */ u.jsx(an, { size: 14 })
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: k,
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
              children: /* @__PURE__ */ u.jsx(va, { size: 14 })
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
const Fa = 50, Wa = 50, Ht = 50, qa = 100, Za = 500, ht = ot(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: a,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: f = !0,
  showPageManager: m = !0
}, p) => {
  const h = Wt(), g = Pe(), { pageSize: w, pageMargins: R, continuousContent: d, pageBoundaries: b, activePage: S, zoomLevel: C, canUndo: _, canRedo: D } = h, l = te(null), T = te(null), { currentFormat: y, formatText: k } = qn(), [L, P] = le(!1), [z, V] = le(null), [X, $] = le(!0), {
    checkAndUpdateBoundaries: ne,
    getCurrentPage: J,
    scrollToPage: U,
    updateBoundaries: F,
    triggerAutoReflow: ae,
    removePageAndContent: E,
    insertPageBreakAtBoundary: c
  } = fr(w, T, C, R), v = je(() => st(w), [w]), [N, M] = le(!1), G = te(null), B = te(!1), I = te(!1), q = te(!1), Z = te(d);
  oe(() => {
    if (T.current) {
      if (!q.current) {
        T.current.innerHTML = d, q.current = !0, Z.current = d;
        const j = setTimeout(() => {
          F();
        }, Fa);
        return () => clearTimeout(j);
      }
      if (Z.current !== d) {
        if (T.current.innerHTML !== d) {
          T.current.innerHTML = d;
          const re = setTimeout(() => {
            if (F(), B.current) {
              B.current = !1;
              const ge = Math.max(0, b.length - 1);
              g.setActivePage(ge), setTimeout(() => {
                U(ge, l);
              }, Ht);
            }
          }, Wa);
          return Z.current = d, () => clearTimeout(re);
        }
        Z.current = d;
      }
    }
  }, [d, F, b.length, g, U]), oe(() => {
    r && q.current && r(d);
  }, [d, r]), Tn(p, () => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => T.current ? T.current.innerHTML : d,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (T.current ? T.current.innerHTML : d).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (j) => {
      g.updateContinuousContent(j), T.current && (T.current.innerHTML = j, setTimeout(() => {
        F();
      }, 50));
    }
  }), [d, g, F, T]), oe(() => {
    const j = setTimeout(() => {
      T.current && T.current.focus();
    }, 200);
    return () => clearTimeout(j);
  }, []);
  const Y = W(() => {
    if (!T.current) return;
    let j = T.current.innerHTML;
    j = xr(j), j !== T.current.innerHTML && (T.current.innerHTML = j), g.updateContinuousContent(j), ne(), ae(200);
    const re = J(l);
    re !== S && g.setActivePage(re);
  }, [g, ne, J, S, ae, l, T]), ie = W((j) => {
    Y();
  }, [Y]), O = W((j) => {
    g.updatePageSize(j), F({ pageSize: j }), i && i(j);
  }, [g, F, i]), se = W((j) => {
    g.updatePageMargins(j), F({ pageMargins: j }), o && o(j);
  }, [g, F, o]), he = W((j) => {
    j < 0 || j >= b.length || (I.current = !0, g.setActivePage(j), U(j, l), setTimeout(() => {
      I.current = !1;
    }, Za), t && t(j));
  }, [g, U, t, b.length]), Ee = W(() => {
    const j = b.length + 1;
    c(j) && (B.current = !0, setTimeout(() => {
      if (B.current) {
        B.current = !1;
        const ge = Math.max(0, b.length - 1);
        g.setActivePage(ge), setTimeout(() => {
          U(ge, l);
        }, Ht);
      }
    }, 100)), a && a();
  }, [b.length, c, g, U, a]), dn = W(() => {
    const j = window.getSelection();
    if (j && j.rangeCount > 0) {
      if (!T?.current) return;
      const Be = `<page-break data-page-break="true" contenteditable="false" data-page-number="${T.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Be), setTimeout(() => {
        F();
        const $e = J(l);
        g.setActivePage($e);
      }, 150);
    }
  }, [F, J, g, l]), mt = W((j) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    E(j) && (g.setActivePage(0), n && n(j));
  }, [b.length, E, g, n]), Re = W(() => {
    g.zoomIn();
  }, [g]), ke = W(() => {
    g.zoomOut();
  }, [g]), Oe = W(() => {
    g.resetZoom();
  }, [g]);
  oe(() => {
    const j = (re) => {
      if (re.ctrlKey || re.metaKey) {
        ["+", "=", "-", "_", "0"].includes(re.key) && re.preventDefault();
        const ge = document.activeElement === T.current, Be = document.activeElement === l.current, $e = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ge || Be || !$e)
          switch (re.key) {
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
    return window.addEventListener("keydown", j), () => {
      window.removeEventListener("keydown", j);
    };
  }, [Re, ke, Oe]);
  const fn = W(() => {
    !l.current || !T.current || I.current || (G.current && clearTimeout(G.current), G.current = setTimeout(() => {
      if (I.current) {
        G.current = null;
        return;
      }
      const j = J(l);
      j !== S && j >= 0 && g.setActivePage(j), G.current = null;
    }, qa));
  }, [J, S, g]), pn = je(() => {
    if (!d) return 0;
    const re = d.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return re ? re.length : 0;
  }, [d]), gn = b.length || 1, hn = W((j) => {
    P(!0), V(j);
  }, []), yt = W(() => {
    P(!1), V(null);
  }, []), mn = W((j, re) => {
  }, []);
  return oe(() => () => {
    G.current && clearTimeout(G.current);
  }, []), /* @__PURE__ */ u.jsxs("div", { className: "multi-page-editor", children: [
    f && /* @__PURE__ */ u.jsx(
      ut,
      {
        currentFormat: {
          ...y,
          imageSelected: L
        },
        onFormatText: k,
        onAddPageBreak: dn,
        canUndo: _,
        canRedo: D
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ u.jsx(
        Ca,
        {
          editorView: null,
          isCollapsed: N,
          onToggle: () => M((j) => !j),
          wordCount: pn,
          pageCount: gn
        }
      ),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: l,
          onScroll: fn,
          children: /* @__PURE__ */ u.jsx(
            dt,
            {
              content: d,
              dimensions: v,
              pageSize: w,
              pageMargins: R,
              pageBoundaries: b,
              editorRef: T,
              onInput: ie,
              onContentChange: Y,
              onClick: () => T.current?.focus(),
              zoomLevel: C
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsx(
        pt,
        {
          editorRef: T,
          onImageSelect: hn,
          onImageDeselect: yt,
          onImageResize: mn,
          resizeOptions: {
            ...pe,
            preserveAspectRatio: X,
            aspectRatio: X
          }
        }
      ),
      L && z && /* @__PURE__ */ u.jsx(
        gt,
        {
          imageElement: z,
          initialPreserveAspectRatio: X,
          onAlignChange: (j) => {
          },
          onAspectRatioToggle: (j) => {
            $(j);
          },
          onDelete: () => {
            if (z) {
              const j = z.getAttribute("data-key");
              j && br(j).catch((re) => {
                console.error("Failed to delete image from IndexedDB:", re);
              });
            }
          },
          onClose: yt
        }
      ),
      m && /* @__PURE__ */ u.jsx("div", { className: "page-manager-sidebar", children: e ? He.cloneElement(e, {
        onNavigate: he,
        onAddPage: Ee,
        onDeletePage: mt,
        onPageSizeChange: O,
        onPageMarginsChange: se,
        zoomLevel: C,
        canZoomIn: Je(C),
        canZoomOut: Qe(C),
        onZoomIn: Re,
        onZoomOut: ke,
        onZoomReset: Oe
      }) : /* @__PURE__ */ u.jsx(
        Ua,
        {
          pageBoundaries: b,
          activePage: S,
          pageSize: w,
          pageMargins: R,
          zoomLevel: C,
          canZoomIn: Je(C),
          canZoomOut: Qe(C),
          onNavigate: he,
          onAddPage: Ee,
          onDeletePage: mt,
          onPageSizeChange: O,
          onPageMarginsChange: se,
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
const co = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  $n as COMMON_FONT_SIZES,
  lt as DEFAULT_FONT_SIZE,
  pe as DEFAULT_IMAGE_RESIZE_OPTIONS,
  $t as DEFAULT_PAGE_SIZE,
  Qa as DocumentProvider,
  ut as EditorToolbar,
  un as ErrorBoundary,
  Yt as FONT_SIZE_MAP,
  ht as HtmlEditor,
  pt as ImageResizeHandlers,
  co as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  Ua as PageManager,
  dt as PageView,
  A as RESIZE_HANDLERS,
  Ca as Sidebar,
  oo as applyImageDimensions,
  ro as calculateResizeDimensions,
  io as clearImages,
  Vt as createResizeOverlay,
  br as deleteImage,
  so as getAllImageKeys,
  Ja as getAvailablePageSizes,
  yr as getImage,
  ao as getImageDimensions,
  st as getPageDimensions,
  eo as getPixelValue,
  to as getPointValue,
  de as isResizableImage,
  no as isValidFontSize,
  Xa as isValidPageSize,
  Ia as logger,
  Un as pixelsToPoints,
  Gn as pointsToPixels,
  ye as removeResizeOverlay,
  mr as saveImage,
  nt as updateResizeOverlay,
  fr as useContinuousReflow,
  Ft as useDocument,
  Pe as useDocumentActions,
  Wt as useDocumentState,
  qn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
