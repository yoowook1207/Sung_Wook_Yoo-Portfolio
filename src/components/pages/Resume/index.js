import React from "react";


function Resume() {
    return (
        <section>
            <h1>Resume</h1>
            <p>Please click the resume to download.</p>
            <a href="../../../assets/resume/Resume Sungwook Yoo.pdf" download>
                <img className= "app-image" src={require(`../../../assets/resume/Resume.png`)} alt="NEWSIFY application" />
            </a>
        </section>
    )
}


export default Resume;