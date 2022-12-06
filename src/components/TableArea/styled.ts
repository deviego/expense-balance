import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #ccc;
    margin-top: 5px;
    padding: 20px;
    box-shadow: 0 0 5px #ccc ;
    border-radius: 10px;
`
export const TableHeaderColum = styled.th<{widths?: number}> `
    width: ${props => props.widths ? `${props.widths}px` : 'auto'};
padding: 10px 0;
    text-align: left;
`