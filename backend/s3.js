require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const region = process.env.AWS_BUCKET_REGION;
const bucketName = process.env.AWS_BUCKET_NAKE;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({require,accessKeyId,secretAccessKey});

//funtion uploading file to s3 
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);
  
  const uploadParameters = {
    Bucket : bucketName,
    Body : fileStream,
    Key : file.filename
  }
  return s3.upload(uploadParameters).promise()
}

//funtion getting gile from s3
function getFileStream(fileKey) {
  const parameters = { Key : fileKey , Bucket : bucketName }
  
  return s3.getObject(parameters).createReadStream()
}



exports.uploadFile = uploadFile;
exports.getFileStream = getFileStream;