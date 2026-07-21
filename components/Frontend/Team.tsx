'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}

export default function MeetTheTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Tankiso Fuma',
      role: 'Founder & CEO',
      image: '/stash.jpeg',
      bio: 'Founder of MaseruPlug and lead developer behind the platform, focused on building scalable local tech infrastructure in Lesotho.',
      whatsapp: 'https://wa.me/26656120463',
      instagram: 'https://www.instagram.com/tequila.stash/',
      facebook: 'https://www.facebook.com/share/1GKuWt1QyT/',
      linkedin: 'https://www.linkedin.com/in/tankiso-leonard-fuma-2b16352a5',
    },
    {
      name: 'Lemohang Makintane',
      role: 'Co-Founder & CTO',
      image: '/chief.jpeg',
      bio: 'Responsible for backend architecture, APIs, database systems, and ensuring system reliability across MaseruPlug services.',
      whatsapp: 'https://wa.me/26657294698',
      instagram: 'https://instagram.com/lemohang',
      facebook: 'https://www.facebook.com/share/1HBER4iDLt/',
      linkedin: 'https://www.linkedin.com/in/lemohang-makintane-078b7b24a',
    },
    {
      name: 'Bokang Matsoso',
      role: 'Operations Manager',
      image: '/chommy.jpeg',
      bio: 'Oversees daily operations, business onboarding, and ensures smooth coordination between users and service providers.',
      whatsapp: 'https://wa.me/26657677241',
      instagram: 'https://www.instagram.com/pat_matsoso7?igsh=MWNyOXpvZTVqMWEwMQ==',
      facebook: 'https://www.facebook.com/share/1HPHE62WTC/',
      linkedin: 'https://linkedin.com/in/bokangmatsoso',
    },
  ];

  return (
    <>
      <div className="space-y-2 text-center">
        <p className="text-4xl font-bold tracking-wide text-[#111111]">MaseruPlug Team</p>
        <p className="mx-auto max-w-md p-1 text-xs text-neutral-500">
          Trusted professionals dedicated to connecting you with the best local businesses in
          Maseru.
        </p>
      </div>

      <motion.div className="bg-dot-black/[0.2] flex h-full min-h-[18rem] w-full flex-1 flex-col gap-4 p-4 md:flex-row">
        {team.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => setSelected(member)}
            className="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-2xl border-neutral-200 bg-white p-3 text-center shadow shadow-[#25D366]/50"
          >
            <img
              src={member.image}
              className="h-20 w-20 rounded-full object-cover"
              alt={member.name}
            />

            <p className="mt-3 text-lg font-semibold">{member.name}</p>
            <p className="text-md text-neutral-500">{member.role}</p>

            <div className="mt-3 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-2 py-1 text-[16px] text-[#25D366]">
              View Profile
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 dark:border-white/10 dark:bg-black"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                className="mx-auto h-24 w-24 rounded-full object-cover"
                alt={selected.name}
              />

              <h2 className="mt-4 text-center text-xl font-bold">{selected.name}</h2>

              <p className="text-center text-sm text-neutral-500">{selected.role}</p>

              <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-300">
                {selected.bio}
              </p>

              <div className="mt-5 flex justify-center gap-4 text-xl">
                <Link href={selected.linkedin} target="_blank">
                  <FaLinkedin className="cursor-pointer text-blue-600" />
                </Link>

                <Link href={selected.instagram} target="_blank">
                  <FaInstagram className="cursor-pointer text-pink-500" />
                </Link>

                <Link href={selected.facebook} target="_blank">
                  <FaFacebook className="cursor-pointer text-blue-500" />
                </Link>
              </div>

              <Link href={selected.whatsapp} target="_blank">
                <Button className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] font-semibold text-black">
                  <FaWhatsapp />
                  Chat on WhatsApp
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
