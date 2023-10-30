// add your code here!
import mongoose from "mongoose";
import {config} from "dotenv";
config();

// my schema goes here!

const ReviewSchema = new mongoose.Schema({
	name: String,
	updated_at: Date,
    number: String,
    name: String,
    semester: String,
    year: Number,
    professor: String, 
    review: String
})


const Review = mongoose.model("Review", ReviewSchema);

// Uncomment following line to debug value of database connectoin string
console.log(`Connecting to database at: ${process.env.DSN}`);
mongoose.connect(process.env.DSN);

export default Review;