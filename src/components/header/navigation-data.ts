import type { BottomGroup } from "./bottom-group.astro";
import type { TopGroup } from "./top-group.astro";

export const topGroups: TopGroup[] = [
  {
    title: "Info For",
    children: [
      { title: "Future Students", href: "/", type: "link" },
      { title: "Current Students", href: "/", type: "link" },
      { title: "Visitors & Neighbors", href: "/", type: "link" },
      { title: "Alumni & Parents", href: "/", type: "link" },
      { title: "Faculty & Steighbors", href: "/", type: "link" },
      { type: "separator" },
      { title: "Apply", href: "/", type: "button" },
      { title: "Visit", href: "/", type: "button" },
      { title: "Request Info", href: "/", type: "button" },
    ],
  },
  {
    title: "Quick Links",
    children: [
      { title: "Commencement", href: "/", type: "link" },
      { title: "Campus Directory", href: "/", type: "link" },
      { title: "News", href: "/", type: "link" },
      { title: "Events", href: "/", type: "link" },
      { title: "Contact Us", href: "/", type: "link" },
      { type: "separator" },
      { title: "Apply", href: "/", type: "button" },
      { title: "Visit", href: "/", type: "button" },
      { title: "Request Info", href: "/", type: "button" },
    ],
  },
];

export const bottomGroups: BottomGroup[] = [
  {
    title: "About",
    href: "/",
    description: "A passion for Christian community and our shared faith make us who we are.",
    children: [
      [
        { title: "Overview", href: "/" },
        { title: "Who we are", href: "/" },
        { title: "Our campus", href: "/" },
        { title: "Faith community", href: "/" },
        { title: "See anew", href: "/" },
        { title: "Our history", href: "/" },
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
    href: "/",
    description:
      "Messiah University is nationally recognized for its integration of top-tier academics and Christian faith. ",
    children: [
      [
        { title: "Undergraduate", href: "/", heading: true },
        { title: "Majors and minors", href: "/" },
        { title: "Accelerated options", href: "/" },
        { title: "Academics opportunities", href: "/" },
        { title: "Academic support", href: "/" },
        { title: "Careers and outcomes", href: "/" },
        { title: "Study abroad", href: "/" },
      ],
      [
        { title: "Graduate", href: "/", heading: true },
        { title: "Degrees and certificates", href: "/" },
        { title: "Academic distinctives", href: "/" },
        { title: "School of Graduate and Professional Studies", href: "/" },
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
    href: "/",
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
    href: "/",
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
        { title: "Sports & Recreation", href: "/", heading: true },
        { title: "Club & rec sports", href: "/" },
        { title: "Physical fitness", href: "/" },
        { title: "Game day", href: "/" },
        { title: "Sports ministry", href: "/" },
      ],
    ],
  },
  {
    title: "Faith & Service",
    href: "/",
    description:
      "Our motto, 'Christ Preeminent', shapes every experience you'll have as a student at Messiah. ",
    children: [
      [
        { title: "Overview", href: "/" },
        { title: "Grow your faith", href: "/" },
        { title: "Service opportunities", href: "/" },
      ],
      [
        { title: "Find a church", href: "/" },
        { title: "Faith in the classroom", href: "/" },
      ],
    ],
  },
  {
    title: "Student Life",
    href: "/",
    description:
      "Messiah’s campus is an active, busy place where you’ll have fun and make lifelong friendships. ",
    children: [
      [
        { title: "Life on campus", href: "/" },
        { title: "Things to do", href: "/" },
        { title: "Your new home", href: "/" },
        { title: "Living on campus", href: "/" },
      ],
      [
        { title: "Frequently asked questions", href: "/" },
        { title: "Dining facilities", href: "/" },
        { title: "A diverse community", href: "/" },
        { title: "Student support ", href: "/" },
      ],
    ],
  },
];
