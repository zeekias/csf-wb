import styled from "styled-components";

export const ComponentSelectedContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;


 

    .content{

        padding: 55px 8%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .image-container{
            width: 30%;
            background-color: red;
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 100%;
                height: auto;
                
            }
        }
        .title-and-description{
            width: 65%;
            max-width: 72%;
            display: flex;
            flex-direction: column;
            gap: 13px;
            .title{
                display: flex;
                flex-direction: column;
                gap: 5px;
                
                
            }
            .description{
                p{
                    text-align: justify;
                    line-height: 25px;
                }
            }
        }
        animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        @keyframes slide-left {
            0% {
                transform: translateX(-100px);
            }
            100% {
                transform: translateX(0);
            }
        }
`