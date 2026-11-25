export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

/** Value for <input type="datetime-local"> in local time. */
export function toLocalInputValue(d: Date): string {
  const off = d.getTimezoneOffset() * 60_000;
  return new Date(d.getTime() - off).toISOString().slice(0, 16);
}

export const initials = (name?: string | null): string => {
  if (!name || typeof name !== "string") {
    return "U";
  }

  const trimmedName = name.trim();

  if (!trimmedName) {
    return "U";
  }

  return trimmedName
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
};
