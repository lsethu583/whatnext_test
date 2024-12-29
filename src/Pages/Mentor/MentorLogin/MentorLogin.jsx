import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

export default function MentorLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0">
        <img
          src="/mentorSignup_bg.jpg?height=1080&width=1920"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="w-full max-w-md p-8 relative bg-black/50 border border-gray-700 rounded-lg">
  <div className="mb-8 text-center">
    {/* Centered Title */}
    <h1 className="text-2xl font-bold text-white mb-2">MentorMe</h1>
    {/* Centered Subtitle */}
    <p className="text-gray-400">Welcome back, please login to your account</p>
  </div>

        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6">
  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 rounded-lg text-white hover:bg-white/5 transition-colors">
    <FaGoogle className="w-5 h-5" /> {/* Google Icon */}
    Sign up with Google
  </button>
</div>

        <p className="mt-8 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/mentor/signup" className="text-purple-500 hover:text-purple-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

