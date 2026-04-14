import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { overviewMetrics, recentAnomalies } from "@/data/mockData";
import { ShieldAlert, TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader 
        title="Manager Overview" 
        description="Daily System Snapshot" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewMetrics.map((metric) => (
          <Card key={metric.title} variant="default" className="flex flex-col">
            <h3 className="font-mono text-sm text-on-surface-variant uppercase tracking-wide mb-2">{metric.title}</h3>
            <div className="flex items-end justify-between mt-auto">
              <span className="font-display text-4xl font-bold text-primary">{metric.value}</span>
              {metric.trend && (
                <div className={`flex items-center text-sm font-medium ${
                  metric.trendDirection === 'up' ? 'text-error' : 
                  metric.trendDirection === 'down' ? 'text-secondary' : 'text-on-surface-variant'
                }`}>
                  {metric.trendDirection === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : 
                   metric.trendDirection === 'down' ? <TrendingDown className="w-4 h-4 mr-1" /> : 
                   <Minus className="w-4 h-4 mr-1" />}
                  {metric.trend}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card variant="low" className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold mb-6">Recent Anomalies</h2>
          <div className="space-y-2">
            {recentAnomalies.map((anomaly, idx) => (
              <div key={anomaly.id} className={`p-4 rounded-md flex justify-between items-center ${idx % 2 === 0 ? 'bg-surface-container' : 'bg-surface-container-high'}`}>
                <div className="flex items-center gap-4">
                  <ShieldAlert className={anomaly.severity === 'High' ? 'text-error' : 'text-warning'} size={20} />
                  <div>
                    <span className="font-mono text-sm text-primary block">{anomaly.id}</span>
                    <span className="text-on-surface">{anomaly.description}</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-on-surface-variant">{anomaly.date}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="low">
          <h2 className="font-display text-2xl font-bold mb-6">System Health</h2>
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-surface-container rounded-md border-l-2 border-secondary flex flex-col items-start pb-4">
              <span className="font-mono text-sm text-on-surface-variant block mb-1">API Status</span>
              <span className="text-secondary font-bold">Operational</span>
            </div>
            <div className="p-4 bg-surface-container rounded-md border-l-2 border-primary flex flex-col items-start pb-4">
              <span className="font-mono text-sm text-on-surface-variant block mb-1">Data Sync</span>
              <span className="text-primary font-bold">Running</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
