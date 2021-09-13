import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  overflow: hidden;

  > h2 {
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  > p {
    line-height: 1.4rem;
    height: 44px;
    color: #909da9;
    white-space: break-spaces;
  }
`;

export const TitleSection = styled.div`
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    color: grey;
  }

  > p {
    color: #38a1de;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #edf1f5;
  padding: 24px;
  display: flex;
  transition: background-color ease-out 0.2s;
  width: 100%;

  &:hover {
    background-color: #f7f9fc;
  }
`;
