(() => { "use strict"; let e = []; const t = ["C", "D", "H", "S"],
        n = ["A", "J", "Q", "K"],
        a = document.querySelector("#btnPedir"),
        o = document.querySelector("#btnNuevo"),
        r = document.querySelector("#btnDetener"),
        s = document.querySelectorAll("small"),
        l = document.querySelector("#jugador-cartas"),
        c = document.querySelector("#computadora-cartas"); let d = 0,
        i = 0; const u = () => { for (let n = 2; n <= 10; n++)
            for (let a of t) e.push(n + a); for (let a of t)
            for (const t of n) e.push(t + a);
        console.log(e), e = _.shuffle(e), console.log(e) };
    u(); const m = () => { if (0 === e.length) throw "No hay cartas en el deck"; return e.pop() },
        g = e => { const t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t },
        b = e => { do { let t = m();
                i += g(t), s[1].innerHTML = i; const n = document.createElement("img"); if (n.src = `assets/cartas/${t}.png`, n.classList.add("carta"), c.append(n), e > 21) break } while (e < d && e <= 21);
            i === e ? alert("Nadie gana") : e > 21 ? alert("Computadora gana") : i > 21 && alert("Jugador gana") }; let p = g(m());
    console.log(p);
    document.querySelector("small");
    a.addEventListener("click", function() { let e = m();
        d += g(e), s[0].innerHTML = d; const t = document.createElement("img");
        t.src = `assets/cartas/${e}.png`, t.classList.add("carta"), l.append(t), d > 21 ? (console.warn("Lo siento mucho, perdiste"), a.disabled = !0, b(d), a.disabled = !0, r.disabled = !0) : 21 === d && (console.warn("21, genail!"), alert("Ganaste este juego"), a.disabled = !0, r.disabled = !0, b(d)) }), r.addEventListener("click", () => { a.disabled = !0, o.disabled = !0, b(d) }), o.addEventListener("click", () => { i = 0, e = [], u(), d = 0, a.disabled = !1, r.disabled = !1, c.innerHTML = "", l.innerHTML = "", s[0].innerHTML = 0, s[1].innerHTML = 0 }) })();