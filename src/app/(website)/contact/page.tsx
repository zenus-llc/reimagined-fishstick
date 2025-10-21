export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">Get in Touch</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#49423D] mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#49423D] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:border-[#49423D] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#49423D] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:border-[#49423D] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#49423D] mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:border-[#49423D] transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#49423D] mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:border-[#49423D] transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#49423D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#37322F] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#49423D] mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#49423D] mb-1">Email</h3>
                  <p className="text-[rgba(73,66,61,0.70)]">support@echelon.com</p>
                  <p className="text-[rgba(73,66,61,0.70)]">hello@echelon.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#49423D] mb-1">Live Chat</h3>
                  <p className="text-[rgba(73,66,61,0.70)]">Available Monday - Friday</p>
                  <p className="text-[rgba(73,66,61,0.70)]">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🌐</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#49423D] mb-1">Social Media</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-[rgba(73,66,61,0.70)] hover:text-[#49423D] transition-colors">
                      Twitter: @echelon
                    </a>
                    <a href="#" className="block text-[rgba(73,66,61,0.70)] hover:text-[#49423D] transition-colors">
                      LinkedIn: /company/echelon
                    </a>
                    <a href="#" className="block text-[rgba(73,66,61,0.70)] hover:text-[#49423D] transition-colors">
                      Instagram: @echelon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-[#F5F3F0] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#49423D] mb-4">Frequently Asked Questions</h3>
              <p className="text-[rgba(73,66,61,0.70)] mb-4">
                Before reaching out, check our FAQ section for quick answers to common questions.
              </p>
              <a href="/support" className="text-[#49423D] font-semibold hover:underline">
                Visit FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
