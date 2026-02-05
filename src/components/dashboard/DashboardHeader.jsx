"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Settings,
  RefreshCw,
  Sun,
  Menu,
  X,
} from "lucide-react";

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">

        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500 text-white">
            <Sun className="h-5 w-5" />
          </div>

          <div className="leading-tight hidden sm:block">
            <h1 className="text-lg font-semibold text-emerald-600">
              Agricultural Weather Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Automatic Weather Station
            </p>
          </div>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-2">
          <Select defaultValue="haridwar">
            <SelectTrigger className="w-[110px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="haridwar">Haridwar</SelectItem>
              <SelectItem value="punjab">Punjab</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="en">
            <SelectTrigger className="w-[110px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="gap-2 text-emerald-600 border-emerald-500"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4 bg-background">
          <Select defaultValue="haridwar">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="haridwar">Haridwar</SelectItem>
              <SelectItem value="punjab">Punjab</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="en">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              <Bell className="h-4 w-4 mr-2" /> Alerts
            </Button>
            <Button variant="outline" className="flex-1">
              <Settings className="h-4 w-4 mr-2" /> Settings
            </Button>
          </div>

          <Button className="gap-2 text-emerald-600 border-emerald-500" variant="outline">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      )}
    </header>
  );
}
