import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormLogin = styled(Form)`
  font-size: 20px;
`;
export const Input = styled(Field)`
  color: blue;
`;

export const ErrorInput = styled.div`
  color: red;
`;
