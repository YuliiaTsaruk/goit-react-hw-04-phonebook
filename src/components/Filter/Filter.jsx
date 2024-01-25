import { StyledInput, StyledLabel } from './Filter.styled';

export const Filter = ({ onUpdateFilter }) => {
  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput type="text" onChange={evt => onUpdateFilter(evt)} />
    </StyledLabel>
  );
};
