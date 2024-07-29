const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const retrieveRoutes = require("./routes/retrieve");
const createRoutes = require("./routes/create");
const updateRoutes = require("./routes/update");
const PORT = 8000 || process.env.PORT
const fs = require("fs");
const https = require("https");
const { connectDB } = require("./db/connection");
const socket = require("socket.io");
const key = fs.readFileSync("private.key");
const cert = fs.readFileSync("certificate.crt");
const path = require('path')

// certificates credentials
const cred = {
  key,
  cert,
};

// middlewares
app.use(express.json());
app.use(cors(
  {
    origin:"*"
  }
));

// // check route
app.get("/", (req, res) => {
  res.send({ message: "Server is running" });
});

const authFilePath = path.join(__dirname, '1EEA56FC5D75746F33C5C4750B4F2226.txt');

// Serve the auth file at the specific URL path
app.get('/.well-known/pki-validation/1EEA56FC5D75746F33C5C4750B4F2226.txt', (req, res) => {
  console.log("uploaded")
  res.sendFile(authFilePath);
});

// routes
app.use("/auth", authRoutes);
app.use("/create", createRoutes);
app.use("/get", retrieveRoutes);
app.use("/update", updateRoutes);

// db connection
connectDB()
  .then(() => {
    // server setup
    app.listen(80, () => {
      console.log(`server started at ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

//  HTTPS setup
const httpsServer = https.createServer(cred, app);
httpsServer.listen(9000);

// socket coonection
// const io = socket(httpsServer, {
//   cors: {
//     origin: "*",
//   },
//   maxHttpBufferSize: 10 * 1024 * 1024, // max-data size 10mb
// });

// io.on("connection", (socket) => {
//   console.log("client connected");
//   socket.on("task", (data) => {
//     console.log(data);
//   });

//   socket.on("map", (data) => {
//     io.emit("map-data", data);
//   });
// });
