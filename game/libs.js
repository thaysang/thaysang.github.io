const app = new PIXI.Application({ 
  width: window.innerWidth, 
  height: window.innerHeight,autoDensity: true, resolution: 1.0, 
  backgroundAlpha: 0 })
document.body.appendChild(app.view)
PIXI.smooth.SmoothGraphics.prototype.drawStar = PIXI.Graphics.prototype.drawStar;

const graphic = new PIXI.smooth.SmoothGraphics()
const forever = (cb) => app.ticker.add((dt) => cb(dt))

class Sprite extends PIXI.Sprite {
  constructor(params) {
    super(params)
  }
  onClick(cb){
    return this.on('pointertap',(e)=>cb(e.client))
  }
}

const sprite = (texture,{x=0,y=0,anchor=0.5,scale=1,...props}={}) => {
  const sp = new Sprite(texture)
  sp.interactive = true;
  sp.anchor.set(anchor)
  sp.x = x
  sp.y = y
  sp.scale.set(scale)
  Object.assign(sp,props)
  app.stage.addChild(sp);
  return sp
}

const image = (url) => PIXI.Texture.from(url)

const rect = (width,height,{fill="black",bdW=0,bdC="black",bdR=0}={}) => {
  graphic.clear() 
  graphic.lineStyle(bdW,_color(bdC),1); 
  graphic.beginFill(_color(fill),1.0,true);
  if(bdR>0) graphic.drawRoundedRect(0,0,width,height,bdR)
  else graphic.drawRect(0,0,width,height);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const circle = (r,{fill="black",bdW=0,bdC="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(bdW,_color(bdC),1); 
  // graphic.beginFill(_color(fill));

  graphic.beginFill(_color(fill),1.0,true);
  graphic.drawCircle(0,0,r);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const star = (n,width,{fill="black",bdW=0,bdC="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(bdW,_color(bdC),1); 
  graphic.beginFill(_color(fill),1.0,true);
  graphic.drawStar(0,0,n,width);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const elip = (width,height,{fill="black",bdW=0,bdC="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(bdW,_color(bdC),1); 
  graphic.beginFill(_color(fill),1.0,true);
  graphic.drawEllipse(0,0,width/2,height/2);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const polygon = (path,{fill="black",bdW=0,bdC="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(bdW,_color(bdC),1); 
  graphic.beginFill(_color(fill),1.0,true);
  graphic.drawPolygon(path);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}

const text = (txt,{x=0,y=0,...style}={}) => {
  const basicText = new PIXI.Text(txt, new PIXI.TextStyle({...style}));
  basicText.x = x;
  basicText.y = y;
  basicText.anchor.set(0.5)
  app.stage.addChild(basicText);
  return basicText
}
//Sounds
const sound = {
  add: (name) => PIXI.sound.add(name,'./sound/'+name),
  play: (name) => PIXI.sound.play(name)
}

const keyboard = {
  down: (cb) => {
    window.addEventListener('keydown',(e)=>cb(e.key))
  },
  up: (cb) => {
    window.addEventListener('keyup',(e)=>cb(e.key))
  }
}