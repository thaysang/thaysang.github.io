const colorNames = {"none":0xffffff,"indian red":11540255,"crimson":14423100,"lightpink":16758465,"lightpink 1":16756409,"lightpink 2":15639213,"lightpink 3":13470869,"lightpink 4":9133925,"pink":16761035,"pink 1":16758213,"pink 2":15641016,"pink 3":13472158,"pink 4":9134956,"palevioletred":14381203,"palevioletred 1":16745131,"palevioletred 2":15628703,"palevioletred 3":13461641,"palevioletred 4":9127773,"lavenderblush 1":16773365,"lavenderblush":16773365,"lavenderblush 2":15655141,"lavenderblush 3":13484485,"lavenderblush 4":9143174,"violetred 1":16727702,"violetred 2":15612556,"violetred 3":13447800,"violetred 4":9118290,"hotpink":16738740,"hotpink 1":16740020,"hotpink 2":15624871,"hotpink 3":13459600,"hotpink 4":9124450,"raspberry":8857175,"deeppink 1":16716947,"deeppink":16716947,"deeppink 2":15602313,"deeppink 3":13439094,"deeppink 4":9112144,"maroon 1":16725171,"maroon 2":15610023,"maroon 3":13445520,"maroon 4":9116770,"mediumvioletred":13047173,"violetred":13639824,"orchid":14315734,"orchid 1":16745466,"orchid 2":15629033,"orchid 3":13461961,"orchid 4":9127817,"thistle":14204888,"thistle 1":16769535,"thistle 2":15651566,"thistle 3":13481421,"thistle 4":9141131,"plum 1":16759807,"plum 2":15642350,"plum 3":13473485,"plum 4":9135755,"plum":14524637,"violet":15631086,"magenta":16711935,"fuchsia":16711935,"magenta 2":15597806,"magenta 3":13435085,"magenta 4":9109643,"darkmagenta":9109643,"purple":8388736,"mediumorchid":12211667,"mediumorchid 1":14706431,"mediumorchid 2":13721582,"mediumorchid 3":11817677,"mediumorchid 4":8009611,"darkviolet":9699539,"darkorchid":10040012,"darkorchid 1":12533503,"darkorchid 2":11680494,"darkorchid 3":10105549,"darkorchid 4":6824587,"indigo":4915330,"blueviolet":9055202,"purple 1":10170623,"purple 2":9514222,"purple 3":8201933,"purple 4":5577355,"mediumpurple":9662683,"mediumpurple 1":11240191,"mediumpurple 2":10451438,"mediumpurple 3":9005261,"mediumpurple 4":6113163,"darkslateblue":4734347,"lightslateblue":8679679,"mediumslateblue":8087790,"slateblue":6970061,"slateblue 1":8613887,"slateblue 2":8021998,"slateblue 3":6904269,"slateblue 4":4668555,"ghostwhite":16316671,"lavender":15132410,"blue":255,"blue 2":238,"blue 3":205,"mediumblue":205,"blue 4":139,"darkblue":139,"navy":128,"midnightblue":1644912,"cobalt":4020651,"royalblue":4286945,"royalblue 1":4749055,"royalblue 2":4419310,"royalblue 3":3825613,"royalblue 4":2572427,"cornflowerblue":6591981,"lightsteelblue":11584734,"lightsteelblue 1":13296127,"lightsteelblue 2":12374766,"lightsteelblue 3":10663373,"lightsteelblue 4":7240587,"lightslategray":7833753,"slategray":7372944,"slategray 1":13034239,"slategray 2":12178414,"slategray 3":10467021,"slategray 4":7109515,"dodgerblue 1":2003199,"dodgerblue":2003199,"dodgerblue 2":1869550,"dodgerblue 3":1602765,"dodgerblue 4":1068683,"aliceblue":15792383,"steelblue":4620980,"steelblue 1":6535423,"steelblue 2":6073582,"steelblue 3":5215437,"steelblue 4":3564683,"lightskyblue":8900346,"lightskyblue 1":11592447,"lightskyblue 2":10802158,"lightskyblue 3":9287373,"lightskyblue 4":6323083,"skyblue 1":8900351,"skyblue 2":8306926,"skyblue 3":7120589,"skyblue 4":4878475,"skyblue":8900331,"deepskyblue 1":49151,"deepskyblue":49151,"deepskyblue 2":45806,"deepskyblue 3":39629,"deepskyblue 4":26763,"peacock":3383753,"lightblue":11393254,"lightblue 1":12578815,"lightblue 2":11722734,"lightblue 3":10141901,"lightblue 4":6849419,"powderblue":11591910,"cadetblue 1":10024447,"cadetblue 2":9364974,"cadetblue 3":8046029,"cadetblue 4":5473931,"turquoise 1":62975,"turquoise 2":58862,"turquoise 3":50637,"turquoise 4":34443,"cadetblue":6266528,"darkturquoise":52945,"azure 1":15794175,"azure":15794175,"azure 2":14741230,"azure 3":12701133,"azure 4":8620939,"lightcyan 1":14745599,"lightcyan":14745599,"lightcyan 2":13758190,"lightcyan 3":11849165,"lightcyan 4":8031115,"paleturquoise 1":12320767,"paleturquoise 2":11464430,"paleturquoise":11464430,"paleturquoise 3":9883085,"paleturquoise 4":6720395,"darkslategray":3100495,"darkslategray 1":9961471,"darkslategray 2":9301742,"darkslategray 3":7982541,"darkslategray 4":5409675,"cyan":65535,"aqua":65535,"cyan 2":61166,"cyan 3":52685,"cyan 4":35723,"darkcyan":35723,"teal":32896,"mediumturquoise":4772300,"lightseagreen":2142890,"manganeseblue":239774,"turquoise":4251856,"coldgrey":8424071,"turquoiseblue":51084,"aquamarine 1":8388564,"aquamarine":8388564,"aquamarine 2":7794374,"aquamarine 3":6737322,"mediumaquamarine":6737322,"aquamarine 4":4557684,"mediumspringgreen":64154,"mintcream":16121850,"springgreen":65407,"springgreen 1":61046,"springgreen 2":52582,"springgreen 3":35653,"mediumseagreen":3978097,"seagreen 1":5570463,"seagreen 2":5172884,"seagreen 3":4443520,"seagreen 4":3050327,"seagreen":3050327,"emeraldgreen":51543,"mint":12451017,"cobaltgreen":4034880,"honeydew 1":15794160,"honeydew":15794160,"honeydew 2":14741216,"honeydew 3":12701121,"honeydew 4":8620931,"darkseagreen":9419919,"darkseagreen 1":12713921,"darkseagreen 2":11857588,"darkseagreen 3":10210715,"darkseagreen 4":6916969,"palegreen":10025880,"palegreen 1":10157978,"palegreen 2":9498256,"lightgreen":9498256,"palegreen 3":8179068,"palegreen 4":5540692,"limegreen":3329330,"forestgreen":2263842,"green 1":65280,"lime":65280,"green 2":60928,"green 3":52480,"green 4":35584,"green":32768,"darkgreen":25600,"sapgreen":3178516,"lawngreen":8190976,"chartreuse 1":8388352,"chartreuse":8388352,"chartreuse 2":7794176,"chartreuse 3":6737152,"chartreuse 4":4557568,"greenyellow":11403055,"darkolivegreen 1":13303664,"darkolivegreen 2":12381800,"darkolivegreen 3":10669402,"darkolivegreen 4":7244605,"darkolivegreen":5597999,"olivedrab":7048739,"olivedrab 1":12648254,"olivedrab 2":11791930,"olivedrab 3":10145074,"yellowgreen":10145074,"olivedrab 4":6916898,"ivory 1":16777200,"ivory":16777200,"ivory 2":15658720,"ivory 3":13487553,"ivory 4":9145219,"beige":16119260,"lightyellow 1":16777184,"lightyellow":16777184,"lightyellow 2":15658705,"lightyellow 3":13487540,"lightyellow 4":9145210,"lightgoldenrodyellow":16448210,"yellow 1":16776960,"yellow":16776960,"yellow 2":15658496,"yellow 3":13487360,"yellow 4":9145088,"warmgrey":8421481,"olive":8421376,"darkkhaki":12433259,"khaki 1":16774799,"khaki 2":15656581,"khaki 3":13485683,"khaki 4":9143886,"khaki":15787660,"palegoldenrod":15657130,"lemonchiffon 1":16775885,"lemonchiffon":16775885,"lemonchiffon 2":15657407,"lemonchiffon 3":13486501,"lemonchiffon 4":9144688,"lightgoldenrod 1":16772235,"lightgoldenrod 2":15654018,"lightgoldenrod 3":13483632,"lightgoldenrod 4":9142604,"banana":14929751,"gold 1":16766720,"gold":16766720,"gold 2":15649024,"gold 3":13479168,"gold 4":9139456,"cornsilk 1":16775388,"cornsilk":16775388,"cornsilk 2":15657165,"cornsilk 3":13486257,"cornsilk 4":9144440,"goldenrod":14329120,"goldenrod 1":16761125,"goldenrod 2":15643682,"goldenrod 3":13474589,"goldenrod 4":9136404,"darkgoldenrod":12092939,"darkgoldenrod 1":16759055,"darkgoldenrod 2":15641870,"darkgoldenrod 3":13473036,"darkgoldenrod 4":9135368,"orange 1":16753920,"orange":16744448,"orange 2":15636992,"orange 3":13468928,"orange 4":9132544,"floralwhite":16775920,"oldlace":16643558,"wheat":16113331,"wheat 1":16771002,"wheat 2":15653038,"wheat 3":13482646,"wheat 4":9141862,"moccasin":16770229,"papayawhip":16773077,"blanchedalmond":16772045,"navajowhite 1":16768685,"navajowhite":16768685,"navajowhite 2":15650721,"navajowhite 3":13480843,"navajowhite 4":9140574,"eggshell":16574153,"tan":13808780,"brick":10249759,"cadmiumyellow":16750866,"antiquewhite":16444375,"antiquewhite 1":16773083,"antiquewhite 2":15654860,"antiquewhite 3":13484208,"antiquewhite 4":9143160,"burlywood":14596231,"burlywood 1":16765851,"burlywood 2":15648145,"burlywood 3":13478525,"burlywood 4":9139029,"bisque 1":16770244,"bisque":16770244,"bisque 2":15652279,"bisque 3":13481886,"bisque 4":9141611,"melon":14919785,"carrot":15569185,"darkorange":16747520,"darkorange 1":16744192,"darkorange 2":15627776,"darkorange 3":13460992,"darkorange 4":9127168,"tan 1":16753999,"tan 2":15637065,"tan 3":13468991,"peru":13468991,"tan 4":9132587,"linen":16445670,"peachpuff 1":16767673,"peachpuff":16767673,"peachpuff 2":15649709,"peachpuff 3":13479829,"peachpuff 4":9140069,"seashell 1":16774638,"seashell":16774638,"seashell 2":15656414,"seashell 3":13485503,"seashell 4":9143938,"sandybrown":16032864,"rawsienna":13066516,"chocolate":13789470,"chocolate 1":16744228,"chocolate 2":15627809,"chocolate 3":13461021,"chocolate 4":9127187,"saddlebrown":9127187,"ivoryblack":2696225,"flesh":16743744,"cadmiumorange":16736515,"burntsienna":9057807,"sienna":10506797,"sienna 1":16745031,"sienna 2":15628610,"sienna 3":13461561,"sienna 4":9127718,"lightsalmon 1":16752762,"lightsalmon":16752762,"lightsalmon 2":15635826,"lightsalmon 3":13468002,"lightsalmon 4":9131842,"coral":16744272,"orangered 1":16729344,"orangered":16729344,"orangered 2":15613952,"orangered 3":13448960,"orangered 4":9118976,"sepia":6170130,"darksalmon":15308410,"salmon 1":16747625,"salmon 2":15630946,"salmon 3":13463636,"salmon 4":9129017,"coral 1":16740950,"coral 2":15624784,"coral 3":13458245,"coral 4":9125423,"burntumber":9057060,"tomato 1":16737095,"tomato":16737095,"tomato 2":15621186,"tomato 3":13455161,"tomato 4":9123366,"salmon":16416882,"mistyrose 1":16770273,"mistyrose":16770273,"mistyrose 2":15652306,"mistyrose 3":13481909,"mistyrose 4":9141627,"snow 1":16775930,"snow":16775930,"snow 2":15657449,"snow 3":13486537,"snow 4":9144713,"rosybrown":12357519,"rosybrown 1":16761281,"rosybrown 2":15643828,"rosybrown 3":13474715,"rosybrown 4":9136489,"lightcoral":15761536,"indianred":13458524,"indianred 1":16738922,"indianred 2":15623011,"indianred 4":9124410,"indianred 3":13456725,"brown":10824234,"brown 1":16728128,"brown 2":15612731,"brown 3":13447987,"brown 4":9118499,"firebrick":11674146,"firebrick 1":16724016,"firebrick 2":15608876,"firebrick 3":13444646,"firebrick 4":9116186,"red 1":16711680,"red":16711680,"red 2":15597568,"red 3":13434880,"red 4":9109504,"darkred":9109504,"maroon":8388608,"sgi beet":9320590,"sgi slateblue":7434694,"sgi lightblue":8232640,"sgi teal":3706510,"sgi chartreuse":7456369,"sgi olivedrab":9342520,"sgi brightgray":12960170,"sgi salmon":13005169,"sgi darkgray":5592405,"sgi gray 12":1973790,"sgi gray 16":2631720,"sgi gray 32":5329233,"sgi gray 36":5987163,"sgi gray 52":8684676,"sgi gray 56":9342606,"sgi lightgray":11184810,"sgi gray 72":12040119,"sgi gray 76":12698049,"sgi gray 92":15395562,"sgi gray 96":16053492,"white":16777215,"white smoke":16119285,"gray 96":16119285,"gainsboro":14474460,"lightgrey":13882323,"silver":12632256,"darkgray":11119017,"gray":8421504,"dimgray":6908265,"gray 42":6908265,"black":0,"gray 99":16579836,"gray 98":16448250,"gray 97":16250871,"gray 95":15921906,"gray 94":15790320,"gray 93":15592941,"gray 92":15461355,"gray 91":15263976,"gray 90":15066597,"gray 89":14935011,"gray 88":14737632,"gray 87":14606046,"gray 86":14408667,"gray 85":14277081,"gray 84":14079702,"gray 83":13948116,"gray 82":13750737,"gray 81":13619151,"gray 80":13421772,"gray 79":13224393,"gray 78":13092807,"gray 77":12895428,"gray 76":12763842,"gray 75":12566463,"gray 74":12434877,"gray 73":12237498,"gray 72":12105912,"gray 71":11908533,"gray 70":11776947,"gray 69":11579568,"gray 68":11382189,"gray 67":11250603,"gray 66":11053224,"gray 65":10921638,"gray 64":10724259,"gray 63":10592673,"gray 62":10395294,"gray 61":10263708,"gray 60":10066329,"gray 59":9868950,"gray 58":9737364,"gray 57":9539985,"gray 56":9408399,"gray 55":9211020,"gray 54":9079434,"gray 53":8882055,"gray 52":8750469,"gray 51":8553090,"gray 50":8355711,"gray 49":8224125,"gray 48":8026746,"gray 47":7895160,"gray 46":7697781,"gray 45":7566195,"gray 44":7368816,"gray 43":7237230,"gray 40":6710886,"gray 39":6513507,"gray 38":6381921,"gray 37":6184542,"gray 36":6052956,"gray 35":5855577,"gray 34":5723991,"gray 33":5526612,"gray 32":5395026,"gray 31":5197647,"gray 30":5066061,"gray 29":4868682,"gray 28":4671303,"gray 27":4539717,"gray 26":4342338,"gray 25":4210752,"gray 24":4013373,"gray 23":3881787,"gray 22":3684408,"gray 21":3552822,"gray 20":3355443,"gray 19":3158064,"gray 18":3026478,"gray 17":2829099,"gray 16":2697513,"gray 15":2500134,"gray 14":2368548,"gray 13":2171169,"gray 12":2039583,"gray 11":1842204,"gray 10":1710618,"gray 9":1513239,"gray 8":1315860,"gray 7":1184274,"gray 6":986895,"gray 5":855309,"gray 4":657930,"gray 3":526344,"gray 2":328965,"gray 1":197379,"whitesmoke":16119285}

const _color = (name) => {
  let cl = colorNames[name]
  if (cl) return cl
  cl = colorNames[name.toLowerCase()]
  if (cl) return cl
  cl = colorNames[name.toLowerCase().replace("grey","gray")]
  if (cl) return cl
  cl = colorNames[name.toLowerCase().replace("grey","gray").replace(/\s/g, "")]
  if (cl) return cl
  return 0x000000
}

const colorList = Object.keys(colorNames)

const randInt = (min,max) => Math.floor(Math.random()*(max-min+1) + min)
const random = (min,max) => Math.floor(Math.random()*(max-min+1) + min)
const rand = (min,max) => Math.floor(Math.random()*(max-min+1) + min)

const randColor = () => {
  return colorList[randInt(0,colorList.length-1)]
}

const particleConfig = (name,textures) => {
    const configs = {
        "explosion1": {
            "lifetime": {
              "min": 0.5,
              "max": 0.5
            },
            "frequency": 0.008,
            "emitterLifetime": 0.31,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
              "x": 0,
              "y": 0
            },
            "behaviors": [
              {
                "type": "alpha",
                "config": {
                  "alpha": {
                    "list": [
                      {
                        "time": 0,
                        "value": 0.8
                      },
                      {
                        "time": 1,
                        "value": 0.1
                      }
                    ]
                  }
                }
              },
              {
                "type": "moveSpeed",
                "config": {
                  "speed": {
                    "list": [
                      {
                        "time": 0,
                        "value": 200
                      },
                      {
                        "time": 1,
                        "value": 100
                      }
                    ]
                  }
                }
              },
              {
                "type": "scale",
                "config": {
                  "scale": {
                    "list": [
                      {
                        "time": 0,
                        "value": 1
                      },
                      {
                        "time": 1,
                        "value": 0.3
                      }
                    ]
                  },
                  "minMult": 1
                }
              },
              {
                "type": "color",
                "config": {
                  "color": {
                    "list": [
                      {
                        "time": 0,
                        "value": "fb1010"
                      },
                      {
                        "time": 1,
                        "value": "f5b830"
                      }
                    ]
                  }
                }
              },
              {
                "type": "rotationStatic",
                "config": {
                  "min": 0,
                  "max": 360
                }
              },
              {
                "type": "textureRandom",
                "config": {
                    textures
                }
              },
              {
                "type": "spawnShape",
                "config": {
                  "type": "torus",
                  "data": {
                    "x": 0,
                    "y": 0,
                    "radius": 10,
                    "innerRadius": 0,
                    "affectRotation": false
                  }
                }
              }
            ]
          },
        "explosion2":{
        "lifetime": {
            "min": 0.5,
            "max": 0.5
        },
        "particlesPerWave": 10,
        "frequency": 0.1,
        "emitterLifetime": 0.31,
        "maxParticles": 1000,
        "addAtBack": false,
        "pos": {
            "x": 0,
            "y": 0
        },
        "behaviors": [
            {
                "type": "alpha",
                "config": {
                    "alpha": {
                        "list": [
                            {
                                "time": 0,
                                "value": 0.8
                            },
                            {
                                "time": 1,
                                "value": 0.1
                            }
                        ]
                    }
                }
            },
            {
                "type": "moveSpeedStatic",
                "config": {
                    "min": 200,
                    "max": 200
                }
            },
            {
                "type": "scale",
                "config": {
                    "scale": {
                        "list": [
                            {
                                "time": 0,
                                "value": 1
                            },
                            {
                                "time": 1,
                                "value": 0.3
                            }
                        ]
                    },
                    "minMult": 1
                }
            },
            {
                "type": "color",
                "config": {
                    "color": {
                        "list": [
                            {
                                "time": 0,
                                "value": "fd1111"
                            },
                            {
                                "time": 1,
                                "value": "f7a134"
                            }
                        ]
                    }
                }
            },
            {
                "type": "textureRandom",
                "config": {
                    textures
                }
            },
            {
                "type": "spawnBurst",
                "config": {
                    "start": 0,
                    "spacing": 0,
                    "distance": 0
                }
            }
        ]
        },
        "explosion3":{
            "lifetime": {
                "min": 0.5,
                "max": 1
            },
            "ease": [
                {
                    "s": 0,
                    "cp": 0.329,
                    "e": 0.548
                },
                {
                    "s": 0.548,
                    "cp": 0.767,
                    "e": 0.876
                },
                {
                    "s": 0.876,
                    "cp": 0.985,
                    "e": 1
                }
            ],
            "frequency": 0.001,
            "emitterLifetime": 0.1,
            "maxParticles": 100,
            "addAtBack": true,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.74
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 700
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 5
                                },
                                {
                                    "time": 1,
                                    "value": 1.2
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "ffdfa0"
                                },
                                {
                                    "time": 1,
                                    "value": "100f0c"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 200,
                        "minStart": 0,
                        "maxStart": 360
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnPoint",
                    "config": {}
                }
            ]
        },
        "explosionRing":{
            "lifetime": {
                "min": 0.5,
                "max": 0.5
            },
            "frequency": 0.008,
            "emitterLifetime": 0.31,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.8
                                },
                                {
                                    "time": 1,
                                    "value": 0.1
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 200
                                },
                                {
                                    "time": 1,
                                    "value": 100
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.3
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "fb1010"
                                },
                                {
                                    "time": 1,
                                    "value": "f5b830"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 40,
                            "innerRadius": 39,
                            "affectRotation": true
                        }
                    }
                }
            ]
        },
        "megamanDeath":{
            "lifetime": {
                "min": 0.8,
                "max": 0.8
            },
            "particlesPerWave": 8,
            "frequency": 0.2,
            "emitterLifetime": 0.41,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.8
                                },
                                {
                                    "time": 1,
                                    "value": 0.7
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 200,
                        "max": 200
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.3
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "e3f9ff"
                                },
                                {
                                    "time": 1,
                                    "value": "0ec8f8"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnBurst",
                    "config": {
                        "start": 0,
                        "spacing": 45,
                        "distance": 0
                    }
                }
            ]
        },
        "rain":{
            "lifetime": {
                "min": 0.81,
                "max": 0.81
            },
            "frequency": 0.004,
            "emitterLifetime": 0,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alphaStatic",
                    "config": {
                        "alpha": 0.5
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 3000,
                        "max": 3000
                    }
                },
                {
                    "type": "scaleStatic",
                    "config": {
                        "min": 1,
                        "max": 1
                    }
                },
                {
                    "type": "rotationStatic",
                    "config": {
                        "min": 65,
                        "max": 65
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "rect",
                        "data": {
                            "x": -600,
                            "y": -460,
                            "w": 900,
                            "h": 20
                        }
                    }
                }
            ]
        },
        "bubbles":{
            "lifetime": {
                "min": 4,
                "max": 4
            },
            "frequency": 0.016,
            "emitterLifetime": 0,
            "maxParticles": 500,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.22
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 200
                                },
                                {
                                    "time": 1,
                                    "value": 50
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.25
                                },
                                {
                                    "time": 1,
                                    "value": 0.75
                                }
                            ]
                        },
                        "minMult": 0.5
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 10,
                        "minStart": 0,
                        "maxStart": 360
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnPoint",
                    "config": {}
                }
            ]
        },
        "bubbleSpray":{
            "lifetime": {
                "min": 0.5,
                "max": 1
            },
            "frequency": 0.008,
            "emitterLifetime": 0.15,
            "maxParticles": 500,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.12
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 600
                                },
                                {
                                    "time": 1,
                                    "value": 200
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.01
                                },
                                {
                                    "time": 1,
                                    "value": 0.8
                                }
                            ]
                        },
                        "minMult": 0.5
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 10,
                        "minStart": 260,
                        "maxStart": 280
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnPoint",
                    "config": {}
                }
            ]
        },
        "bubbleStream":{
            "lifetime": {
                "min": 1.8,
                "max": 2
            },
            "frequency": 0.1,
            "emitterLifetime": 0,
            "maxParticles": 500,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.16
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 600
                                },
                                {
                                    "time": 1,
                                    "value": 200
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.3
                                },
                                {
                                    "time": 1,
                                    "value": 0.6
                                }
                            ]
                        },
                        "minMult": 0.5
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 20,
                        "minStart": 267,
                        "maxStart": 273
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnPoint",
                    "config": {}
                }
            ]
        },
        "bubbleVertical":{
            "lifetime": {
                "min": 3.5,
                "max": 4
            },
            "frequency": 0.016,
            "emitterLifetime": 0,
            "maxParticles": 500,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.22
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 200,
                        "max": 200
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.25
                                },
                                {
                                    "time": 1,
                                    "value": 0.5
                                }
                            ]
                        },
                        "minMult": 0.5
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 50,
                        "minStart": 260,
                        "maxStart": 280
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "rect",
                        "data": {
                            "x": -450,
                            "y": 200,
                            "w": 900,
                            "h": 0
                        }
                    }
                }
            ]
        },
        "flame":{
            "lifetime": {
                "min": 0.1,
                "max": 0.75
            },
            "frequency": 0.001,
            "emitterLifetime": 0,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.62
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 500,
                        "max": 500
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.25
                                },
                                {
                                    "time": 1,
                                    "value": 0.75
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "fff191"
                                },
                                {
                                    "time": 1,
                                    "value": "ff622c"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 50,
                        "maxSpeed": 50,
                        "minStart": 265,
                        "maxStart": 275
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 10,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        },
        "gas":{
            "lifetime": {
                "min": 2,
                "max": 1.8
            },
            "frequency": 0.01,
            "emitterLifetime": 0,
            "maxParticles": 1000,
            "addAtBack": true,
            "pos": {
                "x": 0.5,
                "y": 0.5
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.4
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 10,
                        "max": 10
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 2
                                },
                                {
                                    "time": 1,
                                    "value": 0.4
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "6bff61"
                                },
                                {
                                    "time": 1,
                                    "value": "d8ff4a"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotationStatic",
                    "config": {
                        "min": 0,
                        "max": 360
                    }
                },
                {
                    "type": "blendMode",
                    "config": {
                        "blendMode": "screen"
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 150,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        },
        "cartoonSmoke":{
            "lifetime": {
                "min": 0.4,
                "max": 0.7
            },
            "frequency": 0.001,
            "emitterLifetime": 0.2,
            "maxParticles": 100,
            "addAtBack": true,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.74
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 700
                                },
                                {
                                    "time": 1,
                                    "value": 50
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.1
                                },
                                {
                                    "time": 1,
                                    "value": 1.2
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "eb8b58"
                                },
                                {
                                    "time": 1,
                                    "value": "575757"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 200,
                        "minStart": 0,
                        "maxStart": 360
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnPoint",
                    "config": {}
                }
            ]
        },
        "cartoonSmokeBlast":{
            "lifetime": {
                "min": 0.5,
                "max": 0.7
            },
            "frequency": 0.008,
            "emitterLifetime": 0.15,
            "maxParticles": 500,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 600
                                },
                                {
                                    "time": 1,
                                    "value": 200
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.1
                                },
                                {
                                    "time": 1,
                                    "value": 1.5
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 20,
                        "minStart": 260,
                        "maxStart": 280
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnPoint",
                    "config": {}
                }
            ]
        },
        "snow":{
            "lifetime": {
                "min": 4,
                "max": 4
            },
            "ease": [
                {
                    "s": 0,
                    "cp": 0.379,
                    "e": 0.548
                },
                {
                    "s": 0.548,
                    "cp": 0.717,
                    "e": 0.676
                },
                {
                    "s": 0.676,
                    "cp": 0.635,
                    "e": 1
                }
            ],
            "frequency": 0.004,
            "emitterLifetime": 0,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.73
                                },
                                {
                                    "time": 1,
                                    "value": 0.46
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 200,
                        "max": 200
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.15
                                },
                                {
                                    "time": 1,
                                    "value": 0.2
                                }
                            ]
                        },
                        "minMult": 0.5
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 200,
                        "minStart": 50,
                        "maxStart": 70
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "rect",
                        "data": {
                            "x": -500,
                            "y": -300,
                            "w": 900,
                            "h": 20
                        }
                    }
                }
            ]
        },
        "sparks":{
            "lifetime": {
                "min": 0.25,
                "max": 0.5
            },
            "frequency": 0.001,
            "emitterLifetime": 0,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.31
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeed",
                    "config": {
                        "speed": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1000
                                },
                                {
                                    "time": 1,
                                    "value": 200
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.5
                                },
                                {
                                    "time": 1,
                                    "value": 1
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "ffffff"
                                },
                                {
                                    "time": 1,
                                    "value": "9ff3ff"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 0,
                        "maxSpeed": 20,
                        "minStart": 225,
                        "maxStart": 320
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 0,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        },
        "fountain":{
            "lifetime": {
                "min": 0.25,
                "max": 0.5
            },
            "frequency": 0.001,
            "emitterLifetime": 0,
            "maxParticles": 1000,
            "addAtBack": false,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1
                                },
                                {
                                    "time": 1,
                                    "value": 0.31
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveAcceleration",
                    "config": {
                        "accel": {
                            "x": 0,
                            "y": 2000
                        },
                        "minStart": 600,
                        "maxStart": 600,
                        "rotate": true
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.5
                                },
                                {
                                    "time": 1,
                                    "value": 1
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": "ffffff"
                                },
                                {
                                    "time": 1,
                                    "value": "9ff3ff"
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotationStatic",
                    "config": {
                        "min": 260,
                        "max": 280
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        textures
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 0,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        },
    }

    return configs[name]
  }