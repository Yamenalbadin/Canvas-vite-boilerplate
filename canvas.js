import { randomIntFromRange, randomColor, distance } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const dpr = 2
let canvasWidth = 0
let canvasHeight = 0
const text = 'mag'
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
const magnificationFactor = 2
const magnificationRadius = 1
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}
const magPosition = {
  x: 0,
  y: 0
}

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
  handleMouseMove(event)
})

addEventListener('resize', () => {
  setCanvasDimensions()
  init()
  drawText()
})

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

class textObject {
  constructor(x, y, text, color) {
    this.x = x
    this.y = y
    this.text = text
    this.color = color
  }
  drawText (size) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = this.color;
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'white';
    c.font = size + 'px Helvetica';
    c.textBaseline = 'middle';
    c.textAlign = 'center';
    c.fillText(this.text, this.x, this.y);
  };

}

const Text = new textObject(canvas.width/2/dpr, canvas.height/2/dpr, "test", colors[3])
Text.drawText(500)

const setCanvasDimensions = () => {
  canvasWidth = innerWidth
  canvasHeight = innerHeight
  canvas.width = canvasWidth * dpr
  canvas.height = canvasHeight * dpr
  canvas.style.width = canvasWidth + "px"
  canvas.style.height = canvasHeight + "px"
}
setCanvasDimensions()


const drawText = (size) => {
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillStyle = colors[0]
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.fillStyle = 'white'
  c.font = "60px Helvatica"
  c.textBaseline = "middle"
  c.textAlign = "center"
  // c.fillText(text, mouse.x*dpr, mouse.y*dpr)
  c.fillText(text, canvas.width/2, canvas.height/2)
}

const magnifyText = (x, y) => {
  c.save()
  c.beginPath();
  c.arc(x, y, magnificationRadius, 0, 2 * Math.PI)
  c.lineWidth = 1
  c.globalAlpha = 1
  c.strokeStyle = 'black'
  c.stroke()
  c.clip()

  const sourceWidth = magnificationRadius * 2 * dpr
  const sourceHeight = magnificationRadius * 2 * dpr

  c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillStyle = colors[0]
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.fillStyle = "white"
  c.font = "60px Helvatica"
  const X = canvas.width/2 - x
  const Y = canvas.height/2 - y
  c.textBaseline = "middle"
  c.textAlign = "center"
  c.fillText(text, X, Y)
  c.restore()
}


// Implementation
let objects
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

const handleMouseMove = (e) => {
  const rect = canvas.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  // drawText(12)
  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
drawText(12)

// animate()
