import { Container, Plane, Truck, Warehouse, Zap } from "lucide-react"
import type React from "react"
import { ScrollAnimation } from "./scroll-animation"

const services = [
    {
        title: "Ocean Freight",
        code: "MAR-FCL-V2",
        description: "Deep-water maritime solutions with autonomous vessel routing and high-density container management.",
        icon: Container,
        technical: "24,000 TEU CAPACITY",
    },
    {
        title: "Air Logistics",
        code: "AIR-EXP-X1",
        description: "Rapid intercontinental transport with smart cold-chain integration for mission-critical cargo.",
        icon: Plane,
        technical: "TRANS-ATLANTIC < 8H",
    },
    {
        title: "Inland Road",
        code: "TRK-GND-L3",
        description: "Intermodal drayage utilizing automated fleet coordination for optimized last-mile execution.",
        icon: Truck,
        technical: "99.8% ON-TIME RATE",
    },
    {
        title: "Automated Hubs",
        code: "WHS-FCL-A",
        description: "Smart storage infrastructure with robotic fulfillment and real-time inventory ledger syncing.",
        icon: Warehouse,
        technical: "ROBOTIC SORTING v4",
    },
]

export function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <ScrollAnimation animation="fade-up" duration={0.8}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
                        <div className="max-w-2xl space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <div className="h-px w-6 bg-primary" />
                                <span className="text-label">Our Capabilities</span>
                            </div>
                            <h2 className="text-headline italic uppercase leading-none">
                                Strategic <br /> <span className="text-muted-foreground/20">Solutions.</span>
                            </h2>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" duration={0.6} delay={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-background p-6 md:p-8 group relative transition-all duration-300 hover:bg-muted/30"
                            >
                                <div className="space-y-6">
                                    <div className="h-12 w-12 border border-border bg-background flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <service.icon className="h-6 w-6" />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black italic uppercase tracking-tighter">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm font-medium leading-relaxed">{service.description}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-[9px] font-black tracking-widest text-primary uppercase pt-4 border-t border-border">
                                        <Zap className="h-3 w-3" /> {service.technical}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
