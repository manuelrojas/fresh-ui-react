import React from 'react'
import moment from 'moment'

import DayPicker from "react-day-picker"
import "react-day-picker/lib/style.css"
import hapi from '../api'

import {
  Columns,
  Column,
  Notification,
} from 're-bulma'


export default class CalendarView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDay: new Date(),
            holidays: []
        }

        hapi.getHolidays(this.props.country).then(response => {
            let holidays = [];
            Object.keys(response.data.holidays).map((_date, i)=> {
                console.log(_date)
                holidays.push(moment(_date).toDate());
            });
            this.setState({ holidays: holidays });
        });
    }

    render(){
        return (<Columns>
                    
                       {[1,2,3,4,5].map((i)=>{
                         return(<Column>
                            <DayPicker
                                key={i}
                                initialMonth={ new Date(2008, i) }
                                canChangeMonth={false}
                                modifiers={{ 
                                    holiday: this.state.holidays,
                                    weekends: day => day.getDay() === 0 || day.getDay() === 6, 
                            }}
                        />
                         </Column>)
                       })}
                       
                   
            </Columns>)
    }

}