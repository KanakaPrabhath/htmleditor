import he, { useState as ne, useCallback as T, useRef as H, useEffect as V } from "react";
import { useDispatch as be, useSelector as xe } from "react-redux";
import { createSlice as Ae } from "@reduxjs/toolkit";
import { v4 as ce } from "uuid";
var Z = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function Ee() {
  if (ue) return Y;
  ue = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function r(o, i, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      s = {};
      for (var f in i)
        f !== "key" && (s[f] = i[f]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: o,
      key: d,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return Y.Fragment = n, Y.jsx = r, Y.jsxs = r, Y;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Pe() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === D ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case w:
          return "Fragment";
        case N:
          return "Profiler";
        case O:
          return "StrictMode";
        case l:
          return "Suspense";
        case h:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case j:
            return "Portal";
          case g:
            return (t.displayName || "Context") + ".Provider";
          case c:
            return (t._context.displayName || "Context") + ".Consumer";
          case b:
            var u = t.render;
            return t = t.displayName, t || (t = u.displayName || u.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case m:
            return u = t.displayName || null, u !== null ? u : e(t.type) || "Memo";
          case P:
            u = t._payload, t = t._init;
            try {
              return e(t(u));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function r(t) {
      try {
        n(t);
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var x = u.error, R = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return x.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), n(t);
      }
    }
    function o(t) {
      if (t === w) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === P)
        return "<...>";
      try {
        var u = e(t);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = v.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(t) {
      if (A.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function f(t, u) {
      function x() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: x,
        configurable: !0
      });
    }
    function C() {
      var t = e(this.type);
      return W[t] || (W[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function p(t, u, x, R, M, z, ae, oe) {
      return x = z.ref, t = {
        $$typeof: L,
        type: t,
        key: u,
        props: z,
        _owner: M
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: C
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function _(t, u, x, R, M, z, ae, oe) {
      var B = u.children;
      if (B !== void 0)
        if (R)
          if (y(B)) {
            for (R = 0; R < B.length; R++)
              S(B[R]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(B);
      if (A.call(u, "key")) {
        B = e(t);
        var U = Object.keys(u).filter(function(Se) {
          return Se !== "key";
        });
        R = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", K[B + R] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          B,
          U,
          B
        ), K[B + R] = !0);
      }
      if (B = null, x !== void 0 && (r(x), B = "" + x), d(u) && (r(u.key), B = "" + u.key), "key" in u) {
        x = {};
        for (var ie in u)
          ie !== "key" && (x[ie] = u[ie]);
      } else x = u;
      return B && f(
        x,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), p(
        t,
        B,
        z,
        M,
        i(),
        x,
        ae,
        oe
      );
    }
    function S(t) {
      typeof t == "object" && t !== null && t.$$typeof === L && t._store && (t._store.validated = 1);
    }
    var k = he, L = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), g = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), v = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, y = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var G, W = {}, F = k.react_stack_bottom_frame.bind(
      k,
      s
    )(), X = I(o(s)), K = {};
    q.Fragment = w, q.jsx = function(t, u, x, R, M) {
      var z = 1e4 > v.recentlyCreatedOwnerStacks++;
      return _(
        t,
        u,
        x,
        !1,
        R,
        M,
        z ? Error("react-stack-top-frame") : F,
        z ? I(o(t)) : X
      );
    }, q.jsxs = function(t, u, x, R, M) {
      var z = 1e4 > v.recentlyCreatedOwnerStacks++;
      return _(
        t,
        u,
        x,
        !0,
        R,
        M,
        z ? Error("react-stack-top-frame") : F,
        z ? I(o(t)) : X
      );
    };
  })()), q;
}
var ge;
function ye() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? Z.exports = Ee() : Z.exports = Pe()), Z.exports;
}
var a = ye();
const re = "A4", $ = "<p><br></p>", J = (e, n = re) => ({
  id: ce(),
  index: e,
  size: n,
  content: $,
  images: [],
  isBreakPoint: !1
}), ve = (e, n = re) => (e.length > 0 ? e : [J(0, n)]).map((o, i) => ({
  id: o.id || ce(),
  index: i,
  size: o.size || n,
  content: te(o.content),
  images: o.images || [],
  isBreakPoint: !!o.isBreakPoint
})), te = (e) => typeof e != "string" || e.trim() === "" ? $ : e, se = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || re, o = ve(e.pages || [J(0, r)], r);
  return {
    id: ce(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: r,
    pages: o,
    activePage: e.activePage && e.activePage < o.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: o.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || $,
    pageBoundaries: e.pageBoundaries || []
  };
}, Ce = se(), ke = Ae({
  name: "document",
  initialState: Ce,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: r = $, pageSize: o = re } = n.payload || {}, i = { ...J(0, o), content: te(r) };
      return se({
        title: e.title,
        pageSize: o,
        pages: [i]
      });
    },
    updateTitle: (e, n) => {
      e.title = n.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, n) => {
      const { pageIndex: r, content: o } = n.payload;
      r < 0 || r >= e.pages.length || (e.pages[r].content = te(o), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const r = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, o = ve(r.pages || [], e.pageSize);
      e.pages = o, e.activePage = Math.min(e.activePage, o.length - 1), e.pageBreaks = Array.isArray(r.pageBreaks) ? r.pageBreaks : o.slice(0, -1).map((i, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = o.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const r = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(r, 0, J(r, e.pageSize)), e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: e.pageSize
      })), e.activePage = r, e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, n) => {
      const r = n.payload;
      e.pages.length <= 1 || (e.pages.splice(r, 1), e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : r <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, n) => {
      const r = n.payload;
      r >= 0 && r < e.pages.length && r !== e.activePage && (e.activePage = r, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, n) => {
      const r = n.payload;
      e.pageSize = r, e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: r
      })), e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => se(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = te(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: r = "end" } = n.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (r === "end")
        e.continuousContent = e.continuousContent + o + "<p><br></p>";
      else if (typeof r == "number") {
        const i = e.continuousContent.substring(0, r), s = e.continuousContent.substring(r);
        e.continuousContent = i + o + s;
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: r } = n.payload || {};
      if (typeof r == "number" && typeof document < "u") {
        const o = document.createElement("div");
        o.innerHTML = e.continuousContent;
        const i = o.querySelectorAll('page-break, [data-page-break="true"]');
        i[r] && i[r].remove(), o.querySelectorAll('page-break, [data-page-break="true"]').forEach((d, f) => {
          d.setAttribute("data-page-number", String(f + 2));
        }), e.continuousContent = o.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const r = n.payload;
      if (r !== e.editorMode) {
        if (e.editorMode = r, r === "continuous") {
          const o = e.pages.map((i) => i.content).filter((i) => i && i !== $).join(`
`);
          e.continuousContent = o || $;
        } else
          e.continuousContent && e.continuousContent !== $ && (e.pages = [{ ...J(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: Ge,
  updateTitle: We,
  updatePageContent: Ye,
  updatePages: qe,
  addPage: Je,
  deletePage: Ve,
  setActivePage: Q,
  updatePageSize: je,
  resetDocument: Fe,
  updateContinuousContent: le,
  updatePageBoundaries: we,
  addPageBreak: Ne,
  removePageBreak: Xe,
  setEditorMode: Ke
} = ke.actions, Ze = ke.reducer, Te = () => {
  const [e, n] = ne({
    bold: !1,
    italic: !1,
    underline: !1,
    strikethrough: !1,
    alignLeft: !1,
    alignCenter: !1,
    alignRight: !1,
    alignJustify: !1,
    fontFamily: "Arial",
    fontSize: "16px"
  }), r = T((o, i = null) => {
    document.execCommand(o, !1, i), o === "bold" ? n((s) => ({ ...s, bold: !s.bold })) : o === "italic" ? n((s) => ({ ...s, italic: !s.italic })) : o === "underline" ? n((s) => ({ ...s, underline: !s.underline })) : o === "strikethrough" ? n((s) => ({ ...s, strikethrough: !s.strikethrough })) : o === "justifyLeft" ? n((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : o === "justifyCenter" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : o === "justifyRight" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : o === "justifyFull" && n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 }));
  }, []);
  return {
    currentFormat: e,
    formatText: r
  };
}, ee = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, pe = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Re = (e, n) => {
  const r = be(), o = H(null), i = H(null), s = H(e), d = H(!1);
  V(() => {
    s.current = e;
  }, [e]), V(() => () => {
    o.current && clearTimeout(o.current), i.current && clearTimeout(i.current);
  }, []);
  const f = T((c, g) => {
    let b = 0;
    for (let l = 0; l < c.length; l++) {
      const h = c[l], m = h.getBoundingClientRect().height;
      if (b + m > g)
        return { overflowIndex: l, overflowElement: h, accumulatedHeight: b };
      b += m;
    }
    return null;
  }, []), C = T((c, g) => {
    if (!c || !n?.current)
      return !1;
    try {
      const b = n.current, l = document.createElement("page-break");
      return l.setAttribute("data-page-break", "true"), l.setAttribute("contenteditable", "false"), l.setAttribute("data-page-number", g || "2"), c.parentNode.insertBefore(l, c), !0;
    } catch (b) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", b), !1;
    }
  }, [n]), p = T(() => {
    if (!(!n?.current || d.current))
      try {
        d.current = !0;
        const c = n.current, g = s.current || "A4", l = (ee[g] || ee.A4).height - pe.top - pe.bottom, h = Array.from(c.children), m = h.filter(
          (v) => v.tagName === "PAGE-BREAK" || v.getAttribute("data-page-break") === "true"
        ), P = [];
        let E = [];
        for (const v of h)
          v.tagName === "PAGE-BREAK" || v.getAttribute("data-page-break") === "true" ? E.length > 0 && (P.push(E), E = []) : E.push(v);
        E.length > 0 && P.push(E), P.length === 0 && h.length > 0 && P.push(h.filter(
          (v) => !(v.tagName === "PAGE-BREAK" || v.getAttribute("data-page-break") === "true")
        ));
        let D = !1;
        for (let v = 0; v < P.length; v++) {
          const A = P[v], y = f(A, l);
          if (y && y.overflowIndex > 0) {
            const I = v + 2;
            if (C(y.overflowElement, I)) {
              D = !0;
              break;
            }
          }
        }
        if (D) {
          const v = c.innerHTML;
          r(le(v)), setTimeout(() => {
            k();
          }, 50);
        }
      } catch (c) {
        console.warn("[checkAndReflow] Reflow failed:", c);
      } finally {
        d.current = !1;
      }
  }, [n, f, C, r]), _ = T((c = 500) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, p();
    }, c);
  }, [p]), S = T((c = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const g = c.pageSize || s.current || "A4", b = ee[g] || ee.A4, l = n.current, h = l.querySelectorAll('page-break, [data-page-break="true"]'), m = [];
    return m.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: b.height
      // No breakElement for first page
    }), h.forEach((P, E) => {
      const D = P.getBoundingClientRect(), v = l.getBoundingClientRect(), A = D.top - v.top + l.scrollTop;
      m.push({
        id: `page-${E + 1}`,
        pageNumber: E + 2,
        top: A,
        height: b.height
        // Don't store breakElement - not serializable
      });
    }), m;
  }, [n]), k = T((c = {}) => {
    const g = S(c);
    return r(we(g)), g;
  }, [S, r]), L = T((c = {}) => {
    o.current && clearTimeout(o.current);
    const g = typeof c.delay == "number" ? c.delay : 300;
    o.current = setTimeout(() => {
      o.current = null, k(c);
    }, Math.max(0, g));
  }, [k]), j = T(() => {
    if (!n?.current)
      return 0;
    const c = window.getSelection();
    if (!c || c.rangeCount === 0)
      return 0;
    try {
      const g = c.getRangeAt(0), b = n.current;
      let l = g.startContainer;
      const h = Array.from(b.querySelectorAll('page-break, [data-page-break="true"]'));
      if (h.length === 0)
        return 0;
      for (; l && l !== b; ) {
        for (let m = h.length - 1; m >= 0; m--)
          if (h[m].compareDocumentPosition(l) & Node.DOCUMENT_POSITION_FOLLOWING)
            return m + 1;
        l = l.parentNode;
      }
      return 0;
    } catch (g) {
      return console.warn("[getCurrentPage] Failed to calculate page:", g), 0;
    }
  }, [n]), w = T((c, g) => {
    if (!g?.current || !n?.current)
      return;
    n.current;
    const l = S().find((h) => h.pageNumber === c + 1);
    l && (g.current.scrollTo({
      top: l.top - 40,
      behavior: "smooth"
    }), setTimeout(() => {
      O(c);
    }, 300));
  }, [n]), O = T((c) => {
    if (!n?.current)
      return;
    const g = n.current;
    g.focus();
    try {
      let b = null, l = 0;
      if (c === 0)
        b = g.firstChild, l = 0;
      else {
        const m = g.querySelectorAll('page-break, [data-page-break="true"]')[c - 1];
        m && m.nextSibling && (b = m.nextSibling, l = 0);
      }
      if (b) {
        const h = document.createRange(), m = window.getSelection();
        b.nodeType === Node.TEXT_NODE ? h.setStart(b, l) : h.setStart(b, 0), h.collapse(!0), m.removeAllRanges(), m.addRange(h);
      }
    } catch (b) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", b);
    }
  }, [n]), N = T((c) => {
    if (!n?.current)
      return !1;
    const g = n.current;
    if (S().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const l = Array.from(g.querySelectorAll('page-break, [data-page-break="true"]'));
      if (c > l.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const h = window.getSelection();
      let m = !1, P = [], E = null;
      if (c === 0) {
        const A = l[0];
        if (!A)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let y = g.firstChild;
        for (; y && y !== A; )
          P.push(y), y = y.nextSibling;
        E = A;
      } else {
        const A = l[c - 1];
        if (!A)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const y = l[c];
        let I = A.nextSibling;
        for (; I && I !== y; )
          P.push(I), I = I.nextSibling;
        E = A;
      }
      if (h && h.rangeCount > 0) {
        const y = h.getRangeAt(0).startContainer;
        for (const I of P)
          if (I.contains(y) || I === y) {
            m = !0;
            break;
          }
      }
      E && E.parentNode && E.remove(), P.forEach((A) => {
        A.parentNode && A.remove();
      }), g.querySelectorAll('page-break, [data-page-break="true"]').forEach((A, y) => {
        A.setAttribute("data-page-number", String(y + 2));
      }), m && setTimeout(() => {
        O(0);
      }, 50);
      const v = g.innerHTML;
      return r(le(v)), setTimeout(() => {
        k();
      }, 100), !0;
    } catch (l) {
      return console.error("[removePageAndContent] Failed to remove page:", l), !1;
    }
  }, [n, S, r, k, O]);
  return {
    calculatePageBoundaries: S,
    checkAndUpdateBoundaries: L,
    updateBoundaries: k,
    getCurrentPage: j,
    scrollToPage: w,
    positionCursorAtPage: O,
    checkAndReflow: p,
    triggerAutoReflow: _,
    removePageAndContent: N,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: i
  };
}, _e = ({ editorView: e, isCollapsed: n, onToggle: r, wordCount: o, pageCount: i }) => {
  const s = xe((w) => w.document), { pages: d, activePage: f, continuousContent: C, editorMode: p } = s, [_, S] = ne(0), [k, L] = ne([]);
  V(() => {
    if (o !== void 0 && i !== void 0) {
      if (S(o), C) {
        const N = document.createElement("div");
        N.innerHTML = C;
        const c = N.querySelectorAll("h1, h2, h3, h4, h5, h6"), g = Array.from(c).map((b, l) => {
          const h = parseInt(b.tagName.charAt(1)), m = b.textContent.trim();
          return m ? {
            id: `heading-${l}`,
            level: h,
            text: m,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        L(g);
      }
      return;
    }
    let w = 0;
    const O = [];
    d.forEach((N, c) => {
      if (N.content) {
        const g = document.createElement("div");
        g.innerHTML = N.content;
        const l = (g.textContent || g.innerText || "").trim().split(/\s+/).filter((m) => m.length > 0);
        w += l.length, g.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((m, P) => {
          const E = parseInt(m.tagName.charAt(1)), D = m.textContent.trim();
          D && O.push({
            id: `heading-${c}-${P}`,
            level: E,
            text: D,
            page: c + 1
          });
        });
      }
    }), S(w), L(O);
  }, [d, o, i, C]);
  const j = i !== void 0 ? i : d.length;
  return /* @__PURE__ */ a.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ a.jsx("h2", { children: "Document Info" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: r,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? "▶" : "◀"
            }
          )
        ] }),
        !n && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsx("span", { className: "stat-label", children: "Pages:" }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: j })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ a.jsx("span", { className: "stat-label", children: "Words:" }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: _.toLocaleString() })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ a.jsx("span", { className: "stat-label", children: "Active Page:" }),
              /* @__PURE__ */ a.jsx("span", { className: "stat-value", children: f + 1 })
            ] })
          ] }),
          k.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Document Outline" }),
            /* @__PURE__ */ a.jsx("div", { className: "document-outline", "data-testid": "outline", children: k.map((w) => /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: `outline-item outline-level-${w.level}`,
                style: { marginLeft: `${(w.level - 1) * 12}px` },
                children: [
                  /* @__PURE__ */ a.jsx("span", { className: "outline-text", children: w.text }),
                  /* @__PURE__ */ a.jsxs("span", { className: "outline-page", children: [
                    "p.",
                    w.page
                  ] })
                ]
              },
              w.id
            )) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ a.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ a.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ a.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Ie() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Be(e) {
  return new Promise((n, r) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      r(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      r(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = (s) => {
      const d = s.target.result;
      if (d.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const p = `editor-image-${Ie()}`;
        localStorage.setItem(p, d), n(p);
      } catch (p) {
        p.name === "QuotaExceededError" ? r(new Error("Storage quota exceeded")) : r(p);
      }
    }, i.onerror = () => {
      r(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function Qe(e) {
  return localStorage.getItem(e);
}
function et(e) {
  localStorage.removeItem(e);
}
function tt() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function nt() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Oe {
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
  _format(n, r, o) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${n}] ${r}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(n, r) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(n, r) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(n, r) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(n, r) {
  }
}
const fe = new Oe("Editor"), Le = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: r,
  onPageSizeChange: o,
  onAddPageBreak: i
}) => {
  const s = async (d) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(d.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (d.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const C = await Be(d), p = localStorage.getItem(C);
      p && (document.execCommand("insertImage", !1, p), fe.info("Image inserted", { key: C }));
    } catch (f) {
      fe.error("Error uploading image", f);
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ a.jsx("strong", { children: "B" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ a.jsx("em", { children: "I" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ a.jsx("u", { children: "U" })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ a.jsx("s", { children: "S" })
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: "⬅️"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: "⬌"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: "➡️"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: "⬌"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        onChange: (d) => r("fontName", d.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ a.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ a.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ a.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ a.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        onChange: (d) => r("fontSize", d.target.value),
        defaultValue: "16px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ a.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ a.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ a.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ a.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ a.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ a.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertUnorderedList"),
        title: "Bullet List",
        children: "• List"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertOrderedList"),
        title: "Numbered List",
        children: "1. List"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertCheckList"),
        title: "Checklist",
        children: "☑️ List"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => {
          const d = prompt("Enter URL:");
          d && r("createLink", d);
        },
        title: "Insert Link",
        children: "🔗 Link"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: "📊 Table"
      }
    ),
    i && /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: "📄 Page Break"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("undo"),
        title: "Undo",
        children: "↶ Undo"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => r("redo"),
        title: "Redo",
        children: "↷ Redo"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (d) => d.target.files[0] && s(d.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: "🖼️ Image"
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        value: n,
        onChange: (d) => o(d.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ a.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ a.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
}, De = ({
  content: e,
  dimensions: n,
  pageSize: r,
  pageBoundaries: o = [],
  editorRef: i,
  onInput: s,
  onKeyDown: d,
  onClick: f,
  onScroll: C
}) => {
  const p = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, _ = (S) => {
    const k = window.getSelection();
    if (!k || k.rangeCount === 0) return;
    const L = k.getRangeAt(0), { startContainer: j, endContainer: w } = L, O = (N) => N ? N.nodeType === Node.ELEMENT_NODE ? N.tagName === "PAGE-BREAK" || N.getAttribute("data-page-break") === "true" : N.parentElement && O(N.parentElement) : !1;
    if ((S.key === "Backspace" || S.key === "Delete") && (O(j) || O(w)))
      return S.preventDefault(), !1;
    d && d(S);
  };
  return /* @__PURE__ */ a.jsx(
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
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: i,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${n.height}px`,
            backgroundColor: "white",
            padding: `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px`,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            cursor: "text",
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#333",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            border: "1px solid #e0e0e0"
          },
          onInput: s,
          onKeyDown: _,
          onClick: f,
          onScroll: C,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, ze = ({
  pages: e,
  activePage: n,
  pageSize: r,
  onNavigate: o,
  onAddPage: i,
  onDeletePage: s,
  onPageSizeChange: d,
  continuousMode: f = !1
}) => /* @__PURE__ */ a.jsxs("div", { className: "page-manager", children: [
  /* @__PURE__ */ a.jsxs("div", { className: "page-size-controls", children: [
    /* @__PURE__ */ a.jsx("label", { htmlFor: "page-size-selector", children: "Page Size:" }),
    /* @__PURE__ */ a.jsxs(
      "select",
      {
        id: "page-size-selector",
        role: "combobox",
        "aria-label": "Page size selector",
        value: r,
        onChange: (C) => d(C.target.value),
        children: [
          /* @__PURE__ */ a.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ a.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ a.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] }),
  /* @__PURE__ */ a.jsx("div", { className: "page-list", children: e.map((C, p) => /* @__PURE__ */ a.jsxs("div", { className: "page-item", children: [
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        type: "button",
        className: `page-button ${p === n ? "active" : ""}`,
        onClick: () => o(p),
        "aria-label": `Go to page ${p + 1}`,
        children: [
          "Page ",
          p + 1
        ]
      }
    ),
    !f && e.length > 1 && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "delete-page-button",
        onClick: (_) => {
          _.stopPropagation(), s(p);
        },
        "aria-label": `Delete page ${p + 1}`,
        title: "Delete this page and its content",
        children: "×"
      }
    )
  ] }, C.id)) }),
  !f && /* @__PURE__ */ a.jsx(
    "button",
    {
      type: "button",
      className: "add-page-button",
      onClick: i,
      "aria-label": "Add new page",
      children: "+ Add Page"
    }
  )
] }), me = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, rt = ({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: r,
  onDeletePage: o,
  onPageSizeChange: i,
  showSidebar: s = !0,
  showToolbar: d = !0
}) => {
  const f = be(), C = xe((t) => t.document), { pageSize: p, continuousContent: _, pageBoundaries: S, activePage: k } = C, L = H(null), j = H(null), { currentFormat: w, formatText: O } = Te(), {
    checkAndUpdateBoundaries: N,
    getCurrentPage: c,
    scrollToPage: g,
    positionCursorAtPage: b,
    updateBoundaries: l,
    triggerAutoReflow: h,
    removePageAndContent: m
  } = Re(p, j), P = me[p] || me.A4, [E, D] = ne(!1);
  V(() => {
    j.current && j.current.innerHTML !== _ && (j.current.innerHTML = _, setTimeout(() => {
      l();
    }, 100));
  }, [_, l]), V(() => {
    const t = setTimeout(() => {
      j.current && j.current.focus();
    }, 200);
    return () => clearTimeout(t);
  }, []);
  const v = T((t) => {
    const u = t.currentTarget.innerHTML;
    f(le(u)), N(), h();
    const x = c();
    x !== k && f(Q(x));
  }, [N, f, c, k, h]), A = T((t) => {
    f(je(t)), l({ pageSize: t }), i && i(t);
  }, [f, l, i]), y = T((t) => {
    f(Q(t)), g(t, L), n && n(t);
  }, [f, g, n]), I = T(() => {
    f(Ne({ position: "end" })), setTimeout(() => {
      l();
    }, 100), r && r();
  }, [f, l, r]), G = T(() => {
    const t = window.getSelection();
    if (t && t.rangeCount > 0) {
      if (!j?.current) return;
      const R = `<page-break data-page-break="true" contenteditable="false" data-page-number="${j.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, R), setTimeout(() => {
        l();
      }, 100);
    }
  }, [l, j]), W = T((t) => {
    if (S.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    m(t) && (f(Q(0)), o && o(t));
  }, [S.length, m, f, o]), F = T(() => {
    if (!L.current || !j.current) return;
    const t = c();
    t !== k && f(Q(t));
  }, [c, k, f]), X = _ ? (_.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g) || []).length : 0, K = S.length || 1;
  return /* @__PURE__ */ a.jsxs("div", { className: "multi-page-editor", children: [
    d && /* @__PURE__ */ a.jsx(
      Le,
      {
        currentFormat: w,
        pageSize: p,
        onFormatText: O,
        onPageSizeChange: A,
        onAddPageBreak: G
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ a.jsx(
        _e,
        {
          editorView: null,
          isCollapsed: E,
          onToggle: () => D((t) => !t),
          wordCount: X,
          pageCount: K
        }
      ),
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: L,
          onScroll: F,
          children: /* @__PURE__ */ a.jsx(
            De,
            {
              content: _,
              dimensions: P,
              pageSize: p,
              pageBoundaries: S,
              editorRef: j,
              onInput: v,
              onClick: () => j.current?.focus()
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "page-manager-sidebar", children: e ? he.cloneElement(e, {
        pages: S.map((t, u) => ({
          id: t.id,
          index: u,
          size: p
        })),
        activePage: k,
        pageSize: p,
        onNavigate: y,
        onAddPage: I,
        onDeletePage: W,
        onPageSizeChange: A
      }) : /* @__PURE__ */ a.jsx(
        ze,
        {
          pages: S.map((t, u) => ({
            id: t.id,
            index: u,
            size: p
          })),
          activePage: k,
          pageSize: p,
          onNavigate: y,
          onAddPage: I,
          onDeletePage: W,
          onPageSizeChange: A,
          continuousMode: !1
        }
      ) })
    ] })
  ] });
}, at = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  rt as ContentEditableEditor,
  De as ContinuousPageView,
  Le as EditorToolbar,
  at as PAGE_DIMENSIONS,
  ze as PageManager,
  _e as Sidebar,
  Je as addPage,
  Ne as addPageBreak,
  tt as clearImages,
  et as deleteImage,
  Ve as deletePage,
  Ze as documentReducer,
  nt as getAllImageKeys,
  Qe as getImage,
  Ge as initializeDocument,
  Oe as logger,
  Xe as removePageBreak,
  Fe as resetDocument,
  Be as saveImage,
  Q as setActivePage,
  Ke as setEditorMode,
  le as updateContinuousContent,
  we as updatePageBoundaries,
  Ye as updatePageContent,
  je as updatePageSize,
  qe as updatePages,
  We as updateTitle,
  Re as useContinuousReflow,
  Te as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
