import { ArrowRight, Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function ContactPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>WeekendPlanning</div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="/" className="text-white font-semibold hover:text-yellow-400 transition text-lg">HOME</a>
            <a href="/about" className="text-white font-semibold hover:text-yellow-400 transition text-lg">ABOUT</a>
            <a href="/resources" className="text-white font-semibold hover:text-yellow-400 transition text-lg">RESOURCES</a>
            <a href="/features" className="text-white font-semibold hover:text-yellow-400 transition text-lg">FEATURES</a>
            <a href="/blog" className="text-white font-semibold hover:text-yellow-400 transition text-lg">BLOG</a>
            <a href="/contact" className="text-yellow-400 font-semibold text-lg">CONTACT</a>
            <button onClick={() => navigate('/login')} className="px-8 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-32 px-3 text-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/10.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '700px'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-lg">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-gray-100 font-semibold drop-shadow-lg">
            Have questions or want to learn more? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-40 px-3 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
            {/* Email */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black mb-8">
                <Mail size={48} className="text-lime-400" />
              </div>
              <h3 className="text-3xl font-black text-black mb-4">Email Us</h3>
              <p className="text-gray-600 text-lg mb-2 font-semibold">For general inquiries and support</p>
              <a href="mailto:hello@weekendplanning.com" className="text-2xl font-black text-black hover:text-lime-400 transition">
                hello@weekendplanning.com
              </a>
              <p className="text-gray-500 text-sm mt-3">Response time: 24 hours</p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black mb-8">
                <Phone size={48} className="text-lime-400" />
              </div>
              <h3 className="text-3xl font-black text-black mb-4">Call Us</h3>
              <p className="text-gray-600 text-lg mb-2 font-semibold">Speak with our team directly</p>
              <a href="tel:+15551234567" className="text-2xl font-black text-black hover:text-lime-400 transition">
                +1 (555) 123-4567
              </a>
              <p className="text-gray-500 text-sm mt-3">Mon-Fri, 9 AM - 6 PM EST</p>
            </div>

            {/* Office */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black mb-8">
                <MapPin size={48} className="text-lime-400" />
              </div>
              <h3 className="text-3xl font-black text-black mb-4">Visit Us</h3>
              <p className="text-gray-600 text-lg mb-2 font-semibold">Our headquarters location</p>
              <p className="text-2xl font-black text-black">San Francisco, CA</p>
              <p className="text-gray-500 text-sm mt-3">Available by appointment</p>
            </div>
          </div>

          {/* Contact Form & Quick Links Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
            {/* Contact Form */}
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-black mb-12">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-lime-400 text-black p-12 rounded-2xl text-center">
                  <h3 className="text-5xl font-black mb-4">Thank You! ✅</h3>
                  <p className="text-lg font-semibold">We've received your message and will get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-black text-black mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400 text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-black text-black mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400 text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-black text-black mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400 text-lg"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-black text-black mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400 text-lg resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-black text-lg rounded-lg hover:bg-gray-800 transition"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-6xl md:text-7xl font-black text-black mb-12">Why Contact Us?</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-lime-400 pl-6">
                  <h3 className="text-2xl font-black text-black mb-2">Technical Support</h3>
                  <p className="text-gray-600">Having issues with the app? Our technical team is ready to help you get back on track.</p>
                </div>

                <div className="border-l-4 border-lime-400 pl-6">
                  <h3 className="text-2xl font-black text-black mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-600">Looking to integrate WeekendPlanning for your organization? Let's discuss custom solutions.</p>
                </div>

                <div className="border-l-4 border-lime-400 pl-6">
                  <h3 className="text-2xl font-black text-black mb-2">Partnership Opportunities</h3>
                  <p className="text-gray-600">Interested in partnering with us? We'd love to explore collaboration possibilities.</p>
                </div>

                <div className="border-l-4 border-lime-400 pl-6">
                  <h3 className="text-2xl font-black text-black mb-2">General Inquiries</h3>
                  <p className="text-gray-600">Any other questions? Our team is here to provide information and support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-40">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16 text-center">Common Questions</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: 'What\'s the response time for support?',
                    answer: 'We aim to respond to all inquiries within 24 business hours. Premium users receive priority support within 2 hours.'
                  },
                  {
                    question: 'Do you offer phone support?',
                    answer: 'Yes! Call us at +1 (555) 123-4567 during business hours (9 AM - 6 PM EST, Monday - Friday) for immediate assistance.'
                  },
                  {
                    question: 'Can I schedule a demo?',
                    answer: 'Absolutely! Email us at hello@weekendplanning.com with your preferred times and we\'ll arrange a custom demo.'
                  },
                  {
                    question: 'Do you have a privacy policy?',
                    answer: 'Yes, we take privacy seriously. Check our full policy at weekendplanning.com/privacy for complete details.'
                  },
                  {
                    question: 'Is my data secure?',
                    answer: 'Yes! We use enterprise-grade encryption and comply with GDPR, CCPA, and other data protection regulations.'
                  },
                  {
                    question: 'Do you offer refunds?',
                    answer: 'Our core features are free forever! For premium features, we offer a 30-day money-back guarantee.'
                  },
                  {
                    question: 'Can I export my data?',
                    answer: 'Yes, you can export all your planning data in various formats (PDF, CSV, ICS) anytime.'
                  },
                  {
                    question: 'Do you have a mobile app?',
                    answer: 'Yes! Available on iOS and Android. Download from the App Store or Google Play.'
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-2xl font-black text-black mb-3 hover:text-lime-400 transition cursor-pointer">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sales Inquiry Section */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-16 rounded-2xl border border-gray-200">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-8">For Sales & Business Inquiries</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl">
              Interested in becoming a partner or exploring enterprise solutions? Our sales team would love to discuss how we can work together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-black text-black mb-3">📧 Email</h3>
                <p className="text-lg font-semibold text-black mb-2">sales@weekendplanning.com</p>
                <p className="text-gray-600">For partnership and enterprise inquiries</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-black text-black mb-3">📞 Phone</h3>
                <p className="text-xl mb-3">+1 (555) 987-6543</p>
                <p className="text-lg text-gray-300">Mon-Fri, 10 AM - 5 PM EST</p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mb-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">Visit Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  city: 'San Francisco',
                  address: '123 Tech Street',
                  details: 'HQ - Open for tours by appointment'
                },
                {
                  city: 'New York',
                  address: '456 Innovation Ave',
                  details: 'East Coast operations center'
                },
                {
                  city: 'London',
                  address: '789 Digital Road',
                  details: 'Europe headquarters'
                }
              ].map((office, i) => (
                <div key={i} className="p-8 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg transition text-center">
                  <h3 className="text-2xl font-black text-black mb-2">{office.city}</h3>
                  <p className="text-gray-700 font-semibold mb-1">{office.address}</p>
                  <p className="text-gray-500 text-sm">{office.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Level Agreement */}
          <div className="mb-32">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-16 text-center">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { metric: '99.9% Uptime', description: 'Our platform is available 24/7 with minimal maintenance' },
                { metric: '24h Response', description: 'All support tickets answered within 24 hours maximum' },
                { metric: 'Data Security', description: 'Enterprise-grade encryption for all your data' },
                { metric: 'Auto Backup', description: 'Your data is automatically backed up every hour' },
                { metric: 'Privacy First', description: 'We never share your data with third parties' },
                { metric: 'Free Updates', description: 'All new features released at no additional cost' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-12 border-4 border-lime-400 rounded-3xl">
                  <p className="text-4xl font-black text-lime-400 mb-4">{item.metric}</p>
                  <p className="text-xl text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-32">
            <h2 className="text-7xl md:text-8xl font-black text-black mb-16 text-center">What Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  text: 'The support team was incredibly helpful in getting us set up. Highly recommend!',
                  name: 'Rachel Green',
                  role: 'Group Organizer'
                },
                {
                  text: 'Customer service is top-notch. They answer every question promptly and professionally.',
                  name: 'Tom Brown',
                  role: 'WeekendPlanning User'
                },
                {
                  text: 'I\'ve never experienced better customer support. These folks really care!',
                  name: 'Emma Williams',
                  role: 'Premium User'
                },
                {
                  text: 'The team went above and beyond to help us with our group integration.',
                  name: 'David Johnson',
                  role: 'Enterprise Client'
                }
              ].map((testimonial, i) => (
                <div key={i} className="p-12 border-4 border-black rounded-3xl hover:shadow-2xl transition">
                  <p className="text-2xl text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="text-2xl font-black text-black">{testimonial.name}</p>
                    <p className="text-lg text-lime-400 font-bold">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-black text-white p-16 rounded-3xl border-4 border-lime-400 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-12">Follow Us</h2>
            <div className="flex justify-center gap-8">
              {[
                { icon: <Facebook size={56} />, label: 'Facebook' },
                { icon: <Twitter size={56} />, label: 'Twitter' },
                { icon: <Linkedin size={56} />, label: 'LinkedIn' }
              ].map((social, i) => (
                <button
                  key={i}
                  className="p-6 bg-white text-black rounded-full hover:bg-lime-400 hover:text-white transition transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-8xl font-black mb-8">Ready to Transform Your Weekends?</h2>
          <p className="text-2xl md:text-3xl mb-12 leading-relaxed">Start planning better weekends today</p>
          <button onClick={() => navigate('/login')} className="inline-flex items-center gap-4 px-12 py-6 bg-lime-400 text-black font-black text-2xl rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
            Get Started Now <ArrowRight size={32} />
          </button>
        </div>
      </section>
    </div>
  )
}
