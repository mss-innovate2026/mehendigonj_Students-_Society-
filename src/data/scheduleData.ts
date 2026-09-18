import { EventItem, DayInfo } from '../types';

export const DAYS_INFO: DayInfo[] = [
  {
    dayNumber: 1,
    dateStr: {
      en: '18 October, 2026',
      bn: '১৮ অক্টোবর, ২০২৬'
    },
    dayOfWeek: {
      en: 'Sunday',
      bn: 'রবিবার'
    },
    theme: {
      en: 'Intellect & Presentation',
      bn: 'বুদ্ধিবৃত্তি ও উপস্থাপনা'
    }
  },
  {
    dayNumber: 2,
    dateStr: {
      en: '19 October, 2026',
      bn: '১৯ অক্টোবর, ২০২৬'
    },
    dayOfWeek: {
      en: 'Monday',
      bn: 'সোমবার'
    },
    theme: {
      en: 'Strategy & Teamwork',
      bn: 'কৌশল ও দলগত সমন্বয়'
    }
  },
  {
    dayNumber: 3,
    dateStr: {
      en: '20 October, 2026',
      bn: '২০ অক্টোবর, ২০২৬'
    },
    dayOfWeek: {
      en: 'Tuesday',
      bn: 'মঙ্গলবার'
    },
    theme: {
      en: 'Argumentation & Mind Sports',
      bn: 'বিতর্ক ও গতিশীল মস্তিষ্ক'
    }
  },
  {
    dayNumber: 0, // Special break day indicator
    dateStr: {
      en: '21 October, 2026',
      bn: '২১ অক্টোবর, ২০২৬'
    },
    dayOfWeek: {
      en: 'Wednesday',
      bn: 'বুধবার'
    },
    theme: {
      en: 'Preparation & Project Setup Break',
      bn: 'প্রস্তুতি ও প্রজেক্ট সেটআপ বিরতি'
    },
    isBreakDay: true
  },
  {
    dayNumber: 4,
    dateStr: {
      en: '22 October, 2026',
      bn: '২২ অক্টোবর, ২০২৬'
    },
    dayOfWeek: {
      en: 'Thursday',
      bn: 'বৃহস্পতিবার'
    },
    theme: {
      en: 'Innovation & Grand Finale',
      bn: 'উদ্ভাবন ও সমাপনী মহোৎসব'
    }
  }
];

export const EVENTS_DATA: EventItem[] = [
  // DAY 1
  {
    id: 'quiz-olympiad',
    dayNumber: 1,
    dayLabel: {
      en: 'Day 1',
      bn: '১ম দিন'
    },
    dateFormatted: {
      en: '18 October, 2026',
      bn: '১৮ অক্টোবর, ২০২৬'
    },
    isoDate: '2026-10-18T10:00:00+06:00',
    startTime: {
      en: '10:00 AM',
      bn: 'সকাল ১০:০০'
    },
    endTime: {
      en: '01:00 PM',
      bn: 'দুপুর ০১:০০'
    },
    title: {
      en: 'Quiz & Olympiad',
      bn: 'কুইজ ও অলিম্পিয়াড'
    },
    subtitle: {
      en: 'Test of general knowledge, science, mathematics and analytical acumen',
      bn: 'সাধারণ জ্ঞান, বিজ্ঞান, গণিত ও দ্রুত চিন্তাশক্তির জমজমাট পরীক্ষা'
    },
    description: {
      en: 'A battle of wits designed to expand knowledge, logical reasoning, and rapid thinking. Participants will solve rigorous Olympiad problems and dynamic quiz rounds.',
      bn: 'জ্ঞান, যুক্তিবোধ ও দ্রুত চিন্তা করার ক্ষমতা বাড়ানোর প্রতিযোগিতা। সাধারণ জ্ঞান, গণিত ও বিজ্ঞানভিত্তিক বহুনির্বাচনী ও রচনামূলক রাউন্ড অনুষ্ঠিত হবে।'
    },
    coreSkills: {
      en: ['Knowledge', 'Logic', 'Quick Thinking', 'Problem Solving'],
      bn: ['জ্ঞান (Knowledge)', 'যুক্তি (Logic)', 'দ্রুত চিন্তা (Quick Thinking)', 'সমস্যা সমাধান (Problem Solving)']
    },
    category: 'academic',
    categoryLabel: {
      en: 'Academic & Logic',
      bn: 'একাডেমিক ও যুক্তিবোধ'
    },
    venueInsideSchool: {
      en: 'Main Academic Hall (Room 101-104)',
      bn: 'প্রধান একাডেমিক ভবন (কক্ষ ১০১-১০৪)'
    },
    teamFormat: {
      en: 'Individual & Pair Categories (Junior & Senior)',
      bn: 'একক ও দ্বৈত ক্যাটাগরি (জুনিয়র ও সিনিয়র)'
    },
    targetAudience: {
      en: 'Class 6 - 12 Students & College Level',
      bn: '৬ষ্ঠ - দ্বাদশ শ্রেণি এবং কলেজ শিক্ষার্থী'
    },
    highlights: {
      en: [
        'Rapid buzzer rounds for the top finalists',
        'Balanced questions spanning Science, Bangladesh Affairs & World History',
        'Special certificate & recognition for top 10 scorers'
      ],
      bn: [
        'ফাইনালিস্টদের জন্য রোমাঞ্চকর র‍্যাপিড বাজার রাউন্ড',
        'বিজ্ঞান, বাংলাদেশ বিষয়াবলি ও আন্তর্জাতিক জ্ঞানের সমন্বিত প্রশ্নপত্র',
        'শীর্ষ ১০ প্রতিযোগীর জন্য বিশেষ সনদ ও মেডেল'
      ]
    },
    rules: {
      en: [
        'Participants must report by 09:30 AM with their student identity cards.',
        'Calculators and electronic devices are strictly prohibited during written tests.',
        'Judges and quiz master decisions will be final.'
      ],
      bn: [
        'সকাল ০৯:৩০ এর মধ্যে রেজিস্ট্রেশন কার্ডসহ নির্ধারিত কেন্দ্রে উপস্থিত হতে হবে।',
        'লিখিত পরীক্ষায় ক্যালকুলেটর বা যেকোনো ইলেকট্রনিক ডিভাইস ব্যবহার নিষিদ্ধ।',
        'বিচারক ও কুইজ মাস্টারের সিদ্ধান্তই চূড়ান্ত বলে গণ্য হবে।'
      ]
    },
    iconName: 'BrainCircuit',
    accentColor: 'blue'
  },
  {
    id: 'poster-presentation',
    dayNumber: 1,
    dayLabel: {
      en: 'Day 1',
      bn: '১ম দিন'
    },
    dateFormatted: {
      en: '18 October, 2026',
      bn: '১৮ অক্টোবর, ২০২৬'
    },
    isoDate: '2026-10-18T15:00:00+06:00',
    startTime: {
      en: '03:00 PM',
      bn: 'বিকাল ০৩:০০'
    },
    endTime: {
      en: '06:00 PM',
      bn: 'সন্ধ্যা ০৬:০০'
    },
    title: {
      en: 'Poster Presentation',
      bn: 'পোস্টার প্রেজেন্টেশন'
    },
    subtitle: {
      en: 'Researching a compelling topic and presenting visual insights to the jury',
      bn: 'গবেষণালব্ধ তথ্য চিত্রাকারে উপস্থাপন ও বিচারকদের সামনে মৌখিক প্রেজেন্টেশন'
    },
    description: {
      en: 'Students conduct research on environmental sustainability, modern science, or local community issues and present their visually striking posters to distinguished evaluators.',
      bn: 'শিক্ষার্থীরা একটি বিষয়ে পুঙ্খানুপুঙ্খ গবেষণা করে তা নান্দনিক পোস্টারের মাধ্যমে সাজিয়ে বিচারকমণ্ডলী ও দর্শকদের সামনে উপস্থাপন করবে।'
    },
    coreSkills: {
      en: ['Research', 'Creativity', 'Presentation', 'Communication'],
      bn: ['গবেষণা (Research)', 'সৃজনশীলতা (Creativity)', 'উপস্থাপনা (Presentation)', 'যোগাযোগ (Communication)']
    },
    category: 'presentation',
    categoryLabel: {
      en: 'Research & Visuals',
      bn: 'গবেষণা ও ভিজ্যুয়াল উপস্থাপনা'
    },
    venueInsideSchool: {
      en: 'Auditorium Corridor & Exhibition Gallery',
      bn: 'অডিটোরিয়াম করিডোর ও প্রদর্শনী গ্যালারি'
    },
    teamFormat: {
      en: 'Team of 1 to 3 Members',
      bn: '১ থেকে ৩ জনের দল'
    },
    targetAudience: {
      en: 'High School & Higher Secondary Students',
      bn: 'মাধ্যমিক ও উচ্চ মাধ্যমিক পর্যায়ের শিক্ষার্থী'
    },
    highlights: {
      en: [
        'Standard poster size (A1 / 23x33 inches or standard art paper)',
        '3-minute live pitch to the judging panel followed by Q&A',
        'Evaluation on data authenticity, visual clarity, and verbal delivery'
      ],
      bn: [
        'আদর্শ পোস্টার সাইজ (A1 / ২৩x৩৩ ইঞ্চি অথবা আর্ট পেপার)',
        'বিচারক প্যানেলের সামনে ৩ মিনিটের মৌখিক বক্তব্য ও প্রশ্নোত্তর পর্ব',
        'তথ্যের গ্রহণযোগ্যতা, নান্দনিক ডিজাইন ও বাচনভঙ্গির ওপর মূল্যায়ন'
      ]
    },
    rules: {
      en: [
        'Posters must be original work created by team members.',
        'Digital prints or handmade illustrations are both accepted.',
        'Teams must set up their posters on display boards 30 minutes prior.'
      ],
      bn: [
        'পোস্টারটি দলের সদস্যদের নিজস্ব ও মৌলিক সৃষ্টি হতে হবে।',
        'ডিজিটাল প্রিন্ট অথবা হাতে আঁকা উভয় মাধ্যমই গ্রহণযোগ্য।',
        'ইভেন্ট শুরুর ৩০ মিনিট আগেই প্রদর্শনী বোর্ডে পোস্টার ঝুলিয়ে দিতে হবে।'
      ]
    },
    iconName: 'Presentation',
    accentColor: 'emerald'
  },

  // DAY 2
  {
    id: 'treasure-hunt',
    dayNumber: 2,
    dayLabel: {
      en: 'Day 2',
      bn: '২য় দিন'
    },
    dateFormatted: {
      en: '19 October, 2026',
      bn: '১৯ অক্টোবর, ২০২৬'
    },
    isoDate: '2026-10-19T10:00:00+06:00',
    startTime: {
      en: '10:00 AM',
      bn: 'সকাল ১০:০০'
    },
    endTime: {
      en: '01:30 PM',
      bn: 'দুপুর ০১:৩০'
    },
    title: {
      en: 'Treasure Hunt',
      bn: 'ট্রেজার হান্ট (Treasure Hunt)'
    },
    subtitle: {
      en: 'Campus-wide mystery puzzles, clue decoding, and timed team adventure',
      bn: 'ক্যাম্পাসজুড়ে গোপন ক্লু উদ্ধার, সাংকেতিক ধাঁধা সমাধান ও রোমাঞ্চকর অভিযান'
    },
    description: {
      en: 'A fun and immersive experiential activity teaching teamwork, spatial strategy, and problem solving across the lush campus of Govt. Patarhat Muslim Model High School.',
      bn: 'টিমওয়ার্ক, স্ট্র্যাটেজি ও প্রবলেম সলভিং শেখানোর রোমাঞ্চকর ও মজার মাধ্যম। স্কুলের চারপাশের গোপন সূত্র ও সংকেত উদঘাটন করে প্রথম বিজয়ী দল খুঁজে নেবে চূড়ান্ত গুপ্তধন!'
    },
    coreSkills: {
      en: ['Teamwork', 'Leadership', 'Strategy', 'Problem Solving'],
      bn: ['টিমওয়ার্ক (Teamwork)', 'নেতৃত্ব (Leadership)', 'কৌশল (Strategy)', 'সমস্যা সমাধান (Problem Solving)']
    },
    category: 'strategy',
    categoryLabel: {
      en: 'Strategy & Adventure',
      bn: 'কৌশল ও দলগত অভিযান'
    },
    venueInsideSchool: {
      en: 'High School Campus Ground & Flagpole Assembly',
      bn: 'উচ্চ বিদ্যালয় প্রাঙ্গণ ও পতাকা চত্বর'
    },
    teamFormat: {
      en: 'Strictly Teams of 3-4 Members',
      bn: 'কঠোরভাবে ৩-৪ জনের দল'
    },
    targetAudience: {
      en: 'All Registered Enthusiastic Students',
      bn: 'নিবন্ধিত সকল শিক্ষার্থী'
    },
    highlights: {
      en: [
        'Multi-stage cipher puzzles (Caesar ciphers, riddles, map coordinates)',
        'Team cooperation checkpoints supervised by MSS volunteers',
        'Grand prize chest unboxing ceremony for the champion crew'
      ],
      bn: [
        'বহুস্তরের ক্রিপ্টিক ধাঁধা, গানিতিক সংকেত ও ক্যাম্পাস ম্যাপ চ্যালেঞ্জ',
        'MSS ভলান্টিয়ারদের দ্বারা পরিচালিত সিক্রেট চেকপয়েন্ট',
        'চ্যাম্পিয়ন দলের জন্য বিশেষ আকর্ষণীয় ট্রেজার ট্রফি'
      ]
    },
    rules: {
      en: [
        'Running safely within bounds; no climbing dangerous high walls or entering locked staff rooms.',
        'Tampering with clues of other teams leads to immediate disqualification.',
        'All team members must cross the finish line together.'
      ],
      bn: [
        'ক্যাম্পাসের নিরাপত্তা সীমানা মেনে চলতে হবে; দেয়াল টপকানো বা বিপজ্জনক স্থানে যাওয়া নিষেধ।',
        'অন্য দলের ক্লু নষ্ট বা গোপন করার চেষ্টা করলে তাৎক্ষণিক বাতিল ঘোষণা করা হবে।',
        'দলের প্রতিটি সদস্যকে একসাথে ফিনিশ লাইনে পৌঁছাতে হবে।'
      ]
    },
    iconName: 'Compass',
    accentColor: 'amber'
  },
  {
    id: 'gaming-chess',
    dayNumber: 2,
    dayLabel: {
      en: 'Day 2',
      bn: '২য় দিন'
    },
    dateFormatted: {
      en: '19 October, 2026',
      bn: '১৯ অক্টোবর, ২০২৬'
    },
    isoDate: '2026-10-19T15:00:00+06:00',
    startTime: {
      en: '03:00 PM',
      bn: 'বিকাল ০৩:০০'
    },
    endTime: {
      en: '06:30 PM',
      bn: 'সন্ধ্যা ০৬:৩০'
    },
    title: {
      en: 'Gaming — Chess Tournament',
      bn: 'গেমিং — দাবা প্রতিযোগিতা (Chess)'
    },
    subtitle: {
      en: 'Knockout tactical board duel testing patience, foresight, and tactical mastery',
      bn: 'ধৈর্য, দূরদর্শিতা ও রণকৌশলের নকআউট বোর্ড লড়াই'
    },
    description: {
      en: 'Strategy, tactical decision-making, and psychological endurance in timed rapid chess matches. Fosters mental calculation under clock pressure.',
      bn: 'Strategy, decision-making ও বিচক্ষণতা ভিত্তিক ঐতিহ্যবাহী বুদ্ধির লড়াই। ঘড়ির কাঁটার চ্যালেঞ্জে প্রতিটি চাল প্রতিপক্ষকে টেক্কা দেওয়ার সেরা সুযোগ।'
    },
    coreSkills: {
      en: ['Strategy', 'Decision Making', 'Mental Foresight', 'Patience'],
      bn: ['কৌশল (Strategy)', 'দ্রুত সিদ্ধান্ত (Decision Making)', 'দূরদর্শিতা (Mental Foresight)', 'ধৈর্য (Patience)']
    },
    category: 'gaming',
    categoryLabel: {
      en: 'Mind Sports',
      bn: 'মাইন্ড স্পোর্টস'
    },
    venueInsideSchool: {
      en: 'Quiet Study Hall & Library (First Floor)',
      bn: 'বিদ্যালয় পাঠাগার ও শান্ত কক্ষ (দ্বিতীয় তলা)'
    },
    teamFormat: {
      en: 'Individual Solo Knockout',
      bn: 'একক নকআউট ফরম্যাট'
    },
    targetAudience: {
      en: 'Open to All Enrolled Students',
      bn: 'সকল আগ্রহী ছাত্র-ছাত্রীর জন্য উন্মুক্ত'
    },
    highlights: {
      en: [
        'FIDE rapid timing rules (15 min + 5 sec increment)',
        'Knockout tournament progression with grand chessboards',
        'Trophy for Grandmaster Champion and Runner-up'
      ],
      bn: [
        'FIDE আন্তর্জাতিক রেপিড নিয়মাবলি (১৫ মিনিট + ৫ সেকেন্ড ইনক্রিমেন্ট)',
        'নকআউট পদ্ধতিতে উত্তেজনাপূর্ণ কোয়ার্টার ও ফাইনাল লড়াই',
        'দাবা চ্যাম্পিয়ন ও রানার্স-আপ ট্রফি ও বিশেষ সনদ'
      ]
    },
    rules: {
      en: [
        'Touch-move rule strictly enforced by certified arbiters.',
        'Silence must be maintained at all times inside the playing hall.',
        'Smartphones must be deposited prior to match commencement.'
      ],
      bn: [
        'টাচ-মুভ নিয়ম কঠোরভাবে কার্যকর থাকবে।',
        'খেলার কক্ষে সার্বক্ষণিক নীরবতা বজায় রাখতে হবে।',
        'ম্যাচ শুরুর আগেই সব ধরনের ইলেকট্রনিক গ্যাজেট জমা রাখতে হবে।'
      ]
    },
    iconName: 'Crown',
    accentColor: 'indigo'
  },

  // DAY 3
  {
    id: 'debate-competition',
    dayNumber: 3,
    dayLabel: {
      en: 'Day 3',
      bn: '৩য় দিন'
    },
    dateFormatted: {
      en: '20 October, 2026',
      bn: '২০ অক্টোবর, ২০২৬'
    },
    isoDate: '2026-10-20T10:00:00+06:00',
    startTime: {
      en: '10:00 AM',
      bn: 'সকাল ১০:০০'
    },
    endTime: {
      en: '02:00 PM',
      bn: 'দুপুর ০২:০০'
    },
    title: {
      en: 'Debate Championship',
      bn: 'বিতর্ক প্রতিযোগিতা (Debate)'
    },
    subtitle: {
      en: 'Articulating logical conviction, rebuttal art, and public oratory',
      bn: 'যুক্তি দিয়ে মত প্রকাশ ও পরমত সহিষ্ণুতার চমৎকার বাকযুদ্ধ'
    },
    description: {
      en: 'Cultivating the courage to express personal convictions through sound reasoning and critically dissect opposing viewpoints with scholarly respect and eloquence.',
      bn: 'নিজের মতামত যুক্তি দিয়ে প্রকাশ ও অন্যের মতামতকে সম্মানের সাথে বিশ্লেষণ করার দক্ষতা। সাম্প্রতিক সমাজ, বিজ্ঞান ও শিক্ষা প্রসারে যুক্তিভিত্তিক বিতর্কের রোমাঞ্চকর আয়োজন।'
    },
    coreSkills: {
      en: ['Critical Thinking', 'Argumentation', 'Public Speaking', 'Confidence'],
      bn: ['সূক্ষ্ম চিন্তন (Critical Thinking)', 'যুক্তিপ্রমাণ (Argumentation)', 'বক্তৃতা (Public Speaking)', 'আত্মবিশ্বাস (Confidence)']
    },
    category: 'debate',
    categoryLabel: {
      en: 'Debate & Oratory',
      bn: 'বিতর্ক ও বাচনকলা'
    },
    venueInsideSchool: {
      en: 'School Central Auditorium Stage',
      bn: 'বিদ্যালয় কেন্দ্রীয় অডিটোরিয়াম মঞ্চ'
    },
    teamFormat: {
      en: 'Traditional Parliamentary (3 Speakers per Team: Prime/Opp Leader, Members)',
      bn: 'সনাতনী ও সংসদীয় পদ্ধতি (৩ জন বিতার্কিকের দল)'
    },
    targetAudience: {
      en: 'School & College Debate Clubs',
      bn: 'স্কুল ও কলেজ পর্যায়ের ডিবেট ক্লাব'
    },
    highlights: {
      en: [
        'Motions covering contemporary education, technology, and regional advancement',
        'Distinguished guest adjudicators from renowned regional universities',
        'Awards for Best Speaker, Champion Team, and Runners-up Team'
      ],
      bn: [
        'শিক্ষা, আধুনিক প্রযুক্তি ও সমাজ সংস্কারমূলক উদ্দীপক বিষয়',
        'বরিশাল ও মেহেন্দীগঞ্জের বিশিষ্ট শিক্ষাবিদ ও বিতার্কিকদের বিচারকমণ্ডলী',
        'শ্রেষ্ঠ বক্তা, চ্যাম্পিয়ন দল ও রানার্স-আপ দলের জন্য গৌরবোজ্জ্বল ট্রফি'
      ]
    },
    rules: {
      en: [
        'Speaking times: 4 minutes for substantive speeches, 3 minutes for replies.',
        'Unparliamentary language or personal attacks are grounds for zero scoring.',
        'Preparation time of 20 minutes provided after motion reveal.'
      ],
      bn: [
        'বক্তব্যের সময়সীমা: মূল বক্তৃতা ৪ মিনিট, সমাপনী প্রত্যুত্তর ৩ মিনিট।',
        'অশালীন ভাষা বা ব্যক্তিগত আক্রমণ কঠোরভাবে নিষিদ্ধ।',
        'বিষয় ঘোষণার পর প্রতিটি দলকে ২০ মিনিট প্রস্তুতির সুযোগ দেওয়া হবে।'
      ]
    },
    iconName: 'MessageSquare',
    accentColor: 'teal'
  },
  {
    id: 'gaming-pes-rubik',
    dayNumber: 3,
    dayLabel: {
      en: 'Day 3',
      bn: '৩য় দিন'
    },
    dateFormatted: {
      en: '20 October, 2026',
      bn: '২০ অক্টোবর, ২০২৬'
    },
    isoDate: '2026-10-20T15:00:00+06:00',
    startTime: {
      en: '03:00 PM',
      bn: 'বিকাল ০৩:০০'
    },
    endTime: {
      en: '06:30 PM',
      bn: 'সন্ধ্যা ০৬:৩০'
    },
    title: {
      en: 'Gaming — PES & Rubik\'s Cube',
      bn: 'গেমিং — PES ফুটবল ও রুবিকস কিউব'
    },
    subtitle: {
      en: 'Virtual football esports & lightning-fast speedcubing algorithm showdown',
      bn: 'ই-ফুটবল গেম চ্যাম্পিয়নশিপ এবং চোখের পলকে রুবিকস কিউব সমাধানের জমজমাট লড়াই'
    },
    description: {
      en: 'High-octane entertainment and fast reflex challenges: thrilling eFootball PES knockout matches combined with official timer speedcubing races.',
      bn: 'PES ফুটবল গেমিংয়ে কৌশল ও রিফ্লেক্সের লড়াই এবং নিখুঁত অ্যালগরিদমের মাধ্যমে দ্রুততম সময়ে ৩x৩ রুবিকস কিউব সমাধান করার রোমাঞ্চকর ইভেন্ট।'
    },
    coreSkills: {
      en: ['Reflexes', 'Algorithmic Thinking', 'Pattern Recognition', 'Composure'],
      bn: ['দ্রুত প্রতিফলন (Reflexes)', 'অ্যালগরিদমিক ভাবন (Algorithmic Thinking)', 'প্যাটার্ন শনাক্তকরণ (Pattern Recognition)', 'স্থিরতা (Composure)']
    },
    category: 'gaming',
    categoryLabel: {
      en: 'E-Sports & Speed Cubing',
      bn: 'ই-স্পোর্টস ও স্পিড কিউবিং'
    },
    venueInsideSchool: {
      en: 'Multimedia Digital Lab & Gaming Zone',
      bn: 'মাল্টিমিডিয়া ডিজিটাল কম্পিউটার ল্যাব'
    },
    teamFormat: {
      en: 'Individual Participation (Separate categories for PES and Speedcubing)',
      bn: 'একক অংশগ্রহণ (PES এবং রুবিকস কিউবের পৃথক সেগমেন্ট)'
    },
    targetAudience: {
      en: 'Gamers & Speedcubers of All Ages',
      bn: 'গেমিং ও স্পিড কিউবিং অনুরাগী সকল শিক্ষার্থী'
    },
    highlights: {
      en: [
        'Projector display for high-stakes PES knockout semifinals & finals',
        'Stackmat precision digital timing for 3x3 speedcubing runs',
        'Official certificate and gaming merchandise for top performers'
      ],
      bn: [
        'বড় প্রজেক্টরে PES সেমিফাইনাল ও ফাইনাল ম্যাচের সরাসরি প্রদর্শন',
        '৩x৩ স্পিড কিউবিংয়ে ডিজিটাল স্ট্যাকম্যাট টাইমিংয়ের নিখুঁত হিসাব',
        'বিজয়ীদের জন্য আকর্ষণীয় গেমিং গ্যাজেট ও ট্রফি'
      ]
    },
    rules: {
      en: [
        'Standard controller configurations; custom controller plugins not permitted.',
        'WCA regulations apply for Cube inspection (15 seconds inspection time).',
        'Fair play must be upheld at all times with mutual sportsmanship.'
      ],
      bn: [
        'PES-এ স্ট্যান্ডার্ড কন্ট্রোলার সেটিংস প্রযোজ্য হবে।',
        'রুবিকস কিউবে WCA নিয়ম অনুসারে ১৫ সেকেন্ড ইন্সপেকশন সময় দেওয়া হবে।',
        'খেলোয়াড়সুলভ আচরণ ও পারস্পরিক শ্রদ্ধা বজায় রাখা বাধ্যতামূলক।'
      ]
    },
    iconName: 'Gamepad2',
    accentColor: 'orange'
  },

  // DAY 4
  {
    id: 'project-show',
    dayNumber: 4,
    dayLabel: {
      en: 'Day 4',
      bn: '৪র্থ দিন'
    },
    dateFormatted: {
      en: '22 October, 2026',
      bn: '২২ অক্টোবর, ২০২৬'
    },
    isoDate: '2026-10-22T14:00:00+06:00',
    startTime: {
      en: '02:00 PM',
      bn: 'দুপুর ০২:০০'
    },
    endTime: {
      en: '07:30 PM',
      bn: 'রাত ০৭:৩০'
    },
    title: {
      en: 'Project Show & Grand Award Ceremony',
      bn: 'প্রজেক্ট শো ও সমাপনী পুরস্কার বিতরণী'
    },
    subtitle: {
      en: 'Translating theoretical textbook science into real-world working innovations',
      bn: 'বইয়ের পাতায় পড়া বিজ্ঞানের বিস্ময়কে বাস্তবে রূপ দিয়ে প্রদর্শনের মহা উৎসব'
    },
    description: {
      en: 'The crown jewel of INNOVATE 26: turning classroom STEM theories into functioning inventions, followed by the grand celebratory prize distribution to all festival champions.',
      bn: 'বইয়ে শেখা concept বাস্তবে প্রয়োগ করার সেরা সুযোগ। বিজ্ঞান, রোবোটিক্স, পরিবেশ প্রযুক্তি ও সফটওয়্যার প্রজেক্ট প্রদর্শনী শেষে মহাসমারোহে চ্যাম্পিয়নদের মাঝে মেডেল ও ক্রেস্ট প্রদান।'
    },
    coreSkills: {
      en: ['Innovation', 'Scientific Thinking', 'Research', 'Practical Learning'],
      bn: ['উদ্ভাবন (Innovation)', 'বিজ্ঞানমনস্কতা (Scientific Thinking)', 'গবেষণা (Research)', 'বাস্তবমুখী শিখন (Practical Learning)']
    },
    category: 'innovation',
    categoryLabel: {
      en: 'Science & Grand Finale',
      bn: 'বিজ্ঞান প্রজেক্ট ও মহোৎসব'
    },
    venueInsideSchool: {
      en: 'School Open Quadrangle & Main Stage Pavilion',
      bn: 'উচ্চ বিদ্যালয় খোলা চত্বর ও মূল মঞ্চ প্যান্ডেল'
    },
    teamFormat: {
      en: 'Teams of 2 to 4 Innovators',
      bn: '২ থেকে ৪ জনের উদ্ভাবক দল'
    },
    targetAudience: {
      en: 'School & College Science Clubs & Solo Innovators',
      bn: 'স্কুল ও কলেজ পর্যায়ের বিজ্ঞান ক্লাব ও কিশোর উদ্ভাবক'
    },
    highlights: {
      en: [
        'Live demonstrations of working prototypes to jury and general public',
        'Special categories: Green Energy, Robotics & IoT, Rural Problem Solvers',
        'Grand Finale Ceremony with honored guests, crests, certificates, and celebration'
      ],
      bn: [
        'বিচারক ও সাধারণ দর্শনার্থীদের সামনে সক্রিয় প্রোটোটাইপের সরাসরি প্রদর্শন',
        'বিশেষ ক্যাটাগরি: পরিবেশবান্ধব প্রযুক্তি, রোবোটিক্স ও গ্রামীণ সমস্যা সমাধান',
        'বিশিষ্ট ব্যক্তিবর্গের উপস্থিতিতে গ্র্যান্ড ফিনালে অ্যাওয়ার্ড প্রদান ও সাংস্কৃতিক উৎসব'
      ]
    },
    rules: {
      en: [
        'Projects must include a working physical prototype or interactive software model.',
        'Hazardous chemicals or open high-voltage sparks are strictly regulated.',
        'Each team will receive an allocated stall with power supply on 22 October 12:00 PM.'
      ],
      bn: [
        'প্রজেক্টে অবশ্যই কার্যকরী ফিজিক্যাল প্রোটোটাইপ বা সফটওয়্যার মডেল থাকতে হবে।',
        'বিপজ্জনক রাসায়নিক বা অনিরাপদ উচ্চভোল্টেজ স্পার্ক সম্পূর্ণ নিষিদ্ধ।',
        '২২ অক্টোবর দুপুর ১২:০০টার মধ্যে স্টল প্রস্তুত সম্পন্ন করতে হবে।'
      ]
    },
    iconName: 'Sparkles',
    accentColor: 'rose'
  }
];

export const CAMPAIGN_INFO = {
  title: {
    en: 'Road to Innovate 26: School Visit Campaign',
    bn: 'রোড টু ইনোভেট ২৬: স্কুল ভিজিট প্রচারণা'
  },
  dates: {
    en: '15 – 17 September, 2026',
    bn: '১৫ – ১৭ সেপ্টেম্বর, ২০২৬'
  },
  description: {
    en: 'MSS ambassadors visited schools across Mehendiganj, engaging with 2,500+ passionate students, distributing guidelines, and igniting curiosity for the festival.',
    bn: 'মেহেন্দীগঞ্জের বিভিন্ন শিক্ষা প্রতিষ্ঠানে MSS-এর প্রতিনিধিরা সরাসরি গিয়ে আড়াই হাজারেরও বেশি শিক্ষার্থীর সাথে মতবিনিময় ও উৎসবের বিস্তারিত দিকনির্দেশনা পৌঁছে দেন।'
  },
  schoolsCovered: [
    { en: 'Govt. Patarhat Muslim Model High School', bn: 'সরকারি পাতারহাট মুসলিম মডেল উচ্চ বিদ্যালয়' },
    { en: 'Patarhat Girls High School', bn: 'পাতারহাট বালিকা উচ্চ বিদ্যালয়' },
    { en: 'Ulania Coronation High School', bn: 'উলানিয়া করোনেশন উচ্চ বিদ্যালয়' },
    { en: 'Mehendiganj Model School & College', bn: 'মেহেন্দীগঞ্জ মডেল স্কুল ও কলেজ' },
    { en: 'Char Gopalpur High School', bn: 'চর গোপালপুর উচ্চ বিদ্যালয়' }
  ]
};

export const FAQ_DATA = [
  {
    q: {
      en: 'Who is eligible to participate in INNOVATE 26?',
      bn: 'ইনোভেট ২৬ এ কারা অংশগ্রহণ করতে পারবে?'
    },
    a: {
      en: 'Students from Class 6 to Class 12, as well as college-level learners across Mehendiganj and neighboring upazilas are warmly welcomed.',
      bn: 'মেহেন্দীগঞ্জ ও পার্শ্ববর্তী অঞ্চলের ৬ষ্ঠ থেকে দ্বাদশ শ্রেণি এবং কলেজ পর্যায়ের সকল শিক্ষার্থী এই প্রতিযোগিতায় অংশগ্রহণ করতে পারবে।'
    }
  },
  {
    q: {
      en: 'Can a student participate in more than one event?',
      bn: 'একজন শিক্ষার্থী কি একাধিক ইভেন্টে অংশ নিতে পারবে?'
    },
    a: {
      en: 'Yes! As long as the event schedules do not overlap. For instance, you can take part in Quiz in the morning and Poster Presentation in the afternoon.',
      bn: 'হ্যাঁ, সময়ের কোনো সংঘাত (overlap) না থাকলে একজন শিক্ষার্থী একাধিক ইভেন্টে অংশ নিতে পারে। যেমন: সকালে কুইজ এবং বিকালে পোস্টার প্রেজেন্টেশন।'
    }
  },
  {
    q: {
      en: 'Is there any registration fee?',
      bn: 'অংশগ্রহণের জন্য কি কোনো ফি দিতে হবে?'
    },
    a: {
      en: 'Registration details and free student slots are subsidized by Mehendiganj Students\' Society (MSS). Contact our hotline 01731537457 for direct registration help.',
      bn: 'মেহেন্দীগঞ্জ স্টুডেন্টস সোসাইটির উদ্যোগে শিক্ষার্থীদের উৎসাহিত করতে বেশিরভাগ সেগমেন্ট নামমাত্র মূল্যে বা বিনামূল্যে উন্মুক্ত রাখা হয়েছে। প্রয়োজনে 01731537457 এ যোগাযোগ করুন।'
    }
  },
  {
    q: {
      en: 'What will the winners receive?',
      bn: 'বিজয়ী প্রতিযোগীরা কী কী পুরস্কার পাবে?'
    },
    a: {
      en: 'Winners receive prestigious INNOVATE 26 Champion Crests, medals, verified achievement certificates, and exciting educational gift hampers.',
      bn: 'প্রতিটি ইভেন্টের বিজয়ীদের আকর্ষণীয় INNOVATE 26 চ্যাম্পিয়ন ক্রেস্ট, মেডেল, ভেরিফাইড সনদপত্র ও শিক্ষামূলক উপহার প্রদান করা হবে।'
    }
  }
];
