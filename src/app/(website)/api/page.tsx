export default function APIPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">API Reference</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            Build powerful integrations with Echelon&apos;s RESTful API. Automate Instagram engagement programmatically.
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#49423D] mb-6">Quick Start</h2>
          <div className="bg-[#F5F3F0] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#49423D] mb-4">Authentication</h3>
            <p className="text-[rgba(73,66,61,0.80)] mb-4">
              All API requests require authentication using an API key. Include your API key in the request header:
            </p>
            <div className="bg-[#37322F] rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
              <code>Authorization: Bearer YOUR_API_KEY</code>
            </div>
          </div>
        </div>

        {/* Endpoints */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#49423D] mb-6">Endpoints</h2>
          <div className="space-y-6">
            {/* Automations */}
            <div className="border border-[rgba(55,50,47,0.12)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-semibold">GET</span>
                <code className="text-lg font-mono text-[#49423D]">/api/v1/automations</code>
              </div>
              <p className="text-[rgba(73,66,61,0.80)] mb-4">Retrieve all your automation workflows</p>
              <details className="cursor-pointer">
                <summary className="font-semibold text-[#49423D] mb-2">View Example Response</summary>
                <div className="bg-[#37322F] rounded-lg p-4 mt-2 font-mono text-sm text-white overflow-x-auto">
                  <pre>{`{
  "automations": [
    {
      "id": "auto_123",
      "name": "Welcome DM",
      "status": "active",
      "triggers": ["new_follower"],
      "created_at": "2025-10-15T10:30:00Z"
    }
  ]
}`}</pre>
                </div>
              </details>
            </div>

            {/* Create Automation */}
            <div className="border border-[rgba(55,50,47,0.12)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-semibold">POST</span>
                <code className="text-lg font-mono text-[#49423D]">/api/v1/automations</code>
              </div>
              <p className="text-[rgba(73,66,61,0.80)] mb-4">Create a new automation workflow</p>
              <details className="cursor-pointer">
                <summary className="font-semibold text-[#49423D] mb-2">View Request Body</summary>
                <div className="bg-[#37322F] rounded-lg p-4 mt-2 font-mono text-sm text-white overflow-x-auto">
                  <pre>{`{
  "name": "Welcome DM",
  "triggers": ["new_follower"],
  "actions": [
    {
      "type": "send_dm",
      "message": "Thanks for following!"
    }
  ]
}`}</pre>
                </div>
              </details>
            </div>

            {/* Messages */}
            <div className="border border-[rgba(55,50,47,0.12)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-semibold">GET</span>
                <code className="text-lg font-mono text-[#49423D]">/api/v1/messages</code>
              </div>
              <p className="text-[rgba(73,66,61,0.80)] mb-4">Retrieve message history</p>
            </div>

            {/* Analytics */}
            <div className="border border-[rgba(55,50,47,0.12)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-semibold">GET</span>
                <code className="text-lg font-mono text-[#49423D]">/api/v1/analytics</code>
              </div>
              <p className="text-[rgba(73,66,61,0.80)] mb-4">Get engagement analytics and metrics</p>
            </div>
          </div>
        </div>

        {/* Rate Limits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#49423D] mb-6">Rate Limits</h2>
          <div className="bg-[#F5F3F0] rounded-xl p-6">
            <ul className="space-y-3 text-[rgba(73,66,61,0.80)]">
              <li>• <strong>Free Plan:</strong> 100 requests per hour</li>
              <li>• <strong>Pro Plan:</strong> 1,000 requests per hour</li>
              <li>• <strong>Enterprise:</strong> Custom limits</li>
            </ul>
          </div>
        </div>

        {/* SDKs */}
        <div className="bg-gradient-to-r from-[#49423D] to-[#37322F] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">SDKs & Libraries</h2>
          <p className="text-lg mb-6 opacity-90">
            Official SDKs available for JavaScript, Python, Ruby, and PHP
          </p>
          <button className="inline-block bg-white text-[#49423D] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  )
}
