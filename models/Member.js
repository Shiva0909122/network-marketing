const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    parent: { type: String, default: null }, // Parent member
});

module.exports = mongoose.model("Member", MemberSchema);
