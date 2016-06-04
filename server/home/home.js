import express from 'express'
import { db } from '../config'
import path from 'path'

export const router = express.Router()

router.get('/', (req, res) => {
  const query = `SELECT * FROM posts`
  db.query(query, (err, result) => {
    res.render(path.resolve(__dirname, 'views/index.jade'), {
      posts: result.reverse()
    })
  })
})

// INSERT INTO posts (id, title, date, action, text, hashtags, gallery) VALUES ('4', 'Everythin in the universe has a rhytm, everything dances', 'Sep 24', 'I Do Photos', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laboriosam incidunt itaque consectetur modi, eos ipsa, totam accusamus dicta dolorum ipsam sunt dolores reiciendis saepe! Nam iure, quos voluptatibus distinctio.', '#Yosemite #Photo #Hi-res', '["//static.pexels.com/photos/24641/pexels-photo-24641-large.jpg", "//static.pexels.com/photos/96491/pexels-photo-96491-large.jpeg", "//static.pexels.com/photos/5129/person-mountain-hiker-hiking-large.jpg", "//static.pexels.com/photos/27111/pexels-photo-27111-large.jpg"]')
