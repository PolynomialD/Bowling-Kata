class BowlingGame {

  constructor () {
    this.score = [...Array(12)].map(x => Array())
    this.frame = 1
    this.bonus = 0
  }
  roll (pins) {
    this.score[Math.floor(this.frame-1)].push(pins)
    console.log('initial array', this.score)

    if(this.bonus > 0 && this.bonus < 3) {
      this.score[Math.floor(this.frame-1)].push(pins)
      console.log('array with bonus',this.score)
      this.bonus -= 1
      } else { if(this.bonus > 2) {
        this.score[Math.floor(this.frame-1)].push(pins,pins)
        this.bonus -= 2
    }
  }
  let frameTotal = this.score.reduce((a,n) => {return a.concat(n)}).reduce((a,n) => a+n)
    if(pins === 10) {
      this.bonus += 2
      this.frame += 0.5
    } else { if(frameTotal === 10) {
      this.bonus += 1
    }
  }
    this.frame += 0.5
    console.log('score', this.score)
    console.log('frame', this.frame)
    console.log('bonus',this.bonus)


  }
  getScore () {
  let flatScore = this.score.reduce((a,n) => {return a.concat(n)})
  console.log('flatscore array', flatScore)
  return flatScore.reduce((a,n) => a+n)
  }
}

module.exports = BowlingGame
