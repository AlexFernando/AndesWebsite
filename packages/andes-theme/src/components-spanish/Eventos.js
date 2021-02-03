import React, {useState, useEffect} from 'react';
import {connect, styled, css} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';

import {dataEvents} from '../data/dataEvents';

import Calendar from './Calendar';

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

const Eventos = ({state}) => {

    const [isEvent, setIsEvent] = useState(false)
    const [id, setId] = useState(null);

    const eventDay = [];

    const eventMonth = [];

    const eventYear = [];

    const idArray = [];
    
      //Cada vez que se haga un cambio en category el useEffect se vuelve a ejecutar
   
    dataEvents.map( event => {
        const arrayDate = event.date.split("-");
        eventDay.push(parseInt(arrayDate[0]))
        eventMonth.push(parseInt(arrayDate[1])-1)
        eventYear.push(parseInt(arrayDate[2]))
        idArray.push(event.id)
    })

    const filtered = dataEvents.filter(event => event.id === id)
  

    console.log(filtered);
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Eventos
                </Title>
                <Separator></Separator>
                <SubTitle>
                    Participa con nosotros
                </SubTitle>
      
            </HeadContainer>

                <SectionEvent>

                                
                {
                    isEvent ? 
                        filtered.map( event => (    
                            <EventContainer>
                                <h1>ANDES - Eventos</h1>
                                <img  src = {event.urlImage} />
                                
                                <h3>{event.title}</h3>
                                <p>{event.dateString}</p>
                            </EventContainer>   
                    )) 
                    
                    :  
                    <>
                    
                    <EventContainer>
                        <h1>Lo mas reciente</h1>
                        
                        <img  src = {dataEvents[0].urlImage} />
                        <h3>{dataEvents[0].title}</h3>
                        <p>{dataEvents[0].dateString}</p>
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



        </MarginTopContainer>
    );
}
 
export default connect(Eventos);
