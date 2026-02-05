import { Card, CardContent } from "../ui/card";

export const MetricCard = ({ icon, bg, label, value, status, statusColor }) => {
  return (
       <Card className="hover:shadow-xl transition rounded-xl">
      <CardContent className="flex items-center gap-4 p-5">
        <div className={`p-3 rounded-lg ${bg}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
          {status && (
            <span className={`text-xs font-medium ${statusColor}`}>
              {status}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

