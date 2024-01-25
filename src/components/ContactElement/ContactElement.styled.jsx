import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
  margin-left: 12px;
`;

export const StyledBtn = styled.button`
  font-size: 12px;
  max-width: 48px;
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #4089e8;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
`;
