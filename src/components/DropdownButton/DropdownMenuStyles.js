import styled from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  right: ${(props) => props.alignRight && 0};
  left: ${(props) => !props.alignRight && 0};
  top: ${(props) => props.alignBottom && "100%"};
  bottom: ${(props) => !props.alignBottom && "100%"};
`;

export const ToggleButton = styled.div`
  display: grid;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.black700};
  color: ${({ theme }) => theme.colors.white100};
  background-color: ${(props) =>
    props.dropdownIsOpen && props.theme.colors.black800};
  cursor: pointer;
`;

export const Option = styled.div`
  padding: 10px;
  display: block;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.black800};
  color: ${({ theme }) => theme.colors.white100};
  min-width: 80px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue200};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.blue300};
  }
`;
