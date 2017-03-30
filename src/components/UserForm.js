import React from 'react'
import moment from 'moment'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import * as actions from '../actions/HolidayActions'

import {
  Button,
  Container,
  Group,
  Hero,
  HeroBody,
  Input,
  Title,
} from 're-bulma'


 class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            startDate: moment(),
            number: 0,
            country: '',
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleSubmit(event){
        this.props.setParams({ 
            country: this.state.country,  
            number: this.state.number
        });

        this.props.callHapi(this.state.country);
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
                                <Input type="text" onChange={ e => {this.setState({country: e.target.value})}} placeholder="Country Code" />    
                                <Button color="isSuccess">Search</Button>
                            </Group>
                        </form>
                        <Title size="is2">Country: {this.props.country}</Title>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }

}

function mapStateToProps(state){
    return {
      country: state.country,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);