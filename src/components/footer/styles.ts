import styled from "styled-components";

export const FooterStyled = styled.footer`
    padding:  8% 8% 2% 8%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    gap: 20px;
    background-color: black;
    .image-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .divisor{
        align-self: center;
        width: 100%;
        border-bottom: 0.3px solid white;
    }

    .content{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        list-style: none;
        
        li{
            
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: rgb(255, 255, 255);
            list-style: none;
            h2{
                width: fit-content;
                position: relative;
                font-size: 20px;
                font-weight: 700;
                padding:  13px 0px;
                text-align: left;

                ::after{
                    content: '';
                    position: absolute; 
                    z-index:10;
                    bottom:3px;
                    left:0px;
                    border-bottom:3px solid #c43336;
                    width: calc(25% + 15px) ;
                }
                
            }

            ul{
                display: flex;
                flex-direction: column;
                
                gap: 1rem;
                li{
                    width: fit-content;
                    display: flex;
                    flex-direction: row;
                    
                    
                    gap: 10px;
                    
                    
                    a{
                        font-size: 14px;
                        font-weight: 400;
                        color: rgb(255, 255, 255);
                        text-decoration: none;
                        
                    }
                }
                .localization{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                        a{
                            max-width: 250px;
                            
                            line-height: 25px;
                            align-items: center;
                        }
                    }
            }
            
        }
        .newsletter{
            
            p{
                font-size: 14px;
            }

            .form{
                display: flex;
                align-items: center;
                justify-content: center;
                input{
                    padding:0 5px;
                    width: 80%;
                    height: 50px;
                }
                button{
                    height: 50px; 
                    width: 20%;
                    background-color: #c43336;
                    border: none;
                    cursor: pointer;
                    :hover{
                        background-color: rgb(255, 255, 255);
                    }
                }
            }
        }
            
    }

    .social{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        list-style: none;

        li{
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #252525;
            border-radius: 100%;

            a{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    } 

    .footer-about{
        width: 100%;
        color: rgb(255, 255, 255);
        text-align: center;
        font-size: 15px;
        font-weight: 400;
        a{
            text-decoration: none;
            color: #c43336;
        }
    }
`

