import React, { Component } from 'react';
import Types from 'prop-types';
import Navigator from './Navigator/Navigator';
import ViewSwitch from './ViewSwitch/ViewSwitch';
import './Calendar.css'
import { Header, Body } from './TimeTable/TimeTable';
import { MonthLabel, WeekLabel, NextMonth, NextWeek, LastMonth, LastWeek, Hours, Headers, FirstOfMonth, Days } from './StateFuncs/StateFuncs';

/*
----------------------------------------------
Calendar

Denna komponent håller reda på en aktuell vy
och en aktuell tidpunkt. Med hjälp av lite logik
som bara är enkla anrop till date-fns biblioteket
renderar den en vy över den aktuella tidsperioden
och exponerar lite sätt till den att ändra aktuell
tidsperiod och tidpunkt.
----------------------------------------------
*/
class Calendar extends Component {
    constructor(props) {
        super(props);

        this.availiableViews = ["week", "month"];

        this.state = { 
            refDate: props.initDate,
            view: props.initView
        };
    }
    render() {
        return (
            <div className="calendar">
                <Navigator 
                    className="navigator"
                    currentViewLabel={this.label()}
                    now={() => this.setState({ refDate: new Date() })}
                    last={() => this.setState({ refDate: this.last() })}
                    next={() => this.setState({ refDate: this.next() })}/>
                <ViewSwitch
                    className="viewSwitch"
                    views={this.views()}
                    switch={v => () => this.setState({ view: v })}/>
                <table className={"currentView"}>
                    <Header headers={[''].concat(this.headers().map(x => x.label))}/>
                    <Body className={this.state.view} body={this.body()} />
                </table>
            </div>
            )
    }

    body() {
        return this.state.view === "week"
            ? Hours(this.headers())
            : Days(this.headers())
    }

    headers() {
        return this.state.view === "week" 
         ? Headers(this.state.refDate)
         : Headers(FirstOfMonth(this.state.refDate));
    }

    label() {
        return this.state.view === "week"
            ? WeekLabel(this.state.refDate)
            : MonthLabel(this.state.refDate);
    }

    nextView() {
        return this.state.view === "week"
            ? "month"
            : "week"
    }

    last() {
        return this.state.view === "week"
         ? LastWeek(this.state.refDate)
         : LastMonth(this.state.refDate)
    }
    
    next() {
        return this.state.view === "week"
            ? NextWeek(this.state.refDate)
            : NextMonth(this.state.refDate)
    }

    views() {
        return this.availiableViews.map(x => {
            return { view: x, current: this.state.view === x }
        })
    }
}

Calendar.propTypes = {
    initDate: Types.instanceOf(Date),
    initView: Types.oneOf(['week', 'month'])
}

export default Calendar;