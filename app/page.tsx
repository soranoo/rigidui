"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, Code, Zap, CheckCircle, ExternalLink, Sparkles, Stars, Grid3X3 } from "lucide-react"
import Sidebar from "@/components/sidebar"
import FeaturesSection from "@/components/home/FeaturesSection"
import HeroSection from "@/components/home/HeroSection"
import Footer from "@/components/home/footer"

export default function Home() {

  return (
    <div className="flex flex-col min-h-svh relative overflow-hidden">
      <div className="fixed dark:hidden left-0 inset-0 rotate-45 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      <div className="fixed dark:hidden left-0 inset-0 -rotate-45 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      <div className="fixed hidden dark:block h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        </div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#50657036,#000)]">
        </div>
      </div>
      <Sidebar />

      <HeroSection />
      <FeaturesSection />
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-2xl rotate-12 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-full animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-gradient-to-r from-primary/15 to-purple-500/15 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Grid3X3 className="w-4 h-4" />
              <span>Component Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl py-2 font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Explore RigidUI Components
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
              Discover our collection of <span className="text-primary font-semibold">advanced React components</span> built for modern applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <Link href="/docs/components/currency-manager" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-purple-500/10 rounded-3xl border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">Currency Manager</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full p-4">
                      <div className="space-y-4">
                        <div className="text-center">
                          <h4 className="text-sm font-semibold text-primary mb-3">Currency Exchange</h4>
                          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-muted-foreground">From</span>
                              <span className="text-xs text-muted-foreground">To</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2 bg-background/70 rounded-lg p-2 flex-1">
                                <div className="w-6 h-4 bg-blue-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">$</div>
                                <span className="text-sm font-medium">USD</span>
                              </div>
                              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex items-center gap-2 bg-background/70 rounded-lg p-2 flex-1">
                                <div className="w-6 h-4 bg-yellow-500 rounded-sm flex items-center justify-center text-xs text-white font-bold">€</div>
                                <span className="text-sm font-medium">EUR</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                            <span className="text-xs font-medium">Amount</span>
                            <div className="text-lg font-bold text-primary">$1,000.00</div>
                          </div>
                          <div className="flex items-center justify-between bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                            <span className="text-xs font-medium text-green-600">Converted</span>
                            <div className="text-lg font-bold text-green-600">€850.50</div>
                          </div>
                          <div className="text-center text-xs text-muted-foreground">
                            Rate: 1 USD = 0.8505 EUR
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <Link href="/docs/components/multi-step-form-wrapper" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/10 via-primary/5 to-indigo-500/10 rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">Multi-Step Form</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-purple-500/10 group-hover:text-purple-500 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-purple-500/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full p-6 flex flex-col">
                      <div className="flex justify-between mb-8 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-500/20 via-primary/20 to-purple-500/20 -translate-y-1/2" />
                        {[1, 2, 3, 4].map((step, i) => (
                          <div key={step} className="flex flex-col items-center relative z-10">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-500 ${i === 1 ? 'bg-primary text-white border-primary shadow-lg shadow-primary/50' :
                              i === 0 ? 'bg-green-500 text-white border-green-500' :
                                'bg-background border-muted text-muted-foreground'
                              }`}>
                              {i === 0 ? '✓' : step}
                            </div>
                            <span className={`text-xs mt-2 font-medium transition-colors ${i === 1 ? 'text-primary' : i === 0 ? 'text-green-500' : 'text-muted-foreground'}`}>
                              Step {step}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="space-y-3">
                          <div className="h-3 bg-primary/20 rounded w-1/3" />
                          <div className="h-10 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg border border-primary/10" />
                          <div className="h-10 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg border border-primary/10" />
                        </div>

                        <div className="space-y-3">
                          <div className="h-3 bg-primary/20 rounded w-1/4" />
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-8 bg-gradient-to-r from-muted/50 to-muted/30 rounded border border-primary/10" />
                            <div className="h-8 bg-gradient-to-r from-muted/50 to-muted/30 rounded border border-primary/10" />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between pt-6 border-t border-primary/10">
                        <div className="h-10 w-20 bg-muted/40 rounded-lg" />
                        <div className="h-10 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-lg shadow-lg shadow-primary/30" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <Link href="/docs/components/location-picker" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/10 via-primary/5 to-blue-500/10 rounded-3xl border border-indigo-500/20 overflow-hidden hover:border-indigo-500/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">Location Picker</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-indigo-500/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full p-4">
                      <div className="space-y-4">
                        <div className="text-center">
                          <h4 className="text-sm font-semibold text-indigo-600 mb-3">Select Location</h4>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl p-4 border border-indigo-500/20">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 bg-background/70 rounded-lg p-2">
                              <div className="w-4 h-4 bg-indigo-500/30 rounded" />
                              <span className="text-sm">Search locations...</span>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-lg p-3 border border-blue-500/10">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium">New York, NY</div>
                                  <div className="text-xs text-muted-foreground">United States</div>
                                </div>
                              </div>
                              <div className="text-xs text-blue-600 font-medium">📍 Current Location</div>
                            </div>

                            <div className="space-y-2">
                              {[
                                { city: "San Francisco, CA", country: "United States", selected: false },
                                { city: "London, UK", country: "United Kingdom", selected: true },
                                { city: "Tokyo, JP", country: "Japan", selected: false }
                              ].map((location, i) => (
                                <div key={i} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${location.selected ? 'bg-indigo-500/10 border border-indigo-500/20' : 'hover:bg-muted/20'}`}>
                                  <div className={`w-4 h-4 rounded-full border-2 ${location.selected ? 'border-indigo-500 bg-indigo-500' : 'border-muted'}`}>
                                    {location.selected && <div className="w-2 h-2 bg-white rounded-full m-0.5" />}
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-xs font-medium">{location.city}</div>
                                    <div className="text-xs text-muted-foreground">{location.country}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>

            <Link href="/docs/components/file-explorer" className="group">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500/10 via-primary/5 to-teal-500/10 rounded-3xl border border-emerald-500/20 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 relative shadow-2xl hover:shadow-3xl hover:-translate-y-2">
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h3 className="font-bold text-xl">File Explorer</h3>
                    <div className="flex items-center gap-2 text-xs bg-background/70 backdrop-blur-sm text-muted-foreground px-3 py-1 rounded-full group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-2xl border border-emerald-500/10 overflow-hidden shadow-inner">
                    <div className="w-full h-full flex">
                      <div className="w-1/3 border-r border-emerald-500/10 p-3">
                        <div className="space-y-2">
                          {[
                            { name: "Documents", icon: "📄", active: true },
                            { name: "Images", icon: "🖼️", active: false },
                            { name: "Videos", icon: "🎥", active: false },
                            { name: "Archive", icon: "📦", active: false }
                          ].map((folder, i) => (
                            <div key={i} className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${folder.active ? 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/30' : 'text-muted-foreground hover:bg-muted/20'
                              }`}>
                              <span>{folder.icon}</span>
                              <span>{folder.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 p-3">
                        <div className="flex items-center gap-2 mb-3 p-2 bg-muted/20 rounded-lg">
                          <div className="flex gap-1">
                            <div className="w-5 h-5 bg-primary/20 rounded border" />
                            <div className="w-5 h-5 bg-muted/40 rounded border" />
                            <div className="w-5 h-5 bg-muted/40 rounded border" />
                          </div>
                          <div className="w-px h-4 bg-muted" />
                          <div className="flex-1 h-5 bg-muted/30 rounded text-xs flex items-center px-2 text-muted-foreground">
                            Search files...
                          </div>
                        </div>


                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { name: "Report.pdf", type: "pdf", size: "2.4MB" },
                            { name: "Data.xlsx", type: "excel", size: "890KB" },
                            { name: "Presentation.pptx", type: "ppt", size: "5.1MB" },
                            { name: "Image.jpg", type: "image", size: "1.2MB" },
                            { name: "Document.docx", type: "word", size: "456KB" },
                            { name: "Archive.zip", type: "zip", size: "12MB" },
                            { name: "Video.mp4", type: "video", size: "89MB" },
                            { name: "Code.js", type: "code", size: "23KB" }
                          ].map((file, i) => (
                            <div key={i} className="flex flex-col items-center p-2 rounded-lg hover:bg-emerald-500/10 transition-colors group/file cursor-pointer">
                              <div className={`w-8 h-8 rounded-lg mb-1 flex items-center justify-center text-xs font-bold transition-transform group-hover/file:scale-110 ${file.type === 'pdf' ? 'bg-red-500/20 text-red-600' :
                                file.type === 'excel' ? 'bg-green-500/20 text-green-600' :
                                  file.type === 'image' ? 'bg-blue-500/20 text-blue-600' :
                                    'bg-primary/20 text-primary'
                                }`}>
                                {file.type.slice(0, 2).toUpperCase()}
                              </div>
                              <div className="text-xs font-medium text-center leading-tight mb-1">{file.name}</div>
                              <div className="text-xs text-muted-foreground">{file.size}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/docs/components"
              className="inline-flex items-center justify-center text-primary hover:text-primary/80 text-xl group font-semibold"
            >
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Explore All 13 Components
              </span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-lg font-medium">Production Ready</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to build better interfaces?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get started with RigidUI today and create stunning user experiences that will impress your users.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://github.com/FgrReloaded/rigidui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3.5 font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              GitHub <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary/30 rounded-3xl rotate-12 animate-float-complex" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-full animate-pulse-slow" />
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-purple-500/40 rounded-full animate-bounce" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-3 mb-8 group">
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 px-4 py-2 rounded-full border border-green-500/30">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Production Ready</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 px-4 py-2 rounded-full border border-blue-500/30">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">Enterprise Grade</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-primary to-foreground bg-clip-text text-transparent">
              The Future?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join developers building
            <span className="text-primary font-bold"> sophisticated interfaces</span> with
            <span className="text-primary font-bold"> RigidUI&apos;s advanced components</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Code className="w-6 h-6" />, title: "TypeScript First", desc: "Full type safety built-in" },
              { icon: <Zap className="w-6 h-6" />, title: "Modern Stack", desc: "React 19 + Next.js 15" },
              { icon: <Stars className="w-6 h-6" />, title: "Production Ready", desc: "Real-world components" }
            ].map((feature, i) => (
              <div key={i} className="bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/docs/getting-started"
              className="group relative inline-flex items-center justify-center rounded-2xl border text-black dark:text-white px-12 py-5 font-bold text-xl hover:scale-105 transition-all duration-300 shadow-3xl shadow-primary/30 hover:shadow-4xl hover:shadow-primary/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Building Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <p className="text-muted-foreground font-medium">Built with modern technologies</p>
            <div className="flex items-center md:gap-8 gap-4 opacity-60">
              {["React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"].map((tech, i) => (
                <div key={i} className="md:text-lg text-xs font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-4deg); }
          100% { transform: translateY(0px) rotate(-6deg); }
        }

        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(3deg); }
        }

        @keyframes float-complex {
          0% { transform: translateY(0px) rotate(12deg) scale(1); }
          33% { transform: translateY(-10px) rotate(15deg) scale(1.05); }
          66% { transform: translateY(-5px) rotate(9deg) scale(0.95); }
          100% { transform: translateY(0px) rotate(12deg) scale(1); }
        }

        @keyframes float-reverse {
          0% { transform: translateY(0px) rotate(-12deg) scale(1); }
          33% { transform: translateY(-15px) rotate(-9deg) scale(1.05); }
          66% { transform: translateY(-8px) rotate(-15deg) scale(0.95); }
          100% { transform: translateY(0px) rotate(-12deg) scale(1); }
        }

        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px) scale(1.2); opacity: 0.8; }
          100% { transform: translateY(-40px) translateX(-5px) scale(0.8); opacity: 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 15s ease infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-complex {
          animation: float-complex 10s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 6s ease-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.15);
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        .shadow-4xl {
          box-shadow: 0 45px 80px -15px rgba(0, 0, 0, 0.3);
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(var(--muted-rgb), 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(var(--primary-rgb), 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--primary-rgb), 0.5);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced focus states */
        *:focus-visible {
          outline: 2px solid rgba(var(--primary-rgb), 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}