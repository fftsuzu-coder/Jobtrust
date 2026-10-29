import type { Job } from "./types";
// DEMO DATA ONLY. Companies are fictional; nothing here is a real vacancy or a verified employer.
const d = (id: string, title: string, company: string, location: string, type: Job["type"], category: string, expMin: number, salaryMin: number | undefined, salaryMax: number | undefined, flags: string[] = []): Job => ({
  id, title, company, location, type, category, expMin, salaryMin, salaryMax, flags, demo: true, verification: "demo", posted: "Sample",
  description: `This is a sample listing for the ${title} role at the fictional company ${company}. It shows how a real listing would look on JobTrust.`,
  requirements: ["Final-year student or recent graduate", "Strong communication skills", "Willingness to learn on the job"] });
export const DEMO_JOBS: Job[] = [
  d("demo-1", "Junior Frontend Developer", "Example Labs (demo)", "Bengaluru", "Full-time", "Software", 0, 400000, 700000),
  d("demo-2", "Data Analyst Intern", "Sample Analytics (demo)", "Remote", "Internship", "Data", 0, 120000, 240000),
  d("demo-3", "Product Design Associate", "Placeholder Studio (demo)", "Mumbai", "Full-time", "Design", 1, 500000, 800000),
  d("demo-4", "Content Writer", "Mock Media (demo)", "Delhi", "Part-time", "Marketing", 0, 180000, 300000),
  d("demo-5", "Customer Support Executive", "Sandbox Services (demo)", "Pune", "Full-time", "Operations", 0, 220000, 320000),
  d("demo-6", "Software Engineer Intern", "Test Systems (demo)", "Hyderabad", "Internship", "Software", 0, 180000, 360000),
  d("demo-7", "Work From Home Typist – Pay ₹500 to Register", "Too Good Ltd (demo scam example)", "Remote", "Remote", "Operations", 0, 1200000, 2400000, ["Asks for a registration fee", "Unrealistic salary for the role", "Contact only via messaging app"]),
];
export const CATEGORIES = ["Software", "Data", "Design", "Marketing", "Operations"];
export const LOCATIONS = ["Bengaluru", "Delhi", "Mumbai", "Pune", "Hyderabad", "Remote"];
