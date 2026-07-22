'use client';

import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
  }[];
};

const chartConfig = {
  views: {
    label: 'Profile Views',
    color: '#25D366',
  },
} satisfies ChartConfig;

export function ChartLineLinear({ data }: Props) {
  const growth =
    data.length > 1
      ? (((data[data.length - 1].views - data[0].views) / data[0].views) * 100).toFixed(1)
      : '0';

  return (
    <Card className="rounded-3xl border border-gray-100 bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#111111]">Profile Views</CardTitle>

        <CardDescription>Daily customer visits to MaseruPlug business profiles</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString('en', {
                  day: 'numeric',
                  month: 'short',
                })
              }
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

            <Line
              dataKey="views"
              type="linear"
              stroke="var(--color-views)"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium text-[#111111]">
          Trending {Number(growth) >= 0 ? 'up' : 'down'} by {Math.abs(Number(growth))}%
          <TrendingUp
            className={`h-4 w-4 ${Number(growth) >= 0 ? 'text-[#25D366]' : 'text-red-500'}`}
          />
        </div>

        <div className="text-muted-foreground">
          Showing daily profile visits from MaseruPlug users
        </div>
      </CardFooter>
    </Card>
  );
}
