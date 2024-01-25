import { Contact, StyledBtn } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, onDelete }) => {
  return (
    <Contact>
      <p>{name}: </p> <p>{number}</p>
      <StyledBtn onClick={() => onDelete(id)}>Delete</StyledBtn>
    </Contact>
  );
};
