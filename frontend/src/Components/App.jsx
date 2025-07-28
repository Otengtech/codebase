import React from "react";
import "../App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Course from "../Pages/CoursePage";
import QuizSection from "../Pages/QuizSection";
import Blog from "../Pages/Blog";

// Course Components
import Html from "./Html/Html";
import Css from "./Css/Css";
import JavascriptCourseLanding from "./Javascript/Javascript";
import NodejsCourseLanding from "./NodeJs/Nodejs";
import TailwindCourseLanding from "./TailwindCss/Tailwind";
import MongoDBCourseLanding from "./MongoDB/MongoDB.jsx";

// Blog Posts
import ClosurePost from "./Posts/ClosurePost";
import FlexboxBlogPost from "./Posts/Flexbox";
import TailwindTips from "./Posts/TailwindTips";
import BlogPost from "./Posts/Await";

// Quiz Starters & Quiz Pages
import HtmlQuizStart from "./QuizPages/Html/HtmlQuizStart";
import Quiz from "./QuizPages/Html/HtmlQuiz";
import CssQuizStart from "./QuizPages/Css/CssQuizStarter";
import CssQuiz from "./QuizPages/Css/CssQuiz";
import JavascriptQuizStart from "./QuizPages/Javascript/JsQuizStart";
import JsQuiz from "./QuizPages/Javascript/JsQuiz";
import NodejsQuizStart from "./QuizPages/NodeJs/nodejsQuizStart";
import NodeQuiz from "./QuizPages/NodeJs/nodejsQuiz";
import MdbQuizStart from "./QuizPages/MongoDB/MdbQuizStart";
import MdbQuiz from "./QuizPages/MongoDB/MdbQuiz";
import TailwindQuizStart from "./QuizPages/TailwinCss/jQuizStart";
import TailwindQuiz from "./QuizPages/TailwinCss/jQuiz";

// Home Sections
import About from "./Home/About";
import ContactUs from "./Home/Contact";
import MoveTop from "./Home/MoveTop";
import ScrollToTop from "./Home/ScrollToTop";
import ReviewSection from "./Home/Reviews.jsx";
import CourseLayout from "../CoursesLayouts/HtmlCourseLayout.jsx";

const App = () => {
  return (
    <Router>
      <MoveTop />
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Course Landing Pages */}
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<JavascriptCourseLanding />} />
        <Route path="/nodejs" element={<NodejsCourseLanding />} />
        <Route path="/tailwindcss" element={<TailwindCourseLanding />} />
        <Route path="/mongodb" element={<MongoDBCourseLanding />} />

        {/* General Pages */}
        <Route path="/course" element={<Course />} />
        <Route path="/quiz" element={<QuizSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Blog Posts */}
        <Route path="/closurepost" element={<ClosurePost />} />
        <Route path="/flexbox" element={<FlexboxBlogPost />} />
        <Route path="/tailwindtips" element={<TailwindTips />} />
        <Route path="/async" element={<BlogPost />} />

        {/* Quiz Starters */}
        <Route path="/htmlquizstart" element={<HtmlQuizStart />} />
        <Route path="/cssquizstart" element={<CssQuizStart />} />
        <Route path="/jsquizstart" element={<JavascriptQuizStart />} />
        <Route path="/nodejsquizstart" element={<NodejsQuizStart />} />
        <Route path="/mdbquizstart" element={<MdbQuizStart />} />
        <Route path="/tquizstart" element={<TailwindQuizStart />} />

        {/* Quizzes */}
        <Route path="/htmlquiz" element={<Quiz />} />
        <Route path="/cssquiz" element={<CssQuiz />} />
        <Route path="/jsquiz" element={<JsQuiz />} />
        <Route path="/nodejsquiz" element={<NodeQuiz />} />
        <Route path="/mdbquiz" element={<MdbQuiz />} />
        <Route path="/tquiz" element={<TailwindQuiz />} />
        <Route path="/reviews" element={<ReviewSection />} />

        {/* Courses Layouts */}
        <Route path="/htmlcourse" element={<CourseLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
