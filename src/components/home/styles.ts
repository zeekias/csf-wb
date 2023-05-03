import styled from "styled-components";
import { device } from "../styled-sizes-break-points/deviceSizes";

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomeSliderSection = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const RepresentativesSection = styled.section`
    
    width: 100%;
    padding: 5.625rem 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 34px;
    background-color: rgb(246 246, 246);
    
    .logos-list.mobile{
        display: flex;
    }

    .logos-list{
        margin-left: -1.3125rem;
        padding: 2.125rem;
        max-width: 100%;
        display: flex;
        display: none;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 1.3125rem;
        row-gap: 2.125rem;
        list-style: none;

        li{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: .9375rem;
            img{
                max-width: 21.875rem;
                filter: grayscale(100%);
                filter: gray;
            }
        }
       
    }
    @media ${device.laptop} {
        .logos-list{
            display: flex;
        }
            .logos-list.mobile{
                display: none;
            }
        }


`

export const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.125rem;

    h2{
        color: rgb(37, 37, 37);
        position: relative;
        font-size: 2.25rem;
        text-align: center;
        ::before{
            position: absolute;
            content: "";
            position: absolute;
            z-index:10;
            bottom:-0.6875rem;
            left:40%;
            border-bottom:.125rem solid #666;
            width: calc(20% + 2.5rem) ;
        }

        ::after{
            position: absolute;
            content: "";
            position: absolute;
            z-index:10;
            bottom:-1.0625rem;
            right:37%;
            border-bottom:.125rem solid #666;
            width: calc(20% + 2.5rem) ;
        }
    }

    p{
        
        text-align: center;
        width: 100%;
        font-size: .9375rem;
        font-weight: 400;
        line-height: 1.5625rem;
        color: #666;
    }
`


export const SoluctionsSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5.625rem 8%;
    gap: 1.25rem;
    
    .soluctions-list.mobile{
        width: 100%;
        display: flex;
        flex-direction: column;

        max-width: 100%;
        
        .carousel-root{
            width: 100%;
        }
    }
    
    

    .soluctions-list{
        display: none;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        margin-top: 1.25rem;

        li{
            width: 100%;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .8125rem;
            text-align: center;
            margin-bottom: .9375rem;
            p{
               text-align: center;
               width: 60%;
               font-size: .9375rem;
               font-weight: 400;
               line-height: 1.5625rem;
               color: #666;
            }
        }
        @media ${device.laptop} {
            li{
                width: 20%;

                p{
                    width: 100%;
                }
            }
        }
    }

    .button-container{
        button{
            border-radius: 3.125rem;
            border: .125rem solid #c43336;
            color: #c43336;
            margin-top: 1.875rem;
            font-weight: 500;
            text-align: center;
            display: inline-block;
            padding: .8125rem 2rem;
            text-transform: uppercase;
            cursor: pointer;
            font-size: .875rem;
            transition: all 0.4S ease;

            :hover{
                background-color: #c43336;
                color: white;
            }
        }

    }
    @media ${device.laptop} {
        .soluctions-list{
            display: flex;
        }
        .soluctions-list.mobile{
            display: none;
        }
     }
`


export const HomeContactSection = styled.section`
    width: 100%;
    padding: 5.625rem 8%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    row-gap: 34px;
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("bg-conatct4.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    .from-contact-section{
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.125rem;
        
        .contact-title{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            color: white;
            gap: 1.9375rem;
            h2{
                font-size: 2rem;
            }
            p{
                width: 100%;
                text-align: justify;
                font-size: .9375rem;
                font-weight: 400;
                line-height: 1.5625rem;
                letter-spacing: .0625rem;
            }
        }

        .progress-bar{
            width: 100%;
            display: grid;
            grid-template-areas: "a b c"
                                 "d d d";
            place-items: center;
            place-content: center;

            row-gap: .8125rem;


           li{
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            gap: 2.125rem;

            span{
                text-transform: uppercase;
                font-weight: 400;
                color: white;
                letter-spacing: .0625rem;
                cursor: default;
            }
           }
           .a{
            grid-area: a;
           }
           .b{
            grid-area: b;
           }
           .c{
            grid-area: c;
           }
           .d{
            width: 45%;
            grid-area: d;
           }
        }
    }

    .form{
        width: 100%;
        height: max-content;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: .3125rem;
        .form-title{
            display: flex;
            flex-direction: column;
            gap: .3125rem;
            width: 100%;
            padding: 5%;
            color: white;
            background-color: rgb(196, 51, 54);
            border-top-right-radius: .3125rem;
            border-top-left-radius: .3125rem;
            h3{
                font-size: 1.5625rem;
                font-weight: 700;
                line-height: 1.875rem;
                letter-spacing: .125rem;
            }
        }
        .form-info{
            width: 100%;
            padding: 5%;
            display: flex;
            flex-direction: column;
            gap: 2.125rem;
            .f{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: .5rem;
                input{
                    width: 100%;
                    padding: .8125rem .125rem;
                    border: none;
                    border-bottom: .0625rem solid rgb(226, 226, 226);
                }
            }

            .f.mensagem{
                height: 8rem;

                textarea{
                    width: 100%;
                    height: 100%;
                    text-align: left;
                    border: none;
                    padding: .3125rem .125rem;
                    border-bottom: .0625rem solid rgb(226, 226, 226);
                    resize: none;
                }
            }
            .captcha-container{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                max-width: 100%;
                transform:scale(0.87);
                    -webkit-transform:scale(0.87);
                    transform-origin:0 0;
                    -webkit-transform-origin:0 0;
            }

            

            @media ${device.tablet} {
                .f.mensagem{
                height: 12.5rem;
                }
                .captcha-container{
                    transform:scale(1);
                    -webkit-transform:scale(1);
                    transform-origin:0 0;
                    -webkit-transform-origin:0 0;
            }
            }
        }

        button{
            padding: 5%;
            transition: all 0.4S ease;
            background-color: #252525;
            border-radius: .3125rem;
            border: none;
            cursor: pointer;
            span{
                color: white
            }

            :hover{
                background-color: #c43336;
            }
        }
    }

    @media ${device.laptop} {
            .from-contact-section, .form{
                width: 45%;
            }
        }


`