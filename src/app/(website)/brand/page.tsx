export default function BrandPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#49423D] mb-6">Brand Guidelines</h1>
          <p className="text-xl text-[rgba(73,66,61,0.70)] max-w-3xl mx-auto">
            Our brand identity reflects our mission to make Instagram automation effortless and accessible.
          </p>
        </div>

        {/* Logo Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Logo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl p-12 text-center">
              <div className="text-4xl font-bold text-[#49423D] mb-4">Echelon</div>
              <p className="text-sm text-[rgba(73,66,61,0.60)]">Primary Logo - Light Background</p>
            </div>
            <div className="bg-[#49423D] rounded-2xl p-12 text-center">
              <div className="text-4xl font-bold text-white mb-4">Echelon</div>
              <p className="text-sm text-white opacity-60">Primary Logo - Dark Background</p>
            </div>
          </div>
        </div>

        {/* Colors Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="bg-[#49423D] h-32 rounded-xl mb-3"></div>
              <p className="text-sm font-semibold text-[#49423D]">Primary</p>
              <p className="text-xs text-[rgba(73,66,61,0.60)]">#49423D</p>
            </div>
            <div>
              <div className="bg-[#37322F] h-32 rounded-xl mb-3"></div>
              <p className="text-sm font-semibold text-[#49423D]">Dark</p>
              <p className="text-xs text-[rgba(73,66,61,0.60)]">#37322F</p>
            </div>
            <div>
              <div className="bg-[#F5F3F0] h-32 rounded-xl mb-3 border border-[rgba(55,50,47,0.12)]"></div>
              <p className="text-sm font-semibold text-[#49423D]">Light</p>
              <p className="text-xs text-[rgba(73,66,61,0.60)]">#F5F3F0</p>
            </div>
            <div>
              <div className="bg-white h-32 rounded-xl mb-3 border border-[rgba(55,50,47,0.12)]"></div>
              <p className="text-sm font-semibold text-[#49423D]">White</p>
              <p className="text-xs text-[rgba(73,66,61,0.60)]">#FFFFFF</p>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Typography</h2>
          <div className="bg-[#F5F3F0] rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-[#49423D] mb-2">Plus Jakarta Sans</h3>
              <p className="text-[rgba(73,66,61,0.70)]">Primary typeface for all brand communications</p>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-2xl font-bold text-[#49423D]">Heading Bold</span>
                <span className="text-sm text-[rgba(73,66,61,0.60)] ml-4">Font Weight: 700</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-[#49423D]">Heading Semibold</span>
                <span className="text-sm text-[rgba(73,66,61,0.60)] ml-4">Font Weight: 600</span>
              </div>
              <div>
                <span className="text-2xl font-medium text-[#49423D]">Body Medium</span>
                <span className="text-sm text-[rgba(73,66,61,0.60)] ml-4">Font Weight: 500</span>
              </div>
              <div>
                <span className="text-2xl font-normal text-[#49423D]">Body Regular</span>
                <span className="text-sm text-[rgba(73,66,61,0.60)] ml-4">Font Weight: 400</span>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#49423D] mb-8">Usage Guidelines</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#49423D] pl-6 py-4">
              <h3 className="text-xl font-semibold text-[#49423D] mb-2">✓ Do</h3>
              <ul className="space-y-2 text-[rgba(73,66,61,0.80)]">
                <li>• Use the logo with proper spacing and clearance</li>
                <li>• Maintain consistent brand colors across all materials</li>
                <li>• Use approved typefaces for all communications</li>
                <li>• Ensure good contrast and readability</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-4">
              <h3 className="text-xl font-semibold text-red-600 mb-2">✗ Don&apos;t</h3>
              <ul className="space-y-2 text-[rgba(73,66,61,0.80)]">
                <li>• Don&apos;t distort or modify the logo</li>
                <li>• Use unauthorized colors or variations</li>
                <li>• Place logo on busy or low-contrast backgrounds</li>
                <li>• Recreate or redraw brand elements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-[#49423D] to-[#37322F] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Brand Assets?</h2>
          <p className="text-lg mb-6 opacity-90">
            Download our complete brand kit including logos, colors, and guidelines.
          </p>
          <button className="inline-block bg-white text-[#49423D] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Download Brand Kit
          </button>
        </div>
      </div>
    </div>
  )
}
