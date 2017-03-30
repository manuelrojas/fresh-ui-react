import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"



import * as actions from '../actions/HolidayActions'

import {
  Columns,
  Column,
  Title,
} from 're-bulma'


class CalendarView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDay: new Date(),
        }
    }

    componentDidMount() {
        this.props.callHapi(this.props.country);
    }

    render(){
        return (<Columns>
                       {[1,2,3].map((i)=>{
                         return(<Column key={i}>
                            <DayPicker
                                key={i}
                                initialMonth={ new Date(2008, i) }
                                canChangeMonth={false}
                                modifiers={{ 
                                    holiday: this.props.holidays,
                                    weekends: day => day.getDay() === 0 || day.getDay() === 6, 
                            }}
                        />
                         </Column>)
                       })}
                       
                   
            </Columns>)
    }

}

function mapStateToProps(state){
    return {
      holidays: state.holidays,
      country: state.country
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);