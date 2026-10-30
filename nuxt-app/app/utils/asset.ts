/** Resolve a file in /public against the configured base URL (needed when hosted under a sub-path). */
export const asset = (path: string) => {
  const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
  return `${base}/${path.replace(/^\//, '')}`
}
