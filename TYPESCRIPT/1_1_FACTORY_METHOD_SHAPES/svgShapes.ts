class Shape {
  canvasHeight: number
  canvasWidth: number
  lineWidth: number
  strokeColor: string
  fillColor: string
  constructor (
    canvasHeight: number,
    canvasWidth: number,
    lineWidth: number,
    strokeColor: string,
    fillColor: string) {
    this.canvasHeight = canvasHeight
    this.canvasWidth = canvasWidth
    this.lineWidth = lineWidth
    this.strokeColor = strokeColor
    this.fillColor = fillColor
  }

  public createCanvasRenderingContext (): CanvasRenderingContext2D {
    const body = document.querySelector('body') as HTMLBodyElement
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.height = this.canvasHeight
    canvas.width = this.canvasWidth
    body.appendChild(canvas)
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    return context
  }
}

class Square extends Shape {
  startingPoint: [number, number]
  sideLength: number
  constructor (canvasHeight: number, canvasWidth: number, lineWidth: number, strokeColor: string, fillColor: string, startingPoint: [number, number], sideLength: number) {
    super(canvasHeight, canvasWidth, lineWidth, strokeColor, fillColor)
    this.startingPoint = startingPoint
    this.sideLength = sideLength
  }

  public draw (): void {
    const context = this.createCanvasRenderingContext()
    context.lineWidth = this.lineWidth
    context.rect(this.startingPoint[0], this.startingPoint[1], this.sideLength, this.sideLength)
    context.fillStyle = this.fillColor
    context.strokeStyle = this.strokeColor
    context.fill()
    context.stroke()
  }
}

class Circle extends Shape {
  center: [number, number]
  radius: number
  constructor (canvasHeight: number, canvasWidth: number, lineWidth: number, strokeColor: string, fillColor: string, center: [number, number], radius: number) {
    super(canvasHeight, canvasWidth, lineWidth, strokeColor, fillColor)
    this.center = center
    this.radius = radius
  }

  public draw (): void {
    const context = this.createCanvasRenderingContext()
    context.arc(this.center[0], this.center[1], this.radius, 0, 2 * Math.PI)
    context.fillStyle = this.fillColor
    context.strokeStyle = this.strokeColor
    context.fill()
    context.stroke()
  }
}

const myCircle = new Circle(200, 200, 70, 'red', 'blue', [100, 100], 40)
myCircle.draw()

const mySquare = new Square(500, 400, 7, 'yellow', 'blue', [20, 100], 150)
mySquare.draw()
