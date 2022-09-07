import React, {Component} from "react";
import './Counter.css';
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import ClockFunctional from "./ClockFunctional";
import Step from "./Step";

class Counter extends Component {
        
        constructor(props) {
            super(props);

            this.state = {
                counterValue: this.props.initvalue,
                showClock: true,
                stepValue: 1,
            };

        }

        changeStep =(step) => {
            this.setState({stepValue: parseFloat(step)})
        }

        changeValue = (action) => {
                
            this.setState((prevState, prevProps) => {

                let currentCounterValue = prevState.counterValue;

                if (action ==='add') {
                    currentCounterValue += 1;

                } else if (action ==='reinit') {
                    currentCounterValue = prevProps.initvalue;
                } else if (action ==='Zwiększ o X') {
                    currentCounterValue += this.state.stepValue;
                } else {
                    currentCounterValue = 0;
                }

                return({
                        counterValue: currentCounterValue
                    });
                });
        }

        toggleClock = () => {
            this.setState((prevState) => {
                return ({
                    showClock: !prevState.showClock
                });
            })
        }

    render() {

        let clockElement = '';

        if(this.state.showClock) {
            clockElement = <ClockFunctional 
            toggleClockMethod={this.toggleClock}/>;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">Show Clock</span>;
        }

        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue}/>
                <ButtonsPanel buttonMethod={this.changeValue}/>
                {clockElement}
                <Step stepValue={ this.state.stepValue } updateStep={ this.changeStep }  />
            </div>
        );
    }
}

export default Counter;
