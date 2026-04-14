import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { StatusPill } from "@/components/StatusPill";
import { Button } from "@/components/Button";
import { workQueueData } from "@/data/mockData";
import { Filter } from "lucide-react";

export default function QueuePage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <PageHeader 
        title="My Work Queue" 
        description="Assigned Claims & Tasks"
        action={
          <Button variant="secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        }
      />
      
      <Card variant="low" className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="p-4 font-mono text-xs text-on-surface-variant uppercase tracking-widest font-medium">Claim ID</th>
                <th className="p-4 font-mono text-xs text-on-surface-variant uppercase tracking-widest font-medium">Type</th>
                <th className="p-4 font-mono text-xs text-on-surface-variant uppercase tracking-widest font-medium">Priority</th>
                <th className="p-4 font-mono text-xs text-on-surface-variant uppercase tracking-widest font-medium">Status</th>
                <th className="p-4 font-mono text-xs text-on-surface-variant uppercase tracking-widest font-medium">Time Left</th>
                <th className="p-4 flex justify-end"></th>
              </tr>
            </thead>
            <tbody>
              {workQueueData.map((claim, idx) => (
                <tr key={claim.id} className={`${idx % 2 === 0 ? 'bg-surface-container' : 'bg-surface-container-low'} hover:bg-surface-container-high transition-colors`}>
                  <td className="p-4 font-mono text-primary font-medium">{claim.id}</td>
                  <td className="p-4 text-on-surface">{claim.type}</td>
                  <td className="p-4">
                    <span className={`text-sm ${claim.priority === 'High' ? 'text-error font-bold' : claim.priority === 'Medium' ? 'text-warning font-bold' : 'text-on-surface-variant'}`}>
                      {claim.priority}
                    </span>
                  </td>
                  <td className="p-4">
                    <StatusPill status={claim.status}>{claim.statusText}</StatusPill>
                  </td>
                  <td className="p-4 font-mono text-sm text-on-surface-variant">{claim.timeRemaining}</td>
                  <td className="p-4 text-right">
                    <Button variant="tertiary">Review</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
