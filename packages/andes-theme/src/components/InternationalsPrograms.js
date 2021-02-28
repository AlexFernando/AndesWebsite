import React, {useEffect} from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card} from './potatoPark'
import imgCambioClimatico from '../static/images/programas1.jpeg';
import imgMountainsIndiginous from '../static/images/programas2.jpg';
import imgNativePotato from '../static/images/programas3.jpg';


const InternationalPrograms = ({state, actions}) => {

    useEffect( () => {
        
        if(state.theme.lang === "en") {
            actions.source.fetch("/internationalprogramsandnetworks")
        }

        else {
            actions.source.fetch("/es-internationalprogramsandnetworks")
        }
    }, [])

  
    const pageInternationalPark = state.theme.lang === "en" ? state.source.page[334] : state.source.page[313]

    const data = state.source.get('/cardimage');

    let cardImagesArr = [];

    
    if(data.isReady) {
        
        data.items.map(({id}) => { 
                
                if(state.theme.lang === "en") {
                    if(state.source.cardimage[id].filterbypage[0] === 30) {
                        cardImagesArr.push(state.source.cardimage[id])
                    }
                }

                else {
                    if(state.source.cardimage[id].filterbypage[0] === 31) {
                        cardImagesArr.push(state.source.cardimage[id])
                    }
                }
            }
        )
    }


    return ( 

        <>
        {typeof pageInternationalPark === "undefined" ? <Loading />
        :

        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    {pageInternationalPark.acf.title}
                </Title>
                <Separator></Separator>
                <SubTitle>
                    {pageInternationalPark.acf.subtitle}
                </SubTitle>
              
            </HeadContainer>

            <SectionContainer>
                <p>{pageInternationalPark.acf.main_text}</p>

                 
                <CardsContainer>
                    {data.isReady ?  
                        <>
                            {cardImagesArr.reverse().map( cardImages => {
                                
                                return(

                                    <Card>
                                        
                                        <img src={cardImages.acf.image_card.sizes.medium_large}/>
                                        
                                        <h3>{cardImages.title.rendered}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: cardImages.excerpt.rendered}}>
                                    
                                        </p>

                                        <a href={  cardImages.acf.link_card} >READ MORE</a>
                                        
                                    </Card>
                                )
                            })}

                        </>
                        
                        : null
                    }
                </CardsContainer>
            </SectionContainer>
        </MarginTopContainer>
        }
        </>
    );
}
 
export default connect(InternationalPrograms);