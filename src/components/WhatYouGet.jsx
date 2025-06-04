import React from 'react'
import { Target, Award, Video, Download } from 'lucide-react'

const WhatYouGet = () => {
  const benefits = [
    {
      icon: Target,
      title: "Hands-on Projects",
      desc: "Real-world applications and practical exercises"
    },
    {
      icon: Award,
      title: "Official Certificate",
      desc: "Certificate in English upon completion"
    },
    {
      icon: Video,
      title: "Live Zoom Instruction",
      desc: "Interactive sessions with expert trainers"
    },
    {
      icon: Download,
      title: "3-Month Access",
      desc: "Access to all recordings and materials"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            What You Get
          </h2>
          <div className="w-24 h-1 bg-africa-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master AI tools and transform your business approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-africa-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-africa-primary transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-africa-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-africa-primary rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Complete Learning Experience</h3>
          <p className="text-xl opacity-90">From beginner to AI expert in structured, practical steps</p>
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet 