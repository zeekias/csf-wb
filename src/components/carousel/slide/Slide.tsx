import React from 'react'
import { SlideContainer } from './styles'

type IProps = {
    slideType: boolean;
    aContent: string;
    imageUrl: string
    textColor: string;
    tAlign: string;
}

export default function Slide(props: IProps) {
  return (
    <SlideContainer alignContent={props.aContent} backgroundImageUrl={props.imageUrl} color={props.textColor} textAlign={props.tAlign}>
        {
            props.slideType ? 
                   <div>  
                        <h1>Variedade de produtos e <span>competência</span> técnica</h1> 
                        <p>Focado em soluçoes para impressão</p>
                        <button><span>Veja nossos produtos</span></button>
                    </div> 
                   : <div>
                        <h1>A solução <span>personalizada</span> para o seu negócio</h1>
                        <p>Tecnologia especializada para atender a sua necessidade</p>
                        <div className='button-container'>
                            <button className='btn-1'> <span> Contratar agora </span></button>
                            <button className='btn-2'> <span> Veja nossas soluções </span></button>
                        </div>
                   </div>
        }
        
    </SlideContainer>
  )
}
