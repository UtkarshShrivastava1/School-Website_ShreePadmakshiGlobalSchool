const express = require('express');
const  {
  createNews,
  getAllNews,
  getNewsById,
  deleteNews,
} = require('../controllers/latestnews.js');

const router = express.Router();
router.get('/', getAllNews);
router.post('/create', createNews);

router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);


// | Method | Endpoint           | Description            |
// | ------ | ------------------ | ---------------------- |
// | POST   | `/api/latestnews/create` | Create a news item     |
// | GET    | `/api/latestnews/`        | Get all news           |
// | GET    | `/api/latestnews/:id`    | Get a single news item |
// | DELETE | `/api/latestnews/:id`    | Delete a news item     |

module.exports = router;
