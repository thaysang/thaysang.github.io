const games = [
    {name:"L1: Chase Game",
    code:"205355052"},
    {name:"L2: Flappy Bird",
    code:"258349724"},
    {name:"L3: Math game",
    code:"250234955"},
    {name:"L4: Protect Earth",
    code:"825920730"},
    {name:"L5: Shooter",
    code:"276887163"},
  ]
  const App = () => <Div>
    {
      games.map(({name,code})=><Div>
        <H2>{name}</H2>
        <Iframe 
          width={800}
          height={600}
          src={`https://scratch.mit.edu/projects/${code}/embed`}
          />
      </Div>)
    }
  </Div>