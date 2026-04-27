
// for login-signup 
//  let express=  require('express')
// //    let mongoose=      require('mongoose')
// //    let User=    require('./user')
// //    let bcrypt=    require('bcrypt')
// //    let sentOtp = require('./twilioService')
// // // npm i mongoose
// // // npm i bcrypt
// // // npm i express
//  let app=     express()
//  app.listen(4000,()=>{
//    console.log("hehe");
//  })
//  app.use(express.json())
// //  mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
// //  then(()=>{
// //     console.log("db conneted...");
// //  })
// //  app.get('/',(req,res)=>{
// //     res.send("hiii")
// //  })
// //  app.post('/create',  async(req,res)=>{
// //           let {userName,email,passWord}=   req.body
// //       console.log(userName,email ,"heheh");
// //      let user=     await  User.findOne({email})
// //      console.log(user,"hiiii");
// //      if(user){
// //         res.send("user jinda haiii")
// //      }
// //          let updatedP=     await  bcrypt.hash(passWord,10)
// //          console.log(updatedP,"HEH");
// //         let userData=   new  User({
// //             userName,
// //             email,
// //             passWord:updatedP
// //          })
// //               await userData.save()
// //               res.send("account ban gya hai....")
// //             //   console.log(userName,email, passWord);
// //  })
// //  app.post("/login",async(req,res)=>{
// //     let {email,passWord}=   req.body
// //        let userInfo=    await User.findOne({email})
// //        console.log(userInfo,"kyaa milegaaaaaaaa");
// //        if(!userInfo){
// //          res.send("user not found")
// //        }else{
// //         let validPass=   await bcrypt.compare(passWord,userInfo.passWord,)
// //         if(validPass){
// //          res.send("login ho gyaa")
// //         }else{
// //          res.send("pass sahi nhi haiiii")
// //         }
// //        }
// //  })
//  app.listen(4000,()=>{
//     console.log("server running on port no 4000");
//  })








// //  for twilioService file (for otp)
// let express = require('express')
// const cors = require('cors')
// let sentOtp = require('./twilioService')
// let app = express()
// app.use(express.json())
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET','POST'],
//   credentials: true
// }))
// app.get('/', (req, res) => {
//   res.send("server is running...")
// })
// app.post('/send-otp', async (req, res) => {
//   const { phoneNumber } = req.body;
//   console.log(phoneNumber,"jejej");
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   console.log(phoneNumber, otp, "nuu");
//   try {
//     console.log("heheheh");
//     await sentOtp(phoneNumber, otp);
//     console.log("hello");
//     res.status(200).send({ message: 'OTP sent successfully', otp });
//   } catch (error) {
//     console.log("Twilio error...",error)
//     res.status(500).send({ error: 'OTP sending failed' });
//   }
// });
// // port number -> 4000 .
// app.listen(4000, () => {
//   console.log("Server started on http://localhost:4000");
// })








// for role-check

// let express = require('express')
// let mongoose = require('mongoose')
// let User = require('./user')
// let bcrypt = require('bcrypt')
// let jwt = require('jsonwebtoken')
// mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
//   then(() => {
//     console.log("db....");
//   })
// let app = express()
// app.use(express.json())
// app.get('/', (req, res) => {
//   res.send("hello")
// })
// app.post('/create', async (req, res) => {
//   let { userName, email, passWord, role } = req.body
//   console.log(userName, email, "heheh");
//   let user = await User.findOne({ email })
//   console.log(user, "hiiii");
//   if (user) {
//     res.send("user jinda haiii")
//   }
//   let updatedP = await bcrypt.hash(passWord, 10)
//   console.log(updatedP, "HEH");
//   let userData = new User({
//     userName,
//     email,
//     passWord: updatedP,
//     role: role || 'user'
//   })
//   await userData.save()
//   res.send("account ban gya hai....")
// })
// app.post("/login", async (req, res) => {
//   let { email, passWord } = req.body
//   console.log(email, passWord);
//   let userInfo = await User.findOne({ email })
//   console.log(userInfo, "kyaa milegaaaaaaaa");
//   if (!userInfo) {
//     res.send("user not found")
//   } else {
//     let validPass = await bcrypt.compare(passWord, userInfo.passWord,)
//     if (validPass) {
//       let token = jwt.sign({ email: userInfo.email, role: userInfo.role }, "JHBFIUWBFIUWB");
//       console.log(token, "tokennnnn");
//       res.send("login ho gyaa")
//     } else {
//       res.send("pass sahi nhi haiiii")
//     }
//   }
// })
// function checkRole(role) {
//   return (req, res, next) => {
//     let token = req.headers.authorization;
//     console.log(token)
//     if (!token) {
//       return res.send('Unauthorizeddd User ||');
//     } else {
//       let deCodedToken = jwt.verify(token, "JHBFIUWBFIUWB");
//       console.log(deCodedToken,"tokennnnnn.....")
//       if (role !== deCodedToken.role) {
//         return res.send('Access denieddd ||')
//       }
//       else {
//         next();
//       }
//     }
//   }
// }
// app.get('/public', (req, res) => {
//   res.send("isko koi bhi dekh sakta hai")
// })
// app.get('/private', checkRole('admin'), (req, res) => {
//   res.send("404......")
// })
// app.listen(4000, () => {
//   console.log("server running on port no 4000");
// })









// for password reset
let express = require('express')
let mongoose = require('mongoose')
let User = require('./user')
let bcrypt = require('bcrypt')
const crypto = require('crypto');
let cors = require('cors')
let jwt=    require('jsonwebtoken')
let app = express()
app.listen(4000, () => {
  console.log("hehe");
})
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
  then(() => {
    console.log("db conneted...");
  })
app.get('/', (req, res) => {
  res.send("hiii")
})
app.post('/create', async (req, res) => {
  let { userName, email, passWord } = req.body
  console.log(userName, email, "heheh");
  let user = await User.findOne({ email })
  console.log(user, "hiiii");
  if (user) {
    res.send("user jinda haiii")
  }
  let updatedP = await bcrypt.hash(passWord, 10)
  console.log(updatedP, "HEH");
  let userData = new User({
    userName,
    email,
    passWord: updatedP
  })
  await userData.save()
  res.send("account ban gya hai....")
  //   console.log(userName,email, passWord);
})
app.post("/login", async (req, res) => {
  let { email, passWord } = req.body
  let userInfo = await User.findOne({ email })
  console.log(userInfo, "kyaa milegaaaaaaaa");
  if (!userInfo) {
    res.send("user not found")
  } else {
    let validPass = await bcrypt.compare(passWord, userInfo.passWord,)
    if (validPass) {
      res.send("login ho gyaa")
    } else {
      res.send("pass sahi nhi haiiii")
    }
  }
})
app.listen(4000, () => {
  console.log("server running on port no 4000");
})

let { sendEmail } = require('./sendEmail')
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).send("User not found")
    }
    const resetToken = crypto.randomBytes(20).toString('hex')
    user.resetToken = resetToken
    user.resetTokenExpiry = Date.now() + 3600000
    await user.save()

    // http://localhost:4000/reset-password/token
    // this is temporary url only for backend
    // const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;

    const resetUrl = `http://localhost:5173/reset/${resetToken}`
    await sendEmail(
      user.email,
      'Password Reset Request',
      `Click the link below to reset your password:\n\n${resetUrl}`
    );

    res.status(200).send('Password reset email sent');
  } catch (error) {
    res.status(500).send('Error sending password reset email: ' + error.message);
  }
})

app.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }

    const hashed = await bcrypt.hash(newPassword, 10);

    user.passWord = hashed;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    res.send("Password reset successful");
  } catch (err) {
    res.status(500).send("Error resetting password");
  }
});









