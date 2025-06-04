import React from 'react'
import { MessageSquare, Brain, Search, Settings, Database, Palette } from 'lucide-react'

const AITools = () => {
  const tools = [
    { name: "ChatGPT", icon: MessageSquare },
    { name: "Claude", icon: Brain },
    { name: "Perplexity", icon: Search },
    { name: "Make", icon: Settings },
    { name: "Supabase", icon: Database },
    { name: "Midjourney", icon: Palette }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            AI Tools Featured
          </h2>
          <div className="w-24 h-1 bg-africa-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the essential AI tools that are reshaping business worldwide
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <div key={index} className="group">
                <div className="bg-gray-50 hover:bg-africa-primary rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <IconComponent className="w-8 h-8 mb-4 text-gray-600 group-hover:text-white transition-colors" />
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-white transition-colors">{tool.name}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-africa-primary/10 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-africa-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">No Setup Required</h3>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              All tools are free or freemium and require no setup.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-africa-primary mb-2">100%</div>
                <div className="text-gray-600">Free Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-africa-primary mb-2">0</div>
                <div className="text-gray-600">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-africa-primary mb-2">∞</div>
                <div className="text-gray-600">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AITools 