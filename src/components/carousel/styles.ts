import styled from "styled-components";


export const CarouselContainer = styled.div`
    width: 100%;


    .carousel-status{
        display: none;
    }

    .control-arrow.control-next, .control-arrow.control-prev{
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(37, 37, 37);
        border-radius: 50%;
        top: 50%;
        margin: 0 2%;

        
    }
`