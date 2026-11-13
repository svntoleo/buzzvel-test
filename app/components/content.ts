import studentPhoto1 from "../assets/images/student-1.jpg";
import studentPhoto2 from "../assets/images/student-2.jpg";
import studentPhoto3 from "../assets/images/student-3.jpg";
import studentPhoto4 from "../assets/images/student-4.jpg";
import studentPhoto5 from "../assets/images/student-5.jpg";
import studentPhoto6 from "../assets/images/student-6.jpg";
import studentPhoto7 from "../assets/images/student-7.jpg";
import studentPhoto8 from "../assets/images/student-8.jpg";
import studentPhoto9 from "../assets/images/student-9.jpg";
import studentPhoto10 from "../assets/images/student-10.jpg";
import studentPhoto11 from "../assets/images/student-11.jpg";
import studentPhoto12 from "../assets/images/student-12.jpg";
import avatar1 from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";
import avatar4 from "../assets/images/avatar-4.jpg";

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
  { src: studentPhoto1, alt: "Student sketching in a notebook" },
  { src: studentPhoto2, alt: "Teacher leading a workshop" },
  { src: studentPhoto3, alt: "Student learning at a desk" },
  { src: studentPhoto4, alt: "Creative professional working" },
  { src: studentPhoto5, alt: "Design team collaborating" },
  { src: studentPhoto6, alt: "Student studying on a laptop" },
  { src: studentPhoto7, alt: "Instructor sharing an idea" },
  { src: studentPhoto8, alt: "Student taking notes" },
  { src: studentPhoto9, alt: "Learners working together" },
  { src: studentPhoto10, alt: "Teacher working with a student" },
  { src: studentPhoto11, alt: "Student reading in a bright room" },
  { src: studentPhoto12, alt: "Creative team planning a project" },
];

export const avatarPhotos = [avatar1, avatar2, avatar3, avatar4];

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
