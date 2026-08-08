import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  totalBusinesses: number;
  featuredBusinesses: number;
  totalCategories: number;
  newBusinesses: number;
};

export function SectionCards({
  totalBusinesses,
  featuredBusinesses,
  totalCategories,
  newBusinesses,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* CARD TEMPLATE */}
      <Card className="max-w-xs rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl transition hover:shadow-lg">
        <CardHeader>
          <CardDescription>Total Businesses</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">{totalBusinesses}</CardTitle>
          <CardContent className="p-0">
            <Badge className="mt-2 rounded-lg border-green-200 bg-green-50 text-green-600">
              <IconTrendingUp className="mr-1 h-4 w-4" />
              Live
            </Badge>
          </CardContent>
        </CardHeader>

        <CardFooter className="text-muted-foreground text-sm">All registered listings</CardFooter>
      </Card>

      {/* FEATURED */}
      <Card className="max-w-xs rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl transition hover:shadow-lg">
        <CardHeader>
          <CardDescription>Featured</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">{featuredBusinesses}</CardTitle>

          <Badge className="mt-2 rounded-lg border-blue-200 bg-blue-50 text-blue-600">
            Premium visibility
          </Badge>
        </CardHeader>

        <CardFooter className="text-muted-foreground text-sm">Boosted businesses</CardFooter>
      </Card>

      {/* CATEGORIES */}
      <Card className="max-w-xs rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl transition hover:shadow-lg">
        <CardHeader>
          <CardDescription>Categories</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">{totalCategories}</CardTitle>

          <Badge className="mt-2 rounded-lg border-purple-200 bg-purple-50 text-purple-600">
            Structured data
          </Badge>
        </CardHeader>

        <CardFooter className="text-muted-foreground text-sm">Service types</CardFooter>
      </Card>

      {/* NEW */}
      <Card className="max-w-xs rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl transition hover:shadow-lg">
        <CardHeader>
          <CardDescription>New This Month</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">{newBusinesses}</CardTitle>

          <Badge
            className={
              newBusinesses > 0
                ? 'mt-2 rounded-lg border-green-200 bg-green-50 text-green-600'
                : 'mt-2 border-red-200 bg-red-50 text-red-600'
            }
          >
            {newBusinesses > 0 ? (
              <IconTrendingUp className="mr-1 h-4 w-4" />
            ) : (
              <IconTrendingDown className="mr-1 h-4 w-4" />
            )}
            {newBusinesses > 0 ? 'Growth' : 'Low activity'}
          </Badge>
        </CardHeader>

        <CardFooter className="text-muted-foreground text-sm">Recent platform activity</CardFooter>
      </Card>
    </div>
  );
}
