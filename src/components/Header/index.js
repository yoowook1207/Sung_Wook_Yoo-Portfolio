import React from "react";


function Header ({currentPage, handlePageChange}) {

    return (
        <header className="row justify-content-between align-items-center py-2">
            <h1  className="col-md-6 col-sm-12">
                <div className="myName">
                    <a href="/"> Sung Wook Yoo </a>
                </div>
            </h1>
                <nav  className="col-xxl-4 col-md-6 col-sm-12 nav-bar">
                    <ul className="row justify-content-around nav-ul">
                        
                        <li className={`navLi col-3  ${currentPage==='About' ? 'navActive' : ' '}`}>
                            <a href="#about" onClick={() => handlePageChange('About')}>About</a>
                        </li>
                        <li className={`navLi col-3 ${currentPage==='Portfolio' ? 'navActive' : ' '}`}>
                            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                        </li>
                        <li className={`navLi col-3 ${currentPage==='Resume' ? 'navActive' : ' '}`}>
                            <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                        </li>
                        <li className={`navLi col-3 ${currentPage==='Contact' ? 'navActive' : ' '}`}>
                            <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                        <li className={`navLi-sm col-3  ${currentPage==='About' ? 'navActive' : ' '}`}>
                            <a href="#about" onClick={() => handlePageChange('About')}>A</a>
                        </li>
                        <li className={`navLi-sm col-3 ${currentPage==='Portfolio' ? 'navActive' : ' '}`}>
                            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>P</a>
                        </li>
                        <li className={`navLi-sm col-3 ${currentPage==='Resume' ? 'navActive' : ' '}`}>
                            <a href="#resume" onClick={() => handlePageChange('Resume')}>R</a>
                        </li>
                        <li className={`navLi-sm col-3 ${currentPage==='Contact' ? 'navActive' : ' '}`}>
                            <a href="#contact" onClick={() => handlePageChange('Contact')}>C</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header