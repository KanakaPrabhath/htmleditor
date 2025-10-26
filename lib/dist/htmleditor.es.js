import Ke, { createContext as mr, useContext as yr, useReducer as br, useMemo as ge, useState as ne, useCallback as N, useRef as te, useEffect as oe, forwardRef as kt, createElement as bt, memo as vr, useLayoutEffect as Tn, useImperativeHandle as Tr } from "react";
import { v4 as Pt } from "uuid";
import { createPortal as En } from "react-dom";
function Er(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Be = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function wr() {
  if (Qt) return Se;
  Qt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var i in a)
        i !== "key" && (o[i] = a[i]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return Se.Fragment = t, Se.jsx = r, Se.jsxs = r, Se;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function xr() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === I ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case b:
          return "Fragment";
        case O:
          return "Profiler";
        case A:
          return "StrictMode";
        case E:
          return "Suspense";
        case U:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case v:
            return "Portal";
          case T:
            return l.displayName || "Context";
          case _:
            return (l._context.displayName || "Context") + ".Consumer";
          case m:
            var P = l.render;
            return l = l.displayName, l || (l = P.displayName || P.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case k:
            return P = l.displayName || null, P !== null ? P : e(l.type) || "Memo";
          case $:
            P = l._payload, l = l._init;
            try {
              return e(l(P));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function r(l) {
      try {
        t(l);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var H = P.error, B = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return H.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(l);
      }
    }
    function n(l) {
      if (l === b) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === $)
        return "<...>";
      try {
        var P = e(l);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = j.A;
      return l === null ? null : l.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(l) {
      if (z.call(l, "key")) {
        var P = Object.getOwnPropertyDescriptor(l, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function i(l, P) {
      function H() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: H,
        configurable: !0
      });
    }
    function u() {
      var l = e(this.type);
      return V[l] || (V[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function c(l, P, H, B, G, q) {
      var L = H.ref;
      return l = {
        $$typeof: y,
        type: l,
        key: P,
        props: H,
        _owner: B
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: u
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
        value: G
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function f(l, P, H, B, G, q) {
      var L = P.children;
      if (L !== void 0)
        if (B)
          if (F(L)) {
            for (B = 0; B < L.length; B++)
              d(L[B]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(L);
      if (z.call(P, "key")) {
        L = e(l);
        var Y = Object.keys(P).filter(function(X) {
          return X !== "key";
        });
        B = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", x[L + B] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          L,
          Y,
          L
        ), x[L + B] = !0);
      }
      if (L = null, H !== void 0 && (r(H), L = "" + H), s(P) && (r(P.key), L = "" + P.key), "key" in P) {
        H = {};
        for (var J in P)
          J !== "key" && (H[J] = P[J]);
      } else H = P;
      return L && i(
        H,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), c(
        l,
        L,
        H,
        a(),
        G,
        q
      );
    }
    function d(l) {
      p(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === $ && (l._payload.status === "fulfilled" ? p(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function p(l) {
      return typeof l == "object" && l !== null && l.$$typeof === y;
    }
    var h = Ke, y = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), T = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, F = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var M, V = {}, re = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), se = C(n(o)), x = {};
    Oe.Fragment = b, Oe.jsx = function(l, P, H) {
      var B = 1e4 > j.recentlyCreatedOwnerStacks++;
      return f(
        l,
        P,
        H,
        !1,
        B ? Error("react-stack-top-frame") : re,
        B ? C(n(l)) : se
      );
    }, Oe.jsxs = function(l, P, H) {
      var B = 1e4 > j.recentlyCreatedOwnerStacks++;
      return f(
        l,
        P,
        H,
        !0,
        B ? Error("react-stack-top-frame") : re,
        B ? C(n(l)) : se
      );
    };
  })()), Oe;
}
var tn;
function Cr() {
  return tn || (tn = 1, process.env.NODE_ENV === "production" ? Be.exports = wr() : Be.exports = xr()), Be.exports;
}
var g = Cr();
const vt = 100, Tt = 50, Et = 200, nn = 5, wt = (e) => e < Et, xt = (e) => e > Tt, Ar = 96, ye = (e) => Math.round(e * Ar), Ze = {
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
}, he = "NORMAL", wn = (e = he) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: ye(e.top),
      bottom: ye(e.bottom),
      left: ye(e.left),
      right: ye(e.right)
    };
  const t = Ze[e] || Ze[he];
  return {
    top: ye(t.top),
    bottom: ye(t.bottom),
    left: ye(t.left),
    right: ye(t.right)
  };
}, Rr = (e = he) => {
  const t = wn(e);
  return t.top + t.bottom;
}, Sr = () => Object.keys(Ze), Or = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ze[e];
  return t ? t.label : "Unknown";
}, Ye = {
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
}, xn = "A4", Ne = (e) => {
  const t = Ye[e] || Ye[xn];
  return {
    width: t.width,
    height: t.height
  };
}, Ba = (e) => Object.keys(Ye).includes(e), za = () => Object.keys(Ye), Me = xn, Ee = "<p><br></p>", _r = "continuous", _e = (e, t = Me) => ({
  id: Pt(),
  index: e,
  size: t,
  content: Ee,
  images: [],
  isBreakPoint: !1
}), qe = (e) => typeof e != "string" || e.trim() === "" ? Ee : e, Cn = (e, t = Me) => (e.length > 0 ? e : [_e(0, t)]).map((n, a) => ({
  id: n.id || Pt(),
  index: a,
  size: n.size || t,
  content: qe(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), kr = (e = Me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Ne(e).height
}], ze = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), Ct = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Me, n = Cn(e.pages || [_e(0, r)], r);
  return {
    id: Pt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || _r,
    continuousContent: e.continuousContent || Ee,
    pageBoundaries: e.pageBoundaries || kr(r),
    zoomLevel: e.zoomLevel || vt,
    pageMargins: e.pageMargins || he,
    // Undo/Redo state
    undoStack: [],
    redoStack: [],
    canUndo: !1,
    canRedo: !1
  };
}, Z = {
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
}, At = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case Z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Ee, pageSize: a = Me } = t.payload || {}, o = { ..._e(0, a), content: qe(n) };
      return Ct({
        title: e.title,
        pageSize: a,
        pages: [o]
      });
    }
    case Z.UPDATE_TITLE:
      return {
        ...e,
        title: t.payload,
        updatedAt: r
      };
    case Z.UPDATE_PAGE_CONTENT: {
      const { pageIndex: n, content: a } = t.payload;
      if (n < 0 || n >= e.pages.length)
        return e;
      const o = [...e.pages];
      return o[n] = {
        ...o[n],
        content: qe(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = Cn(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : ze(a);
      return {
        ...e,
        pages: a,
        activePage: Math.min(e.activePage, a.length - 1),
        pageBreaks: o,
        totalPages: a.length,
        updatedAt: r
      };
    }
    case Z.ADD_PAGE: {
      const n = typeof t.payload?.index == "number" ? Math.min(Math.max(t.payload.index, 0), e.pages.length) : e.pages.length, a = [...e.pages];
      a.splice(n, 0, _e(n, e.pageSize));
      const o = a.map((i, u) => ({
        ...i,
        index: u,
        size: e.pageSize
      })), s = ze(o);
      return {
        ...e,
        pages: o,
        activePage: n,
        pageBreaks: s,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case Z.DELETE_PAGE: {
      const n = t.payload;
      if (e.pages.length <= 1)
        return e;
      const a = [...e.pages];
      a.splice(n, 1);
      const o = a.map((u, c) => ({
        ...u,
        index: c,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : n <= s && s > 0 && (s -= 1);
      const i = ze(o);
      return {
        ...e,
        pages: o,
        activePage: s,
        pageBreaks: i,
        totalPages: o.length,
        updatedAt: r
      };
    }
    case Z.SET_ACTIVE_PAGE: {
      const n = t.payload;
      if (n === e.activePage)
        return e;
      const a = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return n < 0 || n >= a ? e : {
        ...e,
        activePage: n,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGE_SIZE: {
      const n = t.payload;
      if (n === e.pageSize)
        return e;
      try {
        Ne(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: n
      })), o = ze(a);
      return {
        ...e,
        pageSize: n,
        pages: a,
        pageBreaks: o,
        updatedAt: r
      };
    }
    case Z.RESET_DOCUMENT:
      return Ct();
    case Z.UPDATE_CONTINUOUS_CONTENT: {
      const n = qe(t.payload);
      return n === e.continuousContent ? e : {
        ...e,
        continuousContent: n,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGE_BOUNDARIES: {
      const n = Array.isArray(t.payload) ? t.payload : [];
      if (n.length === e.pageBoundaries.length && n.length > 0 && n[0].id === e.pageBoundaries[0]?.id && n[n.length - 1].id === e.pageBoundaries[n.length - 1]?.id)
        return e;
      const a = e.activePage >= n.length ? Math.max(0, n.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: n,
        totalPages: n.length,
        activePage: a,
        updatedAt: r
      };
    }
    case Z.ADD_PAGE_BREAK: {
      const { position: n = "end", pageIndex: a } = t.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let s = e.continuousContent;
      if (n === "end")
        s = s + o + "<p><br></p>";
      else if (typeof n == "number") {
        const i = s.substring(0, n), u = s.substring(n);
        s = i + o + u;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const u = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && u.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < u.length) {
          const c = u[a], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", c.parentNode.insertBefore(f, c.nextSibling), f.parentNode.insertBefore(d, f.nextSibling), s = i.innerHTML;
        } else
          s = s + o + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: s,
        updatedAt: r
      };
    }
    case Z.REMOVE_PAGE_BREAK: {
      const { pageIndex: n } = t.payload || {};
      if (typeof n != "number" || typeof document > "u")
        return e;
      const a = document.createElement("div");
      a.innerHTML = e.continuousContent;
      const o = a.querySelectorAll('page-break, [data-page-break="true"]');
      return o[n] && o[n].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, u) => {
        i.setAttribute("data-page-number", String(u + 2));
      }), {
        ...e,
        continuousContent: a.innerHTML,
        updatedAt: r
      };
    }
    case Z.SET_EDITOR_MODE: {
      const n = t.payload;
      if (n === e.editorMode)
        return e;
      let a = e.continuousContent, o = e.pages;
      return n === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== Ee).join(`
`) || Ee : e.continuousContent && e.continuousContent !== Ee && (o = [{ ..._e(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case Z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < Tt || n > Et ? (console.warn(`Invalid zoom level: ${n}. Must be between ${Tt} and ${Et}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_IN: {
      if (!wt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + nn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_OUT: {
      if (!xt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - nn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.RESET_ZOOM:
      return e.zoomLevel === vt ? e : {
        ...e,
        zoomLevel: vt,
        updatedAt: r
      };
    case Z.UPDATE_PAGE_MARGINS: {
      const n = t.payload;
      return n === e.pageMargins ? e : {
        ...e,
        pageMargins: n,
        updatedAt: r
      };
    }
    case Z.RECORD_OPERATION: {
      const { operation: n, inverseOperation: a } = t.payload;
      return {
        ...e,
        undoStack: [...e.undoStack, { operation: n, inverseOperation: a }],
        redoStack: [],
        // Clear redo stack when new operation is recorded
        canUndo: !0,
        canRedo: !1,
        updatedAt: r
      };
    }
    case Z.UNDO: {
      if (e.undoStack.length === 0)
        return e;
      const n = e.undoStack[e.undoStack.length - 1], a = e.undoStack.slice(0, -1);
      let o = e;
      return n.inverseOperation && (o = At(e, n.inverseOperation)), {
        ...o,
        undoStack: a,
        redoStack: [...e.redoStack, n],
        canUndo: a.length > 0,
        canRedo: !0,
        updatedAt: r
      };
    }
    case Z.REDO: {
      if (e.redoStack.length === 0)
        return e;
      const n = e.redoStack[e.redoStack.length - 1], a = e.redoStack.slice(0, -1);
      let o = e;
      return n.operation && (o = At(e, n.operation)), {
        ...o,
        undoStack: [...e.undoStack, n],
        redoStack: a,
        canUndo: !0,
        canRedo: a.length > 0,
        updatedAt: r
      };
    }
    case Z.CLEAR_UNDO_REDO:
      return {
        ...e,
        undoStack: [],
        redoStack: [],
        canUndo: !1,
        canRedo: !1,
        updatedAt: r
      };
    default:
      return e;
  }
}, An = mr(null), $a = ({ children: e, initialState: t = {} }) => {
  const [r, n] = br(At, Ct(t)), a = ge(() => ({
    initializeDocument: (s) => n({ type: Z.INITIALIZE_DOCUMENT, payload: s }),
    updateTitle: (s) => n({ type: Z.UPDATE_TITLE, payload: s }),
    updatePageContent: (s) => n({ type: Z.UPDATE_PAGE_CONTENT, payload: s }),
    updatePages: (s) => n({ type: Z.UPDATE_PAGES, payload: s }),
    addPage: (s) => n({ type: Z.ADD_PAGE, payload: s }),
    deletePage: (s) => n({ type: Z.DELETE_PAGE, payload: s }),
    setActivePage: (s) => n({ type: Z.SET_ACTIVE_PAGE, payload: s }),
    updatePageSize: (s) => n({ type: Z.UPDATE_PAGE_SIZE, payload: s }),
    resetDocument: () => n({ type: Z.RESET_DOCUMENT }),
    updateContinuousContent: (s) => n({ type: Z.UPDATE_CONTINUOUS_CONTENT, payload: s }),
    updatePageBoundaries: (s) => n({ type: Z.UPDATE_PAGE_BOUNDARIES, payload: s }),
    addPageBreak: (s) => n({ type: Z.ADD_PAGE_BREAK, payload: s }),
    removePageBreak: (s) => n({ type: Z.REMOVE_PAGE_BREAK, payload: s }),
    setEditorMode: (s) => n({ type: Z.SET_EDITOR_MODE, payload: s }),
    setZoomLevel: (s) => n({ type: Z.SET_ZOOM_LEVEL, payload: s }),
    zoomIn: () => n({ type: Z.ZOOM_IN }),
    zoomOut: () => n({ type: Z.ZOOM_OUT }),
    resetZoom: () => n({ type: Z.RESET_ZOOM }),
    updatePageMargins: (s) => n({ type: Z.UPDATE_PAGE_MARGINS, payload: s }),
    // Undo/Redo actions
    recordOperation: (s, i) => n({
      type: Z.RECORD_OPERATION,
      payload: { operation: s, inverseOperation: i }
    }),
    undo: () => n({ type: Z.UNDO }),
    redo: () => n({ type: Z.REDO }),
    clearUndoRedo: () => n({ type: Z.CLEAR_UNDO_REDO })
  }), []), o = ge(() => ({
    state: r,
    actions: a,
    dispatch: n
  }), [r, a]);
  return /* @__PURE__ */ g.jsx(An.Provider, { value: o, children: e });
}, Rn = () => {
  const e = yr(An);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Sn = () => {
  const { state: e } = Rn();
  return e;
}, ve = () => {
  const { actions: e } = Rn();
  return e;
};
var $e = { exports: {} }, Fe = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function Pr() {
  if (rn) return Q;
  rn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function _(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case t:
          switch (m = m.type, m) {
            case u:
            case c:
            case n:
            case o:
            case a:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case i:
                case f:
                case y:
                case h:
                case s:
                  return m;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function T(m) {
    return _(m) === c;
  }
  return Q.AsyncMode = u, Q.ConcurrentMode = c, Q.ContextConsumer = i, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = f, Q.Fragment = n, Q.Lazy = y, Q.Memo = h, Q.Portal = r, Q.Profiler = o, Q.StrictMode = a, Q.Suspense = d, Q.isAsyncMode = function(m) {
    return T(m) || _(m) === u;
  }, Q.isConcurrentMode = T, Q.isContextConsumer = function(m) {
    return _(m) === i;
  }, Q.isContextProvider = function(m) {
    return _(m) === s;
  }, Q.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Q.isForwardRef = function(m) {
    return _(m) === f;
  }, Q.isFragment = function(m) {
    return _(m) === n;
  }, Q.isLazy = function(m) {
    return _(m) === y;
  }, Q.isMemo = function(m) {
    return _(m) === h;
  }, Q.isPortal = function(m) {
    return _(m) === r;
  }, Q.isProfiler = function(m) {
    return _(m) === o;
  }, Q.isStrictMode = function(m) {
    return _(m) === a;
  }, Q.isSuspense = function(m) {
    return _(m) === d;
  }, Q.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === o || m === a || m === d || m === p || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === h || m.$$typeof === s || m.$$typeof === i || m.$$typeof === f || m.$$typeof === b || m.$$typeof === A || m.$$typeof === O || m.$$typeof === v);
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
var on;
function Nr() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function _(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === c || D === o || D === a || D === d || D === p || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === h || D.$$typeof === s || D.$$typeof === i || D.$$typeof === f || D.$$typeof === b || D.$$typeof === A || D.$$typeof === O || D.$$typeof === v);
    }
    function T(D) {
      if (typeof D == "object" && D !== null) {
        var ue = D.$$typeof;
        switch (ue) {
          case t:
            var Ce = D.type;
            switch (Ce) {
              case u:
              case c:
              case n:
              case o:
              case a:
              case d:
                return Ce;
              default:
                var pe = Ce && Ce.$$typeof;
                switch (pe) {
                  case i:
                  case f:
                  case y:
                  case h:
                  case s:
                    return pe;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var m = u, E = c, U = i, k = s, $ = t, R = f, I = n, j = y, z = h, F = r, C = o, M = a, V = d, re = !1;
    function se(D) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(D) || T(D) === u;
    }
    function x(D) {
      return T(D) === c;
    }
    function l(D) {
      return T(D) === i;
    }
    function P(D) {
      return T(D) === s;
    }
    function H(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function B(D) {
      return T(D) === f;
    }
    function G(D) {
      return T(D) === n;
    }
    function q(D) {
      return T(D) === y;
    }
    function L(D) {
      return T(D) === h;
    }
    function Y(D) {
      return T(D) === r;
    }
    function J(D) {
      return T(D) === o;
    }
    function X(D) {
      return T(D) === a;
    }
    function ie(D) {
      return T(D) === d;
    }
    ee.AsyncMode = m, ee.ConcurrentMode = E, ee.ContextConsumer = U, ee.ContextProvider = k, ee.Element = $, ee.ForwardRef = R, ee.Fragment = I, ee.Lazy = j, ee.Memo = z, ee.Portal = F, ee.Profiler = C, ee.StrictMode = M, ee.Suspense = V, ee.isAsyncMode = se, ee.isConcurrentMode = x, ee.isContextConsumer = l, ee.isContextProvider = P, ee.isElement = H, ee.isForwardRef = B, ee.isFragment = G, ee.isLazy = q, ee.isMemo = L, ee.isPortal = Y, ee.isProfiler = J, ee.isStrictMode = X, ee.isSuspense = ie, ee.isValidElementType = _, ee.typeOf = T;
  })()), ee;
}
var sn;
function On() {
  return sn || (sn = 1, process.env.NODE_ENV === "production" ? Fe.exports = Pr() : Fe.exports = Nr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lt, an;
function Mr() {
  if (an) return lt;
  an = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lt = a() ? Object.assign : function(o, s) {
    for (var i, u = n(o), c, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var d in i)
        t.call(i, d) && (u[d] = i[d]);
      if (e) {
        c = e(i);
        for (var p = 0; p < c.length; p++)
          r.call(i, c[p]) && (u[c[p]] = i[c[p]]);
      }
    }
    return u;
  }, lt;
}
var ut, cn;
function Nt() {
  if (cn) return ut;
  cn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ut = e, ut;
}
var dt, ln;
function _n() {
  return ln || (ln = 1, dt = Function.call.bind(Object.prototype.hasOwnProperty)), dt;
}
var ft, un;
function Lr() {
  if (un) return ft;
  un = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Nt(), r = {}, n = /* @__PURE__ */ _n();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (n(o, f)) {
          var d;
          try {
            if (typeof o[f] != "function") {
              var p = Error(
                (u || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[f](s, f, u, i, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (u || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var h = c ? c() : "";
            e(
              "Failed " + i + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ft = a, ft;
}
var pt, dn;
function Ir() {
  if (dn) return pt;
  dn = 1;
  var e = On(), t = Mr(), r = /* @__PURE__ */ Nt(), n = /* @__PURE__ */ _n(), a = /* @__PURE__ */ Lr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var u = "Warning: " + i;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return pt = function(i, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(x) {
      var l = x && (c && x[c] || x[f]);
      if (typeof l == "function")
        return l;
    }
    var p = "<<anonymous>>", h = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: O(),
      arrayOf: _,
      element: T(),
      elementType: m(),
      instanceOf: E,
      node: R(),
      objectOf: k,
      oneOf: U,
      oneOfType: $,
      shape: j,
      exact: z
    };
    function y(x, l) {
      return x === l ? x !== 0 || 1 / x === 1 / l : x !== x && l !== l;
    }
    function v(x, l) {
      this.message = x, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function b(x) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, P = 0;
      function H(G, q, L, Y, J, X, ie) {
        if (Y = Y || p, X = X || L, ie !== r) {
          if (u) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = Y + ":" + L;
            !l[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ue] = !0, P++);
          }
        }
        return q[L] == null ? G ? q[L] === null ? new v("The " + J + " `" + X + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new v("The " + J + " `" + X + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : x(q, L, Y, J, X);
      }
      var B = H.bind(null, !1);
      return B.isRequired = H.bind(null, !0), B;
    }
    function A(x) {
      function l(P, H, B, G, q, L) {
        var Y = P[H], J = M(Y);
        if (J !== x) {
          var X = V(Y);
          return new v(
            "Invalid " + G + " `" + q + "` of type " + ("`" + X + "` supplied to `" + B + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return b(l);
    }
    function O() {
      return b(s);
    }
    function _(x) {
      function l(P, H, B, G, q) {
        if (typeof x != "function")
          return new v("Property `" + q + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var L = P[H];
        if (!Array.isArray(L)) {
          var Y = M(L);
          return new v("Invalid " + G + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected an array."));
        }
        for (var J = 0; J < L.length; J++) {
          var X = x(L, J, B, G, q + "[" + J + "]", r);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return b(l);
    }
    function T() {
      function x(l, P, H, B, G) {
        var q = l[P];
        if (!i(q)) {
          var L = M(q);
          return new v("Invalid " + B + " `" + G + "` of type " + ("`" + L + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(x);
    }
    function m() {
      function x(l, P, H, B, G) {
        var q = l[P];
        if (!e.isValidElementType(q)) {
          var L = M(q);
          return new v("Invalid " + B + " `" + G + "` of type " + ("`" + L + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(x);
    }
    function E(x) {
      function l(P, H, B, G, q) {
        if (!(P[H] instanceof x)) {
          var L = x.name || p, Y = se(P[H]);
          return new v("Invalid " + G + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return b(l);
    }
    function U(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function l(P, H, B, G, q) {
        for (var L = P[H], Y = 0; Y < x.length; Y++)
          if (y(L, x[Y]))
            return null;
        var J = JSON.stringify(x, function(ie, D) {
          var ue = V(D);
          return ue === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + G + " `" + q + "` of value `" + String(L) + "` " + ("supplied to `" + B + "`, expected one of " + J + "."));
      }
      return b(l);
    }
    function k(x) {
      function l(P, H, B, G, q) {
        if (typeof x != "function")
          return new v("Property `" + q + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var L = P[H], Y = M(L);
        if (Y !== "object")
          return new v("Invalid " + G + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected an object."));
        for (var J in L)
          if (n(L, J)) {
            var X = x(L, J, B, G, q + "." + J, r);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return b(l);
    }
    function $(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var l = 0; l < x.length; l++) {
        var P = x[l];
        if (typeof P != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(P) + " at index " + l + "."
          ), s;
      }
      function H(B, G, q, L, Y) {
        for (var J = [], X = 0; X < x.length; X++) {
          var ie = x[X], D = ie(B, G, q, L, Y, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && J.push(D.data.expectedType);
        }
        var ue = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new v("Invalid " + L + " `" + Y + "` supplied to " + ("`" + q + "`" + ue + "."));
      }
      return b(H);
    }
    function R() {
      function x(l, P, H, B, G) {
        return F(l[P]) ? null : new v("Invalid " + B + " `" + G + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return b(x);
    }
    function I(x, l, P, H, B) {
      return new v(
        (x || "React class") + ": " + l + " type `" + P + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function j(x) {
      function l(P, H, B, G, q) {
        var L = P[H], Y = M(L);
        if (Y !== "object")
          return new v("Invalid " + G + " `" + q + "` of type `" + Y + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var J in x) {
          var X = x[J];
          if (typeof X != "function")
            return I(B, G, q, J, V(X));
          var ie = X(L, J, B, G, q + "." + J, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return b(l);
    }
    function z(x) {
      function l(P, H, B, G, q) {
        var L = P[H], Y = M(L);
        if (Y !== "object")
          return new v("Invalid " + G + " `" + q + "` of type `" + Y + "` " + ("supplied to `" + B + "`, expected `object`."));
        var J = t({}, P[H], x);
        for (var X in J) {
          var ie = x[X];
          if (n(x, X) && typeof ie != "function")
            return I(B, G, q, X, V(ie));
          if (!ie)
            return new v(
              "Invalid " + G + " `" + q + "` key `" + X + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(P[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var D = ie(L, X, B, G, q + "." + X, r);
          if (D)
            return D;
        }
        return null;
      }
      return b(l);
    }
    function F(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(F);
          if (x === null || i(x))
            return !0;
          var l = d(x);
          if (l) {
            var P = l.call(x), H;
            if (l !== x.entries) {
              for (; !(H = P.next()).done; )
                if (!F(H.value))
                  return !1;
            } else
              for (; !(H = P.next()).done; ) {
                var B = H.value;
                if (B && !F(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function C(x, l) {
      return x === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function M(x) {
      var l = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : C(l, x) ? "symbol" : l;
    }
    function V(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var l = M(x);
      if (l === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function re(x) {
      var l = V(x);
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
    function se(x) {
      return !x.constructor || !x.constructor.name ? p : x.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, pt;
}
var gt, fn;
function Dr() {
  if (fn) return gt;
  fn = 1;
  var e = /* @__PURE__ */ Nt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, gt = function() {
    function n(s, i, u, c, f, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function a() {
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
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, gt;
}
var pn;
function Hr() {
  if (pn) return $e.exports;
  if (pn = 1, process.env.NODE_ENV !== "production") {
    var e = On(), t = !0;
    $e.exports = /* @__PURE__ */ Ir()(e.isElement, t);
  } else
    $e.exports = /* @__PURE__ */ Dr()();
  return $e.exports;
}
var jr = /* @__PURE__ */ Hr();
const w = /* @__PURE__ */ Er(jr), kn = {
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
}, Br = [
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
], Xe = "16px", zr = (e) => Math.round(e * 96 / 72), $r = (e) => Math.round(e * 72 / 96 * 2) / 2, Fa = (e) => {
  const t = Object.values(kn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${zr(e)}px`;
}, Ua = (e) => {
  const t = parseInt(e), r = Object.values(kn).find((n) => n.px === t);
  return r ? r.pt : $r(t);
}, Wa = (e) => {
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
}, Fr = {
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
}, gn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Xe,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, Ur = () => {
  const [e, t] = ne(gn), r = ve(), n = N((h, y, v = null) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const A = b.getRangeAt(0);
      if (!A.toString())
        return t((_) => ({ ..._, [h]: y })), !1;
      try {
        const _ = document.createElement("span");
        _.style[h] = y;
        const T = A.extractContents();
        return _.appendChild(T), A.insertNode(_), A.selectNodeContents(_), b.removeAllRanges(), b.addRange(A), t((m) => ({ ...m, [h]: y })), !0;
      } catch {
        if (v) {
          const _ = h === "fontSize" ? Fr[y] || "3" : y;
          return document.execCommand(v, !1, _), t((T) => ({ ...T, [h]: y })), !0;
        }
        return !1;
      }
    } catch (b) {
      return console.warn(`[useFormatting] Style application failed for ${h}:`, b), !1;
    }
  }, []), a = N((h) => n("fontFamily", h, "fontName"), [n]), o = N((h) => n("fontSize", h, "fontSize"), [n]), s = N((h) => n("color", h, "foreColor"), [n]), i = N((h) => {
    t((y) => ({
      ...y,
      alignLeft: h === "left",
      alignCenter: h === "center",
      alignRight: h === "right",
      alignJustify: h === "justify"
    }));
  }, []), u = N((h) => {
    try {
      const y = window.getSelection();
      if (!y || y.rangeCount === 0)
        return !1;
      const v = y.getRangeAt(0), b = v.toString(), O = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[h];
      if (!O)
        return !1;
      if (!b) {
        const T = v.startContainer, m = T.nodeType === Node.TEXT_NODE ? T.parentElement : T, E = ke(m) || Gr();
        return E && (E.style.textAlign = O, i(O)), !0;
      }
      const _ = qr(v);
      if (_.length === 0) {
        const T = document.createElement("p");
        T.style.textAlign = O;
        const m = v.extractContents();
        T.appendChild(m), v.insertNode(T), v.selectNodeContents(T), y.removeAllRanges(), y.addRange(v);
      } else
        _.forEach((T) => {
          T.style.textAlign = O;
        });
      return i(O), !0;
    } catch (y) {
      return console.warn("[useFormatting] Text alignment failed:", y), !1;
    }
  }, [i]), c = N((h) => {
    try {
      const y = window.getSelection();
      if (!y || y.rangeCount === 0)
        return !1;
      const v = y.getRangeAt(0), b = document.createElement("div");
      if (b.innerHTML = h, Array.from(b.children).some(
        (O) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(O.tagName)
      )) {
        const O = v.startContainer, _ = O.nodeType === Node.TEXT_NODE ? O.parentElement : O, T = ke(_);
        if (T && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(T.tagName)) {
          const m = T.tagName.toLowerCase();
          if (v.startOffset === 0 && (O === T || O.nodeType === Node.TEXT_NODE && O === T.firstChild))
            T.parentNode.insertBefore(b, T);
          else if (v.startOffset === O.textContent?.length && O === T.lastChild && v.endOffset === O.textContent?.length) {
            const k = T.nextSibling;
            k ? T.parentNode.insertBefore(b, k) : T.parentNode.appendChild(b);
          } else {
            const k = v.extractContents(), $ = document.createTextNode(""), R = document.createElement(m);
            R.appendChild($), R.appendChild(k);
            const I = T.parentNode;
            I.insertBefore(b, T.nextSibling), I.insertBefore(R, b.nextSibling), !T.textContent.trim() && T.children.length === 0 && I.removeChild(T);
          }
        } else
          v.insertNode(b);
        v.setStartAfter(b), v.setEndAfter(b), y.removeAllRanges(), y.addRange(v);
      } else
        document.execCommand("insertHTML", !1, h);
      return !0;
    } catch (y) {
      console.warn("[useFormatting] InsertHTML failed:", y);
      try {
        return document.execCommand("insertHTML", !1, h), !0;
      } catch (v) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", v), !1;
      }
    }
  }, []), f = N((h, y = null) => {
    try {
      if (h === "undo") {
        r.undo();
        return;
      }
      if (h === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (h === "insertHTML" && y) {
        c(y);
        return;
      }
      if (h === "fontSize") {
        o(y);
        return;
      }
      if (h === "fontName") {
        a(y);
        return;
      }
      if (h === "foreColor") {
        s(y);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(h)) {
        u(h);
        return;
      }
      switch (document.execCommand(h, !1, y) || console.warn(`[useFormatting] Command "${h}" failed`), h) {
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
          t((b) => ({ ...b, headingLevel: y }));
          break;
        default:
          break;
      }
    } catch (v) {
      console.warn(`[useFormatting] Error executing command "${h}":`, v);
    }
  }, [o, a, u, c, r]), d = N(() => {
    try {
      const h = window.getSelection();
      if (!h || h.rangeCount === 0)
        return;
      const y = h.getRangeAt(0), v = y.toString();
      let b = Xe, A = "Arial", O = "#000000", _ = "p", T = "left";
      if (v) {
        const E = y.startContainer, U = E.nodeType === Node.TEXT_NODE ? E.parentElement : E;
        if (U) {
          const k = window.getComputedStyle(U), $ = k.fontSize, R = k.fontFamily;
          $ && $.endsWith("px") && (b = $), R && R !== "serif" && (A = R.split(",")[0].replace(/['"]/g, "").trim());
          const I = k.color;
          I && I !== "rgb(0, 0, 0)" && I !== "#000000" && (I.startsWith("rgb") ? O = Wr(I) : O = I);
          const j = ke(U);
          if (j) {
            const z = j.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(z) && (_ = z);
            const C = window.getComputedStyle(j).textAlign;
            ["left", "center", "right", "justify"].includes(C) && (T = C);
          }
        }
      }
      const m = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: T === "left",
        alignCenter: T === "center",
        alignRight: T === "right",
        alignJustify: T === "justify",
        fontFamily: A,
        fontSize: b,
        fontColor: O,
        headingLevel: _
      };
      t((E) => ({
        ...E,
        ...m
      }));
    } catch (h) {
      console.warn("[useFormatting] Error updating format from selection:", h);
    }
  }, []), p = N(() => {
    t(gn);
  }, []);
  return {
    currentFormat: e,
    formatText: f,
    resetFormat: p,
    updateCurrentFormatFromSelection: d
  };
};
function Wr(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const r = parseInt(t[1], 10), n = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (r << 16) + (n << 8) + a).toString(16).slice(1)}`;
}
function ke(e) {
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
function qr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = ke(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = ke(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (u) => {
        const c = u.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(c) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function Gr() {
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
const be = 'page-break, [data-page-break="true"]', Zr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Ne(r), a = e.querySelectorAll(be), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((u, c) => {
    const d = u.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${c + 1}`,
      pageNumber: c + 2,
      top: d,
      height: n.height
    });
  }), o;
}, Pn = (e, t = 100, r = he) => {
  const n = Ne(e), a = Rr(r), o = n.height - a, s = t / 100;
  return o / s;
}, Yr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(be);
    if (r.length === 0)
      return 0;
    const n = e.getBoundingClientRect(), a = n.top + n.height / 2;
    for (let o = r.length - 1; o >= 0; o--)
      if (r[o].getBoundingClientRect().top < a)
        return o + 1;
    return 0;
  } catch (r) {
    return console.warn("[getCurrentPage] Failed to calculate page:", r), 0;
  }
}, hn = (e) => {
  if (!e)
    return [];
  const t = Array.from(e.children);
  if (t.length === 0)
    return [];
  let r = [], n = [];
  for (const a of t)
    a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true" ? n.length > 0 && (r.push(n), n = []) : n.push(a);
  return n.length > 0 && r.push(n), r.length === 0 && t.length > 0 && r.push(t.filter(
    (a) => !(a.tagName === "PAGE-BREAK" || a.getAttribute("data-page-break") === "true")
  )), r;
}, Vr = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const o = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, Kr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, Xr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const u = Pn(r, n, a) * (t - 1), c = Array.from(e.children);
    let f = 0, d = null;
    for (let p = 0; p < c.length; p++) {
      const h = c[p];
      if (h.tagName === "PAGE-BREAK" || h.getAttribute("data-page-break") === "true")
        continue;
      const y = Vr(h);
      if (f + y > u) {
        d = h;
        break;
      }
      f += y;
    }
    if (d) {
      const p = document.createElement("page-break");
      if (p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), d.parentNode.insertBefore(p, d), o) {
        const h = e.innerHTML;
        o(h);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const p = document.createElement("page-break");
      p.setAttribute("data-page-break", "true"), p.setAttribute("contenteditable", "false"), p.setAttribute("data-page-number", String(t)), e.appendChild(p);
      const h = document.createElement("p");
      if (h.innerHTML = "<br>", e.appendChild(h), o) {
        const y = e.innerHTML;
        o(y);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Jr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const u = Array.from(e.querySelectorAll(be));
    if (t > u.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const c = window.getSelection();
    let f = !1, d = [], p = null;
    if (t === 0) {
      const y = u[0];
      if (!y)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== y; )
        d.push(v), v = v.nextSibling;
      p = y;
    } else {
      const y = u[t - 1];
      if (!y)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = u[t];
      let b = y.nextSibling;
      for (; b && b !== v; )
        d.push(b), b = b.nextSibling;
      p = y;
    }
    if (c && c.rangeCount > 0) {
      const v = c.getRangeAt(0).startContainer;
      for (const b of d)
        if (b.contains(v) || b === v) {
          f = !0;
          break;
        }
    }
    if (p && p.parentNode && p.remove(), d.forEach((y) => {
      y.parentNode && y.remove();
    }), e.querySelectorAll(be).forEach((y, v) => {
      y.setAttribute("data-page-number", String(v + 2));
    }), f && o && setTimeout(() => {
      o(0);
    }, 50), n) {
      const y = e.innerHTML;
      n(y);
    }
    return a && setTimeout(() => {
      a(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (u) {
    return console.error("[removePageAndContent] Failed to remove page:", u), !1;
  }
}, Qr = (e) => {
  if (e)
    try {
      e.querySelectorAll(be).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, eo = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Qr(t), r) {
      const o = t.innerHTML;
      r(o);
    }
    return n && setTimeout(() => {
      n(), a && setTimeout(() => {
        a();
      }, 100);
    }, 50), !0;
  } catch (o) {
    return console.error("[removePageBreak] Failed to remove page break:", o), !1;
  }
}, to = 200, no = 50, mn = 3, ro = 20, Nn = (e) => {
  if (!e || !e.getBoundingClientRect)
    return 0;
  const t = e.getBoundingClientRect();
  if (e.tagName === "P") {
    const r = e.querySelectorAll("img"), n = e.textContent.trim();
    if (r.length === 1 && !n) {
      const o = r[0].getBoundingClientRect(), i = window.getComputedStyle(e).textAlign;
      if (i === "center" || i === "-webkit-center")
        return o.height + 16;
    }
    return t.height + 16;
  }
  return e.tagName === "H1" || e.tagName === "H2" || e.tagName === "H3" || e.tagName === "H4" || e.tagName === "H5" || e.tagName === "H6" ? t.height + 20 : e.tagName === "UL" || e.tagName === "OL" ? t.height + 16 : t.height;
}, oo = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = Nn(o);
    if (s < 1)
      continue;
    if (r + s > t)
      return n === null ? a > 0 ? {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: r
      } : null : {
        overflowIndex: a,
        overflowElement: o,
        accumulatedHeight: r
      };
    r += s, n = o;
  }
  return null;
}, so = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const u = Pn(t, r, n);
    let c = hn(e), f = !1, d = 0;
    for (let p = 0; p < c.length && d < mn; p++) {
      const h = c[p], y = oo(h, u);
      if (y && y.overflowIndex > 0) {
        let v = 0;
        for (let _ = 0; _ < h.length; _++) {
          const T = h[_];
          T && T.getBoundingClientRect && (v += Nn(T));
        }
        if (v - u < ro)
          continue;
        const A = p + 2;
        Kr(y.overflowElement, A) && (f = !0, d++, c = hn(e));
      }
    }
    if (f) {
      if (a) {
        const p = e.innerHTML;
        a(p);
      }
      setTimeout(() => {
        o && o(), d >= mn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, no);
    }
    return f;
  } catch (u) {
    return console.warn("[checkAndReflow] Reflow failed:", u), !1;
  } finally {
    s.current = !1;
  }
}, ao = (e, t, r = to) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, io = 400, Mn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(be)[t - 1];
        o && o.nextSibling && (r = o.nextSibling, n = 0);
      }
      if (r) {
        const a = document.createRange(), o = window.getSelection();
        r.nodeType === Node.TEXT_NODE ? a.setStart(r, n) : a.setStart(r, 0), a.collapse(!0), o.removeAllRanges(), o.addRange(a);
      }
    } catch (r) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", r);
    }
  }
}, co = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (r === 0)
      a = t;
    else {
      const s = t.querySelectorAll(be)[r - 1];
      if (s)
        a = s;
      else {
        console.warn("[scrollToPage] Page break not found for page", r);
        return;
      }
    }
    if (a) {
      const o = a.getBoundingClientRect(), s = e.getBoundingClientRect(), i = e.scrollTop + (o.top - s.top);
      e.scrollTo({
        top: i,
        behavior: "smooth"
      }), setTimeout(() => {
        n ? n(r) : Mn(t, r);
      }, io);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, lo = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, uo = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(be);
  for (const f of a)
    if (r.comparePoint(f, 0) > 0)
      n++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(r.startContainer, r.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), u = i.length, c = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: c,
    charOffset: u
  };
}, fo = 300, po = (e, t, r = 100, n = "NARROW") => {
  const a = ve(), o = te(null), s = te(null), i = te(e), u = te(r), c = te(n), f = te(!1);
  oe(() => {
    i.current = e;
  }, [e]), oe(() => {
    u.current = r;
  }, [r]), oe(() => {
    c.current = n;
  }, [n]), oe(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const d = N((E = {}) => t?.current ? Zr(t.current, E) : [], [t]), p = N((E = {}) => {
    const U = d(E);
    return a.updatePageBoundaries(U), U;
  }, [d, a]), h = N((E = {}) => {
    const U = typeof E.delay == "number" ? E.delay : fo;
    lo(p, o, E, U);
  }, [p]), y = N(() => {
    t?.current && so(
      t.current,
      i.current,
      u.current,
      c.current,
      a.updateContinuousContent,
      p,
      f,
      y
    );
  }, [t, a, p]), v = N((E) => {
    ao(y, s, E);
  }, [y]), b = N((E) => !E?.current || !t?.current ? 0 : Yr(E.current, t.current), [t]), A = N((E) => {
    t?.current && Mn(t.current, E);
  }, [t]), O = N((E, U) => {
    if (!U?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    co(U.current, t.current, E, A);
  }, [t, A]), _ = N(async (E) => t?.current ? Xr(
    t.current,
    E,
    i.current,
    u.current,
    c.current,
    a.updateContinuousContent,
    p
  ) : !1, [t, a, p]), T = N((E) => t?.current ? Jr(
    t.current,
    E,
    d,
    a.updateContinuousContent,
    p,
    A,
    y
  ) : !1, [t, d, a, p, A, y]), m = N((E) => t?.current ? eo(
    E,
    t.current,
    a.updateContinuousContent,
    p,
    y
  ) : !1, [t, a, p, y]);
  return oe(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), ge(() => ({
    calculatePageBoundaries: d,
    checkAndUpdateBoundaries: h,
    updateBoundaries: p,
    getCurrentPage: b,
    scrollToPage: O,
    positionCursorAtPage: A,
    checkAndReflow: y,
    triggerAutoReflow: v,
    removePageAndContent: T,
    removePageBreak: m,
    insertPageBreakAtBoundary: _,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    d,
    h,
    p,
    b,
    O,
    A,
    y,
    v,
    T,
    m,
    _
  ]);
}, go = (e, t) => {
  const { handleZoomIn: r, handleZoomOut: n, handleZoomReset: a, handleUndo: o, handleRedo: s } = e, { editorRef: i, containerRef: u } = t;
  oe(() => {
    const c = (f) => {
      if (f.ctrlKey || f.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(f.key) && f.preventDefault();
        const d = document.activeElement === i.current, p = document.activeElement === u.current, h = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (d || p || !h)
          switch (f.key) {
            case "+":
            case "=":
              r();
              break;
            case "-":
            case "_":
              n();
              break;
            case "0":
              a();
              break;
            case "z":
              f.shiftKey || o();
              break;
            case "y":
              s();
              break;
          }
      }
    };
    return window.addEventListener("keydown", c), () => {
      window.removeEventListener("keydown", c);
    };
  }, [r, n, a, o, s, i, u]);
}, ho = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const r = te(null), n = N(() => {
    if (!t.current) return;
    const o = window.getSelection();
    if (r.current)
      try {
        o.removeAllRanges(), o.addRange(r.current);
        return;
      } catch (i) {
        console.warn("[restoreCursorPosition] Failed to restore cursor:", i);
      }
    const s = t.current.lastChild;
    if (s) {
      const i = document.createRange();
      s.nodeType === Node.TEXT_NODE ? i.setStart(s, s.textContent.length) : i.setStartAfter(s), i.collapse(!0), o.removeAllRanges(), o.addRange(i);
    }
  }, [t]), a = N(() => {
    if (!t.current) return !1;
    const o = window.getSelection();
    if (!o || o.rangeCount === 0) return !1;
    const s = o.getRangeAt(0);
    return t.current.contains(s.commonAncestorContainer);
  }, [t]);
  return oe(() => {
    const o = () => {
      if (e(), t.current) {
        const i = window.getSelection();
        if (i.rangeCount > 0) {
          const u = i.getRangeAt(0);
          u.collapsed && t.current.contains(u.commonAncestorContainer) && (r.current = u.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", o);
    const s = () => {
      if (setTimeout(e, 10), r.current && t.current)
        try {
          const i = window.getSelection();
          i.removeAllRanges(), i.addRange(r.current);
        } catch (i) {
          console.warn("[handleFocus] Failed to restore cursor:", i);
        }
    };
    return t.current && t.current.addEventListener("focus", s), () => {
      document.removeEventListener("selectionchange", o), t.current && t.current.removeEventListener("focus", s);
    };
  }, [e, t]), {
    restoreCursorPosition: n,
    hasActiveCursorSelection: a
  };
}, Ae = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, W = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function qa({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Ae
}) {
  const u = n - t, c = a - r;
  let f = o, d = s;
  switch (e) {
    case W.TOP_LEFT:
      f = Math.max(i.minWidth, o - u), d = Math.max(i.minHeight, s - c);
      break;
    case W.TOP_RIGHT:
      f = Math.max(i.minWidth, o + u), d = Math.max(i.minHeight, s - c);
      break;
    case W.BOTTOM_LEFT:
      f = Math.max(i.minWidth, o - u), d = Math.max(i.minHeight, s + c);
      break;
    case W.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, o + u), d = Math.max(i.minHeight, s + c);
      break;
    case W.TOP:
      d = Math.max(i.minHeight, s - c);
      break;
    case W.BOTTOM:
      d = Math.max(i.minHeight, s + c);
      break;
    case W.LEFT:
      f = Math.max(i.minWidth, o - u);
      break;
    case W.RIGHT:
      f = Math.max(i.minWidth, o + u);
      break;
    default:
      return { width: f, height: d };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const p = o / s;
    [
      W.TOP_LEFT,
      W.TOP_RIGHT,
      W.BOTTOM_LEFT,
      W.BOTTOM_RIGHT
    ].includes(e) ? f / p > d ? d = Math.max(i.minHeight, f / p) : f = Math.max(i.minWidth, d * p) : [W.TOP, W.BOTTOM].includes(e) ? f = d * p : [W.LEFT, W.RIGHT].includes(e) && (d = f / p);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (d = f / (o / s))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = d * (o / s))), f = Math.max(i.minWidth, f), d = Math.max(i.minHeight, d), {
    width: Math.round(f),
    height: Math.round(d)
  };
}
function we(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Ga(e) {
  return we(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Za(e, { width: t, height: r }) {
  we(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function mo(e, t = Ae) {
  if (!we(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(W).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = yo(o), s.style.pointerEvents = "all", Ln(s, o, n.width, n.height), r.appendChild(s);
  }), r;
}
function yo(e) {
  switch (e) {
    case W.TOP_LEFT:
    case W.BOTTOM_RIGHT:
      return "nwse-resize";
    case W.TOP_RIGHT:
    case W.BOTTOM_LEFT:
      return "nesw-resize";
    case W.TOP:
    case W.BOTTOM:
      return "ns-resize";
    case W.LEFT:
    case W.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Ln(e, t, r, n) {
  switch (t) {
    case W.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case W.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case W.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case W.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case W.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case W.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case W.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case W.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Rt(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Ln(a, o, r.width, r.height);
  });
}
function ht(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const bo = "html-editor-storage", vo = 1, de = "images";
function To() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Le() {
  return new Promise((e, t) => {
    const r = indexedDB.open(bo, vo);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const a = n.target.result;
      a.objectStoreNames.contains(de) || a.createObjectStore(de, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function Eo(e) {
  return new Promise((t, r) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      r(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      r(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const a = new FileReader();
    a.onload = async (o) => {
      const s = o.target.result, u = s.split(",")[1].length * 3 / 4;
      if (u > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const c = await Le(), f = `editor-image-${To()}`, p = c.transaction([de], "readwrite").objectStore(de), h = {
          key: f,
          dataUrl: s,
          size: u,
          type: e.type,
          timestamp: Date.now()
        }, y = p.add(h);
        y.onsuccess = () => {
          c.close(), t(f);
        }, y.onerror = () => {
          c.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (c) {
        r(c);
      }
    }, a.onerror = () => {
      r(new Error("Error reading image file"));
    }, a.readAsDataURL(e);
  });
}
async function wo(e) {
  try {
    const t = await Le();
    return new Promise((r, n) => {
      const s = t.transaction([de], "readonly").objectStore(de).get(e);
      s.onsuccess = () => {
        t.close();
        const i = s.result;
        r(i ? i.dataUrl : null);
      }, s.onerror = () => {
        t.close(), n(new Error("Failed to retrieve image from IndexedDB"));
      };
    });
  } catch (t) {
    return console.error("Error getting image:", t), null;
  }
}
async function xo(e) {
  try {
    const t = await Le();
    return new Promise((r, n) => {
      const s = t.transaction([de], "readwrite").objectStore(de).delete(e);
      s.onsuccess = () => {
        t.close(), r();
      }, s.onerror = () => {
        t.close(), n(new Error("Failed to delete image from IndexedDB"));
      };
    });
  } catch (t) {
    console.error("Error deleting image:", t);
  }
}
async function Ya() {
  try {
    const e = await Le();
    return new Promise((t, r) => {
      const o = e.transaction([de], "readwrite").objectStore(de).clear();
      o.onsuccess = () => {
        e.close(), t();
      }, o.onerror = () => {
        e.close(), r(new Error("Failed to clear images from IndexedDB"));
      };
    });
  } catch (e) {
    console.error("Error clearing images:", e);
  }
}
async function Va() {
  try {
    const e = await Le();
    return new Promise((t, r) => {
      const o = e.transaction([de], "readonly").objectStore(de).getAllKeys();
      o.onsuccess = () => {
        e.close(), t(o.result || []);
      }, o.onerror = () => {
        e.close(), r(new Error("Failed to get image keys from IndexedDB"));
      };
    });
  } catch (e) {
    return console.error("Error getting image keys:", e), [];
  }
}
const In = [
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
], Co = [
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
], Ao = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function Ro(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Dn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function Ge(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Pe(r) || "<p><br></p>";
}
function So(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function Oo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => In.includes(r.tagName));
}
function _o(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const a = n;
      In.includes(a.tagName) ? t.push(a.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Pe(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${Ro(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), u = Dn(o);
      if (s === "DIV") {
        const c = Pe(o);
        c.trim() ? t.push(c) : t.push("<p><br></p>");
      } else if (s === "P")
        Oo(o) ? t.push(_o(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const c = So(o);
        t.push(`<${i}${u}>${c}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(ko(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Po(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const c = Pe(o);
        t.push(`<blockquote${u}>${c}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (Co.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (Ao.includes(s))
        t.push(o.outerHTML);
      else {
        const c = Pe(o);
        t.push(`<${i}${u}>${c}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function ko(e) {
  const t = e.tagName.toLowerCase(), r = Dn(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = Pe(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Po(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), yn = (e) => {
  const t = Mo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Hn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Lo = (e) => {
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
var Io = {
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
const Do = kt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, u) => bt(
    "svg",
    {
      ref: u,
      ...Io,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Hn("lucide", a),
      ...!o && !Lo(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([c, f]) => bt(c, f)),
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
  const r = kt(
    ({ className: n, ...a }, o) => bt(Do, {
      ref: o,
      iconNode: t,
      className: Hn(
        `lucide-${No(yn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = yn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], jo = K("arrow-down", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], zo = K("arrow-left", Bo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Fo = K("arrow-right", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Wo = K("arrow-up", Uo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Go = K("bold", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Yo = K("chevron-left", Zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ko = K("chevron-right", Vo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Jo = K("file-check", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ve = K("file-text", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ts = K("hash", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], rs = K("heading-1", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], ss = K("heading-2", os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], is = K("heading-3", as);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], ls = K("image-upscale", cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ds = K("image", us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], ps = K("italic", fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], hs = K("link", gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], ys = K("list-indent-decrease", ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], vs = K("list-indent-increase", bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Es = K("list-ordered", Ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], jn = K("list", ws);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Cs = K("palette", xs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Rs = K("plus", As);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Os = K("redo", Ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], ks = K("scaling", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Ns = K("settings", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Ls = K("strikethrough", Ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Ds = K("table", Is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Mt = K("text-align-center", Hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Lt = K("text-align-end", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], zs = K("text-align-justify", Bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], It = K("text-align-start", $s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], St = K("trash-2", Fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ws = K("underline", Us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Gs = K("undo", qs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ys = K("x", Zs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ks = K("zoom-in", Vs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Js = K("zoom-out", Xs), bn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const a = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), u = o.textContent.trim();
    return u ? {
      id: `${r}heading-${s}`,
      level: i,
      text: u,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Qs = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, ea = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = Sn(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: u, outline: c } = ge(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: bn(i, 1, "continuous-")
      };
    let d = 0;
    const p = [];
    return o.forEach((h, y) => {
      d += Qs(h.content), p.push(...bn(h.content, y + 1, `page-${y}-`));
    }), { wordCount: d, outline: p };
  }, [o, r, n, i]), f = n !== void 0 ? n : o.length;
  return /* @__PURE__ */ g.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ g.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ g.jsx(Ve, { size: 18 }),
            /* @__PURE__ */ g.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ g.jsx(Ko, { size: 16 }) : /* @__PURE__ */ g.jsx(Yo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ g.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ g.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ g.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ g.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ g.jsx(Jo, { size: 14 }),
                /* @__PURE__ */ g.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ g.jsx("span", { className: "stat-value", children: f })
            ] }),
            /* @__PURE__ */ g.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ g.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ g.jsx(ts, { size: 14 }),
                /* @__PURE__ */ g.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ g.jsx("span", { className: "stat-value", children: u.toLocaleString() })
            ] }),
            /* @__PURE__ */ g.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ g.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ g.jsx(Ve, { size: 14 }),
                /* @__PURE__ */ g.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ g.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          c.length > 0 && /* @__PURE__ */ g.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ g.jsxs("h3", { children: [
              /* @__PURE__ */ g.jsx(jn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ g.jsx("div", { className: "document-outline", "data-testid": "outline", children: c.map((d) => {
              const p = d.level === 1 ? rs : d.level === 2 ? ss : is;
              return /* @__PURE__ */ g.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${d.level}`,
                  style: { marginLeft: `${(d.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ g.jsx(p, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ g.jsx("span", { className: "outline-text", children: d.text }),
                    /* @__PURE__ */ g.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      d.page
                    ] })
                  ]
                },
                d.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class ta {
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
const vn = new ta("Editor"), Bn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), zn = 32;
function $n(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * zn}px`, e.dataset.indentLevel = String(n));
}
function na(e, t) {
  $n(e, t);
}
function ra(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Bn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function oa() {
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return [];
  const t = e.getRangeAt(0), r = /* @__PURE__ */ new Set();
  let n = t.commonAncestorContainer;
  for (n.nodeType === Node.TEXT_NODE && (n = n.parentElement); n && n.contentEditable !== "true"; )
    n = n.parentElement;
  return n ? (n.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote, pre, table").forEach((s) => {
    document.createRange().selectNodeContents(s), t.intersectsNode(s) && r.add(s);
  }), r.size === 0 && n.querySelectorAll("img").forEach((i) => {
    if (document.createRange().selectNode(i), t.intersectsNode(i)) {
      let c = i.parentElement;
      for (; c && c !== n; ) {
        if (c.tagName && Bn.has(c.tagName.toUpperCase())) {
          r.add(c);
          break;
        }
        c = c.parentElement;
      }
    }
  }), Array.from(r).filter((s) => {
    let i = s.parentElement;
    for (; i; ) {
      if (r.has(i))
        return !1;
      i = i.parentElement;
    }
    return !0;
  })) : [];
}
function sa(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * zn}px`, e.dataset.indentLevel = String(r));
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
function Ot(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = oa();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = ra(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      na(s, e);
      return;
    }
    e ? sa(s) : $n(s, !1);
  });
  try {
    const s = document.createRange(), i = (d) => d.nodeType === Node.TEXT_NODE ? d : document.createTreeWalker(
      d,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), u = (d) => {
      if (d.nodeType === Node.TEXT_NODE)
        return d;
      const p = document.createTreeWalker(
        d,
        NodeFilter.SHOW_TEXT,
        null
      );
      let h = null, y = p.nextNode();
      for (; y; )
        h = y, y = p.nextNode();
      return h;
    }, c = i(a);
    c ? s.setStart(c, 0) : s.setStart(a, 0);
    const f = u(o);
    f ? s.setEnd(f, f.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
  } catch {
    try {
      const i = document.createRange();
      i.setStartBefore(a), i.setEndAfter(o), t.removeAllRanges(), t.addRange(i);
    } catch (i) {
      console.warn("Could not restore selection after indentation:", i);
    }
  }
  return !0;
}
function aa(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Ot(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Fn = ({ currentColor: e, onColorSelect: t, title: r = "Font Color" }) => {
  const [n, a] = ne(!1), o = te(null), s = [
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
  oe(() => {
    const c = (f) => {
      o.current && !o.current.contains(f.target) && a(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []);
  const i = (c) => {
    t(c), a(!1);
  }, u = (c) => {
    const f = c.target.value;
    t(f);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: () => a(!n),
        className: "color-picker-button",
        title: r,
        style: {
          backgroundColor: e || "#000000",
          border: "1px solid #ccc",
          borderRadius: "3px",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          position: "relative"
        },
        children: /* @__PURE__ */ g.jsx(Cs, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    n && /* @__PURE__ */ g.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ g.jsx("div", { className: "color-grid", children: s.map((c) => /* @__PURE__ */ g.jsx(
        "button",
        {
          onClick: () => i(c),
          className: `color-option ${e === c ? "selected" : ""}`,
          style: {
            backgroundColor: c,
            border: e === c ? "2px solid #007acc" : "1px solid #ccc",
            width: "24px",
            height: "24px",
            margin: "2px",
            borderRadius: "3px",
            cursor: "pointer"
          },
          title: c
        },
        c
      )) }),
      /* @__PURE__ */ g.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ g.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ g.jsx(
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
Fn.propTypes = {
  currentColor: w.string,
  onColorSelect: w.func.isRequired,
  title: w.string
};
const ia = [
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
], ca = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], la = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Dt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  onInsertImage: n,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = (h, y, v, b = null, A = !1) => /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: h,
      className: b && e[b] ? "active" : "",
      disabled: A,
      title: v,
      style: { opacity: A ? 0.5 : 1 },
      children: /* @__PURE__ */ g.jsx(y, { size: 16 })
    },
    v
  ), i = () => /* @__PURE__ */ g.jsx("div", { className: "toolbar-separator" }), u = async (h) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(h.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (h.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const v = await Eo(h), b = await wo(v);
      if (b && n) {
        const A = `<img src="${b}" data-key="${v}" alt="Inserted image" />`;
        n(A);
      } else
        vn.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (y) {
      vn.error("Error uploading image", y);
    }
  }, c = () => {
    Ot(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, f = () => {
    Ot(!0);
  }, d = () => {
    const h = prompt("Enter URL:");
    h && t("createLink", h);
  }, p = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), Gs, "Undo", null, !a),
    s(() => t("redo"), Os, "Redo", null, !o),
    i(),
    s(() => t("bold"), Go, "Bold", "bold"),
    s(() => t("italic"), ps, "Italic", "italic"),
    s(() => t("underline"), Ws, "Underline", "underline"),
    s(() => t("strikethrough"), Ls, "Strikethrough", "strikethrough"),
    i(),
    s(() => t("justifyLeft"), It, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Mt, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), Lt, "Align Right", "alignRight"),
    s(() => t("justifyFull"), zs, "Justify", "alignJustify"),
    i(),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (h) => t("fontName", h.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: ia.map(({ value: h, label: y }) => /* @__PURE__ */ g.jsx("option", { value: h, children: y }, h))
      }
    ),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (h) => t("fontSize", h.target.value),
        value: e.fontSize || Xe,
        title: "Font Size",
        children: Br.map(({ value: h, label: y }) => /* @__PURE__ */ g.jsx("option", { value: h, children: y }, h))
      }
    ),
    /* @__PURE__ */ g.jsx(
      Fn,
      {
        currentColor: e.fontColor,
        onColorSelect: (h) => t("foreColor", h),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ g.jsx(
      "select",
      {
        onChange: (h) => t("formatBlock", h.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: ca.map(({ value: h, label: y }) => /* @__PURE__ */ g.jsx("option", { value: h, children: y }, h))
      }
    ),
    i(),
    s(() => t("insertUnorderedList"), jn, "Bullet List"),
    s(() => t("insertOrderedList"), Es, "Numbered List"),
    i(),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: c,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ g.jsx(vs, { size: 16 })
      }
    ),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: f,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ g.jsx(ys, { size: 16 })
      }
    ),
    i(),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: d,
        title: "Insert Link",
        children: /* @__PURE__ */ g.jsx(hs, { size: 16 })
      }
    ),
    s(() => t("insertHTML", la), Ds, "Insert Table"),
    r && s(r, Ve, "Insert Page Break"),
    i(),
    /* @__PURE__ */ g.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (h) => h.target.files[0] && u(h.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        onClick: p,
        title: "Insert Image",
        children: /* @__PURE__ */ g.jsx(ds, { size: 16 })
      }
    )
  ] });
};
Dt.propTypes = {
  currentFormat: w.shape({
    bold: w.bool,
    italic: w.bool,
    underline: w.bool,
    strikethrough: w.bool,
    alignLeft: w.bool,
    alignCenter: w.bool,
    alignRight: w.bool,
    alignJustify: w.bool,
    fontFamily: w.string,
    fontSize: w.string,
    fontColor: w.string,
    headingLevel: w.string
  }).isRequired,
  onFormatText: w.func.isRequired,
  onAddPageBreak: w.func,
  onInsertImage: w.func,
  canUndo: w.bool,
  canRedo: w.bool
};
Dt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function ua(e) {
  return !e || typeof e != "string" ? e : Ge(e);
}
function da(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = ua(r) : r = fa(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function fa(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => pa(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function pa(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const Te = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && Te(e.parentElement) : !1, Ht = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: u,
  zoomLevel: c = 100,
  pageMargins: f = he
}) => {
  const d = ge(() => wn(f), [f]), p = c / 100, h = N((T, m) => {
    if (!T) return !1;
    const E = T.getBoundingClientRect(), U = m - E.top;
    return U < d.top || U > E.height - d.bottom;
  }, [d.top, d.bottom]), y = N((T, m) => {
    m.preventDefault();
    const E = T.getBoundingClientRect(), U = m.clientX - E.left, k = m.clientY - E.top, $ = E.width - 40, R = -12, I = E.width - 20;
    U >= $ && U <= I && k >= R && k <= 8 && u && u(T);
  }, [u]), v = N((T) => {
    T.preventDefault();
    const m = t.current.getBoundingClientRect();
    if (T.clientY - m.top < d.top) {
      const U = t.current.firstElementChild;
      if (U && U.tagName !== "PAGE-BREAK") {
        const k = document.createRange(), $ = window.getSelection();
        k.setStart(U, 0), k.collapse(!0), $.removeAllRanges(), $.addRange(k);
      }
    } else {
      const U = t.current.lastElementChild;
      if (U && U.tagName !== "PAGE-BREAK") {
        const k = document.createRange(), $ = window.getSelection();
        k.selectNodeContents(U), k.collapse(!1), $.removeAllRanges(), $.addRange(k);
      }
    }
  }, [t, d.top]), b = N((T) => {
    const m = window.getSelection();
    if (!m || m.rangeCount === 0) return;
    const E = m.getRangeAt(0), { startContainer: U, endContainer: k } = E;
    if ((Te(U) || Te(k)) && (T.key.length === 1 || T.key === "Enter" || T.key === " "))
      return T.preventDefault(), !1;
    if (aa(T))
      return n && n(), !1;
    if ((T.key === "Backspace" || T.key === "Delete") && (Te(U) || Te(k)))
      return T.preventDefault(), !1;
    a && a(T);
  }, [a, n]), A = N((T) => {
    if (!t.current) return;
    const m = T.target;
    if (Te(m)) {
      y(m, T);
      return;
    }
    if (h(t.current, T.clientY)) {
      v(T);
      return;
    }
    o && o(T);
  }, [t, o, y, v, h]), O = N((T) => {
    const m = window.getSelection();
    if (!m || m.rangeCount === 0) return;
    const E = m.getRangeAt(0), { startContainer: U } = E;
    if (Te(U))
      return T.preventDefault(), !1;
  }, []), _ = N((T) => {
    const m = da(T);
    i && i(T, m);
  }, [i]);
  return /* @__PURE__ */ g.jsx(
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
      children: /* @__PURE__ */ g.jsx(
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
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: Xe,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: b,
          onBeforeInput: O,
          onClick: A,
          onScroll: s,
          onPaste: _,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
Ht.propTypes = {
  dimensions: w.shape({
    width: w.number.isRequired,
    height: w.number.isRequired
  }).isRequired,
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: w.func.isRequired,
  onContentChange: w.func,
  onKeyDown: w.func,
  onClick: w.func,
  onScroll: w.func,
  onPaste: w.func,
  onRemovePageBreak: w.func,
  zoomLevel: w.number,
  pageMargins: w.string
};
Ht.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: he
};
const ga = vr(Ht), jt = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = he,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: u,
  onDeletePage: c,
  onPageSizeChange: f,
  onPageMarginsChange: d,
  onZoomIn: p,
  onZoomOut: h,
  onZoomReset: y
} = {}) => {
  const v = Math.max(e?.length || 0, 1), b = (m) => {
    i && i(m);
  }, A = () => {
    u && u();
  }, O = (m) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    c && c(m);
  }, _ = (m) => {
    f && f(m);
  }, T = (m) => {
    d && d(m);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ g.jsx(Ns, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ g.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ g.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: r,
              onChange: (m) => _(m.target.value),
              children: [
                /* @__PURE__ */ g.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ g.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ g.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ g.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ g.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (m) => T(m.target.value),
              children: Sr().map((m) => /* @__PURE__ */ g.jsx("option", { value: m, children: Or(m) }, m))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: h,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ g.jsx(Js, { size: 12 })
        }
      ),
      /* @__PURE__ */ g.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: p,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ g.jsx(Ks, { size: 12 })
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: y,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "page-list", children: e.map((m, E) => /* @__PURE__ */ g.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ g.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${E === t ? "active" : ""}`,
          onClick: () => b(E),
          "aria-label": `Go to page ${E + 1}`,
          "aria-current": E === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ g.jsx(Ve, { size: 14 }),
            /* @__PURE__ */ g.jsxs("span", { children: [
              "Page ",
              E + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (U) => {
            U.stopPropagation(), O(E);
          },
          "aria-label": `Delete page ${E + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ g.jsx(Ys, { size: 14 })
        }
      )
    ] }, m.id || `page-${E}`)) }),
    /* @__PURE__ */ g.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: A,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ g.jsx(Rs, { size: 16 }),
          /* @__PURE__ */ g.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
jt.propTypes = {
  pageBoundaries: w.arrayOf(
    w.shape({
      id: w.string.isRequired,
      pageNumber: w.number.isRequired,
      top: w.number,
      height: w.number
    })
  ),
  activePage: w.number,
  pageSize: w.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: w.string,
  zoomLevel: w.number,
  canZoomIn: w.bool,
  canZoomOut: w.bool,
  onNavigate: w.func,
  onAddPage: w.func,
  onDeletePage: w.func,
  onPageSizeChange: w.func,
  onPageMarginsChange: w.func,
  onZoomIn: w.func,
  onZoomOut: w.func,
  onZoomReset: w.func
};
jt.defaultProps = {
  pageBoundaries: [{ id: "page-0", pageNumber: 1 }],
  activePage: 0,
  pageSize: "A4",
  pageMargins: he,
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
const ha = Ke.memo(jt), Ue = 10, ma = 300, ya = 200;
function ba(e) {
  switch (e) {
    case W.TOP_LEFT:
    case W.BOTTOM_RIGHT:
      return "nwse-resize";
    case W.TOP_RIGHT:
    case W.BOTTOM_LEFT:
      return "nesw-resize";
    case W.TOP:
    case W.BOTTOM:
      return "ns-resize";
    case W.LEFT:
    case W.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function va(e, t, r, n, a, o) {
  if (!o.preserveAspectRatio) return { width: e, height: t };
  const s = r / n;
  return [
    W.TOP_LEFT,
    W.TOP_RIGHT,
    W.BOTTOM_LEFT,
    W.BOTTOM_RIGHT
  ].includes(a) ? e / s > t ? t = e / s : e = t * s : [W.TOP, W.BOTTOM].includes(a) ? e = t * s : [W.LEFT, W.RIGHT].includes(a) && (t = e / s), { width: e, height: t };
}
function Ta({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = Ae
}) {
  const u = n - t, c = a - r;
  let f = o, d = s;
  switch (e) {
    case W.TOP_LEFT:
      f = o - u, d = s - c;
      break;
    case W.TOP_RIGHT:
      f = o + u, d = s - c;
      break;
    case W.BOTTOM_LEFT:
      f = o - u, d = s + c;
      break;
    case W.BOTTOM_RIGHT:
      f = o + u, d = s + c;
      break;
    case W.TOP:
      d = s - c;
      break;
    case W.BOTTOM:
      d = s + c;
      break;
    case W.LEFT:
      f = o - u;
      break;
    case W.RIGHT:
      f = o + u;
      break;
    default:
      return { width: f, height: d };
  }
  return { width: f, height: d } = va(
    f,
    d,
    o,
    s,
    e,
    i
  ), i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && (d = f / (o / s))), i.maxHeight && d > i.maxHeight && (d = i.maxHeight, i.preserveAspectRatio && (f = d * (o / s))), f = Math.max(i.minWidth, Math.min(i.maxWidth || f, f)), d = Math.max(i.minHeight, Math.min(i.maxHeight || d, d)), {
    width: Math.round(f),
    height: Math.round(d)
  };
}
function Un(e, { width: t, height: r }) {
  we(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function Ea(e, t, r) {
  Un(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function wa(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, u = a || o, c = r.offsetWidth, f = r.offsetHeight, p = {
    // Increase width
    ">": u && s ? () => ({
      width: Math.min(n.maxWidth || 800, c + Ue),
      height: f
    }) : null,
    // Decrease width
    "<": u && s ? () => ({
      width: Math.max(n.minWidth || 50, c - Ue),
      height: f
    }) : null,
    // Increase height
    "+": u && s ? () => ({
      width: c,
      height: Math.min(n.maxHeight || 600, f + Ue)
    }) : null,
    // Decrease height
    "-": u && s ? () => ({
      width: c,
      height: Math.max(n.minHeight || 50, f - Ue)
    }) : null,
    // Reset to default
    r: u && !s ? () => ({ width: ma, height: ya }) : null
  }[i];
  if (p) {
    e.preventDefault();
    const h = p();
    return Ea(t, r, h), !0;
  }
  return !1;
}
const Bt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = Ae
}) => {
  const o = te({
    overlay: null,
    image: null,
    start: null,
    handler: null,
    isResizing: !1
  }), s = te(a), i = ve();
  oe(() => {
    s.current = a;
  }, [a]);
  const u = N((b) => {
    if (!we(b)) return;
    o.current.overlay && (ht(o.current.overlay), o.current.overlay = null), b.classList.add("selected");
    const A = mo(b, s.current);
    A && (o.current.overlay = A, o.current.image = b, document.body.appendChild(A), A.querySelectorAll(".resize-handler").forEach((_) => {
      _.addEventListener("mousedown", f);
    }), r && r(b));
  }, [r]), c = N(() => {
    o.current.image && (o.current.image.classList.remove("selected"), o.current.image = null), o.current.overlay && (ht(o.current.overlay), o.current.overlay = null), o.current.start = null, o.current.handler = null, o.current.isResizing = !1, n && n();
  }, [n]), f = N((b) => {
    if (b.preventDefault(), b.stopPropagation(), !o.current.image) return;
    const A = b.currentTarget.dataset.handler, O = o.current.image.getBoundingClientRect(), _ = window.pageYOffset || document.documentElement.scrollTop, T = window.pageXOffset || document.documentElement.scrollLeft;
    o.current.start = {
      x: b.clientX,
      y: b.clientY,
      width: o.current.image.offsetWidth,
      height: o.current.image.offsetHeight,
      originalWidth: o.current.image.offsetWidth,
      originalHeight: o.current.image.offsetHeight,
      offsetX: b.clientX - O.left - T,
      offsetY: b.clientY - O.top - _
    }, o.current.handler = A, o.current.isResizing = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = ba(A), document.addEventListener("mousemove", d), document.addEventListener("mouseup", p);
  }, []), d = N((b) => {
    if (!o.current.isResizing || !o.current.image || !o.current.start || !o.current.handler) return;
    b.preventDefault(), b.stopPropagation();
    const { x: A, y: O, width: _, height: T } = o.current.start, m = o.current.handler, E = b.clientX, U = b.clientY, k = Ta({
      handler: m,
      startX: A,
      startY: O,
      currentX: E,
      currentY: U,
      startWidth: _,
      startHeight: T,
      options: s.current
    });
    Un(o.current.image, k), o.current.overlay && Rt(o.current.overlay, o.current.image);
  }, []), p = N((b) => {
    if (o.current.isResizing) {
      if (b.preventDefault(), b.stopPropagation(), o.current.image && o.current.start) {
        const A = {
          width: o.current.start.originalWidth,
          height: o.current.start.originalHeight
        }, O = {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        };
        (A.width !== O.width || A.height !== O.height) && i.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: O } },
          { type: "IMAGE_RESIZE", payload: { element: o.current.image, state: A } }
        );
      }
      if (o.current.start = null, o.current.handler = null, o.current.isResizing = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", o.current.image) {
        const A = new Event("input", { bubbles: !0, cancelable: !0 });
        o.current.image.dispatchEvent(A), t && t(o.current.image, {
          width: o.current.image.offsetWidth,
          height: o.current.image.offsetHeight
        });
      }
    }
  }, [t, i]), h = N((b) => {
    o.current.overlay && !o.current.overlay.contains(b.target) && c();
    const A = b.target;
    if (we(A)) {
      if (A === o.current.image)
        return;
      u(A);
    }
  }, [u, c]), y = N((b) => {
    if ((b.key === "Delete" || b.key === "Backspace") && o.current.image && !o.current.isResizing) {
      b.preventDefault();
      const A = o.current.image;
      if (A.parentNode) {
        A.parentNode.removeChild(A), c();
        const O = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(O);
      }
    }
    b.key === "Escape" && o.current.image && c(), o.current.image && !o.current.isResizing && wa(b, e, o.current.image, s.current);
  }, [e, c]), v = N(() => {
    o.current.overlay && o.current.image && Rt(o.current.overlay, o.current.image);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const A = e.current.closest(".editor-viewport");
    return A && (A.addEventListener("scroll", v), window.addEventListener("scroll", v)), () => {
      A && A.removeEventListener("scroll", v), window.removeEventListener("scroll", v);
    };
  }, [e, v]), oe(() => {
    if (!e.current) return;
    const b = e.current;
    return b.addEventListener("click", h), b.addEventListener("keydown", y), window.addEventListener("resize", v), () => {
      b.removeEventListener("click", h), b.removeEventListener("keydown", y), window.removeEventListener("resize", v), o.current.isResizing && (document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current.overlay && ht(o.current.overlay);
    };
  }, [e, h, y, v, d, p]), oe(() => {
    if (!e.current) return;
    const b = new MutationObserver((A) => {
      A.forEach((O) => {
        O.type === "childList" && O.removedNodes.forEach((_) => {
          _.nodeType === Node.ELEMENT_NODE && we(_) && _ === o.current.image && c();
        });
      });
    });
    return b.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => b.disconnect();
  }, [e, c, u]), null;
};
Bt.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: w.func,
  onImageSelect: w.func,
  onImageDeselect: w.func,
  resizeOptions: w.shape({
    minWidth: w.number,
    minHeight: w.number,
    maxWidth: w.number,
    maxHeight: w.number,
    aspectRatio: w.bool,
    preserveAspectRatio: w.bool,
    defaultWidth: w.number,
    defaultHeight: w.number
  })
};
Bt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Ae
};
const Wn = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  height: "28px"
}, xa = {
  ...Wn,
  background: "transparent",
  color: "#dc3545",
  borderColor: "#dc3545"
}, mt = (e) => ({
  ...Wn,
  background: e ? "#007bff" : "transparent",
  color: e ? "#fff" : "#333"
}), zt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = ne({ top: 0, left: 0 }), [u, c] = ne(!1), [f, d] = ne("top"), [p, h] = ne(o), y = te(null), v = ve(), b = (R) => {
    R && requestAnimationFrame(() => {
      const I = document.querySelector(".image-resize-overlay");
      I && Rt(I, R);
    });
  }, A = (R) => {
    if (!R) return null;
    const I = window.getComputedStyle(R);
    return {
      float: I.float || "none",
      margin: R.style.margin || "",
      display: I.display || "inline",
      width: R.style.width || R.width || "",
      height: R.style.height || R.height || "",
      aspectRatio: p
    };
  }, O = N(() => {
    if (!e) return "left";
    const R = window.getComputedStyle(e);
    return R.float === "right" ? "right" : R.float === "left" ? "left" : R.display === "block" && R.margin.includes("auto") ? "center" : "left";
  }, [e]), [_, T] = ne("left");
  oe(() => {
    e && T(O());
  }, [e, O]);
  const m = N(() => {
    if (!e || !y.current) return;
    const R = e.getBoundingClientRect(), I = y.current.getBoundingClientRect(), j = window.innerWidth, z = window.innerHeight, F = R.bottom >= 0 && R.top <= z && R.right >= 0 && R.left <= j;
    let C = "top", M = 0, V = 0;
    if (F) {
      const x = R.top - I.height - 10, l = z - R.bottom - I.height - 10;
      l > x && l > 0 ? (C = "bottom", M = R.bottom + 10) : (C = "top", M = R.top - I.height - 10);
    } else
      C = "top", M = 10;
    V = R.left + R.width / 2 - I.width / 2;
    let re = Math.max(10, Math.min(V, j - I.width - 10)), se = Math.max(10, Math.min(M, z - I.height - 10));
    i({ top: se, left: re }), d(C), c(!0);
  }, [e]);
  Tn(() => {
    m();
    const R = () => {
      m();
    };
    return window.addEventListener("scroll", R), window.addEventListener("resize", R), () => {
      window.removeEventListener("scroll", R), window.removeEventListener("resize", R), c(!1);
    };
  }, [e, m]), oe(() => {
    const R = (I) => {
      y.current && !y.current.contains(I.target) && I.target !== e && a();
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [e, a]);
  const E = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, U = (R) => {
    if (e && E[R]) {
      const I = A(e), j = _, z = E[R];
      e.style.float = z.float, e.style.margin = z.margin, e.style.display = z.display, T(R), b(e);
      const F = A(e);
      v.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: R, state: F } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: j, state: I } }
      ), t && t(R);
    }
  }, k = () => {
    if (e && e.parentNode) {
      const R = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      v.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: R } }
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, $ = () => {
    const R = p, I = !p;
    h(I), v.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: I } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: R } }
    ), r && r(I);
  };
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        ref: y,
        className: "image-tooltip-menu",
        "data-menu-position": f,
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
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${p ? "" : "active"}`,
              onClick: $,
              title: `Toggle aspect ratio preservation (currently ${p ? "ON" : "OFF"})`,
              children: p ? /* @__PURE__ */ g.jsx(ks, { size: 14 }) : /* @__PURE__ */ g.jsx(ls, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "left" ? "active" : ""}`,
              onClick: () => U("left"),
              title: "Align Left",
              style: mt(_ === "left"),
              children: /* @__PURE__ */ g.jsx(It, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "center" ? "active" : ""}`,
              onClick: () => U("center"),
              title: "Align Center",
              style: mt(_ === "center"),
              children: /* @__PURE__ */ g.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${_ === "right" ? "active" : ""}`,
              onClick: () => U("right"),
              title: "Align Right",
              style: mt(_ === "right"),
              children: /* @__PURE__ */ g.jsx(Lt, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: k,
              title: "Delete Image",
              style: xa,
              children: /* @__PURE__ */ g.jsx(St, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
zt.propTypes = {
  imageElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onAspectRatioToggle: w.func,
  onDelete: w.func,
  onClose: w.func.isRequired,
  initialPreserveAspectRatio: w.bool
};
zt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Je = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, ce = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function le(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function fe(e) {
  if (!le(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= n)
    for (let u = 0; u < n; u++) {
      const c = s[u], f = c.style.width ? parseInt(c.style.width, 10) : c.offsetWidth;
      a.push(f || 100);
    }
  else if (r.length > 0) {
    const u = r[0];
    for (let c = 0; c < u.cells.length; c++) {
      const f = u.cells[c];
      a.push(f.offsetWidth);
    }
  }
  const i = r.map((u) => (u.style.height ? parseInt(u.style.height, 10) : null) || u.offsetHeight);
  return {
    width: t.width,
    height: t.height,
    columns: n,
    rows: r.length,
    columnWidths: a,
    rowHeights: i,
    rect: t
  };
}
function Ca({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = Je
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, u, c, f, d) => {
    u >= 0 && u < i.length && (i[u] = Math.max(f, Math.min(d, i[u] + c)));
  };
  switch (e) {
    case ce.COLUMN:
      s(o.columnWidths, t, r, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = n.width;
      break;
    case ce.ROW:
      s(o.rowHeights, t, r, a.minRowHeight, a.maxRowHeight), o.tableHeight = n.height;
      break;
    case ce.TABLE_BOTTOM:
      s(o.rowHeights, n.rows - 1, r, a.minRowHeight, a.maxRowHeight);
      break;
    case ce.TABLE_RIGHT:
      s(o.columnWidths, n.columns - 1, r, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function me(e) {
  if (!le(e)) return;
  const t = Array.from(e.rows);
  if (t.length === 0) return;
  const r = t[0].cells.length;
  let n = e.querySelector("colgroup");
  n || (n = document.createElement("colgroup"), e.insertBefore(n, e.firstChild));
  const a = n.querySelectorAll("col"), o = a.length;
  if (o < r)
    for (let s = o; s < r; s++) {
      const i = document.createElement("col");
      n.appendChild(i);
    }
  else if (o > r)
    for (let s = o - 1; s >= r; s--)
      n.removeChild(a[s]);
}
function xe(e, t, r) {
  if (!le(e)) return;
  me(e);
  const { columnWidths: n, rowHeights: a, tableWidth: o, tableHeight: s } = t, i = n ? n.reduce((c, f) => c + f, 0) : 0, u = a ? a.reduce((c, f) => c + f, 0) : 0;
  if (o !== void 0 ? e.style.width = `${o}px` : i > 0 && (e.style.width = `${i}px`), s !== void 0 ? e.style.height = `${s}px` : u > 0 && (e.style.height = `${u}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const c = e.querySelector("colgroup");
    c && c.querySelectorAll("col").forEach((d, p) => {
      p < n.length && (d.style.width = `${n[p]}px`);
    }), e.style.width = `${i}px`;
  }
  a && a.length > 0 && (Array.from(e.rows).forEach((f, d) => {
    d < a.length && (f.style.height = `${a[d]}px`);
  }), e.style.height = `${u}px`), e.offsetHeight;
}
function Aa(e, t = Je) {
  if (!le(e)) return null;
  me(e);
  const r = fe(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const a = e.getBoundingClientRect();
  n.style.top = `${a.top}px`, n.style.left = `${a.left}px`, n.style.width = `${a.width}px`, n.style.height = `${a.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const u = qn(i, r, a, e);
    n.appendChild(u);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const u = Gn(i, r, a, e);
    n.appendChild(u);
  }
  const o = Zn(r, a);
  n.appendChild(o);
  const s = Yn(r, a);
  return n.appendChild(s), n;
}
function qn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-column-resize-handler", a.dataset.type = ce.COLUMN, a.dataset.index = e, a.style.position = "absolute", a.style.width = "4px", a.style.height = `${r.height}px`, a.style.cursor = "col-resize", a.style.pointerEvents = "all", Vn(a, e, t, r, n), a;
}
function Gn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-row-resize-handler", a.dataset.type = ce.ROW, a.dataset.index = e, a.style.position = "absolute", a.style.width = `${r.width}px`, a.style.height = "4px", a.style.cursor = "row-resize", a.style.pointerEvents = "all", Kn(a, e, t, r, n), a;
}
function Zn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = ce.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Xn(r, e, t), r;
}
function Yn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = ce.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", Jn(r, e, t), r;
}
function _t(e, t) {
  if (!e || !t) return;
  me(t);
  const r = fe(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let d = 0; d < r.columns - 1; d++) {
      const p = qn(d, r, n, t);
      e.appendChild(p);
    }
    for (let d = 0; d < r.rows - 1; d++) {
      const p = Gn(d, r, n, t);
      e.appendChild(p);
    }
    const c = Zn(r, n);
    e.appendChild(c);
    const f = Yn(r, n);
    e.appendChild(f);
  } else
    a.forEach((c, f) => {
      Vn(c, f, r, n, t);
    }), o.forEach((c, f) => {
      Kn(c, f, r, n, t);
    }), s && Xn(s, r, n), i && Jn(i, r, n);
}
function We(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Ra(e, t) {
  if (!le(e))
    return console.warn("insertRowAbove: Invalid table element"), null;
  if (t < 0 || t > e.rows.length)
    return console.warn(`insertRowAbove: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowAbove: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let s = 0; s < a; s++) {
    const i = document.createElement("td");
    i.innerHTML = "&nbsp;", n.appendChild(i);
  }
  try {
    r.parentNode.insertBefore(n, r);
  } catch (s) {
    return console.error("insertRowAbove: Failed to insert row", s), null;
  }
  me(e);
  const o = fe(e);
  return o && xe(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), n;
}
function Sa(e, t) {
  if (!le(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let i = 0; i < a; i++) {
    const u = document.createElement("td");
    u.innerHTML = "&nbsp;", n.appendChild(u);
  }
  const o = r.nextSibling;
  try {
    o ? r.parentNode.insertBefore(n, o) : r.parentNode.appendChild(n);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  me(e);
  const s = fe(e);
  return s && xe(e, {
    columnWidths: s.columnWidths,
    rowHeights: s.rowHeights
  }), n;
}
function Vn(e, t, r, n, a) {
  if (a && a.rows.length > 0) {
    const s = a.rows[0];
    if (s.cells.length > t) {
      const u = s.cells[t].getBoundingClientRect(), c = a.getBoundingClientRect(), f = u.right - c.left - 2;
      e.style.left = `${f}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${n.height}px`;
}
function Kn(e, t, r, n, a) {
  if (a && a.rows.length > t) {
    const s = a.rows[t];
    if (s.cells.length > 0) {
      const u = s.cells[0].getBoundingClientRect(), c = a.getBoundingClientRect(), f = u.bottom - c.top - 2;
      e.style.top = `${f}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${n.width}px`;
}
function Xn(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function Jn(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
function Oa(e, t) {
  if (!le(e))
    return console.warn("insertColumnLeft: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`insertColumnLeft: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("insertColumnLeft: Table has no rows"), !1;
  if (t > r[0].cells.length)
    return console.warn(`insertColumnLeft: Column index ${t} out of bounds`), !1;
  try {
    for (const a of r) {
      const o = document.createElement("td");
      o.innerHTML = "&nbsp;", t < a.cells.length ? a.insertBefore(o, a.cells[t]) : a.appendChild(o);
    }
    me(e);
    const n = fe(e);
    return n && xe(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnLeft: Failed to insert column", n), !1;
  }
}
function _a(e, t) {
  if (!le(e))
    return console.warn("insertColumnRight: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`insertColumnRight: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("insertColumnRight: Table has no rows"), !1;
  if (t >= r[0].cells.length)
    return console.warn(`insertColumnRight: Column index ${t} out of bounds`), !1;
  try {
    for (const a of r) {
      const o = document.createElement("td");
      o.innerHTML = "&nbsp;";
      const s = a.cells[t + 1];
      s ? a.insertBefore(o, s) : a.appendChild(o);
    }
    me(e);
    const n = fe(e);
    return n && xe(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnRight: Failed to insert column", n), !1;
  }
}
function ka(e, t) {
  if (!le(e))
    return console.warn("deleteRow: Invalid table element"), !1;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const r = e.rows[t];
    r.parentNode.removeChild(r), me(e);
    const n = fe(e);
    return n && xe(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteRow: Failed to delete row", r), !1;
  }
}
function Pa(e, t) {
  if (!le(e))
    return console.warn("deleteColumn: Invalid table element"), !1;
  if (t < 0)
    return console.warn(`deleteColumn: Invalid column index ${t}`), !1;
  const r = Array.from(e.rows);
  if (r.length === 0)
    return console.warn("deleteColumn: Table has no rows"), !1;
  if (t >= r[0].cells.length)
    return console.warn(`deleteColumn: Column index ${t} out of bounds`), !1;
  if (r[0].cells.length <= 1)
    return console.warn("deleteColumn: Cannot delete the last column in the table"), !1;
  try {
    for (const a of r)
      a.cells.length > t && a.removeChild(a.cells[t]);
    me(e);
    const n = fe(e);
    return n && xe(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteColumn: Failed to delete column", n), !1;
  }
}
const $t = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: a = Je
}) => {
  const o = te(null), s = te(null), i = te(null), u = te(null), c = te(null), f = te(a), d = te(!1), [p, h] = ne(null), y = ve();
  oe(() => {
    f.current = a;
  }, [a]);
  const v = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (We(o.current), o.current = null), h(null), i.current = null, u.current = null, c.current = null, d.current = !1, n && n();
  }, [n]), b = N((k) => {
    if (k.preventDefault(), k.stopPropagation(), !s.current) return;
    const $ = k.currentTarget, R = $.dataset.type, I = parseInt($.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const j = fe(s.current);
    i.current = {
      x: k.clientX,
      y: k.clientY,
      structure: { ...j }
    }, u.current = R, c.current = I, d.current = !0, document.body.classList.add("table-resize-in-progress");
    const z = {
      [ce.COLUMN]: "col-resize",
      [ce.ROW]: "row-resize",
      [ce.TABLE_BOTTOM]: "ns-resize",
      [ce.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = z[R] || "default", document.addEventListener("mousemove", _), document.addEventListener("mouseup", T);
  }, []), A = N((k) => {
    const $ = Aa(k, f.current);
    return $ && (o.current = $, s.current = k, document.body.appendChild($), $.querySelectorAll(".table-resize-handler").forEach((I) => {
      I.addEventListener("mousedown", b);
    })), $;
  }, [b]), O = N((k) => {
    if (!le(k)) return;
    o.current && (We(o.current), o.current = null), k.classList.add("selected"), A(k) && (h(k), r && r(k));
  }, [r, A]), _ = N((k) => {
    if (!d.current || !s.current || !i.current || !u.current) return;
    k.preventDefault(), k.stopPropagation();
    const { x: $, y: R, structure: I } = i.current, j = u.current, z = c.current, F = k.clientX, C = k.clientY;
    let M = 0;
    switch (j) {
      case ce.COLUMN:
        M = F - $;
        break;
      case ce.ROW:
        M = C - R;
        break;
      case ce.TABLE_BOTTOM:
        M = C - R;
        break;
      case ce.TABLE_RIGHT:
        M = F - $;
        break;
    }
    const V = Ca({
      type: j,
      index: z,
      delta: M,
      currentStructure: I,
      options: f.current
    });
    xe(s.current, V), o.current && _t(o.current, s.current);
  }, []), T = N((k) => {
    if (d.current) {
      if (k.preventDefault(), k.stopPropagation(), s.current && i.current) {
        const $ = {
          structure: i.current.structure
        }, R = {
          structure: fe(s.current)
        };
        ($.structure.width !== R.structure.width || $.structure.height !== R.structure.height || JSON.stringify($.structure.columnWidths) !== JSON.stringify(R.structure.columnWidths) || JSON.stringify($.structure.rowHeights) !== JSON.stringify(R.structure.rowHeights)) && y.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: R } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: $ } }
        );
      }
      if (i.current = null, u.current = null, c.current = null, d.current = !1, document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", T), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const $ = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent($), t && t(s.current, fe(s.current));
      }
    }
  }, [t, y]), m = N((k) => {
    o.current && !o.current.contains(k.target) && v();
    const R = k.target.closest("table");
    if (R && le(R)) {
      if (R === s.current)
        return;
      O(R);
    }
  }, [O, v]), E = N((k) => {
    if (k.key === "Delete" && s.current && !d.current) {
      k.preventDefault();
      const $ = s.current;
      if ($.parentNode) {
        $.parentNode.removeChild($), v();
        const R = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(R);
      }
    }
    k.key === "Escape" && s.current && v();
  }, [e, v]), U = N(() => {
    o.current && s.current && _t(o.current, s.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const $ = e.current.closest(".editor-viewport");
    return $ && ($.addEventListener("scroll", U), window.addEventListener("scroll", U)), () => {
      $ && $.removeEventListener("scroll", U), window.removeEventListener("scroll", U);
    };
  }, [e, U]), oe(() => {
    if (!e.current) return;
    const k = e.current;
    return k.addEventListener("click", m), k.addEventListener("keydown", E), window.addEventListener("resize", U), () => {
      k.removeEventListener("click", m), k.removeEventListener("keydown", E), window.removeEventListener("resize", U), d.current && (document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", T), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && We(o.current);
    };
  }, [e, m, E, U, _, T]), oe(() => {
    if (!e.current) return;
    const k = new MutationObserver(($) => {
      $.forEach((R) => {
        R.type === "childList" && (R.removedNodes.forEach((I) => {
          I.nodeType === Node.ELEMENT_NODE && le(I) && I === p && v();
        }), R.addedNodes.forEach((I) => {
          if (I.nodeType !== Node.ELEMENT_NODE) return;
          if (le(I)) {
            setTimeout(() => O(I), 50);
            return;
          }
          const j = I.querySelectorAll?.("table") || [];
          j.length > 0 && setTimeout(() => O(j[0]), 50);
        }));
      });
    });
    return k.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => k.disconnect();
  }, [e, v, O]), oe(() => {
    if (!p) return;
    const k = new MutationObserver(($) => {
      $.some((I) => {
        if (I.type === "childList") {
          if ([...I.addedNodes, ...I.removedNodes].some(
            (z) => z.nodeType === Node.ELEMENT_NODE && z.tagName === "TR"
          )) return !0;
        } else if (I.type === "attributes" && ["colspan", "rowspan"].includes(I.attributeName))
          return !0;
        return !1;
      }) && o.current && s.current && (We(o.current), o.current = null, A(s.current));
    });
    return k.observe(p, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => k.disconnect();
  }, [p, A]), null;
};
$t.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: w.func,
  onTableSelect: w.func,
  onTableDeselect: w.func,
  resizeOptions: w.shape({
    minColumnWidth: w.number,
    minRowHeight: w.number,
    maxColumnWidth: w.number,
    maxRowHeight: w.number,
    tableMinWidth: w.number,
    tableMinHeight: w.number,
    tableMaxWidth: w.number,
    tableMaxHeight: w.number
  })
};
$t.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Je
};
const Ft = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = ne({ top: 0, left: 0 }), [u, c] = ne(!1), [f, d] = ne("top"), p = te(null), h = te(null), y = ve(), v = (C) => {
    if (!C)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (V) => setTimeout(V, 16))(() => {
      const V = document.querySelector(".table-resize-overlay");
      V && _t(V, C);
    });
  }, b = (C) => {
    if (!C) return null;
    const M = window.getComputedStyle(C);
    return {
      float: M.float || "none",
      margin: C.style.margin || "",
      marginLeft: C.style.marginLeft || "",
      marginRight: C.style.marginRight || "",
      display: M.display || "table"
    };
  }, A = N(() => {
    if (!e) return "left";
    const C = window.getComputedStyle(e);
    return C.marginLeft === "auto" && C.marginRight === "auto" ? "center" : C.float === "right" ? "right" : (C.float === "left", "left");
  }, [e]), [O, _] = ne("left");
  oe(() => {
    e && _(A());
  }, [e, A]);
  const T = N(() => {
    if (!e || !p.current) return;
    const C = e.getBoundingClientRect(), M = p.current.getBoundingClientRect(), V = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, re = C.bottom >= 0 && C.top <= V.height && C.right >= 0 && C.left <= V.width;
    let se = "top", x = 0, l = 0;
    if (re) {
      const q = C.top - M.height - 10, L = V.height - C.bottom - M.height - 10;
      L > q && L > 0 ? (se = "bottom", x = C.bottom + 10) : (se = "top", x = C.top - M.height - 10);
    } else
      se = "top", x = 10;
    l = C.left + C.width / 2 - M.width / 2;
    const P = window.innerWidth, H = window.innerHeight;
    let B = Math.max(10, Math.min(l, P - M.width - 10)), G = Math.max(10, Math.min(x, H - M.height - 10));
    i({ top: G, left: B }), d(se), c(!0);
  }, [e]);
  Tn(() => {
    T();
    const C = () => {
      T();
    }, M = h.current;
    return M && M.addEventListener("scroll", C), window.addEventListener("scroll", C), window.addEventListener("resize", C), () => {
      M && M.removeEventListener("scroll", C), window.removeEventListener("scroll", C), window.removeEventListener("resize", C), c(!1);
    };
  }, [e, T]), oe(() => {
    const C = (M) => {
      p.current && !p.current.contains(M.target) && M.target !== e && !e.contains(M.target) && r();
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [e, r]);
  const m = {
    left: {
      float: "left",
      margin: "10px 10px 10px 0",
      marginLeft: "",
      marginRight: ""
    },
    center: {
      float: "none",
      margin: "10px auto",
      marginLeft: "auto",
      marginRight: "auto"
    },
    right: {
      float: "right",
      margin: "10px 0 10px 10px",
      marginLeft: "",
      marginRight: ""
    }
  }, E = (C) => {
    if (e && m[C]) {
      const M = b(e), V = O, re = m[C];
      e.style.float = re.float, e.style.margin = re.margin, e.style.marginLeft = re.marginLeft, e.style.marginRight = re.marginRight, _(C), v(e);
      const se = b(e);
      y.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: C, state: se } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: V, state: M } }
      ), t && t(C);
    }
  }, U = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const C = Ra(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const M = o.current.innerHTML;
        console.log("Updated content length:", M.length), y.updateContinuousContent(M);
      } else
        console.warn("No editor ref available to update content");
      y.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), v(e), requestAnimationFrame(() => T());
    } else
      console.error("Failed to insert row above");
  }, k = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const C = Sa(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const M = o.current.innerHTML;
        console.log("Updated content length:", M.length), y.updateContinuousContent(M);
      } else
        console.warn("No editor ref available to update content");
      y.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), v(e), requestAnimationFrame(() => T());
    } else
      console.error("Failed to insert row below");
  }, $ = () => {
    if (console.log("handleInsertColumnLeft called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnLeft: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnLeft: No column selected");
      return;
    }
    if (console.log(`Inserting column left of index ${a}`), Oa(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const M = o.current.innerHTML;
        console.log("Updated content length:", M.length), y.updateContinuousContent(M);
      } else
        console.warn("No editor ref available to update content");
      y.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "left", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a } }
      ), v(e), requestAnimationFrame(() => T());
    } else
      console.error("Failed to insert column left");
  }, R = () => {
    if (console.log("handleInsertColumnRight called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnRight: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnRight: No column selected");
      return;
    }
    if (console.log(`Inserting column right of index ${a}`), _a(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const M = o.current.innerHTML;
        console.log("Updated content length:", M.length), y.updateContinuousContent(M);
      } else
        console.warn("No editor ref available to update content");
      y.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "right", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a + 1 } }
      ), v(e), requestAnimationFrame(() => T());
    } else
      console.error("Failed to insert column right");
  }, I = () => {
    if (console.log("handleDeleteRow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteRow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleDeleteRow: No row selected");
      return;
    }
    if (console.log(`Deleting row at index ${n}`), ka(e, n)) {
      if (console.log("Row deleted successfully, updating content"), o && o.current) {
        const M = o.current.innerHTML;
        console.log("Updated content length:", M.length), y.updateContinuousContent(M);
      } else
        console.warn("No editor ref available to update content");
      y.recordOperation(
        { type: "DELETE_ROW", payload: { element: e, index: n } },
        { type: "INSERT_ROW", payload: { element: e, position: "at", index: n } }
      ), v(e), requestAnimationFrame(() => T());
    } else
      console.error("Failed to delete row");
  }, j = () => {
    if (console.log("handleDeleteColumn called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteColumn: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleDeleteColumn: No column selected");
      return;
    }
    if (console.log(`Deleting column at index ${a}`), Pa(e, a)) {
      if (console.log("Column deleted successfully, updating content"), o && o.current) {
        const M = o.current.innerHTML;
        console.log("Updated content length:", M.length), y.updateContinuousContent(M);
      } else
        console.warn("No editor ref available to update content");
      y.recordOperation(
        { type: "DELETE_COLUMN", payload: { element: e, index: a } },
        { type: "INSERT_COLUMN", payload: { element: e, position: "at", index: a } }
      ), v(e), requestAnimationFrame(() => T());
    } else
      console.error("Failed to delete column");
  }, z = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, F = (C) => ({
    ...z,
    background: C ? "#007bff" : "transparent",
    color: C ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        ref: p,
        className: "table-tooltip-menu",
        "data-menu-position": f,
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
          minWidth: "100px",
          minHeight: "32px",
          opacity: u ? 1 : 0,
          visibility: u ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${O === "left" ? "active" : ""}`,
              onClick: () => E("left"),
              title: "Align Left",
              style: F(O === "left"),
              children: /* @__PURE__ */ g.jsx(It, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${O === "center" ? "active" : ""}`,
              onClick: () => E("center"),
              title: "Align Center",
              style: F(O === "center"),
              children: /* @__PURE__ */ g.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              className: `tooltip-button ${O === "right" ? "active" : ""}`,
              onClick: () => E("right"),
              title: "Align Right",
              style: F(O === "right"),
              children: /* @__PURE__ */ g.jsx(Lt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: U,
                title: "Insert Row Above",
                style: {
                  ...z,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ g.jsx(Wo, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: k,
                title: "Insert Row Below",
                style: {
                  ...z,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ g.jsx(jo, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: I,
                title: "Delete Row",
                style: {
                  ...z,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ g.jsx(St, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: $,
                title: "Insert Column Left",
                style: {
                  ...z,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ g.jsx(zo, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: R,
                title: "Insert Column Right",
                style: {
                  ...z,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ g.jsx(Fo, { size: 14 })
              }
            ),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: j,
                title: "Delete Column",
                style: {
                  ...z,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ g.jsx(St, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
Ft.propTypes = {
  tableElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onClose: w.func.isRequired,
  selectedRowIndex: w.number,
  selectedColIndex: w.number,
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
Ft.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const Ut = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const [r, n] = ne(/* @__PURE__ */ new Set()), [a, o] = ne(null), [s, i] = ne(null), [u, c] = ne(null), [f, d] = ne(!1), [p, h] = ne(!1), [y, v] = ne(null), [b, A] = ne(null);
  ve(), te(null);
  const O = te(null), _ = N(() => {
    n(/* @__PURE__ */ new Set()), o(null), i(null), c(null), v(null), A(null), d(!1), h(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((j) => {
      j.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), O.current !== null && (O.current = null, t && t(null));
  }, [t]), T = N((j) => {
    const z = j.closest("tr"), F = j.closest("table");
    if (!z || !F) return null;
    const C = Array.from(F.rows).indexOf(z), M = Array.from(z.cells).indexOf(j);
    return { rowIndex: C, cellIndex: M, table: F };
  }, []), m = N((j) => {
    if (j.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const z = Array.from(j), F = z[0], C = T(F);
    if (!C) return { mode: null, rowIndex: null, colIndex: null };
    const { table: M } = C;
    return z.filter((se) => {
      const x = T(se);
      return x && x.table === M && x.rowIndex === C.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: C.rowIndex, colIndex: null } : z.filter((se) => {
      const x = T(se);
      return x && x.table === M && x.cellIndex === C.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: C.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [T]), E = N((j, z, F, C, M) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((V) => {
      V.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!M || !j)) {
      if (j === "row" && z !== null) {
        const V = M.rows[z];
        V && Array.from(V.cells).forEach((re) => {
          re.classList.add("table-row-selected");
        });
      } else j === "column" && F !== null ? Array.from(M.rows).forEach((V) => {
        const re = V.cells[F];
        re && re.classList.add("table-col-selected");
      }) : j === "cells" && C.forEach((V) => {
        V.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), U = N((j, z) => {
    const F = m(j);
    n(j), o(F.mode), i(F.rowIndex), c(F.colIndex), A(z), E(F.mode, F.rowIndex, F.colIndex, j, z);
    const C = F.mode ? {
      mode: F.mode,
      cells: j,
      rowIndex: F.rowIndex,
      colIndex: F.colIndex,
      table: z
    } : null;
    JSON.stringify(O.current) !== JSON.stringify(C) && (O.current = C, t && t(C));
  }, [m, E, t]), k = N((j) => {
    const z = j.target.closest("td, th");
    if (!z) return;
    const F = T(z);
    F && (d(!0), v(z), A(F.table), h(!1));
  }, [T]), $ = N((j) => {
    if (!f || !y) return;
    const z = j.target.closest("td, th");
    if (!z || !b || !b.contains(z)) return;
    h(!0), j.preventDefault();
    const F = T(y), C = T(z);
    if (!F || !C || F.table !== C.table) return;
    const M = Math.min(F.rowIndex, C.rowIndex), V = Math.max(F.rowIndex, C.rowIndex), re = Math.min(F.cellIndex, C.cellIndex), se = Math.max(F.cellIndex, C.cellIndex), x = /* @__PURE__ */ new Set();
    for (let l = M; l <= V; l++) {
      const P = b.rows[l];
      if (P)
        for (let H = re; H <= se; H++) {
          const B = P.cells[H];
          B && x.add(B);
        }
    }
    U(x, b);
  }, [f, T]), R = N(() => {
    p || _(), d(!1), v(null);
  }, [p, _]), I = N((j) => {
    const z = j.target.closest("td, th"), F = j.target.closest("table");
    if (!(z && b && b.contains(z))) {
      if (F && F !== b) {
        _();
        return;
      }
      F || _();
    }
  }, [_, b]);
  return oe(() => {
    if (!e.current) return;
    const j = e.current, z = (C) => {
      C.target.closest("td, th") && k(C);
    }, F = (C) => {
      C.target.closest("td, th") && $(C);
    };
    return j.addEventListener("mousedown", z, !0), j.addEventListener("mouseenter", F, !0), document.addEventListener("mouseup", R), document.addEventListener("click", I), () => {
      j.removeEventListener("mousedown", z, !0), j.removeEventListener("mouseenter", F, !0), document.removeEventListener("mouseup", R), document.removeEventListener("click", I);
    };
  }, [e, k, $, R, I]), oe(() => {
    if (!e.current) return;
    const j = new MutationObserver((z) => {
      z.forEach((F) => {
        F.type === "childList" && b && !e.current.contains(b) && _();
      });
    });
    return j.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => j.disconnect();
  }, [e, _]), null;
};
Ut.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: w.func
};
Ut.defaultProps = {
  onCellSelectionChange: void 0
};
const Na = 50, yt = 50, Ma = 50, La = 100, Ia = 300, Wt = kt(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: u = !0,
  showPageManager: c = !0
}, f) => {
  const d = Sn(), p = ve(), { pageSize: h, pageMargins: y, continuousContent: v, pageBoundaries: b, activePage: A, zoomLevel: O, canUndo: _, canRedo: T } = d, m = te(null), E = te(null), { currentFormat: U, formatText: k, updateCurrentFormatFromSelection: $ } = Ur(), [R, I] = ne(!1), [j, z] = ne(null), [F, C] = ne(!0), [M, V] = ne(!1), [re, se] = ne(null), [x, l] = ne(null), [P, H] = ne(null), {
    checkAndUpdateBoundaries: B,
    getCurrentPage: G,
    scrollToPage: q,
    updateBoundaries: L,
    triggerAutoReflow: Y,
    removePageAndContent: J,
    removePageBreak: X,
    insertPageBreakAtBoundary: ie
  } = po(h, E, O, y), D = ge(() => Ne(h), [h]), [ue, Ce] = ne(!1), pe = te(null), Ie = te(!1), De = te(!1), He = te(!1), je = te(v), Qe = N(() => {
    Ie.current = !1;
    const S = Math.max(0, b.length - 1);
    p.setActivePage(S), setTimeout(() => {
      q(S, m);
    }, Ma);
  }, [b.length, p, q]);
  oe(() => {
    if (!E.current || He.current) return;
    E.current.innerHTML = v, He.current = !0, je.current = v;
    const S = setTimeout(() => {
      L();
    }, Na);
    return () => clearTimeout(S);
  }, []), oe(() => {
    if (!E.current || !He.current) return;
    if (E.current.innerHTML !== v) {
      E.current.innerHTML = v;
      const ae = setTimeout(() => {
        L(), Ie.current && Qe();
      }, yt);
      return je.current = v, () => clearTimeout(ae);
    }
  }, [v, L, Qe]), oe(() => {
    s && He.current && s(v);
  }, [v, s]);
  const { restoreCursorPosition: et, hasActiveCursorSelection: tt } = ho({
    updateCurrentFormatFromSelection: $,
    editorRef: E
  }), er = N((S) => {
    S !== v && p.updateContinuousContent(S), E.current && E.current.innerHTML !== S && (E.current.innerHTML = S), je.current = S, setTimeout(() => {
      L();
    }, yt);
  }, [v, p, L]), nt = N((S) => {
    if (!E.current || !S) return;
    tt() || et(), document.execCommand("insertHTML", !1, S);
    const ae = E.current.innerHTML;
    p.updateContinuousContent(ae), je.current = ae, setTimeout(() => {
      L(), Y(200);
    }, yt);
  }, [tt, et, p, L, Y]), qt = ge(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => E.current ? E.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (E.current ? E.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => E.current ? uo(E.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (S) => {
      const ae = Ge(S);
      er(ae);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (S) => {
      p.updatePageSize(S), L({ pageSize: S });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (S) => {
      p.updatePageMargins(S), L({ pageMargins: S });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (S) => {
      const ae = Ge(S);
      nt(ae);
    }
  }), [v, p, L, Y, tt, et]);
  Tr(f, () => qt, [qt]);
  const rt = N(() => {
    if (!E.current) return;
    let S = E.current.innerHTML;
    S = Ge(S), S !== E.current.innerHTML && (E.current.innerHTML = S);
    const ae = v;
    if (ae !== S) {
      const it = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: S
      }, ct = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: ae
      };
      p.recordOperation(it, ct);
    }
    p.updateContinuousContent(S), B(), Y(200);
    const Re = G(m);
    Re !== A && p.setActivePage(Re);
  }, [p, B, G, A, Y, m, E, v]), tr = N((S) => {
    rt();
  }, [rt]), Gt = N((S) => {
    p.updatePageSize(S), L({ pageSize: S }), a && a(S);
  }, [p, L, a]), Zt = N((S) => {
    p.updatePageMargins(S), L({ pageMargins: S }), o && o(S);
  }, [p, L, o]), Yt = N((S) => {
    S < 0 || S >= b.length || (De.current = !0, p.setActivePage(S), q(S, m), setTimeout(() => {
      De.current = !1;
    }, Ia), t && t(S));
  }, [p, q, t, b.length]), Vt = N(() => {
    const S = b.length + 1;
    ie(S) && (Ie.current = !0, setTimeout(() => {
      Ie.current && Qe();
    }, 100)), r && r();
  }, [b.length, ie, p, q, r]), nr = N(() => {
    const S = window.getSelection();
    if (S && S.rangeCount > 0) {
      if (!E?.current) return;
      const it = `<page-break data-page-break="true" contenteditable="false" data-page-number="${E.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, it), setTimeout(() => {
        L();
        const ct = G(m);
        p.setActivePage(ct);
      }, 150);
    }
  }, [L, G, p, m]), rr = N((S) => {
    nt(S);
  }, [nt]), or = N((S) => {
    if (!S) return;
    X(S) && setTimeout(() => {
      const Re = G(m);
      p.setActivePage(Re);
    }, 200);
  }, [X, G, p, m]), Kt = N((S) => {
    if (b.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    J(S) && (p.setActivePage(0), n && n(S));
  }, [b.length, J, p, n]), sr = ge(() => ({
    handleZoomIn: () => p.zoomIn(),
    handleZoomOut: () => p.zoomOut(),
    handleZoomReset: () => p.resetZoom(),
    handleUndo: () => p.undo(),
    handleRedo: () => p.redo()
  }), [p]), { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: at, handleUndo: ar, handleRedo: ir } = sr;
  go(
    { handleZoomIn: ot, handleZoomOut: st, handleZoomReset: at, handleUndo: ar, handleRedo: ir },
    { editorRef: E, containerRef: m }
  );
  const cr = N(() => {
    !m.current || !E.current || De.current || (pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
      if (De.current) {
        pe.current = null;
        return;
      }
      const S = G(m);
      S !== A && S >= 0 && p.setActivePage(S), pe.current = null;
    }, La));
  }, [G, A, p]), lr = ge(() => {
    if (!v) return 0;
    const ae = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return ae ? ae.length : 0;
  }, [v]), ur = b.length || 1, dr = N((S) => {
    I(!0), z(S);
  }, []), Xt = N(() => {
    I(!1), z(null);
  }, []), fr = N((S, ae) => {
  }, []), pr = N((S) => {
    S && S.mode === "row" ? (l(S.rowIndex), H(null)) : S && S.mode === "column" ? (H(S.colIndex), l(null)) : (l(null), H(null));
  }, []), gr = N((S) => {
    V(!0), se(S);
  }, []), Jt = N(() => {
    V(!1), se(null);
  }, []), hr = N((S, ae) => {
  }, []);
  return oe(() => () => {
    pe.current && clearTimeout(pe.current);
  }, []), /* @__PURE__ */ g.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ g.jsx(
      Dt,
      {
        currentFormat: {
          ...U,
          imageSelected: R
        },
        onFormatText: k,
        onAddPageBreak: nr,
        onInsertImage: rr,
        canUndo: _,
        canRedo: T
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ g.jsx(
        ea,
        {
          editorView: null,
          isCollapsed: ue,
          onToggle: () => Ce((S) => !S),
          wordCount: lr,
          pageCount: ur
        }
      ),
      /* @__PURE__ */ g.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: m,
          onScroll: cr,
          children: /* @__PURE__ */ g.jsx(
            ga,
            {
              content: v,
              dimensions: D,
              pageSize: h,
              pageMargins: y,
              pageBoundaries: b,
              editorRef: E,
              onInput: tr,
              onContentChange: rt,
              onClick: () => E.current?.focus(),
              onRemovePageBreak: or,
              zoomLevel: O
            }
          )
        }
      ),
      /* @__PURE__ */ g.jsx(
        Bt,
        {
          editorRef: E,
          onImageSelect: dr,
          onImageDeselect: Xt,
          onImageResize: fr,
          resizeOptions: {
            ...Ae,
            preserveAspectRatio: F,
            aspectRatio: F
          }
        }
      ),
      /* @__PURE__ */ g.jsx(
        $t,
        {
          editorRef: E,
          onTableSelect: gr,
          onTableDeselect: Jt,
          onTableResize: hr
        }
      ),
      /* @__PURE__ */ g.jsx(
        Ut,
        {
          editorRef: E,
          onCellSelectionChange: pr
        }
      ),
      R && j && /* @__PURE__ */ g.jsx(
        zt,
        {
          imageElement: j,
          initialPreserveAspectRatio: F,
          onAlignChange: (S) => {
          },
          onAspectRatioToggle: (S) => {
            C(S);
          },
          onDelete: () => {
            if (j) {
              const S = j.getAttribute("data-key");
              S && xo(S).catch((ae) => {
                console.error("Failed to delete image from IndexedDB:", ae);
              });
            }
          },
          onClose: Xt
        }
      ),
      M && re && /* @__PURE__ */ g.jsx(
        Ft,
        {
          tableElement: re,
          onAlignChange: (S) => {
          },
          onClose: Jt,
          selectedRowIndex: x,
          selectedColIndex: P,
          editorRef: E
        }
      ),
      c && /* @__PURE__ */ g.jsx("div", { className: "page-manager-sidebar", children: e ? Ke.cloneElement(e, {
        onNavigate: Yt,
        onAddPage: Vt,
        onDeletePage: Kt,
        onPageSizeChange: Gt,
        onPageMarginsChange: Zt,
        zoomLevel: O,
        canZoomIn: wt(O),
        canZoomOut: xt(O),
        onZoomIn: ot,
        onZoomOut: st,
        onZoomReset: at
      }) : /* @__PURE__ */ g.jsx(
        ha,
        {
          pageBoundaries: b,
          activePage: A,
          pageSize: h,
          pageMargins: y,
          zoomLevel: O,
          canZoomIn: wt(O),
          canZoomOut: xt(O),
          onNavigate: Yt,
          onAddPage: Vt,
          onDeletePage: Kt,
          onPageSizeChange: Gt,
          onPageMarginsChange: Zt,
          onZoomIn: ot,
          onZoomOut: st,
          onZoomReset: at
        }
      ) })
    ] })
  ] });
});
Wt.displayName = "HtmlEditor";
Wt.propTypes = {
  pageManagerComponent: w.element,
  onNavigatePage: w.func,
  onAddPage: w.func,
  onDeletePage: w.func,
  onPageSizeChange: w.func,
  onPageMarginsChange: w.func,
  onChange: w.func,
  showSidebar: w.bool,
  showToolbar: w.bool,
  showPageManager: w.bool
};
Wt.defaultProps = {
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
class Qn extends Ke.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ g.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ g.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ g.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ g.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ g.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ g.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ g.jsx(
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
Qn.propTypes = {
  children: w.node.isRequired,
  fallback: w.node,
  onError: w.func,
  onReset: w.func,
  showDetails: w.bool
};
Qn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Br as COMMON_FONT_SIZES,
  Fn as ColorPickerDropdown,
  Xe as DEFAULT_FONT_SIZE,
  Ae as DEFAULT_IMAGE_RESIZE_OPTIONS,
  xn as DEFAULT_PAGE_SIZE,
  Je as DEFAULT_TABLE_RESIZE_OPTIONS,
  $a as DocumentProvider,
  Dt as EditorToolbar,
  Qn as ErrorBoundary,
  kn as FONT_SIZE_MAP,
  Wt as HtmlEditor,
  Bt as ImageResizeHandlers,
  Ye as PAGE_SIZES,
  ha as PageManager,
  ga as PageView,
  W as RESIZE_HANDLERS,
  ea as Sidebar,
  ce as TABLE_RESIZE_HANDLERS,
  $t as TableResizeHandlers,
  Za as applyImageDimensions,
  xe as applyTableDimensions,
  qa as calculateResizeDimensions,
  Ca as calculateTableResizeDimensions,
  Ya as clearImages,
  mo as createResizeOverlay,
  Aa as createTableResizeOverlay,
  xo as deleteImage,
  Va as getAllImageKeys,
  za as getAvailablePageSizes,
  wo as getImage,
  Ga as getImageDimensions,
  Ne as getPageDimensions,
  Fa as getPixelValue,
  Ua as getPointValue,
  fe as getTableStructure,
  we as isResizableImage,
  le as isResizableTable,
  Wa as isValidFontSize,
  Ba as isValidPageSize,
  ta as logger,
  $r as pixelsToPoints,
  zr as pointsToPixels,
  ht as removeResizeOverlay,
  We as removeTableResizeOverlay,
  Eo as saveImage,
  Rt as updateResizeOverlay,
  _t as updateTableResizeOverlay,
  po as useContinuousReflow,
  Rn as useDocument,
  ve as useDocumentActions,
  Sn as useDocumentState,
  Ur as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
