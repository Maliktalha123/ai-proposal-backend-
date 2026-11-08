
const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    clientName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    projectTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 5000,
    },

    features: {
      type: String,
      default: "",
      maxlength: 3000,
    },

    budget: {
      type: String,
      default: "",
    },

    timeline: {
      type: String,
      default: "",
    },

    platform: {
      type: String,
      default: "",
    },

    tone: {
      type: String,
      enum: [
        "professional",
        "friendly",
        "detailed",
        "concise",
      ],
      default: "professional",
    },

    notes: {
      type: String,
      default: "",
      maxlength: 3000,
    },

    generatedContent: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },

    status: {
      type: String,
      enum: ["draft", "generated"],
      default: "draft",
    },

    generatedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Proposal",
  proposalSchema
);
