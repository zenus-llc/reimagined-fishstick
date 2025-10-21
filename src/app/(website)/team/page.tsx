export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "👩‍💼",
      bio: "Serial entrepreneur with 15+ years in tech. Passionate about building products that businesses love."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      bio: "Former tech lead at major tech companies. Expert in automation systems and social media APIs."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "👩‍🎨",
      bio: "Product visionary focused on creating seamless user experiences that delight businesses."
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image: "👨‍🔧",
      bio: "Engineering leader who builds scalable systems. Open source contributor and tech speaker."
    },
    {
      name: "Lisa Wang",
      role: "Head of Design",
      image: "👩‍🎨",
      bio: "Award-winning designer who believes great design is invisible. Focused on intuitive interfaces."
    },
    {
      name: "James Taylor",
      role: "Head of Marketing",
      image: "👨‍💼",
      bio: "Growth expert who helps businesses discover automation tools they love. Previously at leading SaaS companies."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">Meet Our Team</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            We're a diverse group of developers, designers, and dreamers united by our passion for creating exceptional automation experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#F5F3F0] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 text-center">{member.image}</div>
              <h3 className="text-xl font-bold text-[#49423D] text-center mb-2">{member.name}</h3>
              <p className="text-sm text-[rgba(73,66,61,0.60)] text-center mb-4 font-medium">{member.role}</p>
              <p className="text-[rgba(73,66,61,0.80)] text-center">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-[#49423D] to-[#37322F] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Join Us?</h2>
          <p className="text-lg mb-6 opacity-90">
            We're always looking for talented individuals who share our passion for automation and innovation.
          </p>
          <a href="/careers" className="inline-block bg-white text-[#49423D] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  )
}
