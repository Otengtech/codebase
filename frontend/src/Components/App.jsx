import React, {useState} from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Html from "./Html/Html";
import Css from "./Css/Css";
import JavascriptCourseLanding from "./Javascript/Javascript";
import NodejsCourseLanding from "./NodeJs/Nodejs";
import TailwindCourseLanding from "./TailwindCss/Tailwind";
import MongoDBCourseLanding from "./MongoDB/MongoDB.jsx";
import Course from "../Pages/CoursePage";
import QuizSection from "../Pages/QuizSection";
import Blog from "../Pages/Blog";
import MoveTop from "./Home/MoveTop";
import ScrollToTop from "./Home/ScrollToTop";
import ClosurePost from "./Posts/ClosurePost";
import FlexboxBlogPost from "./Posts/Flexbox";
import TailwindTips from "./Posts/TailwindTips";
import BlogPost from "./Posts/Await";
import Quiz from "./QuizPages/Html/HtmlQuiz";
import HtmlQuizStart from "./QuizPages/Html/HtmlQuizStart";
import CssQuiz from "./QuizPages/Css/CssQuiz";
import CssQuizStart from "./QuizPages/Css/CssQuizStarter";
import JsQuiz from "./QuizPages/Javascript/JsQuiz";
import JavascriptQuizStart from "./QuizPages/Javascript/JsQuizStart";
import NodeQuiz from "./QuizPages/NodeJs/nodejsQuiz";
import NodejsQuizStart from "./QuizPages/NodeJs/nodejsQuizStart";
import MdbQuiz from "./QuizPages/MongoDB/MdbQuiz";
import MdbQuizStart from "./QuizPages/MongoDB/MdbQuizStart";
import TailwindQuiz from "./QuizPages/TailwinCss/jQuiz";
import TailwindQuizStart from "./QuizPages/TailwinCss/jQuizStart";
import About from "./Home/About";
import ContactUs from "./Home/Contact";

const App = () => {
  return (
    <>
    <MoveTop />
    <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Components  */}
        <Route path="/login" element={<Login />} />
        <Route path="/javascript" element={<JavascriptCourseLanding />} />
        <Route path="/nodejs" element={<NodejsCourseLanding />} />
        <Route path="/tailwindcss" element={<TailwindCourseLanding />} />
        <Route path="/mongodb" element={<MongoDBCourseLanding />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Other pages */}
        <Route path="/closurepost" element={<ClosurePost />} />
        <Route path="/flexbox" element={<FlexboxBlogPost />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tailwindtips" element={<TailwindTips />} />
        <Route path="/async" element={<BlogPost />} />
        <Route path="/html" element={<Html />} />
        <Route path="/quiz" element={<QuizSection />} />
        <Route path="/css" element={<Css />} />
        {/* Quiz Components here */}
        <Route path="/htmlquiz" element={<Quiz />} />
        <Route path="/htmlquizstart" element={<HtmlQuizStart />} />
        <Route path="/cssquiz" element={<CssQuiz />} />
        <Route path="/cssquizstart" element={<CssQuizStart />} />
        <Route path="/jsquiz" element={<JsQuiz />} />
        <Route path="/jsquizstart" element={<JavascriptQuizStart />} />
        <Route path="/nodejsquiz" element={<NodeQuiz />} />
        <Route path="/nodejsquizstart" element={<NodejsQuizStart />} />
        <Route path="/mdbquiz" element={<MdbQuiz />} />
        <Route path="/mdbquizstart" element={<MdbQuizStart />} />
        <Route path="/tquiz" element={<TailwindQuiz />} />
        <Route path="/tquizstart" element={<TailwindQuizStart />} />
      </Routes>
    </>
  );
};

export default App;
