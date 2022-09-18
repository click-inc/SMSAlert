const express = require("express");

const router = new express.Router();

//sms
router.post("/sms", async (req, res) => {
  try {
    res.status(201).send({msg:"You have successfully place the order,Thank you for shoopping in Click Inc."});
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
