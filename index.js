const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from node API Server Updated 7");
});




mongoose
.connect(
  "mongodb+srv://amarokAdmin:M7VCLjGz413PqRQX@backenddb.lnwhvc6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () =>{
      console.log("Server is running on port 3000");
    });
})
.catch(() => {
  console.log("Connection failed!");
});
