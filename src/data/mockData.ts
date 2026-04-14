export interface Metric {
  title: string;
  value: string | number;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
}

export interface ClaimTask {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  type: string;
  assignee: string;
  status: 'error' | 'warning' | 'success' | 'neutral';
  statusText: string;
  timeRemaining?: string;
}

export interface AnomalyItem {
  id: string;
  source: string;
  confidence: number;
  description: string;
  actionRequired: string;
  timeDetected: string;
}

export interface PipelineStage {
  name: string;
  count: number;
  atRisk: number;
  avgTime: string;
}

export interface PerformanceMetric {
  kpi: string;
  score: string | number;
  target: string | number;
  status: 'success' | 'warning' | 'error';
}

export const overviewMetrics: Metric[] = [
  { title: "Active Claims", value: "1,248", trend: "+4%", trendDirection: "up" },
  { title: "SLA Breach Risk", value: "34", trend: "-2%", trendDirection: "down" },
  { title: "Anomaly Detections", value: "8", trend: "+12%", trendDirection: "up" },
  { title: "Avg Resolution Time", value: "4.2 days", trend: "0%", trendDirection: "neutral" },
];

export const workQueueData: ClaimTask[] = [
  { id: "CLM-9021A", priority: "High", type: "Bodily Injury", assignee: "J. Doe", status: "error", statusText: "SLA Risk", timeRemaining: "2h" },
  { id: "CLM-8832B", priority: "Medium", type: "Property Damage", assignee: "A. Smith", status: "warning", statusText: "Under Review", timeRemaining: "1d" },
  { id: "CLM-7711C", priority: "Low", type: "Fraud Check", assignee: "M. Lee", status: "success", statusText: "Cleared", timeRemaining: "-" },
  { id: "CLM-7644D", priority: "High", type: "Total Loss", assignee: "J. Doe", status: "error", statusText: "Action Needed", timeRemaining: "4h" },
  { id: "CLM-7200E", priority: "Medium", type: "Property Damage", assignee: "S. Connor", status: "neutral", statusText: "Pending Info", timeRemaining: "3d" },
];

export const recentAnomalies = [
  { id: "ANM-001", description: "Unexpected high payout for zip code 90210", severity: "High", date: "2026-04-14" },
  { id: "ANM-002", description: "Duplicate claimant on multiple policies", severity: "Medium", date: "2026-04-13" },
];

export const radarAnomalies: AnomalyItem[] = [
  { id: "AR-990", source: "Claim #88210", confidence: 98, description: "Provider billing frequency matches known fraud ring pattern.", actionRequired: "Halt Payment & Investigate", timeDetected: "2 mins ago" },
  { id: "AR-991", source: "Policy #44A2", confidence: 85, description: "Multiple address changes within 30 days prior to filing large loss.", actionRequired: "Require Manual Review", timeDetected: "15 mins ago" },
  { id: "AR-992", source: "System Ingest", confidence: 92, description: "Unusual spike in claims originating from region X (Weather events excluded).", actionRequired: "Notify Regional Manager", timeDetected: "1 hr ago" },
];

export const pipelineStages: PipelineStage[] = [
  { name: "First Notice of Loss", count: 432, atRisk: 12, avgTime: "4 hrs" },
  { name: "Investigation", count: 189, atRisk: 45, avgTime: "6 days" },
  { name: "Evaluation", count: 104, atRisk: 8, avgTime: "2 days" },
  { name: "Settlement", count: 76, atRisk: 0, avgTime: "1 day" },
];

export const performanceMetrics: PerformanceMetric[] = [
  { kpi: "Claims Closed (Monthly)", score: 142, target: 120, status: "success" },
  { kpi: "Avg Handling Time", score: "3.2 days", target: "4.0 days", status: "success" },
  { kpi: "QA Pass Rate", score: "94%", target: "96%", status: "warning" },
  { kpi: "Customer Sat (CSAT)", score: 4.8, target: 4.5, status: "success" },
];
