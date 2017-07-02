import {card, decklist} from 'nrdb'
import compare from '../util/compare'

export default (app) => {
  app.get('/', async (req, res) => {
    try {
      res.render('index')
    }
    catch(e) {
      console.log(e);
      res.sendStatus(400)
    }
  })
  
  app.get('/:firstID/:secondID', async (req, res) => {
    let {firstID} = req.params
    let {secondID} = req.params

    const deck1 = await decklist(firstID)
    const deck2 = await decklist(secondID)

    try {
      const first = deck1[0].cards
      const second = deck2[0].cards

      let firstCards = []
      for(let each in first) {
        let c = await card(each)
        firstCards.push({
          "card": c,
          "quantity": first[each]
        })
      }

      let secondCards = []
      for(let each in second) {
        let c = await card(each)
        secondCards.push({
          "card": c,
          "quantity": second[each]
        })
      }

      const obj = {
        firstName: deck1[0].name,
        secondName: deck2[0].name,
        first: firstCards,
        second: secondCards,
        compare: compare(first, second)
      }

      res.render('index', obj)
    }
    catch(e) {
      console.log(e);
      res.sendStatus(400)
    }
  })
}
