import tt, { createContext as dr, useContext as fr, useReducer as pr, useMemo as Te, useState as oe, useCallback as N, useRef as ee, useEffect as ae, forwardRef as St, createElement as ht, memo as gr, useLayoutEffect as wn, useImperativeHandle as hr } from "react";
import { v4 as Ot } from "uuid";
import { createPortal as En } from "react-dom";
function mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qe = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function yr() {
  if (en) return Ne;
  en = 1;
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
  return Ne.Fragment = t, Ne.jsx = r, Ne.jsxs = r, Ne;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function br() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === V ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case R:
          return "Fragment";
        case j:
          return "Profiler";
        case L:
          return "StrictMode";
        case y:
          return "Suspense";
        case M:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case T:
            return "Portal";
          case h:
            return d.displayName || "Context";
          case C:
            return (d._context.displayName || "Context") + ".Consumer";
          case p:
            var _ = d.render;
            return d = d.displayName, d || (d = _.displayName || _.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case S:
            return _ = d.displayName || null, _ !== null ? _ : e(d.type) || "Memo";
          case H:
            _ = d._payload, d = d._init;
            try {
              return e(d(_));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var D = _.error, I = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return D.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(d);
      }
    }
    function n(d) {
      if (d === R) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === H)
        return "<...>";
      try {
        var _ = e(d);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var d = z.A;
      return d === null ? null : d.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(d) {
      if (x.call(d, "key")) {
        var _ = Object.getOwnPropertyDescriptor(d, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function i(d, _) {
      function D() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: D,
        configurable: !0
      });
    }
    function g() {
      var d = e(this.type);
      return Y[d] || (Y[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function l(d, _, D, I, G, W) {
      var $ = D.ref;
      return d = {
        $$typeof: b,
        type: d,
        key: _,
        props: D,
        _owner: I
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function f(d, _, D, I, G, W) {
      var $ = _.children;
      if ($ !== void 0)
        if (I)
          if (O($)) {
            for (I = 0; I < $.length; I++)
              u($[I]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u($);
      if (x.call(_, "key")) {
        $ = e(d);
        var q = Object.keys(_).filter(function(X) {
          return X !== "key";
        });
        I = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", w[$ + I] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          $,
          q,
          $
        ), w[$ + I] = !0);
      }
      if ($ = null, D !== void 0 && (r(D), $ = "" + D), s(_) && (r(_.key), $ = "" + _.key), "key" in _) {
        D = {};
        for (var K in _)
          K !== "key" && (D[K] = _[K]);
      } else D = _;
      return $ && i(
        D,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), l(
        d,
        $,
        D,
        a(),
        G,
        W
      );
    }
    function u(d) {
      c(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === H && (d._payload.status === "fulfilled" ? c(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function c(d) {
      return typeof d == "object" && d !== null && d.$$typeof === b;
    }
    var v = tt, b = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), z = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, O = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var k, Y = {}, te = v.react_stack_bottom_frame.bind(
      v,
      o
    )(), se = A(n(o)), w = {};
    Pe.Fragment = R, Pe.jsx = function(d, _, D) {
      var I = 1e4 > z.recentlyCreatedOwnerStacks++;
      return f(
        d,
        _,
        D,
        !1,
        I ? Error("react-stack-top-frame") : te,
        I ? A(n(d)) : se
      );
    }, Pe.jsxs = function(d, _, D) {
      var I = 1e4 > z.recentlyCreatedOwnerStacks++;
      return f(
        d,
        _,
        D,
        !0,
        I ? Error("react-stack-top-frame") : te,
        I ? A(n(d)) : se
      );
    };
  })()), Pe;
}
var nn;
function Tr() {
  return nn || (nn = 1, process.env.NODE_ENV === "production" ? qe.exports = yr() : qe.exports = br()), qe.exports;
}
var m = Tr();
const mt = 100, yt = 50, bt = 200, rn = 5, Tt = (e) => e < bt, vt = (e) => e > yt, vr = 96, Ge = (e) => Math.round(e * vr), Qe = {
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
}, he = "NORMAL", xn = (e = he) => {
  const t = Qe[e] || Qe[he];
  return {
    top: Ge(t.top),
    bottom: Ge(t.bottom),
    left: Ge(t.left),
    right: Ge(t.right)
  };
}, wr = (e = he) => {
  const t = xn(e);
  return t.top + t.bottom;
}, Er = () => Object.keys(Qe), xr = (e) => {
  const t = Qe[e];
  return t ? t.label : "Unknown";
}, Oe = {
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
}, An = "A4", _t = (e) => {
  const t = Oe[e] || Oe[An];
  return {
    width: t.width,
    height: t.height
  };
}, Ca = (e) => Object.keys(Oe).includes(e), Ra = () => Object.keys(Oe), He = An, Ae = "<p><br></p>", Ar = "continuous", Me = (e, t = He) => ({
  id: Ot(),
  index: e,
  size: t,
  content: Ae,
  images: [],
  isBreakPoint: !1
}), Xe = (e) => typeof e != "string" || e.trim() === "" ? Ae : e, Cn = (e, t = He) => (e.length > 0 ? e : [Me(0, t)]).map((n, a) => ({
  id: n.id || Ot(),
  index: a,
  size: n.size || t,
  content: Xe(n.content),
  images: n.images || [],
  isBreakPoint: !!n.isBreakPoint
})), Cr = (e = He) => [{
  id: "page-0",
  pageNumber: 1,
  top: 0,
  height: _t(e).height
}], Ze = (e) => e.slice(0, -1).map((t, r) => ({
  id: `auto-break-${r}`,
  pageNumber: r + 1
})), wt = (e = {}) => {
  const t = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || He, n = Cn(e.pages || [Me(0, r)], r);
  return {
    id: Ot(),
    title: e.title || "Untitled Document",
    createdAt: t,
    updatedAt: t,
    pageSize: r,
    pages: n,
    activePage: e.activePage && e.activePage < n.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: n.length,
    editorMode: e.editorMode || Ar,
    continuousContent: e.continuousContent || Ae,
    pageBoundaries: e.pageBoundaries || Cr(r),
    zoomLevel: e.zoomLevel || mt,
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
}, Et = (e, t) => {
  const r = (/* @__PURE__ */ new Date()).toISOString();
  switch (t.type) {
    case Z.INITIALIZE_DOCUMENT: {
      const { initialContent: n = Ae, pageSize: a = He } = t.payload || {}, o = { ...Me(0, a), content: Xe(n) };
      return wt({
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
        content: Xe(a)
      }, {
        ...e,
        pages: o,
        updatedAt: r
      };
    }
    case Z.UPDATE_PAGES: {
      const n = Array.isArray(t.payload) ? { pages: t.payload } : t.payload || {}, a = Cn(n.pages || [], e.pageSize), o = Array.isArray(n.pageBreaks) ? n.pageBreaks : Ze(a);
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
      a.splice(n, 0, Me(n, e.pageSize));
      const o = a.map((i, g) => ({
        ...i,
        index: g,
        size: e.pageSize
      })), s = Ze(o);
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
      const o = a.map((g, l) => ({
        ...g,
        index: l,
        size: e.pageSize
      }));
      let s = e.activePage;
      s >= o.length ? s = o.length - 1 : n <= s && s > 0 && (s -= 1);
      const i = Ze(o);
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
        _t(n);
      } catch {
        return console.warn(`Invalid page size: ${n}`), e;
      }
      const a = e.pages.map((s, i) => ({
        ...s,
        index: i,
        size: n
      })), o = Ze(a);
      return {
        ...e,
        pageSize: n,
        pages: a,
        pageBreaks: o,
        updatedAt: r
      };
    }
    case Z.RESET_DOCUMENT:
      return wt();
    case Z.UPDATE_CONTINUOUS_CONTENT: {
      const n = Xe(t.payload);
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
        const i = s.substring(0, n), g = s.substring(n);
        s = i + o + g;
      } else if (typeof a == "number" && typeof document < "u") {
        const i = document.createElement("div");
        i.innerHTML = s;
        const g = i.querySelectorAll('page-break, [data-page-break="true"]');
        if (a === 0 && g.length === 0)
          s = s + o + "<p><br></p>";
        else if (a < g.length) {
          const l = g[a], f = document.createElement("page-break");
          f.setAttribute("data-page-break", "true"), f.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const u = document.createElement("p");
          u.innerHTML = "<br>", l.parentNode.insertBefore(f, l.nextSibling), f.parentNode.insertBefore(u, f.nextSibling), s = i.innerHTML;
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
      return o[n] && o[n].remove(), a.querySelectorAll('page-break, [data-page-break="true"]').forEach((i, g) => {
        i.setAttribute("data-page-number", String(g + 2));
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
      return n === "continuous" ? a = e.pages.map((i) => i.content).filter((i) => i && i !== Ae).join(`
`) || Ae : e.continuousContent && e.continuousContent !== Ae && (o = [{ ...Me(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: n,
        continuousContent: a,
        pages: o,
        updatedAt: r
      };
    }
    case Z.SET_ZOOM_LEVEL: {
      const n = t.payload;
      return n < yt || n > bt ? (console.warn(`Invalid zoom level: ${n}. Must be between ${yt} and ${bt}.`), e) : n === e.zoomLevel ? e : {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_IN: {
      if (!Tt(e.zoomLevel))
        return e;
      const n = e.zoomLevel + rn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.ZOOM_OUT: {
      if (!vt(e.zoomLevel))
        return e;
      const n = e.zoomLevel - rn;
      return {
        ...e,
        zoomLevel: n,
        updatedAt: r
      };
    }
    case Z.RESET_ZOOM:
      return e.zoomLevel === mt ? e : {
        ...e,
        zoomLevel: mt,
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
      return n.inverseOperation && (o = Et(e, n.inverseOperation)), {
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
      return n.operation && (o = Et(e, n.operation)), {
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
}, Rn = dr(null), Sa = ({ children: e, initialState: t = {} }) => {
  const [r, n] = pr(Et, wt(t)), a = Te(() => ({
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
  }), []), o = Te(() => ({
    state: r,
    actions: a,
    dispatch: n
  }), [r, a]);
  return /* @__PURE__ */ m.jsx(Rn.Provider, { value: o, children: e });
}, Sn = () => {
  const e = fr(Rn);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, On = () => {
  const { state: e } = Sn();
  return e;
}, we = () => {
  const { actions: e } = Sn();
  return e;
};
var Ye = { exports: {} }, Ve = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Rr() {
  if (on) return ne;
  on = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function C(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
        case t:
          switch (p = p.type, p) {
            case g:
            case l:
            case n:
            case o:
            case a:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case f:
                case b:
                case v:
                case s:
                  return p;
                default:
                  return y;
              }
          }
        case r:
          return y;
      }
    }
  }
  function h(p) {
    return C(p) === l;
  }
  return ne.AsyncMode = g, ne.ConcurrentMode = l, ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = t, ne.ForwardRef = f, ne.Fragment = n, ne.Lazy = b, ne.Memo = v, ne.Portal = r, ne.Profiler = o, ne.StrictMode = a, ne.Suspense = u, ne.isAsyncMode = function(p) {
    return h(p) || C(p) === g;
  }, ne.isConcurrentMode = h, ne.isContextConsumer = function(p) {
    return C(p) === i;
  }, ne.isContextProvider = function(p) {
    return C(p) === s;
  }, ne.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ne.isForwardRef = function(p) {
    return C(p) === f;
  }, ne.isFragment = function(p) {
    return C(p) === n;
  }, ne.isLazy = function(p) {
    return C(p) === b;
  }, ne.isMemo = function(p) {
    return C(p) === v;
  }, ne.isPortal = function(p) {
    return C(p) === r;
  }, ne.isProfiler = function(p) {
    return C(p) === o;
  }, ne.isStrictMode = function(p) {
    return C(p) === a;
  }, ne.isSuspense = function(p) {
    return C(p) === u;
  }, ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === l || p === o || p === a || p === u || p === c || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === v || p.$$typeof === s || p.$$typeof === i || p.$$typeof === f || p.$$typeof === R || p.$$typeof === L || p.$$typeof === j || p.$$typeof === T);
  }, ne.typeOf = C, ne;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function Sr() {
  return sn || (sn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, c = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, T = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, L = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function C(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === n || B === l || B === o || B === a || B === u || B === c || typeof B == "object" && B !== null && (B.$$typeof === b || B.$$typeof === v || B.$$typeof === s || B.$$typeof === i || B.$$typeof === f || B.$$typeof === R || B.$$typeof === L || B.$$typeof === j || B.$$typeof === T);
    }
    function h(B) {
      if (typeof B == "object" && B !== null) {
        var de = B.$$typeof;
        switch (de) {
          case t:
            var Re = B.type;
            switch (Re) {
              case g:
              case l:
              case n:
              case o:
              case a:
              case u:
                return Re;
              default:
                var Be = Re && Re.$$typeof;
                switch (Be) {
                  case i:
                  case f:
                  case b:
                  case v:
                  case s:
                    return Be;
                  default:
                    return de;
                }
            }
          case r:
            return de;
        }
      }
    }
    var p = g, y = l, M = i, S = s, H = t, F = f, V = n, z = b, x = v, O = r, A = o, k = a, Y = u, te = !1;
    function se(B) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(B) || h(B) === g;
    }
    function w(B) {
      return h(B) === l;
    }
    function d(B) {
      return h(B) === i;
    }
    function _(B) {
      return h(B) === s;
    }
    function D(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function I(B) {
      return h(B) === f;
    }
    function G(B) {
      return h(B) === n;
    }
    function W(B) {
      return h(B) === b;
    }
    function $(B) {
      return h(B) === v;
    }
    function q(B) {
      return h(B) === r;
    }
    function K(B) {
      return h(B) === o;
    }
    function X(B) {
      return h(B) === a;
    }
    function ce(B) {
      return h(B) === u;
    }
    re.AsyncMode = p, re.ConcurrentMode = y, re.ContextConsumer = M, re.ContextProvider = S, re.Element = H, re.ForwardRef = F, re.Fragment = V, re.Lazy = z, re.Memo = x, re.Portal = O, re.Profiler = A, re.StrictMode = k, re.Suspense = Y, re.isAsyncMode = se, re.isConcurrentMode = w, re.isContextConsumer = d, re.isContextProvider = _, re.isElement = D, re.isForwardRef = I, re.isFragment = G, re.isLazy = W, re.isMemo = $, re.isPortal = q, re.isProfiler = K, re.isStrictMode = X, re.isSuspense = ce, re.isValidElementType = C, re.typeOf = h;
  })()), re;
}
var an;
function _n() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Ve.exports = Rr() : Ve.exports = Sr()), Ve.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var it, cn;
function Or() {
  if (cn) return it;
  cn = 1;
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
      var g = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return it = a() ? Object.assign : function(o, s) {
    for (var i, g = n(o), l, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var u in i)
        t.call(i, u) && (g[u] = i[u]);
      if (e) {
        l = e(i);
        for (var c = 0; c < l.length; c++)
          r.call(i, l[c]) && (g[l[c]] = i[l[c]]);
      }
    }
    return g;
  }, it;
}
var ct, ln;
function kt() {
  if (ln) return ct;
  ln = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ct = e, ct;
}
var lt, un;
function kn() {
  return un || (un = 1, lt = Function.call.bind(Object.prototype.hasOwnProperty)), lt;
}
var ut, dn;
function _r() {
  if (dn) return ut;
  dn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ kt(), r = {}, n = /* @__PURE__ */ kn();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, g, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (n(o, f)) {
          var u;
          try {
            if (typeof o[f] != "function") {
              var c = Error(
                (g || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw c.name = "Invariant Violation", c;
            }
            u = o[f](s, f, g, i, null, t);
          } catch (b) {
            u = b;
          }
          if (u && !(u instanceof Error) && e(
            (g || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + i + " type: " + u.message + (v ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ut = a, ut;
}
var dt, fn;
function kr() {
  if (fn) return dt;
  fn = 1;
  var e = _n(), t = Or(), r = /* @__PURE__ */ kt(), n = /* @__PURE__ */ kn(), a = /* @__PURE__ */ _r(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var g = "Warning: " + i;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return dt = function(i, g) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function u(w) {
      var d = w && (l && w[l] || w[f]);
      if (typeof d == "function")
        return d;
    }
    var c = "<<anonymous>>", v = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: j(),
      arrayOf: C,
      element: h(),
      elementType: p(),
      instanceOf: y,
      node: F(),
      objectOf: S,
      oneOf: M,
      oneOfType: H,
      shape: z,
      exact: x
    };
    function b(w, d) {
      return w === d ? w !== 0 || 1 / w === 1 / d : w !== w && d !== d;
    }
    function T(w, d) {
      this.message = w, this.data = d && typeof d == "object" ? d : {}, this.stack = "";
    }
    T.prototype = Error.prototype;
    function R(w) {
      if (process.env.NODE_ENV !== "production")
        var d = {}, _ = 0;
      function D(G, W, $, q, K, X, ce) {
        if (q = q || c, X = X || $, ce !== r) {
          if (g) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = q + ":" + $;
            !d[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), d[de] = !0, _++);
          }
        }
        return W[$] == null ? G ? W[$] === null ? new T("The " + K + " `" + X + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new T("The " + K + " `" + X + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : w(W, $, q, K, X);
      }
      var I = D.bind(null, !1);
      return I.isRequired = D.bind(null, !0), I;
    }
    function L(w) {
      function d(_, D, I, G, W, $) {
        var q = _[D], K = k(q);
        if (K !== w) {
          var X = Y(q);
          return new T(
            "Invalid " + G + " `" + W + "` of type " + ("`" + X + "` supplied to `" + I + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return R(d);
    }
    function j() {
      return R(s);
    }
    function C(w) {
      function d(_, D, I, G, W) {
        if (typeof w != "function")
          return new T("Property `" + W + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var $ = _[D];
        if (!Array.isArray($)) {
          var q = k($);
          return new T("Invalid " + G + " `" + W + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an array."));
        }
        for (var K = 0; K < $.length; K++) {
          var X = w($, K, I, G, W + "[" + K + "]", r);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return R(d);
    }
    function h() {
      function w(d, _, D, I, G) {
        var W = d[_];
        if (!i(W)) {
          var $ = k(W);
          return new T("Invalid " + I + " `" + G + "` of type " + ("`" + $ + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(w);
    }
    function p() {
      function w(d, _, D, I, G) {
        var W = d[_];
        if (!e.isValidElementType(W)) {
          var $ = k(W);
          return new T("Invalid " + I + " `" + G + "` of type " + ("`" + $ + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(w);
    }
    function y(w) {
      function d(_, D, I, G, W) {
        if (!(_[D] instanceof w)) {
          var $ = w.name || c, q = se(_[D]);
          return new T("Invalid " + G + " `" + W + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return R(d);
    }
    function M(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function d(_, D, I, G, W) {
        for (var $ = _[D], q = 0; q < w.length; q++)
          if (b($, w[q]))
            return null;
        var K = JSON.stringify(w, function(ce, B) {
          var de = Y(B);
          return de === "symbol" ? String(B) : B;
        });
        return new T("Invalid " + G + " `" + W + "` of value `" + String($) + "` " + ("supplied to `" + I + "`, expected one of " + K + "."));
      }
      return R(d);
    }
    function S(w) {
      function d(_, D, I, G, W) {
        if (typeof w != "function")
          return new T("Property `" + W + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var $ = _[D], q = k($);
        if (q !== "object")
          return new T("Invalid " + G + " `" + W + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an object."));
        for (var K in $)
          if (n($, K)) {
            var X = w($, K, I, G, W + "." + K, r);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return R(d);
    }
    function H(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var d = 0; d < w.length; d++) {
        var _ = w[d];
        if (typeof _ != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(_) + " at index " + d + "."
          ), s;
      }
      function D(I, G, W, $, q) {
        for (var K = [], X = 0; X < w.length; X++) {
          var ce = w[X], B = ce(I, G, W, $, q, r);
          if (B == null)
            return null;
          B.data && n(B.data, "expectedType") && K.push(B.data.expectedType);
        }
        var de = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new T("Invalid " + $ + " `" + q + "` supplied to " + ("`" + W + "`" + de + "."));
      }
      return R(D);
    }
    function F() {
      function w(d, _, D, I, G) {
        return O(d[_]) ? null : new T("Invalid " + I + " `" + G + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return R(w);
    }
    function V(w, d, _, D, I) {
      return new T(
        (w || "React class") + ": " + d + " type `" + _ + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function z(w) {
      function d(_, D, I, G, W) {
        var $ = _[D], q = k($);
        if (q !== "object")
          return new T("Invalid " + G + " `" + W + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var K in w) {
          var X = w[K];
          if (typeof X != "function")
            return V(I, G, W, K, Y(X));
          var ce = X($, K, I, G, W + "." + K, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return R(d);
    }
    function x(w) {
      function d(_, D, I, G, W) {
        var $ = _[D], q = k($);
        if (q !== "object")
          return new T("Invalid " + G + " `" + W + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        var K = t({}, _[D], w);
        for (var X in K) {
          var ce = w[X];
          if (n(w, X) && typeof ce != "function")
            return V(I, G, W, X, Y(ce));
          if (!ce)
            return new T(
              "Invalid " + G + " `" + W + "` key `" + X + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(_[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var B = ce($, X, I, G, W + "." + X, r);
          if (B)
            return B;
        }
        return null;
      }
      return R(d);
    }
    function O(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(O);
          if (w === null || i(w))
            return !0;
          var d = u(w);
          if (d) {
            var _ = d.call(w), D;
            if (d !== w.entries) {
              for (; !(D = _.next()).done; )
                if (!O(D.value))
                  return !1;
            } else
              for (; !(D = _.next()).done; ) {
                var I = D.value;
                if (I && !O(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(w, d) {
      return w === "symbol" ? !0 : d ? d["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && d instanceof Symbol : !1;
    }
    function k(w) {
      var d = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : A(d, w) ? "symbol" : d;
    }
    function Y(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var d = k(w);
      if (d === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return d;
    }
    function te(w) {
      var d = Y(w);
      switch (d) {
        case "array":
        case "object":
          return "an " + d;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + d;
        default:
          return d;
      }
    }
    function se(w) {
      return !w.constructor || !w.constructor.name ? c : w.constructor.name;
    }
    return v.checkPropTypes = a, v.resetWarningCache = a.resetWarningCache, v.PropTypes = v, v;
  }, dt;
}
var ft, pn;
function Nr() {
  if (pn) return ft;
  pn = 1;
  var e = /* @__PURE__ */ kt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ft = function() {
    function n(s, i, g, l, f, u) {
      if (u !== e) {
        var c = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw c.name = "Invariant Violation", c;
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
  }, ft;
}
var gn;
function Pr() {
  if (gn) return Ye.exports;
  if (gn = 1, process.env.NODE_ENV !== "production") {
    var e = _n(), t = !0;
    Ye.exports = /* @__PURE__ */ kr()(e.isElement, t);
  } else
    Ye.exports = /* @__PURE__ */ Nr()();
  return Ye.exports;
}
var Mr = /* @__PURE__ */ Pr();
const E = /* @__PURE__ */ mr(Mr), Nn = {
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
}, Lr = [
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
], nt = "16px", Ir = (e) => Math.round(e * 96 / 72), Hr = (e) => Math.round(e * 72 / 96 * 2) / 2, Oa = (e) => {
  const t = Object.values(Nn).find((r) => r.pt === e);
  return t ? `${t.px}px` : `${Ir(e)}px`;
}, _a = (e) => {
  const t = parseInt(e), r = Object.values(Nn).find((n) => n.px === t);
  return r ? r.pt : Hr(t);
}, ka = (e) => {
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
}, Dr = {
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
}, hn = {
  bold: !1,
  italic: !1,
  underline: !1,
  strikethrough: !1,
  alignLeft: !1,
  alignCenter: !1,
  alignRight: !1,
  alignJustify: !1,
  fontFamily: "Arial",
  fontSize: nt,
  headingLevel: "p"
  // Add heading level tracking
}, Br = () => {
  const [e, t] = oe(hn), r = we(), n = N((c, v, b = null) => {
    try {
      const T = window.getSelection();
      if (!T || T.rangeCount === 0)
        return !1;
      const R = T.getRangeAt(0);
      if (!R.toString())
        return t((j) => ({ ...j, [c]: v })), !1;
      try {
        const j = document.createElement("span");
        j.style[c] = v;
        const C = R.extractContents();
        return j.appendChild(C), R.insertNode(j), R.selectNodeContents(j), T.removeAllRanges(), T.addRange(R), t((h) => ({ ...h, [c]: v })), !0;
      } catch {
        if (b) {
          const j = c === "fontSize" ? Dr[v] || "3" : v;
          return document.execCommand(b, !1, j), t((C) => ({ ...C, [c]: v })), !0;
        }
        return !1;
      }
    } catch (T) {
      return console.warn(`[useFormatting] Style application failed for ${c}:`, T), !1;
    }
  }, []), a = N((c) => n("fontFamily", c, "fontName"), [n]), o = N((c) => n("fontSize", c, "fontSize"), [n]), s = N((c) => {
    t((v) => ({
      ...v,
      alignLeft: c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify"
    }));
  }, []), i = N((c) => {
    try {
      const v = window.getSelection();
      if (!v || v.rangeCount === 0)
        return !1;
      const b = v.getRangeAt(0), T = b.toString(), L = {
        justifyLeft: "left",
        justifyCenter: "center",
        justifyRight: "right",
        justifyFull: "justify"
      }[c];
      if (!L)
        return !1;
      if (!T) {
        const C = b.startContainer, h = C.nodeType === Node.TEXT_NODE ? C.parentElement : C, p = Le(h) || zr();
        return p && (p.style.textAlign = L, s(L)), !0;
      }
      const j = jr(b);
      if (j.length === 0) {
        const C = document.createElement("p");
        C.style.textAlign = L;
        const h = b.extractContents();
        C.appendChild(h), b.insertNode(C), b.selectNodeContents(C), v.removeAllRanges(), v.addRange(b);
      } else
        j.forEach((C) => {
          C.style.textAlign = L;
        });
      return s(L), !0;
    } catch (v) {
      return console.warn("[useFormatting] Text alignment failed:", v), !1;
    }
  }, [s]), g = N((c) => {
    try {
      const v = window.getSelection();
      if (!v || v.rangeCount === 0)
        return !1;
      const b = v.getRangeAt(0), T = document.createElement("div");
      if (T.innerHTML = c, Array.from(T.children).some(
        (L) => ["TABLE", "UL", "OL", "BLOCKQUOTE", "PRE", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(L.tagName)
      )) {
        const L = b.startContainer, j = L.nodeType === Node.TEXT_NODE ? L.parentElement : L, C = Le(j);
        if (C && ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(C.tagName)) {
          const h = C.tagName.toLowerCase();
          if (b.startOffset === 0 && (L === C || L.nodeType === Node.TEXT_NODE && L === C.firstChild))
            C.parentNode.insertBefore(T, C);
          else if (b.startOffset === L.textContent?.length && L === C.lastChild && b.endOffset === L.textContent?.length) {
            const M = C.nextSibling;
            M ? C.parentNode.insertBefore(T, M) : C.parentNode.appendChild(T);
          } else {
            const M = b.extractContents(), S = document.createTextNode(""), H = document.createElement(h);
            H.appendChild(S), H.appendChild(M);
            const F = C.parentNode;
            F.insertBefore(T, C.nextSibling), F.insertBefore(H, T.nextSibling), !C.textContent.trim() && C.children.length === 0 && F.removeChild(C);
          }
        } else
          b.insertNode(T);
        b.setStartAfter(T), b.setEndAfter(T), v.removeAllRanges(), v.addRange(b);
      } else
        document.execCommand("insertHTML", !1, c);
      return !0;
    } catch (v) {
      console.warn("[useFormatting] InsertHTML failed:", v);
      try {
        return document.execCommand("insertHTML", !1, c), !0;
      } catch (b) {
        return console.warn("[useFormatting] InsertHTML fallback also failed:", b), !1;
      }
    }
  }, []), l = N((c, v = null) => {
    try {
      if (c === "undo") {
        r.undo();
        return;
      }
      if (c === "redo") {
        r.redo();
        return;
      }
      if (typeof document.execCommand != "function") {
        console.warn("[useFormatting] execCommand not supported");
        return;
      }
      if (c === "insertHTML" && v) {
        g(v);
        return;
      }
      if (c === "fontSize") {
        o(v);
        return;
      }
      if (c === "fontName") {
        a(v);
        return;
      }
      if (["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"].includes(c)) {
        i(c);
        return;
      }
      switch (document.execCommand(c, !1, v) || console.warn(`[useFormatting] Command "${c}" failed`), c) {
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
          t((T) => ({ ...T, headingLevel: v }));
          break;
        default:
          break;
      }
    } catch (b) {
      console.warn(`[useFormatting] Error executing command "${c}":`, b);
    }
  }, [o, a, i, g, r]), f = N(() => {
    try {
      const c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const v = c.getRangeAt(0), b = v.toString();
      let T = nt, R = "Arial", L = "p", j = "left";
      if (b) {
        const h = v.startContainer, p = h.nodeType === Node.TEXT_NODE ? h.parentElement : h;
        if (p) {
          const y = window.getComputedStyle(p), M = y.fontSize, S = y.fontFamily;
          M && M.endsWith("px") && (T = M), S && S !== "serif" && (R = S.split(",")[0].replace(/['"]/g, "").trim());
          const H = Le(p);
          if (H) {
            const F = H.tagName?.toLowerCase();
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(F) && (L = F);
            const z = window.getComputedStyle(H).textAlign;
            ["left", "center", "right", "justify"].includes(z) && (j = z);
          }
        }
      }
      const C = {
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikethrough: document.queryCommandState("strikethrough"),
        alignLeft: j === "left",
        alignCenter: j === "center",
        alignRight: j === "right",
        alignJustify: j === "justify",
        fontFamily: R,
        fontSize: T,
        headingLevel: L
      };
      t((h) => ({
        ...h,
        ...C
      }));
    } catch (c) {
      console.warn("[useFormatting] Error updating format from selection:", c);
    }
  }, []), u = N(() => {
    t(hn);
  }, []);
  return {
    currentFormat: e,
    formatText: l,
    resetFormat: u,
    updateCurrentFormatFromSelection: f
  };
};
function Le(e) {
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
function jr(e) {
  const t = [], r = e.startContainer, n = e.endContainer, a = Le(
    r.nodeType === Node.TEXT_NODE ? r.parentElement : r
  ), o = Le(
    n.nodeType === Node.TEXT_NODE ? n.parentElement : n
  );
  if (a === o && a)
    return [a];
  const s = document.createTreeWalker(
    e.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (g) => {
        const l = g.tagName?.toLowerCase();
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(l) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }
  );
  let i = s.nextNode();
  for (; i; )
    e.intersectsNode(i) && t.push(i), i = s.nextNode();
  return t;
}
function zr() {
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
const ve = 'page-break, [data-page-break="true"]', Pn = (e) => Oe[e] || Oe.A4, $r = (e, t = {}) => {
  if (!e || typeof document > "u")
    return [];
  const r = t.pageSize || "A4", n = Pn(r), a = e.querySelectorAll(ve), o = [];
  o.push({
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: n.height
  });
  const s = e.getBoundingClientRect(), i = e.scrollTop;
  return a.forEach((g, l) => {
    const u = g.getBoundingClientRect().top - s.top + i;
    o.push({
      id: `page-${l + 1}`,
      pageNumber: l + 2,
      top: u,
      height: n.height
    });
  }), o;
}, Mn = (e, t = 100, r = he) => {
  const n = Pn(e), a = wr(r), o = n.height - a, s = t / 100;
  return o / s;
}, Ur = (e, t) => {
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
}, mn = (e) => {
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
}, Fr = (e) => {
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
}, Wr = (e, t) => {
  if (!e)
    return !1;
  try {
    const r = document.createElement("page-break");
    return r.setAttribute("data-page-break", "true"), r.setAttribute("contenteditable", "false"), r.setAttribute("data-page-number", t || "2"), e.parentNode.insertBefore(r, e), !0;
  } catch (r) {
    return console.warn("[insertPageBreakBefore] Failed to insert page break:", r), !1;
  }
}, qr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  try {
    const g = Mn(r, n, a) * (t - 1), l = Array.from(e.children);
    let f = 0, u = null;
    for (let c = 0; c < l.length; c++) {
      const v = l[c];
      if (v.tagName === "PAGE-BREAK" || v.getAttribute("data-page-break") === "true")
        continue;
      const b = Fr(v);
      if (f + b > g) {
        u = v;
        break;
      }
      f += b;
    }
    if (u) {
      const c = document.createElement("page-break");
      if (c.setAttribute("data-page-break", "true"), c.setAttribute("contenteditable", "false"), c.setAttribute("data-page-number", String(t)), u.parentNode.insertBefore(c, u), o) {
        const v = e.innerHTML;
        o(v);
      }
      return s && setTimeout(() => {
        s();
      }, 50), !0;
    } else {
      const c = document.createElement("page-break");
      c.setAttribute("data-page-break", "true"), c.setAttribute("contenteditable", "false"), c.setAttribute("data-page-number", String(t)), e.appendChild(c);
      const v = document.createElement("p");
      if (v.innerHTML = "<br>", e.appendChild(v), o) {
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
}, Gr = (e, t, r, n, a, o, s) => {
  if (!e)
    return !1;
  if (r().length <= 1)
    return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
  try {
    const g = Array.from(e.querySelectorAll(ve));
    if (t > g.length)
      return console.warn("[removePageAndContent] Invalid page index"), !1;
    const l = window.getSelection();
    let f = !1, u = [], c = null;
    if (t === 0) {
      const b = g[0];
      if (!b)
        return console.warn("[removePageAndContent] No page break found for first page"), !1;
      let T = e.firstChild;
      for (; T && T !== b; )
        u.push(T), T = T.nextSibling;
      c = b;
    } else {
      const b = g[t - 1];
      if (!b)
        return console.warn("[removePageAndContent] Page break not found"), !1;
      const T = g[t];
      let R = b.nextSibling;
      for (; R && R !== T; )
        u.push(R), R = R.nextSibling;
      c = b;
    }
    if (l && l.rangeCount > 0) {
      const T = l.getRangeAt(0).startContainer;
      for (const R of u)
        if (R.contains(T) || R === T) {
          f = !0;
          break;
        }
    }
    if (c && c.parentNode && c.remove(), u.forEach((b) => {
      b.parentNode && b.remove();
    }), e.querySelectorAll(ve).forEach((b, T) => {
      b.setAttribute("data-page-number", String(T + 2));
    }), f && o && setTimeout(() => {
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
  } catch (g) {
    return console.error("[removePageAndContent] Failed to remove page:", g), !1;
  }
}, Zr = (e) => {
  if (e)
    try {
      e.querySelectorAll(ve).forEach((r, n) => {
        r.setAttribute("data-page-number", String(n + 2));
      });
    } catch (t) {
      console.error("[renumberPageBreaks] Failed to renumber page breaks:", t);
    }
}, Yr = (e, t, r, n, a) => {
  if (!e || !t)
    return !1;
  try {
    if (e.remove(), Zr(t), r) {
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
}, Vr = 200, Kr = 50, yn = 3, Xr = 20, Ln = (e) => {
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
}, Jr = (e, t) => {
  if (!e || e.length === 0)
    return null;
  let r = 0, n = null;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (!o || !o.getBoundingClientRect)
      continue;
    const s = Ln(o);
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
}, Qr = (e, t, r, n, a, o, s, i) => {
  if (!e || s.current)
    return !1;
  try {
    s.current = !0;
    const g = Mn(t, r, n);
    let l = mn(e), f = !1, u = 0;
    for (let c = 0; c < l.length && u < yn; c++) {
      const v = l[c], b = Jr(v, g);
      if (b && b.overflowIndex > 0) {
        let T = 0;
        for (let C = 0; C < v.length; C++) {
          const h = v[C];
          h && h.getBoundingClientRect && (T += Ln(h));
        }
        if (T - g < Xr)
          continue;
        const L = c + 2;
        Wr(b.overflowElement, L) && (f = !0, u++, l = mn(e));
      }
    }
    if (f) {
      if (a) {
        const c = e.innerHTML;
        a(c);
      }
      setTimeout(() => {
        o && o(), u >= yn && i && setTimeout(() => {
          s.current || i();
        }, 100);
      }, Kr);
    }
    return f;
  } catch (g) {
    return console.warn("[checkAndReflow] Reflow failed:", g), !1;
  } finally {
    s.current = !1;
  }
}, eo = (e, t, r = Vr) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e();
  }, r);
}, to = 400, In = (e, t) => {
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
}, no = (e, t, r, n) => {
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
        n ? n(r) : In(t, r);
      }, to);
    }
  } catch (a) {
    console.error("[scrollToPage] Error:", a);
  }
}, ro = (e, t, r = {}, n = 300) => {
  t.current && clearTimeout(t.current), t.current = setTimeout(() => {
    t.current = null, e(r);
  }, Math.max(0, n));
}, oo = (e) => {
  if (!e) return null;
  const t = window.getSelection();
  if (t.rangeCount === 0) return null;
  const r = t.getRangeAt(0);
  if (!e.contains(r.commonAncestorContainer)) return null;
  let n = 1;
  const a = e.querySelectorAll(ve);
  for (const f of a)
    if (r.comparePoint(f, 0) > 0)
      n++;
    else
      break;
  const o = document.createRange();
  o.setStart(e, 0), o.setEnd(r.startContainer, r.startOffset);
  const i = o.toString().replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(), g = i.length, l = (i.match(/\n/g) || []).length + 1;
  return {
    page: n,
    line: l,
    charOffset: g
  };
}, so = 300, ao = (e, t, r = 100, n = "NARROW") => {
  const a = we(), o = ee(null), s = ee(null), i = ee(e), g = ee(r), l = ee(n), f = ee(!1);
  ae(() => {
    i.current = e;
  }, [e]), ae(() => {
    g.current = r;
  }, [r]), ae(() => {
    l.current = n;
  }, [n]), ae(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []);
  const u = N((y = {}) => t?.current ? $r(t.current, y) : [], [t]), c = N((y = {}) => {
    const M = u(y);
    return a.updatePageBoundaries(M), M;
  }, [u, a]), v = N((y = {}) => {
    const M = typeof y.delay == "number" ? y.delay : so;
    ro(c, o, y, M);
  }, [c]), b = N(() => {
    t?.current && Qr(
      t.current,
      i.current,
      g.current,
      l.current,
      a.updateContinuousContent,
      c,
      f,
      b
    );
  }, [t, a, c]), T = N((y) => {
    eo(b, s, y);
  }, [b]), R = N((y) => !y?.current || !t?.current ? 0 : Ur(y.current, t.current), [t]), L = N((y) => {
    t?.current && In(t.current, y);
  }, [t]), j = N((y, M) => {
    if (!M?.current || !t?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    no(M.current, t.current, y, L);
  }, [t, L]), C = N(async (y) => t?.current ? qr(
    t.current,
    y,
    i.current,
    g.current,
    l.current,
    a.updateContinuousContent,
    c
  ) : !1, [t, a, c]), h = N((y) => t?.current ? Gr(
    t.current,
    y,
    u,
    a.updateContinuousContent,
    c,
    L,
    b
  ) : !1, [t, u, a, c, L, b]), p = N((y) => t?.current ? Yr(
    y,
    t.current,
    a.updateContinuousContent,
    c,
    b
  ) : !1, [t, a, c, b]);
  return ae(() => () => {
    o.current && clearTimeout(o.current), s.current && clearTimeout(s.current);
  }, []), Te(() => ({
    calculatePageBoundaries: u,
    checkAndUpdateBoundaries: v,
    updateBoundaries: c,
    getCurrentPage: R,
    scrollToPage: j,
    positionCursorAtPage: L,
    checkAndReflow: b,
    triggerAutoReflow: T,
    removePageAndContent: h,
    removePageBreak: p,
    insertPageBreakAtBoundary: C,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: s
  }), [
    u,
    v,
    c,
    R,
    j,
    L,
    b,
    T,
    h,
    p,
    C
  ]);
}, _e = {
  minWidth: 50,
  minHeight: 50,
  maxWidth: 800,
  maxHeight: 600,
  aspectRatio: !0,
  preserveAspectRatio: !0,
  defaultWidth: 300,
  defaultHeight: 200
}, U = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};
function Na({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = _e
}) {
  const g = n - t, l = a - r;
  let f = o, u = s;
  switch (e) {
    case U.TOP_LEFT:
      f = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s - l);
      break;
    case U.TOP_RIGHT:
      f = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s - l);
      break;
    case U.BOTTOM_LEFT:
      f = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s + l);
      break;
    case U.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s + l);
      break;
    case U.TOP:
      u = Math.max(i.minHeight, s - l);
      break;
    case U.BOTTOM:
      u = Math.max(i.minHeight, s + l);
      break;
    case U.LEFT:
      f = Math.max(i.minWidth, o - g);
      break;
    case U.RIGHT:
      f = Math.max(i.minWidth, o + g);
      break;
    default:
      return { width: f, height: u };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const c = o / s;
    [
      U.TOP_LEFT,
      U.TOP_RIGHT,
      U.BOTTOM_LEFT,
      U.BOTTOM_RIGHT
    ].includes(e) ? f / c > u ? u = Math.max(i.minHeight, f / c) : f = Math.max(i.minWidth, u * c) : [U.TOP, U.BOTTOM].includes(e) ? f = u * c : [U.LEFT, U.RIGHT].includes(e) && (u = f / c);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (u = f / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = u * (o / s))), f = Math.max(i.minWidth, f), u = Math.max(i.minHeight, u), {
    width: Math.round(f),
    height: Math.round(u)
  };
}
function be(e) {
  return e ? !!(e.tagName === "IMG" || e.tagName === "DIV" && e.style.backgroundImage && e.style.backgroundImage !== "none") : !1;
}
function Pa(e) {
  return be(e) ? {
    width: e.offsetWidth,
    height: e.offsetHeight
  } : { width: 0, height: 0 };
}
function Ma(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function io(e, t = _e) {
  if (!be(e)) return null;
  const r = document.createElement("div");
  r.className = "image-resize-overlay", r.style.position = "fixed", r.style.zIndex = "1000", r.style.pointerEvents = "none";
  const n = e.getBoundingClientRect();
  return r.style.top = `${n.top}px`, r.style.left = `${n.left}px`, r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, Object.values(U).forEach((o) => {
    const s = document.createElement("div");
    s.className = `resize-handler resize-handler-${o}`, s.dataset.handler = o, s.style.position = "absolute", s.style.width = "10px", s.style.height = "10px", s.style.backgroundColor = "#007bff", s.style.border = "2px solid white", s.style.borderRadius = "50%", s.style.boxShadow = "0 0 3px rgba(0,0,0,0.3)", s.style.cursor = co(o), s.style.pointerEvents = "all", Hn(s, o, n.width, n.height), r.appendChild(s);
  }), r;
}
function co(e) {
  switch (e) {
    case U.TOP_LEFT:
    case U.BOTTOM_RIGHT:
      return "nwse-resize";
    case U.TOP_RIGHT:
    case U.BOTTOM_LEFT:
      return "nesw-resize";
    case U.TOP:
    case U.BOTTOM:
      return "ns-resize";
    case U.LEFT:
    case U.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function Hn(e, t, r, n) {
  switch (t) {
    case U.TOP_LEFT:
      e.style.top = "-5px", e.style.left = "-5px";
      break;
    case U.TOP_RIGHT:
      e.style.top = "-5px", e.style.right = "-5px";
      break;
    case U.BOTTOM_LEFT:
      e.style.bottom = "-5px", e.style.left = "-5px";
      break;
    case U.BOTTOM_RIGHT:
      e.style.bottom = "-5px", e.style.right = "-5px";
      break;
    case U.TOP:
      e.style.top = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case U.BOTTOM:
      e.style.bottom = "-5px", e.style.left = `${r / 2 + -5}px`;
      break;
    case U.LEFT:
      e.style.top = `${n / 2 + -5}px`, e.style.left = "-5px";
      break;
    case U.RIGHT:
      e.style.top = `${n / 2 + -5}px`, e.style.right = "-5px";
      break;
  }
}
function xt(e, t) {
  if (!e || !t) return;
  const r = t.getBoundingClientRect();
  e.style.top = `${r.top}px`, e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.height = `${r.height}px`, e.querySelectorAll(".resize-handler").forEach((a) => {
    const o = a.dataset.handler;
    Hn(a, o, r.width, r.height);
  });
}
function pt(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
const lo = "html-editor-storage", uo = 1, pe = "images";
function fo() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function De() {
  return new Promise((e, t) => {
    const r = indexedDB.open(lo, uo);
    r.onerror = () => {
      t(new Error("Failed to open IndexedDB database"));
    }, r.onsuccess = () => {
      e(r.result);
    }, r.onupgradeneeded = (n) => {
      const a = n.target.result;
      a.objectStoreNames.contains(pe) || a.createObjectStore(pe, { keyPath: "key" }).createIndex("timestamp", "timestamp", { unique: !1 });
    };
  });
}
function po(e) {
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
      const s = o.target.result, g = s.split(",")[1].length * 3 / 4;
      if (g > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const l = await De(), f = `editor-image-${fo()}`, c = l.transaction([pe], "readwrite").objectStore(pe), v = {
          key: f,
          dataUrl: s,
          size: g,
          type: e.type,
          timestamp: Date.now()
        }, b = c.add(v);
        b.onsuccess = () => {
          l.close(), t(f);
        }, b.onerror = () => {
          l.close(), r(new Error("Failed to save image to IndexedDB"));
        };
      } catch (l) {
        r(l);
      }
    }, a.onerror = () => {
      r(new Error("Error reading image file"));
    }, a.readAsDataURL(e);
  });
}
async function go(e) {
  try {
    const t = await De();
    return new Promise((r, n) => {
      const s = t.transaction([pe], "readonly").objectStore(pe).get(e);
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
async function ho(e) {
  try {
    const t = await De();
    return new Promise((r, n) => {
      const s = t.transaction([pe], "readwrite").objectStore(pe).delete(e);
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
async function La() {
  try {
    const e = await De();
    return new Promise((t, r) => {
      const o = e.transaction([pe], "readwrite").objectStore(pe).clear();
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
async function Ia() {
  try {
    const e = await De();
    return new Promise((t, r) => {
      const o = e.transaction([pe], "readonly").objectStore(pe).getAllKeys();
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
const Dn = [
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
], mo = [
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
], yo = ["BR", "HR", "IMG", "INPUT", "PAGE-BREAK"];
function bo(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
function Bn(e) {
  const t = [];
  for (let r = 0; r < e.attributes.length; r++) {
    const n = e.attributes[r];
    t.push(` ${n.name}="${n.value}"`);
  }
  return t.join("");
}
function Je(e) {
  if (!e || typeof e != "string")
    return "<p><br></p>";
  const t = e.trim();
  if (!t)
    return "<p><br></p>";
  const r = document.createElement("div");
  return r.innerHTML = t, Ie(r) || "<p><br></p>";
}
function To(e) {
  const t = e.cloneNode(!0);
  return t.querySelectorAll(":scope > p").forEach((n) => {
    for (; n.firstChild; )
      t.insertBefore(n.firstChild, n);
    n.remove();
  }), t.innerHTML;
}
function vo(e) {
  const t = Array.from(e.children);
  return t.length === 0 ? !1 : t.every((r) => Dn.includes(r.tagName));
}
function wo(e) {
  const t = [];
  let r = !1;
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE)
      n.textContent.trim() && (r = !0);
    else if (n.nodeType === Node.ELEMENT_NODE) {
      const a = n;
      Dn.includes(a.tagName) ? t.push(a.outerHTML) : r = !0;
    }
  }), r ? e.outerHTML : t.join("");
}
function Ie(e) {
  const t = [], r = Array.from(e.childNodes);
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    if (a.nodeType === Node.TEXT_NODE) {
      const o = a.textContent.trim();
      o && t.push(`<p>${bo(o)}</p>`);
    } else if (a.nodeType === Node.ELEMENT_NODE) {
      const o = a, s = o.tagName, i = s.toLowerCase(), g = Bn(o);
      if (s === "DIV") {
        const l = Ie(o);
        l.trim() ? t.push(l) : t.push("<p><br></p>");
      } else if (s === "P")
        vo(o) ? t.push(wo(o)) : t.push(o.outerHTML);
      else if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(s)) {
        const l = To(o);
        t.push(`<${i}${g}>${l}</${i}>`);
      } else if (s === "BR")
        t.push("<p><br></p>");
      else if (s === "IMG")
        t.push(o.outerHTML);
      else if (["UL", "OL"].includes(s))
        t.push(Eo(o));
      else if (s === "LI")
        t.push(o.outerHTML);
      else if (s === "TABLE")
        t.push(xo(o));
      else if (["TBODY", "THEAD", "TFOOT", "TR", "TD", "TH"].includes(s))
        t.push(o.outerHTML);
      else if (s === "BLOCKQUOTE") {
        const l = Ie(o);
        t.push(`<blockquote${g}>${l}</blockquote>`);
      } else if (s === "PRE")
        t.push(o.outerHTML);
      else if (mo.includes(s))
        t.push(o.outerHTML);
      else if (s === "PAGE-BREAK" || o.getAttribute("data-page-break") === "true")
        t.push(o.outerHTML);
      else if (s === "HR")
        t.push(o.outerHTML);
      else if (s === "FIGURE")
        t.push(o.outerHTML);
      else if (yo.includes(s))
        t.push(o.outerHTML);
      else {
        const l = Ie(o);
        t.push(`<${i}${g}>${l}</${i}>`);
      }
    }
  }
  return t.length === 0 ? "" : t.join("");
}
function Eo(e) {
  const t = e.tagName.toLowerCase(), r = Bn(e), n = [];
  return Array.from(e.children).forEach((a) => {
    if (a.tagName === "LI")
      n.push(a.outerHTML);
    else {
      const o = Ie(a);
      o.trim() && n.push(`<li>${o}</li>`);
    }
  }), n.length === 0 ? `<${t}${r}><li><br></li></${t}>` : `<${t}${r}>${n.join("")}</${t}>`;
}
function xo(e) {
  return e.outerHTML;
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Co = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), bn = (e) => {
  const t = Co(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, jn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Ro = (e) => {
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
var So = {
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
const Oo = St(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: o,
    iconNode: s,
    ...i
  }, g) => ht(
    "svg",
    {
      ref: g,
      ...So,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: jn("lucide", a),
      ...!o && !Ro(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([l, f]) => ht(l, f)),
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
  const r = St(
    ({ className: n, ...a }, o) => ht(Oo, {
      ref: o,
      iconNode: t,
      className: jn(
        `lucide-${Ao(bn(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return r.displayName = bn(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], ko = J("arrow-down", _o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Po = J("arrow-left", No);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Lo = J("arrow-right", Mo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Ho = J("arrow-up", Io);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Bo = J("bold", Do);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], zo = J("chevron-left", jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Uo = J("chevron-right", $o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Wo = J("file-check", Fo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], et = J("file-text", qo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Zo = J("hash", Go);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], Vo = J("heading-1", Yo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], Xo = J("heading-2", Ko);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], Qo = J("heading-3", Jo);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], ts = J("image-upscale", es);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], rs = J("image", ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], ss = J("italic", os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], is = J("link", as);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], ls = J("list-indent-decrease", cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], ds = J("list-indent-increase", us);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], ps = J("list-ordered", fs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], zn = J("list", gs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ms = J("plus", hs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], bs = J("redo", ys);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], vs = J("scaling", Ts);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Es = J("settings", ws);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], As = J("strikethrough", xs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Rs = J("table", Cs);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Nt = J("text-align-center", Ss);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Pt = J("text-align-end", Os);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], ks = J("text-align-justify", _s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Mt = J("text-align-start", Ns);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], At = J("trash-2", Ps);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Ls = J("underline", Ms);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Hs = J("undo", Is);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Bs = J("x", Ds);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], zs = J("zoom-in", js);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Us = J("zoom-out", $s), Tn = (e, t, r = "") => {
  if (!e) return [];
  const n = document.createElement("div");
  n.innerHTML = e;
  const a = n.querySelectorAll("h1, h2, h3, h4, h5, h6");
  return Array.from(a).map((o, s) => {
    const i = parseInt(o.tagName.charAt(1)), g = o.textContent.trim();
    return g ? {
      id: `${r}heading-${s}`,
      level: i,
      text: g,
      page: t || 1
    } : null;
  }).filter(Boolean);
}, Fs = (e) => {
  if (!e) return 0;
  const t = document.createElement("div");
  return t.innerHTML = e, (t.textContent || t.innerText || "").trim().split(/\s+/).filter((n) => n.length > 0).length;
}, Ws = ({ isCollapsed: e, onToggle: t, wordCount: r, pageCount: n }) => {
  const a = On(), { pages: o, activePage: s, continuousContent: i } = a, { wordCount: g, outline: l } = Te(() => {
    if (r !== void 0 && n !== void 0)
      return {
        wordCount: r,
        outline: Tn(i, 1, "continuous-")
      };
    let u = 0;
    const c = [];
    return o.forEach((v, b) => {
      u += Fs(v.content), c.push(...Tn(v.content, b + 1, `page-${b}-`));
    }), { wordCount: u, outline: c };
  }, [o, r, n, i]), f = n !== void 0 ? n : o.length;
  return /* @__PURE__ */ m.jsxs(
    "aside",
    {
      className: `sidebar ${e ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ m.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ m.jsx(et, { size: 18 }),
            /* @__PURE__ */ m.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: t,
              "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
              title: e ? "Expand sidebar" : "Collapse sidebar",
              children: e ? /* @__PURE__ */ m.jsx(Uo, { size: 16 }) : /* @__PURE__ */ m.jsx(zo, { size: 16 })
            }
          )
        ] }),
        !e && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(Wo, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: f })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(Zo, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: g.toLocaleString() })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ m.jsx(et, { size: 14 }),
                /* @__PURE__ */ m.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ m.jsx("span", { className: "stat-value", children: s + 1 })
            ] })
          ] }),
          l.length > 0 && /* @__PURE__ */ m.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ m.jsxs("h3", { children: [
              /* @__PURE__ */ m.jsx(zn, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ m.jsx("div", { className: "document-outline", "data-testid": "outline", children: l.map((u) => {
              const c = u.level === 1 ? Vo : u.level === 2 ? Xo : Qo;
              return /* @__PURE__ */ m.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${u.level}`,
                  style: { marginLeft: `${(u.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ m.jsx(c, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ m.jsx("span", { className: "outline-text", children: u.text }),
                    /* @__PURE__ */ m.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      u.page
                    ] })
                  ]
                },
                u.id
              );
            }) })
          ] })
        ] })
      ]
    }
  );
};
class qs {
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
const vn = new qs("Editor"), $n = /* @__PURE__ */ new Set(["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE"]), Un = 32;
function Fn(e, t) {
  if (!e) return;
  e.dataset || (e.dataset = {}), e.style || (e.style = {});
  const r = parseInt(e.dataset.indentLevel || "0", 10), n = Math.max(0, t ? r - 1 : r + 1);
  n === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${n * Un}px`, e.dataset.indentLevel = String(n));
}
function Gs(e, t) {
  Fn(e, t);
}
function Zs(e) {
  let t = e;
  for (; t; ) {
    if (t.nodeType === 1 && t.tagName && $n.has(t.tagName.toUpperCase()))
      return t;
    t = t.parentElement || t.parentNode;
  }
  return null;
}
function Ys() {
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
      let l = i.parentElement;
      for (; l && l !== n; ) {
        if (l.tagName && $n.has(l.tagName.toUpperCase())) {
          r.add(l);
          break;
        }
        l = l.parentElement;
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
function Vs(e) {
  if (e.style && e.style.marginLeft && e.style.marginLeft !== "") {
    const t = parseInt(e.dataset.indentLevel || "0", 10), r = Math.max(0, t - 1);
    r === 0 ? (e.style.marginLeft = "", delete e.dataset.indentLevel) : (e.style.marginLeft = `${r * Un}px`, e.dataset.indentLevel = String(r));
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
function Ct(e = !1) {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return !1;
  let r = Ys();
  const n = t.getRangeAt(0);
  if (r.length === 0) {
    const s = Zs(n.startContainer);
    if (!s) return !1;
    r = [s];
  }
  const a = r[0], o = r[r.length - 1];
  r.forEach((s) => {
    if ((s.tagName ? s.tagName.toUpperCase() : "") === "LI") {
      Gs(s, e);
      return;
    }
    e ? Vs(s) : Fn(s, !1);
  });
  try {
    const s = document.createRange(), i = (u) => u.nodeType === Node.TEXT_NODE ? u : document.createTreeWalker(
      u,
      NodeFilter.SHOW_TEXT,
      null
    ).nextNode(), g = (u) => {
      if (u.nodeType === Node.TEXT_NODE)
        return u;
      const c = document.createTreeWalker(
        u,
        NodeFilter.SHOW_TEXT,
        null
      );
      let v = null, b = c.nextNode();
      for (; b; )
        v = b, b = c.nextNode();
      return v;
    }, l = i(a);
    l ? s.setStart(l, 0) : s.setStart(a, 0);
    const f = g(o);
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
function Ks(e) {
  if (e.key !== "Tab") return !1;
  e.preventDefault();
  const t = e.shiftKey, r = window.getSelection(), n = r && r.rangeCount > 0 ? r.getRangeAt(0) : null;
  return r && r.rangeCount > 0 && n && !n.collapsed && Ct(t) || t || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !0;
}
const Xs = [
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
], Js = [
  { value: "p", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" }
], Qs = '<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>', Lt = ({
  currentFormat: e,
  onFormatText: t,
  onAddPageBreak: r,
  canUndo: n = !1,
  canRedo: a = !1
}) => {
  const o = async (l) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(l.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (l.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const u = await po(l), c = await go(u);
      if (c) {
        const b = `<img src="${c}" data-key="${u}" alt="Inserted image" />`;
        document.execCommand("insertHTML", !1, b), vn.info("Image inserted", { key: u });
      }
      const v = document.getElementById("image-upload");
      v && (v.value = "");
    } catch (f) {
      vn.error("Error uploading image", f);
    }
  }, s = (l, f, u, c) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: () => t(l),
      className: e[f] ? "active" : "",
      title: c,
      children: /* @__PURE__ */ m.jsx(u, { size: 16 })
    },
    l
  ), i = (l, f, u, c = !1) => /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: l,
      disabled: c,
      title: u,
      style: { opacity: c ? 0.5 : 1 },
      children: /* @__PURE__ */ m.jsx(f, { size: 16 })
    },
    u
  ), g = () => /* @__PURE__ */ m.jsx("div", { className: "toolbar-separator" });
  return /* @__PURE__ */ m.jsxs("div", { className: "editor-toolbar", children: [
    i(() => t("undo"), Hs, "Undo", !n),
    i(() => t("redo"), bs, "Redo", !a),
    g(),
    s("bold", "bold", Bo, "Bold"),
    s("italic", "italic", ss, "Italic"),
    s("underline", "underline", Ls, "Underline"),
    s("strikethrough", "strikethrough", As, "Strikethrough"),
    g(),
    s("justifyLeft", "alignLeft", Mt, "Align Left"),
    s("justifyCenter", "alignCenter", Nt, "Align Center"),
    s("justifyRight", "alignRight", Pt, "Align Right"),
    s("justifyFull", "alignJustify", ks, "Justify"),
    g(),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("fontName", l.target.value),
        value: e.fontFamily || "Segoe UI",
        title: "Font Family",
        children: Xs.map(({ value: l, label: f }) => /* @__PURE__ */ m.jsx("option", { value: l, children: f }, l))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("fontSize", l.target.value),
        value: e.fontSize || nt,
        title: "Font Size",
        children: Lr.map(({ value: l, label: f }) => /* @__PURE__ */ m.jsx("option", { value: l, children: f }, l))
      }
    ),
    /* @__PURE__ */ m.jsx(
      "select",
      {
        onChange: (l) => t("formatBlock", l.target.value),
        value: e.headingLevel || "p",
        title: "Heading Level",
        children: Js.map(({ value: l, label: f }) => /* @__PURE__ */ m.jsx("option", { value: l, children: f }, l))
      }
    ),
    g(),
    i(() => t("insertUnorderedList"), zn, "Bullet List"),
    i(() => t("insertOrderedList"), ps, "Numbered List"),
    g(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          Ct(!1) || document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;");
        },
        title: "Increase Indent (Tab)",
        children: /* @__PURE__ */ m.jsx(ds, { size: 16 })
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          Ct(!0);
        },
        title: "Decrease Indent (Shift+Tab)",
        children: /* @__PURE__ */ m.jsx(ls, { size: 16 })
      }
    ),
    g(),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && t("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ m.jsx(is, { size: 16 })
      }
    ),
    i(() => t("insertHTML", Qs), Rs, "Insert Table"),
    r && i(r, et, "Insert Page Break"),
    g(),
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && o(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ m.jsx(rs, { size: 16 })
      }
    )
  ] });
};
Lt.propTypes = {
  currentFormat: E.shape({
    bold: E.bool,
    italic: E.bool,
    underline: E.bool,
    strikethrough: E.bool,
    alignLeft: E.bool,
    alignCenter: E.bool,
    alignRight: E.bool,
    alignJustify: E.bool,
    fontFamily: E.string,
    fontSize: E.string,
    headingLevel: E.string
  }).isRequired,
  onFormatText: E.func.isRequired,
  onAddPageBreak: E.func,
  canUndo: E.bool,
  canRedo: E.bool
};
Lt.defaultProps = {
  onAddPageBreak: void 0,
  canUndo: !1,
  canRedo: !1
};
function ea(e) {
  return !e || typeof e != "string" ? e : Je(e);
}
function ta(e) {
  e.preventDefault();
  const t = e.clipboardData || window.clipboardData;
  if (!t)
    return null;
  let r = t.getData("text/html") || t.getData("text/plain");
  return r ? (t.getData("text/html") ? r = ea(r) : r = na(r), document.execCommand("insertHTML", !1, r), r) : null;
}
function na(e) {
  if (!e) return "";
  const t = e.split(/\n\s*\n/).filter((r) => r.trim());
  return t.length === 0 ? "<p><br></p>" : t.map((r) => {
    const n = r.split(`
`).filter((o) => o.trim());
    return n.length === 0 ? "<p><br></p>" : `<p>${n.map((o) => ra(o.trim())).join("<br>")}</p>`;
  }).join("");
}
function ra(e) {
  const t = document.createElement("div");
  return t.textContent = e, t.innerHTML;
}
const xe = (e) => e ? e.nodeType === Node.ELEMENT_NODE ? e.tagName === "PAGE-BREAK" || e.getAttribute("data-page-break") === "true" : e.parentElement && xe(e.parentElement) : !1, It = ({
  dimensions: e,
  editorRef: t,
  onInput: r,
  onContentChange: n,
  onKeyDown: a,
  onClick: o,
  onScroll: s,
  onPaste: i,
  onRemovePageBreak: g,
  zoomLevel: l = 100,
  pageMargins: f = he
}) => {
  const u = Te(() => xn(f), [f]), c = l / 100, v = N((h, p) => {
    if (!h) return !1;
    const y = h.getBoundingClientRect(), M = p - y.top;
    return M < u.top || M > y.height - u.bottom;
  }, [u.top, u.bottom]), b = N((h, p) => {
    p.preventDefault();
    const y = h.getBoundingClientRect(), M = p.clientX - y.left, S = p.clientY - y.top, H = y.width - 40, F = -12, V = y.width - 20;
    M >= H && M <= V && S >= F && S <= 8 && g && g(h);
  }, [g]), T = N((h) => {
    h.preventDefault();
    const p = t.current.getBoundingClientRect();
    if (h.clientY - p.top < u.top) {
      const M = t.current.firstElementChild;
      if (M && M.tagName !== "PAGE-BREAK") {
        const S = document.createRange(), H = window.getSelection();
        S.setStart(M, 0), S.collapse(!0), H.removeAllRanges(), H.addRange(S);
      }
    } else {
      const M = t.current.lastElementChild;
      if (M && M.tagName !== "PAGE-BREAK") {
        const S = document.createRange(), H = window.getSelection();
        S.selectNodeContents(M), S.collapse(!1), H.removeAllRanges(), H.addRange(S);
      }
    }
  }, [t, u.top]), R = N((h) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const y = p.getRangeAt(0), { startContainer: M, endContainer: S } = y;
    if ((xe(M) || xe(S)) && (h.key.length === 1 || h.key === "Enter" || h.key === " "))
      return h.preventDefault(), !1;
    if (Ks(h))
      return n && n(), !1;
    if ((h.key === "Backspace" || h.key === "Delete") && (xe(M) || xe(S)))
      return h.preventDefault(), !1;
    a && a(h);
  }, [a, n]), L = N((h) => {
    if (!t.current) return;
    const p = h.target;
    if (xe(p)) {
      b(p, h);
      return;
    }
    if (v(t.current, h.clientY)) {
      T(h);
      return;
    }
    o && o(h);
  }, [t, o, b, T, v]), j = N((h) => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return;
    const y = p.getRangeAt(0), { startContainer: M } = y;
    if (xe(M))
      return h.preventDefault(), !1;
  }, []), C = N((h) => {
    const p = ta(h);
    i && i(h, p);
  }, [i]);
  return /* @__PURE__ */ m.jsx(
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
        transform: `scale(${c})`,
        transformOrigin: "top center",
        transition: "transform 0.2s ease-out"
      },
      children: /* @__PURE__ */ m.jsx(
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
            padding: `${u.top}px ${u.right}px ${u.bottom}px ${u.left}px`,
            boxSizing: "border-box",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: '"Segoe UI", "Noto Sans Sinhala", "Noto Sans", "Malithi Web", "Iskoola Pota", "Kaputa Unicode", "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif',
            fontSize: nt,
            lineHeight: "1.4",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: r,
          onKeyDown: R,
          onBeforeInput: j,
          onClick: L,
          onScroll: s,
          onPaste: C,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
};
It.propTypes = {
  dimensions: E.shape({
    width: E.number.isRequired,
    height: E.number.isRequired
  }).isRequired,
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onInput: E.func.isRequired,
  onContentChange: E.func,
  onKeyDown: E.func,
  onClick: E.func,
  onScroll: E.func,
  onPaste: E.func,
  onRemovePageBreak: E.func,
  zoomLevel: E.number,
  pageMargins: E.string
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
const oa = gr(It), Ht = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: t = 0,
  pageSize: r = "A4",
  pageMargins: n = he,
  zoomLevel: a = 100,
  canZoomIn: o = !0,
  canZoomOut: s = !0,
  onNavigate: i,
  onAddPage: g,
  onDeletePage: l,
  onPageSizeChange: f,
  onPageMarginsChange: u,
  onZoomIn: c,
  onZoomOut: v,
  onZoomReset: b
} = {}) => {
  const T = Math.max(e?.length || 0, 1), R = (p) => {
    i && i(p);
  }, L = () => {
    g && g();
  }, j = (p) => {
    if (T <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    l && l(p);
  }, C = (p) => {
    f && f(p);
  }, h = (p) => {
    u && u(p);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "page-settings-group", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "page-settings-header", children: [
        /* @__PURE__ */ m.jsx(Es, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Settings"
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "page-settings-controls", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "page-size-selector", children: "Size:" }),
          /* @__PURE__ */ m.jsxs(
            "select",
            {
              id: "page-size-selector",
              role: "combobox",
              "aria-label": "Page size selector",
              value: r,
              onChange: (p) => C(p.target.value),
              children: [
                /* @__PURE__ */ m.jsx("option", { value: "A4", children: "A4" }),
                /* @__PURE__ */ m.jsx("option", { value: "Letter", children: "Letter" }),
                /* @__PURE__ */ m.jsx("option", { value: "Legal", children: "Legal" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "page-setting-item", children: [
          /* @__PURE__ */ m.jsx("label", { htmlFor: "page-margins-selector", children: "Margins:" }),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              id: "page-margins-selector",
              role: "combobox",
              "aria-label": "Page margins selector",
              value: n,
              onChange: (p) => h(p.target.value),
              children: Er().map((p) => /* @__PURE__ */ m.jsx("option", { value: p, children: xr(p) }, p))
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "zoom-controls-compact", children: [
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: v,
          disabled: !s,
          "aria-label": "Zoom out",
          title: "Zoom out (Ctrl + -)",
          children: /* @__PURE__ */ m.jsx(Us, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsxs("span", { className: "zoom-level-display", children: [
        a,
        "%"
      ] }),
      /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "zoom-button-compact",
          onClick: c,
          disabled: !o,
          "aria-label": "Zoom in",
          title: "Zoom in (Ctrl + +)",
          children: /* @__PURE__ */ m.jsx(zs, { size: 12 })
        }
      ),
      /* @__PURE__ */ m.jsx(
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
    /* @__PURE__ */ m.jsx("div", { className: "page-list", children: e.map((p, y) => /* @__PURE__ */ m.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${y === t ? "active" : ""}`,
          onClick: () => R(y),
          "aria-label": `Go to page ${y + 1}`,
          "aria-current": y === t ? "page" : void 0,
          children: [
            /* @__PURE__ */ m.jsx(et, { size: 14 }),
            /* @__PURE__ */ m.jsxs("span", { children: [
              "Page ",
              y + 1
            ] })
          ]
        }
      ),
      T > 1 && /* @__PURE__ */ m.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (M) => {
            M.stopPropagation(), j(y);
          },
          "aria-label": `Delete page ${y + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ m.jsx(Bs, { size: 14 })
        }
      )
    ] }, p.id || `page-${y}`)) }),
    /* @__PURE__ */ m.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: L,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ m.jsx(ms, { size: 16 }),
          /* @__PURE__ */ m.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
};
Ht.propTypes = {
  pageBoundaries: E.arrayOf(
    E.shape({
      id: E.string.isRequired,
      pageNumber: E.number.isRequired,
      top: E.number,
      height: E.number
    })
  ),
  activePage: E.number,
  pageSize: E.oneOf(["A4", "Letter", "Legal"]),
  pageMargins: E.string,
  zoomLevel: E.number,
  canZoomIn: E.bool,
  canZoomOut: E.bool,
  onNavigate: E.func,
  onAddPage: E.func,
  onDeletePage: E.func,
  onPageSizeChange: E.func,
  onPageMarginsChange: E.func,
  onZoomIn: E.func,
  onZoomOut: E.func,
  onZoomReset: E.func
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
const sa = tt.memo(Ht);
function aa(e) {
  switch (e) {
    case U.TOP_LEFT:
    case U.BOTTOM_RIGHT:
      return "nwse-resize";
    case U.TOP_RIGHT:
    case U.BOTTOM_LEFT:
      return "nesw-resize";
    case U.TOP:
    case U.BOTTOM:
      return "ns-resize";
    case U.LEFT:
    case U.RIGHT:
      return "ew-resize";
    default:
      return "default";
  }
}
function ia({
  handler: e,
  startX: t,
  startY: r,
  currentX: n,
  currentY: a,
  startWidth: o,
  startHeight: s,
  options: i = _e
}) {
  const g = n - t, l = a - r;
  let f = o, u = s;
  switch (e) {
    case U.TOP_LEFT:
      f = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s - l);
      break;
    case U.TOP_RIGHT:
      f = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s - l);
      break;
    case U.BOTTOM_LEFT:
      f = Math.max(i.minWidth, o - g), u = Math.max(i.minHeight, s + l);
      break;
    case U.BOTTOM_RIGHT:
      f = Math.max(i.minWidth, o + g), u = Math.max(i.minHeight, s + l);
      break;
    case U.TOP:
      u = Math.max(i.minHeight, s - l);
      break;
    case U.BOTTOM:
      u = Math.max(i.minHeight, s + l);
      break;
    case U.LEFT:
      f = Math.max(i.minWidth, o - g);
      break;
    case U.RIGHT:
      f = Math.max(i.minWidth, o + g);
      break;
    default:
      return { width: f, height: u };
  }
  if (i.preserveAspectRatio && i.aspectRatio) {
    const c = o / s;
    [
      U.TOP_LEFT,
      U.TOP_RIGHT,
      U.BOTTOM_LEFT,
      U.BOTTOM_RIGHT
    ].includes(e) ? f / c > u ? u = Math.max(i.minHeight, f / c) : f = Math.max(i.minWidth, u * c) : [U.TOP, U.BOTTOM].includes(e) ? f = u * c : [U.LEFT, U.RIGHT].includes(e) && (u = f / c);
  }
  return i.maxWidth && f > i.maxWidth && (f = i.maxWidth, i.preserveAspectRatio && i.aspectRatio && (u = f / (o / s))), i.maxHeight && u > i.maxHeight && (u = i.maxHeight, i.preserveAspectRatio && i.aspectRatio && (f = u * (o / s))), f = Math.max(i.minWidth, f), u = Math.max(i.minHeight, u), {
    width: Math.round(f),
    height: Math.round(u)
  };
}
function Wn(e, { width: t, height: r }) {
  be(e) && (e.tagName === "IMG" ? (e.style.width = `${t}px`, e.style.height = `${r}px`, e.width = t, e.height = r) : e.tagName === "DIV" && (e.style.width = `${t}px`, e.style.height = `${r}px`));
}
function ca(e, t, r) {
  Wn(t, r);
  const n = new Event("input", { bubbles: !0, cancelable: !0 });
  e.current.dispatchEvent(n);
}
function la(e, t, r, n) {
  const { ctrlKey: a, metaKey: o, shiftKey: s, key: i } = e, g = a || o, l = r.offsetWidth, f = r.offsetHeight, c = {
    // Increase width
    ">": g && s ? () => ({
      width: Math.min(n.maxWidth || 800, l + 10),
      height: f
    }) : null,
    // Decrease width
    "<": g && s ? () => ({
      width: Math.max(n.minWidth || 50, l - 10),
      height: f
    }) : null,
    // Increase height
    "+": g && s ? () => ({
      width: l,
      height: Math.min(n.maxHeight || 600, f + 10)
    }) : null,
    // Decrease height
    "-": g && s ? () => ({
      width: l,
      height: Math.max(n.minHeight || 50, f - 10)
    }) : null,
    // Reset to default
    r: g && !s ? () => ({ width: 300, height: 200 }) : null
  }[i];
  if (c) {
    e.preventDefault();
    const v = c();
    return ca(t, r, v), !0;
  }
  return !1;
}
const Dt = ({
  editorRef: e,
  onImageResize: t,
  onImageSelect: r,
  onImageDeselect: n,
  resizeOptions: a = _e
}) => {
  const o = ee(null), s = ee(null), i = ee(null), g = ee(null), l = ee(a), f = ee(!1), u = we();
  ae(() => {
    l.current = a;
  }, [a]);
  const c = N((h) => {
    if (!be(h)) return;
    o.current && (pt(o.current), o.current = null), h.classList.add("selected");
    const p = io(h, l.current);
    p && (o.current = p, s.current = h, document.body.appendChild(p), p.querySelectorAll(".resize-handler").forEach((M) => {
      M.addEventListener("mousedown", b);
    }), r && r(h));
  }, [r]), v = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (pt(o.current), o.current = null), i.current = null, g.current = null, f.current = !1, n && n();
  }, [n]), b = N((h) => {
    if (h.preventDefault(), h.stopPropagation(), !s.current) return;
    const p = h.currentTarget.dataset.handler, y = s.current.getBoundingClientRect(), M = window.pageYOffset || document.documentElement.scrollTop, S = window.pageXOffset || document.documentElement.scrollLeft;
    i.current = {
      x: h.clientX,
      y: h.clientY,
      width: s.current.offsetWidth,
      height: s.current.offsetHeight,
      originalWidth: s.current.offsetWidth,
      originalHeight: s.current.offsetHeight,
      offsetX: h.clientX - y.left - S,
      offsetY: h.clientY - y.top - M
    }, g.current = p, f.current = !0, document.body.classList.add("resize-in-progress"), document.body.style.cursor = aa(p), document.addEventListener("mousemove", T), document.addEventListener("mouseup", R);
  }, []), T = N((h) => {
    if (!f.current || !s.current || !i.current || !g.current) return;
    h.preventDefault(), h.stopPropagation();
    const { x: p, y, width: M, height: S } = i.current, H = g.current, F = h.clientX, V = h.clientY, z = ia({
      handler: H,
      startX: p,
      startY: y,
      currentX: F,
      currentY: V,
      startWidth: M,
      startHeight: S,
      options: l.current
    });
    Wn(s.current, z), o.current && xt(o.current, s.current);
  }, []), R = N((h) => {
    if (f.current) {
      if (h.preventDefault(), h.stopPropagation(), s.current && i.current) {
        const p = {
          width: i.current.originalWidth,
          height: i.current.originalHeight
        }, y = {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        };
        (p.width !== y.width || p.height !== y.height) && u.recordOperation(
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: y } },
          { type: "IMAGE_RESIZE", payload: { element: s.current, state: p } }
        );
      }
      if (i.current = null, g.current = null, f.current = !1, document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", R), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = "", s.current) {
        const p = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(p), t && t(s.current, {
          width: s.current.offsetWidth,
          height: s.current.offsetHeight
        });
      }
    }
  }, [t, u]), L = N((h) => {
    o.current && !o.current.contains(h.target) && v();
    const p = h.target;
    if (be(p)) {
      if (p === s.current)
        return;
      c(p);
    }
  }, [c, v]), j = N((h) => {
    if ((h.key === "Delete" || h.key === "Backspace") && s.current && !f.current) {
      h.preventDefault();
      const p = s.current;
      if (p.parentNode) {
        p.parentNode.removeChild(p), v();
        const y = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(y);
      }
    }
    h.key === "Escape" && s.current && v(), s.current && !f.current && la(h, e, s.current, l.current);
  }, [e, v]), C = N(() => {
    o.current && s.current && xt(o.current, s.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const p = e.current.closest(".editor-viewport");
    return p && (p.addEventListener("scroll", C), window.addEventListener("scroll", C)), () => {
      p && p.removeEventListener("scroll", C), window.removeEventListener("scroll", C);
    };
  }, [e, C]), ae(() => {
    if (!e.current) return;
    const h = e.current;
    return h.addEventListener("click", L), h.addEventListener("keydown", j), window.addEventListener("resize", C), () => {
      h.removeEventListener("click", L), h.removeEventListener("keydown", j), window.removeEventListener("resize", C), f.current && (document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", R), document.body.classList.remove("resize-in-progress"), document.body.style.cursor = ""), o.current && pt(o.current);
    };
  }, [e, L, j, C, T, R]), ae(() => {
    if (!e.current) return;
    const h = new MutationObserver((p) => {
      p.forEach((y) => {
        y.type === "childList" && (y.removedNodes.forEach((M) => {
          M.nodeType === Node.ELEMENT_NODE && be(M) && M === s.current && v();
        }), y.addedNodes.forEach((M) => {
          if (M.nodeType !== Node.ELEMENT_NODE) return;
          if (be(M)) {
            setTimeout(() => c(M), 50);
            return;
          }
          const S = M.querySelectorAll?.("img") || [];
          S.length > 0 && setTimeout(() => c(S[0]), 50);
        }));
      });
    });
    return h.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => h.disconnect();
  }, [e, v, c]), null;
};
Dt.propTypes = {
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onImageResize: E.func,
  onImageSelect: E.func,
  onImageDeselect: E.func,
  resizeOptions: E.shape({
    minWidth: E.number,
    minHeight: E.number,
    maxWidth: E.number,
    maxHeight: E.number,
    aspectRatio: E.bool,
    preserveAspectRatio: E.bool,
    defaultWidth: E.number,
    defaultHeight: E.number
  })
};
Dt.defaultProps = {
  onImageResize: void 0,
  onImageSelect: void 0,
  onImageDeselect: void 0,
  resizeOptions: _e
};
const Bt = ({
  imageElement: e,
  onAlignChange: t,
  onAspectRatioToggle: r,
  onDelete: n,
  onClose: a,
  initialPreserveAspectRatio: o = !0
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [g, l] = oe(!1), [f, u] = oe("top"), [c, v] = oe(o), b = ee(null), T = ee(null), R = we(), L = (x) => {
    if (!x)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (A) => setTimeout(A, 16))(() => {
      const A = document.querySelector(".image-resize-overlay");
      A && xt(A, x);
    });
  }, j = (x) => {
    if (!x) return null;
    const O = window.getComputedStyle(x);
    return {
      float: O.float || "none",
      margin: x.style.margin || "",
      display: O.display || "inline",
      width: x.style.width || x.width || "",
      height: x.style.height || x.height || "",
      aspectRatio: c
    };
  }, C = N(() => {
    if (!e) return "left";
    const x = window.getComputedStyle(e);
    return x.float === "right" ? "right" : x.float === "left" ? "left" : x.display === "block" && x.margin.includes("auto") ? "center" : "left";
  }, [e]), [h, p] = oe("left");
  ae(() => {
    e && p(C());
  }, [e, C]);
  const y = N(() => {
    if (!e || !b.current) return;
    const x = e.getBoundingClientRect(), O = b.current.getBoundingClientRect(), A = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, k = x.bottom >= 0 && x.top <= A.height && x.right >= 0 && x.left <= A.width;
    let Y = "top", te = 0, se = 0;
    if (k) {
      const I = x.top - O.height - 10, G = A.height - x.bottom - O.height - 10;
      G > I && G > 0 ? (Y = "bottom", te = x.bottom + 10) : (Y = "top", te = x.top - O.height - 10);
    } else
      Y = "top", te = 10;
    se = x.left + x.width / 2 - O.width / 2;
    const w = window.innerWidth, d = window.innerHeight;
    let _ = Math.max(10, Math.min(se, w - O.width - 10)), D = Math.max(10, Math.min(te, d - O.height - 10));
    i({ top: D, left: _ }), u(Y), l(!0);
  }, [e]);
  wn(() => {
    y();
    const x = () => {
      y();
    }, O = T.current;
    return O && O.addEventListener("scroll", x), window.addEventListener("scroll", x), window.addEventListener("resize", x), () => {
      O && O.removeEventListener("scroll", x), window.removeEventListener("scroll", x), window.removeEventListener("resize", x), l(!1);
    };
  }, [e, y]), ae(() => {
    const x = (O) => {
      b.current && !b.current.contains(O.target) && O.target !== e && a();
    };
    return document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [e, a]);
  const M = {
    left: { float: "left", margin: "0 10px 10px 0", display: "block" },
    center: { float: "none", margin: "10px auto", display: "block" },
    right: { float: "right", margin: "0 0 10px 10px", display: "block" }
  }, S = (x) => {
    if (e && M[x]) {
      const O = j(e), A = h, k = M[x];
      e.style.float = k.float, e.style.margin = k.margin, e.style.display = k.display, p(x), L(e);
      const Y = j(e);
      R.recordOperation(
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: x, state: Y } },
        { type: "IMAGE_ALIGN", payload: { element: e, alignment: A, state: O } }
      ), t && t(x);
    }
  }, H = () => {
    if (e && e.parentNode) {
      const x = {
        element: e,
        parent: e.parentNode,
        nextSibling: e.nextSibling
      };
      R.recordOperation(
        { type: "IMAGE_DELETE", payload: { element: e } },
        { type: "IMAGE_REINSERT", payload: { state: x } }
      ), e.parentNode.removeChild(e), n && n(), a();
    }
  }, F = () => {
    const x = c, O = !c;
    v(O), R.recordOperation(
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: O } },
      { type: "IMAGE_ASPECT_RATIO", payload: { element: e, preserveAspectRatio: x } }
    ), r && r(O);
  }, V = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px"
  }, z = (x) => ({
    ...V,
    background: x ? "#007bff" : "transparent",
    color: x ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: b,
        className: "image-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !g,
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
          pointerEvents: g ? "auto" : "none",
          minWidth: "140px",
          minHeight: "32px",
          opacity: g ? 1 : 0,
          visibility: g ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button aspect-ratio-toggle ${c ? "" : "active"}`,
              onClick: F,
              title: `Toggle aspect ratio preservation (currently ${c ? "ON" : "OFF"})`,
              children: c ? /* @__PURE__ */ m.jsx(vs, { size: 14 }) : /* @__PURE__ */ m.jsx(ts, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "left" ? "active" : ""}`,
              onClick: () => S("left"),
              title: "Align Left",
              style: z(h === "left"),
              children: /* @__PURE__ */ m.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "center" ? "active" : ""}`,
              onClick: () => S("center"),
              title: "Align Center",
              style: z(h === "center"),
              children: /* @__PURE__ */ m.jsx(Nt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${h === "right" ? "active" : ""}`,
              onClick: () => S("right"),
              title: "Align Right",
              style: z(h === "right"),
              children: /* @__PURE__ */ m.jsx(Pt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "tooltip-button delete-button",
              onClick: H,
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
              children: /* @__PURE__ */ m.jsx(At, { size: 14 })
            }
          )
        ]
      }
    ),
    document.body
  );
};
Bt.propTypes = {
  imageElement: E.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: E.func,
  onAspectRatioToggle: E.func,
  onDelete: E.func,
  onClose: E.func.isRequired,
  initialPreserveAspectRatio: E.bool
};
Bt.defaultProps = {
  imageElement: null,
  onAlignChange: void 0,
  onAspectRatioToggle: void 0,
  onDelete: void 0,
  initialPreserveAspectRatio: !0
};
const rt = {
  minColumnWidth: 10,
  minRowHeight: 8,
  maxColumnWidth: 800,
  maxRowHeight: 600,
  tableMinWidth: 100,
  tableMinHeight: 50,
  tableMaxWidth: 1200,
  tableMaxHeight: 800
}, le = {
  COLUMN: "column",
  ROW: "row",
  TABLE_BOTTOM: "table-bottom",
  TABLE_RIGHT: "table-right"
};
function ue(e) {
  return e ? e.tagName === "TABLE" : !1;
}
function ge(e) {
  if (!ue(e))
    return null;
  const t = e.getBoundingClientRect(), r = Array.from(e.rows), n = r.length > 0 ? r[0].cells.length : 0, a = [], o = e.querySelector("colgroup"), s = o ? o.querySelectorAll("col") : [];
  if (s.length >= n)
    for (let g = 0; g < n; g++) {
      const l = s[g], f = l.style.width ? parseInt(l.style.width, 10) : l.offsetWidth;
      a.push(f || 100);
    }
  else if (r.length > 0) {
    const g = r[0];
    for (let l = 0; l < g.cells.length; l++) {
      const f = g.cells[l];
      a.push(f.offsetWidth);
    }
  }
  const i = r.map((g) => (g.style.height ? parseInt(g.style.height, 10) : null) || g.offsetHeight);
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
function ua({
  type: e,
  index: t,
  delta: r,
  currentStructure: n,
  options: a = rt
}) {
  const o = {
    columnWidths: [...n.columnWidths],
    rowHeights: [...n.rowHeights],
    tableWidth: n.width,
    tableHeight: n.height
  }, s = (i, g, l, f, u) => {
    g >= 0 && g < i.length && (i[g] = Math.max(f, Math.min(u, i[g] + l)));
  };
  switch (e) {
    case le.COLUMN:
      s(o.columnWidths, t, r, a.minColumnWidth, a.maxColumnWidth), o.tableWidth = n.width;
      break;
    case le.ROW:
      s(o.rowHeights, t, r, a.minRowHeight, a.maxRowHeight), o.tableHeight = n.height;
      break;
    case le.TABLE_BOTTOM:
      s(o.rowHeights, n.rows - 1, r, a.minRowHeight, a.maxRowHeight);
      break;
    case le.TABLE_RIGHT:
      s(o.columnWidths, n.columns - 1, r, a.minColumnWidth, a.maxColumnWidth);
      break;
  }
  return o;
}
function me(e) {
  if (!ue(e)) return;
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
function Ce(e, t, r) {
  if (!ue(e)) return;
  me(e);
  const { columnWidths: n, rowHeights: a, tableWidth: o, tableHeight: s } = t, i = n ? n.reduce((l, f) => l + f, 0) : 0, g = a ? a.reduce((l, f) => l + f, 0) : 0;
  if (o !== void 0 ? e.style.width = `${o}px` : i > 0 && (e.style.width = `${i}px`), s !== void 0 ? e.style.height = `${s}px` : g > 0 && (e.style.height = `${g}px`), n && n.length > 0) {
    e.style.tableLayout = "fixed";
    const l = e.querySelector("colgroup");
    l && l.querySelectorAll("col").forEach((u, c) => {
      c < n.length && (u.style.width = `${n[c]}px`);
    }), e.style.width = `${i}px`;
  }
  a && a.length > 0 && (Array.from(e.rows).forEach((f, u) => {
    u < a.length && (f.style.height = `${a[u]}px`);
  }), e.style.height = `${g}px`), e.offsetHeight;
}
function da(e, t = rt) {
  if (!ue(e)) return null;
  me(e);
  const r = ge(e);
  if (!r) return null;
  const n = document.createElement("div");
  n.className = "table-resize-overlay", n.style.position = "fixed", n.style.zIndex = "1000", n.style.pointerEvents = "none";
  const a = e.getBoundingClientRect();
  n.style.top = `${a.top}px`, n.style.left = `${a.left}px`, n.style.width = `${a.width}px`, n.style.height = `${a.height}px`;
  for (let i = 0; i < r.columns - 1; i++) {
    const g = qn(i, r, a, e);
    n.appendChild(g);
  }
  for (let i = 0; i < r.rows - 1; i++) {
    const g = Gn(i, r, a, e);
    n.appendChild(g);
  }
  const o = Zn(r, a);
  n.appendChild(o);
  const s = Yn(r, a);
  return n.appendChild(s), n;
}
function qn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-column-resize-handler", a.dataset.type = le.COLUMN, a.dataset.index = e, a.style.position = "absolute", a.style.width = "4px", a.style.height = `${r.height}px`, a.style.cursor = "col-resize", a.style.pointerEvents = "all", Vn(a, e, t, r, n), a;
}
function Gn(e, t, r, n) {
  const a = document.createElement("div");
  return a.className = "table-resize-handler table-row-resize-handler", a.dataset.type = le.ROW, a.dataset.index = e, a.style.position = "absolute", a.style.width = `${r.width}px`, a.style.height = "4px", a.style.cursor = "row-resize", a.style.pointerEvents = "all", Kn(a, e, t, r, n), a;
}
function Zn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-bottom-resize-handler", r.dataset.type = le.TABLE_BOTTOM, r.style.position = "absolute", r.style.width = `${t.width}px`, r.style.height = "4px", r.style.cursor = "ns-resize", r.style.pointerEvents = "all", Xn(r, e, t), r;
}
function Yn(e, t) {
  const r = document.createElement("div");
  return r.className = "table-resize-handler table-right-resize-handler", r.dataset.type = le.TABLE_RIGHT, r.style.position = "absolute", r.style.width = "4px", r.style.height = `${t.height}px`, r.style.cursor = "ew-resize", r.style.pointerEvents = "all", Jn(r, e, t), r;
}
function Rt(e, t) {
  if (!e || !t) return;
  me(t);
  const r = ge(t);
  if (!r) return;
  const n = t.getBoundingClientRect();
  e.style.top = `${n.top}px`, e.style.left = `${n.left}px`, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`;
  const a = e.querySelectorAll(".table-column-resize-handler"), o = e.querySelectorAll(".table-row-resize-handler"), s = e.querySelector(".table-bottom-resize-handler"), i = e.querySelector(".table-right-resize-handler");
  if (a.length !== r.columns - 1 || o.length !== r.rows - 1 || !s || !i) {
    e.innerHTML = "";
    for (let u = 0; u < r.columns - 1; u++) {
      const c = qn(u, r, n, t);
      e.appendChild(c);
    }
    for (let u = 0; u < r.rows - 1; u++) {
      const c = Gn(u, r, n, t);
      e.appendChild(c);
    }
    const l = Zn(r, n);
    e.appendChild(l);
    const f = Yn(r, n);
    e.appendChild(f);
  } else
    a.forEach((l, f) => {
      Vn(l, f, r, n, t);
    }), o.forEach((l, f) => {
      Kn(l, f, r, n, t);
    }), s && Xn(s, r, n), i && Jn(i, r, n);
}
function Ke(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function fa(e, t) {
  if (!ue(e))
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
  const o = ge(e);
  return o && Ce(e, {
    columnWidths: o.columnWidths,
    rowHeights: o.rowHeights
  }), n;
}
function pa(e, t) {
  if (!ue(e))
    return console.warn("insertRowBelow: Invalid table element"), null;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`insertRowBelow: Invalid row index ${t}, table has ${e.rows.length} rows`), null;
  const r = e.rows[t];
  if (!r)
    return console.warn(`insertRowBelow: Could not find reference row at index ${t}`), null;
  const n = document.createElement("tr"), a = r.cells.length;
  for (let i = 0; i < a; i++) {
    const g = document.createElement("td");
    g.innerHTML = "&nbsp;", n.appendChild(g);
  }
  const o = r.nextSibling;
  try {
    o ? r.parentNode.insertBefore(n, o) : r.parentNode.appendChild(n);
  } catch (i) {
    return console.error("insertRowBelow: Failed to insert row", i), null;
  }
  me(e);
  const s = ge(e);
  return s && Ce(e, {
    columnWidths: s.columnWidths,
    rowHeights: s.rowHeights
  }), n;
}
function Vn(e, t, r, n, a) {
  if (a && a.rows.length > 0) {
    const s = a.rows[0];
    if (s.cells.length > t) {
      const g = s.cells[t].getBoundingClientRect(), l = a.getBoundingClientRect(), f = g.right - l.left - 2;
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
      const g = s.cells[0].getBoundingClientRect(), l = a.getBoundingClientRect(), f = g.bottom - l.top - 2;
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
function ga(e, t) {
  if (!ue(e))
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
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnLeft: Failed to insert column", n), !1;
  }
}
function ha(e, t) {
  if (!ue(e))
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
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("insertColumnRight: Failed to insert column", n), !1;
  }
}
function ma(e, t) {
  if (!ue(e))
    return console.warn("deleteRow: Invalid table element"), !1;
  if (t < 0 || t >= e.rows.length)
    return console.warn(`deleteRow: Invalid row index ${t}, table has ${e.rows.length} rows`), !1;
  if (e.rows.length <= 1)
    return console.warn("deleteRow: Cannot delete the last row in the table"), !1;
  try {
    const r = e.rows[t];
    r.parentNode.removeChild(r), me(e);
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (r) {
    return console.error("deleteRow: Failed to delete row", r), !1;
  }
}
function ya(e, t) {
  if (!ue(e))
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
    const n = ge(e);
    return n && Ce(e, {
      columnWidths: n.columnWidths,
      rowHeights: n.rowHeights
    }), !0;
  } catch (n) {
    return console.error("deleteColumn: Failed to delete column", n), !1;
  }
}
const jt = ({
  editorRef: e,
  onTableResize: t,
  onTableSelect: r,
  onTableDeselect: n,
  resizeOptions: a = rt
}) => {
  const o = ee(null), s = ee(null), i = ee(null), g = ee(null), l = ee(null), f = ee(a), u = ee(!1), [c, v] = oe(null), b = we();
  ae(() => {
    f.current = a;
  }, [a]);
  const T = N(() => {
    s.current && (s.current.classList.remove("selected"), s.current = null), o.current && (Ke(o.current), o.current = null), v(null), i.current = null, g.current = null, l.current = null, u.current = !1, n && n();
  }, [n]), R = N((S) => {
    if (S.preventDefault(), S.stopPropagation(), !s.current) return;
    const H = S.currentTarget, F = H.dataset.type, V = parseInt(H.dataset.index, 10);
    s.current.getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft;
    const z = ge(s.current);
    i.current = {
      x: S.clientX,
      y: S.clientY,
      structure: { ...z }
    }, g.current = F, l.current = V, u.current = !0, document.body.classList.add("table-resize-in-progress");
    const x = {
      [le.COLUMN]: "col-resize",
      [le.ROW]: "row-resize",
      [le.TABLE_BOTTOM]: "ns-resize",
      [le.TABLE_RIGHT]: "ew-resize"
    };
    document.body.style.cursor = x[F] || "default", document.addEventListener("mousemove", C), document.addEventListener("mouseup", h);
  }, []), L = N((S) => {
    const H = da(S, f.current);
    return H && (o.current = H, s.current = S, document.body.appendChild(H), H.querySelectorAll(".table-resize-handler").forEach((V) => {
      V.addEventListener("mousedown", R);
    })), H;
  }, [R]), j = N((S) => {
    if (!ue(S)) return;
    o.current && (Ke(o.current), o.current = null), S.classList.add("selected"), L(S) && (v(S), r && r(S));
  }, [r, L]), C = N((S) => {
    if (!u.current || !s.current || !i.current || !g.current) return;
    S.preventDefault(), S.stopPropagation();
    const { x: H, y: F, structure: V } = i.current, z = g.current, x = l.current, O = S.clientX, A = S.clientY;
    let k = 0;
    switch (z) {
      case le.COLUMN:
        k = O - H;
        break;
      case le.ROW:
        k = A - F;
        break;
      case le.TABLE_BOTTOM:
        k = A - F;
        break;
      case le.TABLE_RIGHT:
        k = O - H;
        break;
    }
    const Y = ua({
      type: z,
      index: x,
      delta: k,
      currentStructure: V,
      options: f.current
    });
    Ce(s.current, Y), o.current && Rt(o.current, s.current);
  }, []), h = N((S) => {
    if (u.current) {
      if (S.preventDefault(), S.stopPropagation(), s.current && i.current) {
        const H = {
          structure: i.current.structure
        }, F = {
          structure: ge(s.current)
        };
        (H.structure.width !== F.structure.width || H.structure.height !== F.structure.height || JSON.stringify(H.structure.columnWidths) !== JSON.stringify(F.structure.columnWidths) || JSON.stringify(H.structure.rowHeights) !== JSON.stringify(F.structure.rowHeights)) && b.recordOperation(
          { type: "TABLE_RESIZE", payload: { element: s.current, state: F } },
          { type: "TABLE_RESIZE", payload: { element: s.current, state: H } }
        );
      }
      if (i.current = null, g.current = null, l.current = null, u.current = !1, document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", h), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = "", s.current) {
        const H = new Event("input", { bubbles: !0, cancelable: !0 });
        s.current.dispatchEvent(H), t && t(s.current, ge(s.current));
      }
    }
  }, [t, b]), p = N((S) => {
    o.current && !o.current.contains(S.target) && T();
    const F = S.target.closest("table");
    if (F && ue(F)) {
      if (F === s.current)
        return;
      j(F);
    }
  }, [j, T]), y = N((S) => {
    if (S.key === "Delete" && s.current && !u.current) {
      S.preventDefault();
      const H = s.current;
      if (H.parentNode) {
        H.parentNode.removeChild(H), T();
        const F = new Event("input", { bubbles: !0, cancelable: !0 });
        e.current.dispatchEvent(F);
      }
    }
    S.key === "Escape" && s.current && T();
  }, [e, T]), M = N(() => {
    o.current && s.current && Rt(o.current, s.current);
  }, []);
  return ae(() => {
    if (!e.current) return;
    const H = e.current.closest(".editor-viewport");
    return H && (H.addEventListener("scroll", M), window.addEventListener("scroll", M)), () => {
      H && H.removeEventListener("scroll", M), window.removeEventListener("scroll", M);
    };
  }, [e, M]), ae(() => {
    if (!e.current) return;
    const S = e.current;
    return S.addEventListener("click", p), S.addEventListener("keydown", y), window.addEventListener("resize", M), () => {
      S.removeEventListener("click", p), S.removeEventListener("keydown", y), window.removeEventListener("resize", M), u.current && (document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", h), document.body.classList.remove("table-resize-in-progress"), document.body.style.cursor = ""), o.current && Ke(o.current);
    };
  }, [e, p, y, M, C, h]), ae(() => {
    if (!e.current) return;
    const S = new MutationObserver((H) => {
      H.forEach((F) => {
        F.type === "childList" && (F.removedNodes.forEach((V) => {
          V.nodeType === Node.ELEMENT_NODE && ue(V) && V === c && T();
        }), F.addedNodes.forEach((V) => {
          if (V.nodeType !== Node.ELEMENT_NODE) return;
          if (ue(V)) {
            setTimeout(() => j(V), 50);
            return;
          }
          const z = V.querySelectorAll?.("table") || [];
          z.length > 0 && setTimeout(() => j(z[0]), 50);
        }));
      });
    });
    return S.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => S.disconnect();
  }, [e, T, j]), ae(() => {
    if (!c) return;
    const S = new MutationObserver((H) => {
      H.some((V) => {
        if (V.type === "childList") {
          if ([...V.addedNodes, ...V.removedNodes].some(
            (x) => x.nodeType === Node.ELEMENT_NODE && x.tagName === "TR"
          )) return !0;
        } else if (V.type === "attributes" && ["colspan", "rowspan"].includes(V.attributeName))
          return !0;
        return !1;
      }) && o.current && s.current && (Ke(o.current), o.current = null, L(s.current));
    });
    return S.observe(c, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["colspan", "rowspan"]
    }), () => S.disconnect();
  }, [c, L]), null;
};
jt.propTypes = {
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onTableResize: E.func,
  onTableSelect: E.func,
  onTableDeselect: E.func,
  resizeOptions: E.shape({
    minColumnWidth: E.number,
    minRowHeight: E.number,
    maxColumnWidth: E.number,
    maxRowHeight: E.number,
    tableMinWidth: E.number,
    tableMinHeight: E.number,
    tableMaxWidth: E.number,
    tableMaxHeight: E.number
  })
};
jt.defaultProps = {
  onTableResize: void 0,
  onTableSelect: void 0,
  onTableDeselect: void 0,
  resizeOptions: rt
};
const zt = ({
  tableElement: e,
  onAlignChange: t,
  onClose: r,
  selectedRowIndex: n,
  selectedColIndex: a,
  editorRef: o
}) => {
  const [s, i] = oe({ top: 0, left: 0 }), [g, l] = oe(!1), [f, u] = oe("top"), c = ee(null), v = ee(null), b = we(), T = (A) => {
    if (!A)
      return;
    (typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame : (Y) => setTimeout(Y, 16))(() => {
      const Y = document.querySelector(".table-resize-overlay");
      Y && Rt(Y, A);
    });
  }, R = (A) => {
    if (!A) return null;
    const k = window.getComputedStyle(A);
    return {
      float: k.float || "none",
      margin: A.style.margin || "",
      marginLeft: A.style.marginLeft || "",
      marginRight: A.style.marginRight || "",
      display: k.display || "table"
    };
  }, L = N(() => {
    if (!e) return "left";
    const A = window.getComputedStyle(e);
    return A.marginLeft === "auto" && A.marginRight === "auto" ? "center" : A.float === "right" ? "right" : (A.float === "left", "left");
  }, [e]), [j, C] = oe("left");
  ae(() => {
    e && C(L());
  }, [e, L]);
  const h = N(() => {
    if (!e || !c.current) return;
    const A = e.getBoundingClientRect(), k = c.current.getBoundingClientRect(), Y = window.visualViewport ? window.visualViewport : {
      width: window.innerWidth,
      height: window.innerHeight
    }, te = A.bottom >= 0 && A.top <= Y.height && A.right >= 0 && A.left <= Y.width;
    let se = "top", w = 0, d = 0;
    if (te) {
      const W = A.top - k.height - 10, $ = Y.height - A.bottom - k.height - 10;
      $ > W && $ > 0 ? (se = "bottom", w = A.bottom + 10) : (se = "top", w = A.top - k.height - 10);
    } else
      se = "top", w = 10;
    d = A.left + A.width / 2 - k.width / 2;
    const _ = window.innerWidth, D = window.innerHeight;
    let I = Math.max(10, Math.min(d, _ - k.width - 10)), G = Math.max(10, Math.min(w, D - k.height - 10));
    i({ top: G, left: I }), u(se), l(!0);
  }, [e]);
  wn(() => {
    h();
    const A = () => {
      h();
    }, k = v.current;
    return k && k.addEventListener("scroll", A), window.addEventListener("scroll", A), window.addEventListener("resize", A), () => {
      k && k.removeEventListener("scroll", A), window.removeEventListener("scroll", A), window.removeEventListener("resize", A), l(!1);
    };
  }, [e, h]), ae(() => {
    const A = (k) => {
      c.current && !c.current.contains(k.target) && k.target !== e && !e.contains(k.target) && r();
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, [e, r]);
  const p = {
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
  }, y = (A) => {
    if (e && p[A]) {
      const k = R(e), Y = j, te = p[A];
      e.style.float = te.float, e.style.margin = te.margin, e.style.marginLeft = te.marginLeft, e.style.marginRight = te.marginRight, C(A), T(e);
      const se = R(e);
      b.recordOperation(
        { type: "TABLE_ALIGN", payload: { element: e, alignment: A, state: se } },
        { type: "TABLE_ALIGN", payload: { element: e, alignment: Y, state: k } }
      ), t && t(A);
    }
  }, M = () => {
    if (console.log("handleInsertRowAbove called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowAbove: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowAbove: No row selected");
      return;
    }
    console.log(`Inserting row above index ${n}`);
    const A = fa(e, n);
    if (A) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const k = o.current.innerHTML;
        console.log("Updated content length:", k.length), b.updateContinuousContent(k);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: A, position: "above", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n } }
      ), T(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert row above");
  }, S = () => {
    if (console.log("handleInsertRowBelow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertRowBelow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleInsertRowBelow: No row selected");
      return;
    }
    console.log(`Inserting row below index ${n}`);
    const A = pa(e, n);
    if (A) {
      if (console.log("Row inserted successfully, updating content"), o && o.current) {
        const k = o.current.innerHTML;
        console.log("Updated content length:", k.length), b.updateContinuousContent(k);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_ROW", payload: { element: e, row: A, position: "below", index: n } },
        { type: "DELETE_ROW", payload: { element: e, index: n + 1 } }
      ), T(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert row below");
  }, H = () => {
    if (console.log("handleInsertColumnLeft called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnLeft: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnLeft: No column selected");
      return;
    }
    if (console.log(`Inserting column left of index ${a}`), ga(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const k = o.current.innerHTML;
        console.log("Updated content length:", k.length), b.updateContinuousContent(k);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "left", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a } }
      ), T(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert column left");
  }, F = () => {
    if (console.log("handleInsertColumnRight called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleInsertColumnRight: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleInsertColumnRight: No column selected");
      return;
    }
    if (console.log(`Inserting column right of index ${a}`), ha(e, a)) {
      if (console.log("Column inserted successfully, updating content"), o && o.current) {
        const k = o.current.innerHTML;
        console.log("Updated content length:", k.length), b.updateContinuousContent(k);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "INSERT_COLUMN", payload: { element: e, position: "right", index: a } },
        { type: "DELETE_COLUMN", payload: { element: e, index: a + 1 } }
      ), T(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to insert column right");
  }, V = () => {
    if (console.log("handleDeleteRow called", { selectedRowIndex: n, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteRow: No table element");
      return;
    }
    if (n == null) {
      console.warn("handleDeleteRow: No row selected");
      return;
    }
    if (console.log(`Deleting row at index ${n}`), ma(e, n)) {
      if (console.log("Row deleted successfully, updating content"), o && o.current) {
        const k = o.current.innerHTML;
        console.log("Updated content length:", k.length), b.updateContinuousContent(k);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_ROW", payload: { element: e, index: n } },
        { type: "INSERT_ROW", payload: { element: e, position: "at", index: n } }
      ), T(e), requestAnimationFrame(() => h());
    } else
      console.error("Failed to delete row");
  }, z = () => {
    if (console.log("handleDeleteColumn called", { selectedColIndex: a, tableElement: e, hasEditorRef: !!o }), !e) {
      console.warn("handleDeleteColumn: No table element");
      return;
    }
    if (a == null) {
      console.warn("handleDeleteColumn: No column selected");
      return;
    }
    if (console.log(`Deleting column at index ${a}`), ya(e, a)) {
      if (console.log("Column deleted successfully, updating content"), o && o.current) {
        const k = o.current.innerHTML;
        console.log("Updated content length:", k.length), b.updateContinuousContent(k);
      } else
        console.warn("No editor ref available to update content");
      b.recordOperation(
        { type: "DELETE_COLUMN", payload: { element: e, index: a } },
        { type: "INSERT_COLUMN", payload: { element: e, position: "at", index: a } }
      ), T(e), requestAnimationFrame(() => h());
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
  }, O = (A) => ({
    ...x,
    background: A ? "#007bff" : "transparent",
    color: A ? "#fff" : "#333"
  });
  return !e || typeof document > "u" ? null : En(
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        ref: c,
        className: "table-tooltip-menu",
        "data-menu-position": f,
        "aria-hidden": !g,
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
          pointerEvents: g ? "auto" : "none",
          minWidth: "100px",
          minHeight: "32px",
          opacity: g ? 1 : 0,
          visibility: g ? "visible" : "hidden",
          transition: "opacity 0.15s ease, visibility 0.15s ease"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${j === "left" ? "active" : ""}`,
              onClick: () => y("left"),
              title: "Align Left",
              style: O(j === "left"),
              children: /* @__PURE__ */ m.jsx(Mt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${j === "center" ? "active" : ""}`,
              onClick: () => y("center"),
              title: "Align Center",
              style: O(j === "center"),
              children: /* @__PURE__ */ m.jsx(Nt, { size: 14 })
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: `tooltip-button ${j === "right" ? "active" : ""}`,
              onClick: () => y("right"),
              title: "Align Right",
              style: O(j === "right"),
              children: /* @__PURE__ */ m.jsx(Pt, { size: 14 })
            }
          ),
          n != null && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-row-above",
                onClick: M,
                title: "Insert Row Above",
                style: {
                  ...x,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(Ho, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-row-below",
                onClick: S,
                title: "Insert Row Below",
                style: {
                  ...x,
                  background: "#28a745",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(ko, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button delete-row",
                onClick: V,
                title: "Delete Row",
                style: {
                  ...x,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: n == null,
                children: /* @__PURE__ */ m.jsx(At, { size: 14 })
              }
            )
          ] }),
          a != null && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
            /* @__PURE__ */ m.jsx("div", { style: { width: "1px", height: "24px", background: "#ddd", margin: "0 4px" } }),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-column-left",
                onClick: H,
                title: "Insert Column Left",
                style: {
                  ...x,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(Po, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button insert-column-right",
                onClick: F,
                title: "Insert Column Right",
                style: {
                  ...x,
                  background: "#0056b3",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(Lo, { size: 14 })
              }
            ),
            /* @__PURE__ */ m.jsx(
              "button",
              {
                className: "tooltip-button delete-column",
                onClick: z,
                title: "Delete Column",
                style: {
                  ...x,
                  background: "#dc3545",
                  color: "#fff"
                },
                disabled: a == null,
                children: /* @__PURE__ */ m.jsx(At, { size: 14 })
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
  tableElement: E.instanceOf(typeof Element < "u" ? Element : Object),
  onAlignChange: E.func,
  onClose: E.func.isRequired,
  selectedRowIndex: E.number,
  selectedColIndex: E.number,
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
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
  const [r, n] = oe(/* @__PURE__ */ new Set()), [a, o] = oe(null), [s, i] = oe(null), [g, l] = oe(null), [f, u] = oe(!1), [c, v] = oe(!1), [b, T] = oe(null), [R, L] = oe(null);
  we(), ee(null);
  const j = ee(null), C = N(() => {
    n(/* @__PURE__ */ new Set()), o(null), i(null), l(null), T(null), L(null), u(!1), v(!1), document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((z) => {
      z.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), j.current !== null && (j.current = null, t && t(null));
  }, [t]), h = N((z) => {
    const x = z.closest("tr"), O = z.closest("table");
    if (!x || !O) return null;
    const A = Array.from(O.rows).indexOf(x), k = Array.from(x.cells).indexOf(z);
    return { rowIndex: A, cellIndex: k, table: O };
  }, []), p = N((z) => {
    if (z.size === 0) return { mode: null, rowIndex: null, colIndex: null };
    const x = Array.from(z), O = x[0], A = h(O);
    if (!A) return { mode: null, rowIndex: null, colIndex: null };
    const { table: k } = A;
    return x.filter((se) => {
      const w = h(se);
      return w && w.table === k && w.rowIndex === A.rowIndex;
    }).length >= 2 ? { mode: "row", rowIndex: A.rowIndex, colIndex: null } : x.filter((se) => {
      const w = h(se);
      return w && w.table === k && w.cellIndex === A.cellIndex;
    }).length >= 2 ? { mode: "column", rowIndex: null, colIndex: A.cellIndex } : { mode: null, rowIndex: null, colIndex: null };
  }, [h]), y = N((z, x, O, A, k) => {
    if (document.querySelectorAll(".table-cell-selected, .table-row-selected, .table-col-selected").forEach((Y) => {
      Y.classList.remove("table-cell-selected", "table-row-selected", "table-col-selected");
    }), !(!k || !z)) {
      if (z === "row" && x !== null) {
        const Y = k.rows[x];
        Y && Array.from(Y.cells).forEach((te) => {
          te.classList.add("table-row-selected");
        });
      } else z === "column" && O !== null ? Array.from(k.rows).forEach((Y) => {
        const te = Y.cells[O];
        te && te.classList.add("table-col-selected");
      }) : z === "cells" && A.forEach((Y) => {
        Y.classList.add("table-cell-selected");
      });
      window.getSelection && window.getSelection().removeAllRanges();
    }
  }, []), M = N((z, x) => {
    const O = p(z);
    n(z), o(O.mode), i(O.rowIndex), l(O.colIndex), L(x), y(O.mode, O.rowIndex, O.colIndex, z, x);
    const A = O.mode ? {
      mode: O.mode,
      cells: z,
      rowIndex: O.rowIndex,
      colIndex: O.colIndex,
      table: x
    } : null;
    JSON.stringify(j.current) !== JSON.stringify(A) && (j.current = A, t && t(A));
  }, [p, y, t]), S = N((z) => {
    const x = z.target.closest("td, th");
    if (!x) return;
    const O = h(x);
    O && (u(!0), T(x), L(O.table), v(!1));
  }, [h]), H = N((z) => {
    if (!f || !b) return;
    const x = z.target.closest("td, th");
    if (!x || !R || !R.contains(x)) return;
    v(!0), z.preventDefault();
    const O = h(b), A = h(x);
    if (!O || !A || O.table !== A.table) return;
    const k = Math.min(O.rowIndex, A.rowIndex), Y = Math.max(O.rowIndex, A.rowIndex), te = Math.min(O.cellIndex, A.cellIndex), se = Math.max(O.cellIndex, A.cellIndex), w = /* @__PURE__ */ new Set();
    for (let d = k; d <= Y; d++) {
      const _ = R.rows[d];
      if (_)
        for (let D = te; D <= se; D++) {
          const I = _.cells[D];
          I && w.add(I);
        }
    }
    M(w, R);
  }, [f, h]), F = N(() => {
    c || C(), u(!1), T(null);
  }, [c, C]), V = N((z) => {
    const x = z.target.closest("td, th"), O = z.target.closest("table");
    if (!(x && R && R.contains(x))) {
      if (O && O !== R) {
        C();
        return;
      }
      O || C();
    }
  }, [C, R]);
  return ae(() => {
    if (!e.current) return;
    const z = e.current, x = (A) => {
      A.target.closest("td, th") && S(A);
    }, O = (A) => {
      A.target.closest("td, th") && H(A);
    };
    return z.addEventListener("mousedown", x, !0), z.addEventListener("mouseenter", O, !0), document.addEventListener("mouseup", F), document.addEventListener("click", V), () => {
      z.removeEventListener("mousedown", x, !0), z.removeEventListener("mouseenter", O, !0), document.removeEventListener("mouseup", F), document.removeEventListener("click", V);
    };
  }, [e, S, H, F, V]), ae(() => {
    if (!e.current) return;
    const z = new MutationObserver((x) => {
      x.forEach((O) => {
        O.type === "childList" && R && !e.current.contains(R) && C();
      });
    });
    return z.observe(e.current, {
      childList: !0,
      subtree: !0
    }), () => z.disconnect();
  }, [e, C]), null;
};
$t.propTypes = {
  editorRef: E.shape({
    current: E.instanceOf(typeof Element < "u" ? Element : Object)
  }).isRequired,
  onCellSelectionChange: E.func
};
$t.defaultProps = {
  onCellSelectionChange: void 0
};
const ba = 50, gt = 50, Ta = 50, va = 100, wa = 300, Ut = St(({
  pageManagerComponent: e = null,
  onNavigatePage: t,
  onAddPage: r,
  onDeletePage: n,
  onPageSizeChange: a,
  onPageMarginsChange: o,
  onChange: s,
  showSidebar: i = !0,
  showToolbar: g = !0,
  showPageManager: l = !0
}, f) => {
  const u = On(), c = we(), { pageSize: v, pageMargins: b, continuousContent: T, pageBoundaries: R, activePage: L, zoomLevel: j, canUndo: C, canRedo: h } = u, p = ee(null), y = ee(null), { currentFormat: M, formatText: S, updateCurrentFormatFromSelection: H } = Br(), [F, V] = oe(!1), [z, x] = oe(null), [O, A] = oe(!0), [k, Y] = oe(!1), [te, se] = oe(null), [w, d] = oe(null), [_, D] = oe(null), I = ee(null), {
    checkAndUpdateBoundaries: G,
    getCurrentPage: W,
    scrollToPage: $,
    updateBoundaries: q,
    triggerAutoReflow: K,
    removePageAndContent: X,
    removePageBreak: ce,
    insertPageBreakAtBoundary: B
  } = ao(v, y, j, b), de = Te(() => _t(v), [v]), [Re, Be] = oe(!1), Ee = ee(null), je = ee(!1), ze = ee(!1), ot = ee(!1), Se = ee(T);
  ae(() => {
    if (y.current) {
      if (!ot.current) {
        y.current.innerHTML = T, ot.current = !0, Se.current = T;
        const P = setTimeout(() => {
          q();
        }, ba);
        return () => clearTimeout(P);
      }
      if (Se.current !== T) {
        if (y.current.innerHTML !== T) {
          y.current.innerHTML = T;
          const Q = setTimeout(() => {
            q(), je.current && Wt();
          }, gt);
          return Se.current = T, () => clearTimeout(Q);
        }
        Se.current = T;
      }
    }
  }, [T, q, R.length, c, $]), ae(() => {
    s && ot.current && s(T);
  }, [T, s]);
  const Ft = Te(() => ({
    /**
     * Get the current HTML content from the editor
     * Returns the actual DOM content to ensure latest changes (like indentation) are captured
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => y.current ? y.current.innerHTML : T,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => (y.current ? y.current.innerHTML : T).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim(),
    /**
     * Get the current cursor position in the editor
     * @returns {Object|null} An object with page number, line number, and character offset, or null if no selection
     */
    getCursorPosition: () => y.current ? oo(y.current) : null,
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (P) => {
      const Q = Je(P);
      Q !== T && c.updateContinuousContent(Q), y.current && y.current.innerHTML !== Q && (y.current.innerHTML = Q), Se.current = Q, y.current && setTimeout(() => {
        q();
      }, gt);
    },
    /**
     * Insert content at the current cursor position without replacing existing content
     * Falls back to the last cursor position if no active selection in the editor
     * @param {string} html - HTML content to insert
     */
    insertContent: (P) => {
      if (!y.current || !P) return;
      const Q = Je(P), ie = window.getSelection();
      let fe = !1;
      if (ie && ie.rangeCount > 0) {
        const at = ie.getRangeAt(0);
        y.current.contains(at.commonAncestorContainer) && (fe = !0);
      }
      if (!fe && I.current)
        try {
          ie.removeAllRanges(), ie.addRange(I.current);
        } catch (at) {
          console.warn("[insertContent] Failed to restore last cursor position:", at);
          const ke = y.current.lastChild;
          if (ke) {
            const We = document.createRange();
            ke.nodeType === Node.TEXT_NODE ? We.setStart(ke, ke.textContent.length) : We.setStartAfter(ke), We.collapse(!0), ie.removeAllRanges(), ie.addRange(We);
          }
        }
      document.execCommand("insertHTML", !1, Q);
      const ye = y.current.innerHTML;
      c.updateContinuousContent(ye), Se.current = ye, setTimeout(() => {
        q(), K(200);
      }, gt);
    }
  }), [T, c, q, y, I, G]);
  hr(f, () => Ft, [Ft]), ae(() => {
    const P = () => {
      if (H(), y.current) {
        const ie = window.getSelection();
        if (ie.rangeCount > 0) {
          const fe = ie.getRangeAt(0);
          fe.collapsed && y.current.contains(fe.commonAncestorContainer) && (I.current = fe.cloneRange());
        }
      }
    };
    document.addEventListener("selectionchange", P);
    const Q = () => {
      if (setTimeout(H, 10), I.current && y.current)
        try {
          const ie = window.getSelection();
          ie.removeAllRanges(), ie.addRange(I.current);
        } catch (ie) {
          console.warn("[handleFocus] Failed to restore cursor:", ie);
        }
    };
    return y.current && y.current.addEventListener("focus", Q), () => {
      document.removeEventListener("selectionchange", P), y.current && y.current.removeEventListener("focus", Q);
    };
  }, [H]);
  const Wt = N(() => {
    je.current = !1;
    const P = Math.max(0, R.length - 1);
    c.setActivePage(P), setTimeout(() => {
      $(P, p);
    }, Ta);
  }, [R.length, c, $]), st = N(() => {
    if (!y.current) return;
    let P = y.current.innerHTML;
    P = Je(P), P !== y.current.innerHTML && (y.current.innerHTML = P);
    const Q = T;
    if (Q !== P) {
      const fe = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: P
      }, ye = {
        type: "UPDATE_CONTINUOUS_CONTENT",
        payload: Q
      };
      c.recordOperation(fe, ye);
    }
    c.updateContinuousContent(P), G(), K(200);
    const ie = W(p);
    ie !== L && c.setActivePage(ie);
  }, [c, G, W, L, K, p, y, T]), er = N((P) => {
    st();
  }, [st]), qt = N((P) => {
    c.updatePageSize(P), q({ pageSize: P }), a && a(P);
  }, [c, q, a]), Gt = N((P) => {
    c.updatePageMargins(P), q({ pageMargins: P }), o && o(P);
  }, [c, q, o]), Zt = N((P) => {
    P < 0 || P >= R.length || (ze.current = !0, c.setActivePage(P), $(P, p), setTimeout(() => {
      ze.current = !1;
    }, wa), t && t(P));
  }, [c, $, t, R.length]), Yt = N(() => {
    const P = R.length + 1;
    B(P) && (je.current = !0, setTimeout(() => {
      je.current && Wt();
    }, 100)), r && r();
  }, [R.length, B, c, $, r]), tr = N(() => {
    const P = window.getSelection();
    if (P && P.rangeCount > 0) {
      if (!y?.current) return;
      const fe = `<page-break data-page-break="true" contenteditable="false" data-page-number="${y.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, fe), setTimeout(() => {
        q();
        const ye = W(p);
        c.setActivePage(ye);
      }, 150);
    }
  }, [q, W, c, p]), nr = N((P) => {
    if (!P) return;
    ce(P) && setTimeout(() => {
      const ie = W(p);
      c.setActivePage(ie);
    }, 200);
  }, [ce, W, c, p]), Vt = N((P) => {
    if (R.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    X(P) && (c.setActivePage(0), n && n(P));
  }, [R.length, X, c, n]), $e = N(() => {
    c.zoomIn();
  }, [c]), Ue = N(() => {
    c.zoomOut();
  }, [c]), Fe = N(() => {
    c.resetZoom();
  }, [c]), Kt = N(() => {
    c.undo();
  }, [c]), Xt = N(() => {
    c.redo();
  }, [c]);
  ae(() => {
    const P = (Q) => {
      if (Q.ctrlKey || Q.metaKey) {
        ["+", "=", "-", "_", "0", "z", "y"].includes(Q.key) && Q.preventDefault();
        const ie = document.activeElement === y.current, fe = document.activeElement === p.current, ye = document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable === !1;
        if (ie || fe || !ye)
          switch (Q.key) {
            case "+":
            case "=":
              $e();
              break;
            case "-":
            case "_":
              Ue();
              break;
            case "0":
              Fe();
              break;
            case "z":
              Q.shiftKey || Kt();
              break;
            case "y":
              Xt();
              break;
          }
      }
    };
    return window.addEventListener("keydown", P), () => {
      window.removeEventListener("keydown", P);
    };
  }, [$e, Ue, Fe, Kt, Xt]);
  const rr = N(() => {
    !p.current || !y.current || ze.current || (Ee.current && clearTimeout(Ee.current), Ee.current = setTimeout(() => {
      if (ze.current) {
        Ee.current = null;
        return;
      }
      const P = W(p);
      P !== L && P >= 0 && c.setActivePage(P), Ee.current = null;
    }, va));
  }, [W, L, c]), or = Te(() => {
    if (!T) return 0;
    const Q = T.replace(/<[^>]*>/g, " ").match(new RegExp("\\p{L}+", "gu"));
    return Q ? Q.length : 0;
  }, [T]), sr = R.length || 1, ar = N((P) => {
    V(!0), x(P);
  }, []), Jt = N(() => {
    V(!1), x(null);
  }, []), ir = N((P, Q) => {
  }, []), cr = N((P) => {
    P && P.mode === "row" ? (d(P.rowIndex), D(null)) : P && P.mode === "column" ? (D(P.colIndex), d(null)) : (d(null), D(null));
  }, []), lr = N((P) => {
    Y(!0), se(P);
  }, []), Qt = N(() => {
    Y(!1), se(null);
  }, []), ur = N((P, Q) => {
  }, []);
  return ae(() => () => {
    Ee.current && clearTimeout(Ee.current);
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "multi-page-editor", children: [
    g && /* @__PURE__ */ m.jsx(
      Lt,
      {
        currentFormat: {
          ...M,
          imageSelected: F
        },
        onFormatText: S,
        onAddPageBreak: tr,
        canUndo: C,
        canRedo: h
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "editor-container", children: [
      i && /* @__PURE__ */ m.jsx(
        Ws,
        {
          editorView: null,
          isCollapsed: Re,
          onToggle: () => Be((P) => !P),
          wordCount: or,
          pageCount: sr
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: p,
          onScroll: rr,
          children: /* @__PURE__ */ m.jsx(
            oa,
            {
              content: T,
              dimensions: de,
              pageSize: v,
              pageMargins: b,
              pageBoundaries: R,
              editorRef: y,
              onInput: er,
              onContentChange: st,
              onClick: () => y.current?.focus(),
              onRemovePageBreak: nr,
              zoomLevel: j
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsx(
        Dt,
        {
          editorRef: y,
          onImageSelect: ar,
          onImageDeselect: Jt,
          onImageResize: ir,
          resizeOptions: {
            ..._e,
            preserveAspectRatio: O,
            aspectRatio: O
          }
        }
      ),
      /* @__PURE__ */ m.jsx(
        jt,
        {
          editorRef: y,
          onTableSelect: lr,
          onTableDeselect: Qt,
          onTableResize: ur
        }
      ),
      /* @__PURE__ */ m.jsx(
        $t,
        {
          editorRef: y,
          onCellSelectionChange: cr
        }
      ),
      F && z && /* @__PURE__ */ m.jsx(
        Bt,
        {
          imageElement: z,
          initialPreserveAspectRatio: O,
          onAlignChange: (P) => {
          },
          onAspectRatioToggle: (P) => {
            A(P);
          },
          onDelete: () => {
            if (z) {
              const P = z.getAttribute("data-key");
              P && ho(P).catch((Q) => {
                console.error("Failed to delete image from IndexedDB:", Q);
              });
            }
          },
          onClose: Jt
        }
      ),
      k && te && /* @__PURE__ */ m.jsx(
        zt,
        {
          tableElement: te,
          onAlignChange: (P) => {
          },
          onClose: Qt,
          selectedRowIndex: w,
          selectedColIndex: _,
          editorRef: y
        }
      ),
      l && /* @__PURE__ */ m.jsx("div", { className: "page-manager-sidebar", children: e ? tt.cloneElement(e, {
        onNavigate: Zt,
        onAddPage: Yt,
        onDeletePage: Vt,
        onPageSizeChange: qt,
        onPageMarginsChange: Gt,
        zoomLevel: j,
        canZoomIn: Tt(j),
        canZoomOut: vt(j),
        onZoomIn: $e,
        onZoomOut: Ue,
        onZoomReset: Fe
      }) : /* @__PURE__ */ m.jsx(
        sa,
        {
          pageBoundaries: R,
          activePage: L,
          pageSize: v,
          pageMargins: b,
          zoomLevel: j,
          canZoomIn: Tt(j),
          canZoomOut: vt(j),
          onNavigate: Zt,
          onAddPage: Yt,
          onDeletePage: Vt,
          onPageSizeChange: qt,
          onPageMarginsChange: Gt,
          onZoomIn: $e,
          onZoomOut: Ue,
          onZoomReset: Fe
        }
      ) })
    ] })
  ] });
});
Ut.displayName = "HtmlEditor";
Ut.propTypes = {
  pageManagerComponent: E.element,
  onNavigatePage: E.func,
  onAddPage: E.func,
  onDeletePage: E.func,
  onPageSizeChange: E.func,
  onPageMarginsChange: E.func,
  onChange: E.func,
  showSidebar: E.bool,
  showToolbar: E.bool,
  showPageManager: E.bool
};
Ut.defaultProps = {
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
class Qn extends tt.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ m.jsxs("div", { style: {
      padding: "20px",
      margin: "20px",
      border: "2px solid #f44336",
      borderRadius: "4px",
      backgroundColor: "#ffebee",
      color: "#c62828"
    }, children: [
      /* @__PURE__ */ m.jsx("h2", { style: { marginTop: 0 }, children: "⚠️ Something went wrong" }),
      /* @__PURE__ */ m.jsx("p", { children: "The editor encountered an unexpected error and couldn't continue." }),
      this.props.showDetails && this.state.error && /* @__PURE__ */ m.jsxs("details", { style: {
        marginTop: "10px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace"
      }, children: [
        /* @__PURE__ */ m.jsx("summary", { style: { cursor: "pointer", fontWeight: "bold" }, children: "Error Details" }),
        /* @__PURE__ */ m.jsxs("pre", { style: {
          marginTop: "10px",
          overflow: "auto",
          maxHeight: "200px"
        }, children: [
          this.state.error.toString(),
          this.state.errorInfo && this.state.errorInfo.componentStack
        ] })
      ] }),
      /* @__PURE__ */ m.jsx(
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
  children: E.node.isRequired,
  fallback: E.node,
  onError: E.func,
  onReset: E.func,
  showDetails: E.bool
};
Qn.defaultProps = {
  fallback: null,
  onError: void 0,
  onReset: void 0,
  showDetails: process.env.NODE_ENV === "development"
};
export {
  Lr as COMMON_FONT_SIZES,
  nt as DEFAULT_FONT_SIZE,
  _e as DEFAULT_IMAGE_RESIZE_OPTIONS,
  An as DEFAULT_PAGE_SIZE,
  rt as DEFAULT_TABLE_RESIZE_OPTIONS,
  Sa as DocumentProvider,
  Lt as EditorToolbar,
  Qn as ErrorBoundary,
  Nn as FONT_SIZE_MAP,
  Ut as HtmlEditor,
  Dt as ImageResizeHandlers,
  Oe as PAGE_SIZES,
  sa as PageManager,
  oa as PageView,
  U as RESIZE_HANDLERS,
  Ws as Sidebar,
  le as TABLE_RESIZE_HANDLERS,
  jt as TableResizeHandlers,
  Ma as applyImageDimensions,
  Ce as applyTableDimensions,
  Na as calculateResizeDimensions,
  ua as calculateTableResizeDimensions,
  La as clearImages,
  io as createResizeOverlay,
  da as createTableResizeOverlay,
  ho as deleteImage,
  Ia as getAllImageKeys,
  Ra as getAvailablePageSizes,
  go as getImage,
  Pa as getImageDimensions,
  _t as getPageDimensions,
  Oa as getPixelValue,
  _a as getPointValue,
  ge as getTableStructure,
  be as isResizableImage,
  ue as isResizableTable,
  ka as isValidFontSize,
  Ca as isValidPageSize,
  qs as logger,
  Hr as pixelsToPoints,
  Ir as pointsToPixels,
  pt as removeResizeOverlay,
  Ke as removeTableResizeOverlay,
  po as saveImage,
  xt as updateResizeOverlay,
  Rt as updateTableResizeOverlay,
  ao as useContinuousReflow,
  Sn as useDocument,
  we as useDocumentActions,
  On as useDocumentState,
  Br as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
