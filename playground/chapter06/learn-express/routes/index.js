const express = require('express');
const router = express.Router();

router.get(
  '/',
  (req, res, next) => {
    res.render('index', { title: 'Express' });
    next('route');
  },
  function (req, res, next) {
    console.log('실행되지 않습니다.');
    next();
  },
  function (req, res, next) {
    console.log('실행되지 않습니다.');
    next();
  }
);

// GET / 라우터
router.get('/', (req, res) => {
  res.send('Hello, Express');
});

module.exports = router;
