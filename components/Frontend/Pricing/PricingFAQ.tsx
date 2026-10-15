import React from 'react';

const faqs = [
  {
    question: 'Can I join MaseruPlug for free?',
    answer:
      'Yes. Get Listed is designed to give businesses a simple way to establish their presence on MaseruPlug at no monthly cost.',
  },
  {
    question: 'What is the difference between Growth and Featured?',
    answer:
      'Growth is focused on building a stronger business presence and improving your ability to be discovered. Featured adds stronger promotional visibility for businesses that want additional exposure.',
  },
  {
    question: 'What are Deals?',
    answer:
      'Deals allow businesses to promote special offers to customers browsing MaseruPlug. They are designed to create urgency and encourage customers to take action.',
  },
  {
    question: 'What is Lead Boost?',
    answer:
      'Lead Boost is our customer-acquisition focused promotional option. Instead of simply giving your business more visibility, the goal is to actively help put your business in front of potential customers.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes. Your business can start where it makes sense for you and move to another option as your needs change.',
  },
];

export default function PricingFAQ() {
  return (
    <div>
      <section className="border-t border-gray-100 bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#25D366]">
              Frequently asked questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Questions? We&apos;ve got you.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>

                    <span className="text-xl text-[#25D366] transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
