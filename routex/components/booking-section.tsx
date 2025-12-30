import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ClipboardCheck, MapPin, Package } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function BookingSection() {
    return (
        <section
            id="booking"
            className="min-h-screen flex flex-col justify-center py-24 bg-muted/30 relative overflow-hidden texture-overlay"
        >
            <div className="absolute inset-0 bg-dot-matrix opacity-[0.05]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <ScrollAnimation animation="fade-left" duration={0.8}>
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">
                                    <ClipboardCheck className="h-3 w-3 text-primary" /> Manifest Entry
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-[0.85]">
                                    Book Your <br /> <span className="text-muted-foreground/30">Voyage.</span>
                                </h2>
                                <div className="h-1.5 w-40 bg-primary" />
                                <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-md">
                                    Secure your container space on our next global departure. Real-time pricing index updated hourly.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-12 border-l border-border pl-8">
                                <div className="space-y-1">
                                    <p className="text-4xl font-black italic tracking-tighter">14,820</p>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">
                                        Daily TEU Capacity
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-4xl font-black italic tracking-tighter">0.12s</p>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">
                                        Booking Confirmation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale" duration={0.8} delay={0.2}>
                        <div className="bg-background border-t-4 border-primary p-8 md:p-12 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="text-[8px] font-mono opacity-30">FORM_ID: BOK-772-X</span>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="origin" className="text-[10px] font-black uppercase tracking-widest">
                                            Origin Hub
                                        </Label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input id="origin" placeholder="Select Port" className="pl-10 h-12 rounded-none bg-muted/20" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="destination" className="text-[10px] font-black uppercase tracking-widest">
                                            Destination
                                        </Label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input id="destination" placeholder="Select Port" className="pl-10 h-12 rounded-none bg-muted/20" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest">Vessel Class</Label>
                                        <Select>
                                            <SelectTrigger className="h-12 rounded-none bg-muted/20">
                                                <SelectValue placeholder="Select Class" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ulcv">ULCV (Ultra Large)</SelectItem>
                                                <SelectItem value="pmax">Panamax</SelectItem>
                                                <SelectItem value="air">Air Cargo-E</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest">Load Weight (MT)</Label>
                                        <div className="relative">
                                            <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input type="number" placeholder="0.0" className="pl-10 h-12 rounded-none bg-muted/20" />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-14 text-sm font-black uppercase tracking-[0.2em] rounded-none group"
                                    size="lg"
                                >
                                    Secure Space
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <div className="pt-4 border-t border-dashed border-border flex justify-between items-center text-[8px] font-bold text-muted-foreground uppercase tracking-widest">
                                    <span>Terms: Incoterms 2025</span>
                                    <span>Certified Cargo Agent #992</span>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}
