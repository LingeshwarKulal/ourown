import { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const faqs = [
    {
      category: "About OUROWN",
      items: [
        {
          question: "What is OUROWN?",
          answer: "OUROWN is a comprehensive entrepreneurship ecosystem platform that brings together startups, mentors, investors, and corporate partners. Our mission is to build structured, supportive environments where innovative ventures can thrive through our proprietary Troup-Based Business Incubation Model."
        },
        {
          question: "How did OUROWN start?",
          answer: "OUROWN was founded in 2019 by a team of serial entrepreneurs and ecosystem builders who recognized the gap between traditional incubation approaches and the actual needs of early-stage ventures. After two years of research and methodology development, we launched our first ecosystem hub in Bangalore in 2021, followed by rapid expansion across India."
        },
        {
          question: "What makes OUROWN different from other incubators?",
          answer: "Unlike traditional incubators that focus primarily on workspace and generic mentorship, OUROWN implements our proprietary Troup-Based Business Incubation Model that provides structured, stage-appropriate support through cross-functional teams of experts. Our approach delivers measurable outcomes with 78% startup survival rates compared to the industry average of 32%."
        }
      ]
    },
    {
      category: "For Entrepreneurs",
      items: [
        {
          question: "How can my startup join the OUROWN ecosystem?",
          answer: "Startups can apply through our online application portal. We evaluate applications based on innovation potential, team strength, market opportunity, and alignment with our focus sectors. Selected startups go through an initial assessment before being matched with appropriate troupes and support programs."
        },
        {
          question: "What stages of startups do you support?",
          answer: "OUROWN supports ventures at all stages from ideation to growth, with tailored programs for each development phase. Our Troup-Based Incubation Model adapts to the specific needs of startups whether they're at the concept stage, MVP development, market traction, or scaling phase."
        },
        {
          question: "What industries does OUROWN focus on?",
          answer: "We focus on high-impact sectors including Climate & Sustainability, Digital Transformation, Healthcare & Wellness, Agriculture & Food, Mobility & Logistics, and Emerging Technologies. However, we evaluate innovative solutions across all sectors that demonstrate strong potential for growth and impact."
        },
        {
          question: "Does OUROWN take equity in startups?",
          answer: "Our incubation programs operate on different models. Some programs are equity-free and supported by our partners, while others follow a standard equity model (typically 3-7% depending on stage and support level). Each program clearly outlines the terms before startups commit to joining."
        }
      ]
    },
    {
      category: "Troup-Based Incubation",
      items: [
        {
          question: "What is the Troup-Based Business Incubation Model?",
          answer: "The Troup-Based Business Incubation Model (TBBIM) is our proprietary methodology that combines cross-functional teams (troupes) with a structured stage-gate development framework. Troupes consist of 4-6 specialists with complementary skills who collaborate to address the specific needs of each venture at different development stages."
        },
        {
          question: "How are troupes formed and assigned?",
          answer: "Troupes are carefully assembled based on the specific needs of each venture. Our AI-powered matching algorithm recommends optimal troupe members based on skills, experience, and personality fit, with human oversight to ensure perfect alignment. Troupes evolve as startups progress through different development stages."
        },
        {
          question: "What is the stage-gate framework?",
          answer: "Our stage-gate system divides the incubation journey into well-defined phases (Ideation & Validation, MVP Development, Market Traction, Growth & Scaling, and Maturity & Exit), each with clear objectives and success criteria. This creates structure and allows for disciplined progression based on milestone achievement."
        }
      ]
    },
    {
      category: "Partnerships & Engagement",
      items: [
        {
          question: "How can organizations partner with OUROWN?",
          answer: "Organizations can engage with OUROWN through various partnership models including Corporate Innovation Programs, Industry-Specific Ecosystem Development, Sponsor-a-Startup initiatives, and Knowledge Partner collaborations. Our partnership team works with each organization to design engagement models aligned with their strategic objectives."
        },
        {
          question: "What are Associate Operating Bodies (AOBs)?",
          answer: "Associate Operating Bodies (AOBs) are strategic oversight entities within our governance structure that focus on specific domains such as Strategy & Innovation, Financial Governance, Ecosystem Partnerships, and Technology & Infrastructure. AOBs ensure transparent decision-making, standardized processes, and accountable leadership across all initiatives."
        },
        {
          question: "How can I become a mentor or troupe member?",
          answer: "Experienced professionals can apply to join our mentor network or troupe pool through the 'Get Involved' section on our website. We evaluate applications based on expertise, industry experience, and commitment to supporting entrepreneurs. Selected individuals undergo orientation and training on our methodologies before being matched with startups."
        }
      ]
    },
    {
      category: "Resources & Support",
      items: [
        {
          question: "What resources are available through OUROWN?",
          answer: "OUROWN provides access to physical infrastructure (co-working spaces, labs, meeting facilities), digital resources (knowledge library, tools, platforms), funding connections (angels, VCs, grants), market access opportunities, regulatory guidance, and our extensive network of industry partners and subject matter experts."
        },
        {
          question: "Do you offer funding to startups?",
          answer: "While OUROWN is not primarily a funding entity, we facilitate connections to appropriate funding sources based on startup stage and needs. We maintain relationships with angel networks, venture capital firms, impact investors, and government grant programs. Some of our programs also include seed funding components for selected ventures."
        },
        {
          question: "Are there any costs associated with joining OUROWN?",
          answer: "Cost structures vary by program. Some programs are fully sponsored with no direct cost to startups, while others operate on membership fees, revenue-sharing, or equity models. We're committed to ensuring that promising ventures are not excluded due to financial constraints and offer scholarships and deferred payment options where appropriate."
        }
      ]
    }
  ];

  const jumpToCategory = (categoryIndex) => {
    const element = document.getElementById(`category-${categoryIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl">Find answers to common questions about OUROWN's ecosystem and programs.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">FAQ</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Jump to Category</h2>
            <div className="flex flex-wrap gap-3">
              {faqs.map((category, index) => (
                <button
                  key={index}
                  onClick={() => jumpToCategory(index)}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded-lg text-sm"
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`category-${categoryIndex}`} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-900">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const index = `${categoryIndex}-${itemIndex}`;
                    return (
                      <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                        >
                          <h3 className="text-lg font-semibold">{item.question}</h3>
                          <svg 
                            className={`w-6 h-6 transform ${openItem === index ? 'rotate-180' : ''} text-blue-600`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openItem === index && (
                          <div className="p-6 pt-0 bg-gray-50">
                            <p className="text-gray-700">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you couldn't find the answer you were looking for, our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-700 mb-4">
                  Send your questions to our support team and receive a response within 24 hours.
                </p>
                <a href="mailto:support@ourown.org" className="text-blue-600 font-medium hover:text-blue-800">support@ourown.org</a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-700 mb-4">
                  Chat with our support team during business hours for immediate assistance.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule a Call */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Personalized Assistance?</h2>
            <p className="text-lg mb-8">
              Schedule a call with our ecosystem support team to discuss your specific questions or requirements.
            </p>
            <Link 
              to="/contact-get-involved" 
              className="bg-white text-blue-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-lg inline-block"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 