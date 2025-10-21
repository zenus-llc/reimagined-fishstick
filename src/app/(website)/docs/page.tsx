export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      icon: "🚀",
      topics: [
        "Quick Start Guide",
        "Installation",
        "First Automation",
        "Dashboard Overview"
      ]
    },
    {
      title: "Automations",
      icon: "⚡",
      topics: [
        "Creating Automations",
        "Triggers & Actions",
        "Message Templates",
        "Scheduling"
      ]
    },
    {
      title: "Integrations",
      icon: "🔗",
      topics: [
        "Instagram Setup",
        "Webhook Configuration",
        "Third-party Apps",
        "API Integration"
      ]
    },
    {
      title: "Analytics",
      icon: "📊",
      topics: [
        "Dashboard Metrics",
        "Engagement Reports",
        "Custom Analytics",
        "Export Data"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">Documentation</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            Everything you need to know about using Echelon to automate your Instagram engagement.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-6 py-4 pl-12 border border-[rgba(55,50,47,0.12)] rounded-xl focus:outline-none focus:border-[#49423D] transition-colors text-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🔍</div>
          </div>
        </div>

        {/* Documentation Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {docSections.map((section, index) => (
            <div key={index} className="border border-[rgba(55,50,47,0.12)] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{section.icon}</div>
                <h2 className="text-2xl font-bold text-[#49423D]">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.topics.map((topic, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-[rgba(73,66,61,0.80)] hover:text-[#49423D] transition-colors flex items-center gap-2">
                      <span>→</span>
                      <span>{topic}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Popular Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#" className="bg-[#F5F3F0] rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-[#49423D] mb-2">How to set up your first automation</h3>
              <p className="text-sm text-[rgba(73,66,61,0.70)]">Step-by-step guide to creating your first workflow</p>
            </a>
            <a href="#" className="bg-[#F5F3F0] rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-[#49423D] mb-2">Understanding triggers</h3>
              <p className="text-sm text-[rgba(73,66,61,0.70)]">Learn about different automation triggers</p>
            </a>
            <a href="#" className="bg-[#F5F3F0] rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-[#49423D] mb-2">Best practices</h3>
              <p className="text-sm text-[rgba(73,66,61,0.70)]">Tips for effective Instagram automation</p>
            </a>
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="bg-gradient-to-r from-[#49423D] to-[#37322F] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
          <p className="text-lg mb-6 opacity-90">
            Watch our video guides to master Echelon quickly
          </p>
          <button className="inline-block bg-white text-[#49423D] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Browse Videos
          </button>
        </div>
      </div>
    </div>
  )
}
