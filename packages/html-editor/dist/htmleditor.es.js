import ye, { createContext as $e, useContext as Ue, useReducer as He, useMemo as ue, useState as de, useCallback as L, useRef as U, useEffect as G, forwardRef as xe, createElement as me, useImperativeHandle as Ge } from "react";
import { v4 as K } from "uuid";
import { createSlice as qe } from "@reduxjs/toolkit";
var ie = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Ve() {
  if (Ee) return te;
  Ee = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(t, r, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), r.key !== void 0 && (o = "" + r.key), "key" in r) {
      s = {};
      for (var l in r)
        l !== "key" && (s[l] = r[l]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: t,
      key: o,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return te.Fragment = n, te.jsx = a, te.jsxs = a, te;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function We() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === B ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case w:
          return "Fragment";
        case p:
          return "Profiler";
        case P:
          return "StrictMode";
        case x:
          return "Suspense";
        case T:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case N:
            return "Portal";
          case A:
            return c.displayName || "Context";
          case y:
            return (c._context.displayName || "Context") + ".Consumer";
          case h:
            var m = c.render;
            return c = c.displayName, c || (c = m.displayName || m.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case b:
            return m = c.displayName || null, m !== null ? m : e(c.type) || "Memo";
          case _:
            m = c._payload, c = c._init;
            try {
              return e(c(m));
            } catch {
            }
        }
      return null;
    }
    function n(c) {
      return "" + c;
    }
    function a(c) {
      try {
        n(c);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var j = m.error, R = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return j.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), n(c);
      }
    }
    function t(c) {
      if (c === w) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === _)
        return "<...>";
      try {
        var m = e(c);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var c = I.A;
      return c === null ? null : c.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(c) {
      if (D.call(c, "key")) {
        var m = Object.getOwnPropertyDescriptor(c, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, m) {
      function j() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: j,
        configurable: !0
      });
    }
    function u() {
      var c = e(this.type);
      return J[c] || (J[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function d(c, m, j, R, Z, ee) {
      var O = j.ref;
      return c = {
        $$typeof: M,
        type: c,
        key: m,
        props: j,
        _owner: R
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: u
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
        value: ee
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function C(c, m, j, R, Z, ee) {
      var O = m.children;
      if (O !== void 0)
        if (R)
          if (z(O)) {
            for (R = 0; R < O.length; R++)
              g(O[R]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(O);
      if (D.call(m, "key")) {
        O = e(c);
        var V = Object.keys(m).filter(function(H) {
          return H !== "key";
        });
        R = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", oe[O + R] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          O,
          V,
          O
        ), oe[O + R] = !0);
      }
      if (O = null, j !== void 0 && (a(j), O = "" + j), o(m) && (a(m.key), O = "" + m.key), "key" in m) {
        j = {};
        for (var E in m)
          E !== "key" && (j[E] = m[E]);
      } else j = m;
      return O && l(
        j,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), d(
        c,
        O,
        j,
        r(),
        Z,
        ee
      );
    }
    function g(c) {
      k(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === _ && (c._payload.status === "fulfilled" ? k(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function k(c) {
      return typeof c == "object" && c !== null && c.$$typeof === M;
    }
    var f = ye, M = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), A = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), I = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, z = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var Y, J = {}, X = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), Q = q(t(s)), oe = {};
    ne.Fragment = w, ne.jsx = function(c, m, j) {
      var R = 1e4 > I.recentlyCreatedOwnerStacks++;
      return C(
        c,
        m,
        j,
        !1,
        R ? Error("react-stack-top-frame") : X,
        R ? q(t(c)) : Q
      );
    }, ne.jsxs = function(c, m, j) {
      var R = 1e4 > I.recentlyCreatedOwnerStacks++;
      return C(
        c,
        m,
        j,
        !0,
        R ? Error("react-stack-top-frame") : X,
        R ? q(t(c)) : Q
      );
    };
  })()), ne;
}
var Pe;
function Ye() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? ie.exports = Ve() : ie.exports = We()), ie.exports;
}
var i = Ye();
const pe = "A4", F = "<p><br></p>", Te = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ae = (e, n = pe) => ({
  id: K(),
  index: e,
  size: n,
  content: F,
  images: [],
  isBreakPoint: !1
}), ce = (e) => typeof e != "string" || e.trim() === "" ? F : e, Ne = (e, n = pe) => (e.length > 0 ? e : [ae(0, n)]).map((t, r) => ({
  id: t.id || K(),
  index: r,
  size: t.size || n,
  content: ce(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), be = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || pe, t = Ne(e.pages || [ae(0, a)], a), s = [{
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: (Te[a] || Te.A4).height
  }];
  return {
    id: K(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    editorMode: e.editorMode || "continuous",
    continuousContent: e.continuousContent || F,
    pageBoundaries: e.pageBoundaries || s
  };
}, v = {
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
  DUPLICATE_PAGE: "DUPLICATE_PAGE"
}, Je = (e, n) => {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  switch (n.type) {
    case v.INITIALIZE_DOCUMENT: {
      const { initialContent: t = F, pageSize: r = pe } = n.payload || {}, s = { ...ae(0, r), content: ce(t) };
      return be({
        title: e.title,
        pageSize: r,
        pages: [s]
      });
    }
    case v.UPDATE_TITLE:
      return {
        ...e,
        title: n.payload,
        updatedAt: a
      };
    case v.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: r } = n.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[t] = {
        ...s[t],
        content: ce(r)
      }, {
        ...e,
        pages: s,
        updatedAt: a
      };
    }
    case v.UPDATE_PAGES: {
      const t = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, r = Ne(t.pages || [], e.pageSize), s = Array.isArray(t.pageBreaks) ? t.pageBreaks : r.slice(0, -1).map((o, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pages: r,
        activePage: Math.min(e.activePage, r.length - 1),
        pageBreaks: s,
        totalPages: r.length,
        updatedAt: a
      };
    }
    case v.ADD_PAGE: {
      const t = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length, r = [...e.pages];
      r.splice(t, 0, ae(t, e.pageSize));
      const s = r.map((l, u) => ({
        ...l,
        index: u,
        size: e.pageSize
      })), o = s.slice(0, -1).map((l, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: t,
        pageBreaks: o,
        totalPages: s.length,
        updatedAt: a
      };
    }
    case v.DELETE_PAGE: {
      const t = n.payload;
      if (e.pages.length <= 1)
        return e;
      const r = [...e.pages];
      r.splice(t, 1);
      const s = r.map((u, d) => ({
        ...u,
        index: d,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= s.length ? o = s.length - 1 : t <= o && o > 0 && (o -= 1);
      const l = s.slice(0, -1).map((u, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
      }));
      return {
        ...e,
        pages: s,
        activePage: o,
        pageBreaks: l,
        totalPages: s.length,
        updatedAt: a
      };
    }
    case v.SET_ACTIVE_PAGE: {
      const t = n.payload, r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t >= 0 && t < r ? {
        ...e,
        activePage: t,
        updatedAt: a
      } : e;
    }
    case v.UPDATE_PAGE_SIZE: {
      const t = n.payload, r = e.pages.map((o, l) => ({
        ...o,
        index: l,
        size: t
      })), s = r.slice(0, -1).map((o, l) => ({
        id: `auto-break-${l}`,
        pageNumber: l + 1
      }));
      return {
        ...e,
        pageSize: t,
        pages: r,
        pageBreaks: s,
        updatedAt: a
      };
    }
    case v.RESET_DOCUMENT:
      return be();
    case v.UPDATE_CONTINUOUS_CONTENT:
      return {
        ...e,
        continuousContent: ce(n.payload),
        updatedAt: a
      };
    case v.UPDATE_PAGE_BOUNDARIES: {
      const t = n.payload || [], r = e.activePage >= t.length ? Math.max(0, t.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: t,
        totalPages: t.length,
        activePage: r,
        updatedAt: a
      };
    }
    case v.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: r } = n.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (t === "end")
        o = o + s + "<p><br></p>";
      else if (typeof t == "number") {
        const l = o.substring(0, t), u = o.substring(t);
        o = l + s + u;
      } else if (typeof r == "number" && typeof document < "u") {
        const l = document.createElement("div");
        l.innerHTML = o;
        const u = l.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && u.length === 0)
          o = o + s + "<p><br></p>";
        else if (r < u.length) {
          const d = u[r], C = document.createElement("page-break");
          C.setAttribute("data-page-break", "true"), C.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const g = document.createElement("p");
          g.innerHTML = "<br>", d.parentNode.insertBefore(C, d.nextSibling), C.parentNode.insertBefore(g, C.nextSibling), o = l.innerHTML;
        } else
          o = o + s + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: a
      };
    }
    case v.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = n.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const r = document.createElement("div");
      r.innerHTML = e.continuousContent;
      const s = r.querySelectorAll('page-break, [data-page-break="true"]');
      return s[t] && s[t].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, u) => {
        l.setAttribute("data-page-number", String(u + 2));
      }), {
        ...e,
        continuousContent: r.innerHTML,
        updatedAt: a
      };
    }
    case v.SET_EDITOR_MODE: {
      const t = n.payload;
      if (t === e.editorMode)
        return e;
      let r = e.continuousContent, s = e.pages;
      return t === "continuous" ? r = e.pages.map((l) => l.content).filter((l) => l && l !== F).join(`
`) || F : e.continuousContent && e.continuousContent !== F && (s = [{ ...ae(0, e.pageSize), content: e.continuousContent }]), {
        ...e,
        editorMode: t,
        continuousContent: r,
        pages: s,
        updatedAt: a
      };
    }
    default:
      return e;
  }
}, we = $e(null), hn = ({ children: e, initialState: n = {} }) => {
  const [a, t] = He(Je, be(n)), r = ue(() => ({
    initializeDocument: (o) => t({ type: v.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => t({ type: v.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => t({ type: v.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => t({ type: v.UPDATE_PAGES, payload: o }),
    addPage: (o) => t({ type: v.ADD_PAGE, payload: o }),
    deletePage: (o) => t({ type: v.DELETE_PAGE, payload: o }),
    setActivePage: (o) => t({ type: v.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => t({ type: v.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => t({ type: v.RESET_DOCUMENT }),
    updateContinuousContent: (o) => t({ type: v.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => t({ type: v.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => t({ type: v.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => t({ type: v.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => t({ type: v.SET_EDITOR_MODE, payload: o }),
    insertPageAt: (o) => t({ type: v.INSERT_PAGE_AT, payload: o }),
    movePageTo: (o) => t({ type: v.MOVE_PAGE_TO, payload: o }),
    duplicatePage: (o) => t({ type: v.DUPLICATE_PAGE, payload: o })
  }), []), s = ue(() => ({
    state: a,
    actions: r,
    dispatch: t
  }), [a, r]);
  return /* @__PURE__ */ i.jsx(we.Provider, { value: s, children: e });
}, je = () => {
  const e = Ue(we);
  if (!e)
    throw new Error("useDocument must be used within a DocumentProvider");
  return e;
}, Me = () => {
  const { state: e } = je();
  return e;
}, Be = () => {
  const { actions: e } = je();
  return e;
}, Ze = () => {
  const [e, n] = de({
    bold: !1,
    italic: !1,
    underline: !1,
    strikethrough: !1,
    alignLeft: !1,
    alignCenter: !1,
    alignRight: !1,
    alignJustify: !1,
    fontFamily: "Arial",
    fontSize: "12px"
  }), a = L((t, r = null) => {
    if (t === "fontSize") {
      const o = {
        "10px": "1",
        "12px": "2",
        "14px": "3",
        "16px": "4",
        "18px": "5",
        "24px": "6",
        "32px": "7"
      }[r] || "2";
      document.execCommand("fontSize", !1, o);
      const l = window.getSelection();
      if (l && l.rangeCount > 0) {
        const u = l.getRangeAt(0);
        if (u.toString()) {
          const C = document.createElement("span");
          C.style.fontSize = r, u.surroundContents(C);
        }
      }
    } else
      document.execCommand(t, !1, r);
    t === "bold" ? n((s) => ({ ...s, bold: !s.bold })) : t === "italic" ? n((s) => ({ ...s, italic: !s.italic })) : t === "underline" ? n((s) => ({ ...s, underline: !s.underline })) : t === "strikethrough" ? n((s) => ({ ...s, strikethrough: !s.strikethrough })) : t === "justifyLeft" ? n((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : t === "justifyCenter" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : t === "justifyRight" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : t === "justifyFull" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 })) : t === "fontSize" && n((s) => ({ ...s, fontSize: r }));
  }, []);
  return {
    currentFormat: e,
    formatText: a
  };
}, se = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ve = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Fe = (e, n) => {
  const a = Be(), t = U(null), r = U(null), s = U(e), o = U(!1);
  G(() => {
    s.current = e;
  }, [e]), G(() => () => {
    t.current && clearTimeout(t.current), r.current && clearTimeout(r.current);
  }, []);
  const l = L((p, y) => {
    let A = 0;
    for (let h = 0; h < p.length; h++) {
      const x = p[h], T = x.getBoundingClientRect().height;
      if (A + T > y)
        return { overflowIndex: h, overflowElement: x, accumulatedHeight: A };
      A += T;
    }
    return null;
  }, []), u = L((p, y) => {
    if (!p || !n?.current)
      return !1;
    try {
      const A = n.current, h = document.createElement("page-break");
      return h.setAttribute("data-page-break", "true"), h.setAttribute("contenteditable", "false"), h.setAttribute("data-page-number", y || "2"), p.parentNode.insertBefore(h, p), !0;
    } catch (A) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", A), !1;
    }
  }, [n]), d = L(() => {
    if (!(!n?.current || o.current))
      try {
        o.current = !0;
        const p = n.current, y = s.current || "A4", h = (se[y] || se.A4).height - ve.top - ve.bottom, x = Array.from(p.children), T = x.filter(
          (B) => B.tagName === "PAGE-BREAK" || B.getAttribute("data-page-break") === "true"
        ), b = [];
        let _ = [];
        for (const B of x)
          B.tagName === "PAGE-BREAK" || B.getAttribute("data-page-break") === "true" ? _.length > 0 && (b.push(_), _ = []) : _.push(B);
        _.length > 0 && b.push(_), b.length === 0 && x.length > 0 && b.push(x.filter(
          (B) => !(B.tagName === "PAGE-BREAK" || B.getAttribute("data-page-break") === "true")
        ));
        let $ = !1;
        for (let B = 0; B < b.length; B++) {
          const I = b[B], D = l(I, h);
          if (D && D.overflowIndex > 0) {
            const z = B + 2;
            if (u(D.overflowElement, z)) {
              $ = !0;
              break;
            }
          }
        }
        if ($) {
          const B = p.innerHTML;
          a.updateContinuousContent(B), setTimeout(() => {
            k();
          }, 50);
        }
      } catch (p) {
        console.warn("[checkAndReflow] Reflow failed:", p);
      } finally {
        o.current = !1;
      }
  }, [n, l, u, a]), C = L((p = 500) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      r.current = null, d();
    }, p);
  }, [d]), g = L((p = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const y = p.pageSize || s.current || "A4", A = se[y] || se.A4, h = n.current, x = h.querySelectorAll('page-break, [data-page-break="true"]'), T = [];
    return T.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: A.height
      // No breakElement for first page
    }), x.forEach((b, _) => {
      const $ = b.getBoundingClientRect(), B = h.getBoundingClientRect(), I = $.top - B.top + h.scrollTop;
      T.push({
        id: `page-${_ + 1}`,
        pageNumber: _ + 2,
        top: I,
        height: A.height
        // Don't store breakElement - not serializable
      });
    }), T;
  }, [n]), k = L((p = {}) => {
    const y = g(p);
    return a.updatePageBoundaries(y), y;
  }, [g, a]), f = L((p = {}) => {
    t.current && clearTimeout(t.current);
    const y = typeof p.delay == "number" ? p.delay : 300;
    t.current = setTimeout(() => {
      t.current = null, k(p);
    }, Math.max(0, y));
  }, [k]), M = L((p) => {
    if (!p?.current || !n?.current)
      return 0;
    try {
      const y = p.current, h = n.current.querySelectorAll('page-break, [data-page-break="true"]');
      if (h.length === 0)
        return 0;
      const x = y.getBoundingClientRect(), T = x.top + x.height / 2;
      for (let b = h.length - 1; b >= 0; b--)
        if (h[b].getBoundingClientRect().top < T)
          return b + 1;
      return 0;
    } catch (y) {
      return console.warn("[getCurrentPage] Failed to calculate page:", y), 0;
    }
  }, [n]), N = L((p) => {
    if (!n?.current)
      return;
    const y = n.current;
    y.focus();
    try {
      let A = null, h = 0;
      if (p === 0)
        A = y.firstChild, h = 0;
      else {
        const T = y.querySelectorAll('page-break, [data-page-break="true"]')[p - 1];
        T && T.nextSibling && (A = T.nextSibling, h = 0);
      }
      if (A) {
        const x = document.createRange(), T = window.getSelection();
        A.nodeType === Node.TEXT_NODE ? x.setStart(A, h) : x.setStart(A, 0), x.collapse(!0), T.removeAllRanges(), T.addRange(x);
      }
    } catch (A) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", A);
    }
  }, [n]), w = L((p, y) => {
    if (!y?.current || !n?.current) {
      console.warn("[scrollToPage] Missing refs");
      return;
    }
    const A = y.current, h = n.current;
    try {
      let x = null;
      if (p === 0)
        x = h;
      else {
        const b = h.querySelectorAll('page-break, [data-page-break="true"]')[p - 1];
        if (b)
          x = b;
        else {
          console.warn("[scrollToPage] Page break not found for page", p);
          return;
        }
      }
      if (x) {
        const T = x.getBoundingClientRect(), b = A.getBoundingClientRect(), _ = A.scrollTop + (T.top - b.top);
        console.log("[scrollToPage] Scrolling to page", p, "scrollTop:", _), A.scrollTo({
          top: _,
          behavior: "smooth"
        }), setTimeout(() => {
          N(p);
        }, 400);
      }
    } catch (x) {
      console.error("[scrollToPage] Error:", x);
    }
  }, [n, N]), P = L((p) => {
    if (!n?.current)
      return !1;
    const y = n.current;
    if (g().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const h = Array.from(y.querySelectorAll('page-break, [data-page-break="true"]'));
      if (p > h.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const x = window.getSelection();
      let T = !1, b = [], _ = null;
      if (p === 0) {
        const I = h[0];
        if (!I)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let D = y.firstChild;
        for (; D && D !== I; )
          b.push(D), D = D.nextSibling;
        _ = I;
      } else {
        const I = h[p - 1];
        if (!I)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const D = h[p];
        let z = I.nextSibling;
        for (; z && z !== D; )
          b.push(z), z = z.nextSibling;
        _ = I;
      }
      if (x && x.rangeCount > 0) {
        const D = x.getRangeAt(0).startContainer;
        for (const z of b)
          if (z.contains(D) || z === D) {
            T = !0;
            break;
          }
      }
      _ && _.parentNode && _.remove(), b.forEach((I) => {
        I.parentNode && I.remove();
      }), y.querySelectorAll('page-break, [data-page-break="true"]').forEach((I, D) => {
        I.setAttribute("data-page-number", String(D + 2));
      }), T && setTimeout(() => {
        N(0);
      }, 50);
      const B = y.innerHTML;
      return a.updateContinuousContent(B), setTimeout(() => {
        k();
      }, 100), !0;
    } catch (h) {
      return console.error("[removePageAndContent] Failed to remove page:", h), !1;
    }
  }, [n, g, a, k, N]);
  return {
    calculatePageBoundaries: g,
    checkAndUpdateBoundaries: f,
    updateBoundaries: k,
    getCurrentPage: M,
    scrollToPage: w,
    positionCursorAtPage: N,
    checkAndReflow: d,
    triggerAutoReflow: C,
    removePageAndContent: P,
    boundaryTimeoutRef: t,
    reflowTimeoutRef: r
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xe = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, a, t) => t ? t.toUpperCase() : a.toLowerCase()
), _e = (e) => {
  const n = Xe(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ie = (...e) => e.filter((n, a, t) => !!n && n.trim() !== "" && t.indexOf(n) === a).join(" ").trim(), Qe = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var et = {
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
const tt = xe(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: t,
    className: r = "",
    children: s,
    iconNode: o,
    ...l
  }, u) => me(
    "svg",
    {
      ref: u,
      ...et,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: t ? Number(a) * 24 / Number(n) : a,
      className: Ie("lucide", r),
      ...!s && !Qe(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...o.map(([d, C]) => me(d, C)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S = (e, n) => {
  const a = xe(
    ({ className: t, ...r }, s) => me(tt, {
      ref: s,
      iconNode: n,
      className: Ie(
        `lucide-${Ke(_e(e))}`,
        `lucide-${e}`,
        t
      ),
      ...r
    })
  );
  return a.displayName = _e(e), a;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], at = S("bold", nt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ot = S("chevron-left", rt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], st = S("chevron-right", it);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], lt = S("file-check", ct);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], ge = S("file-text", ut);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], gt = S("hash", dt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], ht = S("heading-1", pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], mt = S("heading-2", ft);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], kt = S("heading-3", bt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], xt = S("image", yt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], At = S("italic", Et);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Tt = S("link", Pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], _t = S("list-ordered", vt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], De = S("list", Ct);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Nt = S("plus", St);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], jt = S("redo", wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Bt = S("settings", Mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Dt = S("square-check-big", It);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Ot = S("strikethrough", Rt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Lt = S("table", zt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Ut = S("text-align-center", $t);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Gt = S("text-align-end", Ht);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Vt = S("text-align-justify", qt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Yt = S("text-align-start", Wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Zt = S("underline", Jt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Kt = S("undo", Ft);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Qt = S("x", Xt), en = ({ editorView: e, isCollapsed: n, onToggle: a, wordCount: t, pageCount: r }) => {
  const s = Me(), { pages: o, activePage: l, continuousContent: u, editorMode: d } = s, [C, g] = de(0), [k, f] = de([]);
  G(() => {
    if (t !== void 0 && r !== void 0) {
      if (g(t), u) {
        const P = document.createElement("div");
        P.innerHTML = u;
        const p = P.querySelectorAll("h1, h2, h3, h4, h5, h6"), y = Array.from(p).map((A, h) => {
          const x = parseInt(A.tagName.charAt(1)), T = A.textContent.trim();
          return T ? {
            id: `heading-${h}`,
            level: x,
            text: T,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        f(y);
      }
      return;
    }
    let N = 0;
    const w = [];
    o.forEach((P, p) => {
      if (P.content) {
        const y = document.createElement("div");
        y.innerHTML = P.content;
        const h = (y.textContent || y.innerText || "").trim().split(/\s+/).filter((T) => T.length > 0);
        N += h.length, y.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((T, b) => {
          const _ = parseInt(T.tagName.charAt(1)), $ = T.textContent.trim();
          $ && w.push({
            id: `heading-${p}-${b}`,
            level: _,
            text: $,
            page: p + 1
          });
        });
      }
    }), g(N), f(w);
  }, [o, t, r, u]);
  const M = r !== void 0 ? r : o.length;
  return /* @__PURE__ */ i.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ i.jsx(ge, { size: 18 }),
            /* @__PURE__ */ i.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ i.jsx(st, { size: 16 }) : /* @__PURE__ */ i.jsx(ot, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ i.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ i.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(lt, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: M })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(gt, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: C.toLocaleString() })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(ge, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: l + 1 })
            ] })
          ] }),
          k.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ i.jsxs("h3", { children: [
              /* @__PURE__ */ i.jsx(De, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "document-outline", "data-testid": "outline", children: k.map((N) => {
              const w = N.level === 1 ? ht : N.level === 2 ? mt : kt;
              return /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${N.level}`,
                  style: { marginLeft: `${(N.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ i.jsx(w, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ i.jsx("span", { className: "outline-text", children: N.text }),
                    /* @__PURE__ */ i.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      N.page
                    ] })
                  ]
                },
                N.id
              );
            }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ i.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ i.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ i.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function tn() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function nn(e) {
  return new Promise((n, a) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      a(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      a(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const r = new FileReader();
    r.onload = (s) => {
      const o = s.target.result;
      if (o.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const d = `editor-image-${tn()}`;
        localStorage.setItem(d, o), n(d);
      } catch (d) {
        d.name === "QuotaExceededError" ? a(new Error("Storage quota exceeded")) : a(d);
      }
    }, r.onerror = () => {
      a(new Error("Error reading image file"));
    }, r.readAsDataURL(e);
  });
}
function fn(e) {
  return localStorage.getItem(e);
}
function mn(e) {
  localStorage.removeItem(e);
}
function bn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function kn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class an {
  constructor(n = "Editor") {
    this.namespace = n;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(n, a, t) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${n}] ${a}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(n, a) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(n, a) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(n, a) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(n, a) {
  }
}
const Ce = new an("Editor"), rn = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: a,
  onPageSizeChange: t,
  onAddPageBreak: r
}) => {
  const s = async (o) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(o.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (o.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const u = await nn(o), d = localStorage.getItem(u);
      d && (document.execCommand("insertImage", !1, d), Ce.info("Image inserted", { key: u }));
    } catch (l) {
      Ce.error("Error uploading image", l);
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ i.jsx(at, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ i.jsx(At, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ i.jsx(Zt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ i.jsx(Ot, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ i.jsx(Yt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ i.jsx(Ut, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ i.jsx(Gt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ i.jsx(Vt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsxs(
      "select",
      {
        onChange: (o) => a("fontName", o.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ i.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ i.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ i.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ i.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ i.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "select",
      {
        onChange: (o) => a("fontSize", o.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ i.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ i.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ i.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ i.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ i.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ i.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ i.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ i.jsx(De, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ i.jsx(_t, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ i.jsx(Dt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => {
          const o = prompt("Enter URL:");
          o && a("createLink", o);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ i.jsx(Tt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ i.jsx(Lt, { size: 16 })
      }
    ),
    r && /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: r,
        title: "Insert Page Break",
        children: /* @__PURE__ */ i.jsx(ge, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("undo"),
        title: "Undo",
        children: /* @__PURE__ */ i.jsx(Kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("redo"),
        title: "Redo",
        children: /* @__PURE__ */ i.jsx(jt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (o) => o.target.files[0] && s(o.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ i.jsx(xt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsxs(
      "select",
      {
        value: n,
        onChange: (o) => t(o.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ i.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ i.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ i.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
}, on = ({
  content: e,
  dimensions: n,
  pageSize: a,
  pageBoundaries: t = [],
  editorRef: r,
  onInput: s,
  onKeyDown: o,
  onClick: l,
  onScroll: u
}) => {
  const d = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, C = (g) => {
    if (g.key === "Tab")
      return g.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const k = window.getSelection();
    if (!k || k.rangeCount === 0) return;
    const f = k.getRangeAt(0), { startContainer: M, endContainer: N } = f, w = (P) => P ? P.nodeType === Node.ELEMENT_NODE ? P.tagName === "PAGE-BREAK" || P.getAttribute("data-page-break") === "true" : P.parentElement && w(P.parentElement) : !1;
    if ((g.key === "Backspace" || g.key === "Delete") && (w(M) || w(N)))
      return g.preventDefault(), !1;
    o && o(g);
  };
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${n.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh"
      },
      children: /* @__PURE__ */ i.jsx(
        "div",
        {
          ref: r,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${n.height}px`,
            backgroundColor: "white",
            padding: `${d.top}px ${d.right}px ${d.bottom}px ${d.left}px`,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            lineHeight: "1.15",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: s,
          onKeyDown: C,
          onClick: l,
          onScroll: u,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, sn = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: n = 0,
  pageSize: a = "A4",
  onNavigate: t,
  onAddPage: r,
  onDeletePage: s,
  onPageSizeChange: o
} = {}) => {
  const l = Math.max(e?.length || 0, 1), u = (k) => {
    t && t(k);
  }, d = () => {
    r && r();
  }, C = (k) => {
    if (l <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    s && s(k);
  }, g = (k) => {
    o && o(k);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ i.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ i.jsx(Bt, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: a,
          onChange: (k) => g(k.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ i.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ i.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((k, f) => /* @__PURE__ */ i.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${f === n ? "active" : ""}`,
          onClick: () => u(f),
          "aria-label": `Go to page ${f + 1}`,
          "aria-current": f === n ? "page" : void 0,
          children: [
            /* @__PURE__ */ i.jsx(ge, { size: 14 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "Page ",
              f + 1
            ] })
          ]
        }
      ),
      l > 1 && /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (M) => {
            M.stopPropagation(), C(f);
          },
          "aria-label": `Delete page ${f + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ i.jsx(Qt, { size: 14 })
        }
      )
    ] }, k.id || `page-${f}`)) }),
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: d,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ i.jsx(Nt, { size: 16 }),
          /* @__PURE__ */ i.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
}, cn = ye.memo(sn), Se = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ln = xe(({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: a,
  onDeletePage: t,
  onPageSizeChange: r,
  onChange: s,
  showSidebar: o = !0,
  showToolbar: l = !0,
  showPageManager: u = !0
}, d) => {
  const C = Me(), g = Be(), { pageSize: k, continuousContent: f, pageBoundaries: M, activePage: N } = C, w = U(null), P = U(null), { currentFormat: p, formatText: y } = Ze(), {
    checkAndUpdateBoundaries: A,
    getCurrentPage: h,
    scrollToPage: x,
    positionCursorAtPage: T,
    updateBoundaries: b,
    triggerAutoReflow: _,
    removePageAndContent: $
  } = Fe(k, P), B = ue(() => Se[k] || Se.A4, [k]), [I, D] = de(!1), z = U(null), q = U(!1), Y = U(!1), J = U(!1);
  G(() => {
    if (P.current && !J.current) {
      P.current.innerHTML = f, J.current = !0;
      const E = setTimeout(() => {
        b();
      }, 50);
      return () => clearTimeout(E);
    }
  }, [f, b]);
  const X = U(f);
  G(() => {
    P.current && J.current && X.current !== f && (P.current.innerHTML !== f && (P.current.innerHTML = f, setTimeout(() => {
      b(), q.current && (q.current = !1, setTimeout(() => {
        const H = M.length > 0 ? M.length - 1 : 0;
        g.setActivePage(H), x(H, w);
      }, 50));
    }, 50)), X.current = f);
  }, [f, b, M.length, g, x]), G(() => {
    s && J.current && s(f);
  }, [f, s]), Ge(d, () => ({
    /**
     * Get the current HTML content from the editor
     * @returns {string} The HTML content with page breaks
     */
    getHTMLContent: () => f,
    /**
     * Get the plain text content (HTML stripped)
     * @returns {string} Plain text content
     */
    getPlainText: () => f.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    /**
     * Set the editor content programmatically
     * @param {string} html - HTML content to set
     */
    setContent: (E) => {
      g.updateContinuousContent(E), P.current && (P.current.innerHTML = E, setTimeout(() => {
        b();
      }, 50));
    }
  }), [f, g, b]);
  const Q = U(!1);
  G(() => {
    if (!Q.current && P.current) {
      Q.current = !0;
      const E = setTimeout(() => {
        b();
      }, 100);
      return () => clearTimeout(E);
    }
  }, [b]), G(() => {
    const E = setTimeout(() => {
      P.current && P.current.focus();
    }, 200);
    return () => clearTimeout(E);
  }, []);
  const oe = L((E) => {
    const H = E.currentTarget.innerHTML;
    g.updateContinuousContent(H), A(), _();
    const fe = h(w);
    fe !== N && g.setActivePage(fe);
  }, [A, g, h, N, _, w]), c = L((E) => {
    g.updatePageSize(E), b({ pageSize: E }), r && r(E);
  }, [g, b, r]), m = L((E) => {
    Y.current = !0, g.setActivePage(E), x(E, w), setTimeout(() => {
      Y.current = !1;
    }, 500), n && n(E);
  }, [g, x, n]), j = L(() => {
    q.current = !0, g.addPageBreak({ position: "end" }), a && a();
  }, [g, a]), R = L(() => {
    const E = window.getSelection();
    if (E && E.rangeCount > 0) {
      if (!P?.current) return;
      const ze = `<page-break data-page-break="true" contenteditable="false" data-page-number="${P.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, ze), setTimeout(() => {
        b();
        const Le = h(w);
        g.setActivePage(Le);
      }, 150);
    }
  }, [b, h, g, w]), Z = L((E) => {
    if (M.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    $(E) && (g.setActivePage(0), t && t(E));
  }, [M.length, $, g, t]), ee = L(() => {
    !w.current || !P.current || Y.current || (z.current && clearTimeout(z.current), z.current = setTimeout(() => {
      if (Y.current) {
        z.current = null;
        return;
      }
      const E = h(w);
      E !== N && g.setActivePage(E), z.current = null;
    }, 100));
  }, [h, N, g, w]), O = ue(() => {
    if (!f) return 0;
    const H = f.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return H ? H.length : 0;
  }, [f]), V = M.length || 1;
  return G(() => () => {
    z.current && clearTimeout(z.current);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ i.jsx(
      rn,
      {
        currentFormat: p,
        pageSize: k,
        onFormatText: y,
        onPageSizeChange: c,
        onAddPageBreak: R
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "editor-container", children: [
      o && /* @__PURE__ */ i.jsx(
        en,
        {
          editorView: null,
          isCollapsed: I,
          onToggle: () => D((E) => !E),
          wordCount: O,
          pageCount: V
        }
      ),
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: w,
          onScroll: ee,
          children: /* @__PURE__ */ i.jsx(
            on,
            {
              content: f,
              dimensions: B,
              pageSize: k,
              pageBoundaries: M,
              editorRef: P,
              onInput: oe,
              onClick: () => P.current?.focus()
            }
          )
        }
      ),
      u && /* @__PURE__ */ i.jsx("div", { className: "page-manager-sidebar", children: e ? ye.cloneElement(e, {
        onNavigate: m,
        onAddPage: j,
        onDeletePage: Z,
        onPageSizeChange: c
      }) : /* @__PURE__ */ i.jsx(
        cn,
        {
          pageBoundaries: M,
          activePage: N,
          pageSize: k,
          onNavigate: m,
          onAddPage: j,
          onDeletePage: Z,
          onPageSizeChange: c
        }
      ) })
    ] })
  ] });
});
ln.displayName = "ContentEditableEditor";
const he = "A4", W = "<p><br></p>", re = (e, n = he) => ({
  id: K(),
  index: e,
  size: n,
  content: W,
  images: [],
  isBreakPoint: !1
}), Re = (e, n = he) => (e.length > 0 ? e : [re(0, n)]).map((t, r) => ({
  id: t.id || K(),
  index: r,
  size: t.size || n,
  content: le(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), le = (e) => typeof e != "string" || e.trim() === "" ? W : e, ke = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || he, t = Re(e.pages || [re(0, a)], a), r = {
    A4: { width: 794, height: 1123 },
    Letter: { width: 816, height: 1056 },
    Legal: { width: 816, height: 1344 }
  }, o = [{
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: (r[a] || r.A4).height
  }];
  return {
    id: K(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || W,
    pageBoundaries: e.pageBoundaries || o
  };
}, un = ke(), Oe = qe({
  name: "document",
  initialState: un,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: a = W, pageSize: t = he } = n.payload || {}, r = { ...re(0, t), content: le(a) };
      return ke({
        title: e.title,
        pageSize: t,
        pages: [r]
      });
    },
    updateTitle: (e, n) => {
      e.title = n.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, n) => {
      const { pageIndex: a, content: t } = n.payload;
      a < 0 || a >= e.pages.length || (e.pages[a].content = le(t), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const a = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, t = Re(a.pages || [], e.pageSize);
      e.pages = t, e.activePage = Math.min(e.activePage, t.length - 1), e.pageBreaks = Array.isArray(a.pageBreaks) ? a.pageBreaks : t.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = t.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const a = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(a, 0, re(a, e.pageSize)), e.pages = e.pages.map((t, r) => ({
        ...t,
        index: r,
        size: e.pageSize
      })), e.activePage = a, e.pageBreaks = e.pages.slice(0, -1).map((t, r) => ({
        id: `auto-break-${r}`,
        pageNumber: r + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, n) => {
      const a = n.payload;
      e.pages.length <= 1 || (e.pages.splice(a, 1), e.pages = e.pages.map((t, r) => ({
        ...t,
        index: r,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : a <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((t, r) => ({
        id: `auto-break-${r}`,
        pageNumber: r + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, n) => {
      const a = n.payload, t = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      a >= 0 && a < t && (e.activePage = a, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, n) => {
      const a = n.payload;
      e.pageSize = a, e.pages = e.pages.map((t, r) => ({
        ...t,
        index: r,
        size: a
      })), e.pageBreaks = e.pages.slice(0, -1).map((t, r) => ({
        id: `auto-break-${r}`,
        pageNumber: r + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => ke(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = le(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.activePage >= e.pageBoundaries.length && (e.activePage = Math.max(0, e.pageBoundaries.length - 1)), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: a = "end", pageIndex: t } = n.payload || {}, r = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (a === "end")
        e.continuousContent = e.continuousContent + r + "<p><br></p>";
      else if (typeof a == "number") {
        const s = e.continuousContent.substring(0, a), o = e.continuousContent.substring(a);
        e.continuousContent = s + r + o;
      } else if (typeof t == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = e.continuousContent;
        const o = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (t === 0 && o.length === 0)
          e.continuousContent = e.continuousContent + r + "<p><br></p>";
        else if (t < o.length) {
          const l = o[t], u = document.createElement("page-break");
          u.setAttribute("data-page-break", "true"), u.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const d = document.createElement("p");
          d.innerHTML = "<br>", l.parentNode.insertBefore(u, l.nextSibling), u.parentNode.insertBefore(d, u.nextSibling), e.continuousContent = s.innerHTML;
        } else
          e.continuousContent = e.continuousContent + r + "<p><br></p>";
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (typeof a == "number" && typeof document < "u") {
        const t = document.createElement("div");
        t.innerHTML = e.continuousContent;
        const r = t.querySelectorAll('page-break, [data-page-break="true"]');
        r[a] && r[a].remove(), t.querySelectorAll('page-break, [data-page-break="true"]').forEach((o, l) => {
          o.setAttribute("data-page-number", String(l + 2));
        }), e.continuousContent = t.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const a = n.payload;
      if (a !== e.editorMode) {
        if (e.editorMode = a, a === "continuous") {
          const t = e.pages.map((r) => r.content).filter((r) => r && r !== W).join(`
`);
          e.continuousContent = t || W;
        } else
          e.continuousContent && e.continuousContent !== W && (e.pages = [{ ...re(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    // Bulk page operations
    insertPageAt: (e, n) => {
      const { pageIndex: a, content: t = W } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const r = document.createElement("div");
          r.innerHTML = e.continuousContent;
          const s = r.querySelectorAll('page-break, [data-page-break="true"]'), o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          if (a === 0)
            e.continuousContent = t + o + e.continuousContent;
          else if (a >= s.length)
            e.continuousContent = e.continuousContent + o + t;
          else {
            const l = s[a - 1], u = document.createElement("div");
            u.innerHTML = t;
            const d = document.createElement("page-break");
            d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"), l.parentNode.insertBefore(u, l.nextSibling), l.parentNode.insertBefore(d, u.nextSibling), e.continuousContent = r.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    movePageTo: (e, n) => {
      const { fromIndex: a, toIndex: t } = n.payload || {};
      if (!(typeof a != "number" || typeof t != "number") && !(a < 0 || t < 0 || a === t)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const r = document.createElement("div");
          r.innerHTML = e.continuousContent, Array.from(r.querySelectorAll('page-break, [data-page-break="true"]'));
          const s = [];
          let o = r.firstChild, l = [];
          for (; o; )
            o.nodeType === 1 && (o.tagName.toLowerCase() === "page-break" || o.getAttribute("data-page-break") === "true") ? (s.push(l), l = []) : l.push(o.cloneNode(!0)), o = o.nextSibling;
          if (l.length > 0 && s.push(l), a >= s.length || t >= s.length)
            return;
          const [u] = s.splice(a, 1);
          s.splice(t, 0, u);
          const d = [];
          s.forEach((C, g) => {
            C.forEach((k) => d.push(k.outerHTML || k.textContent)), g < s.length - 1 && d.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }), e.continuousContent = d.join("");
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    duplicatePage: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const t = document.createElement("div");
          t.innerHTML = e.continuousContent;
          const r = Array.from(t.querySelectorAll('page-break, [data-page-break="true"]'));
          let s = [], o = t.firstChild, l = 0;
          for (; o; ) {
            if (o.nodeType === 1 && (o.tagName.toLowerCase() === "page-break" || o.getAttribute("data-page-break") === "true")) {
              if (l === a)
                break;
              l++, s = [];
            } else l === a && s.push(o.cloneNode(!0));
            o = o.nextSibling;
          }
          if (s.length > 0 && a < r.length) {
            const u = r[a], g = s.map((M) => M.outerHTML || M.textContent).join("") + '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>', k = document.createElement("div");
            k.innerHTML = g;
            let f = u;
            Array.from(k.children).forEach((M) => {
              f.parentNode.insertBefore(M.cloneNode(!0), f.nextSibling), f = f.nextSibling;
            }), e.continuousContent = t.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: yn,
  updateTitle: xn,
  updatePageContent: En,
  updatePages: An,
  addPage: Pn,
  deletePage: Tn,
  setActivePage: vn,
  updatePageSize: _n,
  resetDocument: Cn,
  updateContinuousContent: Sn,
  updatePageBoundaries: Nn,
  addPageBreak: wn,
  removePageBreak: jn,
  setEditorMode: Mn,
  insertPageAt: Bn,
  movePageTo: In,
  duplicatePage: Dn
} = Oe.actions, Rn = Oe.reducer, On = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  ln as ContentEditableEditor,
  on as ContinuousPageView,
  hn as DocumentProvider,
  rn as EditorToolbar,
  On as PAGE_DIMENSIONS,
  cn as PageManager,
  en as Sidebar,
  Pn as addPage,
  wn as addPageBreak,
  bn as clearImages,
  mn as deleteImage,
  Tn as deletePage,
  Rn as documentReducer,
  Dn as duplicatePage,
  kn as getAllImageKeys,
  fn as getImage,
  yn as initializeDocument,
  Bn as insertPageAt,
  an as logger,
  In as movePageTo,
  jn as removePageBreak,
  Cn as resetDocument,
  nn as saveImage,
  vn as setActivePage,
  Mn as setEditorMode,
  Sn as updateContinuousContent,
  Nn as updatePageBoundaries,
  En as updatePageContent,
  _n as updatePageSize,
  An as updatePages,
  xn as updateTitle,
  Fe as useContinuousReflow,
  je as useDocument,
  Be as useDocumentActions,
  Me as useDocumentState,
  Ze as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
