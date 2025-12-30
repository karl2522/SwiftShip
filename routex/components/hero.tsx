'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Barcode, ChevronRight, Search } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background texture-overlay">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/modern-cargo-ship-maritime-vessel-black-and-white-.jpg"
                    alt="Modern shipping vessel"
                    fill
                    className="object-cover opacity-20 grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
            </div>

            <div className="absolute inset-0 z-0 bg-logistics-grid opacity-[0.03]" />

            {/* Industrial accents */}
            <div className="absolute top-24 left-10 hidden xl:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground vertical-text rotate-180">
                <Barcode className="h-4 w-4" /> Ship-Serial-NX-2025
            </div>

            <div className="container relative z-10 mx-auto max-w-5xl text-center space-y-8">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <div className="flex justify-center mb-6">
                        <span className="px-4 py-1.5 rounded-full border border-border bg-muted/30 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Operational Network Active
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-balance leading-[0.9] italic">
                        SWIFT<span className="text-muted-foreground/30">SHIP</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium tracking-tight text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                        Precision logistics for the global trade infrastructure. Direct-to-port ocean and air freight.
                    </p>
                </motion.div>

                <motion.div
                    className="w-full max-w-2xl mx-auto p-1.5 bg-muted/50 backdrop-blur-sm border border-border rounded-xl flex flex-col sm:flex-row gap-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Enter container or order ID..."
                            className="pl-10 h-12 border-none bg-transparent focus-visible:ring-0 text-foreground"
                        />
                    </div>
                    <Button size="lg" className="h-12 px-8 rounded-lg group">
                        Track Order
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                {/* Floating indicators */}
                <motion.div
                    className="flex flex-wrap justify-center gap-8 pt-8 text-sm font-medium text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span>200+ Ports Globally</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span>Real-time Tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span>Carbon Neutral Shipping</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <div className="w-px h-12 bg-border" />
            </div>
        </section>
    )
}
