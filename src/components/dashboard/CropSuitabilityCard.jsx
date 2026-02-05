import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CropSuitabilityCard({
  name,
  scientificName,
  description,
  temperature,
  waterRequirement,
  duration,
  season,
  match = "100% MATCH",
}) {
  return (
    <Card className="rounded-xl border hover:shadow-md transition">
      <CardContent className="space-y-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-xs text-muted-foreground italic">
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
        <p className="text-sm text-gray-600">
          {description}
        </p>

        {/* Parameters */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Temperature</p>
            <p className="font-medium">{temperature}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Water Need</p>
            <p className="font-medium">{waterRequirement}</p>
          </div>

          <div>
            <p className="text-muted-foreground">Crop Duration</p>
            <p className="font-medium">{duration}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
