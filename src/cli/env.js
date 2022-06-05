import dotenv from "dotenv";
dotenv.config();

export const parseEnv = () => {
  // Write your code here
  console.log("RSS_S3_BUCKET = " + process.env.RSS_S3_BUCKET);
  console.log("RSS_SECRET_KEY = " + process.env.RSS_SECRET_KEY);
};

// env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
