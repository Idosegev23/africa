import React from 'react'
import { CheckCircle, Zap, Globe, Code, Languages } from 'lucide-react'

const WhyUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Practical Content"
    },
    {
      icon: Zap,
      title: "Live + Guided + Structured"
    },
    {
      icon: Globe,
      title: "Built for Africa"
    },
    {
      icon: Code,
      title: "No-Code, No Fear"
    },
    {
      icon: Languages,
      title: "English Instruction"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-africa-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Why AI Africa Academy?
          </h2>
          <div className="w-24 h-1 bg-africa-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-africa-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-africa-primary" />
                  <span className="text-white">Expert-led training sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-africa-primary" />
                  <span className="text-white">Africa-focused use cases</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-africa-primary" />
                  <span className="text-white">No technical prerequisites</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-africa-primary" />
                  <span className="text-white">Immediate practical application</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs 