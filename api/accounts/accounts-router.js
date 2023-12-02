const router = require("express").Router();
const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
} = require("../accounts/accounts-middleware");

const Accounts = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Accounts.getAll();
    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC

  res.json(req.account);

  // try {
  //   const { id } = req.params;
  //   const account = await Accounts.getById(id);
  //   res.json(account);
  // } catch (err) {
  //   next(err);
  // }
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      const newAccount = await Accounts.create({
        name: req.body.name.trim(),
        budget: req.body.budget,
      });
      res.status(201).json(newAccount);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  checkAccountId,
  checkAccountPayload,
  async (req, res, next) => {
    // DO YOUR MAGIC

    try {
      const updated = await Accounts.updateById(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await Accounts.deleteById(req.params.id);
    res.json(req.account);
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
