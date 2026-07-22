interface Props {
  title: string;
  value: number | string;
  description: string;
}

export default function AnalyticsCard({ title, value, description }: Props) {
  return (
    <div className="rounded-3xl border border-[#25D366] bg-white p-6 shadow-sm">
      <p className="font-bold text-[#111111]">{title}</p>

      <h2 className="mt-3 text-4xl font-bold text-[#25D366]">{value}</h2>

      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
  );
}
