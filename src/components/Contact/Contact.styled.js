import styled from 'styled-components';

export const ContactListItem = styled.li`
  list-style: none;
  padding: 7px 20px;
  margin-bottom: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  & {
    font-size: 20px;
  }
`;
export const ContactListItemName = styled.span`
  margin-right: 10px;
`;

export const ContactListItemNumber = styled.span`
  margin-right: 10px;
`;

export const ContactListItemButton = styled.span`
  
  border: 0.5px solid black;
  padding: 5px 10px;
  cursor: pointer;
  & {
    :hover {
      background-color: lightgray;
    }
  }
`;