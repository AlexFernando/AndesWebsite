import React, {useState, useEffect} from 'react';
import {connect, styled, css} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';

import {dataEvents} from './data/dataEvents';
import useFilterYears from './hooks/useFilterYears';

import Calendar from './Calendar';

const SectionEvent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

export const EventContainer = styled.div`

    flex-basis: 40%;
    text-align: center;
    margin-top: 3rem;

    h1 {
        text-transform: uppercase;
        font-size: 2rem;
        
        color: #44841a;
    }

    img {
        max-width: 100%;
        height: auto;
        margin-top: 2rem;
    }

    h3 {
        color: #f07723;
        font-size: 1.5rem;
    }

    p {
        color: #545454;
        font-size: 1.2rem;
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
                <SubTitle>
                    Participa con nosotros
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

                <SectionEvent>

                                
                {
                    isEvent ? 
                        filtered.map( event => (    
                            <EventContainer>
                            
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
