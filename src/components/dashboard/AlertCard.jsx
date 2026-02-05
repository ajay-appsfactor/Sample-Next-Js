import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AlertCard({ title, description, severity, icon: Icon }) {
  const severityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-blue-100 text-blue-800",
    high: "bg-red-100 text-red-800",
  };

  const iconStyles = {
    low: "bg-green-100 text-green-600",
    medium: "bg-blue-100 text-blue-600",
    high: "bg-red-100 text-red-600",
  };

  const severityLabels = {
    low: "कम",
    medium: "मध्यम",
    high: "उच्च",
  };

  return (
    <Card className="w-full shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <CardContent>
        <div className="flex items-start gap-4">
          <div className="mt-1 text-gray-700">
            {/* Icon */}
            <div className={cn("p-3 rounded-lg", iconStyles[severity])}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              {title}
              <Badge className={severityColors[severity]}>
                {severityLabels[severity]}
              </Badge>
            </h2>
            <p className="text-gray-700 mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
