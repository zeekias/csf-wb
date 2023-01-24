import styled from "styled-components";

export const HeaderStyled = styled.header`
    ul{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        list-style: none;
    }
`

export const TopBar = styled.div` 
    display: flex;
    padding: 16px 8%;
    justify-content: space-between;
    background-color: #252525;

    .content{ 
        gap: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #ccc;

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
    justify-content: space-between;
    .image-container{
        padding: 24px 0;
    }
    .content{
        align-items: center;
        gap: 50px; 
        li{
            display: flex;
            align-items: center;
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
`