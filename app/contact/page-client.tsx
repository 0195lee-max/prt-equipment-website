"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Clock, Printer } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage, type Language } from "@/hooks/use-language"

const translations = {
  ko: {
    title: "Contact Sales",
    subtitle: "장비 도입, 사양 확인, 기술 지원 등 궁금하신 내용을 남겨주세요.",
    formSection: "Send a Message",
    infoSection: "Contact Information",
    name: "이름",
    email: "이메일",
    company: "회사명",
    subject: "제목",
    message: "문의 내용",
    webWidth: "Web Width (mm)",
    processType: "공정 유형",
    processTypes: ["선택하세요", "Roll-to-Roll Lamination", "Roll-to-Roll Exposure", "Both (Lamination + Exposure)", "기타"],
    send: "Send Message",
    sending: "전송 중...",
    success: "문의가 접수되었습니다. 영업일 기준 1~2일 내 답변드리겠습니다.",
    error: "전송에 실패했습니다. sales@prt-kr.com 으로 직접 연락해 주세요.",
    address: "본사 주소",
    factory: "공장 주소",
    hours: "영업 시간",
    hoursValue: "월 – 금  09:00 – 18:00 (KST)",
    hqAddress: "경기도 안양시 동안구 엘에스로 76\n디오밸리 425호",
    factoryAddress: "경기도 시흥시 다지골길 15-3",
  },
  en: {
    title: "Contact Sales",
    subtitle: "Equipment inquiries, technical specifications, and field support.",
    formSection: "Send a Message",
    infoSection: "Contact Information",
    name: "Name",
    email: "Email",
    company: "Company",
    subject: "Subject",
    message: "Message",
    webWidth: "Web Width (mm)",
    processType: "Process Type",
    processTypes: ["Select one", "Roll-to-Roll Lamination", "Roll-to-Roll Exposure", "Both (Lamination + Exposure)", "Other"],
    send: "Send Message",
    sending: "Sending...",
    success: "Your message has been received. We will respond within 1–2 business days.",
    error: "Failed to send. Please contact us directly at sales@prt-kr.com.",
    address: "Headquarters",
    factory: "Factory",
    hours: "Business Hours",
    hoursValue: "Mon – Fri  09:00 – 18:00 (KST)",
    hqAddress: "Room 425, The O Valley\n76, LS-ro, Dongan-gu\nAnyang-si, Gyeonggi-do 14117\nRepublic of Korea",
    factoryAddress: "15-3, Dajigol-gil\nSiheung-si, Gyeonggi-do 14957\nRepublic of Korea",
  },
  zh: {
    title: "Contact Sales",
    subtitle: "如需设备咨询、技术规格确认或现场支持，请填写以下表格。",
    formSection: "Send a Message",
    infoSection: "Contact Information",
    name: "姓名",
    email: "电子邮件",
    company: "公司名称",
    subject: "主题",
    message: "留言内容",
    webWidth: "Web Width (mm)",
    processType: "工艺类型",
    processTypes: ["请选择", "Roll-to-Roll Lamination", "Roll-to-Roll Exposure", "Both (Lamination + Exposure)", "其他"],
    send: "Send Message",
    sending: "发送中...",
    success: "留言已收到。我们将在1-2个工作日内回复您。",
    error: "发送失败，请直接发送邮件至 sales@prt-kr.com。",
    address: "总部地址",
    factory: "工厂地址",
    hours: "营业时间",
    hoursValue: "周一 – 周五  09:00 – 18:00 (KST)",
    hqAddress: "Room 425, The O Valley\n76, LS-ro, Dongan-gu\nAnyang-si, Gyeonggi-do 14117\n大韩民国",
    factoryAddress: "15-3, Dajigol-gil\nSiheung-si, Gyeonggi-do 14957\n大韩民国",
  },
}

export default function ContactPage({ initialLang }: { initialLang?: Language }) {
  const [lang, setLang] = useLanguage(initialLang)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    webWidth: "",
    processType: "",
  })

  const t = translations[lang]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const bodyLines = [
        `From: ${formData.name}`,
        `Email: ${formData.email}`,
        `Company: ${formData.company}`,
        formData.webWidth ? `Web Width: ${formData.webWidth}mm` : "",
        formData.processType ? `Process Type: ${formData.processType}` : "",
        "",
        formData.message,
      ].filter(Boolean).join("\n")

      const mailtoLink = `mailto:sales@prt-kr.com?subject=${encodeURIComponent(
        `[${formData.company || "Inquiry"}] ${formData.subject}`
      )}&body=${encodeURIComponent(bodyLines)}`

      window.location.href = mailtoLink
      setStatus("success")
      setFormData({ name: "", email: "", company: "", subject: "", message: "", webWidth: "", processType: "" })
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  return (
    <main className="min-h-svh bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />

      <div className="relative min-h-svh bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.4)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Page header */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              PRT Co., Ltd.
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact info panel */}
            <div className="space-y-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                {t.infoSection}
              </h2>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Email</p>
                  <a
                    href="mailto:sales@prt-kr.com"
                    className="text-sm text-slate-200 hover:text-white transition-colors"
                  >
                    sales@prt-kr.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50">
                  <Phone className="h-4 w-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Tel</p>
                  <a
                    href="tel:+82314691103"
                    className="text-sm text-slate-200 hover:text-white transition-colors"
                  >
                    +82-31-469-1103
                  </a>
                </div>
              </div>

              {/* Fax */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50">
                  <Printer className="h-4 w-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Fax</p>
                  <p className="text-sm text-slate-300">+82-31-469-1104</p>
                </div>
              </div>

              {/* HQ Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50">
                  <MapPin className="h-4 w-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">
                    {t.address}
                  </p>
                  <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                    {t.hqAddress}
                  </p>
                </div>
              </div>

              {/* Factory Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50">
                  <MapPin className="h-4 w-4 text-slate-600" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">
                    {t.factory}
                  </p>
                  <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">
                    {t.factoryAddress}
                  </p>
                </div>
              </div>

              {/* Business hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50">
                  <Clock className="h-4 w-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">
                    {t.hours}
                  </p>
                  <p className="text-sm text-slate-300">{t.hoursValue}</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-300">
                {t.formSection}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.name} *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.email} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.company}
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="webWidth" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.webWidth}
                    </label>
                    <Input
                      id="webWidth"
                      placeholder="e.g. 350"
                      value={formData.webWidth}
                      onChange={(e) => update("webWidth", e.target.value)}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="processType" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.processType}
                    </label>
                    <select
                      id="processType"
                      value={formData.processType}
                      onChange={(e) => update("processType", e.target.value)}
                      className="w-full rounded-md border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-slate-600"
                    >
                      {t.processTypes.map((opt, idx) => (
                        <option key={idx} value={idx === 0 ? "" : opt} className="bg-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {t.subject} *
                    </label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {t.message} *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-600"
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
                  className="w-full sm:w-auto font-semibold text-slate-900 hover:opacity-90"
                  style={{ backgroundColor: "#1976D2" }}
                >
                  {isSubmitting ? t.sending : t.send}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </main>
  )
}
