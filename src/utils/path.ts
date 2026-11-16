export function cleanPath(pathname: string): string {
	return pathname.replace(/(\/index)?\.html$/, '').replace(/\/$/, '') || '/';
}
