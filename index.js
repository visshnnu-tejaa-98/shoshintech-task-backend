import express, { urlencoded } from "express";
import cors from "cors";
import ServiceRoutes from "./routes/servicesRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Server is up and running!!");
});

app.use("/api", ServiceRoutes);

app.listen(8000, () => console.log("Server Started on port 9000"));
