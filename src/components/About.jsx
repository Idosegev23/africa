import React from 'react'

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
            AI Africa Academy
          </h1>
          <h2 className="text-2xl lg:text-3xl text-africa-primary font-semibold mb-6">
            Online Zoom Program for AI Literacy and Practice
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-8">
            5 Professional Tracks • From Zero to AI
          </p>
          <div className="w-24 h-1 bg-africa-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Main Description */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-heading">
              From Zero to AI – A Journey Tailored for Africa
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A practical, progressive training path for business owners, professionals, and academic staff in Africa.
            </p>
          </div>

          {/* Right - Bullet Points */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl mt-1">✔</span>
              <span className="text-lg text-gray-700">Live Zoom instruction with expert trainers</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl mt-1">✔</span>
              <span className="text-lg text-gray-700">Hands-on practice with actual AI tools</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl mt-1">✔</span>
              <span className="text-lg text-gray-700">No tech background needed</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl mt-1">✔</span>
              <span className="text-lg text-gray-700">Certificates in English and Hebrew</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl mt-1">✔</span>
              <span className="text-lg text-gray-700">Business-oriented use cases</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl mt-1">✔</span>
              <span className="text-lg text-gray-700">Focus on accessible and free tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 