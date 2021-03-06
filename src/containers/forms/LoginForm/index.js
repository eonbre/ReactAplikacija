import validators, { validateFirstName, validatePassowrd, validateUsername, validateEmail, validatelastName, required, validatePasswordLength } from '../../validators'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';
import { Form, Field } from 'react-final-form';

import {InputPassword, SubmitButtonLogin, InputField } from '../../../components/InputFields';
import Button from 'react-bootstrap/Button'
import { composeValidators } from '../RegisterForm/'
import Spinner from 'react-bootstrap/Spinner'

import { authLogin } from '../../../actions/auth';
import { connect } from 'react-redux'; 
class LoginForm extends Component {
  onSubbmit(values) {
    this.props.authLogin(values);
  }
  
  
    render(){
        return(
          <div>
         <h1>🏁 Login Form</h1>
              
              
              <Form 
                onSubmit={this.onSubbmit.bind(this)}
                render= { ( { handleSubmit, form, submitting, pristine, values, valid, e }) => (
                  <form onSubmit={handleSubmit}>
                  <Field 
                    name="username"
                    component={InputField}
                    hintText="username"
                    floatingLabelText="username"
                    validate={required}
                    />

                  <Field 
                        name="password"
                        component={InputField}
                        hintText="Password"
                        floatingLabelText="password"
                        type="password"
                        validate={composeValidators(required, validatePasswordLength) }
                  />

                <Button size="lg" type="submit">Login</Button>
                  </form>
              ) } />  
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    user: state.auth,
    lang: state.lang
  }
}



export default connect(mapStateToProps,{authLogin})(LoginForm);