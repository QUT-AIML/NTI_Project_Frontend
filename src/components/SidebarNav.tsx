"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Activity, Inbox, ShieldAlert, GitMerge } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "My Work Queue", href: "/queue", icon: Inbox },
  { name: "Anomaly Radar", href: "/anomalies", icon: ShieldAlert },
  { name: "Pipeline & SLA", href: "/pipeline", icon: GitMerge },
  { name: "My Performance", href: "/performance", icon: Activity },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile nav toggle */}
      <div className="md:hidden flex items-center p-4 bg-surface-container-low border-b border-surface-container">
        <button onClick={() => setIsOpen(!isOpen)} className="text-on-surface">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="ml-4 font-display font-medium text-lg tracking-wide text-primary">NTI DASHBOARD</span>
      </div>

      {/* Sidebar */}
      <nav className={`
        ${isOpen ? "block" : "hidden"} 
        md:block
        w-full md:w-64 flex-shrink-0 bg-surface-container-low h-full flex flex-col
      `}>
        <div className="p-6 hidden md:block">
          <div className="font-display font-bold text-xl tracking-wide text-primary">THE SENTINEL</div>
          <div className="font-mono text-xs text-on-surface-variant mt-1 uppercase tracking-widest">NTI Protocol</div>
        </div>

        <div className="flex-1 mt-4 md:mt-0 flex flex-col gap-1 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-sans
                  transition-colors group
                  ${isActive ? "bg-surface-container text-on-surface" : "text-on-surface-variant hover:bg-surface-container/50 hover:text-on-surface"}
                `}
                onClick={() => setIsOpen(false)}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-3/5 bg-primary rounded-r-full" />
                )}
                <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-on-surface-variant group-hover:text-on-surface"}`} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
