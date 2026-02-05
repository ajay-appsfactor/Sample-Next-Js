import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "../ui/card";
import { Thermometer, Droplets, CloudRain, Wind, ArrowUp } from "lucide-react";
import { Waves, AlertTriangle, Leaf, SquareActivity } from "lucide-react";
import { Beaker, FlaskConical, Activity, Sprout } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { Badge } from "@/components/ui/badge";

const WeatherTabs = () => {
  return (
    <div className="p-8">
      <Tabs defaultValue="overview" className="w-full">
        {/* Tabs Header */}
        <TabsList className="bg-muted/40 p-1 rounded-xl">
          <TabsTrigger
            value="overview"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"
          >
            Overview
          </TabsTrigger>

          <TabsTrigger
            value="hydrology"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"
          >
            Hydrology
          </TabsTrigger>

          <TabsTrigger
            value="soil"
            className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow"
          >
            Soil Health
          </TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent
          value="overview"
          className="mt-2 rounded-2xl bg-muted/30 p-6"
        >
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Environmental Conditions Overview
              </h2>
              <p className="text-sm text-muted-foreground">
                Real-time summary of soil, weather & hydrological indicators
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Temperature */}
              <Card className="hover:shadow-xl transition">
                <CardContent className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Thermometer className="text-orange-500" />
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <ArrowUp size={12} /> 2.3%
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Temperature</p>
                  <p className="text-2xl font-semibold">32.3 °C</p>
                  <p className="text-xs text-gray-400">from last hour</p>
                </CardContent>
              </Card>

              {/* Humidity */}
              <Card className="hover:shadow-xl transition">
                <CardContent className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Droplets className="text-blue-500" />
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <ArrowUp size={12} /> 1.5%
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-2xl font-semibold">53%</p>
                  <p className="text-xs text-gray-400">from last hour</p>
                </CardContent>
              </Card>

              {/* Rainfall */}
              <Card className="hover:shadow-xl transition">
                <CardContent className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <CloudRain className="text-indigo-500" />
                    <span className="text-xs text-gray-400">—</span>
                  </div>
                  <p className="text-sm text-gray-500">Rainfall</p>
                  <p className="text-2xl font-semibold">2.5 mm</p>
                  <p className="text-xs text-gray-400">last hour</p>
                </CardContent>
              </Card>

              {/* Wind Speed */}
              <Card className="hover:shadow-xl transition">
                <CardContent className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Wind className="text-teal-500" />
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <ArrowUp size={12} /> 0.8%
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Wind Speed</p>
                  <p className="text-2xl font-semibold">19.7 km/h</p>
                  <p className="text-xs text-gray-400">from last hour</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Hydrology */}
        <TabsContent
          value="hydrology"
          className="mt-2 rounded-2xl bg-muted/30 p-6"
        >
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Hydrological Parameters
              </h2>
              <p className="text-sm text-muted-foreground">
                Water level, flood risk & soil monitoring
              </p>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* LEFT — Water Monitoring (FULL HEIGHT CARD) */}
              <Card className="h-full rounded-2xl">
                <CardContent className="h-full flex flex-col gap-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Water Monitoring
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    {/* Water Level */}
                    <MetricCard
                      icon={<Waves className="text-blue-600" />}
                      bg="bg-blue-100"
                      label="Water Level"
                      value="2.50 m"
                    />

                    {/* Water Temp */}
                    <MetricCard
                      icon={<Thermometer className="text-orange-600" />}
                      bg="bg-orange-100"
                      label="Water Temperature"
                      value="22.0 °C"
                    />

                    {/* Turbidity */}
                    <MetricCard
                      icon={<Droplets className="text-indigo-600" />}
                      bg="bg-indigo-100"
                      label="Water Turbidity"
                      value="15.0 NTU"
                    />

                    {/* Flood Risk */}
                    <MetricCard
                      icon={<AlertTriangle className="text-yellow-600" />}
                      bg="bg-yellow-100"
                      label="Flood Risk"
                      value="35%"
                      status="Moderate"
                      statusColor="text-yellow-600"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* RIGHT — Soil Status (FULL HEIGHT CARD) */}
              <Card className="h-full rounded-2xl">
                <CardContent className="h-full flex flex-col gap-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Soil Status
                  </h3>

                  {/* Overall Soil Health */}
                  <MetricCard
                    icon={<SquareActivity className="text-green-600" />}
                    bg="bg-green-100"
                    label="Soil Health"
                    value="Normal"
                    status="Optimal condition"
                    statusColor="text-green-600"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    {/* Soil Moisture */}
                    <MetricCard
                      icon={<Leaf className="text-emerald-600" />}
                      bg="bg-emerald-100"
                      label="Soil Moisture"
                      value="45%"
                      status="Normal"
                      statusColor="text-emerald-600"
                    />

                    {/* Soil Temperature */}
                    <MetricCard
                      icon={<Thermometer className="text-red-600" />}
                      bg="bg-red-100"
                      label="Soil Temperature"
                      value="28 °C"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Soil Health */}
        <TabsContent value="soil" className="mt-2 rounded-2xl bg-muted/30 p-6">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Soil Health Parameters
              </h2>
              <p className="text-sm text-muted-foreground">
                Soil quality and fertility analysis
              </p>
            </div>

            {/* TOP GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Soil pH */}
              <Card className="h-full rounded-2xl hover:shadow-xl transition">
                <CardContent className="h-full flex flex-col justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <Beaker className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Soil pH</p>
                      <p className="text-3xl font-semibold">6.8</p>
                      <Badge
                        variant="outline"
                        className="text-xs font-medium text-green-600"
                      >
                        Neutral
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fertility Index */}
              <Card className="h-full rounded-2xl hover:shadow-xl transition">
                <CardContent className="h-full flex flex-col justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-100">
                      <Leaf className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Fertility Index
                      </p>
                      <p className="text-3xl font-semibold">78</p>
                      <Badge
                        variant="outline"
                        className="text-xs font-medium text-green-600"
                      >
                        Very Good
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Nutrient Chips */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                Nitrogen • 180 kg/ha
              </span>
              <span className="px-4 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700">
                Phosphorus • 45 kg/ha
              </span>
              <span className="px-4 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                Potassium • 220 kg/ha
              </span>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Organic Matter */}
              <Card className="h-full rounded-2xl hover:shadow-xl transition">
                <CardContent className="h-full flex items-center gap-4 p-6">
                  <div className="p-3 rounded-lg bg-emerald-100">
                    <Sprout className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Organic Matter
                    </p>
                    <p className="text-2xl font-semibold">3.5%</p>
                  </div>
                </CardContent>
              </Card>

              {/* Electrical Conductivity */}
              <Card className="h-full rounded-2xl hover:shadow-xl transition">
                <CardContent className="h-full flex items-center gap-4 p-6">
                  <div className="p-3 rounded-lg bg-indigo-100">
                    <FlaskConical className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Electrical Conductivity
                    </p>
                    <p className="text-2xl font-semibold">1.20 dS/m</p>
                  </div>
                </CardContent>
              </Card>

              {/* Microbial Activity */}
              <Card className="h-full rounded-2xl hover:shadow-xl transition">
                <CardContent className="h-full flex items-center gap-4 p-6">
                  <div className="p-3 rounded-lg bg-yellow-100">
                    <Activity className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Microbial Activity
                    </p>
                    <p className="text-2xl font-semibold">72%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WeatherTabs;
