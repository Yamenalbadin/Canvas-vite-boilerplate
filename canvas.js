import { randomIntFromRange, randomColor, distance } from './utils'

const dpr = 2
let canvasWidth = 0
let canvasHeight = 0
const text = 'HTML CANVAS BOILERPLATE'
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const setCanvasDimensions = () => {
  canvasWidth = innerWidth
  canvasHeight = innerHeight
  canvas.width = canvasWidth * dpr
  canvas.height = canvasHeight * dpr
  canvas.style.width = canvasWidth + "px"
  canvas.style.height = canvasHeight + "px"
}

setCanvasDimensions()

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}


// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  setCanvasDimensions()
  init()
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

// Implementation
let objects
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.font = "60px Helvatica"
  c.textBaseline = "middle"
  c.textAlign = "left"

  c.fillText(text, mouse.x*dpr, mouse.y*dpr)
  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
animate()
