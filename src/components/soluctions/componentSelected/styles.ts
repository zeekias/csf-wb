import styled from "styled-components";
import { device } from "../../styled-sizes-break-points/deviceSizes";

export const ComponentSelectedContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;


    .content.exit-done {
        opacity: 1;
        animation: slide-left 0.5s both; 
    }
    .content.exit-active {
        opacity: 0;
        
    }
 

    .content{

        padding: 55px 8%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.3125rem;
        .image-container{
            width: 100%;
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            img{
                width: 100%;
                height: auto;
                border-radius: 8px;
            }

            @media ${device.tablet}{
                width: 30%;
            }
        }
        .title-and-description{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 13px;
            .title{
                display: flex;
                flex-direction: column;
                gap: 5px;
                
                span{
                    color: rgb(196, 51, 54);
                }
            }
            .description{
                p{
                    text-align: justify;
                    line-height: 25px;
                }
            }

            @media ${device.tablet}{
                width: 65%;
                max-width: 72%;
                gap: 0;
            }
        }
        
        }
        @keyframes slide-left {
            0% {
                transform: translateX(-100px);
            }
            100% {
                transform: translateX(0);
            }
        }
`