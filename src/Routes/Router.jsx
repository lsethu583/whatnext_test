import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Home from "../Pages/Home/Home";
import OTPVerification from "../Pages/Otp/otp";
import MentorLogin from "../Pages/Mentor/MentorLogin/MentorLogin";
import MentorSignUp from "../Pages/Mentor/MentorSignUp/MentorSignUp";
import MentorOTPVerification from "../Pages/Mentor/MentorOTP/MentorOTP";
import MentorHome from "../Pages/Mentor/MentorHome/MentorHome";
import MentorProfile from "../Components/Profile/MentorProfile/MentorProfile";
import BookingPage from "../Pages/Bookings/BookingSlot";
import PaymentPage from "../Pages/Bookings/PaymentPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/mentor/login" element={<MentorLogin />} />
        <Route path="/mentor/signup" element={<MentorSignUp />} />
        <Route path="/mentor/verify-otp" element={<MentorOTPVerification />} />
        <Route path="/mentor/home" element={<MentorHome />} />
        <Route path="/profile/mentorProfile" element={<MentorProfile />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
