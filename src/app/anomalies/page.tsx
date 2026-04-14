import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { radarAnomalies } from "@/data/mockData";
import { Radar, AlertTriangle } from "lucide-react";

export default function AnomaliesPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader 
        title="Anomaly Radar" 
        description="AI Pattern Detection"
        action={
          <Button variant="primary">
            <Radar className="w-4 h-4 mr-2" />
            Run Full Scan
          </Button>
        }
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {radarAnomalies.map((anomaly) => (
            <Card key={anomaly.id} variant="default" accentColor={anomaly.confidence > 90 ? "error" : "warning"}>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <AlertTriangle className={anomaly.confidence > 90 ? "text-error" : "text-warning"} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-on-surface mb-1">
                      {anomaly.description}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-on-surface-variant uppercase tracking-wide">
                      <span>ID: <span className="text-primary">{anomaly.id}</span></span>
                      <span>•</span>
                      <span>Source: {anomaly.source}</span>
                      <span>•</span>
                      <span>{anomaly.timeDetected}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  <div className="text-right">
                    <span className="font-mono text-2xl font-bold text-on-surface">{anomaly.confidence}%</span>
                    <span className="block text-xs text-on-surface-variant flex font-mono uppercase justify-end">Confidence</span>
                  </div>
                  <Button variant="secondary" className="whitespace-nowrap">{anomaly.actionRequired}</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card variant="low">
            <h3 className="font-display text-xl font-bold mb-4 text-on-surface">Radar Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">High Confidence (<span className="font-mono">90%+</span>)</span>
                <span className="font-mono text-error font-bold">14</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Medium Confidence (<span className="font-mono">70-89%</span>)</span>
                <span className="font-mono text-warning font-bold">32</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-on-surface-variant">Total Analyzed</span>
                <span className="font-mono text-primary font-bold">12,400</span>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="secondary" className="w-full">Export Report</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
