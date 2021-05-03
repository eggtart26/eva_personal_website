import React from 'react';

const Home = () => {
    return (
        <div>
            <div className = "main">
                <div className = "container-fluid">
                    <div className = "">
                        <div className = "entry-banner text-center">
                            <h1 id = "hello">Hello, I'm</h1>
                            <h1 id = "name">XXXX</h1>
                            <h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
                        </div>
                    </div>
                    <div className = "container text-center">
                        <div className = "row banner-buttons">
                        <div className = "col-sm-4 col-md-4"></div>
                            <div className = "col-sm-4 col-md-2">
                                <a className = "btn btn-default btn-border" href = "#about">Info</a>
                            </div>
                            <div className = "col-sm-4 col-md-2">
                                <a className = "btn btn-default btn-border" href = "#projects">Portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
            </div>
            )
        }
        
    export default Home;