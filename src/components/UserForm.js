import React from 'react'
import moment from 'moment'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {
  Button,
  Container,
  Group,
  Hero,
  HeroBody,
  Input,
} from 're-bulma'


export default class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            startDate: moment(),
            number: 0,
            code: '',
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
       
    }

    handleSubmit(event){
        console.log(this.state)
        event.preventDefault();
    }

    render(){
        return (
            <Hero color="isLight">
                <HeroBody>
                    <Container>
                        <form onSubmit={this.handleSubmit}>
                            <Group>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="Calendar-ui-input"
                                />
                                <Input type="number" onChange={ e => {this.setState({number: e.target.value})}} placeholder="Number of Days" />
                                <Input type="text" onChange={ e => {this.setState({code: e.target.value})}} placeholder="Country Code" />    
                                <Button color="isSuccess">Search</Button>
                            </Group>
                        </form>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }

}