import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebaseConfig";

function App() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  // Setup Recaptcha
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "normal",
      });
    }
  };

  // Send OTP
  const sendOtp = async () => {
    try {
      setupRecaptcha();
      const confirmationResult = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmation(confirmationResult);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      await confirmation.confirm(otp);
      alert("Phone number verified successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Firebase Phone Auth</h2>
      <div>
        <input
          type="text"
          placeholder="+1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={sendOtp}>Send OTP</button>
      </div>

      <div id="recaptcha-container"></div>

      {confirmation && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
}

export default App;
