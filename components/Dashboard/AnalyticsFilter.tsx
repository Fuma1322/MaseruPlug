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
    <div className="inline-flex rounded-xl border bg-white p-1 shadow-sm">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            value === filter.value
              ? 'bg-[#25D366] text-white shadow'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
