'use client';

interface Props {
  value: string;

  onChange: (value: string) => void;
}

export default function AnalyticsFilter({ value, onChange }: Props) {
  const filters = [
    {
      label: 'Today',
      value: 'today',
    },
    {
      label: '7 Days',
      value: '7days',
    },
    {
      label: '30 Days',
      value: '30days',
    },
    {
      label: 'All Time',
      value: 'all',
    },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}

          onClick={() => onChange(filter.value)}

          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            value === filter.value
              ? 'bg-[#25D366] text-white shadow-lg'
              : 'border bg-white text-gray-600 hover:border-[#25D366]'
          } `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
