import express from "express";
import session from "express-session";
import { config } from "dotenv";
import Review from "./db.mjs";

const app = express();

app.use(session({
  secret: 'your-secret-key', // Replace with a strong, unique secret key
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

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

app.get('/reviews/add', (req, res) => {
  res.render('addreview');
});

app.get('/reviews/mine', (req, res) => {
  const userReviews = req.session.userReviews || [];
  res.render('myreviews', { userReviews });
});

app.post('/reviews/add', (req, res) => {
  const { courseNumber, courseName, semester, year, professor, review } = req.body;

  const newReview = new Review({
    courseNumber,
    courseName,
    semester,
    year: parseInt(year),
    professor,
    review,
  });

  newReview.save()
    .then(() => {
      if (!req.session.userReviews) {
        req.session.userReviews = [];
      }
      req.session.userReviews.push(newReview);
      res.redirect('/');
    })
    .catch(error => {
      console.error("Error adding review:", error);
      res.status(500).send('Error adding review to the database');
    });
});

app.use((req, res, next) => {
  if (!req.session.pageVisits) {
    req.session.pageVisits = 1;
  } else {
    req.session.pageVisits++;
  }
  next();
});

app.use((req, res, next) => {
  res.locals.pageVisits = req.session.pageVisits;
  next();
});

console.log(`Started on port: ${process.env.PORT}`);
app.listen(process.env.PORT || 3000);
