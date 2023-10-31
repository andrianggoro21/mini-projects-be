// const path = require('path');
// const multer = require('multer');

// const eventStorage = multer.diskStorage({
//     destination: (req, res, cb)=> {
//         cb(null, path.join(__dirname, "../public/images/event"));
//     },
//     filename: (req, res, cb)=> {
//         const { username } = req.user;
//         cb(null, `event_${username}-${Date.now()}-${file.originalName}`);
//     }
// });

// const avatarStorage = multer.diskStorage({
//     destination: (req, res, cb)=> {
//         cb(null, path.join(__dirname, "../public/images/event"));
//     },
//     filename: (req, res, cb)=> {
//         const { username } = req.user;
//         cb(null, `avatar${username}-${Date.now()}-${file.originalName}`);
//     }
// }); 

// const fileFilter = (req, res, cb) => {
//     const fileType = file.minetype.split("/")[1];
//     if (
//         fileType === "png" ||
//         fileType === "jpg" ||
//         fileType === "jpeg" ||
//         fileType === "gif"
//     ) {
//         cb (null, true);
//     } else {
//         cb("File type not allowed", false);
//     }
// };

// const limits = {
//     fileSize: 1024 * 1024,
// };

// const uploadEventFile = multer ({
//     storage: eventStorage,
//     fileFilter,
//     limits,
// }).single("image");

// const avatarEventFile = multer({
//     storage: avatarStorage,
//     fileFilter,
//     limits,
// }).single("avatar");

// module.exports = {
//     uploadEventFile,
//     avatarEventFile,

// };

