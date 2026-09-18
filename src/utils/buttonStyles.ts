import { BanglaFontFamily, ButtonColorTheme, ButtonSettings } from '../data/flyerStorage';

/**
 * Returns Tailwind font family class based on user selected font
 */
export function getFontFamilyClass(font: BanglaFontFamily): string {
  switch (font) {
    case 'Hind Siliguri':
      return "font-['Hind_Siliguri',sans-serif]";
    case 'Noto Sans Bengali':
      return "font-['Noto_Sans_Bengali',sans-serif]";
    case 'Anek Bangla':
      return "font-['Anek_Bangla',sans-serif]";
    case 'Galada':
      return "font-['Galada',cursive]";
    case 'Mina':
      return "font-['Mina',sans-serif]";
    case 'Tiro Bangla':
      return "font-['Tiro_Bangla',serif]";
    case 'Noto Serif Bengali':
      return "font-['Noto_Serif_Bengali',serif]";
    case 'Outfit':
      return "font-['Outfit',sans-serif]";
    case 'Plus Jakarta Sans':
      return "font-['Plus_Jakarta_Sans',sans-serif]";
    default:
      return "font-['Noto_Sans_Bengali',sans-serif]";
  }
}

/**
 * Returns colorful gradient classes for action buttons (e.g., 'নিয়মাবলী ও বিবরণ')
 */
export function getActionButtonClasses(
  settings?: ButtonSettings,
  eventId?: string
): string {
  const fontClass = getFontFamilyClass(settings?.fontFamily || 'Noto Sans Bengali');
  const weightClass = settings?.fontWeight || 'font-extrabold';
  const roundedClass = settings?.borderRadius || 'rounded-xl';
  const glow = settings?.enableGlow !== false;
  const theme = settings?.colorTheme || 'dynamic-category';

  let colorClasses = '';

  if (theme === 'dynamic-category') {
    switch (eventId) {
      case 'quiz':
        colorClasses =
          'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white ' +
          (glow ? 'shadow-md shadow-emerald-600/30' : 'shadow-xs');
        break;
      case 'poster':
        colorClasses =
          'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white ' +
          (glow ? 'shadow-md shadow-orange-600/30' : 'shadow-xs');
        break;
      case 'treasure':
        colorClasses =
          'bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white ' +
          (glow ? 'shadow-md shadow-rose-600/30' : 'shadow-xs');
        break;
      case 'gaming':
        colorClasses =
          'bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 hover:from-purple-500 hover:to-indigo-500 text-white ' +
          (glow ? 'shadow-md shadow-purple-600/30' : 'shadow-xs');
        break;
      case 'debate':
        colorClasses =
          'bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:to-sky-500 text-white ' +
          (glow ? 'shadow-md shadow-blue-600/30' : 'shadow-xs');
        break;
      case 'project':
        colorClasses =
          'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-500 hover:to-amber-500 text-white ' +
          (glow ? 'shadow-md shadow-orange-600/30' : 'shadow-xs');
        break;
      default:
        colorClasses =
          'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white ' +
          (glow ? 'shadow-md shadow-emerald-600/30' : 'shadow-xs');
        break;
    }
  } else if (theme === 'emerald-vivid') {
    colorClasses =
      'bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:to-teal-500 text-white ' +
      (glow ? 'shadow-md shadow-emerald-600/30' : 'shadow-xs');
  } else if (theme === 'royal-indigo') {
    colorClasses =
      'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 hover:from-indigo-500 hover:to-violet-600 text-white ' +
      (glow ? 'shadow-md shadow-indigo-600/30' : 'shadow-xs');
  } else if (theme === 'sunset-orange') {
    colorClasses =
      'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-orange-400 text-white ' +
      (glow ? 'shadow-md shadow-orange-600/30' : 'shadow-xs');
  } else if (theme === 'rose-crimson') {
    colorClasses =
      'bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-500 hover:to-pink-500 text-white ' +
      (glow ? 'shadow-md shadow-rose-600/30' : 'shadow-xs');
  } else if (theme === 'cyber-cyan') {
    colorClasses =
      'bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 hover:from-cyan-500 hover:to-teal-500 text-white ' +
      (glow ? 'shadow-md shadow-cyan-600/30' : 'shadow-xs');
  } else if (theme === 'golden-amber') {
    colorClasses =
      'bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-500 hover:to-yellow-500 text-white ' +
      (glow ? 'shadow-md shadow-amber-600/30' : 'shadow-xs');
  }

  return `${colorClasses} ${fontClass} ${weightClass} ${roundedClass} border border-white/20`;
}

/**
 * Returns vibrant day selector styles for each day number
 */
export function getDaySelectorClasses(
  dayNumber: number,
  isSelected: boolean,
  style: ButtonSettings['dayButtonsStyle'] = 'vibrant-rainbow'
): {
  container: string;
  dayTitle: string;
  dateNum: string;
  month: string;
  indicator: string;
} {
  if (!isSelected) {
    return {
      container:
        'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 text-slate-700 shadow-2xs',
      dayTitle: 'text-slate-500',
      dateNum: 'text-slate-800',
      month: 'text-slate-400',
      indicator: '',
    };
  }

  // Selected vibrant styles per day
  switch (dayNumber) {
    case 1: // Day 1 - Emerald
      return {
        container:
          'bg-gradient-to-b from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-700/25 border-emerald-500 ring-2 ring-emerald-400/40 -translate-y-1',
        dayTitle: 'text-emerald-100',
        dateNum: 'text-white',
        month: 'text-emerald-100 font-bold',
        indicator: 'bg-emerald-400 ring-white',
      };
    case 2: // Day 2 - Rose
      return {
        container:
          'bg-gradient-to-b from-rose-600 to-pink-700 text-white shadow-lg shadow-rose-700/25 border-rose-500 ring-2 ring-rose-400/40 -translate-y-1',
        dayTitle: 'text-rose-100',
        dateNum: 'text-white',
        month: 'text-rose-100 font-bold',
        indicator: 'bg-rose-400 ring-white',
      };
    case 3: // Day 3 - Indigo/Purple
      return {
        container:
          'bg-gradient-to-b from-indigo-600 to-purple-700 text-white shadow-lg shadow-indigo-700/25 border-indigo-500 ring-2 ring-indigo-400/40 -translate-y-1',
        dayTitle: 'text-indigo-100',
        dateNum: 'text-white',
        month: 'text-indigo-100 font-bold',
        indicator: 'bg-indigo-400 ring-white',
      };
    case 4: // Day 4 - Amber/Orange
      return {
        container:
          'bg-gradient-to-b from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-700/25 border-amber-400 ring-2 ring-amber-300/40 -translate-y-1',
        dayTitle: 'text-amber-100',
        dateNum: 'text-white',
        month: 'text-amber-100 font-bold',
        indicator: 'bg-amber-300 ring-white',
      };
    case 5: // Day 5 - Blue/Cyan Grand Finale
      return {
        container:
          'bg-gradient-to-b from-blue-600 to-cyan-700 text-white shadow-lg shadow-blue-700/25 border-blue-500 ring-2 ring-cyan-300/40 -translate-y-1',
        dayTitle: 'text-cyan-100',
        dateNum: 'text-white',
        month: 'text-cyan-100 font-bold',
        indicator: 'bg-cyan-300 ring-white',
      };
    default:
      return {
        container:
          'bg-gradient-to-b from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-700/25 border-emerald-500 ring-2 ring-emerald-400/40 -translate-y-1',
        dayTitle: 'text-emerald-100',
        dateNum: 'text-white',
        month: 'text-emerald-100 font-bold',
        indicator: 'bg-emerald-400 ring-white',
      };
  }
}
