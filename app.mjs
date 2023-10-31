import express from "express";
import { config } from "dotenv";
import Review from "./db.mjs";

const app = express();

// configure templating to hbs
app.set('view engine', 'hbs');

//const Review = mongoose.model("Review")
//const Review = mongoose.model("Review");

// set up express static
import url from 'url';
import path from 'path';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));



// body parser (req.body)
app.use(express.urlencoded({ extended: false }));

/*
app.get('/', (req, res) => {

  Review.find({})
  .then((reviews) => {
    res.render("displayreviews", { reviews});
    })

   .catch(error => {
    console.error("Error fetching reviews:", error);
      res.status(500).send('Error fetching reviews from the database');
    });
    
});
*/

app.get('/', (req, res) => {
  const filters = {};

  if (req.query.semester) {
    filters.semester = req.query.semester;
  }

  if (req.query.year) {
    filters.year = parseInt(req.query.year);
  }

  if (req.query.professor) {
    filters.professor = req.query.professor;
  }

  Review.find(filters)
    .then((reviews) => {
      res.render("displayreviews", { reviews });
    })
    .catch(error => {
      console.error("Error fetching reviews:", error);
      res.status(500).send('Error fetching reviews from the database');
    });
});


console.log((`Started on port: ${process.env.PORT}`))
app.listen(process.env.PORT || 3000);
