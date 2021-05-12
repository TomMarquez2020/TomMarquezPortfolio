const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const testRouter = express.Router();

// this is for the api
testRouter.route('/test')
 .get((req, res) => {
   const response = { hello: 'Testing this shiz '};

   res.json(response);
 });
 app.use('/api', testRouter);

// this is to server webpages
app.use(express.static('pages'));

// app.get('/', (req, res) => {
//   res.send('what up peeps');
// });

app.listen(port, () => {
  console.log(`running on port  ${port}`);
});
