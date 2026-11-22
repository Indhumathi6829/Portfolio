export function isHttpUrl(value?: string): boolean {
  return typeof value === 'string' && /^https?:\/\//i.test(value.trim());
}

export function safeExternalUrl(value?: string): string | undefined {
  return isHttpUrl(value) ? value?.trim() : undefined;
}
