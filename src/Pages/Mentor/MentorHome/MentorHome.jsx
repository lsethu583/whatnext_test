import { Search, Bell, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MentorHome() {
  const recommendedMentors = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Software Development",
      image: "/Civil Engineer.jpg?height=200&width=200"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Medical Consultant",
      image: "/Doctor.jpg?height=200&width=200"
    },
    {
      name: "Prof. Michael Brown",
      specialty: "Business Strategy",
      image: "/Military Officer.jpg?height=200&width=200"
    },
    {
      name: "Dr. Emily Parker",
      specialty: "Data Science",
      image: "/Software Developer.jpg?height=200&width=200"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="bg-black border-b border-gray-800">
      <div className="logo-container p-2 rounded-lg bg-gradient-to-r from-black-400 to-violet-500">
          <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">What Next?!</h1>
            </div>
            
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for mentors..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recommended Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">Recommended</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedMentors.map((mentor, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-white font-medium">{mentor.name}</h3>
                  <p className="text-gray-400 text-sm">{mentor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seminars Banner */}
        <section className="mb-12 bg-gray-900 rounded-lg p-6">
          <h2 className="text-white text-lg font-medium mb-2">
            Free seminars and webinars available for all aspirants
          </h2>
          <p className="text-gray-400 mb-4">
            Conducted by industrial experts on 13-09-2024...
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Read All
          </button>
        </section>

        {/* Events Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      id: 1,
      imageUrl: "/event_5.jpg",
      title: "Upcoming Event 1",
      description: "Join our first mentorship session on career growth...",
    },
    {
      id: 2,
      imageUrl: "/event_2.jpg",
      title: "Upcoming Event 2",
      description: "A deep dive into advanced programming techniques...",
    },
    {
      id: 3,
      imageUrl: "/event_4.jpg",
      title: "Upcoming Event 3",
      description: "Learn about networking in the tech industry...",
    },
  ].map((event) => (
    <div key={event.id} className="bg-gray-900 rounded-lg overflow-hidden">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white font-medium mb-2">{event.title}</h3>
        <p className="text-gray-400 text-sm">{event.description}</p>
      </div>
    </div>
  ))}
</section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Report an Issue</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">INFORMATION</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  {/* Add social icons here */}
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">CONTACT US</h3>
              <p className="text-gray-400">support@mentorme.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

