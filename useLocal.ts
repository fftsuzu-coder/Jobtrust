"use client";
import { useEffect, useState } from "react";
export function useLocal<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(initial); const [ready, setReady] = useState(false);
  useEffect(() => { try { const s = localStorage.getItem(key); if (s) setV(JSON.parse(s)); } catch {} setReady(true); }, [key]);
  const set = (n: T) => { setV(n); try { localStorage.setItem(key, JSON.stringify(n)); } catch {} };
  return [v, set, ready] as const;
}
