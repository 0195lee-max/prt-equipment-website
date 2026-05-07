"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    title: "문의하기",
    subtitle: "궁금하신 점이 있으시면 아래 양식을 통해 문의해 주세요.",
    name: "이름",
    email: "이메일",
    company: "회사명",
    subject: "제목",
    message: "문의 내용",
    send: "메일 보내기",
    sending: "전송 중...",
    success: "메일이 성공적으로 전송되었습니다.",
    error: "메일 전송에 실패했습니다. 다시 시도해 주세요.",
    contactInfo: "연락처 정보",
    address: "주소",
    addressValue: "대한민국",
  },
  en: {
    title: "Contact Us",
    subtitle: "If you have any questions, please contact us through the form below.",
    name: "Name",
    email: "Email",
    company: "Company",
    subject: "Subject",
    message: "Message",
    send: "Send Email",
    sending: "Sending...",
    success: "Email sent successfully.",
    error: "Failed to send email. Please try again.",
    contactInfo: "Contact Information",
    address: "Address",
    addressValue: "South Korea",
  },
  zh: {
    title: "联系我们",
    subtitle: "如有任何问题，请通过以下表格与我们联系。",
    name: "姓名",
    email: "电子邮件",
    company: "公司名称",
    subject: "主题",
    message: "留言内容",
    send: "发送邮件",
    sending: "发送中...",
    success: "邮件发送成功。",
    error: "邮件发送失败，请重试。",
    contactInfo: "联系方式",
    address: "地址",
    addressValue: "韩国",
  },
}

export default function ContactPage() {
  const [lang, setLang] = useState<Language>("ko")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const t = translations[lang]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:lhw@prt-kr.com?subject=${encodeURIComponent(
        `[${formData.company}] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`
      )}`

      window.location.href = mailtoLink
      setStatus("success")
      setFormData({ name: "", email: "", company: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />
      
      <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.4)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              {t.subtitle}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-xl font-semibold text-white">{t.contactInfo}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:lhw@prt-kr.com" className="text-slate-300 hover:text-blue-400">
                      lhw@prt-kr.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-slate-300">+82-XX-XXXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{t.address}</p>
                    <p className="text-slate-300">{t.addressValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-200">
                      {t.name} *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-200">
                      {t.email} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-200">
                      {t.company}
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-200">
                      {t.subject} *
                    </label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-200">
                    {t.message} *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500"
                  />
                </div>

                {status === "success" && (
                  <p className="text-sm text-green-400">{t.success}</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">{t.error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 sm:w-auto"
                >
                  {isSubmitting ? t.sending : t.send}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
