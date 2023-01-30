import styled from "styled-components";


export const SoluctionsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    gap: 55px;
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
    padding: 0px 8%;
    margin-bottom: 55px;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    
    align-content: space-between;
    justify-content: space-between;
    list-style: none;
    
    gap: 8px;
    
    
    li{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
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
            }
            span{
                font-size: 12px;
                color: rgb(196, 51, 54);
            }
        }
        align-items: center;
        justify-content: center;
        p{
            height: calc(100%);
            font-size: 12px;
            text-align: center;
            color: rgb(102, 102, 102);
        }
    }
`