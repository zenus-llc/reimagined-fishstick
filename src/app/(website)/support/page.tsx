export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">Support Center</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            Get help when you need it. Our support team is here to assist you.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F5F3F0] rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-[#49423D] mb-3">Documentation</h3>
            <p className="text-[rgba(73,66,61,0.80)] mb-6">Browse our comprehensive guides and tutorials</p>
            <a href="/docs" className="text-[#49423D] font-semibold hover:underline">View Docs →</a>
          </div>

          <div className="bg-[#F5F3F0] rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-[#49423D] mb-3">Live Chat</h3>
            <p className="text-[rgba(73,66,61,0.80)] mb-6">Chat with our support team in real-time</p>
            <button className="text-[#49423D] font-semibold hover:underline">Start Chat →</button>
          </div>

          <div className="bg-[#F5F3F0] rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-[#49423D] mb-3">Email Support</h3>
            <p className="text-[rgba(73,66,61,0.80)] mb-6">Send us an email and we&apos;ll respond within 24 hours</p>
            <a href="/contact" className="text-[#49423D] font-semibold hover:underline">Contact Us →</a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I set up my Instagram account?", a: "Connect your Instagram account through Settings > Integrations. Follow the authorization flow to grant permissions." },
              { q: "What are automation triggers?", a: "Triggers are events that start an automation, such as new followers, comments, or direct messages." },
              { q: "Can I schedule messages?", a: "Yes! Use the scheduler in the automation builder to send messages at specific times." },
              { q: "How do I track engagement?", a: "View detailed analytics in the Dashboard section, including message delivery rates and engagement metrics." }
            ].map((faq, index) => (
              <details key={index} className="border border-[rgba(55,50,47,0.12)] rounded-xl p-6 cursor-pointer">
                <summary className="font-semibold text-[#49423D] text-lg">{faq.q}</summary>
                <p className="mt-4 text-[rgba(73,66,61,0.80)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-gradient-to-r from-[#49423D] to-[#37322F] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Urgent Help?</h2>
          <p className="text-lg mb-6 opacity-90">
            For critical issues, contact our priority support team
          </p>
          <button className="inline-block bg-white text-[#49423D] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Emergency Support
          </button>
        </div>
      </div>
    </div>
  )
}
