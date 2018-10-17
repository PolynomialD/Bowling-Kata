class BowlingGame {

  rollPins (input) {
    let pins = input * Math.floor(Math.random() * 10)
    let score = []
    score.push(pins)
    return score
  }

  getScore () {
    return rollPins().reduce((a,b) => a+b)
  }
}

module.exports = BowlingGame
