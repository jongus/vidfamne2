import styled from "styled-components";
import { Link } from "gatsby";

export const GlobalStyles = styled.div`
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  table,
  hr {
    padding-left: 16px;
    padding-right: 16px;
    margin: 0;
  }

  & p {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 0;
    margin-bottom: 0;
  }

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-top: 8px;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  & ul,
  ol {
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 16px;
  }
  & li {
    padding-top: 4px;
    padding-bottom: 4pxm;
    margin-top: 0;
    margin-bottom: 0;
  }
  & a {
    color: inherit;
  }
  & blockquote {
    background-color: #cbb48e;
    margin: 8px 16px 8px 16px;
    border-left: 6px solid #c53211;
  }
  & blockquote p {
    padding: 8px 8px 8px 16px;
  }
  & img {
    padding: 16px 16px 8px 16px;
    margin-bottom: 0;
  }
  & p img {
    padding: 0;
    margin-bottom: 0;
  }
  & span {
    padding: 16px 16px 8px 16px;
    margin-bottom: 0;
  }
  & blockquote p:last-child {
    padding: 8px 16px 8px 16px;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  outline: none;
  border: 0;
  color: inherit;
`;

export const FooterRow = styled.div`
  margin: 0;
  padding: 0 8px;
  text-align: right;
`;

export const FooterPart = styled.div`
  margin: 0;
  padding-top: 8px;
  & a {
    text-decoration: none;
    outline: none;
    border: 0;
  }
  & img {
    float: left;
    margin: 12px 8px 0 8px;
    padding: 0;
    outline: none;
    border: 0;
  }
  & p {
    margin: 0;
    padding: 8px;
  }
  & h3 {
    margin: 0;
    padding: 12px 8px 0 8px;
  }
`;
