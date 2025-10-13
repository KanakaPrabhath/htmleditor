import $e, { createContext as pn, useContext as fn, useReducer as gn, useMemo as Le, useState as le, useCallback as q, useRef as te, useEffect as ae, forwardRef as ot, createElement as Ye, useLayoutEffect as hn, useImperativeHandle as mn } from "react";
import { v4 as at } from "uuid";
import { createPortal as yn } from "react-dom";
function bn(e) {
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
var yt;
function En() {
  if (yt) return Ee;
  yt = 1;
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
var bt;
function xn() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case w:
          return "Suspense";
        case m:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case d:
            return "Portal";
          case v:
            return c.displayName || "Context";
          case P:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var T = c.render;
            return c = c.displayName, c || (c = T.displayName || T.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case _:
            return T = c.displayName || null, T !== null ? T : e(c.type) || "Memo";
          case L:
            T = c._payload, c = c._init;
            try {
              return e(c(T));
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
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var N = T.error, C = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return N.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(c);
      }
    }
    function n(c) {
      if (c === b) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === L)
        return "<...>";
      try {
        var T = e(c);
        return T ? "<" + T + ">" : "<...>";
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
      if (K.call(c, "key")) {
        var T = Object.getOwnPropertyDescriptor(c, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function s(c, T) {
      function N() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: N,
        configurable: !0
      });
    }
    function f() {
      var c = e(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function y(c, T, N, C, H, $) {
      var j = N.ref;
      return c = {
        $$typeof: R,
        type: c,
        key: T,
        props: N,
        _owner: C
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(c, "ref", {
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
        value: H
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function g(c, T, N, C, H, $) {
      var j = T.children;
      if (j !== void 0)
        if (C)
          if (B(j)) {
            for (C = 0; C < j.length; C++)
              h(j[C]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(j);
      if (K.call(T, "key")) {
        j = e(c);
        var W = Object.keys(T).filter(function(Y) {
          return Y !== "key";
        });
        C = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", E[j + C] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          j,
          W,
          j
        ), E[j + C] = !0);
      }
      if (j = null, N !== void 0 && (a(N), j = "" + N), r(T) && (a(T.key), j = "" + T.key), "key" in T) {
        N = {};
        for (var Z in T)
          Z !== "key" && (N[Z] = T[Z]);
      } else N = T;
      return j && s(
        N,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), y(
        c,
        j,
        N,
        i(),
        H,
        $
      );
    }
    function h(c) {
      p(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === L && (c._payload.status === "fulfilled" ? p(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function p(c) {
      return typeof c == "object" && c !== null && c.$$typeof === R;
    }
    var S = $e, R = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), v = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), V = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, B = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var X, G = {}, U = S.react_stack_bottom_frame.bind(
      S,
      o
    )(), oe = re(n(o)), E = {};
    xe.Fragment = b, xe.jsx = function(c, T, N) {
      var C = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        c,
        T,
        N,
        !1,
        C ? Error("react-stack-top-frame") : U,
        C ? re(n(c)) : oe
      );
    }, xe.jsxs = function(c, T, N) {
      var C = 1e4 > V.recentlyCreatedOwnerStacks++;
      return g(
        c,
        T,
        N,
        !0,
        C ? Error("react-stack-top-frame") : U,
        C ? re(n(c)) : oe
      );
    };
  })()), xe;
}
var Et;
function vn() {
  return Et || (Et = 1, process.env.NODE_ENV === "production" ? Se.exports = En() : Se.exports = xn()), Se.exports;
}
var l = vn();
const Ve = 100, Ke = 50, Xe = 200, xt = 5, Je = (e) => e < Xe, Qe = (e) => e > Ke, Tn = 96, Me = (e) => Math.round(e * Tn), De = {
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
    top: Me(t.top),
    bottom: Me(t.bottom),
    left: Me(t.left),
    right: Me(t.right)
  };
}, An = (e = fe) => {
  const t = $t(e);
  return t.top + t.bottom;
}, Pn = () => Object.keys(De), _n = (e) => {
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
}, Bt = "A4", it = (e) => {
  const t = ce[e] || ce[Bt];
  return {
    width: t.width,
    height: t.height
  };
}, zo = (e) => Object.keys(ce).includes(e), $o = () => Object.keys(ce), Ae = Bt, me = "<p><br></p>", kn = "continuous", Te = (e, t = Ae) => ({
  id: at(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), Ie = (e) => typeof e != "string" || e.trim() === "" ? me : e, Ht = (e, t = Ae) => (e.length > 0 ? e : [Te(0, t)]).map((n, i) => ({
  id: n.id || at(),
  index: i,
  size: n.size || t,
  content: Ie(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Rn = (e = Ae) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: it(e).height
}], et = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || Ae, n = Ht(e.pages || [Te(0, a)], a);
  return {
    id: at(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: a,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || kn,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || Rn(a),
    zoomLevel: e.zoomLevel || Ve,
    pageMargins: e.pageMargins || fe,
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
      const { initialContent: n = me, pageSize: i = Ae } = t.payload || {}, o = { ...Te(0, i), content: Ie(n) };
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
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Ht(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((r, s) => ({
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
      i.splice(n, 0, Te(n, e.pageSize));
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
    case z.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const o = i.map((f, y) => ({
        ...f,
        index: y,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= o.length ? r = o.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = o.slice(0, -1).map((f, y) => ({
        id: `auto-break-${y}`,
        pageNumber: y + 1
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
        it(n);
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
        const s = r.substring(0, n), f = r.substring(n);
        r = s + o + f;
      } else if (typeof i == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = r;
        const f = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (i === 0 && f.length === 0)
          r = r + o + "<p><br></p>";
        else if (i < f.length) {
          const y = f[i], g = document.createElement("page-break");
          g.setAttribute("data-page-break", "true"), g.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const h = document.createElement("p");
          h.innerHTML = "<br>", y.parentNode.insertBefore(g, y.nextSibling), g.parentNode.insertBefore(h, g.nextSibling), r = s.innerHTML;
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
      return o[n] && o[n].remove(), i.querySelectorAll('page-break, [data-page-break="true"]').forEach((s, f) => {
        s.setAttribute("data-page-number", String(f + 2));
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
`) || me : e.continuousContent && e.continuousContent !== me && (o = [{ ...Te(0, e.pageSize), content: e.continuousContent }]), {
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
      const n = e.zoomLevel + xt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: a
      };
    }
    case z.ZOOM_OUT: {
      if (!Qe(e.zoomLevel))
        return e;
      const n = e.zoomLevel - xt;
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
}, Gt = pn(null), Bo = ({ children: e, initialState: t = {} }) => {
  const [a, n] = gn(tt, et(t)), i = Le(() => ({
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
  }), []), o = Le(() => ({
    state: a,
    actions: i,
    dispatch: n
  }), [a, i]);
  return /* @__PURE__ */ l.jsx(Gt.Provider, { value: o, children: e });
}, Ut = () => {
  const e = fn(Gt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Ft = () => {
  const { state: e } = Ut();
  return e;
}, Pe = () => {
  const { actions: e } = Ut();
  return e;
};
var Ce = { exports: {} }, Ne = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function On() {
  if (vt) return Q;
  vt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function P(u) {
    if (typeof u == "object" && u !== null) {
      var w = u.$$typeof;
      switch (w) {
        case t:
          switch (u = u.type, u) {
            case f:
            case y:
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
                case S:
                case r:
                  return u;
                default:
                  return w;
              }
          }
        case a:
          return w;
      }
    }
  }
  function v(u) {
    return P(u) === y;
  }
  return Q.AsyncMode = f, Q.ConcurrentMode = y, Q.ContextConsumer = s, Q.ContextProvider = r, Q.Element = t, Q.ForwardRef = g, Q.Fragment = n, Q.Lazy = R, Q.Memo = S, Q.Portal = a, Q.Profiler = o, Q.StrictMode = i, Q.Suspense = h, Q.isAsyncMode = function(u) {
    return v(u) || P(u) === f;
  }, Q.isConcurrentMode = v, Q.isContextConsumer = function(u) {
    return P(u) === s;
  }, Q.isContextProvider = function(u) {
    return P(u) === r;
  }, Q.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, Q.isForwardRef = function(u) {
    return P(u) === g;
  }, Q.isFragment = function(u) {
    return P(u) === n;
  }, Q.isLazy = function(u) {
    return P(u) === R;
  }, Q.isMemo = function(u) {
    return P(u) === S;
  }, Q.isPortal = function(u) {
    return P(u) === a;
  }, Q.isProfiler = function(u) {
    return P(u) === o;
  }, Q.isStrictMode = function(u) {
    return P(u) === i;
  }, Q.isSuspense = function(u) {
    return P(u) === h;
  }, Q.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === y || u === o || u === i || u === h || u === p || typeof u == "object" && u !== null && (u.$$typeof === R || u.$$typeof === S || u.$$typeof === r || u.$$typeof === s || u.$$typeof === g || u.$$typeof === b || u.$$typeof === M || u.$$typeof === I || u.$$typeof === d);
  }, Q.typeOf = P, Q;
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
var Tt;
function wn() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function P(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === y || O === o || O === i || O === h || O === p || typeof O == "object" && O !== null && (O.$$typeof === R || O.$$typeof === S || O.$$typeof === r || O.$$typeof === s || O.$$typeof === g || O.$$typeof === b || O.$$typeof === M || O.$$typeof === I || O.$$typeof === d);
    }
    function v(O) {
      if (typeof O == "object" && O !== null) {
        var se = O.$$typeof;
        switch (se) {
          case t:
            var he = O.type;
            switch (he) {
              case f:
              case y:
              case n:
              case o:
              case i:
              case h:
                return he;
              default:
                var ke = he && he.$$typeof;
                switch (ke) {
                  case s:
                  case g:
                  case R:
                  case S:
                  case r:
                    return ke;
                  default:
                    return se;
                }
            }
          case a:
            return se;
        }
      }
    }
    var u = f, w = y, m = s, _ = r, L = t, k = g, F = n, V = R, K = S, B = a, re = o, X = i, G = h, U = !1;
    function oe(O) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(O) || v(O) === f;
    }
    function E(O) {
      return v(O) === y;
    }
    function c(O) {
      return v(O) === s;
    }
    function T(O) {
      return v(O) === r;
    }
    function N(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function C(O) {
      return v(O) === g;
    }
    function H(O) {
      return v(O) === n;
    }
    function $(O) {
      return v(O) === R;
    }
    function j(O) {
      return v(O) === S;
    }
    function W(O) {
      return v(O) === a;
    }
    function Z(O) {
      return v(O) === o;
    }
    function Y(O) {
      return v(O) === i;
    }
    function ie(O) {
      return v(O) === h;
    }
    ee.AsyncMode = u, ee.ConcurrentMode = w, ee.ContextConsumer = m, ee.ContextProvider = _, ee.Element = L, ee.ForwardRef = k, ee.Fragment = F, ee.Lazy = V, ee.Memo = K, ee.Portal = B, ee.Profiler = re, ee.StrictMode = X, ee.Suspense = G, ee.isAsyncMode = oe, ee.isConcurrentMode = E, ee.isContextConsumer = c, ee.isContextProvider = T, ee.isElement = N, ee.isForwardRef = C, ee.isFragment = H, ee.isLazy = $, ee.isMemo = j, ee.isPortal = W, ee.isProfiler = Z, ee.isStrictMode = Y, ee.isSuspense = ie, ee.isValidElementType = P, ee.typeOf = v;
  })()), ee;
}
var At;
function Wt() {
  return At || (At = 1, process.env.NODE_ENV === "production" ? Ne.exports = On() : Ne.exports = wn()), Ne.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, Pt;
function Sn() {
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
      var f = Object.getOwnPropertyNames(r).map(function(g) {
        return r[g];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        y[g] = g;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = i() ? Object.assign : function(o, r) {
    for (var s, f = n(o), y, g = 1; g < arguments.length; g++) {
      s = Object(arguments[g]);
      for (var h in s)
        t.call(s, h) && (f[h] = s[h]);
      if (e) {
        y = e(s);
        for (var p = 0; p < y.length; p++)
          a.call(s, y[p]) && (f[y[p]] = s[y[p]]);
      }
    }
    return f;
  }, Ge;
}
var Ue, _t;
function st() {
  if (_t) return Ue;
  _t = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ue = e, Ue;
}
var Fe, kt;
function qt() {
  return kt || (kt = 1, Fe = Function.call.bind(Object.prototype.hasOwnProperty)), Fe;
}
var We, Rt;
function Mn() {
  if (Rt) return We;
  Rt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ st(), a = {}, n = /* @__PURE__ */ qt();
    e = function(o) {
      var r = "Warning: " + o;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function i(o, r, s, f, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in o)
        if (n(o, g)) {
          var h;
          try {
            if (typeof o[g] != "function") {
              var p = Error(
                (f || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            h = o[g](r, g, f, s, null, t);
          } catch (R) {
            h = R;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in a)) {
            a[h.message] = !0;
            var S = y ? y() : "";
            e(
              "Failed " + s + " type: " + h.message + (S ?? "")
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
function Cn() {
  if (Ot) return qe;
  Ot = 1;
  var e = Wt(), t = Sn(), a = /* @__PURE__ */ st(), n = /* @__PURE__ */ qt(), i = /* @__PURE__ */ Mn(), o = function() {
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
    var y = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function h(E) {
      var c = E && (y && E[y] || E[g]);
      if (typeof c == "function")
        return c;
    }
    var p = "<<anonymous>>", S = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: I(),
      arrayOf: P,
      element: v(),
      elementType: u(),
      instanceOf: w,
      node: k(),
      objectOf: _,
      oneOf: m,
      oneOfType: L,
      shape: V,
      exact: K
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
        var c = {}, T = 0;
      function N(H, $, j, W, Z, Y, ie) {
        if (W = W || p, Y = Y || j, ie !== a) {
          if (f) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = W + ":" + j;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, T++);
          }
        }
        return $[j] == null ? H ? $[j] === null ? new d("The " + Z + " `" + Y + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new d("The " + Z + " `" + Y + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : E($, j, W, Z, Y);
      }
      var C = N.bind(null, !1);
      return C.isRequired = N.bind(null, !0), C;
    }
    function M(E) {
      function c(T, N, C, H, $, j) {
        var W = T[N], Z = X(W);
        if (Z !== E) {
          var Y = G(W);
          return new d(
            "Invalid " + H + " `" + $ + "` of type " + ("`" + Y + "` supplied to `" + C + "`, expected ") + ("`" + E + "`."),
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
    function P(E) {
      function c(T, N, C, H, $) {
        if (typeof E != "function")
          return new d("Property `" + $ + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var j = T[N];
        if (!Array.isArray(j)) {
          var W = X(j);
          return new d("Invalid " + H + " `" + $ + "` of type " + ("`" + W + "` supplied to `" + C + "`, expected an array."));
        }
        for (var Z = 0; Z < j.length; Z++) {
          var Y = E(j, Z, C, H, $ + "[" + Z + "]", a);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(c);
    }
    function v() {
      function E(c, T, N, C, H) {
        var $ = c[T];
        if (!s($)) {
          var j = X($);
          return new d("Invalid " + C + " `" + H + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function u() {
      function E(c, T, N, C, H) {
        var $ = c[T];
        if (!e.isValidElementType($)) {
          var j = X($);
          return new d("Invalid " + C + " `" + H + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function w(E) {
      function c(T, N, C, H, $) {
        if (!(T[N] instanceof E)) {
          var j = E.name || p, W = oe(T[N]);
          return new d("Invalid " + H + " `" + $ + "` of type " + ("`" + W + "` supplied to `" + C + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return b(c);
    }
    function m(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(T, N, C, H, $) {
        for (var j = T[N], W = 0; W < E.length; W++)
          if (R(j, E[W]))
            return null;
        var Z = JSON.stringify(E, function(ie, O) {
          var se = G(O);
          return se === "symbol" ? String(O) : O;
        });
        return new d("Invalid " + H + " `" + $ + "` of value `" + String(j) + "` " + ("supplied to `" + C + "`, expected one of " + Z + "."));
      }
      return b(c);
    }
    function _(E) {
      function c(T, N, C, H, $) {
        if (typeof E != "function")
          return new d("Property `" + $ + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var j = T[N], W = X(j);
        if (W !== "object")
          return new d("Invalid " + H + " `" + $ + "` of type " + ("`" + W + "` supplied to `" + C + "`, expected an object."));
        for (var Z in j)
          if (n(j, Z)) {
            var Y = E(j, Z, C, H, $ + "." + Z, a);
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
        var T = E[c];
        if (typeof T != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(T) + " at index " + c + "."
          ), r;
      }
      function N(C, H, $, j, W) {
        for (var Z = [], Y = 0; Y < E.length; Y++) {
          var ie = E[Y], O = ie(C, H, $, j, W, a);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && Z.push(O.data.expectedType);
        }
        var se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new d("Invalid " + j + " `" + W + "` supplied to " + ("`" + $ + "`" + se + "."));
      }
      return b(N);
    }
    function k() {
      function E(c, T, N, C, H) {
        return B(c[T]) ? null : new d("Invalid " + C + " `" + H + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function F(E, c, T, N, C) {
      return new d(
        (E || "React class") + ": " + c + " type `" + T + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function V(E) {
      function c(T, N, C, H, $) {
        var j = T[N], W = X(j);
        if (W !== "object")
          return new d("Invalid " + H + " `" + $ + "` of type `" + W + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var Z in E) {
          var Y = E[Z];
          if (typeof Y != "function")
            return F(C, H, $, Z, G(Y));
          var ie = Y(j, Z, C, H, $ + "." + Z, a);
          if (ie)
            return ie;
        }
        return null;
      }
      return b(c);
    }
    function K(E) {
      function c(T, N, C, H, $) {
        var j = T[N], W = X(j);
        if (W !== "object")
          return new d("Invalid " + H + " `" + $ + "` of type `" + W + "` " + ("supplied to `" + C + "`, expected `object`."));
        var Z = t({}, T[N], E);
        for (var Y in Z) {
          var ie = E[Y];
          if (n(E, Y) && typeof ie != "function")
            return F(C, H, $, Y, G(ie));
          if (!ie)
            return new d(
              "Invalid " + H + " `" + $ + "` key `" + Y + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(T[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var O = ie(j, Y, C, H, $ + "." + Y, a);
          if (O)
            return O;
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
            var T = c.call(E), N;
            if (c !== E.entries) {
              for (; !(N = T.next()).done; )
                if (!B(N.value))
                  return !1;
            } else
              for (; !(N = T.next()).done; ) {
                var C = N.value;
                if (C && !B(C[1]))
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
    function X(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : re(c, E) ? "symbol" : c;
    }
    function G(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var c = X(E);
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
    function oe(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return S.checkPropTypes = i, S.resetWarningCache = i.resetWarningCache, S.PropTypes = S, S;
  }, qe;
}
var Ze, wt;
function Nn() {
  if (wt) return Ze;
  wt = 1;
  var e = /* @__PURE__ */ st();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, Ze = function() {
    function n(r, s, f, y, g, h) {
      if (h !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
var St;
function In() {
  if (St) return Ce.exports;
  if (St = 1, process.env.NODE_ENV !== "production") {
    var e = Wt(), t = !0;
    Ce.exports = /* @__PURE__ */ Cn()(e.isElement, t);
  } else
    Ce.exports = /* @__PURE__ */ Nn()();
  return Ce.exports;
}
var jn = /* @__PURE__ */ In();
const x = /* @__PURE__ */ bn(jn), Zt = {
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
}, Ln = [
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
], ct = "16px", Dn = (e) => Math.round(e * 96 / 72), zn = (e) => Math.round(e * 72 / 96 * 2) / 2, Ho = (e) => {
  const t = Object.values(Zt).find((a) => a.pt === e);
  return t ? `${t.px}px` : `${Dn(e)}px`;
}, Go = (e) => {
  const t = parseInt(e), a = Object.values(Zt).find((n) => n.px === t);
  return a ? a.pt : zn(t);
}, Uo = (e) => {
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
function Fo({
  handler: e,
  startX: t,
  startY: a,
  currentX: n,
  currentY: i,
  startWidth: o,
  startHeight: r,
  options: s = ge
}) {
  const f = n - t, y = i - a;
  let g = o, h = r;
  switch (e) {
    case A.TOP_LEFT:
      g = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r - y);
      break;
    case A.TOP_RIGHT:
      g = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r - y);
      break;
    case A.BOTTOM_LEFT:
      g = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r + y);
      break;
    case A.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r + y);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - y);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + y);
      break;
    case A.LEFT:
      g = Math.max(s.minWidth, o - f);
      break;
    case A.RIGHT:
      g = Math.max(s.minWidth, o + f);
      break;
    default:
      return { width: g, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const p = o / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? g / p > h ? h = Math.max(s.minHeight, g / p) : g = Math.max(s.minWidth, h * p) : [A.TOP, A.BOTTOM].includes(e) ? g = h * p : [A.LEFT, A.RIGHT].includes(e) && (h = g / p);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = g / (o / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = h * (o / r))), g = Math.max(s.minWidth, g), h = Math.max(s.minHeight, h), {
    width: Math.round(g),
    height: Math.round(h)
  };
}
function pe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Wo(e) {
  return pe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function qo(e, { width: t, height: a }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
function Yt(e, t = ge) {
  if (!pe(e)) return null;
  const a = document.createElement("div");
  a.className = "image-resize-overlay", a.style.position = "fixed", a.style.zIndex = "1000", a.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return a.style.top = `${n.top}px`, a.style.left = `${n.left}px`, a.style.width = `${n.width}px`, a.style.height = `${n.height}px`, Object.values(A).forEach((o) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${o}`, r.dataset.handler = o, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = $n(o), r.style.pointerEvents = "all", Vt(r, o, n.width, n.height), a.appendChild(r);
  }), a;
}
function $n(e) {
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
function Vt(e, t, a, n) {
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
    Vt(i, o, a.width, a.height);
  });
}
function ye(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const Bn = {
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
}, Mt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: ct,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Hn = () => {
  const [e, t] = le(Mt), a = Pe(), n = q((d) => {
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
        return t((P) => ({ ...P, fontFamily: d })), !1;
      try {
        const P = document.createElement("span");
        P.style.fontFamily = d;
        const v = M.extractContents();
        return P.appendChild(v), M.insertNode(P), M.selectNodeContents(P), b.removeAllRanges(), b.addRange(M), t((u) => ({ ...u, fontFamily: d })), !0;
      } catch {
        return document.execCommand("fontName", !1, d), t((v) => ({ ...v, fontFamily: d })), !0;
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
        return t((P) => ({ ...P, fontSize: d })), !1;
      try {
        const P = document.createElement("span");
        P.style.fontSize = d;
        const v = M.extractContents();
        return P.appendChild(v), M.insertNode(P), M.selectNodeContents(P), b.removeAllRanges(), b.addRange(M), t((u) => ({ ...u, fontSize: d })), !0;
      } catch {
        const v = Bn[d] || "3";
        return document.execCommand("fontSize", !1, v), t((u) => ({ ...u, fontSize: d })), !0;
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
  }, [o, i, n, a]), s = te(null), f = te(null), y = te(null), g = te(null), h = te(ge);
  q((d) => {
    if (!pe(d)) return;
    s.current && (ye(s.current), s.current = null), d.classList.add("selected");
    const b = Yt(d);
    b && (s.current = b, f.current = d, document.body.appendChild(b), t((M) => ({
      ...M,
      imageSelected: !0,
      preserveAspectRatio: h.current.preserveAspectRatio
    })));
  }, []);
  const p = q(() => {
    f.current && (f.current.classList.remove("selected"), f.current = null), s.current && (ye(s.current), s.current = null), y.current = null, g.current = null, t((d) => ({
      ...d,
      imageSelected: !1
    }));
  }, []), S = q(() => {
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
    f.current && (y.current = {
      x: b,
      y: M,
      width: f.current.offsetWidth,
      height: f.current.offsetHeight
    }, g.current = d, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Gn(d));
  }, []), q((d, b) => {
    if (!f.current || !y.current || !g.current) return;
    const { x: M, y: I, width: P, height: v } = y.current, u = g.current, w = Un({
      handler: u,
      startX: M,
      startY: I,
      currentX: d,
      currentY: b,
      startWidth: P,
      startHeight: v,
      options: h.current
    });
    Fn(f.current, w), s.current && nt(s.current, f.current);
  }, []), q(() => {
    if (y.current = null, g.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", f.current) {
      const d = new Event("input", { bubbles: !0, cancelable: !0 });
      f.current.dispatchEvent(d);
    }
  }, []);
  const R = q(() => {
    p(), t(Mt);
  }, [p]);
  return ae(() => () => {
    s.current && ye(s.current);
  }, []), {
    currentFormat: e,
    formatText: r,
    resetFormat: R,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: S
  };
};
function Gn(e) {
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
function Un({
  handler: e,
  startX: t,
  startY: a,
  currentX: n,
  currentY: i,
  startWidth: o,
  startHeight: r,
  options: s = ge
}) {
  const f = n - t, y = i - a;
  let g = o, h = r;
  switch (e) {
    case A.TOP_LEFT:
      g = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r - y);
      break;
    case A.TOP_RIGHT:
      g = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r - y);
      break;
    case A.BOTTOM_LEFT:
      g = Math.max(s.minWidth, o - f), h = Math.max(s.minHeight, r + y);
      break;
    case A.BOTTOM_RIGHT:
      g = Math.max(s.minWidth, o + f), h = Math.max(s.minHeight, r + y);
      break;
    case A.TOP:
      h = Math.max(s.minHeight, r - y);
      break;
    case A.BOTTOM:
      h = Math.max(s.minHeight, r + y);
      break;
    case A.LEFT:
      g = Math.max(s.minWidth, o - f);
      break;
    case A.RIGHT:
      g = Math.max(s.minWidth, o + f);
      break;
    default:
      return { width: g, height: h };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const p = o / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? g / p > h ? h = Math.max(s.minHeight, g / p) : g = Math.max(s.minWidth, h * p) : [A.TOP, A.BOTTOM].includes(e) ? g = h * p : [A.LEFT, A.RIGHT].includes(e) && (h = g / p);
  }
  return s.maxWidth && g > s.maxWidth && (g = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (h = g / (o / r))), s.maxHeight && h > s.maxHeight && (h = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (g = h * (o / r))), g = Math.max(s.minWidth, g), h = Math.max(s.minHeight, h), {
    width: Math.round(g),
    height: Math.round(h)
  };
}
function Fn(e, { width: t, height: a }) {
  pe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${a}px`, e.width = t, e.height = a) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${a}px`));
}
const be = 'page-break, [data-page-break="true"]', Kt = (e) => ce[e] || ce.A4, Wn = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const a = t.pageSize || "A4", n = Kt(a), i = e.querySelectorAll(be), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((f, y) => {
    const h = f.getBoundingClientRect().top - r.top + s;
    o.push({
      id: `page-${y + 1}`,
      pageNumber: y + 2,
      top: h,
      height: n.height
    });
  }), o;
}, Xt = (e, t = 100, a = fe) => {
  const n = Kt(e), i = An(a), o = n.height - i, r = t / 100;
  return o / r;
}, qn = (e, t) => {
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
}, Zn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Yn = (e, t) => {
  if (!e)
    return !1;
  try {
    const a = document.createElement("page-break");
    return a.setAttribute("data-page-break", "true"), a.setAttribute("contenteditable", "false"), a.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(a, e), !0;
  } catch (a) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", a), !1;
  }
}, Vn = (e, t, a, n, i, o, r) => {
  if (!e)
    return !1;
  try {
    const f = Xt(a, n, i) * (t - 1), y = Array.from(e.children);
    let g = 0, h = null;
    for (let p = 0; p < y.length; p++) {
      const S = y[p];
      if (S.tagName === "PAGE-BREAK" || S.getAttribute("data-page-break") === "true")
        continue;
      const R = Zn(S);
      if (g + R > f) {
        h = S;
        break;
      }
      g += R;
    }
    if (h) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), h.parentNode.insertBefore(p, h), o) {
        const S = e.innerHTML;
        o(S);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const S = document.createElement("p");
      if (S.innerHTML = "<br>", e.appendChild(S), o) {
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
}, Kn = (e, t, a, n, i, o, r) => {
  if (!e)
    return !1;
  if (a().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const f = Array.from(e.querySelectorAll(be));
    if (t > f.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const y = window.getSelection();
    let g = !1, h = [], p = null;
    if (t === 0) {
      const R = f[0];
      if (!R)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let d = e.firstChild;
      for (; d && d !== R; )
        h.push(d), d = d.nextSibling;
      p = R;
    } else {
      const R = f[t - 1];
      if (!R)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const d = f[t];
      let b = R.nextSibling;
      for (; b && b !== d; )
        h.push(b), b = b.nextSibling;
      p = R;
    }
    if (y && y.rangeCount > 0) {
      const d = y.getRangeAt(0).startContainer;
      for (const b of h)
        if (b.contains(d) || b === d) {
          g = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), h.forEach((R) => {
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
  } catch (f) {
    return console.error("[removePageAndContent] Failed to remove page:", f), !1;
  }
}, Xn = 200, Jn = 50, Nt = 3, Qn = 20, Jt = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, er = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let a = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (!o || !o.getBoundingClientRect)
      continue;
    const r = Jt(o);
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
}, tr = (e, t, a, n, i, o, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const f = Xt(t, a, n);
    let y = Ct(e), g = !1, h = 0;
    for (let p = 0; p < y.length && h < Nt; p++) {
      const S = y[p], R = er(S, f);
      if (R && R.overflowIndex > 0) {
        let d = 0;
        for (let P = 0; P < S.length; P++) {
          const v = S[P];
          v && v.getBoundingClientRect && (d += Jt(v));
        }
        if (d - f < Qn)
          continue;
        const M = p + 2;
        Yn(R.overflowElement, M) && (g = !0, h++, y = Ct(e));
      }
    }
    if (g) {
      if (i) {
        const p = e.innerHTML;
        i(p);
      }
      setTimeout(() => {
        o && o(), h >= Nt && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, Jn);
    }
    return g;
  } catch (f) {
    return console.warn("[checkAndReflow] Reflow failed:", f), !1;
  } finally {
    r.current = !1;
  }
}, nr = (e, t, a = Xn) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, a);
}, rr = 400, Qt = (e, t) => {
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
}, or = (e, t, a, n) => {
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
        n ? n(a) : Qt(t, a);
      }, rr);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, ar = (e, t, a = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(a);
  }, Math.max(0, n));
}, ir = 300, sr = (e, t, a = 100, n = "NARROW") => {
  const i = Pe(), o = te(null), r = te(null), s = te(e), f = te(a), y = te(n), g = te(!1);
  ae(() => {
    s.current = e;
  }, [e]), ae(() => {
    f.current = a;
  }, [a]), ae(() => {
    y.current = n;
  }, [n]), ae(() => () => {
    o.current && clearTimeout(o.current), r.current && clearTimeout(r.current);
  }, []);
  const h = q((u = {}) => t?.current ? Wn(t.current, u) : [], [t]), p = q((u = {}) => {
    const w = h(u);
    return i.updatePageBoundaries(w), w;
  }, [h, i]), S = q(async (u) => {
    if (!t?.current)
      return !1;
    const w = s.current || "A4", m = f.current || 100, _ = y.current || "NARROW";
    return Vn(
      t.current,
      u,
      w,
      m,
      _,
      i.updateContinuousContent,
      p
    );
  }, [t, i, p]), R = q(() => {
    if (!t?.current)
      return;
    const u = s.current || "A4", w = f.current || 100, m = y.current || "NARROW";
    tr(
      t.current,
      u,
      w,
      m,
      i.updateContinuousContent,
      p,
      g,
      R
    );
  }, [t, i, p]), d = q((u) => {
    nr(R, r, u);
  }, [R]), b = q((u = {}) => {
    const w = typeof u.delay == "number" ? u.delay : ir;
    ar(p, o, u, w);
  }, [p]), M = q((u) => !u?.current || !t?.current ? 0 : qn(u.current, t.current), [t]), I = q((u) => {
    t?.current && Qt(t.current, u);
  }, [t]), P = q((u, w) => {
    if (!w?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    or(w.current, t.current, u, I);
  }, [t, I]), v = q((u) => t?.current ? Kn(
    t.current,
    u,
    h,
    i.updateContinuousContent,
    p,
    I,
    R
  ) : !1, [t, h, i, p, I, R]);
  return {
    calculatePageBoundaries: h,
    checkAndUpdateBoundaries: b,
    updateBoundaries: p,
    getCurrentPage: M,
    scrollToPage: P,
    positionCursorAtPage: I,
    checkAndReflow: R,
    triggerAutoReflow: d,
    removePageAndContent: v,
    insertPageBreakAtBoundary: S,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: r
  };
}, cr = "html-editor-storage", lr = 1, ue = "images";
function ur() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function _e() {
  return new Promise((e, t) => {
    const a = indexedDB.open(cr, lr);
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
function dr(e) {
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
        const y = await _e(), g = `editor-image-${ur()}`, p = y.transaction([ue], "readwrite").objectStore(ue), S = {
          key: g,
          dataUrl: r,
          size: f,
          type: e.type,
          timestamp: Date.now()
        }, R = p.add(S);
        R.onsuccess = () => {
          y.close(), t(g);
        }, R.onerror = () => {
          y.close(), a(new Error("Failed to save image to IndexedDB"));
        };
      } catch (y) {
        a(y);
      }
    }, i.onerror = () => {
      a(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function pr(e) {
  try {
    const t = await _e();
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
async function fr(e) {
  try {
    const t = await _e();
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
async function Zo() {
  try {
    const e = await _e();
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
async function Yo() {
  try {
    const e = await _e();
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
function gr(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function It(e) {
  const t = [];
  for (let a = 0; a < e.attributes.length; a++) {
    const n = e.attributes[a];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function hr(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const a = document.createElement("div");
  return a.innerHTML = t, je(a);
}
function je(e) {
  const t = [], a = Array.from(e.childNodes);
  for (let n = 0; n < a.length; n++) {
    const i = a[n];
    if (i.nodeType === Node.TEXT_NODE) {
      const o = i.textContent.trim();
      o && t.push(`<p>${gr(o)}</p>`);
    } else if (i.nodeType === Node.ELEMENT_NODE) {
      const o = i;
      if (o.tagName === "DIV") {
        const r = je(o);
        r.trim() ? t.push(r) : t.push("<p><br></p>");
      } else if (o.tagName === "P")
        t.push(o.outerHTML);
      else if (o.tagName === "BR")
        t.push("<p><br></p>");
      else if (["SPAN", "STRONG", "EM", "B", "I", "U", "A"].includes(o.tagName)) {
        const r = je(o), s = o.tagName.toLowerCase(), f = It(o);
        t.push(`<${s}${f}>${r}</${s}>`);
      } else if (o.tagName === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else {
        const r = je(o), s = o.tagName.toLowerCase(), f = It(o);
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
const mr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), jt = (e) => {
  const t = yr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, en = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), br = (e) => {
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
var Er = {
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
const xr = ot(
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
      ...Er,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(a) * 24 / Number(t) : a,
      className: en("lucide", i),
      ...!o && !br(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([y, g]) => Ye(y, g)),
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
const J = (e, t) => {
  const a = ot(
    ({ className: n, ...i }, o) => Ye(xr, {
      ref: o,
      iconNode: t,
      className: en(
        `lucide-${mr(jt(e))}`,
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
const vr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Tr = J("bold", vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Pr = J("chevron-left", Ar);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], kr = J("chevron-right", _r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Or = J("file-check", Rr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ze = J("file-text", wr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Mr = J("hash", Sr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Nr = J("heading-1", Cr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], jr = J("heading-2", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Dr = J("heading-3", Lr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], $r = J("image-upscale", zr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Hr = J("image", Br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Ur = J("italic", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Wr = J("link", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Zr = J("list-ordered", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], tn = J("list", Yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Kr = J("plus", Vr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Jr = J("redo", Xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], eo = J("scaling", Qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], no = J("settings", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], oo = J("strikethrough", ro);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], io = J("table", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], nn = J("text-align-center", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], rn = J("text-align-end", co);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], uo = J("text-align-justify", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], on = J("text-align-start", po);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], go = J("trash-2", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], mo = J("underline", ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], bo = J("undo", yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xo = J("x", Eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], To = J("zoom-in", vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Po = J("zoom-out", Ao), _o = ({ editorView: e, isCollapsed: t, onToggle: a, wordCount: n, pageCount: i }) => {
  const o = Ft(), { pages: r, activePage: s, continuousContent: f, editorMode: y } = o, [g, h] = le(0), [p, S] = le([]);
  ae(() => {
    if (n !== void 0 && i !== void 0) {
      if (h(n), f) {
        const M = document.createElement("div");
        M.innerHTML = f;
        const I = M.querySelectorAll("h1, h2, h3, h4, h5, h6"), P = Array.from(I).map((v, u) => {
          const w = parseInt(v.tagName.charAt(1)), m = v.textContent.trim();
          return m ? {
            id: `heading-${u}`,
            level: w,
            text: m,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        S(P);
      }
      return;
    }
    let d = 0;
    const b = [];
    r.forEach((M, I) => {
      if (M.content) {
        const P = document.createElement("div");
        P.innerHTML = M.content;
        const u = (P.textContent || P.innerText || "").trim().split(/\s+/).filter((m) => m.length > 0);
        d += u.length, P.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((m, _) => {
          const L = parseInt(m.tagName.charAt(1)), k = m.textContent.trim();
          k && b.push({
            id: `heading-${I}-${_}`,
            level: L,
            text: k,
            page: I + 1
          });
        });
      }
    }), h(d), S(b);
  }, [r, n, i, f]);
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
              children: t ? /* @__PURE__ */ l.jsx(kr, { size: 16 }) : /* @__PURE__ */ l.jsx(Pr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Or, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: R })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Mr, { size: 14 }),
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
          p.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(tn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: p.map((d) => {
              const b = d.level === 1 ? Nr : d.level === 2 ? jr : Dr;
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
class ko {
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
const Lt = new ko("Editor"), lt = ({
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
      const f = await dr(r), y = await pr(f);
      if (y) {
        const h = `<img src="${y}" data-key="${f}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, h), Lt.info("Image inserted", { key: f });
      }
      const g = document.getElementById("image-upload");
      g && (g.value = "");
    } catch (s) {
      Lt.error("Error uploading image", s);
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
        children: /* @__PURE__ */ l.jsx(bo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(Jr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(Tr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(Ur, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(mo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(oo, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(rn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(uo, { size: 16 })
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
        defaultValue: ct,
        title: "Font Size",
        children: Ln.map(({ value: r, label: s }) => /* @__PURE__ */ l.jsx("option", { value: r, children: s }, r))
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
        children: /* @__PURE__ */ l.jsx(tn, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(Zr, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(Wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(io, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(Hr, { size: 16 })
      }
    )
  ] });
};
lt.propTypes = {
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
lt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function Ro(e) {
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
            s.trim() && t.push(`<p>${rt(s.trim())}</p>`);
          }) : t.push("<p><br></p>");
        } else
          t.push(`<p>${rt(o)}</p>`);
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
        const r = ve(o), s = o.tagName.toLowerCase(), f = Dt(o);
        t.push(`<${s}${f}>${r}</${s}>`);
      } else {
        const r = ve(o), s = o.tagName.toLowerCase(), f = Dt(o);
        t.push(`<${s}${f}>${r}</${s}>`);
      }
    }
  }
  return t.join("");
}
function Dt(e) {
  const t = [];
  for (let a = 0; a < e.attributes.length; a++) {
    const n = e.attributes[a];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function rt(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Oo(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let a = t.getData("text/html") || t.getData("text/plain");
  return a ? (t.getData("text/html") ? a = Ro(a) : a = wo(a), document.execCommand("insertHTML", !1, a), a) : null;
}
function wo(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((a) => a.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((a) => {
    const n = a.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => rt(o.trim())).join("<br>")}</p>`;
  }).join("");
}
const ut = ({
  content: e,
  dimensions: t,
  pageSize: a,
  pageBoundaries: n = [],
  editorRef: i,
  onInput: o,
  onKeyDown: r,
  onClick: s,
  onScroll: f,
  onPaste: y,
  zoomLevel: g = 100,
  pageMargins: h = fe
}) => {
  const p = $t(h), S = g / 100, R = (v, u) => {
    if (!v) return !1;
    const w = v.getBoundingClientRect(), m = u - w.top;
    return m < p.top || m > w.height - p.bottom;
  }, d = (v) => v ? v.nodeType === Node.ELEMENT_NODE ? v.tagName === "PAGE-BREAK" || v.getAttribute("data-page-break") === "true" : v.parentElement && d(v.parentElement) : !1, b = (v) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const w = u.getRangeAt(0), { startContainer: m, endContainer: _ } = w;
    if ((d(m) || d(_)) && (v.key.length === 1 || v.key === "Enter" || v.key === " "))
      return v.preventDefault(), !1;
    if (v.key === "Tab")
      return v.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((v.key === "Backspace" || v.key === "Delete") && (d(m) || d(_)))
      return v.preventDefault(), !1;
    r && r(v);
  }, M = (v) => {
    if (!i.current) return;
    const u = v.target;
    if (d(u)) {
      v.preventDefault();
      return;
    }
    if (R(i.current, v.clientY)) {
      v.preventDefault();
      const w = i.current.getBoundingClientRect();
      if (v.clientY - w.top < p.top) {
        const _ = i.current.firstElementChild;
        if (_ && _.tagName !== "PAGE-BREAK") {
          const L = document.createRange(), k = window.getSelection();
          L.setStart(_, 0), L.collapse(!0), k.removeAllRanges(), k.addRange(L);
        }
      } else {
        const _ = i.current.lastElementChild;
        if (_ && _.tagName !== "PAGE-BREAK") {
          const L = document.createRange(), k = window.getSelection();
          L.selectNodeContents(_), L.collapse(!1), k.removeAllRanges(), k.addRange(L);
        }
      }
      return;
    }
    s && s(v);
  }, I = (v) => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return;
    const w = u.getRangeAt(0), { startContainer: m } = w;
    if (d(m))
      return v.preventDefault(), !1;
  }, P = (v) => {
    const u = Oo(v);
    y && y(v, u);
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
        transform: `scale(${S})`,
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
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: ct,
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
          onScroll: f,
          onPaste: P,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
ut.propTypes = {
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
ut.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  zoomLevel: 100,
  pageMargins: fe
};
const dt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: a = "A4",
  pageMargins: n = fe,
  zoomLevel: i = 100,
  canZoomIn: o = !0,
  canZoomOut: r = !0,
  onNavigate: s,
  onAddPage: f,
  onDeletePage: y,
  onPageSizeChange: g,
  onPageMarginsChange: h,
  onZoomIn: p,
  onZoomOut: S,
  onZoomReset: R
} = {}) => {
  const d = Math.max(e?.length || 0, 1), b = (u) => {
    s && s(u);
  }, M = () => {
    f && f();
  }, I = (u) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    y && y(u);
  }, P = (u) => {
    g && g(u);
  }, v = (u) => {
    h && h(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(no, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (u) => P(u.target.value),
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
              onChange: (u) => v(u.target.value),
              children: Pn().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: _n(u) }, u))
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
          onClick: S,
          disabled: !r,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ l.jsx(Po, { size: 12 })
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
          onClick: p,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ l.jsx(To, { size: 12 })
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
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, w) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${w === t ? "active" : ""}`,
          onClick: () => b(w),
          "aria-label": `Go to page ${w + 1}`,
          "aria-current": w === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(ze, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              w + 1
            ] })
          ]
        }
      ),
      d > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (m) => {
            m.stopPropagation(), I(w);
          },
          "aria-label": `Delete page ${w + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(xo, { size: 14 })
        }
      )
    ] }, u.id || `page-${w}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: M,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(Kr, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
dt.propTypes = {
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
dt.defaultProps = {
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
const So = $e.memo(dt), pt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: a,
  onImageDeselect: n,
  resizeOptions: i = ge
}) => {
  const o = te(null), r = te(null), s = te(null), f = te(null), y = te(i), g = te(!1), h = Pe();
  ae(() => {
    y.current = i;
  }, [i]);
  const p = q((m) => {
    if (!pe(m)) return;
    o.current && (ye(o.current), o.current = null), m.classList.add("selected");
    const _ = Yt(m, y.current);
    _ && (o.current = _, r.current = m, document.body.appendChild(_), _.querySelectorAll(".resize-handler").forEach((k) => {
      k.addEventListener("mousedown", R);
    }), a && (console.log("Image selected, calling onImageSelect callback"), a(m)));
  }, [a]), S = q(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), o.current && (ye(o.current), o.current = null), s.current = null, f.current = null, g.current = !1, n && n();
  }, [n]), R = q((m) => {
    if (m.preventDefault(), m.stopPropagation(), !r.current) return;
    const _ = m.currentTarget.dataset.handler, L = r.current.getBoundingClientRect(), k = window.pageYOffset || document.documentElement.scrollTop, F = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: m.clientX,
      y: m.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: m.clientX - L.left - F,
      offsetY: m.clientY - L.top - k
    }, f.current = _, g.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = v(_), document.addEventListener("mousemove", d), document.addEventListener("mouseup", b);
  }, []), d = q((m) => {
    if (!g.current || !r.current || !s.current || !f.current) return;
    m.preventDefault(), m.stopPropagation();
    const { x: _, y: L, width: k, height: F } = s.current, V = f.current, K = m.clientX, B = m.clientY, re = u({
      handler: V,
      startX: _,
      startY: L,
      currentX: K,
      currentY: B,
      startWidth: k,
      startHeight: F,
      options: y.current
    });
    w(r.current, re), o.current && nt(o.current, r.current);
  }, []), b = q((m) => {
    if (g.current) {
      if (m.preventDefault(), m.stopPropagation(), r.current && s.current) {
        const _ = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, L = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (_.width !== L.width || _.height !== L.height) && h.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: L } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: _ } }
        );
      }
      if (s.current = null, f.current = null, g.current = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const _ = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(_), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, h]), M = q((m) => {
    o.current && !o.current.contains(m.target) && S();
    const _ = m.target;
    if (pe(_)) {
      if (_ === r.current)
        return;
      p(_);
    } else
      console.log("Clicked on non-image element");
  }, [p, S]), I = q((m) => {
    if ((m.key === "Delete" || m.key === "Backspace") && r.current && !g.current) {
      m.preventDefault();
      const _ = r.current;
      if (_.parentNode) {
        _.parentNode.removeChild(_), S();
        const L = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(L);
      }
    }
    if (m.key === "Escape" && r.current && S(), r.current && !g.current) {
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === ">") {
        m.preventDefault();
        const _ = r.current.offsetWidth, L = Math.min(y.current.maxWidth || 800, _ + 10);
        w(r.current, { width: L, height: r.current.offsetHeight });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "<") {
        m.preventDefault();
        const _ = r.current.offsetWidth, L = Math.max(y.current.minWidth || 50, _ - 10);
        w(r.current, { width: L, height: r.current.offsetHeight });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "+") {
        m.preventDefault();
        const _ = r.current.offsetHeight, L = Math.min(y.current.maxHeight || 600, _ + 10);
        w(r.current, { width: r.current.offsetWidth, height: L });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((m.ctrlKey || m.metaKey) && m.shiftKey && m.key === "-") {
        m.preventDefault();
        const _ = r.current.offsetHeight, L = Math.max(y.current.minHeight || 50, _ - 10);
        w(r.current, { width: r.current.offsetWidth, height: L });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
      if ((m.ctrlKey || m.metaKey) && m.key === "r") {
        m.preventDefault(), w(r.current, { width: 300, height: 200 });
        const _ = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(_);
      }
    }
  }, [e, S]), P = q(() => {
    o.current && r.current && nt(o.current, r.current);
  }, []);
  ae(() => {
    if (!e.current) return;
    const _ = e.current.closest(".editor-viewport");
    return _ && (_.addEventListener("scroll", P), window.addEventListener("scroll", P)), () => {
      _ && _.removeEventListener("scroll", P), window.removeEventListener("scroll", P);
    };
  }, [e, P]), ae(() => {
    if (!e.current) return;
    const m = e.current;
    m.addEventListener("click", M), m.addEventListener("keydown", I);
    const _ = m.closest(".editor-viewport");
    return _ && _.addEventListener("scroll", P), window.addEventListener("resize", P), () => {
      m.removeEventListener("click", M), m.removeEventListener("keydown", I), _ && _.removeEventListener("scroll", P), window.removeEventListener("resize", P), g.current && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", b), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && ye(o.current);
    };
  }, [e, M, I, P, d, b]), ae(() => {
    if (!e.current) return;
    const m = new MutationObserver((_) => {
      _.forEach((L) => {
        L.type === "childList" && (L.removedNodes.length > 0 && L.removedNodes.forEach((k) => {
          k.nodeType === Node.ELEMENT_NODE && pe(k) && k === r.current && S();
        }), L.addedNodes.length > 0 && L.addedNodes.forEach((k) => {
          if (k.nodeType === Node.ELEMENT_NODE)
            if (pe(k))
              setTimeout(() => {
                p(k);
              }, 50);
            else {
              const F = k.querySelectorAll ? k.querySelectorAll("img") : [];
              F.length > 0 && setTimeout(() => {
                p(F[0]);
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
  }, [e, S, p]);
  function v(m) {
    switch (m) {
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
    handler: m,
    startX: _,
    startY: L,
    currentX: k,
    currentY: F,
    startWidth: V,
    startHeight: K,
    options: B = ge
  }) {
    const re = k - _, X = F - L;
    let G = V, U = K;
    switch (m) {
      case A.TOP_LEFT:
        G = Math.max(B.minWidth, V - re), U = Math.max(B.minHeight, K - X);
        break;
      case A.TOP_RIGHT:
        G = Math.max(B.minWidth, V + re), U = Math.max(B.minHeight, K - X);
        break;
      case A.BOTTOM_LEFT:
        G = Math.max(B.minWidth, V - re), U = Math.max(B.minHeight, K + X);
        break;
      case A.BOTTOM_RIGHT:
        G = Math.max(B.minWidth, V + re), U = Math.max(B.minHeight, K + X);
        break;
      case A.TOP:
        U = Math.max(B.minHeight, K - X);
        break;
      case A.BOTTOM:
        U = Math.max(B.minHeight, K + X);
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
      const oe = V / K;
      [
        A.TOP_LEFT,
        A.TOP_RIGHT,
        A.BOTTOM_LEFT,
        A.BOTTOM_RIGHT
      ].includes(m) ? G / oe > U ? U = Math.max(B.minHeight, G / oe) : G = Math.max(B.minWidth, U * oe) : [A.TOP, A.BOTTOM].includes(m) ? G = U * oe : [A.LEFT, A.RIGHT].includes(m) && (U = G / oe);
    }
    return B.maxWidth && G > B.maxWidth && (G = B.maxWidth, B.preserveAspectRatio && B.aspectRatio && (U = G / (V / K))), B.maxHeight && U > B.maxHeight && (U = B.maxHeight, B.preserveAspectRatio && B.aspectRatio && (G = U * (V / K))), G = Math.max(B.minWidth, G), U = Math.max(B.minHeight, U), {
      width: Math.round(G),
      height: Math.round(U)
    };
  }
  function w(m, { width: _, height: L }) {
    pe(m) && (m.tagName === "IMG" ? (m.style.width = `${_}px`, m.style.height = `${L}px`, m.width = _, m.height = L) : m.tagName === "DIV" && (m.style.width = `${_}px`, m.style.height = `${L}px`));
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
const ft = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: a,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: o = !0
}) => {
  const [r, s] = le({ top: 0, left: 0 }), [f, y] = le(!1), [g, h] = le("top"), [p, S] = le(o), R = te(null), d = te(null), b = Pe(), M = (k) => {
    if (!k) return null;
    const F = window.getComputedStyle(k);
    return {
      float: F.float || "none",
      margin: k.style.margin || "",
      display: F.display || "inline",
      width: k.style.width || k.width || "",
      height: k.style.height || k.height || "",
      aspectRatio: p
    };
  }, I = () => {
    if (!e) return "left";
    const k = window.getComputedStyle(e);
    return k.float || k.display === "block" ? "left" : k.display === "flex" && k.justifyContent === "center" ? "center" : k.float === "right" ? "right" : "left";
  }, [P, v] = le(I());
  ae(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ae(() => {
    if (e) {
      let k = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      k && (d.current = k);
    }
  }, [e]), hn(() => {
    if (!e || !R.current) return;
    const k = () => {
      const V = e.getBoundingClientRect(), K = R.current.getBoundingClientRect();
      d.current;
      const B = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, re = V.bottom >= 0 && V.top <= B.height && V.right >= 0 && V.left <= B.width;
      let X = "top", G = 0, U = 0;
      if (re) {
        const N = V.top - K.height - 10, C = B.height - V.bottom - K.height - 10;
        C > N && C > 0 ? (X = "bottom", G = V.bottom + 10) : (X = "top", G = V.top - K.height - 10);
      } else
        X = "top", G = 10;
      U = V.left + V.width / 2 - K.width / 2;
      const oe = window.innerWidth, E = window.innerHeight;
      let c = U, T = G;
      U < 10 ? c = 10 : U + K.width > oe - 10 && (c = oe - K.width - 10), G < 10 ? T = 10 : G + K.height > E - 10 && (T = E - K.height - 10), s({
        top: T,
        left: c
      }), h(X), y(!0);
    };
    k();
    const F = () => {
      k();
    };
    return d.current && d.current.addEventListener("scroll", F), window.addEventListener("scroll", F), window.addEventListener("resize", F), () => {
      d.current && d.current.removeEventListener("scroll", F), window.removeEventListener("scroll", F), window.removeEventListener("resize", F), y(!1);
    };
  }, [e]), ae(() => {
    const k = (F) => {
      R.current && !R.current.contains(F.target) && F.target !== e && i();
    };
    return document.addEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k);
    };
  }, [e, i]);
  const u = () => {
    if (e) {
      const k = M(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", v("left");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: k } }
      ), t && t("left");
    }
  }, w = () => {
    if (e) {
      const k = M(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", v("center");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: k } }
      ), t && t("center");
    }
  }, m = () => {
    if (e) {
      const k = M(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", v("right");
      const F = M(e);
      b.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: I(), state: k } }
      ), t && t("right");
    }
  }, _ = () => {
    if (e && e.parentNode) {
      const k = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      b.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: k } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, L = () => {
    const k = p, F = !p;
    S(F), b.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: F } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: k } }
    ), a && a(F);
  };
  return !e || typeof document > "u" ? null : yn(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: R,
        className: "image-tooltip-menu",
        "data-menu-position": g,
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
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: L,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ l.jsx(eo, { size: 14 }) : /* @__PURE__ */ l.jsx($r, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${P === "left" ? "active" : ""}`,
              onClick: u,
              title: "Align Left",
              style: {
                background: P === "left" ? "#007bff" : "transparent",
                color: P === "left" ? "#fff" : "#333",
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
              className: `tooltip-button ${P === "center" ? "active" : ""}`,
              onClick: w,
              title: "Align Center",
              style: {
                background: P === "center" ? "#007bff" : "transparent",
                color: P === "center" ? "#fff" : "#333",
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
              children: /* @__PURE__ */ l.jsx(nn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${P === "right" ? "active" : ""}`,
              onClick: m,
              title: "Align Right",
              style: {
                background: P === "right" ? "#007bff" : "transparent",
                color: P === "right" ? "#fff" : "#333",
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
              className: "tooltip-button delete-button",
              onClick: _,
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
              children: /* @__PURE__ */ l.jsx(go, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
ft.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
ft.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Mo = 50, Co = 50, zt = 50, No = 100, Io = 500, gt = ot(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: a,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: o,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: f = !0,
  showPageManager: y = !0
}, g) => {
  const h = Ft(), p = Pe(), { pageSize: S, pageMargins: R, continuousContent: d, pageBoundaries: b, activePage: M, zoomLevel: I, canUndo: P, canRedo: v } = h, u = te(null), w = te(null), { currentFormat: m, formatText: _ } = Hn(), [L, k] = le(!1), [F, V] = le(null), [K, B] = le(!0), {
    checkAndUpdateBoundaries: re,
    getCurrentPage: X,
    scrollToPage: G,
    updateBoundaries: U,
    triggerAutoReflow: oe,
    removePageAndContent: E,
    insertPageBreakAtBoundary: c
  } = sr(S, w, I, R), T = Le(() => it(S), [S]), [N, C] = le(!1), H = te(null), $ = te(!1), j = te(!1), W = te(!1), Z = te(d);
  ae(() => {
    if (w.current) {
      if (!W.current) {
        w.current.innerHTML = d, W.current = !0, Z.current = d;
        const D = setTimeout(() => {
          U();
        }, Mo);
        return () => clearTimeout(D);
      }
      if (Z.current !== d) {
        if (w.current.innerHTML !== d) {
          w.current.innerHTML = d;
          const ne = setTimeout(() => {
            if (U(), $.current) {
              $.current = !1;
              const de = Math.max(0, b.length - 1);
              p.setActivePage(de), setTimeout(() => {
                G(de, u);
              }, zt);
            }
          }, Co);
          return Z.current = d, () => clearTimeout(ne);
        }
        Z.current = d;
      }
    }
  }, [d, U, b.length, p, G]), ae(() => {
    r && W.current && r(d);
  }, [d, r]), mn(g, () => ({
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
      p.updateContinuousContent(D), w.current && (w.current.innerHTML = D, setTimeout(() => {
        U();
      }, 50));
    }
  }), [d, p, U]), ae(() => {
    const D = setTimeout(() => {
      w.current && w.current.focus();
    }, 200);
    return () => clearTimeout(D);
  }, []);
  const Y = q((D) => {
    let ne = D.currentTarget.innerHTML;
    ne = hr(ne), ne !== D.currentTarget.innerHTML && (D.currentTarget.innerHTML = ne), p.updateContinuousContent(ne), re(), oe(200);
    const de = X(u);
    de !== M && p.setActivePage(de);
  }, [re, p, X, M, oe, u]), ie = q((D) => {
    p.updatePageSize(D), U({ pageSize: D }), i && i(D);
  }, [p, U, i]), O = q((D) => {
    p.updatePageMargins(D), U({ pageMargins: D }), o && o(D);
  }, [p, U, o]), se = q((D) => {
    D < 0 || D >= b.length || (j.current = !0, p.setActivePage(D), G(D, u), setTimeout(() => {
      j.current = !1;
    }, Io), t && t(D));
  }, [p, G, t, b.length]), he = q(() => {
    const D = b.length + 1;
    c(D) && ($.current = !0, setTimeout(() => {
      if ($.current) {
        $.current = !1;
        const de = Math.max(0, b.length - 1);
        p.setActivePage(de), setTimeout(() => {
          G(de, u);
        }, zt);
      }
    }, 100)), a && a();
  }, [b.length, c, p, G, a]), ke = q(() => {
    const D = window.getSelection();
    if (D && D.rangeCount > 0) {
      if (!w?.current) return;
      const Be = `<page-break data-page-break="true" contenteditable="false" data-page-number="${w.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Be), setTimeout(() => {
        U();
        const He = X(u);
        p.setActivePage(He);
      }, 150);
    }
  }, [U, X, p, u]), ht = q((D) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    E(D) && (p.setActivePage(0), n && n(D));
  }, [b.length, E, p, n]), Re = q(() => {
    p.zoomIn();
  }, [p]), Oe = q(() => {
    p.zoomOut();
  }, [p]), we = q(() => {
    p.resetZoom();
  }, [p]);
  ae(() => {
    const D = (ne) => {
      if (ne.ctrlKey || ne.metaKey) {
        ["+", "=", "-", "_", "0"].includes(ne.key) && ne.preventDefault();
        const de = document.activeElement === w.current, Be = document.activeElement === u.current, He = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (de || Be || !He)
          switch (ne.key) {
            case "+":
            case "=":
              Re();
              break;
            case "-":
            case "_":
              Oe();
              break;
            case "0":
              we();
              break;
          }
      }
    };
    return window.addEventListener("keydown", D), () => {
      window.removeEventListener("keydown", D);
    };
  }, [Re, Oe, we]);
  const sn = q(() => {
    !u.current || !w.current || j.current || (H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      if (j.current) {
        H.current = null;
        return;
      }
      const D = X(u);
      D !== M && D >= 0 && p.setActivePage(D), H.current = null;
    }, No));
  }, [X, M, p]), cn = Le(() => {
    if (!d) return 0;
    const ne = d.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return ne ? ne.length : 0;
  }, [d]), ln = b.length || 1, un = q((D) => {
    k(!0), V(D);
  }, []), mt = q(() => {
    k(!1), V(null);
  }, []), dn = q((D, ne) => {
  }, []);
  return ae(() => () => {
    H.current && clearTimeout(H.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    f && /* @__PURE__ */ l.jsx(
      lt,
      {
        currentFormat: {
          ...m,
          imageSelected: L
        },
        onFormatText: _,
        onAddPageBreak: ke,
        canUndo: P,
        canRedo: v
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        _o,
        {
          editorView: null,
          isCollapsed: N,
          onToggle: () => C((D) => !D),
          wordCount: cn,
          pageCount: ln
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: u,
          onScroll: sn,
          children: /* @__PURE__ */ l.jsx(
            ut,
            {
              content: d,
              dimensions: T,
              pageSize: S,
              pageMargins: R,
              pageBoundaries: b,
              editorRef: w,
              onInput: Y,
              onClick: () => w.current?.focus(),
              zoomLevel: I
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        pt,
        {
          editorRef: w,
          onImageSelect: un,
          onImageDeselect: mt,
          onImageResize: dn,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: K,
            aspectRatio: K
          }
        }
      ),
      L && F && /* @__PURE__ */ l.jsx(
        ft,
        {
          imageElement: F,
          initialPreserveAspectRatio: K,
          onAlignChange: (D) => {
          },
          onAspectRatioToggle: (D) => {
            B(D);
          },
          onDelete: () => {
            if (F) {
              const D = F.getAttribute("data-key");
              D && fr(D).catch((ne) => {
                console.error("Failed to delete image from IndexedDB:", ne);
              });
            }
          },
          onClose: mt
        }
      ),
      y && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? $e.cloneElement(e, {
        onNavigate: se,
        onAddPage: he,
        onDeletePage: ht,
        onPageSizeChange: ie,
        onPageMarginsChange: O,
        zoomLevel: I,
        canZoomIn: Je(I),
        canZoomOut: Qe(I),
        onZoomIn: Re,
        onZoomOut: Oe,
        onZoomReset: we
      }) : /* @__PURE__ */ l.jsx(
        So,
        {
          pageBoundaries: b,
          activePage: M,
          pageSize: S,
          pageMargins: R,
          zoomLevel: I,
          canZoomIn: Je(I),
          canZoomOut: Qe(I),
          onNavigate: se,
          onAddPage: he,
          onDeletePage: ht,
          onPageSizeChange: ie,
          onPageMarginsChange: O,
          onZoomIn: Re,
          onZoomOut: Oe,
          onZoomReset: we
        }
      ) })
    ] })
  ] });
});
gt.displayName = "HtmlEditor";
gt.propTypes = {
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
class an extends $e.Component {
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
an.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
an.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Vo = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Ln as COMMON_FONT_SIZES,
  ct as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  Bt as DEFAULT_PAGE_SIZE,
  Bo as DocumentProvider,
  lt as EditorToolbar,
  an as ErrorBoundary,
  Zt as FONT_SIZE_MAP,
  gt as HtmlEditor,
  pt as ImageResizeHandlers,
  Vo as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  So as PageManager,
  ut as PageView,
  A as RESIZE_HANDLERS,
  _o as Sidebar,
  qo as applyImageDimensions,
  Fo as calculateResizeDimensions,
  Zo as clearImages,
  Yt as createResizeOverlay,
  fr as deleteImage,
  Yo as getAllImageKeys,
  $o as getAvailablePageSizes,
  pr as getImage,
  Wo as getImageDimensions,
  it as getPageDimensions,
  Ho as getPixelValue,
  Go as getPointValue,
  pe as isResizableImage,
  Uo as isValidFontSize,
  zo as isValidPageSize,
  ko as logger,
  zn as pixelsToPoints,
  Dn as pointsToPixels,
  ye as removeResizeOverlay,
  dr as saveImage,
  nt as updateResizeOverlay,
  sr as useContinuousReflow,
  Ut as useDocument,
  Pe as useDocumentActions,
  Ft as useDocumentState,
  Hn as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
