import React from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'

export default function Footer() {

    const quickLinks = [
        {
            href: '/category/1',
            name: 'Categories'
        },
        {
            href: '/contact',
            name: 'Contact'
        },
    ]

    const socialLinks = [
        {
            href: 'https://wa.me/+26663272145',
            name: 'WhatsApp',
            icon: FaWhatsapp
        },
        {
            href: 'https://facebook.com/maseruplug',
            name: 'Facebook',
            icon: FaFacebook
        },
    ]
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="mt-10 py-10 border-t">
                    <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
                        <div className="space-y-6 md:text-left text-center">
                            <h2 className="font-extrabold text-4xl">
                                <span className="text-[#25D366]">Maseru</span>Plug
                            </h2>
                            <p className="max-w-xl mx-auto md:mx-0 text-body text-base leading-7">
                                Find services fast and connect with local businesses in Maseru. Your one-stop directory for trusted service providers. Explore, compare, and contact with ease.
                            </p>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Quick links</h3>
                                <ul className="space-y-3">
                                    {quickLinks.map((item, idx) => (
                                        <li key={idx}>
                                            <Link href={item.href} className="text-[#111111] hover:text-[#25D366] transition-colors duration-150">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Get in touch</h3>
                                <div className="space-y-4">
                                    <ul className="space-y-3">
                                        {socialLinks.map((item, idx) => {
                                            const Icon = item.icon
                                            return (
                                                <li key={idx}>
                                                    <Link href={item.href} className="inline-flex items-center gap-2 text-[#111111] hover:text-[#25D366] transition-colors duration-150">
                                                        {Icon ? <Icon className={`h-4 w-4 ${item.name === 'Facebook' ? 'text-blue-600' : item.name === 'WhatsApp' ? 'text-[#25D366]' : ''}`} /> : null}
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 pt-6 text-center text-sm text-[#6b7280]">
                        © {new Date().getFullYear()} MaseruPlug. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
