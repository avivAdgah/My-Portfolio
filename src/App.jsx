import { useState } from "react";
import Project from "./Project";
import Switch from "./Switch";
import "./App.css";

function App() {
  
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (e) => {
    setChecked(e.target.checked);
  };

  const gmailComposeUrl = ({
    to = "avivadgha@gmail.com",
    subject = "Hello!",
    body = "Hey, I'd love to collaborate.",
  } = {}) => {
    const params = new URLSearchParams();
    if (to) params.set("to", to);
    if (subject) params.set("su", subject);
    if (body) params.set("body", body);
    return `https://mail.google.com/mail/?view=cm&fs=1&tf=1&${params.toString()}`;
  };

  const composeUrl = gmailComposeUrl({
    to: "avivadgha@gmail.com",
    subject: "Portfolio inquiry",
    body: "Hi Aviv, I'd love to work together!",
  });

  return (
    <>
      <div
        className="warpper"
        style={{
          backgroundColor: checked ? "black" : "white",
          color: checked ? "white" : "black",
          transition: "1s all",
        }}
      >
        <Switch
          setChecked={setChecked}
          handleSwitchChange={handleSwitchChange}
        />
        <header>
          <a
            href="/"
            aria-label="Aviv Adgah - Home Page"
            className={checked ? "logo logo-darkMode" : "logo logo-lightMode"}
          >
            AVIV ADGAH
          </a>
          <nav aria-label="navigator">
            <ul className="navigator">
              <li>
                <a
                  href="#about"
                  className={checked ? "a-darkMode" : "a-lightMode"}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={checked ? "a-darkMode" : "a-lightMode"}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={checked ? "a-darkMode" : "a-lightMode"}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="about-title">
          <h1 className="title">
            Hi, I'm Aviv Adgah
            <br />
            <span className="profession">Frontend Developer</span>
          </h1>
          <p className="text">
            I build accessible, responsive websites using
            <br /> modern web technologies.
          </p>
          <a href="#projects">
            <button>View My Work</button>
          </a>
        </section>
        <section id="about">
          <h1 className="title">About Me</h1>
          <p className="text">
            I'm a frontend developer with a passion for creating exceptional
            digital experiences.
            <br />I speciallize in crafting user-friendly interfaces with HTML,
            CSS and JavaScript Frameworks.
          </p>
        </section>
        <section id="projects">
          <h1 className="title">Projects</h1>
          <div className="project">
            <Project
              checked={checked}
              projectLink={"https://bmi-calculator-bmicalculator.netlify.app/"}
              imageName={"Bmi.jpg"}
              projectName={"BMI Calculator"}
              projectText={"A web application built with React and styled CSS"}
              projectLanguages={["Html", "CSS", "JavaScript"]}
            />
            <Project
              checked={checked}
              projectLink={"https://elaborate-brigadeiros-dbbe64.netlify.app/"}
              imageName={"toDoList.jpg"}
              projectName={"To Do List"}
              projectText={"A web application built with React and styled CSS"}
              projectLanguages={["Html", "CSS", "JavaScript"]}
            />
            <Project
              checked={checked}
              projectLink={"https://beamish-pudding-618a19.netlify.app/"}
              imageName={"error404.jpg"}
              projectName={"Error 404"}
              projectText={"A responsive Error 404 page implemented with CSS"}
              projectLanguages={["HTML", "CSS"]}
            />
            <Project
              checked={checked}
              projectLink={"https://checkout-main-page.netlify.app/"}
              imageName={"checkOut.jpg"}
              projectName={"Check Out"}
              projectText={
                "A responsive check out page just CSS without JS just to show more of my works"
              }
              projectLanguages={["HTML", "CSS"]}
            />
            <Project
              checked={checked}
              projectLink={"https://weather-app1122.netlify.app/"}
              imageName={"weatherApp.jpg"}
              projectName={"Weather App"}
              projectText={"A web application built with React and styled CSS"}
              projectLanguages={["HTML", "CSS", "JS"]}
            />
            <Project
              checked={checked}
              projectLink={"https://photo-gallery11.netlify.app/"}
              imageName={"photoGallery.jpg"}
              projectName={"photo gallery"}
              projectText={"A web application built with React and styled CSS"}
              projectLanguages={["HTML", "CSS", "JS"]}
            />
            <Project
              checked={checked}
              projectLink={"https://edie-homepage11.netlify.app/"}
              imageName={"edieHomePage.jpg"}
              projectName={"Edie HomePage"}
              projectText={"A web application built with React and styled CSS"}
              projectLanguages={["HTML", "CSS", "JS"]}
            />
            <Project
              checked={checked}
              projectLink={"https://clinquant-crostata-6b74d0.netlify.app/"}
              imageName={"personalGalleryjpg.jpg"}
              projectName={"Personal Galleryjpg"}
              projectText={"A responsive Error 404 page implemented with CSS"}
              projectLanguages={["HTML", "CSS"]}
            />
            <Project
              checked={checked}
              projectLink={"https://clinquant-faun-f4efc8.netlify.app/"}
              imageName={"recipePage.jpg"}
              projectName={"Recipe Page"}
              projectText={"A responsive Error 404 page implemented with CSS"}
              projectLanguages={["HTML", "CSS"]}
            />
            <Project
              checked={checked}
              projectLink={"https://my-team-page.netlify.app/"}
              imageName={"myTeamPage.jpg"}
              projectName={"My Team Page"}
              projectText={"A responsive Error 404 page implemented with CSS"}
              projectLanguages={["HTML", "CSS"]}
            />
          </div>
        </section>
        <section id="contact">
          <div className="contact-link">
            <h1 className="title">Contact</h1>
            <a
              href={composeUrl}
              target="_blank"
              el="noopener noreferrer"
              className="btn"
            >
              Email Me
            </a>
          </div>
          <div>
            <p className="contact-text">
              Feel free to reach us for collaboration
              <br /> or just a friendly hello!
            </p>
            <p className="contact-text">
            Or contact us         │
                     directly at:          │
                     avivadgha@gmail.com 
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
