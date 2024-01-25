import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Error,
  StyledBtn,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Must contain only number - 0123456789')
    .min(5, 'Must be 5 or more')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField name="name" />
          <Error name="name" component="span" />
        </StyledLabel>

        <StyledLabel>
          Number
          <StyledField name="number" type="tel" />
          <Error name="number" component="span" />
        </StyledLabel>

        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
