import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../ui/button'

export default function CTA() {
    return (
        <section className="py-10 px-4">
            <div className="max-w-screen-xl mx-auto border border-[#25D366] rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Left Content */}
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 flex-1">
                    <FaWhatsapp className="w-20 h-20 sm:w-24 sm:h-24 text-[#25D366] shrink-0" />

                    <div>
                        <h3 className="text-2xl sm:text-4xl lg:text-6xl whitespace-nowrap font-bold leading-tight p-3">
                            Are you a business owner?
                        </h3>

                        <p className="mt-3 text-base sm:text-2xl text-muted-foreground">
                            Get more customers today
                        </p>
                    </div>
                </div>

                {/* Right CTA */}
                <div className="w-full md:w-auto">
                    <Button className="w-full md:w-auto inline-flex h-12 lg:w-[210px] transform hover:-translate-y-1 transition duration-300 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#25D366_20%,#13a047_70%,#25D366_80%)] bg-[length:200%_100%] px-6 font-bold text-[#111111]">
                        Contact On WhatsApp
                    </Button>
                </div>

            </div>
        </section>
    )
}