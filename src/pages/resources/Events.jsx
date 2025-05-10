import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsCalendar4Event, BsPlayCircle, BsClock, BsPeople } from 'react-icons/bs';

function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Future of Digital Innovation Summit 2024',
      date: '2024-03-15T09:00:00',
      duration: '2 hours',
      type: 'Webinar',
      speakers: ['Dr. Sarah Chen', 'Raj Patel'],
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?fit=crop&w=800&q=80',
      description: 'Join industry leaders as they discuss emerging trends and future directions in digital innovation.',
      attendees: 234,
      tags: ['Innovation', 'Digital Transformation']
    },
    {
      id: 2,
      title: 'Sustainable Tech Workshop Series',
      date: '2024-03-20T14:00:00',
      duration: '90 minutes',
      type: 'Workshop',
      speakers: ['Emma Wilson', 'Michael Chang'],
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=800&q=80',
      description: 'Interactive workshop on implementing sustainable practices in tech organizations.',
      attendees: 156,
      tags: ['Sustainability', 'Workshop']
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'AI Ethics in Practice',
      date: '2024-02-10T10:00:00',
      duration: '1 hour',
      type: 'Webinar',
      speakers: ['Lisa Anderson', 'David Kim'],
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=800&q=80',
      description: 'Exploring ethical considerations in AI development and implementation.',
      views: 1256,
      recording: 'https://example.com/recording/ai-ethics',
      tags: ['AI', 'Ethics']
    },
    {
      id: 4,
      title: 'Tech Policy Forum 2024',
      date: '2024-02-05T13:00:00',
      duration: '2.5 hours',
      type: 'Conference',
      speakers: ['Robert Martinez', 'Jennifer Lee'],
      thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?fit=crop&w=800&q=80',
      description: 'Discussion on recent policy changes affecting the tech industry.',
      views: 892,
      recording: 'https://example.com/recording/tech-policy',
      tags: ['Policy', 'Regulation']
    }
  ];

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
        <div className="text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
          >
            Events & Webinars
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            Join our interactive sessions and learn from industry experts
          </motion.p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'upcoming'
                ? 'bg-[#5D3FD3] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('recorded')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'recorded'
                ? 'bg-[#5D3FD3] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
            }`}
          >
            On-Demand Recordings
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-[#5D3FD3]">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#5D3FD3]/10 text-[#5D3FD3] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <BsCalendar4Event className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsClock className="w-4 h-4" />
                    <span>{event.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <BsPeople className="w-4 h-4" />
                    <span>
                      {activeTab === 'upcoming' 
                        ? `${event.attendees} registered`
                        : `${event.views} views`}
                    </span>
                  </div>
                  {activeTab === 'upcoming' ? (
                    <button
                      onClick={() => handleRegister(event)}
                      className="px-6 py-2 bg-[#5D3FD3] text-white rounded-full hover:bg-[#5D3FD3]/90 transition-colors"
                    >
                      Register Now
                    </button>
                  ) : (
                    <Link
                      to={event.recording}
                      className="flex items-center gap-2 px-6 py-2 bg-[#5D3FD3] text-white rounded-full hover:bg-[#5D3FD3]/90 transition-colors"
                    >
                      <BsPlayCircle className="w-4 h-4" />
                      Watch Now
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      {showRegistrationModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Register for Event</h3>
            <div className="mb-6">
              <h4 className="font-medium mb-2">{selectedEvent.title}</h4>
              <p className="text-sm text-gray-500">
                {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                })}
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5D3FD3]/20 focus:border-[#5D3FD3]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#5D3FD3] text-white rounded-lg hover:bg-[#5D3FD3]/90"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events; 