require("dotenv").config();
const cors = require("cors")
const express = require("express");
const nodeMail = require("nodemailer");
const path = require("path");
const bodyParser = require("body-parser")

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "public")));

async function mainMail(name, email, subject, message, client) {
  const transporter = await nodeMail.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOption = {
    from: process.env.EMAIL,
    to: process.env.BUISNESSMAIL,
    subject: "scheduling",
    html: `You got a message from 
    Capn-Saveaho
    their name: ${client},
    job-type: ${name},    
    contact-info: ${subject},     
    ideal start date: ${email},     
    aviability: ${message}     `,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

app.get("/", (req, res) => {
  res.render(index.html);
});

app.get("/appointment", (req, res) => {
  res.render(appointment.html);
});

app.post("/appointment", async (req, res) => {
  const { name, email, subject, message, client } = req.body;
  console.log(req.body);
  try {
    const result = await mainMail(name, email, subject, message, client);
    console.log(result)
    res.send("Message Successfully Sent!");
  } catch (error) {
    console.log(error)
    res.send("Message Could not be Sent");
  }
});

app.listen(3001, () => console.log("Server is running!"));
