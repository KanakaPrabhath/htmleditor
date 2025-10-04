import xe, { createContext as Le, useReducer as $e, useMemo as le, useContext as Ue, useState as ue, useCallback as O, useRef as U, useEffect as H, forwardRef as Se, createElement as fe } from "react";
import { v4 as Z } from "uuid";
import { createSlice as Ge } from "@reduxjs/toolkit";
var oe = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function He() {
  if (ke) return ee;
  ke = 1;
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
  return ee.Fragment = n, ee.jsx = a, ee.jsxs = a, ee;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function qe() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === w ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case D:
          return "Fragment";
        case g:
          return "Profiler";
        case z:
          return "StrictMode";
        case m:
          return "Suspense";
        case k:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case x:
            return "Portal";
          case y:
            return c.displayName || "Context";
          case p:
            return (c._context.displayName || "Context") + ".Consumer";
          case h:
            var b = c.render;
            return c = c.displayName, c || (c = b.displayName || b.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case B:
            return b = c.displayName || null, b !== null ? b : e(c.type) || "Memo";
          case N:
            b = c._payload, c = c._init;
            try {
              return e(c(b));
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
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var j = b.error, R = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return j.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), n(c);
      }
    }
    function t(c) {
      if (c === D) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === N)
        return "<...>";
      try {
        var b = e(c);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var c = C.A;
      return c === null ? null : c.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(c) {
      if (I.call(c, "key")) {
        var b = Object.getOwnPropertyDescriptor(c, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, b) {
      function j() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: j,
        configurable: !0
      });
    }
    function d() {
      var c = e(this.type);
      return re[c] || (re[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function u(c, b, j, R, J, A) {
      var _ = j.ref;
      return c = {
        $$typeof: v,
        type: c,
        key: b,
        props: j,
        _owner: R
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: d
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
        value: J
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function P(c, b, j, R, J, A) {
      var _ = b.children;
      if (_ !== void 0)
        if (R)
          if (L(_)) {
            for (R = 0; R < _.length; R++)
              f(_[R]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(_);
      if (I.call(b, "key")) {
        _ = e(c);
        var G = Object.keys(b).filter(function(he) {
          return he !== "key";
        });
        R = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", X[_ + R] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          _,
          G,
          _
        ), X[_ + R] = !0);
      }
      if (_ = null, j !== void 0 && (a(j), _ = "" + j), o(b) && (a(b.key), _ = "" + b.key), "key" in b) {
        j = {};
        for (var Q in b)
          Q !== "key" && (j[Q] = b[Q]);
      } else j = b;
      return _ && l(
        j,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), u(
        c,
        _,
        j,
        r(),
        J,
        A
      );
    }
    function f(c) {
      E(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === N && (c._payload.status === "fulfilled" ? E(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function E(c) {
      return typeof c == "object" && c !== null && c.$$typeof === v;
    }
    var M = xe, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), C = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, L = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var F, re = {}, Y = M.react_stack_bottom_frame.bind(
      M,
      s
    )(), K = V(t(s)), X = {};
    te.Fragment = D, te.jsx = function(c, b, j) {
      var R = 1e4 > C.recentlyCreatedOwnerStacks++;
      return P(
        c,
        b,
        j,
        !1,
        R ? Error("react-stack-top-frame") : Y,
        R ? V(t(c)) : K
      );
    }, te.jsxs = function(c, b, j) {
      var R = 1e4 > C.recentlyCreatedOwnerStacks++;
      return P(
        c,
        b,
        j,
        !0,
        R ? Error("react-stack-top-frame") : Y,
        R ? V(t(c)) : K
      );
    };
  })()), te;
}
var Ae;
function Ve() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? oe.exports = He() : oe.exports = qe()), oe.exports;
}
var i = Ve();
const ge = "A4", W = "<p><br></p>", Pe = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, ne = (e, n = ge) => ({
  id: Z(),
  index: e,
  size: n,
  content: W,
  images: [],
  isBreakPoint: !1
}), se = (e) => typeof e != "string" || e.trim() === "" ? W : e, Ne = (e, n = ge) => (e.length > 0 ? e : [ne(0, n)]).map((t, r) => ({
  id: t.id || Z(),
  index: r,
  size: t.size || n,
  content: se(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), me = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || ge, t = Ne(e.pages || [ne(0, a)], a), s = [{
    id: "page-0",
    pageNumber: 1,
    top: 0,
    height: (Pe[a] || Pe.A4).height
  }];
  return {
    id: Z(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: t,
    activePage: e.activePage && e.activePage < t.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: t.length,
    editorMode: e.editorMode || "continuous",
    continuousContent: e.continuousContent || W,
    pageBoundaries: e.pageBoundaries || s
  };
}, T = {
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
}, We = (e, n) => {
  const a = (/* @__PURE__ */ new Date()).toISOString();
  switch (n.type) {
    case T.INITIALIZE_DOCUMENT: {
      const { initialContent: t = W, pageSize: r = ge } = n.payload || {}, s = { ...ne(0, r), content: se(t) };
      return me({
        title: e.title,
        pageSize: r,
        pages: [s]
      });
    }
    case T.UPDATE_TITLE:
      return {
        ...e,
        title: n.payload,
        updatedAt: a
      };
    case T.UPDATE_PAGE_CONTENT: {
      const { pageIndex: t, content: r } = n.payload;
      if (t < 0 || t >= e.pages.length)
        return e;
      const s = [...e.pages];
      return s[t] = {
        ...s[t],
        content: se(r)
      }, {
        ...e,
        pages: s,
        updatedAt: a
      };
    }
    case T.UPDATE_PAGES: {
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
    case T.ADD_PAGE: {
      const t = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length, r = [...e.pages];
      r.splice(t, 0, ne(t, e.pageSize));
      const s = r.map((l, d) => ({
        ...l,
        index: d,
        size: e.pageSize
      })), o = s.slice(0, -1).map((l, d) => ({
        id: `auto-break-${d}`,
        pageNumber: d + 1
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
    case T.DELETE_PAGE: {
      const t = n.payload;
      if (e.pages.length <= 1)
        return e;
      const r = [...e.pages];
      r.splice(t, 1);
      const s = r.map((d, u) => ({
        ...d,
        index: u,
        size: e.pageSize
      }));
      let o = e.activePage;
      o >= s.length ? o = s.length - 1 : t <= o && o > 0 && (o -= 1);
      const l = s.slice(0, -1).map((d, u) => ({
        id: `auto-break-${u}`,
        pageNumber: u + 1
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
    case T.SET_ACTIVE_PAGE: {
      const t = n.payload, r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      return t >= 0 && t < r ? {
        ...e,
        activePage: t,
        updatedAt: a
      } : e;
    }
    case T.UPDATE_PAGE_SIZE: {
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
    case T.RESET_DOCUMENT:
      return me();
    case T.UPDATE_CONTINUOUS_CONTENT:
      return {
        ...e,
        continuousContent: se(n.payload),
        updatedAt: a
      };
    case T.UPDATE_PAGE_BOUNDARIES: {
      const t = n.payload || [], r = e.activePage >= t.length ? Math.max(0, t.length - 1) : e.activePage;
      return {
        ...e,
        pageBoundaries: t,
        totalPages: t.length,
        activePage: r,
        updatedAt: a
      };
    }
    case T.ADD_PAGE_BREAK: {
      const { position: t = "end", pageIndex: r } = n.payload || {}, s = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      let o = e.continuousContent;
      if (t === "end")
        o = o + s + "<p><br></p>";
      else if (typeof t == "number") {
        const l = o.substring(0, t), d = o.substring(t);
        o = l + s + d;
      } else if (typeof r == "number" && typeof document < "u") {
        const l = document.createElement("div");
        l.innerHTML = o;
        const d = l.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && d.length === 0)
          o = o + s + "<p><br></p>";
        else if (r < d.length) {
          const u = d[r], P = document.createElement("page-break");
          P.setAttribute("data-page-break", "true"), P.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const f = document.createElement("p");
          f.innerHTML = "<br>", u.parentNode.insertBefore(P, u.nextSibling), P.parentNode.insertBefore(f, P.nextSibling), o = l.innerHTML;
        } else
          o = o + s + "<p><br></p>";
      }
      return {
        ...e,
        continuousContent: o,
        updatedAt: a
      };
    }
    case T.REMOVE_PAGE_BREAK: {
      const { pageIndex: t } = n.payload || {};
      if (typeof t != "number" || typeof document > "u")
        return e;
      const r = document.createElement("div");
      r.innerHTML = e.continuousContent;
      const s = r.querySelectorAll('page-break, [data-page-break="true"]');
      return s[t] && s[t].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, d) => {
        l.setAttribute("data-page-number", String(d + 2));
      }), {
        ...e,
        continuousContent: r.innerHTML,
        updatedAt: a
      };
    }
    case T.SET_EDITOR_MODE: {
      const t = n.payload;
      if (t === e.editorMode)
        return e;
      let r = e.continuousContent, s = e.pages;
      return t === "continuous" ? r = e.pages.map((l) => l.content).filter((l) => l && l !== W).join(`
`) || W : e.continuousContent && e.continuousContent !== W && (s = [{ ...ne(0, e.pageSize), content: e.continuousContent }]), {
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
}, we = Le(null), un = ({ children: e, initialState: n = {} }) => {
  const [a, t] = $e(We, me(n)), r = le(() => ({
    initializeDocument: (o) => t({ type: T.INITIALIZE_DOCUMENT, payload: o }),
    updateTitle: (o) => t({ type: T.UPDATE_TITLE, payload: o }),
    updatePageContent: (o) => t({ type: T.UPDATE_PAGE_CONTENT, payload: o }),
    updatePages: (o) => t({ type: T.UPDATE_PAGES, payload: o }),
    addPage: (o) => t({ type: T.ADD_PAGE, payload: o }),
    deletePage: (o) => t({ type: T.DELETE_PAGE, payload: o }),
    setActivePage: (o) => t({ type: T.SET_ACTIVE_PAGE, payload: o }),
    updatePageSize: (o) => t({ type: T.UPDATE_PAGE_SIZE, payload: o }),
    resetDocument: () => t({ type: T.RESET_DOCUMENT }),
    updateContinuousContent: (o) => t({ type: T.UPDATE_CONTINUOUS_CONTENT, payload: o }),
    updatePageBoundaries: (o) => t({ type: T.UPDATE_PAGE_BOUNDARIES, payload: o }),
    addPageBreak: (o) => t({ type: T.ADD_PAGE_BREAK, payload: o }),
    removePageBreak: (o) => t({ type: T.REMOVE_PAGE_BREAK, payload: o }),
    setEditorMode: (o) => t({ type: T.SET_EDITOR_MODE, payload: o }),
    insertPageAt: (o) => t({ type: T.INSERT_PAGE_AT, payload: o }),
    movePageTo: (o) => t({ type: T.MOVE_PAGE_TO, payload: o }),
    duplicatePage: (o) => t({ type: T.DUPLICATE_PAGE, payload: o })
  }), []), s = le(() => ({
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
}, ye = () => {
  const { state: e } = je();
  return e;
}, Me = () => {
  const { actions: e } = je();
  return e;
}, Ye = () => {
  const [e, n] = ue({
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
  }), a = O((t, r = null) => {
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
        const d = l.getRangeAt(0);
        if (d.toString()) {
          const P = document.createElement("span");
          P.style.fontSize = r, d.surroundContents(P);
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
}, ie = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, Te = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Je = (e, n) => {
  const a = Me(), t = U(null), r = U(null), s = U(e), o = U(!1);
  H(() => {
    s.current = e;
  }, [e]), H(() => () => {
    t.current && clearTimeout(t.current), r.current && clearTimeout(r.current);
  }, []);
  const l = O((g, p) => {
    let y = 0;
    for (let h = 0; h < g.length; h++) {
      const m = g[h], k = m.getBoundingClientRect().height;
      if (y + k > p)
        return { overflowIndex: h, overflowElement: m, accumulatedHeight: y };
      y += k;
    }
    return null;
  }, []), d = O((g, p) => {
    if (!g || !n?.current)
      return !1;
    try {
      const y = n.current, h = document.createElement("page-break");
      return h.setAttribute("data-page-break", "true"), h.setAttribute("contenteditable", "false"), h.setAttribute("data-page-number", p || "2"), g.parentNode.insertBefore(h, g), !0;
    } catch (y) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", y), !1;
    }
  }, [n]), u = O(() => {
    if (!(!n?.current || o.current))
      try {
        o.current = !0;
        const g = n.current, p = s.current || "A4", h = (ie[p] || ie.A4).height - Te.top - Te.bottom, m = Array.from(g.children), k = m.filter(
          (w) => w.tagName === "PAGE-BREAK" || w.getAttribute("data-page-break") === "true"
        ), B = [];
        let N = [];
        for (const w of m)
          w.tagName === "PAGE-BREAK" || w.getAttribute("data-page-break") === "true" ? N.length > 0 && (B.push(N), N = []) : N.push(w);
        N.length > 0 && B.push(N), B.length === 0 && m.length > 0 && B.push(m.filter(
          (w) => !(w.tagName === "PAGE-BREAK" || w.getAttribute("data-page-break") === "true")
        ));
        let $ = !1;
        for (let w = 0; w < B.length; w++) {
          const C = B[w], I = l(C, h);
          if (I && I.overflowIndex > 0) {
            const L = w + 2;
            if (d(I.overflowElement, L)) {
              $ = !0;
              break;
            }
          }
        }
        if ($) {
          const w = g.innerHTML;
          a.updateContinuousContent(w), setTimeout(() => {
            E();
          }, 50);
        }
      } catch (g) {
        console.warn("[checkAndReflow] Reflow failed:", g);
      } finally {
        o.current = !1;
      }
  }, [n, l, d, a]), P = O((g = 500) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      r.current = null, u();
    }, g);
  }, [u]), f = O((g = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const p = g.pageSize || s.current || "A4", y = ie[p] || ie.A4, h = n.current, m = h.querySelectorAll('page-break, [data-page-break="true"]'), k = [];
    return k.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: y.height
      // No breakElement for first page
    }), m.forEach((B, N) => {
      const $ = B.getBoundingClientRect(), w = h.getBoundingClientRect(), C = $.top - w.top + h.scrollTop;
      k.push({
        id: `page-${N + 1}`,
        pageNumber: N + 2,
        top: C,
        height: y.height
        // Don't store breakElement - not serializable
      });
    }), k;
  }, [n]), E = O((g = {}) => {
    const p = f(g);
    return a.updatePageBoundaries(p), p;
  }, [f, a]), M = O((g = {}) => {
    t.current && clearTimeout(t.current);
    const p = typeof g.delay == "number" ? g.delay : 300;
    t.current = setTimeout(() => {
      t.current = null, E(g);
    }, Math.max(0, p));
  }, [E]), v = O(() => {
    if (!n?.current)
      return 0;
    const g = window.getSelection();
    if (!g || g.rangeCount === 0)
      return 0;
    try {
      const p = g.getRangeAt(0), y = n.current;
      let h = p.startContainer;
      const m = Array.from(y.querySelectorAll('page-break, [data-page-break="true"]'));
      if (m.length === 0)
        return 0;
      for (; h && h !== y; ) {
        for (let k = m.length - 1; k >= 0; k--)
          if (m[k].compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING)
            return k + 1;
        h = h.parentNode;
      }
      return 0;
    } catch (p) {
      return console.warn("[getCurrentPage] Failed to calculate page:", p), 0;
    }
  }, [n]), x = O((g, p) => {
    if (!p?.current || !n?.current)
      return;
    n.current;
    const h = f().find((m) => m.pageNumber === g + 1);
    h && (p.current.scrollTo({
      top: h.top - 40,
      behavior: "smooth"
    }), setTimeout(() => {
      D(g);
    }, 300));
  }, [n]), D = O((g) => {
    if (!n?.current)
      return;
    const p = n.current;
    p.focus();
    try {
      let y = null, h = 0;
      if (g === 0)
        y = p.firstChild, h = 0;
      else {
        const k = p.querySelectorAll('page-break, [data-page-break="true"]')[g - 1];
        k && k.nextSibling && (y = k.nextSibling, h = 0);
      }
      if (y) {
        const m = document.createRange(), k = window.getSelection();
        y.nodeType === Node.TEXT_NODE ? m.setStart(y, h) : m.setStart(y, 0), m.collapse(!0), k.removeAllRanges(), k.addRange(m);
      }
    } catch (y) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", y);
    }
  }, [n]), z = O((g) => {
    if (!n?.current)
      return !1;
    const p = n.current;
    if (f().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const h = Array.from(p.querySelectorAll('page-break, [data-page-break="true"]'));
      if (g > h.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const m = window.getSelection();
      let k = !1, B = [], N = null;
      if (g === 0) {
        const C = h[0];
        if (!C)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let I = p.firstChild;
        for (; I && I !== C; )
          B.push(I), I = I.nextSibling;
        N = C;
      } else {
        const C = h[g - 1];
        if (!C)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const I = h[g];
        let L = C.nextSibling;
        for (; L && L !== I; )
          B.push(L), L = L.nextSibling;
        N = C;
      }
      if (m && m.rangeCount > 0) {
        const I = m.getRangeAt(0).startContainer;
        for (const L of B)
          if (L.contains(I) || L === I) {
            k = !0;
            break;
          }
      }
      N && N.parentNode && N.remove(), B.forEach((C) => {
        C.parentNode && C.remove();
      }), p.querySelectorAll('page-break, [data-page-break="true"]').forEach((C, I) => {
        C.setAttribute("data-page-number", String(I + 2));
      }), k && setTimeout(() => {
        D(0);
      }, 50);
      const w = p.innerHTML;
      return a.updateContinuousContent(w), setTimeout(() => {
        E();
      }, 100), !0;
    } catch (h) {
      return console.error("[removePageAndContent] Failed to remove page:", h), !1;
    }
  }, [n, f, a, E, D]);
  return {
    calculatePageBoundaries: f,
    checkAndUpdateBoundaries: M,
    updateBoundaries: E,
    getCurrentPage: v,
    scrollToPage: x,
    positionCursorAtPage: D,
    checkAndReflow: u,
    triggerAutoReflow: P,
    removePageAndContent: z,
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
const Ze = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fe = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, a, t) => t ? t.toUpperCase() : a.toLowerCase()
), _e = (e) => {
  const n = Fe(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ie = (...e) => e.filter((n, a, t) => !!n && n.trim() !== "" && t.indexOf(n) === a).join(" ").trim(), Ke = (e) => {
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
var Xe = {
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
const Qe = Se(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: t,
    className: r = "",
    children: s,
    iconNode: o,
    ...l
  }, d) => fe(
    "svg",
    {
      ref: d,
      ...Xe,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: t ? Number(a) * 24 / Number(n) : a,
      className: Ie("lucide", r),
      ...!s && !Ke(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...o.map(([u, P]) => fe(u, P)),
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
  const a = Se(
    ({ className: t, ...r }, s) => fe(Qe, {
      ref: s,
      iconNode: n,
      className: Ie(
        `lucide-${Ze(_e(e))}`,
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
const et = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], tt = S("bold", et);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], De = S("chevron-left", nt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Be = S("chevron-right", at);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], ot = S("file-check", rt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], de = S("file-text", it);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ct = S("hash", st);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], ut = S("heading-1", lt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], gt = S("heading-2", dt);
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
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], ht = S("heading-3", pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], mt = S("image", ft);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], xt = S("italic", bt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], kt = S("link", yt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], At = S("list-ordered", Et);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Re = S("list", Pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _t = S("plus", Tt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Ct = S("redo", vt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Nt = S("settings", St);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], jt = S("square-check-big", wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], It = S("strikethrough", Mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Bt = S("table", Dt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Ot = S("text-align-center", Rt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Lt = S("text-align-end", zt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Ut = S("text-align-justify", $t);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Ht = S("text-align-start", Gt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Vt = S("underline", qt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Yt = S("undo", Wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Zt = S("x", Jt), Ft = ({ editorView: e, isCollapsed: n, onToggle: a, wordCount: t, pageCount: r }) => {
  const s = ye(), { pages: o, activePage: l, continuousContent: d, editorMode: u } = s, [P, f] = ue(0), [E, M] = ue([]);
  H(() => {
    if (t !== void 0 && r !== void 0) {
      if (f(t), d) {
        const z = document.createElement("div");
        z.innerHTML = d;
        const g = z.querySelectorAll("h1, h2, h3, h4, h5, h6"), p = Array.from(g).map((y, h) => {
          const m = parseInt(y.tagName.charAt(1)), k = y.textContent.trim();
          return k ? {
            id: `heading-${h}`,
            level: m,
            text: k,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        M(p);
      }
      return;
    }
    let x = 0;
    const D = [];
    o.forEach((z, g) => {
      if (z.content) {
        const p = document.createElement("div");
        p.innerHTML = z.content;
        const h = (p.textContent || p.innerText || "").trim().split(/\s+/).filter((k) => k.length > 0);
        x += h.length, p.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((k, B) => {
          const N = parseInt(k.tagName.charAt(1)), $ = k.textContent.trim();
          $ && D.push({
            id: `heading-${g}-${B}`,
            level: N,
            text: $,
            page: g + 1
          });
        });
      }
    }), f(x), M(D);
  }, [o, t, r, d]);
  const v = r !== void 0 ? r : o.length;
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
            /* @__PURE__ */ i.jsx(de, { size: 18 }),
            /* @__PURE__ */ i.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ i.jsx(Be, { size: 16 }) : /* @__PURE__ */ i.jsx(De, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ i.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ i.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(ot, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: v })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(ct, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: P.toLocaleString() })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ i.jsx(de, { size: 14 }),
                /* @__PURE__ */ i.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "stat-value", children: l + 1 })
            ] })
          ] }),
          E.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ i.jsxs("h3", { children: [
              /* @__PURE__ */ i.jsx(Re, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "document-outline", "data-testid": "outline", children: E.map((x) => {
              const D = x.level === 1 ? ut : x.level === 2 ? gt : ht;
              return /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${x.level}`,
                  style: { marginLeft: `${(x.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ i.jsx(D, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ i.jsx("span", { className: "outline-text", children: x.text }),
                    /* @__PURE__ */ i.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      x.page
                    ] })
                  ]
                },
                x.id
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
function Kt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Xt(e) {
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
        const u = `editor-image-${Kt()}`;
        localStorage.setItem(u, o), n(u);
      } catch (u) {
        u.name === "QuotaExceededError" ? a(new Error("Storage quota exceeded")) : a(u);
      }
    }, r.onerror = () => {
      a(new Error("Error reading image file"));
    }, r.readAsDataURL(e);
  });
}
function dn(e) {
  return localStorage.getItem(e);
}
function gn(e) {
  localStorage.removeItem(e);
}
function pn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function hn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Qt {
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
const ve = new Qt("Editor"), en = ({
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
      const d = await Xt(o), u = localStorage.getItem(d);
      u && (document.execCommand("insertImage", !1, u), ve.info("Image inserted", { key: d }));
    } catch (l) {
      ve.error("Error uploading image", l);
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ i.jsx(tt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ i.jsx(xt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ i.jsx(Vt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ i.jsx(It, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ i.jsx(Ht, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ i.jsx(Ot, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ i.jsx(Lt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ i.jsx(Ut, { size: 16 })
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
        children: /* @__PURE__ */ i.jsx(Re, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ i.jsx(At, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ i.jsx(jt, { size: 16 })
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
        children: /* @__PURE__ */ i.jsx(kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ i.jsx(Bt, { size: 16 })
      }
    ),
    r && /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: r,
        title: "Insert Page Break",
        children: /* @__PURE__ */ i.jsx(de, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("undo"),
        title: "Undo",
        children: /* @__PURE__ */ i.jsx(Yt, { size: 16 })
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: () => a("redo"),
        title: "Redo",
        children: /* @__PURE__ */ i.jsx(Ct, { size: 16 })
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
        children: /* @__PURE__ */ i.jsx(mt, { size: 16 })
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
}, tn = ({
  content: e,
  dimensions: n,
  pageSize: a,
  pageBoundaries: t = [],
  editorRef: r,
  onInput: s,
  onKeyDown: o,
  onClick: l,
  onScroll: d
}) => {
  const u = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, P = (f) => {
    if (f.key === "Tab")
      return f.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const E = window.getSelection();
    if (!E || E.rangeCount === 0) return;
    const M = E.getRangeAt(0), { startContainer: v, endContainer: x } = M, D = (z) => z ? z.nodeType === Node.ELEMENT_NODE ? z.tagName === "PAGE-BREAK" || z.getAttribute("data-page-break") === "true" : z.parentElement && D(z.parentElement) : !1;
    if ((f.key === "Backspace" || f.key === "Delete") && (D(v) || D(x)))
      return f.preventDefault(), !1;
    o && o(f);
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
            padding: `${u.top}px ${u.right}px ${u.bottom}px ${u.left}px`,
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
          onKeyDown: P,
          onClick: l,
          onScroll: d,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, nn = ({
  pageBoundaries: e = [{ id: "page-0", pageNumber: 1 }],
  activePage: n = 0,
  pageSize: a = "A4",
  onNavigate: t,
  onAddPage: r,
  onDeletePage: s,
  onPageSizeChange: o
} = {}) => {
  const l = Math.max(e?.length || 0, 1), d = (v) => {
    t && t(v);
  }, u = () => {
    r && r();
  }, P = (v) => {
    if (l <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    s && s(v);
  }, f = (v) => {
    o && o(v);
  }, E = () => {
    n > 0 && d(n - 1);
  }, M = () => {
    n < l - 1 && d(n + 1);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ i.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ i.jsx(Nt, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: a,
          onChange: (v) => f(v.target.value),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ i.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ i.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "page-navigation-controls", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: E,
          disabled: n === 0,
          "aria-label": "Previous page",
          title: "Previous page (Ctrl+↑)",
          children: /* @__PURE__ */ i.jsx(De, { size: 16 })
        }
      ),
      /* @__PURE__ */ i.jsxs("span", { className: "page-counter", "aria-live": "polite", children: [
        "Page ",
        n + 1,
        " of ",
        l
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: M,
          disabled: n >= l - 1,
          "aria-label": "Next page",
          title: "Next page (Ctrl+↓)",
          children: /* @__PURE__ */ i.jsx(Be, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "page-list", children: (e && e.length > 0 ? e : [{ id: "page-0", pageNumber: 1 }]).map((v, x) => /* @__PURE__ */ i.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${x === n ? "active" : ""}`,
          onClick: () => d(x),
          "aria-label": `Go to page ${x + 1}`,
          "aria-current": x === n ? "page" : void 0,
          children: [
            /* @__PURE__ */ i.jsx(de, { size: 14 }),
            /* @__PURE__ */ i.jsxs("span", { children: [
              "Page ",
              x + 1
            ] })
          ]
        }
      ),
      l > 1 && /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (D) => {
            D.stopPropagation(), P(x);
          },
          "aria-label": `Delete page ${x + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ i.jsx(Zt, { size: 14 })
        }
      )
    ] }, v.id || `page-${x}`)) }),
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: u,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ i.jsx(_t, { size: 16 }),
          /* @__PURE__ */ i.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
}, an = xe.memo(nn), rn = ({
  onNavigate: e,
  onAddPage: n,
  onDeletePage: a,
  onPageSizeChange: t
}) => {
  const { pageBoundaries: r, activePage: s, pageSize: o } = ye();
  return /* @__PURE__ */ i.jsx(
    an,
    {
      pageBoundaries: r,
      activePage: s,
      pageSize: o,
      onNavigate: e,
      onAddPage: n,
      onDeletePage: a,
      onPageSizeChange: t
    }
  );
}, Ce = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, fn = ({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: a,
  onDeletePage: t,
  onPageSizeChange: r,
  showSidebar: s = !0,
  showToolbar: o = !0,
  showPageManager: l = !0
}) => {
  const d = ye(), u = Me(), { pageSize: P, continuousContent: f, pageBoundaries: E, activePage: M } = d, v = U(null), x = U(null), { currentFormat: D, formatText: z } = Ye(), {
    checkAndUpdateBoundaries: g,
    getCurrentPage: p,
    scrollToPage: y,
    positionCursorAtPage: h,
    updateBoundaries: m,
    triggerAutoReflow: k,
    removePageAndContent: B
  } = Je(P, x), N = le(() => Ce[P] || Ce.A4, [P]), [$, w] = ue(!1), C = U(null), I = U(!1), L = U(!1);
  H(() => {
    if (x.current && !L.current) {
      x.current.innerHTML = f, L.current = !0;
      const A = setTimeout(() => {
        m();
      }, 50);
      return () => clearTimeout(A);
    }
  }, [f, m]);
  const V = U(f);
  H(() => {
    x.current && L.current && V.current !== f && (x.current.innerHTML !== f && (x.current.innerHTML = f, setTimeout(() => {
      m(), I.current && (I.current = !1, setTimeout(() => {
        const _ = E.length > 0 ? E.length - 1 : 0;
        u.setActivePage(_), y(_, v);
      }, 50));
    }, 50)), V.current = f);
  }, [f, m, E.length, u, y]);
  const F = U(!1);
  H(() => {
    if (!F.current && x.current) {
      F.current = !0;
      const A = setTimeout(() => {
        m();
      }, 100);
      return () => clearTimeout(A);
    }
  }, [m]), H(() => {
    const A = setTimeout(() => {
      x.current && x.current.focus();
    }, 200);
    return () => clearTimeout(A);
  }, []);
  const re = O((A) => {
    const _ = A.currentTarget.innerHTML;
    u.updateContinuousContent(_), g(), k();
    const G = p();
    G !== M && u.setActivePage(G);
  }, [g, u, p, M, k]), Y = O((A) => {
    u.updatePageSize(A), m({ pageSize: A }), r && r(A);
  }, [u, m, r]), K = O((A) => {
    u.setActivePage(A), y(A, v), n && n(A);
  }, [u, y, n]), X = O(() => {
    I.current = !0, u.addPageBreak({ position: "end" }), a && a();
  }, [u, a]), c = O(() => {
    const A = window.getSelection();
    if (A && A.rangeCount > 0) {
      if (!x?.current) return;
      const Q = `<page-break data-page-break="true" contenteditable="false" data-page-number="${x.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, Q), setTimeout(() => {
        m();
        const he = p();
        u.setActivePage(he);
      }, 150);
    }
  }, [m, p, u]), b = O((A) => {
    if (E.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    B(A) && (u.setActivePage(0), t && t(A));
  }, [E.length, B, u, t]), j = O(() => {
    !v.current || !x.current || (C.current && clearTimeout(C.current), C.current = setTimeout(() => {
      const A = p();
      A !== M && u.setActivePage(A), C.current = null;
    }, 100));
  }, [p, M, u]), R = le(() => {
    if (!f) return 0;
    const _ = f.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return _ ? _.length : 0;
  }, [f]), J = E.length || 1;
  return H(() => () => {
    C.current && clearTimeout(C.current);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: "multi-page-editor", children: [
    o && /* @__PURE__ */ i.jsx(
      en,
      {
        currentFormat: D,
        pageSize: P,
        onFormatText: z,
        onPageSizeChange: Y,
        onAddPageBreak: c
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ i.jsx(
        Ft,
        {
          editorView: null,
          isCollapsed: $,
          onToggle: () => w((A) => !A),
          wordCount: R,
          pageCount: J
        }
      ),
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: v,
          onScroll: j,
          children: /* @__PURE__ */ i.jsx(
            tn,
            {
              content: f,
              dimensions: N,
              pageSize: P,
              pageBoundaries: E,
              editorRef: x,
              onInput: re,
              onClick: () => x.current?.focus()
            }
          )
        }
      ),
      l && /* @__PURE__ */ i.jsx("div", { className: "page-manager-sidebar", children: e ? xe.cloneElement(e, {
        onNavigate: K,
        onAddPage: X,
        onDeletePage: b,
        onPageSizeChange: Y
      }) : /* @__PURE__ */ i.jsx(
        rn,
        {
          onNavigate: K,
          onAddPage: X,
          onDeletePage: b,
          onPageSizeChange: Y
        }
      ) })
    ] })
  ] });
}, pe = "A4", q = "<p><br></p>", ae = (e, n = pe) => ({
  id: Z(),
  index: e,
  size: n,
  content: q,
  images: [],
  isBreakPoint: !1
}), Oe = (e, n = pe) => (e.length > 0 ? e : [ae(0, n)]).map((t, r) => ({
  id: t.id || Z(),
  index: r,
  size: t.size || n,
  content: ce(t.content),
  images: t.images || [],
  isBreakPoint: !!t.isBreakPoint
})), ce = (e) => typeof e != "string" || e.trim() === "" ? q : e, be = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || pe, t = Oe(e.pages || [ae(0, a)], a), r = {
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
    id: Z(),
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
    continuousContent: e.continuousContent || q,
    pageBoundaries: e.pageBoundaries || o
  };
}, on = be(), ze = Ge({
  name: "document",
  initialState: on,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: a = q, pageSize: t = pe } = n.payload || {}, r = { ...ae(0, t), content: ce(a) };
      return be({
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
      a < 0 || a >= e.pages.length || (e.pages[a].content = ce(t), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const a = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, t = Oe(a.pages || [], e.pageSize);
      e.pages = t, e.activePage = Math.min(e.activePage, t.length - 1), e.pageBreaks = Array.isArray(a.pageBreaks) ? a.pageBreaks : t.slice(0, -1).map((r, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = t.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const a = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(a, 0, ae(a, e.pageSize)), e.pages = e.pages.map((t, r) => ({
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
    resetDocument: () => be(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = ce(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
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
          const l = o[t], d = document.createElement("page-break");
          d.setAttribute("data-page-break", "true"), d.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const u = document.createElement("p");
          u.innerHTML = "<br>", l.parentNode.insertBefore(d, l.nextSibling), d.parentNode.insertBefore(u, d.nextSibling), e.continuousContent = s.innerHTML;
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
          const t = e.pages.map((r) => r.content).filter((r) => r && r !== q).join(`
`);
          e.continuousContent = t || q;
        } else
          e.continuousContent && e.continuousContent !== q && (e.pages = [{ ...ae(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    // Bulk page operations
    insertPageAt: (e, n) => {
      const { pageIndex: a, content: t = q } = n.payload || {};
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
            const l = s[a - 1], d = document.createElement("div");
            d.innerHTML = t;
            const u = document.createElement("page-break");
            u.setAttribute("data-page-break", "true"), u.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"), l.parentNode.insertBefore(d, l.nextSibling), l.parentNode.insertBefore(u, d.nextSibling), e.continuousContent = r.innerHTML;
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
          const [d] = s.splice(a, 1);
          s.splice(t, 0, d);
          const u = [];
          s.forEach((P, f) => {
            P.forEach((E) => u.push(E.outerHTML || E.textContent)), f < s.length - 1 && u.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }), e.continuousContent = u.join("");
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
            const d = r[a], f = s.map((v) => v.outerHTML || v.textContent).join("") + '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>', E = document.createElement("div");
            E.innerHTML = f;
            let M = d;
            Array.from(E.children).forEach((v) => {
              M.parentNode.insertBefore(v.cloneNode(!0), M.nextSibling), M = M.nextSibling;
            }), e.continuousContent = t.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: mn,
  updateTitle: bn,
  updatePageContent: xn,
  updatePages: yn,
  addPage: kn,
  deletePage: En,
  setActivePage: An,
  updatePageSize: Pn,
  resetDocument: Tn,
  updateContinuousContent: _n,
  updatePageBoundaries: vn,
  addPageBreak: Cn,
  removePageBreak: Sn,
  setEditorMode: Nn,
  insertPageAt: wn,
  movePageTo: jn,
  duplicatePage: Mn
} = ze.actions, In = ze.reducer, Dn = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  fn as ContentEditableEditor,
  tn as ContinuousPageView,
  un as DocumentProvider,
  en as EditorToolbar,
  Dn as PAGE_DIMENSIONS,
  an as PageManager,
  rn as PageManagerConnected,
  Ft as Sidebar,
  kn as addPage,
  Cn as addPageBreak,
  pn as clearImages,
  gn as deleteImage,
  En as deletePage,
  In as documentReducer,
  Mn as duplicatePage,
  hn as getAllImageKeys,
  dn as getImage,
  mn as initializeDocument,
  wn as insertPageAt,
  Qt as logger,
  jn as movePageTo,
  Sn as removePageBreak,
  Tn as resetDocument,
  Xt as saveImage,
  An as setActivePage,
  Nn as setEditorMode,
  _n as updateContinuousContent,
  vn as updatePageBoundaries,
  xn as updatePageContent,
  Pn as updatePageSize,
  yn as updatePages,
  bn as updateTitle,
  Je as useContinuousReflow,
  je as useDocument,
  Me as useDocumentActions,
  ye as useDocumentState,
  Ye as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
