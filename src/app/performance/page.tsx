import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { performanceMetrics } from "@/data/mockData";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function PerformancePage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader 
        title="My Performance" 
        description="Consultant Dashboard"
        action={
          <Button variant="secondary">Download Report</Button>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="default">
          <h2 className="font-display text-2xl font-bold mb-6">Key Performance Indicators</h2>
          <div className="space-y-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.kpi} className="flex justify-between items-center py-3 border-b border-outline-variant/20 last:border-0">
                <div className="flex items-center gap-3">
                  {metric.status === 'success' ? (
                    <CheckCircle2 className="text-secondary w-5 h-5" />
                  ) : (
                    <AlertCircle className="text-warning w-5 h-5" />
                  )}
                  <span className="text-on-surface">{metric.kpi}</span>
                </div>
                <div className="text-right">
                  <span className={`font-mono font-bold text-lg ${metric.status === 'success' ? 'text-secondary' : 'text-warning'}`}>
                    {metric.score}
                  </span>
                  <span className="text-on-surface-variant font-mono text-xs uppercase ml-2">/ {metric.target}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card variant="low" accentColor="primary">
            <h3 className="font-display font-medium text-lg text-on-surface mb-2">Current Tier</h3>
            <div className="flex items-end gap-3 mb-4">
              <span className="font-display text-4xl font-bold text-primary">Gold</span>
              <span className="text-on-surface-variant font-mono text-sm uppercase mb-1">Consultant</span>
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-primary to-[#cc7700] h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="font-mono text-xs text-on-surface-variant">15 pts to Platinum Tier</p>
          </Card>
          
          <Card variant="low" className="flex flex-col justify-center items-center py-10 text-center">
            <h3 className="font-mono text-sm text-on-surface-variant uppercase tracking-widest mb-2">Upcoming Goal</h3>
            <p className="text-on-surface max-w-xs mb-6">Complete 20 more claims with a 95%+ QA rate this quarter to unlock your Q2 bonus.</p>
            <Button variant="primary">View Bonus Details</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
