import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Clock, Users, DollarSign, Wrench, BookOpen } from 'lucide-react'

const ProgramTable = () => {
  const [expandedCourse, setExpandedCourse] = useState(null)

  const courses = [
    {
      id: 1,
      title: "Introduction to AI – Start with Confidence",
      level: "Beginner",
      duration: "2 sessions × 2 hours",
      price: "$150",
      tools: ["ChatGPT", "Claude", "Perplexity", "Groq"],
      color: "bg-green-500",
      whatYoullLearn: [
        "What is artificial intelligence and how it works",
        "Differences between major AI assistants (ChatGPT, Claude, Groq, Perplexity)",
        "How to write effective prompts",
        "Practical use: email writing, summarizing text, idea generation",
        "Choosing the right tool for each task"
      ]
    },
    {
      id: 2,
      title: "AI for Everyday Life and Small Businesses",
      level: "Basic",
      duration: "3 sessions × 2 hours",
      price: "$220",
      tools: ["ChatGPT", "Claude", "DALL·E", "Ideogram", "Make"],
      color: "bg-blue-500",
      whatYoullLearn: [
        "Creating social media posts, ads, and marketing content",
        "Designing simple visuals with AI-generated images",
        "Building your brand's tone and voice",
        "Automating tasks: reminders, responses, data collection",
        "How AI saves time and supports business operations"
      ]
    },
    {
      id: 3,
      title: "Create with AI – Visuals, Videos, and Presentations",
      level: "Intermediate",
      duration: "2 sessions × 2 hours",
      price: "$200",
      tools: ["Midjourney", "DALL·E", "Ideogram", "WebSim", "ChatGPT"],
      color: "bg-purple-500",
      whatYoullLearn: [
        "Generating high-quality images using text prompts",
        "Creating short AI-generated promotional videos",
        "Designing professional presentations using AI tools",
        "Combining visuals and text for branded content",
        "Final exercise: create a complete branded post"
      ]
    },
    {
      id: 4,
      title: "No-Code Tools – Build with AI",
      level: "Advanced",
      duration: "4 sessions × 2 hours",
      price: "$400",
      tools: ["Make", "Supabase", "WebSim", "ChatGPT", "Claude", "Cursor"],
      color: "bg-orange-500",
      whatYoullLearn: [
        "Creating automation flows: forms → database → emails",
        "Deploying a basic landing page or web app",
        "Using Supabase to store and manage information",
        "Planning logic with AI assistants",
        "Final project: build and test a complete tool without code"
      ]
    },
    {
      id: 5,
      title: "AI-Powered Business Solutions – Final Project",
      level: "Advanced+",
      duration: "4 sessions × 2 hours",
      price: "$450",
      tools: ["ChatGPT", "Claude", "GreenAPI", "Supabase", "Make", "WebSim", "Calendly"],
      color: "bg-red-500",
      whatYoullLearn: [
        "Designing and connecting a full automation system (AI → database → WhatsApp)",
        "Building WhatsApp bots for customer interaction",
        "Creating a lightweight CRM with real-time flows",
        "Presenting a live working solution in the final session",
        "Project-based certification upon completion"
      ]
    }
  ]

  const toggleExpanded = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Program Structure
          </h2>
          <div className="w-24 h-1 bg-africa-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progressive learning path from AI basics to advanced business solutions
          </p>
        </div>

        {/* Course Cards */}
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Course Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${course.color} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg`}>
                      {course.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Basic' ? 'bg-blue-100 text-blue-800' :
                        course.level === 'Intermediate' ? 'bg-purple-100 text-purple-800' :
                        course.level === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpanded(course.id)}
                    className="flex items-center gap-2 bg-africa-primary text-white px-6 py-3 rounded-xl hover:bg-africa-primary/90 transition-colors font-semibold"
                  >
                    View Details
                    {expandedCourse === course.id ? 
                      <ChevronUp className="w-5 h-5" /> : 
                      <ChevronDown className="w-5 h-5" />
                    }
                  </button>
                </div>

                {/* Quick Info */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-africa-primary" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{course.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-africa-primary" />
                    <div>
                      <div className="text-sm text-gray-500">Price</div>
                      <div className="font-bold text-2xl text-africa-primary">{course.price}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-africa-primary" />
                    <div>
                      <div className="text-sm text-gray-500">Tools ({course.tools.length})</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {course.tools.slice(0, 3).map((tool, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {tool}
                          </span>
                        ))}
                        {course.tools.length > 3 && (
                          <span className="bg-africa-primary/10 text-africa-primary px-2 py-1 rounded text-xs font-medium">
                            +{course.tools.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCourse === course.id && (
                <div className="border-t border-gray-100 bg-gray-50 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Tools Taught */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Wrench className="w-6 h-6 text-africa-primary" />
                        <h4 className="text-xl font-bold text-gray-900">Tools Taught</h4>
                      </div>
                      <div className="space-y-2">
                        {course.tools.map((tool, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                            <div className="w-2 h-2 bg-africa-primary rounded-full"></div>
                            <span className="font-medium text-gray-800">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What You'll Learn */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-6 h-6 text-africa-primary" />
                        <h4 className="text-xl font-bold text-gray-900">What You'll Learn</h4>
                      </div>
                      <div className="space-y-3">
                        {course.whatYoullLearn.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-africa-primary/10 rounded-full flex items-center justify-center mt-0.5">
                              <div className="w-2 h-2 bg-africa-primary rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Training Experience</h3>
          <p className="text-lg text-gray-700 mb-6">
            Each track includes guided exercises, real use cases, and 3-month access to recordings.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-africa-primary mb-2">100%</div>
              <div className="text-gray-600">Hands-on Practice</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-africa-primary mb-2">3</div>
              <div className="text-gray-600">Months Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-africa-primary mb-2">5</div>
              <div className="text-gray-600">Progressive Levels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramTable 