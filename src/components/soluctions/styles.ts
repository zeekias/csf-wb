import styled from "styled-components";
import { device } from "../styled-sizes-break-points/deviceSizes";


export const SoluctionsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    gap: 55px;
    scroll-behavior: smooth;
`

export const SectionTitle = styled.div`
    width: 100%;
    margin-top: 55px;
    padding: 0px 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 34px;

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

export const SoluctionsList = styled.ul`
    width: 100%;
    height: fit-content;
    padding: 0px 8%;
    margin-bottom: 55px;
    display: grid;
    grid-template-columns: 49% 49%;
    align-content: space-between;
    justify-content:  space-between;
    list-style: none;
    
    gap: 8px;
    row-gap: 55px;
    
    
    li{
        width: 100%;
        height: 100%;
        display: flex;

        flex-direction: column;
        align-items: center;
        gap: 8px;
        

        .image-container{
            width: fit-content;
            height: 100px;
            position: relative;
            .icon-container{
                background-color: rgb(0, 0, 0, 0.5);
                position: absolute;
                border-radius: 50%;
                padding: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                cursor: pointer;
                z-index: 51;

                :hover{
                    background-color: white;
                    svg{
                        fill: black;
                    }
                }
            }
            img{
                width: 100%;
                height: 100%;
                border-radius: 8px;
            }
            ::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 50;
                background: rgb(196, 51, 54);
                opacity: 0;
                border-radius: 8px;
            }
            :hover{
                ::before{
                    opacity: 0.8;
                    animation: resize 0.35s ease-in-out;
                }
                .icon-container{
                    opacity: 1;
                    animation: slide-fwd-center .45s both;
                }
            }

            @keyframes resize {
                0% {
                    border-radius: 50%;
                    transform: scale(0);
                }
                100% {
                    transform: scale(1) ;
                }
            }

            @keyframes slide-fwd-center {
                0% {
                    opacity: 0;
                    transform: scale(1.5) translate(-50%, -50%);
                }
                100% {
                    opacity: 1;
                    transform: scale(1) translate(-50%, -50%);
                }
}
        }
        .image-container.selected{
            ::before{
                opacity: 0.8;
            }
        }
        .title{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            h4{
                font-size: 20px;
                letter-spacing: 1px;
                font-weight: 600;
                text-align: center;
            }
            span{
                font-size: 12px;
                color: rgb(196, 51, 54);
                text-align: center;
            }
        }
        
        p{
            display: none;
            height: calc(100%);
            font-size: 12px;
            text-align: center;
            color: rgb(102, 102, 102);
        }
    }

    @media ${device.tablet}{
        grid-template-columns: 30% 30% 30%;
        li{
            p{
            display: flex; 
        }
        }
    }
    
`