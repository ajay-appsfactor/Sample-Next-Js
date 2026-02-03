"use client";
import React, { useRef, useEffect } from "react";
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button"

export const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true,
  isFullscreen = false,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const contentClasses = isFullscreen
    ? "w-full h-full"
    : "relative w-full rounded-3xl bg-white  dark:bg-gray-900";

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto modal z-99999">
      {!isFullscreen && (
        <div
          className="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`relative w-full ${
          isFullscreen ? "h-[100dvh]" : "max-h-[90dvh] max-w-[700px]"
        } rounded-3xl bg-white dark:bg-gray-900 overflow-hidden ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <Button
          variant="outline"
            onClick={onClose}
            className="rounded-full cursor-pointer absolute right-3 top-3 z-999"
          >
            <X />
          </Button>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};
