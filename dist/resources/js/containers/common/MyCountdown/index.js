import React, { Component } from 'react';
import Countdown from "react-countdown";
import * as moment from "moment";

class MyCountdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {endDate} = this.props;
        console.log(endDate);
        const renderer = ({ days,hours, minutes, seconds, completed }) => {
            if (completed) {
                return <div className="d-block"><span className="badge badge-danger py-2 fz-16 px-3">Expired</span> </div>;
            } else {
                return (
                    <div className="lf-counter short-card d-flex justify-content-between">
                        <div className="d-none"></div>
                        <div className="day timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">{Math.floor(days / 10)}</span>
                                <span className="number">{days % 10}</span>
                            </div>
                            <div className="format">Days</div>
                        </div>
                        <div className="hour timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">{Math.floor(hours / 10)}</span>
                                <span className="number">{hours % 10}</span>
                            </div>
                            <div className="format">Hours</div>
                        </div>
                        <div className="min timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">{Math.floor(minutes / 10)}</span>
                                <span className="number">{minutes % 10}</span>
                            </div>
                            <div className="format">Minutes</div>
                        </div>
                        <div className="sec timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">{Math.floor(seconds / 10)}</span>
                                <span className="number">{seconds % 10}</span>
                            </div>
                            <div className="format">Seconds</div>
                        </div>
                    </div>
                );
            }
        };
        return (
            <Countdown date={moment(endDate)} renderer={renderer}></Countdown>
        );
    }
}
export default MyCountdown;
