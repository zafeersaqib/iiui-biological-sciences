// Returns true only for links that have been filled in with real values.
// Links still containing template placeholders are hidden so visitors never
// land on error pages. Replace the placeholder in the content file and the
// link appears automatically.
export function isRealUrl(url?: string | null): boolean {
  if (!url) return false;
  return !/placeholder|XXXX|example\.com|\[TODO/i.test(url);
}
