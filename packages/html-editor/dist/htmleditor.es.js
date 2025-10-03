import be, { useState as ae, useCallback as z, useRef as q, useEffect as Y, forwardRef as ye, createElement as le } from "react";
import { useDispatch as ve, useSelector as je } from "react-redux";
import { createSlice as Ee } from "@reduxjs/toolkit";
import { v4 as de } from "uuid";
var Q = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Pe() {
  if (ge) return V;
  ge = 1;
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function r(o, i, s) {
    var u = null;
    if (s !== void 0 && (u = "" + s), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      s = {};
      for (var x in i)
        x !== "key" && (s[x] = i[x]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: o,
      key: u,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return V.Fragment = a, V.jsx = r, V.jsxs = r, V;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function _e() {
  return pe || (pe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === S ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case T:
          return "Fragment";
        case l:
          return "Profiler";
        case I:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case k:
            return "Portal";
          case m:
            return t.displayName || "Context";
          case d:
            return (t._context.displayName || "Context") + ".Consumer";
          case g:
            var c = t.render;
            return t = t.displayName, t || (t = c.displayName || c.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case P:
            return c = t.displayName || null, c !== null ? c : e(t.type) || "Memo";
          case A:
            c = t._payload, t = t._init;
            try {
              return e(t(c));
            } catch {
            }
        }
      return null;
    }
    function a(t) {
      return "" + t;
    }
    function r(t) {
      try {
        a(t);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var j = c.error, _ = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return j.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), a(t);
      }
    }
    function o(t) {
      if (t === T) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === A)
        return "<...>";
      try {
        var c = e(t);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = N.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function u(t) {
      if (w.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function x(t, c) {
      function j() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: j,
        configurable: !0
      });
    }
    function p() {
      var t = e(this.type);
      return U[t] || (U[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function b(t, c, j, _, K, ie) {
      var M = j.ref;
      return t = {
        $$typeof: L,
        type: t,
        key: c,
        props: j,
        _owner: _
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: p
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
        value: K
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function E(t, c, j, _, K, ie) {
      var M = c.children;
      if (M !== void 0)
        if (_)
          if (B(M)) {
            for (_ = 0; _ < M.length; _++)
              v(M[_]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(M);
      if (w.call(c, "key")) {
        M = e(t);
        var H = Object.keys(c).filter(function(we) {
          return we !== "key";
        });
        _ = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", Z[M + _] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          M,
          H,
          M
        ), Z[M + _] = !0);
      }
      if (M = null, j !== void 0 && (r(j), M = "" + j), u(c) && (r(c.key), M = "" + c.key), "key" in c) {
        j = {};
        for (var se in c)
          se !== "key" && (j[se] = c[se]);
      } else j = c;
      return M && x(
        j,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), b(
        t,
        M,
        j,
        i(),
        K,
        ie
      );
    }
    function v(t) {
      C(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === A && (t._payload.status === "fulfilled" ? C(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function C(t) {
      return typeof t == "object" && t !== null && t.$$typeof === L;
    }
    var R = be, L = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), N = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, B = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var J, U = {}, F = R.react_stack_bottom_frame.bind(
      R,
      s
    )(), X = $(o(s)), Z = {};
    G.Fragment = T, G.jsx = function(t, c, j) {
      var _ = 1e4 > N.recentlyCreatedOwnerStacks++;
      return E(
        t,
        c,
        j,
        !1,
        _ ? Error("react-stack-top-frame") : F,
        _ ? $(o(t)) : X
      );
    }, G.jsxs = function(t, c, j) {
      var _ = 1e4 > N.recentlyCreatedOwnerStacks++;
      return E(
        t,
        c,
        j,
        !0,
        _ ? Error("react-stack-top-frame") : F,
        _ ? $(o(t)) : X
      );
    };
  })()), G;
}
var he;
function Te() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? Q.exports = Pe() : Q.exports = _e()), Q.exports;
}
var n = Te();
const oe = "A4", D = "<p><br></p>", W = (e, a = oe) => ({
  id: de(),
  index: e,
  size: a,
  content: D,
  images: [],
  isBreakPoint: !1
}), Ae = (e, a = oe) => (e.length > 0 ? e : [W(0, a)]).map((o, i) => ({
  id: o.id || de(),
  index: i,
  size: o.size || a,
  content: ne(o.content),
  images: o.images || [],
  isBreakPoint: !!o.isBreakPoint
})), ne = (e) => typeof e != "string" || e.trim() === "" ? D : e, ce = (e = {}) => {
  const a = (/* @__PURE__ */ new Date()).toISOString(), r = e.pageSize || oe, o = Ae(e.pages || [W(0, r)], r);
  return {
    id: de(),
    title: e.title || "Untitled Document",
    createdAt: a,
    updatedAt: a,
    pageSize: r,
    pages: o,
    activePage: e.activePage && e.activePage < o.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: o.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || D,
    pageBoundaries: e.pageBoundaries || []
  };
}, Me = ce(), Se = Ee({
  name: "document",
  initialState: Me,
  reducers: {
    initializeDocument: (e, a) => {
      const { initialContent: r = D, pageSize: o = oe } = a.payload || {}, i = { ...W(0, o), content: ne(r) };
      return ce({
        title: e.title,
        pageSize: o,
        pages: [i]
      });
    },
    updateTitle: (e, a) => {
      e.title = a.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, a) => {
      const { pageIndex: r, content: o } = a.payload;
      r < 0 || r >= e.pages.length || (e.pages[r].content = ne(o), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, a) => {
      const r = Array.isArray(a.payload) ? { pages: a.payload } : a.payload || {}, o = Ae(r.pages || [], e.pageSize);
      e.pages = o, e.activePage = Math.min(e.activePage, o.length - 1), e.pageBreaks = Array.isArray(r.pageBreaks) ? r.pageBreaks : o.slice(0, -1).map((i, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = o.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, a) => {
      const r = typeof a.payload?.index == "number" ? Math.min(Math.max(a.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(r, 0, W(r, e.pageSize)), e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: e.pageSize
      })), e.activePage = r, e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, a) => {
      const r = a.payload;
      e.pages.length <= 1 || (e.pages.splice(r, 1), e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : r <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, a) => {
      const r = a.payload;
      r >= 0 && r < e.pages.length && r !== e.activePage && (e.activePage = r, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, a) => {
      const r = a.payload;
      e.pageSize = r, e.pages = e.pages.map((o, i) => ({
        ...o,
        index: i,
        size: r
      })), e.pageBreaks = e.pages.slice(0, -1).map((o, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => ce(),
    // Continuous mode actions
    updateContinuousContent: (e, a) => {
      e.continuousContent = ne(a.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, a) => {
      e.pageBoundaries = a.payload || [], e.totalPages = e.pageBoundaries.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, a) => {
      const { position: r = "end" } = a.payload || {}, o = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (r === "end")
        e.continuousContent = e.continuousContent + o + "<p><br></p>";
      else if (typeof r == "number") {
        const i = e.continuousContent.substring(0, r), s = e.continuousContent.substring(r);
        e.continuousContent = i + o + s;
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, a) => {
      const { pageIndex: r } = a.payload || {};
      if (typeof r == "number" && typeof document < "u") {
        const o = document.createElement("div");
        o.innerHTML = e.continuousContent;
        const i = o.querySelectorAll('page-break, [data-page-break="true"]');
        i[r] && i[r].remove(), o.querySelectorAll('page-break, [data-page-break="true"]').forEach((u, x) => {
          u.setAttribute("data-page-number", String(x + 2));
        }), e.continuousContent = o.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, a) => {
      const r = a.payload;
      if (r !== e.editorMode) {
        if (e.editorMode = r, r === "continuous") {
          const o = e.pages.map((i) => i.content).filter((i) => i && i !== D).join(`
`);
          e.continuousContent = o || D;
        } else
          e.continuousContent && e.continuousContent !== D && (e.pages = [{ ...W(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: Kt,
  updateTitle: Qt,
  updatePageContent: en,
  updatePages: tn,
  addPage: nn,
  deletePage: an,
  setActivePage: ee,
  updatePageSize: ze,
  resetDocument: rn,
  updateContinuousContent: ue,
  updatePageBoundaries: Re,
  addPageBreak: Ie,
  removePageBreak: on,
  setEditorMode: sn
} = Se.actions, ln = Se.reducer, Be = () => {
  const [e, a] = ae({
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
  }), r = z((o, i = null) => {
    if (o === "fontSize") {
      const u = {
        "10px": "1",
        "12px": "2",
        "14px": "3",
        "16px": "4",
        "18px": "5",
        "24px": "6",
        "32px": "7"
      }[i] || "2";
      document.execCommand("fontSize", !1, u);
      const x = window.getSelection();
      if (x && x.rangeCount > 0) {
        const p = x.getRangeAt(0);
        if (p.toString()) {
          const E = document.createElement("span");
          E.style.fontSize = i, p.surroundContents(E);
        }
      }
    } else
      document.execCommand(o, !1, i);
    o === "bold" ? a((s) => ({ ...s, bold: !s.bold })) : o === "italic" ? a((s) => ({ ...s, italic: !s.italic })) : o === "underline" ? a((s) => ({ ...s, underline: !s.underline })) : o === "strikethrough" ? a((s) => ({ ...s, strikethrough: !s.strikethrough })) : o === "justifyLeft" ? a((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : o === "justifyCenter" ? a((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : o === "justifyRight" ? a((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : o === "justifyFull" ? a((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 })) : o === "fontSize" && a((s) => ({ ...s, fontSize: i }));
  }, []);
  return {
    currentFormat: e,
    formatText: r
  };
}, te = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, fe = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, Le = (e, a) => {
  const r = ve(), o = q(null), i = q(null), s = q(e), u = q(!1);
  Y(() => {
    s.current = e;
  }, [e]), Y(() => () => {
    o.current && clearTimeout(o.current), i.current && clearTimeout(i.current);
  }, []);
  const x = z((l, d) => {
    let m = 0;
    for (let g = 0; g < l.length; g++) {
      const h = l[g], f = h.getBoundingClientRect().height;
      if (m + f > d)
        return { overflowIndex: g, overflowElement: h, accumulatedHeight: m };
      m += f;
    }
    return null;
  }, []), p = z((l, d) => {
    if (!l || !a?.current)
      return !1;
    try {
      const m = a.current, g = document.createElement("page-break");
      return g.setAttribute("data-page-break", "true"), g.setAttribute("contenteditable", "false"), g.setAttribute("data-page-number", d || "2"), l.parentNode.insertBefore(g, l), !0;
    } catch (m) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", m), !1;
    }
  }, [a]), b = z(() => {
    if (!(!a?.current || u.current))
      try {
        u.current = !0;
        const l = a.current, d = s.current || "A4", g = (te[d] || te.A4).height - fe.top - fe.bottom, h = Array.from(l.children), f = h.filter(
          (S) => S.tagName === "PAGE-BREAK" || S.getAttribute("data-page-break") === "true"
        ), P = [];
        let A = [];
        for (const S of h)
          S.tagName === "PAGE-BREAK" || S.getAttribute("data-page-break") === "true" ? A.length > 0 && (P.push(A), A = []) : A.push(S);
        A.length > 0 && P.push(A), P.length === 0 && h.length > 0 && P.push(h.filter(
          (S) => !(S.tagName === "PAGE-BREAK" || S.getAttribute("data-page-break") === "true")
        ));
        let O = !1;
        for (let S = 0; S < P.length; S++) {
          const N = P[S], w = x(N, g);
          if (w && w.overflowIndex > 0) {
            const B = S + 2;
            if (p(w.overflowElement, B)) {
              O = !0;
              break;
            }
          }
        }
        if (O) {
          const S = l.innerHTML;
          r(ue(S)), setTimeout(() => {
            C();
          }, 50);
        }
      } catch (l) {
        console.warn("[checkAndReflow] Reflow failed:", l);
      } finally {
        u.current = !1;
      }
  }, [a, x, p, r]), E = z((l = 500) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, b();
    }, l);
  }, [b]), v = z((l = {}) => {
    if (!a?.current || typeof document > "u")
      return [];
    const d = l.pageSize || s.current || "A4", m = te[d] || te.A4, g = a.current, h = g.querySelectorAll('page-break, [data-page-break="true"]'), f = [];
    return f.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: m.height
      // No breakElement for first page
    }), h.forEach((P, A) => {
      const O = P.getBoundingClientRect(), S = g.getBoundingClientRect(), N = O.top - S.top + g.scrollTop;
      f.push({
        id: `page-${A + 1}`,
        pageNumber: A + 2,
        top: N,
        height: m.height
        // Don't store breakElement - not serializable
      });
    }), f;
  }, [a]), C = z((l = {}) => {
    const d = v(l);
    return r(Re(d)), d;
  }, [v, r]), R = z((l = {}) => {
    o.current && clearTimeout(o.current);
    const d = typeof l.delay == "number" ? l.delay : 300;
    o.current = setTimeout(() => {
      o.current = null, C(l);
    }, Math.max(0, d));
  }, [C]), L = z(() => {
    if (!a?.current)
      return 0;
    const l = window.getSelection();
    if (!l || l.rangeCount === 0)
      return 0;
    try {
      const d = l.getRangeAt(0), m = a.current;
      let g = d.startContainer;
      const h = Array.from(m.querySelectorAll('page-break, [data-page-break="true"]'));
      if (h.length === 0)
        return 0;
      for (; g && g !== m; ) {
        for (let f = h.length - 1; f >= 0; f--)
          if (h[f].compareDocumentPosition(g) & Node.DOCUMENT_POSITION_FOLLOWING)
            return f + 1;
        g = g.parentNode;
      }
      return 0;
    } catch (d) {
      return console.warn("[getCurrentPage] Failed to calculate page:", d), 0;
    }
  }, [a]), k = z((l, d) => {
    if (!d?.current || !a?.current)
      return;
    a.current;
    const g = v().find((h) => h.pageNumber === l + 1);
    g && (d.current.scrollTo({
      top: g.top - 40,
      behavior: "smooth"
    }), setTimeout(() => {
      T(l);
    }, 300));
  }, [a]), T = z((l) => {
    if (!a?.current)
      return;
    const d = a.current;
    d.focus();
    try {
      let m = null, g = 0;
      if (l === 0)
        m = d.firstChild, g = 0;
      else {
        const f = d.querySelectorAll('page-break, [data-page-break="true"]')[l - 1];
        f && f.nextSibling && (m = f.nextSibling, g = 0);
      }
      if (m) {
        const h = document.createRange(), f = window.getSelection();
        m.nodeType === Node.TEXT_NODE ? h.setStart(m, g) : h.setStart(m, 0), h.collapse(!0), f.removeAllRanges(), f.addRange(h);
      }
    } catch (m) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", m);
    }
  }, [a]), I = z((l) => {
    if (!a?.current)
      return !1;
    const d = a.current;
    if (v().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const g = Array.from(d.querySelectorAll('page-break, [data-page-break="true"]'));
      if (l > g.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const h = window.getSelection();
      let f = !1, P = [], A = null;
      if (l === 0) {
        const N = g[0];
        if (!N)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let w = d.firstChild;
        for (; w && w !== N; )
          P.push(w), w = w.nextSibling;
        A = N;
      } else {
        const N = g[l - 1];
        if (!N)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const w = g[l];
        let B = N.nextSibling;
        for (; B && B !== w; )
          P.push(B), B = B.nextSibling;
        A = N;
      }
      if (h && h.rangeCount > 0) {
        const w = h.getRangeAt(0).startContainer;
        for (const B of P)
          if (B.contains(w) || B === w) {
            f = !0;
            break;
          }
      }
      A && A.parentNode && A.remove(), P.forEach((N) => {
        N.parentNode && N.remove();
      }), d.querySelectorAll('page-break, [data-page-break="true"]').forEach((N, w) => {
        N.setAttribute("data-page-number", String(w + 2));
      }), f && setTimeout(() => {
        T(0);
      }, 50);
      const S = d.innerHTML;
      return r(ue(S)), setTimeout(() => {
        C();
      }, 100), !0;
    } catch (g) {
      return console.error("[removePageAndContent] Failed to remove page:", g), !1;
    }
  }, [a, v, r, C, T]);
  return {
    calculatePageBoundaries: v,
    checkAndUpdateBoundaries: R,
    updateBoundaries: C,
    getCurrentPage: L,
    scrollToPage: k,
    positionCursorAtPage: T,
    checkAndReflow: b,
    triggerAutoReflow: E,
    removePageAndContent: I,
    boundaryTimeoutRef: o,
    reflowTimeoutRef: i
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $e = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), me = (e) => {
  const a = $e(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, Ce = (...e) => e.filter((a, r, o) => !!a && a.trim() !== "" && o.indexOf(a) === r).join(" ").trim(), De = (e) => {
  for (const a in e)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var He = {
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
const qe = ye(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: i = "",
    children: s,
    iconNode: u,
    ...x
  }, p) => le(
    "svg",
    {
      ref: p,
      ...He,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(a) : r,
      className: Ce("lucide", i),
      ...!s && !De(x) && { "aria-hidden": "true" },
      ...x
    },
    [
      ...u.map(([b, E]) => le(b, E)),
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
const y = (e, a) => {
  const r = ye(
    ({ className: o, ...i }, s) => le(qe, {
      ref: s,
      iconNode: a,
      className: Ce(
        `lucide-${Oe(me(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return r.displayName = me(e), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Ve = y("bold", Ue);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], We = y("chevron-left", Ge);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Je = y("chevron-right", Ye);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Xe = y("file-check", Fe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], re = y("file-text", Ze);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Qe = y("hash", Ke);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], tt = y("heading-1", et);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], at = y("heading-2", nt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], ot = y("heading-3", rt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], st = y("image", it);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], ct = y("italic", lt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], dt = y("link", ut);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], pt = y("list-ordered", gt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Ne = y("list", ht);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], mt = y("plus", ft);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], kt = y("redo", xt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], yt = y("settings", bt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], jt = y("square-check-big", vt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], St = y("strikethrough", At);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Nt = y("table", Ct);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Et = y("text-align-center", wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], _t = y("text-align-end", Pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], Mt = y("text-align-justify", Tt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Rt = y("text-align-start", zt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Bt = y("underline", It);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], Ot = y("undo", Lt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Dt = y("x", $t), Ht = ({ editorView: e, isCollapsed: a, onToggle: r, wordCount: o, pageCount: i }) => {
  const s = je((k) => k.document), { pages: u, activePage: x, continuousContent: p, editorMode: b } = s, [E, v] = ae(0), [C, R] = ae([]);
  Y(() => {
    if (o !== void 0 && i !== void 0) {
      if (v(o), p) {
        const I = document.createElement("div");
        I.innerHTML = p;
        const l = I.querySelectorAll("h1, h2, h3, h4, h5, h6"), d = Array.from(l).map((m, g) => {
          const h = parseInt(m.tagName.charAt(1)), f = m.textContent.trim();
          return f ? {
            id: `heading-${g}`,
            level: h,
            text: f,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        R(d);
      }
      return;
    }
    let k = 0;
    const T = [];
    u.forEach((I, l) => {
      if (I.content) {
        const d = document.createElement("div");
        d.innerHTML = I.content;
        const g = (d.textContent || d.innerText || "").trim().split(/\s+/).filter((f) => f.length > 0);
        k += g.length, d.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((f, P) => {
          const A = parseInt(f.tagName.charAt(1)), O = f.textContent.trim();
          O && T.push({
            id: `heading-${l}-${P}`,
            level: A,
            text: O,
            page: l + 1
          });
        });
      }
    }), v(k), R(T);
  }, [u, o, i, p]);
  const L = i !== void 0 ? i : u.length;
  return /* @__PURE__ */ n.jsxs(
    "aside",
    {
      className: `sidebar ${a ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ n.jsx(re, { size: 18 }),
            /* @__PURE__ */ n.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: r,
              "aria-label": a ? "Expand sidebar" : "Collapse sidebar",
              title: a ? "Expand sidebar" : "Collapse sidebar",
              children: a ? /* @__PURE__ */ n.jsx(Je, { size: 16 }) : /* @__PURE__ */ n.jsx(We, { size: 16 })
            }
          )
        ] }),
        !a && /* @__PURE__ */ n.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ n.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ n.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ n.jsx(Xe, { size: 14 }),
                /* @__PURE__ */ n.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "stat-value", children: L })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ n.jsx(Qe, { size: 14 }),
                /* @__PURE__ */ n.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "stat-value", children: E.toLocaleString() })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ n.jsx(re, { size: 14 }),
                /* @__PURE__ */ n.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "stat-value", children: x + 1 })
            ] })
          ] }),
          C.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ n.jsxs("h3", { children: [
              /* @__PURE__ */ n.jsx(Ne, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "document-outline", "data-testid": "outline", children: C.map((k) => {
              const T = k.level === 1 ? tt : k.level === 2 ? at : ot;
              return /* @__PURE__ */ n.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${k.level}`,
                  style: { marginLeft: `${(k.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ n.jsx(T, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ n.jsx("span", { className: "outline-text", children: k.text }),
                    /* @__PURE__ */ n.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      k.page
                    ] })
                  ]
                },
                k.id
              );
            }) })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ n.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ n.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ n.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function qt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const a = Math.random() * 16 | 0;
    return (e === "x" ? a : a & 3 | 8).toString(16);
  });
}
function Ut(e) {
  return new Promise((a, r) => {
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
      const u = s.target.result;
      if (u.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        r(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const b = `editor-image-${qt()}`;
        localStorage.setItem(b, u), a(b);
      } catch (b) {
        b.name === "QuotaExceededError" ? r(new Error("Storage quota exceeded")) : r(b);
      }
    }, i.onerror = () => {
      r(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function cn(e) {
  return localStorage.getItem(e);
}
function un(e) {
  localStorage.removeItem(e);
}
function dn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function gn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Vt {
  constructor(a = "Editor") {
    this.namespace = a;
  }
  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(a, r, o) {
    return `[${(/* @__PURE__ */ new Date()).toISOString()}] [${this.namespace}] [${a}] ${r}`;
  }
  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(a, r) {
  }
  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(a, r) {
  }
  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(a, r) {
  }
  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(a, r) {
  }
}
const xe = new Vt("Editor"), Gt = ({
  currentFormat: e,
  pageSize: a,
  onFormatText: r,
  onPageSizeChange: o,
  onAddPageBreak: i
}) => {
  const s = async (u) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(u.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (u.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const p = await Ut(u), b = localStorage.getItem(p);
      b && (document.execCommand("insertImage", !1, b), xe.info("Image inserted", { key: p }));
    } catch (x) {
      xe.error("Error uploading image", x);
    }
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ n.jsx(Ve, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ n.jsx(ct, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ n.jsx(Bt, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ n.jsx(St, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ n.jsx(Rt, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ n.jsx(Et, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ n.jsx(_t, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ n.jsx(Mt, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ n.jsxs(
      "select",
      {
        onChange: (u) => r("fontName", u.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ n.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ n.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ n.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ n.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ n.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "select",
      {
        onChange: (u) => r("fontSize", u.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ n.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ n.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ n.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ n.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ n.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ n.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ n.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ n.jsx(Ne, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ n.jsx(pt, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ n.jsx(jt, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => {
          const u = prompt("Enter URL:");
          u && r("createLink", u);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ n.jsx(dt, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ n.jsx(Nt, { size: 16 })
      }
    ),
    i && /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: /* @__PURE__ */ n.jsx(re, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("undo"),
        title: "Undo",
        children: /* @__PURE__ */ n.jsx(Ot, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => r("redo"),
        title: "Redo",
        children: /* @__PURE__ */ n.jsx(kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (u) => u.target.files[0] && s(u.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ n.jsx(st, { size: 16 })
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ n.jsxs(
      "select",
      {
        value: a,
        onChange: (u) => o(u.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ n.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ n.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ n.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
}, Wt = ({
  content: e,
  dimensions: a,
  pageSize: r,
  pageBoundaries: o = [],
  editorRef: i,
  onInput: s,
  onKeyDown: u,
  onClick: x,
  onScroll: p
}) => {
  const b = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, E = (v) => {
    if (v.key === "Tab")
      return v.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const R = C.getRangeAt(0), { startContainer: L, endContainer: k } = R, T = (I) => I ? I.nodeType === Node.ELEMENT_NODE ? I.tagName === "PAGE-BREAK" || I.getAttribute("data-page-break") === "true" : I.parentElement && T(I.parentElement) : !1;
    if ((v.key === "Backspace" || v.key === "Delete") && (T(L) || T(k)))
      return v.preventDefault(), !1;
    u && u(v);
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "continuous-page-container",
      style: {
        position: "relative",
        width: "100%",
        maxWidth: `${a.width}px`,
        margin: "40px auto",
        backgroundColor: "transparent",
        minHeight: "100vh"
      },
      children: /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: i,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          className: "continuous-content",
          style: {
            position: "relative",
            zIndex: 1,
            minHeight: `${a.height}px`,
            backgroundColor: "white",
            padding: `${b.top}px ${b.right}px ${b.bottom}px ${b.left}px`,
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
          onKeyDown: E,
          onClick: x,
          onScroll: p,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, Yt = ({
  pages: e,
  activePage: a,
  pageSize: r,
  onNavigate: o,
  onAddPage: i,
  onDeletePage: s,
  onPageSizeChange: u
}) => /* @__PURE__ */ n.jsxs("div", { className: "page-manager", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "page-size-controls", children: [
    /* @__PURE__ */ n.jsxs("label", { htmlFor: "page-size-selector", children: [
      /* @__PURE__ */ n.jsx(yt, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
      "Page Size:"
    ] }),
    /* @__PURE__ */ n.jsxs(
      "select",
      {
        id: "page-size-selector",
        role: "combobox",
        "aria-label": "Page size selector",
        value: r,
        onChange: (x) => u(x.target.value),
        children: [
          /* @__PURE__ */ n.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ n.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ n.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] }),
  /* @__PURE__ */ n.jsx("div", { className: "page-list", children: e.map((x, p) => /* @__PURE__ */ n.jsxs("div", { className: "page-item", children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        type: "button",
        className: `page-button ${p === a ? "active" : ""}`,
        onClick: () => o(p),
        "aria-label": `Go to page ${p + 1}`,
        children: [
          /* @__PURE__ */ n.jsx(re, { size: 14 }),
          /* @__PURE__ */ n.jsxs("span", { children: [
            "Page ",
            p + 1
          ] })
        ]
      }
    ),
    e.length > 1 && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: "delete-page-button",
        onClick: (b) => {
          b.stopPropagation(), s(p);
        },
        "aria-label": `Delete page ${p + 1}`,
        title: "Delete this page and its content",
        children: /* @__PURE__ */ n.jsx(Dt, { size: 14 })
      }
    )
  ] }, x.id)) }),
  /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "add-page-button",
      onClick: i,
      "aria-label": "Add new page",
      children: [
        /* @__PURE__ */ n.jsx(mt, { size: 16 }),
        /* @__PURE__ */ n.jsx("span", { children: "Add Page" })
      ]
    }
  )
] }), ke = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, pn = ({
  pageManagerComponent: e = null,
  onNavigatePage: a,
  onAddPage: r,
  onDeletePage: o,
  onPageSizeChange: i,
  showSidebar: s = !0,
  showToolbar: u = !0,
  showPageManager: x = !0
}) => {
  const p = ve(), b = je((t) => t.document), { pageSize: E, continuousContent: v, pageBoundaries: C, activePage: R } = b, L = q(null), k = q(null), { currentFormat: T, formatText: I } = Be(), {
    checkAndUpdateBoundaries: l,
    getCurrentPage: d,
    scrollToPage: m,
    positionCursorAtPage: g,
    updateBoundaries: h,
    triggerAutoReflow: f,
    removePageAndContent: P
  } = Le(E, k), A = ke[E] || ke.A4, [O, S] = ae(!1);
  Y(() => {
    k.current && k.current.innerHTML !== v && (k.current.innerHTML = v, setTimeout(() => {
      h();
    }, 100));
  }, [v, h]), Y(() => {
    const t = setTimeout(() => {
      k.current && k.current.focus();
    }, 200);
    return () => clearTimeout(t);
  }, []);
  const N = z((t) => {
    const c = t.currentTarget.innerHTML;
    p(ue(c)), l(), f();
    const j = d();
    j !== R && p(ee(j));
  }, [l, p, d, R, f]), w = z((t) => {
    p(ze(t)), h({ pageSize: t }), i && i(t);
  }, [p, h, i]), B = z((t) => {
    p(ee(t)), m(t, L), a && a(t);
  }, [p, m, a]), $ = z(() => {
    p(Ie({ position: "end" })), setTimeout(() => {
      h();
    }, 100), r && r();
  }, [p, h, r]), J = z(() => {
    const t = window.getSelection();
    if (t && t.rangeCount > 0) {
      if (!k?.current) return;
      const _ = `<page-break data-page-break="true" contenteditable="false" data-page-number="${k.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, _), setTimeout(() => {
        h();
      }, 100);
    }
  }, [h, k]), U = z((t) => {
    if (C.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    P(t) && (p(ee(0)), o && o(t));
  }, [C.length, P, p, o]), F = z(() => {
    if (!L.current || !k.current) return;
    const t = d();
    t !== R && p(ee(t));
  }, [d, R, p]), X = v ? (v.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g) || []).length : 0, Z = C.length || 1;
  return /* @__PURE__ */ n.jsxs("div", { className: "multi-page-editor", children: [
    u && /* @__PURE__ */ n.jsx(
      Gt,
      {
        currentFormat: T,
        pageSize: E,
        onFormatText: I,
        onPageSizeChange: w,
        onAddPageBreak: J
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ n.jsx(
        Ht,
        {
          editorView: null,
          isCollapsed: O,
          onToggle: () => S((t) => !t),
          wordCount: X,
          pageCount: Z
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: L,
          onScroll: F,
          children: /* @__PURE__ */ n.jsx(
            Wt,
            {
              content: v,
              dimensions: A,
              pageSize: E,
              pageBoundaries: C,
              editorRef: k,
              onInput: N,
              onClick: () => k.current?.focus()
            }
          )
        }
      ),
      x && /* @__PURE__ */ n.jsx("div", { className: "page-manager-sidebar", children: e ? be.cloneElement(e, {
        pages: C.map((t, c) => ({
          id: t.id,
          index: c,
          size: E
        })),
        activePage: R,
        pageSize: E,
        onNavigate: B,
        onAddPage: $,
        onDeletePage: U,
        onPageSizeChange: w
      }) : /* @__PURE__ */ n.jsx(
        Yt,
        {
          pages: C.map((t, c) => ({
            id: t.id,
            index: c,
            size: E
          })),
          activePage: R,
          pageSize: E,
          onNavigate: B,
          onAddPage: $,
          onDeletePage: U,
          onPageSizeChange: w
        }
      ) })
    ] })
  ] });
}, hn = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  pn as ContentEditableEditor,
  Wt as ContinuousPageView,
  Gt as EditorToolbar,
  hn as PAGE_DIMENSIONS,
  Yt as PageManager,
  Ht as Sidebar,
  nn as addPage,
  Ie as addPageBreak,
  dn as clearImages,
  un as deleteImage,
  an as deletePage,
  ln as documentReducer,
  gn as getAllImageKeys,
  cn as getImage,
  Kt as initializeDocument,
  Vt as logger,
  on as removePageBreak,
  rn as resetDocument,
  Ut as saveImage,
  ee as setActivePage,
  sn as setEditorMode,
  ue as updateContinuousContent,
  Re as updatePageBoundaries,
  en as updatePageContent,
  ze as updatePageSize,
  tn as updatePages,
  Qt as updateTitle,
  Le as useContinuousReflow,
  Be as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
