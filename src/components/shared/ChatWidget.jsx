import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'system', 
      content: 'Welcome to OUROWN! How can we help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Mock response data
  const quickResponses = [
    {
      id: 'startup',
      question: 'I want to join the startup incubation program',
      answer: 'Great choice! Our startup incubation program offers mentorship, funding opportunities, and networking. Please visit our Startup Incubation page or let me know if you have specific questions about the application process or benefits.'
    },
    {
      id: 'corporate',
      question: 'How can corporations partner with OUROWN?',
      answer: 'We offer multiple partnership models for corporations including innovation labs, startup engagement, CSR initiatives, and more. I recommend checking our Corporate Partnerships page or I can arrange a call with our partnerships team.'
    },
    {
      id: 'events',
      question: 'What events are happening this month?',
      answer: 'We have several exciting events coming up including workshops, webinars, and networking sessions. You can find the full calendar on our Events page, or I can help you register for specific events you\'re interested in.'
    }
  ];

  // Scroll to bottom of messages whenever messages changes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      const systemResponse = {
        id: messages.length + 2,
        type: 'system',
        content: getResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, systemResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Very simple response generator - in a real app this would connect to a backend
  const getResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('startup') || lowercaseInput.includes('incubation')) {
      return quickResponses[0].answer;
    } else if (lowercaseInput.includes('corporate') || lowercaseInput.includes('partner')) {
      return quickResponses[1].answer;
    } else if (lowercaseInput.includes('event') || lowercaseInput.includes('workshop')) {
      return quickResponses[2].answer;
    } else {
      return "Thank you for your message. One of our team members will get back to you shortly. In the meantime, feel free to explore our programs on the website or ask me another question.";
    }
  };
  
  const handleQuickResponse = (response) => {
    // Add user question
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: response.question,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      const systemResponse = {
        id: messages.length + 2,
        type: 'system',
        content: response.answer,
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, systemResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Format timestamp
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with support"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.svg 
              key="chat" 
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 45 }}
              className="w-6 h-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          ) : (
            <motion.svg 
              key="close" 
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -45 }}
              className="w-6 h-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-full sm:w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-indigo-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-700 to-purple-700 px-4 py-4 text-white">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">OUROWN Support</h3>
                  <p className="text-xs text-white/70">We typically reply within minutes</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="p-4 h-80 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'system' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 flex-shrink-0 flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                    )}
                    <div 
                      className={`max-w-[80%] p-3 rounded-xl ${
                        message.type === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-none'
                          : 'bg-white border border-gray-200 rounded-tl-none shadow-sm'
                      }`}
                    >
                      <p className={message.type === 'user' ? 'text-white' : 'text-gray-800'}>
                        {message.content}
                      </p>
                      <p className={`text-xs mt-1 text-right ${
                        message.type === 'user' ? 'text-indigo-200' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center ml-2 overflow-hidden">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 flex-shrink-0 flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200 rounded-tl-none">
                      <div className="flex space-x-1">
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-indigo-600"
                        />
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.3, delay: 0.1 }}
                          className="w-2 h-2 rounded-full bg-indigo-600"
                        />
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.4, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-indigo-600"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Quick response buttons */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Common questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickResponses.map(response => (
                  <button
                    key={response.id}
                    onClick={() => handleQuickResponse(response)}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full hover:bg-indigo-100 transition-colors whitespace-nowrap"
                  >
                    {response.question}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Input area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2 bg-gray-100 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-r-full p-2 px-4 hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
            
            {/* Footer */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center">
              Powered by OUROWN • <a href="#" className="text-indigo-600">Privacy Policy</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget; 