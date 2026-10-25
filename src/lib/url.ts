/** Prefixes a site-relative path with the configured `base`, so links survive a move to a project-page URL. */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
