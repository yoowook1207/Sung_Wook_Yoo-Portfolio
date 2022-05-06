import React from "react";

function Portfolio() {
    return (
        <section>
            <div className="app-box mb-4">
                <div className= "app-image-container">
                    <a href="https://bryss-meals.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img className= "app-image" src={require(`../../../assets/image/Bryss.png`)} alt="NEWSIFY application" />
                    </a>

                </div>
                <div className= "app-text">
                    <div className= "d-flex justify-content-between align-items-center">
                    <h3><strong>BRYSS MEALS</strong></h3>
                    <div className="font-small text-end">REACT/VANILLA CSS/NODE.JS MongoDB</div>
                    </div>
                    
                    <p className="font-small"> Web-app running on React.js. A pre-made meal prep service that delivers health and tasty meals straight to user.
                    <br/><br/>Database that user create is stored in connected MongoDB Atlas. Users can create their account, delivery address, reviews, or check out.
                    </p>
                </div>
            </div>
            <div className="app-box mb-4">
                <div className= "app-image-container">
                    <a href="https://restroom-finder.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img className= "app-image-right" src={require(`../../../assets/image/Restroom-Finder_ex.png`)} alt="NEWSIFY application" />
                    </a>

                </div>
                <div className= "app-text-right">
                    <div className= "d-flex justify-content-between align-items-center">
                        <h3><strong>RESTROOM FINDER</strong></h3>
                        <div className="font-small text-end">Node.js/Handlebars</div>
                    </div>
                    <p className="font-small">An MVC app that uses sequelize, express.js, handlebars.js, and Mapbox GL JS to organize, store, and render crowd-sourced, location-based data to and from a map.
                    <br/><br/>Create an account and login. Click on map markers to get bathroom information and reviews. Right-click on the map to create a new restroom location. Go to reviews in the navigation bar to see the reviews you have posted.
                    </p>
                </div>
            </div>
            <div className="app-box mb-4">
                <div className= "app-image-container">
                    <a href="https://yoowook1207.github.io/Newsify/" target="_blank" rel="noreferrer">
                        <img className= "app-image" src={require(`../../../assets/image/Newsify.png`)} alt="NEWSIFY application" />
                    </a>

                </div>
                <div className= "app-text">
                    <div className= "d-flex justify-content-between align-items-center">
                    <h3><strong>NEWS!FY</strong></h3>
                    <div className="font-small text-end">HTML/CSS/JavaScript</div>
                    </div>
                    
                    <p className="font-small">Proof of concept for news accessibility app whose purpose is to expand news consumption habits for people with difficulties with sight/reading, lack of patience for reading the news, and the desire to have a news feed not governed by algorithms but by their input choices.
                    <br/><br/>Uses MediaStack API's Free Plan to fetch news data and the free ResponsiveVoice API to read the articles aloud.
                    </p>
                </div>
            </div>

            <div className="app-grid py-5 row">
                <h3><strong>OTHER PROJECTS</strong></h3>
                <div className="col-4">
                    <div className="card ">
                        <a href="https://github.com/yoowook1207/TUE-TrackUrEmployee" target="_blank"  rel="noreferrer">
                            <img className= "app-image" src={require(`../../../assets/image/TUE.png`)} alt="TUE-TrackUrEmployee" />
                        </a>                    
                        <div className="card-body">
                            <p className="card-text">TUE<br/><span className="font-small">node.js, MySQL</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card ">
                        <a href="https://github.com/yoowook1207/SNAPI" target="_blank"  rel="noreferrer">
                            <img className= "app-image" src={require(`../../../assets/image/Snapi.png`)} alt="something" />
                        </a>
                        <div className="card-body">
                            <p className="card-text">SNAPI<br/><span className="font-small">MongoDB, NOSQL</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card ">
                        <img className= "app-image" src={require(`../../../assets/image/surf.jpg`)} alt="Cs" />
                        <div className="card-body">
                            <p className="card-text">Project<br/><span className="font-small">Skill 1, Skill 2</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default Portfolio;