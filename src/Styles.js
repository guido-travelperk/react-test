import styled, { css } from "styled-components";

const defPadTop = css`
  padding-top: 8px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  flex-basis: 24%;
  overflow: hidden;
  position: relative;
  margin: 8px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: palevioletred;
`;

export const CardHeader = styled.header`
  ${defPadTop}
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 8px;
  padding-left: 8px;
`;

export const CardText = styled.small`
  ${defPadTop}
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: left;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  float: ${props => (props.floatRight ? "right" : "")};

  font-size: 1em;
  margin: 8px 0px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
