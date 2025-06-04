import React from 'react'
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-africa-primary rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold">AI Africa Academy</h3>
          </div>
          <p className="text-gray-400 text-lg">
            Empowering Africa through AI Education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-6 text-white">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-africa-primary" />
                <span className="text-gray-300">info@aiafricaacademy.com</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-africa-primary" />
                <span className="text-gray-300">+1-555-AI-AFRICA</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6 text-white">Follow Us</h4>
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-800 hover:bg-africa-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-africa-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-africa-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-africa-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <Youtube className="w-5 h-5 text-gray-300 hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AI Africa Academy – Empowering Africa through AI Education
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 