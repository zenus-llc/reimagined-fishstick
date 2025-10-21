export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and scale our Instagram automation platform using modern web technologies."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Create beautiful, intuitive interfaces that make automation accessible to everyone."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help our customers succeed with our platform and build lasting relationships."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth and awareness through creative campaigns and strategic initiatives."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">Join Our Team</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            Help us build the future of Instagram automation. We're looking for passionate individuals who want to make an impact.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#49423D] text-center mb-12">Why Echelon?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3F0] rounded-2xl p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-[#49423D] mb-3">Remote First</h3>
              <p className="text-[rgba(73,66,61,0.70)]">
                Work from anywhere in the world. We believe in flexibility and work-life balance.
              </p>
            </div>
            <div className="bg-[#F5F3F0] rounded-2xl p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-[#49423D] mb-3">Growth Opportunities</h3>
              <p className="text-[rgba(73,66,61,0.70)]">
                Learn from the best, take on new challenges, and grow your career with us.
              </p>
            </div>
            <div className="bg-[#F5F3F0] rounded-2xl p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-[#49423D] mb-3">Competitive Compensation</h3>
              <p className="text-[rgba(73,66,61,0.70)]">
                Competitive salary, equity, and comprehensive benefits package.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="border border-[rgba(55,50,47,0.12)] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#49423D] mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-sm text-[rgba(73,66,61,0.60)]">📂 {position.department}</span>
                      <span className="text-sm text-[rgba(73,66,61,0.60)]">📍 {position.location}</span>
                      <span className="text-sm text-[rgba(73,66,61,0.60)]">⏰ {position.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-[#49423D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#37322F] transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-[rgba(73,66,61,0.80)]">{position.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#49423D] to-[#37322F] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-lg mb-6 opacity-90">
            We're always looking for talented people. Send us your resume and let's talk!
          </p>
          <a href="mailto:careers@echelon.com" className="inline-block bg-white text-[#49423D] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
