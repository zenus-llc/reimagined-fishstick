export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">About Echelon</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            We're on a mission to automate DMs and comments on Instagram, empowering businesses to engage with their audience effortlessly.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#49423D] mb-4">Our Mission</h2>
              <p className="text-lg text-[rgba(73,66,61,0.80)] mb-4">
                At Echelon, we believe that every business should have access to powerful automation tools that enhance customer engagement and productivity.
              </p>
              <p className="text-lg text-[rgba(73,66,61,0.80)]">
                Our platform combines cutting-edge automation with intuitive design to deliver an exceptional Instagram engagement experience that helps businesses grow faster.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F5F3F0] to-[#E8E4DF] rounded-2xl p-12 flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#49423D] text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-[#49423D] mb-3">Innovation</h3>
              <p className="text-[rgba(73,66,61,0.70)]">
                We constantly push boundaries to deliver cutting-edge automation solutions that transform how businesses engage with their audience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-[#49423D] mb-3">Collaboration</h3>
              <p className="text-[rgba(73,66,61,0.70)]">
                We believe in the power of connection and build tools that bring businesses closer to their customers.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-[#49423D] mb-3">Excellence</h3>
              <p className="text-[rgba(73,66,61,0.70)]">
                We're committed to delivering the highest quality products and experiences to our users.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-[#F5F3F0] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-[#49423D] mb-6">Our Story</h2>
          <p className="text-lg text-[rgba(73,66,61,0.80)] mb-4">
            Founded by a team of marketing and automation experts, Echelon was born from a simple idea: Instagram engagement should be automated, efficient, and effective.
          </p>
          <p className="text-lg text-[rgba(73,66,61,0.80)] mb-4">
            We've grown from a small startup to a platform trusted by thousands of businesses worldwide, but our core mission remains the same.
          </p>
          <p className="text-lg text-[rgba(73,66,61,0.80)]">
            Today, we continue to innovate and evolve, always keeping our users at the heart of everything we do.
          </p>
        </div>
      </div>
    </div>
  )
}
