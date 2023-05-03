import styled from "styled-components";

interface iProps {
    alignContent: string;
    textAlign: string;
    backgroundImageUrl: string;
    color: string;
}


export const SlideContainer = styled.div<iProps>`
    width: 100%;
    height: calc(55vh + 55px);
    padding: 0 8%;
    display: flex;
    align-items: center;
    background-image: ${props => props.backgroundImageUrl};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-flow: column;
        align-items: ${props => props.alignContent};
        gap: 13px;
        h1{
            letter-spacing: 1px;
            width: 60%;
            text-align: ${props => props.textAlign};
            font-size: 55px;
            color: ${props => props.color};
            animation: slide-top 2.5s ease-in linear;
            span{
                color: rgb(196,51,54);
            }
        }
        
        p{
            color: ${props => props.color};
            opacity: 0.8;
            width: fit-content;
        }

        button{
            margin: 1rem 0px;
            width: 25%;
            padding: 15px 0px;
            text-transform: uppercase;
            border-radius: 25px;
            border: 1px solid rgb(196, 51, 54);
            background-color: rgb(196,51,54);
            cursor: pointer;

            span{
                font-weight: 500;
                color: white;
            }

            transition: all 0.3s ease;
            :hover{
                background-color: white;
               
                span{
                    color: black;
                }
            }
        }

        .button-container{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items:flex-end;
            justify-content: flex-end;

            .btn-2{
                border: 0;
                background-color: white;
                span{
                    color: black;
                }
                :hover{
                    background-color: rgb(196,51,54);
                    border: 1px solid ${props => props.color} ;
                    span{
                        color: white;
                    }
                }
            }

        }
    }

    @keyframes slide-top {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        50%{
            opacity: 1;
            transform: translateY(0px);
        }
        100% {

        }
}
`