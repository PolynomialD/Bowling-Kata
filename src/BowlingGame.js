class BowlingGame {

  constructor () {
    this.score = [...Array(10)].map(x => Array())
    this.frame = 1
    this.bonus = 0
  }
  frameTotal (array) {
    let spareCheck = array.filter((elem,index,self) => {
      return index == self.indexOf(elem)
    })
    return spareCheck.reduce((acc,num) => {return acc+num})
  }
  getScore () {
  let flatScore = this.score.reduce((acc,num) => {return acc.concat(num)})
  return flatScore.reduce((acc,num) => acc+num)
  }

  roll (pins) {
    let frame = Math.floor(this.frame-1)

    this.score[frame].push(pins)

    if(this.bonus > 2) {                        // add bonuses from previous frame
      this.score[frame].push(pins,pins)
      this.bonus -= 2
      } else { if(this.bonus > 0) {
        this.score[frame].push(pins)
        this.bonus -= 1
      }
    }
    if(pins === 10 && this.frame !== 10) {     // calculate bonuses for next frame
      this.bonus += 2;
      if(this.frame < 10) this.frame += 0.5
    } else { if(this.frameTotal(this.score[frame]) === 10 && this.frame !== 10) {
      this.bonus += 1
      }
    }
    if(this.frame < 10) this.frame += 0.5
  }
}

module.exports = BowlingGame
