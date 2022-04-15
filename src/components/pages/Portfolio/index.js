import React from "react";

function Portfolio() {
    return (
        <section>
            <div className="app-box mb-3">
                <div className= "app-image-container">
                    <a href="https://yoowook1207.github.io/Newsify/" target="_blank">
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
            <div className="app-box mb-3">
                <div className= "app-image-container">
                    <a href="https://restroom-finder.herokuapp.com/" target="_blank">
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
            <div className="app-box mb-3">
                <div className= "app-image-container">
                    <a href="https://yoowook1207.github.io/Newsify/" target="_blank">
                        <img className= "app-image" src={require(`../../../assets/image/Newsify.png`)} alt="NEWSIFY application" />
                    </a>

                </div>
                <div className= "app-text">
                    <div className= "d-flex justify-content-between align-items-center">
                        <h3><strong>UPCOMING PROJECT</strong></h3>
                        <div className="font-small text-end">React.js</div>
                    </div>
                    <p className="font-small">Lorem ipsum dolor sit ame, conjecture advising elite. Nuns utricle.
                    <br/><br/>Lorem ipsum dolor sit ame, conjecture advising elite. Nuns utricle. Lorem ipsum dolor sit ame, conjecture advising elite. Nuns utricle.
                    </p>
                </div>
            </div>

        </section>
    )
}


export default Portfolio;