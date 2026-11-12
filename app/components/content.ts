export type CourseCategory = {
  number: string;
  title: string;
  description: string;
};

export type LearningStep = {
  number: string;
  title: string;
  description: string;
  color: "blue" | "coral" | "yellow";
};

export type LinkItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: LinkItem[];
};

export const courseCategories: CourseCategory[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

export const learningSteps: LearningStep[] = [
  {
    number: "STEP 01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
    color: "blue",
  },
  {
    number: "STEP 02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    color: "coral",
  },
  {
    number: "STEP 03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    color: "yellow",
  },
];

export const studentPhotos = [
  { src: "/images/student-1.jpg", alt: "Student sketching in a notebook" },
  { src: "/images/student-2.jpg", alt: "Teacher leading a workshop" },
  { src: "/images/student-3.jpg", alt: "Student learning at a desk" },
  { src: "/images/student-4.jpg", alt: "Creative professional working" },
  { src: "/images/student-5.jpg", alt: "Design team collaborating" },
  { src: "/images/student-6.jpg", alt: "Student studying on a laptop" },
  { src: "/images/student-7.jpg", alt: "Instructor sharing an idea" },
  { src: "/images/student-8.jpg", alt: "Student taking notes" },
  { src: "/images/student-9.jpg", alt: "Learners working together" },
  { src: "/images/student-10.jpg", alt: "Teacher working with a student" },
  { src: "/images/student-11.jpg", alt: "Student reading in a bright room" },
  { src: "/images/student-12.jpg", alt: "Creative team planning a project" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "EXPLORE",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#people" },
      { label: "For Teams", href: "#people" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "#contact" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#contact" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#contact" },
      { label: "Privacy", href: "#contact" },
    ],
  },
];
