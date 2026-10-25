const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

function parseYearMonth(value: string): Date {
	const [year, month] = value.split('-').map(Number);
	return new Date(Date.UTC(year, month - 1, 1));
}

export function formatYearMonth(value: string): string {
	return monthYear.format(parseYearMonth(value));
}

export function formatRange(start: string, end?: string): string {
	return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : 'Present'}`;
}

/** LinkedIn-style duration, counting both the start and end month. */
export function formatDuration(start: string, end?: string): string {
	const from = parseYearMonth(start);
	const to = end ? parseYearMonth(end) : new Date();
	const totalMonths =
		(to.getUTCFullYear() - from.getUTCFullYear()) * 12 + (to.getUTCMonth() - from.getUTCMonth()) + 1;
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;
	const parts = [
		years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '',
		months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '',
	].filter(Boolean);
	return parts.join(' ');
}
