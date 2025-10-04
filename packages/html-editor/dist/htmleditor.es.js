import de, { useState as re, useCallback as R, useRef as q, useEffect as V, forwardRef as je, createElement as le, useMemo as he } from "react";
import { useDispatch as Ce, useSelector as ge } from "react-redux";
import { createSlice as Te } from "@reduxjs/toolkit";
import { v4 as pe } from "uuid";
var ee = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Me() {
  if (fe) return F;
  fe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(r, i, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), i.key !== void 0 && (l = "" + i.key), "key" in i) {
      s = {};
      for (var d in i)
        d !== "key" && (s[d] = i[d]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: r,
      key: l,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return F.Fragment = n, F.jsx = a, F.jsxs = a, F;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function ze() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === E ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case M:
          return "Fragment";
        case g:
          return "Profiler";
        case I:
          return "StrictMode";
        case x:
          return "Suspense";
        case k:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case b:
            return "Portal";
          case y:
            return o.displayName || "Context";
          case p:
            return (o._context.displayName || "Context") + ".Consumer";
          case h:
            var f = o.render;
            return o = o.displayName, o || (o = f.displayName || f.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case z:
            return f = o.displayName || null, f !== null ? f : e(o.type) || "Memo";
          case P:
            f = o._payload, o = o._init;
            try {
              return e(o(f));
            } catch {
            }
        }
      return null;
    }
    function n(o) {
      return "" + o;
    }
    function a(o) {
      try {
        n(o);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var u = f.error, w = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return u.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), n(o);
      }
    }
    function r(o) {
      if (o === M) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === P)
        return "<...>";
      try {
        var f = e(o);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var o = S.A;
      return o === null ? null : o.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(o) {
      if (T.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function d(o, f) {
      function u() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: u,
        configurable: !0
      });
    }
    function c() {
      var o = e(this.type);
      return W[o] || (W[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function m(o, f, u, w, D, J) {
      var B = u.ref;
      return o = {
        $$typeof: C,
        type: o,
        key: f,
        props: u,
        _owner: w
      }, (B !== void 0 ? B : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function N(o, f, u, w, D, J) {
      var B = f.children;
      if (B !== void 0)
        if (w)
          if (L(B)) {
            for (w = 0; w < B.length; w++)
              v(B[w]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(B);
      if (T.call(f, "key")) {
        B = e(o);
        var U = Object.keys(f).filter(function(_e) {
          return _e !== "key";
        });
        w = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", Q[B + w] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          B,
          U,
          B
        ), Q[B + w] = !0);
      }
      if (B = null, u !== void 0 && (a(u), B = "" + u), l(f) && (a(f.key), B = "" + f.key), "key" in f) {
        u = {};
        for (var se in f)
          se !== "key" && (u[se] = f[se]);
      } else u = f;
      return B && d(
        u,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), m(
        o,
        B,
        u,
        i(),
        D,
        J
      );
    }
    function v(o) {
      j(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === P && (o._payload.status === "fulfilled" ? j(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function j(o) {
      return typeof o == "object" && o !== null && o.$$typeof === C;
    }
    var _ = de, C = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), S = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, L = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var G, W = {}, K = _.react_stack_bottom_frame.bind(
      _,
      s
    )(), Y = $(r(s)), Q = {};
    X.Fragment = M, X.jsx = function(o, f, u) {
      var w = 1e4 > S.recentlyCreatedOwnerStacks++;
      return N(
        o,
        f,
        u,
        !1,
        w ? Error("react-stack-top-frame") : K,
        w ? $(r(o)) : Y
      );
    }, X.jsxs = function(o, f, u) {
      var w = 1e4 > S.recentlyCreatedOwnerStacks++;
      return N(
        o,
        f,
        u,
        !0,
        w ? Error("react-stack-top-frame") : K,
        w ? $(r(o)) : Y
      );
    };
  })()), X;
}
var xe;
function Be() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? ee.exports = Me() : ee.exports = ze()), ee.exports;
}
var t = Be();
const ie = "A4", H = "<p><br></p>", Z = (e, n = ie) => ({
  id: pe(),
  index: e,
  size: n,
  content: H,
  images: [],
  isBreakPoint: !1
}), Se = (e, n = ie) => (e.length > 0 ? e : [Z(0, n)]).map((r, i) => ({
  id: r.id || pe(),
  index: i,
  size: r.size || n,
  content: ae(r.content),
  images: r.images || [],
  isBreakPoint: !!r.isBreakPoint
})), ae = (e) => typeof e != "string" || e.trim() === "" ? H : e, ce = (e = {}) => {
  const n = (/* @__PURE__ */ new Date()).toISOString(), a = e.pageSize || ie, r = Se(e.pages || [Z(0, a)], a);
  return {
    id: pe(),
    title: e.title || "Untitled Document",
    createdAt: n,
    updatedAt: n,
    pageSize: a,
    pages: r,
    activePage: e.activePage && e.activePage < r.length ? e.activePage : 0,
    pageBreaks: e.pageBreaks || [],
    totalPages: r.length,
    // Continuous mode state
    editorMode: e.editorMode || "continuous",
    // 'continuous' or 'paged'
    continuousContent: e.continuousContent || H,
    pageBoundaries: e.pageBoundaries || []
  };
}, Re = ce(), Ae = Te({
  name: "document",
  initialState: Re,
  reducers: {
    initializeDocument: (e, n) => {
      const { initialContent: a = H, pageSize: r = ie } = n.payload || {}, i = { ...Z(0, r), content: ae(a) };
      return ce({
        title: e.title,
        pageSize: r,
        pages: [i]
      });
    },
    updateTitle: (e, n) => {
      e.title = n.payload, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageContent: (e, n) => {
      const { pageIndex: a, content: r } = n.payload;
      a < 0 || a >= e.pages.length || (e.pages[a].content = ae(r), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePages: (e, n) => {
      const a = Array.isArray(n.payload) ? { pages: n.payload } : n.payload || {}, r = Se(a.pages || [], e.pageSize);
      e.pages = r, e.activePage = Math.min(e.activePage, r.length - 1), e.pageBreaks = Array.isArray(a.pageBreaks) ? a.pageBreaks : r.slice(0, -1).map((i, s) => ({
        id: `auto-break-${s}`,
        pageNumber: s + 1
      })), e.totalPages = r.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    addPage: (e, n) => {
      const a = typeof n.payload?.index == "number" ? Math.min(Math.max(n.payload.index, 0), e.pages.length) : e.pages.length;
      e.pages.splice(a, 0, Z(a, e.pageSize)), e.pages = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: e.pageSize
      })), e.activePage = a, e.pageBreaks = e.pages.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    deletePage: (e, n) => {
      const a = n.payload;
      e.pages.length <= 1 || (e.pages.splice(a, 1), e.pages = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: e.pageSize
      })), e.activePage >= e.pages.length ? e.activePage = e.pages.length - 1 : a <= e.activePage && e.activePage > 0 && (e.activePage -= 1), e.pageBreaks = e.pages.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.totalPages = e.pages.length, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    setActivePage: (e, n) => {
      const a = n.payload, r = e.editorMode === "continuous" ? e.pageBoundaries.length : e.pages.length;
      a >= 0 && a < r && (e.activePage = a, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
    },
    updatePageSize: (e, n) => {
      const a = n.payload;
      e.pageSize = a, e.pages = e.pages.map((r, i) => ({
        ...r,
        index: i,
        size: a
      })), e.pageBreaks = e.pages.slice(0, -1).map((r, i) => ({
        id: `auto-break-${i}`,
        pageNumber: i + 1
      })), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    resetDocument: () => ce(),
    // Continuous mode actions
    updateContinuousContent: (e, n) => {
      e.continuousContent = ae(n.payload), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    updatePageBoundaries: (e, n) => {
      e.pageBoundaries = n.payload || [], e.totalPages = e.pageBoundaries.length, e.activePage >= e.pageBoundaries.length && (e.activePage = Math.max(0, e.pageBoundaries.length - 1)), e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    // Manual page operations for continuous mode
    addPageBreak: (e, n) => {
      const { position: a = "end", pageIndex: r } = n.payload || {}, i = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
      if (a === "end")
        e.continuousContent = e.continuousContent + i + "<p><br></p>";
      else if (typeof a == "number") {
        const s = e.continuousContent.substring(0, a), l = e.continuousContent.substring(a);
        e.continuousContent = s + i + l;
      } else if (typeof r == "number" && typeof document < "u") {
        const s = document.createElement("div");
        s.innerHTML = e.continuousContent;
        const l = s.querySelectorAll('page-break, [data-page-break="true"]');
        if (r === 0 && l.length === 0)
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
        else if (r < l.length) {
          const d = l[r], c = document.createElement("page-break");
          c.setAttribute("data-page-break", "true"), c.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;");
          const m = document.createElement("p");
          m.innerHTML = "<br>", d.parentNode.insertBefore(c, d.nextSibling), c.parentNode.insertBefore(m, c.nextSibling), e.continuousContent = s.innerHTML;
        } else
          e.continuousContent = e.continuousContent + i + "<p><br></p>";
      }
      e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
    },
    removePageBreak: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (typeof a == "number" && typeof document < "u") {
        const r = document.createElement("div");
        r.innerHTML = e.continuousContent;
        const i = r.querySelectorAll('page-break, [data-page-break="true"]');
        i[a] && i[a].remove(), r.querySelectorAll('page-break, [data-page-break="true"]').forEach((l, d) => {
          l.setAttribute("data-page-number", String(d + 2));
        }), e.continuousContent = r.innerHTML, e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    setEditorMode: (e, n) => {
      const a = n.payload;
      if (a !== e.editorMode) {
        if (e.editorMode = a, a === "continuous") {
          const r = e.pages.map((i) => i.content).filter((i) => i && i !== H).join(`
`);
          e.continuousContent = r || H;
        } else
          e.continuousContent && e.continuousContent !== H && (e.pages = [{ ...Z(0, e.pageSize), content: e.continuousContent }]);
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    // Bulk page operations
    insertPageAt: (e, n) => {
      const { pageIndex: a, content: r = H } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent;
          const s = i.querySelectorAll('page-break, [data-page-break="true"]'), l = '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>';
          if (a === 0)
            e.continuousContent = r + l + e.continuousContent;
          else if (a >= s.length)
            e.continuousContent = e.continuousContent + l + r;
          else {
            const d = s[a - 1], c = document.createElement("div");
            c.innerHTML = r;
            const m = document.createElement("page-break");
            m.setAttribute("data-page-break", "true"), m.setAttribute("style", "display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"), d.parentNode.insertBefore(c, d.nextSibling), d.parentNode.insertBefore(m, c.nextSibling), e.continuousContent = i.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    movePageTo: (e, n) => {
      const { fromIndex: a, toIndex: r } = n.payload || {};
      if (!(typeof a != "number" || typeof r != "number") && !(a < 0 || r < 0 || a === r)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const i = document.createElement("div");
          i.innerHTML = e.continuousContent, Array.from(i.querySelectorAll('page-break, [data-page-break="true"]'));
          const s = [];
          let l = i.firstChild, d = [];
          for (; l; )
            l.nodeType === 1 && (l.tagName.toLowerCase() === "page-break" || l.getAttribute("data-page-break") === "true") ? (s.push(d), d = []) : d.push(l.cloneNode(!0)), l = l.nextSibling;
          if (d.length > 0 && s.push(d), a >= s.length || r >= s.length)
            return;
          const [c] = s.splice(a, 1);
          s.splice(r, 0, c);
          const m = [];
          s.forEach((N, v) => {
            N.forEach((j) => m.push(j.outerHTML || j.textContent)), v < s.length - 1 && m.push('<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>');
          }), e.continuousContent = m.join("");
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    },
    duplicatePage: (e, n) => {
      const { pageIndex: a } = n.payload || {};
      if (!(typeof a != "number" || a < 0)) {
        if (e.editorMode === "continuous" && typeof document < "u") {
          const r = document.createElement("div");
          r.innerHTML = e.continuousContent;
          const i = Array.from(r.querySelectorAll('page-break, [data-page-break="true"]'));
          let s = [], l = r.firstChild, d = 0;
          for (; l; ) {
            if (l.nodeType === 1 && (l.tagName.toLowerCase() === "page-break" || l.getAttribute("data-page-break") === "true")) {
              if (d === a)
                break;
              d++, s = [];
            } else d === a && s.push(l.cloneNode(!0));
            l = l.nextSibling;
          }
          if (s.length > 0 && a < i.length) {
            const c = i[a], v = s.map((C) => C.outerHTML || C.textContent).join("") + '<page-break data-page-break="true" style="display: block; height: 20px; border-top: 2px dashed #ccc; margin: 20px 0; page-break-after: always;"></page-break>', j = document.createElement("div");
            j.innerHTML = v;
            let _ = c;
            Array.from(j.children).forEach((C) => {
              _.parentNode.insertBefore(C.cloneNode(!0), _.nextSibling), _ = _.nextSibling;
            }), e.continuousContent = r.innerHTML;
          }
        }
        e.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      }
    }
  }
}), {
  initializeDocument: en,
  updateTitle: tn,
  updatePageContent: nn,
  updatePages: an,
  addPage: rn,
  deletePage: on,
  setActivePage: te,
  updatePageSize: Ie,
  resetDocument: sn,
  updateContinuousContent: ue,
  updatePageBoundaries: Le,
  addPageBreak: Oe,
  removePageBreak: ln,
  setEditorMode: cn,
  insertPageAt: un,
  movePageTo: dn,
  duplicatePage: gn
} = Ae.actions, pn = Ae.reducer, $e = () => {
  const [e, n] = re({
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
  }), a = R((r, i = null) => {
    if (r === "fontSize") {
      const l = {
        "10px": "1",
        "12px": "2",
        "14px": "3",
        "16px": "4",
        "18px": "5",
        "24px": "6",
        "32px": "7"
      }[i] || "2";
      document.execCommand("fontSize", !1, l);
      const d = window.getSelection();
      if (d && d.rangeCount > 0) {
        const c = d.getRangeAt(0);
        if (c.toString()) {
          const N = document.createElement("span");
          N.style.fontSize = i, c.surroundContents(N);
        }
      }
    } else
      document.execCommand(r, !1, i);
    r === "bold" ? n((s) => ({ ...s, bold: !s.bold })) : r === "italic" ? n((s) => ({ ...s, italic: !s.italic })) : r === "underline" ? n((s) => ({ ...s, underline: !s.underline })) : r === "strikethrough" ? n((s) => ({ ...s, strikethrough: !s.strikethrough })) : r === "justifyLeft" ? n((s) => ({ ...s, alignLeft: !0, alignCenter: !1, alignRight: !1, alignJustify: !1 })) : r === "justifyCenter" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !0, alignRight: !1, alignJustify: !1 })) : r === "justifyRight" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !0, alignJustify: !1 })) : r === "justifyFull" ? n((s) => ({ ...s, alignLeft: !1, alignCenter: !1, alignRight: !1, alignJustify: !0 })) : r === "fontSize" && n((s) => ({ ...s, fontSize: i }));
  }, []);
  return {
    currentFormat: e,
    formatText: a
  };
}, ne = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, be = {
  top: 60,
  bottom: 100,
  left: 72,
  right: 72
}, De = (e, n) => {
  const a = Ce(), r = q(null), i = q(null), s = q(e), l = q(!1);
  V(() => {
    s.current = e;
  }, [e]), V(() => () => {
    r.current && clearTimeout(r.current), i.current && clearTimeout(i.current);
  }, []);
  const d = R((g, p) => {
    let y = 0;
    for (let h = 0; h < g.length; h++) {
      const x = g[h], k = x.getBoundingClientRect().height;
      if (y + k > p)
        return { overflowIndex: h, overflowElement: x, accumulatedHeight: y };
      y += k;
    }
    return null;
  }, []), c = R((g, p) => {
    if (!g || !n?.current)
      return !1;
    try {
      const y = n.current, h = document.createElement("page-break");
      return h.setAttribute("data-page-break", "true"), h.setAttribute("contenteditable", "false"), h.setAttribute("data-page-number", p || "2"), g.parentNode.insertBefore(h, g), !0;
    } catch (y) {
      return console.warn("[insertPageBreakBefore] Failed to insert page break:", y), !1;
    }
  }, [n]), m = R(() => {
    if (!(!n?.current || l.current))
      try {
        l.current = !0;
        const g = n.current, p = s.current || "A4", h = (ne[p] || ne.A4).height - be.top - be.bottom, x = Array.from(g.children), k = x.filter(
          (E) => E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true"
        ), z = [];
        let P = [];
        for (const E of x)
          E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true" ? P.length > 0 && (z.push(P), P = []) : P.push(E);
        P.length > 0 && z.push(P), z.length === 0 && x.length > 0 && z.push(x.filter(
          (E) => !(E.tagName === "PAGE-BREAK" || E.getAttribute("data-page-break") === "true")
        ));
        let O = !1;
        for (let E = 0; E < z.length; E++) {
          const S = z[E], T = d(S, h);
          if (T && T.overflowIndex > 0) {
            const L = E + 2;
            if (c(T.overflowElement, L)) {
              O = !0;
              break;
            }
          }
        }
        if (O) {
          const E = g.innerHTML;
          a(ue(E)), setTimeout(() => {
            j();
          }, 50);
        }
      } catch (g) {
        console.warn("[checkAndReflow] Reflow failed:", g);
      } finally {
        l.current = !1;
      }
  }, [n, d, c, a]), N = R((g = 500) => {
    i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      i.current = null, m();
    }, g);
  }, [m]), v = R((g = {}) => {
    if (!n?.current || typeof document > "u")
      return [];
    const p = g.pageSize || s.current || "A4", y = ne[p] || ne.A4, h = n.current, x = h.querySelectorAll('page-break, [data-page-break="true"]'), k = [];
    return k.push({
      id: "page-0",
      pageNumber: 1,
      top: 0,
      height: y.height
      // No breakElement for first page
    }), x.forEach((z, P) => {
      const O = z.getBoundingClientRect(), E = h.getBoundingClientRect(), S = O.top - E.top + h.scrollTop;
      k.push({
        id: `page-${P + 1}`,
        pageNumber: P + 2,
        top: S,
        height: y.height
        // Don't store breakElement - not serializable
      });
    }), k;
  }, [n]), j = R((g = {}) => {
    const p = v(g);
    return a(Le(p)), p;
  }, [v, a]), _ = R((g = {}) => {
    r.current && clearTimeout(r.current);
    const p = typeof g.delay == "number" ? g.delay : 300;
    r.current = setTimeout(() => {
      r.current = null, j(g);
    }, Math.max(0, p));
  }, [j]), C = R(() => {
    if (!n?.current)
      return 0;
    const g = window.getSelection();
    if (!g || g.rangeCount === 0)
      return 0;
    try {
      const p = g.getRangeAt(0), y = n.current;
      let h = p.startContainer;
      const x = Array.from(y.querySelectorAll('page-break, [data-page-break="true"]'));
      if (x.length === 0)
        return 0;
      for (; h && h !== y; ) {
        for (let k = x.length - 1; k >= 0; k--)
          if (x[k].compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING)
            return k + 1;
        h = h.parentNode;
      }
      return 0;
    } catch (p) {
      return console.warn("[getCurrentPage] Failed to calculate page:", p), 0;
    }
  }, [n]), b = R((g, p) => {
    if (!p?.current || !n?.current)
      return;
    n.current;
    const h = v().find((x) => x.pageNumber === g + 1);
    h && (p.current.scrollTo({
      top: h.top - 40,
      behavior: "smooth"
    }), setTimeout(() => {
      M(g);
    }, 300));
  }, [n]), M = R((g) => {
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
        const x = document.createRange(), k = window.getSelection();
        y.nodeType === Node.TEXT_NODE ? x.setStart(y, h) : x.setStart(y, 0), x.collapse(!0), k.removeAllRanges(), k.addRange(x);
      }
    } catch (y) {
      console.warn("[positionCursorAtPage] Failed to position cursor:", y);
    }
  }, [n]), I = R((g) => {
    if (!n?.current)
      return !1;
    const p = n.current;
    if (v().length <= 1)
      return console.warn("[removePageAndContent] Cannot delete the only page"), !1;
    try {
      const h = Array.from(p.querySelectorAll('page-break, [data-page-break="true"]'));
      if (g > h.length)
        return console.warn("[removePageAndContent] Invalid page index"), !1;
      const x = window.getSelection();
      let k = !1, z = [], P = null;
      if (g === 0) {
        const S = h[0];
        if (!S)
          return console.warn("[removePageAndContent] No page break found for first page"), !1;
        let T = p.firstChild;
        for (; T && T !== S; )
          z.push(T), T = T.nextSibling;
        P = S;
      } else {
        const S = h[g - 1];
        if (!S)
          return console.warn("[removePageAndContent] Page break not found"), !1;
        const T = h[g];
        let L = S.nextSibling;
        for (; L && L !== T; )
          z.push(L), L = L.nextSibling;
        P = S;
      }
      if (x && x.rangeCount > 0) {
        const T = x.getRangeAt(0).startContainer;
        for (const L of z)
          if (L.contains(T) || L === T) {
            k = !0;
            break;
          }
      }
      P && P.parentNode && P.remove(), z.forEach((S) => {
        S.parentNode && S.remove();
      }), p.querySelectorAll('page-break, [data-page-break="true"]').forEach((S, T) => {
        S.setAttribute("data-page-number", String(T + 2));
      }), k && setTimeout(() => {
        M(0);
      }, 50);
      const E = p.innerHTML;
      return a(ue(E)), setTimeout(() => {
        j();
      }, 100), !0;
    } catch (h) {
      return console.error("[removePageAndContent] Failed to remove page:", h), !1;
    }
  }, [n, v, a, j, M]);
  return {
    calculatePageBoundaries: v,
    checkAndUpdateBoundaries: _,
    updateBoundaries: j,
    getCurrentPage: C,
    scrollToPage: b,
    positionCursorAtPage: M,
    checkAndReflow: m,
    triggerAutoReflow: N,
    removePageAndContent: I,
    boundaryTimeoutRef: r,
    reflowTimeoutRef: i
  };
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qe = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, a, r) => r ? r.toUpperCase() : a.toLowerCase()
), ke = (e) => {
  const n = qe(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, we = (...e) => e.filter((n, a, r) => !!n && n.trim() !== "" && r.indexOf(n) === a).join(" ").trim(), Ue = (e) => {
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
var Ve = {
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
const Ge = je(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: l,
    ...d
  }, c) => le(
    "svg",
    {
      ref: c,
      ...Ve,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(a) * 24 / Number(n) : a,
      className: we("lucide", i),
      ...!s && !Ue(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...l.map(([m, N]) => le(m, N)),
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
const A = (e, n) => {
  const a = je(
    ({ className: r, ...i }, s) => le(Ge, {
      ref: s,
      iconNode: n,
      className: we(
        `lucide-${He(ke(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return a.displayName = ke(e), a;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Ye = A("bold", We);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ne = A("chevron-left", Je);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Pe = A("chevron-right", Fe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], Ze = A("file-check", Xe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], oe = A("file-text", Ke);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], et = A("hash", Qe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], nt = A("heading-1", tt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], rt = A("heading-2", at);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], it = A("heading-3", ot);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], lt = A("image", st);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], ut = A("italic", ct);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], gt = A("link", dt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], ht = A("list-ordered", pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Ee = A("list", ft);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], xt = A("plus", mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], kt = A("redo", bt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], vt = A("settings", yt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Ct = A("square-check-big", jt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], At = A("strikethrough", St);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], Nt = A("table", wt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], Et = A("text-align-center", Pt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], Tt = A("text-align-end", _t);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], zt = A("text-align-justify", Mt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], Rt = A("text-align-start", Bt);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], Lt = A("underline", It);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], $t = A("undo", Ot);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ht = A("x", Dt), qt = ({ editorView: e, isCollapsed: n, onToggle: a, wordCount: r, pageCount: i }) => {
  const s = ge((b) => b.document), { pages: l, activePage: d, continuousContent: c, editorMode: m } = s, [N, v] = re(0), [j, _] = re([]);
  V(() => {
    if (r !== void 0 && i !== void 0) {
      if (v(r), c) {
        const I = document.createElement("div");
        I.innerHTML = c;
        const g = I.querySelectorAll("h1, h2, h3, h4, h5, h6"), p = Array.from(g).map((y, h) => {
          const x = parseInt(y.tagName.charAt(1)), k = y.textContent.trim();
          return k ? {
            id: `heading-${h}`,
            level: x,
            text: k,
            page: 1
            // Continuous mode doesn't have meaningful page numbers for headings
          } : null;
        }).filter(Boolean);
        _(p);
      }
      return;
    }
    let b = 0;
    const M = [];
    l.forEach((I, g) => {
      if (I.content) {
        const p = document.createElement("div");
        p.innerHTML = I.content;
        const h = (p.textContent || p.innerText || "").trim().split(/\s+/).filter((k) => k.length > 0);
        b += h.length, p.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((k, z) => {
          const P = parseInt(k.tagName.charAt(1)), O = k.textContent.trim();
          O && M.push({
            id: `heading-${g}-${z}`,
            level: P,
            text: O,
            page: g + 1
          });
        });
      }
    }), v(b), _(M);
  }, [l, r, i, c]);
  const C = i !== void 0 ? i : l.length;
  return /* @__PURE__ */ t.jsxs(
    "aside",
    {
      className: `sidebar ${n ? "collapsed" : ""}`,
      role: "complementary",
      "aria-label": "Document information",
      "data-testid": "sidebar",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "sidebar-header", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "sidebar-title", children: [
            /* @__PURE__ */ t.jsx(oe, { size: 18 }),
            /* @__PURE__ */ t.jsx("h2", { children: "Document Info" })
          ] }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              className: "sidebar-toggle",
              onClick: a,
              "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
              title: n ? "Expand sidebar" : "Collapse sidebar",
              children: n ? /* @__PURE__ */ t.jsx(Pe, { size: 16 }) : /* @__PURE__ */ t.jsx(Ne, { size: 16 })
            }
          )
        ] }),
        !n && /* @__PURE__ */ t.jsxs("div", { className: "sidebar-content", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsx("h3", { children: "Statistics" }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(Ze, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Pages:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: C })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", "data-testid": "word-count", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(et, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Words:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: N.toLocaleString() })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "stat-label", children: [
                /* @__PURE__ */ t.jsx(oe, { size: 14 }),
                /* @__PURE__ */ t.jsx("span", { children: "Active Page:" })
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "stat-value", children: d + 1 })
            ] })
          ] }),
          j.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsxs("h3", { children: [
              /* @__PURE__ */ t.jsx(Ee, { size: 14, style: { display: "inline-block", marginRight: "6px", verticalAlign: "middle" } }),
              "Document Outline"
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "document-outline", "data-testid": "outline", children: j.map((b) => {
              const M = b.level === 1 ? nt : b.level === 2 ? rt : it;
              return /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: `outline-item outline-level-${b.level}`,
                  style: { marginLeft: `${(b.level - 1) * 12}px` },
                  children: [
                    /* @__PURE__ */ t.jsx(M, { size: 12, className: "outline-icon" }),
                    /* @__PURE__ */ t.jsx("span", { className: "outline-text", children: b.text }),
                    /* @__PURE__ */ t.jsxs("span", { className: "outline-page", children: [
                      "p.",
                      b.page
                    ] })
                  ]
                },
                b.id
              );
            }) })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "sidebar-section", children: [
            /* @__PURE__ */ t.jsx("h3", { children: "Document" }),
            /* @__PURE__ */ t.jsx("p", { children: "HTML Editor" }),
            /* @__PURE__ */ t.jsx("p", { children: "Multi-page support" })
          ] })
        ] })
      ]
    }
  );
};
function Ut() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const n = Math.random() * 16 | 0;
    return (e === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Vt(e) {
  return new Promise((n, a) => {
    if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(e.type)) {
      a(new Error("Invalid image format. Supported formats: png, jpeg, gif, webp"));
      return;
    }
    if (e.size > 5 * 1024 * 1024) {
      a(new Error("Image exceeds maximum size of 5MB"));
      return;
    }
    const i = new FileReader();
    i.onload = (s) => {
      const l = s.target.result;
      if (l.split(",")[1].length * 3 / 4 > 5 * 1024 * 1024) {
        a(new Error("Image exceeds maximum size of 5MB"));
        return;
      }
      try {
        const m = `editor-image-${Ut()}`;
        localStorage.setItem(m, l), n(m);
      } catch (m) {
        m.name === "QuotaExceededError" ? a(new Error("Storage quota exceeded")) : a(m);
      }
    }, i.onerror = () => {
      a(new Error("Error reading image file"));
    }, i.readAsDataURL(e);
  });
}
function hn(e) {
  return localStorage.getItem(e);
}
function fn(e) {
  localStorage.removeItem(e);
}
function mn() {
  Object.keys(localStorage).forEach((e) => {
    e.startsWith("editor-image-") && localStorage.removeItem(e);
  });
}
function xn() {
  return Object.keys(localStorage).filter(
    (e) => e.startsWith("editor-image-")
  );
}
class Gt {
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
  _format(n, a, r) {
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
const ye = new Gt("Editor"), Wt = ({
  currentFormat: e,
  pageSize: n,
  onFormatText: a,
  onPageSizeChange: r,
  onAddPageBreak: i
}) => {
  const s = async (l) => {
    try {
      if (!["image/png", "image/jpeg", "image/gif", "image/webp"].includes(l.type)) {
        alert("Invalid image format. Supported: PNG, JPEG, GIF, WEBP");
        return;
      }
      if (l.size > 5242880) {
        alert("Image exceeds maximum size of 5MB");
        return;
      }
      const c = await Vt(l), m = localStorage.getItem(c);
      m && (document.execCommand("insertImage", !1, m), ye.info("Image inserted", { key: c }));
    } catch (d) {
      ye.error("Error uploading image", d);
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "editor-toolbar", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("bold"),
        className: e.bold ? "active" : "",
        title: "Bold",
        children: /* @__PURE__ */ t.jsx(Ye, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("italic"),
        className: e.italic ? "active" : "",
        title: "Italic",
        children: /* @__PURE__ */ t.jsx(ut, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("underline"),
        className: e.underline ? "active" : "",
        title: "Underline",
        children: /* @__PURE__ */ t.jsx(Lt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("strikethrough"),
        className: e.strikethrough ? "active" : "",
        title: "Strikethrough",
        children: /* @__PURE__ */ t.jsx(At, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyLeft"),
        className: e.alignLeft ? "active" : "",
        title: "Align Left",
        children: /* @__PURE__ */ t.jsx(Rt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyCenter"),
        className: e.alignCenter ? "active" : "",
        title: "Align Center",
        children: /* @__PURE__ */ t.jsx(Et, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyRight"),
        className: e.alignRight ? "active" : "",
        title: "Align Right",
        children: /* @__PURE__ */ t.jsx(Tt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("justifyFull"),
        className: e.alignJustify ? "active" : "",
        title: "Justify",
        children: /* @__PURE__ */ t.jsx(zt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        onChange: (l) => a("fontName", l.target.value),
        defaultValue: "Arial",
        title: "Font Family",
        children: [
          /* @__PURE__ */ t.jsx("option", { value: "Arial", children: "Arial" }),
          /* @__PURE__ */ t.jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
          /* @__PURE__ */ t.jsx("option", { value: "Courier New", children: "Courier New" }),
          /* @__PURE__ */ t.jsx("option", { value: "Georgia", children: "Georgia" }),
          /* @__PURE__ */ t.jsx("option", { value: "Verdana", children: "Verdana" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        onChange: (l) => a("fontSize", l.target.value),
        defaultValue: "12px",
        title: "Font Size",
        children: [
          /* @__PURE__ */ t.jsx("option", { value: "10px", children: "10" }),
          /* @__PURE__ */ t.jsx("option", { value: "12px", children: "12" }),
          /* @__PURE__ */ t.jsx("option", { value: "14px", children: "14" }),
          /* @__PURE__ */ t.jsx("option", { value: "16px", children: "16" }),
          /* @__PURE__ */ t.jsx("option", { value: "18px", children: "18" }),
          /* @__PURE__ */ t.jsx("option", { value: "24px", children: "24" }),
          /* @__PURE__ */ t.jsx("option", { value: "32px", children: "32" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("insertUnorderedList"),
        title: "Bullet List",
        children: /* @__PURE__ */ t.jsx(Ee, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("insertOrderedList"),
        title: "Numbered List",
        children: /* @__PURE__ */ t.jsx(ht, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("insertCheckList"),
        title: "Checklist",
        children: /* @__PURE__ */ t.jsx(Ct, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => {
          const l = prompt("Enter URL:");
          l && a("createLink", l);
        },
        title: "Insert Link",
        children: /* @__PURE__ */ t.jsx(gt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("insertHTML", '<table border="1"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>'),
        title: "Insert Table",
        children: /* @__PURE__ */ t.jsx(Nt, { size: 16 })
      }
    ),
    i && /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: i,
        title: "Insert Page Break",
        children: /* @__PURE__ */ t.jsx(oe, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("undo"),
        title: "Undo",
        children: /* @__PURE__ */ t.jsx($t, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => a("redo"),
        title: "Redo",
        children: /* @__PURE__ */ t.jsx(kt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: (l) => l.target.files[0] && s(l.target.files[0]),
        style: { display: "none" },
        id: "image-upload"
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => document.getElementById("image-upload").click(),
        title: "Insert Image",
        children: /* @__PURE__ */ t.jsx(lt, { size: 16 })
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "toolbar-separator" }),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        value: n,
        onChange: (l) => r(l.target.value),
        title: "Page Size",
        children: [
          /* @__PURE__ */ t.jsx("option", { value: "A4", children: "A4" }),
          /* @__PURE__ */ t.jsx("option", { value: "Letter", children: "Letter" }),
          /* @__PURE__ */ t.jsx("option", { value: "Legal", children: "Legal" })
        ]
      }
    )
  ] });
}, Yt = ({
  content: e,
  dimensions: n,
  pageSize: a,
  pageBoundaries: r = [],
  editorRef: i,
  onInput: s,
  onKeyDown: l,
  onClick: d,
  onScroll: c
}) => {
  const m = {
    top: 60,
    bottom: 100,
    left: 72,
    right: 72
  }, N = (v) => {
    if (v.key === "Tab")
      return v.preventDefault(), document.execCommand("insertHTML", !1, "&nbsp;&nbsp;&nbsp;&nbsp;"), !1;
    const j = window.getSelection();
    if (!j || j.rangeCount === 0) return;
    const _ = j.getRangeAt(0), { startContainer: C, endContainer: b } = _, M = (I) => I ? I.nodeType === Node.ELEMENT_NODE ? I.tagName === "PAGE-BREAK" || I.getAttribute("data-page-break") === "true" : I.parentElement && M(I.parentElement) : !1;
    if ((v.key === "Backspace" || v.key === "Delete") && (M(C) || M(b)))
      return v.preventDefault(), !1;
    l && l(v);
  };
  return /* @__PURE__ */ t.jsx(
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
      children: /* @__PURE__ */ t.jsx(
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
            padding: `${m.top}px ${m.right}px ${m.bottom}px ${m.left}px`,
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
          onKeyDown: N,
          onClick: d,
          onScroll: c,
          "data-testid": "continuous-editor"
        }
      )
    }
  );
}, Jt = ({
  onNavigate: e,
  onAddPage: n,
  onDeletePage: a,
  onPageSizeChange: r
} = {}) => {
  const { pageBoundaries: i, activePage: s, pageSize: l } = ge((C) => C.document), d = i.length || 1, c = (C) => {
    e && e(C);
  }, m = () => {
    n && n();
  }, N = (C) => {
    if (d <= 1) {
      console.warn("[PageManager] Cannot delete the only page");
      return;
    }
    a && a(C);
  }, v = (C) => {
    r && r(C);
  }, j = () => {
    s > 0 && c(s - 1);
  }, _ = () => {
    s < d - 1 && c(s + 1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "page-manager", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "page-size-controls", children: [
      /* @__PURE__ */ t.jsxs("label", { htmlFor: "page-size-selector", children: [
        /* @__PURE__ */ t.jsx(vt, { size: 14, style: { marginRight: "4px", verticalAlign: "middle" } }),
        "Page Size:"
      ] }),
      /* @__PURE__ */ t.jsxs(
        "select",
        {
          id: "page-size-selector",
          role: "combobox",
          "aria-label": "Page size selector",
          value: l,
          onChange: (C) => v(C.target.value),
          children: [
            /* @__PURE__ */ t.jsx("option", { value: "A4", children: "A4" }),
            /* @__PURE__ */ t.jsx("option", { value: "Letter", children: "Letter" }),
            /* @__PURE__ */ t.jsx("option", { value: "Legal", children: "Legal" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "page-navigation-controls", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: j,
          disabled: s === 0,
          "aria-label": "Previous page",
          title: "Previous page (Ctrl+↑)",
          children: /* @__PURE__ */ t.jsx(Ne, { size: 16 })
        }
      ),
      /* @__PURE__ */ t.jsxs("span", { className: "page-counter", "aria-live": "polite", children: [
        "Page ",
        s + 1,
        " of ",
        d
      ] }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "nav-button",
          onClick: _,
          disabled: s >= d - 1,
          "aria-label": "Next page",
          title: "Next page (Ctrl+↓)",
          children: /* @__PURE__ */ t.jsx(Pe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "page-list", children: i.map((C, b) => /* @__PURE__ */ t.jsxs("div", { className: "page-item", children: [
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: `page-button ${b === s ? "active" : ""}`,
          onClick: () => c(b),
          "aria-label": `Go to page ${b + 1}`,
          "aria-current": b === s ? "page" : void 0,
          children: [
            /* @__PURE__ */ t.jsx(oe, { size: 14 }),
            /* @__PURE__ */ t.jsxs("span", { children: [
              "Page ",
              b + 1
            ] })
          ]
        }
      ),
      d > 1 && /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "delete-page-button",
          onClick: (M) => {
            M.stopPropagation(), N(b);
          },
          "aria-label": `Delete page ${b + 1}`,
          title: "Delete this page and its content",
          children: /* @__PURE__ */ t.jsx(Ht, { size: 14 })
        }
      )
    ] }, C.id || `page-${b}`)) }),
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "add-page-button",
        onClick: m,
        "aria-label": "Add new page",
        title: "Add new page at end",
        children: [
          /* @__PURE__ */ t.jsx(xt, { size: 16 }),
          /* @__PURE__ */ t.jsx("span", { children: "Add Page" })
        ]
      }
    )
  ] });
}, Ft = de.memo(Jt), ve = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
}, bn = ({
  pageManagerComponent: e = null,
  onNavigatePage: n,
  onAddPage: a,
  onDeletePage: r,
  onPageSizeChange: i,
  showSidebar: s = !0,
  showToolbar: l = !0,
  showPageManager: d = !0
}) => {
  const c = Ce(), m = ge((u) => u.document), { pageSize: N, continuousContent: v, pageBoundaries: j, activePage: _ } = m, C = q(null), b = q(null), { currentFormat: M, formatText: I } = $e(), {
    checkAndUpdateBoundaries: g,
    getCurrentPage: p,
    scrollToPage: y,
    positionCursorAtPage: h,
    updateBoundaries: x,
    triggerAutoReflow: k,
    removePageAndContent: z
  } = De(N, b), P = he(() => ve[N] || ve.A4, [N]), [O, E] = re(!1), S = q(null), T = q(!1);
  V(() => {
    if (b.current && !T.current) {
      b.current.innerHTML = v, T.current = !0;
      const u = setTimeout(() => {
        x();
      }, 100);
      return () => clearTimeout(u);
    }
  }, [v, x]), V(() => {
    const u = setTimeout(() => {
      b.current && b.current.focus();
    }, 200);
    return () => clearTimeout(u);
  }, []);
  const L = R((u) => {
    const w = u.currentTarget.innerHTML;
    c(ue(w)), g(), k();
    const D = p();
    D !== _ && c(te(D));
  }, [g, c, p, _, k]), $ = R((u) => {
    c(Ie(u)), x({ pageSize: u }), i && i(u);
  }, [c, x, i]), G = R((u) => {
    c(te(u)), y(u, C), n && n(u);
  }, [c, y, n]), W = R(() => {
    c(Oe({ position: "end" }));
    const u = setTimeout(() => {
      x();
    }, 100);
    return a && a(), () => clearTimeout(u);
  }, [c, x, a]), K = R(() => {
    const u = window.getSelection();
    if (u && u.rangeCount > 0) {
      if (!b?.current) return;
      const J = `<page-break data-page-break="true" contenteditable="false" data-page-number="${b.current.querySelectorAll('page-break, [data-page-break="true"]').length + 2}"></page-break><p><br></p>`;
      document.execCommand("insertHTML", !1, J);
      const B = setTimeout(() => {
        x();
      }, 100);
      return () => clearTimeout(B);
    }
  }, [x]), Y = R((u) => {
    if (j.length <= 1) {
      console.warn("Cannot delete the only page");
      return;
    }
    z(u) && (c(te(0)), r && r(u));
  }, [j.length, z, c, r]), Q = R(() => {
    !C.current || !b.current || (S.current && clearTimeout(S.current), S.current = setTimeout(() => {
      const u = p();
      u !== _ && c(te(u)), S.current = null;
    }, 100));
  }, [p, _, c]), o = he(() => {
    if (!v) return 0;
    const w = v.replace(/<[^>]*>/g, " ").match(/\b\w+\b/g);
    return w ? w.length : 0;
  }, [v]), f = j.length || 1;
  return V(() => () => {
    S.current && clearTimeout(S.current);
  }, []), /* @__PURE__ */ t.jsxs("div", { className: "multi-page-editor", children: [
    l && /* @__PURE__ */ t.jsx(
      Wt,
      {
        currentFormat: M,
        pageSize: N,
        onFormatText: I,
        onPageSizeChange: $,
        onAddPageBreak: K
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "editor-container", children: [
      s && /* @__PURE__ */ t.jsx(
        qt,
        {
          editorView: null,
          isCollapsed: O,
          onToggle: () => E((u) => !u),
          wordCount: o,
          pageCount: f
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "editor-viewport continuous-scroll",
          ref: C,
          onScroll: Q,
          children: /* @__PURE__ */ t.jsx(
            Yt,
            {
              content: v,
              dimensions: P,
              pageSize: N,
              pageBoundaries: j,
              editorRef: b,
              onInput: L,
              onClick: () => b.current?.focus()
            }
          )
        }
      ),
      d && /* @__PURE__ */ t.jsx("div", { className: "page-manager-sidebar", children: e ? de.cloneElement(e, {
        onNavigate: G,
        onAddPage: W,
        onDeletePage: Y,
        onPageSizeChange: $
      }) : /* @__PURE__ */ t.jsx(
        Ft,
        {
          onNavigate: G,
          onAddPage: W,
          onDeletePage: Y,
          onPageSizeChange: $
        }
      ) })
    ] })
  ] });
}, kn = {
  A4: { width: 794, height: 1123 },
  Letter: { width: 816, height: 1056 },
  Legal: { width: 816, height: 1344 }
};
export {
  bn as ContentEditableEditor,
  Yt as ContinuousPageView,
  Wt as EditorToolbar,
  kn as PAGE_DIMENSIONS,
  Ft as PageManager,
  qt as Sidebar,
  rn as addPage,
  Oe as addPageBreak,
  mn as clearImages,
  fn as deleteImage,
  on as deletePage,
  pn as documentReducer,
  gn as duplicatePage,
  xn as getAllImageKeys,
  hn as getImage,
  en as initializeDocument,
  un as insertPageAt,
  Gt as logger,
  dn as movePageTo,
  ln as removePageBreak,
  sn as resetDocument,
  Vt as saveImage,
  te as setActivePage,
  cn as setEditorMode,
  ue as updateContinuousContent,
  Le as updatePageBoundaries,
  nn as updatePageContent,
  Ie as updatePageSize,
  an as updatePages,
  tn as updateTitle,
  De as useContinuousReflow,
  $e as useFormatting
};
//# sourceMappingURL=htmleditor.es.js.map
