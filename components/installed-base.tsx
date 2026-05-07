"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowUpDown, ChevronRight, Package, Globe, Zap, TrendingUp } from "lucide-react"

// KPI Data
const kpiData = [
  { label: "누적 납품", value: "50+", unit: "Units", icon: Package },
  { label: "납품 국가", value: "5", unit: "Korea, China, Taiwan, USA, Europe", icon: Globe },
  { label: "적용 공정", value: "4", unit: "QFN, SOP, DFN, LGA Exposure", icon: Zap },
  { label: "평균 기용률", value: "99.2%", unit: "2022-2025년 집계 데이터 기준", icon: TrendingUp },
]

// Regional deployment data
const regionalData = [
  { region: "East Asia", units: 32, countries: "Korea, China, Taiwan" },
  { region: "Southeast Asia", units: 10, countries: "Malaysia, Vietnam" },
  { region: "North America", units: 3, countries: "USA" },
  { region: "Europe", units: 5, countries: "Germany, Netherlands" },
]

// Process flow data
const processFlows = {
  qfn: {
    name: "QFN Exposure",
    steps: [
      "Leadframe Loading",
      "Pre-alignment",
      "Pattern Exposure",
      "Post-process Check",
      "Unloading",
    ],
  },
  sop: {
    name: "SOP Exposure",
    steps: [
      "Substrate Prep",
      "Film Lamination",
      "Alignment",
      "Exposure",
      "Development",
    ],
  },
  qfn2: {
    name: "QFN Exposure",
    steps: [
      "Frame Load",
      "Positioning",
      "Expose",
      "Check",
      "Output",
    ],
  },
  dfn: {
    name: "DFN Exposure",
    steps: [
      "Input",
      "Laminate",
      "Align",
      "Expose",
      "Verify",
    ],
  },
}

// Deployment records
const deploymentRecords = [
  { id: 1, customer: "Semiconductor Packaging A", country: "Korea", equipment: "R2R-EXP-500", qty: 3, process: "QFN Exposure", year: 2024 },
  { id: 2, customer: "Semiconductor Packaging B", country: "China", equipment: "R2R-EXP-300", qty: 8, process: "SOP Exposure", year: 2024 },
  { id: 3, customer: "Leadframe Manufacturer C", country: "Taiwan", equipment: "R2R-EXP-500", qty: 6, process: "QFN Exposure", year: 2024 },
  { id: 4, customer: "Assembly Provider D", country: "Korea", equipment: "R2R-EXP-200", qty: 4, process: "DFN Exposure", year: 2023 },
  { id: 5, customer: "Semiconductor Packaging E", country: "China", equipment: "R2R-EXP-500", qty: 5, process: "QFN Exposure", year: 2023 },
  { id: 6, customer: "IC Packaging F", country: "Taiwan", equipment: "R2R-EXP-300", qty: 4, process: "SOP Exposure", year: 2023 },
  { id: 7, customer: "Assembly Solutions G", country: "USA", equipment: "R2R-EXP-500", qty: 3, process: "QFN Exposure", year: 2023 },
  { id: 8, customer: "European Assembly H", country: "Europe", equipment: "R2R-EXP-500", qty: 2, process: "QFN Exposure", year: 2022 },
  { id: 9, customer: "OSAT Provider I", country: "China", equipment: "R2R-EXP-200", qty: 3, process: "DFN Exposure", year: 2022 },
  { id: 10, customer: "European Packaging J", country: "Europe", equipment: "R2R-EXP-500", qty: 2, process: "QFN Exposure", year: 2022 },
]

export function InstalledBase() {
  const [countryFilter, setCountryFilter] = useState<string>("all")
  const [yearFilter, setYearFilter] = useState<string>("all")
  const [sortField, setSortField] = useState<string>("year")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [activeProcess, setActiveProcess] = useState("qfn")

  const filteredAndSortedRecords = useMemo(() => {
    let filtered = [...deploymentRecords]
    
    if (countryFilter !== "all") {
      filtered = filtered.filter(r => r.country === countryFilter)
    }
    if (yearFilter !== "all") {
      filtered = filtered.filter(r => r.year === parseInt(yearFilter))
    }
    
    filtered.sort((a, b) => {
      const aVal = a[sortField as keyof typeof a]
      const bVal = b[sortField as keyof typeof b]
      if (sortDirection === "asc") {
        return aVal > bVal ? 1 : -1
      }
      return aVal < bVal ? 1 : -1
    })
    
    return filtered
  }, [countryFilter, yearFilter, sortField, sortDirection])

  const toggleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const countries = [...new Set(deploymentRecords.map(r => r.country))]
  const years = [...new Set(deploymentRecords.map(r => r.year))].sort()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.4)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Header Section */}
      <div className="relative border-b border-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">설치 현황</p>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-6">
            설치 현황
          </h1>
          <p className="max-w-2xl text-base text-slate-300 leading-relaxed">
            아시아 전역 생산 라인에 배포한 리드프레임 R2R 노광장비. 안정된 환경에서 검증된 맞춤형 시스템
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* KPI Cards */}
        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi) => {
            const Icon = kpi.icon
            return (
              <Card key={kpi.label} className="border-slate-700 bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/20">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="mb-2 text-sm font-medium text-slate-400">
                    {kpi.label}
                  </p>
                  <div className="text-3xl font-bold text-white">{kpi.value}</div>
                  <p className="mt-2 text-xs text-slate-400">{kpi.unit}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Regional Deployment */}
        <div className="mb-20">
          <h2 className="mb-2 text-2xl font-bold text-white">글로벌 배포 현황</h2>
          <p className="mb-8 text-sm text-slate-400">주요 산도 지역 적용 설치 현황</p>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regionalData.map((region) => (
              <Card key={region.region} className="border-slate-700 bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/20">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{region.region}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{region.units} units</div>
                  <p className="text-xs text-slate-400">{region.countries}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Primary Process Applications */}
        <div className="mb-20">
          <h2 className="mb-2 text-2xl font-bold text-white">주요 공정 응용</h2>
          <p className="mb-8 text-sm text-slate-400">공정별 전문성과 역금고급 노광 기술</p>
          
          <Tabs value={activeProcess} onValueChange={setActiveProcess} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-slate-800/50">
              <TabsTrigger value="qfn" className="bg-blue-500 text-white data-[state=inactive]:bg-slate-800 data-[state=inactive]:text-slate-300">QFN Exposure</TabsTrigger>
              <TabsTrigger value="sop" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:bg-slate-800 data-[state=inactive]:text-slate-300">SOP Exposure</TabsTrigger>
              <TabsTrigger value="qfn2" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:bg-slate-800 data-[state=inactive]:text-slate-300">QFN Exposure</TabsTrigger>
              <TabsTrigger value="dfn" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=inactive]:bg-slate-800 data-[state=inactive]:text-slate-300">DFN Exposure</TabsTrigger>
            </TabsList>
            
            {Object.entries(processFlows).map(([key, process]) => (
              <TabsContent key={key} value={key}>
                <Card className="border-slate-700 bg-slate-800/50">
                  <CardContent className="pt-6">
                    <h3 className="mb-6 text-center font-semibold text-white">{process.name} Process Flow</h3>
                    
                    {/* Process Flow Diagram */}
                    <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                      {process.steps.map((step, index) => (
                        <div key={step} className="flex items-center gap-3 lg:gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                            {index + 1}
                          </div>
                          <div className="flex-shrink-0 text-center">
                            <p className="text-xs text-slate-400">Step {index + 1}</p>
                            <p className="text-sm font-medium text-white">{step}</p>
                          </div>
                          {index < process.steps.length - 1 && (
                            <ChevronRight className="h-5 w-5 shrink-0 text-slate-500 hidden lg:block" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Deployment Records Table */}
        <div className="mb-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">납품 기록</h2>
              <p className="mt-1 text-sm text-slate-400">고객사 납품 기업별 설치 데이터 기록</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={countryFilter} onValueChange={setCountryFilter}>
                <SelectTrigger className="w-auto border-slate-700 bg-slate-800/50 text-white">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-auto border-slate-700 bg-slate-800/50 text-white">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="border-slate-700 bg-slate-800">
                  <SelectItem value="all">All</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card className="border-slate-700 bg-slate-800/50">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700 hover:bg-slate-800/50">
                    <TableHead className="text-slate-400">고객사</TableHead>
                    <TableHead className="text-slate-400">
                      <button
                        onClick={() => toggleSort("country")}
                        className="flex items-center gap-1 hover:text-white"
                      >
                        국가
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                    <TableHead className="text-slate-400">장비 사양</TableHead>
                    <TableHead className="text-right text-slate-400">
                      <button
                        onClick={() => toggleSort("qty")}
                        className="flex items-center gap-1 hover:text-white justify-end w-full"
                      >
                        수량
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                    <TableHead className="text-slate-400">공정</TableHead>
                    <TableHead className="text-slate-400">
                      <button
                        onClick={() => toggleSort("year")}
                        className="flex items-center gap-1 hover:text-white"
                      >
                        연도
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedRecords.slice(0, 10).map((record) => (
                    <TableRow key={record.id} className="border-slate-700 hover:bg-slate-800/50">
                      <TableCell className="font-medium text-white">{record.customer}</TableCell>
                      <TableCell className="text-slate-300">{record.country}</TableCell>
                      <TableCell className="font-mono text-sm text-slate-300">{record.equipment}</TableCell>
                      <TableCell className="text-right text-slate-300">{record.qty}</TableCell>
                      <TableCell className="text-slate-300">{record.process}</TableCell>
                      <TableCell className="text-slate-300">{record.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="border-t border-slate-700 px-6 py-3 text-center text-xs text-slate-400">
              Showing 10 of 10 records
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
