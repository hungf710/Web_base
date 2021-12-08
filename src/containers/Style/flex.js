import { css } from "styled-components";

const FlexStyle = css`
  .d-grid {
    display: grid !important;
  }
  .d-flex {
    display: flex !important;
  }

  .j-c-b {
    justify-content: space-between !important;
  }
  .a-i-c {
    align-items: center !important;
  }

  .j-c-a {
    justify-content: space-around !important;
  }

  .b-s-btn {
    box-shadow: #ccc 0px 0px 4px 1px, rgba(9,30,66,0.25) 0px 5px 5px 0px;
  }

  .flex-row {
    flex-direction: row !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-start {
    justify-content: flex-start !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  

  .align-items-start {
    align-items: flex-start !important;
  }

  .align-items-end {
    align-items: flex-end !important;
  }

  

  .align-items-baseline {
    align-items: baseline !important;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-between {
    align-content: space-between !important;
  }

  .align-content-around {
    align-content: space-around !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  .btn {
    border: 1px solid #7A1BA0;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
  }
  .btnOutline:hover {
    background: none;
    color: #7A1BA0;	
  }
 
`;

export default FlexStyle;
