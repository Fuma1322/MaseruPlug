import {
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <Card className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition">
        <CardHeader>
          <CardDescription>Total Businesses</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">
            {totalBusinesses}
          </CardTitle>
          <CardContent className="p-0">
            <Badge className="mt-2 bg-green-50 text-green-600 border-green-200">
              <IconTrendingUp className="h-4 w-4 mr-1" />
              Live
            </Badge>
          </CardContent>
        </CardHeader>

        <CardFooter className="text-sm text-muted-foreground">
          All registered listings
        </CardFooter>
      </Card>

      {/* FEATURED */}
      <Card className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition">
        <CardHeader>
          <CardDescription>Featured</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">
            {featuredBusinesses}
          </CardTitle>

          <Badge className="mt-2 bg-blue-50 text-blue-600 border-blue-200">
            Premium visibility
          </Badge>
        </CardHeader>

        <CardFooter className="text-sm text-muted-foreground">
          Boosted businesses
        </CardFooter>
      </Card>

      {/* CATEGORIES */}
      <Card className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition">
        <CardHeader>
          <CardDescription>Categories</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">
            {totalCategories}
          </CardTitle>

          <Badge className="mt-2 bg-purple-50 text-purple-600 border-purple-200">
            Structured data
          </Badge>
        </CardHeader>

        <CardFooter className="text-sm text-muted-foreground">
          Service types
        </CardFooter>
      </Card>

      {/* NEW */}
      <Card className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition">
        <CardHeader>
          <CardDescription>New This Month</CardDescription>
          <CardTitle className="text-3xl font-bold tabular-nums">
            {newBusinesses}
          </CardTitle>

          <Badge
            className={
              newBusinesses > 0
                ? "mt-2 bg-green-50 text-green-600 border-green-200"
                : "mt-2 bg-red-50 text-red-600 border-red-200"
            }
          >
            {newBusinesses > 0 ? (
              <IconTrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <IconTrendingDown className="h-4 w-4 mr-1" />
            )}
            {newBusinesses > 0 ? "Growth" : "Low activity"}
          </Badge>
        </CardHeader>

        <CardFooter className="text-sm text-muted-foreground">
          Recent platform activity
        </CardFooter>
      </Card>

    </div>
  );
}