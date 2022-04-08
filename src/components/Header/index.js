import React from "react";


function Header ({currentPage, handlePageChange}) {

    return (
        <header className="row justify-content-between align-items-center py-2">
            <h1  className="col-6">
                <a href="/"> Sung Wook Yoo </a>
            </h1>
                <nav  className="col-4">
                    <ul className="row justify-content-around">
                        
                        <li className={`col-3 ${currentPage==='About' ? 'navActive' : ' '}`}>
                            <a href="#about" onClick={() => handlePageChange('About')}>About</a>
                        </li>
                        <li className={`col-3 ${currentPage==='Portfolio' ? 'navActive' : ' '}`}>
                            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                        </li>
                        <li className={`col-3 ${currentPage==='Resume' ? 'navActive' : ' '}`}>
                            <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                        </li>
                        <li className={`col-3 ${currentPage==='Contact' ? 'navActive' : ' '}`}>
                            <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header