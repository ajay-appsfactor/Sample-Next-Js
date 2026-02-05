"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Bell, Settings, RefreshCw, Sun, Menu, X } from "lucide-react";

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="flex items-center justify-between px-4 py-4 md:px-6">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500 text-white">
              <Sun className="h-5 w-5" />
            </div>

            <div className="hidden sm:block leading-tight">
              <h1 className="text-lg font-semibold text-emerald-600">
                Agricultural Weather Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Automatic Weather Station
              </p>
            </div>
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden items-center gap-2 md:flex">
            <Select defaultValue="haridwar">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" className="z-[60]">
                <SelectItem value="haridwar">Haridwar</SelectItem>
                <SelectItem value="punjab">Punjab</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="en">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" className="z-[60]">
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
              className="gap-2 border-emerald-500 text-emerald-600"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[85%] max-w-xs bg-background
        transition-transform duration-300 ease-in-out md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col overflow-y-auto p-4">
          {/* DRAWER HEADER */}
          <div className="mb-5 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500 text-white">
                <Sun className="h-4 w-4" />
              </div>

              <div className="leading-tight">
                <h1 className="text-lg font-semibold text-emerald-600">
                  Agricultural Weather
                </h1>
                <p className="text-sm text-muted-foreground">
                  Automatic Weather Station
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <X />
            </Button>
          </div>

          {/* DRAWER CONTENT */}
          <div className="flex flex-col gap-4">
            <Select defaultValue="haridwar">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                position="popper"
                side="bottom"
                sideOffset={8}
                className="z-[60]"
              >
                <SelectItem value="haridwar">Haridwar</SelectItem>
                <SelectItem value="punjab">Punjab</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="en">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                position="popper"
                side="bottom"
                sideOffset={8}
                className="z-[60]"
              >
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
              </SelectContent>
            </Select>

            <Separator />

            <Button variant="outline" className="justify-start gap-2">
              <Bell className="h-4 w-4" />
              Alerts
            </Button>

            <Button variant="outline" className="justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>

            <Button
              variant="outline"
              className="justify-start gap-2 border-emerald-500 text-emerald-600"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh Data
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
