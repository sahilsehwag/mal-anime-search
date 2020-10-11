const express = require("express");
const app = express();

app.use(async (err, req, res, next) => {
	console.log(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'))
}