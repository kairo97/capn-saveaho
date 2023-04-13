
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "capn.saveaho@outlook.com", // generated ethereal user
      pass: "Scheduling1!", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = {
    from: 'capn.saveaho@outlook.com', // sender address
    to: "kai.ropp@gmail.com", // list of receivers
    subject: "new appointment", // Subject line
    text: "Hello world?", // plain text body
  };
  transporter.sendMail(info, function (err, info) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("sent:" + info.response)
  })


}

main().catch(console.error);