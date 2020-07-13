import React, { useEffect } from "react";
import Animate from "react-smooth";
import PortfolioCard from "./components/PortfolioCard/index";
import PortfolioCardNew from "./components/PortfolioCardNew/index";
import Particles from "react-particles-js";
import particles from "./const/particle.js";
import portfolios from "./const/portfolios.js";
import "./App.css";

function App() {
  useEffect(() => {
    const jQ = window.$;
    const contentWayPoint = function () {
      let i = 0;
      jQ(".ftco-animate").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !jQ(this.element).hasClass("ftco-animated")
          ) {
            i++;

            jQ(this.element).addClass("item-animate");
            setTimeout(function () {
              jQ("body .ftco-animate.item-animate").each(function (k) {
                let el = jQ(this);
                setTimeout(
                  function () {
                    let effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn ftco-animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft ftco-animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight ftco-animated");
                    } else {
                      el.addClass("fadeInUp ftco-animated");
                    }
                    el.removeClass("item-animate");
                  },
                  k * 50,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "95%" }
      );
    };

    const hash = function (h) {
      if (window.history.pushState) {
        window.history.pushState(null, null, h);
      } else {
        window.location.hash = h;
      }
    };

    const scrollspy = function () {
      // scrollspy section
      //variable that will hold the href attr of the links in the menu
      var sections = [];
      //variable that stores the id of the section
      var id = false;
      //variable for the selection of the anchors in the navbar
      var $navbara = jQ("#navi a");

      $navbara.click(function (e) {
        //prevent the page from refreshing
        e.preventDefault();
        //set the top offset animation and speed
        jQ("html, body").animate(
          {
            scrollTop: jQ(jQ(this).attr("href")).offset().top - 180,
          },
          500
        );
        hash(jQ(this).attr("href"));
      });

      //select all the anchors in the navbar one after another
      $navbara.each(function () {
        // and adds them in the sections variable
        sections.push(jQ(jQ(this).attr("href")));
      });
      jQ(window).scroll(function (e) {
        // scrollTop retains the value of the scroll top with the reference at the middle of the page
        var scrollTop = jQ(this).scrollTop() + jQ(window).height() / 2;
        //cycle through the values in sections array
        for (var i in sections) {
          var section = sections[i];
          //if scrollTop variable is bigger than the top offset of a section in the sections array then
          if (scrollTop > section.offset().top) {
            var scrolled_id = section.attr("id");
          }
        }
        if (scrolled_id !== id) {
          id = scrolled_id;
          jQ($navbara).removeClass("current");
          jQ('#navi a[href="#' + id + '"]').addClass("current");
        }
      });
    };

    if (window.$) {
      contentWayPoint();
      scrollspy();
    }
  }, []);
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <span>Z</span>hang
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item">
                <a href="#home-section" className="nav-link">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-section" className="nav-link">
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume-section" className="nav-link">
                  <span>Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#services-section" className="nav-link">
                  <span>Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects-section" className="nav-link">
                  <span>Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolios-section" className="nav-link">
                  <span>Portfolios</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact-section" className="nav-link">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Animate to="1" from="0" attributeName="opacity">
        <Particles params={particles} className="particle" />
        <section
          className="hero-wrap js-fullheight"
          style={{
            height: "100vh",
            position: "absolute",
            top: "0",
            overflow: "hidden",
          }}
        >
          <div className="overlay"></div>
          <div className="row hero-content" style={{ height: "100%" }}>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
              <div className="container" style={{ height: "100%" }}>
                <div
                  className="row no-gutters slider-text js-fullheight justify-content-center align-items-center"
                  style={{ height: "100%" }}
                >
                  <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
                    <div className="text text-center">
                      <span className="subheading">Hey! I am</span>
                      <h1>Zhang Wei</h1>
                      <h2>
                        I'm a&nbsp;
                        <span
                          className="txt-rotate"
                          data-period="2000"
                          data-rotate='[ "Project Manager", "Web Developer.", "Mobile Developer.", "Desktop App Developer.", "Web Designer." ]'
                        ></span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 pl-md-5 py-5"
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "fit-content",
                  justifyContent: "center",
                  paddingTop: "70px",
                }}
              >
                <img
                  src="./web/images/works/user1.jpg"
                  alt="user-img"
                  style={{ width: "320px", borderRadius: "50px" }}
                />
                <div>
                  <ul
                    className="ftco-footer-social list-unstyled"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <li className="ftco-animate hero-social-icon">
                      <a
                        href="https://angel.co/u/zhang-wei-9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-angellist"></span>
                      </a>
                    </li>
                    <li className="ftco-animate hero-social-icon">
                      <a
                        href="https://www.linkedin.com/in/zhang-wei-303b32143/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li className="ftco-animate hero-social-icon">
                      <a
                        href="https://www.github.com/super0605"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-github"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mouse">
            <a href="#about-section" className="mouse-icon">
              <div className="mouse-wheel">
                <span className="ion-ios-arrow-round-down"></span>
              </div>
            </a>
          </div>
        </section>
      </Animate>

      <section
        className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
        id="about-section"
        style={{ marginTop: "100px" }}
      >
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="heading-section col-md-12 col-lg-12 text-center">
              <h2 className="mb-4">About Me</h2>
              <h4>Full Stack Web & Mobile Architect | Solution Architect </h4>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
              <div
                className="img-about img d-flex align-items-stretch"
                style={{ paddingTop: "20px" }}
              >
                <div className="overlay"></div>
                <div className="img align-self-stretch align-items-center">
                  <p>
                    I believe, every project has the potential to grow bigger.
                    So when it comes to development I create the space for
                    projects to expand and add functionalities to evolve a
                    sustainable ecosystem. Mobile-friendly and well-performing
                    applications are what I’m going for in my work.
                  </p>
                  <p>
                    As I’m really interested in everything related to web and
                    mobile development I always stay focused and motivated.
                    During the work process I guarantee fast qualified and
                    friendly communication, deep understanding of the
                    requirements, meeting the timeline and using the best
                    solutions for a particular project. My main rule is not only
                    to get the job done but bring the value to the product or
                    company, so it will be one step closer to be successful.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
              <div className="col-md-12 heading-section ftco-animate">
                {/* <h2 className="mb-4">About Me</h2>
                <p>
                  Full Stack Web & Mobile Architect | Solution Architect{" "}
                </p>{" "} */}
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Zhang Wei</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>June 05, 1989</span>
                  </li>
                  {/* <li className="d-flex">
                    <span>Address:</span>{" "}
                    <span>Shanghai University of Engineering Science</span>
                  </li> */}
                  {/* <li className="d-flex">
                    <span>Zip code:</span> <span>999077</span>
                  </li> */}
                  <li className="d-flex">
                    <span>Email:</span> <span>zhangwei59765@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>+86 13124249532</span>
                  </li>
                </ul>
              </div>

              <div className="counter-wrap ftco-animate d-flex mt-md-3">
                <div className="text" style={{ paddingLeft: "14px" }}>
                  <p className="mb-4">
                    <span className="number" data-number="26">
                      26&nbsp;
                    </span>
                    <span>Project complete</span>
                  </p>
                  <p>
                    <a
                      href="./ZhangWeiResume.pdf"
                      target="_blank"
                      rel="noopener noreferrer noreferrer"
                      className="btn btn-primary py-3 px-3"
                    >
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-no-pb goto-here"
        id="resume-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <nav id="navi">
                <ul>
                  <li>
                    <a href="#page-2">Experience</a>
                  </li>
                  <li>
                    <a href="#page-3">Skills</a>
                  </li>
                  <li>
                    <a href="#projects-section">Projects</a>
                  </li>
                  <li>
                    <a href="#page-1">Education</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-md-9">
              <div id="page-2" className="page two">
                <h2 className="heading">Experience</h2>
                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Mar 2020 - Present</span>
                    <h2>FullStack Mobile Engineer</h2>
                    <span className="position">StartupLandia</span>
                    <p>
                      Working with Lead mobile app developer using Flutter,
                      Dart, IOS & Android. Focusing on implementing best
                      practice architecture and user friendly/interactive, pixel
                      perfection/responsive UI
                    </p>
                  </div>
                </div>

                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Oct 2018 - Nov 2019</span>
                    <h2>Software Engineer</h2>
                    <span className="position">Digia Technology</span>
                    <p>
                      At this position, I worked on 3D and 2D data visualization
                      Web apps and AI-based mobile app development for Marketing
                      Analytics, Ecommerce. I use technologies such as:
                      Javascript, Typescript, Three.JS, D3, React/React Native
                      and NodejS, Python.
                    </p>
                    <p>
                      In addition to full stack development, I also worked on a
                      lot of dev-ops tasks. I have helped set up a lot of our
                      unit, ui and build/deploy plans. Also other process
                      improvement tasks like JIRA transition workflows, slack
                      notification services and Bitbucket/JIRA/GitHub API
                      services. I utilize ansible for our automation, bamboo for
                      our build/deployment, bitbucket for our git repositoreis
                      and confulence/github pages for ourdocumentation.
                    </p>
                  </div>
                </div>

                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Jan 2017 - Aug 2018</span>
                    <h2>Web Application Developer</h2>
                    <span className="position">Sitback solutions</span>
                    <p>
                      At this position, I was responsible for developing,
                      implementing and maintaining mostly web applications. I
                      collaborated with technical and business staff in the
                      design, development, testing, implementation and
                      production support of enterprise applications.
                    </p>
                    <p>
                      I primarily used MERN Stack. 60% of my work was doing
                      front-end development, 20% was backend development and the
                      remaining 20% was dev-ops/sys admin related tasks. I had a
                      few sys admins for a 300 person + company. They were very
                      swamped so I was occasionally asked to do things such as
                      migrating test databse data between environments, doing
                      jenkins builds/minior build plan teaks, configuring
                      webpack/or ui/unit, integration testing frameworks.
                    </p>
                  </div>
                </div>

                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Jul 2015 - Jan 2017</span>
                    <h2>Fullstack Engineer</h2>
                    <span className="position">FleckActives</span>
                    <p>
                      At this position, I worked in some of web apps included:
                      Digital menuboards, Ecommerce platform, mobile/desktop
                      business dashboards, online website plugins and APIs. I
                      was responsible for the managing my team's web
                      infrastructure, seo, marketing and website design.
                    </p>
                    <p>
                      Most of the servers I dealt with were Debian/Ubuntu and I
                      utilized DigitalOcean for off-site hosting.
                    </p>
                  </div>
                </div>

                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Jul 2014 - Apr 2015</span>
                    <h2>Web Application Engineer</h2>
                    <span className="position">Baize Technology Pte Ltd</span>
                    <p>
                      At my first full stack position, I was doing front-end
                      development with HTML5, CSS, Javascript, AngularJS and
                      back-end development with PHP. I utilized MySQL and
                      PostGres.
                    </p>
                    <p>
                      In addition to development, I also helped with end-user
                      support for stakeholders and designated end users when
                      escalated above our support teams.
                    </p>
                    <p>
                      For the last half of this position, I led a team of 3
                      developers for our company's largest web app contract: a
                      fitness video and recipe center website development.
                    </p>
                  </div>
                </div>
              </div>

              <div id="page-3" className="page three">
                <h2 className="heading">Skills</h2>
                {/* <div className="row progress-circle mb-5">
                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          React
                        </h2>

                        <div className="progress mx-auto" data-value="90">
                          <span className="progress-left">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              90<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>

                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          Flutter
                        </h2>

                        <div className="progress mx-auto" data-value="80">
                          <span className="progress-left">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              80<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>

                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          Vue
                        </h2>

                        <div className="progress mx-auto" data-value="75">
                          <span className="progress-left">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              75<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>

                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                <div className="row">
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>React</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-1"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Flutter</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-2"
                          role="progressbar"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "95%" }}
                        >
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Angular</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-3"
                          role="progressbar"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "95%" }}
                        >
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>React Native</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-4"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Vue</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-5"
                          role="progressbar"
                          aria-valuenow="96"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "96%" }}
                        >
                          <span>96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>NodeJS</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>D3.js</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Python</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="90"
                          style={{ width: "90%" }}
                        >
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>NextJS</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>C#</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="90"
                          style={{ width: "90%" }}
                        >
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Gastsby</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Ruby on Rails</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="80"
                          style={{ width: "80%" }}
                        >
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Storybook</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>PHP</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>HTML/HTML5, CSS/CSS3, SCSS, SASS, LESS</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="progress-wrap ftco-animate">
                      <h3>Dart</h3>
                      <div className="progress">
                        <div
                          className="progress-bar color-6"
                          role="progressbar"
                          aria-valuenow="96"
                          aria-valuemin="0"
                          aria-valuemax="96"
                          style={{ width: "96%" }}
                        >
                          <span>96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">May 2019 - Sep 2019</span>
                    <h2>Role: Frontend Developer</h2>
                    <span className="position">
                      Title: Social Media Website
                    </span>
                    <p>
                      <span className="position">Summary: </span>
                      Social Medial Paltform
                    </p>
                    <p>
                      <span className="position">Link: </span>

                      <a
                        href="https://www.gaia.com/"
                        target="_blank"
                        rel="noopener noreferrer noreferrer"
                      >
                        https://www.gaia.com/
                      </a>
                    </p>
                    <p>
                      <span className="position">Description: </span>
                      Join the Gaia community today to start streaming thousands
                      of consciousness expanding, yoga and transformational
                      videos to all of your favorite devices.
                    </p>
                    <p>
                      <span className="position">Contribution: </span>
                      Rebuilding and Adding the new features in the Frontend
                      development.
                    </p>
                    <p>
                      <span className="position">Technology &amp; stack: </span>
                      <span className="date">
                        Javascript, ReactJS, Javascript,
                        Video Streamming, React Hooks, PHP
                        
                      </span>
                    </p>
                  </div>
                </div>
              
              <div id="projects-section" className="page four">
                <h2 className="heading">Projects</h2>
                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Jan 2019 - May 2019</span>
                    <h2>Role: Lead Frontend Developer</h2>
                    <span className="position">
                      Title: Online wellness solutions and plans Platform for
                      common users
                    </span>
                    <p>
                      <span className="position">Summary: </span>
                      Software that enables you to create digital programs
                    </p>
                    <p>
                      <span className="position">Link: </span>
                      <a
                        href="https://obschart.com/"
                        target="_blank"
                        rel="noopener noreferrer noreferrer"
                      >
                        https://obschart.com/
                      </a>
                    </p>
                    <p>
                      <span className="position">Description: </span>
                      ObsChart software enables you to create beautiful digital
                      wellness plans for the people you care about. Whether
                      building a fitness program for a single client or
                      collecting patient reported outcomes from a whole clinical
                      population, ObsChart platform can help.
                    </p>
                    <p>
                      <span className="position">Contribution: </span>
                      Worked lead frontend developer with modern React
                      stack(React + Typescript) and Server side rendering.
                    </p>
                    <p>
                      <span className="position">Technology &amp; stack: </span>
                      <span className="date">
                        ReactJS, Javascript, Redux, GraphQL, GraphQL-Relay, React
                        Hooks, Nodejs
                      </span>
                    </p>
                  </div>
                </div>

                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Sep 2019 - Jan 2020</span>
                    <h2>Role: Mobile App Developer</h2>
                    <span className="position">Title: Travel Planner App</span>
                    <p>
                      <span className="position">Summary: </span>
                      Mobile app for trip planning and sharing trip data
                    </p>
                    <p>
                      <span className="position">Link: </span>
                      <a
                        href="https://apps.apple.com/au/app/trotter-travel-planner/id1390522700"
                        target="_blank"
                        rel="noopener noreferrer noreferrer"
                      >
                        IOS
                      </a>
                      ,
                      <a
                        href="https://play.google.com/store/apps/details?id=com.trotterapp.android"
                        target="_blank"
                        rel="noopener noreferrer noreferrer"
                      >
                        Android
                      </a>
                    </p>
                    <p>
                      <span className="position">Description: </span>
                      Trotter Travel Planner App that allows customers plan trip
                      and do reservations for trip, sharing trip data
                    </p>
                    <p>
                      <span className="position">Contribution: </span>
                      Building Travel planner app with modern mobile stack using
                      Flutter, Dart. Implementing best practice architecture,
                      robust infrastructure, reusable widgets
                    </p>
                    <p>
                      <span className="position">Technology &amp; stack: </span>
                      <span className="date">
                        Flutter, Dart

                      </span>
                    </p>
                  </div>
                </div>
                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Jan 2018 - May 2018</span>
                    <h2>
                      Role: FullStack Hybrid Mobile App & Web Expert, Data
                      scrapping Developer
                    </h2>
                    <span className="position">Title: NewsApp Raven</span>
                    <p>
                      <span className="position">Summary: </span>
                      Social NewsApp allows customers to see and post news &
                      events scrapped from almost social sites, news websites
                      based on the detail-orientied categories.
                    </p>
                    <p>
                      <span className="position">Description: </span>
                      Building all in one news app that allows customers to see
                      and post news, articles, events by detail-orientied
                      categories scrapped from almost social sites & news
                      websites.
                    </p>
                    <p>
                      <span className="position">Contribution: </span>
                      Developing mobile app & web application, admin dashboard
                      UI that is user interactive/friendly, pixel-perfection Ui
                      via hybrid tech stack with React Native. Scrapping data
                      from almost social websites & news websites vis python,
                      Nodejs
                    </p>
                    <p>
                      <span className="position">Technology &amp; stack: </span>
                      <span className="date">
                        React Native, ReactJS, Redux-saga,
                        Styled-Components, Scss, Material UI, Python, NLTK,
                        Nodejs, Beautiful Soup

                      </span>
                    </p>
                  </div>
                </div>
                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Apr 2018 - Dec 2018</span>
                    <h2>Role: Full Stack Developer</h2>
                    <span className="position">
                      Title: Online Video Educational Website
                    </span>
                    <p>
                      <span className="position">Summary: </span>Online Video
                      Education Website
                    </p>
                    <p>
                      <span className="position">Link: </span>

                      <a
                        href="https://www.masterclass.com/"
                        target="_blank"
                        rel="noopener noreferrer noreferrer"
                      >
                        https://www.masterclass.com/
                      </a>
                    </p>
                    <p>
                      <span className="position">Description: </span>
                      Master Classes are classes for students of a particular
                      subject, by experts in a particular subject, usually
                      music, but also include painting, theatre, any art, or any
                      other place where skills are being developed.
                    </p>
                    <p>
                      <span className="position">Contribution: </span>
                      Developing Frontend UI and Integrating Backend & 3rd party
                      Apis, Implementing Best practice coding structure,
                      pixel-perfection ui, good infrastructure.
                    </p>
                    <p>
                      <span className="position">Technology &amp; stack: </span>
                      <span className="date">
                        Typescript, ReactJS, Redux-saga, Styled-Components, Scss,
                        Headless CMS

                      </span>
                    </p>
                  </div>
                </div>
                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">Jan 2017 - July 2017</span>
                    <h2>Role: Full Stack Developer</h2>
                    <span className="position">Title: Event platform</span>
                    <p>
                      <span className="position">Summary: </span>
                      The All-in-One Platform for Building Events
                    </p>
                    <p>
                      <span className="position">Link: </span>

                      <a
                        href="https://www.bizly.com/"
                        target="_blank"
                        rel="noopener noreferrer noreferrer"
                      >
                        https://www.bizly.com/
                      </a>
                    </p>
                    <p>
                      <span className="position">Description: </span>
                      Build your perfect event. Match with your perfect venue.
                      Send invitations and manage RSVPs. Measure and repeat.
                      Comprehensive Venue Network Find your ideal space from an
                      extensive nationwide network of over 15,000 venues.
                      Invitation & RSVP Management Send beautifully designed
                      invitations, reminders and surveys to your guests.
                    </p>
                    <p>
                      <span className="position">Contribution: </span>
                      Developing Frontend UI and Integrating Backend & 3rd party
                      Apis, Implementing Best practice coding structure,
                      pixel-perfection ui, animation via GSAP, good
                      infrastructure.
                    </p>
                    <p>
                      <span className="position">Technology &amp; stack: </span>
                      <span className="date">
                        Typescript, ReactJS, GraphQL, Apollo, Styled-Components,
                        Scss, Python, Django

                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div id="page-1" className="page one">
                <h2 className="heading">Education</h2>
                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">2012 – 2013</span>
                    <h2>B.C in Computer Science</h2>
                    <span className="position">University of Waterloo</span>
                    <p></p>
                  </div>
                </div>
                <div className="resume-wrap d-flex ftco-animate">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ideas"></span>
                  </div>
                  <div className="text pl-3">
                    <span className="date">2008 – 2012</span>
                    <h2>Bachelor of Science in Computer Science</h2>
                    <span className="position">
                      Shanghai University of Engineering Science
                    </span>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="services-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Services</h1>
              <h2 className="mb-4">Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-ideas"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Web Development</h3>
                  <p>
                    Providing both frontend and backend development with modern
                    javascript frameworks and MVC etc.
                  </p>
                  <p>
                    Implementing user friendly/interactive &
                    pixel-perfection/responsive UI, Backend and Rest Apis,
                    Robust architecture, Good database design and integrating
                    3rd party apis, Cloud functions and CI/CD pipeline.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-innovation"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Mobile App Development</h3>
                  <p>
                    Providing Native mobile app and Hybrid mobile app
                    developments for Cross platform IOS, Android, Windows phone.
                  </p>
                  <p>
                    Implementing flexible, smooth and very familiar with
                    beautiful UI, Uber style app, Travel planner app, Chatting
                    app, Social networking app, PhotoSharing App.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-analysis"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Web Design</h3>
                  <p>
                    Providing web design based on the client's business logic
                    and idea.
                  </p>
                  <p>
                    Implementing redesign and rebuild frontend UI, mobile
                    responsive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-flasks"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">
                    Chrome, Firefox, Safari Extension Development
                  </h3>
                  <p>
                    Providing Chrome, Firefox, Safari extension with javascript
                    and modern javascript framework like React, Vue, and Swift
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-ux-design"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Web Scrapping Development</h3>
                  <p>
                    Providing web scrapping with scrapping libraries and
                    framework like BeautifulSoup, Requests, Selenium, Scrapy,
                    Puppeteer etc{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-idea"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Data Visualization Development</h3>
                  <p>
                    Providing custom charts like line, area, bar chart, scatter
                    chart, sunburst and implementing analytics/report dashboard,
                    data visualization dashboard using D3.js, High charts,
                    Amcharts, SVG etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-project" id="portfolios-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Portfolios</h1>
              <h2 className="mb-4">Portfolios</h2>
            </div>
          </div>
          <div className="row">
            {portfolios.map((portfolio, i) => (
              <PortfolioCardNew
                key={i}
                image={portfolio.image}
                url={portfolio.url}
                summary={portfolio.summary}
                stack={portfolio.stack}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="ftco-section ftco-project" id="portfolios-section">
        <div className="container-fluid px-md-0">
          <div className="row no-gutters justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Projects</h1>
              <h2 className="mb-4">Portfolios</h2>
            </div>
          </div>
          <div className="row no-gutters">
            {portfolios.map((portfolio, i) => (
              <PortfolioCard
                key={i}
                image={portfolio.image}
                url={portfolio.url}
                summary={portfolio.summary}
                stack={portfolio.stack}
              />
            ))}
          </div>
        </div>
      </section> */}

      <section
        className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
        id="section-counter"
      >
        <div className="container-fluid px-md-5">
          <div className="row d-md-flex align-items-center">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number="15">
                    15
                  </strong>
                  <span>Awards</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number="26">
                    26
                  </strong>
                  <span>Complete Projects</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number="800">
                    800
                  </strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number="500">
                    500
                  </strong>
                  <span>Cups of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="blog-section">
        <div className="container"></div>
      </section>

      <section
        className="ftco-section ftco-hireme img"
        style={{ backgroundImage: "url(./web/images/bg_1.jpg)" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 ftco-animate text-center">
              <h2>
                I'm <span>Available</span> for freelancing
              </h2>
              <p>
                Full-time developer that is available to work with 40+ hours per
                week on my client's business working timezone.
              </p>
              <p className="mb-0">
                <a
                  href="https://www.linkedin.com/in/zhang-wei-303b32143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary py-3 px-5"
                >
                  Hire me
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>
                Almost online, Please feel free to contact me for your business,
                ideas, solutions
              </p>
            </div>
          </div>

          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 shadow">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-skype"></span>
                </div>
                <div>
                  <h3 className="mb-4">Skype</h3>
                  <p>
                    <a
                      href="skype:live:.cid.593c3342eaf7fb75?chat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      zhangwei59765@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 shadow">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-phone2"></span>
                </div>
                <div>
                  <h3 className="mb-4">Contact Number</h3>
                  <p>
                    <a href="tel://13124249532">+86 13124249532</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 shadow">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <div>
                  <h3 className="mb-4">Email Address</h3>
                  <p>
                    <a href="mailto:zhangwei59765@gmail.com">
                      zhangwei59765@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 shadow">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-linkedin"></span>
                </div>
                <div>
                  <h3 className="mb-4">Linkedin</h3>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/zhang-wei-303b32143/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to Linkedin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row no-gutters block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form
                action="mailto:zhangwei59765@gmail.com"
                method="post"
                encType="text/plain"
                className="bg-light p-4 p-md-5 contact-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div
                className="img"
                style={{ backgroundImage: "url(./web/images/works/user1.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>
                  Full Stack Web & Mobile Architect | Solution Architect with
                  Javascript, Typescript, React, Angular, Vue, React Native,
                  Flutter, Dart, Nodejs, Python, C# etc.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a
                      href="https://angel.co/u/zhang-wei-9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-angellist"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="https://www.linkedin.com/in/zhang-wei-303b32143/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://www.github.com/super0605">
                      <span className="icon-github"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home-section">
                      <span className="icon-long-arrow-right mr-2"></span>Home
                    </a>
                  </li>
                  <li>
                    <a href="#about-section">
                      <span className="icon-long-arrow-right mr-2"></span>About
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#portfolios-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Portfolios
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>Web
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>Web
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>Mobile
                      App Development
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>Web
                      Scrapping
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Chrome, Firefox, Safari Extension Development
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span className="icon-long-arrow-right mr-2"></span>Data
                      Visualization Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <a
                        href="skype:live:.cid.593c3342eaf7fb75?chat"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon icon-skype"></span>
                        <span className="text">zhangwei59765@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="tel://13124249532">
                        <span className="icon icon-phone"></span>
                        <span className="text">+86 13124249532</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:zhangwei59765@gmail.com">
                        <span className="icon icon-envelope"></span>
                        <span className="text">zhangwei59765@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This Introducing website is made with{" "}
              <i className="icon-heart color-danger" aria-hidden="true"></i> by{" "}
              <a
                href="https://www.linkedin.com/in/zhang-wei-303b32143/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zhang
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div> */}
    </div>
  );
}

export default App;
