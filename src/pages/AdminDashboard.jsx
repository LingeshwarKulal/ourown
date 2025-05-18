import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchMessages();
  }, [navigate]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/messages', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      
      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      setMessages(data);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  const handleMarkAsRead = async (messageId) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/messages/${messageId}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      
      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }
      
      if (!response.ok) {
        throw new Error('Failed to update message status');
      }
      fetchMessages();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 mt-[100px]">
      {/* Admin Navigation Bar */}
      <nav className="bg-white shadow-md fixed top-[80px] left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {messages.length} {messages.length === 1 ? 'message' : 'messages'}
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors shadow-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {error ? (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Messages List */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">Messages</h2>
                    <button
                      onClick={fetchMessages}
                      className="text-sm text-indigo-600 hover:text-indigo-900 font-medium"
                    >
                      Refresh
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-6">
                      <div className="mx-auto h-12 w-12 text-gray-400">
                        <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                      </div>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Messages from the contact form will appear here
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {messages.map((message) => (
                        <motion.div
                          key={message._id}
                          whileHover={{ scale: 1.01 }}
                          className={`p-4 rounded-lg cursor-pointer border ${
                            selectedMessage?._id === message._id
                              ? 'bg-indigo-50 border-indigo-500'
                              : 'bg-white border-gray-200 hover:border-indigo-200'
                          }`}
                          onClick={() => handleMessageClick(message)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-900">{message.name}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              message.isRead ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {message.isRead ? 'Read' : 'Unread'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{message.email}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(message.createdAt).toLocaleDateString()}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message Details */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow h-full">
                  {selectedMessage ? (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-medium text-gray-900">Message Details</h2>
                        <button
                          onClick={() => handleMarkAsRead(selectedMessage._id)}
                          className={`px-4 py-2 rounded-md transition-colors ${
                            selectedMessage.isRead
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              : 'bg-indigo-600 text-white hover:bg-indigo-700'
                          }`}
                        >
                          {selectedMessage.isRead ? 'Marked as Read' : 'Mark as Read'}
                        </button>
                      </div>
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">From</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedMessage.name}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Email</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedMessage.email}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Company</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedMessage.company || 'Not provided'}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Inquiry Type</dt>
                          <dd className="mt-1 text-sm text-gray-900">{selectedMessage.inquiryType}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Message</dt>
                          <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap p-4 bg-gray-50 rounded-lg">
                            {selectedMessage.message}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Received</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {new Date(selectedMessage.createdAt).toLocaleString()}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full p-12">
                      <div className="text-center">
                        <div className="mx-auto h-12 w-12 text-gray-400">
                          <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                          </svg>
                        </div>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No message selected</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Select a message from the list to view its details
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 