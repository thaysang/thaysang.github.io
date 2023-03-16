turtle.setIcon("")
turtle.setSize(30)
turtle.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTiOI6jPCmwVAId1q0rCafG1WXcbJjx4tRg&usqp=CAU")

const fd = (p) => turtle.fd(p)
const forward = (p) => turtle.fd(p)

const bk = (p) => turtle.bk(p)
const backward = (p) => turtle.bk(p)
const back = (p) => turtle.bk(p)

const lt = (p) => turtle.lt(p)
const left = (p) => turtle.lt(p)

const rt = (p) => turtle.rt(p)
const right = (p) => turtle.rt(p)

const gt = (x,y) => turtle.gt(240+x,180-y)
const goTo = (x,y) => turtle.gt(240+x,180-y)
const jt = (x,y) => turtle.setPosition(240+x,180-y)
const jumpTo = (x,y) => turtle.setPosition(240+x,180-y)
const pos = (x,y) => turtle.setPosition(240+x,180-y)

const seth = (p) => turtle.seth(p)

const bf = (p) => turtle.bf(p)
const beginFill = (p) => turtle.bf(p)

const ps = (p) => turtle.ps(p)
const penSize = (p) => turtle.ps(p)

const pc = (p) => turtle.pc(p)
const penColor = (p) => turtle.pc(p)

const speed = (p) => turtle.speed(p)
const text = (p,cl="black",s=22,f="Arial") => {
    turtle.setFont(s+"px "+f)
    turtle.setFillStyle(cl)
    turtle.fillText(p)
}

const ef = () => turtle.ef()
const endFill = () => turtle.ef()

const home = () => turtle.home()
const clear = () => turtle.clear()
const pd = () => turtle.pd()
const down = () => turtle.pd()
const penDown = () => turtle.pd()
const hide = () => turtle.setIcon("")
const icon = (p) => turtle.setIcon(p)

const pu = () => turtle.pu()
const up = () => turtle.pu()
const penUp = () => turtle.pu()

const circle = (r,a=360,c=true) => turtle.circle(r,a,c)
const cc = (r,a=360,c=true) => turtle.circle(r,a,c)

seth(90)