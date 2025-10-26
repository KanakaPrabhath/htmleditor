import Ve, { createContext as pr, useContext as gr, useReducer as hr, useMemo as ge, useState as re, useCallback as N, useRef as Q, useEffect as oe, forwardRef as Ot, createElement as mt, memo as mr, useLayoutEffect as bn, useImperativeHandle as yr } from "react";
import { v4 as kt } from "uuid";
import { createPortal as vn } from "react-dom";
function br(e) {
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
var Xt;
function vr() {
  if (Xt) return Se;
  Xt = 1;
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
var Jt;
function Tr() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === U ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case A:
          return "Fragment";
        case L:
          return "Profiler";
        case z:
          return "StrictMode";
        case T:
          return "Suspense";
        case I:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case v:
            return "Portal";
          case g:
            return l.displayName || "Context";
          case P:
            return (l._context.displayName || "Context") + ".Consumer";
          case f:
            var k = l.render;
            return l = l.displayName, l || (l = k.displayName || k.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case R:
            return k = l.displayName || null, k !== null ? k : e(l.type) || "Memo";
          case $:
            k = l._payload, l = l._init;
            try {
              return e(l(k));
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
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var H = k.error, D = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return H.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), t(l);
      }
    }
    function n(l) {
      if (l === A) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === $)
        return "<...>";
      try {
        var k = e(l);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = B.A;
      return l === null ? null : l.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(l) {
      if (x.call(l, "key")) {
        var k = Object.getOwnPropertyDescriptor(l, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function i(l, k) {
      function H() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: H,
        configurable: !0
      });
    }
    function u() {
      var l = e(this.type);
      return Y[l] || (Y[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function c(l, k, H, D, q, G) {
      var M = H.ref;
      return l = {
        $$typeof: b,
        type: l,
        key: k,
        props: H,
        _owner: D
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(l, "ref", {
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
        value: q
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function d(l, k, H, D, q, G) {
      var M = k.children;
      if (M !== void 0)
        if (D)
          if (O(M)) {
            for (D = 0; D < M.length; D++)
              p(M[D]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(M);
      if (x.call(k, "key")) {
        M = e(l);
        var V = Object.keys(k).filter(function(X) {
          return X !== "key";
        });
        D = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", E[M + D] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          M,
          V,
          M
        ), E[M + D] = !0);
      }
      if (M = null, H !== void 0 && (r(H), M = "" + H), s(k) && (r(k.key), M = "" + k.key), "key" in k) {
        H = {};
        for (var J in k)
          J !== "key" && (H[J] = k[J]);
      } else H = k;
      return M && i(
        H,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), c(
        l,
        M,
        H,
        a(),
        q,
        G
      );
    }
    function p(l) {
      h(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === $ && (l._payload.status === "fulfilled" ? h(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function h(l) {
      return typeof l == "object" && l !== null && l.$$typeof === b;
    }
    var m = Ve, b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), g = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), B = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, O = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var _, Y = {}, ee = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), se = C(n(o)), E = {};
    Oe.Fragment = A, Oe.jsx = function(l, k, H) {
      var D = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        l,
        k,
        H,
        !1,
        D ? Error("react-stack-top-frame") : ee,
        D ? C(n(l)) : se
      );
    }, Oe.jsxs = function(l, k, H) {
      var D = 1e4 > B.recentlyCreatedOwnerStacks++;
      return d(
        l,
        k,
        H,
        !0,
        D ? Error("react-stack-top-frame") : ee,
        D ? C(n(l)) : se
      );
    };
  })()), Oe;
}
var Qt;
function wr() {
  return Qt || (Qt = 1, process.env.NODE_ENV === "production" ? Be.exports = vr() : Be.exports = Tr()), Be.exports;
}
var y = wr();
const yt = 100, bt = 50, vt = 200, en = 5, Tt = (e) => e < vt, wt = (e) => e > bt, Er = 96, ye = (e) => Math.round(e * Er), Ge = {
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
}, he = "NORMAL", Tn = (e = he) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return {
      top: ye(e.top),
      bottom: ye(e.bottom),
      left: ye(e.left),
      right: ye(e.right)
    };
  const t = Ge[e] || Ge[he];
  return {
    top: ye(t.top),
    bottom: ye(t.bottom),
    left: ye(t.left),
    right: ye(t.right)
  };
}, xr = (e = he) => {
  const t = Tn(e);
  return t.top + t.bottom;
}, Cr = () => Object.keys(Ge), Ar = (e) => {
  if (typeof e == "object" && e !== null && typeof e.top == "number" && typeof e.bottom == "number" && typeof e.left == "number" && typeof e.right == "number")
    return `Custom (${e.top}" / ${e.left}")`;
  const t = Ge[e];
  return t ? t.label : "Unknown";
}, Ze = {
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
}, wn = "A4", Pe = (e) => {
  const t = Ze[e] || Ze[wn];
  return {
    width: t.width,
    height: t.height
  };
}, Pa = (e) => Object.keys(Ze).includes(e), Ma = () => Object.keys(Ze), Me = wn, Ee = "<p><br></p>", Rr = "continuous", ke = (e, t = Me) => ({
  id: kt(),
  index: e,
  size: t,
  content: Ee,
  images: [],
  isBreakPoint: !1
}), We = (e) => typeof e != "string" || e.trim() === "" ? Ee : e, En = (e, t = Me) => (e.length > 0 ? e : [ke(0, t)]).map((n, a) => ({
  id: n.id || kt(),
  index: a,
  size: n.size || t,
  content: We(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Sr = (e = Me) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: Pe(e).height
}], ze = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), Et = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || Me, n = En(e.pages || [ke(0, r)], r);
  return {
    id: kt(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Rr,
    continuousContent: e.continuousContent || Ee,
    pageBoundaries: e.pageBoundaries || Sr(r),
    zoomLevel: e.zoomLevel || yt,
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
}, xt = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case Z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Ee, pageSize: a = Me } = t.payload || {}, o = { ...ke(0, a), content: We(n) };
      return Et({
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
        content: We(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = En(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : ze(a);
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
      a.splice(n, 0, ke(n, e.pageSize));
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
        Pe(n);
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
      return Et();
    case Z.UPDATE_CONTINUOUS_CONTENT: {
      const n = We(t.payload);
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
          const c = u[a], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const p = document.createElement("p");
          p.innerHTML = "<br>", c.parentNode.insertBefore(d, c.nextSibling), d.parentNode.insertBefore(p, d.nextSibling), s = i.innerHTML;
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
`) || Ee : e.continuousContent && e.continuousContent !== Ee && (o = [{ ...ke(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case Z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < bt || n > vt ? (console.warn(`Invalid zoom level: ${n}. Must be between ${bt} and ${vt}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_IN: {
      if (!Tt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + en;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_OUT: {
      if (!wt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - en;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.RESET_ZOOM:
      return e.zoomLevel === yt ? e : {
        ...e,
        zoomLevel: yt,
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
      return n.inverseOperation && (o = xt(e, n.inverseOperation)), {
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
      return n.operation && (o = xt(e, n.operation)), {
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
}, xn = pr(null), La = ({ children: e, initialState: t = {} }) => {
  const [r, n] = hr(xt, Et(t)), a = ge(() => ({
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
  return /* @__PURE__ */ y.jsx(xn.Provider, { value: o, children: e });
}, Cn = () => {
  const e = gr(xn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, An = () => {
  const { state: e } = Cn();
  return e;
}, Te = () => {
  const { actions: e } = Cn();
  return e;
};
var $e = { exports: {} }, Fe = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function Or() {
  if (tn) return te;
  tn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function P(f) {
    if (typeof f == "object" && f !== null) {
      var T = f.$$typeof;
      switch (T) {
        case t:
          switch (f = f.type, f) {
            case u:
            case c:
            case n:
            case o:
            case a:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case i:
                case d:
                case b:
                case m:
                case s:
                  return f;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  function g(f) {
    return P(f) === c;
  }
  return te.AsyncMode = u, te.ConcurrentMode = c, te.ContextConsumer = i, te.ContextProvider = s, te.Element = t, te.ForwardRef = d, te.Fragment = n, te.Lazy = b, te.Memo = m, te.Portal = r, te.Profiler = o, te.StrictMode = a, te.Suspense = p, te.isAsyncMode = function(f) {
    return g(f) || P(f) === u;
  }, te.isConcurrentMode = g, te.isContextConsumer = function(f) {
    return P(f) === i;
  }, te.isContextProvider = function(f) {
    return P(f) === s;
  }, te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, te.isForwardRef = function(f) {
    return P(f) === d;
  }, te.isFragment = function(f) {
    return P(f) === n;
  }, te.isLazy = function(f) {
    return P(f) === b;
  }, te.isMemo = function(f) {
    return P(f) === m;
  }, te.isPortal = function(f) {
    return P(f) === r;
  }, te.isProfiler = function(f) {
    return P(f) === o;
  }, te.isStrictMode = function(f) {
    return P(f) === a;
  }, te.isSuspense = function(f) {
    return P(f) === p;
  }, te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === c || f === o || f === a || f === p || f === h || typeof f == "object" && f !== null && (f.$$typeof === b || f.$$typeof === m || f.$$typeof === s || f.$$typeof === i || f.$$typeof === d || f.$$typeof === A || f.$$typeof === z || f.$$typeof === L || f.$$typeof === v);
  }, te.typeOf = P, te;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function kr() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function P(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === c || j === o || j === a || j === p || j === h || typeof j == "object" && j !== null && (j.$$typeof === b || j.$$typeof === m || j.$$typeof === s || j.$$typeof === i || j.$$typeof === d || j.$$typeof === A || j.$$typeof === z || j.$$typeof === L || j.$$typeof === v);
    }
    function g(j) {
      if (typeof j == "object" && j !== null) {
        var ue = j.$$typeof;
        switch (ue) {
          case t:
            var Ce = j.type;
            switch (Ce) {
              case u:
              case c:
              case n:
              case o:
              case a:
              case p:
                return Ce;
              default:
                var pe = Ce && Ce.$$typeof;
                switch (pe) {
                  case i:
                  case d:
                  case b:
                  case m:
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
    var f = u, T = c, I = i, R = s, $ = t, W = d, U = n, B = b, x = m, O = r, C = o, _ = a, Y = p, ee = !1;
    function se(j) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(j) || g(j) === u;
    }
    function E(j) {
      return g(j) === c;
    }
    function l(j) {
      return g(j) === i;
    }
    function k(j) {
      return g(j) === s;
    }
    function H(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function D(j) {
      return g(j) === d;
    }
    function q(j) {
      return g(j) === n;
    }
    function G(j) {
      return g(j) === b;
    }
    function M(j) {
      return g(j) === m;
    }
    function V(j) {
      return g(j) === r;
    }
    function J(j) {
      return g(j) === o;
    }
    function X(j) {
      return g(j) === a;
    }
    function ie(j) {
      return g(j) === p;
    }
    ne.AsyncMode = f, ne.ConcurrentMode = T, ne.ContextConsumer = I, ne.ContextProvider = R, ne.Element = $, ne.ForwardRef = W, ne.Fragment = U, ne.Lazy = B, ne.Memo = x, ne.Portal = O, ne.Profiler = C, ne.StrictMode = _, ne.Suspense = Y, ne.isAsyncMode = se, ne.isConcurrentMode = E, ne.isContextConsumer = l, ne.isContextProvider = k, ne.isElement = H, ne.isForwardRef = D, ne.isFragment = q, ne.isLazy = G, ne.isMemo = M, ne.isPortal = V, ne.isProfiler = J, ne.isStrictMode = X, ne.isSuspense = ie, ne.isValidElementType = P, ne.typeOf = g;
  })()), ne;
}
var rn;
function Rn() {
  return rn || (rn = 1, process.env.NODE_ENV === "production" ? Fe.exports = Or() : Fe.exports = kr()), Fe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ct, on;
function _r() {
  if (on) return ct;
  on = 1;
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
      var u = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ct = a() ? Object.assign : function(o, s) {
    for (var i, u = n(o), c, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var p in i)
        t.call(i, p) && (u[p] = i[p]);
      if (e) {
        c = e(i);
        for (var h = 0; h < c.length; h++)
          r.call(i, c[h]) && (u[c[h]] = i[c[h]]);
      }
    }
    return u;
  }, ct;
}
var lt, sn;
function _t() {
  if (sn) return lt;
  sn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lt = e, lt;
}
var ut, an;
function Sn() {
  return an || (an = 1, ut = Function.call.bind(Object.prototype.hasOwnProperty)), ut;
}
var dt, cn;
function Nr() {
  if (cn) return dt;
  cn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ _t(), r = {}, n = /* @__PURE__ */ Sn();
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
      for (var d in o)
        if (n(o, d)) {
          var p;
          try {
            if (typeof o[d] != "function") {
              var h = Error(
                (u || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = o[d](s, d, u, i, null, t);
          } catch (b) {
            p = b;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var m = c ? c() : "";
            e(
              "Failed " + i + " type: " + p.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, dt = a, dt;
}
var ft, ln;
function Pr() {
  if (ln) return ft;
  ln = 1;
  var e = Rn(), t = _r(), r = /* @__PURE__ */ _t(), n = /* @__PURE__ */ Sn(), a = /* @__PURE__ */ Nr(), o = function() {
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
  return ft = function(i, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(E) {
      var l = E && (c && E[c] || E[d]);
      if (typeof l == "function")
        return l;
    }
    var h = "<<anonymous>>", m = {
      array: z("array"),
      bigint: z("bigint"),
      bool: z("boolean"),
      func: z("function"),
      number: z("number"),
      object: z("object"),
      string: z("string"),
      symbol: z("symbol"),
      any: L(),
      arrayOf: P,
      element: g(),
      elementType: f(),
      instanceOf: T,
      node: W(),
      objectOf: R,
      oneOf: I,
      oneOfType: $,
      shape: B,
      exact: x
    };
    function b(E, l) {
      return E === l ? E !== 0 || 1 / E === 1 / l : E !== E && l !== l;
    }
    function v(E, l) {
      this.message = E, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function A(E) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, k = 0;
      function H(q, G, M, V, J, X, ie) {
        if (V = V || h, X = X || M, ie !== r) {
          if (u) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = V + ":" + M;
            !l[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[ue] = !0, k++);
          }
        }
        return G[M] == null ? q ? G[M] === null ? new v("The " + J + " `" + X + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new v("The " + J + " `" + X + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : E(G, M, V, J, X);
      }
      var D = H.bind(null, !1);
      return D.isRequired = H.bind(null, !0), D;
    }
    function z(E) {
      function l(k, H, D, q, G, M) {
        var V = k[H], J = _(V);
        if (J !== E) {
          var X = Y(V);
          return new v(
            "Invalid " + q + " `" + G + "` of type " + ("`" + X + "` supplied to `" + D + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return A(l);
    }
    function L() {
      return A(s);
    }
    function P(E) {
      function l(k, H, D, q, G) {
        if (typeof E != "function")
          return new v("Property `" + G + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var M = k[H];
        if (!Array.isArray(M)) {
          var V = _(M);
          return new v("Invalid " + q + " `" + G + "` of type " + ("`" + V + "` supplied to `" + D + "`, expected an array."));
        }
        for (var J = 0; J < M.length; J++) {
          var X = E(M, J, D, q, G + "[" + J + "]", r);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return A(l);
    }
    function g() {
      function E(l, k, H, D, q) {
        var G = l[k];
        if (!i(G)) {
          var M = _(G);
          return new v("Invalid " + D + " `" + q + "` of type " + ("`" + M + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(E);
    }
    function f() {
      function E(l, k, H, D, q) {
        var G = l[k];
        if (!e.isValidElementType(G)) {
          var M = _(G);
          return new v("Invalid " + D + " `" + q + "` of type " + ("`" + M + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(E);
    }
    function T(E) {
      function l(k, H, D, q, G) {
        if (!(k[H] instanceof E)) {
          var M = E.name || h, V = se(k[H]);
          return new v("Invalid " + q + " `" + G + "` of type " + ("`" + V + "` supplied to `" + D + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return A(l);
    }
    function I(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function l(k, H, D, q, G) {
        for (var M = k[H], V = 0; V < E.length; V++)
          if (b(M, E[V]))
            return null;
        var J = JSON.stringify(E, function(ie, j) {
          var ue = Y(j);
          return ue === "symbol" ? String(j) : j;
        });
        return new v("Invalid " + q + " `" + G + "` of value `" + String(M) + "` " + ("supplied to `" + D + "`, expected one of " + J + "."));
      }
      return A(l);
    }
    function R(E) {
      function l(k, H, D, q, G) {
        if (typeof E != "function")
          return new v("Property `" + G + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var M = k[H], V = _(M);
        if (V !== "object")
          return new v("Invalid " + q + " `" + G + "` of type " + ("`" + V + "` supplied to `" + D + "`, expected an object."));
        for (var J in M)
          if (n(M, J)) {
            var X = E(M, J, D, q, G + "." + J, r);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return A(l);
    }
    function $(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var l = 0; l < E.length; l++) {
        var k = E[l];
        if (typeof k != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(k) + " at index " + l + "."
          ), s;
      }
      function H(D, q, G, M, V) {
        for (var J = [], X = 0; X < E.length; X++) {
          var ie = E[X], j = ie(D, q, G, M, V, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && J.push(j.data.expectedType);
        }
        var ue = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new v("Invalid " + M + " `" + V + "` supplied to " + ("`" + G + "`" + ue + "."));
      }
      return A(H);
    }
    function W() {
      function E(l, k, H, D, q) {
        return O(l[k]) ? null : new v("Invalid " + D + " `" + q + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return A(E);
    }
    function U(E, l, k, H, D) {
      return new v(
        (E || "React class") + ": " + l + " type `" + k + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function B(E) {
      function l(k, H, D, q, G) {
        var M = k[H], V = _(M);
        if (V !== "object")
          return new v("Invalid " + q + " `" + G + "` of type `" + V + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var J in E) {
          var X = E[J];
          if (typeof X != "function")
            return U(D, q, G, J, Y(X));
          var ie = X(M, J, D, q, G + "." + J, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return A(l);
    }
    function x(E) {
      function l(k, H, D, q, G) {
        var M = k[H], V = _(M);
        if (V !== "object")
          return new v("Invalid " + q + " `" + G + "` of type `" + V + "` " + ("supplied to `" + D + "`, expected `object`."));
        var J = t({}, k[H], E);
        for (var X in J) {
          var ie = E[X];
          if (n(E, X) && typeof ie != "function")
            return U(D, q, G, X, Y(ie));
          if (!ie)
            return new v(
              "Invalid " + q + " `" + G + "` key `" + X + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(k[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var j = ie(M, X, D, q, G + "." + X, r);
          if (j)
            return j;
        }
        return null;
      }
      return A(l);
    }
    function O(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(O);
          if (E === null || i(E))
            return !0;
          var l = p(E);
          if (l) {
            var k = l.call(E), H;
            if (l !== E.entries) {
              for (; !(H = k.next()).done; )
                if (!O(H.value))
                  return !1;
            } else
              for (; !(H = k.next()).done; ) {
                var D = H.value;
                if (D && !O(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function C(E, l) {
      return E === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function _(E) {
      var l = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : C(l, E) ? "symbol" : l;
    }
    function Y(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var l = _(E);
      if (l === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function ee(E) {
      var l = Y(E);
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
    function se(E) {
      return !E.constructor || !E.constructor.name ? h : E.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, ft;
}
var pt, un;
function Mr() {
  if (un) return pt;
  un = 1;
  var e = /* @__PURE__ */ _t();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, pt = function() {
    function n(s, i, u, c, d, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, pt;
}
var dn;
function Lr() {
  if (dn) return $e.exports;
  if (dn = 1, process.env.NODE_ENV !== "production") {
    var e = Rn(), t = !0;
    $e.exports = /* @__PURE__ */ Pr()(e.isElement, t);
  } else
    $e.exports = /* @__PURE__ */ Mr()();
  return $e.exports;
}
var Ir = /* @__PURE__ */ Lr();
const w = /* @__PURE__ */ br(Ir), On = {
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
}, Hr = [
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
], Ke = "16px", Dr = (e) => Math.round(e * 96 / 72), jr = (e) => Math.round(e * 72 / 96 * 2) / 2, Ia = (e) => {
  const t = Object.values(On).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Dr(e)}px`;
}, Ha = (e) => {
  const t = parseInt(e), r = Object.values(On).find((n) => n.px === t);
  return r ? r.pt : jr(t);
}, Da = (e) => {
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
}, Br = {
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
}, fn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: Ke,
  fontColor: "#000000",
  // Add font color tracking
  headingLevel: "p"
  // Add heading level tracking
}, zr = () => {
  const [e, t] = re(fn), r = Te(), n = N((m, b, v = null) => {
    try {
      const A = window.getSelection();
      if (!A || A.rangeCount === 0)
        return !1;
      const z = A.getRangeAt(0);
      if (!z.toString())
        return t((P) => ({ ...P, [m]: b })), !1;
      try {
        const P = document.createElement("span");
        P.style[m] = b;
        const g = z.extractContents();
        return P.appendChild(g), z.insertNode(P), z.selectNodeContents(P), A.removeAllRanges(), A.addRange(z), t((f) => ({ ...f, [m]: b })), !0;
      } catch {
        if (v) {
          const P = m === "fontSize" ? Br[b] || "3" : b;
          return document.execCommand(v, !1, P), t((g) => ({ ...g, [m]: b })), !0;
        }
        return !1;
      }
    } catch (A) {
      return console.warn(`[useFormatting] Style application failed for ${m}:`, A), !1;
    }
  }, []), a = N((m) => n("fontFamily", m, "fontName"), [n]), o = N((m) => n("fontSize", m, "fontSize"), [n]), s = N((m) => n("color", m, "foreColor"), [n]), i = N((m) => {
    t((b) => ({
      ...b,
      alignLeft: m === "left",
      alignCenter: m === "center",
      alignRight: m === "right",
      alignJustify: m === "justify"
    }));
  }, []), u = N((m) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const v = b.getRangeAt(0), A = v.toString(), L = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[m];
      if (!L)
        return !1;
      if (!A) {
        const g = v.startContainer, f = g.nodeType === Node.TEXT_NODE ? g.parentElement : g, T = _e(f) || Ur();
        return T && (T.style.textAlign = L, i(L)), !0;
      }
      const P = Fr(v);
      if (P.length === 0) {
        const g = document.createElement("p");
        g.style.textAlign = L;
        const f = v.extractContents();
        g.appendChild(f), v.insertNode(g), v.selectNodeContents(g), b.removeAllRanges(), b.addRange(v);
      } else
        P.forEach((g) => {
          g.style.textAlign = L;
        });
      return i(L), !0;
    } catch (b) {
      return console.warn("[useFormatting] Text alignment failed:", b), !1;
    }
  }, [i]), c = N((m) => {
    try {
      const b = window.getSelection();
      if (!b || b.rangeCount === 0)
        return !1;
      const v = b.getRangeAt(0), A = document.createElement("div");
      if (A.innerHTML = m, Array.from(A.children).some(
        (L) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(L.tagName)
      )) {
        const L = v.startContainer, P = L.nodeType === Node.TEXT_NODE ? L.parentElement : L, g = _e(P);
        if (g && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(g.tagName)) {
          const f = g.tagName.toLowerCase();
          if (v.startOffset === 0 && (L === g || L.nodeType === Node.TEXT_NODE && L === g.firstChild))
            g.parentNode.insertBefore(A, g);
          else if (v.startOffset === L.textContent?.length && L === g.lastChild && v.endOffset === L.textContent?.length) {
            const R = g.nextSibling;
            R ? g.parentNode.insertBefore(A, R) : g.parentNode.appendChild(A);
          } else {
            const R = v.extractContents(), $ = document.createTextNode(""), W = document.createElement(f);
            W.appendChild($), W.appendChild(R);
            const U = g.parentNode;
            U.insertBefore(A, g.nextSibling), U.insertBefore(W, A.nextSibling), !g.textContent.trim() && g.children.length === 0 && U.removeChild(g);
          }
        } else
          v.insertNode(A);
        v.setStartAfter(A), v.setEndAfter(A), b.removeAllRanges(), b.addRange(v);
      } else
        document.execCommand("insertHTML", !1, m);
      return !0;
    } catch (b) {
      console.warn("[useFormatting] InsertHTML failed:", b);
      try {
        return document.execCommand("insertHTML", !1, m), !0;
      } catch (v) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", v), !1;
      }
    }
  }, []), d = N((m, b = null) => {
    try {
      if (m === "undo") {
        r.undo();
        return;
      }
      if (m === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (m === "insertHTML" && b) {
        c(b);
        return;
      }
      if (m === "fontSize") {
        o(b);
        return;
      }
      if (m === "fontName") {
        a(b);
        return;
      }
      if (m === "foreColor") {
        s(b);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(m)) {
        u(m);
        return;
      }
      switch (document.execCommand(m, !1, b) || console.warn(`[useFormatting] Command "${m}" failed`), m) {
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
          t((A) => ({ ...A, headingLevel: b }));
          break;
        default:
          break;
      }
    } catch (v) {
      console.warn(`[useFormatting] Error executing command "${m}":`, v);
    }
  }, [o, a, u, c, r]), p = N(() => {
    try {
      const m = window.getSelection();
      if (!m || m.rangeCount === 0)
        return;
      const b = m.getRangeAt(0), v = b.toString();
      let A = Ke, z = "Arial", L = "#000000", P = "p", g = "left";
      if (v) {
        const T = b.startContainer, I = T.nodeType === Node.TEXT_NODE ? T.parentElement : T;
        if (I) {
          const R = window.getComputedStyle(I), $ = R.fontSize, W = R.fontFamily;
          $ && $.endsWith("px") && (A = $), W && W !== "serif" && (z = W.split(",")[0].replace(/['"]/g, "").trim());
          const U = R.color;
          U && U !== "rgb(0, 0, 0)" && U !== "#000000" && (U.startsWith("rgb") ? L = $r(U) : L = U);
          const B = _e(I);
          if (B) {
            const x = B.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(x) && (P = x);
            const C = window.getComputedStyle(B).textAlign;
            ["left", "center", "right", "justify"].includes(C) && (g = C);
          }
        }
      }
      const f = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: g === "left",
        alignCenter: g === "center",
        alignRight: g === "right",
        alignJustify: g === "justify",
        fontFamily: z,
        fontSize: A,
        fontColor: L,
        headingLevel: P
      };
      t((T) => ({
        ...T,
        ...f
      }));
    } catch (m) {
      console.warn("[useFormatting] Error updating format from selection:", m);
    }
  }, []), h = N(() => {
    t(fn);
  }, []);
  return {
    currentFormat: e,
    formatText: d,
    resetFormat: h,
    updateCurrentFormatFromSelection: p
  };
};
function $r(e) {
  const t = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t) return "#000000";
  const r = parseInt(t[1], 10), n = parseInt(t[2], 10), a = parseInt(t[3], 10);
  return `#${((1 << 24) + (r << 16) + (n << 8) + a).toString(16).slice(1)}`;
}
function _e(e) {
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
function Fr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = _e(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = _e(
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
function Ur() {
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
const ve = 'page-break, [data-page-break="true"]', Wr = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Pe(r), a = e.querySelectorAll(ve), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((u, c) => {
    const p = u.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${c + 1}`,
      pageNumber: c + 2,
      top: p,
      height: n.height
    });
  }), o;
}, kn = (e, t = 100, r = he) => {
  const n = Pe(e), a = xr(r), o = n.height - a, s = t / 100;
  return o / s;
}, qr = (e, t) => {
  if (!e || !t)
    return 0;
  try {
    const r = t.querySelectorAll(ve);
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
}, pn = (e) => {
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
}, Gr = (e) => {
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
}, Zr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, Yr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const u = kn(r, n, a) * (t - 1), c = Array.from(e.children);
    let d = 0, p = null;
    for (let h = 0; h < c.length; h++) {
      const m = c[h];
      if (m.tagName === "PAGE-BREAK" || m.getAttribute("data-page-break") === "true")
        continue;
      const b = Gr(m);
      if (d + b > u) {
        p = m;
        break;
      }
      d += b;
    }
    if (p) {
      const h = document.createElement("page-break");
      if (h.setAttribute("data-page-break", "true"), h.setAttribute("contenteditable", "false"), h.setAttribute("data-page-number", String(t)), p.parentNode.insertBefore(h, p), o) {
        const m = e.innerHTML;
        o(m);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const h = document.createElement("page-break");
      h.setAttribute("data-page-break", "true"), h.setAttribute("contenteditable", "false"), h.setAttribute("data-page-number", String(t)), e.appendChild(h);
      const m = document.createElement("p");
      if (m.innerHTML = "<br>", e.appendChild(m), o) {
        const b = e.innerHTML;
        o(b);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    }
  } catch (i) {
    return console.error("[insertPageBreakAtBoundary] Failed to insert page break:", i), !1;
  }
}, Vr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const u = Array.from(e.querySelectorAll(ve));
    if (t > u.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const c = window.getSelection();
    let d = !1, p = [], h = null;
    if (t === 0) {
      const b = u[0];
      if (!b)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let v = e.firstChild;
      for (; v && v !== b; )
        p.push(v), v = v.nextSibling;
      h = b;
    } else {
      const b = u[t - 1];
      if (!b)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const v = u[t];
      let A = b.nextSibling;
      for (; A && A !== v; )
        p.push(A), A = A.nextSibling;
      h = b;
    }
    if (c && c.rangeCount > 0) {
      const v = c.getRangeAt(0).startContainer;
      for (const A of p)
        if (A.contains(v) || A === v) {
          d = !0;
          break;
        }
    }
    if (h && h.parentNode && h.remove(), p.forEach((b) => {
      b.parentNode && b.remove();
    }), e.querySelectorAll(ve).forEach((b, v) => {
      b.setAttribute("data-page-number", String(v + 2));
    }), d && o && setTimeout(() => {
      o(0);
    }, 50), n) {
      const b = e.innerHTML;
      n(b);
    }
    return a && setTimeout(() => {
      a(), s && setTimeout(() => {
        s();
      }, 150);
    }, 100), !0;
  } catch (u) {
    return console.error("[removePageAndContent] Failed to remove page:", u), !1;
  }
}, Kr = (e) => {
  if (e)
    try {
      e.querySelectorAll(ve).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Xr = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Kr(t), r) {
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
}, Jr = 200, Qr = 50, gn = 3, eo = 20, _n = (e) => {
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
}, to = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = _n(o);
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
}, no = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const u = kn(t, r, n);
    let c = pn(e), d = !1, p = 0;
    for (let h = 0; h < c.length && p < gn; h++) {
      const m = c[h], b = to(m, u);
      if (b && b.overflowIndex > 0) {
        let v = 0;
        for (let P = 0; P < m.length; P++) {
          const g = m[P];
          g && g.getBoundingClientRect && (v += _n(g));
        }
        if (v - u < eo)
          continue;
        const z = h + 2;
        Zr(b.overflowElement, z) && (d = !0, p++, c = pn(e));
      }
    }
    if (d) {
      if (a) {
        const h = e.innerHTML;
        a(h);
      }
      setTimeout(() => {
        o && o(), p >= gn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, Qr);
    }
    return d;
  } catch (u) {
    return console.warn("[checkAndReflow] Reflow failed:", u), !1;
  } finally {
    s.current = !1;
  }
}, ro = (e, t, r = Jr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, oo = 400, Nn = (e, t) => {
  if (e) {
    e.focus();
    try {
      let r = null, n = 0;
      if (t === 0)
        r = e.firstChild, n = 0;
      else {
        const o = e.querySelectorAll(ve)[t - 1];
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
}, so = (e, t, r, n) => {
  if (!e || !t) {
    console.warn("[scrollToPage] Missing refs");
    return;
  }
  try {
    let a = null;
    if (r === 0)
      a = t;
    else {
      const s = t.querySelectorAll(ve)[r - 1];
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
        n ? n(r) : Nn(t, r);
      }, oo);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, ao = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, io = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(ve);
  for (const d of a)
    if (r.comparePoint(d, 0) > 0)
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
}, co = 300, lo = (e, t, r = 100, n = "NARROW") => {
  const a = Te(), o = Q(null), s = Q(null), i = Q(e), u = Q(r), c = Q(n), d = Q(!1);
  oe(() => {
    i.current = e;
  }, [e]), oe(() => {
    u.current = r;
  }, [r]), oe(() => {
    c.current = n;
  }, [n]), oe(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const p = N((T = {}) => t?.current ? Wr(t.current, T) : [], [t]), h = N((T = {}) => {
    const I = p(T);
    return a.updatePageBoundaries(I), I;
  }, [p, a]), m = N((T = {}) => {
    const I = typeof T.delay == "number" ? T.delay : co;
    ao(h, o, T, I);
  }, [h]), b = N(() => {
    t?.current && no(
      t.current,
      i.current,
      u.current,
      c.current,
      a.updateContinuousContent,
      h,
      d,
      b
    );
  }, [t, a, h]), v = N((T) => {
    ro(b, s, T);
  }, [b]), A = N((T) => !T?.current || !t?.current ? 0 : qr(T.current, t.current), [t]), z = N((T) => {
    t?.current && Nn(t.current, T);
  }, [t]), L = N((T, I) => {
    if (!I?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    so(I.current, t.current, T, z);
  }, [t, z]), P = N(async (T) => t?.current ? Yr(
    t.current,
    T,
    i.current,
    u.current,
    c.current,
    a.updateContinuousContent,
    h
  ) : !1, [t, a, h]), g = N((T) => t?.current ? Vr(
    t.current,
    T,
    p,
    a.updateContinuousContent,
    h,
    z,
    b
  ) : !1, [t, p, a, h, z, b]), f = N((T) => t?.current ? Xr(
    T,
    t.current,
    a.updateContinuousContent,
    h,
    b
  ) : !1, [t, a, h, b]);
  return oe(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), ge(() => ({
    calculatePageBoundaries: p,
    checkAndUpdateBoundaries: m,
    updateBoundaries: h,
    getCurrentPage: A,
    scrollToPage: L,
    positionCursorAtPage: z,
    checkAndReflow: b,
    triggerAutoReflow: v,
    removePageAndContent: g,
    removePageBreak: f,
    insertPageBreakAtBoundary: P,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    p,
    m,
    h,
    A,
    L,
    z,
    b,
    v,
    g,
    f,
    P
  ]);
}, uo = (e, t) => {
  const { handleZoomIn: r, handleZoomOut: n, handleZoomReset: a, handleUndo: o, handleRedo: s } = e, { editorRef: i, containerRef: u } = t;
  oe(() => {
    const c = (d) => {
      if (d.ctrlKey || d.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(d.key) && d.preventDefault();
        const p = document.activeElement === i.current, h = document.activeElement === u.current, m = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (p || h || !m)
          switch (d.key) {
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
              d.shiftKey || o();
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
}, fo = ({ updateCurrentFormatFromSelection: e, editorRef: t }) => {
  const r = Q(null), n = N(() => {
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
}, F = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function ja({
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
  let d = o, p = s;
  switch (e) {
    case F.TOP_LEFT:
      d = Math.max(i.minWidth, o - u), p = Math.max(i.minHeight, s - c);
      break;
    case F.TOP_RIGHT:
      d = Math.max(i.minWidth, o + u), p = Math.max(i.minHeight, s - c);
      break;
    case F.BOTTOM_LEFT:
      d = Math.max(i.minWidth, o - u), p = Math.max(i.minHeight, s + c);
      break;
    case F.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, o + u), p = Math.max(i.minHeight, s + c);
      break;
    case F.TOP:
      p = Math.max(i.minHeight, s - c);
      break;
    case F.BOTTOM:
      p = Math.max(i.minHeight, s + c);
      break;
    case F.LEFT:
      d = Math.max(i.minWidth, o - u);
      break;
    case F.RIGHT:
      d = Math.max(i.minWidth, o + u);
      break;
    default:
      return { width: d, height: p };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const h = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? d / h > p ? p = Math.max(i.minHeight, d / h) : d = Math.max(i.minWidth, p * h) : [F.TOP, F.BOTTOM].includes(e) ? d = p * h : [F.LEFT, F.RIGHT].includes(e) && (p = d / h);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (p = d / (o / s))), i.maxHeight && p > i.maxHeight && (p = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = p * (o / s))), d = Math.max(i.minWidth, d), p = Math.max(i.minHeight, p), {
    width: Math.round(d),
    height: Math.round(p)
  };
}
function be(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Ba(e) {
  return be(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function za(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function po(e, t = Ae) {
  if (!be(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(F).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = go(o), s.style.pointerEvents = "all", Pn(s, o, n.width, n.height), r.appendChild(s);
  }), r;
}
function go(e) {
  switch (e) {
    case F.TOP_LEFT:
    case F.BOTTOM_RIGHT:
      return "nwse-resize";
    case F.TOP_RIGHT:
    case F.BOTTOM_LEFT:
      return "nesw-resize";
    case F.TOP:
    case F.BOTTOM:
      return "ns-resize";
    case F.LEFT:
    case F.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Pn(e, t, r, n) {
  switch (t) {
    case F.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case F.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case F.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case F.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case F.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case F.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case F.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case F.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function Ct(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Pn(a, o, r.width, r.height);
  });
}
function gt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const ho = "html-editor-storage", mo = 1, de = "images";
function yo() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Le() {
  return new Promise((e, t) => {
    const r = indexedDB.open(ho, mo);
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
function bo(e) {
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
        const c = await Le(), d = `editor-image-${yo()}`, h = c.transaction([de], "readwrite").objectStore(de), m = {
          key: d,
          dataUrl: s,
          size: u,
          type: e.type,
          timestamp: Date.now()
        }, b = h.add(m);
        b.onsuccess = () => {
          c.close(), t(d);
        }, b.onerror = () => {
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
async function vo(e) {
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
async function To(e) {
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
async function $a() {
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
async function Fa() {
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
const Mn = [
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
], wo = [
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
], Eo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function xo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Ln(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function qe(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Ne(r) || "<p><br></p>";
}
function Co(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function Ao(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => Mn.includes(r.tagName));
}
function Ro(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const a = n;
      Mn.includes(a.tagName) ? t.push(a.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Ne(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${xo(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), u = Ln(o);
      if (s === "DIV") {
        const c = Ne(o);
        c.trim() ? t.push(c) : t.push("<p><br></p>");
      } else if (s === "P")
        Ao(o) ? t.push(Ro(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const c = Co(o);
        t.push(`<${i}${u}>${c}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(So(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(Oo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const c = Ne(o);
        t.push(`<blockquote${u}>${c}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (wo.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (Eo.includes(s))
        t.push(o.outerHTML);
      else {
        const c = Ne(o);
        t.push(`<${i}${u}>${c}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function So(e) {
  const t = e.tagName.toLowerCase(), r = Ln(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = Ne(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function Oo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _o = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), hn = (e) => {
  const t = _o(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, In = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), No = (e) => {
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
var Po = {
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
const Mo = Ot(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, u) => mt(
    "svg",
    {
      ref: u,
      ...Po,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: In("lucide", a),
      ...!o && !No(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([c, d]) => mt(c, d)),
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
  const r = Ot(
    ({ className: n, ...a }, o) => mt(Mo, {
      ref: o,
      iconNode: t,
      className: In(
        `lucide-${ko(hn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = hn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Io = K("arrow-down", Lo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Do = K("arrow-left", Ho);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Bo = K("arrow-right", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], $o = K("arrow-up", zo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Uo = K("bold", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], qo = K("chevron-left", Wo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Zo = K("chevron-right", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Vo = K("file-check", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ye = K("file-text", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Jo = K("hash", Xo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], es = K("heading-1", Qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], ns = K("heading-2", ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], os = K("heading-3", rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], as = K("image-upscale", ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], cs = K("image", is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], us = K("italic", ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], fs = K("link", ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], gs = K("list-indent-decrease", ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ms = K("list-indent-increase", hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], bs = K("list-ordered", ys);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Hn = K("list", vs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
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
], ws = K("palette", Ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], xs = K("plus", Es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], As = K("redo", Cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], Ss = K("scaling", Rs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ks = K("settings", Os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Ns = K("strikethrough", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Ms = K("table", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Nt = K("text-align-center", Ls);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Pt = K("text-align-end", Is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Ds = K("text-align-justify", Hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Mt = K("text-align-start", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], At = K("trash-2", Bs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], $s = K("underline", zs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Us = K("undo", Fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], qs = K("x", Ws);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Zs = K("zoom-in", Gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Vs = K("zoom-out", Ys), mn = (e, t, r = "") => {
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
}, Ks = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, Xs = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = An(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: u, outline: c } = ge(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: mn(i, 1, "continuous-")
      };
    let p = 0;
    const h = [];
    return o.forEach((m, b) => {
      p += Ks(m.content), h.push(...mn(m.content, b + 1, `page-${b}-`));
    }), { wordCount: p, outline: h };
  }, [o, r, n, i]), d = n !== void 0 ? n : o.length;
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
            /* @__PURE__ */ y.jsx(Ye, { size: 18 }),
            /* @__PURE__ */ y.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ y.jsx(Zo, { size: 16 }) : /* @__PURE__ */ y.jsx(qo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(Vo, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: d })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(Jo, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: u.toLocaleString() })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ y.jsx(Ye, { size: 14 }),
                /* @__PURE__ */ y.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ y.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          c.length > 0 && /* @__PURE__ */ y.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ y.jsxs("h3", { children: [
              /* @__PURE__ */ y.jsx(Hn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ y.jsx("div", { className: "document-outline", "data-testid": "outline", children: c.map((p) => {
              const h = p.level === 1 ? es : p.level === 2 ? ns : os;
              return /* @__PURE__ */ y.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${p.level}`,
                  style: { marginLeft: `${(p.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ y.jsx(h, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ y.jsx("span", { className: "outline-text", children: p.text }),
                    /* @__PURE__ */ y.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      p.page
                    ] })
                  ]
                },
                p.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class Js {
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
const yn = new Js("Editor"), Dn = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), jn = 32;
function Bn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * jn}px`, e.dataset.indentLevel = String(n));
}
function Qs(e, t) {
  Bn(e, t);
}
function ea(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && Dn.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function ta() {
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
        if (c.tagName && Dn.has(c.tagName.toUpperCase())) {
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
function na(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * jn}px`, e.dataset.indentLevel = String(r));
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
function Rt(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = ta();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = ea(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Qs(s, e);
      return;
    }
    e ? na(s) : Bn(s, !1);
  });
  try {
    const s = document.createRange(), i = (p) => p.nodeType === Node.TEXT_NODE ? p : document.createTreeWalker(
      p,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), u = (p) => {
      if (p.nodeType === Node.TEXT_NODE)
        return p;
      const h = document.createTreeWalker(
        p,
        NodeFilter.SHOW_TEXT,
        null
      );
      let m = null, b = h.nextNode();
      for (; b; )
        m = b, b = h.nextNode();
      return m;
    }, c = i(a);
    c ? s.setStart(c, 0) : s.setStart(a, 0);
    const d = u(o);
    d ? s.setEnd(d, d.length) : s.setEnd(o, o.childNodes.length), t.removeAllRanges(), t.addRange(s);
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
function ra(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Rt(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const zn = ({ currentColor: e, onColorSelect: t, title: r = "Font Color" }) => {
  const [n, a] = re(!1), o = Q(null), s = [
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
    const c = (d) => {
      o.current && !o.current.contains(d.target) && a(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []);
  const i = (c) => {
    t(c), a(!1);
  }, u = (c) => {
    const d = c.target.value;
    t(d);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "color-picker-dropdown", ref: o, children: [
    /* @__PURE__ */ y.jsx(
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
        children: /* @__PURE__ */ y.jsx(ws, { size: 14, style: { color: e === "#FFFFFF" ? "#000" : "#FFF" } })
      }
    ),
    n && /* @__PURE__ */ y.jsxs("div", { className: "color-picker-palette", children: [
      /* @__PURE__ */ y.jsx("div", { className: "color-grid", children: s.map((c) => /* @__PURE__ */ y.jsx(
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
      /* @__PURE__ */ y.jsxs("div", { className: "custom-color-section", children: [
        /* @__PURE__ */ y.jsx("label", { htmlFor: "custom-color-input", style: { fontSize: "12px", marginBottom: "4px", display: "block" }, children: "Custom Color:" }),
        /* @__PURE__ */ y.jsx(
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
zn.propTypes = {
  currentColor: w.string,
  onColorSelect: w.func.isRequired,
  title: w.string
};
const oa = [
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
], sa = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], aa = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Lt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  onInsertImage: n,
  canUndo: a = !1,
  canRedo: o = !1
}) => {
  const s = (m, b, v, A = null, z = !1) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: m,
      className: A && e[A] ? "active" : "",
      disabled: z,
      title: v,
      style: { opacity: z ? 0.5 : 1 },
      children: /* @__PURE__ */ y.jsx(b, { size: 16 })
    },
    v
  ), i = () => /* @__PURE__ */ y.jsx("div", { className: "toolbar-separator" }), u = async (m) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(m.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (m.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const v = await bo(m), A = await vo(v);
      if (A && n) {
        const z = `<img src="${A}" data-key="${v}" alt="Inserted image" />`;
        n(z);
      } else
        yn.warn("Failed to insert image: missing URL or callback");
      document.getElementById("image-upload").value = "";
    } catch (b) {
      yn.error("Error uploading image", b);
    }
  }, c = () => {
    Rt(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
  }, d = () => {
    Rt(!0);
  }, p = () => {
    const m = prompt("Enter URL:");
    m && t("createLink", m);
  }, h = () => {
    document.getElementById("image-upload").click();
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "editor-toolbar", children: [
    s(() => t("undo"), Us, "Undo", null, !a),
    s(() => t("redo"), As, "Redo", null, !o),
    i(),
    s(() => t("bold"), Uo, "Bold", "bold"),
    s(() => t("italic"), us, "Italic", "italic"),
    s(() => t("underline"), $s, "Underline", "underline"),
    s(() => t("strikethrough"), Ns, "Strikethrough", "strikethrough"),
    i(),
    s(() => t("justifyLeft"), Mt, "Align Left", "alignLeft"),
    s(() => t("justifyCenter"), Nt, "Align Center", "alignCenter"),
    s(() => t("justifyRight"), Pt, "Align Right", "alignRight"),
    s(() => t("justifyFull"), Ds, "Justify", "alignJustify"),
    i(),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (m) => t("fontName", m.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: oa.map(({ value: m, label: b }) => /* @__PURE__ */ y.jsx("option", { value: m, children: b }, m))
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (m) => t("fontSize", m.target.value),
        value: e.fontSize || Ke,
        title: "Font Size",
        children: Hr.map(({ value: m, label: b }) => /* @__PURE__ */ y.jsx("option", { value: m, children: b }, m))
      }
    ),
    /* @__PURE__ */ y.jsx(
      zn,
      {
        currentColor: e.fontColor,
        onColorSelect: (m) => t("foreColor", m),
        title: "Font Color"
      }
    ),
    /* @__PURE__ */ y.jsx(
      "select",
      {
        onChange: (m) => t("formatBlock", m.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: sa.map(({ value: m, label: b }) => /* @__PURE__ */ y.jsx("option", { value: m, children: b }, m))
      }
    ),
    i(),
    s(() => t("insertUnorderedList"), Hn, "Bullet List"),
    s(() => t("insertOrderedList"), bs, "Numbered List"),
    i(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: c,
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ y.jsx(ms, { size: 16 })
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: d,
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ y.jsx(gs, { size: 16 })
      }
    ),
    i(),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: p,
        title: "Insert Link",
        children: /* @__PURE__ */ y.jsx(fs, { size: 16 })
      }
    ),
    s(() => t("insertHTML", aa), Ms, "Insert Table"),
    r && s(r, Ye, "Insert Page Break"),
    i(),
    /* @__PURE__ */ y.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (m) => m.target.files[0] && u(m.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: h,
        title: "Insert Image",
        children: /* @__PURE__ */ y.jsx(cs, { size: 16 })
      }
    )
  ] });
};
Lt.propTypes = {
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
Lt.defaultProps = {
  onAddPageBreak: void 0,
  onInsertImage: void 0,
  canUndo: !1,
  canRedo: !1
};
function ia(e) {
  return !e || typeof e != "string" ? e : qe(e);
}
function ca(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = ia(r) : r = la(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function la(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => ua(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function ua(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const we = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && we(e.parentElement) : !1, It = ({
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
  pageMargins: d = he
}) => {
  const p = ge(() => Tn(d), [d]), h = c / 100, m = N((g, f) => {
    if (!g) return !1;
    const T = g.getBoundingClientRect(), I = f - T.top;
    return I < p.top || I > T.height - p.bottom;
  }, [p.top, p.bottom]), b = N((g, f) => {
    f.preventDefault();
    const T = g.getBoundingClientRect(), I = f.clientX - T.left, R = f.clientY - T.top, $ = T.width - 40, W = -12, U = T.width - 20;
    I >= $ && I <= U && R >= W && R <= 8 && u && u(g);
  }, [u]), v = N((g) => {
    g.preventDefault();
    const f = t.current.getBoundingClientRect();
    if (g.clientY - f.top < p.top) {
      const I = t.current.firstElementChild;
      if (I && I.tagName !== "PAGE-BREAK") {
        const R = document.createRange(), $ = window.getSelection();
        R.setStart(I, 0), R.collapse(!0), $.removeAllRanges(), $.addRange(R);
      }
    } else {
      const I = t.current.lastElementChild;
      if (I && I.tagName !== "PAGE-BREAK") {
        const R = document.createRange(), $ = window.getSelection();
        R.selectNodeContents(I), R.collapse(!1), $.removeAllRanges(), $.addRange(R);
      }
    }
  }, [t, p.top]), A = N((g) => {
    const f = window.getSelection();
    if (!f || f.rangeCount === 0) return;
    const T = f.getRangeAt(0), { startContainer: I, endContainer: R } = T;
    if ((we(I) || we(R)) && (g.key.length === 1 || g.key === "Enter" || g.key === " "))
      return g.preventDefault(), !1;
    if (ra(g))
      return n && n(), !1;
    if ((g.key === "Backspace" || g.key === "Delete") && (we(I) || we(R)))
      return g.preventDefault(), !1;
    a && a(g);
  }, [a, n]), z = N((g) => {
    if (!t.current) return;
    const f = g.target;
    if (we(f)) {
      b(f, g);
      return;
    }
    if (m(t.current, g.clientY)) {
      v(g);
      return;
    }
    o && o(g);
  }, [t, o, b, v, m]), L = N((g) => {
    const f = window.getSelection();
    if (!f || f.rangeCount === 0) return;
    const T = f.getRangeAt(0), { startContainer: I } = T;
    if (we(I))
      return g.preventDefault(), !1;
  }, []), P = N((g) => {
    const f = ca(g);
    i && i(g, f);
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
        transform: `scale(${h})`,
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
            padding: `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: Ke,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: A,
          onBeforeInput: L,
          onClick: z,
          onScroll: s,
          onPaste: P,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
It.propTypes = {
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
It.defaultProps = {
  onContentChange: void 0,
  onKeyDown: void 0,
  onClick: void 0,
  onScroll: void 0,
  onPaste: void 0,
  onRemovePageBreak: void 0,
  zoomLevel: 100,
  pageMargins: he
};
const da = mr(It), Ht = ({
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
  onPageSizeChange: d,
  onPageMarginsChange: p,
  onZoomIn: h,
  onZoomOut: m,
  onZoomReset: b
} = {}) => {
  const v = Math.max(e?.length || 0, 1), A = (f) => {
    i && i(f);
  }, z = () => {
    u && u();
  }, L = (f) => {
    if (v <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    c && c(f);
  }, P = (f) => {
    d && d(f);
  }, g = (f) => {
    p && p(f);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ y.jsx(ks, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
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
              onChange: (f) => P(f.target.value),
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
              onChange: (f) => g(f.target.value),
              children: Cr().map((f) => /* @__PURE__ */ y.jsx("option", { value: f, children: Ar(f) }, f))
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
          onClick: m,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ y.jsx(Vs, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: h,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ y.jsx(Zs, { size: 12 })
        }
      ),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "zoom-reset-compact",
          onClick: b,
          "aria-label": "Reset zoom",
          title: "Reset zoom to 100% (Ctrl + 0)",
          children: "Reset"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "page-list", children: e.map((f, T) => /* @__PURE__ */ y.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${T === t ? "active" : ""}`,
          onClick: () => A(T),
          "aria-label": `Go to page ${T + 1}`,
          "aria-current": T === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ y.jsx(Ye, { size: 14 }),
            /* @__PURE__ */ y.jsxs("span", { children: [
              "Page ",
              T + 1
            ] })
          ]
        }
      ),
      v > 1 && /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (I) => {
            I.stopPropagation(), L(T);
          },
          "aria-label": `Delete page ${T + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ y.jsx(qs, { size: 14 })
        }
      )
    ] }, f.id || `page-${T}`)) }),
    /* @__PURE__ */ y.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: z,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ y.jsx(xs, { size: 16 }),
          /* @__PURE__ */ y.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Ht.propTypes = {
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
Ht.defaultProps = {
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
const fa = Ve.memo(Ht);
function pa(e) {
  switch (e) {
    case F.TOP_LEFT:
    case F.BOTTOM_RIGHT:
      return "nwse-resize";
    case F.TOP_RIGHT:
    case F.BOTTOM_LEFT:
      return "nesw-resize";
    case F.TOP:
    case F.BOTTOM:
      return "ns-resize";
    case F.LEFT:
    case F.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function ga({
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
  let d = o, p = s;
  switch (e) {
    case F.TOP_LEFT:
      d = Math.max(i.minWidth, o - u), p = Math.max(i.minHeight, s - c);
      break;
    case F.TOP_RIGHT:
      d = Math.max(i.minWidth, o + u), p = Math.max(i.minHeight, s - c);
      break;
    case F.BOTTOM_LEFT:
      d = Math.max(i.minWidth, o - u), p = Math.max(i.minHeight, s + c);
      break;
    case F.BOTTOM_RIGHT:
      d = Math.max(i.minWidth, o + u), p = Math.max(i.minHeight, s + c);
      break;
    case F.TOP:
      p = Math.max(i.minHeight, s - c);
      break;
    case F.BOTTOM:
      p = Math.max(i.minHeight, s + c);
      break;
    case F.LEFT:
      d = Math.max(i.minWidth, o - u);
      break;
    case F.RIGHT:
      d = Math.max(i.minWidth, o + u);
      break;
    default:
      return { width: d, height: p };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const h = o / s;
    [
      F.TOP_LEFT,
      F.TOP_RIGHT,
      F.BOTTOM_LEFT,
      F.BOTTOM_RIGHT
    ].includes(e) ? d / h > p ? p = Math.max(i.minHeight, d / h) : d = Math.max(i.minWidth, p * h) : [F.TOP, F.BOTTOM].includes(e) ? d = p * h : [F.LEFT, F.RIGHT].includes(e) && (p = d / h);
  }
  return i.maxWidth && d > i.maxWidth && (d = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (p = d / (o / s))), i.maxHeight && p > i.maxHeight && (p = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (d = p * (o / s))), d = Math.max(i.minWidth, d), p = Math.max(i.minHeight, p), {
    width: Math.round(d),
    height: Math.round(p)
  };
}
function $n(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function ha(e, t, r) {
  $n(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function ma(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, u = a || o, c = r.offsetWidth, d = r.offsetHeight, h = {
    // Increase width
    ">": u && s ? () => ({
      width: Math.min(n.maxWidth || 800, c + 10),
      height: d
    }) : null,
    // Decrease width
    "<": u && s ? () => ({
      width: Math.max(n.minWidth || 50, c - 10),
      height: d
    }) : null,
    // Increase height
    "+": u && s ? () => ({
      width: c,
      height: Math.min(n.maxHeight || 600, d + 10)
    }) : null,
    // Decrease height
    "-": u && s ? () => ({
      width: c,
      height: Math.max(n.minHeight || 50, d - 10)
    }) : null,
    // Reset to default
    r: u && !s ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (h) {
    e.preventDefault();
    const m = h();
    return ha(t, r, m), !0;
  }
  return !1;
}
const Dt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = Ae
}) => {
  const o = Q(null), s = Q(null), i = Q(null), u = Q(null), c = Q(a), d = Q(!1), p = Te();
  oe(() => {
    c.current = a;
  }, [a]);
  const h = N((g) => {
    if (!be(g)) return;
    o.current && (gt(o.current), o.current = null), g.classList.add("selected");
    const f = po(g, c.current);
    f && (o.current = f, s.current = g, document.body.appendChild(f), f.querySelectorAll(".resize-handler").forEach((I) => {
      I.addEventListener("mousedown", b);
    }), r && r(g));
  }, [r]), m = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (gt(o.current), o.current = null), i.current = null, u.current = null, d.current = !1, n && n();
  }, [n]), b = N((g) => {
    if (g.preventDefault(), g.stopPropagation(), !s.current) return;
    const f = g.currentTarget.dataset.handler, T = s.current.getBoundingClientRect(), I = window.pageYOffset || document.documentElement.scrollTop, R = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: g.clientX,
      y: g.clientY,
      width: s.current.offsetWidth,
      height: s.current.offsetHeight,
      originalWidth: s.current.offsetWidth,
      originalHeight: s.current.offsetHeight,
      offsetX: g.clientX - T.left - R,
      offsetY: g.clientY - T.top - I
    }, u.current = f, d.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = pa(f), document.addEventListener("mousemove", v), document.addEventListener("mouseup", A);
  }, []), v = N((g) => {
    if (!d.current || !s.current || !i.current || !u.current) return;
    g.preventDefault(), g.stopPropagation();
    const { x: f, y: T, width: I, height: R } = i.current, $ = u.current, W = g.clientX, U = g.clientY, B = ga({
      handler: $,
      startX: f,
      startY: T,
      currentX: W,
      currentY: U,
      startWidth: I,
      startHeight: R,
      options: c.current
    });
    $n(s.current, B), o.current && Ct(o.current, s.current);
  }, []), A = N((g) => {
    if (d.current) {
      if (g.preventDefault(), g.stopPropagation(), s.current && i.current) {
        const f = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, T = {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        };
        (f.width !== T.width || f.height !== T.height) && p.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: T } },
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: f } }
        );
      }
      if (i.current = null, u.current = null, d.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", s.current) {
        const f = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(f), t && t(s.current, {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        });
      }
    }
  }, [t, p]), z = N((g) => {
    o.current && !o.current.contains(g.target) && m();
    const f = g.target;
    if (be(f)) {
      if (f === s.current)
        return;
      h(f);
    }
  }, [h, m]), L = N((g) => {
    if ((g.key === "Delete" || g.key === "Backspace") && s.current && !d.current) {
      g.preventDefault();
      const f = s.current;
      if (f.parentNode) {
        f.parentNode.removeChild(f), m();
        const T = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(T);
      }
    }
    g.key === "Escape" && s.current && m(), s.current && !d.current && ma(g, e, s.current, c.current);
  }, [e, m]), P = N(() => {
    o.current && s.current && Ct(o.current, s.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const f = e.current.closest(".editor-viewport");
    return f && (f.addEventListener("scroll", P), window.addEventListener("scroll", P)), () => {
      f && f.removeEventListener("scroll", P), window.removeEventListener("scroll", P);
    };
  }, [e, P]), oe(() => {
    if (!e.current) return;
    const g = e.current;
    return g.addEventListener("click", z), g.addEventListener("keydown", L), window.addEventListener("resize", P), () => {
      g.removeEventListener("click", z), g.removeEventListener("keydown", L), window.removeEventListener("resize", P), d.current && (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", A), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && gt(o.current);
    };
  }, [e, z, L, P, v, A]), oe(() => {
    if (!e.current) return;
    const g = new MutationObserver((f) => {
      f.forEach((T) => {
        T.type === "childList" && (T.removedNodes.forEach((I) => {
          I.nodeType === Node.ELEMENT_NODE && be(I) && I === s.current && m();
        }), T.addedNodes.forEach((I) => {
          if (I.nodeType !== Node.ELEMENT_NODE) return;
          if (be(I)) {
            setTimeout(() => h(I), 50);
            return;
          }
          const R = I.querySelectorAll?.("img") || [];
          R.length > 0 && setTimeout(() => h(R[0]), 50);
        }));
      });
    });
    return g.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => g.disconnect();
  }, [e, m, h]), null;
};
Dt.propTypes = {
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
Dt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: Ae
};
const jt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = re({ top: 0, left: 0 }), [u, c] = re(!1), [d, p] = re("top"), [h, m] = re(o), b = Q(null), v = Q(null), A = Te(), z = (x) => {
    if (!x)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (C) => setTimeout(C, 16))(() => {
      const C = document.querySelector(".image-resize-overlay");
      C && Ct(C, x);
    });
  }, L = (x) => {
    if (!x) return null;
    const O = window.getComputedStyle(x);
    return {
      float: O.float || "none",
      margin: x.style.margin || "",
      display: O.display || "inline",
      width: x.style.width || x.width || "",
      height: x.style.height || x.height || "",
      aspectRatio: h
    };
  }, P = N(() => {
    if (!e) return "left";
    const x = window.getComputedStyle(e);
    return x.float === "right" ? "right" : x.float === "left" ? "left" : x.display === "block" && x.margin.includes("auto") ? "center" : "left";
  }, [e]), [g, f] = re("left");
  oe(() => {
    e && f(P());
  }, [e, P]);
  const T = N(() => {
    if (!e || !b.current) return;
    const x = e.getBoundingClientRect(), O = b.current.getBoundingClientRect(), C = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, _ = x.bottom >= 0 && x.top <= C.height && x.right >= 0 && x.left <= C.width;
    let Y = "top", ee = 0, se = 0;
    if (_) {
      const D = x.top - O.height - 10, q = C.height - x.bottom - O.height - 10;
      q > D && q > 0 ? (Y = "bottom", ee = x.bottom + 10) : (Y = "top", ee = x.top - O.height - 10);
    } else
      Y = "top", ee = 10;
    se = x.left + x.width / 2 - O.width / 2;
    const E = window.innerWidth, l = window.innerHeight;
    let k = Math.max(10, Math.min(se, E - O.width - 10)), H = Math.max(10, Math.min(ee, l - O.height - 10));
    i({ top: H, left: k }), p(Y), c(!0);
  }, [e]);
  bn(() => {
    T();
    const x = () => {
      T();
    }, O = v.current;
    return O && O.addEventListener("scroll", x), window.addEventListener("scroll", x), window.addEventListener("resize", x), () => {
      O && O.removeEventListener("scroll", x), window.removeEventListener("scroll", x), window.removeEventListener("resize", x), c(!1);
    };
  }, [e, T]), oe(() => {
    const x = (O) => {
      b.current && !b.current.contains(O.target) && O.target !== e && a();
    };
    return document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [e, a]);
  const I = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, R = (x) => {
    if (e && I[x]) {
      const O = L(e), C = g, _ = I[x];
      e.style.float = _.float, e.style.margin = _.margin, e.style.display = _.display, f(x), z(e);
      const Y = L(e);
      A.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: x, state: Y } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: C, state: O } }
      ), t && t(x);
    }
  }, $ = () => {
    if (e && e.parentNode) {
      const x = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      A.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: x } }
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, W = () => {
    const x = h, O = !h;
    m(O), A.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: O } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: x } }
    ), r && r(O);
  }, U = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, B = (x) => ({
    ...U,
    background: x ? "#007bff" : "transparent",
    color: x ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : vn(
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: b,
        className: "image-tooltip-menu",
        "data-menu-position": d,
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
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${h ? "" : "active"}`,
              onClick: W,
              title: `Toggle aspect ratio preservation (currently ${h ? "ON" : "OFF"})`,
              children: h ? /* @__PURE__ */ y.jsx(Ss, { size: 14 }) : /* @__PURE__ */ y.jsx(as, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${g === "left" ? "active" : ""}`,
              onClick: () => R("left"),
              title: "Align Left",
              style: B(g === "left"),
              children: /* @__PURE__ */ y.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${g === "center" ? "active" : ""}`,
              onClick: () => R("center"),
              title: "Align Center",
              style: B(g === "center"),
              children: /* @__PURE__ */ y.jsx(Nt, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${g === "right" ? "active" : ""}`,
              onClick: () => R("right"),
              title: "Align Right",
              style: B(g === "right"),
              children: /* @__PURE__ */ y.jsx(Pt, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: $,
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
              children: /* @__PURE__ */ y.jsx(At, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
jt.propTypes = {
  imageElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onAspectRatioToggle: w.func,
  onDelete: w.func,
  onClose: w.func.isRequired,
  initialPreserveAspectRatio: w.bool
};
jt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const Xe = {
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
      const c = s[u], d = c.style.width ? parseInt(c.style.width, 10) : c.offsetWidth;
      a.push(d || 100);
    }
  else if (r.length > 0) {
    const u = r[0];
    for (let c = 0; c < u.cells.length; c++) {
      const d = u.cells[c];
      a.push(d.offsetWidth);
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
function ya({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = Xe
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, u, c, d, p) => {
    u >= 0 && u < i.length && (i[u] = Math.max(d, Math.min(p, i[u] + c)));
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
  const { columnWidths: n, rowHeights: a, tableWidth: o, tableHeight: s } = t, i = n ? n.reduce((c, d) => c + d, 0) : 0, u = a ? a.reduce((c, d) => c + d, 0) : 0;
  if (o !== void 0 ? e.style.width = `${o}px` : i > 0 && (e.style.width = `${i}px`), s !== void 0 ? e.style.height = `${s}px` : u > 0 && (e.style.height = `${u}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const c = e.querySelector("colgroup");
    c && c.querySelectorAll("col").forEach((p, h) => {
      h < n.length && (p.style.width = `${n[h]}px`);
    }), e.style.width = `${i}px`;
  }
  a && a.length > 0 && (Array.from(e.rows).forEach((d, p) => {
    p < a.length && (d.style.height = `${a[p]}px`);
  }), e.style.height = `${u}px`), e.offsetHeight;
}
function ba(e, t = Xe) {
  if (!le(e)) return null;
  me(e);
  const r = fe(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const a = e.getBoundingClientRect();
  n.style.top = `${a.top}px`, n.style.left = `${a.left}px`, n.style.width = `${a.width}px`, n.style.height = `${a.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const u = Fn(i, r, a, e);
    n.appendChild(u);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const u = Un(i, r, a, e);
    n.appendChild(u);
  }
  const o = Wn(r, a);
  n.appendChild(o);
  const s = qn(r, a);
  return n.appendChild(s), n;
}
function Fn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-column-resize-handler", a.dataset.type = ce.COLUMN, a.dataset.index = e, a.style.position = "absolute", a.style.width = "4px", a.style.height = `${r.height}px`, a.style.cursor = "col-resize", a.style.pointerEvents = "all", Gn(a, e, t, r, n), a;
}
function Un(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-row-resize-handler", a.dataset.type = ce.ROW, a.dataset.index = e, a.style.position = "absolute", a.style.width = `${r.width}px`, a.style.height = "4px", a.style.cursor = "row-resize", a.style.pointerEvents = "all", Zn(a, e, t, r, n), a;
}
function Wn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = ce.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Yn(r, e, t), r;
}
function qn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = ce.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", Vn(r, e, t), r;
}
function St(e, t) {
  if (!e || !t) return;
  me(t);
  const r = fe(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let p = 0; p < r.columns - 1; p++) {
      const h = Fn(p, r, n, t);
      e.appendChild(h);
    }
    for (let p = 0; p < r.rows - 1; p++) {
      const h = Un(p, r, n, t);
      e.appendChild(h);
    }
    const c = Wn(r, n);
    e.appendChild(c);
    const d = qn(r, n);
    e.appendChild(d);
  } else
    a.forEach((c, d) => {
      Gn(c, d, r, n, t);
    }), o.forEach((c, d) => {
      Zn(c, d, r, n, t);
    }), s && Yn(s, r, n), i && Vn(i, r, n);
}
function Ue(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function va(e, t) {
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
function Ta(e, t) {
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
function Gn(e, t, r, n, a) {
  if (a && a.rows.length > 0) {
    const s = a.rows[0];
    if (s.cells.length > t) {
      const u = s.cells[t].getBoundingClientRect(), c = a.getBoundingClientRect(), d = u.right - c.left - 2;
      e.style.left = `${d}px`, e.style.height = `${n.height}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.columnWidths[s];
  e.style.left = `${o - 2}px`, e.style.height = `${n.height}px`;
}
function Zn(e, t, r, n, a) {
  if (a && a.rows.length > t) {
    const s = a.rows[t];
    if (s.cells.length > 0) {
      const u = s.cells[0].getBoundingClientRect(), c = a.getBoundingClientRect(), d = u.bottom - c.top - 2;
      e.style.top = `${d}px`, e.style.width = `${n.width}px`;
      return;
    }
  }
  let o = 0;
  for (let s = 0; s <= t; s++)
    o += r.rowHeights[s];
  e.style.top = `${o - 2}px`, e.style.width = `${n.width}px`;
}
function Yn(e, t, r) {
  e.style.bottom = "-2px", e.style.left = "0px", e.style.width = `${r.width}px`;
}
function Vn(e, t, r) {
  e.style.right = "-2px", e.style.top = "0px", e.style.height = `${r.height}px`;
}
function wa(e, t) {
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
function Ea(e, t) {
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
function xa(e, t) {
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
function Ca(e, t) {
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
const Bt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: a = Xe
}) => {
  const o = Q(null), s = Q(null), i = Q(null), u = Q(null), c = Q(null), d = Q(a), p = Q(!1), [h, m] = re(null), b = Te();
  oe(() => {
    d.current = a;
  }, [a]);
  const v = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Ue(o.current), o.current = null), m(null), i.current = null, u.current = null, c.current = null, p.current = !1, n && n();
  }, [n]), A = N((R) => {
    if (R.preventDefault(), R.stopPropagation(), !s.current) return;
    const $ = R.currentTarget, W = $.dataset.type, U = parseInt($.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const B = fe(s.current);
    i.current = {
      x: R.clientX,
      y: R.clientY,
      structure: { ...B }
    }, u.current = W, c.current = U, p.current = !0, document.body.classList.add("table-resize-in-progress");
    const x = {
      [ce.COLUMN]: "col-resize",
      [ce.ROW]: "row-resize",
      [ce.TABLE_BOTTOM]: "ns-resize",
      [ce.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = x[W] || "default", document.addEventListener("mousemove", P), document.addEventListener("mouseup", g);
  }, []), z = N((R) => {
    const $ = ba(R, d.current);
    return $ && (o.current = $, s.current = R, document.body.appendChild($), $.querySelectorAll(".table-resize-handler").forEach((U) => {
      U.addEventListener("mousedown", A);
    })), $;
  }, [A]), L = N((R) => {
    if (!le(R)) return;
    o.current && (Ue(o.current), o.current = null), R.classList.add("selected"), z(R) && (m(R), r && r(R));
  }, [r, z]), P = N((R) => {
    if (!p.current || !s.current || !i.current || !u.current) return;
    R.preventDefault(), R.stopPropagation();
    const { x: $, y: W, structure: U } = i.current, B = u.current, x = c.current, O = R.clientX, C = R.clientY;
    let _ = 0;
    switch (B) {
      case ce.COLUMN:
        _ = O - $;
        break;
      case ce.ROW:
        _ = C - W;
        break;
      case ce.TABLE_BOTTOM:
        _ = C - W;
        break;
      case ce.TABLE_RIGHT:
        _ = O - $;
        break;
    }
    const Y = ya({
      type: B,
      index: x,
      delta: _,
      currentStructure: U,
      options: d.current
    });
    xe(s.current, Y), o.current && St(o.current, s.current);
  }, []), g = N((R) => {
    if (p.current) {
      if (R.preventDefault(), R.stopPropagation(), s.current && i.current) {
        const $ = {
          structure: i.current.structure
        }, W = {
          structure: fe(s.current)
        };
        ($.structure.width !== W.structure.width || $.structure.height !== W.structure.height || JSON.stringify($.structure.columnWidths) !== JSON.stringify(W.structure.columnWidths) || JSON.stringify($.structure.rowHeights) !== JSON.stringify(W.structure.rowHeights)) && b.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: W } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: $ } }
        );
      }
      if (i.current = null, u.current = null, c.current = null, p.current = !1, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", g), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const $ = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent($), t && t(s.current, fe(s.current));
      }
    }
  }, [t, b]), f = N((R) => {
    o.current && !o.current.contains(R.target) && v();
    const W = R.target.closest("table");
    if (W && le(W)) {
      if (W === s.current)
        return;
      L(W);
    }
  }, [L, v]), T = N((R) => {
    if (R.key === "Delete" && s.current && !p.current) {
      R.preventDefault();
      const $ = s.current;
      if ($.parentNode) {
        $.parentNode.removeChild($), v();
        const W = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(W);
      }
    }
    R.key === "Escape" && s.current && v();
  }, [e, v]), I = N(() => {
    o.current && s.current && St(o.current, s.current);
  }, []);
  return oe(() => {
    if (!e.current) return;
    const $ = e.current.closest(".editor-viewport");
    return $ && ($.addEventListener("scroll", I), window.addEventListener("scroll", I)), () => {
      $ && $.removeEventListener("scroll", I), window.removeEventListener("scroll", I);
    };
  }, [e, I]), oe(() => {
    if (!e.current) return;
    const R = e.current;
    return R.addEventListener("click", f), R.addEventListener("keydown", T), window.addEventListener("resize", I), () => {
      R.removeEventListener("click", f), R.removeEventListener("keydown", T), window.removeEventListener("resize", I), p.current && (document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", g), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Ue(o.current);
    };
  }, [e, f, T, I, P, g]), oe(() => {
    if (!e.current) return;
    const R = new MutationObserver(($) => {
      $.forEach((W) => {
        W.type === "childList" && (W.removedNodes.forEach((U) => {
          U.nodeType === Node.ELEMENT_NODE && le(U) && U === h && v();
        }), W.addedNodes.forEach((U) => {
          if (U.nodeType !== Node.ELEMENT_NODE) return;
          if (le(U)) {
            setTimeout(() => L(U), 50);
            return;
          }
          const B = U.querySelectorAll?.("table") || [];
          B.length > 0 && setTimeout(() => L(B[0]), 50);
        }));
      });
    });
    return R.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => R.disconnect();
  }, [e, v, L]), oe(() => {
    if (!h) return;
    const R = new MutationObserver(($) => {
      $.some((U) => {
        if (U.type === "childList") {
          if ([...U.addedNodes, ...U.removedNodes].some(
            (x) => x.nodeType === Node.ELEMENT_NODE && x.tagName === "TR"
          )) return !0;
        } else if (U.type === "attributes" && ["colspan", "rowspan"].includes(U.attributeName))
          return !0;
        return !1;
      }) && o.current && s.current && (Ue(o.current), o.current = null, z(s.current));
    });
    return R.observe(h, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => R.disconnect();
  }, [h, z]), null;
};
Bt.propTypes = {
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
Bt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: Xe
};
const zt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = re({ top: 0, left: 0 }), [u, c] = re(!1), [d, p] = re("top"), h = Q(null), m = Q(null), b = Te(), v = (C) => {
    if (!C)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (Y) => setTimeout(Y, 16))(() => {
      const Y = document.querySelector(".table-resize-overlay");
      Y && St(Y, C);
    });
  }, A = (C) => {
    if (!C) return null;
    const _ = window.getComputedStyle(C);
    return {
      float: _.float || "none",
      margin: C.style.margin || "",
      marginLeft: C.style.marginLeft || "",
      marginRight: C.style.marginRight || "",
      display: _.display || "table"
    };
  }, z = N(() => {
    if (!e) return "left";
    const C = window.getComputedStyle(e);
    return C.marginLeft === "auto" && C.marginRight === "auto" ? "center" : C.float === "right" ? "right" : (C.float === "left", "left");
  }, [e]), [L, P] = re("left");
  oe(() => {
    e && P(z());
  }, [e, z]);
  const g = N(() => {
    if (!e || !h.current) return;
    const C = e.getBoundingClientRect(), _ = h.current.getBoundingClientRect(), Y = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, ee = C.bottom >= 0 && C.top <= Y.height && C.right >= 0 && C.left <= Y.width;
    let se = "top", E = 0, l = 0;
    if (ee) {
      const G = C.top - _.height - 10, M = Y.height - C.bottom - _.height - 10;
      M > G && M > 0 ? (se = "bottom", E = C.bottom + 10) : (se = "top", E = C.top - _.height - 10);
    } else
      se = "top", E = 10;
    l = C.left + C.width / 2 - _.width / 2;
    const k = window.innerWidth, H = window.innerHeight;
    let D = Math.max(10, Math.min(l, k - _.width - 10)), q = Math.max(10, Math.min(E, H - _.height - 10));
    i({ top: q, left: D }), p(se), c(!0);
  }, [e]);
  bn(() => {
    g();
    const C = () => {
      g();
    }, _ = m.current;
    return _ && _.addEventListener("scroll", C), window.addEventListener("scroll", C), window.addEventListener("resize", C), () => {
      _ && _.removeEventListener("scroll", C), window.removeEventListener("scroll", C), window.removeEventListener("resize", C), c(!1);
    };
  }, [e, g]), oe(() => {
    const C = (_) => {
      h.current && !h.current.contains(_.target) && _.target !== e && !e.contains(_.target) && r();
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [e, r]);
  const f = {
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
  }, T = (C) => {
    if (e && f[C]) {
      const _ = A(e), Y = L, ee = f[C];
      e.style.float = ee.float, e.style.margin = ee.margin, e.style.marginLeft = ee.marginLeft, e.style.marginRight = ee.marginRight, P(C), v(e);
      const se = A(e);
      b.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: C, state: se } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: Y, state: _ } }
      ), t && t(C);
    }
  }, I = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const C = va(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), v(e), requestAnimationFrame(() => g());
    } else
      console.error("Failed to insert row above");
  }, R = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const C = Ta(e, n);
    if (C) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: C, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), v(e), requestAnimationFrame(() => g());
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
    if (console.log(`Inserting column left of index ${a}`), wa(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "left", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a } }
      ), v(e), requestAnimationFrame(() => g());
    } else
      console.error("Failed to insert column left");
  }, W = () => {
    if (console.log("handleInsertColumnRight called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnRight: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnRight: No column selected");
      return;
    }
    if (console.log(`Inserting column right of index ${a}`), Ea(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "right", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a + 1 } }
      ), v(e), requestAnimationFrame(() => g());
    } else
      console.error("Failed to insert column right");
  }, U = () => {
    if (console.log("handleDeleteRow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteRow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleDeleteRow: No row selected");
      return;
    }
    if (console.log(`Deleting row at index ${n}`), xa(e, n)) {
      if (console.log("Row deleted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_ROW", payload: { element: e, index: n } },
        { type: "INSERT_ROW", payload: { element: e, position: "at", index: n } }
      ), v(e), requestAnimationFrame(() => g());
    } else
      console.error("Failed to delete row");
  }, B = () => {
    if (console.log("handleDeleteColumn called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteColumn: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleDeleteColumn: No column selected");
      return;
    }
    if (console.log(`Deleting column at index ${a}`), Ca(e, a)) {
      if (console.log("Column deleted successfully, updating content"), o && o.current) {
        const _ = o.current.innerHTML;
        console.log("Updated content length:", _.length), b.updateContinuousContent(_);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_COLUMN", payload: { element: e, index: a } },
        { type: "INSERT_COLUMN", payload: { element: e, position: "at", index: a } }
      ), v(e), requestAnimationFrame(() => g());
    } else
      console.error("Failed to delete column");
  }, x = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, O = (C) => ({
    ...x,
    background: C ? "#007bff" : "transparent",
    color: C ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : vn(
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        ref: h,
        className: "table-tooltip-menu",
        "data-menu-position": d,
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
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${L === "left" ? "active" : ""}`,
              onClick: () => T("left"),
              title: "Align Left",
              style: O(L === "left"),
              children: /* @__PURE__ */ y.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${L === "center" ? "active" : ""}`,
              onClick: () => T("center"),
              title: "Align Center",
              style: O(L === "center"),
              children: /* @__PURE__ */ y.jsx(Nt, { size: 14 })
            }
          ),
          /* @__PURE__ */ y.jsx(
            "button",
            {
              className: `tooltip-button ${L === "right" ? "active" : ""}`,
              onClick: () => T("right"),
              title: "Align Right",
              style: O(L === "right"),
              children: /* @__PURE__ */ y.jsx(Pt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
            /* @__PURE__ */ y.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: I,
                title: "Insert Row Above",
                style: {
                  ...x,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ y.jsx($o, { size: 14 })
              }
            ),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: R,
                title: "Insert Row Below",
                style: {
                  ...x,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ y.jsx(Io, { size: 14 })
              }
            ),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: U,
                title: "Delete Row",
                style: {
                  ...x,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ y.jsx(At, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
            /* @__PURE__ */ y.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: $,
                title: "Insert Column Left",
                style: {
                  ...x,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ y.jsx(Do, { size: 14 })
              }
            ),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: W,
                title: "Insert Column Right",
                style: {
                  ...x,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ y.jsx(Bo, { size: 14 })
              }
            ),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: B,
                title: "Delete Column",
                style: {
                  ...x,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ y.jsx(At, { size: 14 })
              }
            )
          ] })
        ]
      }
    ),
    document.body
  );
};
zt.propTypes = {
  tableElement: w.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: w.func,
  onClose: w.func.isRequired,
  selectedRowIndex: w.number,
  selectedColIndex: w.number,
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  })
};
zt.defaultProps = {
  tableElement: null,
  onAlignChange: void 0,
  selectedRowIndex: null,
  selectedColIndex: null,
  editorRef: null
};
const $t = ({
  editorRef: e,
  onCellSelectionChange: t
}) => {
  const [r, n] = re(/* @__PURE__ */ new Set()), [a, o] = re(null), [s, i] = re(null), [u, c] = re(null), [d, p] = re(!1), [h, m] = re(!1), [b, v] = re(null), [A, z] = re(null);
  Te(), Q(null);
  const L = Q(null), P = N(() => {
    n(/* @__PURE__ */ new Set()), o(null), i(null), c(null), v(null), z(null), p(!1), m(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((B) => {
      B.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), L.current !== null && (L.current = null, t && t(null));
  }, [t]), g = N((B) => {
    const x = B.closest("tr"), O = B.closest("table");
    if (!x || !O) return null;
    const C = Array.from(O.rows).indexOf(x), _ = Array.from(x.cells).indexOf(B);
    return { rowIndex: C, cellIndex: _, table: O };
  }, []), f = N((B) => {
    if (B.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const x = Array.from(B), O = x[0], C = g(O);
    if (!C) return { mode: null, rowIndex: null, colIndex: null };
    const { table: _ } = C;
    return x.filter((se) => {
      const E = g(se);
      return E && E.table === _ && E.rowIndex === C.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: C.rowIndex, colIndex: null } : x.filter((se) => {
      const E = g(se);
      return E && E.table === _ && E.cellIndex === C.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: C.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [g]), T = N((B, x, O, C, _) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((Y) => {
      Y.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!_ || !B)) {
      if (B === "row" && x !== null) {
        const Y = _.rows[x];
        Y && Array.from(Y.cells).forEach((ee) => {
          ee.classList.add("table-row-selected");
        });
      } else B === "column" && O !== null ? Array.from(_.rows).forEach((Y) => {
        const ee = Y.cells[O];
        ee && ee.classList.add("table-col-selected");
      }) : B === "cells" && C.forEach((Y) => {
        Y.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), I = N((B, x) => {
    const O = f(B);
    n(B), o(O.mode), i(O.rowIndex), c(O.colIndex), z(x), T(O.mode, O.rowIndex, O.colIndex, B, x);
    const C = O.mode ? {
      mode: O.mode,
      cells: B,
      rowIndex: O.rowIndex,
      colIndex: O.colIndex,
      table: x
    } : null;
    JSON.stringify(L.current) !== JSON.stringify(C) && (L.current = C, t && t(C));
  }, [f, T, t]), R = N((B) => {
    const x = B.target.closest("td, th");
    if (!x) return;
    const O = g(x);
    O && (p(!0), v(x), z(O.table), m(!1));
  }, [g]), $ = N((B) => {
    if (!d || !b) return;
    const x = B.target.closest("td, th");
    if (!x || !A || !A.contains(x)) return;
    m(!0), B.preventDefault();
    const O = g(b), C = g(x);
    if (!O || !C || O.table !== C.table) return;
    const _ = Math.min(O.rowIndex, C.rowIndex), Y = Math.max(O.rowIndex, C.rowIndex), ee = Math.min(O.cellIndex, C.cellIndex), se = Math.max(O.cellIndex, C.cellIndex), E = /* @__PURE__ */ new Set();
    for (let l = _; l <= Y; l++) {
      const k = A.rows[l];
      if (k)
        for (let H = ee; H <= se; H++) {
          const D = k.cells[H];
          D && E.add(D);
        }
    }
    I(E, A);
  }, [d, g]), W = N(() => {
    h || P(), p(!1), v(null);
  }, [h, P]), U = N((B) => {
    const x = B.target.closest("td, th"), O = B.target.closest("table");
    if (!(x && A && A.contains(x))) {
      if (O && O !== A) {
        P();
        return;
      }
      O || P();
    }
  }, [P, A]);
  return oe(() => {
    if (!e.current) return;
    const B = e.current, x = (C) => {
      C.target.closest("td, th") && R(C);
    }, O = (C) => {
      C.target.closest("td, th") && $(C);
    };
    return B.addEventListener("mousedown", x, !0), B.addEventListener("mouseenter", O, !0), document.addEventListener("mouseup", W), document.addEventListener("click", U), () => {
      B.removeEventListener("mousedown", x, !0), B.removeEventListener("mouseenter", O, !0), document.removeEventListener("mouseup", W), document.removeEventListener("click", U);
    };
  }, [e, R, $, W, U]), oe(() => {
    if (!e.current) return;
    const B = new MutationObserver((x) => {
      x.forEach((O) => {
        O.type === "childList" && A && !e.current.contains(A) && P();
      });
    });
    return B.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => B.disconnect();
  }, [e, P]), null;
};
$t.propTypes = {
  editorRef: w.shape({
    current: w.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: w.func
};
$t.defaultProps = {
  onCellSelectionChange: void 0
};
const Aa = 50, ht = 50, Ra = 50, Sa = 100, Oa = 300, Ft = Ot(({
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
}, d) => {
  const p = An(), h = Te(), { pageSize: m, pageMargins: b, continuousContent: v, pageBoundaries: A, activePage: z, zoomLevel: L, canUndo: P, canRedo: g } = p, f = Q(null), T = Q(null), { currentFormat: I, formatText: R, updateCurrentFormatFromSelection: $ } = zr(), [W, U] = re(!1), [B, x] = re(null), [O, C] = re(!0), [_, Y] = re(!1), [ee, se] = re(null), [E, l] = re(null), [k, H] = re(null), {
    checkAndUpdateBoundaries: D,
    getCurrentPage: q,
    scrollToPage: G,
    updateBoundaries: M,
    triggerAutoReflow: V,
    removePageAndContent: J,
    removePageBreak: X,
    insertPageBreakAtBoundary: ie
  } = lo(m, T, L, b), j = ge(() => Pe(m), [m]), [ue, Ce] = re(!1), pe = Q(null), Ie = Q(!1), He = Q(!1), De = Q(!1), je = Q(v), Je = N(() => {
    Ie.current = !1;
    const S = Math.max(0, A.length - 1);
    h.setActivePage(S), setTimeout(() => {
      G(S, f);
    }, Ra);
  }, [A.length, h, G]);
  oe(() => {
    if (!T.current || De.current) return;
    T.current.innerHTML = v, De.current = !0, je.current = v;
    const S = setTimeout(() => {
      M();
    }, Aa);
    return () => clearTimeout(S);
  }, []), oe(() => {
    if (!T.current || !De.current) return;
    if (T.current.innerHTML !== v) {
      T.current.innerHTML = v;
      const ae = setTimeout(() => {
        M(), Ie.current && Je();
      }, ht);
      return je.current = v, () => clearTimeout(ae);
    }
  }, [v, M, Je]), oe(() => {
    s && De.current && s(v);
  }, [v, s]);
  const { restoreCursorPosition: Qe, hasActiveCursorSelection: et } = fo({
    updateCurrentFormatFromSelection: $,
    editorRef: T
  }), Xn = N((S) => {
    S !== v && h.updateContinuousContent(S), T.current && T.current.innerHTML !== S && (T.current.innerHTML = S), je.current = S, setTimeout(() => {
      M();
    }, ht);
  }, [v, h, M]), tt = N((S) => {
    if (!T.current || !S) return;
    et() || Qe(), document.execCommand("insertHTML", !1, S);
    const ae = T.current.innerHTML;
    h.updateContinuousContent(ae), je.current = ae, setTimeout(() => {
      M(), V(200);
    }, ht);
  }, [et, Qe, h, M, V]), Ut = ge(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => T.current ? T.current.innerHTML : v,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (T.current ? T.current.innerHTML : v).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => T.current ? io(T.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (S) => {
      const ae = qe(S);
      Xn(ae);
    },
    /**
     * Set the page size programmatically
     * @param {string} size - Page size ('A4', 'Letter', 'Legal')
     */
    setPageSize: (S) => {
      h.updatePageSize(S), M({ pageSize: S });
    },
    /**
     * Set the page margins programmatically
     * @param {string|Object} margins - Margin preset name ('NORMAL', 'NARROW', 'MODERATE', 'WIDE', 'OFFICE_2003') or custom margin object {top, bottom, left, right} in inches
     */
    setPageMargins: (S) => {
      h.updatePageMargins(S), M({ pageMargins: S });
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (S) => {
      const ae = qe(S);
      tt(ae);
    }
  }), [v, h, M, V, et, Qe]);
  yr(d, () => Ut, [Ut]);
  const nt = N(() => {
    if (!T.current) return;
    let S = T.current.innerHTML;
    S = qe(S), S !== T.current.innerHTML && (T.current.innerHTML = S);
    const ae = v;
    if (ae !== S) {
      const at = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: S
      }, it = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: ae
      };
      h.recordOperation(at, it);
    }
    h.updateContinuousContent(S), D(), V(200);
    const Re = q(f);
    Re !== z && h.setActivePage(Re);
  }, [h, D, q, z, V, f, T, v]), Jn = N((S) => {
    nt();
  }, [nt]), Wt = N((S) => {
    h.updatePageSize(S), M({ pageSize: S }), a && a(S);
  }, [h, M, a]), qt = N((S) => {
    h.updatePageMargins(S), M({ pageMargins: S }), o && o(S);
  }, [h, M, o]), Gt = N((S) => {
    S < 0 || S >= A.length || (He.current = !0, h.setActivePage(S), G(S, f), setTimeout(() => {
      He.current = !1;
    }, Oa), t && t(S));
  }, [h, G, t, A.length]), Zt = N(() => {
    const S = A.length + 1;
    ie(S) && (Ie.current = !0, setTimeout(() => {
      Ie.current && Je();
    }, 100)), r && r();
  }, [A.length, ie, h, G, r]), Qn = N(() => {
    const S = window.getSelection();
    if (S && S.rangeCount > 0) {
      if (!T?.current) return;
      const at = `<page-break data-page-break="true" contenteditable="false" data-page-number="${T.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, at), setTimeout(() => {
        M();
        const it = q(f);
        h.setActivePage(it);
      }, 150);
    }
  }, [M, q, h, f]), er = N((S) => {
    tt(S);
  }, [tt]), tr = N((S) => {
    if (!S) return;
    X(S) && setTimeout(() => {
      const Re = q(f);
      h.setActivePage(Re);
    }, 200);
  }, [X, q, h, f]), Yt = N((S) => {
    if (A.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    J(S) && (h.setActivePage(0), n && n(S));
  }, [A.length, J, h, n]), nr = ge(() => ({
    handleZoomIn: () => h.zoomIn(),
    handleZoomOut: () => h.zoomOut(),
    handleZoomReset: () => h.resetZoom(),
    handleUndo: () => h.undo(),
    handleRedo: () => h.redo()
  }), [h]), { handleZoomIn: rt, handleZoomOut: ot, handleZoomReset: st, handleUndo: rr, handleRedo: or } = nr;
  uo(
    { handleZoomIn: rt, handleZoomOut: ot, handleZoomReset: st, handleUndo: rr, handleRedo: or },
    { editorRef: T, containerRef: f }
  );
  const sr = N(() => {
    !f.current || !T.current || He.current || (pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
      if (He.current) {
        pe.current = null;
        return;
      }
      const S = q(f);
      S !== z && S >= 0 && h.setActivePage(S), pe.current = null;
    }, Sa));
  }, [q, z, h]), ar = ge(() => {
    if (!v) return 0;
    const ae = v.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return ae ? ae.length : 0;
  }, [v]), ir = A.length || 1, cr = N((S) => {
    U(!0), x(S);
  }, []), Vt = N(() => {
    U(!1), x(null);
  }, []), lr = N((S, ae) => {
  }, []), ur = N((S) => {
    S && S.mode === "row" ? (l(S.rowIndex), H(null)) : S && S.mode === "column" ? (H(S.colIndex), l(null)) : (l(null), H(null));
  }, []), dr = N((S) => {
    Y(!0), se(S);
  }, []), Kt = N(() => {
    Y(!1), se(null);
  }, []), fr = N((S, ae) => {
  }, []);
  return oe(() => () => {
    pe.current && clearTimeout(pe.current);
  }, []), /* @__PURE__ */ y.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ y.jsx(
      Lt,
      {
        currentFormat: {
          ...I,
          imageSelected: W
        },
        onFormatText: R,
        onAddPageBreak: Qn,
        onInsertImage: er,
        canUndo: P,
        canRedo: g
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ y.jsx(
        Xs,
        {
          editorView: null,
          isCollapsed: ue,
          onToggle: () => Ce((S) => !S),
          wordCount: ar,
          pageCount: ir
        }
      ),
      /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: f,
          onScroll: sr,
          children: /* @__PURE__ */ y.jsx(
            da,
            {
              content: v,
              dimensions: j,
              pageSize: m,
              pageMargins: b,
              pageBoundaries: A,
              editorRef: T,
              onInput: Jn,
              onContentChange: nt,
              onClick: () => T.current?.focus(),
              onRemovePageBreak: tr,
              zoomLevel: L
            }
          )
        }
      ),
      /* @__PURE__ */ y.jsx(
        Dt,
        {
          editorRef: T,
          onImageSelect: cr,
          onImageDeselect: Vt,
          onImageResize: lr,
          resizeOptions: {
            ...Ae,
            preserveAspectRatio: O,
            aspectRatio: O
          }
        }
      ),
      /* @__PURE__ */ y.jsx(
        Bt,
        {
          editorRef: T,
          onTableSelect: dr,
          onTableDeselect: Kt,
          onTableResize: fr
        }
      ),
      /* @__PURE__ */ y.jsx(
        $t,
        {
          editorRef: T,
          onCellSelectionChange: ur
        }
      ),
      W && B && /* @__PURE__ */ y.jsx(
        jt,
        {
          imageElement: B,
          initialPreserveAspectRatio: O,
          onAlignChange: (S) => {
          },
          onAspectRatioToggle: (S) => {
            C(S);
          },
          onDelete: () => {
            if (B) {
              const S = B.getAttribute("data-key");
              S && To(S).catch((ae) => {
                console.error("Failed to delete image from IndexedDB:", ae);
              });
            }
          },
          onClose: Vt
        }
      ),
      _ && ee && /* @__PURE__ */ y.jsx(
        zt,
        {
          tableElement: ee,
          onAlignChange: (S) => {
          },
          onClose: Kt,
          selectedRowIndex: E,
          selectedColIndex: k,
          editorRef: T
        }
      ),
      c && /* @__PURE__ */ y.jsx("div", { className: "page-manager-sidebar", children: e ? Ve.cloneElement(e, {
        onNavigate: Gt,
        onAddPage: Zt,
        onDeletePage: Yt,
        onPageSizeChange: Wt,
        onPageMarginsChange: qt,
        zoomLevel: L,
        canZoomIn: Tt(L),
        canZoomOut: wt(L),
        onZoomIn: rt,
        onZoomOut: ot,
        onZoomReset: st
      }) : /* @__PURE__ */ y.jsx(
        fa,
        {
          pageBoundaries: A,
          activePage: z,
          pageSize: m,
          pageMargins: b,
          zoomLevel: L,
          canZoomIn: Tt(L),
          canZoomOut: wt(L),
          onNavigate: Gt,
          onAddPage: Zt,
          onDeletePage: Yt,
          onPageSizeChange: Wt,
          onPageMarginsChange: qt,
          onZoomIn: rt,
          onZoomOut: ot,
          onZoomReset: st
        }
      ) })
    ] })
  ] });
});
Ft.displayName = "HtmlEditor";
Ft.propTypes = {
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
Ft.defaultProps = {
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
class Kn extends Ve.Component {
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
Kn.propTypes = {
  children: w.node.isRequired,
  fallback: w.node,
  onError: w.func,
  onReset: w.func,
  showDetails: w.bool
};
Kn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Hr as COMMON_FONT_SIZES,
  zn as ColorPickerDropdown,
  Ke as DEFAULT_FONT_SIZE,
  Ae as DEFAULT_IMAGE_RESIZE_OPTIONS,
  wn as DEFAULT_PAGE_SIZE,
  Xe as DEFAULT_TABLE_RESIZE_OPTIONS,
  La as DocumentProvider,
  Lt as EditorToolbar,
  Kn as ErrorBoundary,
  On as FONT_SIZE_MAP,
  Ft as HtmlEditor,
  Dt as ImageResizeHandlers,
  Ze as PAGE_SIZES,
  fa as PageManager,
  da as PageView,
  F as RESIZE_HANDLERS,
  Xs as Sidebar,
  ce as TABLE_RESIZE_HANDLERS,
  Bt as TableResizeHandlers,
  za as applyImageDimensions,
  xe as applyTableDimensions,
  ja as calculateResizeDimensions,
  ya as calculateTableResizeDimensions,
  $a as clearImages,
  po as createResizeOverlay,
  ba as createTableResizeOverlay,
  To as deleteImage,
  Fa as getAllImageKeys,
  Ma as getAvailablePageSizes,
  vo as getImage,
  Ba as getImageDimensions,
  Pe as getPageDimensions,
  Ia as getPixelValue,
  Ha as getPointValue,
  fe as getTableStructure,
  be as isResizableImage,
  le as isResizableTable,
  Da as isValidFontSize,
  Pa as isValidPageSize,
  Js as logger,
  jr as pixelsToPoints,
  Dr as pointsToPixels,
  gt as removeResizeOverlay,
  Ue as removeTableResizeOverlay,
  bo as saveImage,
  Ct as updateResizeOverlay,
  St as updateTableResizeOverlay,
  lo as useContinuousReflow,
  Cn as useDocument,
  Te as useDocumentActions,
  An as useDocumentState,
  zr as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
