import React, {useState, useEffect} from 'react';
import {connect, styled, css} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';

import {dataEvents} from './data/dataEvents';
import useFilterYears from './hooks/useFilterYears';


const SectionEvent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
`;

export const EventContainer = styled.div`

    margin: 2rem 0;
    text-align: center;
    flex-basis: 50%;


    @media(max-width: 768px) {
        flex-basis: 100%;
    }
   
    img {
        max-width: 100%;
    }

    h3 {
        color: #f07723;
    }

    p {
        color: #545454;
    }
`;

const Eventos = ({state}) => {

    const [filtered, saveFiltered] = useState([]);

    // categories 
    const {category, FilterUI} = useFilterYears();
    
      //Cada vez que se haga un cambio en category el useEffect se vuelve a ejecutar
    useEffect( () => {
        if(category) {
            const filter = dataEvents.filter(event => event.date === category)
            saveFiltered(filter);
        } else {
            saveFiltered(dataEvents)
        }
    }, [category, dataEvents])

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
                    {FilterUI()}

                    {filtered.length > 0 ? 
                        filtered.map(event => (
                            <EventContainer>
                                <img src={event.urlImage} />
                            
                                <h3>{event.title}</h3>
                        
                                <p>{event.date}</p>
                                
                            </EventContainer>
                        ))

                        : 

                        null
                    }
                </SectionEvent>

     

        </MarginTopContainer>
    );
}
 
export default connect(Eventos);
