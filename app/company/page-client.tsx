"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"

// KPI labels stay English in every locale (per the site-wide KPI rule).
// "Exposure + Lamination" is fixed in this order across all locales.
const KPIS: Array<{ title: string; sub: string }> = [
  { title: "100+ Installed Systems", sub: "Production-proven systems" },
  { title: "Across Asia", sub: "Production references" },
  { title: "Exposure + Lamination", sub: "Core processes" },
  { title: "Repeat Orders", sub: "From existing customers" },
]

// Specification rows mirror the Equipment page formatting: clean
// "Label: Value" pairs, English in every locale, tabular values.
const FOCUS_SPECS = {
  lamination: [
    { label: "Web Width", value: "Up to 350 mm" },
    { label: "Speed", value: "0.1–5.0 m/min" },
    { label: "Temp Accuracy", value: "±3°C" },
  ],
  exposure: [
    { label: "Resolution", value: "20 μm ±2 μm" },
    { label: "Alignment Accuracy", value: "±5 μm" },
    { label: "Vision System", value: "8CCD Vision Alignment" },
  ],
}

const translations = {
  ko: {
    meta: "Company",
    positioning: "We do not build generic equipment.",
    positioningSub: "Leadframe · Semiconductor Packaging 공정에 특화된\nRoll-to-Roll 엔지니어링 전문 기업입니다.",
    positioningBody:
      "PRT는 Leadframe 및 반도체 패키징 생산에 필요한 Roll-to-Roll 공정 장비에 집중해온 엔지니어링 회사입니다. 양산 검증된 Lamination 및 Exposure 시스템을 기반으로, 아시아 주요 고객사에 100기 이상의 장비를 납품해왔습니다.",
    factoryLabel: "Production Environment",
    factoryCaption: "Roll-to-Roll 생산 시스템을 위한 실제 조립 및 장비 준비 환경.",
    engLabel: "Engineering Detail",
    engCopy: "기계 조립과 제어 통합을 직접 엔지니어링 접근 방식으로 처리하여, 신속한 문제 해결과 장기 지원을 가능하게 합니다.",
    historyLabel: "Company History",
    stages: [
      {
        no: "01",
        title: "Foundation",
        desc: "PRETECH 기반 Roll-to-Roll 라미네이터 개발 및 엔지니어링 경험.",
      },
      {
        no: "02",
        title: "Technology Expansion",
        desc: "Leadframe 및 반도체 패키징 응용을 위한 LED UV 노광 시스템 개발.",
      },
      {
        no: "03",
        title: "Production References",
        desc: "아시아 전역 100기 이상 설치, 반복 발주 및 장기 기술 지원.",
      },
    ],
    specializationLabel: "Area of Specialization",
    specializationTitle: "What We Focus On",
    specializationBody:
      "PRT는 반도체 장비 전체 영역을 다루려 하지 않습니다. Leadframe 및 반도체 패키징 제조에서 Roll-to-Roll 연속 이송이 필요한 Lamination과 UV Exposure 공정에 집중합니다. 이러한 집중 경험을 바탕으로 실제 양산 현장에서 신뢰성 있게 작동하는 시스템을 만듭니다.",
    specializationCards: [
      {
        title: "Roll-to-Roll Lamination",
        desc: "드라이필름 포토레지스트의 연속 Lamination. 장력 제어, 온도 균일성, 기포 없는 접합이 핵심입니다.",
        specs: FOCUS_SPECS.lamination,
      },
      {
        title: "Roll-to-Roll Exposure",
        desc: "Leadframe 패턴 형성을 위한 연속 LED UV Exposure. 정렬 정밀도와 반복 재현성이 핵심입니다.",
        specs: FOCUS_SPECS.exposure,
      },
    ],
    whyLabel: "Why Customers Choose PRT",
    whyPoints: [
      {
        title: "Production-Proven, Not Spec Sheet Claims",
        desc: "사양서의 수치가 아니라, 실제 양산 라인에서 검증된 장비로 증명합니다.",
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
    positioningSub: "We are a specialized engineering company\nfocused on stable Roll-to-Roll semiconductor process systems.",
    positioningBody:
      "Our engineering team focuses on Roll-to-Roll process equipment for Leadframe and semiconductor packaging production. We design and deliver production-proven lamination and exposure systems, with 100+ installed systems across Asia and a significant share of repeat orders from existing customers.",
    factoryLabel: "Production Environment",
    factoryCaption: "Real assembly and equipment preparation environment for Roll-to-Roll production systems.",
    engLabel: "Engineering Detail",
    engCopy: "Mechanical assembly and control integration are handled with direct engineering access for faster troubleshooting and long-term support.",
    historyLabel: "Company History",
    stages: [
      {
        no: "01",
        title: "Foundation",
        desc: "PRETECH-based Roll-to-Roll laminator development and engineering experience.",
      },
      {
        no: "02",
        title: "Technology Expansion",
        desc: "LED UV exposure system development for Leadframe and semiconductor packaging applications.",
      },
      {
        no: "03",
        title: "Production References",
        desc: "100+ installed systems across Asia with repeat orders and long-term technical support.",
      },
    ],
    specializationLabel: "Area of Specialization",
    specializationTitle: "What We Focus On",
    specializationBody:
      "PRT does not try to cover the entire semiconductor equipment spectrum. We focus on two specific process steps — lamination and UV exposure — where Roll-to-Roll continuous transport is required in Leadframe and Semiconductor Packaging manufacturing. This focused experience allows us to build systems that perform reliably on real production floors.",
    specializationCards: [
      {
        title: "Roll-to-Roll Lamination",
        desc: "Continuous lamination of dry film photoresist. Tension control, temperature uniformity, and void-free bonding are the critical parameters.",
        specs: FOCUS_SPECS.lamination,
      },
      {
        title: "Roll-to-Roll Exposure",
        desc: "Continuous LED UV exposure for Leadframe patterning. Alignment precision and shot-to-shot repeatability are the critical parameters.",
        specs: FOCUS_SPECS.exposure,
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
      "PRT 专注于面向 Leadframe 及半导体封装生产的 Roll-to-Roll 工艺设备。基于量产验证的 Lamination 与 Exposure 系统，我们已在亚洲主要客户现场交付 100 台以上 Installed Systems。",
    factoryLabel: "Production Environment",
    factoryCaption: "面向 Roll-to-Roll 生产系统的真实组装与设备准备环境。",
    engLabel: "Engineering Detail",
    engCopy: "机械组装与控制集成均采用直接工程介入方式处理，实现更快的故障排查与长期支持。",
    historyLabel: "Company History",
    stages: [
      {
        no: "01",
        title: "Foundation",
        desc: "基于 PRETECH 的 Roll-to-Roll 层压机开发与工程经验。",
      },
      {
        no: "02",
        title: "Technology Expansion",
        desc: "面向 Leadframe 与半导体封装应用的 LED UV 曝光系统开发。",
      },
      {
        no: "03",
        title: "Production References",
        desc: "亚洲累计安装 100 套以上系统，重复订单与长期技术支持。",
      },
    ],
    specializationLabel: "Area of Specialization",
    specializationTitle: "What We Focus On",
    specializationBody:
      "PRT 不试图覆盖半导体设备的全领域。我们专注于 Leadframe 与半导体封装制造中需要 Roll-to-Roll 连续传输的两个工艺步骤 — Lamination 与 UV Exposure。这种集中积累的经验使我们能够制造在真实量产现场可靠运行的系统。",
    specializationCards: [
      {
        title: "Roll-to-Roll Lamination",
        desc: "干膜光刻胶的连续 Lamination。张力控制、温度均匀性和无气泡粘合是关键参数。",
        specs: FOCUS_SPECS.lamination,
      },
      {
        title: "Roll-to-Roll Exposure",
        desc: "用于 Leadframe 图案形成的连续 LED UV Exposure。对准精度和逐次重复性是关键参数。",
        specs: FOCUS_SPECS.exposure,
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
  const [lang, setLang] = useLanguage()
  const t = translations[lang]

  return (
    <main className="min-h-svh bg-slate-950">
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Hero / Positioning ─────────────────────────────── */}
      <section className="relative flex min-h-[70vh] items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Blue diagonal accent */}
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{ background: "linear-gradient(105deg, transparent 45%, rgba(25,118,210,0.6) 45.5%, transparent 46%)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-32 lg:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {t.meta}
          </p>
          <h1 className="mb-7 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.positioning}
          </h1>
          <p
            className="mb-8 min-h-[5.5rem] whitespace-pre-line text-2xl font-light leading-relaxed sm:min-h-[6.5rem] sm:text-3xl"
            style={{ color: "#1976D2" }}
          >
            {t.positioningSub}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            {t.positioningBody}
          </p>

          {/* KPI grid — substantial, square, thin dividers */}
          <div className="mt-16 grid grid-cols-2 border-l border-t border-slate-800 lg:grid-cols-4">
            {KPIS.map((k, idx) => (
              <div
                key={idx}
                className="border-b border-r border-slate-800 bg-slate-900/30 p-6 lg:p-7"
              >
                <span
                  aria-hidden="true"
                  className="mb-4 block h-0.5 w-6"
                  style={{ backgroundColor: "#1976D2" }}
                />
                <p className="text-lg font-bold leading-snug text-white lg:text-xl">{k.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 lg:text-sm">{k.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Production Environment — wide factory band ──────── */}
      <section className="relative border-t border-slate-800/60 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.factoryLabel}
          </p>
          <div className="relative h-[240px] w-full overflow-hidden bg-black sm:h-[340px] lg:h-[440px]">
            <Image
              src="/images/company_factory_overview.png"
              alt="PRT production and assembly floor"
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
            {/* very subtle bottom gradient for integration — details stay visible */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(2,6,23,0.35) 0%, transparent 35%)" }}
            />
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            {t.factoryCaption}
          </p>
        </div>
      </section>

      {/* ── Company History — 3-stage structure ────────────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.historyLabel}
          </p>

          <div className="grid border-l border-t border-slate-800 sm:grid-cols-3">
            {t.stages.map((s, idx) => (
              <div
                key={idx}
                className="border-b border-r border-slate-800 bg-slate-950/30 p-8 lg:p-10"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold tabular-nums" style={{ color: "#1976D2" }}>
                    {s.no}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Stage
                  </span>
                </div>
                <div className="mt-5 h-px w-10" style={{ backgroundColor: "#1976D2" }} />
                <h3 className="mt-5 text-xl font-bold text-white lg:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 lg:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineering Detail — medium image + short copy ───── */}
      <section className="relative border-t border-slate-800/60 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.engLabel}
          </p>
          <div className="grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-12">
            <div className="relative aspect-[1527/1030] w-full overflow-hidden bg-black lg:col-span-3">
              <Image
                src="/images/company_engineering_detail-v2.png"
                alt="PRT control cabinet assembly and machine frame / cable routing detail"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                quality={90}
                className="object-cover object-center"
              />
            </div>
            <p className="text-base leading-relaxed text-slate-400 lg:col-span-2">
              {t.engCopy}
            </p>
          </div>
        </div>
      </section>

      {/* ── Specialization / What We Focus On ──────────────── */}
      <section style={{ backgroundColor: "rgb(30, 41, 59)" }} className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.specializationLabel}
          </p>
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">{t.specializationTitle}</h2>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-slate-300">
            {t.specializationBody}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.specializationCards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden border border-slate-700 bg-slate-900/60 p-8"
              >
                <div
                  className="absolute left-0 right-0 top-0 h-px"
                  style={{ background: "linear-gradient(to right, transparent, rgba(25,118,210,0.5), transparent)" }}
                />
                <h3 className="mb-3 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mb-6 text-base leading-relaxed text-slate-300">{card.desc}</p>

                {/* Specifications — same Label: Value formatting as the Equipment page */}
                <div className="divide-y divide-slate-700/60 border-t border-slate-700">
                  {card.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-baseline justify-between gap-4 py-2.5">
                      <span className="text-xs font-medium leading-relaxed text-slate-400">
                        {spec.label}:
                      </span>
                      <span className="text-right text-sm font-semibold leading-relaxed tabular-nums text-slate-100">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Customers Choose PRT ───────────────────────── */}
      <section className="relative bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.whyLabel}
          </p>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {t.whyPoints.map((point, idx) => (
              <div key={idx} className="border-l-2 pl-6" style={{ borderColor: "rgba(25,118,210,0.35)" }}>
                <h3 className="mb-2.5 text-lg font-semibold text-white">{point.title}</h3>
                <p className="text-base leading-relaxed text-slate-400">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Info — quiet, factual, data-sheet-like ─── */}
      <section className="relative bg-slate-950">
        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.infoLabel}
          </p>

          <div className="mb-12 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {t.infoItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-800 pb-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="text-sm leading-relaxed text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact info row */}
          <div className="mb-12 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#1976D2" }} />
              <a href="tel:+82314691103" className="transition-colors hover:text-white">+82-31-469-1103</a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#1976D2" }} />
              <a href="mailto:sales@prt-kr.com" className="transition-colors hover:text-white">sales@prt-kr.com</a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "#1976D2" }} />
              <span>Anyang-si, Gyeonggi-do, Republic of Korea</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0D47A1]"
              style={{ backgroundColor: "#1976D2" }}
            >
              {t.productsCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-600 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
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
