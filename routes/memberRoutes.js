// const express = require("express");
// const { getMembers, addMember, deleteMember } = require("../controllers/memberController");

// const router = express.Router();

// router.get("/members", getMembers);
// router.post("/members", addMember);
// router.delete("/members/:id", deleteMember);

// module.exports = router;

const express = require("express");
const router = express.Router();
const Member = require("../models/Member");  // Make sure the model is correctly imported

// GET all members
router.get("/", async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// POST new member
router.post("/", async (req, res) => {
    const { name, parent } = req.body;
    try {
        const newMember = new Member({ name, parent });
        await newMember.save();
        res.json(newMember);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
