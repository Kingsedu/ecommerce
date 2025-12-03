import express from "express";
import path from "path";
import { ENV } from "./config/env.js";
const app = express();

const __dirname = path.resolve();
app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "everything is healthy",
  });
});
console.log(path.join(__dirname, "../admin/dist"));
console.log(path.join(__dirname, "../../admin/dist"));
console.log(path.join(__dirname, "../admin", "dist", "index.html"));

if (ENV.NODE_ENV === "production") {
  const adminDist = path.join(__dirname, "../admin/dist");
  console.log("serving admin from", adminDist);
  app.use(express.static(adminDist));
  app.get("*", (req, res) => {
    res.sendFile(path.join(adminDist, "index.html"));
  });
}
app.listen(ENV.PORT, () => {
  console.log(`server is running at hello http://localhost:${ENV.PORT}`);
});
