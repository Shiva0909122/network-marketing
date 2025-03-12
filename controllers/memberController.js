const Member = require("../models/Member");

// Get all members
const getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new member
const addMember = async (req, res) => {
    try {
        const { name, parent } = req.body;
        const newMember = new Member({ name, parent });
        await newMember.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a member
const deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) return res.status(404).json({ message: "Member not found" });
        res.json({ message: "Member deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getMembers, addMember, deleteMember };
