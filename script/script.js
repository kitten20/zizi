const $ = (i) => document.querySelector(i)
const $$ = (i) => document.querySelectorAll(i)

const setCartPrice = () => {
    const price = localStorage.getItem("price")

    document.querySelector(".cart-footer-price").innerHTML = `Итого: <strong>${price} руб.</strong>`
}

$$('.cart__button_inc').forEach(i => {
    i.onclick = (e) => {
        +(e.target.parentNode.childNodes[3].value) ++
        const price = e.target.parentNode.parentNode.childNodes[3].textContent.trim().slice(0, -4)
        localStorage.setItem("price", price)
        setCartPrice()
    }
})
$$('.cart__button_dec').forEach(i => i.onclick = (e) => +(e.target.parentNode.childNodes[3].value) > 1 ? +(e.target.parentNode.childNodes[3].value) -- : +(e.target.parentNode.childNodes[3].value) == 1)

const bodyActiveToggle = () => {
    document.body.classList.toggle("active-body")
    document.body.style.height = "100vh"
}

const setActive = (id, className, bodyBackground = false) => {
    document.getElementById(id).onclick = () => {
        $(className).classList.toggle("active")
        bodyActiveToggle()

        bodyBackground
            ?
            $('.body-background').style.display = "none" :
            $('.body-background').style.display = "block"
    }
}

const turnOffBg = (c) => {
    $(c).addEventListener("click", (e) => {
        e.stopPropagation()

        document.body.style.overflow = ""
        $(".cart").classList.remove("active")
        $("#item-popup-1").classList.remove("active")
        $("#item-popup-2").classList.remove("active")
        $('body').classList.toggle("active-body")
    })
}

turnOffBg('.body-background')
turnOffBg('.item-popup-cross-1')
turnOffBg('.item-popup-cross-2')

setActive("nav-item", ".cart-popup")
setActive("button-popup-1", ".item-popup-1")
setActive("button-popup-2", ".item-popup-2")