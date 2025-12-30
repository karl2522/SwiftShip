import { Clock, Fingerprint, Globe, Layers, Shield, Workflow } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function AboutSection() {
    const stats = [
        {
            icon: Globe,
            label: "Network Coverage",
            value: "85+",
            description: "Global trade lanes under active management.",
        },
        {
            icon: Shield,
            label: "Security Protocol",
            value: "99.9%",
            description: "Asset protection via encrypted ledger tracking.",
        },
        {
            icon: Clock,
            label: "System Uptime",
            value: "24/7",
            description: "Zero-latency coordination across all timezones.",
        },
        {
            icon: Workflow,
            label: "Carbon Efficiency",
            value: "15%",
            description: "Reduced footprint through AI-driven routing.",
        },
    ]

    return (
        <section id="about" className="py-32 bg-secondary/50 relative overflow-hidden texture-overlay">
            <div className="absolute inset-0 bg-dot-matrix opacity-[0.03]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                    <ScrollAnimation animation="fade-left" duration={0.8}>
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-primary">
                                <Fingerprint className="h-4 w-4" />
                                <span className="text-label">Company Identity</span>
                            </div>
                            <h2 className="text-headline italic uppercase tracking-tighter leading-[0.9]">
                                Built for <br /> <span className="text-muted-foreground/30">Infrastructure.</span>
                            </h2>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fade-right" duration={0.8} delay={0.2}>
                        <div className="space-y-6 border-l border-primary/20 pl-12">
                            <p className="text-2xl font-medium tracking-tight text-foreground leading-snug">
                                SwiftShip is more than logistics. We are the operating system for global trade, combining heavy hardware
                                with cloud-native intelligence.
                            </p>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Founded on the principles of precision and transparency, our network facilitates the movement of billions
                                in value with millisecond accuracy. We don't just ship—we synchronize.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.3}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-12 bg-background group hover:bg-muted/20 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Layers className="h-6 w-6 text-muted-foreground/10" />
                                </div>

                                <div className="space-y-8 relative z-10">
                                    <div className="h-12 w-12 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-4xl font-black italic tracking-tighter">{stat.value}</p>
                                        <p className="text-label text-muted-foreground">{stat.label}</p>
                                    </div>
                                    <p className="text-sm font-medium text-muted-foreground leading-relaxed">{stat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
