import De, { createContext as sn, useContext as cn, useReducer as ln, useMemo as Ne, useState as le, useCallback as q, useRef as te, useEffect as ae, forwardRef as tt, createElement as qe, useLayoutEffect as un, useImperativeHandle as dn } from "react";
import { v4 as nt } from "uuid";
import { createPortal as fn } from "react-dom";
function pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var we = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function gn() {
  if (gt) return Ee;
  gt = 1;
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
  return Ee.Fragment = t, Ee.jsx = o, Ee.jsxs = o, Ee;
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
var ht;
function hn() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === F ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case v:
          return "Fragment";
        case _:
          return "Profiler";
        case C:
          return "StrictMode";
        case R:
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
          case g:
            return "Portal";
          case j:
            return c.displayName || "Context";
          case P:
            return (c._context.displayName || "Context") + ".Consumer";
          case u:
            var T = c.render;
            return c = c.displayName, c || (c = T.displayName || T.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case k:
            return T = c.displayName || null, T !== null ? T : e(c.type) || "Memo";
          case B:
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
    function o(c) {
      try {
        t(c);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var I = T.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return I.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(c);
      }
    }
    function n(c) {
      if (c === v) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === B)
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
    function a() {
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
      function I() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: I,
        configurable: !0
      });
    }
    function h() {
      var c = e(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function b(c, T, I, M, $, z) {
      var N = I.ref;
      return c = {
        $$typeof: m,
        type: c,
        key: T,
        props: I,
        _owner: M
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: h
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
        value: z
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function d(c, T, I, M, $, z) {
      var N = T.children;
      if (N !== void 0)
        if (M)
          if (H(N)) {
            for (M = 0; M < N.length; M++)
              p(N[M]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(N);
      if (K.call(T, "key")) {
        N = e(c);
        var W = Object.keys(T).filter(function(Y) {
          return Y !== "key";
        });
        M = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", E[N + M] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          N,
          W,
          N
        ), E[N + M] = !0);
      }
      if (N = null, I !== void 0 && (o(I), N = "" + I), r(T) && (o(T.key), N = "" + T.key), "key" in T) {
        I = {};
        for (var Z in T)
          Z !== "key" && (I[Z] = T[Z]);
      } else I = T;
      return N && s(
        I,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), b(
        c,
        N,
        I,
        i(),
        $,
        z
      );
    }
    function p(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === B && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === m;
    }
    var S = De, m = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), j = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), V = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, H = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var X, G = {}, U = S.react_stack_bottom_frame.bind(
      S,
      a
    )(), re = ne(n(a)), E = {};
    xe.Fragment = v, xe.jsx = function(c, T, I) {
      var M = 1e4 > V.recentlyCreatedOwnerStacks++;
      return d(
        c,
        T,
        I,
        !1,
        M ? Error("react-stack-top-frame") : U,
        M ? ne(n(c)) : re
      );
    }, xe.jsxs = function(c, T, I) {
      var M = 1e4 > V.recentlyCreatedOwnerStacks++;
      return d(
        c,
        T,
        I,
        !0,
        M ? Error("react-stack-top-frame") : U,
        M ? ne(n(c)) : re
      );
    };
  })()), xe;
}
var mt;
function mn() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? we.exports = gn() : we.exports = hn()), we.exports;
}
var l = mn();
const Ze = 100, Ye = 50, Ve = 200, yt = 5, Ke = (e) => e < Ve, Xe = (e) => e > Ye, yn = 96, Se = (e) => Math.round(e * yn), je = {
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
}, pe = "NORMAL", Nt = (e = pe) => {
  const t = je[e] || je[pe];
  return {
    top: Se(t.top),
    bottom: Se(t.bottom),
    left: Se(t.left),
    right: Se(t.right)
  };
}, bn = (e = pe) => {
  const t = Nt(e);
  return t.top + t.bottom;
}, En = () => Object.keys(je), xn = (e) => {
  const t = je[e];
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
}, jt = "A4", rt = (e) => {
  const t = ce[e] || ce[jt];
  return {
    width: t.width,
    height: t.height
  };
}, Ro = (e) => Object.keys(ce).includes(e), wo = () => Object.keys(ce), Te = jt, me = "<p><br></p>", vn = "continuous", ve = (e, t = Te) => ({
  id: nt(),
  index: e,
  size: t,
  content: me,
  images: [],
  isBreakPoint: !1
}), Ie = (e) => typeof e != "string" || e.trim() === "" ? me : e, Lt = (e, t = Te) => (e.length > 0 ? e : [ve(0, t)]).map((n, i) => ({
  id: n.id || nt(),
  index: i,
  size: n.size || t,
  content: Ie(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Tn = (e = Te) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: rt(e).height
}], Je = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), o = e.pageSize || Te, n = Lt(e.pages || [ve(0, o)], o);
  return {
    id: nt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: o,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || vn,
    continuousContent: e.continuousContent || me,
    pageBoundaries: e.pageBoundaries || Tn(o),
    zoomLevel: e.zoomLevel || Ze,
    pageMargins: e.pageMargins || pe,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, D = {
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
}, Qe = (e, t) => {
  const o = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case D.INITIALIZE_DOCUMENT: {
      const { initialContent: n = me, pageSize: i = Te } = t.payload || {}, a = { ...ve(0, i), content: Ie(n) };
      return Je({
        title: e.title,
        pageSize: i,
        pages: [a]
      });
    }
    case D.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: o
      };
    case D.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: i } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const a = [...e.pages];
      return a[n] = {
        ...a[n],
        content: Ie(i)
      }, {
        ...e,
        pages: a,
        updatedAt: o
      };
    }
    case D.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, i = Lt(n.pages || [], e.pageSize), a = Array.isArray(n.pageBreaks) ? n.pageBreaks : i.slice(0, -1).map((r, s) => ({
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
    case D.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, i = [...e.pages];
      i.splice(n, 0, ve(n, e.pageSize));
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
    case D.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const i = [...e.pages];
      i.splice(n, 1);
      const a = i.map((h, b) => ({
        ...h,
        index: b,
        size: e.pageSize
      }));
      let r = e.activePage;
      r >= a.length ? r = a.length - 1 : n <= r && r > 0 && (r -= 1);
      const s = a.slice(0, -1).map((h, b) => ({
        id: `auto-break-${b}`,
        pageNumber: b + 1
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
    case D.SET_ACTIVE_PAGE: {
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
    case D.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        rt(n);
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
    case D.RESET_DOCUMENT:
      return Je();
    case D.UPDATE_CONTINUOUS_CONTENT: {
      const n = Ie(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: o
      };
    }
    case D.UPDATE_PAGE_BOUNDARIES: {
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
    case D.ADD_PAGE_BREAK: {
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
          const b = h[i], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const p = document.createElement("p");
          p.innerHTML = "<br>", b.parentNode.insertBefore(d, b.nextSibling), d.parentNode.insertBefore(p, d.nextSibling), r = s.innerHTML;
        } else
          r = r + a + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: r,
        updatedAt: o
      };
    }
    case D.REMOVE_PAGE_BREAK: {
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
    case D.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let i = e.continuousContent, a = e.pages;
      return n === "continuous" ? i = e.pages.map((s) => s.content).filter((s) => s && s !== me).join(`
`) || me : e.continuousContent && e.continuousContent !== me && (a = [{ ...ve(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: i,
        pages: a,
        updatedAt: o
      };
    }
    case D.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Ye || n > Ve ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Ye} and ${Ve}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case D.ZOOM_IN: {
      if (!Ke(e.zoomLevel))
        return e;
      const n = e.zoomLevel + yt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case D.ZOOM_OUT: {
      if (!Xe(e.zoomLevel))
        return e;
      const n = e.zoomLevel - yt;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: o
      };
    }
    case D.RESET_ZOOM:
      return e.zoomLevel === Ze ? e : {
        ...e,
        zoomLevel: Ze,
        updatedAt: o
      };
    case D.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: o
      };
    }
    case D.RECORD_OPERATION: {
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
    case D.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], i = e.undoStack.slice(0, -1);
      let a = e;
      return n.inverseOperation && (a = Qe(e, n.inverseOperation)), {
        ...a,
        undoStack: i,
        redoStack: [...e.redoStack, n],
        canUndo: i.length > 0,
        canRedo: !0,
        updatedAt: o
      };
    }
    case D.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], i = e.redoStack.slice(0, -1);
      let a = e;
      return n.operation && (a = Qe(e, n.operation)), {
        ...a,
        undoStack: [...e.undoStack, n],
        redoStack: i,
        canUndo: !0,
        canRedo: i.length > 0,
        updatedAt: o
      };
    }
    case D.CLEAR_UNDO_REDO:
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
}, Dt = sn(null), So = ({ children: e, initialState: t = {} }) => {
  const [o, n] = ln(Qe, Je(t)), i = Ne(() => ({
    initializeDocument: (r) => n({ type: D.INITIALIZE_DOCUMENT, payload: r }),
    updateTitle: (r) => n({ type: D.UPDATE_TITLE, payload: r }),
    updatePageContent: (r) => n({ type: D.UPDATE_PAGE_CONTENT, payload: r }),
    updatePages: (r) => n({ type: D.UPDATE_PAGES, payload: r }),
    addPage: (r) => n({ type: D.ADD_PAGE, payload: r }),
    deletePage: (r) => n({ type: D.DELETE_PAGE, payload: r }),
    setActivePage: (r) => n({ type: D.SET_ACTIVE_PAGE, payload: r }),
    updatePageSize: (r) => n({ type: D.UPDATE_PAGE_SIZE, payload: r }),
    resetDocument: () => n({ type: D.RESET_DOCUMENT }),
    updateContinuousContent: (r) => n({ type: D.UPDATE_CONTINUOUS_CONTENT, payload: r }),
    updatePageBoundaries: (r) => n({ type: D.UPDATE_PAGE_BOUNDARIES, payload: r }),
    addPageBreak: (r) => n({ type: D.ADD_PAGE_BREAK, payload: r }),
    removePageBreak: (r) => n({ type: D.REMOVE_PAGE_BREAK, payload: r }),
    setEditorMode: (r) => n({ type: D.SET_EDITOR_MODE, payload: r }),
    insertPageAt: (r) => n({ type: D.INSERT_PAGE_AT, payload: r }),
    movePageTo: (r) => n({ type: D.MOVE_PAGE_TO, payload: r }),
    duplicatePage: (r) => n({ type: D.DUPLICATE_PAGE, payload: r }),
    setZoomLevel: (r) => n({ type: D.SET_ZOOM_LEVEL, payload: r }),
    zoomIn: () => n({ type: D.ZOOM_IN }),
    zoomOut: () => n({ type: D.ZOOM_OUT }),
    resetZoom: () => n({ type: D.RESET_ZOOM }),
    updatePageMargins: (r) => n({ type: D.UPDATE_PAGE_MARGINS, payload: r }),
    // Undo/Redo actions
    recordOperation: (r, s) => n({
      type: D.RECORD_OPERATION,
      payload: { operation: r, inverseOperation: s }
    }),
    undo: () => n({ type: D.UNDO }),
    redo: () => n({ type: D.REDO }),
    clearUndoRedo: () => n({ type: D.CLEAR_UNDO_REDO })
  }), []), a = Ne(() => ({
    state: o,
    actions: i,
    dispatch: n
  }), [o, i]);
  return /* @__PURE__ */ l.jsx(Dt.Provider, { value: a, children: e });
}, zt = () => {
  const e = cn(Dt);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Bt = () => {
  const { state: e } = zt();
  return e;
}, Ae = () => {
  const { actions: e } = zt();
  return e;
};
var Me = { exports: {} }, Ce = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function An() {
  if (bt) return Q;
  bt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function P(u) {
    if (typeof u == "object" && u !== null) {
      var R = u.$$typeof;
      switch (R) {
        case t:
          switch (u = u.type, u) {
            case h:
            case b:
            case n:
            case a:
            case i:
            case p:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case d:
                case m:
                case S:
                case r:
                  return u;
                default:
                  return R;
              }
          }
        case o:
          return R;
      }
    }
  }
  function j(u) {
    return P(u) === b;
  }
  return Q.AsyncMode = h, Q.ConcurrentMode = b, Q.ContextConsumer = s, Q.ContextProvider = r, Q.Element = t, Q.ForwardRef = d, Q.Fragment = n, Q.Lazy = m, Q.Memo = S, Q.Portal = o, Q.Profiler = a, Q.StrictMode = i, Q.Suspense = p, Q.isAsyncMode = function(u) {
    return j(u) || P(u) === h;
  }, Q.isConcurrentMode = j, Q.isContextConsumer = function(u) {
    return P(u) === s;
  }, Q.isContextProvider = function(u) {
    return P(u) === r;
  }, Q.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, Q.isForwardRef = function(u) {
    return P(u) === d;
  }, Q.isFragment = function(u) {
    return P(u) === n;
  }, Q.isLazy = function(u) {
    return P(u) === m;
  }, Q.isMemo = function(u) {
    return P(u) === S;
  }, Q.isPortal = function(u) {
    return P(u) === o;
  }, Q.isProfiler = function(u) {
    return P(u) === a;
  }, Q.isStrictMode = function(u) {
    return P(u) === i;
  }, Q.isSuspense = function(u) {
    return P(u) === p;
  }, Q.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === b || u === a || u === i || u === p || u === f || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === S || u.$$typeof === r || u.$$typeof === s || u.$$typeof === d || u.$$typeof === v || u.$$typeof === C || u.$$typeof === _ || u.$$typeof === g);
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
var Et;
function _n() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function P(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === b || O === a || O === i || O === p || O === f || typeof O == "object" && O !== null && (O.$$typeof === m || O.$$typeof === S || O.$$typeof === r || O.$$typeof === s || O.$$typeof === d || O.$$typeof === v || O.$$typeof === C || O.$$typeof === _ || O.$$typeof === g);
    }
    function j(O) {
      if (typeof O == "object" && O !== null) {
        var se = O.$$typeof;
        switch (se) {
          case t:
            var he = O.type;
            switch (he) {
              case h:
              case b:
              case n:
              case a:
              case i:
              case p:
                return he;
              default:
                var Pe = he && he.$$typeof;
                switch (Pe) {
                  case s:
                  case d:
                  case m:
                  case S:
                  case r:
                    return Pe;
                  default:
                    return se;
                }
            }
          case o:
            return se;
        }
      }
    }
    var u = h, R = b, y = s, k = r, B = t, w = d, F = n, V = m, K = S, H = o, ne = a, X = i, G = p, U = !1;
    function re(O) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(O) || j(O) === h;
    }
    function E(O) {
      return j(O) === b;
    }
    function c(O) {
      return j(O) === s;
    }
    function T(O) {
      return j(O) === r;
    }
    function I(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return j(O) === d;
    }
    function $(O) {
      return j(O) === n;
    }
    function z(O) {
      return j(O) === m;
    }
    function N(O) {
      return j(O) === S;
    }
    function W(O) {
      return j(O) === o;
    }
    function Z(O) {
      return j(O) === a;
    }
    function Y(O) {
      return j(O) === i;
    }
    function ie(O) {
      return j(O) === p;
    }
    ee.AsyncMode = u, ee.ConcurrentMode = R, ee.ContextConsumer = y, ee.ContextProvider = k, ee.Element = B, ee.ForwardRef = w, ee.Fragment = F, ee.Lazy = V, ee.Memo = K, ee.Portal = H, ee.Profiler = ne, ee.StrictMode = X, ee.Suspense = G, ee.isAsyncMode = re, ee.isConcurrentMode = E, ee.isContextConsumer = c, ee.isContextProvider = T, ee.isElement = I, ee.isForwardRef = M, ee.isFragment = $, ee.isLazy = z, ee.isMemo = N, ee.isPortal = W, ee.isProfiler = Z, ee.isStrictMode = Y, ee.isSuspense = ie, ee.isValidElementType = P, ee.typeOf = j;
  })()), ee;
}
var xt;
function Ht() {
  return xt || (xt = 1, process.env.NODE_ENV === "production" ? Ce.exports = An() : Ce.exports = _n()), Ce.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var He, vt;
function Pn() {
  if (vt) return He;
  vt = 1;
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
      var h = Object.getOwnPropertyNames(r).map(function(d) {
        return r[d];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        b[d] = d;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return He = i() ? Object.assign : function(a, r) {
    for (var s, h = n(a), b, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var p in s)
        t.call(s, p) && (h[p] = s[p]);
      if (e) {
        b = e(s);
        for (var f = 0; f < b.length; f++)
          o.call(s, b[f]) && (h[b[f]] = s[b[f]]);
      }
    }
    return h;
  }, He;
}
var $e, Tt;
function ot() {
  if (Tt) return $e;
  Tt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ge, At;
function $t() {
  return At || (At = 1, Ge = Function.call.bind(Object.prototype.hasOwnProperty)), Ge;
}
var Ue, _t;
function kn() {
  if (_t) return Ue;
  _t = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ot(), o = {}, n = /* @__PURE__ */ $t();
    e = function(a) {
      var r = "Warning: " + a;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function i(a, r, s, h, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var p;
          try {
            if (typeof a[d] != "function") {
              var f = Error(
                (h || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            p = a[d](r, d, h, s, null, t);
          } catch (m) {
            p = m;
          }
          if (p && !(p instanceof Error) && e(
            (h || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in o)) {
            o[p.message] = !0;
            var S = b ? b() : "";
            e(
              "Failed " + s + " type: " + p.message + (S ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Ue = i, Ue;
}
var Fe, Pt;
function On() {
  if (Pt) return Fe;
  Pt = 1;
  var e = Ht(), t = Pn(), o = /* @__PURE__ */ ot(), n = /* @__PURE__ */ $t(), i = /* @__PURE__ */ kn(), a = function() {
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
  return Fe = function(s, h) {
    var b = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(E) {
      var c = E && (b && E[b] || E[d]);
      if (typeof c == "function")
        return c;
    }
    var f = "<<anonymous>>", S = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: _(),
      arrayOf: P,
      element: j(),
      elementType: u(),
      instanceOf: R,
      node: w(),
      objectOf: k,
      oneOf: y,
      oneOfType: B,
      shape: V,
      exact: K
    };
    function m(E, c) {
      return E === c ? E !== 0 || 1 / E === 1 / c : E !== E && c !== c;
    }
    function g(E, c) {
      this.message = E, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function v(E) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, T = 0;
      function I($, z, N, W, Z, Y, ie) {
        if (W = W || f, Y = Y || N, ie !== o) {
          if (h) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = W + ":" + N;
            !c[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[se] = !0, T++);
          }
        }
        return z[N] == null ? $ ? z[N] === null ? new g("The " + Z + " `" + Y + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new g("The " + Z + " `" + Y + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : E(z, N, W, Z, Y);
      }
      var M = I.bind(null, !1);
      return M.isRequired = I.bind(null, !0), M;
    }
    function C(E) {
      function c(T, I, M, $, z, N) {
        var W = T[I], Z = X(W);
        if (Z !== E) {
          var Y = G(W);
          return new g(
            "Invalid " + $ + " `" + z + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return v(c);
    }
    function _() {
      return v(r);
    }
    function P(E) {
      function c(T, I, M, $, z) {
        if (typeof E != "function")
          return new g("Property `" + z + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var N = T[I];
        if (!Array.isArray(N)) {
          var W = X(N);
          return new g("Invalid " + $ + " `" + z + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected an array."));
        }
        for (var Z = 0; Z < N.length; Z++) {
          var Y = E(N, Z, M, $, z + "[" + Z + "]", o);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return v(c);
    }
    function j() {
      function E(c, T, I, M, $) {
        var z = c[T];
        if (!s(z)) {
          var N = X(z);
          return new g("Invalid " + M + " `" + $ + "` of type " + ("`" + N + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(E);
    }
    function u() {
      function E(c, T, I, M, $) {
        var z = c[T];
        if (!e.isValidElementType(z)) {
          var N = X(z);
          return new g("Invalid " + M + " `" + $ + "` of type " + ("`" + N + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(E);
    }
    function R(E) {
      function c(T, I, M, $, z) {
        if (!(T[I] instanceof E)) {
          var N = E.name || f, W = re(T[I]);
          return new g("Invalid " + $ + " `" + z + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return v(c);
    }
    function y(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), r;
      function c(T, I, M, $, z) {
        for (var N = T[I], W = 0; W < E.length; W++)
          if (m(N, E[W]))
            return null;
        var Z = JSON.stringify(E, function(ie, O) {
          var se = G(O);
          return se === "symbol" ? String(O) : O;
        });
        return new g("Invalid " + $ + " `" + z + "` of value `" + String(N) + "` " + ("supplied to `" + M + "`, expected one of " + Z + "."));
      }
      return v(c);
    }
    function k(E) {
      function c(T, I, M, $, z) {
        if (typeof E != "function")
          return new g("Property `" + z + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var N = T[I], W = X(N);
        if (W !== "object")
          return new g("Invalid " + $ + " `" + z + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected an object."));
        for (var Z in N)
          if (n(N, Z)) {
            var Y = E(N, Z, M, $, z + "." + Z, o);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return v(c);
    }
    function B(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var c = 0; c < E.length; c++) {
        var T = E[c];
        if (typeof T != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(T) + " at index " + c + "."
          ), r;
      }
      function I(M, $, z, N, W) {
        for (var Z = [], Y = 0; Y < E.length; Y++) {
          var ie = E[Y], O = ie(M, $, z, N, W, o);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && Z.push(O.data.expectedType);
        }
        var se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new g("Invalid " + N + " `" + W + "` supplied to " + ("`" + z + "`" + se + "."));
      }
      return v(I);
    }
    function w() {
      function E(c, T, I, M, $) {
        return H(c[T]) ? null : new g("Invalid " + M + " `" + $ + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return v(E);
    }
    function F(E, c, T, I, M) {
      return new g(
        (E || "React class") + ": " + c + " type `" + T + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function V(E) {
      function c(T, I, M, $, z) {
        var N = T[I], W = X(N);
        if (W !== "object")
          return new g("Invalid " + $ + " `" + z + "` of type `" + W + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var Z in E) {
          var Y = E[Z];
          if (typeof Y != "function")
            return F(M, $, z, Z, G(Y));
          var ie = Y(N, Z, M, $, z + "." + Z, o);
          if (ie)
            return ie;
        }
        return null;
      }
      return v(c);
    }
    function K(E) {
      function c(T, I, M, $, z) {
        var N = T[I], W = X(N);
        if (W !== "object")
          return new g("Invalid " + $ + " `" + z + "` of type `" + W + "` " + ("supplied to `" + M + "`, expected `object`."));
        var Z = t({}, T[I], E);
        for (var Y in Z) {
          var ie = E[Y];
          if (n(E, Y) && typeof ie != "function")
            return F(M, $, z, Y, G(ie));
          if (!ie)
            return new g(
              "Invalid " + $ + " `" + z + "` key `" + Y + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(T[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var O = ie(N, Y, M, $, z + "." + Y, o);
          if (O)
            return O;
        }
        return null;
      }
      return v(c);
    }
    function H(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(H);
          if (E === null || s(E))
            return !0;
          var c = p(E);
          if (c) {
            var T = c.call(E), I;
            if (c !== E.entries) {
              for (; !(I = T.next()).done; )
                if (!H(I.value))
                  return !1;
            } else
              for (; !(I = T.next()).done; ) {
                var M = I.value;
                if (M && !H(M[1]))
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
    function X(E) {
      var c = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ne(c, E) ? "symbol" : c;
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
    function re(E) {
      return !E.constructor || !E.constructor.name ? f : E.constructor.name;
    }
    return S.checkPropTypes = i, S.resetWarningCache = i.resetWarningCache, S.PropTypes = S, S;
  }, Fe;
}
var We, kt;
function Rn() {
  if (kt) return We;
  kt = 1;
  var e = /* @__PURE__ */ ot();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, We = function() {
    function n(r, s, h, b, d, p) {
      if (p !== e) {
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
  }, We;
}
var Ot;
function wn() {
  if (Ot) return Me.exports;
  if (Ot = 1, process.env.NODE_ENV !== "production") {
    var e = Ht(), t = !0;
    Me.exports = /* @__PURE__ */ On()(e.isElement, t);
  } else
    Me.exports = /* @__PURE__ */ Rn()();
  return Me.exports;
}
var Sn = /* @__PURE__ */ wn();
const x = /* @__PURE__ */ pn(Sn), Gt = {
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
}, Mn = [
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
], at = "16px", Cn = (e) => Math.round(e * 96 / 72), In = (e) => Math.round(e * 72 / 96 * 2) / 2, Mo = (e) => {
  const t = Object.values(Gt).find((o) => o.pt === e);
  return t ? `${t.px}px` : `${Cn(e)}px`;
}, Co = (e) => {
  const t = parseInt(e), o = Object.values(Gt).find((n) => n.px === t);
  return o ? o.pt : In(t);
}, Io = (e) => {
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
function No({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const h = n - t, b = i - o;
  let d = a, p = r;
  switch (e) {
    case A.TOP_LEFT:
      d = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, r - b);
      break;
    case A.TOP_RIGHT:
      d = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, r - b);
      break;
    case A.BOTTOM_LEFT:
      d = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, r + b);
      break;
    case A.BOTTOM_RIGHT:
      d = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, r + b);
      break;
    case A.TOP:
      p = Math.max(s.minHeight, r - b);
      break;
    case A.BOTTOM:
      p = Math.max(s.minHeight, r + b);
      break;
    case A.LEFT:
      d = Math.max(s.minWidth, a - h);
      break;
    case A.RIGHT:
      d = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: d, height: p };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? d / f > p ? p = Math.max(s.minHeight, d / f) : d = Math.max(s.minWidth, p * f) : [A.TOP, A.BOTTOM].includes(e) ? d = p * f : [A.LEFT, A.RIGHT].includes(e) && (p = d / f);
  }
  return s.maxWidth && d > s.maxWidth && (d = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (p = d / (a / r))), s.maxHeight && p > s.maxHeight && (p = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (d = p * (a / r))), d = Math.max(s.minWidth, d), p = Math.max(s.minHeight, p), {
    width: Math.round(d),
    height: Math.round(p)
  };
}
function fe(e) {
  return e ? e.tagName === "IMG" ? (console.log("Element is an IMG tag, returning true"), !0) : !!(e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function jo(e) {
  return fe(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Lo(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
function Ut(e, t = ge) {
  if (!fe(e)) return null;
  const o = document.createElement("div");
  o.className = "image-resize-overlay", o.style.position = "fixed", o.style.zIndex = "1000", o.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return o.style.top = `${n.top}px`, o.style.left = `${n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, Object.values(A).forEach((a) => {
    const r = document.createElement("div");
    r.className = `resize-handler resize-handler-${a}`, r.dataset.handler = a, r.style.position = "absolute", r.style.width = "10px", r.style.height = "10px", r.style.backgroundColor = "#007bff", r.style.border = "2px solid white", r.style.borderRadius = "50%", r.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", r.style.cursor = Nn(a), r.style.pointerEvents = "all", Ft(r, a, n.width, n.height), o.appendChild(r);
  }), o;
}
function Nn(e) {
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
function Ft(e, t, o, n) {
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
function et(e, t) {
  if (!e || !t) return;
  const o = t.getBoundingClientRect();
  e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`, e.querySelectorAll(".resize-handler").forEach((i) => {
    const a = i.dataset.handler;
    Ft(i, a, o.width, o.height);
  });
}
function ye(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const jn = {
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
}, Rt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: at,
  headingLevel: "p",
  // Add heading level tracking
  // Image resize state
  imageSelected: !1,
  imageResizeOptions: ge,
  preserveAspectRatio: !0
}, Ln = () => {
  const [e, t] = le(Rt), o = Ae(), n = q((m) => {
    t((g) => ({
      ...g,
      alignLeft: m === "left",
      alignCenter: m === "center",
      alignRight: m === "right",
      alignJustify: m === "justify"
    }));
  }, []), i = q((m) => {
    try {
      const g = window.getSelection();
      if (!g || g.rangeCount === 0)
        return !1;
      const v = g.getRangeAt(0);
      if (!v.toString())
        return t((_) => ({ ..._, fontSize: m })), !1;
      try {
        const _ = document.createElement("span");
        _.style.fontSize = m;
        const P = v.extractContents();
        return _.appendChild(P), v.insertNode(_), v.selectNodeContents(_), g.removeAllRanges(), g.addRange(v), t((j) => ({ ...j, fontSize: m })), !0;
      } catch {
        const P = jn[m] || "2";
        return document.execCommand("fontSize", !1, P), t((j) => ({ ...j, fontSize: m })), !0;
      }
    } catch (g) {
      return console.warn("[useFormatting] Font size change failed:", g), !1;
    }
  }, []), a = q((m, g = null) => {
    try {
      if (m === "undo") {
        o.undo();
        return;
      }
      if (m === "redo") {
        o.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (m === "fontSize") {
        i(g);
        return;
      }
      switch (document.execCommand(m, !1, g) || console.warn(`[useFormatting] Command "${m}" failed`), m) {
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
        case "justifyLeft":
          n("left");
          break;
        case "justifyCenter":
          n("center");
        case "justifyRight":
          n("right");
        case "justifyFull":
          n("justify");
        case "fontName":
          t((C) => ({ ...C, fontFamily: g }));
        case "formatBlock":
          t((C) => ({ ...C, headingLevel: g }));
        default:
          break;
      }
    } catch (v) {
      console.warn(`[useFormatting] Error executing command "${m}":`, v);
    }
  }, [i, n, o]), r = te(null), s = te(null), h = te(null), b = te(null), d = te(ge);
  q((m) => {
    if (!fe(m)) return;
    r.current && (ye(r.current), r.current = null), m.classList.add("selected");
    const g = Ut(m);
    g && (r.current = g, s.current = m, document.body.appendChild(g), t((v) => ({
      ...v,
      imageSelected: !0,
      preserveAspectRatio: d.current.preserveAspectRatio
    })));
  }, []);
  const p = q(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), r.current && (ye(r.current), r.current = null), h.current = null, b.current = null, t((m) => ({
      ...m,
      imageSelected: !1
    }));
  }, []), f = q(() => {
    const m = !d.current.preserveAspectRatio;
    d.current = {
      ...d.current,
      preserveAspectRatio: m,
      aspectRatio: m
    }, t((g) => ({
      ...g,
      preserveAspectRatio: m
    }));
  }, []);
  q((m, g, v) => {
    s.current && (h.current = {
      x: g,
      y: v,
      width: s.current.offsetWidth,
      height: s.current.offsetHeight
    }, b.current = m, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Dn(m));
  }, []), q((m, g) => {
    if (!s.current || !h.current || !b.current) return;
    const { x: v, y: C, width: _, height: P } = h.current, j = b.current, u = zn({
      handler: j,
      startX: v,
      startY: C,
      currentX: m,
      currentY: g,
      startWidth: _,
      startHeight: P,
      options: d.current
    });
    Bn(s.current, u), r.current && et(r.current, s.current);
  }, []), q(() => {
    if (h.current = null, b.current = null, document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", s.current) {
      const m = new Event("input", { bubbles: !0, cancelable: !0 });
      s.current.dispatchEvent(m);
    }
  }, []);
  const S = q(() => {
    p(), t(Rt);
  }, [p]);
  return ae(() => () => {
    r.current && ye(r.current);
  }, []), {
    currentFormat: e,
    formatText: a,
    resetFormat: S,
    // Image resize functionality - now delegated to ImageResizeHandlers
    toggleAspectRatio: f
  };
};
function Dn(e) {
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
function zn({
  handler: e,
  startX: t,
  startY: o,
  currentX: n,
  currentY: i,
  startWidth: a,
  startHeight: r,
  options: s = ge
}) {
  const h = n - t, b = i - o;
  let d = a, p = r;
  switch (e) {
    case A.TOP_LEFT:
      d = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, r - b);
      break;
    case A.TOP_RIGHT:
      d = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, r - b);
      break;
    case A.BOTTOM_LEFT:
      d = Math.max(s.minWidth, a - h), p = Math.max(s.minHeight, r + b);
      break;
    case A.BOTTOM_RIGHT:
      d = Math.max(s.minWidth, a + h), p = Math.max(s.minHeight, r + b);
      break;
    case A.TOP:
      p = Math.max(s.minHeight, r - b);
      break;
    case A.BOTTOM:
      p = Math.max(s.minHeight, r + b);
      break;
    case A.LEFT:
      d = Math.max(s.minWidth, a - h);
      break;
    case A.RIGHT:
      d = Math.max(s.minWidth, a + h);
      break;
    default:
      return { width: d, height: p };
  }
  if (s.preserveAspectRatio && s.aspectRatio) {
    const f = a / r;
    [
      A.TOP_LEFT,
      A.TOP_RIGHT,
      A.BOTTOM_LEFT,
      A.BOTTOM_RIGHT
    ].includes(e) ? d / f > p ? p = Math.max(s.minHeight, d / f) : d = Math.max(s.minWidth, p * f) : [A.TOP, A.BOTTOM].includes(e) ? d = p * f : [A.LEFT, A.RIGHT].includes(e) && (p = d / f);
  }
  return s.maxWidth && d > s.maxWidth && (d = s.maxWidth, s.preserveAspectRatio && s.aspectRatio && (p = d / (a / r))), s.maxHeight && p > s.maxHeight && (p = s.maxHeight, s.preserveAspectRatio && s.aspectRatio && (d = p * (a / r))), d = Math.max(s.minWidth, d), p = Math.max(s.minHeight, p), {
    width: Math.round(d),
    height: Math.round(p)
  };
}
function Bn(e, { width: t, height: o }) {
  fe(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${o}px`, e.width = t, e.height = o) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${o}px`));
}
const be = 'page-break, [data-page-break="true"]', Wt = (e) => ce[e] || ce.A4, Hn = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const o = t.pageSize || "A4", n = Wt(o), i = e.querySelectorAll(be), a = [];
  a.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const r = e.getBoundingClientRect(), s = e.scrollTop;
  return i.forEach((h, b) => {
    const p = h.getBoundingClientRect().top - r.top + s;
    a.push({
      id: `page-${b + 1}`,
      pageNumber: b + 2,
      top: p,
      height: n.height
    });
  }), a;
}, qt = (e, t = 100, o = pe) => {
  const n = Wt(e), i = bn(o), a = n.height - i, r = t / 100;
  return a / r;
}, $n = (e, t) => {
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
}, wt = (e) => {
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
}, Gn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Un = (e, t) => {
  if (!e)
    return !1;
  try {
    const o = document.createElement("page-break");
    return o.setAttribute("data-page-break", "true"), o.setAttribute("contenteditable", "false"), o.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(o, e), !0;
  } catch (o) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", o), !1;
  }
}, Fn = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  try {
    const h = qt(o, n, i) * (t - 1), b = Array.from(e.children);
    let d = 0, p = null;
    for (let f = 0; f < b.length; f++) {
      const S = b[f];
      if (S.tagName === "PAGE-BREAK" || S.getAttribute("data-page-break") === "true")
        continue;
      const m = Gn(S);
      if (d + m > h) {
        p = S;
        break;
      }
      d += m;
    }
    if (p) {
      const f = document.createElement("page-break");
      if (f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), p.parentNode.insertBefore(f, p), a) {
        const S = e.innerHTML;
        a(S);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    } else {
      const f = document.createElement("page-break");
      f.setAttribute("data-page-break", "true"), f.setAttribute("contenteditable", "false"), f.setAttribute("data-page-number", String(t)), e.appendChild(f);
      const S = document.createElement("p");
      if (S.innerHTML = "<br>", e.appendChild(S), a) {
        const m = e.innerHTML;
        a(m);
      }
      return r && setTimeout(() => {
        r();
      }, 50), !0;
    }
  } catch (s) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", s), !1;
  }
}, Wn = (e, t, o, n, i, a, r) => {
  if (!e)
    return !1;
  if (o().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const h = Array.from(e.querySelectorAll(be));
    if (t > h.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const b = window.getSelection();
    let d = !1, p = [], f = null;
    if (t === 0) {
      const m = h[0];
      if (!m)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let g = e.firstChild;
      for (; g && g !== m; )
        p.push(g), g = g.nextSibling;
      f = m;
    } else {
      const m = h[t - 1];
      if (!m)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const g = h[t];
      let v = m.nextSibling;
      for (; v && v !== g; )
        p.push(v), v = v.nextSibling;
      f = m;
    }
    if (b && b.rangeCount > 0) {
      const g = b.getRangeAt(0).startContainer;
      for (const v of p)
        if (v.contains(g) || v === g) {
          d = !0;
          break;
        }
    }
    if (f && f.parentNode && f.remove(), p.forEach((m) => {
      m.parentNode && m.remove();
    }), e.querySelectorAll(be).forEach((m, g) => {
      m.setAttribute("data-page-number", String(g + 2));
    }), d && a && setTimeout(() => {
      a(0);
    }, 50), n) {
      const m = e.innerHTML;
      n(m);
    }
    return i && setTimeout(() => {
      i(), r && setTimeout(() => {
        r();
      }, 150);
    }, 100), !0;
  } catch (h) {
    return console.error("[removePageAndContent] Failed to remove page:", h), !1;
  }
}, qn = 200, Zn = 50, St = 3, Yn = 20, Zt = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  return e.tagName === "P" ? t.height + 16 : e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Vn = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let o = 0, n = null;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (!a || !a.getBoundingClientRect)
      continue;
    const r = Zt(a);
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
}, Kn = (e, t, o, n, i, a, r, s) => {
  if (!e || r.current)
    return !1;
  try {
    r.current = !0;
    const h = qt(t, o, n);
    let b = wt(e), d = !1, p = 0;
    for (let f = 0; f < b.length && p < St; f++) {
      const S = b[f], m = Vn(S, h);
      if (m && m.overflowIndex > 0) {
        let g = 0;
        for (let P = 0; P < S.length; P++) {
          const j = S[P];
          j && j.getBoundingClientRect && (g += Zt(j));
        }
        if (g - h < Yn)
          continue;
        const C = f + 2;
        Un(m.overflowElement, C) && (d = !0, p++, b = wt(e));
      }
    }
    if (d) {
      if (i) {
        const f = e.innerHTML;
        i(f);
      }
      setTimeout(() => {
        a && a(), p >= St && s && setTimeout(() => {
          r.current || s();
        }, 100);
      }, Zn);
    }
    return d;
  } catch (h) {
    return console.warn("[checkAndReflow] Reflow failed:", h), !1;
  } finally {
    r.current = !1;
  }
}, Xn = (e, t, o = qn) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, o);
}, Jn = 400, Yt = (e, t) => {
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
}, Qn = (e, t, o, n) => {
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
        n ? n(o) : Yt(t, o);
      }, Jn);
    }
  } catch (i) {
    console.error("[scrollToPage] Error:", i);
  }
}, er = (e, t, o = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(o);
  }, Math.max(0, n));
}, tr = 300, nr = (e, t, o = 100, n = "NARROW") => {
  const i = Ae(), a = te(null), r = te(null), s = te(e), h = te(o), b = te(n), d = te(!1);
  ae(() => {
    s.current = e;
  }, [e]), ae(() => {
    h.current = o;
  }, [o]), ae(() => {
    b.current = n;
  }, [n]), ae(() => () => {
    a.current && clearTimeout(a.current), r.current && clearTimeout(r.current);
  }, []);
  const p = q((u = {}) => t?.current ? Hn(t.current, u) : [], [t]), f = q((u = {}) => {
    const R = p(u);
    return i.updatePageBoundaries(R), R;
  }, [p, i]), S = q(async (u) => {
    if (!t?.current)
      return !1;
    const R = s.current || "A4", y = h.current || 100, k = b.current || "NARROW";
    return Fn(
      t.current,
      u,
      R,
      y,
      k,
      i.updateContinuousContent,
      f
    );
  }, [t, i, f]), m = q(() => {
    if (!t?.current)
      return;
    const u = s.current || "A4", R = h.current || 100, y = b.current || "NARROW";
    Kn(
      t.current,
      u,
      R,
      y,
      i.updateContinuousContent,
      f,
      d,
      m
    );
  }, [t, i, f]), g = q((u) => {
    Xn(m, r, u);
  }, [m]), v = q((u = {}) => {
    const R = typeof u.delay == "number" ? u.delay : tr;
    er(f, a, u, R);
  }, [f]), C = q((u) => !u?.current || !t?.current ? 0 : $n(u.current, t.current), [t]), _ = q((u) => {
    t?.current && Yt(t.current, u);
  }, [t]), P = q((u, R) => {
    if (!R?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    Qn(R.current, t.current, u, _);
  }, [t, _]), j = q((u) => t?.current ? Wn(
    t.current,
    u,
    p,
    i.updateContinuousContent,
    f,
    _,
    m
  ) : !1, [t, p, i, f, _, m]);
  return {
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: v,
    updateBoundaries: f,
    getCurrentPage: C,
    scrollToPage: P,
    positionCursorAtPage: _,
    checkAndReflow: m,
    triggerAutoReflow: g,
    removePageAndContent: j,
    insertPageBreakAtBoundary: S,
    boundaryTimeoutRef: a,
    reflowTimeoutRef: r
  };
}, rr = "html-editor-storage", or = 1, ue = "images";
function ar() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function _e() {
  return new Promise((e, t) => {
    const o = indexedDB.open(rr, or);
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
function ir(e) {
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
        const b = await _e(), d = `editor-image-${ar()}`, f = b.transaction([ue], "readwrite").objectStore(ue), S = {
          key: d,
          dataUrl: r,
          size: h,
          type: e.type,
          timestamp: Date.now()
        }, m = f.add(S);
        m.onsuccess = () => {
          b.close(), t(d);
        }, m.onerror = () => {
          b.close(), o(new Error("Failed to save image to IndexedDB"));
        };
      } catch (b) {
        o(b);
      }
    }, i.onerror = () => {
      o(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
async function sr(e) {
  try {
    const t = await _e();
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
async function cr(e) {
  try {
    const t = await _e();
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
async function Do() {
  try {
    const e = await _e();
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
async function zo() {
  try {
    const e = await _e();
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
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ur = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, n) => n ? n.toUpperCase() : o.toLowerCase()
), Mt = (e) => {
  const t = ur(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Vt = (...e) => e.filter((t, o, n) => !!t && t.trim() !== "" && n.indexOf(t) === o).join(" ").trim(), dr = (e) => {
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
var fr = {
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
const pr = tt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: r,
    ...s
  }, h) => qe(
    "svg",
    {
      ref: h,
      ...fr,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(o) * 24 / Number(t) : o,
      className: Vt("lucide", i),
      ...!a && !dr(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...r.map(([b, d]) => qe(b, d)),
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
const J = (e, t) => {
  const o = tt(
    ({ className: n, ...i }, a) => qe(pr, {
      ref: a,
      iconNode: t,
      className: Vt(
        `lucide-${lr(Mt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return o.displayName = Mt(e), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], hr = J("bold", gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], yr = J("chevron-left", mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Er = J("chevron-right", br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], vr = J("file-check", xr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Le = J("file-text", Tr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], _r = J("hash", Ar);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], kr = J("heading-1", Pr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Rr = J("heading-2", Or);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Sr = J("heading-3", wr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Cr = J("image-upscale", Mr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Nr = J("image", Ir);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Lr = J("italic", jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], zr = J("link", Dr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Hr = J("list-ordered", Br);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Kt = J("list", $r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ur = J("plus", Gr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Wr = J("redo", Fr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Zr = J("scaling", qr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Vr = J("settings", Yr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Xr = J("strikethrough", Kr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Qr = J("table", Jr);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Xt = J("text-align-center", eo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Jt = J("text-align-end", to);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], ro = J("text-align-justify", no);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Qt = J("text-align-start", oo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], io = J("trash-2", ao);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], co = J("underline", so);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], uo = J("undo", lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], po = J("x", fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ho = J("zoom-in", go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], yo = J("zoom-out", mo), bo = ({ editorView: e, isCollapsed: t, onToggle: o, wordCount: n, pageCount: i }) => {
  const a = Bt(), { pages: r, activePage: s, continuousContent: h, editorMode: b } = a, [d, p] = le(0), [f, S] = le([]);
  ae(() => {
    if (n !== void 0 && i !== void 0) {
      if (p(n), h) {
        const C = document.createElement("div");
        C.innerHTML = h;
        const _ = C.querySelectorAll("h1, h2, h3, h4, h5, h6"), P = Array.from(_).map((j, u) => {
          const R = parseInt(j.tagName.charAt(1)), y = j.textContent.trim();
          return y ? {
            id: `heading-${u}`,
            level: R,
            text: y,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        S(P);
      }
      return;
    }
    let g = 0;
    const v = [];
    r.forEach((C, _) => {
      if (C.content) {
        const P = document.createElement("div");
        P.innerHTML = C.content;
        const u = (P.textContent || P.innerText || "").trim().split(/\s+/).filter((y) => y.length > 0);
        g += u.length, P.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((y, k) => {
          const B = parseInt(y.tagName.charAt(1)), w = y.textContent.trim();
          w && v.push({
            id: `heading-${_}-${k}`,
            level: B,
            text: w,
            page: _ + 1
          });
        });
      }
    }), p(g), S(v);
  }, [r, n, i, h]);
  const m = i !== void 0 ? i : r.length;
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
            /* @__PURE__ */ l.jsx(Le, { size: 18 }),
            /* @__PURE__ */ l.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: o,
              "aria-label": t ? "Expand sidebar" : "Collapse sidebar",
              title: t ? "Expand sidebar" : "Collapse sidebar",
              children: t ? /* @__PURE__ */ l.jsx(Er, { size: 16 }) : /* @__PURE__ */ l.jsx(yr, { size: 16 })
            }
          )
        ] }),
        !t && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(vr, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: m })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(_r, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: d.toLocaleString() })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ l.jsx(Le, { size: 14 }),
                /* @__PURE__ */ l.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ l.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          f.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ l.jsxs("h3", { children: [
              /* @__PURE__ */ l.jsx(Kt, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "document-outline", "data-testid": "outline", children: f.map((g) => {
              const v = g.level === 1 ? kr : g.level === 2 ? Rr : Sr;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${g.level}`,
                  style: { marginLeft: `${(g.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ l.jsx(v, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ l.jsx("span", { className: "outline-text", children: g.text }),
                    /* @__PURE__ */ l.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      g.page
                    ] })
                  ]
                },
                g.id
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
class Eo {
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
const Ct = new Eo("Editor"), it = ({
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
      const h = await ir(r), b = await sr(h);
      if (b) {
        const p = `<img src="${b}" data-key="${h}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, p), Ct.info("Image inserted", { key: h });
      }
      const d = document.getElementById("image-upload");
      d && (d.value = "");
    } catch (s) {
      Ct.error("Error uploading image", s);
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
        children: /* @__PURE__ */ l.jsx(uo, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("redo"),
        disabled: !i,
        title: "Redo",
        style: { opacity: i ? 1 : 0.5 },
        children: /* @__PURE__ */ l.jsx(Wr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ l.jsx(hr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ l.jsx(Lr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ l.jsx(co, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ l.jsx(Xr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ l.jsx(Qt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ l.jsx(Xt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ l.jsx(Jt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ l.jsx(ro, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ l.jsxs(
      "select",
      {
        onChange: (r) => t("fontName", r.target.value),
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
        onChange: (r) => t("fontSize", r.target.value),
        defaultValue: at,
        title: "Font Size",
        children: Mn.map(({ value: r, label: s }) => /* @__PURE__ */ l.jsx("option", { value: r, children: s }, r))
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
        children: /* @__PURE__ */ l.jsx(Kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ l.jsx(Hr, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(zr, { size: 16 })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: () => t("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ l.jsx(Qr, { size: 16 })
      }
    ),
    o && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: o,
        title: "Insert Page Break",
        children: /* @__PURE__ */ l.jsx(Le, { size: 16 })
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
        children: /* @__PURE__ */ l.jsx(Nr, { size: 16 })
      }
    )
  ] });
};
it.propTypes = {
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
it.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
const st = ({
  content: e,
  dimensions: t,
  pageSize: o,
  pageBoundaries: n = [],
  editorRef: i,
  onInput: a,
  onKeyDown: r,
  onClick: s,
  onScroll: h,
  zoomLevel: b = 100,
  pageMargins: d = pe
}) => {
  const p = Nt(d), f = b / 100, S = (_, P) => {
    if (!_) return !1;
    const j = _.getBoundingClientRect(), u = P - j.top;
    return u < p.top || u > j.height - p.bottom;
  }, m = (_) => _ ? _.nodeType === Node.ELEMENT_NODE ? _.tagName === "PAGE-BREAK" || _.getAttribute("data-page-break") === "true" : _.parentElement && m(_.parentElement) : !1, g = (_) => {
    const P = window.getSelection();
    if (!P || P.rangeCount === 0) return;
    const j = P.getRangeAt(0), { startContainer: u, endContainer: R } = j;
    if ((m(u) || m(R)) && (_.key.length === 1 || _.key === "Enter" || _.key === " "))
      return _.preventDefault(), !1;
    if (_.key === "Tab")
      return _.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    if ((_.key === "Backspace" || _.key === "Delete") && (m(u) || m(R)))
      return _.preventDefault(), !1;
    r && r(_);
  }, v = (_) => {
    if (!i.current) return;
    const P = _.target;
    if (m(P)) {
      _.preventDefault();
      return;
    }
    if (S(i.current, _.clientY)) {
      _.preventDefault();
      const j = i.current.getBoundingClientRect();
      if (_.clientY - j.top < p.top) {
        const R = i.current.firstElementChild;
        if (R && R.tagName !== "PAGE-BREAK") {
          const y = document.createRange(), k = window.getSelection();
          y.setStart(R, 0), y.collapse(!0), k.removeAllRanges(), k.addRange(y);
        }
      } else {
        const R = i.current.lastElementChild;
        if (R && R.tagName !== "PAGE-BREAK") {
          const y = document.createRange(), k = window.getSelection();
          y.selectNodeContents(R), y.collapse(!1), k.removeAllRanges(), k.addRange(y);
        }
      }
      return;
    }
    s && s(_);
  }, C = (_) => {
    const P = window.getSelection();
    if (!P || P.rangeCount === 0) return;
    const j = P.getRangeAt(0), { startContainer: u } = j;
    if (m(u))
      return _.preventDefault(), !1;
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
        transform: `scale(${f})`,
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
            fontFamily: "Arial, sans-serif",
            fontSize: at,
            lineHeight: "1.3",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: a,
          onKeyDown: g,
          onBeforeInput: C,
          onClick: v,
          onScroll: h,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
st.propTypes = {
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
  zoomLevel: x.number,
  pageMargins: x.string
};
st.defaultProps = {
  pageBoundaries: [],
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  zoomLevel: 100,
  pageMargins: pe
};
const ct = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: o = "A4",
  pageMargins: n = pe,
  zoomLevel: i = 100,
  canZoomIn: a = !0,
  canZoomOut: r = !0,
  onNavigate: s,
  onAddPage: h,
  onDeletePage: b,
  onPageSizeChange: d,
  onPageMarginsChange: p,
  onZoomIn: f,
  onZoomOut: S,
  onZoomReset: m
} = {}) => {
  const g = Math.max(e?.length || 0, 1), v = (u) => {
    s && s(u);
  }, C = () => {
    h && h();
  }, _ = (u) => {
    if (g <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    b && b(u);
  }, P = (u) => {
    d && d(u);
  }, j = (u) => {
    p && p(u);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ l.jsx(Vr, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (u) => j(u.target.value),
              children: En().map((u) => /* @__PURE__ */ l.jsx("option", { value: u, children: xn(u) }, u))
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
          children: /* @__PURE__ */ l.jsx(yo, { size: 12 })
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
          children: /* @__PURE__ */ l.jsx(ho, { size: 12 })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: m,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((u, R) => /* @__PURE__ */ l.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${R === t ? "active" : ""}`,
          onClick: () => v(R),
          "aria-label": `Go to page ${R + 1}`,
          "aria-current": R === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ l.jsx(Le, { size: 14 }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              "Page ",
              R + 1
            ] })
          ]
        }
      ),
      g > 1 && /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (y) => {
            y.stopPropagation(), _(R);
          },
          "aria-label": `Delete page ${R + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ l.jsx(po, { size: 14 })
        }
      )
    ] }, u.id || `page-${R}`)) }),
    /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: C,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ l.jsx(Ur, { size: 16 }),
          /* @__PURE__ */ l.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
ct.propTypes = {
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
ct.defaultProps = {
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
const xo = De.memo(ct), lt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: o,
  onImageDeselect: n,
  resizeOptions: i = ge
}) => {
  const a = te(null), r = te(null), s = te(null), h = te(null), b = te(i), d = te(!1), p = Ae();
  ae(() => {
    b.current = i;
  }, [i]);
  const f = q((y) => {
    if (!fe(y)) return;
    a.current && (ye(a.current), a.current = null), y.classList.add("selected");
    const k = Ut(y, b.current);
    k && (a.current = k, r.current = y, document.body.appendChild(k), k.querySelectorAll(".resize-handler").forEach((w) => {
      w.addEventListener("mousedown", m);
    }), o && (console.log("Image selected, calling onImageSelect callback"), o(y)));
  }, [o]), S = q(() => {
    r.current && (r.current.classList.remove("selected"), r.current = null), a.current && (ye(a.current), a.current = null), s.current = null, h.current = null, d.current = !1, n && n();
  }, [n]), m = q((y) => {
    if (y.preventDefault(), y.stopPropagation(), !r.current) return;
    const k = y.currentTarget.dataset.handler, B = r.current.getBoundingClientRect(), w = window.pageYOffset || document.documentElement.scrollTop, F = window.pageXOffset || document.documentElement.scrollLeft;
    s.current = {
      x: y.clientX,
      y: y.clientY,
      width: r.current.offsetWidth,
      height: r.current.offsetHeight,
      originalWidth: r.current.offsetWidth,
      originalHeight: r.current.offsetHeight,
      offsetX: y.clientX - B.left - F,
      offsetY: y.clientY - B.top - w
    }, h.current = k, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = j(k), document.addEventListener("mousemove", g), document.addEventListener("mouseup", v);
  }, []), g = q((y) => {
    if (!d.current || !r.current || !s.current || !h.current) return;
    y.preventDefault(), y.stopPropagation();
    const { x: k, y: B, width: w, height: F } = s.current, V = h.current, K = y.clientX, H = y.clientY, ne = u({
      handler: V,
      startX: k,
      startY: B,
      currentX: K,
      currentY: H,
      startWidth: w,
      startHeight: F,
      options: b.current
    });
    R(r.current, ne), a.current && et(a.current, r.current);
  }, []), v = q((y) => {
    if (d.current) {
      if (y.preventDefault(), y.stopPropagation(), r.current && s.current) {
        const k = {
          width: s.current.originalWidth,
          height: s.current.originalHeight
        }, B = {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        };
        (k.width !== B.width || k.height !== B.height) && p.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: B } },
          { type: "IMAGE_RESIZE", payload: { element: r.current, state: k } }
        );
      }
      if (s.current = null, h.current = null, d.current = !1, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", v), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", r.current) {
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        r.current.dispatchEvent(k), t && t(r.current, {
          width: r.current.offsetWidth,
          height: r.current.offsetHeight
        });
      }
    }
  }, [t, p]), C = q((y) => {
    a.current && !a.current.contains(y.target) && S();
    const k = y.target;
    if (fe(k)) {
      if (k === r.current)
        return;
      f(k);
    } else
      console.log("Clicked on non-image element");
  }, [f, S]), _ = q((y) => {
    if ((y.key === "Delete" || y.key === "Backspace") && r.current && !d.current) {
      y.preventDefault();
      const k = r.current;
      if (k.parentNode) {
        k.parentNode.removeChild(k), S();
        const B = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(B);
      }
    }
    if (y.key === "Escape" && r.current && S(), r.current && !d.current) {
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === ">") {
        y.preventDefault();
        const k = r.current.offsetWidth, B = Math.min(b.current.maxWidth || 800, k + 10);
        R(r.current, { width: B, height: r.current.offsetHeight });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "<") {
        y.preventDefault();
        const k = r.current.offsetWidth, B = Math.max(b.current.minWidth || 50, k - 10);
        R(r.current, { width: B, height: r.current.offsetHeight });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "+") {
        y.preventDefault();
        const k = r.current.offsetHeight, B = Math.min(b.current.maxHeight || 600, k + 10);
        R(r.current, { width: r.current.offsetWidth, height: B });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.shiftKey && y.key === "-") {
        y.preventDefault();
        const k = r.current.offsetHeight, B = Math.max(b.current.minHeight || 50, k - 10);
        R(r.current, { width: r.current.offsetWidth, height: B });
        const w = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(w);
      }
      if ((y.ctrlKey || y.metaKey) && y.key === "r") {
        y.preventDefault(), R(r.current, { width: 300, height: 200 });
        const k = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(k);
      }
    }
  }, [e, S]), P = q(() => {
    a.current && r.current && et(a.current, r.current);
  }, []);
  ae(() => {
    if (!e.current) return;
    const k = e.current.closest(".editor-viewport");
    return k && (k.addEventListener("scroll", P), window.addEventListener("scroll", P)), () => {
      k && k.removeEventListener("scroll", P), window.removeEventListener("scroll", P);
    };
  }, [e, P]), ae(() => {
    if (!e.current) return;
    const y = e.current;
    y.addEventListener("click", C), y.addEventListener("keydown", _);
    const k = y.closest(".editor-viewport");
    return k && k.addEventListener("scroll", P), window.addEventListener("resize", P), () => {
      y.removeEventListener("click", C), y.removeEventListener("keydown", _), k && k.removeEventListener("scroll", P), window.removeEventListener("resize", P), d.current && (document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", v), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), a.current && ye(a.current);
    };
  }, [e, C, _, P, g, v]), ae(() => {
    if (!e.current) return;
    const y = new MutationObserver((k) => {
      k.forEach((B) => {
        B.type === "childList" && (B.removedNodes.length > 0 && B.removedNodes.forEach((w) => {
          w.nodeType === Node.ELEMENT_NODE && fe(w) && w === r.current && S();
        }), B.addedNodes.length > 0 && B.addedNodes.forEach((w) => {
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
  }, [e, S, f]);
  function j(y) {
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
    startX: k,
    startY: B,
    currentX: w,
    currentY: F,
    startWidth: V,
    startHeight: K,
    options: H = ge
  }) {
    const ne = w - k, X = F - B;
    let G = V, U = K;
    switch (y) {
      case A.TOP_LEFT:
        G = Math.max(H.minWidth, V - ne), U = Math.max(H.minHeight, K - X);
        break;
      case A.TOP_RIGHT:
        G = Math.max(H.minWidth, V + ne), U = Math.max(H.minHeight, K - X);
        break;
      case A.BOTTOM_LEFT:
        G = Math.max(H.minWidth, V - ne), U = Math.max(H.minHeight, K + X);
        break;
      case A.BOTTOM_RIGHT:
        G = Math.max(H.minWidth, V + ne), U = Math.max(H.minHeight, K + X);
        break;
      case A.TOP:
        U = Math.max(H.minHeight, K - X);
        break;
      case A.BOTTOM:
        U = Math.max(H.minHeight, K + X);
        break;
      case A.LEFT:
        G = Math.max(H.minWidth, V - ne);
        break;
      case A.RIGHT:
        G = Math.max(H.minWidth, V + ne);
        break;
      default:
        return { width: G, height: U };
    }
    if (H.preserveAspectRatio && H.aspectRatio) {
      const re = V / K;
      [
        A.TOP_LEFT,
        A.TOP_RIGHT,
        A.BOTTOM_LEFT,
        A.BOTTOM_RIGHT
      ].includes(y) ? G / re > U ? U = Math.max(H.minHeight, G / re) : G = Math.max(H.minWidth, U * re) : [A.TOP, A.BOTTOM].includes(y) ? G = U * re : [A.LEFT, A.RIGHT].includes(y) && (U = G / re);
    }
    return H.maxWidth && G > H.maxWidth && (G = H.maxWidth, H.preserveAspectRatio && H.aspectRatio && (U = G / (V / K))), H.maxHeight && U > H.maxHeight && (U = H.maxHeight, H.preserveAspectRatio && H.aspectRatio && (G = U * (V / K))), G = Math.max(H.minWidth, G), U = Math.max(H.minHeight, U), {
      width: Math.round(G),
      height: Math.round(U)
    };
  }
  function R(y, { width: k, height: B }) {
    fe(y) && (y.tagName === "IMG" ? (y.style.width = `${k}px`, y.style.height = `${B}px`, y.width = k, y.height = B) : y.tagName === "DIV" && (y.style.width = `${k}px`, y.style.height = `${B}px`));
  }
  return null;
};
lt.propTypes = {
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
lt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ge
};
const ut = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: o,
  onDelete: n,
  onClose: i,
  initialPreserveAspectRatio: a = !0
}) => {
  const [r, s] = le({ top: 0, left: 0 }), [h, b] = le(!1), [d, p] = le("top"), [f, S] = le(a), m = te(null), g = te(null), v = Ae(), C = (w) => {
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
  }, _ = () => {
    if (!e) return "left";
    const w = window.getComputedStyle(e);
    return w.float || w.display === "block" ? "left" : w.display === "flex" && w.justifyContent === "center" ? "center" : w.float === "right" ? "right" : "left";
  }, [P, j] = le(_());
  ae(() => () => {
    console.log("ImageTooltipMenu unmounted");
  }, [e]), ae(() => {
    if (e) {
      let w = e.closest(".editor-viewport") || e.closest(".continuous-scroll");
      w && (g.current = w);
    }
  }, [e]), un(() => {
    if (!e || !m.current) return;
    const w = () => {
      const V = e.getBoundingClientRect(), K = m.current.getBoundingClientRect();
      g.current;
      const H = window.visualViewport ? window.visualViewport : {
        width: window.innerWidth,
        height: window.innerHeight
      }, ne = V.bottom >= 0 && V.top <= H.height && V.right >= 0 && V.left <= H.width;
      let X = "top", G = 0, U = 0;
      if (ne) {
        const I = V.top - K.height - 10, M = H.height - V.bottom - K.height - 10;
        M > I && M > 0 ? (X = "bottom", G = V.bottom + 10) : (X = "top", G = V.top - K.height - 10);
      } else
        X = "top", G = 10;
      U = V.left + V.width / 2 - K.width / 2;
      const re = window.innerWidth, E = window.innerHeight;
      let c = U, T = G;
      U < 10 ? c = 10 : U + K.width > re - 10 && (c = re - K.width - 10), G < 10 ? T = 10 : G + K.height > E - 10 && (T = E - K.height - 10), s({
        top: T,
        left: c
      }), p(X), b(!0);
    };
    w();
    const F = () => {
      w();
    };
    return g.current && g.current.addEventListener("scroll", F), window.addEventListener("scroll", F), window.addEventListener("resize", F), () => {
      g.current && g.current.removeEventListener("scroll", F), window.removeEventListener("scroll", F), window.removeEventListener("resize", F), b(!1);
    };
  }, [e]), ae(() => {
    const w = (F) => {
      m.current && !m.current.contains(F.target) && F.target !== e && i();
    };
    return document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [e, i]);
  const u = () => {
    if (e) {
      const w = C(e);
      e.style.float = "left", e.style.margin = "0 10px 10px 0", e.style.display = "block", j("left");
      const F = C(e);
      v.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "left", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: _(), state: w } }
      ), t && t("left");
    }
  }, R = () => {
    if (e) {
      const w = C(e);
      e.style.float = "none", e.style.margin = "10px auto", e.style.display = "block", j("center");
      const F = C(e);
      v.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "center", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: _(), state: w } }
      ), t && t("center");
    }
  }, y = () => {
    if (e) {
      const w = C(e);
      e.style.float = "right", e.style.margin = "0 0 10px 10px", e.style.display = "block", j("right");
      const F = C(e);
      v.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: "right", state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: _(), state: w } }
      ), t && t("right");
    }
  }, k = () => {
    if (e && e.parentNode) {
      const w = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      v.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: w } }
      ), e.parentNode.removeChild(e), n && n(), i();
    }
  }, B = () => {
    const w = f, F = !f;
    S(F), v.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: F } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: w } }
    ), o && o(F);
  };
  return !e || typeof document > "u" ? null : fn(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: m,
        className: "image-tooltip-menu",
        "data-menu-position": d,
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
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${f ? "" : "active"}`,
              onClick: B,
              title: `Toggle aspect ratio preservation (currently ${f ? "ON" : "OFF"})`,
              children: f ? /* @__PURE__ */ l.jsx(Zr, { size: 14 }) : /* @__PURE__ */ l.jsx(Cr, { size: 14 })
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
              children: /* @__PURE__ */ l.jsx(Qt, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${P === "center" ? "active" : ""}`,
              onClick: R,
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
              children: /* @__PURE__ */ l.jsx(Xt, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `tooltip-button ${P === "right" ? "active" : ""}`,
              onClick: y,
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
              children: /* @__PURE__ */ l.jsx(Jt, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx(io, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
ut.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
ut.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const vo = 50, To = 50, It = 50, Ao = 100, _o = 500, dt = tt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: o,
  onDeletePage: n,
  onPageSizeChange: i,
  onPageMarginsChange: a,
  onChange: r,
  showSidebar: s = !0,
  showToolbar: h = !0,
  showPageManager: b = !0
}, d) => {
  const p = Bt(), f = Ae(), { pageSize: S, pageMargins: m, continuousContent: g, pageBoundaries: v, activePage: C, zoomLevel: _, canUndo: P, canRedo: j } = p, u = te(null), R = te(null), { currentFormat: y, formatText: k } = Ln(), [B, w] = le(!1), [F, V] = le(null), [K, H] = le(!0), {
    checkAndUpdateBoundaries: ne,
    getCurrentPage: X,
    scrollToPage: G,
    updateBoundaries: U,
    triggerAutoReflow: re,
    removePageAndContent: E,
    insertPageBreakAtBoundary: c
  } = nr(S, R, _, m), T = Ne(() => rt(S), [S]), [I, M] = le(!1), $ = te(null), z = te(!1), N = te(!1), W = te(!1), Z = te(g);
  ae(() => {
    if (R.current) {
      if (!W.current) {
        R.current.innerHTML = g, W.current = !0, Z.current = g;
        const L = setTimeout(() => {
          U();
        }, vo);
        return () => clearTimeout(L);
      }
      if (Z.current !== g) {
        if (R.current.innerHTML !== g) {
          R.current.innerHTML = g;
          const oe = setTimeout(() => {
            if (U(), z.current) {
              z.current = !1;
              const de = Math.max(0, v.length - 1);
              f.setActivePage(de), setTimeout(() => {
                G(de, u);
              }, It);
            }
          }, To);
          return Z.current = g, () => clearTimeout(oe);
        }
        Z.current = g;
      }
    }
  }, [g, U, v.length, f, G]), ae(() => {
    r && W.current && r(g);
  }, [g, r]), dn(d, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => g,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => g.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (L) => {
      f.updateContinuousContent(L), R.current && (R.current.innerHTML = L, setTimeout(() => {
        U();
      }, 50));
    }
  }), [g, f, U]), ae(() => {
    const L = setTimeout(() => {
      R.current && R.current.focus();
    }, 200);
    return () => clearTimeout(L);
  }, []);
  const Y = q((L) => {
    const oe = L.currentTarget.innerHTML;
    f.updateContinuousContent(oe), ne(), re(200);
    const de = X(u);
    de !== C && f.setActivePage(de);
  }, [ne, f, X, C, re, u]), ie = q((L) => {
    f.updatePageSize(L), U({ pageSize: L }), i && i(L);
  }, [f, U, i]), O = q((L) => {
    f.updatePageMargins(L), U({ pageMargins: L }), a && a(L);
  }, [f, U, a]), se = q((L) => {
    L < 0 || L >= v.length || (N.current = !0, f.setActivePage(L), G(L, u), setTimeout(() => {
      N.current = !1;
    }, _o), t && t(L));
  }, [f, G, t, v.length]), he = q(() => {
    const L = v.length + 1;
    c(L) && (z.current = !0, setTimeout(() => {
      if (z.current) {
        z.current = !1;
        const de = Math.max(0, v.length - 1);
        f.setActivePage(de), setTimeout(() => {
          G(de, u);
        }, It);
      }
    }, 100)), o && o();
  }, [v.length, c, f, G, o]), Pe = q(() => {
    const L = window.getSelection();
    if (L && L.rangeCount > 0) {
      if (!R?.current) return;
      const ze = `<page-break data-page-break="true" contenteditable="false" data-page-number="${R.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ze), setTimeout(() => {
        U();
        const Be = X(u);
        f.setActivePage(Be);
      }, 150);
    }
  }, [U, X, f, u]), ft = q((L) => {
    if (v.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    E(L) && (f.setActivePage(0), n && n(L));
  }, [v.length, E, f, n]), ke = q(() => {
    f.zoomIn();
  }, [f]), Oe = q(() => {
    f.zoomOut();
  }, [f]), Re = q(() => {
    f.resetZoom();
  }, [f]);
  ae(() => {
    const L = (oe) => {
      if (oe.ctrlKey || oe.metaKey) {
        ["+", "=", "-", "_", "0"].includes(oe.key) && oe.preventDefault();
        const de = document.activeElement === R.current, ze = document.activeElement === u.current, Be = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (de || ze || !Be)
          switch (oe.key) {
            case "+":
            case "=":
              ke();
              break;
            case "-":
            case "_":
              Oe();
              break;
            case "0":
              Re();
              break;
          }
      }
    };
    return window.addEventListener("keydown", L), () => {
      window.removeEventListener("keydown", L);
    };
  }, [ke, Oe, Re]);
  const tn = q(() => {
    !u.current || !R.current || N.current || ($.current && clearTimeout($.current), $.current = setTimeout(() => {
      if (N.current) {
        $.current = null;
        return;
      }
      const L = X(u);
      L !== C && L >= 0 && f.setActivePage(L), $.current = null;
    }, Ao));
  }, [X, C, f]), nn = Ne(() => {
    if (!g) return 0;
    const oe = g.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return oe ? oe.length : 0;
  }, [g]), rn = v.length || 1, on = q((L) => {
    w(!0), V(L);
  }, []), pt = q(() => {
    w(!1), V(null);
  }, []), an = q((L, oe) => {
  }, []);
  return ae(() => () => {
    $.current && clearTimeout($.current);
  }, []), /* @__PURE__ */ l.jsxs("div", { className: "multi-page-editor", children: [
    h && /* @__PURE__ */ l.jsx(
      it,
      {
        currentFormat: {
          ...y,
          imageSelected: B
        },
        onFormatText: k,
        onAddPageBreak: Pe,
        canUndo: P,
        canRedo: j
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ l.jsx(
        bo,
        {
          editorView: null,
          isCollapsed: I,
          onToggle: () => M((L) => !L),
          wordCount: nn,
          pageCount: rn
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: u,
          onScroll: tn,
          children: /* @__PURE__ */ l.jsx(
            st,
            {
              content: g,
              dimensions: T,
              pageSize: S,
              pageMargins: m,
              pageBoundaries: v,
              editorRef: R,
              onInput: Y,
              onClick: () => R.current?.focus(),
              zoomLevel: _
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        lt,
        {
          editorRef: R,
          onImageSelect: on,
          onImageDeselect: pt,
          onImageResize: an,
          resizeOptions: {
            ...ge,
            preserveAspectRatio: K,
            aspectRatio: K
          }
        }
      ),
      B && F && /* @__PURE__ */ l.jsx(
        ut,
        {
          imageElement: F,
          initialPreserveAspectRatio: K,
          onAlignChange: (L) => {
          },
          onAspectRatioToggle: (L) => {
            H(L);
          },
          onDelete: () => {
            if (F) {
              const L = F.getAttribute("data-key");
              L && cr(L).catch((oe) => {
                console.error("Failed to delete image from IndexedDB:", oe);
              });
            }
          },
          onClose: pt
        }
      ),
      b && /* @__PURE__ */ l.jsx("div", { className: "page-manager-sidebar", children: e ? De.cloneElement(e, {
        onNavigate: se,
        onAddPage: he,
        onDeletePage: ft,
        onPageSizeChange: ie,
        onPageMarginsChange: O,
        zoomLevel: _,
        canZoomIn: Ke(_),
        canZoomOut: Xe(_),
        onZoomIn: ke,
        onZoomOut: Oe,
        onZoomReset: Re
      }) : /* @__PURE__ */ l.jsx(
        xo,
        {
          pageBoundaries: v,
          activePage: C,
          pageSize: S,
          pageMargins: m,
          zoomLevel: _,
          canZoomIn: Ke(_),
          canZoomOut: Xe(_),
          onNavigate: se,
          onAddPage: he,
          onDeletePage: ft,
          onPageSizeChange: ie,
          onPageMarginsChange: O,
          onZoomIn: ke,
          onZoomOut: Oe,
          onZoomReset: Re
        }
      ) })
    ] })
  ] });
});
dt.displayName = "HtmlEditor";
dt.propTypes = {
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
dt.defaultProps = {
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
class en extends De.Component {
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
en.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
en.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
const Bo = {
  A4: { width: ce.A4.width, height: ce.A4.height },
  Letter: { width: ce.Letter.width, height: ce.Letter.height },
  Legal: { width: ce.Legal.width, height: ce.Legal.height }
};
export {
  Mn as COMMON_FONT_SIZES,
  at as DEFAULT_FONT_SIZE,
  ge as DEFAULT_IMAGE_RESIZE_OPTIONS,
  jt as DEFAULT_PAGE_SIZE,
  So as DocumentProvider,
  it as EditorToolbar,
  en as ErrorBoundary,
  Gt as FONT_SIZE_MAP,
  dt as HtmlEditor,
  lt as ImageResizeHandlers,
  Bo as PAGE_DIMENSIONS,
  ce as PAGE_SIZES,
  xo as PageManager,
  st as PageView,
  A as RESIZE_HANDLERS,
  bo as Sidebar,
  Lo as applyImageDimensions,
  No as calculateResizeDimensions,
  Do as clearImages,
  Ut as createResizeOverlay,
  cr as deleteImage,
  zo as getAllImageKeys,
  wo as getAvailablePageSizes,
  sr as getImage,
  jo as getImageDimensions,
  rt as getPageDimensions,
  Mo as getPixelValue,
  Co as getPointValue,
  fe as isResizableImage,
  Io as isValidFontSize,
  Ro as isValidPageSize,
  Eo as logger,
  In as pixelsToPoints,
  Cn as pointsToPixels,
  ye as removeResizeOverlay,
  ir as saveImage,
  et as updateResizeOverlay,
  nr as useContinuousReflow,
  zt as useDocument,
  Ae as useDocumentActions,
  Bt as useDocumentState,
  Ln as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
