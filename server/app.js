import express from "express";
import cors from "cors";
import menuRouter from "./routes/MenuRoute.js";
import categoryRouter from "./routes/CategoryRoute.js";
import multer from "multer";
import authRouter from "./routes/AuthRoute.js";

const app = express();
app.use(cors());
app.use(express.static("public"));

// Body parsing middleware should come before using routers
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded request bodies
// Use your custom routers
app.use(menuRouter);
app.use(categoryRouter);
app.use(authRouter);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});

