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
        this.state = {
            startDate: moment()
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
       
    }

    render(){
        return (
            <Hero color="isLight">
                <HeroBody>
                    <Container>
                        <form>
                            <Group>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="Calendar-ui-input"
                                />
                                <Input type="number" placeholder="Number of Days" />
                                <Input type="text" placeholder="Country Code" />    
                                <Button color="isSuccess">Search</Button>
                            </Group>
                        </form>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }

}