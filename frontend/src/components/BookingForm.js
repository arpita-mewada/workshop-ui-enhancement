import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ validation added
    if (!name || !email || !workshop) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>

        <label style={labelStyle}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          required
          style={inputStyle}
          onFocus={(e) => e.target.style.border = "1px solid #2563eb"}
          onBlur={(e) => e.target.style.border = "1px solid #ccc"}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={inputStyle}
          onFocus={(e) => e.target.style.border = "1px solid #2563eb"}
          onBlur={(e) => e.target.style.border = "1px solid #ccc"}
        />

        <label style={labelStyle}>Workshop</label>
        <select
          value={workshop}
          onChange={(e) => setWorkshop(e.target.value)}
          required
          style={inputStyle}
          onFocus={(e) => e.target.style.border = "1px solid #2563eb"}
          onBlur={(e) => e.target.style.border = "1px solid #ccc"}
        >
          <option value="">Select Workshop</option>
          <option>Python Basics</option>
          <option>AI & ML</option>
          <option>Web Development</option>
        </select>

        <button
          type="submit"  // ✅ important fix
          disabled={loading}  // ✅ UX improvement
          style={{
            ...buttonStyle,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer"
          }}
          onMouseOver={(e) => !loading && (e.target.style.background = "#1e40af")}
          onMouseOut={(e) => !loading && (e.target.style.background = "#2563eb")}
        >
          {loading ? "Submitting..." : "Register Now"}
        </button>

      </form>

      {success && (
        <p style={successStyle}>
          ✅ Registration Successful!
        </p>
      )}
    </div>
  );
}

/* STYLES */

const containerStyle = {
  maxWidth: "400px",
  margin: "30px auto",
  padding: "20px",
  background: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

const labelStyle = {
  fontWeight: "bold",
  display: "block",
  marginBottom: "5px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",
  background: "#fff"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold"
};

const successStyle = {
  color: "green",
  marginTop: "10px",
  fontWeight: "bold",
  textAlign: "center"
};

export default BookingForm;