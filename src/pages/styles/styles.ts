import { device } from "@/src/components/styled-sizes-break-points/deviceSizes";
import styled from "styled-components";

export const IndexContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-flow: column;

    

    .fixed{
        position: relative;
    }

    @media ${device.tablet} {
        #navbar-mobile{
            display: none;
        }
        #navbar-large{
            display: flex;
        }
        .fixed{
            position: fixed;
            top: 0;
            z-index: 100;
    }
    }
`