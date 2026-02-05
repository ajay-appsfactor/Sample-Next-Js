import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";


export function SevenDayForecastCard({ forecast }) {
  return (
    <Card className="w-full rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
      <CardContent>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <CalendarDays className="h-5 w-5 text-blue-500" />7 Day Forecast
        </h3>

        {/* MOBILE ONLY (Carousel) */}
        <div className="block md:hidden">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {forecast.map((dayData, index) => {
                const WeatherIcon = dayData.icon;
                const isToday = dayData.day.toLowerCase() === "today";

                return (
                  <CarouselItem key={index} className="basis-1/2">
                    <ForecastItem
                      dayData={dayData}
                      WeatherIcon={WeatherIcon}
                      isToday={isToday}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex -left-6 top-1/2 -translate-y-1/2" />
            <CarouselNext className="hidden sm:flex -right-6 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* TABLET + DESKTOP (Grid) */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {forecast.map((dayData, index) => {
            const WeatherIcon = dayData.icon;
            const isToday = dayData.day.toLowerCase() === "today";

            return (
              <ForecastItem
                key={index}
                dayData={dayData}
                WeatherIcon={WeatherIcon}
                isToday={isToday}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

/* Reusable Item */
function ForecastItem({ dayData, WeatherIcon, isToday }) {
  return (
    <div
      className={`flex flex-col items-center gap-1 rounded-lg p-3 transition ${
        isToday
          ? "bg-yellow-100 hover:bg-yellow-200"
          : "bg-gray-50 hover:bg-gray-100"
      }`}
    >
      <p className="text-sm font-medium">{dayData.day}</p>

      <WeatherIcon
        size={24}
        className={isToday ? "text-yellow-500" : "text-gray-500"}
      />

      <p className="text-md font-semibold">{dayData.temp}°</p>

      <p className="text-sm font-medium">
        <span className="text-red-600">{dayData.max}°</span> /{" "}
        <span className="text-blue-600">{dayData.min}°</span>
      </p>
    </div>
  );
}
