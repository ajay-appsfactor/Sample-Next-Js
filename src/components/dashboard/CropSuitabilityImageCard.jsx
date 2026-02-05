import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CropSuitabilityImageCard({
  name,
  scientificName,
  description,
  temperature,
  water,
  duration,
  season,
  match = "100% MATCH",
  image,
}) {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden rounded-xl">
      {/* Image overlay */}
      <div className="absolute" />

      <img
        src={image}
        alt={name}
        className="relative w-full object-cover"
      />

      <CardHeader className="relative text-white">
        <CardAction>
          <Badge className="bg-green-600 text-white">
            {match}
          </Badge>
        </CardAction>

        <CardTitle className="text-xl">{name}</CardTitle>
        <p className="text-xs italic text-gray-200">
          {scientificName}
        </p>

        <Badge variant="secondary" className="mt-1 w-fit">
          {season}
        </Badge>

        <CardDescription className="mt-2 text-gray-200">
          {description}
        </CardDescription>

        {/* Parameters */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-300">Temperature</p>
            <p className="font-medium">{temperature}</p>
          </div>

          <div>
            <p className="text-gray-300">Water Need</p>
            <p className="font-medium">{water}</p>
          </div>

          <div className="col-span-2">
            <p className="text-gray-300">Duration</p>
            <p className="font-medium">{duration}</p>
          </div>
        </div>
      </CardHeader>

      <CardFooter className="relative z-40">
        <Button variant="secondary" className="w-full">
          View Crop Details
        </Button>
      </CardFooter>
    </Card>
  );
}
