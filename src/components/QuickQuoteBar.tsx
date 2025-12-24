'use client'

import { useState, useRef } from 'react'
import { Camera, Upload, X, ChevronDown, ChevronUp, Loader2 } from 'lucide-react'

export function QuickQuoteBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [photos, setPhotos] = useState<File[]>([])
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + photos.length > 5) {
      alert('Maximum 5 photos allowed')
      return
    }

    const newPhotos = [...photos, ...files].slice(0, 5)
    setPhotos(newPhotos)

    // Create previews
    const newPreviews = newPhotos.map(file => URL.createObjectURL(file))
    setPhotoPreviews(newPreviews)
  }

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index)
    const newPreviews = photoPreviews.filter((_, i) => i !== index)
    setPhotos(newPhotos)
    setPhotoPreviews(newPreviews)
  }

  const handleInitialClick = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and phone number')
      return
    }

    // Expand the form
    setIsExpanded(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData for submission
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('phone', formData.phone)
      submitData.append('email', formData.email)
      submitData.append('message', formData.message)

      photos.forEach((photo, index) => {
        submitData.append(`photo_${index}`, photo)
      })

      // For now, construct mailto link as fallback
      const subject = encodeURIComponent('Cleanout Quote Request')
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Photos attached: ${photos.length}`
      )

      window.location.href = `mailto:info@topshelfpros.com?subject=${subject}&body=${body}`

      setSubmitStatus('success')

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', message: '' })
        setPhotos([])
        setPhotoPreviews([])
        setIsExpanded(false)
        setSubmitStatus('idle')
      }, 3000)

    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quote-form" className={`pt-4 pb-0 -mt-4 -mb-0 md:-mb-16 border-0 z-0 md:z-20 overflow-visible relative before:content-[''] before:absolute before:-top-[140px] md:before:top-0 before:left-0 before:right-0 before:-z-10 after:content-[''] after:absolute after:-top-[140px] md:after:top-0 after:left-0 after:right-0 after:bg-[url('/assets/asset-7.webp')] after:bg-repeat after:bg-[length:800px] after:opacity-50 after:-z-[5] before:bg-[radial-gradient(ellipse_at_center,#2a6ab0_0%,#10477d_60%)] before:bottom-14 after:bottom-14 md:before:bottom-8 md:after:bottom-8`}>
      {/* Tagline with arrows - full width like original */}
      <div className="hidden md:flex items-center justify-center h-[40px] mb-4 w-full tagline-bar">
        <span className="text-white italic text-sm sm:text-base md:text-[1.5rem] font-semibold tracking-tight whitespace-nowrap">
          Restoring homes with compassion since 2022
        </span>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .tagline-bar {
            background-image:
              url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='18,8 6,15 18,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='28,10 18,15 28,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E"),
              linear-gradient(white, white),
              linear-gradient(white, white),
              url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='2,10 12,15 2,20' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3Cpolyline points='12,8 24,15 12,22' fill='none' stroke='white' stroke-width='2' stroke-linejoin='miter'/%3E%3C/svg%3E");
            background-size: 30px 30px, calc(50% - 430px) 2px, calc(50% - 430px) 2px, 30px 30px;
            background-position: left 70px center, left 100px center, right 100px center, right 70px center;
            background-repeat: no-repeat;
          }
        }
      `}</style>

      {/* Quote Form */}
      <div className="max-w-xl mx-auto px-4 pb-6">
        <form onSubmit={isExpanded ? handleSubmit : handleInitialClick}>
          {/* Initial Fields - Always Visible */}
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#FFC845] focus:bg-white/20 transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#FFC845] focus:bg-white/20 transition-all"
            />
          </div>

          {/* Expanded Fields */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-3 pt-1">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#FFC845] focus:bg-white/20 transition-all"
              />

              <textarea
                name="message"
                placeholder="Tell us about your situation (optional)"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#FFC845] focus:bg-white/20 transition-all resize-none"
              />

              {/* Photo Upload Section */}
              <div className="bg-white/10 rounded-lg p-4 border-2 border-white/30">
                <p className="text-white/90 text-sm mb-3">Add photos (optional - helps with accurate quotes)</p>

                <div className="flex gap-2 mb-3">
                  {/* Camera Button */}
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all text-sm"
                  >
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </button>

                  {/* Upload Button */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all text-sm"
                  >
                    <Upload className="w-4 h-4" />
                    Upload
                  </button>
                </div>

                {/* Hidden File Inputs */}
                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoChange}
                  className="hidden"
                />

                {/* Photo Previews */}
                {photoPreviews.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {photoPreviews.map((preview, index) => (
                      <div key={index} className="relative w-16 h-16">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-white/60 text-xs mt-2">
                  {photos.length}/5 photos added
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-3 px-8 py-3 rounded-lg font-bold text-lg uppercase bg-[#FFC845] text-[#10477d] hover:bg-[#e5b13d] transition-all border-4 border-[#FFC845] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              'Sent! We will call you soon.'
            ) : (
              <>
                {isExpanded ? 'Send Quote Request' : 'Get Cleanout Quote'}
                {!isExpanded && <ChevronDown className="w-5 h-5" />}
              </>
            )}
          </button>

          {/* Collapse button when expanded */}
          {isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="w-full mt-2 text-white/70 hover:text-white text-sm flex items-center justify-center gap-1 transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
              Show less
            </button>
          )}
        </form>

        {/* Privacy note */}
        <p className="text-white/60 text-xs text-center mt-3">
          100% confidential. We never share your information.
        </p>
      </div>

      {/* Mobile Tagline */}
      <p className="md:hidden text-white text-center italic text-sm pb-4 px-4">
        Restoring homes with compassion since 2022
      </p>
    </section>
  )
}
