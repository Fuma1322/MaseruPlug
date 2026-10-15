'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

interface Props {
  data: {
    month: string;
    businesses: number;
  }[];
}

const chartConfig = {
  businesses: {
    label: 'Businesses',
    color: '#25D366',
  },
} satisfies ChartConfig;

export default function BusinessGrowthChart({ data }: Props) {
  return (
    <Card className="rounded-3xl border border-gray-200 bg-white py-4 shadow-xl transition hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-[#111111]">Business Growth</CardTitle>

            <CardDescription>New businesses registered over time</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart data={data}>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar dataKey="businesses" fill="var(--color-businesses)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
