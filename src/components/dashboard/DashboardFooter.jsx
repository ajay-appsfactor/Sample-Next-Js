export function DashboardFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:gap-0">
        {/* Left */}
        <p className="text-sm text-muted-foreground">
          © 2026 <span className="font-medium text-emerald-600">Agricultural Weather Station</span>
        </p>

        {/* Right */}
        <p className="text-sm text-muted-foreground">
          Data updates every <span className="font-medium">5 minutes</span>
        </p>
      </div>
    </footer>
  );
}
