const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');
const unlink_file = util.promisify(fs.unlink)
const cors = require('cors')

const multer = require('multer');
const upload = multer({ dest : 'uploads/' });
const { uploadFile , getFileStream } = require('./s3');

const App = express();

App.use(express.static('public'));

App.use(cors());

App.get('/',(req,res) => {
  //res.send('this is from express Server');
  res.sendFile(path.resolve(__dirname) + '/public/home.html');
});

//App.post('/post',(req,res) => {
App.post('/post', upload.single('file_img') ,async (req,res) => {
  //console.log(req.body);
  //console.log(req.file);
  const result = await uploadFile(req.file);
  //console.log("result from s3",result);
  await unlink_file(req.file.path);
  //console.log(req.body.input);
  //console.log(req.body.input2);
  res.send(`http://127.0.0.1:3001/images/${result.Key}`);
});


App.get('/images/:key',(req,res) => {
  const key = req.params.key
  const readStream = getFileStream(key)
  readStream.pipe(res)
})

App.get('/get_imp',(req,res) => {
  res.sendFile(path.resolve(__dirname) + '/uploads/e31589c946859b656663232e8f36f286')
})

const port =  process.env.port || 3001;

App.listen(port,() => { 
  console.log(`listening....`);
  console.log(`127.0.0.1:${port}`);
});