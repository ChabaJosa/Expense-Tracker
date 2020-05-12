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




            <div>
                {/* Wrapper */}
                <div id="wrapper">
                    {/* Header */}
                    <header id="header">
                        <div className="logo">
                            <span className="icon fa-gem" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <h1 >Trackster</h1>
                                <p className="hover-underline-animation">
                                    Track your expenses your way.
                                    {/* <br /> for free under the */}
                                </p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#intro"    style={{color:"#85bb65"}} >   Intro     </a></li>
                                <li><a href="#work"     style={{color:"#85bb65"}} >    Use       </a></li>
                                <li><a href="#about"    style={{color:"#85bb65"}} >   Tech      </a></li>
                                <li><a href="#contact"  style={{color:"#85bb65"}} > Info      </a></li>
                                {/*<li><a href="#elements">Elements</a></li>*/}
                            </ul>
                        </nav>
                        <a href="/Tracker" className="button primary">App</a>
                    </header>
                    {/* Main */}
                    <div id="main">
                        {/* Intro */}
                        <article id="intro">
                            <h2 className="major">Intro</h2>
                            {/* <span className="image main"><img src="images/pic01.jpg" alt="" /></span> */}
                            <p style={{color:"white"}}>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                            <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                        </article>
                        {/* Work */}
                        <article id="work">
                            <h2 className="major">Use</h2>
                            {/* <span className="image main"><img src="images/pic02.jpg" alt="" /></span> */}
                            <p style={{color:"white"}}>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
                        </article>
                        {/* About */}
                        <article id="about">
                            <h2 className="major">Tech</h2>
                            {/* <span className="image main"><img src="images/pic03.jpg" alt="" /></span> */}
                            <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
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
                                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
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