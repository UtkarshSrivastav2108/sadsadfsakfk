const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const favicon = require("serve-favicon");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const Travel = require("./models/Travel");

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", require("./routes/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
	// Set Static Folder
	app.use(express.static("mern-auth/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "mern-auth", "build", "index.html"));
	});
}


app.post("/travel", async (req, res) => {
	const newPost = new Travel(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});



app.get("/gettravel", async (req, res) => {
	try {
		posts = await Travel.find();
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json(err);
	}
});

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
