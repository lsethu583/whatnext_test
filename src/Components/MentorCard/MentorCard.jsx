import { Star } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function MentorCard({
  image,
  name,
  profession,
  rating,
  sessions,
}) {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(`/profile/mentorProfile`);
  }

  return (
    <div onClick={handleClick} className="bg-[#112240] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={image}
          alt={`${name} - ${profession}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#112240] to-transparent h-20" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-emerald-400 text-sm mb-2">{profession}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white ml-1">{rating}</span>
          </div>
          <span className="text-gray-400 text-sm">{sessions} sessions</span>
        </div>
      </div>
    </div>
  );
}
