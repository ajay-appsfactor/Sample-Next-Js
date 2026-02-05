import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Hash, Clock, Satellite } from "lucide-react";
import { cn } from "@/lib/utils";

export const WeatherAlertCard = ({
  stationName,
  stationId,
  status,
  lastUpdate,
}) => {
  const statusStyles = {
    active: {
      badge: "bg-green-100 text-green-800",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      label: "Active",
      Icon: Wifi,
    },
    inactive: {
      badge: "bg-gray-100 text-gray-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      label: "Inactive",
      Icon: Satellite,
    },
  };

  const current = statusStyles[status];

  return (
    <Card className="w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <CardContent>
        
        <div className="flex items-start justify-between">
          {/* Left Section */}
          <div className="flex gap-4">
            {/* Icon */}
            <div
              className={cn(
                "p-3 rounded-lg flex items-center justify-center",
                current.iconBg
              )}
            >
              <current.Icon className={cn("h-5 w-5", current.iconColor)} />
            </div>

            {/* Name + Details */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{stationName}</h3>

              <div className="mt-1 flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Hash className="h-4 w-4 text-gray-500" />
                  <span>Station ID: {stationId}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Last Update: {lastUpdate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <Badge className={cn("px-3 py-1 rounded-full", current.badge)}>
            {current.label}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
