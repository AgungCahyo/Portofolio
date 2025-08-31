"use client";

import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Send, Mail, User, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending...");
    
    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "1b0df68e-8a49-4d39-9829-8a33025343fd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon. ✨");
        setFormData({ name: "", email: "", message: "" });
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(`Oops! Something went wrong. Please try again.`);
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-richblack via-darkgreen to-pine scroll-mt-20 py-24"
    >
      {/* Enhanced Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-caribbean/20 to-mountain/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + '%',
            top: mousePosition.y * 0.02 + '%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-mint/15 to-frog/15 rounded-full blur-2xl animate-pulse"
          style={{
            right: (100 - mousePosition.x * 0.03) + '%',
            bottom: (100 - mousePosition.y * 0.03) + '%',
            transform: 'translate(50%, 50%)',
            animationDelay: '1s',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-basil/10 to-forest/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />
        
        {/* Enhanced Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-caribbean rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-mountain rotate-12 animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-mint/20 rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-3/4 left-1/2 w-20 h-20 border border-frog rounded-full animate-ping" style={{ animationDuration: '5s' }} />
        </div>
        
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-caribbean/30 rounded-full animate-pulse"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (2 + Math.random() * 3) + 's',
              }}
            />
          ))}
        </div>

        {/* Connection Lines */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-caribbean)" />
                <stop offset="100%" stopColor="var(--color-mountain)" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
            <line x1="20%" y1="80%" x2="80%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
          </svg>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-[8%] xl:px-[12%]">
        {/* Enhanced Heading */}
        <div className="text-center mb-20">
          <div
            data-aos="zoom-out"
            className="inline-flex items-center justify-center px-6 py-3 bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-full mb-8"
          >
            <Mail className="w-5 h-5 text-caribbean mr-2" />
            <h4 className="text-sm font-outfit font-bold text-caribbean uppercase tracking-widest">
              Let's Connect
            </h4>
          </div>

          <h2
            data-aos="zoom-in"
            className="text-5xl sm:text-6xl lg:text-7xl font-ovo font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-caribbean via-mountain to-mint bg-clip-text text-transparent">
              Get
            </span>{" "}
            <span className="bg-gradient-to-r from-mint via-frog to-caribbean bg-clip-text text-transparent relative">
              in Touch
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-caribbean to-mountain rounded-full opacity-50" />
            </span>
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto"
          >
            <div className="bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 shadow-lg">
              <p className="text-xl lg:text-2xl text-antiflash/90 leading-relaxed font-outfit">
                I'd love to hear from you! Whether you have a question, want to
                collaborate, or just want to say hi, feel free to reach out via the
                form below.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Form */}
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={onSubmit}
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-darkgreen/40 backdrop-blur-sm border border-caribbean/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Name Field */}
              <div className="relative group">
                <label className="flex items-center gap-2 text-antiflash/80 font-outfit font-medium mb-3">
                  <User className="w-4 h-4 text-caribbean" />
                  Your Name
                </label>
                <input
                  autoComplete="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 outline-none border-2 border-caribbean/30 rounded-xl bg-pine/30 backdrop-blur-sm text-antiflash placeholder-antiflash/50 focus:border-caribbean focus:bg-pine/50 transition-all duration-300 font-outfit"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-caribbean to-mountain transition-all duration-300 ${
                  focusedField === 'name' ? 'w-full' : 'w-0'
                }`} />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label className="flex items-center gap-2 text-antiflash/80 font-outfit font-medium mb-3">
                  <Mail className="w-4 h-4 text-caribbean" />
                  Your Email
                </label>
                <input
                  autoComplete="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 outline-none border-2 border-caribbean/30 rounded-xl bg-pine/30 backdrop-blur-sm text-antiflash placeholder-antiflash/50 focus:border-caribbean focus:bg-pine/50 transition-all duration-300 font-outfit"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-caribbean to-mountain transition-all duration-300 ${
                  focusedField === 'email' ? 'w-full' : 'w-0'
                }`} />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative group mb-8">
              <label className="flex items-center gap-2 text-antiflash/80 font-outfit font-medium mb-3">
                <MessageCircle className="w-4 h-4 text-caribbean" />
                Your Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project, ideas, or just say hello..."
                required
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className="w-full p-4 outline-none border-2 border-caribbean/30 rounded-xl bg-pine/30 backdrop-blur-sm text-antiflash placeholder-antiflash/50 focus:border-caribbean focus:bg-pine/50 transition-all duration-300 resize-none font-outfit"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-caribbean to-mountain transition-all duration-300 ${
                focusedField === 'message' ? 'w-full' : 'w-0'
              }`} />
            </div>

            {/* Enhanced Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg font-outfit transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl ${
                  isLoading 
                    ? 'bg-stone/50 cursor-not-allowed text-antiflash/50' 
                    : 'bg-gradient-to-r from-caribbean to-mountain hover:from-mountain hover:to-mint text-richblack hover:shadow-caribbean/20'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-antiflash/20 border-t-antiflash rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            {/* Enhanced Result Message */}
            {result && (
              <div className={`mt-8 p-4 rounded-xl backdrop-blur-sm border text-center font-outfit ${
                result.includes('successfully') || result.includes('✨')
                  ? 'bg-success/20 border-success/30 text-success'
                  : result.includes('Error') || result.includes('Oops')
                  ? 'bg-error/20 border-error/30 text-error'
                  : 'bg-caribbean/20 border-caribbean/30 text-caribbean'
              }`}>
                <div className="flex items-center justify-center gap-2">
                  {result.includes('successfully') || result.includes('✨') ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : result.includes('Error') || result.includes('Oops') ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span className="font-medium">{result}</span>
                </div>
              </div>
            )}
          </form>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Mail, title: "Email", content: "cahyoprasetyo507@gmail.com", link: "mailto:cahyoprasetyo507@gmail.com" },
              { icon: MessageCircle, title: "Response Time", content: "Within 24 hours", link: null },
              { icon: CheckCircle, title: "Availability", content: "Open for projects", link: null }
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={600 + index * 100}
                className="group bg-darkgreen/30 backdrop-blur-sm border border-caribbean/20 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-caribbean/20 to-mountain/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-caribbean" />
                </div>
                <h3 className="text-antiflash font-outfit font-bold mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-antiflash/80 font-outfit hover:text-caribbean transition-colors duration-300"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-antiflash/80 font-outfit">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Decorative Elements */}
        <div className="absolute bottom-8 left-8 flex flex-col gap-2 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-1 bg-gradient-to-r from-caribbean to-transparent animate-pulse"
              style={{ animationDelay: i * 0.2 + "s" }}
            />
          ))}
        </div>

        <div className="absolute bottom-8 right-8 opacity-20">
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-caribbean rounded-full animate-bounce"
                style={{ 
                  animationDelay: i * 0.3 + "s",
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-richblack to-transparent pointer-events-none" />
    </section>
  );
};

export default Contact;