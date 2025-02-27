export interface BottomGroup {
  title: string;
  href?: string;
  description: string;
  children: {
    title: string;
    href: string;
    heading?: boolean;
  }[][];
}

export interface TopGroup {
  title: string;
  children: (
    | {
        title: string;
        href: string;
        type: "button";
      }
    | {
        title: string;
        href: string;
        type: "link";
      }
    | {
        type: "separator";
      }
  )[];
}

export const topGroups: TopGroup[] = [
  {
    title: "Info For",
    children: [
      { title: "Future Students", href: "https://www.messiah.edu/future-students", type: "link" },
      { title: "Current Students", href: "https://www.messiah.edu/current-students", type: "link" },
      { title: "Visitors & Neighbors", href: "https://www.messiah.edu/visitors-neighbors", type: "link" },
      { title: "Alumni & Parents", href: "https://www.messiah.edu/alumni-parents", type: "link" },
      { title: "Faculty & Staff", href: "https://www.messiah.edu/faculty-staff", type: "link" },
      { title: "Español", href: "https://www.messiah.edu/admision", type: "link" },
      { type: "separator" },
      { title: "Apply", href: "https://www.messiah.edu/applytoday", type: "button" },
      { title: "Visit", href: "https://www.messiah.edu/visit", type: "button" },
      { title: "Request Info", href: "https://www.messiah.edu/homepage/1553/request_information", type: "button" },
    ],
  },
  {
    title: "Quick Links",
    children: [
      { title: "Campus Directory", href: "https://www.messiah.edu/campus_directory", type: "link" },
      { title: "News", href: "https://www.messiah.edu/news", type: "link" },
      { title: "Events", href: "https://www.messiah.edu/events", type: "link" },
      { title: "Contact Us", href: "https://www.messiah.edu/homepage/3099/contact_us", type: "link" },
      { type: "separator" },
      { title: "Apply", href: "https://www.messiah.edu/applytoday", type: "button" },
      { title: "Visit", href: "https://www.messiah.edu/visit", type: "button" },
      { title: "Request Info", href: "https://www.messiah.edu/homepage/1553/request_information", type: "button" },
    ],
  },
];

export const bottomGroups: BottomGroup[] = [
  {
    title: "About",
    href: "https://www.messiah.edu/about",
    description: "A passion for Christian community and our shared faith make us who we are.",
    children: [
      [
        { title: "Overview", href: "https://www.messiah.edu/about" },
        { title: "Who we are", href: "https://www.messiah.edu/info/20000/about#overview" },
        { title: "Our campus", href: "https://www.messiah.edu/info/20000/about#campus" },
        { title: "Faith community", href: "https://www.messiah.edu/info/20000/about#faith" },
        { title: "See anew", href: "/about#see-anew" },
        { title: "Our history", href: "/about#our-history" },
      ],
      [
        { title: "Recognitions", href: "/" },
        { title: "At a glance", href: "/" },
        { title: "News and events", href: "/" },
        { title: "Accreditation", href: "/" },
        { title: "University leadership", href: "/" },
        { title: "Student consumer info", href: "/" },
      ],
    ],
  },
  {
    title: "Academics",
    description:
      "Messiah University is nationally recognized for its integration of top-tier academics and Christian faith. ",
    children: [
      [
        { title: "Undergraduate", href: "/academics/undergraduate", heading: true },
        { title: "Majors and minors", href: "/" },
        { title: "Accelerated options", href: "/academics/undergraduate#accelerated-options" },
        {
          title: "Academics opportunities",
          href: "/academics/undergraduate#academic-opportunities",
        },
        { title: "Academic support", href: "/academics/undergraduate#academic-support" },
        { title: "Careers and outcomes", href: "/" },
        { title: "Study abroad", href: "/" },
      ],
      [
        { title: "Graduate", href: "/academics/graduate", heading: true },
        { title: "Degrees and certificates", href: "/academics/graduate#our-programs" },
        { title: "Academic distinctives", href: "/academics/graduate#why-messiah" },
        {
          title: "School of Graduate and Professional Studies",
          href: "/academics/graduate#graduate-school",
        },
        { title: "Career development", href: "/" },
      ],
      [
        { title: "Quicklinks", href: "/", heading: true },
        { title: "Library", href: "/" },
        { title: "Career & Professional Development Center", href: "/" },
        { title: "Schools and departments", href: "/" },
        { title: "University Honors Program", href: "/" },
        { title: "The Bridge Center for Continuing Education", href: "/" },
      ],
    ],
  },
  {
    title: "Admissions",
    description:
      "We educate strong servant leaders who combine professional expertise with a reconciling spirit. ",
    children: [
      [
        { title: "Undergraduate", href: "/", heading: true },
        { title: "Apply", href: "/" },
        { title: "Request information", href: "/" },
        { title: "Cost of tuition", href: "/" },
        { title: "Scholarships and grants", href: "/" },
        { title: "Meet your counselor", href: "/" },
        { title: "Admissions process", href: "/" },
        { title: "Accepted students", href: "/" },
      ],
      [
        { title: "Graduate", href: "/", heading: true },
        { title: "Apply", href: "/" },
        { title: "Request information", href: "/" },
        { title: "Tuition and aid", href: "/" },
        { title: "Admissions requirements", href: "/" },
        { title: "Accepted students", href: "/" },
      ],
      [
        { title: "Visit campus", href: "/", heading: true },
        { title: "Browse by event type", href: "/" },
        { title: "View upcoming events", href: "/" },
        { title: "View virtual tour", href: "/" },
        { title: "Directions", href: "/" },
        { title: "Campus Map", href: "/" },
      ],
    ],
  },
  {
    title: "Athletics",
    href: "/athletics-recreation",
    description:
      "Athletics serve as an exciting piece of our community and provide a common bond for school spirit. ",
    children: [
      [
        { title: "GoMessiah.com", href: "/", heading: true },
        { title: "Full calendar", href: "/" },
        { title: "GoMessiah.tv", href: "/" },
        { title: "Be recruited", href: "/" },
        { title: "Sports camps", href: "/" },
      ],
      [
        { title: "Sports & Recreation", href: "/athletics-recreation", heading: true },
        { title: "Club & rec sports", href: "/athletics-recreation#start" },
        { title: "Physical fitness", href: "/athletics-recreation#physical-fitness" },
        { title: "Game day", href: "/athletics-recreation#game-day" },
        { title: "Sports ministry", href: "/athletics-recreation#sports-ministry" },
      ],
    ],
  },
  {
    title: "Faith & Service",
    href: "/faith-service",
    description:
      "Our motto, 'Christ Preeminent', shapes every experience you'll have as a student at Messiah. ",
    children: [
      [
        { title: "Overview", href: "/faith-service" },
        { title: "Grow your faith", href: "/faith-service#grow-your-faith" },
        { title: "Service opportunities", href: "/faith-service#service-opportunities" },
      ],
      [
        { title: "Find a church", href: "/faith-service#find-your-church" },
        { title: "Faith in the classroom", href: "/faith-service#faith-in-the-classroom" },
      ],
    ],
  },
  {
    title: "Student Life",
    href: "/student-life",
    description:
      "Messiah’s campus is an active, busy place where you’ll have fun and make lifelong friendships. ",
    children: [
      [
        { title: "Overview", href: "/student-life" },
        { title: "Life on campus", href: "/student-life#overview" },
        { title: "Things to do", href: "/student-life#things-to-do" },
        { title: "Your new home", href: "/student-life#things-to-do" },
        { title: "Living on campus", href: "/student-life#resident-life-dining" },
      ],
      [
        { title: "Frequently asked questions", href: "/" },
        { title: "Dining facilities", href: "/student-life#diversity" },
        { title: "A diverse community", href: "/" },
        { title: "Student support ", href: "/student-life#support" },
      ],
    ],
  },
];
