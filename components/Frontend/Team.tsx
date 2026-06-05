"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function MeetTheTeam () {
  const [selected, setSelected] = useState<TeamMember | null>(null);

 const team: TeamMember[] = [
  {
    name: "Tankiso Fuma",
    role: "Founder & Lead Developer",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1288&auto=format&fit=crop",
    bio: "Founder of MaseruPlug and lead developer behind the platform, focused on building scalable local tech infrastructure in Lesotho.",
  },
  {
    name: "Lemohang Makintane",
    role: "Head of Backend Engineering",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1288&auto=format&fit=crop",
    bio: "Responsible for backend architecture, APIs, database systems, and ensuring system reliability across MaseruPlug services.",
  },
  {
    name: "Bokang Matsoso",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop",
    bio: "Oversees daily operations, business onboarding, and ensures smooth coordination between users and service providers.",
  },
];

  return (
    <>
    <div className="text-center space-y-2">
        <p className="text-[#25D366] font-semibold tracking-wide text-md">
          MaseruPlug Team
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
          Meet The Team
        </h2>

        <p className="text-xs p-1 text-neutral-500 max-w-md mx-auto">
          Trusted professionals dedicated to connecting you with the best local businesses in Maseru.
        </p>
      </div>
      {/* GRID CARDS */}
      <motion.div className="flex flex-col md:flex-row flex-1 w-full h-full p-4 min-h-[18rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] gap-4">
        {team.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => setSelected(member)}
            className="cursor-pointer flex-1 rounded-2xl bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.1] p-3 flex flex-col items-center justify-center text-center"
          >
            <img
              src={member.image}
              className="h-20 w-20 rounded-full object-cover"
            />
            <p className="mt-3 text-lg font-semibold">{member.name}</p>
            <p className="text-md text-neutral-500">{member.role}</p>

            <div className="mt-3 text-[16px] px-2 py-1 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30">
              View Profile
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
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
              className="bg-white dark:bg-black rounded-2xl max-w-md w-full p-6 border border-neutral-200 dark:border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={selected.image}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />

              {/* Info */}
              <h2 className="text-xl font-bold text-center mt-4">
                {selected.name}
              </h2>

              <p className="text-sm text-center text-neutral-500">
                {selected.role}
              </p>

              <p className="text-sm text-center mt-4 text-neutral-600 dark:text-neutral-300">
                {selected.bio}
              </p>

              {/* Socials */}
              <div className="flex justify-center gap-4 mt-5 text-xl">
                <FaWhatsapp className="text-[#25D366] cursor-pointer" />
                <FaInstagram className="text-pink-500 cursor-pointer" />
                <FaFacebook className="text-blue-500 cursor-pointer" />
              </div>

              {/* Button */}
              <Button className="mt-6 w-full h-11 rounded-lg bg-[#25D366] text-black font-semibold">
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};