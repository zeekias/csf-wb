import styled from "styled-components";
import { device } from "../styled-sizes-break-points/deviceSizes";

export const Nav = styled.nav`
display: flex;
position: fixed;
width: fit-content;

right: 0;
top: 5vh;
z-index: 100;
background-color: #f6f6f6; 
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
.navbar-button{
    border: none;
    width: 20px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    
}
.content.flex{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
        gap: 24px;
        list-style: none;
        text-transform: uppercase;
        font-weight: 500; 
        font-size: 14px;
        padding: 20px;
        
        li{
            cursor: pointer; 
            span{
                height: 100%;
                color: rgb(37, 37, 37);
                
                
            }
            .selected{
                border-bottom: 5px solid rgb(196, 51, 54);
                color: rgb(196, 51, 54);
            }
            :hover{
                span{
                    border-bottom: 5px solid rgb(196, 51, 54);
                    color: rgb(196, 51, 54);
                }
            }

            
        }
        button{
        margin: 1rem 0;
        width: 100%;
        padding: 15px 10px;
        text-transform: uppercase;
        border-radius: 25px;
        border: 1px solid rgb(196, 51, 54);
        background-color: rgb(196, 51, 54);
        cursor: pointer;
        span{
            color: white;
            font-weight: 500;
            font-size: 14px;
        }
        :hover{
                background-color: white;
                border: 1px solid black;
                span{
                    color: black;
                }
            }
    }
    }
.content.none{
    display: none;
}
     
    
    @media ${device.laptop} {
        .navbar-container.mobile{
            display: none;
        }
        .navbar-container.large{
            display: flex;
        }
    }
    `