import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { pipelineStages } from "@/data/mockData";
import { BarChart } from "lucide-react";

export default function PipelinePage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader 
        title="Pipeline & SLA" 
        description="Claim Flow Management"
        action={
          <div className="bg-surface-container-high px-4 py-2 rounded-lg font-mono text-sm border border-outline-variant/20 tracking-wide text-on-surface">
            Global SLA Breaches: <span className="text-error font-bold">12%</span>
          </div>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pipelineStages.map((stage) => (
          <Card key={stage.name} variant="default" className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h3 className="font-display font-medium text-lg text-on-surface leading-tight">{stage.name}</h3>
              <BarChart className="w-5 h-5 text-on-surface-variant shrink-0" />
            </div>
            <div className="flex items-baseline">
              <span className="font-display text-4xl font-bold text-primary">{stage.count}</span>
              <span className="text-on-surface-variant ml-2 font-mono text-sm uppercase">Active</span>
            </div>
            <div className="space-y-2 mt-4 pt-4 border-t border-outline-variant/20">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">At Risk</span>
                <span className={`font-mono font-medium ${stage.atRisk > 0 ? 'text-error' : 'text-secondary'}`}>
                  {stage.atRisk}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Avg Time</span>
                <span className="font-mono text-on-surface font-medium">{stage.avgTime}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
