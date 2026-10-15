'use client';

import { Line, LineChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

type Props = {
  data: {
    date: string;
    views: number;
    whatsapp: number;
    calls: number;
  }[];
};

const chartConfig = {
  views: {
    label: 'Profile Views',
    color: '#25D366',
  },

  whatsapp: {
    label: 'WhatsApp Leads',
    color: '#128C7E',
  },

  calls: {
    label: 'Phone Calls',
    color: '#111111',
  },
} satisfies ChartConfig;

export default function CustomerEngagementChart({ data }: Props) {
  return (
    <Card className="rounded-3xl border border-gray-200 bg-white py-4 shadow-sm transition hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#111111]">Customer Engagement</CardTitle>

        <CardDescription>Customer activity across MaseruPlug businesses</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <LineChart data={data}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"

              tickLine={false}

              axisLine={false}

              tickFormatter={(value) => {
                const date = new Date(value);

                return date.toLocaleDateString('en', {
                  day: 'numeric',
                  month: 'short',
                });
              }}
            />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Line
              dataKey="views"

              type="monotone"

              stroke="var(--color-views)"

              strokeWidth={3}

              dot={false}
            />

            <Line
              dataKey="whatsapp"

              type="monotone"

              stroke="var(--color-whatsapp)"

              strokeWidth={3}

              dot={false}
            />

            <Line
              dataKey="calls"

              type="monotone"

              stroke="var(--color-calls)"

              strokeWidth={3}

              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
