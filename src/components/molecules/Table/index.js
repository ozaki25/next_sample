import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTh = styled.th`
  border-bottom: 1px solid #bbb;
  border-top: 1px solid #bbb;
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
`;

const StyledTd = styled.td`
  border-bottom: 1px solid #bbb;
  border-top: 1px solid #bbb;
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
`;

const TableRow = ({ tds }) => (
  <tr>
    {tds.map((td, key) => (
      <StyledTd key={key}>{td}</StyledTd>
    ))}
  </tr>
);

const Table = ({ header, body }) => (
  <StyledTable>
    <thead>
      <tr>{header && header.map((th, key) => <StyledTh key={key}>{th}</StyledTh>)}</tr>
    </thead>
    <tbody>{body && body.map((tr, key) => <TableRow key={key} tds={tr} />)}</tbody>
  </StyledTable>
);

export default Table;
