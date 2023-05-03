import styled from "styled-components";
import { device } from "../styled-sizes-break-points/deviceSizes";

export const AboutContainer = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;    
    gap: 2.125rem;
`

export const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.125rem;
    h2{
            width: fit-content;
            position: relative;
            ::after{
                content: '';
                position: absolute; 
                z-index:10;
                bottom: -0.8125rem;
                left:0px;
                border-bottom:.1875rem solid #c43336;
                width: calc(34% + .9375rem) ;
            }
        }
        p{
            color: rgb(102,102,102);
            font-size: .9375rem;
            text-align: justify;
            line-height: 1.3125rem;
            
        }
`

export const AboutSectionContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 3.4375rem 8%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .image-container{
        width: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        img{
            width: 80%;
            max-width: 100%;
            height: min-content;
        }
    }

    @media ${device.tablet} {
        .image-container{
            display: flex;
        }
        .section-title{
            width: 50%;
        }
    }


`

export const ValuesSectionContainer = styled.section`
    width: 100%;
    padding: 5.5625rem 8%;
    display: flex;
    justify-content: space-between;
    background-color: #dc3545;
    color: white;
    .values{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .value{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;            
            gap: .5rem;
            .title{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                h2{
                    font-size: 2.125rem;
                    text-align: center;
                    letter-spacing: .0625rem;
                }
            }
            p{
                text-align: justify;
                color: rgb(238, 238, 238);
            }
        }
    }
    .value-content{
        
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;

        .title{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .5rem;  
            }

        h2{
            width: 100%;
            font-size: 2.125rem;
            text-align: center;
            letter-spacing: .0625rem;
        }
        ul{
            
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            list-style: none;
            gap: .5rem;

            li{
                color: rgb(238, 238, 238);
            }
        }

    }

`