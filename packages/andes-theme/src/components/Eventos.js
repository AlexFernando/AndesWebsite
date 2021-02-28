import React, {useState, useEffect} from 'react';
import {connect, styled, css} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import FeaturedImage from './FeaturedImage';
import Calendar from './Calendar';
import Loading from './Loading';

const SectionEvent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    
    @media(max-width: 768px) {
        flex-direction: column-reverse;
        margin: 0 .5rem;
    }
`;

export const EventContainer = styled.div`

    flex-basis: 40%;
    margin-top: 3rem;

    h1 {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: bold;
        color: #44841a;
    }

    img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
    }

    h3 {
        color: #f07723;
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    p {
        color: #44841a;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

const Eventos = ({state, actions}) => {

    useEffect( () => {
        actions.source.fetch("/search")
     }, [])

   const data = state.source.get('/search');

   const [isEvent, setIsEvent] = useState(false)
   const [id, setId] = useState(null);

   const eventDay = [];

   const eventMonth = [];

   const eventYear = [];

   const idArray = [];

   let arrayOfEvents = [];

   
   if(data.isReady) {

       data.items.map( ({id}) => {

           const singleSearch = state.source.singlesearch[id];
           
           if(singleSearch.typeofpublication[0] === 4) {
               
                arrayOfEvents.push(singleSearch);
                const arrayDate = singleSearch.acf.date.split("-");
                eventDay.push(parseInt(arrayDate[0]))
                eventMonth.push(parseInt(arrayDate[1])-1)
                eventYear.push(parseInt(arrayDate[2]))
                idArray.push(singleSearch.id)
           }
       })
   }

   const filtered = arrayOfEvents.filter(event => event.id === id)
 
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Events
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Take part of our events
                </SubTitle>
      
            </HeadContainer>

            {
                data.isReady ?
                <SectionEvent>
                
                    {
        
                        isEvent ?
        
                            filtered.map( event => (    
                                <EventContainer key={event.id}>
                                    <h1>ANDES - Events</h1>
                                    <FeaturedImage imgID = {event.featured_media} element = "event"/>
            
                                    <h3>{event.title.rendered}</h3>
                                
                                    <p>Date : <span dangerouslySetInnerHTML={ {__html: event.excerpt.rendered}}></span>
                                    </p>
                                </EventContainer>   
                            )) 
        
                        :
        
                        <>
                            
                            <EventContainer>
                                <h1>The Latest</h1>
                                <FeaturedImage imgID = {arrayOfEvents[0].featured_media} element = "event"/>
                                <h3>{arrayOfEvents[0].title.rendered}</h3>
                                <p dangerouslySetInnerHTML={ {__html: arrayOfEvents[0].excerpt.rendered}}></p>
                            </EventContainer>
                        </>
        
        
                   
                    }
        
                        <Calendar 
                            eventDay = {eventDay} 
                            eventMonth = {eventMonth} 
                            eventYear = {eventYear} 
                            setIsEvent = {setIsEvent}
                            setId = {setId}
                            idArray = {idArray}
                        />
                </SectionEvent>
        
                : <Loading />
            }    



        </MarginTopContainer>
    );
}
 
export default connect(Eventos);
