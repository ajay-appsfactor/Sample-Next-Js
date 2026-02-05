import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function CardImage({
  image,
  name,
  scientificName,
  match = "100% MATCH",
  season,
  description,
  temperature,
  waterRequirement,
  duration,
}) {
  return (
    <Card className="w-full overflow-hidden rounded-xl border transition hover:shadow-md">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          draggable="false"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <CardContent className="space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-xs italic text-muted-foreground">
              {scientificName}
            </p>
          </div>

          <Badge className="bg-green-100 text-green-700">
            {match}
          </Badge>
        </div>

        {/* Season */}
        <Badge variant="outline" className="w-fit">
          {season}
        </Badge>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Parameters */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground">Temperature</p>
            <p className="font-medium">{temperature}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Water Need</p>
            <p className="font-medium">{waterRequirement}</p>
          </div>

          <div className="col-span-2">
            <p className="text-muted-foreground">Crop Duration</p>
            <p className="font-medium">{duration}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
