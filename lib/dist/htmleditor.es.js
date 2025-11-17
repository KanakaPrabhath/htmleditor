import Je, { createContext as ur, useContext as dr, useReducer as gr, useMemo as J, useState as q, useCallback as O, useRef as $, useEffect as W, memo as hr, useLayoutEffect as pn, forwardRef as fr, useImperativeHandle as pr } from "react";
import { v4 as vt } from "uuid";
import x from "prop-types";
import { createPortal as mn } from "react-dom";
var ze = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function mr() {
  if (Yt) return Ce;
  Yt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var l in a)
        l !== "key" && (o[l] = a[l]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Ce.Fragment = t, Ce.jsx = n, Ce.jsxs = n, Ce;
}
var Le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function xr() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === v ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case f:
          return "Fragment";
        case S:
          return "Profiler";
        case b:
          return "StrictMode";
        case E:
          return "Suspense";
        case m:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case L:
            return "Portal";
          case w:
            return T.displayName || "Context";
          case k:
            return (T._context.displayName || "Context") + ".Consumer";
          case _:
            var I = T.render;
            return T = T.displayName, T || (T = I.displayName || I.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case C:
            return I = T.displayName || null, I !== null ? I : e(T.type) || "Memo";
          case R:
            I = T._payload, T = T._init;
            try {
              return e(T(I));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function n(T) {
      try {
        t(T);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var G = I.error, Z = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return G.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Z
        ), t(T);
      }
    }
    function r(T) {
      if (T === f) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === R)
        return "<...>";
      try {
        var I = e(T);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var T = P.A;
      return T === null ? null : T.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(T) {
      if (N.call(T, "key")) {
        var I = Object.getOwnPropertyDescriptor(T, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function l(T, I) {
      function G() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: G,
        configurable: !0
      });
    }
    function u() {
      var T = e(this.type);
      return Y[T] || (Y[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function d(T, I, G, Z, se, te) {
      var V = G.ref;
      return T = {
        $$typeof: h,
        type: T,
        key: I,
        props: G,
        _owner: Z
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function p(T, I, G, Z, se, te) {
      var V = I.children;
      if (V !== void 0)
        if (Z)
          if (B(V)) {
            for (Z = 0; Z < V.length; Z++)
              g(V[Z]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(V);
      if (N.call(I, "key")) {
        V = e(T);
        var K = Object.keys(I).filter(function(Ie) {
          return Ie !== "key";
        });
        Z = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", ie[V + Z] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Z,
          V,
          K,
          V
        ), ie[V + Z] = !0);
      }
      if (V = null, G !== void 0 && (n(G), V = "" + G), s(I) && (n(I.key), V = "" + I.key), "key" in I) {
        G = {};
        for (var re in I)
          re !== "key" && (G[re] = I[re]);
      } else G = I;
      return V && l(
        G,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), d(
        T,
        V,
        G,
        a(),
        se,
        te
      );
    }
    function g(T) {
      y(T) ? T._store && (T._store.validated = 1) : typeof T == "object" && T !== null && T.$$typeof === R && (T._payload.status === "fulfilled" ? y(T._payload.value) && T._payload.value._store && (T._payload.value._store.validated = 1) : T._store && (T._store.validated = 1));
    }
    function y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === h;
    }
    var c = Je, h = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), w = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), P = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, B = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var z, Y = {}, X = c.react_stack_bottom_frame.bind(
      c,
      o
    )(), oe = U(r(o)), ie = {};
    Le.Fragment = f, Le.jsx = function(T, I, G) {
      var Z = 1e4 > P.recentlyCreatedOwnerStacks++;
      return p(
        T,
        I,
        G,
        !1,
        Z ? Error("react-stack-top-frame") : X,
        Z ? U(r(T)) : oe
      );
    }, Le.jsxs = function(T, I, G) {
      var Z = 1e4 > P.recentlyCreatedOwnerStacks++;
      return p(
        T,
        I,
        G,
        !0,
        Z ? Error("react-stack-top-frame") : X,
        Z ? U(r(T)) : oe
      );
    };
  })()), Le;
}
var Xt;
function yr() {
  return Xt || (Xt = 1, process.env.NODE_ENV === "production" ? ze.exports = mr() : ze.exports = xr()), ze.exports;
}
var i = yr();
const gt = 100, ht = 50, ft = 200, Jt = 5, pt = (e) => e < ft, mt = (e) => e > ht, Tr = 96, ce = (e) => Math.round(e * Tr), Ve = {
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
}, de = "NORMAL", xn = (e = de) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: ce(e.top),
      bottom: ce(e.bottom),
      left: ce(e.left),
      right: ce(e.right)
    };
  const t = Ve[e] || Ve[de];
  return {
    top: ce(t.top),
    bottom: ce(t.bottom),
    left: ce(t.left),
    right: ce(t.right)
  };
}, br = (e = de) => {
  const t = xn(e);
  return t.top + t.bottom;
}, Er = () => Object.keys(Ve), wr = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ve[e];
  return t ? t.label : "Unknown";
}, qe = {
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
}, yn = "A4", je = (e) => {
  const t = qe[e] || qe[yn];
  return {
    width: t.width,
    height: t.height
  };
}, ii = (e) => Object.keys(qe).includes(e), ai = () => Object.keys(qe), Pe = yn, pe = "<p><br></p>", vr = "continuous", Oe = (e, t = Pe) => ({
  id: vt(),
  index: e,
  size: t,
  content: pe,
  images: [],
  isBreakPoint: !1
}), We = (e) => typeof e != "string" || e.trim() === "" ? pe : e, Tn = (e, t = Pe) => (e.length > 0 ? e : [Oe(0, t)]).map((r, a) => ({
  id: r.id || vt(),
  index: a,
  size: r.size || t,
  content: We(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), Ar = (e = Pe) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: je(e).height
}], Fe = (e) => e.slice(0, -1).map((t, n) => ({
  id: `auto-break-${n}`,
  pageNumber: n + 1
})), xt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), n = e.pageSize || Pe, r = Tn(e.pages || [Oe(0, n)], n);
  return {
    id: vt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: n,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    editorMode: e.editorMode || vr,
    continuousContent: e.continuousContent || pe,
    pageBoundaries: e.pageBoundaries || Ar(n),
    zoomLevel: e.zoomLevel || gt,
    pageMargins: e.pageMargins || de,
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
}, yt = (e, t) => {
  const n = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case H.INITIALIZE_DOCUMENT: {
      const { initialContent: r = pe, pageSize: a = Pe } = t.payload || {}, o = { ...Oe(0, a), content: We(r) };
      return xt({
        title: e.title,
        pageSize: a,
        pages: [o]
      });
    }
    case H.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: n
      };
    case H.UPDATE_PAGE_CONTENT: {
      const { pageIndex: r, content: a } = t.payload;
      if (r < 0 || r >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[r] = {
        ...o[r],
        content: We(a)
      }, {
        ...e,
        pages: o,
        updatedAt: n
      };
    }
    case H.UPDATE_PAGES: {
      const r = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = Tn(r.pages || [], e.pageSize), o = Array.isArray(r.pageBreaks) ? r.pageBreaks : Fe(a);
      return {
        ...e,
        pages: a,
        activePage: Math.min(e.activePage, a.length - 1),
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: n
      };
    }
    case H.ADD_PAGE: {
      const r = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, a = [...e.pages];
      a.splice(r, 0, Oe(r, e.pageSize));
      const o = a.map((l, u) => ({
        ...l,
        index: u,
        size: e.pageSize
      })), s = Fe(o);
      return {
        ...e,
        pages: o,
        activePage: r,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case H.DELETE_PAGE: {
      const r = t.payload;
      if (e.pages.length <= 1)
        return e;
      const a = [...e.pages];
      a.splice(r, 1);
      const o = a.map((u, d) => ({
        ...u,
        index: d,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : r <= s && s > 0 && (s -= 1);
      const l = Fe(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: l,
        totalPages: o.length,
        updatedAt: n
      };
    }
    case H.SET_ACTIVE_PAGE: {
      const r = t.payload;
      if (r === e.activePage)
        return e;
      const a = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return r < 0 || r >= a ? e : {
        ...e,
        activePage: r,
        updatedAt: n
      };
    }
    case H.UPDATE_PAGE_SIZE: {
      const r = t.payload;
      if (r === e.pageSize)
        return e;
      try {
        je(r);
      } catch {
        return console.warn(`Invalid page size: ${r}`), e;
      }
      const a = e.pages.map((s, l) => ({
        ...s,
        index: l,
        size: r
      })), o = Fe(a);
      return {
        ...e,
        pageSize: r,
        pages: a,
        pageBreaks: o,
        updatedAt: n
      };
    }
    case H.RESET_DOCUMENT:
      return xt();
    case H.UPDATE_CONTINUOUS_CONTENT: {
      const r = We(t.payload);
      return r === e.continuousContent ? e : {
        ...e,
        continuousContent: r,
        updatedAt: n
      };
    }
    case H.UPDATE_PAGE_BOUNDARIES: {
      const r = Array.isArray(t.payload) ? t.payload : [];
      if (r.length === e.pageBoundaries.length && r.length > 0 && r[0].id === e.pageBoundaries[0]?.id && r[r.length - 1].id === e.pageBoundaries[r.length - 1]?.id)
        return e;
      const a = e.activePage >= r.length ? Math.max(0, r.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: r,
        totalPages: r.length,
        activePage: a,
        updatedAt: n
      };
    }
    case H.ADD_PAGE_BREAK: {
      const { position: r = "end", pageIndex: a } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (r === "end")
        s = s + o + "<p><br></p>";
      else if (typeof r == "number") {
        const l = s.substring(0, r), u = s.substring(r);
        s = l + o + u;
      } else if (typeof a == "number" && typeof document < "u") {
        const l = document.createElement("div");
        l.innerHTML = s;
        const u = l.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && u.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < u.length) {
          const d = u[a], p = document.createElement("page-break");
          p.setAttribute("data-page-break", "true"), p.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const g = document.createElement("p");
          g.innerHTML = "<br>", d.parentNode.insertBefore(p, d.nextSibling), p.parentNode.insertBefore(g, p.nextSibling), s = l.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: n
      };
    }
    case H.REMOVE_PAGE_BREAK: {
      const { pageIndex: r } = t.payload || {};
      if (typeof r != "number" || typeof document > "u")
        return e;
      const a = document.createElement("div");
      a.innerHTML = e.continuousContent;
      const o = a.querySelectorAll('page-break, [data-page-break="true"]');
      return o[r] && o[r].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, u) => {
        l.setAttribute("data-page-number", String(u + 2));
      }), {
        ...e,
        continuousContent: a.innerHTML,
        updatedAt: n
      };
    }
    case H.SET_EDITOR_MODE: {
      const r = t.payload;
      if (r === e.editorMode)
        return e;
      let a = e.continuousContent, o = e.pages;
      return r === "continuous" ? a = e.pages.map((l) => l.content).filter((l) => l && l !== pe).join(`
`) || pe : e.continuousContent && e.continuousContent !== pe && (o = [{ ...Oe(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: r,
        continuousContent: a,
        pages: o,
        updatedAt: n
      };
    }
    case H.SET_ZOOM_LEVEL: {
      const r = t.payload;
      return r < ht || r > ft ? (console.warn(`Invalid zoom level: ${r}. Must be between ${ht} and ${ft}.`), e) : r === e.zoomLevel ? e : {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case H.ZOOM_IN: {
      if (!pt(e.zoomLevel))
        return e;
      const r = e.zoomLevel + Jt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case H.ZOOM_OUT: {
      if (!mt(e.zoomLevel))
        return e;
      const r = e.zoomLevel - Jt;
      return {
        ...e,
        zoomLevel: r,
        updatedAt: n
      };
    }
    case H.RESET_ZOOM:
      return e.zoomLevel === gt ? e : {
        ...e,
        zoomLevel: gt,
        updatedAt: n
      };
    case H.UPDATE_PAGE_MARGINS: {
      const r = t.payload;
      return r === e.pageMargins ? e : {
        ...e,
        pageMargins: r,
        updatedAt: n
      };
    }
    case H.RECORD_OPERATION: {
      const { operation: r, inverseOperation: a } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: r, inverseOperation: a }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: n
      };
    }
    case H.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const r = e.undoStack[e.undoStack.length - 1], a = e.undoStack.slice(0, -1);
      let o = e;
      return r.inverseOperation && (o = yt(e, r.inverseOperation)), {
        ...o,
        undoStack: a,
        redoStack: [...e.redoStack, r],
        canUndo: a.length > 0,
        canRedo: !0,
        updatedAt: n
      };
    }
    case H.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const r = e.redoStack[e.redoStack.length - 1], a = e.redoStack.slice(0, -1);
      let o = e;
      return r.operation && (o = yt(e, r.operation)), {
        ...o,
        undoStack: [...e.undoStack, r],
        redoStack: a,
        canUndo: !0,
        canRedo: a.length > 0,
        updatedAt: n
      };
    }
    case H.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: n
      };
    default:
      return e;
  }
}, bn = ur(null), li = ({ children: e, initialState: t = {} }) => {
  const [n, r] = gr(yt, xt(t)), a = J(() => ({
    initializeDocument: (s) => r({ type: H.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => r({ type: H.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => r({ type: H.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => r({ type: H.UPDATE_PAGES, payload: s }),
    addPage: (s) => r({ type: H.ADD_PAGE, payload: s }),
    deletePage: (s) => r({ type: H.DELETE_PAGE, payload: s }),
    setActivePage: (s) => r({ type: H.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => r({ type: H.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => r({ type: H.RESET_DOCUMENT }),
    updateContinuousContent: (s) => r({ type: H.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => r({ type: H.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => r({ type: H.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => r({ type: H.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => r({ type: H.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => r({ type: H.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => r({ type: H.ZOOM_IN }),
    zoomOut: () => r({ type: H.ZOOM_OUT }),
    resetZoom: () => r({ type: H.RESET_ZOOM }),
    updatePageMargins: (s) => r({ type: H.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, l) => r({
      type: H.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: l }
    }),
    undo: () => r({ type: H.UNDO }),
    redo: () => r({ type: H.REDO }),
    clearUndoRedo: () => r({ type: H.CLEAR_UNDO_REDO })
  }), []), o = J(() => ({
    state: n,
    actions: a,
    dispatch: r
  }), [n, a]);
  return /* @__PURE__ */ i.jsx(bn.Provider, { value: o, children: e });
}, En = () => {
  const e = dr(bn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, wn = () => {
  const { state: e } = En();
  return e;
}, ye = () => {
  const { actions: e } = En();
  return e;
}, vn = {
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
}, Cr = [
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
], Qe = "16px", Lr = (e) => Math.round(e * 96 / 72), Rr = (e) => Math.round(e * 72 / 96 * 2) / 2, ci = (e) => {
  const t = Object.values(vn).find((n) => n.pt === e);
  return t ? `${t.px}px` : `${Lr(e)}px`;
}, ui = (e) => {
  const t = parseInt(e), n = Object.values(vn).find((r) => r.px === t);
  return n ? n.pt : Rr(t);
}, di = (e) => {
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
}, kr = {
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
}, Qt = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Qe,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, Or = () => {
  const [e, t] = q(Qt), n = ye(), r = O((c, h, L = null) => {
    try {
      const f = window.getSelection();
      if (!f || f.rangeCount === 0)
        return !1;
      const b = f.getRangeAt(0);
      if (!b.toString())
        return t((k) => ({ ...k, [c]: h })), !1;
      try {
        const k = document.createElement("span");
        k.style[c] = h;
        const w = b.extractContents();
        return k.appendChild(w), b.insertNode(k), b.selectNodeContents(k), f.removeAllRanges(), f.addRange(b), t((_) => ({ ..._, [c]: h })), !0;
      } catch {
        if (L) {
          const k = c === "fontSize" ? kr[h] || "3" : h;
          return document.execCommand(L, !1, k), t((w) => ({ ...w, [c]: h })), !0;
        }
        return !1;
      }
    } catch (f) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, f), !1;
    }
  }, []), a = O((c) => r("fontFamily", c, "fontName"), [r]), o = O((c) => r("fontSize", c, "fontSize"), [r]), s = O((c) => r("color", c, "foreColor"), [r]), l = O((c) => {
    t((h) => ({
      ...h,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), u = O((c) => {
    try {
      const h = window.getSelection();
      if (!h || h.rangeCount === 0)
        return !1;
      const L = h.getRangeAt(0), f = L.toString(), S = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!S)
        return !1;
      if (!f) {
        const w = L.startContainer, _ = w.nodeType === Node.TEXT_NODE ? w.parentElement : w, E = Se(_) || jr();
        return E && (E.style.textAlign = S, l(S)), !0;
      }
      const k = Nr(L);
      if (k.length === 0) {
        const w = document.createElement("p");
        w.style.textAlign = S;
        const _ = L.extractContents();
        w.appendChild(_), L.insertNode(w), L.selectNodeContents(w), h.removeAllRanges(), h.addRange(L);
      } else
        k.forEach((w) => {
          w.style.textAlign = S;
        });
      return l(S), !0;
    } catch (h) {
      return console.warn("[useFormatting] Text alignment failed:", h), !1;
    }
  }, [l]), d = O((c) => {
    try {
      const h = window.getSelection();
      if (!h || h.rangeCount === 0)
        return !1;
      const L = h.getRangeAt(0), f = document.createElement("div");
      if (f.innerHTML = c, Array.from(f.children).some(
        (S) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(S.tagName)
      )) {
        const S = L.startContainer, k = S.nodeType === Node.TEXT_NODE ? S.parentElement : S, w = Se(k);
        if (w && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(w.tagName)) {
          const _ = w.tagName.toLowerCase();
          if (L.startOffset === 0 && (S === w || S.nodeType === Node.TEXT_NODE && S === w.firstChild))
            w.parentNode.insertBefore(f, w);
          else if (L.startOffset === S.textContent?.length && S === w.lastChild && L.endOffset === S.textContent?.length) {
            const C = w.nextSibling;
            C ? w.parentNode.insertBefore(f, C) : w.parentNode.appendChild(f);
          } else {
            const C = L.extractContents(), R = document.createTextNode(""), j = document.createElement(_);
            j.appendChild(R), j.appendChild(C);
            const v = w.parentNode;
            v.insertBefore(f, w.nextSibling), v.insertBefore(j, f.nextSibling), !w.textContent.trim() && w.children.length === 0 && v.removeChild(w);
          }
        } else
          L.insertNode(f);
        L.setStartAfter(f), L.setEndAfter(f), h.removeAllRanges(), h.addRange(L);
      } else
        document.execCommand("insertHTML", !1, c);
      return !0;
    } catch (h) {
      console.warn("[useFormatting] InsertHTML failed:", h);
      try {
        return document.execCommand("insertHTML", !1, c), !0;
      } catch (L) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", L), !1;
      }
    }
  }, []), p = O((c, h = null) => {
    try {
      if (c === "undo") {
        n.undo();
        return;
      }
      if (c === "redo") {
        n.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (c === "insertHTML" && h) {
        d(h);
        return;
      }
      if (c === "fontSize") {
        o(h);
        return;
      }
      if (c === "fontName") {
        a(h);
        return;
      }
      if (c === "foreColor") {
        s(h);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(c)) {
        u(c);
        return;
      }
      switch (document.execCommand(c, !1, h) || console.warn(`[useFormatting] Command "${c}" failed`), c) {
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
        case "justifyLeft":
        case "justifyCenter":
        case "justifyRight":
        case "justifyFull":
        case "fontName":
        case "foreColor":
          break;
        case "formatBlock":
          t((f) => ({ ...f, headingLevel: h }));
          break;
        default:
          break;
      }
    } catch (L) {
      console.warn(`[useFormatting] Error executing command "${c}":`, L);
    }
  }, [o, a, u, d, n]), g = O(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const h = c.getRangeAt(0), L = h.toString();
      let f = Qe, b = "Arial", S = "#000000", k = "p", w = "left";
      if (L) {
        const E = h.startContainer, m = E.nodeType === Node.TEXT_NODE ? E.parentElement : E;
        if (m) {
          const C = window.getComputedStyle(m), R = C.fontSize, j = C.fontFamily;
          R && R.endsWith("px") && (f = R), j && j !== "serif" && (b = j.split(",")[0].replace(/['"]/g, "").trim());
          const v = C.color;
          v && v !== "rgb(0, 0, 0)" && v !== "#000000" && (v.startsWith("rgb") ? S = Sr(v) : S = v);
          const P = Se(m);
          if (P) {
            const N = P.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(N) && (k = N);
            const U = window.getComputedStyle(P).textAlign;
            ["left", "center", "right", "justify"].includes(U) && (w = U);
          }
        }
      }
      const _ = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: w === "left",
        alignCenter: w === "center",
        alignRight: w === "right",
        alignJustify: w === "justify",
        fontFamily: b,
        fontSize: f,
        fontColor: S,
        headingLevel: k
      };
      t((E) => ({
        ...E,
        ..._
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), y = O(() => {
    t(Qt);
  }, []);
  return {
    currentFormat: e,
    formatText: p,
    resetFormat: y,
    updateCurrentFormatFromSelection: g
  };
};
function Sr(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const n = parseInt(t[1], 10), r = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (n << 16) + (r << 8) + a).toString(16).slice(1)}`;
}
function Se(e) {
  let t = e;
  for (; t && t !== document.body; ) {
    const n = t.tagName?.toLowerCase();
    if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(n))
      return t;
    if (t.contentEditable === "true" || t.contentEditable === "")
      break;
    t = t.parentElement;
  }
  return null;
}
function Nr(e) {
  const t = [], n = e.startContainer, r = e.endContainer, a = Se(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  ), o = Se(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (u) => {
        const d = u.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(d) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let l = s.nextNode();
  for (; l; )
    e.intersectsNode(l) && t.push(l), l = s.nextNode();
  return t;
}
function jr() {
  try {
    const e = window.getSelection();
    if (!e || e.rangeCount === 0)
      return null;
    const t = e.getRangeAt(0), n = document.createElement("p");
    return n.innerHTML = "<br>", t.insertNode(n), t.selectNodeContents(n), t.collapse(!0), e.removeAllRanges(), e.addRange(t), n;
  } catch (e) {
    return console.warn("[useFormatting] Failed to create paragraph at cursor:", e), null;
  }
}
const ge = 'page-break, [data-page-break="true"]', Pr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const n = t.pageSize || "A4", r = je(n), a = e.querySelectorAll(ge), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: r.height
  });
  const s = e.getBoundingClientRect(), l = e.scrollTop;
  return a.forEach((u, d) => {
    const g = u.getBoundingClientRect().top - s.top + l;
    o.push({
      id: `page-${d + 1}`,
      pageNumber: d + 2,
      top: g,
      height: r.height
    });
  }), o;
}, An = (e, t = 100, n = de) => {
  const r = je(e), a = br(n), o = r.height - a, s = t / 100;
  return o / s;
}, Mr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const n = t.querySelectorAll(ge);
    if (n.length === 0)
      return 0;
    const r = e.getBoundingClientRect(), a = r.top + r.height / 2;
    for (let o = n.length - 1; o >= 0; o--)
      if (n[o].getBoundingClientRect().top < a)
        return o + 1;
    return 0;
  } catch (n) {
    return console.warn("[getCurrentPage] Failed to calculate page:", n), 0;
  }
}, en = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let n = [], r = [];
  for (const a of t)
    a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true" ? r.length > 0 && (n.push(r), r = []) : r.push(a);
  return r.length > 0 && n.push(r), n.length === 0 && t.length > 0 && n.push(t.filter(
    (a) => !(a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
  )), n;
}, _r = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), l = window.getComputedStyle(e).textAlign;
      if (l === "center" || l === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Ir = (e, t) => {
  if (!e)
    return !1;
  try {
    const n = document.createElement("page-break");
    return n.setAttribute("data-page-break", "true"), n.setAttribute("contenteditable", "false"), n.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(n, e), !0;
  } catch (n) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", n), !1;
  }
}, Br = (e, t, n, r, a, o, s) => {
  if (!e)
    return !1;
  try {
    const u = An(n, r, a) * (t - 1), d = Array.from(e.children);
    let p = 0, g = null;
    for (let y = 0; y < d.length; y++) {
      const c = d[y];
      if (c.tagName === "PAGE-BREAK" || c.getAttribute("data-page-break") === "true")
        continue;
      const h = _r(c);
      if (p + h > u) {
        g = c;
        break;
      }
      p += h;
    }
    if (g) {
      const y = document.createElement("page-break");
      if (y.setAttribute("data-page-break", "true"), y.setAttribute("contenteditable", "false"), y.setAttribute("data-page-number", String(t)), g.parentNode.insertBefore(y, g), o) {
        const c = e.innerHTML;
        o(c);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const y = document.createElement("page-break");
      y.setAttribute("data-page-break", "true"), y.setAttribute("contenteditable", "false"), y.setAttribute("data-page-number", String(t)), e.appendChild(y);
      const c = document.createElement("p");
      if (c.innerHTML = "<br>", e.appendChild(c), o) {
        const h = e.innerHTML;
        o(h);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (l) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", l), !1;
  }
}, Hr = (e, t, n, r, a, o, s) => {
  if (!e)
    return !1;
  if (n().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const u = Array.from(e.querySelectorAll(ge));
    if (t > u.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const d = window.getSelection();
    let p = !1, g = [], y = null;
    if (t === 0) {
      const h = u[0];
      if (!h)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let L = e.firstChild;
      for (; L && L !== h; )
        g.push(L), L = L.nextSibling;
      y = h;
    } else {
      const h = u[t - 1];
      if (!h)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const L = u[t];
      let f = h.nextSibling;
      for (; f && f !== L; )
        g.push(f), f = f.nextSibling;
      y = h;
    }
    if (d && d.rangeCount > 0) {
      const L = d.getRangeAt(0).startContainer;
      for (const f of g)
        if (f.contains(L) || f === L) {
          p = !0;
          break;
        }
    }
    if (y && y.parentNode && y.remove(), g.forEach((h) => {
      h.parentNode && h.remove();
    }), e.querySelectorAll(ge).forEach((h, L) => {
      h.setAttribute("data-page-number", String(L + 2));
    }), p && o && setTimeout(() => {
      o(0);
    }, 50), r) {
      const h = e.innerHTML;
      r(h);
    }
    return a && setTimeout(() => {
      a(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (u) {
    return console.error("[removePageAndContent] Failed to remove page:", u), !1;
  }
}, Dr = (e) => {
  if (e)
    try {
      e.querySelectorAll(ge).forEach((n, r) => {
        n.setAttribute("data-page-number", String(r + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, zr = (e, t, n, r, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Dr(t), n) {
      const o = t.innerHTML;
      n(o);
    }
    return r && setTimeout(() => {
      r(), a && setTimeout(() => {
        a();
      }, 100);
    }, 50), !0;
  } catch (o) {
    return console.error("[removePageBreak] Failed to remove page break:", o), !1;
  }
}, Fr = 200, Ur = 50, tn = 3, $r = 20, Cn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const n = e.querySelectorAll("img"), r = e.textContent.trim();
    if (n.length === 1 && !r) {
      const o = n[0].getBoundingClientRect(), l = window.getComputedStyle(e).textAlign;
      if (l === "center" || l === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Wr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let n = 0, r = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = Cn(o);
    if (s < 1)
      continue;
    if (n + s > t)
      return r === null ? a > 0 ? {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: n
      } : null : {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: n
      };
    n += s, r = o;
  }
  return null;
}, Gr = (e, t, n, r, a, o, s, l) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const u = An(t, n, r);
    let d = en(e), p = !1, g = 0;
    for (let y = 0; y < d.length && g < tn; y++) {
      const c = d[y], h = Wr(c, u);
      if (h && h.overflowIndex > 0) {
        let L = 0;
        for (let k = 0; k < c.length; k++) {
          const w = c[k];
          w && w.getBoundingClientRect && (L += Cn(w));
        }
        if (L - u < $r)
          continue;
        const b = y + 2;
        Ir(h.overflowElement, b) && (p = !0, g++, d = en(e));
      }
    }
    if (p) {
      if (a) {
        const y = e.innerHTML;
        a(y);
      }
      setTimeout(() => {
        o && o(), g >= tn && l && setTimeout(() => {
          s.current || l();
        }, 100);
      }, Ur);
    }
    return p;
  } catch (u) {
    return console.warn("[checkAndReflow] Reflow failed:", u), !1;
  } finally {
    s.current = !1;
  }
}, Zr = (e, t, n = Fr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, n);
}, Vr = 400, Ln = (e, t) => {
  if (e) {
    e.focus();
    try {
      let n = null, r = 0;
      if (t === 0)
        n = e.firstChild, r = 0;
      else {
        const o = e.querySelectorAll(ge)[t - 1];
        o && o.nextSibling && (n = o.nextSibling, r = 0);
      }
      if (n) {
        const a = document.createRange(), o = window.getSelection();
        n.nodeType === Node.TEXT_NODE ? a.setStart(n, r) : a.setStart(n, 0), a.collapse(!0), o.removeAllRanges(), o.addRange(a);
      }
    } catch (n) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", n);
    }
  }
}, qr = (e, t, n, r) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (n === 0)
      a = t;
    else {
      const s = t.querySelectorAll(ge)[n - 1];
      if (s)
        a = s;
      else {
        console.warn("[scrollToPage] Page break not found for page", n);
        return;
      }
    }
    if (a) {
      const o = a.getBoundingClientRect(), s = e.getBoundingClientRect(), l = e.scrollTop + (o.top - s.top);
      e.scrollTo({
        top: l,
        behavior: "smooth"
      }), setTimeout(() => {
        r ? r(n) : Ln(t, n);
      }, Vr);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, Yr = (e, t, n = {}, r = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(n);
  }, Math.max(0, r));
}, Kr = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const n = t.getRangeAt(0);
  if (!e.contains(n.commonAncestorContainer)) return null;
  let r = 1;
  const a = e.querySelectorAll(ge);
  for (const p of a)
    if (n.comparePoint(p, 0) > 0)
      r++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(n.startContainer, n.startOffset);
  const l = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), u = l.length, d = (l.match(/\n/g) || []).length + 1;
  return {
    page: r,
    line: d,
    charOffset: u
  };
}, Xr = 300, Jr = (e, t, n = 100, r = "NARROW") => {
  const a = ye(), o = $(null), s = $(null), l = $(e), u = $(n), d = $(r), p = $(!1);
  W(() => {
    l.current = e;
  }, [e]), W(() => {
    u.current = n;
  }, [n]), W(() => {
    d.current = r;
  }, [r]), W(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const g = O((E = {}) => t?.current ? Pr(t.current, E) : [], [t]), y = O((E = {}) => {
    const m = g(E);
    return a.updatePageBoundaries(m), m;
  }, [g, a]), c = O((E = {}) => {
    const m = typeof E.delay == "number" ? E.delay : Xr;
    Yr(y, o, E, m);
  }, [y]), h = O(() => {
    t?.current && Gr(
      t.current,
      l.current,
      u.current,
      d.current,
      a.updateContinuousContent,
      y,
      p,
      h
    );
  }, [t, a, y]), L = O((E) => {
    Zr(h, s, E);
  }, [h]), f = O((E) => !E?.current || !t?.current ? 0 : Mr(E.current, t.current), [t]), b = O((E) => {
    t?.current && Ln(t.current, E);
  }, [t]), S = O((E, m) => {
    if (!m?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    qr(m.current, t.current, E, b);
  }, [t, b]), k = O(async (E) => t?.current ? Br(
    t.current,
    E,
    l.current,
    u.current,
    d.current,
    a.updateContinuousContent,
    y
  ) : !1, [t, a, y]), w = O((E) => t?.current ? Hr(
    t.current,
    E,
    g,
    a.updateContinuousContent,
    y,
    b,
    h
  ) : !1, [t, g, a, y, b, h]), _ = O((E) => t?.current ? zr(
    E,
    t.current,
    a.updateContinuousContent,
    y,
    h
  ) : !1, [t, a, y, h]);
  return W(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), J(() => ({
    calculatePageBoundaries: g,
    checkAndUpdateBoundaries: c,
    updateBoundaries: y,
    getCurrentPage: f,
    scrollToPage: S,
    positionCursorAtPage: b,
    checkAndReflow: h,
    triggerAutoReflow: L,
    removePageAndContent: w,
    removePageBreak: _,
    insertPageBreakAtBoundary: k,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    g,
    c,
    y,
    f,
    S,
    b,
    h,
    L,
    w,
    _,
    k
  ]);
}, Qr = (e, t) => {
  const { handleZoomIn: n, handleZoomOut: r, handleZoomReset: a, handleUndo: o, handleRedo: s } = e, { editorRef: l, containerRef: u } = t;
  W(() => {
    const d = (p) => {
      if (p.ctrlKey || p.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(p.key) && p.preventDefault();
        const g = document.activeElement === l.current, y = document.activeElement === u.current, c = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (g || y || !c)
          switch (p.key) {
            case "+":
            case "=":
              n();
              break;
            case "-":
            case "_":
              r();
              break;
            case "0":
              a();
              break;
            case "z":
              p.shiftKey || o();
              break;
            case "y":
              s();
              break;
          }
      }
    };
    return window.addEventListener("keydown", d), () => {
      window.removeEventListener("keydown", d);
    };
  }, [n, r, a, o, s, l, u]);
}, eo = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const n = $(null), r = O(() => {
    if (!t.current) return;
    const o = window.getSelection();
    if (n.current)
      try {
        o.removeAllRanges(), o.addRange(n.current);
        return;
      } catch (l) {
        console.warn("[restoreCursorPosition] Failed to restore cursor:", l);
      }
    const s = t.current.lastChild;
    if (s) {
      const l = document.createRange();
      s.nodeType === Node.TEXT_NODE ? l.setStart(s, s.textContent.length) : l.setStartAfter(s), l.collapse(!0), o.removeAllRanges(), o.addRange(l);
    }
  }, [t]), a = O(() => {
    if (!t.current) return !1;
    const o = window.getSelection();
    if (!o || o.rangeCount === 0) return !1;
    const s = o.getRangeAt(0);
    return t.current.contains(s.commonAncestorContainer);
  }, [t]);
  return W(() => {
    const o = () => {
      if (e(), t.current) {
        const l = window.getSelection();
        if (l.rangeCount > 0) {
          const u = l.getRangeAt(0);
          u.collapsed && t.current.contains(u.commonAncestorContainer) && (n.current = u.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", o);
    const s = () => {
      if (setTimeout(e, 10), n.current && t.current)
        try {
          const l = window.getSelection();
          l.removeAllRanges(), l.addRange(n.current);
        } catch (l) {
          console.warn("[handleFocus] Failed to restore cursor:", l);
        }
    };
    return t.current && t.current.addEventListener("focus", s), () => {
      document.removeEventListener("selectionchange", o), t.current && t.current.removeEventListener("focus", s);
    };
  }, [e, t]), {
    restoreCursorPosition: r,
    hasActiveCursorSelection: a
  };
}, ve = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, M = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function gi({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: l = ve
}) {
  const u = r - t, d = a - n;
  let p = o, g = s;
  switch (e) {
    case M.TOP_LEFT:
      p = Math.max(l.minWidth, o - u), g = Math.max(l.minHeight, s - d);
      break;
    case M.TOP_RIGHT:
      p = Math.max(l.minWidth, o + u), g = Math.max(l.minHeight, s - d);
      break;
    case M.BOTTOM_LEFT:
      p = Math.max(l.minWidth, o - u), g = Math.max(l.minHeight, s + d);
      break;
    case M.BOTTOM_RIGHT:
      p = Math.max(l.minWidth, o + u), g = Math.max(l.minHeight, s + d);
      break;
    case M.TOP:
      g = Math.max(l.minHeight, s - d);
      break;
    case M.BOTTOM:
      g = Math.max(l.minHeight, s + d);
      break;
    case M.LEFT:
      p = Math.max(l.minWidth, o - u);
      break;
    case M.RIGHT:
      p = Math.max(l.minWidth, o + u);
      break;
    default:
      return { width: p, height: g };
  }
  if (l.preserveAspectRatio && l.aspectRatio) {
    const y = o / s;
    [
      M.TOP_LEFT,
      M.TOP_RIGHT,
      M.BOTTOM_LEFT,
      M.BOTTOM_RIGHT
    ].includes(e) ? p / y > g ? g = Math.max(l.minHeight, p / y) : p = Math.max(l.minWidth, g * y) : [M.TOP, M.BOTTOM].includes(e) ? p = g * y : [M.LEFT, M.RIGHT].includes(e) && (g = p / y);
  }
  return l.maxWidth && p > l.maxWidth && (p = l.maxWidth, l.preserveAspectRatio && l.aspectRatio && (g = p / (o / s))), l.maxHeight && g > l.maxHeight && (g = l.maxHeight, l.preserveAspectRatio && l.aspectRatio && (p = g * (o / s))), p = Math.max(l.minWidth, p), g = Math.max(l.minHeight, g), {
    width: Math.round(p),
    height: Math.round(g)
  };
}
function me(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function hi(e) {
  return me(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function fi(e, { width: t, height: n }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function to(e, t = ve) {
  if (!me(e)) return null;
  const n = document.createElement("div");
  n.className = "image-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  return n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`, Object.values(M).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = no(o), s.style.pointerEvents = "all", Rn(s, o, r.width, r.height), n.appendChild(s);
  }), n;
}
function no(e) {
  switch (e) {
    case M.TOP_LEFT:
    case M.BOTTOM_RIGHT:
      return "nwse-resize";
    case M.TOP_RIGHT:
    case M.BOTTOM_LEFT:
      return "nesw-resize";
    case M.TOP:
    case M.BOTTOM:
      return "ns-resize";
    case M.LEFT:
    case M.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Rn(e, t, n, r) {
  switch (t) {
    case M.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case M.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case M.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case M.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case M.TOP:
      e.style.top = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case M.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${n / 2 + -5}px`;
      break;
    case M.LEFT:
      e.style.top = `${r / 2 + -5}px`, e.style.left = "-5px";
      break;
    case M.RIGHT:
      e.style.top = `${r / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Tt(e, t) {
  if (!e || !t) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Rn(a, o, n.width, n.height);
  });
}
function lt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const ro = "html-editor-storage", oo = 2, ne = "images", ue = /* @__PURE__ */ new Map();
function so() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Me() {
  return new Promise((e, t) => {
    const n = indexedDB.open(ro, oo);
    n.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, n.onsuccess = () => {
      e(n.result);
    }, n.onupgradeneeded = (r) => {
      const a = r.target.result;
      a.objectStoreNames.contains(ne) || a.createObjectStore(ne, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
async function kn(e) {
  if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type))
    throw new Error("Invalid image format. Supported formats: png, jpeg, gif, webp");
  if (e.size > 2 * 1024 * 1024)
    throw new Error("Image exceeds maximum size of 2MB. Image should be optimized before storage.");
  try {
    const n = await Me(), r = `editor-image-${so()}`, o = n.transaction([ne], "readwrite").objectStore(ne), s = {
      key: r,
      blob: e,
      // Store the file directly as a Blob
      size: e.size,
      type: e.type,
      name: e.name,
      timestamp: Date.now()
    };
    return new Promise((l, u) => {
      const d = o.add(s);
      d.onsuccess = () => {
        n.close(), l(r);
      }, d.onerror = () => {
        n.close(), u(new Error("Failed to save image to IndexedDB"));
      };
    });
  } catch (n) {
    throw new Error(`Failed to save image: ${n.message}`);
  }
}
async function At(e) {
  if (ue.has(e))
    return ue.get(e);
  try {
    const t = await Me();
    return new Promise((n, r) => {
      const s = t.transaction([ne], "readonly").objectStore(ne).get(e);
      s.onsuccess = () => {
        t.close();
        const l = s.result;
        if (l && l.blob) {
          const u = URL.createObjectURL(l.blob);
          ue.set(e, u), n(u);
        } else
          n(null);
      }, s.onerror = () => {
        t.close(), r(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function io(e) {
  try {
    ue.has(e) && (URL.revokeObjectURL(ue.get(e)), ue.delete(e));
    const t = await Me();
    return new Promise((n, r) => {
      const s = t.transaction([ne], "readwrite").objectStore(ne).delete(e);
      s.onsuccess = () => {
        t.close(), n();
      }, s.onerror = () => {
        t.close(), r(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function pi() {
  try {
    ue.forEach((t) => URL.revokeObjectURL(t)), ue.clear();
    const e = await Me();
    return new Promise((t, n) => {
      const o = e.transaction([ne], "readwrite").objectStore(ne).clear();
      o.onsuccess = () => {
        e.close(), t();
      }, o.onerror = () => {
        e.close(), n(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function mi() {
  try {
    const e = await Me();
    return new Promise((t, n) => {
      const o = e.transaction([ne], "readonly").objectStore(ne).getAllKeys();
      o.onsuccess = () => {
        e.close(), t(o.result || []);
      }, o.onerror = () => {
        e.close(), n(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
async function On(e) {
  try {
    const n = await (await fetch(e)).blob();
    return new Promise((r, a) => {
      const o = new FileReader();
      o.onloadend = () => r(o.result), o.onerror = a, o.readAsDataURL(n);
    });
  } catch (t) {
    throw console.error("Error converting blob URL to base64:", t), t;
  }
}
async function ao(e) {
  try {
    return await (await fetch(e)).blob();
  } catch (t) {
    throw console.error("Error converting base64 to blob:", t), t;
  }
}
async function nn(e) {
  if (!e) return e;
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.querySelectorAll('img[src^="blob:"]'), r = Array.from(n).map(async (a) => {
    try {
      const o = a.getAttribute("src"), s = await On(o);
      a.setAttribute("src", s), a.removeAttribute("data-key");
    } catch (o) {
      console.error("Failed to convert image:", o);
    }
  });
  return await Promise.all(r), t.innerHTML;
}
async function rn(e) {
  if (!e) return e;
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.querySelectorAll('img[src^="data:image/"]'), r = Array.from(n).map(async (a) => {
    try {
      const o = a.getAttribute("src"), s = await ao(o), l = s.type || "image/png", u = l.split("/")[1] || "png", d = `imported-image-${Date.now()}.${u}`, p = new File([s], d, { type: l }), g = await kn(p), y = await At(g);
      y && (a.setAttribute("src", y), a.setAttribute("data-key", g));
    } catch (o) {
      console.error("Failed to convert and store image:", o);
    }
  });
  return await Promise.all(r), t.innerHTML;
}
async function xi(e) {
  try {
    const t = await At(e);
    return t ? await On(t) : null;
  } catch (t) {
    return console.error("Error getting image as base64:", t), null;
  }
}
const Sn = [
  "P",
  "DIV",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "UL",
  "OL",
  "LI",
  "TABLE",
  "TBODY",
  "TR",
  "TD",
  "TH",
  "THEAD",
  "TFOOT",
  "BLOCKQUOTE",
  "PRE",
  "HR",
  "FIGURE",
  "FIGCAPTION",
  "PAGE-BREAK"
], lo = [
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
], co = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function uo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Nn(e) {
  const t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    t.push(` ${r.name}="${r.value}"`);
  }
  return t.join("");
}
function Ge(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const n = document.createElement("div");
  return n.innerHTML = t, Ne(n) || "<p><br></p>";
}
function go(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((r) => {
    for (; r.firstChild; )
      t.insertBefore(r.firstChild, r);
    r.remove();
  }), t.innerHTML;
}
function ho(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((n) => Sn.includes(n.tagName));
}
function fo(e) {
  const t = [];
  let n = !1;
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE)
      r.textContent.trim() && (n = !0);
    else if (r.nodeType === Node.ELEMENT_NODE) {
      const a = r;
      Sn.includes(a.tagName) ? t.push(a.outerHTML) : n = !0;
    }
  }), n ? e.outerHTML : t.join("");
}
function Ne(e) {
  const t = [], n = Array.from(e.childNodes);
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${uo(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, l = s.toLowerCase(), u = Nn(o);
      if (s === "DIV") {
        const d = Ne(o);
        d.trim() ? t.push(d) : t.push("<p><br></p>");
      } else if (s === "P")
        ho(o) ? t.push(fo(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const d = go(o);
        t.push(`<${l}${u}>${d}</${l}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(po(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(mo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const d = Ne(o);
        t.push(`<blockquote${u}>${d}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (lo.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (co.includes(s))
        t.push(o.outerHTML);
      else {
        const d = Ne(o);
        t.push(`<${l}${u}>${d}</${l}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function po(e) {
  const t = e.tagName.toLowerCase(), n = Nn(e), r = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      r.push(a.outerHTML);
    else {
      const o = Ne(a);
      o.trim() && r.push(`<li>${o}</li>`);
    }
  }), r.length === 0 ? `<${t}${n}><li><br></li></${t}>` : `<${t}${n}>${r.join("")}</${t}>`;
}
function mo(e) {
  return e.outerHTML;
}
const xo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  /* @__PURE__ */ i.jsx("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" })
] }), yo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
  /* @__PURE__ */ i.jsx("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
  /* @__PURE__ */ i.jsx("line", { x1: "15", y1: "4", x2: "9", y2: "20" })
] }), To = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
  /* @__PURE__ */ i.jsx("line", { x1: "4", y1: "21", x2: "20", y2: "21" })
] }), bo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M16 4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ i.jsx("path", { d: "M14 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7" }),
  /* @__PURE__ */ i.jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" })
] }), Ct = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "15", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "17", y1: "18", x2: "3", y2: "18" })
] }), Lt = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "17", y1: "12", x2: "7", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "19", y1: "18", x2: "5", y2: "18" })
] }), Rt = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "18", x2: "7", y2: "18" })
] }), Eo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "18", x2: "3", y2: "18" })
] }), jn = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ i.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
] }), wo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "10", y1: "6", x2: "21", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "10", y1: "12", x2: "21", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "10", y1: "18", x2: "21", y2: "18" }),
  /* @__PURE__ */ i.jsx("path", { d: "M4 6h1.5" }),
  /* @__PURE__ */ i.jsx("path", { d: "M4 12h1.5" }),
  /* @__PURE__ */ i.jsx("path", { d: "M4 18h1.5" }),
  /* @__PURE__ */ i.jsx("path", { d: "M6 6v0" }),
  /* @__PURE__ */ i.jsx("path", { d: "M6 12v0" }),
  /* @__PURE__ */ i.jsx("path", { d: "M6 18v0" })
] }), vo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ i.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), Ao = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M3 6h18" }),
  /* @__PURE__ */ i.jsx("path", { d: "M3 10h18" }),
  /* @__PURE__ */ i.jsx("path", { d: "M3 14h18" }),
  /* @__PURE__ */ i.jsx("path", { d: "M3 18h18" }),
  /* @__PURE__ */ i.jsx("path", { d: "M9 6v12" }),
  /* @__PURE__ */ i.jsx("path", { d: "M15 6v12" })
] }), Ye = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "14,2 14,8 20,8" }),
  /* @__PURE__ */ i.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
  /* @__PURE__ */ i.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
  /* @__PURE__ */ i.jsx("line", { x1: "10", y1: "9", x2: "8", y2: "9" })
] }), Co = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
] }), Lo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
] }), Ro = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
  /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ i.jsx("path", { d: "M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }), ko = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("polyline", { points: "3,8 7,12 3,16" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), Oo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("polyline", { points: "7,8 3,12 7,16" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "12", x2: "11", y2: "12" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "6", x2: "11", y2: "6" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "18", x2: "11", y2: "18" })
] }), So = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("circle", { cx: "13.5", cy: "6.5", r: ".5" }),
  /* @__PURE__ */ i.jsx("circle", { cx: "17.5", cy: "10.5", r: ".5" }),
  /* @__PURE__ */ i.jsx("circle", { cx: "8.5", cy: "7.5", r: ".5" }),
  /* @__PURE__ */ i.jsx("circle", { cx: "6.5", cy: "12.5", r: ".5" }),
  /* @__PURE__ */ i.jsx("path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.507 6.698 17.473 2 12 2z" })
] }), No = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
  /* @__PURE__ */ i.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
] }), jo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ i.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] }), Po = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ i.jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
] }), Mo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
  /* @__PURE__ */ i.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
  /* @__PURE__ */ i.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
] }), _o = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ i.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
  /* @__PURE__ */ i.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
] }), bt = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("polyline", { points: "3,6 5,6 21,6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2" }),
  /* @__PURE__ */ i.jsx("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
  /* @__PURE__ */ i.jsx("line", { x1: "14", y1: "11", x2: "14", y2: "17" })
] }), Io = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M12 3H5a2 2 0 0 0-2 2v5" }),
  /* @__PURE__ */ i.jsx("path", { d: "M9 21h6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M16 3h7v7" }),
  /* @__PURE__ */ i.jsx("path", { d: "M21 3l-7 7" }),
  /* @__PURE__ */ i.jsx("path", { d: "M3 21l7-7" })
] }), Bo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M16 3h5v5" }),
  /* @__PURE__ */ i.jsx("path", { d: "M8 21H3v-5" }),
  /* @__PURE__ */ i.jsx("path", { d: "M12 9v6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M9 12h6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M21 3l-7 7" }),
  /* @__PURE__ */ i.jsx("path", { d: "M3 21l7-7" })
] }), Ho = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "7,10 12,15 17,10" }),
  /* @__PURE__ */ i.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
] }), Do = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "5" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "5,12 12,5 19,12" })
] }), zo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "19,12 12,19 5,12" })
] }), Fo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "12,19 5,12 12,5" })
] }), Uo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "12,5 19,12 12,19" })
] }), $o = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
  /* @__PURE__ */ i.jsx("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
  /* @__PURE__ */ i.jsx("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
  /* @__PURE__ */ i.jsx("line", { x1: "16", y1: "3", x2: "14", y2: "21" })
] }), Wo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "14,2 14,8 20,8" }),
  /* @__PURE__ */ i.jsx("polyline", { points: "9,15 12,18 18,12" })
] }), Go = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsx("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ i.jsx("polyline", { points: "15,18 9,12 15,6" }) }), Zo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsx("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: /* @__PURE__ */ i.jsx("polyline", { points: "9,18 15,12 9,6" }) }), Vo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M4 12h8" }),
  /* @__PURE__ */ i.jsx("path", { d: "M4 18V6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M12 18V6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M17 12l3 3-3 3" })
] }), qo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M4 12h8" }),
  /* @__PURE__ */ i.jsx("path", { d: "M4 18V6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M12 18V6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M17 12h3" }),
  /* @__PURE__ */ i.jsx("path", { d: "M17 18h3" })
] }), Yo = ({ size: e = 16, ...t }) => /* @__PURE__ */ i.jsxs("svg", { width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...t, children: [
  /* @__PURE__ */ i.jsx("path", { d: "M4 12h8" }),
  /* @__PURE__ */ i.jsx("path", { d: "M4 18V6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M12 18V6" }),
  /* @__PURE__ */ i.jsx("path", { d: "M17 12h3" }),
  /* @__PURE__ */ i.jsx("path", { d: "M17 18h3" }),
  /* @__PURE__ */ i.jsx("path", { d: "M20 12v6" })
] }), on = (e, t, n = "") => {
  if (!e) return [];
  const r = document.createElement("div");
  r.innerHTML = e;
  const a = r.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const l = parseInt(o.tagName.charAt(1)), u = o.textContent.trim();
    return u ? {
      id: `${n}heading-${s}`,
      level: l,
      text: u,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Ko = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((r) => r.length > 0).length;
}, Xo = ({ isCollapsed: e, onToggle: t, wordCount: n, pageCount: r }) => {
  const a = wn(), { pages: o, activePage: s, continuousContent: l } = a, { wordCount: u, outline: d } = J(() => {
    if (n !== void 0 && r !== void 0)
      return {
        wordCount: n,
        outline: on(l, 1, "continuous-")
      };
    let g = 0;
    const y = [];
    return o.forEach((c, h) => {
      g += Ko(c.content), y.push(...on(c.content, h + 1, `page-${h}-`));
    }), { wordCount: g, outline: y };
  }, [o, n, r, l]), p = r !== void 0 ? r : o.length;
  return /* @__PURE__ */ i.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ i.jsx(Ye, { size: 18 }),
            /* @__PURE__ */ i.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ i.jsx(Zo, { size: 16 }) : /* @__PURE__ */ i.jsx(Go, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ i.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ i.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(Wo, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: p })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx($o, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: u.toLocaleString() })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(Ye, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          d.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ i.jsxs("h3", { children: [
              /* @__PURE__ */ i.jsx(jn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "document-outline", "data-testid": "outline", children: d.map((g) => {
              const y = g.level === 1 ? Vo : g.level === 2 ? qo : Yo;
              return /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${g.level}`,
                  style: { marginLeft: `${(g.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ i.jsx(y, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ i.jsx("span", { className: "outline-text", children: g.text }),
                    /* @__PURE__ */ i.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      g.page
                    ] })
                  ]
                },
                g.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
}, Jo = {
  maxWidth: 1200,
  maxHeight: 1200,
  maxSizeBytes: 2 * 1024 * 1024,
  // 2MB
  initialQuality: 0.9,
  minQuality: 0.6,
  qualityStep: 0.05
};
async function Qo(e, t = {}) {
  const n = { ...Jo, ...t };
  return new Promise((r, a) => {
    const o = new Image(), s = new FileReader();
    s.onload = (l) => {
      o.src = l.target.result;
    }, s.onerror = () => {
      a(new Error("Failed to read image file"));
    }, o.onload = async () => {
      try {
        let { width: l, height: u } = o;
        const d = l, p = u, g = l / u;
        let y = !1;
        (l > n.maxWidth || u > n.maxHeight) && (y = !0, l > u ? (l = Math.min(l, n.maxWidth), u = l / g) : (u = Math.min(u, n.maxHeight), l = u * g), l = Math.round(l), u = Math.round(u));
        const c = document.createElement("canvas");
        c.width = l, c.height = u;
        const h = c.getContext("2d");
        h.imageSmoothingEnabled = !0, h.imageSmoothingQuality = "high", h.drawImage(o, 0, 0, l, u);
        const L = e.type === "image/png" && es(h, l, u) ? "image/png" : "image/jpeg", f = await Pn(
          c,
          L,
          n.maxSizeBytes,
          n.initialQuality,
          n.minQuality,
          n.qualityStep
        ), b = L === "image/png" ? ".png" : ".jpg", S = e.name.replace(/\.[^/.]+$/, "") + b, k = new File([f], S, { type: L }), w = k.size < e.size;
        r({
          file: k,
          width: l,
          height: u,
          originalSize: e.size,
          optimizedSize: k.size,
          wasOptimized: y || w,
          wasResized: y,
          wasCompressed: w,
          originalWidth: d,
          originalHeight: p
        });
      } catch (l) {
        a(new Error(`Image optimization failed: ${l.message}`));
      }
    }, o.onerror = () => {
      a(new Error("Failed to load image"));
    }, s.readAsDataURL(e);
  });
}
function es(e, t, n) {
  try {
    const a = Math.max(1, Math.floor(t / 10)), o = Math.max(1, Math.floor(n / 10));
    for (let s = 0; s < n; s += o)
      for (let l = 0; l < t; l += a)
        if (e.getImageData(l, s, 1, 1).data[3] < 255)
          return !0;
    return !1;
  } catch {
    return !1;
  }
}
async function Pn(e, t, n, r, a, o) {
  let s = r, l = null;
  if (t === "image/png")
    return l = await sn(e, t, s), l.size > n ? Pn(e, "image/jpeg", n, r, a, o) : l;
  for (; s >= a; ) {
    if (l = await sn(e, t, s), l.size <= n)
      return l;
    s -= o;
  }
  return l;
}
function sn(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob(
      (o) => {
        if (!o) {
          a(new Error("Failed to create blob from canvas"));
          return;
        }
        r(o);
      },
      t,
      n
    );
  });
}
function an(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = ["Bytes", "KB", "MB"], r = Math.floor(Math.log(e) / Math.log(t));
  return Math.round(e / Math.pow(t, r) * 100) / 100 + " " + n[r];
}
function ts(e) {
  if (!e.wasOptimized)
    return "Image inserted";
  const t = [];
  return e.wasResized && t.push(`resized from ${e.originalWidth}×${e.originalHeight} to ${e.width}×${e.height}`), e.wasCompressed && t.push(`compressed from ${an(e.originalSize)} to ${an(e.optimizedSize)}`), `Image optimized: ${t.join(", ")}`;
}
class ns {
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
  _format(t, n, r) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${t}] ${n}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(t, n) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(t, n) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(t, n) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(t, n) {
  }
}
const Re = new ns("Editor"), Mn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), _n = 32;
function In(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const n = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t ? n - 1 : n + 1);
  r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * _n}px`, e.dataset.indentLevel = String(r));
}
function rs(e, t) {
  In(e, t);
}
function os(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Mn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ss() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), n = /* @__PURE__ */ new Set();
  let r = t.commonAncestorContainer;
  for (r.nodeType === Node.TEXT_NODE && (r = r.parentElement); r && r.contentEditable !== "true"; )
    r = r.parentElement;
  return r ? (r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((s) => {
    document.createRange().selectNodeContents(s), t.intersectsNode(s) && n.add(s);
  }), n.size === 0 && r.querySelectorAll("img").forEach((l) => {
    if (document.createRange().selectNode(l), t.intersectsNode(l)) {
      let d = l.parentElement;
      for (; d && d !== r; ) {
        if (d.tagName && Mn.has(d.tagName.toUpperCase())) {
          n.add(d);
          break;
        }
        d = d.parentElement;
      }
    }
  }), Array.from(n).filter((s) => {
    let l = s.parentElement;
    for (; l; ) {
      if (n.has(l))
        return !1;
      l = l.parentElement;
    }
    return !0;
  })) : [];
}
function is(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t - 1);
    n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * _n}px`, e.dataset.indentLevel = String(n));
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
    let n = t.nextNode();
    for (; n; ) {
      const r = n.textContent;
      if (r.startsWith("    ")) {
        n.textContent = r.substring(4);
        break;
      }
      n = t.nextNode();
    }
  } catch {
    e.innerHTML = e.innerHTML.replace(/^(&nbsp;){4}/, "");
  }
}
function Et(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let n = ss();
  const r = t.getRangeAt(0);
  if (n.length === 0) {
    const s = os(r.startContainer);
    if (!s) return !1;
    n = [s];
  }
  const a = n[0], o = n[n.length - 1];
  n.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      rs(s, e);
      return;
    }
    e ? is(s) : In(s, !1);
  });
  try {
    const s = document.createRange(), l = (g) => g.nodeType === Node.TEXT_NODE ? g : document.createTreeWalker(
      g,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), u = (g) => {
      if (g.nodeType === Node.TEXT_NODE)
        return g;
      const y = document.createTreeWalker(
        g,
        NodeFilter.SHOW_TEXT,
        null
      );
      let c = null, h = y.nextNode();
      for (; h; )
        c = h, h = y.nextNode();
      return c;
    }, d = l(a);
    d ? s.setStart(d, 0) : s.setStart(a, 0);
    const p = u(o);
    p ? s.setEnd(p, p.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
  } catch {
    try {
      const l = document.createRange();
      l.setStartBefore(a), l.setEndAfter(o), t.removeAllRanges(), t.addRange(l);
    } catch (l) {
      console.warn("Could not restore selection after indentation:", l);
    }
  }
  return !0;
}
function as(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, n = window.getSelection(), r = n && n.rangeCount > 0 ? n.getRangeAt(0) : null;
  return n && n.rangeCount > 0 && r && !r.collapsed && Et(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Bn = ({ currentColor: e, onColorSelect: t, title: n = "Font Color" }) => {
  const [r, a] = q(!1), o = $(null), s = [
    "#000000",
    // Black
    "#FF0000",
    // Red
    "#00FF00",
    // Green
    "#0000FF",
    // Blue
    "#FFFF00",
    // Yellow
    "#FF00FF",
    // Magenta
    "#00FFFF",
    // Cyan
    "#FFA500",
    // Orange
    "#800080",
    // Purple
    "#FFC0CB",
    // Pink
    "#A52A2A",
    // Brown
    "#808080",
    // Gray
    "#FFFFFF"
    // White
  ];
  W(() => {
    const d = (p) => {
      o.current && !o.current.contains(p.target) && a(!1);
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, []);
  const l = (d) => {
    t(d), a(!1);
  }, u = (d) => {
    const p = d.target.value;
    t(p);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a(!r),
        className: "color-picker-button",
        title: n,
        style: {
          backgroundColor: e || "#000000",
          border: "1px solid #ccc",
          borderRadius: "3px",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          position: "relative"
        },
        children: /* @__PURE__ */ i.jsx(So, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    r && /* @__PURE__ */ i.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ i.jsx("div", { className: "color-grid", children: s.map((d) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => l(d),
          className: `color-option ${e === d ? "selected" : ""}`,
          style: {
            backgroundColor: d,
            border: e === d ? "2px solid #007acc" : "1px solid #ccc",
            width: "24px",
            height: "24px",
            margin: "2px",
            borderRadius: "3px",
            cursor: "pointer"
          },
          title: d
        },
        d
      )) }),
      /* @__PURE__ */ i.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ i.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            id: "custom-color-input",
            type: "color",
            value: e || "#000000",
            onChange: u,
            style: {
              width: "100%",
              height: "32px",
              border: "1px solid #ccc",
              borderRadius: "3px",
              cursor: "pointer"
            }
          }
        )
      ] })
    ] })
  ] });
};
Bn.propTypes = {
  currentColor: x.string,
  onColorSelect: x.func.isRequired,
  title: x.string
};
const ls = [
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
], cs = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], us = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', kt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: n,
  onInsertImage: r,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = (c, h, L, f = null, b = !1) => /* @__PURE__ */ i.jsx(
    "button",
    {
      onClick: c,
      className: f && e[f] ? "active" : "",
      disabled: b,
      title: L,
      style: { opacity: b ? 0.5 : 1 },
      children: /* @__PURE__ */ i.jsx(h, { size: 16 })
    },
    L
  ), l = () => /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }), u = async (c) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(c.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      c.size > 1 * 1024 * 1024 && Re.info("Optimizing large image...");
      const f = await Qo(c), b = f.file;
      if (f.wasOptimized) {
        const w = ts(f);
        Re.info(w), console.log("Image optimization:", {
          original: `${f.originalWidth}×${f.originalHeight} (${(f.originalSize / 1024 / 1024).toFixed(2)}MB)`,
          optimized: `${f.width}×${f.height} (${(f.optimizedSize / 1024 / 1024).toFixed(2)}MB)`
        });
      }
      if (b.size > 2097152) {
        alert("Unable to compress image to under 2MB. Please use a smaller or simpler image."), Re.warn("Image still exceeds 2MB after optimization");
        return;
      }
      const S = await kn(b), k = await At(S);
      if (k && r) {
        const w = `<img src="${k}" data-key="${S}" alt="Inserted image" style="max-width: 100%;" />`;
        r(w);
      } else
        Re.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (h) {
      Re.error("Error uploading image", h), alert(`Failed to upload image: ${h.message}`);
    }
  }, d = () => {
    Et(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, p = () => {
    Et(!0);
  }, g = () => {
    const c = prompt("Enter URL:");
    c && t("createLink", c);
  }, y = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), Co, "Undo", null, !a),
    s(() => t("redo"), Lo, "Redo", null, !o),
    l(),
    s(() => t("bold"), xo, "Bold", "bold"),
    s(() => t("italic"), yo, "Italic", "italic"),
    s(() => t("underline"), To, "Underline", "underline"),
    s(() => t("strikethrough"), bo, "Strikethrough", "strikethrough"),
    l(),
    s(() => t("justifyLeft"), Ct, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Lt, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), Rt, "Align Right", "alignRight"),
    s(() => t("justifyFull"), Eo, "Justify", "alignJustify"),
    l(),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        onChange: (c) => t("fontName", c.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: ls.map(({ value: c, label: h }) => /* @__PURE__ */ i.jsx("option", { value: c, children: h }, c))
      }
    ),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        onChange: (c) => t("fontSize", c.target.value),
        value: e.fontSize || Qe,
        title: "Font Size",
        children: Cr.map(({ value: c, label: h }) => /* @__PURE__ */ i.jsx("option", { value: c, children: h }, c))
      }
    ),
    /* @__PURE__ */ i.jsx(
      Bn,
      {
        currentColor: e.fontColor,
        onColorSelect: (c) => t("foreColor", c),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        onChange: (c) => t("formatBlock", c.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: cs.map(({ value: c, label: h }) => /* @__PURE__ */ i.jsx("option", { value: c, children: h }, c))
      }
    ),
    l(),
    s(() => t("insertUnorderedList"), jn, "Bullet List"),
    s(() => t("insertOrderedList"), wo, "Numbered List"),
    l(),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: d,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ i.jsx(ko, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: p,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ i.jsx(Oo, { size: 16 })
      }
    ),
    l(),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: g,
        title: "Insert Link",
        children: /* @__PURE__ */ i.jsx(vo, { size: 16 })
      }
    ),
    s(() => t("insertHTML", us), Ao, "Insert Table"),
    n && s(n, Ye, "Insert Page Break"),
    l(),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (c) => c.target.files[0] && u(c.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: y,
        title: "Insert Image",
        children: /* @__PURE__ */ i.jsx(Ro, { size: 16 })
      }
    )
  ] });
};
kt.propTypes = {
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
    fontColor: x.string,
    headingLevel: x.string
  }).isRequired,
  onFormatText: x.func.isRequired,
  onAddPageBreak: x.func,
  onInsertImage: x.func,
  canUndo: x.bool,
  canRedo: x.bool
};
kt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function ds(e) {
  return !e || typeof e != "string" ? e : Ge(e);
}
function gs(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let n = t.getData("text/html") || t.getData("text/plain");
  return n ? (t.getData("text/html") ? n = ds(n) : n = hs(n), document.execCommand("insertHTML", !1, n), n) : null;
}
function hs(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((n) => n.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((n) => {
    const r = n.split(`
`).filter((o) => o.trim());
    return r.length === 0 ? "<p><br></p>" : `<p>${r.map((o) => fs(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function fs(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const ps = 20, ms = 20, ln = 20, cn = -12, xs = {
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  margin: "40px auto",
  backgroundColor: "transparent",
  minHeight: "100vh"
}, ys = {
  position: "relative",
  zIndex: 1,
  backgroundColor: "white",
  outline: "none",
  cursor: "text",
  fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
  fontSize: Qe,
  lineHeight: "1.4",
  color: "#333",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  border: "1px solid #e0e0e0",
  boxSizing: "border-box",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
}, ct = (e, t = !0) => {
  if (!e) return;
  const n = document.createRange(), r = window.getSelection();
  t ? (n.setStart(e, 0), n.collapse(!0)) : (n.selectNodeContents(e), n.collapse(!1)), r.removeAllRanges(), r.addRange(n);
}, Ts = (e, t, n) => !!((xe(t) || xe(n)) && (e.key.length === 1 || e.key === "Enter" || e.key === " ")), bs = (e, t, n) => !!((e.key === "Backspace" || e.key === "Delete") && (xe(t) || xe(n))), xe = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && xe(e.parentElement) : !1, Ot = ({
  dimensions: e,
  editorRef: t,
  onInput: n,
  onContentChange: r,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: l,
  onRemovePageBreak: u,
  zoomLevel: d = 100,
  pageMargins: p = de
}) => {
  const g = J(() => xn(p), [p]), y = d / 100, c = O((w, _) => {
    if (!w) return !1;
    const E = w.getBoundingClientRect(), m = _ - E.top;
    return m < g.top || m > E.height - g.bottom;
  }, [g.top, g.bottom]), h = O((w, _) => {
    _.preventDefault();
    const E = w.getBoundingClientRect(), m = _.clientX - E.left, C = _.clientY - E.top, R = E.width - ln - ps, j = cn, v = E.width - ln, P = cn + ms;
    m >= R && m <= v && C >= j && C <= P && u && u(w);
  }, [u]), L = O((w) => {
    w.preventDefault();
    const _ = t.current.getBoundingClientRect();
    if (w.clientY - _.top < g.top) {
      const m = t.current.firstElementChild;
      m && m.tagName !== "PAGE-BREAK" && ct(m, !0);
    } else {
      const m = t.current.lastElementChild;
      m && m.tagName !== "PAGE-BREAK" && ct(m, !1);
    }
  }, [t, g.top]), f = O((w) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const E = _.getRangeAt(0), { startContainer: m, endContainer: C } = E;
    if (Ts(w, m, C))
      return w.preventDefault(), !1;
    if (w.key === "Enter" && !w.shiftKey) {
      let R = m;
      for (R.nodeType === Node.TEXT_NODE && (R = R.parentElement); R && R !== t.current; ) {
        if (/^H[1-6]$/.test(R.tagName)) {
          w.preventDefault();
          const j = document.createElement("p");
          return j.innerHTML = "<br>", R.nextSibling ? R.parentNode.insertBefore(j, R.nextSibling) : R.parentNode.appendChild(j), ct(j, !0), r && r(), !1;
        }
        R = R.parentElement;
      }
    }
    if (as(w))
      return r && r(), !1;
    if (bs(w, m, C))
      return w.preventDefault(), !1;
    a && a(w);
  }, [a, r, t]), b = O((w) => {
    if (!t.current) return;
    const _ = w.target;
    if (xe(_)) {
      h(_, w);
      return;
    }
    if (c(t.current, w.clientY)) {
      L(w);
      return;
    }
    o && o(w);
  }, [t, o, h, L, c]), S = O((w) => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0) return;
    const E = _.getRangeAt(0), { startContainer: m } = E;
    if (xe(m))
      return w.preventDefault(), !1;
  }, []), k = O((w) => {
    const _ = gs(w);
    l && l(w, _);
  }, [l]);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        ...xs,
        maxWidth: `${e.width}px`,
        transform: `scale(${y})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: t,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            ...ys,
            minHeight: `${e.height}px`,
            width: `${e.width}px`,
            padding: `${g.top}px ${g.right}px ${g.bottom}px ${g.left}px`
          },
          onInput: n,
          onKeyDown: f,
          onBeforeInput: S,
          onClick: b,
          onScroll: s,
          onPaste: k,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Ot.propTypes = {
  dimensions: x.shape({
    width: x.number.isRequired,
    height: x.number.isRequired
  }).isRequired,
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
Ot.defaultProps = {
  zoomLevel: 100,
  pageMargins: de
};
const Es = hr(Ot), Hn = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: n = "A4",
  pageMargins: r = de,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: l,
  onAddPage: u,
  onDeletePage: d,
  onPageSizeChange: p,
  onPageMarginsChange: g,
  onZoomIn: y,
  onZoomOut: c,
  onZoomReset: h
} = {}) => {
  const L = Math.max(e?.length || 0, 1), f = (b) => {
    if (L <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    d?.(b);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ i.jsx(Po, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ i.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ i.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: n,
              onChange: (b) => p?.(b.target.value),
              children: [
                /* @__PURE__ */ i.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ i.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ i.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ i.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ i.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: r,
              onChange: (b) => g?.(b.target.value),
              children: Er().map((b) => /* @__PURE__ */ i.jsx("option", { value: b, children: wr(b) }, b))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: c,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ i.jsx(_o, { size: 12 })
        }
      ),
      /* @__PURE__ */ i.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: y,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ i.jsx(Mo, { size: 12 })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: h,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "page-list", children: e.map((b, S) => /* @__PURE__ */ i.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${S === t ? "active" : ""}`,
          onClick: () => l?.(S),
          "aria-label": `Go to page ${S + 1}`,
          "aria-current": S === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ i.jsx(Ye, { size: 14 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "Page ",
              S + 1
            ] })
          ]
        }
      ),
      L > 1 && /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (k) => {
            k.stopPropagation(), f(S);
          },
          "aria-label": `Delete page ${S + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ i.jsx(jo, { size: 14 })
        }
      )
    ] }, b.id || `page-${S}`)) }),
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: () => u?.(),
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ i.jsx(No, { size: 16 }),
          /* @__PURE__ */ i.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Hn.propTypes = {
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
const ws = Je.memo(Hn), Ue = 10, vs = 300, As = 200;
function Cs(e) {
  switch (e) {
    case M.TOP_LEFT:
    case M.BOTTOM_RIGHT:
      return "nwse-resize";
    case M.TOP_RIGHT:
    case M.BOTTOM_LEFT:
      return "nesw-resize";
    case M.TOP:
    case M.BOTTOM:
      return "ns-resize";
    case M.LEFT:
    case M.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ls(e, t, n, r, a, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = n / r;
  return [
    M.TOP_LEFT,
    M.TOP_RIGHT,
    M.BOTTOM_LEFT,
    M.BOTTOM_RIGHT
  ].includes(a) ? e / s > t ? t = e / s : e = t * s : [M.TOP, M.BOTTOM].includes(a) ? e = t * s : [M.LEFT, M.RIGHT].includes(a) && (t = e / s), { width: e, height: t };
}
function Rs({
  handler: e,
  startX: t,
  startY: n,
  currentX: r,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: l = ve
}) {
  const u = r - t, d = a - n;
  let p = o, g = s;
  switch (e) {
    case M.TOP_LEFT:
      p = o - u, g = s - d;
      break;
    case M.TOP_RIGHT:
      p = o + u, g = s - d;
      break;
    case M.BOTTOM_LEFT:
      p = o - u, g = s + d;
      break;
    case M.BOTTOM_RIGHT:
      p = o + u, g = s + d;
      break;
    case M.TOP:
      g = s - d;
      break;
    case M.BOTTOM:
      g = s + d;
      break;
    case M.LEFT:
      p = o - u;
      break;
    case M.RIGHT:
      p = o + u;
      break;
    default:
      return { width: p, height: g };
  }
  return { width: p, height: g } = Ls(
    p,
    g,
    o,
    s,
    e,
    l
  ), l.maxWidth && p > l.maxWidth && (p = l.maxWidth, l.preserveAspectRatio && (g = p / (o / s))), l.maxHeight && g > l.maxHeight && (g = l.maxHeight, l.preserveAspectRatio && (p = g * (o / s))), p = Math.max(l.minWidth, Math.min(l.maxWidth || p, p)), g = Math.max(l.minHeight, Math.min(l.maxHeight || g, g)), {
    width: Math.round(p),
    height: Math.round(g)
  };
}
function Dn(e, { width: t, height: n }) {
  me(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${n}px`, e.width = t, e.height = n) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${n}px`));
}
function ks(e, t, n) {
  Dn(t, n);
  const r = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(r);
}
function Os(e, t, n, r) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: l } = e, u = a || o, d = n.offsetWidth, p = n.offsetHeight, y = {
    // Increase width
    ">": u && s ? () => ({
      width: Math.min(r.maxWidth || 800, d + Ue),
      height: p
    }) : null,
    // Decrease width
    "<": u && s ? () => ({
      width: Math.max(r.minWidth || 50, d - Ue),
      height: p
    }) : null,
    // Increase height
    "+": u && s ? () => ({
      width: d,
      height: Math.min(r.maxHeight || 600, p + Ue)
    }) : null,
    // Decrease height
    "-": u && s ? () => ({
      width: d,
      height: Math.max(r.minHeight || 50, p - Ue)
    }) : null,
    // Reset to default
    r: u && !s ? () => ({ width: vs, height: As }) : null
  }[l];
  if (y) {
    e.preventDefault();
    const c = y();
    return ks(t, n, c), !0;
  }
  return !1;
}
const St = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: n,
  onImageDeselect: r,
  resizeOptions: a = ve
}) => {
  const o = $({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = $(a), l = ye();
  W(() => {
    s.current = a;
  }, [a]);
  const u = O((f) => {
    if (!me(f)) return;
    o.current.overlay && (lt(o.current.overlay), o.current.overlay = null), f.classList.add("selected");
    const b = to(f, s.current);
    b && (o.current.overlay = b, o.current.image = f, document.body.appendChild(b), b.querySelectorAll(".resize-handler").forEach((k) => {
      k.addEventListener("mousedown", p);
    }), n && n(f));
  }, [n]), d = O(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (lt(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, r && r();
  }, [r]), p = O((f) => {
    if (f.preventDefault(), f.stopPropagation(), !o.current.image) return;
    const b = f.currentTarget.dataset.handler, S = o.current.image.getBoundingClientRect(), k = window.pageYOffset || document.documentElement.scrollTop, w = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: f.clientX,
      y: f.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: f.clientX - S.left - w,
      offsetY: f.clientY - S.top - k
    }, o.current.handler = b, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = Cs(b), document.addEventListener("mousemove", g), document.addEventListener("mouseup", y);
  }, []), g = O((f) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    f.preventDefault(), f.stopPropagation();
    const { x: b, y: S, width: k, height: w } = o.current.start, _ = o.current.handler, E = f.clientX, m = f.clientY, C = Rs({
      handler: _,
      startX: b,
      startY: S,
      currentX: E,
      currentY: m,
      startWidth: k,
      startHeight: w,
      options: s.current
    });
    Dn(o.current.image, C), o.current.overlay && Tt(o.current.overlay, o.current.image);
  }, []), y = O((f) => {
    if (o.current.isResizing) {
      if (f.preventDefault(), f.stopPropagation(), o.current.image && o.current.start) {
        const b = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, S = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (b.width !== S.width || b.height !== S.height) && l.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: S } },
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: b } }
        );
      }
      if (o.current.start = null, o.current.handler = null, o.current.isResizing = !1, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current.image) {
        const b = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.image.dispatchEvent(b), t && t(o.current.image, {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        });
      }
    }
  }, [t, l]), c = O((f) => {
    o.current.overlay && !o.current.overlay.contains(f.target) && d();
    const b = f.target;
    if (me(b)) {
      if (b === o.current.image)
        return;
      u(b);
    }
  }, [u, d]), h = O((f) => {
    if ((f.key === "Delete" || f.key === "Backspace") && o.current.image && !o.current.isResizing) {
      f.preventDefault();
      const b = o.current.image;
      if (b.parentNode) {
        b.parentNode.removeChild(b), d();
        const S = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(S);
      }
    }
    f.key === "Escape" && o.current.image && d(), o.current.image && !o.current.isResizing && Os(f, e, o.current.image, s.current);
  }, [e, d]), L = O(() => {
    o.current.overlay && o.current.image && Tt(o.current.overlay, o.current.image);
  }, []);
  return W(() => {
    if (!e.current) return;
    const b = e.current.closest(".editor-viewport");
    return b && (b.addEventListener("scroll", L), window.addEventListener("scroll", L)), () => {
      b && b.removeEventListener("scroll", L), window.removeEventListener("scroll", L);
    };
  }, [e, L]), W(() => {
    if (!e.current) return;
    const f = e.current;
    return f.addEventListener("click", c), f.addEventListener("keydown", h), window.addEventListener("resize", L), () => {
      f.removeEventListener("click", c), f.removeEventListener("keydown", h), window.removeEventListener("resize", L), o.current.isResizing && (document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", y), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && lt(o.current.overlay);
    };
  }, [e, c, h, L, g, y]), W(() => {
    if (!e.current) return;
    const f = new MutationObserver((b) => {
      b.forEach((S) => {
        S.type === "childList" && S.removedNodes.forEach((k) => {
          k.nodeType === Node.ELEMENT_NODE && me(k) && k === o.current.image && d();
        });
      });
    });
    return f.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => f.disconnect();
  }, [e, d, u]), null;
};
St.propTypes = {
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
St.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: ve
};
const Nt = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, Ss = {
  ...Nt,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, ut = (e) => ({
  ...Nt,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), jt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: n,
  onDelete: r,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, l] = q({ top: 0, left: 0 }), [u, d] = q(!1), [p, g] = q("top"), [y, c] = q(o), h = $(null), L = ye(), f = (v) => {
    v && requestAnimationFrame(() => {
      const P = document.querySelector(".image-resize-overlay");
      P && Tt(P, v);
    });
  }, b = (v) => {
    if (!v) return null;
    const P = window.getComputedStyle(v);
    return {
      float: P.float || "none",
      margin: v.style.margin || "",
      display: P.display || "inline",
      width: v.style.width || v.width || "",
      height: v.style.height || v.height || "",
      aspectRatio: y
    };
  }, S = O(() => {
    if (!e) return "left";
    const v = window.getComputedStyle(e);
    return v.float === "right" ? "right" : v.float === "left" ? "left" : v.display === "block" && v.margin.includes("auto") ? "center" : "left";
  }, [e]), [k, w] = q("left");
  W(() => {
    e && w(S());
  }, [e, S]);
  const _ = O(() => {
    if (!e || !h.current) return;
    const v = e.getBoundingClientRect(), P = h.current.getBoundingClientRect(), N = window.innerWidth, B = window.innerHeight, U = v.bottom >= 0 && v.top <= B && v.right >= 0 && v.left <= N;
    let z = "top", Y = 0, X = 0;
    if (U) {
      const T = v.top - P.height - 10, I = B - v.bottom - P.height - 10;
      I > T && I > 0 ? (z = "bottom", Y = v.bottom + 10) : (z = "top", Y = v.top - P.height - 10);
    } else
      z = "top", Y = 10;
    X = v.left + v.width / 2 - P.width / 2;
    let oe = Math.max(10, Math.min(X, N - P.width - 10)), ie = Math.max(10, Math.min(Y, B - P.height - 10));
    l({ top: ie, left: oe }), g(z), d(!0);
  }, [e]);
  pn(() => {
    _();
    const v = () => {
      _();
    };
    return window.addEventListener("scroll", v), window.addEventListener("resize", v), () => {
      window.removeEventListener("scroll", v), window.removeEventListener("resize", v), d(!1);
    };
  }, [e, _]), W(() => {
    const v = (P) => {
      h.current && !h.current.contains(P.target) && P.target !== e && a();
    };
    return document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [e, a]);
  const E = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, m = (v) => {
    if (e && E[v]) {
      const P = b(e), N = k, B = E[v];
      e.style.float = B.float, e.style.margin = B.margin, e.style.display = B.display, w(v), f(e);
      const U = b(e);
      L.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: v, state: U } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: N, state: P } }
      ), t && t(v);
    }
  }, C = () => {
    if (e && e.parentNode) {
      const v = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      L.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: v } }
      ), e.parentNode.removeChild(e), r && r(), a();
    }
  }, R = () => {
    const v = y, P = !y;
    c(P), L.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: P } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: v } }
    ), n && n(P);
  }, j = () => {
    if (!e) return;
    const v = e.src;
    let P = "image.png";
    try {
      if (v.startsWith("blob:"))
        P = "image.png";
      else {
        const U = new URL(v).pathname.split("/"), z = U[U.length - 1];
        z && z.includes(".") && (P = z);
      }
    } catch {
      P = "image.png";
    }
    const N = document.createElement("a");
    N.href = v, N.download = P, N.style.display = "none", document.body.appendChild(N), N.click(), document.body.removeChild(N);
  };
  return !e || typeof document > "u" ? null : mn(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: h,
        className: "image-tooltip-menu",
        "data-menu-position": p,
        "aria-hidden": !u,
        style: {
          position: "fixed",
          top: `${s.top}px`,
          left: `${s.left}px`,
          zIndex: 999,
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          padding: "8px",
          display: "flex",
          gap: "2px",
          alignItems: "center",
          pointerEvents: u ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: u ? 1 : 0,
          visibility: u ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${y ? "" : "active"}`,
              onClick: R,
              title: `Toggle aspect ratio preservation (currently ${y ? "ON" : "OFF"})`,
              children: y ? /* @__PURE__ */ i.jsx(Io, { size: 14 }) : /* @__PURE__ */ i.jsx(Bo, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "tooltip-button download-button",
              onClick: j,
              title: "Download Image",
              style: Nt,
              children: /* @__PURE__ */ i.jsx(Ho, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `tooltip-button ${k === "left" ? "active" : ""}`,
              onClick: () => m("left"),
              title: "Align Left",
              style: ut(k === "left"),
              children: /* @__PURE__ */ i.jsx(Ct, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `tooltip-button ${k === "center" ? "active" : ""}`,
              onClick: () => m("center"),
              title: "Align Center",
              style: ut(k === "center"),
              children: /* @__PURE__ */ i.jsx(Lt, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `tooltip-button ${k === "right" ? "active" : ""}`,
              onClick: () => m("right"),
              title: "Align Right",
              style: ut(k === "right"),
              children: /* @__PURE__ */ i.jsx(Rt, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: C,
              title: "Delete Image",
              style: Ss,
              children: /* @__PURE__ */ i.jsx(bt, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
jt.propTypes = {
  imageElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onAspectRatioToggle: x.func,
  onDelete: x.func,
  onClose: x.func.isRequired,
  initialPreserveAspectRatio: x.bool
};
jt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Ze = (e) => {
  e.preventDefault(), e.stopPropagation();
}, Ns = (e, t) => {
  const n = Array.isArray(t) ? t : [t];
  document.querySelectorAll(e).forEach((r) => {
    n.forEach((a) => {
      r.classList.remove(a);
    });
  });
}, un = (e, t) => !e || !t ? !1 : e.contains(t), js = () => {
  window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
}, Pt = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, F = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function ae(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function le(e) {
  if (!ae(e))
    return null;
  const t = e.getBoundingClientRect(), n = Array.from(e.rows), r = n.length > 0 ? n[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= r)
    for (let u = 0; u < r; u++) {
      const d = s[u], p = d.style.width ? parseInt(d.style.width, 10) : d.offsetWidth;
      a.push(p || 100);
    }
  else if (n.length > 0) {
    const u = n[0];
    for (let d = 0; d < u.cells.length; d++) {
      const p = u.cells[d];
      a.push(p.offsetWidth);
    }
  }
  const l = n.map((u) => (u.style.height ? parseInt(u.style.height, 10) : null) || u.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: r,
    rows: n.length,
    columnWidths: a,
    rowHeights: l,
    rect: t
  };
}
function Ps({
  type: e,
  index: t,
  delta: n,
  currentStructure: r,
  options: a = Pt
}) {
  const o = {
    columnWidths: [...r.columnWidths],
    rowHeights: [...r.rowHeights],
    tableWidth: r.width,
    tableHeight: r.height
  }, s = (l, u, d, p, g) => {
    u >= 0 && u < l.length && (l[u] = Math.max(p, Math.min(g, l[u] + d)));
  };
  switch (e) {
    case F.COLUMN:
      s(o.columnWidths, t, n, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = r.width;
      break;
    case F.ROW:
      s(o.rowHeights, t, n, a.minRowHeight, a.maxRowHeight), o.tableHeight = r.height;
      break;
    case F.TABLE_BOTTOM:
      s(o.rowHeights, r.rows - 1, n, a.minRowHeight, a.maxRowHeight);
      break;
    case F.TABLE_RIGHT:
      s(o.columnWidths, r.columns - 1, n, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function Te(e) {
  if (!ae(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const n = t[0].cells.length;
  let r = e.querySelector("colgroup");
  r || (r = document.createElement("colgroup"), e.insertBefore(r, e.firstChild));
  const a = r.querySelectorAll("col"), o = a.length;
  if (o < n)
    for (let s = o; s < n; s++) {
      const l = document.createElement("col");
      r.appendChild(l);
    }
  else if (o > n)
    for (let s = o - 1; s >= n; s--)
      r.removeChild(a[s]);
}
function _e(e, t) {
  if (!ae(e)) return;
  Te(e);
  const { columnWidths: n, rowHeights: r, tableWidth: a, tableHeight: o } = t, s = n ? n.reduce((u, d) => u + d, 0) : 0, l = r ? r.reduce((u, d) => u + d, 0) : 0;
  if (a !== void 0 ? e.style.width = `${a}px` : s > 0 && (e.style.width = `${s}px`), o !== void 0 ? e.style.height = `${o}px` : l > 0 && (e.style.height = `${l}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const u = e.querySelector("colgroup");
    u && u.querySelectorAll("col").forEach((p, g) => {
      g < n.length && (p.style.width = `${n[g]}px`);
    }), e.style.width = `${s}px`;
  }
  r && r.length > 0 && (Array.from(e.rows).forEach((d, p) => {
    p < r.length && (d.style.height = `${r[p]}px`);
  }), e.style.height = `${l}px`), e.offsetHeight;
}
function Ms(e) {
  if (!ae(e)) return null;
  Te(e);
  const t = le(e);
  if (!t) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const r = e.getBoundingClientRect();
  n.style.top = `${r.top}px`, n.style.left = `${r.left}px`, n.style.width = `${r.width}px`, n.style.height = `${r.height}px`;
  for (let s = 0; s < t.columns - 1; s++) {
    const l = Ke(F.COLUMN, s, t, r, e);
    n.appendChild(l);
  }
  for (let s = 0; s < t.rows - 1; s++) {
    const l = Ke(F.ROW, s, t, r, e);
    n.appendChild(l);
  }
  const a = Xe(F.TABLE_BOTTOM, t, r);
  n.appendChild(a);
  const o = Xe(F.TABLE_RIGHT, t, r);
  return n.appendChild(o), n;
}
const _s = {
  [F.COLUMN]: {
    className: "table-resize-handler table-column-resize-handler",
    cursor: "col-resize",
    isVertical: !0
  },
  [F.ROW]: {
    className: "table-resize-handler table-row-resize-handler",
    cursor: "row-resize",
    isVertical: !1
  },
  [F.TABLE_BOTTOM]: {
    className: "table-resize-handler table-bottom-resize-handler",
    cursor: "ns-resize",
    isVertical: !1
  },
  [F.TABLE_RIGHT]: {
    className: "table-resize-handler table-right-resize-handler",
    cursor: "ew-resize",
    isVertical: !0
  }
};
function zn(e, t, n) {
  const r = _s[e];
  if (!r)
    return console.warn(`createResizeHandler: Unknown handler type ${e}`), null;
  const a = document.createElement("div");
  return a.className = r.className, a.dataset.type = e, a.style.position = "absolute", a.style.cursor = r.cursor, a.style.pointerEvents = "all", r.isVertical ? (a.style.width = "4px", a.style.height = `${t}px`) : (a.style.width = `${t}px`, a.style.height = "4px"), n != null && (a.dataset.index = n), a;
}
function Ke(e, t, n, r, a) {
  const o = e === F.COLUMN ? r.height : r.width, s = zn(e, o, t);
  return we(s, e, t, n, r, a), s;
}
function Xe(e, t, n) {
  const r = e === F.TABLE_RIGHT ? n.height : n.width, a = zn(e, r);
  return we(a, e, null, t, n, null), a;
}
function wt(e, t) {
  if (!e || !t) return;
  Te(t);
  const n = le(t);
  if (!n) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), l = e.querySelector(".table-right-resize-handler");
  if (a.length !== n.columns - 1 || o.length !== n.rows - 1 || !s || !l) {
    e.innerHTML = "";
    for (let g = 0; g < n.columns - 1; g++) {
      const y = Ke(F.COLUMN, g, n, r, t);
      e.appendChild(y);
    }
    for (let g = 0; g < n.rows - 1; g++) {
      const y = Ke(F.ROW, g, n, r, t);
      e.appendChild(y);
    }
    const d = Xe(F.TABLE_BOTTOM, n, r);
    e.appendChild(d);
    const p = Xe(F.TABLE_RIGHT, n, r);
    e.appendChild(p);
  } else
    a.forEach((d, p) => {
      we(d, F.COLUMN, p, n, r, t);
    }), o.forEach((d, p) => {
      we(d, F.ROW, p, n, r, t);
    }), s && we(s, F.TABLE_BOTTOM, null, n, r, null), l && we(l, F.TABLE_RIGHT, null, n, r, null);
}
function ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Mt(e, t = "Operation") {
  return ae(e) ? !0 : (console.warn(`${t}: Invalid table element`), !1);
}
function Is(e) {
  const t = document.createElement("tr"), n = e.cells.length;
  for (let r = 0; r < n; r++) {
    const a = document.createElement("td");
    a.innerHTML = "&nbsp;", t.appendChild(a);
  }
  return t;
}
function Fn(e, t, n = 0) {
  if (!Mt(e, "insertRowAtPosition"))
    return null;
  const r = n === -1 ? t : t + 1;
  if (r < 0 || r > e.rows.length)
    return console.warn(`insertRowAtPosition: Invalid row index ${r}, table has ${e.rows.length} rows`), null;
  const a = e.rows[t];
  if (!a)
    return console.warn(`insertRowAtPosition: Could not find reference row at index ${t}`), null;
  try {
    const o = Is(a);
    r < e.rows.length ? e.rows[r].parentNode.insertBefore(o, e.rows[r]) : e.rows[e.rows.length - 1].parentNode.appendChild(o), Te(e);
    const s = le(e);
    return s && _e(e, {
      columnWidths: s.columnWidths,
      rowHeights: s.rowHeights
    }), o;
  } catch (o) {
    return console.error("insertRowAtPosition: Failed to insert row", o), null;
  }
}
function Bs(e, t) {
  return Fn(e, t, -1);
}
function Hs(e, t) {
  return Fn(e, t, 1);
}
function Ds() {
  const e = document.createElement("td");
  return e.innerHTML = "&nbsp;", e;
}
function Un(e, t, n = 0) {
  if (!Mt(e, "insertColumnAtPosition"))
    return !1;
  if (t < 0)
    return console.warn(`insertColumnAtPosition: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("insertColumnAtPosition: Table has no rows"), !1;
  const a = n === -1 ? t : t + 1;
  if (a > r[0].cells.length)
    return console.warn(`insertColumnAtPosition: Column index ${a} out of bounds`), !1;
  try {
    for (const s of r) {
      const l = Ds();
      a < s.cells.length ? s.insertBefore(l, s.cells[a]) : s.appendChild(l);
    }
    Te(e);
    const o = le(e);
    return o && _e(e, {
      columnWidths: o.columnWidths,
      rowHeights: o.rowHeights
    }), !0;
  } catch (o) {
    return console.error("insertColumnAtPosition: Failed to insert column", o), !1;
  }
}
function zs(e, t) {
  return Un(e, t, -1);
}
function Fs(e, t) {
  return Un(e, t, 1);
}
function we(e, t, n, r, a, o) {
  switch (t) {
    case F.COLUMN:
      Us(e, n, r, a, o);
      break;
    case F.ROW:
      $s(e, n, r, a, o);
      break;
    case F.TABLE_BOTTOM:
      Ws(e, r, a);
      break;
    case F.TABLE_RIGHT:
      Gs(e, r, a);
      break;
  }
}
function Us(e, t, n, r, a) {
  if (a?.rows.length > 0 && a.rows[0].cells.length > t) {
    const s = a.rows[0].cells[t].getBoundingClientRect(), l = a.getBoundingClientRect();
    e.style.left = `${s.right - l.left - 2}px`, e.style.height = `${r.height}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${r.height}px`;
}
function $s(e, t, n, r, a) {
  if (a?.rows.length > t && a.rows[t].cells.length > 0) {
    const s = a.rows[t].cells[0].getBoundingClientRect(), l = a.getBoundingClientRect();
    e.style.top = `${s.bottom - l.top - 2}px`, e.style.width = `${r.width}px`;
    return;
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += n.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${r.width}px`;
}
function Ws(e, t, n) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${n.width}px`;
}
function Gs(e, t, n) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${n.height}px`;
}
function $n(e, t, n) {
  return Mt(e, `delete${n.charAt(0).toUpperCase() + n.slice(1)}`) ? n === "row" ? Zs(e, t) : n === "column" ? Vs(e, t) : !1 : !1;
}
function Zs(e, t) {
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const n = e.rows[t];
    n.parentNode.removeChild(n), Te(e);
    const r = le(e);
    return r && _e(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteRow: Failed to delete row", n), !1;
  }
}
function Vs(e, t) {
  if (t < 0)
    return console.warn(`deleteColumn: Invalid column index ${t}`), !1;
  const n = Array.from(e.rows);
  if (n.length === 0)
    return console.warn("deleteColumn: Table has no rows"), !1;
  if (t >= n[0].cells.length)
    return console.warn(`deleteColumn: Column index ${t} out of bounds`), !1;
  if (n[0].cells.length <= 1)
    return console.warn("deleteColumn: Cannot delete the last column in the table"), !1;
  try {
    for (const a of n)
      a.cells.length > t && a.removeChild(a.cells[t]);
    Te(e);
    const r = le(e);
    return r && _e(e, {
      columnWidths: r.columnWidths,
      rowHeights: r.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteColumn: Failed to delete column", r), !1;
  }
}
function qs(e, t) {
  return $n(e, t, "row");
}
function Ys(e, t) {
  return $n(e, t, "column");
}
const _t = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: n,
  onTableDeselect: r,
  resizeOptions: a = Pt
}) => {
  const o = $(null), s = $(null), l = $(null), u = $(null), d = $(null), p = $(a), g = $(!1), [y, c] = q(null), h = ye();
  W(() => {
    p.current = a;
  }, [a]);
  const L = O(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (ke(o.current), o.current = null), c(null), l.current = null, u.current = null, d.current = null, g.current = !1, r && r();
  }, [r]), f = O((C) => {
    if (Ze(C), !s.current) return;
    const R = C.currentTarget, j = R.dataset.type, v = parseInt(R.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const P = le(s.current);
    l.current = {
      x: C.clientX,
      y: C.clientY,
      structure: { ...P }
    }, u.current = j, d.current = v, g.current = !0, document.body.classList.add("table-resize-in-progress");
    const B = {
      [F.COLUMN]: "col-resize",
      [F.ROW]: "row-resize",
      [F.TABLE_BOTTOM]: "ns-resize",
      [F.TABLE_RIGHT]: "ew-resize"
    }[j] || "default";
    document.body.style.cursor = B, document.addEventListener("mousemove", k), document.addEventListener("mouseup", w);
  }, []), b = O((C) => {
    const R = Ms(C, p.current);
    return R && (o.current = R, s.current = C, document.body.appendChild(R), R.querySelectorAll(".table-resize-handler").forEach((v) => {
      v.addEventListener("mousedown", f);
    })), R;
  }, [f]), S = O((C) => {
    if (!ae(C)) return;
    o.current && (ke(o.current), o.current = null), C.classList.add("selected"), b(C) && (c(C), n && n(C));
  }, [n, b]), k = O((C) => {
    if (!g.current || !s.current || !l.current || !u.current) return;
    Ze(C);
    const { x: R, y: j, structure: v } = l.current, P = u.current, N = d.current, B = C.clientX, U = C.clientY;
    let z = 0;
    switch (P) {
      case F.COLUMN:
        z = B - R;
        break;
      case F.ROW:
        z = U - j;
        break;
      case F.TABLE_BOTTOM:
        z = U - j;
        break;
      case F.TABLE_RIGHT:
        z = B - R;
        break;
    }
    const Y = Ps({
      type: P,
      index: N,
      delta: z,
      currentStructure: v,
      options: p.current
    });
    _e(s.current, Y), o.current && wt(o.current, s.current);
  }, []), w = O((C) => {
    if (g.current) {
      if (Ze(C), s.current && l.current) {
        const R = {
          structure: l.current.structure
        }, j = {
          structure: le(s.current)
        };
        (R.structure.width !== j.structure.width || R.structure.height !== j.structure.height || JSON.stringify(R.structure.columnWidths) !== JSON.stringify(j.structure.columnWidths) || JSON.stringify(R.structure.rowHeights) !== JSON.stringify(j.structure.rowHeights)) && h.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: j } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: R } }
        );
      }
      if (l.current = null, u.current = null, d.current = null, g.current = !1, document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", w), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const R = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(R), t && t(s.current, le(s.current));
      }
    }
  }, [t, h]), _ = O((C) => {
    o.current && !o.current.contains(C.target) && L();
    const j = C.target.closest("table");
    if (j && ae(j)) {
      if (j === s.current)
        return;
      S(j);
    }
  }, [S, L]), E = O((C) => {
    if (C.key === "Delete" && s.current && !g.current) {
      C.preventDefault();
      const R = s.current;
      if (R.parentNode) {
        R.parentNode.removeChild(R), L();
        const j = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(j);
      }
    }
    C.key === "Escape" && s.current && L();
  }, [e, L]), m = O(() => {
    o.current && s.current && wt(o.current, s.current);
  }, []);
  return W(() => {
    if (!e.current) return;
    const R = e.current.closest(".editor-viewport");
    return R && (R.addEventListener("scroll", m), window.addEventListener("scroll", m)), () => {
      R && R.removeEventListener("scroll", m), window.removeEventListener("scroll", m);
    };
  }, [e, m]), W(() => {
    if (!e.current) return;
    const C = e.current;
    return C.addEventListener("click", _), C.addEventListener("keydown", E), window.addEventListener("resize", m), () => {
      C.removeEventListener("click", _), C.removeEventListener("keydown", E), window.removeEventListener("resize", m), g.current && (document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", w), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && ke(o.current);
    };
  }, [e, _, E, m, k, w]), W(() => {
    if (!e.current) return;
    const C = new MutationObserver((R) => {
      R.forEach((j) => {
        j.type === "childList" ? (j.removedNodes.forEach((v) => {
          v.nodeType === Node.ELEMENT_NODE && ae(v) && v === y && L();
        }), j.addedNodes.forEach((v) => {
          if (v.nodeType !== Node.ELEMENT_NODE) return;
          if (ae(v)) {
            setTimeout(() => S(v), 50);
            return;
          }
          const P = v.querySelectorAll?.("table") || [];
          P.length > 0 && setTimeout(() => S(P[0]), 50);
        }), y && [...j.addedNodes, ...j.removedNodes].some(
          (P) => P.nodeType === Node.ELEMENT_NODE && P.tagName === "TR"
        ) && o.current && s.current && (ke(o.current), o.current = null, b(s.current))) : j.type === "attributes" && ["colspan", "rowspan"].includes(j.attributeName) && y && o.current && s.current && (ke(o.current), o.current = null, b(s.current));
      });
    });
    return C.observe(e.current, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => C.disconnect();
  }, [e, y, L, S, b]), null;
};
_t.propTypes = {
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: x.func,
  onTableSelect: x.func,
  onTableDeselect: x.func,
  resizeOptions: x.shape({
    minColumnWidth: x.number,
    minRowHeight: x.number,
    maxColumnWidth: x.number,
    maxRowHeight: x.number,
    tableMinWidth: x.number,
    tableMinHeight: x.number,
    tableMaxWidth: x.number,
    tableMaxHeight: x.number
  })
};
_t.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Pt
};
const $e = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, dn = {
  left: { float: "left", margin: "10px 10px 10px 0", marginLeft: "", marginRight: "" },
  center: { float: "none", margin: "10px auto", marginLeft: "auto", marginRight: "auto" },
  right: { float: "right", margin: "10px 0 10px 10px", marginLeft: "", marginRight: "" }
}, Ee = {
  INSERT_ROW_ABOVE: "INSERT_ROW_ABOVE",
  INSERT_ROW_BELOW: "INSERT_ROW_BELOW",
  INSERT_COL_LEFT: "INSERT_COL_LEFT",
  INSERT_COL_RIGHT: "INSERT_COL_RIGHT",
  DELETE_ROW: "DELETE_ROW",
  DELETE_COL: "DELETE_COL"
}, gn = (e) => {
  if (!e) return;
  const t = (n) => {
    const r = document.querySelector(".table-resize-overlay");
    r && wt(r, n);
  };
  typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame(() => t(e)) : setTimeout(() => t(e), 16);
}, hn = (e) => {
  if (!e) return null;
  const t = window.getComputedStyle(e);
  return {
    float: t.float || "none",
    margin: e.style.margin || "",
    marginLeft: e.style.marginLeft || "",
    marginRight: e.style.marginRight || "",
    display: t.display || "table"
  };
}, It = ({
  tableElement: e,
  onAlignChange: t,
  onClose: n,
  selectedRowIndex: r,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, l] = q({ top: 0, left: 0 }), [u, d] = q(!1), [p, g] = q("top"), [y, c] = q("left"), h = $(null), L = ye(), f = O(() => {
    if (!e) return "left";
    const N = window.getComputedStyle(e);
    return N.marginLeft === "auto" && N.marginRight === "auto" ? "center" : N.float === "right" ? "right" : (N.float === "left", "left");
  }, [e]);
  W(() => {
    e && c(f());
  }, [e, f]);
  const b = O(() => {
    if (!e || !h.current) return;
    const N = e.getBoundingClientRect(), B = h.current.getBoundingClientRect(), U = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, z = N.bottom >= 0 && N.top <= U.height && N.right >= 0 && N.left <= U.width;
    let Y = "top", X = 0, oe = 0;
    if (z) {
      const Z = N.top - B.height - 10, se = U.height - N.bottom - B.height - 10;
      se > Z && se > 0 ? (Y = "bottom", X = N.bottom + 10) : (Y = "top", X = N.top - B.height - 10);
    } else
      Y = "top", X = 10;
    oe = N.left + N.width / 2 - B.width / 2;
    const ie = window.innerWidth, T = window.innerHeight;
    let I = Math.max(10, Math.min(oe, ie - B.width - 10)), G = Math.max(10, Math.min(X, T - B.height - 10));
    l({ top: G, left: I }), g(Y), d(!0);
  }, [e]);
  pn(() => {
    b();
    const N = () => {
      b();
    };
    return window.addEventListener("scroll", N), window.addEventListener("resize", N), () => {
      window.removeEventListener("scroll", N), window.removeEventListener("resize", N), d(!1);
    };
  }, [e, b]), W(() => {
    const N = (B) => {
      h.current && !h.current.contains(B.target) && B.target !== e && !e.contains(B.target) && n();
    };
    return document.addEventListener("mousedown", N), () => {
      document.removeEventListener("mousedown", N);
    };
  }, [e, n]);
  const S = O((N) => {
    if (!e || !dn[N]) return;
    const B = hn(e), U = y, z = dn[N];
    e.style.float = z.float, e.style.margin = z.margin, e.style.marginLeft = z.marginLeft, e.style.marginRight = z.marginRight, c(N), gn(e);
    const Y = hn(e);
    L.recordOperation(
      { type: "TABLE_ALIGN", payload: { element: e, alignment: N, state: Y } },
      { type: "TABLE_ALIGN", payload: { element: e, alignment: U, state: B } }
    ), t?.(N);
  }, [e, y, L, t]), k = O((N, B) => () => {
    if (!e) return;
    const U = N.includes("ROW"), z = U ? r : a;
    if (z == null || !B(e, z)) return;
    o?.current && L.updateContinuousContent(o.current.innerHTML);
    const X = U ? { element: e, index: z } : { element: e, index: z };
    L.recordOperation(
      { type: N, payload: X },
      { type: N, payload: X }
      // Reverse operation would be same type
    ), gn(e), requestAnimationFrame(() => b());
  }, [e, r, a, o, L, b]), w = J(
    () => k(Ee.INSERT_ROW_ABOVE, Bs),
    [k]
  ), _ = J(
    () => k(Ee.INSERT_ROW_BELOW, Hs),
    [k]
  ), E = J(
    () => k(Ee.INSERT_COL_LEFT, zs),
    [k]
  ), m = J(
    () => k(Ee.INSERT_COL_RIGHT, Fs),
    [k]
  ), C = J(
    () => k(Ee.DELETE_ROW, qs),
    [k]
  ), R = J(
    () => k(Ee.DELETE_COL, Ys),
    [k]
  ), j = (N) => ({
    ...$e,
    background: N ? "#007bff" : "transparent",
    color: N ? "#fff" : "#333"
  }), v = J(() => ({
    rowAction: { ...$e, background: "#28a745", color: "#fff" },
    colAction: { ...$e, background: "#0056b3", color: "#fff" },
    delete: { ...$e, background: "#dc3545", color: "#fff" },
    divider: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" }
  }), []), P = J(() => ({
    position: "fixed",
    top: `${s.top}px`,
    left: `${s.left}px`,
    zIndex: 999,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    padding: "8px",
    display: "flex",
    gap: "2px",
    alignItems: "center",
    pointerEvents: u ? "auto" : "none",
    minWidth: "100px",
    minHeight: "32px",
    opacity: u ? 1 : 0,
    visibility: u ? "visible" : "hidden",
    transition: "opacity 0.15s ease, visibility 0.15s ease"
  }), [s, u]);
  return !e || typeof document > "u" ? null : mn(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: h,
        className: "table-tooltip-menu",
        "data-menu-position": p,
        "aria-hidden": !u,
        style: P,
        children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `tooltip-button ${y === "left" ? "active" : ""}`,
              onClick: () => S("left"),
              title: "Align Left",
              style: j(y === "left"),
              children: /* @__PURE__ */ i.jsx(Ct, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `tooltip-button ${y === "center" ? "active" : ""}`,
              onClick: () => S("center"),
              title: "Align Center",
              style: j(y === "center"),
              children: /* @__PURE__ */ i.jsx(Lt, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `tooltip-button ${y === "right" ? "active" : ""}`,
              onClick: () => S("right"),
              title: "Align Right",
              style: j(y === "right"),
              children: /* @__PURE__ */ i.jsx(Rt, { size: 14 })
            }
          ),
          r != null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("div", { style: v.divider }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: w,
                title: "Insert Row Above",
                style: v.rowAction,
                children: /* @__PURE__ */ i.jsx(Do, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: _,
                title: "Insert Row Below",
                style: v.rowAction,
                children: /* @__PURE__ */ i.jsx(zo, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: C,
                title: "Delete Row",
                style: v.delete,
                children: /* @__PURE__ */ i.jsx(bt, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx("div", { style: v.divider }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: E,
                title: "Insert Column Left",
                style: v.colAction,
                children: /* @__PURE__ */ i.jsx(Fo, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: m,
                title: "Insert Column Right",
                style: v.colAction,
                children: /* @__PURE__ */ i.jsx(Uo, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: R,
                title: "Delete Column",
                style: v.delete,
                children: /* @__PURE__ */ i.jsx(bt, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
It.propTypes = {
  tableElement: x.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: x.func,
  onClose: x.func.isRequired,
  selectedRowIndex: x.number,
  selectedColIndex: x.number,
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
It.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const Ks = ".table-cell-selected, .table-row-selected, .table-col-selected", fn = () => {
  Ns(Ks, ["table-cell-selected", "table-row-selected", "table-col-selected"]);
}, Bt = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const n = $({
    selectedCells: /* @__PURE__ */ new Set(),
    selectionMode: null,
    selectedRowIndex: null,
    selectedColIndex: null,
    currentTable: null,
    isSelecting: !1,
    hasDragged: !1,
    startCell: null
  }), [r, a] = q(!1), [o, s] = q(!1), [l, u] = q(null), [d, p] = q(null), g = $(null), y = O(() => {
    n.current = {
      selectedCells: /* @__PURE__ */ new Set(),
      selectionMode: null,
      selectedRowIndex: null,
      selectedColIndex: null,
      currentTable: null,
      isSelecting: !1,
      hasDragged: !1,
      startCell: null
    }, a(!1), s(!1), u(null), p(null);
  }, []), c = O(() => {
    y(), fn(), g.current !== null && (g.current = null, t && t(null));
  }, [t, y]), h = O((E) => {
    const m = E.closest("tr"), C = E.closest("table");
    if (!m || !C) return null;
    const R = Array.from(C.rows).indexOf(m), j = Array.from(m.cells).indexOf(E);
    return { rowIndex: R, cellIndex: j, table: C };
  }, []), L = O((E) => {
    if (E.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const m = Array.from(E), C = m[0], R = h(C);
    if (!R) return { mode: null, rowIndex: null, colIndex: null };
    const { table: j } = R;
    return m.filter((N) => {
      const B = h(N);
      return B && B.table === j && B.rowIndex === R.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: R.rowIndex, colIndex: null } : m.filter((N) => {
      const B = h(N);
      return B && B.table === j && B.cellIndex === R.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: R.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [h]), f = O((E, m, C, R, j) => {
    if (fn(), !(!j || !E)) {
      if (E === "row" && m !== null) {
        const v = j.rows[m];
        v && Array.from(v.cells).forEach((P) => {
          P.classList.add("table-row-selected");
        });
      } else E === "column" && C !== null ? Array.from(j.rows).forEach((v) => {
        const P = v.cells[C];
        P && P.classList.add("table-col-selected");
      }) : E === "cells" && R.forEach((v) => {
        v.classList.add("table-cell-selected");
      });
      js();
    }
  }, []), b = O((E, m) => {
    const C = L(E);
    n.current.selectedCells = E, n.current.selectionMode = C.mode, n.current.selectedRowIndex = C.rowIndex, n.current.selectedColIndex = C.colIndex, n.current.currentTable = m, p(m), f(C.mode, C.rowIndex, C.colIndex, E, m);
    const R = C.mode ? {
      mode: C.mode,
      cells: E,
      rowIndex: C.rowIndex,
      colIndex: C.colIndex,
      table: m
    } : null;
    JSON.stringify(g.current) !== JSON.stringify(R) && (g.current = R, t && t(R));
  }, [L, f, t]), S = O((E) => {
    const m = E.target.closest("td, th");
    if (!m) return;
    const C = h(m);
    C && (a(!0), u(m), p(C.table), s(!1));
  }, [h]), k = O((E) => {
    if (!r || !l) return;
    const m = E.target.closest("td, th");
    if (!m || !d || !un(d, m)) return;
    s(!0), Ze(E);
    const C = h(l), R = h(m);
    if (!C || !R || C.table !== R.table) return;
    const j = Math.min(C.rowIndex, R.rowIndex), v = Math.max(C.rowIndex, R.rowIndex), P = Math.min(C.cellIndex, R.cellIndex), N = Math.max(C.cellIndex, R.cellIndex), B = /* @__PURE__ */ new Set();
    for (let U = j; U <= v; U++) {
      const z = d.rows[U];
      if (z)
        for (let Y = P; Y <= N; Y++) {
          const X = z.cells[Y];
          X && B.add(X);
        }
    }
    b(B, d);
  }, [r, l, d, h, b]), w = O(() => {
    o || c(), a(!1), u(null);
  }, [o, c]), _ = O((E) => {
    const m = E.target.closest("td, th"), C = E.target.closest("table");
    if (!(m && d && un(d, m))) {
      if (C && C !== d) {
        c();
        return;
      }
      C || c();
    }
  }, [c, d]);
  return W(() => {
    if (!e.current) return;
    const E = e.current, m = (R) => {
      R.target.closest("td, th") && S(R);
    }, C = (R) => {
      R.target.closest("td, th") && k(R);
    };
    return E.addEventListener("mousedown", m, !0), E.addEventListener("mouseenter", C, !0), document.addEventListener("mouseup", w), document.addEventListener("click", _), () => {
      E.removeEventListener("mousedown", m, !0), E.removeEventListener("mouseenter", C, !0), document.removeEventListener("mouseup", w), document.removeEventListener("click", _);
    };
  }, [e, S, k, w, _]), W(() => {
    if (!e.current) return;
    const E = new MutationObserver((m) => {
      m.forEach((C) => {
        C.type === "childList" && d && !e.current.contains(d) && c();
      });
    });
    return E.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => E.disconnect();
  }, [e, c, d]), null;
};
Bt.propTypes = {
  editorRef: x.shape({
    current: x.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: x.func
};
Bt.defaultProps = {
  onCellSelectionChange: void 0
};
const Xs = 50, dt = 50, Js = 50, Qs = 100, ei = 300, ti = 2e3, Ht = fr(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: n,
  onDeletePage: r,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  onContentFinalized: l,
  showSidebar: u = !0,
  showToolbar: d = !0,
  showPageManager: p = !0
}, g) => {
  const y = wn(), c = ye(), { pageSize: h, pageMargins: L, continuousContent: f, pageBoundaries: b, activePage: S, zoomLevel: k, canUndo: w, canRedo: _ } = y, E = $(null), m = $(null), { currentFormat: C, formatText: R, updateCurrentFormatFromSelection: j } = Or(), [v, P] = q(!1), [N, B] = q(null), [U, z] = q(!0), [Y, X] = q(!1), [oe, ie] = q(null), [T, I] = q(null), [G, Z] = q(null), {
    checkAndUpdateBoundaries: se,
    getCurrentPage: te,
    scrollToPage: V,
    updateBoundaries: K,
    triggerAutoReflow: re,
    removePageAndContent: Ie,
    removePageBreak: Dt,
    insertPageBreakAtBoundary: zt
  } = Jr(h, m, k, L), Gn = J(() => je(h), [h]), [Zn, Vn] = q(!1), he = $(null), Be = $(!1), He = $(!1), fe = $(null), Ae = $(!1), De = $(f), et = O(() => {
    Be.current = !1;
    const A = Math.max(0, b.length - 1);
    c.setActivePage(A), setTimeout(() => {
      V(A, E);
    }, Js);
  }, [b.length, c, V]);
  W(() => {
    if (!m.current || Ae.current) return;
    m.current.innerHTML = f, Ae.current = !0, De.current = f;
    const A = setTimeout(() => {
      K();
    }, Xs);
    return () => clearTimeout(A);
  }, []), W(() => {
    if (!m.current || !Ae.current) return;
    if (m.current.innerHTML !== f) {
      m.current.innerHTML = f;
      const D = setTimeout(() => {
        K(), Be.current && et();
      }, dt);
      return De.current = f, () => clearTimeout(D);
    }
  }, [f, K, et]), W(() => {
    s && Ae.current && s(f);
  }, [f, s]), W(() => {
    if (!(!l || !Ae.current))
      return fe.current && clearTimeout(fe.current), fe.current = setTimeout(async () => {
        try {
          const A = m.current ? m.current.innerHTML : f, D = await nn(A);
          l(D);
        } catch (A) {
          console.error("Error converting images to base64 for onContentFinalized:", A), l(f);
        }
      }, ti), () => {
        fe.current && clearTimeout(fe.current);
      };
  }, [f, l]);
  const { restoreCursorPosition: tt, hasActiveCursorSelection: nt } = eo({
    updateCurrentFormatFromSelection: j,
    editorRef: m
  }), qn = O((A) => {
    A !== f && c.updateContinuousContent(A), m.current && m.current.innerHTML !== A && (m.current.innerHTML = A), De.current = A, setTimeout(() => {
      K();
    }, dt);
  }, [f, c, K]), rt = O((A) => {
    if (!m.current || !A) return;
    nt() || tt(), document.execCommand("insertHTML", !1, A);
    const D = m.current.innerHTML;
    c.updateContinuousContent(D), De.current = D, setTimeout(() => {
      K(), re(200);
    }, dt);
  }, [nt, tt, c, K, re]), Ft = J(() => ({
    /**
     * Get the current HTML content from the editor with blob URLs converted to base64
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * All blob:// image URLs are converted to base64 data URLs for portability
     * @returns {Promise<string>} Promise resolving to HTML content with base64 images
     */
    getHTMLContent: async () => {
      const A = m.current ? m.current.innerHTML : f;
      try {
        return await nn(A);
      } catch (D) {
        return console.error("Error converting images to base64:", D), A;
      }
    },
    /**
     * Get the selected HTML content from the editor
     * Returns the HTML content of the selected element or the common ancestor of the selection
     * Supports images and table content
     * @returns {string} The selected HTML content
     */
    getSelectedHTMLContent: () => {
      if (!m.current) return "";
      const A = window.getSelection();
      if (!A || A.rangeCount === 0) return "";
      const D = A.getRangeAt(0);
      if (!m.current.contains(D.commonAncestorContainer)) return "";
      if (D.collapsed) {
        const ee = D.commonAncestorContainer;
        return ee.nodeType === Node.TEXT_NODE ? ee.parentElement ? ee.parentElement.outerHTML : "" : ee.outerHTML || "";
      }
      let Q = D.commonAncestorContainer;
      if (Q.nodeType === Node.TEXT_NODE && (Q = Q.parentElement), Q === m.current) {
        const ee = D.cloneContents(), be = document.createElement("div");
        return be.appendChild(ee), be.innerHTML;
      }
      return Q ? Q.outerHTML : "";
    },
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (m.current ? m.current.innerHTML : f).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => m.current ? Kr(m.current) : null,
    /**
     * Set the editor content programmatically
     * Converts base64 image data URLs to blob URLs and stores them in IndexedDB
     * @param {string} html - HTML content to set (base64 images will be converted to blobs)
     * @returns {Promise<void>}
     */
    setContent: async (A) => {
      let D;
      try {
        D = await rn(A);
      } catch (ee) {
        console.error("Error converting base64 images to blobs:", ee), D = A;
      }
      const Q = Ge(D);
      qn(Q);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (A) => {
      c.updatePageSize(A), K({ pageSize: A });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (A) => {
      c.updatePageMargins(A), K({ pageMargins: A });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * Converts base64 image data URLs to blob URLs and stores them in IndexedDB
     * @param {string} html - HTML content to insert (base64 images will be converted to blobs)
     * @returns {Promise<void>}
     */
    insertContent: async (A) => {
      let D;
      try {
        D = await rn(A);
      } catch (ee) {
        console.error("Error converting base64 images to blobs:", ee), D = A;
      }
      const Q = Ge(D);
      rt(Q);
    }
  }), [f, c, K, re, nt, tt]);
  pr(g, () => Ft, [Ft]);
  const ot = O(() => {
    if (!m.current) return;
    let A = m.current.innerHTML;
    A = Ge(A), A !== m.current.innerHTML && (m.current.innerHTML = A);
    const D = f;
    if (D !== A) {
      const ee = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: A
      }, be = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: D
      };
      c.recordOperation(ee, be);
    }
    c.updateContinuousContent(A), se(), re(200);
    const Q = te(E);
    Q !== S && c.setActivePage(Q);
  }, [c, se, te, S, re, E, m, f]), Yn = O((A) => {
    ot();
  }, [ot]), Ut = O((A) => {
    c.updatePageSize(A), K({ pageSize: A }), a && a(A);
  }, [c, K, a]), $t = O((A) => {
    c.updatePageMargins(A), K({ pageMargins: A }), o && o(A);
  }, [c, K, o]), Wt = O((A) => {
    A < 0 || A >= b.length || (He.current = !0, c.setActivePage(A), V(A, E), setTimeout(() => {
      He.current = !1;
    }, ei), t && t(A));
  }, [c, V, t, b.length]), Gt = O(() => {
    const A = b.length + 1;
    zt(A) && (Be.current = !0, setTimeout(() => {
      Be.current && et();
    }, 100)), n && n();
  }, [b.length, zt, c, V, n]), Kn = O(() => {
    const A = window.getSelection();
    if (A && A.rangeCount > 0) {
      if (!m?.current) return;
      const ee = `<page-break data-page-break="true" contenteditable="false" data-page-number="${m.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ee), setTimeout(() => {
        K();
        const be = te(E);
        c.setActivePage(be);
      }, 150);
    }
  }, [K, te, c, E]), Xn = O((A) => {
    rt(A), setTimeout(() => {
      re(800);
    }, 100);
  }, [rt, re]), Jn = O((A) => {
    if (!A) return;
    Dt(A) && setTimeout(() => {
      const Q = te(E);
      c.setActivePage(Q);
    }, 200);
  }, [Dt, te, c, E]), Zt = O((A) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    Ie(A) && (c.setActivePage(0), r && r(A));
  }, [b.length, Ie, c, r]), Qn = J(() => ({
    handleZoomIn: () => c.zoomIn(),
    handleZoomOut: () => c.zoomOut(),
    handleZoomReset: () => c.resetZoom(),
    handleUndo: () => c.undo(),
    handleRedo: () => c.redo()
  }), [c]), { handleZoomIn: st, handleZoomOut: it, handleZoomReset: at, handleUndo: er, handleRedo: tr } = Qn;
  Qr(
    { handleZoomIn: st, handleZoomOut: it, handleZoomReset: at, handleUndo: er, handleRedo: tr },
    { editorRef: m, containerRef: E }
  );
  const nr = O(() => {
    !E.current || !m.current || He.current || (he.current && clearTimeout(he.current), he.current = setTimeout(() => {
      if (He.current) {
        he.current = null;
        return;
      }
      const A = te(E);
      A !== S && A >= 0 && c.setActivePage(A), he.current = null;
    }, Qs));
  }, [te, S, c]), rr = J(() => {
    if (!f) return 0;
    const D = f.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return D ? D.length : 0;
  }, [f]), or = b.length || 1, sr = O((A) => {
    P(!0), B(A);
  }, []), Vt = O(() => {
    P(!1), B(null);
  }, []), ir = O((A, D) => {
  }, []), ar = O((A) => {
    A && A.mode === "row" ? (I(A.rowIndex), Z(null)) : A && A.mode === "column" ? (Z(A.colIndex), I(null)) : (I(null), Z(null));
  }, []), lr = O((A) => {
    X(!0), ie(A);
  }, []), qt = O(() => {
    X(!1), ie(null);
  }, []), cr = O((A, D) => {
  }, []);
  return W(() => () => {
    he.current && clearTimeout(he.current), fe.current && clearTimeout(fe.current);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ i.jsx(
      kt,
      {
        currentFormat: {
          ...C,
          imageSelected: v
        },
        onFormatText: R,
        onAddPageBreak: Kn,
        onInsertImage: Xn,
        canUndo: w,
        canRedo: _
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "editor-container", children: [
      u && /* @__PURE__ */ i.jsx(
        Xo,
        {
          editorView: null,
          isCollapsed: Zn,
          onToggle: () => Vn((A) => !A),
          wordCount: rr,
          pageCount: or
        }
      ),
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: E,
          onScroll: nr,
          children: /* @__PURE__ */ i.jsx(
            Es,
            {
              content: f,
              dimensions: Gn,
              pageSize: h,
              pageMargins: L,
              pageBoundaries: b,
              editorRef: m,
              onInput: Yn,
              onContentChange: ot,
              onClick: () => m.current?.focus(),
              onRemovePageBreak: Jn,
              zoomLevel: k
            }
          )
        }
      ),
      /* @__PURE__ */ i.jsx(
        St,
        {
          editorRef: m,
          onImageSelect: sr,
          onImageDeselect: Vt,
          onImageResize: ir,
          resizeOptions: {
            ...ve,
            preserveAspectRatio: U,
            aspectRatio: U
          }
        }
      ),
      /* @__PURE__ */ i.jsx(
        _t,
        {
          editorRef: m,
          onTableSelect: lr,
          onTableDeselect: qt,
          onTableResize: cr
        }
      ),
      /* @__PURE__ */ i.jsx(
        Bt,
        {
          editorRef: m,
          onCellSelectionChange: ar
        }
      ),
      v && N && /* @__PURE__ */ i.jsx(
        jt,
        {
          imageElement: N,
          initialPreserveAspectRatio: U,
          onAlignChange: (A) => {
          },
          onAspectRatioToggle: (A) => {
            z(A);
          },
          onDelete: () => {
            if (N) {
              const A = N.getAttribute("data-key");
              A && io(A).catch((D) => {
                console.error("Failed to delete image from IndexedDB:", D);
              });
            }
          },
          onClose: Vt
        }
      ),
      Y && oe && /* @__PURE__ */ i.jsx(
        It,
        {
          tableElement: oe,
          onAlignChange: (A) => {
          },
          onClose: qt,
          selectedRowIndex: T,
          selectedColIndex: G,
          editorRef: m
        }
      ),
      p && /* @__PURE__ */ i.jsx("div", { className: "page-manager-sidebar", children: e ? Je.cloneElement(e, {
        onNavigate: Wt,
        onAddPage: Gt,
        onDeletePage: Zt,
        onPageSizeChange: Ut,
        onPageMarginsChange: $t,
        zoomLevel: k,
        canZoomIn: pt(k),
        canZoomOut: mt(k),
        onZoomIn: st,
        onZoomOut: it,
        onZoomReset: at
      }) : /* @__PURE__ */ i.jsx(
        ws,
        {
          pageBoundaries: b,
          activePage: S,
          pageSize: h,
          pageMargins: L,
          zoomLevel: k,
          canZoomIn: pt(k),
          canZoomOut: mt(k),
          onNavigate: Wt,
          onAddPage: Gt,
          onDeletePage: Zt,
          onPageSizeChange: Ut,
          onPageMarginsChange: $t,
          onZoomIn: st,
          onZoomOut: it,
          onZoomReset: at
        }
      ) })
    ] })
  ] });
});
Ht.displayName = "HtmlEditor";
Ht.propTypes = {
  pageManagerComponent: x.element,
  onNavigatePage: x.func,
  onAddPage: x.func,
  onDeletePage: x.func,
  onPageSizeChange: x.func,
  onPageMarginsChange: x.func,
  onChange: x.func,
  onContentFinalized: x.func,
  showSidebar: x.bool,
  showToolbar: x.bool,
  showPageManager: x.bool
};
Ht.defaultProps = {
  pageManagerComponent: null,
  onNavigatePage: void 0,
  onAddPage: void 0,
  onDeletePage: void 0,
  onPageSizeChange: void 0,
  onPageMarginsChange: void 0,
  onChange: void 0,
  onContentFinalized: void 0,
  showSidebar: !0,
  showToolbar: !0,
  showPageManager: !0
};
class Wn extends Je.Component {
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
  componentDidCatch(t, n) {
    console.error("[ErrorBoundary] Caught error:", t), console.error("[ErrorBoundary] Error info:", n), this.setState({
      error: t,
      errorInfo: n
    }), this.props.onError && this.props.onError(t, n);
  }
  handleReset = () => {
    this.setState({
      hasError: !1,
      error: null,
      errorInfo: null
    }), this.props.onReset && this.props.onReset();
  };
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ i.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ i.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ i.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ i.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ i.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ i.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ i.jsx(
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
Wn.propTypes = {
  children: x.node.isRequired,
  fallback: x.node,
  onError: x.func,
  onReset: x.func,
  showDetails: x.bool
};
Wn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Cr as COMMON_FONT_SIZES,
  Bn as ColorPickerDropdown,
  Qe as DEFAULT_FONT_SIZE,
  ve as DEFAULT_IMAGE_RESIZE_OPTIONS,
  yn as DEFAULT_PAGE_SIZE,
  Pt as DEFAULT_TABLE_RESIZE_OPTIONS,
  li as DocumentProvider,
  kt as EditorToolbar,
  Wn as ErrorBoundary,
  vn as FONT_SIZE_MAP,
  Ht as HtmlEditor,
  St as ImageResizeHandlers,
  qe as PAGE_SIZES,
  ws as PageManager,
  Es as PageView,
  M as RESIZE_HANDLERS,
  Xo as Sidebar,
  F as TABLE_RESIZE_HANDLERS,
  _t as TableResizeHandlers,
  fi as applyImageDimensions,
  _e as applyTableDimensions,
  ao as base64ToBlob,
  On as blobUrlToBase64,
  gi as calculateResizeDimensions,
  Ps as calculateTableResizeDimensions,
  pi as clearImages,
  rn as convertBase64ToBlobUrls,
  nn as convertBlobUrlsToBase64,
  to as createResizeOverlay,
  Ms as createTableResizeOverlay,
  io as deleteImage,
  mi as getAllImageKeys,
  ai as getAvailablePageSizes,
  At as getImage,
  xi as getImageAsBase64,
  hi as getImageDimensions,
  je as getPageDimensions,
  ci as getPixelValue,
  ui as getPointValue,
  le as getTableStructure,
  me as isResizableImage,
  ae as isResizableTable,
  di as isValidFontSize,
  ii as isValidPageSize,
  ns as logger,
  Rr as pixelsToPoints,
  Lr as pointsToPixels,
  lt as removeResizeOverlay,
  ke as removeTableResizeOverlay,
  kn as saveImage,
  Tt as updateResizeOverlay,
  wt as updateTableResizeOverlay,
  Jr as useContinuousReflow,
  En as useDocument,
  ye as useDocumentActions,
  wn as useDocumentState,
  Or as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
