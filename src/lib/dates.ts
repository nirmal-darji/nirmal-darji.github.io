const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

/** Accepts `YYYY` or `YYYY-MM`; returns undefined for the month when only the year is known. */
function parse(value: string): { year: number; month?: number } {
	const [year, month] = value.split('-').map(Number);
	return { year, month };
}

export function formatDate(value: string): string {
	const { year, month } = parse(value);
	return month ? monthYear.format(new Date(Date.UTC(year, month - 1, 1))) : String(year);
}

export function formatRange(start: string, end?: string): string {
	return `${formatDate(start)} – ${end ? formatDate(end) : 'Present'}`;
}

/** LinkedIn-style duration counting both the start and end month; undefined unless months are known. */
export function formatDuration(start: string, end?: string): string | undefined {
	const from = parse(start);
	const now = new Date();
	const to = end ? parse(end) : { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1 };
	if (!from.month || !to.month) {
		return undefined;
	}
	const totalMonths = (to.year - from.year) * 12 + (to.month - from.month) + 1;
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;
	const parts = [
		years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '',
		months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '',
	].filter(Boolean);
	return parts.join(' ');
}
