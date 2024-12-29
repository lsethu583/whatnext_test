import { useState } from 'react';
import { Star, Share2, Search, Bell, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar'

export default function MentorProfile() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleBooking = () => {
    // Replace 'mentorId' with the actual way you're getting the mentor ID
    navigate(`/booking/123`); 
  };
  return (
      <div className="min-h-screen bg-black">
        <Navbar />
    <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
            <div 
      className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-20 rounded-lg"
      style={{
        backgroundImage: "url('/Software Developer.jpg?height=400&width=300')",
      }}
    ></div>
              <div className="relative aspect-[4/3]">
                <img
                  src="/Civil Engineer.jpg?height=400&width=300"
                  alt="Mentor Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-4">
                    Sethulakshmi
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white ml-1">7.2/10</span>
                    </div>
                    <span className="text-gray-400">(5k votes)</span>
                  </div>
                </div>
                <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Language Selection */}
              <div className="flex gap-2 mb-6">
                {['English', 'Hindi'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 rounded ${
                      selectedLanguage === lang
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-white text-lg mb-2">Software Developer</h3>
                <div className="flex flex-wrap gap-2">
                  {['MERN', 'MEAN', 'DOTNET'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <button 
                onClick={handleBooking}
                className="w-full md:w-auto px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">DESCRIPTION</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm sethulakshmi, a software developer with 3 years of experience in MERN, MEAN, and .NET stacks.
            Passionate about coding and mentorship, I'm here to guide aspiring developers on their journey to success.
            Let's build your skills and unlock your potential together!
          </p>
        </div>
      </div>
    </div>
  )
}

