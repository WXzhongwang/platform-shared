/** @platform/utils — 通用工具（骨架） */
export function formatDateTime(ts: number | Date): string {
  const d = ts instanceof Date ? ts : new Date(ts);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
