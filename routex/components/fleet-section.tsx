import { Badge } from "@/components/ui/badge"
import { Anchor, Cpu } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./scroll-animation"

export function FleetSection() {
    const fleetCategories = [
        {
            name: "Ultra Large Container Vessels",
            capacity: "24,000 TEU",
            tech: ["AI Route Optimization", "Low-Emission Engines"],
            status: "Active",
            image: "/ultra-large-container-ship-modern-black-white.jpg",
        },
        {
            name: "Smart Air Freighters",
            capacity: "140 Tons",
            tech: ["Temp-Controlled Cargo", "Automated Loading"],
            status: "Expansion",
            image: "/modern-cargo-plane-black-white-minimal.jpg",
        },
    ]

    return (
        <section id="fleet" className="min-h-screen flex flex-col justify-center py-24 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <ScrollAnimation animation="fade-up" duration={0.8}>
                            <div className="space-y-4">
                                <Badge
                                    variant="outline"
                                    className="rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-widest border-primary"
                                >
                                    The Fleet
                                </Badge>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Modern Infrastructure.</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We operate one of the youngest and most technologically advanced fleets in the industry. Our vessels are
                                    equipped with IoT sensors that monitor cargo conditions and vessel performance 24/7.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <StaggerContainer staggerDelay={0.2} className="space-y-6">
                            {fleetCategories.map((item, idx) => (
                                <StaggerItem
                                    key={idx}
                                    animation="fade-left"
                                    className="group p-6 rounded-xl border border-border hover:bg-muted transition-colors cursor-default"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">{item.name}</h3>
                                        <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-tighter">
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Anchor className="h-4 w-4" /> Capacity: {item.capacity}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Cpu className="h-4 w-4" /> Smart Systems
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-bold uppercase tracking-widest bg-secondary px-2 py-1 rounded"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <ScrollAnimation animation="scale" duration={0.8} delay={0.3} className="order-1 lg:order-2 relative aspect-square lg:aspect-video rounded-3xl overflow-hidden bg-muted group">
                        <img
                            src="/modern-maritime-vessel-minimalist-black-white.jpg"
                            alt="Fleet Infrastructure"
                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                            <div className="space-y-1">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Vessel Spotlight</p>
                                <p className="text-xl font-bold">The Swift Horizon V2</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}
