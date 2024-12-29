import { Shield, Wifi, Lock } from "lucide-react";
import MainContent from "./MainContent";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MentorCard from "../../Components/MentorCard/MentorCard";


export default function Home() {
  const mentors = [
    {
      name: "Dr. James Wilson",
      profession: "Medical Doctor",
      rating: 4.9,
      sessions: 120,
      image: "/Doctor.jpg?height=300&width=400",
    },
    {
      name: "Sarah Chen",
      profession: "Civil Engineer",
      rating: 4.8,
      sessions: 85,
      image: "/Civil Engineer.jpg?height=300&width=400",
    },
    {
      name: "Emil Parker",
      profession: "Software Developer",
      rating: 4.9,
      sessions: 150,
      image: "/Software Developer.jpg?height=300&width=400",
    },
    {
      name: "Robert Mitchell",
      profession: "Legal Advocate",
      rating: 4.7,
      sessions: 95,
      image: "/Advocate.jpg?height=300&width=400",
    },
    {
      name: "Emma Thompson",
      profession: "Senior Nurse",
      rating: 4.8,
      sessions: 110,
      image: "/Nurse.jpg?height=300&width=400",
    },
    {
      name: "Capt. Michael Brooks",
      profession: "Military Officer",
      rating: 4.9,
      sessions: 75,
      image: "/Military Officer.jpg?height=300&width=400",
    },
    {
      name: "Lt. David Clark",
      profession: "Navy Officer",
      rating: 4.7,
      sessions: 65,
      image: "/Navy Officer.jpg?height=300&width=400",
    },
    {
      name: "Capt. Lisa Martinez",
      profession: "Merchant Navy Officer",
      rating: 4.8,
      sessions: 90,
      image: "/Merchant Navy.jpg?height=300&width=400",
    },
  ];



  return (
    <div className="bg-[#0a192f] min-h-screen text-white">
      <Navbar />
      <MainContent />
      {/* Hero Section */}
      <section
        className="container mx-auto px-6 pt-20 pb-32 relative"
        style={{
          backgroundImage: 'url("./bg_maincontent.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.4 }}
        ></div>{" "}
        {/* Faded overlay */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
            Secure your mentorship journey, secure your career growth.
          </h1>
          <p className="text-gray-300 text-xl mb-8">
            Connect with industry experts and get personalized guidance to
            accelerate your career growth through secure and reliable mentorship
            sessions.
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-md text-lg hover:bg-emerald-600 transition-colors">
            Find a Mentor
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#112240] p-8 rounded-lg">
            <Shield className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Verified Mentors</h3>
            <p className="text-gray-400">
              Connect with thoroughly vetted industry experts who are passionate
              about sharing their knowledge.
            </p>
            <button className="mt-4 text-emerald-500 hover:text-emerald-400">
              Learn More →
            </button>
          </div>
          <div className="bg-emerald-500 p-8 rounded-lg">
            <Wifi className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3">Real-time Sessions</h3>
            <p className="text-white/90">
              Engage in live video calls, audio sessions, or chat with your
              chosen mentor in real-time.
            </p>
            <button className="mt-4 text-white hover:text-white/80">
              Book Now →
            </button>
          </div>
          <div className="bg-[#112240] p-8 rounded-lg">
            <Lock className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
            <p className="text-gray-400">
              Your sessions and personal information are protected with
              enterprise-grade security.
            </p>
            <button className="mt-4 text-emerald-500 hover:text-emerald-400">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recommended Mentors</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with our top-rated mentors from various professional
            backgrounds who are ready to guide you on your journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-emerald-500 text-white text-2xl font-bold px-4 py-2 rounded-md inline-block mb-6">
              20+
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Maximum protection for all your mentorship needs
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span>Track and plan your mentoring sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <Wifi className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span>Secure video and audio communications</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span>Complete data privacy and protection</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Mentor Session"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
