let express = require('express');
let router = express.Router();
//Local route variables  
let currentDate = new Date();
currentDate = currentDate.toLocaleString();

/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('index', { 
    title: 'Express',
    date: currentDate
  });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { 
    title: 'About',
  });
});

module.exports = router;
