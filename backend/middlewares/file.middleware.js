const multer = require("multer");
const path = require("path");
//Set Storage engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, //limit 1Mb
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb); // Check file ext
  },
}).single("file"); // input name

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif|webp/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extName) {
    return cb(null, true);
  } else {
    cb("Error: Image Only!");
  }
}
//upload to firebase storage

// async function uploadToFirebase(req, res, next) {
//   if (!req.file) {
//     return res.status(400).json ({ message: "Image is required"});
//   }
//   //save location 
//   const storageRef =  ref(firebaseStorage, ``)
// }

// try {
//   const snapshot = await uploadBytesResumable(storageRef, req.file, metadata);
//   req.file.firebaseUrl =  await getDownloadURL(snapshot.ref);
//   naxt();
// } catch (error) {
//   res.status(500).json({
//     message: 
//     error.message || "Something wen  wrong while uploading to firebase",
//   });
// }

module.exports = { upload };