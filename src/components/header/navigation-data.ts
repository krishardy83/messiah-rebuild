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
        { title: "See anew", href: "https://www.messiah.edu/info/20000/about#anew" },
        { title: "Our history", href: "https://www.messiah.edu/info/20000/about#history" },
      ],
      [
        { title: "Recognitions", href: "https://www.messiah.edu/info/20020/recognitions" },
        { title: "At a glance", href: "https://www.messiah.edu/info/20002/college_profile" },
        { title: "News and events", href: "https://www.messiah.edu/info/20015/news_and_events" },
        { title: "Accreditation", href: "https://www.messiah.edu/info/20012/accreditation" },
        { title: "University leadership", href: "https://www.messiah.edu/info/20016/college_leadership" },
        { title: "Student consumer info", href: "https://www.messiah.edu/info/20000/about/1990/student_consumer_info" },
      ],
    ],
  },
  {
    title: "Academics",
    description:
      "Messiah University is nationally recognized for its integration of top-tier academics and Christian faith. ",
    children: [
      [
        { title: "Undergraduate", href: "https://www.messiah.edu/academics?type=ug", heading: true },
        { title: "Majors and minors", href: "https://www.messiah.edu/majors-minors-programs" },
        { title: "Accelerated options", href: "https://www.messiah.edu/academics?type=ug#accelerated-options" },
        {
          title: "Academics opportunities",
          href: "https://www.messiah.edu/academics?type=ug#opportunities",
        },
        { title: "Academic support", href: "https://www.messiah.edu/academics?type=ug#academic-support" },
        { title: "Careers and outcomes", href: "https://www.messiah.edu/career-outcomes" },
        { title: "Study abroad", href: "https://www.messiah.edu/study-abroad" },
      ],
      [
        { title: "Graduate", href: "https://www.messiah.edu/academics?type=grad", heading: true },
        { title: "Degrees and certificates", href: "https://www.messiah.edu/academics?type=grad#our-programs" },
        { title: "Academic distinctives", href: "https://www.messiah.edu/academics?type=grad#why-messiah" },
        {
          title: "School of Graduate and Professional Studies",
          href: "https://www.messiah.edu/academics?type=grad#graduate-school",
        },
        { title: "Career development", href: "https://www.messiah.edu/grad-careers" },
      ],
      [
        { title: "Quicklinks", href: "/", heading: true },
        { title: "Library", href: "https://www.messiah.edu/info/21164/library" },
        { title: "Career & Professional Development Center", href: "https://www.messiah.edu/info/23055/career_and_professional_development_center" },
        { title: "Schools and departments", href: "https://www.messiah.edu/info/20029/schools_and_departments" },
        { title: "University Honors Program", href: "https://www.messiah.edu/info/20098/college_honors_program" },
        { title: "The Bridge Center for Continuing Education", href: "https://www.messiah.edu/BridgeCenter" },
      ],
    ],
  },
  {
    title: "Admissions",
    description:
      "We educate strong servant leaders who combine professional expertise with a reconciling spirit. ",
    children: [
      [
        { title: "Undergraduate", href: "https://www.messiah.edu/info/21083/undergraduate_admissions", heading: true },
        { title: "Apply", href: "https://www.messiah.edu/applytoday" },
        { title: "Request information", href: "https://www.messiah.edu/request-info" },
        { title: "Cost of tuition", href: "https://www.messiah.edu/info/21344/tuition_and_aid" },
        { title: "Scholarships and grants", href: "https://www.messiah.edu/info/21379/types_of_aid" },
        { title: "Meet your counselor", href: "https://www.messiah.edu/info/21356/meet_your_counselor" },
        { title: "Admissions process", href: "https://www.messiah.edu/info/21083/undergraduate_admissions" },
        { title: "Accepted students", href: "https://www.messiah.edu/info/21342/accepted_students" },
        { title: "Español", href: "https://www.messiah.edu/admision" },
      ],
      [
        { title: "Graduate", href: "https://www.messiah.edu/info/21084/graduate_admissions", heading: true },
        { title: "Apply", href: "https://www.messiah.edu/info/21329/apply" },
        { title: "Request information", href: "https://www.messiah.edu/grad-rfi" },
        { title: "Tuition and aid", href: "https://www.messiah.edu/info/22863/cost_and_aid" },
        { title: "Accepted students", href: "https://www.messiah.edu/grad-accepted" },
      ],
      [
        { title: "Visit campus", href: "https://www.messiah.edu/visit", heading: true },
        { title: "Browse by event type", href: "https://www.messiah.edu/visit#event-types" },
        { title: "View upcoming events", href: "https://www.messiah.edu/visit#calendar" },
        { title: "View virtual tour", href: "https://tour.messiah.edu/" },
        { title: "Directions", href: "https://www.messiah.edu/info/21343/visit_campus/13/directions" },
        { title: "Campus Map", href: "https://tour.messiah.edu/campus-map" },
      ],
    ],
  },
  {
    title: "Athletics",
    href: "https://www.messiah.edu/athletics-and-recreation",
    description:
      "Athletics serve as an exciting piece of our community and provide a common bond for school spirit. ",
    children: [
      [
        { title: "GoMessiah.com", href: "http://www.gomessiah.com/", heading: true },
        { title: "Full calendar", href: "https://gomessiah.com/calendar.aspx" },
        { title: "GoMessiah.tv", href: "http://gomessiah.com/tv" },
        { title: "Be recruited", href: "http://gomessiah.com/sports/2014/8/5/GEN_0805140853.aspx" },
        { title: "Sports camps", href: "https://gomessiah.com/sports/2023/2/8/messiah-athletics-camps.aspx" },
      ],
      [
        { title: "Sports & Recreation", href: "https://www.messiah.edu/athletics-and-recreation", heading: true },
        { title: "Club & rec sports", href: "https://www.messiah.edu/athletics-and-recreation#sports" },
        { title: "Physical fitness", href: "https://www.messiah.edu/athletics-and-recreation#fitness" },
        { title: "Game day", href: "https://www.messiah.edu/athletics-and-recreation#game-day" },
        { title: "Sports ministry", href: "https://www.messiah.edu/athletics-and-recreation#sports-ministry" },
      ],
    ],
  },
  {
    title: "Faith & Service",
    href: "https://www.messiah.edu/faithandservice",
    description:
      "Our motto, 'Christ Preeminent', shapes every experience you'll have as a student at Messiah. ",
    children: [
      [
        { title: "Overview", href: "https://www.messiah.edu/faithandservice" },
        { title: "Grow your faith", href: "https://www.messiah.edu/faithandservice#grow" },
        { title: "Service opportunities", href: "https://www.messiah.edu/faithandservice#service" },
      ],
      [
        { title: "Find a church", href: "https://www.messiah.edu/faithandservice#church" },
        { title: "Faith in the classroom", href: "https://www.messiah.edu/faithandservice#classroom" },
      ],
    ],
  },
  {
    title: "Student Life",
    href: "https://www.messiah.edu/studentlife",
    description:
      "Messiah’s campus is an active, busy place where you’ll have fun and make lifelong friendships. ",
    children: [
      [
        { title: "Overview", href: "https://www.messiah.edu/studentlife" },
        { title: "Life on campus", href: "https://www.messiah.edu/student-life#student-life" },
        { title: "Things to do", href: "https://www.messiah.edu/student-life#to-do" },
        { title: "Your new home", href: "https://www.messiah.edu/student-life#home" },
        { title: "Living on campus", href: "https://www.messiah.edu/student-life#res-life" },
      ],
      [
        { title: "Frequently asked questions", href: "https://www.messiah.edu/student-life#faq" },
        { title: "Dining facilities", href: "https://www.messiah.edu/student-life#dining" },
        { title: "A diverse community", href: "https://www.messiah.edu/student-life#diversity" },
        { title: "Student support ", href: "https://www.messiah.edu/student-life#support" },
      ],
    ],
  },
];
