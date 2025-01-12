const admin = require("firebase-admin");


const serviceAccount = require("./path/to/serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "YOUR_PROJECT_ID.appspot.com", 
  });
}

const bucket = admin.storage().bucket();
module.exports = { bucket };
