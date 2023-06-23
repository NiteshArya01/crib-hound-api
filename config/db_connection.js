const mongoose = require('mongoose');

const db_name = process.env.DB_NAME;
const db_url = process.env.DB_URl;

// creating connection
mongoose.connect(`${db_url}/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
    .then(() => {
        console.log("Database connection ! Success");
    })
    .catch((err) => {
        console.log(err);
        console.log("Database connection ! Failed");
    })