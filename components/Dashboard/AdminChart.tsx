"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

type Props = {
  data: {
    category: string;
    count: number;
    fill: string;
  }[];
};

const chartConfig: ChartConfig = {
  count: {
    label: "Businesses",
  },
};

export function CategoryPieChart({ data }: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Businesses by Category</CardTitle>
        <CardDescription>Live platform distribution</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[260px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="count" hideLabel />}
            />

            <Pie
              data={data}
              dataKey="count"
              nameKey="category"
            >
              <LabelList
                dataKey="category"
                fontSize={11}
                stroke="none"
                formatter={(value) => String(value)}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          Platform growth tracking <TrendingUp className="h-4 w-4" />
        </div>

        <div className="text-muted-foreground">
          Showing live business distribution across MaseruPlug
        </div>
      </CardFooter>
    </Card>
  );
}