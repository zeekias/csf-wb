import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    padding: 55px 8%;
    display: flex;
    flex-direction: column;    
    gap: 34px;
`

export const SectionTitle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 34px;
    h2{
            width: fit-content;
            position: relative;
            ::after{
                content: '';
                position: absolute; 
                z-index:10;
                bottom: -13px;
                left:0px;
                border-bottom:3px solid #c43336;
                width: calc(34% + 15px) ;
            }
        }
        p{
            color: rgb(102,102,102);
            font-size: 15px;
            text-align: justify;
            line-height: 21px;
            
        }
`

export const AboutSectionContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .image-container{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 80%;
            max-width: 100%;
            height: min-content;
        }
    }
`

export const ValuesSectionContainer = styled.section`
    width: 100%;
    .values{
        width: 100%;
        display: flex;
        
        .value{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 21px;
            .title{

                h2{
                    font-size: 34px;
                    text-align: center;
                }
            }
            p{
                width: 90%;
                text-align: justify;
                
            }
        }
    }
    .value-content{
        display: flex;
        flex-direction: column;
        
    }

`