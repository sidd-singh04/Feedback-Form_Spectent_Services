const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// temporary storage (will reset on server restart)
const feedbackStore = [];

app.post("/feedback", (req, res) => {
  try {
    let { name, email, feedback } = req.body;

    // basic checks
    if (!name || !email || !feedback) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // remove extra spaces
    name = name.trim();
    email = email.trim();
    feedback = feedback.trim();

    // handle empty after trim
    if (name === "" || email === "" || feedback === "") {
      return res.status(400).json({ message: "Fields cannot be empty" });
    }

    //email validation
    if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
      return res.status(400).json({ message: "Enter a valid email" });
    }

    const entry = {
      id: Date.now(), // quick unique id
      name,
      email,
      feedback,
      createdAt: new Date()
    };

    feedbackStore.push(entry);

    return res.json({ message: "Feedback received" });

  } catch (err) {
    console.error("Error while saving feedback:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});