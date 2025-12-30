import { Ship, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Ship className="h-6 w-6" />
                        <span className="text-xl font-bold tracking-tighter uppercase">SwiftShip</span>
                    </div>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
                        Global logistics and maritime excellence. Connecting continents with precision, speed, and reliability.
                    </p>
                    <div className="flex gap-4">
                        <Linkedin className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
                        <Twitter className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
                        <Github className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest opacity-50">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a href="#services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#booking" className="hover:underline">
                                Book Voyage
                            </a>
                        </li>
                        <li>
                            <a href="#fleet" className="hover:underline">
                                Our Fleet
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">
                                Company
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest opacity-50">Support</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Tracking Help
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Shipping FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact Sales
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest opacity-50">Contact</h4>
                    <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 opacity-70" />
                        <span>logistics@swiftship.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 opacity-70" />
                        <span>+1 (800) SWIFT-SHIP</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 opacity-70" />
                        <span>1 Maritime Plaza, Singapore</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
                <p>© {new Date().getFullYear()} SwiftShip Logistics International. All rights reserved.</p>
            </div>
        </footer>
    )
}
