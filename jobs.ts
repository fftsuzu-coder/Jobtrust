import { supabase } from "./supabase";
import { DEMO_JOBS } from "./data";
import type { Job } from "./types";
import { scanText } from "./scam";
/** Live published jobs first (if Supabase is configured), then clearly-labelled demo data. */
export async function loadJobs(): Promise<Job[]> {
  if (!supabase) return DEMO_JOBS;
  const { data, error } = await supabase.from("jobs").select("*, employers(name, verification)").eq("status", "published").order("created_at", { ascending: false });
  if (error) throw error;
  const live: Job[] = (data ?? []).map((r: any) => ({ id: r.id, title: r.title, company: r.employers?.name ?? "Employer", verification: r.employers?.verification ?? "unverified", location: r.location, type: r.job_type, category: "General", expMin: r.experience_min, salaryMin: r.salary_min ?? undefined, salaryMax: r.salary_max ?? undefined, posted: r.created_at, description: r.description, requirements: [], applyUrl: r.apply_url ?? undefined, flags: scanText(`${r.title} ${r.description}`), demo: false }));
  return [...live, ...DEMO_JOBS];
}
