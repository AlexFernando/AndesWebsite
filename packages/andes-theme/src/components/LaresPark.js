import React, {useEffect} from 'react';
import {connect} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card, ImagePotatoPark} from './potatoPark'
import Loading from './Loading';
import {readMore} from './Root';

const LaresPark = ({state, actions}) => {

    useEffect( () => {
        
        if(state.theme.lang === "en") {
            actions.source.fetch("/chalakuypark-lares")
        }

        else {
            actions.source.fetch("/es-chalakuypark-lares")
        }
    }, [])
  
    const pageLaresPark = state.theme.lang === "en" ? state.source.page[330] : state.source.page[309]

    const data = state.source.get('/cardimage');

    let cardImagesArr = [];

    
    if(data.isReady) {
        
        data.items.map(({id}) => { 
                
                if(state.theme.lang === "en") {
                    if(state.source.cardimage[id].filterbypage[0] === 28) {
                        cardImagesArr.push(state.source.cardimage[id])
                    }
                }

                else {
                    if(state.source.cardimage[id].filterbypage[0] === 29) {
                        cardImagesArr.push(state.source.cardimage[id])
                    }
                }
            }
        )
    }

    return ( 
        <>
        {typeof pageLaresPark === "undefined" ? <Loading />

        :

        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    {pageLaresPark.acf.title}
                </Title>
                <Separator></Separator>
                <SubTitle>
                    {pageLaresPark.acf.subtitle}
                </SubTitle>
               
            </HeadContainer>

            <SectionContainer>
                <p>{pageLaresPark.acf.main_text}</p>

                <p>{pageLaresPark.acf.paragraph_1}</p>

                <p>{pageLaresPark.acf.paragraph_2}</p>   

                 
                <CardsContainer>
                    {data.isReady ?
                    
                        <>
                            {cardImagesArr.reverse().map( cardImages => {
                                
                                return(

                                    <Card>
                                        
                                        <ImagePotatoPark src={cardImages.acf.image_card.sizes.medium_large}/>
                                        
                                        <h3>{cardImages.title.rendered}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: cardImages.excerpt.rendered}}>
                                    
                                        </p>

                                        <a href={cardImages.acf.link_card} target="_blank" rel="noopener noreferrer">{readMore}</a>
                                        
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
 
export default connect(LaresPark);