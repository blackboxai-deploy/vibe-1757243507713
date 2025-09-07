import { TrafficSign, SignCategory, SignShape, SignColor, QuizQuestion } from '../types';

export const categories: SignCategory[] = [
  {
    id: 'warning',
    name: 'Warning Signs',
    urduName: 'خبرداری کے نشانات',
    description: 'Signs that warn drivers of potential hazards ahead',
    color: 'yellow',
    icon: '⚠️'
  },
  {
    id: 'regulatory',
    name: 'Regulatory Signs',
    urduName: 'ضابطہ کار نشانات',
    description: 'Signs that inform drivers of traffic laws and regulations',
    color: 'red',
    icon: '🚫'
  },
  {
    id: 'informational',
    name: 'Informational Signs',
    urduName: 'معلوماتی نشانات',
    description: 'Signs that provide helpful information to drivers',
    color: 'blue',
    icon: 'ℹ️'
  },
  {
    id: 'construction',
    name: 'Construction Signs',
    urduName: 'تعمیراتی نشانات',
    description: 'Signs related to road work and construction zones',
    color: 'orange',
    icon: '🚧'
  }
];

export const trafficSigns: TrafficSign[] = [
  // Warning Signs
  {
    id: 'warning-sharp-curve',
    name: 'Sharp Curve Ahead',
    urduName: 'آگے تیز موڑ',
    description: 'Warns drivers of a sharp curve in the road ahead',
    significance: 'Reduce speed and prepare for a sharp turn to avoid accidents',
    category: categories[0],
    imageUrl: 'https://placehold.co/300x300?text=Yellow+triangular+warning+sign+sharp+curve+ahead+black+arrow+road+symbol',
    shape: SignShape.TRIANGLE,
    color: SignColor.YELLOW,
    keywords: ['curve', 'turn', 'bend', 'sharp', 'warning', 'موڑ']
  },
  {
    id: 'warning-t-intersection',
    name: 'T-Intersection',
    urduName: 'تین راہا',
    description: 'Warns of a T-shaped intersection ahead',
    significance: 'Prepare to stop or turn as the road ahead ends',
    category: categories[0],
    imageUrl: 'https://placehold.co/300x300?text=Yellow+triangular+warning+sign+T+intersection+symbol+black+on+yellow',
    shape: SignShape.TRIANGLE,
    color: SignColor.YELLOW,
    keywords: ['intersection', 't-junction', 'crossroads', 'تین راہا']
  },
  {
    id: 'warning-pedestrian',
    name: 'Pedestrian Crossing',
    urduName: 'پیدل چلنے والوں کا راستہ',
    description: 'Warns drivers of a pedestrian crossing ahead',
    significance: 'Slow down and watch for people crossing the road',
    category: categories[0],
    imageUrl: 'https://placehold.co/300x300?text=Yellow+triangular+warning+sign+pedestrian+crossing+symbol+person+walking',
    shape: SignShape.TRIANGLE,
    color: SignColor.YELLOW,
    keywords: ['pedestrian', 'crossing', 'people', 'walk', 'پیدل']
  },
  {
    id: 'warning-school',
    name: 'School Zone',
    urduName: 'اسکول کا علاقہ',
    description: 'Warns drivers they are entering a school zone',
    significance: 'Reduce speed and be extra cautious for children',
    category: categories[0],
    imageUrl: 'https://placehold.co/300x300?text=Yellow+triangular+warning+sign+school+zone+children+crossing+symbol',
    shape: SignShape.TRIANGLE,
    color: SignColor.YELLOW,
    keywords: ['school', 'children', 'students', 'اسکول', 'بچے']
  },
  {
    id: 'warning-steep-hill',
    name: 'Steep Hill',
    urduName: 'کھڑی چڑھائی',
    description: 'Warns of a steep upward or downward grade',
    significance: 'Use appropriate gear and maintain safe following distance',
    category: categories[0],
    imageUrl: 'https://placehold.co/300x300?text=Yellow+triangular+warning+sign+steep+hill+grade+percentage+symbol',
    shape: SignShape.TRIANGLE,
    color: SignColor.YELLOW,
    keywords: ['hill', 'steep', 'grade', 'slope', 'چڑھائی']
  },

  // Regulatory Signs
  {
    id: 'regulatory-stop',
    name: 'Stop Sign',
    urduName: 'رک جائیں',
    description: 'Requires drivers to come to a complete stop',
    significance: 'Must stop completely before proceeding, regardless of traffic',
    category: categories[1],
    imageUrl: 'https://placehold.co/300x300?text=Red+octagonal+stop+sign+white+STOP+text+regulatory+traffic+control',
    shape: SignShape.OCTAGON,
    color: SignColor.RED,
    keywords: ['stop', 'halt', 'complete stop', 'رک', 'توقف']
  },
  {
    id: 'regulatory-give-way',
    name: 'Give Way',
    urduName: 'راستہ دیں',
    description: 'Requires drivers to yield right of way to other traffic',
    significance: 'Must give priority to traffic on the main road',
    category: categories[1],
    imageUrl: 'https://placehold.co/300x300?text=White+triangular+give+way+sign+red+border+inverted+triangle+yield',
    shape: SignShape.TRIANGLE,
    color: SignColor.WHITE,
    keywords: ['yield', 'give way', 'priority', 'راستہ', 'اولیت']
  },
  {
    id: 'regulatory-no-entry',
    name: 'No Entry',
    urduName: 'داخلہ ممنوع',
    description: 'Prohibits entry for all vehicles',
    significance: 'Vehicles are not allowed to enter this road or area',
    category: categories[1],
    imageUrl: 'https://placehold.co/300x300?text=Red+circular+no+entry+sign+white+horizontal+bar+prohibition+symbol',
    shape: SignShape.CIRCLE,
    color: SignColor.RED,
    keywords: ['no entry', 'prohibited', 'forbidden', 'ممنوع', 'داخلہ']
  },
  {
    id: 'regulatory-speed-60',
    name: 'Speed Limit 60',
    urduName: '۶۰ کی رفتار کی حد',
    description: 'Maximum speed limit of 60 km/h',
    significance: 'Do not exceed 60 kilometers per hour',
    category: categories[1],
    imageUrl: 'https://placehold.co/300x300?text=White+circular+speed+limit+sign+red+border+60+black+text+kmh',
    shape: SignShape.CIRCLE,
    color: SignColor.WHITE,
    keywords: ['speed limit', '60', 'kmh', 'maximum', 'رفتار', 'حد']
  },
  {
    id: 'regulatory-no-parking',
    name: 'No Parking',
    urduName: 'پارکنگ ممنوع',
    description: 'Parking is prohibited in this area',
    significance: 'Vehicles cannot be parked here at any time',
    category: categories[1],
    imageUrl: 'https://placehold.co/300x300?text=Red+circular+no+parking+sign+white+P+with+diagonal+line+prohibition',
    shape: SignShape.CIRCLE,
    color: SignColor.RED,
    keywords: ['no parking', 'prohibited', 'P', 'پارکنگ', 'ممنوع']
  },
  {
    id: 'regulatory-one-way',
    name: 'One Way',
    urduName: 'یک طرفہ',
    description: 'Traffic flows in one direction only',
    significance: 'Vehicles must travel only in the indicated direction',
    category: categories[1],
    imageUrl: 'https://placehold.co/300x300?text=Blue+rectangular+one+way+sign+white+arrow+directional+traffic+flow',
    shape: SignShape.RECTANGLE,
    color: SignColor.BLUE,
    keywords: ['one way', 'direction', 'arrow', 'یک طرفہ', 'سمت']
  },

  // Informational Signs
  {
    id: 'info-hospital',
    name: 'Hospital',
    urduName: 'ہسپتال',
    description: 'Indicates location of a hospital',
    significance: 'Medical facilities are available in this direction',
    category: categories[2],
    imageUrl: 'https://placehold.co/300x300?text=Blue+square+hospital+sign+white+H+medical+cross+symbol+healthcare',
    shape: SignShape.SQUARE,
    color: SignColor.BLUE,
    keywords: ['hospital', 'medical', 'health', 'H', 'ہسپتال']
  },
  {
    id: 'info-fuel-station',
    name: 'Fuel Station',
    urduName: 'پیٹرول پمپ',
    description: 'Indicates location of a fuel station',
    significance: 'Gasoline and diesel are available here',
    category: categories[2],
    imageUrl: 'https://placehold.co/300x300?text=Blue+square+fuel+station+sign+white+gas+pump+symbol+petrol+diesel',
    shape: SignShape.SQUARE,
    color: SignColor.BLUE,
    keywords: ['fuel', 'gas', 'petrol', 'diesel', 'پیٹرول']
  },
  {
    id: 'info-rest-area',
    name: 'Rest Area',
    urduName: 'آرام گاہ',
    description: 'Indicates a rest area or parking facility',
    significance: 'Rest facilities and parking available',
    category: categories[2],
    imageUrl: 'https://placehold.co/300x300?text=Blue+square+rest+area+sign+white+bed+symbol+parking+facilities',
    shape: SignShape.SQUARE,
    color: SignColor.BLUE,
    keywords: ['rest', 'parking', 'facilities', 'آرام', 'پارکنگ']
  },
  {
    id: 'info-tourist',
    name: 'Tourist Information',
    urduName: 'سیاحتی معلومات',
    description: 'Indicates tourist information center',
    significance: 'Tourist guidance and information available',
    category: categories[2],
    imageUrl: 'https://placehold.co/300x300?text=Blue+square+tourist+info+sign+white+i+information+symbol+tourism',
    shape: SignShape.SQUARE,
    color: SignColor.BLUE,
    keywords: ['tourist', 'information', 'guidance', 'سیاحت', 'معلومات']
  },
  {
    id: 'info-mosque',
    name: 'Mosque',
    urduName: 'مسجد',
    description: 'Indicates location of a mosque',
    significance: 'Islamic worship place available',
    category: categories[2],
    imageUrl: 'https://placehold.co/300x300?text=Blue+square+mosque+sign+white+crescent+minaret+symbol+islamic+worship',
    shape: SignShape.SQUARE,
    color: SignColor.BLUE,
    keywords: ['mosque', 'worship', 'islamic', 'prayer', 'مسجد']
  },

  // Construction Signs
  {
    id: 'construction-road-work',
    name: 'Road Work Ahead',
    urduName: 'آگے سڑک کا کام',
    description: 'Construction or maintenance work ahead',
    significance: 'Reduce speed and be prepared for changed traffic patterns',
    category: categories[3],
    imageUrl: 'https://placehold.co/300x300?text=Orange+diamond+road+work+sign+black+worker+shovel+symbol+construction',
    shape: SignShape.DIAMOND,
    color: SignColor.ORANGE,
    keywords: ['construction', 'work', 'maintenance', 'تعمیر', 'کام']
  },
  {
    id: 'construction-detour',
    name: 'Detour',
    urduName: 'متبادل راستہ',
    description: 'Traffic must follow alternate route',
    significance: 'Follow the indicated path to bypass construction',
    category: categories[3],
    imageUrl: 'https://placehold.co/300x300?text=Orange+rectangular+detour+sign+black+arrow+alternate+route+construction',
    shape: SignShape.RECTANGLE,
    color: SignColor.ORANGE,
    keywords: ['detour', 'alternate', 'bypass', 'route', 'متبادل']
  },
  {
    id: 'construction-lane-closure',
    name: 'Lane Closure',
    urduName: 'لین بند',
    description: 'One or more lanes are closed ahead',
    significance: 'Merge into open lanes and reduce speed',
    category: categories[3],
    imageUrl: 'https://placehold.co/300x300?text=Orange+diamond+lane+closure+sign+black+merge+arrow+symbol+traffic',
    shape: SignShape.DIAMOND,
    color: SignColor.ORANGE,
    keywords: ['lane', 'closure', 'merge', 'closed', 'لین', 'بند']
  },
  {
    id: 'construction-flagman',
    name: 'Flagman Ahead',
    urduName: 'آگے ٹریفک کنٹرولر',
    description: 'Traffic control person ahead',
    significance: 'Follow signals from traffic control person',
    category: categories[3],
    imageUrl: 'https://placehold.co/300x300?text=Orange+diamond+flagman+sign+black+person+flag+symbol+traffic+control',
    shape: SignShape.DIAMOND,
    color: SignColor.ORANGE,
    keywords: ['flagman', 'control', 'person', 'signal', 'کنٹرولر']
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    signId: 'regulatory-stop',
    question: 'What should you do when you see this sign?',
    options: ['Slow down', 'Come to complete stop', 'Yield to traffic', 'Proceed with caution'],
    correctAnswer: 1,
    explanation: 'A stop sign requires you to come to a complete stop before proceeding.'
  },
  {
    id: 'q2',
    signId: 'warning-pedestrian',
    question: 'What does this warning sign indicate?',
    options: ['School zone ahead', 'Pedestrian crossing ahead', 'Construction zone', 'Sharp curve'],
    correctAnswer: 1,
    explanation: 'This sign warns drivers that there is a pedestrian crossing ahead.'
  },
  {
    id: 'q3',
    signId: 'regulatory-give-way',
    question: 'What must you do when you see this sign?',
    options: ['Stop completely', 'Speed up', 'Give way to other traffic', 'Turn around'],
    correctAnswer: 2,
    explanation: 'Give way sign means you must yield right of way to other traffic.'
  },
  {
    id: 'q4',
    signId: 'info-hospital',
    question: 'What does this blue sign with H indicate?',
    options: ['Hotel', 'Highway', 'Hospital', 'Help center'],
    correctAnswer: 2,
    explanation: 'The H symbol on a blue background indicates a hospital location.'
  },
  {
    id: 'q5',
    signId: 'construction-road-work',
    question: 'What should you do when you see this orange sign?',
    options: ['Maintain speed', 'Reduce speed and be alert', 'Change lanes immediately', 'Turn back'],
    correctAnswer: 1,
    explanation: 'Orange construction signs mean reduce speed and be alert for work zones.'
  }
];

export function getSignsByCategory(categoryId: string): TrafficSign[] {
  return trafficSigns.filter(sign => sign.category.id === categoryId);
}

export function searchSigns(query: string): TrafficSign[] {
  const lowercaseQuery = query.toLowerCase();
  return trafficSigns.filter(sign => 
    sign.name.toLowerCase().includes(lowercaseQuery) ||
    sign.urduName?.toLowerCase().includes(lowercaseQuery) ||
    sign.description.toLowerCase().includes(lowercaseQuery) ||
    sign.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
  );
}

export function getRandomQuizQuestions(count: number = 5): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}