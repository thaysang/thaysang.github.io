turtle.setIcon("")
turtle.setSize(30)
turtle.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTiOI6jPCmwVAId1q0rCafG1WXcbJjx4tRg&usqp=CAU")

const fd = (p=100) => turtle.fd(p)
const forward = (p=100) => turtle.fd(p)

const bk = (p=100) => turtle.bk(p)
const backward = (p=100) => turtle.bk(p)
const back = (p=100) => turtle.bk(p)

const lt = (p=90) => turtle.lt(p)
const left = (p=90) => turtle.lt(p)

const rt = (p=90) => turtle.rt(p)
const right = (p=90) => turtle.rt(p)

const gt = (x=0,y=0) => turtle.gt(240+x,180-y)
const goTo = (x=0,y=0) => turtle.gt(240+x,180-y)
const jt = (x=0,y=0) => turtle.setPosition(240+x,180-y)
const jumpTo = (x=0,y=0) => turtle.setPosition(240+x,180-y)
const pos = (x=0,y=0) => turtle.setPosition(240+x,180-y)

const seth = (p=0) => turtle.seth(p)

const bf = (p="black") => turtle.bf(p)
const beginFill = (p="black") => turtle.bf(p)

const ps = (p=1) => turtle.ps(p)
const penSize = (p=1) => turtle.ps(p)

const pc = (p="black") => turtle.pc(p)
const penColor = (p="black") => turtle.pc(p)

const speed = (p=1) => turtle.speed(p)
const text = (p="",cl="black",s=22,f="Arial") => {
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
const dot = (size=20,color="black") => turtle.dot(size,color)

seth(90)