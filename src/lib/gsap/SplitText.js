/*!
 * SplitText 3.12.5
 * https://greensock.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

let u,
    e,
    t,
    F,
    C,
    i,
    n = /(?:\r|\n|\t\t)/g,
    s = /(?:\s\s+)/g,
    E = String.fromCharCode(160),
    l = (D) => {
        (u = document),
            (e = window),
            (F =
                F ||
                D ||
                e.gsap ||
                console.warn("Please gsap.registerPlugin(SplitText)")),
            F &&
                ((i = F.utils.toArray),
                (C = F.core.context || function () {}),
                (t = 1));
    },
    a = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
    h = (D) => e.getComputedStyle(D),
    p = 1,
    B = (D) => "absolute" === D.position || !0 === D.absolute,
    A = (D, u) => {
        let e,
            t = u.length;
        for (; --t > -1; )
            if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
    },
    f = (D = "", u) => {
        let e = ~D.indexOf("++"),
            t = 1;
        return (
            e && (D = D.split("++").join("")),
            () =>
                "<" +
                u +
                " style='position:relative;display:inline-block;'" +
                (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
        );
    },
    c = (D, u, e) => {
        let t = D.nodeType;
        if (1 === t || 9 === t || 11 === t)
            for (D = D.firstChild; D; D = D.nextSibling) c(D, u, e);
        else
            (3 !== t && 4 !== t) ||
                (D.nodeValue = D.nodeValue.split(u).join(e));
    },
    g = (D, u) => {
        let e = u.length;
        for (; --e > -1; ) D.push(u[e]);
    },
    x = (D, u, e) => {
        let t;
        for (; D && D !== u; ) {
            if (((t = D._next || D.nextSibling), t))
                return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent;
        }
    },
    y = (D) => {
        let u,
            e,
            t = i(D.childNodes),
            F = t.length;
        for (u = 0; u < F; u++)
            (e = t[u]),
                e._isSplit
                    ? y(e)
                    : u && e.previousSibling && 3 === e.previousSibling.nodeType
                      ? ((e.previousSibling.nodeValue +=
                            3 === e.nodeType
                                ? e.nodeValue
                                : e.firstChild.nodeValue),
                        D.removeChild(e))
                      : 3 !== e.nodeType &&
                        (D.insertBefore(e.firstChild, e), D.removeChild(e));
    },
    b = (D, u) => parseFloat(u[D]) || 0,
    _ = (D, e, t, F, C, i, n) => {
        let s,
            E,
            l,
            o,
            r,
            d,
            a,
            p,
            A,
            f,
            _,
            w,
            S = h(D),
            m = b("paddingLeft", S),
            v = -999,
            T = b("borderBottomWidth", S) + b("borderTopWidth", S),
            N = b("borderLeftWidth", S) + b("borderRightWidth", S),
            L = b("paddingTop", S) + b("paddingBottom", S),
            W = b("paddingLeft", S) + b("paddingRight", S),
            O = b("fontSize", S) * (e.lineThreshold || 0.2),
            H = S.textAlign,
            V = [],
            R = [],
            j = [],
            M = e.wordDelimiter || " ",
            k = e.tag ? e.tag : e.span ? "span" : "div",
            P = e.type || e.split || "chars,words,lines",
            z = C && ~P.indexOf("lines") ? [] : null,
            $ = ~P.indexOf("words"),
            q = ~P.indexOf("chars"),
            G = B(e),
            I = e.linesClass,
            J = ~(I || "").indexOf("++"),
            K = [],
            Q = "flex" === S.display,
            U = D.style.display;
        for (
            J && (I = I.split("++").join("")),
                Q && (D.style.display = "block"),
                E = D.getElementsByTagName("*"),
                l = E.length,
                r = [],
                s = 0;
            s < l;
            s++
        )
            r[s] = E[s];
        if (z || G)
            for (s = 0; s < l; s++)
                (o = r[s]),
                    (d = o.parentNode === D),
                    (d || G || (q && !$)) &&
                        ((w = o.offsetTop),
                        z &&
                            d &&
                            Math.abs(w - v) > O &&
                            ("BR" !== o.nodeName || 0 === s) &&
                            ((a = []), z.push(a), (v = w)),
                        G &&
                            ((o._x = o.offsetLeft),
                            (o._y = w),
                            (o._w = o.offsetWidth),
                            (o._h = o.offsetHeight)),
                        z &&
                            (((o._isSplit && d) ||
                                (!q && d) ||
                                ($ && d) ||
                                (!$ &&
                                    o.parentNode.parentNode === D &&
                                    !o.parentNode._isSplit)) &&
                                (a.push(o),
                                (o._x -= m),
                                x(o, D, M) && (o._wordEnd = !0)),
                            "BR" === o.nodeName &&
                                ((o.nextSibling &&
                                    "BR" === o.nextSibling.nodeName) ||
                                    0 === s) &&
                                z.push([])));
        for (s = 0; s < l; s++)
            if (((o = r[s]), (d = o.parentNode === D), "BR" !== o.nodeName))
                if (
                    (G &&
                        ((A = o.style),
                        $ ||
                            d ||
                            ((o._x += o.parentNode._x),
                            (o._y += o.parentNode._y)),
                        (A.left = o._x + "px"),
                        (A.top = o._y + "px"),
                        (A.position = "absolute"),
                        (A.display = "block"),
                        (A.width = o._w + 1 + "px"),
                        (A.height = o._h + "px")),
                    !$ && q)
                )
                    if (o._isSplit)
                        for (
                            o._next = E = o.nextSibling,
                                o.parentNode.appendChild(o);
                            E && 3 === E.nodeType && " " === E.textContent;

                        )
                            (o._next = E.nextSibling),
                                o.parentNode.appendChild(E),
                                (E = E.nextSibling);
                    else
                        o.parentNode._isSplit
                            ? ((o._parent = o.parentNode),
                              !o.previousSibling &&
                                  o.firstChild &&
                                  (o.firstChild._isFirst = !0),
                              o.nextSibling &&
                                  " " === o.nextSibling.textContent &&
                                  !o.nextSibling.nextSibling &&
                                  K.push(o.nextSibling),
                              (o._next =
                                  o.nextSibling && o.nextSibling._isFirst
                                      ? null
                                      : o.nextSibling),
                              o.parentNode.removeChild(o),
                              r.splice(s--, 1),
                              l--)
                            : d ||
                              ((w = !o.nextSibling && x(o.parentNode, D, M)),
                              o.parentNode._parent &&
                                  o.parentNode._parent.appendChild(o),
                              w &&
                                  o.parentNode.appendChild(
                                      u.createTextNode(" ")
                                  ),
                              "span" === k && (o.style.display = "inline"),
                              V.push(o));
                else
                    o.parentNode._isSplit && !o._isSplit && "" !== o.innerHTML
                        ? R.push(o)
                        : q &&
                          !o._isSplit &&
                          ("span" === k && (o.style.display = "inline"),
                          V.push(o));
            else
                z || G
                    ? (o.parentNode && o.parentNode.removeChild(o),
                      r.splice(s--, 1),
                      l--)
                    : $ || D.appendChild(o);
        for (s = K.length; --s > -1; ) K[s].parentNode.removeChild(K[s]);
        if (z) {
            for (
                G &&
                    ((f = u.createElement(k)),
                    D.appendChild(f),
                    (_ = f.offsetWidth + "px"),
                    (w = f.offsetParent === D ? 0 : D.offsetLeft),
                    D.removeChild(f)),
                    A = D.style.cssText,
                    D.style.cssText = "display:none;";
                D.firstChild;

            )
                D.removeChild(D.firstChild);
            for (
                p = " " === M && (!G || (!$ && !q)), s = 0;
                s < z.length;
                s++
            ) {
                for (
                    a = z[s],
                        f = u.createElement(k),
                        f.style.cssText =
                            "display:block;text-align:" +
                            H +
                            ";position:" +
                            (G ? "absolute;" : "relative;"),
                        I && (f.className = I + (J ? s + 1 : "")),
                        j.push(f),
                        l = a.length,
                        E = 0;
                    E < l;
                    E++
                )
                    "BR" !== a[E].nodeName &&
                        ((o = a[E]),
                        f.appendChild(o),
                        p && o._wordEnd && f.appendChild(u.createTextNode(" ")),
                        G &&
                            (0 === E &&
                                ((f.style.top = o._y + "px"),
                                (f.style.left = m + w + "px")),
                            (o.style.top = "0px"),
                            w && (o.style.left = o._x - w + "px")));
                0 === l
                    ? (f.innerHTML = "&nbsp;")
                    : $ || q || (y(f), c(f, String.fromCharCode(160), " ")),
                    G && ((f.style.width = _), (f.style.height = o._h + "px")),
                    D.appendChild(f);
            }
            D.style.cssText = A;
        }
        G &&
            (n > D.clientHeight &&
                ((D.style.height = n - L + "px"),
                D.clientHeight < n && (D.style.height = n + T + "px")),
            i > D.clientWidth &&
                ((D.style.width = i - W + "px"),
                D.clientWidth < i && (D.style.width = i + N + "px"))),
            Q &&
                (U ? (D.style.display = U) : D.style.removeProperty("display")),
            g(t, V),
            $ && g(F, R),
            g(C, j);
    },
    w = (e, t, F, C) => {
        let i,
            l,
            o,
            r,
            d,
            a,
            p,
            h,
            f = t.tag ? t.tag : t.span ? "span" : "div",
            g = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
            x = B(t),
            y = t.wordDelimiter || " ",
            b = (D) => D === y || (D === E && " " === y),
            _ = " " !== y ? "" : x ? "&#173; " : " ",
            w = "</" + f + ">",
            S = 1,
            m = t.specialChars
                ? "function" == typeof t.specialChars
                    ? t.specialChars
                    : A
                : null,
            v = u.createElement("div"),
            T = e.parentNode;
        for (
            T.insertBefore(v, e),
                v.textContent = e.nodeValue,
                T.removeChild(e),
                i = (function D(u) {
                    let e = u.nodeType,
                        t = "";
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof u.textContent)
                            return u.textContent;
                        for (u = u.firstChild; u; u = u.nextSibling) t += D(u);
                    } else if (3 === e || 4 === e) return u.nodeValue;
                    return t;
                })((e = v)),
                p = -1 !== i.indexOf("<"),
                !1 !== t.reduceWhiteSpace &&
                    (i = i.replace(s, " ").replace(n, "")),
                p && (i = i.split("<").join("{{LT}}")),
                d = i.length,
                l = (" " === i.charAt(0) ? _ : "") + F(),
                o = 0;
            o < d;
            o++
        )
            if (((a = i.charAt(o)), m && (h = m(i.substr(o), t.specialChars))))
                (a = i.substr(o, h || 1)),
                    (l += g && " " !== a ? C() + a + "</" + f + ">" : a),
                    (o += h - 1);
            else if (b(a) && !b(i.charAt(o - 1)) && o) {
                for (l += S ? w : "", S = 0; b(i.charAt(o + 1)); )
                    (l += _), o++;
                o === d - 1
                    ? (l += _)
                    : ")" !== i.charAt(o + 1) && ((l += _ + F()), (S = 1));
            } else
                "{" === a && "{{LT}}" === i.substr(o, 6)
                    ? ((l += g ? C() + "{{LT}}</" + f + ">" : "{{LT}}"),
                      (o += 5))
                    : (a.charCodeAt(0) >= 55296 && a.charCodeAt(0) <= 56319) ||
                        (i.charCodeAt(o + 1) >= 65024 &&
                            i.charCodeAt(o + 1) <= 65039)
                      ? ((r =
                            ((i.substr(o, 12).split(D) || [])[1] || "")
                                .length || 2),
                        (l +=
                            g && " " !== a
                                ? C() + i.substr(o, r) + "</" + f + ">"
                                : i.substr(o, r)),
                        (o += r - 1))
                      : (l += g && " " !== a ? C() + a + "</" + f + ">" : a);
        (e.outerHTML = l + (S ? w : "")), p && c(T, "{{LT}}", "<");
    },
    S = (D, u, e, t) => {
        let F,
            C,
            n = i(D.childNodes),
            s = n.length,
            E = B(u);
        if (3 !== D.nodeType || s > 1) {
            for (u.absolute = !1, F = 0; F < s; F++)
                (C = n[F]),
                    (C._next = C._isFirst = C._parent = C._wordEnd = null),
                    (3 !== C.nodeType || /\S+/.test(C.nodeValue)) &&
                        (E &&
                            3 !== C.nodeType &&
                            "inline" === h(C).display &&
                            ((C.style.display = "inline-block"),
                            (C.style.position = "relative")),
                        (C._isSplit = !0),
                        S(C, u, e, t));
            return (u.absolute = E), void (D._isSplit = !0);
        }
        w(D, u, e, t);
    };
class m {
    constructor(D, u) {
        t || l(),
            (this.elements = i(D)),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = u || {}),
            C(this),
            p && this.split(u);
    }
    split(D) {
        this.isSplit && this.revert(),
            (this.vars = D = D || this.vars),
            (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                    0);
        let u,
            e,
            t,
            F = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = f(D.wordsClass, C),
            n = f(D.charsClass, C);
        for (; --F > -1; )
            (t = this.elements[F]),
                (this._originals[F] = {
                    html: t.innerHTML,
                    style: t.getAttribute("style"),
                }),
                (u = t.clientHeight),
                (e = t.clientWidth),
                S(t, D, i, n),
                _(t, D, this.chars, this.words, this.lines, e, u);
        return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
        );
    }
    revert() {
        let D = this._originals;
        if (!D) throw "revert() call wasn't scoped properly.";
        return (
            this.elements.forEach((u, e) => {
                (u.innerHTML = D[e].html), u.setAttribute("style", D[e].style);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
        );
    }
    static create(D, u) {
        return new m(D, u);
    }
}
(m.version = "3.12.5"), (m.register = l);
export default m;
export { m as SplitText };
