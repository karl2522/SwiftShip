"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
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
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary flex items-center justify-center text-primary-foreground relative overflow-hidden">
                            {/* Shipping container icon */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="8" width="18" height="12" rx="1" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="16" x2="21" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="20" />
                                <line x1="16" y1="8" x2="16" y2="20" />
                            </svg>
                        </div>
                        <span className="text-xl font-black italic tracking-tighter uppercase leading-none">
                            Swift<span className="text-muted-foreground/30">Ship</span>
                        </span>
                    </div>

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
