const express = require("express");
const { getMembers, addMember, deleteMember } = require("../controllers/memberController");

const router = express.Router();

router.get("/members", getMembers);
router.post("/members", addMember);
router.delete("/members/:id", deleteMember);

module.exports = router;
