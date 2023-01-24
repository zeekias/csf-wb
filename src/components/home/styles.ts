import styled from "styled-components";

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    

`

export const HomeSliderSection = styled.section`
    width: 100%;
    height: 10vh;
    padding: 0 8%;
    
`

export const RepresentativesSection = styled.section`

    width: 100%;
    padding: 90px 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 34px;
    background-color: rgb(246 246, 246);
    

    .logos-list{
        padding: 34px;
        max-width: 100%;
        display: grid;
        grid-template-areas: "a b c"
                             "d e f";
        place-items: center;
        row-gap: 34px;
        list-style: none;

        li{
            width: min-content;
            display: flex;
            align-items: center;
            justify-content: center;
            
            img{
                max-width: 350px;
                
            }
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


export const SoluctionsSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 90px 8%;
    gap: 20px;
    
    .soluctions-list{
        margin-top: 20px;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        list-style: none;
        li{
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 13px;
            p{
               text-align: center;
               width: 100%;
               font-size: 15px;
               font-weight: 400;
               line-height: 25px;
               color: #666;
            }
        }
    }
    .button-container{
        button{
            border-radius: 50px;
            border: 2px solid #c43336;
            color: #c43336;
            margin-top: 30px;
            font-weight: 500;
            text-align: center;
            display: inline-block;
            padding: 13px 32px;
            text-transform: uppercase;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.4S ease;

            :hover{
                background-color: #c43336;
                color: white;
            }
        }

    }
`


export const HomeContactSection = styled.section`
    width: 100%;
    padding: 0 8%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 45%;
        .form-title{
            width: 100%;
            padding: 5%;
            color: white;
            background-color: rgb(196, 51, 54);
            border-top-right-radius: 13px;
            border-top-left-radius: 13px;
        }
        .form-info{
            width: 100%;
            padding: 5%;
            display: flex;
            flex-direction: column;
            gap: 21px;
            .f{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 8px;
                input{
                    width: 100%;
                    padding: 5px 2px;
                    border: none;
                    border-bottom: 1px solid rgb(226, 226, 226);
                }
            }

            .f.mensagem{
                height: 200px;

                textarea{
                    width: 100%;
                    height: 100%;
                    text-align: left;
                    border: none;
                    padding: 5px 2px;
                    border-bottom: 1px solid rgb(226, 226, 226);
                    resize: none;
                }
            }
        }

        button{
            padding: 5%;
        }
    }


`