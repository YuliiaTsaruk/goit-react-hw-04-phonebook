import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  padding: 8px;
  border: 1px solid #6a6a6a;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
`;

export const StyledField = styled(Field)`
  display: block;
  margin: 8px 0;
  border: 1px solid black;
  padding: 4px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  display: block;
  margin-bottom: 8px;
`;

export const StyledBtn = styled.button`
  margin: 4px;
  padding: 8px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #4089e8;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
`;
