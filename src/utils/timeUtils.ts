export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

export const FESTIVAL_START_ISO = '2026-10-18T10:00:00+06:00';

export function calculateTimeRemaining(targetDateIso: string = FESTIVAL_START_ISO): TimeRemaining {
  const targetTime = new Date(targetDateIso).getTime();
  const now = new Date().getTime();
  const diff = targetTime - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPassed: false };
}

// Convert numbers to Bengali digits
export function toBengaliNumerals(num: number | string): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/\d/g, (digit) => bengaliDigits[parseInt(digit, 10)]);
}

// Generate Google Calendar Link
export function createGoogleCalendarUrl(
  title: string,
  details: string,
  location: string,
  startIso: string,
  durationHours: number = 3
): string {
  const startDate = new Date(startIso);
  const endDate = new Date(startDate.getTime() + durationHours * 60 * 60 * 1000);

  const formatCalDate = (d: Date) =>
    d.toISOString().replace(/-|:|\.\d+/g, '');

  const startStr = formatCalDate(startDate);
  const endStr = formatCalDate(endDate);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: details,
    location: location,
    dates: `${startStr}/${endStr}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Generate standard .ics file content
export function generateIcsFile(
  title: string,
  details: string,
  location: string,
  startIso: string,
  durationHours: number = 3
): string {
  const startDate = new Date(startIso);
  const endDate = new Date(startDate.getTime() + durationHours * 60 * 60 * 1000);
  
  const formatIcsDate = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mehendiganj Students Society//INNOVATE 26//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@innovate26.mss
DTSTAMP:${formatIcsDate(new Date())}
DTSTART:${formatIcsDate(startDate)}
DTEND:${formatIcsDate(endDate)}
SUMMARY:${title}
DESCRIPTION:${details.replace(/\n/g, '\\n')}
LOCATION:${location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
}

export function downloadIcs(
  title: string,
  details: string,
  location: string,
  startIso: string,
  filename: string
) {
  const icsData = generateIcsFile(title, details, location, startIso);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${filename}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
