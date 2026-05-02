import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: ""
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("https://feedback-form-spectent-services-1.onrender.com/feedback", form);

      setMessage(res.data.message);
      setIsError(false);

      // clear form after success
      setForm({
        name: "",
        email: "",
        feedback: ""
      });

    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
      setIsError(true);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="heading">Feedback Form</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="feedback"
            placeholder="Write your feedback..."
            value={form.feedback}
            onChange={handleChange}
            className="textarea"
          />

          <button
            type="submit"
            className="button"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {message && (
          <p className={`message ${isError ? "error" : "success"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;