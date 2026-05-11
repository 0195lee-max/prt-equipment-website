"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

type Language = "ko" | "en" | "zh"

const translations = {
  ko: {
    meta: "회사 소개",
    positioning: "우리는 대량 생산 장비 제조사가 아닙니다.",
    positioningSub: "리드프레임 · 반도체 패키징 공정에 특화된\nRoll-to-Roll 엔지니어링 전문 기업입니다.",
    positioningBody:
      "PRT는 범용 장비를 만들지 않습니다. 2010년부터 리드프레임 양산 공정만을 집중적으로 연구하고, 실제 양산 현장에서 검증된 Roll-to-Roll 라미네이션 및 노광 시스템을 설계합니다. 지금까지 아시아 5개국 양산 현장에 50기 이상을 납품했으며, 다수의 고객사로부터 반복 발주를 받고 있습니다.",
    pillars: [
      { value: "15+", label: "엔지니어링 경험", sub: "2010년부터" },
      { value: "50+", label: "납품 시스템", sub: "아시아 5개국" },
      { value: "2", label: "핵심 공정", sub: "라미네이션 + 노광" },
    ],
    timelineLabel: "회사 연혁",
    timeline: [
      { year: "2010", title: "PRETECH 설립", desc: "Roll-to-Roll 라미네이터 개발 착수. 리드프레임 공정 특화 설계 시작." },
      { year: "2011", title: "첫 라미네이터 납품", desc: "리드프레임 양산 라인에 Roll-to-Roll 드라이필름 라미네이션 시스템 최초 납품." },
      { year: "2014", title: "노광 시스템 개발", desc: "LED UV 노광 기술 자체 개발. 리드프레임 패턴 형성 전용 Roll-to-Roll 노광 시스템 공급 시작." },
      { year: "2018", title: "PRT 브랜드 설립", desc: "㈜피알티 법인 설립. Precision Roll-to-Roll Technology 브랜드로 리포지셔닝." },
      { year: "2020", title: "해외 납품 확대", desc: "중국·말레이시아 반도체 패키징 제조사로 납품 범위 확장. 아시아 양산 레퍼런스 구축." },
      { year: "2024", title: "현재", desc: "아시아 5개국 50기 이상 납품. 주요 고객사 반복 발주 지속. 차세대 고정밀 노광 시스템 개발 중." },
    ],
    specializationLabel: "전문화 영역",
    specializationTitle: "우리가 집중하는 것",
    specializationBody:
      "PRT는 반도체 장비 전반을 다루지 않습니다. 리드프레임과 반도체 패키징 공정에서 Roll-to-Roll 연속 이송 방식이 요구되는 라미네이션·노광 공정 두 가지에 집중합니다. 넓게 보지 않고 깊게 파고든 결과, 양산 현장에서 실제로 작동하는 장비를 만들 수 있었습니다.",
    specializationCards: [
      {
        title: "Roll-to-Roll 라미네이션",
        desc: "드라이필름 포토레지스트의 연속 라미네이션. 장력 제어, 온도 균일성, 기포 없는 접합이 핵심입니다.",
        specs: ["Web Width: 최대 350mm", "Speed: 0.1~5.0 m/min", "Temp Accuracy: ±3°C"],
      },
      {
        title: "Roll-to-Roll 노광",
        desc: "리드프레임 패턴 형성을 위한 연속 LED UV 노광. 정렬 정밀도와 반복 재현성이 핵심입니다.",
        specs: ["Resolution: 20μm ±2μm", "Alignment: ±5μm", "8CCD Vision System"],
      },
    ],
    whyLabel: "PRT가 선택받는 이유",
    whyPoints: [
      {
        title: "이론이 아닌 현장 검증",
        desc: "사양서에 적힌 수치가 아니라, 실제 양산 라인에서 수년간 연속 가동 중인 장비로 증명합니다.",
      },
      {
        title: "문제 발생 시 빠른 대응",
        desc: "PRT 장비는 현장 엔지니어가 직접 진단할 수 있도록 설계되어 있습니다. 복잡하게 감추지 않습니다.",
      },
      {
        title: "고객별 맞춤 엔지니어링",
        desc: "Web Width, 이송 속도, 공정 구성을 고객의 라인 조건에 맞게 설계합니다. 표준 장비 + 선택 옵션 방식이 아닙니다.",
      },
      {
        title: "장기 관계 기반 납품",
        desc: "다수의 고객사가 첫 도입 이후 반복 발주를 하고 있습니다. 장비뿐 아니라 공정 운용까지 함께 합니다.",
      },
    ],
    infoLabel: "회사 정보",
    infoItems: [
      { label: "법인명", value: "㈜피알티" },
      { label: "설립", value: "2018년 (전신 PRETECH 2010년 창업)" },
      { label: "대표 제품", value: "Roll-to-Roll 라미네이터, Roll-to-Roll 노광 시스템" },
      { label: "주요 응용", value: "리드프레임, 반도체 패키징" },
      { label: "본사", value: "경기도 안양시 동안구 LS로 76, 더오밸리 425호" },
      { label: "공장", value: "경기도 시흥시 다지골길 15-3" },
    ],
    contactCta: "문의하기",
    productsCta: "장비 보기",
  },
  en: {
    meta: "Company",
    positioning: "We are not a mass-production equipment maker.",
    positioningSub: "We are a specialized engineering company\nfocused on stable RTR semiconductor process systems.",
    positioningBody:
      "PRT does not build general-purpose equipment. Since 2010, we have focused exclusively on Leadframe mass-production processes — engineering and delivering production-proven Roll-to-Roll lamination and exposure systems. We have delivered 50+ systems across five countries in Asia, and a significant portion of our business comes from repeat orders by existing customers.",
    pillars: [
      { value: "15+", label: "Years of Engineering", sub: "Since 2010" },
      { value: "50+", label: "Installed Systems", sub: "5 Countries in Asia" },
      { value: "2", label: "Core Processes", sub: "Lamination + Exposure" },
    ],
    timelineLabel: "Company History",
    timeline: [
      { year: "2010", title: "PRETECH Founded", desc: "Roll-to-Roll laminator development begins. Specialized engineering for Leadframe process applications." },
      { year: "2011", title: "First Laminator Delivery", desc: "First Roll-to-Roll dry film lamination system delivered to a Leadframe mass production line." },
      { year: "2014", title: "Exposure System Development", desc: "Proprietary LED UV exposure technology developed. Roll-to-Roll exposure systems for Leadframe patterning deployed." },
      { year: "2018", title: "PRT Brand Established", desc: "PRT Co., Ltd. incorporated. Repositioned under Precision Roll-to-Roll Technology brand." },
      { year: "2020", title: "Asia Expansion", desc: "Deliveries expanded to semiconductor packaging manufacturers in China and Malaysia. Asia production references established." },
      { year: "2024", title: "Present", desc: "50+ systems installed across 5 countries in Asia. Repeat orders continuing from major customers. Next-generation high-precision exposure systems in development." },
    ],
    specializationLabel: "Area of Specialization",
    specializationTitle: "What We Focus On",
    specializationBody:
      "PRT does not cover the full spectrum of semiconductor equipment. We focus on two specific process steps — lamination and UV exposure — where Roll-to-Roll continuous transport is required in Leadframe and Semiconductor Packaging manufacturing. The depth of this focus is what allows us to build equipment that actually works on the production floor.",
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
        title: "Fast Response When Issues Arise",
        desc: "PRT equipment is designed so that on-site engineers can diagnose problems directly. We do not hide complexity behind proprietary black boxes.",
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
    contactCta: "Contact Us",
    productsCta: "View Equipment",
  },
  zh: {
    meta: "公司介绍",
    positioning: "我们不是量产设备制造商。",
    positioningSub: "我们是专注于稳定RTR半导体工艺系统的\n专业化工程公司。",
    positioningBody:
      "PRT不生产通用设备。自2010年起，我们专注于引线框架量产工艺，设计并交付经过量产验证的卷对卷层压与曝光系统。迄今为止，我们已在亚洲五个国家交付50套以上系统，相当大比例的订单来自现有客户的重复采购。",
    pillars: [
      { value: "15+", label: "工程经验", sub: "自2010年起" },
      { value: "50+", label: "已交付系统", sub: "亚洲5个国家" },
      { value: "2", label: "核心工艺", sub: "层压 + 曝光" },
    ],
    timelineLabel: "公司历程",
    timeline: [
      { year: "2010", title: "PRETECH成立", desc: "开始卷对卷层压机研发。专注引线框架工艺的专业化设计正式启动。" },
      { year: "2011", title: "首台层压机交付", desc: "首套卷对卷干膜层压系统交付至引线框架量产线。" },
      { year: "2014", title: "曝光系统研发", desc: "自主研发LED UV曝光技术，开始向引线框架图案形成工艺供应卷对卷曝光系统。" },
      { year: "2018", title: "PRT品牌成立", desc: "㈜피알티法人成立，以Precision Roll-to-Roll Technology品牌重新定位。" },
      { year: "2020", title: "亚洲市场扩展", desc: "向中国、马来西亚半导体封装制造商扩展交付范围，建立亚洲量产参考案例。" },
      { year: "2024", title: "现状", desc: "亚洲5国已交付50套以上系统，主要客户持续重复下单，新一代高精度曝光系统研发中。" },
    ],
    specializationLabel: "专业化领域",
    specializationTitle: "我们专注的方向",
    specializationBody:
      "PRT不涉及半导体设备的全领域。我们专注于引线框架和半导体封装制造中需要卷对卷连续传输的两个特定工艺步骤——层压和UV曝光。正是这种深度专注，使我们能够制造出真正在量产现场有效运行的设备。",
    specializationCards: [
      {
        title: "卷对卷层压",
        desc: "干膜光刻胶的连续层压。张力控制、温度均匀性和无气泡粘合是关键参数。",
        specs: ["卷材宽度：最大350mm", "速度：0.1~5.0 m/min", "温度精度：±3°C"],
      },
      {
        title: "卷对卷曝光",
        desc: "用于引线框架图案形成的连续LED UV曝光。对准精度和逐次重复性是关键参数。",
        specs: ["分辨率：20μm ±2μm", "对准精度：±5μm", "8CCD视觉系统"],
      },
    ],
    whyLabel: "客户选择PRT的原因",
    whyPoints: [
      {
        title: "量产验证，而非规格表承诺",
        desc: "我们通过在真实量产线上连续运行多年的系统来证明能力，而不是通过数据表上的数字。",
      },
      {
        title: "出现问题时快速响应",
        desc: "PRT设备的设计使现场工程师能够直接诊断问题，我们不将复杂性隐藏在专有黑盒后面。",
      },
      {
        title: "针对您的生产线定制工程",
        desc: "卷材宽度、传输速度和工艺配置均按照您的具体生产线条件设计，而非标准产品加选配模式。",
      },
      {
        title: "基于长期关系的交付",
        desc: "我们相当大比例的订单来自已安装PRT设备的客户。我们在交付后持续保持参与。",
      },
    ],
    infoLabel: "公司信息",
    infoItems: [
      { label: "法人名称", value: "PRT Co., Ltd. (㈜피알티)" },
      { label: "成立时间", value: "2018年（前身PRETECH创立于2010年）" },
      { label: "核心产品", value: "卷对卷层压机、卷对卷曝光系统" },
      { label: "主要应用", value: "引线框架、半导体封装" },
      { label: "总部地址", value: "韩国京畿道安养市东安区LS路76号 The O Valley 425室" },
      { label: "工厂地址", value: "韩国京畿道始兴市다지골길15-3" },
    ],
    contactCta: "联系我们",
    productsCta: "查看设备",
  },
}

export default function CompanyPage() {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-slate-950">
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
          <p className="text-xl font-light whitespace-pre-line leading-relaxed mb-8 sm:text-2xl" style={{ color: "#C7A86D" }}>
            {t.positioningSub}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            {t.positioningBody}
          </p>

          {/* Pillar stats */}
          <div className="mt-14 flex flex-wrap gap-10 sm:gap-16">
            {t.pillars.map((p, idx) => (
              <div key={idx}>
                <div className="text-4xl font-semibold" style={{ color: "#C7A86D" }}>{p.value}</div>
                <p className="mt-1 text-sm font-medium text-slate-300">{p.label}</p>
                <p className="text-xs text-slate-500">{p.sub}</p>
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
                className="relative rounded-lg border border-slate-700 bg-slate-900/60 p-6 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(to right, transparent, rgba(199,168,109,0.5), transparent)" }}
                />
                <h3 className="text-sm font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">{card.desc}</p>
                <div className="space-y-1.5">
                  {card.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <span className="h-px w-3 flex-shrink-0" style={{ backgroundColor: "#C7A86D", opacity: 0.5 }} />
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
    </main>
  )
}
