//aquire crud and call in line 14
const modelOperation=require('../helpers/modelCrud');
exports.upload = (req, res) => {
  //  console.log("Req body is file",req.body);
   // console.log("req file",req.file);
    let file = req.file;
    let extname=file.originalname.split('.')[1];

    data = JSON.parse(JSON.stringify(req.body));
    modelOperation.uploadModel(data,res);
      if(!file) {
        res.status(500);
        res.json('file not found');
        return;
      }
      let fileUpload = req.bucket.file(req.body.uid+req.body.mid+"."+extname);
    // Get File from request Form data.
    fileUpload.save(new Buffer(file.buffer)).then(  
        result => {
          console.log("file uploaded sucessfully");
        //  res.status(200);
        //  res.json('file uploaded successfully');
        },
        error => {
          res.status(500);
          console.log(error);
          res.json({error: error});
        }
      );
    };