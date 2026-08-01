'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

type Props = {
  data: {
    category: string;
    count: number;
    fill: string;
  }[];
};

const chartConfig = {
  count: {
    label: 'Businesses',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export default function CategoryDistributionChart({ data }: Props) {
  return (
    <Card className="rounded-3xl border border-gray-200 bg-white py-4 shadow-sm transition hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#111111]">Business Categories</CardTitle>

        <CardDescription>Businesses per category</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={data} accessibilityLayer>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => (value.length > 8 ? `${value.substring(0, 8)}...` : value)}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar dataKey="count" radius={8} fill="var(--color-count)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
