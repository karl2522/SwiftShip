"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import NextImage from "next/image"
import * as React from "react"

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Book Voyage", href: "#booking" },
        { name: "Fleet", href: "#fleet" },
        { name: "About", href: "#about" },
    ]

    const scrollToSection = (href: string) => {
        const sectionId = href.replace('#', '')
        const element = document.getElementById(sectionId)

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
                    >
                        <div className="h-10 w-10 relative">
                            <NextImage
                                src="/swiftship-logo.png"
                                alt="SwiftShip Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-xl font-black italic tracking-tighter uppercase leading-none">
                            Swift<span className="text-muted-foreground/30">Ship</span>
                        </span>
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-label text-muted-foreground hover:text-primary transition-all duration-300 relative group cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                        <Button className="h-10 px-6 rounded-none text-[10px] font-black uppercase tracking-widest cursor-pointer">
                            Sync Portal
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-foreground p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border/50 p-4 transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
                )}
            >
                <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => {
                                scrollToSection(link.href)
                                setIsOpen(false)
                            }}
                            className="text-lg font-medium py-2 border-b border-border/50 last:border-0 text-left cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                    <Button className="w-full h-10 px-6 rounded-none text-[10px] font-black uppercase tracking-widest cursor-pointer">
                        Sync Portal
                    </Button>
                </div>
            </div>
        </nav>
    )
}
