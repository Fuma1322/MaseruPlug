'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden pb-12 pt-20 dark:bg-[#25D366] lg:pb-[90px] lg:pt-[70px] ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-bold text-gray-700 dark:text-gray-100">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-gray-400 sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is MaseruPlug?"
              text= {
                <>
                MaseruPlug is a youth-led initiative that serves as a comprehensive platform
                for connecting the youth of Lesotho with a wide range of opportunities, resources, 
                and information. Our mission is to empower young people by providing them with access
                to educational content, job listings, events, and various other resources that can help 
                them thrive in their personal and professional lives. Through our user-friendly website and 
                mobile app, we aim to create a vibrant community where the youth can discover and engage with 
                opportunities that align with their interests and aspirations.
                </>
              }
            />
            <AccordionItem
              header="How do I list my business on MaseruPlug?"
              text={
                <>
                To list your business on MaseruPlug, simply click the "Contact Us" 
                button below and send us a message with your business details. Our team
                will review your submission and get back to you with the next steps to get your business listed on our platform.
                </>
              }
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
             <AccordionItem
              header="How can I contact MaseruPlug?"
              text={
                <>
                You can contact MaseruPlug through our links above, where you will 
                find various methods to get in touch with us. Whether you prefer to call,
                or reach out via social media, we are here to assist you with any questions or inquiries you may have.
                </>
              }
            />
            <AccordionItem
              header="How long does it take to get listed on MaseruPlug?"
              text="The time it takes to get listed on MaseruPlug can vary depending 
              on the volume of submissions we receive. However, our team strives to review 
              and process all listings as quickly as possible, typically within a few business 
              days. If you have any specific questions about your listing status, please feel free to contact us directly."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2E7D32" stop-opacity="0.08" />
              <stop offset="1" stop-color="#3056D3" stop-opacity="0" />
              <stop offset="1" stop-color="#3056D3" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
type AccordionItemProps = {
    header: string;
    text: string | React.ReactNode;
  };
  
  const AccordionItem = ({ header, text }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg backdrop-blur-md p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8">
<button
  className={`faq-btn flex w-full text-left`}
  onClick={(event) => handleToggle(event)}
>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-[#25D366] text-primary">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-gray-400">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};