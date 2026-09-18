export interface FestivalEvent {
  id: string;
  title: string;
  time: string;
  accent: 'green' | 'orange' | 'red';
  iconType: 'quiz' | 'poster' | 'treasure' | 'gaming' | 'debate' | 'project';
  shortDesc: string;
  desc: string;
  benefitsTitle: string;
  benefits: string[];
  skill: string;
  rules?: string[];
  eligibility?: string;
}

export interface CampaignDay {
  id: string;
  dayNumber: number;
  date: string;
  title: string;
  status: 'completed' | 'upcoming';
  schools: {
    name: string;
    bengaliName: string;
    type: string;
  }[];
  description: string;
}

export interface FestivalGeneralInfo {
  school: string;
  dates: string;
  tagline: string;
  eventSlogan: string;
  organization: string;
  established: string;
  email: string;
  phone: string;
  facebookUrl: string;
  magazineInfo: string;
  logoUrl?: string;
  innovateLogoUrl?: string;
}

export type BanglaFontFamily =
  | 'Noto Sans Bengali'
  | 'Hind Siliguri'
  | 'Anek Bangla'
  | 'Galada'
  | 'Mina'
  | 'Tiro Bangla'
  | 'Noto Serif Bengali'
  | 'Outfit'
  | 'Plus Jakarta Sans';

export type ButtonColorTheme =
  | 'dynamic-category'
  | 'emerald-vivid'
  | 'royal-indigo'
  | 'sunset-orange'
  | 'rose-crimson'
  | 'cyber-cyan'
  | 'golden-amber';

export interface ButtonSettings {
  fontFamily: BanglaFontFamily;
  fontWeight: 'font-bold' | 'font-extrabold' | 'font-black' | 'font-semibold';
  colorTheme: ButtonColorTheme;
  borderRadius: 'rounded-xl' | 'rounded-2xl' | 'rounded-full' | 'rounded-lg';
  buttonActionText: string;
  enableGlow: boolean;
  dayButtonsStyle: 'vibrant-rainbow' | 'emerald-modern' | 'category-tinted';
}

export interface DayScheduleItem {
  time: string;
  title: string;
  desc: string;
  eventId: string;
  badge: string;
}

export interface FestivalDayConfig {
  dayNumber: number;
  dayTitle: string;
  dateNum: string;
  month: string;
  dayOfWeek: string;
  tag: string;
  schedule: DayScheduleItem[];
}

export interface FestivalData {
  general: FestivalGeneralInfo;
  campaignDays: CampaignDay[];
  events: FestivalEvent[];
  buttonSettings: ButtonSettings;
  daysSchedule: FestivalDayConfig[];
}

export const DEFAULT_BUTTON_SETTINGS: ButtonSettings = {
  fontFamily: 'Noto Sans Bengali',
  fontWeight: 'font-extrabold',
  colorTheme: 'dynamic-category',
  borderRadius: 'rounded-xl',
  buttonActionText: 'নিয়মাবলী ও বিবরণ',
  enableGlow: true,
  dayButtonsStyle: 'vibrant-rainbow',
};

export const DEFAULT_DAYS_SCHEDULE: FestivalDayConfig[] = [
  {
    dayNumber: 1,
    dayTitle: '১ম দিন',
    dateNum: '১৮',
    month: 'অক্টোবর',
    dayOfWeek: 'রবিবার',
    tag: 'কুইজ ও পোস্টার',
    schedule: [
      {
        time: 'সকাল ১০:০০ টা',
        title: 'কুইজ ও অলিম্পিয়াড (Quiz & Olympiad)',
        desc: 'জ্ঞান, সাধারণ জ্ঞান, যুক্তিবোধ ও দ্রুত চিন্তা করার অলিম্পিয়াড লড়াই।',
        eventId: 'quiz',
        badge: 'একাডেমিক রাউন্ড',
      },
      {
        time: 'দুপুর ০৩:০০ টা',
        title: 'পোস্টার প্রেজেন্টেশন (Poster Presentation)',
        desc: 'গবেষণা, সৃজনশীল আইডিয়া তৈরি এবং বিচারকদের সামনে উপস্থাপন।',
        eventId: 'poster',
        badge: 'রিসার্চ ও ডিজাইন',
      },
    ],
  },
  {
    dayNumber: 2,
    dayTitle: '২য় দিন',
    dateNum: '১৯',
    month: 'অক্টোবর',
    dayOfWeek: 'সোমবার',
    tag: 'ট্রেজার ও দাবা',
    schedule: [
      {
        time: 'সকাল ১০:০০ টা',
        title: 'ট্রেজার হান্ট (Treasure Hunt)',
        desc: 'ক্লু বিশ্লেষণ, টিমওয়ার্ক ও কৌশলভিত্তিক অ্যাডভেঞ্চার হান্ট।',
        eventId: 'treasure',
        badge: 'টিমওয়ার্ক ও স্ট্র্যাটেজি',
      },
      {
        time: 'দুপুর ০৩:০০ টা',
        title: 'গেমিং সেগমেন্ট: দাবা (Chess Tournament)',
        desc: 'বুদ্ধি ও রণকৌশলের লড়াই — দাবা প্রতিযোগিতার উদ্বোধনী ও নকআউট পর্ব।',
        eventId: 'gaming',
        badge: 'মাইন্ড স্পোর্টস',
      },
    ],
  },
  {
    dayNumber: 3,
    dayTitle: '৩য় দিন',
    dateNum: '২০',
    month: 'অক্টোবর',
    dayOfWeek: 'মঙ্গলবার',
    tag: 'বিতর্ক ও কিউব',
    schedule: [
      {
        time: 'সকাল ১০:০০ টা',
        title: 'বিতর্ক প্রতিযোগিতা (Debate Competition)',
        desc: 'যুক্তি ও তথ্য দিয়ে মতামত প্রকাশ এবং বাচনভঙ্গির উন্মুক্ত যুদ্ধ।',
        eventId: 'debate',
        badge: 'যুক্তি ও বাচনভঙ্গি',
      },
      {
        time: 'দুপুর ০৩:০০ টা',
        title: 'গেমিং সেগমেন্ট: রুবিক্স কিউব (Cube Speed)',
        desc: 'রুবিক্স কিউব দ্রুততম সময়ে মেলানোর স্পিড ও মানসিক একাগ্রতা।',
        eventId: 'gaming',
        badge: 'স্পিড সলভিং',
      },
    ],
  },
  {
    dayNumber: 4,
    dayTitle: '৪র্থ দিন',
    dateNum: '২১',
    month: 'অক্টোবর',
    dayOfWeek: 'বুধবার',
    tag: 'প্রস্তুতি ও সেমিনার',
    schedule: [
      {
        time: 'সকাল ১০:৩০ টা',
        title: 'বিজ্ঞান প্রজেক্ট প্রস্তুতি ও মেন্টরিং সেশন',
        desc: 'অংশগ্রহণকারী দলগুলোর স্টল সেটআপ, মেন্টরিং ও মডেল যাচাইকরণ।',
        eventId: 'project',
        badge: 'উদ্ভাবনী ল্যাব',
      },
      {
        time: 'দুপুর ০৩:০০ টা',
        title: 'উদ্ভাবন ও ক্যারিয়ার সচেতনতামূলক সেশন',
        desc: 'উচ্চশিক্ষা, ক্যারিয়ার গাইডেন্স ও মেধা বিকাশের বিশেষ আলোচনা।',
        eventId: 'quiz',
        badge: 'বিশেষ দিকনির্দেশনা',
      },
    ],
  },
  {
    dayNumber: 5,
    dayTitle: '৫ম দিন',
    dateNum: '২২',
    month: 'অক্টোবর',
    dayOfWeek: 'বৃহস্পতিবার',
    tag: 'গ্র্যান্ড ফিনালে',
    schedule: [
      {
        time: 'দুপুর ০২:০০ টা',
        title: 'প্রজেক্ট শো ও বিজ্ঞান প্রদর্শনী (Project Show)',
        desc: 'শিক্ষার্থীদের তৈরি রোবটিক্স, বিজ্ঞান ও উদ্ভাবনী মডেল সরাসরি প্রদর্শন।',
        eventId: 'project',
        badge: 'রোবটিক্স ও ইনোভেশন',
      },
      {
        time: 'বিকেল ০৪:৩০ টা',
        title: 'গ্র্যান্ড ফিনালে ও পুরস্কার বিতরণী',
        desc: 'সকল প্রতিযোগিতার বিজয়ীদের মাঝে ক্রেস্ট, ট্রফি ও সনদ বিতরণ।',
        eventId: 'project',
        badge: 'পুরস্কার ও সম্মাননা',
      },
    ],
  },
];

export const DEFAULT_FESTIVAL_DATA: FestivalData = {
  general: {
    school: 'GOVT. PATARHAT MUSLIM MODEL HIGH SCHOOL',
    dates: '18–22 OCTOBER, 2026',
    tagline: 'Striving for Excellence, Shaping the Era',
    eventSlogan: 'PROVE YOUR KNOWLEDGE',
    organization: "Mehendiganj Students' Society",
    established: '2022',
    email: 'mss.official.bd@gmail.com',
    phone: '01731537457',
    facebookUrl: 'https://www.facebook.com/MehendiganjStudentsSociety',
    magazineInfo: 'MSS Magazine 2026 — মেহেন্দীগঞ্জের ছাত্রসমাজের জ্ঞান ও সাহিত্য সংকলন।',
    logoUrl: '/img_2_1789590956296.jpg',
    innovateLogoUrl: '/IMG_20260917_023628.jpg',
  },
  campaignDays: [
    {
      id: 'day-1',
      dayNumber: 1,
      date: '15 September 2026',
      title: 'ক্যাম্পেইন ডে ০১ — ৩টি বিদ্যাপীঠে সফর',
      status: 'completed',
      schools: [
        {
          name: 'Govt. Patarhat Muslim Model High School',
          bengaliName: 'সরকারি পাতারহাট মুসলিম মডেল উচ্চ বিদ্যালয়',
          type: 'প্রধান উৎসব ভেন্যু ও মাধ্যমিক বিদ্যালয়'
        },
        {
          name: 'Patarhat Jubilee Institute',
          bengaliName: 'পাতারহাট জুবিলী ইনস্টিটিউশন',
          type: 'ঐতিহ্যবাহী মাধ্যমিক বিদ্যাপীঠ'
        },
        {
          name: 'Patarhat Islamia Fazil Madrasha',
          bengaliName: 'পাতারহাট ইসলামিয়া ফাজিল মাদ্রাসা',
          type: 'ফাজিল মাদ্রাসা শিক্ষাঙ্গন'
        }
      ],
      description: 'আলহামদুলিল্লাহ! প্রথম দিনের ক্যাম্পেইন প্রোগ্রামে শিক্ষক ও শিক্ষার্থীদের আন্তরিক অংশগ্রহণে দারুণ সাড়া পাওয়া গেছে। প্রতিটি ক্লাসে ইনোভেট ২৬-এর ইভেন্টগুলো শিক্ষার্থীদের কাছে বিস্তারিত উপস্থাপন করা হয়।'
    },
    {
      id: 'day-2',
      dayNumber: 2,
      date: '16 September 2026',
      title: 'ক্যাম্পেইন ডে ০২ — নারী শিক্ষাঙ্গন সফর',
      status: 'completed',
      schools: [
        {
          name: 'Patarhat Girls Secondary School',
          bengaliName: 'পাতারহাট বালিকা মাধ্যমিক বিদ্যালয়',
          type: 'বালিকা মাধ্যমিক বিদ্যালয়'
        },
        {
          name: 'Mehendiganj Adarsha Girls Secondary School',
          bengaliName: 'মেহেন্দীগঞ্জ আদর্শ বালিকা মাধ্যমিক বিদ্যালয়',
          type: 'আদর্শ বালিকা বিদ্যালয়'
        },
        {
          name: 'Mehendiganj Mohila College',
          bengaliName: 'মেহেন্দীগঞ্জ মহিলা কলেজ',
          type: 'উচ্চ মাধ্যমিক ও স্নাতক কলেজ'
        }
      ],
      description: 'দ্বিতীয় দিনের ক্যাম্পেইনে ছাত্রীদের ব্যাপক উৎসাহ-উদ্দীপনা দেখা যায়। পোস্টার প্রেজেন্টেশন, প্রজেক্ট শো এবং কুইজ অলিম্পিয়াডে অংশগ্রহণের জন্য শিক্ষার্থীরা স্বতঃস্ফূর্ত আগ্রহ প্রকাশ করে।'
    }
  ],
  events: [
    {
      id: 'quiz',
      title: 'QUIZ & OLYMPIAD',
      time: '18 Oct.(10:00AM)',
      accent: 'green',
      iconType: 'quiz',
      shortDesc: 'জ্ঞান, যুক্তিবোধ ও দ্রুত চিন্তা করার অলিম্পিয়াড প্রতিযোগিতা',
      desc: 'এটা শিক্ষার্থীদের জ্ঞান, যুক্তিবোধ ও দ্রুত চিন্তা করার ক্ষমতা বাড়াতে সাহায্য করে।',
      benefitsTitle: 'Students-এর benefits:',
      benefits: [
        'সাধারণ জ্ঞান ও একাডেমিক জ্ঞান বৃদ্ধি',
        'দ্রুত প্রশ্ন বুঝে উত্তর দেওয়ার অভ্যাস',
        'Logical thinking ও problem solving উন্নত হয়',
        'Competitive environment-এর সঙ্গে পরিচিতি তৈরি হয়',
        'বিভিন্ন বিষয় সম্পর্কে curiosity বাড়ে',
        'Academic পড়াশোনার বাইরেও শেখার আগ্রহ তৈরি হয়',
      ],
      skill: 'Knowledge, Logic, Quick Thinking, Problem Solving',
    },
    {
      id: 'poster',
      title: 'POSTER PRESENTATION',
      time: '18 Oct.( 03:00PM)',
      accent: 'orange',
      iconType: 'poster',
      shortDesc: 'গবেষণা, সৃজনশীল ডিজাইন ও উপস্থাপন দক্ষতা প্রদর্শনী',
      desc: 'এখানে শিক্ষার্থীরা কোনো বিষয়কে গবেষণা করে, সাজিয়ে এবং অন্যদের সামনে উপস্থাপন করতে শেখে।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Research করার প্রাথমিক দক্ষতা তৈরি হয়',
        'তথ্যকে সংক্ষেপে ও সুন্দরভাবে উপস্থাপন করা শেখে',
        'Creativity ও visual communication বাড়ে',
        'Public speaking-এর ভয় কমে',
        'নিজের idea অন্যদের বোঝানোর দক্ষতা তৈরি হয়',
        'Presentation skill উন্নত হয়',
      ],
      skill: 'Research, Creativity, Presentation, Communication',
    },
    {
      id: 'treasure',
      title: 'TREASURE HUNT',
      time: '19 Oct.(10:00AM)',
      accent: 'red',
      iconType: 'treasure',
      shortDesc: 'ক্লু সমাধান, টিমওয়ার্ক ও কৌশলভিত্তিক অ্যাডভেঞ্চার হান্ট',
      desc: 'এটা মূলত fun-এর মাধ্যমে teamwork, strategy এবং problem solving শেখানোর একটা দারুণ মাধ্যম।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Teamwork ও collaboration বাড়ে',
        'Clue analyse করে solution বের করার অভ্যাস হয়',
        'Leadership skill develop হয়',
        'সময়ের মধ্যে সিদ্ধান্ত নেওয়ার ক্ষমতা বাড়ে',
        'Creativity ও logical thinking একসঙ্গে ব্যবহার করতে শেখে',
        'অন্যদের সঙ্গে কাজ করার অভিজ্ঞতা হয়',
      ],
      skill: 'Teamwork, Leadership, Strategy, Problem Solving',
    },
    {
      id: 'gaming',
      title: 'GAMING (Chess & Cube)',
      time: 'Chess: 19 Oct.(03:00PM) | Cube: 20 Oct.(03:00PM)',
      accent: 'green',
      iconType: 'gaming',
      shortDesc: 'দাবা, রুবিক্স কিউব ও ই-স্পোর্টসের স্ট্র্যাটেজি যুদ্ধ',
      desc: 'Gaming segment-কে শুধু entertainment হিসেবে না দেখে strategy, decision-making এবং teamwork-এর একটি learning platform হিসেবে রাখা যায়।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'তাৎক্ষণিক সিদ্ধান্ত গ্রহণ ও গভীর স্ট্র্যাটেজি গঠন',
        'মানসিক একাগ্রতা ও প্যাটার্ন রিকগনিশন উন্নত হয়',
        'প্রতিযোগিতামূলক স্পোর্টসম্যানশিপ বৃদ্ধি পায়',
        'ধৈর্য্য ও চাপ সামলানোর ক্ষমতা বৃদ্ধি',
      ],
      skill: 'Strategy, Decision-making, Teamwork, Mental Agility',
    },
    {
      id: 'debate',
      title: 'DEBATE',
      time: '20 Oct. (10:00AM)',
      accent: 'orange',
      iconType: 'debate',
      shortDesc: 'যুক্তি ও তথ্যভিত্তিক বিতর্ক ও বাকপটুতাপূর্ণ লড়াই',
      desc: 'Debate শিক্ষার্থীদের নিজের মতামত যুক্তি দিয়ে প্রকাশ এবং অন্যের মতামতকে সম্মানের সঙ্গে বিশ্লেষণ করতে শেখায়।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Critical thinking বৃদ্ধি পায়',
        'যুক্তি দিয়ে কথা বলার অভ্যাস তৈরি হয়',
        'Public speaking skill উন্নত হয়',
        'Confidence বাড়ে',
        'কোনো বিষয়ে একাধিক perspective থেকে চিন্তা করতে শেখে',
        'Listening ও response করার দক্ষতা তৈরি হয়',
      ],
      skill: 'Critical Thinking, Argumentation, Public Speaking, Confidence',
    },
    {
      id: 'project',
      title: 'PROJECT SHOW',
      time: '22 Oct. (02:00PM)',
      accent: 'red',
      iconType: 'project',
      shortDesc: 'বিজ্ঞান, রোবটিক্স ও উদ্ভাবনী আইডিয়ার বাস্তব মডেল প্রদর্শনী',
      desc: 'এটা শিক্ষার্থীদের শুধু বইয়ে শেখা concept বাস্তবভাবে প্রয়োগ করার সুযোগ দেয়।',
      benefitsTitle: 'Benefits:',
      benefits: [
        'Scientific thinking develop হয়',
        'Problem identify করে solution তৈরি করতে শেখে',
        'Practical knowledge বাড়ে',
        'Experiment ও observation-এর অভ্যাস তৈরি হয়',
        'Innovation ও creativity উৎসাহিত হয়',
        'নিজের project অন্যদের সামনে explain করার confidence বাড়ে',
      ],
      skill: 'Innovation, Scientific Thinking, Research, Practical Learning',
    },
  ],
  buttonSettings: DEFAULT_BUTTON_SETTINGS,
  daysSchedule: DEFAULT_DAYS_SCHEDULE,
};

const STORAGE_KEY = 'innovate26_festival_data_v3';

export function getStoredFestivalData(): FestivalData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.events && parsed.general) {
        return {
          general: { ...DEFAULT_FESTIVAL_DATA.general, ...parsed.general },
          campaignDays: parsed.campaignDays || DEFAULT_FESTIVAL_DATA.campaignDays,
          events: parsed.events || DEFAULT_FESTIVAL_DATA.events,
          buttonSettings: parsed.buttonSettings ? { ...DEFAULT_BUTTON_SETTINGS, ...parsed.buttonSettings } : DEFAULT_BUTTON_SETTINGS,
          daysSchedule: parsed.daysSchedule || DEFAULT_DAYS_SCHEDULE,
        };
      }
    }
  } catch (e) {
    console.error('Error reading stored festival data:', e);
  }
  return DEFAULT_FESTIVAL_DATA;
}

export function saveStoredFestivalData(data: FestivalData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving festival data:', e);
  }
}

export function resetStoredFestivalData(): FestivalData {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Error resetting festival data:', e);
  }
  return DEFAULT_FESTIVAL_DATA;
}
