class BowlingGame {
  constructor () {
    this.frameNumber = 0
    this.frames = []
  } 

  roll (pins) {
    const isFirstRoll = this.frameNumber % 1 === 0 
    if (isFirstRoll) {

      this.frames.push({
        roll1: pins,
        roll2: 0
      })
      if (pins === 10) {
        this.frameNumber += 0.5
      }
    } else {
      const frameNumber = Math.floor(this.frameNumber)
      const currentFrame = this.frames[frameNumber]
      currentFrame.roll2 = pins
      this.frames[frameNumber] = currentFrame
    }
    this.frameNumber += 0.5
  }

  getScore () {
    const frameScores = this.calculateScores()
    console.log(frameScores)
    return frameScores.reduce((total, frameScore) => total+frameScore)
  }

  calculateScores() {
    return this.frames.map((frame, index) => {
      const frameScore = frame.roll1 + frame.roll2
      const isSpare = (frame.roll1 + frame.roll2) === 10

      if (index < 10) {
        if (this.isStrike(frame)) {
          const nextFrame = this.frames[index+1]
          if (this.isStrike(nextFrame)) {
            return frameScore + nextFrame.roll1 + this.frames[index+2].roll1
          } else {
            return frameScore + nextFrame.roll1 + nextFrame.roll2
          }
        } else if (isSpare) {
          return frameScore + this.frames[index+1].roll1
        } else {
          return frameScore
        }
      } else {
        return 0
      }
    })
  }

  isStrike(frame) {
    return frame.roll1 === 10
  }

}

module.exports = BowlingGame
