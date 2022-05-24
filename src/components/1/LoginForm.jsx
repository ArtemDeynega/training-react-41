import { Formik, ErrorMessage } from 'formik';
import { FormLogin, Input, ErrorInput } from './LoginForm.styled';
import * as yup from 'yup';
import { Component } from 'react';

const initialState = {
  login: '',
  password: '',
};

const shema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(4).max(12).required(),
});

export class LoginFrom extends Component {
  state = {
    login: '',
    password: '',
  };
  handleSunmit = ({ login, password }, { resetForm }) => {
    this.setState({ login, password });

    resetForm();
  };

  render() {
    console.log(this.state.login);
    console.log(this.state.password);
    return (
      <Formik
        initialValues={initialState}
        onSubmit={this.handleSunmit}
        validationSchema={shema}
      >
        <FormLogin autoComplete="off">
          <label htmlFor="login">
            Login
            <Input type="text" name="login" placeholder="Login" />
            <ErrorMessage name="login" component={ErrorInput} />
          </label>
          <label htmlFor="password">
            Password
            <Input type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component={ErrorInput} />
          </label>
          <button type="submit">Submit</button>
        </FormLogin>
      </Formik>
    );
  }
}
