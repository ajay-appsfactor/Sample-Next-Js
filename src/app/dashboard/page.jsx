import { AlertCard } from "@/components/dashboard/AlertCard";
import { WeatherAlertCard } from "@/components/dashboard/WeatherAlertCard";
import { CloudHail, Sun, CloudRain, Cloud, Droplet } from "lucide-react";
import { SevenDayForecastCard } from "@/components/dashboard/SevenDayForecastCard";
import { WeatherDetailsCard } from "@/components/dashboard/WeatherDetailsCard.jsx";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WeatherTabs from "@/components/dashboard/WeatherTabs";
// import { CropSuitabilityCard } from "@/components/dashboard/CropSuitabilityCard";
// import { CropSuitabilityImageCard } from "@/components/dashboard/CropSuitabilityImageCard";
import { CardImage } from "@/components/dashboard/CardImage";

const page = () => {
  const windData = { direction: "उत्तर-पूर्व", speed: 14.4 };
  const cloudCoverData = { description: "Partly Cloudy", percent: 45 };
  const fogLevelData = { description: "Light Fog", visibility: 700 };
  const pressureData = { min: 980, max: 1040 };
  const uvIndexData = 7;

  //   forecastData
  const forecastData = [
    { day: "Today", temp: 30, min: 22, max: 34, icon: Sun },
    { day: "Tomorrow", temp: 29, min: 22, max: 34, icon: Cloud },
    { day: "Wed", temp: 28, min: 22, max: 34, icon: CloudRain },
    { day: "Thu", temp: 27, min: 22, max: 34, icon: Sun },
    { day: "Fri", temp: 26, min: 22, max: 34, icon: Sun },
    { day: "Sat", temp: 25, min: 22, max: 34, icon: Cloud },
    { day: "Sun", temp: 24, min: 22, max: 34, icon: Sun },
  ];

  const atmosphereData = { cloudCover: 45, fogLevel: "Light Fog" };
  return (
    <main>
      <div>
        <DashboardHeader />
      </div>

      <div className="p-8 grid grid-cols-1 gap-6">
        <WeatherAlertCard
          stationName="Automatic Weather Station"
          stationId="AWS-001"
          status="inactive"
          lastUpdate="a few seconds ago"
        />
        <AlertCard
          title="हल्की बारिश की संभावना"
          description="आज हल्की बूंदाबांदी हो सकती है, कोई विशेष चिंता नहीं।"
          severity="low"
          icon={Droplet}
        />
        <AlertCard
          title="मध्यम वर्षा की संभावना"
          description="आज शाम को हल्की से मध्यम वर्षा की संभावना है। कृपया सतर्क रहें।"
          severity="medium"
          icon={CloudHail}
        />
        <AlertCard
          title="गर्मी की लहर चेतावनी"
          description="अगले 3 दिनों में तापमान 40°C से ऊपर रहने की संभावना है।"
          severity="high"
          icon={Sun}
        />
      </div>

      {/* WeatherTabs */}
      <div>
        <WeatherTabs />
      </div>
      {/* Weather Details */}
      <div className="p-8">
        <WeatherDetailsCard
          wind={windData}
          atmosphere={atmosphereData}
          pressure={pressureData}
          uvIndex={uvIndexData}
        />
      </div>

      {/* SevenDayForecastCard  */}
      <div className="p-8 grid grid-cols-1 gap-6">
        <SevenDayForecastCard forecast={forecastData} />
      </div>

      {/* Crop Suitability Card */}
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <CropSuitabilityCard
          name="कपास"
          scientificName="Gossypium"
          season="Kharif"
          description="कपास एक महत्वपूर्ण नकदी फसल है जो कपड़ा उद्योग के लिए कच्चा माल प्रदान करती है।"
          temperature="21°–35°C"
          waterRequirement="Medium"
          duration="150–180 दिन"
        />

        <CropSuitabilityCard
          name="गन्ना"
          scientificName="Saccharum officinarum"
          season="Kharif"
          description="गन्ना चीनी उत्पादन की प्रमुख फसल है।"
          temperature="20°–35°C"
          waterRequirement="High"
          duration="12–18 महीने"
        />

        <CropSuitabilityCard
          name="धान"
          scientificName="Oryza sativa"
          season="Kharif"
          description="धान भारत की प्रमुख खाद्य फसल है। इसे गर्म और आर्द्र जलवायु की आवश्यकता होती है।"
          temperature="20°–35°C"
          waterRequirement="High"
          duration="120–150 दिन"
        />
      </div> */}

      {/* Crop Suitability Card */}
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        <CropSuitabilityImageCard
          name="कपास"
          scientificName="Gossypium"
          season="Kharif"
          match="100% MATCH"
          description="कपास एक महत्वपूर्ण नकदी फसल है जो कपड़ा उद्योग के लिए कच्चा माल प्रदान करती है।"
          temperature="21°–35°C"
          water="Medium"
          duration="150–180 दिन"
          image="/kapash.jpg"
        />

        <CropSuitabilityImageCard
          name="गन्ना"
          scientificName="Saccharum officinarum"
          season="Kharif"
          description="गन्ना चीनी उत्पादन की प्रमुख फसल है।"
          temperature="20°–35°C"
          water="High"
          duration="12–18 महीने"
          image="/ganna.avif"
        />

        <CropSuitabilityImageCard
          name="धान"
          scientificName="Oryza sativa"
          season="Kharif"
          description="धान भारत की प्रमुख खाद्य फसल है। इसे गर्म और आर्द्र जलवायु की आवश्यकता होती है।"
          temperature="20°–35°C"
          water="High"
          duration="120–150 दिन"
          image="/dhaan.avif"
        />
      </div> */}

      {/* Card Image */}
      <div className="p-8 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        <CardImage
          name="कपास"
          scientificName="Gossypium"
          season="Kharif"
          match="100% MATCH"
          description="कपास एक महत्वपूर्ण नकदी फसल है जो कपड़ा उद्योग के लिए कच्चा माल प्रदान करती है।"
          temperature="21°–35°C"
          water="Medium"
          duration="150–180 दिन"
          image="/kapash.jpg"
        />
        <CardImage
          name="गन्ना"
          scientificName="Saccharum officinarum"
          season="Kharif"
          match="100% MATCH"
          description="गन्ना चीनी उत्पादन की प्रमुख फसल है।"
          temperature="20°–35°C"
          water="High"
          duration="12–18 महीने"
          image="/ganna.avif"
        />
        <CardImage
          name="धान"
          scientificName="Oryza sativa"
          season="Kharif"
          match="100% MATCH"
          description="धान भारत की प्रमुख खाद्य फसल है। इसे गर्म और आर्द्र जलवायु की आवश्यकता होती है।"
          temperature="20°–35°C"
          water="High"
          duration="120–150 दिन"
          image="/dhaan.avif"
        />
      </div>
    </main>
  );
};

export default page;
