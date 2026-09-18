export type Language = 'bn' | 'en';

export type EventCategory = 'academic' | 'presentation' | 'strategy' | 'gaming' | 'debate' | 'innovation';

export interface EventItem {
  id: string;
  dayNumber: number; // 1, 2, 3, 4
  dayLabel: {
    en: string;
    bn: string;
  };
  dateFormatted: {
    en: string;
    bn: string;
  };
  isoDate: string; // for calendar export
  startTime: {
    en: string;
    bn: string;
  };
  endTime?: {
    en: string;
    bn: string;
  };
  title: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  coreSkills: {
    en: string[];
    bn: string[];
  };
  category: EventCategory;
  categoryLabel: {
    en: string;
    bn: string;
  };
  venueInsideSchool: {
    en: string;
    bn: string;
  };
  teamFormat: {
    en: string;
    bn: string;
  };
  targetAudience: {
    en: string;
    bn: string;
  };
  highlights: {
    en: string[];
    bn: string[];
  };
  rules: {
    en: string[];
    bn: string[];
  };
  iconName: string;
  accentColor: string;
}

export interface DayInfo {
  dayNumber: number;
  dateStr: {
    en: string;
    bn: string;
  };
  dayOfWeek: {
    en: string;
    bn: string;
  };
  theme: {
    en: string;
    bn: string;
  };
  isBreakDay?: boolean;
}
