/**
 * Site Data Configuration
 * ========================
 * All institute information is centralised here.
 * Replace placeholder values (marked with square brackets) with actual data.
 * The UI reads from this file — no content is hard-coded into HTML components.
 */

const SITE_DATA = {

  /* ── Institute Identity ── */
  institute: {
    name: '[Institute Name]',
    tagline: 'Trusted Coaching for Academic & Competitive Excellence',
    headline: 'Build Strong Concepts. Achieve Better Results.',
    description:
      'A dedicated coaching institute offering structured preparation for school boards, competitive examinations and foundation courses. We focus on concept clarity, regular practice and personal mentorship to help every student reach their academic potential.',
    established: '[Year]',
    logo: 'assets/images/logo.svg',       // replace with actual logo path
    favicon: 'assets/images/favicon.ico',
  },

  /* ── Contact ── */
  contact: {
    phone:    ['[Phone Number 1]', '[Phone Number 2]'],
    email:    '[email@example.com]',
    whatsapp: '[WhatsApp Number]',         // set to null if unavailable
    address: {
      line1: '[Building / Floor]',
      line2: '[Street, Locality]',
      city:  '[City]',
      state: '[State]',
      pin:   '[PIN Code]',
    },
    workingHours: {
      weekdays:  '[9:00 AM – 7:00 PM]',
      saturday:  '[9:00 AM – 5:00 PM]',
      sunday:    'Closed',
    },
    mapEmbedUrl: '',                       // Google Maps embed URL
    mapDirectionsUrl: '',                  // Google Maps directions link
  },

  /* ── Social Links ── */
  social: {
    facebook:  '',
    instagram: '',
    youtube:   '',
    linkedin:  '',
    twitter:   '',
  },

  /* ── Navigation ── */
  nav: [
    { label: 'Home',    href: 'index.html'    },
    { label: 'About',   href: '#about'        },
    { label: 'Courses', href: '#courses'       },
    { label: 'Faculty', href: '#faculty'       },
    { label: 'Results', href: '#results'       },
    { label: 'Gallery', href: 'gallery.html'   },
    { label: 'Contact', href: '#contact'       },
  ],

  /* ── Trust Strip ── */
  trustStrip: [
    { icon: 'users',          label: 'Experienced Faculty'          },
    { icon: 'clipboard-check',label: 'Regular Assessments'          },
    { icon: 'user-check',     label: 'Personal Attention'           },
    { icon: 'layers',         label: 'Structured Learning'          },
    { icon: 'target',         label: 'Result-Oriented Preparation'  },
  ],

  /* ── About ── */
  about: {
    image: 'assets/images/about-institute.jpg',
    imageAlt: 'Institute campus and classrooms',
    paragraphs: [
      '[Institute Name] was established in [Year] with a clear purpose — to provide quality academic coaching that genuinely helps students build strong foundations.',
      'Our teaching methodology emphasises conceptual understanding over rote memorisation. Every topic is taught with clarity, reinforced through practice, and assessed regularly so that students and parents can track meaningful progress.',
      'We maintain small batch sizes to ensure that every student receives individual attention. Our faculty members are approachable, experienced and committed to each student\'s growth.',
    ],
    highlights: [
      { label: 'Teaching Philosophy', value: 'Concept-first learning with structured practice' },
      { label: 'Batch Size',         value: 'Limited seats per batch for personal attention' },
      { label: 'Assessment',         value: 'Regular tests with detailed performance analysis' },
    ],
  },

  /* ── Why Choose Us ── */
  whyChooseUs: [
    {
      icon:  'graduation-cap',
      title: 'Experienced Faculty',
      desc:  'Learn from teachers with strong subject knowledge and years of classroom experience.',
    },
    {
      icon:  'lightbulb',
      title: 'Concept-Based Teaching',
      desc:  'Focus on understanding concepts rather than memorising answers.',
    },
    {
      icon:  'clipboard-list',
      title: 'Regular Assessments',
      desc:  'Frequent tests help students identify strengths and work on weaknesses.',
    },
    {
      icon:  'user-check',
      title: 'Personal Attention',
      desc:  'Small batch sizes ensure meaningful interaction between teachers and students.',
    },
    {
      icon:  'calendar-check',
      title: 'Structured Study Plan',
      desc:  'Clear academic planning and syllabus coverage throughout the session.',
    },
    {
      icon:  'message-circle',
      title: 'Doubt Resolution',
      desc:  'Dedicated support for students who need additional explanation and practice.',
    },
  ],

  /* ── Courses ── */
  courses: [
    {
      id:         'class-10-board',
      name:       'Class 10 — Board Preparation',
      board:      'CBSE / ICSE / State Board',
      classLevel: 'Class 10',
      subjects:   ['Mathematics', 'Science', 'English', 'Social Science'],
      duration:   'Full Academic Session',
      mode:       'Offline (Classroom)',
      batch:      '[Batch timings]',
      features:   ['Complete syllabus coverage', 'Chapter-wise tests', 'Board-pattern practice papers', 'Doubt-clearing sessions'],
      overview:   'Comprehensive board preparation covering all core subjects with a focus on concept clarity, exam technique and consistent practice.',
      forWhom:    'Students appearing for Class 10 board examinations who want structured guidance and regular assessment.',
    },
    {
      id:         'class-12-board',
      name:       'Class 12 — Board Preparation',
      board:      'CBSE / ICSE / State Board',
      classLevel: 'Class 12',
      subjects:   ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
      duration:   'Full Academic Session',
      mode:       'Offline (Classroom)',
      batch:      '[Batch timings]',
      features:   ['In-depth subject coverage', 'Practical preparation support', 'Previous year paper analysis', 'Regular mock tests'],
      overview:   'Detailed preparation for Class 12 board examinations with emphasis on understanding core concepts and exam-ready practice.',
      forWhom:    'Class 12 students (Science stream) preparing for board examinations.',
    },
    {
      id:         'foundation-8-9',
      name:       'Foundation Course — Class 8 & 9',
      board:      'CBSE / ICSE',
      classLevel: 'Class 8–9',
      subjects:   ['Mathematics', 'Science'],
      duration:   'Full Academic Session',
      mode:       'Offline (Classroom)',
      batch:      '[Batch timings]',
      features:   ['Strong conceptual foundation', 'Olympiad-level exposure', 'School exam preparation', 'Logical reasoning practice'],
      overview:   'Early foundation course designed to build strong basics in Mathematics and Science, preparing students for future competitive and board examinations.',
      forWhom:    'Students in Class 8 or 9 who want to build a strong academic foundation early.',
    },
    {
      id:         'competitive-jee',
      name:       'JEE Preparation',
      board:      'National',
      classLevel: 'Class 11–12 / Dropper',
      subjects:   ['Physics', 'Chemistry', 'Mathematics'],
      duration:   '1–2 Years',
      mode:       'Offline (Classroom)',
      batch:      '[Batch timings]',
      features:   ['JEE Main & Advanced syllabus', 'Problem-solving workshops', 'Full-length mock tests', 'Performance tracking'],
      overview:   'Focused preparation for JEE Main and Advanced with rigorous practice, concept-building sessions and regular performance evaluation.',
      forWhom:    'Students targeting admission to IITs, NITs and other top engineering institutions.',
    },
    {
      id:         'competitive-neet',
      name:       'NEET Preparation',
      board:      'National',
      classLevel: 'Class 11–12 / Dropper',
      subjects:   ['Physics', 'Chemistry', 'Biology'],
      duration:   '1–2 Years',
      mode:       'Offline (Classroom)',
      batch:      '[Batch timings]',
      features:   ['NCERT-aligned teaching', 'NEET-pattern mock tests', 'Biology practical support', 'Revision modules'],
      overview:   'Structured NEET coaching covering Physics, Chemistry and Biology with emphasis on NCERT mastery and exam-pattern practice.',
      forWhom:    'Students preparing for the National Eligibility cum Entrance Test for medical admissions.',
    },
  ],

  /* ── Faculty ── */
  faculty: [
    {
      name:           '[Faculty Name]',
      subject:        'Mathematics',
      qualification:  '[Qualification, e.g. M.Sc. Mathematics]',
      experience:     '[X]+ Years Teaching Experience',
      specialisation: 'Board & Competitive Mathematics',
      bio:            'A dedicated mathematics educator known for making complex problems accessible through clear, step-by-step explanation and consistent practice.',
      image:          'assets/images/faculty-1.jpg',
    },
    {
      name:           '[Faculty Name]',
      subject:        'Science',
      qualification:  '[Qualification, e.g. M.Sc. Physics]',
      experience:     '[X]+ Years Teaching Experience',
      specialisation: 'Physics & General Science',
      bio:            'An experienced science teacher who emphasises conceptual understanding and real-world application to help students grasp difficult topics.',
      image:          'assets/images/faculty-2.jpg',
    },
  ],

  /* ── Results ── */
  results: {
    hasResults: false,       // set to true when actual results are available
    heading:    'Our Approach to Student Success',
    subheading: 'We believe in building strong foundations that lead to consistent academic performance. Results are shared transparently when students achieve their goals.',
    toppers: [
      // Uncomment and fill when actual data is available:
      // { name: '[Student Name]', achievement: '[Score / Rank]', exam: '[Exam Name]', year: '[Year]', image: '' },
    ],
  },

  /* ── Testimonials ── */
  testimonials: {
    hasTestimonials: false,  // set to true when actual testimonials are collected
    items: [
      // Uncomment and fill with genuine testimonials:
      // { name: '[Student / Parent Name]', role: '[Class / Course]', quote: '[Genuine testimonial text]', image: '' },
    ],
  },

  /* ── Gallery ── */
  gallery: {
    categories: ['All', 'Classroom', 'Faculty', 'Students', 'Events', 'Campus'],
    images: [
      { src: 'assets/images/hero-classroom.jpg',   alt: 'Classroom teaching session',        category: 'Classroom' },
      { src: 'assets/images/about-institute.jpg',   alt: 'Institute building exterior',       category: 'Campus'    },
      { src: 'assets/images/gallery-library.jpg',   alt: 'Library and study area',            category: 'Campus'    },
      { src: 'assets/images/gallery-lab.jpg',        alt: 'Science laboratory',                category: 'Campus'    },
      { src: 'assets/images/faculty-1.jpg',          alt: 'Faculty member',                    category: 'Faculty'   },
      { src: 'assets/images/faculty-2.jpg',          alt: 'Faculty member',                    category: 'Faculty'   },
    ],
  },

  /* ── Facilities ── */
  facilities: [
    { icon: 'monitor',       label: 'Smart Classrooms',      desc: 'Well-equipped classrooms with modern teaching aids.'             },
    { icon: 'book-open',     label: 'Library & Study Area',  desc: 'Curated reference library for self-study and revision.'          },
    { icon: 'flask-conical', label: 'Science Laboratory',    desc: 'Practical lab facility for hands-on science learning.'           },
    { icon: 'wifi',          label: 'Digital Resources',     desc: 'Access to online learning material and recorded lectures.'       },
    { icon: 'clipboard-list',label: 'Test Centre',           desc: 'Dedicated space for regular assessments and mock examinations.'  },
    { icon: 'help-circle',   label: 'Doubt-Solving Room',   desc: 'Separate area for one-on-one doubt resolution with faculty.'     },
  ],

  /* ── FAQ ── */
  faq: [
    {
      q: 'What classes and examinations do you offer coaching for?',
      a: 'We offer coaching for Class 8 through 12 (CBSE / ICSE / State Board) as well as competitive exam preparation for JEE and NEET.',
    },
    {
      q: 'What is the batch size?',
      a: 'We maintain limited batch sizes to ensure personal attention and effective teaching. Specific batch strength is shared during the admission discussion.',
    },
    {
      q: 'Do you provide study material?',
      a: 'Yes, comprehensive study material including notes, worksheets and practice papers is provided as part of the course.',
    },
    {
      q: 'How are assessments conducted?',
      a: 'Regular chapter-wise tests, monthly assessments and full-length mock examinations are conducted with detailed performance reports shared with students and parents.',
    },
    {
      q: 'Is there a trial class available?',
      a: 'Yes, we encourage prospective students to attend a trial class before enrolling. Please contact our team to schedule one.',
    },
    {
      q: 'How can I enquire about admission?',
      a: 'You can fill the enquiry form on this website, call our office directly, or visit the institute during working hours.',
    },
  ],

  /* ── Legal ── */
  legal: {
    year: 2026,
    privacyUrl: '#',
    termsUrl:   '#',
    disclaimerUrl: '#',
  },
};
