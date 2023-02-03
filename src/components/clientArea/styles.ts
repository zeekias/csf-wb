import styled from "styled-components";

export const ClientAreaContainer = styled.div`
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    

`

export const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;
    padding: 55px 8%;
    h2{
        color: rgb(37, 37, 37);
        position: relative;
        font-size: 36px;
        ::before{
            position: absolute;
            content: "";
            position: absolute;
            z-index:10;
            bottom:-11px;
            left:40%;
            border-bottom:2px solid #666;
            width: calc(20% + 40px) ;
        }

        ::after{
            position: absolute;
            content: "";
            position: absolute;
            z-index:10;
            bottom:-17px;
            right:37%;
            border-bottom:2px solid #666;
            width: calc(20% + 40px) ;
        }
    }

    p{
        
        text-align: center;
        width: 100%;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        color: #666;
    }
`

export const SectionsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 55px 8%;
    background-color: rgb(246, 246, 246);

`
export const FaqSection = styled.section`

    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
    padding: 0 0 5% 0;
    background-color: white;
    border-radius: 5px;
    .title{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 5px;
        background-color: rgb(196,51,54);
        padding: 4% 2%;
        
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        h3{
            font-size: 21px;
            color: white;
        }
        span{
            width: 80%;
            font-size: 14px;
            font-weight: 500;
        }
    }
    
    .instructions{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 21px;
        padding: 0 5%;
        .list{
            width: 95%;
            display: flex;
            flex-direction: column;
            list-style: none;
            justify-content: center;
            gap: 21px;
        }

        .observation{
            color: rgb(196,51,54);
            text-align: center;
        }

    }

`

export const ContactSection = styled.section`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .title{
        padding: 3% 2%;
        text-align: center;
        h3{
            font-size: 28px;
        }
        span{
            width: 80%;
            font-size: 14px;
            font-weight: 500;
        }
    }
    .contact-fonts{
        width: 100%;
        .content{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 21px;
            h4{
                font-size: 21px;
            }
            .contact{
                display: flex;
                flex-direction: column;
                gap: 13px;
                .info{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 13px;

                    .icon-container{
                        padding: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid gray;
                        border-radius: 50%;
                    }
                    a{
                        text-decoration: none;
                        color: black;
                        font-weight: 500;
                        transition: all 0.3s ease-in-out;
                        :hover{
                            color: rgb(196,51,54);

                        }
                    }
                }
            }

            .button-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 13px;
                a{
                    width: 40%;
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: rgb(196,51,54);
                    border: none;
                    border-radius: 13px;
                    cursor: pointer;
                    text-decoration: none;
                    span{
                        text-align: center;
                        font-size: 14px;
                        color: white;
                    }
                }
            }
        }
    }
`