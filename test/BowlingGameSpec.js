const BowlingGame = require('../src/BowlingGame')

describe('Write a BowlingGame object with methods roll(pins) and getScore()', () => {
  verify.it('Is an object with methods rollPins() and getScore()', () => {
    const bowlingGame = new BowlingGame()
    bowlingGame.rollPins(1).should.eql(1)
  })
})