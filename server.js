import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import userRouter from "./routes/userRouter.js";
import transectionRouter from "./routes/transectionRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
//config dot env file
dotenv.config();

//databse call
connectDb();

//es module to fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rest object
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/transections", transectionRouter);
// Port

//static field
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8080 || process.env.PORT;

// listen

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
