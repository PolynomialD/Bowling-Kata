const BowlingGame = require('../src/BowlingGame')
const Gen = require('verify-it').Gen

describe('BowlingGame', () => {
  describe('should return the correct score', () => {

      verify.it('for 1 frame (no strikes or spares)', Gen.integerBetween(0, 5), Gen.integerBetween(1, 4), (roll1, roll2) => {
        const bowlingGame = new BowlingGame()
        const expectedTotal = roll1 + roll2
        
        bowlingGame.roll(roll1)
        bowlingGame.roll(roll2)
        bowlingGame.getScore().should.eql(expectedTotal)
      })

      verify.it('for a spare', Gen.integerBetween(1, 9), Gen.integerBetween(1, 9), (roll1, roll3) => {
        const roll2 = 10 - roll1
        const bowlingGame = new BowlingGame()
        const expectedTotal = roll1 + roll2 + (roll3*2)


        bowlingGame.roll(roll1)
        bowlingGame.roll(roll2)
        bowlingGame.roll(roll3)
        bowlingGame.getScore().should.eql(expectedTotal)
      })

      verify.it('for a strike', Gen.integerBetween(1, 4), Gen.integerBetween(1, 5), (roll2, roll3) => {
        const roll1 = 10
        const bowlingGame = new BowlingGame()
        const expectedTotal = roll1 + (roll2*2) + (roll3*2)


        bowlingGame.roll(roll1)
        bowlingGame.roll(roll2)
        bowlingGame.roll(roll3)
        bowlingGame.getScore().should.eql(expectedTotal)
      })

      verify.it('for a perfect game', () => {
        const bowlingGame = new BowlingGame()
        for (let i=0; i<12; i++) {
          bowlingGame.roll(10)
        }
        bowlingGame.getScore().should.eql(300)

      })

      verify.it('for a typical game (no final strikes or spares)', () => {
        const bowlingGame = new BowlingGame()
        const rolls = [
          10, 
          7, 3, 
          9, 0, 
          10, 
          0, 8, 
          8, 2, 
          0, 6, 
          10, 
          10, 
          7, 2]
        rolls.forEach((roll) => {
          bowlingGame.roll(roll)
        })
        
        bowlingGame.getScore().should.eql(145)

      })

      verify.it('for a typical game with final strikes and spares', () => {
        const bowlingGame = new BowlingGame()
        const rolls = [
          10, 
          7, 3, 
          9, 0, 
          10, 
          0, 8, 
          8, 2, 
          0, 6, 
          10, 
          10, 
          10, 8, 1]
        rolls.forEach((roll) => {
          bowlingGame.roll(roll)
        })
        
        bowlingGame.getScore().should.eql(167)

      })
  })
})
