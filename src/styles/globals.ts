import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
            margin: 0;
            box-sizing: border-box;
            outline: 0;
        }


    body {
        background: #F8FAFD;
    }

    .bold {
        font-weight: bold !important;
    }

    .ml-0{
        margin-left: 0 !important;
    }

    .fw-600 {
        font-weight: 600 !important;
    }


    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent; 
        border-radius: 30px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: transparent; 
        border-radius: 30px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: transparent; 
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    input#free-solo-with-text-demo {
        padding-left: 35px;
    }

`;
