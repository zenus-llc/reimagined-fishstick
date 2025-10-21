export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">Join Our Community</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            Connect with thousands of Echelon users, share tips, and learn from each other.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-[#F5F3F0] rounded-xl">
            <div className="text-4xl font-bold text-[#49423D] mb-2">10K+</div>
            <div className="text-sm text-[rgba(73,66,61,0.70)]">Active Members</div>
          </div>
          <div className="text-center p-6 bg-[#F5F3F0] rounded-xl">
            <div className="text-4xl font-bold text-[#49423D] mb-2">500+</div>
            <div className="text-sm text-[rgba(73,66,61,0.70)]">Daily Discussions</div>
          </div>
          <div className="text-center p-6 bg-[#F5F3F0] rounded-xl">
            <div className="text-4xl font-bold text-[#49423D] mb-2">95%</div>
            <div className="text-sm text-[rgba(73,66,61,0.70)]">Response Rate</div>
          </div>
          <div className="text-center p-6 bg-[#F5F3F0] rounded-xl">
            <div className="text-4xl font-bold text-[#49423D] mb-2">24/7</div>
            <div className="text-sm text-[rgba(73,66,61,0.70)]">Community Support</div>
          </div>
        </div>

        {/* Community Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Community Channels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-[#49423D] mb-3">Discord Server</h3>
              <p className="text-[rgba(73,66,61,0.80)] mb-6">
                Join our active Discord community for real-time discussions, support, and networking.
              </p>
              <button className="bg-[#5865F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Join Discord
              </button>
            </div>

            <div className="border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🗨️</div>
              <h3 className="text-2xl font-bold text-[#49423D] mb-3">Community Forum</h3>
              <p className="text-[rgba(73,66,61,0.80)] mb-6">
                Ask questions, share workflows, and learn from experienced Echelon users.
              </p>
              <button className="bg-[#49423D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#37322F] transition-all">
                Visit Forum
              </button>
            </div>

            <div className="border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-[#49423D] mb-3">Social Media</h3>
              <p className="text-[rgba(73,66,61,0.80)] mb-6">
                Follow us on social media for tips, updates, and community highlights.
              </p>
              <div className="flex gap-3">
                <button className="bg-[#1DA1F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Twitter
                </button>
                <button className="bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  LinkedIn
                </button>
              </div>
            </div>

            <div className="border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📺</div>
              <h3 className="text-2xl font-bold text-[#49423D] mb-3">YouTube Channel</h3>
              <p className="text-[rgba(73,66,61,0.80)] mb-6">
                Watch tutorials, case studies, and community spotlights on our YouTube channel.
              </p>
              <button className="bg-[#FF0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-16 bg-[#F5F3F0] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-[#49423D] mb-6">Community Guidelines</h2>
          <div className="space-y-4 text-[rgba(73,66,61,0.80)]">
            <div className="flex items-start gap-3">
              <span className="text-xl">✓</span>
              <p><strong>Be respectful:</strong> Treat all community members with kindness and respect</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">✓</span>
              <p><strong>Help others:</strong> Share your knowledge and support fellow users</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">✓</span>
              <p><strong>Stay on topic:</strong> Keep discussions relevant to Echelon and Instagram automation</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">✓</span>
              <p><strong>No spam:</strong> Avoid self-promotion and irrelevant content</p>
            </div>
          </div>
        </div>

        {/* Featured Members */}
        <div className="text-center bg-gradient-to-r from-[#49423D] to-[#37322F] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Become a Community Leader</h2>
          <p className="text-lg mb-6 opacity-90">
            Active contributors can become community moderators and ambassadors
          </p>
          <button className="inline-block bg-white text-[#49423D] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
