/*!
 * ScrambleTextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

let D = /(?:^\s+|\s+$)/g;
const u =
  /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function F(D) {
  let u = D.nodeType,
    C = "";
  if (1 === u || 9 === u || 11 === u) {
    if ("string" == typeof D.textContent) return D.textContent;
    for (D = D.firstChild; D; D = D.nextSibling) C += F(D);
  } else if (3 === u || 4 === u) return D.nodeValue;
  return C;
}
function C(F, C, E, e) {
  if (
    ((F += ""), E && (F = F.trim ? F.trim() : F.replace(D, "")), C && "" !== C)
  )
    return F.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(C);
  let t,
    n,
    r = [],
    i = F.length,
    s = 0;
  for (; s < i; s++)
    (n = F.charAt(s)),
      ((n.charCodeAt(0) >= 55296 && n.charCodeAt(0) <= 56319) ||
        (F.charCodeAt(s + 1) >= 65024 && F.charCodeAt(s + 1) <= 65039)) &&
        ((t = ((F.substr(s, 12).split(u) || [])[1] || "").length || 2),
        (n = F.substr(s, t)),
        (r.emoji = 1),
        (s += t - 1)),
      r.push(
        ">" === n
          ? "&gt;"
          : "<" === n
            ? "&lt;"
            : !e ||
                " " !== n ||
                (" " !== F.charAt(s - 1) && " " !== F.charAt(s + 1))
              ? n
              : "&nbsp;"
      );
  return r;
}
class E {
  constructor(D) {
    (this.chars = C(D)), (this.sets = []), (this.length = 50);
    for (let D = 0; D < 20; D++) this.sets[D] = B(80, this.chars);
  }
  grow(D) {
    for (let u = 0; u < 20; u++) this.sets[u] += B(D - this.length, this.chars);
    this.length = D;
  }
}
let e,
  t,
  n = () =>
    e ||
    ("undefined" != typeof window &&
      (e = window.gsap) &&
      e.registerPlugin &&
      e),
  a = true,
  l = /\s+/g,
  B = (D, u) => {
    let F = u.length,
      C = "";
    for (; --D > -1; ) C += u[~~(Math.random() * F)];
    return C;
  },
  A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  h = A.toLowerCase(),
  c = {
    upperCase: new E(A),
    lowerCase: new E(h),
    upperAndLowerCase: new E(A + h),
  },
  d = () => {
    t = e = n();
  };
const g = {
  version: "3.12.5",
  name: "scrambleText",
  register(D, u, F) {
    (e = D), d();
  },
  init(D, u, e, n, r) {
    if (
      (t || d(),
      (this.prop =
        "innerHTML" in D
          ? "innerHTML"
          : "textContent" in D
            ? "textContent"
            : 0),
      !this.prop)
    )
      return;
    (this.target = D), "object" != typeof u && (u = { text: u });
    let i,
      s,
      o,
      B,
      A = u.text || u.value || "",
      h = !1 !== u.trim,
      g = this;
    return (
      (g.delimiter = i = u.delimiter || ""),
      (g.original = C(F(D).replace(l, " ").split("&nbsp;").join(""), i, h)),
      ("{original}" !== A && !0 !== A && null != A) || (A = g.original.join(i)),
      (g.text = C((A || "").replace(l, " "), i, h)),
      (g.hasClass = !(!u.newClass && !u.oldClass)),
      (g.newClass = u.newClass),
      (g.oldClass = u.oldClass),
      (B = "" === i),
      (g.textHasEmoji = B && !!g.text.emoji),
      (g.charsHaveEmoji = !!u.chars && !!C(u.chars).emoji),
      (g.length = B ? g.original.length : g.original.join(i).length),
      (g.lengthDif = (B ? g.text.length : g.text.join(i).length) - g.length),
      (g.fillChar =
        u.fillChar || (u.chars && ~u.chars.indexOf(" ")) ? "&nbsp;" : ""),
      (g.charSet = o = c[u.chars || "upperCase"] || new E(u.chars)),
      (g.speed = 0.05 / (u.speed || 1)),
      (g.prevScrambleTime = 0),
      (g.setIndex = (20 * Math.random()) | 0),
      (s = g.length + Math.max(g.lengthDif, 0)),
      s > o.length && o.grow(s),
      (g.chars = o.sets[g.setIndex]),
      (g.revealDelay = u.revealDelay || 0),
      (g.tweenLength = !1 !== u.tweenLength),
      (g.tween = e),
      (g.rightToLeft = !!u.rightToLeft),
      g._props.push("scrambleText", "text"),
      a
    );
  },
  render(D, u) {
    let F,
      E,
      e,
      t,
      n,
      r,
      i,
      s,
      o,
      a,
      l,
      {
        target: B,
        prop: A,
        text: h,
        delimiter: c,
        tween: d,
        prevScrambleTime: g,
        revealDelay: p,
        setIndex: f,
        chars: m,
        charSet: w,
        length: x,
        textHasEmoji: j,
        charsHaveEmoji: b,
        lengthDif: T,
        tweenLength: v,
        oldClass: y,
        newClass: S,
        rightToLeft: L,
        fillChar: _,
        speed: H,
        original: M,
        hasClass: O,
      } = u,
      I = h.length,
      P = d._time,
      W = P - g;
    p &&
      (d._from && (P = d._dur - P),
      (D =
        0 === P
          ? 0
          : P < p
            ? 1e-6
            : P === d._dur
              ? 1
              : d._ease((P - p) / (d._dur - p)))),
      D < 0 ? (D = 0) : D > 1 && (D = 1),
      L && (D = 1 - D),
      (F = ~~(D * I + 0.5)),
      D
        ? ((W > H || W < -H) &&
            ((u.setIndex = f = (f + ((19 * Math.random()) | 0)) % 20),
            (u.chars = w.sets[f]),
            (u.prevScrambleTime += W)),
          (t = m))
        : (t = M.join(c)),
      (l = d._from ? D : 1 - D),
      (a = x + (v ? (d._from ? l * l * l : 1 - l * l * l) : 1) * T),
      L
        ? 1 !== D || (!d._from && "isFromStart" !== d.data)
          ? ((i = h.slice(F).join(c)),
            (e = b
              ? C(t)
                  .slice(0, (a - (j ? C(i) : i).length + 0.5) | 0)
                  .join("")
              : t.substr(0, (a - (j ? C(i) : i).length + 0.5) | 0)),
            (t = i))
          : ((e = ""), (t = M.join(c)))
        : ((e = h.slice(0, F).join(c)),
          (E = (j ? C(e) : e).length),
          (t = b
            ? C(t)
                .slice(E, (a + 0.5) | 0)
                .join("")
            : t.substr(E, (a - E + 0.5) | 0))),
      O
        ? ((s = L ? y : S),
          (o = L ? S : y),
          (n = s && 0 !== F),
          (r = o && F !== I),
          (i =
            (n ? "<span class='" + s + "'>" : "") +
            e +
            (n ? "</span>" : "") +
            (r ? "<span class='" + o + "'>" : "") +
            c +
            t +
            (r ? "</span>" : "")))
        : (i = e + c + t),
      (B[A] =
        "&nbsp;" === _ && ~i.indexOf("  ")
          ? i.split("  ").join("&nbsp;&nbsp;")
          : i);
  },
};
(g.emojiSafeSplit = C), (g.getText = F), n() && e.registerPlugin(g);
export default g;
export { g as ScrambleTextPlugin };
