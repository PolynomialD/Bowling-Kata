class BowlingGame {

  constructor () {
    this.score = [...Array(10)].map(x => Array())
    this.frames = 1
    this.bonus = 0
  }
  roll (pins) {
    console.log('frame', this.frames)
    console.log('bonus',this.bonus)
    let frame = Math.floor(this.frames-1)

    this.score[frame].push(pins)

    if(this.bonus > 2) {
      this.score[frame].push(pins,pins)
      this.bonus -= 2
      } else { if(this.bonus > 0) {
        this.score[frame].push(pins)
        this.bonus -= 1
      }
    }
    let frameTotal = this.score.reduce((a,n) => {return a.concat(n)}).reduce((a,n) => a+n)
    if(pins === 10) {
      this.bonus += 2;
      if(this.frames < 10) {this.frames += 0.5}
    } else { if(frameTotal === 10) {
      this.bonus += 1
      }
    }
    if(this.frames < 10) this.frames += 0.5
    console.log('score', this.score)
  }
    getScore () {
    let flatScore = this.score.reduce((a,n) => {return a.concat(n)})
    return flatScore.reduce((a,n) => a+n)
    }
}

module.exports = BowlingGame
