import { Code, Component, Layers, Package, Zap, Stars, Cpu, Gauge } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-gradient-to-r from-primary/15 to-purple-500/15 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Stars className="w-4 h-4" />
            <span>Enterprise Benefits</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Why RigidUI Dominates
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
            Built for enterprises that demand <span className="text-primary font-semibold">excellence</span>,
            designed for developers who won&apos;t <span className="text-primary font-semibold">compromise</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Component className="h-12 w-12 text-primary" />,
              title: "Advanced Components",
              description: "Enterprise-grade patterns with micro-interactions, accessibility, and performance optimization built-in",
              color: "primary",
              features: ["40+ Components", "TypeScript", "Accessibility"]
            },
            {
              icon: <Zap className="h-12 w-12 text-yellow-500" />,
              title: "Lightning Performance",
              description: "Optimized for speed with lazy loading, virtualization, and intelligent caching mechanisms",
              color: "yellow-500",
              features: ["< 1ms render", "Virtual scrolling", "Smart caching"]
            },
            {
              icon: <Layers className="h-12 w-12 text-blue-500" />,
              title: "Infinitely Composable",
              description: "Mix, match, and extend components with a powerful composition API and plugin system",
              color: "blue-500",
              features: ["Plugin system", "Custom hooks", "Flexible API"]
            },
            {
              icon: <Package className="h-12 w-12 text-green-500" />,
              title: "Zero Dependencies",
              description: "No external dependencies, no bloat. Pure React components that work everywhere",
              color: "green-500",
              features: ["0 dependencies", "Tree shaking", "Lightweight"]
            },
            {
              icon: <Code className="h-12 w-12 text-purple-500" />,
              title: "Developer Experience",
              description: "Intuitive APIs, comprehensive docs, and TypeScript support for maximum productivity",
              color: "purple-500",
              features: ["IntelliSense", "Auto-complete", "Error hints"]
            },
            {
              icon: <Cpu className="h-12 w-12 text-pink-500" />,
              title: "Production Ready",
              description: "Battle-tested in enterprise applications with monitoring, analytics, and error boundaries",
              color: "pink-500",
              features: ["Error boundaries", "Analytics", "Monitoring"]
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-xl p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 via-transparent to-${feature.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-purple-500/20 p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-card/80 rounded-2xl" />
              </div>

              <div className="relative z-10">
                <div className={`mb-6 p-4 bg-${feature.color}/10 rounded-xl w-fit group-hover:bg-${feature.color}/20 transition-all duration-500 group-hover:scale-110 shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feature.features.map((feat, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full bg-${feature.color}/10 text-${feature.color} border border-${feature.color}/20 font-medium`}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "40+", label: "Components", icon: <Component className="w-6 h-6" /> },
            { value: "99.9%", label: "Uptime", icon: <Gauge className="w-6 h-6" /> },
            { value: "<1ms", label: "Render Time", icon: <Zap className="w-6 h-6" /> },
            { value: "0", label: "Dependencies", icon: <Package className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default FeaturesSection