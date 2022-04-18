import React from "react"; 

function Footer () {
    return (
            <div className="row justify-content-center logo-container py-2">
                    <a class="logo-link col-2" href="https://github.com/yoowook1207" target="_blank"  rel="noreferrer">
                        <img className="logo" src={require(`../../assets/logo/GitHub-Mark-64px.png`)} alt="GitHub Logo" />
                    </a>
                    <a class="logo-link col-2" href="https://www.linkedin.com/in/sung-wook-yoo-7a5b92213/" target="_blank"  rel="noreferrer">
                        <img className="logo" src={require(`../../assets/logo/LI-In-Bug.png`)} alt="LinkedIn Logo" />
                    </a>   
            </div>
        )
}

export default Footer