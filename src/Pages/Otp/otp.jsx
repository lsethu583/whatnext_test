"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function OTPVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "user@example.com";

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(120);
      setCanResend(false);
      // Add your resend OTP logic here
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length === 6) {
      // Add your verification logic here
      console.log("Verifying OTP:", otpString);
      // On success, navigate to dashboard or home
      // navigate('/dashboard');
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 bg-[#111111] rounded-2xl">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          OTP Verification
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Enter the OTP you received to{" "}
          <span className="text-purple-500">{email}</span>
        </p>

        <form onSubmit={handleVerify}>
          <div className="flex justify-between mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(ref) => (inputRefs.current[index] = ref)}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 border-2 border-purple-500/30 rounded-lg bg-transparent text-white text-center text-xl focus:border-purple-500 focus:outline-none"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors mb-6"
          >
            Verify
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-400">
            Didn't receive the code?{" "}
            <button
              onClick={handleResend}
              disabled={!canResend}
              className={`${
                canResend
                  ? "text-purple-500 hover:text-purple-400"
                  : "text-purple-500/50 cursor-not-allowed"
              }`}
            >
              Resend Code
            </button>
            {!canResend && (
              <span className="text-purple-500 ml-2">
                ({formatTime(timer)})
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
