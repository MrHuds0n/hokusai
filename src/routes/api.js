import {decklist} from 'nrdb'
import compare from '../util/compare'

export default (app) => {
  app.get('/compare/:firstID/:secondID', async (req, res) => {
    let {firstID} = req.params
    let {secondID} = req.params

    const deck1 = await decklist(firstID)
    const deck2 = await decklist(secondID)

    try {
      const first = deck1[0].cards
      const second = deck2[0].cards

      res.send(compare(first, second))
    }
    catch(e) {
      console.log(e);
      res.sendStatus(400)
    }
  })
}
