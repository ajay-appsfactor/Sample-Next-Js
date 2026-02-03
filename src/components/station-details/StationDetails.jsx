"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ------------------ CONSTANTS ------------------ */

const SENSOR_TYPES = [
  "Air Temperature",
  "Humidity",
  "Rainfall",
  "Soil Moisture",
  "Soil Temperature",
];

/* ------------------ MAIN FORM ------------------ */

export default function AddStationForm() {
  const [selectedSensors, setSelectedSensors] = React.useState([]);
  const [stationInstalledAt, setStationInstalledAt] = React.useState(null);
  const [sensorDates, setSensorDates] = React.useState({});

  const toggleSensor = (sensor) => {
    setSelectedSensors((prev) =>
      prev.includes(sensor)
        ? prev.filter((s) => s !== sensor)
        : [...prev, sensor],
    );
  };

  const isEnabled = (sensor) => selectedSensors.includes(sensor);

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border bg-white p-4 mb-6">
        <h1 className="text-lg font-semibold">Add Station</h1>
        <Button variant="outline" className="w-full sm:w-auto">
          BACK
        </Button>
      </div>

      {/* Card */}
      <div className="border bg-white p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Station Details */}
          <section className="">
            <h2 className="font-semibold mb-4">Station Details</h2>

            <div className="space-y-4">
              <Input label="Station Name" required placeholder="Enter station name" />
              <Input label="Street" />
              <Input label="Street 2" />

              <div>
                <Label className="block text-sm mb-1">City</Label>
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="light">Haridwar</SelectItem>
                      <SelectItem value="dark">Laksar</SelectItem>
                      <SelectItem value="system">Roorkee</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-sm mb-1">
                  Installed Date & Time
                </Label>
                <DateTimePicker
                  value={stationInstalledAt}
                  onChange={setStationInstalledAt}
                />
              </div>
            </div>
          </section>

          {/* Sensors Details */}
          <section className="col-span-2">
            <h2 className="font-semibold mb-4">Sensors Details</h2>

            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-4 gap-4 text-sm font-medium mb-2">
              <div>Sensor Type</div>
              <div>Serial Number</div>
              <div>Depth (cm)</div>
              <div>Installed Date</div>
            </div>

            {SENSOR_TYPES.map((sensor) => (
              <div
                key={sensor}
                className="
                  grid grid-cols-1 md:grid-cols-4 gap-3 items-center
                  border md:border-0 rounded-md p-3 md:p-0 mb-3
                "
              >
                {/* Checkbox */}
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={isEnabled(sensor)}
                    onCheckedChange={() => toggleSensor(sensor)}
                  />
                  <Label>{sensor}</Label>
                </div>

                <Input
                  placeholder="Serial number"
                  disabled={!isEnabled(sensor)}
                />

                <Input placeholder="Depth" disabled={!isEnabled(sensor)} />

                <DateTimePicker
                  disabled={!isEnabled(sensor)}
                  value={sensorDates[sensor]}
                  onChange={(date) =>
                    setSensorDates((prev) => ({
                      ...prev,
                      [sensor]: date,
                    }))
                  }
                />
              </div>
            ))}
          </section>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <Button className="bg-slate-900 text-white w-full sm:w-auto">
            SUBMIT
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ------------------ DATE TIME PICKER ------------------ */

function DateTimePicker({ value, onChange, disabled }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          {/* {value ? format(value, "PPP p") : "Pick date & time"} */}
          {value ? format(value, "dd/MM/yyyy h:mm a") : "DD/MM/YYYY h:mm AM"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
        />

        {/* Time */}
        <div className="p-3 border-t">
          <input
            type="time"
            className="w-full border px-2 py-1 rounded-md"
            onChange={(e) => {
              if (!value) return;
              const [h, m] = e.target.value.split(":");
              const newDate = new Date(value);
              newDate.setHours(h, m);
              onChange(newDate);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

/* ------------------ INPUT ------------------ */

function Input({ label,required = false, className = "", ...props }) {
  return (
    <div>
       {label && (
        <Label className="block text-sm mb-1">
          {label}
          {required && <span className="text-rose-500"> *</span>}
        </Label>
      )}
      <input
        {...props}
        className={cn(
          "w-full border px-3 py-2 text-sm rounded-md disabled:bg-gray-100",
          className,
        )}
      />
    </div>
  );
}
