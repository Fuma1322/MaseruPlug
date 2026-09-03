import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    {
      href: '/about',
      name: 'About Us',
    },
    {
      href: '/categories',
      name: 'Categories',
    },
    {
      href: '/deals',
      name: 'Hot Deals',
    },
    {
      href: '/contact',
      name: 'Join The Plug',
    },
  ];

  const socialLinks = [
    {
      href: 'https://wa.me/+26663272145',
      name: 'WhatsApp',
      icon: FaWhatsapp,
    },
    {
      href: 'https://facebook.com/maseruplug',
      name: 'Facebook',
      icon: FaFacebook,
    },
    {
      href: 'https://instagram.com/maseruplug',
      name: 'Instagram',
      icon: FaInstagram,
    },
  ];
  return (
    <footer className="pt-10">
      <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
        <div className="mt-10 border-t py-10">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl font-extrabold">
                <span className="text-[#25D366]">Maseru</span>Plug
              </h2>
              <p className="text-body mx-auto max-w-xl text-base leading-7 md:mx-0">
                Find services fast and connect with local businesses in Maseru. Your one-stop
                directory for trusted service providers. Explore, compare, and contact with ease.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold">Quick links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="text-[#111111] transition-colors duration-150 hover:text-[#25D366]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">Get in touch</h3>
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {socialLinks.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 text-[#111111] transition-colors duration-150 hover:text-[#25D366]"
                          >
                            {Icon ? (
                              <Icon
                                className={`h-4 w-4 ${item.name === 'Facebook' ? 'text-blue-600' : item.name === 'Instagram' ? 'text-pink-500' : item.name === 'WhatsApp' ? 'text-[#25D366]' : ''}`}
                              />
                            ) : null}
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 text-center text-sm text-[#6b7280]">
            © {new Date().getFullYear()}{' '}
            <Link href="/dashboard">
              <span>MPLUG PTY LTD. </span>
            </Link>
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
