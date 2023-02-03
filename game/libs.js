const app = new PIXI.Application({ 
  width: window.innerWidth, 
  height: window.innerHeight,autoDensity: true, resolution: 1.0, 
  backgroundAlpha: 0 })
document.body.appendChild(app.view)
PIXI.smooth.SmoothGraphics.prototype.drawStar = PIXI.Graphics.prototype.drawStar;

const graphic = new PIXI.smooth.SmoothGraphics()
const {Engine,Bodies,Composite,Body,Collision} = Matter

const engine = Engine.create();
const setGravity = (g) => engine.gravity = g

app.ticker.add((dt) => {
  Engine.update(engine,1000/60)
  app.stage.children.forEach(spi => {
    if(spi.body){
      spi.x = spi.body.position.x
      spi.y = spi.body.position.y
      spi.rotation = spi.body.angle
    }
  })
  if(typeof forever === 'function') forever()
})

class Sprite extends PIXI.Sprite {
  constructor(params) {
    super(params)
  }
  onClick(cb){
    return this.on('pointertap',(e)=>cb(e.client))
  }
  jump(x,y){
    if(this.body) Body.applyForce(this.body,this.body.position,{x,y})
  }
  move(dx,dy){
    if(this.body) Body.setPosition(this.body,{
      x:this.body.position.x + dx,
      y:this.body.position.y + dy
    })
  }
  setPosition(x,y){
    if(this.body) Body.setPosition(this.body,{x,y})
  }
  setP(x,y){
    this.setPosition(x,y)
  }
  setVelocity(x,y){
    if(this.body) Body.setVelocity(this.body,{x,y})
  }
  setV(x,y){
    this.setVelocity(x,y)
  }
  setAngle(a){
    if(this.body) Body.setAngle(this.body,Math.PI*a/180)
  }
  setA(a){
    this.setAngle(a)
  }
  setAV(a){
    if(this.body) Body.setAngularVelocity(this.body,Math.PI*a/180)
  }
  setCentre(x,y){
    if(this.body) Body.setCentre(this.body,{x,y},this.body.position)
  }
  setDensity(d){
    if(this.body) Body.setDensity(this.body,d)
  }
  setMass(m){
    if(this.body) Body.setMass(this.body,m)
  }
  setStatic(iS){
    if(this.body) Body.setStatic(this.body,iS)
  }
  translate(x,y){
    if(this.body) Body.translate(this.body,{x,y})
  }
  rotate(a){
    if(this.body) Body.rotate(this.body,Math.PI*a/180)
  }
  collides(sp){
    return Collision.collides(this.body, sp.body)
  }
  remove(){
    Composite.remove(engine.world, this.body)
    app.stage.removeChild(this) 
  }
}

const sprite = (texture,{x=0,y=0,anchor=0.5,scale=1,a=0,...props}={}) => {
  const sp = new Sprite(texture)
  sp.interactive = true;
  sp.anchor.set(anchor)
  sp.x = x
  sp.y = y
  sp.scale.set(scale)
  Object.assign(sp,props)
  if(props.body) {
    if(props.body==="rect") {
      sp.body = Bodies.rectangle(x,y,
        props.width?props.width:texture.width,
        props.height?props.height:texture.height,
        {angle:Math.PI*a/180,...props})
      Composite.add(engine.world, sp.body);
    }
    if(props.body==="circle") {
      sp.body = Bodies.circle(x,y,
        props.r?props.r:texture.r,
        {angle:Math.PI*a/180,...props})
      Composite.add(engine.world, sp.body);
    }
  }
  app.stage.addChild(sp);
  return sp
}

const image = (url) => PIXI.Texture.from(url)

const rect = ({width=1,height=1,fill="black",bdW=0,bdC="black",bdR=0}={}) => {
  graphic.clear() 
  graphic.lineStyle(bdW,_color(bdC),1); 
  graphic.beginFill(_color(fill),1.0,true);
  if(bdR>0) graphic.drawRoundedRect(0,0,width,height,bdR)
  else graphic.drawRect(0,0,width,height);
  graphic.endFill();
  const tt = app.renderer.generateTexture(graphic)
  tt.width = width
  tt.height = height
  return tt
}
const circle = ({r=1,fill="black",bdW=0,bdC="black"}={}) => {
  graphic.clear() 
  graphic.lineStyle(bdW,_color(bdC),1); 
  // graphic.beginFill(_color(fill));

  graphic.beginFill(_color(fill),1.0,true);
  graphic.drawCircle(0,0,r);
  graphic.endFill();
  const tt = app.renderer.generateTexture(graphic)
  tt.r = r
  return tt
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

const text = (txt,{x=0,y=0,a=0,...style}={}) => {
  const basicText = new PIXI.Text(txt, new PIXI.TextStyle({...style}));
  basicText.x = x;
  basicText.y = y;
  basicText.anchor.set(0.5)
  basicText.rotation = Math.PI*a/180
  Object.assign(basicText,style)
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

