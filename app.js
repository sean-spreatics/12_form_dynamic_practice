const express = require('express');
const app = express();
const PORT = 8002;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const realId = 'banana';
const realPw = '4321';

app.get('/', function (req, res) {
  res.render('index', { title: '동적 폼 실습' });
});

app.get('/practice29', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/practice30', function (req, res) {
  console.log(req.body);

  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ data: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
  // res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
