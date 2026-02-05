import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wind, Cloud, CircleGauge, Sun } from "lucide-react";

export function WeatherDetailsCard({ wind, atmosphere, pressure, uvIndex }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {/* Column 1 — Wind */}
      <Card className="h-full shadow-md rounded-xl border hover:shadow-lg transition-all">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">  <Wind className="text-blue-500" size={20} />Wind Direction & Speed</CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-col items-center justify-center gap-3">
          {/* <Wind className="text-blue-500" size={32} /> */}
          <p className="text-md font-medium">
            {wind.direction} – {wind.speed} km/h
          </p>
        </CardContent>
      </Card>

      {/* Column 2 — Atmospheric */}
      <Card className="h-full shadow-md rounded-xl border hover:shadow-lg transition-all">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">    <Cloud className="text-gray-500" size={20} />Atmospheric Conditions</CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-col items-center justify-center gap-3">
          {/* <Cloud className="text-gray-500" size={32} /> */}
          <p className="text-md font-medium">
            Cloud Cover: {atmosphere.cloudCover}%
          </p>
          <p className="text-md font-medium">
            Fog Level: {atmosphere.fogLevel}
          </p>
        </CardContent>
      </Card>

      {/* Column 3 — Pressure + UV (Split Equal) */}
      <div className="h-full flex flex-col gap-6">
        {/* Pressure */}
        <Card className="flex-1 shadow-md rounded-xl border hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"> <CircleGauge className="text-gray-700" size={20} />Atmospheric Pressure</CardTitle>
          </CardHeader>
          <CardContent className="h-full flex flex-col items-center justify-center gap-3">
            {/* <CircleGauge className="text-gray-700" size={32} /> */}
            <p className="text-md font-medium">
              {pressure.min} – {pressure.max} hPa
            </p>
          </CardContent>
        </Card>

        {/* UV Index */}
        <Card className="flex-1 shadow-md rounded-xl border hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="flex gap-2 items-center"><Sun className="text-yellow-500" size={20} />UV Index</CardTitle>
          </CardHeader>
          <CardContent className="h-full flex flex-col items-center justify-center gap-3">
            {/* <Sun className="text-yellow-500" size={32} /> */}
            <p className="text-md font-medium">{uvIndex}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
