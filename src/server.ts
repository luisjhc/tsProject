// const router = require("express").Router();
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

// router.get("/", (res: any) => {
//   res.json("All good in here");
// });
// // ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server listening on port http://localhost:${PORT}`);
// });
