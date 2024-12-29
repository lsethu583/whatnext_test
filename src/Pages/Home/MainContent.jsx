import { useNavigate } from 'react-router-dom';

export default function MainContent() {
  const navigate=useNavigate()
  const handleStartAsMentor = () => {
    navigate('/mentor/login');
  };
  return (

    <section className="container mx-auto px-6 py-16 text-center bg-gradient-to-r from-blue-500 via-emerald-400 to-teal-500">
      <h2 className="text-3xl font-bold text-white mb-8">
        Your online mentorship journey & privacy covered
      </h2>
      <p className="text-gray-100 max-w-2xl mx-auto mb-8">
        Get personalized guidance from industry experts while maintaining
        complete privacy and security of your communications and personal data.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-white text-emerald-600 px-8 py-3 rounded-md text-lg hover:bg-gray-200 transition-colors">
          Start as a User
        </button>
        <button 
              onClick={handleStartAsMentor}
              className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg hover:bg-emerald-700 transition-colors"
            >
              Start as a Mentor
            </button>
      </div>
    </section>
  );
}
