const app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight, backgroundAlpha: 0})
    document.body.appendChild(app.view)
    const graphic = new PIXI.Graphics()
    const forever = (cb) => app.ticker.add((dt) => cb(dt))

const texture = (url) => PIXI.Texture.from(url)

class Sprite extends PIXI.Sprite {
  constructor(params) {
    super(params)
  }
  onClick(cb){
    return this.on('pointertap',cb)
  }
}

const sprite = (tt) => {
  const sp = new Sprite(tt)
  sp.interactive = true;
  sp.anchor.set(0.5)
  app.stage.addChild(sp);
  return sp
}

const circle = ({x,y,r,fill,borderWidth=1,borderColor="black"}) => {
graphic.clear() 
graphic.lineStyle(borderWidth,_color(borderColor),1); 
  graphic.beginFill(_color(fill));
  graphic.drawCircle(0,0,r);
  graphic.endFill();
  let tt = app.renderer.generateTexture(graphic)
  let sp = new PIXI.Sprite(tt)
  sp.anchor.set(0.5,0.5)
  sp.x = x
  sp.y = y
  app.stage.addChild(sp);
  return sp
}

