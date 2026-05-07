"use client"

import { useState, useEffect, useRef } from "react"
import { VideoHero } from "@/components/video-hero"
import { Hero } from "@/components/hero"
import { ApplicationsSection } from "@/components/applications-section"

type Language = "ko" | "en" | "zh"

export default function Page() {
  const [lang, setLang] = useState<Language>("ko")
  const [currentSection, setCurrentSection] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const isScrolling = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // 스크롤에 따른 네비게이션 표시/숨김
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleScroll = () => {
      const currentScrollY = container.scrollTop
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤 - 네비게이션 숨김
        setIsNavVisible(false)
      } else {
        // 위로 스크롤 - 네비게이션 표시
        setIsNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleWheel = (e: WheelEvent) => {
      // 첫 번째 섹션에서만 휠 이벤트 감지 (두 번째 이후는 자연스러운 스크롤)
      if (currentSection >= 1) {
        // 두 번째 섹션 맨 위에서 위로 스크롤하면 첫 번째 섹션으로
        if (container.scrollTop <= window.innerHeight + 10 && e.deltaY < 0 && currentSection === 1) {
          e.preventDefault()
          setCurrentSection(0)
          container.scrollTo({ top: 0, behavior: "smooth" })
        }
        return
      }
      
      if (isScrolling.current) {
        e.preventDefault()
        return
      }
      
      e.preventDefault()
      isScrolling.current = true
      
      if (e.deltaY > 0 && currentSection === 0) {
        // 첫 번째에서 두 번째로만 스냅
        setCurrentSection(1)
        container.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      } else if (e.deltaY < 0 && currentSection === 1) {
        // 첫 번째로 돌아가기
        setCurrentSection(0)
        container.scrollTo({ top: 0, behavior: "smooth" })
      }
      
      setTimeout(() => {
        isScrolling.current = false
      }, 800)
    }
    
    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [currentSection])
  
  return (
    <main ref={containerRef} className="h-screen overflow-y-auto scroll-smooth">
      <div className="h-screen">
        <VideoHero lang={lang} setLang={setLang} isNavVisible={isNavVisible} />
      </div>
      <div className="h-screen">
        <Hero lang={lang} />
      </div>
      <div>
        <ApplicationsSection lang={lang} />
      </div>
    </main>
  )
}
