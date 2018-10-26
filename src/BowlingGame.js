class BowlingGame {

  constructor () {
    this.score = [...Array(10)].map(x => Array())
    this.frame = 1
    this.bonus = 0
  }

  frameTotal (array) {
    return array.filter((elem,index,self) => {
      return index == self.indexOf(elem)
    }).reduce((acc,num) => {return acc+num})
  }

  getScore () {
    let flatScore = this.score.reduce((acc,num) => {return acc.concat(num)})
    return flatScore.reduce((acc,num) => acc+num)
  }

  thisFrame () {
    return Math.floor(this.frame-1)
  }

  addBonusesFromPreviousFrame(pins) {
    if(this.bonus > 2) {
      this.score[this.thisFrame()].push(pins,pins)
      this.bonus -= 2
    } else { 
        if(this.bonus > 0) {
          this.score[this.thisFrame()].push(pins)
          this.bonus -= 1
        }
      }
  }

  calculateBonusesForNextFrame (pins) {
    if(this.frame < 10 && pins === 10) {
      this.bonus += 2
      this.frame += 0.5
    } else { 
        if(this.frame < 10 && this.frameTotal(this.score[this.thisFrame()]) === 10) {
          this.bonus += 1
        }
      }
  }

  roll (pins) {
    this.score[this.thisFrame()].push(pins)
    this.addBonusesFromPreviousFrame(pins)
    this.calculateBonusesForNextFrame (pins)
    if(this.frame < 10) this.frame += 0.5
  }
}

module.exports = BowlingGame
