import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
      <div>
        {description && <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1">{description}</p>}
        <h1 className="font-display text-4xl font-bold tracking-tight text-on-surface">{title}</h1>
      </div>
      {action && <div className="flex items-center gap-3">{action}</div>}
    </div>
  );
}
