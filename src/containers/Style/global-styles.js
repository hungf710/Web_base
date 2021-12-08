import { createGlobalStyle } from 'styled-components';

import FlexStyle from './flex';

// Ant Design
// import SelectStyle from './antd/select';
// import DatePickerStyle from './antd/datePicker';
const GlobalStyle = createGlobalStyle`


// Style Flex
    ${FlexStyle}
// Customize
    @for $i from 0 through 7 {
        .mb_#{$i*5} {
          margin-bottom: 0px + $i * 5 !important;
        }
      }
    
      @for $i from 0 through 7 {
        .mt_#{$i*5} {
          margin-top: 0px + $i * 5 !important;
        }
      }
    
      @for $i from 0 through 7 {
        .mr_#{$i*5} {
          margin-right: 0px + $i * 5 !important;
        }
      }
      @for $i from 0 through 7 {
        .ml_#{$i*5} {
          margin-left: 0px + $i * 5 !important;
        }
      }

`;

export default GlobalStyle;
