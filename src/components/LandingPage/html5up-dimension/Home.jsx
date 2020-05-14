import React from 'react';
import "./assets/css/main.css";
import "./assets/css/noscript.css"
// import "./assets/js/jquery.min.js"
// import "./assets/js/browser.min.js"
// import "./assets/js/breakpoints.min.js"
// import "./assets/js/util.js"
// import "./assets/js/main.js"

const Home = () => {
    return (
        <>




            <div className="container">
                {/* Wrapper */}
                <div id="wrapper">
                    {/* Header */}
                    <header id="header">
                        <div className="logo">
                            <span className="icon fa-gem" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <h1 >Trakster</h1>
                                <p className="hover-underline-animation">
                                    Track your expenses your way.
                                    {/* <br /> for free under the */}
                                </p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#work"     style={{color:"#85bb65"}} >   Use       </a></li>
                                <li><a href="#intro"    style={{color:"#85bb65"}} >   Next      </a></li>
                                <li><a href="#about"    style={{color:"#85bb65"}} >   Tech      </a></li>
                                <li><a href="#contact"  style={{color:"#85bb65"}} >   Info      </a></li>
                                {/*<li><a href="#elements">Elements</a></li>*/}
                            </ul>
                        </nav>
                        <a href="/tracker" className="button primary">App</a>
                    </header>
                    {/* Main */}
                    <div id="main">

                        {/* Work */}
                        <article id="work">
                            <h2 className="major">Use</h2>
                            {/* <span className="image main"><img src="images/pic02.jpg" alt="" /></span> */}
                            <p style={{color:"white"}}>Add your expenses and incomes, classify them as either fixed or varible and add the information you believe is valuable for each one. The App should mantain simplicity above all other things, which is an issue with similar Apps as far as ux goes.</p>
                        </article>

                        {/* Intro */}
                        <article id="intro">
                            <h2 className="major">Next</h2>
                            {/* <span className="image main"><img src="images/pic01.jpg" alt="" /></span> */}
                            <p style={{color:"white"}}>The fixed costs would have multiple fields that would only be filled once. Some of those fields would be description, frequency, due dates (for expenses) and other information that the user finds important.</p>
                            
                            <p style={{color:"white"}}>Due dates will be checkable so the user can keep track of what he has already paid off. Once the API is created, every user should be able to generate queries to look up their history of fixed expenses and/or incomes. Variable expenses are attached to a budget and variable incomes are to enlarge the initial budget. Eventually, it would be ideal to find patterns in variable expenses to give tailored recommendations to each user.</p>

                        </article>

                        {/* About */}
                        <article id="about">
                            <h2 className="major">Tech</h2>
                            {/* <span className="image main"><img src="images/pic03.jpg" alt="" /></span> */}
                            <p style={{color:"white"}}>This App is currently a ReactJS App currently in the works for future implementations with the MERN Solution Stack.</p>
                            {/* <br></br> */}
                            <p style={{color:"white"}}>MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications and comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.</p>
                            {/* <br></br> */}
                            <p style={{color:"white"}}>Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.</p>
                        </article>

                        {/* Contact */}
                        <article id="contact">
                            <h2 className="major">Info</h2>
                            <form method="post" action="#">
                                <div className="fields">
                                    <div className="field half">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div className="field half">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" rows={4} defaultValue={""} />
                                    </div>
                                </div>
                                <ul className="actions">
                                    <li><input type="submit" defaultValue="Send Message" className="primary" /></li>
                                    <li><input type="reset" defaultValue="Reset" /></li>
                                </ul>
                            </form>
                            <ul className="icons">
                                <li><a href="https://twitter.com/CG_Josa" className="icon brands fa-twitter"></a></li>
                                {/* <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li> */}
                                <li><a href="https://www.instagram.com/chaba.josa/" className="icon brands fa-instagram"></a></li>
                                <li><a href="https://github.com/ChabaJosa" className="icon brands fa-github"></a></li>
                            </ul>
                        </article>
                        
                    </div>
                    {/* Footer */}
                    <footer id="footer">
                        <p className="copyright">© Badass Designs at: <a href="https://html5up.net">HTML5 UP</a>.</p>
                    </footer>
                </div>
                {/* BG */}
                <div id="bg" />
                {/* Scripts */}
            </div>

        </>
    );
};

export default Home;