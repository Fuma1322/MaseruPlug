import prisma from "@/lib/db";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    include: {
      businesses: true,
    },
  });

  if (!category) {
    return <div className="p-10 text-center">Category not found</div>;
  }

  return (
    <div className="space-y-6 p-4">

      {/* HEADER */}
      <div className="w-full flex flex-col justify-center items-center text-center bg-teal-50/60 rounded-xl min-h-[180px] sm:min-h-[250px] py-14 px-6 shadow-xl">
        <h2 className="text-3xl text-[#111111] sm:text-5xl font-bold">
          {category.name}
        </h2>
        <p className="text-lg text-[#111111] mt-4">
          Find the best {category.name.toLowerCase()}s near you
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {category.businesses.map((item) => (
          <Card
            key={item.id}
            className="relative w-full max-w-sm mx-auto pt-0 shadow-md border border-[#25D366] overflow-hidden"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/25" />

            <img
              src={item.images?.[0] || "/lelo.jpg"}
              alt={item.name}
              className="relative z-20 aspect-video w-full object-cover"
            />

            <CardHeader className="space-y-2">
              <CardTitle className="font-bold text-lg">
                {item.name}
              </CardTitle>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-[#25D366]" />
                <span>{item.location}</span>
              </div>

              <CardDescription className="text-sm font-medium text-[#111111]">
                {item.description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="flex items-center justify-center">
              <Button className="w-full h-10 text-sm">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}

      </div>
    </div>
  );
}