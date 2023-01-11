const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, backgroundAlpha: 0, antialias: true })
document.body.appendChild(app.view)
const graphic = new PIXI.Graphics()
const forever = (cb) => app.ticker.add((dt) => cb(dt))

class Sprite extends PIXI.Sprite {
  constructor(params) {
    super(params)
  }
  onClick(cb){
    return this.on('pointertap',cb)
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

const rect = (width,height,{fill="black",lineWidth=0,lineColor="black",borderRadius=0}={}) => {
  graphic.clear() 
  graphic.lineStyle(lineWidth,_color(lineColor),1); 
  graphic.beginFill(_color(fill));
  if(borderRadius>0) graphic.drawRoundedRect(0,0,width,height,borderRadius)
  else graphic.drawRect(0,0,width,height);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const circle = (r,{fill="black",borderWidth=0,borderColor="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(borderWidth,_color(borderColor),1); 
  graphic.beginFill(_color(fill));
  graphic.drawCircle(0,0,r);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const star = (n,width,{fill="black",lineWidth=0,lineColor="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(lineWidth,_color(lineColor),1); 
  graphic.beginFill(_color(fill));
  graphic.drawStar(0,0,n,width);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const elip = (width,height,{fill="black",lineWidth=0,lineColor="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(lineWidth,_color(lineColor),1); 
  graphic.beginFill(_color(fill));
  graphic.drawEllipse(0,0,width/2,height/2);
  graphic.endFill();
  return app.renderer.generateTexture(graphic)
}
const polygon = (path,{fill="black",lineWidth=0,lineColor="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(lineWidth,_color(lineColor),1); 
  graphic.beginFill(_color(fill));
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
  add: (name) => PIXI.sound.add(name,'/sound/'+name),
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