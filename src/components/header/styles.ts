import styled from "styled-components";
import { device } from "../styled-sizes-break-points/deviceSizes";

export const HeaderStyled = styled.header`
    ul{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        list-style: none;
    }
    @media ${device.laptop} {
        .header-innner{
            justify-content: space-between;
        }
    }
`

export const TopBar = styled.div`
    height: 5vh;
    display: flex;
    padding: 21px 8%;
    justify-content: space-between;
    background-color: #252525;

    .content{
        gap: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #ccc;
        width: 60%;
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            :hover{
                color: white;
            }
        }

    }
    .social{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

`

export const HeaderInner = styled.div`
    width: 100%; 
    padding: 0 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    .image-container{
        padding: 24px 0;
    }
    .content{
        display: none;
        align-items: center;
        justify-content: center;
        gap: 34px; 
        li{

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 15px;

            .icon-container{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(0, 0, 0, 0.3);
                padding: 8px;
                border-radius: 100%;
            }
            h4{
                display: flex;
                flex-direction: column;
                gap: 2px;
                font-size: 16px;
                font-weight: 500;

                a{
                    
                    font-size: 14px;
                    text-decoration: none;

                    color: rgb(37, 37, 37);
                    font-weight: 400;
                }
            }
            
        }
    }

    @media ${device.laptop} {
        .content{
            display: flex;
        }
    }

`