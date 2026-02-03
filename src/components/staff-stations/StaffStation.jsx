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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/* ------------------ MAIN FORM ------------------ */

const StaffStation = () => {
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
            <h2 className="font-semibold mb-4">Staff Details</h2>

            <div className="space-y-2">
              <Input
                label="Joined Date"
                required
                placeholder="Enter station name"
              />
              <Input label="Staff Code" />
              <Input label="Roles" />
              <Input label="First Name" />
              <Input label="Last Name" />
              <Input label="Email" />
              <Input label="Phone" />
              <Input label="Password" />
            </div>
          </section>

          {/* Assign Stations*/}
          <section className="col-span-2">
            <h2 className="font-semibold mb-4">Assign Stations</h2>

            <Table>
           
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">STATION NAME</TableHead>
                  <TableHead>CITY</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead className="text-right">INSTALLED DATE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Haridwar</TableCell>
                  <TableCell>Haridwar</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell className="text-right">01/14/2026</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
};

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

function Input({ label, required = false, className = "", ...props }) {
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

export default StaffStation;
