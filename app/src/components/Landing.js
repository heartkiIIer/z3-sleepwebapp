import React from 'react';
import '../styles/landing.css'

class Landing extends React.Component {
    render(){
        return (
            <div>
                <div className="container">
                    <div id="Heading">
                        <div id="login">
                            <h1>Login</h1>
                        </div>

                        <div id="title">
                            <h1>Title</h1>
                        </div>
                    </div>

                    <div id="Features" className="row">
                        <h1>Features</h1>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <div id="CalSch" className="row featurette">
                        <h1>Calendar</h1>
                    </div>

                    <div id="Exercise" className="row featurette">
                        <h1>Exercise</h1>
                    </div>

                    <div id="MindPerson" className="row featurette">
                        <h1>Mindfulness</h1>
                    </div>
                </div>
            </div>
        );
    };
}
export default Landing;