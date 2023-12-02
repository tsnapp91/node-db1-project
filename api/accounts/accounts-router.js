const router = require("express").Router();
const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
} = require("../accounts/accounts-middleware");

router.get("/", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    // const accounts = db("accounts");
    // res.status(accounts);
    res.json("post accounts");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
    } catch (err) {
      next(err);
    }
  }
);

router.put("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
});

// router.use((err, req, res, next) => {
//   // eslint-disable-line
//   // DO YOUR MAGIC
// });

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
