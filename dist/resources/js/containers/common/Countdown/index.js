import React, { Component } from 'react';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0
        };

    }

    render() {
        return (
            <div className="count-down">
                <div className="timer">
                    <div className="lf-counter short-card d-flex justify-content-between" data-time="1543334">
                        <div className="d-none"></div>
                        <div className="day timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">0</span>
                                <span className="number">0</span>
                            </div>
                            <div className="format">Days</div>
                        </div>
                        <div className="hour timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">0</span>
                                <span className="number">0</span>
                            </div>
                            <div className="format">Hours</div>
                        </div>
                        <div className="min timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">0</span>
                                <span className="number">0</span>
                            </div>
                            <div className="format">Minutes</div>
                        </div>
                        <div className="sec timer-unit">
                            <div className="d-flex timer-inner">
                                <span className="number">0</span>
                                <span className="number">0</span>
                            </div>
                            <div className="format">Seconds</div>
                        </div>
                        <div className="d-none"><span
                            className="badge badge-danger py-2 fz-16 px-3">Expired</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
