import express from "express";

const app = express();
app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "everything is healthy",
  });
});
app.listen(3000, () => {
  console.log(`server is running at hello http://localhost:3000`);
});
