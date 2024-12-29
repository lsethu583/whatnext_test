import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MentorOTPVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'mentor@example.com';

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

    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="w-full max-w-md p-8 relative">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">MentorMe</h1>
          <p className="text-gray-400">
            Enter the verification code sent to{' '}
            <span className="text-purple-500">{email}</span>
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(ref) => (inputRefs.current[index] = ref)}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center bg-white/10 border border-gray-600 rounded-lg text-white text-xl focus:outline-none focus:border-purple-500"
              />
            ))}
          </div>

          <button
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Verify
          </button>

          <div className="text-center">
            <p className="text-gray-400">
              Didn't receive the code?{' '}
              <button
                disabled={!canResend}
                className={`${
                  canResend 
                    ? 'text-purple-500 hover:text-purple-400' 
                    : 'text-purple-500/50 cursor-not-allowed'
                }`}
              >
                Resend Code
              </button>
              {!canResend && (
                <span className="text-purple-500 ml-2">({formatTime(timer)})</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

