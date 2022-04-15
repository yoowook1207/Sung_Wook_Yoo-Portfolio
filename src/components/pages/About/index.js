import React from "react";

function About() {
    return (
        <section className="my-5">
            <h1>About</h1>
                <ul className="about">
                    <li className="border-bottom mb-3">
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <blockquote className="blockquote">
                                    <p className="mb-0">George Washington University Coding Bootcamp</p>
                                    <p className="font-small">JavaScript based Front-end & Back-end</p>
                                    <footer className="blockquote-footer text-end font-small">November 2021 ~ May 2022</footer>
                                </blockquote>
                            </li>
                            <li>
                                <blockquote className="blockquote">
                                    <p className="mb-0">Virginia Christian University</p>
                                    <p className="font-small">Religious Theology Studies of Christianity</p>
                                    <footer className="blockquote-footer text-end font-small">January 2017 ~ December 2021</footer>
                                </blockquote>
                            </li>
                            <li >
                                <blockquote className="blockquote">
                                    <p className="mb-0">George Mason University</p>
                                    <p className="font-small">Film and Video Studies</p>
                                    <footer className="blockquote-footer text-end font-small">August 2013 ~ December 2016</footer>
                                </blockquote>
                            </li>
                        </ul>
                    </li>

                    <li className="border-bottom mb-3">
                        <h2>Skills</h2>
                        <ul>
                            <li>
                                Languages: <span className="font-small">JavaScript, HTML/CSS, Node.js, JSON, React.js</span>
                            </li>
                            <li>
                                Database: <span className="font-small">MySQL, NoSQL, MongoDB</span>
                            </li>
                            <li>
                                Adobe: <span className="font-small">Premiere Pro, After Effects, Photoshop</span>
                            </li>
                            <li>
                                Other: <span className="font-small">Heroku, Git, Bash, Microsoft Office</span>
                            </li>
                        </ul>
                        <br></br>
                    </li>

                    <li className="border-bottom mb-3">
                        <h2>Experience</h2>
                        <ul>
                            <li>
                            <blockquote className="blockquote">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-0">Iron Age Centreville LLC.</p>
                                    <span className="text-end font-small">August 2015 ~ Present</span>
                                </div>
                                <div className="text-end font-small">Manager</div>
                                <div className="font-small"> Key Accomplishments:
                                    <ul>
                                        <li className="list-style-on">
                                            Managed the restaurant overall including inventories, finances, and maintenances
                                        </li>
                                        <li className="list-style-on">
                                            Scheduling employees shifts and human resources
                                        </li>
                                        <li>
                                            Handling service issues with customers
                                        </li>
                                    </ul>
                                </div>
                            </blockquote>
                            </li>

                        </ul>
                    </li>
                </ul>
        </section>
    )
}

export default About;