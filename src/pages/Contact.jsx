import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message as specified
    const formattedMessage = `Hi, I am ${formData.name} and my number ${formData.phone}
message: ${formData.message}`;
    
    try {
      // Send message via WhatsApp
      const whatsappLink = `https://wa.me/919344881012?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappLink, '_blank');
      
      alert('Opening WhatsApp to send your message!');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error opening WhatsApp. Please try again.');
    }
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1MZdZi_baQYSawCWNDNZf1KUbjposzVrz/view?usp=sharing', '_blank');
  };

  return (
    <div id="contact" className='w-full min-h-screen  p-8'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg">Let's connect and discuss opportunities</p>
        </div>

        <div className='flex flex-col lg:flex-row md:flex-row gap-12 justify-between items-center'>
          {/* Contact Information */}
          <div className='flex flex-col gap-8 flex-1'>
            <div className='text-white w-full'>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <ul className='flex flex-col gap-6'>
                <li className='flex items-center gap-4 hover:text-blue-400 transition-colors duration-200'>
                  <PhoneIcon className="text-blue-400" />
                  <span>9344881012</span>
                </li>
                <li className='flex items-center gap-4'>
                  <a 
                    href="https://www.linkedin.com/in/lavanya-maran/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-blue-400 transition-colors duration-200"
                  >
                    <LinkedInIcon className="text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </li>
                <li className='flex items-center gap-4'>
                  <a 
                    href="https://github.com/lavanyamaran10" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-blue-400 transition-colors duration-200"
                  >
                    <GitHubIcon className="text-blue-400" />
                    <span>GitHub Profile</span>
                  </a>
                </li>
                <li className='flex items-center gap-4'>
                  <a 
                    href="mailto:lavanyamaran24@gmail.com"
                    className="flex items-center gap-4 hover:text-blue-400 transition-colors duration-200"
                  >
                    <EmailIcon className="text-blue-400" />
                    <span>lavanyamaran24@gmail.com</span>
                  </a>
                </li>
                <li className='flex items-center gap-4'>
                  <a 
                    href="https://www.instagram.com/____.lav.____?igsh=d2pvOTN0ZnJ6MWU2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-blue-400 transition-colors duration-200"
                  >
                    <InstagramIcon className="text-blue-400" />
                    <span>Instagram Profile</span>
                  </a>
                </li>
                <li className='flex items-center gap-4'>
                  <a 
                    href="https://wa.me/919344881012" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-green-400 transition-colors duration-200"
                  >
                    <WhatsAppIcon className="text-green-400" />
                    <span>WhatsApp Chat</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Download CV Button */}
            <button 
              onClick={handleDownloadCV}
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3'
            >
              <DownloadIcon />
              Download CV
            </button>
          </div>

          {/* Contact Form */}
          <div className='flex text-white flex-1'>
            <div className='w-full bg-gray-800 rounded-lg p-8 shadow-lg '>
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <div>
                  <label className='block text-sm font-medium mb-2'>Your Name</label>
                  <input 
                    type='text' 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200'
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>Enter your phone number</label>
                  <input 
                    type='tel' 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200'
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>Write your message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none'
                    placeholder="Enter your message here..."
                  />
                </div>
 
                <button 
                  type="submit"
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact