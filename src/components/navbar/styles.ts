import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    padding: 0 8%;
    background-color: #f6f6f6;
    
    .content{
        width: 100%;
        display: flex;
        align-items: center; 
        gap: 40px;
        list-style: none;
        text-transform: uppercase;
        font-weight: 500; 
        font-size: 14px;
        li{
            cursor: pointer; 
            span{
                padding: 2rem 0;
                height: 100%;
                color: rgb(37, 37, 37);
                
            }
            :hover{
                span{
                    border-bottom: 3px solid rgb(196, 51, 54);
                    color: rgb(196, 51, 54);
                }
            }


        }
    }
    button{
        margin: 1rem 0;
        width: 25%;
        padding: 15px 0px;
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
`