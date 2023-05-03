import styled from "styled-components";
import { device } from "../styled-sizes-break-points/deviceSizes";

export const ContactContainer = styled.div`
    
     @media ${device.laptop} {
     .sections-container{
        flex-direction: row;
        gap: 0px;
     }   
    }
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
    flex-direction: column;
    gap: 34px;
    align-items: center;
    justify-content: space-between;
    
    padding: 55px 8%;
    background-color: #f6f6f6;

    @media ${device.laptop} {
     section{
        width: 49%;
     }   
    }

`

export const SectionStyled = styled.section`
    width: 100%;
    height: fit-content;
    padding: 5% 5%;
    display: flex;
    gap: 21px;
    border-radius: 13px;
    background-color: white;

    .section-info{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 34px;
        h3{
            position: relative;
            font-size: 27px;
            ::after{
                    content: '';
                    position: absolute; 
                    z-index:10;
                    bottom:-3px;
                    left:0px;
                    border-bottom:3px solid #c43336;
                    width: calc(20% + 15px) ;
                }
        }
        .info-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 21px;
            
            .info{
                width: fit-content;
                display: flex;
                align-items: center;
                gap: 21px;
                
                .icon-container{
                    border: 0.5px solid gray;
                    padding: 5px;
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .info-content{
                    width: 75%;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    text-align: left;
                    h4{
                    font-weight: 500;
                    letter-spacing: 1px;
                    font-size: 16px;
                }
                a{
                    text-decoration: none;
                    color: black;
                }
                span{
                    font-size: 14px
                }
                
            }
        }
    }
    .map-container{
        width: 100%;
        display: flex;
        iframe{
            margin: 0;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            border: none;
        }
    }
    
}
    
    
`