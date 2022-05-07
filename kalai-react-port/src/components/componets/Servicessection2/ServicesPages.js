import React, { useEffect } from "react";
import "./styles/Servicepage.scss";
import reactjs from "../../../assets/kalai-port/rectjs2.png";
import html from "../../../assets/kalai-port/html-img1.png";
import css from "../../../assets/kalai-port/css-ima1.png";
import sass from "../../../assets/kalai-port/sass_img1.png";
import javascript from "../../../assets/kalai-port/javascript-img1.png";
import bootstrap from "../../../assets/kalai-port/bootstrap-img1.png";
import redux from "../../../assets/kalai-port/redux .png";
import context from "../../../assets/kalai-port/context.png";
import ui from "../../../assets/kalai-port/uiux.png";
import figma from "../../../assets/kalai-port/figma.png";
import github from "../../../assets/kalai-port/github.png";
import resposive from "../../../assets/kalai-port/resposive.png";
import resume from "../../../assets/Resume/kalai-resume.pdf";
import { ToastContainer, toast } from "react-toastify";
import success from "../../../assets/kalai-port/succes.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Section2Mobile from "../section2/component/Section2Mobile";
function ServicesPages({ color }) {
    const notification = () => toast("Download Resume Successfuly!");
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="d-none d-lg-block">
                <ToastContainer />
                <div className="content-section mb-5">
                    <div className="content-section-left">
                        <h1
                            className="my"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <span
                                className="aw"
                                style={{ color: color, fontWeight: 700 }}
                            >
                                My Aw
                            </span>
                            <span>esome</span>
                        </h1>
                        <h1
                            className="service mt-3"
                            data-aos="fade-down-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            SKILLS
                        </h1>
                        <p
                            className="loreams mt-3"
                            data-aos="fade-up-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            Ability to{" "}
                            <span style={{ color: color }}>
                                quickly grasp technical
                            </span>{" "}
                            aspects and face new challenges.
                            <span style={{ color: color }}>
                                {" "}
                                Very competitive
                            </span>{" "}
                            and adaptable to a{" "}
                            <span style={{ color: color }}>
                                challenging environment.
                            </span>
                        </p>
                        <button
                            className="download mt-3"
                            data-aos="flip-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <a
                                href={resume}
                                download="kalaiportfolio"
                                onClick={notification}
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                }}
                            >
                                Download CV
                            </a>
                        </button>
                    </div>
                    <div
                        className="content-section-right"
                        data-aos="fade-down"
                        data-aos-duration="3000"
                    >
                        <img src={success} />
                    </div>
                </div>
                <div className="service-page">
                    <div className="inside-images mb-5">
                        <div
                            className="left-image-page mb-5 mt-4"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <img
                                src={reactjs}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                React Developer
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    React. js is an open-source JavaScript
                                </span>{" "}
                                library that is used for building user
                                interfaces specifically for{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    single-page applications.
                                </span>{" "}
                                It's used for handling the{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    view layer for web and mobile apps.
                                </span>{" "}
                                React also allows us to{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    create reusable UI components.
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                data-aos="fade-left"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>
                    </div>
                    {/* reactjs redux */}
                    <div className="inside-images mt-5 mb-5">
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-left"
                                data-aos-duration="3000"
                            >
                                {" "}
                                React Redux
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    React Redux
                                </span>{" "}
                                is the official React binding for Redux.
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    React components to read data from a Redux
                                    Store,
                                </span>
                                and{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    dispatch Actions to the Store to update data
                                </span>
                                . Redux helps apps to scale by providing a
                                sensible way to{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    manage state
                                </span>{" "}
                                through a unidirectional{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    data flow model.
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                                data-bs-target="#staticBackdrop1"
                            >
                                Read More....
                            </button>
                        </div>

                        <div
                            className="left-image-page "
                            data-aos="fade-left"
                            data-aos-duration="3000"
                        >
                            <img
                                src={redux}
                                alt="no Images"
                                className="rectj"
                            />
                        </div>
                    </div>

                    {/* reactjs contextapi */}

                    <div className="inside-images mb-5">
                        <div
                            className="left-image-page mb-5 mt-4"
                            data-aos="fade-left"
                            data-aos-duration="3000"
                        >
                            <img
                                src={context}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                React ContextApi
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    The React Context API{" "}
                                </span>
                                is a way for a React app to effectively produce
                                <span style={{ color: color, fontWeight: 700 }}>
                                    global variables
                                </span>{" "}
                                that can be passed around.{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    This is the alternative to "prop drilling"
                                </span>{" "}
                                or{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    moving props from grandparent to child to
                                    parent
                                </span>
                                , and so on. Context is also touted as an
                                easier, lighter approach to{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    state management using Redux.
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop2"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>
                    </div>

                    {/* javascript contexts */}

                    <div className="inside-images mt-5 mb-5">
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                JavaScript
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    Javascript is used by programmers
                                </span>{" "}
                                across the world to create d
                                <span style={{ color: color, fontWeight: 700 }}>
                                    ynamic and interactive web content
                                </span>{" "}
                                like applications and browsers.
                                <span style={{ color: color, fontWeight: 700 }}>
                                    JavaScript is so popular
                                </span>{" "}
                                that it's the most used programming language in
                                the world,{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    used as a client-side programming language
                                </span>{" "}
                                all websites.
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-aos="fade-left"
                                data-aos-duration="3000"
                                data-bs-target="#staticBackdrop3"
                            >
                                Read More....
                            </button>
                        </div>

                        <div
                            className="left-image-page"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <img
                                src={javascript}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                    </div>

                    {/* html contexts */}

                    <div className="inside-images mb-5">
                        <div
                            className="left-image-page mb-5 mt-4"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
                            <img
                                src={html}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                HTML
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    HTML (HyperText Markup Language) is the code
                                </span>{" "}
                                that is{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    used to structure a web page and its
                                    content.
                                </span>{" "}
                                For example, content could be structured within
                                a set of paragraphs,{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    a list of bulleted points
                                </span>
                                , or using images and{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    data tables
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop4"
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>
                    </div>

                    {/* CSS START */}

                    <div className="inside-images mt-5 mb-5">
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-left"
                                data-aos-duration="3000"
                            >
                                CSS
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    The CSS fundamentals like the box model
                                </span>
                                , cascade and specificity,{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    flexbox
                                </span>
                                ,{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    grid and z-index
                                </span>
                                . And, along with these fundamentals, you'll
                                learn about{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    functions, color types, gradients, logical
                                    properties
                                </span>{" "}
                                and inheritance to make you a well-rounded{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    front-end developer
                                </span>
                                , ready to take on any user interface.
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop5"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>

                        <div
                            className="left-image-page"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <img src={css} alt="no Images" className="rectjs" />
                        </div>
                    </div>

                    {/* sass start context */}

                    <div className="inside-images mb-5 ">
                        <div
                            className="left-image-page mb-5 mt-4"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
                            <img
                                src={sass}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                SASS
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-left"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    Sass (which stands for 'Syntactically
                                    awesome style sheets){" "}
                                </span>
                                is an extension of CSS that enables you to use
                                things like variables,{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    nested rules, inline imports and more.
                                </span>{" "}
                                It also helps to keep things organised and
                                allows you to create style sheets faster.{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    Sass is compatible with all versions of CSS.
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop6"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>
                    </div>

                    {/* BOOTSTRAP CONTEXT */}

                    <div className="inside-images mt-5 mb-5">
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-left"
                                data-aos-duration="3000"
                            >
                                Bootstrap
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                Bootstrap is a{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    free and open source front end development
                                </span>{" "}
                                framework for the{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    creation of websites
                                </span>{" "}
                                and web apps. The{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    Bootstrap framework is built on HTML, CSS,
                                </span>{" "}
                                and
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    JavaScript (JS) to facilitate the
                                    development
                                </span>{" "}
                                of responsive,{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    mobile-first sites
                                </span>{" "}
                                and apps.
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop7"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>

                        <div
                            className="left-image-page "
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <img
                                src={bootstrap}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                    </div>

                    {/* figma start text */}

                    <div className="inside-images">
                        <div
                            className="left-image-page mb-5 mt-4"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <img
                                src={figma}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                Figma
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    Figma is a powerful design tool
                                </span>{" "}
                                that helps you to create anything:{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    websites, applications, logos,
                                </span>{" "}
                                and much more. By learning to use Figma, you'll
                                take your{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    first steps into User Interface Design
                                </span>{" "}
                                and{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    User Experience Design.
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop8"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>
                    </div>
                    {/* UI AND UX DESIGNS STARTTEXTS */}

                    <div className="inside-images mt-5 mb-5">
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                UI/UX
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    A UI, UX, and front-end web developer
                                </span>{" "}
                                is{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    responsible
                                </span>{" "}
                                for applying interactive and visual design
                                principles on websites and web applications for
                                a positive and cohesive user experience. These
                                <span style={{ color: color, fontWeight: 700 }}>
                                    developers use HTML, CSS, and other design
                                    tools{" "}
                                </span>{" "}
                                to achieve responsive designs.
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop9"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>

                        <div
                            className="left-image-page"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            <img src={ui} alt="no Images" className="rectjs" />
                        </div>
                    </div>

                    {/* github text start */}

                    <div className="inside-images">
                        <div
                            className="left-image-page mb-5 mt-4"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <img
                                src={github}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                Github
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-right"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    GitHub is a code hosting platform
                                </span>{" "}
                                for version control and collaboration. It lets
                                you and others work together on{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    projects from anywhere
                                </span>
                                . This tutorial teaches you GitHub essentials
                                like
                                <span style={{ color: color, fontWeight: 700 }}>
                                    repositories, branches, commits, and pull
                                    requests.
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop10"
                                data-aos="fade-left"
                                data-aos-duration="3000"
                            >
                                Read More....
                            </button>
                        </div>
                    </div>

                    {/* resposive texts */}

                    <div className="inside-images mt-5">
                        <div className="right-content-page mb-5 mt-4">
                            <h1
                                style={{ color: color }}
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                Resposive Ui Design's
                            </h1>
                            <p
                                className="react mt-3"
                                data-aos="fade-down"
                                data-aos-duration="3000"
                            >
                                <span style={{ color: color, fontWeight: 700 }}>
                                    {" "}
                                    Responsive web design (RWD)
                                </span>{" "}
                                is a web development approach that{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    creates dynamic changes
                                </span>{" "}
                                to the appearance of a website, depending on the
                                screen size and orientation of{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    the device being used to view it.
                                </span>
                            </p>

                            <button
                                className="redamore mt-1 mb-3 "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop11"
                            >
                                Read More....
                            </button>
                        </div>

                        <div
                            className="left-image-page"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
                            <img
                                src={resposive}
                                alt="no Images"
                                className="rectjs"
                            />
                        </div>
                    </div>
                </div>

                {/* react js modal pop start */}

                <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>
                                        React Developer
                                    </h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={reactjs}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        React. js is an open-source JavaScript
                                    </span>{" "}
                                    library that is used for building user
                                    interfaces specifically for{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        single-page applications.
                                    </span>{" "}
                                    It's used for handling the{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        view layer for web and mobile apps.
                                    </span>{" "}
                                    React also allows us to{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        create reusable UI components.
                                    </span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // modal pop end reactjs */}

                {/* react redux modal start */}
                <div
                    class="modal fade"
                    id="staticBackdrop1"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>
                                        React Redux
                                    </h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={redux}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        React Redux
                                    </span>{" "}
                                    is the official React binding for Redux.
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        React components to read data from a
                                        Redux Store,
                                    </span>
                                    and{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        dispatch Actions to the Store to update
                                        data
                                    </span>
                                    . Redux helps apps to scale by providing a
                                    sensible way to{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        manage state
                                    </span>{" "}
                                    through a unidirectional{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        data flow model.
                                    </span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* react redux modal end */}

                {/* reactjs contextapi start model */}

                <div
                    class="modal fade"
                    id="staticBackdrop2"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>
                                        React ContextApi
                                    </h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={context}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        The React Context API{" "}
                                    </span>
                                    is a way for a React app to effectively
                                    produce
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        global variables
                                    </span>{" "}
                                    that can be passed around.{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        This is the alternative to "prop
                                        drilling"
                                    </span>{" "}
                                    or{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        moving props from grandparent to child
                                        to parent
                                    </span>
                                    , and so on. Context is also touted as an
                                    easier, lighter approach to{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        state management using Redux.
                                    </span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* reactjs contextapi end model */}

                {/* javascript modal pop start */}
                <div
                    class="modal fade"
                    id="staticBackdrop3"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>Javascript</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={javascript}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Javascript is used by programmers
                                    </span>{" "}
                                    across the world to create d
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        ynamic and interactive web content
                                    </span>{" "}
                                    like applications and browsers.
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        JavaScript is so popular
                                    </span>{" "}
                                    that it's the most used programming language
                                    in the world,{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        used as a client-side programming
                                        language
                                    </span>{" "}
                                    all websites.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* javascript modal pop end */}

                {/* html model poup start */}

                <div
                    class="modal fade"
                    id="staticBackdrop4"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>HTML</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={html}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        HTML (HyperText Markup Language) is the
                                        code
                                    </span>{" "}
                                    that is{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        used to structure a web page and its
                                        content.
                                    </span>{" "}
                                    For example, content could be structured
                                    within a set of paragraphs,{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        a list of bulleted points
                                    </span>
                                    , or using images and{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        data tables
                                    </span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* html end */}

                {/* css start modal popup */}

                <div
                    class="modal fade"
                    id="staticBackdrop5"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>CSS</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={css}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        The CSS fundamentals like the box model
                                    </span>
                                    , cascade and specificity,{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        flexbox
                                    </span>
                                    ,{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        grid and z-index
                                    </span>
                                    . And, along with these fundamentals, you'll
                                    learn about{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        functions, color types, gradients,
                                        logical properties
                                    </span>{" "}
                                    and inheritance to make you a well-rounded{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        front-end developer
                                    </span>
                                    , ready to take on any user interface.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* css end modal opup */}

                {/* sass model popups start */}


                <div
                    class="modal fade"
                    id="staticBackdrop6"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>Sass</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={sass}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span style={{ color: color, fontWeight: 700 }}>
                                    Sass (which stands for 'Syntactically
                                    awesome style sheets){" "}
                                </span>
                                is an extension of CSS that enables you to use
                                things like variables,{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    nested rules, inline imports and more.
                                </span>{" "}
                                It also helps to keep things organised and
                                allows you to create style sheets faster.{" "}
                                <span style={{ color: color, fontWeight: 700 }}>
                                    Sass is compatible with all versions of CSS.
                                </span> 
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* model popup end sass  */}

                {/* bootstarp popup start */}

                <div
                    class="modal fade"
                    id="staticBackdrop7"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>Bootstrap</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={bootstrap}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    Bootstrap is a{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        free and open source front end
                                        development
                                    </span>{" "}
                                    framework for the{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        creation of websites
                                    </span>{" "}
                                    and web apps. The{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Bootstrap framework is built on HTML,
                                        CSS,
                                    </span>{" "}
                                    and
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        JavaScript (JS) to facilitate the
                                        development
                                    </span>{" "}
                                    of responsive,{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        mobile-first sites
                                    </span>{" "}
                                    and apps.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bootstrap modael popup end */}

                {/* figma text strt */}

                <div
                    class="modal fade"
                    id="staticBackdrop8"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>Figma</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={figma}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Figma is a powerful design tool
                                    </span>{" "}
                                    that helps you to create anything:{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        websites, applications, logos,
                                    </span>{" "}
                                    and much more. By learning to use Figma,
                                    you'll take your{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        first steps into User Interface Design
                                    </span>{" "}
                                    and{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        User Experience Design.
                                    </span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* figma end modal */}

                {/* sass modal poup start */}

                <div
                    class="modal fade"
                    id="staticBackdrop9"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>UI/UX</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={ui}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        A UI, UX, and front-end web developer
                                    </span>{" "}
                                    is{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        responsible
                                    </span>{" "}
                                    for applying interactive and visual design
                                    principles on websites and web applications
                                    for a positive and cohesive user experience.
                                    These
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        developers use HTML, CSS, and other
                                        design tools{" "}
                                    </span>{" "}
                                    to achieve responsive designs.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sass modal popup end  */}

                {/* github start model popup */}

                <div
                    class="modal fade"
                    id="staticBackdrop10"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>Github</h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={github}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        GitHub is a code hosting platform
                                    </span>{" "}
                                    for version control and collaboration. It
                                    lets you and others work together on{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        projects from anywhere
                                    </span>
                                    . This tutorial teaches you GitHub
                                    essentials like
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        repositories, branches, commits, and
                                        pull requests.
                                    </span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* githyb end model poups */}

                {/* resposive UI models start */}
                <div
                    class="modal fade"
                    id="staticBackdrop11"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    <h3 style={{ color: color }}>
                                        Responsive Ui Design's
                                    </h3>
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div className="left-image-page">
                                    <img
                                        src={resposive}
                                        alt="no Images"
                                        className="rectjs w-100"
                                    />
                                </div>
                                <p
                                    className="react mt-3"
                                    style={{
                                        lineHeight: 1.8,
                                        textAlign: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {" "}
                                        Responsive web design (RWD)
                                    </span>{" "}
                                    is a web development approach that{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        creates dynamic changes
                                    </span>{" "}
                                    to the appearance of a website, depending on
                                    the screen size and orientation of{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        the device being used to view it.
                                    </span>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* resposive uI models end */}
            </div>
            <div>
                <Section2Mobile />
            </div>
        </>
    );
}

export default ServicesPages;
