"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { Footer } from "@/components/footer"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "Company",
    positioning: "We do not build generic equipment.",
    positioningSub: "Leadframe · Semiconductor Packaging 공정에 특화된\nRoll-to-Roll 엔지니어링 전문 기업입니다.",
    positioningBody:
      "PRT는 Leadframe 및 반도체 패키징 생산을 위한 Roll-to-Roll 공정 장비에 집중해온 엔지니어링 회사입니다. 양산 검증된 Lamination 및 Exposure 시스템을 기반으로, 아시아 주요 고객사에 50기 이상의 Installed Systems를 납품해왔습니다.",
    pillars: [
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "50+", label: "Installed Systems", sub: "Across Asia" },
      { value: "Focused", label: "Lamination + Exposure", sub: "" },
    ],
    timelineLabel: "Company History",
    timeline: [
      { year: "2010", title: "PRETECH Founded", desc: "Roll-to-Roll Laminator 개발 착수. Leadframe 공정 응용에 집중." },
      { year: "2011", title: "First Laminator Delivery", desc: "Leadframe 양산 라인용 PRETECH Roll-to-Roll 드라이필름 Lamination 시스템 첫 납품." },
      { year: "2014", title: "Exposure System Development", desc: "Roll-to-Roll Leadframe 패턴 형성용 LED UV Exposure 기술 개발." },
      { year: "2018", title: "PRT Brand Established", desc: "Roll-to-Roll 기술 브랜드와 장비 사업 확장을 위해 PRT Co., Ltd. 설립." },
      { year: "2020", title: "Asia Expansion", desc: "중국·말레이시아 반도체 패키징 제조사로 납품 확대." },
      { year: "2024", title: "Present", desc: "아시아 50기 이상 설치. 기존 양산 고객사로부터 반복 발주 지속." },
    ],
    specializationLabel: "Area of Specialization",
    specializationTitle: "What We Focus On",
    specializationBody:
      "PRT는 반도체 장비 전체 영역을 다루려 하지 않습니다. Leadframe과 반도체 패키징 제조에서 Roll-to-Roll 연속 이송이 요구되는 Lamination과 UV Exposure 두 가지 공정에 집중합니다. 이러한 집중된 경험을 바탕으로 실제 양산 현장에서 신뢰성 있게 작동하는 시스템을 만듭니다.",
    specializationCards: [
      {
        title: "Roll-to-Roll Lamination",
        desc: "드라이필름 포토레지스트의 연속 Lamination. 장력 제어, 온도 균일성, 기포 없는 접합이 핵심입니다.",
        specs: ["Web Width: 최대 350mm", "Speed: 0.1~5.0 m/min", "Temp Accuracy: ±3°C"],
      },
      {
        title: "Roll-to-Roll Exposure",
        desc: "Leadframe 패턴 형성을 위한 연속 LED UV Exposure. 정렬 정밀도와 반복 재현성이 핵심입니다.",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "8CCD Vision System"],
      },
    ],
    whyLabel: "Why Customers Choose PRT",
    whyPoints: [
      {
        title: "Production-Proven, Not Spec Sheet Claims",
        desc: "사양서에 적힌 수치가 아니라, 실제 양산 라인에서 수년간 연속 가동 중인 장비로 증명합니다.",
      },
      {
        title: "Direct Engineering Support",
        desc: "PRT 장비는 현장 엔지니어가 핵심 기계 구조를 직접 진단·정비할 수 있도록 설계되어, 불필요한 다운타임과 커뮤니케이션 지연을 줄입니다.",
      },
      {
        title: "Engineered to Your Line Conditions",
        desc: "Web Width, 이송 속도, 공정 구성을 고객의 라인 조건에 맞게 설계합니다. 표준 장비 + 선택 옵션 방식이 아닙니다.",
      },
      {
        title: "Long-Term Customer Relationships",
        desc: "다수의 고객사가 첫 도입 이후 반복 발주를 하고 있습니다. 장비뿐 아니라 공정 운용까지 함께 합니다.",
      },
    ],
    infoLabel: "Company Information",
    infoItems: [
      { label: "Legal Name", value: "PRT Co., Ltd. (㈜피알티)" },
      { label: "Established", value: "2018 (전신 PRETECH 2010년 창업)" },
      { label: "Core Products", value: "Roll-to-Roll Laminator, Roll-to-Roll Exposure System" },
      { label: "Applications", value: "Leadframe, Semiconductor Packaging" },
      { label: "Headquarters", value: "경기도 안양시 동안구 LS로 76, 더오밸리 425호" },
      { label: "Factory", value: "경기도 시흥시 다지골길 15-3" },
    ],
    contactCta: "Contact Sales",
    productsCta: "View Equipment",
  },
  en: {
    meta: "Company",
    positioning: "We do not build generic equipment.",
    positioningSub: "We are a specialized engineering company\nfocused on stable RTR semiconductor process systems.",
    positioningBody:
      "Since 2010, our engineering team has focused on Roll-to-Roll process equipment for Leadframe and semiconductor packaging production. We design and deliver production-proven lamination and exposure systems, with 50+ installed systems across Asia and a significant share of repeat orders from existing customers.",
    pillars: [
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "50+", label: "Installed Systems", sub: "Across Asia" },
      { value: "Focused", label: "Lamination + Exposure", sub: "" },
    ],
    timelineLabel: "Company History",
    timeline: [
      { year: "2010", title: "PRETECH Founded", desc: "Roll-to-Roll laminator development begins, focused on Leadframe process applications." },
      { year: "2011", title: "First Laminator Delivery", desc: "First PRETECH Roll-to-Roll dry film lamination system delivered for a Leadframe production line." },
      { year: "2014", title: "Exposure System Development", desc: "LED UV exposure technology developed for Roll-to-Roll Leadframe patterning applications." },
      { year: "2018", title: "PRT Brand Established", desc: "PRT Co., Ltd. established to expand the Roll-to-Roll technology brand and equipment business." },
      { year: "2020", title: "Asia Expansion", desc: "Deliveries expanded to semiconductor packaging manufacturers in China and Malaysia." },
      { year: "2024", title: "Present", desc: "50+ systems installed across Asia, with repeat orders continuing from existing production customers." },
    ],
    specializationLabel: "Area of Specialization",
    specializationTitle: "What We Focus On",
    specializationBody:
      "PRT does not try to cover the entire semiconductor equipment spectrum. We focus on two specific process steps — lamination and UV exposure — where Roll-to-Roll continuous transport is required in Leadframe and Semiconductor Packaging manufacturing. This focused experience allows us to build systems that perform reliably on real production floors.",
    specializationCards: [
      {
        title: "Roll-to-Roll Lamination",
        desc: "Continuous lamination of dry film photoresist. Tension control, temperature uniformity, and void-free bonding are the critical parameters.",
        specs: ["Web Width: Up to 350mm", "Speed: 0.1~5.0 m/min", "Temp Accuracy: ±3°C"],
      },
      {
        title: "Roll-to-Roll Exposure",
        desc: "Continuous LED UV exposure for Leadframe patterning. Alignment precision and shot-to-shot repeatability are the critical parameters.",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "8CCD Vision System"],
      },
    ],
    whyLabel: "Why Customers Choose PRT",
    whyPoints: [
      {
        title: "Production-Proven, Not Spec Sheet Claims",
        desc: "We demonstrate capability through systems that have been running continuously on real production lines for years — not through numbers on a datasheet.",
      },
      {
        title: "Direct Engineering Support",
        desc: "PRT equipment is designed so on-site engineers can diagnose and maintain key mechanical structures directly, reducing unnecessary downtime and communication delays.",
      },
      {
        title: "Engineered to Your Line Conditions",
        desc: "Web width, transport speed, and process configuration are designed to match your specific line requirements — not a standard product with optional add-ons.",
      },
      {
        title: "Long-Term Customer Relationships",
        desc: "A significant share of our orders come from customers who have already installed PRT equipment. We stay involved beyond delivery.",
      },
    ],
    infoLabel: "Company Information",
    infoItems: [
      { label: "Legal Name", value: "PRT Co., Ltd. (㈜피알티)" },
      { label: "Established", value: "2018 (predecessor PRETECH founded 2010)" },
      { label: "Core Products", value: "Roll-to-Roll Laminators, Roll-to-Roll Exposure Systems" },
      { label: "Applications", value: "Leadframe, Semiconductor Packaging" },
      { label: "Headquarters", value: "Room 425, The O Valley, 76 LS-ro, Dongan-gu, Anyang-si, Gyeonggi-do 14117" },
      { label: "Factory", value: "15-3 Dajigol-gil, Siheung-si, Gyeonggi-do 14957" },
    ],
    contactCta: "Contact Sales",
    productsCta: "View Equipment",
  },
  zh: {
    meta: "Company",
    positioning: "We do not build generic equipment.",
    positioningSub: "我们是专注于 Leadframe 与半导体封装工艺的\nRoll-to-Roll 工程公司。",
    positioningBody:
      "PRT 专注于面向 Leadframe 及半导体封装生产的 Roll-to-Roll 工艺设备。基于量产验证的 Lamination 与 Exposure 系统，我们已在亚洲主要客户现场交付 50 台以上 Installed Systems。",
    pillars: [
      { value: "Since 2010", label: "Engineering", sub: "" },
      { value: "50+", label: "Installed Systems", sub: "Across Asia" },
      { value: "Focused", label: "Lamination + Exposure", sub: "" },
    ],
    timelineLabel: "Company History",
    timeline: [
      { year: "2010", title: "PRETECH Founded", desc: "Roll-to-Roll Laminator 研发启动，聚焦 Leadframe 工艺应用。" },
      { year: "2011", title: "First Laminator Delivery", desc: "首套 PRETECH Roll-to-Roll 干膜 Lamination 系统交付至 Leadframe 生产线。" },
      { year: "2014", title: "Exposure System Development", desc: "面向 Roll-to-Roll Leadframe 图案形成应用的 LED UV Exposure 技术开发完成。" },
      { year: "2018", title: "PRT Brand Established", desc: "PRT Co., Ltd. 成立，扩展 Roll-to-Roll 技术品牌及设备业务。" },
      { year: "2020", title: "Asia Expansion", desc: "向中国与马来西亚的半导体封装制造商扩展交付范围。" },
      { year: "2024", title: "Present", desc: "亚洲累计交付 50 套以上系统，现有量产客户重复下单持续进行。" },
    ],
    specializationLabel: "Area of Specialization",
    specializationTitle: "What We Focus On",
    specializationBody:
      "PRT 不试图覆盖半导体设备的全领域。我们专注于 Leadframe 与半导体封装制造中需要 Roll-to-Roll 连续传输的两个工艺步骤 — Lamination 与 UV Exposure。这种集中积累的经验使我们能够制造在真实量产现场可靠运行的系统。",
    specializationCards: [
      {
        title: "Roll-to-Roll Lamination",
        desc: "干膜光刻胶的连续 Lamination。张力控制、温度均匀性和无气泡粘合是关键参数。",
        specs: ["Web Width: 最大 350mm", "Speed: 0.1~5.0 m/min", "Temp Accuracy: ±3°C"],
      },
      {
        title: "Roll-to-Roll Exposure",
        desc: "用于 Leadframe 图案形成的连续 LED UV Exposure。对准精度和逐次重复性是关键参数。",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "8CCD Vision System"],
      },
    ],
    whyLabel: "Why Customers Choose PRT",
    whyPoints: [
      {
        title: "Production-Proven, Not Spec Sheet Claims",
        desc: "我们通过在真实量产线上连续运行多年的系统来证明能力，而不是通过数据表上的数字。",
      },
      {
        title: "Direct Engineering Support",
        desc: "PRT 设备的设计使现场工程师可直接诊断与维护关键机械结构，减少不必要的停机与沟通延迟。",
      },
      {
        title: "Engineered to Your Line Conditions",
        desc: "Web Width、传输速度和工艺配置均按照您的具体生产线条件设计，而非标准产品加选配模式。",
      },
      {
        title: "Long-Term Customer Relationships",
        desc: "我们相当大比例的订单来自已安装 PRT 设备的客户。我们在交付后持续保持参与。",
      },
    ],
    infoLabel: "Company Information",
    infoItems: [
      { label: "Legal Name", value: "PRT Co., Ltd. (㈜피알티)" },
      { label: "Established", value: "2018 (前身 PRETECH 创立于 2010 年)" },
      { label: "Core Products", value: "Roll-to-Roll Laminator, Roll-to-Roll Exposure System" },
      { label: "Applications", value: "Leadframe, Semiconductor Packaging" },
      { label: "Headquarters", value: "韩国京畿道安养市东安区 LS 路 76 号 The O Valley 425 室" },
      { label: "Factory", value: "韩国京畿道始兴市 다지골길 15-3" },
    ],
    contactCta: "Contact Sales",
    productsCta: "View Equipment",
  },
}

export default function CompanyPage() {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  return (
    <main className="min-h-svh bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Hero / Positioning ─────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Gold diagonal accent */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 45%, rgba(199,168,109,0.6) 45.5%, transparent 46%)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-32 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {t.meta}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
            {t.positioning}
          </h1>
          <p className="text-xl font-light whitespace-pre-line leading-relaxed mb-8 sm:text-2xl min-h-[5rem] sm:min-h-[6rem]" style={{ color: "#C7A86D" }}>
            {t.positioningSub}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 min-h-[7rem]">
            {t.positioningBody}
          </p>

          {/* Pillar stats */}
          <div className="mt-14 flex flex-wrap gap-10 sm:gap-16">
            {t.pillars.map((p, idx) => (
              <div key={idx}>
                <div className="text-4xl font-semibold" style={{ color: "#C7A86D" }}>{p.value}</div>
                <p className="mt-1 text-sm font-medium text-slate-300">{p.label}</p>
                {p.sub && <p className="text-xs text-slate-400">{p.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.timelineLabel}
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-slate-700 hidden sm:block" />

            <div className="space-y-0">
              {t.timeline.map((item, idx) => (
                <div key={idx} className="relative flex gap-8 pb-10 last:pb-0">
                  {/* Year node */}
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-26">
                    <div
                      className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 text-[10px] font-bold"
                      style={{
                        borderColor: "#C7A86D",
                        color: "#C7A86D",
                        backgroundColor: "rgb(15, 23, 42)",
                      }}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="text-xs font-bold tracking-widest font-mono"
                        style={{ color: "#C7A86D" }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-xl">{item.desc}</p>
                    {idx < t.timeline.length - 1 && (
                      <div className="mt-10 sm:hidden h-px w-full bg-slate-800" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialization ─────────────────────────────────── */}
      <section style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.specializationLabel}
          </p>
          <h2 className="text-2xl font-bold text-white mb-6">{t.specializationTitle}</h2>
          <p className="max-w-2xl text-base text-slate-400 leading-relaxed mb-12">
            {t.specializationBody}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.specializationCards.map((card, idx) => (
              <div
                key={idx}
                className="relative rounded-lg border border-slate-700 bg-slate-900/60 p-7 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(to right, transparent, rgba(199,168,109,0.5), transparent)" }}
                />
                <h3 className="text-base font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{card.desc}</p>
                <div className="space-y-2 border-t border-slate-700/60 pt-4">
                  {card.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-3 text-sm font-mono text-slate-200">
                      <span className="h-px w-4 flex-shrink-0" style={{ backgroundColor: "#C7A86D" }} />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why PRT ────────────────────────────────────────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.whyLabel}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.whyPoints.map((point, idx) => (
              <div key={idx} className="border-l-2 pl-6" style={{ borderColor: "rgba(199,168,109,0.3)" }}>
                <h3 className="text-sm font-semibold text-slate-200 mb-2">{point.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Info ───────────────────────────────────── */}
      <section className="relative bg-slate-950">
        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.infoLabel}
          </p>

          <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2 mb-12">
            {t.infoItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-800 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">{item.label}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact info row */}
          <div className="flex flex-wrap gap-6 mb-12 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#C7A86D" }} />
              <a href="tel:+82314691103" className="hover:text-white transition-colors">+82-31-469-1103</a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#C7A86D" }} />
              <a href="mailto:sales@prt-kr.com" className="hover:text-white transition-colors">sales@prt-kr.com</a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "#C7A86D" }} />
              <span>Anyang-si, Gyeonggi-do, Republic of Korea</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C7A86D" }}
            >
              {t.productsCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              {t.contactCta}
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}
