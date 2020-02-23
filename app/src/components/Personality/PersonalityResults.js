import React, {SyntheticEvent} from 'react';
import "../../styles/ItsBedtime.css";
import "../../styles/personalityIntro.css";
import {Link} from 'react-router-dom';
import SideBar from "../sideMenu";

class PersonalityResults extends React.Component {
    constructor(props) {
        super(props);
        this.openURL = this.openURL.bind(this);
        if(window.innerWidth >= 700){
            this.state = {
                padding: '75px 75px 40px',
                personality: null
            };
        }
        else{
            this.state = {
                padding: '10% 10% 5%',
                personality: null
            };
        }
    }

    openURL(event: SyntheticEvent<any>): void {
        window.open("https://www.truity.com/test/big-five-personality-test", "_blank", "width=1000, height=600");
    }
    resize(){
        window.addEventListener('resize', ()=> {
            if(window.innerWidth < 700){
                this.setState({
                    padding: '10% 10% 5%'
                });
            }
            else {
                this.setState({
                    padding: '75px 75px 40px'
                })
            }
        })
    }

    componentDidMount(){
        let currentComponent = this;
        this.getPersonality(currentComponent);
    }
    getPersonality(currentComponent){
        fetch('http://sleepwebapp.wpi.edu:5000/getPersonality', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then( r => {
            return r.json();
        }).then(r => {
            console.log(r);
            // currentComponent.setState({personality : r});
        });
    }
    getOpenness(){
        if(this.state.personality !== null){
            return this.state.personality
        }
        return "NaN"
    }
    getConscientiousness(){
        if(this.state.personality !== null){
            return this.state.personality
        }
        return "NaN"
    }
    getExtraversion(){
        if(this.state.personality !== null){
            return this.state.personality
        }
        return "NaN"
    }
    getAgreeableness(){
        if(this.state.personality !== null){
            return this.state.personality
        }
        return "NaN"
    }
    getNeuroticism(){
        if(this.state.personality !== null){
            return this.state.personality
        }
        return "NaN"
    }

    render(){
        this.resize();
        const styles = {
            containerStyle:{
                padding: this.state.padding,
            }
        };
        const { containerStyle } = styles;
        return (
            <div className = "content personality" id="App">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
                <div style={containerStyle} className="inner" id="page-wrap">
                    <h1 className="blueHeader">Your Big 5 Personality Results</h1>
                    <hr className="hr-settings"/>

                    <h5 className="blueHeader"><b>Openness</b></h5>
                    <p id="o_score">Score: <span>{this.getOpenness()}</span></p>
                    <br/>
                    <h5 className="blueHeader"><b>Conscientiousness</b></h5>
                    <p id="c_score">Score: <span>{this.getConscientiousness()}</span></p>
                    <br/>
                    <h5 className="blueHeader"><b>Extraversion</b></h5>
                    <p id="e_score">Score: <span>{this.getExtraversion()}</span></p>
                    <br/>
                    <h5 className="blueHeader"><b>Agreeableness</b></h5>
                    <p id="a_score">Score: <span>{this.getAgreeableness()}</span></p>
                    <br/>
                    <h5 className="blueHeader"><b>Neuroticism</b></h5>
                    <p id="n_score">Score: <span>{this.getNeuroticism()}</span></p>

                    <div className="d-flex justify-content-between">
                        <Link to="/personality">
                            <button className="btn" onClick={(e) => this.openURL(e)}>Retake Personality Test</button>
                        </Link>
                        <Link to="/personalityIntro">
                            <button className="btn">Done</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    };
}
export default PersonalityResults;
