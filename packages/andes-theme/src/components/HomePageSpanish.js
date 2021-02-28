import React, {useEffect} from 'react';
import {connect, styled } from "frontity";
import Link from './Link';
import Loading from './Loading';
import {MarginTopContainer} from './Filosofia';

const Content = styled.div`  
    background-image: url("https://es.andescusco.info/wp-content/uploads/2021/02/link3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
`

const TextoImagen = styled.div`

    background-image: linear-gradient(to top, rgba(34,49,63, .5), rgba(34, 49, 63, .6));
    color: #FFF;
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    overflow-wrap: break-word;
   
    @media(min-width: 768px) {
        height: 573px;
        padding: 6rem;
    }

    h1 {
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 4px;
        margin-top: 5rem;

        @media(min-width: 768px) {
            font-size: 4.5rem;
            margin-right: 20rem;
        }
    }

    p {
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.8;
        font-family: 'Montserrat', sans-serif;

        @media(min-width: 768px) {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            margin-right: 10rem;
        }
    }

        div {

            display: flex;
            justify-content: flex-start;
            align-items: center;

            a {
                text-decoration: none;
                background-color: #f07723;
                text-transform: uppercase;
                color: #fff;
                padding: 1.2rem 2.2rem;
                border-radius: 10px;
                text-align: center;
                margin-bottom: 2rem;
                font-weight: 700;
                font-size: 1.2rem;

                &:hover {
                    background-color: #F05523;
                    transition: all 0.4s;
                }
            }

    }    
`

export const ButtonAction = styled.button`
    display: flex;
    justify-content: center;
    background-color: #f07723 ;
    align-items: center;
    padding: 1.5rem;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5rem;
    

    @media(min-width: 768px) {
        flex-basis: 20%;
        margin-bottom: 0rem;
    }

    &:hover {
        background-color: #F05523;
        transition: all 0.4s;
    }
`;

export const ButtonHome = styled.a`
    display: flex;
    justify-content: center;
    background-color: #f07723 ;
    align-items: center;
    padding: 1rem;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5rem;
    

    @media(min-width: 768px) {
        flex-basis: 20%;
        margin-bottom: 0rem;
    }

    &:hover {
        background-color: #F05523;
        transition: all 0.4s;
    }
`;

export const SectionText = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
   -webkit-box-pack: center;
       -ms-flex-pack: center;
           -webkit-justify-content: center;
           justify-content: center;
   -webkit-box-align: center;
       -ms-flex-align: center;
           -webkit-align-items: center;
           align-items: center;
    padding: 3rem 2rem 1rem 2rem;

    @media(max-width: 768px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
        -webkit-flex-direction: column;
                flex-direction: column;
        padding: 3rem 1rem 1rem 1rem;
    }

   div {
       display: -webkit-box;
       display: -ms-flexbox;
       display: -webkit-flex;
       display: flex;
       -webkit-box-pack: center;
           -ms-flex-pack: center;
       -webkit-justify-content: center;
               justify-content: center;
       -webkit-box-align: center;
           -ms-flex-align: center;
        -webkit-align-items: center;
               align-items: center;
       -webkit-box-orient: vertical;
       -webkit-box-direction: normal;
           -ms-flex-direction: column;
       -webkit-flex-direction: column;
               flex-direction: column;
       padding: 1rem 2rem 1rem 2rem;

       @media(max-width: 768px) {
           padding: 1rem;
       }

       h1 {
           color: #44841a;
           text-align: center;
       }

       p {
           color: #545454;
           font-size: 1.2rem;
           margin-bottom: 0rem;
           text-align: center;
       }  


       div {
           display: -webkit-box;
           display: -ms-flexbox;
           display: -webkit-flex;
           display: flex;
           -webkit-box-pack: center;
               -ms-flex-pack: center;
           -webkit-justify-content: center;
                   justify-content: center;
           -webkit-box-align: center;
               -ms-flex-align: center;
           -webkit-align-items: center;
                   align-items: center;
       
           a {
               text-decoration: none;
               background-color: #f07723;
               text-transform: uppercase;
               color: #fff;
               padding: 1rem;
               border-radius: 10px;
               text-align: center;
               margin-bottom: 2rem;
               font-weight: 700;
           }
       }
   }
`;

const SectionHomePage = styled.div` 
    background-color: #eaeaea;
`;

const CardsHomeContainer = styled.div`
    
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-pack: center;
        -ms-flex-pack: center;
    -webkit-justify-content: center;
            justify-content: center;
    
    -webkit-box-align: center;
        -ms-flex-align: center;
    -webkit-align-items: center;
            align-items: center;
    padding: 2rem;

    @media (max-width: 768px){
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
        -webkit-flex-direction: column;
                flex-direction: column;
        padding: 0rem;
    }
`;

const CardsHome = styled.div`
    display: -webkit-box;
  
  display: -ms-flexbox;
 
  display: -webkit-flex;
 
  display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
       -ms-flex-direction: column;
           -webkit-flex-direction: column;
           flex-direction: column;
   margin: 1rem 2rem;
   -ms-flex-preferred-size: 33.33%;
       -webkit-flex-basis: 33.33%;
           flex-basis: 33.33%;
   background-color: #fff;

   @media (max-width: 768px){
       margin: 1rem;
   }

   div {
       position: relative;
       img {
           width: 100%;
           align-self: center;
           max-height: 40vh; /**new line image height */
       }
       strong {
           display: -webkit-box;
           display: -ms-flexbox;
           display: -webkit-flex;
           display: flex;
           -webkit-box-pack: center;
               -ms-flex-pack: center;
                   -webkit-justify-content: center;
                   justify-content: center;
           background-color: #f07723 ;
           -webkit-box-align: center;
               -ms-flex-align: center;
                   -webkit-align-items: center;
                   align-items: center;
           position: absolute;
           padding: .5rem;
           border-radius: .5rem;
           top: -.5rem;
           left: -1.2rem;
           font-size: .8rem;
           color: #fff;
           -webkit-transform: rotate(-30deg);
               -ms-transform: rotate(-30deg);
                   transform: rotate(-30deg);
       }
   }


   h3 {
       color: #44841a;
       text-align: center;
   }



   span {
       padding: 1rem 1rem 2rem 1rem;
       font-weight: 400;
       font-size: 1rem;  
       text-align: center;      
   }

   div {
       display: -webkit-box;
       display: -ms-flexbox;
       display: -webkit-flex;
       display: flex;
       -ms-flex-preferred-size: 50%;
       -webkit-flex-basis: 50%;
               flex-basis: 50%;
       -webkit-box-pack: center;
           -ms-flex-pack: center;
       -webkit-justify-content: center;
               justify-content: center;
       margin-bottom: 1rem;

       a {
           text-decoration: none;
           background-color: #44841a;
           color: #fff;
           padding: .8rem;
           border-radius: 10px;
           text-align: center;
       }
   }
`;

const HomePage = ({state, actions, libraries}) => {

    const pageHome = state.source.page[69];
   
    const data = state.source.get('/cardimage');

    return (
        
        <>
            {typeof pageHome === "undefined" ? <Loading/> : 
            <>
                <MarginTopContainer>
                    <Content>
                        <TextoImagen>
                            <h1 dangerouslySetInnerHTML={ {__html: pageHome.acf.home_title}}></h1>
                            <p dangerouslySetInnerHTML={ {__html: pageHome.acf.home_slogan}}></p>
                            <div>
                                <Link href={pageHome.acf.home_button_getmore}>Saber más</Link>
                            </div>           
                        </TextoImagen>
                    </Content>
                </MarginTopContainer>
                <SectionText>
                    <div>  
                        <h1>{pageHome.acf.section1_title}</h1>              
                        <p>
                            {pageHome.acf.section1_textcontent}
                        </p>

                        <div>
                            <Link href={pageHome.acf.section1_button_explore}>Explorar</Link>
                        </div>
                    </div>
                </SectionText>

            <SectionHomePage>
            <CardsHomeContainer>
            {data.isReady ?
                
                    <>
                        {data.items.slice(0,3).reverse().map(({id}) => {
                        
                            const cardImages = state.source.cardimage[id];

                            return(
    
                                <CardsHome>
                                    <div>
                                        <img src={cardImages.acf.image_card.sizes.medium}/>
                                    </div>
                            
                                    <h3>{cardImages.title.rendered}</h3>
                                            
                                            <span dangerouslySetInnerHTML={{ __html: cardImages.excerpt.rendered}}>
                                        
                                            </span>
                                    <div>
                                        <Link href={  cardImages.acf.link_card} >LEER MÁS</Link>
                                    </div>
                
                                </CardsHome>
                            )
                        })}

                    </>
                :null
            }
            </CardsHomeContainer>
            </SectionHomePage>       

            <SectionText>
            <div>  
                <h1>{pageHome.acf.section31_title}</h1>              
                <p>
                    {pageHome.acf.section31_textcontent}
                </p>
                
                <div>
                    <Link href={pageHome.acf.section31_buttonlearn}>INFORMARSE</Link>
                </div>
            </div>

            <div>  
                <h1>{pageHome.acf.section32_title}</h1>              
                <p>
                    {pageHome.acf.section32_textcontent}
                </p>
                <div>
                    <Link href={pageHome.acf.section32_buttonlearn}>CONOCER</Link>
                </div>
            </div>
        </SectionText>

        <SectionHomePage>
        <CardsHomeContainer>
            {data.isReady ?
                <>
                    {data.items.slice(3,6).reverse().map(({id}) => {
                        
                        const cardImages = state.source.cardimage[id];

                        return(

                            <CardsHome>
                                <div>
                                    <img src={cardImages.acf.image_card.sizes.medium}/>
                                    <strong>{cardImages.acf.tag_card}</strong>
                                </div>
                        
                                <h3>{cardImages.title.rendered}</h3>
                                        
                                        <span dangerouslySetInnerHTML={{ __html: cardImages.excerpt.rendered}}></span>
                                <div>
                                    <Link href={  cardImages.acf.link_card} >LEER MÁS</Link>
                                </div>
        
                            </CardsHome>
                        )
                    })}

                </>      

                :null
            }
            </CardsHomeContainer>

            </SectionHomePage>       

                </>
            } 
        </>
    )
}

export default connect(HomePage);