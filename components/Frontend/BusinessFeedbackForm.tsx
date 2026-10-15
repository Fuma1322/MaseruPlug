'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { createBusinessFeedback } from '@/actions/businessFeedback';

interface FormData {
  businessName: string;
  listingDuration: string;
  satisfaction: number;
  profileRepresentation: string;
  customerDiscovery: string;
  customerDiscoveryDetails: string;
  usefulness: string;
  wantsReviews: string;
  reviewPreference: string;
  desiredFeatures: string[];
  mostWantedFeature: string;
  businessGoals: string[];
  recommend: string;
  recommendationReason: string;
  whatTheyLike: string;
  whatToImprove: string;
  premiumInterest: string;
  premiumFeatures: string[];
}

const initialForm: FormData = {
  businessName: '',
  listingDuration: '',
  satisfaction: 0,
  profileRepresentation: '',
  customerDiscovery: '',
  customerDiscoveryDetails: '',
  usefulness: '',
  wantsReviews: '',
  reviewPreference: '',
  desiredFeatures: [],
  mostWantedFeature: '',
  businessGoals: [],
  recommend: '',
  recommendationReason: '',
  whatTheyLike: '',
  whatToImprove: '',
  premiumInterest: '',
  premiumFeatures: [],
};

const featureOptions = [
  'Customer reviews & ratings',
  'Business profile analytics',
  'Profile views & contact statistics',
  'Better location/map features',
  'More photos and videos',
  'Special offers/promotions',
  'Advertising opportunities',
  'Direct customer enquiries',
  'Social media integration',
  'Booking/appointment features',
  'Product/service listings',
];

const goalOptions = [
  'Get more customers',
  'Increase online visibility',
  'Build a stronger online presence',
  'Promote my products/services',
  'Receive more enquiries',
  'Build customer trust',
  'Improve Google/search visibility',
  'Advertise special offers',
  'Connect with new customers',
];

const premiumOptions = [
  'Featured placement',
  'Advertising',
  'Advanced business analytics',
  'Social media promotion',
  'SEO/Google visibility services',
  'Customer enquiries/leads',
  'Booking system',
];

export default function BusinessFeedbackForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function toggleOption(
    field: 'desiredFeatures' | 'businessGoals' | 'premiumFeatures',
    value: string
  ) {
    setForm((prev) => {
      const current = prev[field];

      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.businessName.trim()) {
      toast.error('Please enter your business name.');
      return;
    }

    if (!form.listingDuration) {
      toast.error('Please select how long you have been listed.');
      return;
    }

    if (!form.satisfaction) {
      toast.error('Please rate your overall experience.');
      return;
    }

    try {
      setSubmitting(true);

      await createBusinessFeedback(form);

      toast.success('Thank you for your feedback!');

      setForm(initialForm);
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* HEADER */}

        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/15">
            <span className="text-2xl">💚</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#111111] md:text-4xl">
            Help Us Build MaseruPlug Better
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-neutral-500">
            Your feedback helps us understand what is working, what needs improvement, and what we
            should build next for businesses on MaseruPlug.
          </p>

          <p className="mt-2 text-sm font-medium text-[#25D366]">Takes approximately 3–5 minutes</p>
        </div>

        <form onSubmit={submit} className="mt-10 space-y-6">
          {/* BUSINESS INFORMATION */}

          <Section
            number="01"
            title="Business Information"
            description="Tell us a little about your business."
          >
            <Field label="Business Name">
              <input
                required
                value={form.businessName}
                onChange={(e) => updateField('businessName', e.target.value)}
                placeholder="e.g. MaseruPlug"
                className={inputClass}
              />
            </Field>

            <Field label="How long have you been listed on MaseruPlug?">
              <RadioGroup
                value={form.listingDuration}
                onChange={(value) => updateField('listingDuration', value)}
                options={['Less than 1 month', '1–3 months', '3–6 months', 'More than 6 months']}
              />
            </Field>
          </Section>

          {/* EXPERIENCE */}

          <Section
            number="02"
            title="Your Experience"
            description="Help us understand how MaseruPlug is working for you."
          >
            <Field label="How satisfied are you with your MaseruPlug business listing?">
              <StarRating
                value={form.satisfaction}
                onChange={(value) => updateField('satisfaction', value)}
              />
            </Field>

            <Field label="How well does MaseruPlug represent your business online?">
              <RadioGroup
                value={form.profileRepresentation}
                onChange={(value) => updateField('profileRepresentation', value)}
                options={['Very poorly', 'Poorly', 'Fairly well', 'Well', 'Very well']}
              />
            </Field>

            <Field label="Have you noticed any increase in people discovering or contacting your business?">
              <RadioGroup
                value={form.customerDiscovery}
                onChange={(value) => updateField('customerDiscovery', value)}
                options={[
                  'Yes, a significant increase',
                  'Yes, a small increase',
                  'Not sure',
                  'No noticeable change',
                  'No',
                ]}
              />
            </Field>

            {(form.customerDiscovery.includes('Yes') || form.customerDiscovery === 'Not sure') && (
              <Field label="Tell us about your experience">
                <textarea
                  value={form.customerDiscoveryDetails}
                  onChange={(e) => updateField('customerDiscoveryDetails', e.target.value)}
                  placeholder="Have customers mentioned MaseruPlug? Have people contacted you through your listing?"
                  className={`${inputClass} min-h-[110px]`}
                />
              </Field>
            )}

            <Field label="How useful is MaseruPlug to your business currently?">
              <RadioGroup
                value={form.usefulness}
                onChange={(value) => updateField('usefulness', value)}
                options={[
                  'Not useful',
                  'Slightly useful',
                  'Moderately useful',
                  'Very useful',
                  'Extremely useful',
                ]}
              />
            </Field>
          </Section>

          {/* REVIEWS */}

          <Section
            number="03"
            title="Reviews & Ratings"
            description="We are considering introducing customer reviews and ratings."
          >
            <Field label="Would you like MaseruPlug to introduce customer reviews and ratings?">
              <RadioGroup
                value={form.wantsReviews}
                onChange={(value) => updateField('wantsReviews', value)}
                options={[
                  'Yes, definitely',
                  'Yes, but only verified customers should review',
                  'Maybe',
                  'No',
                ]}
              />
            </Field>

            {form.wantsReviews !== 'No' && form.wantsReviews !== '' && (
              <Field label="Which review system would you prefer?">
                <RadioGroup
                  value={form.reviewPreference}
                  onChange={(value) => updateField('reviewPreference', value)}
                  options={[
                    'Star ratings only',
                    'Star ratings + written reviews',
                    'Written reviews only',
                  ]}
                />
              </Field>
            )}
          </Section>

          {/* FEATURES */}

          <Section
            number="04"
            title="What Should We Build?"
            description="Select everything that would make MaseruPlug more useful to your business."
          >
            <CheckboxGroup
              options={featureOptions}
              selected={form.desiredFeatures}
              onChange={(value) => toggleOption('desiredFeatures', value)}
            />

            <Field label="What is the ONE feature you would most like MaseruPlug to introduce?">
              <textarea
                value={form.mostWantedFeature}
                onChange={(e) => updateField('mostWantedFeature', e.target.value)}
                placeholder="If we could build one thing that would make MaseruPlug significantly more useful, what would it be?"
                className={`${inputClass} min-h-[120px]`}
              />
            </Field>
          </Section>

          {/* BUSINESS GOALS */}

          <Section
            number="05"
            title="Your Business Goals"
            description="What would you like MaseruPlug to help you achieve?"
          >
            <CheckboxGroup
              options={goalOptions}
              selected={form.businessGoals}
              onChange={(value) => toggleOption('businessGoals', value)}
            />
          </Section>

          {/* RECOMMENDATION */}

          <Section
            number="06"
            title="Your Recommendation"
            description="Your honest opinion helps us tremendously."
          >
            <Field label="Would you recommend MaseruPlug to another business owner?">
              <RadioGroup
                value={form.recommend}
                onChange={(value) => updateField('recommend', value)}
                options={['Definitely', 'Probably', 'Not sure', 'Probably not', 'Definitely not']}
              />
            </Field>

            <Field label="Why did you choose this answer?">
              <textarea
                value={form.recommendationReason}
                onChange={(e) => updateField('recommendationReason', e.target.value)}
                placeholder="Tell us why..."
                className={`${inputClass} min-h-[110px]`}
              />
            </Field>
          </Section>

          {/* FINAL FEEDBACK */}

          <Section
            number="07"
            title="Final Feedback"
            description="Tell us what you love and what we should improve."
          >
            <Field label="What do you like about MaseruPlug?">
              <textarea
                value={form.whatTheyLike}
                onChange={(e) => updateField('whatTheyLike', e.target.value)}
                placeholder="What has been your favourite part of the platform?"
                className={`${inputClass} min-h-[110px]`}
              />
            </Field>

            <Field label="What should we improve?">
              <textarea
                value={form.whatToImprove}
                onChange={(e) => updateField('whatToImprove', e.target.value)}
                placeholder="Be honest. What would make MaseruPlug better for you?"
                className={`${inputClass} min-h-[110px]`}
              />
            </Field>
          </Section>

          {/* PREMIUM */}

          <Section
            number="08"
            title="Future MaseruPlug Services"
            description="Help us understand which premium services may be valuable to businesses."
          >
            <Field label="If MaseruPlug helped you get more customers, would you consider paying for additional premium features?">
              <RadioGroup
                value={form.premiumInterest}
                onChange={(value) => updateField('premiumInterest', value)}
                options={[
                  'Yes',
                  'Maybe, depending on the features and price',
                  'No',
                  'Not sure yet',
                ]}
              />
            </Field>

            <Field label="Which premium features would interest you?">
              <CheckboxGroup
                options={premiumOptions}
                selected={form.premiumFeatures}
                onChange={(value) => toggleOption('premiumFeatures', value)}
              />
            </Field>
          </Section>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-[#111111] shadow-sm transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Submitting Feedback...' : 'Submit Feedback'}
          </button>

          <p className="text-center text-xs text-neutral-400">
            Thank you for helping us build a better MaseruPlug.
          </p>
        </form>
      </div>
    </main>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

const inputClass =
  'w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/10';

function Section({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-xs font-extrabold text-[#111111]">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold text-[#111111]">{title}</h2>

          <p className="mt-1 text-sm text-neutral-500">{description}</p>
        </div>
      </div>

      <div className="mt-7 space-y-6">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-[#111111]">{label}</label>

      {children}
    </div>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      {options.map((option) => (
        <label
          key={option}
          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
            value === option
              ? 'border-[#25D366] bg-[#25D366]/5'
              : 'border-neutral-200 hover:bg-neutral-50'
          }`}
        >
          <input
            type="radio"
            name={labelToName(options)}
            checked={value === option}
            onChange={() => onChange(option)}
            className="accent-[#25D366]"
          />

          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2 md:grid-cols-2">
      {options.map((option) => {
        const checked = selected.includes(option);

        return (
          <label
            key={option}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
              checked ? 'border-[#25D366] bg-[#25D366]/5' : 'border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onChange(option)}
              className="accent-[#25D366]"
            />

            <span className="text-sm">{option}</span>
          </label>
        );
      })}
    </div>
  );
}

function StarRating({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="transition hover:scale-110"
            aria-label={`Rate ${star} out of 5`}
          >
            <Star
              size={30}
              className={star <= value ? 'fill-[#25D366] text-[#25D366]' : 'text-neutral-300'}
            />
          </button>
        ))}
      </div>

      <p className="mt-2 text-xs text-neutral-400">
        {value ? `${value} out of 5` : 'Select a rating'}
      </p>
    </div>
  );
}

function labelToName(options: string[]) {
  return options
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '');
}
