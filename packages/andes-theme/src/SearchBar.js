import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {ButtonAction} from './bgImage';
import {SectionContainer} from './Filosofia';
import LinkButton from "./LinkButton";

export const SearchBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2rem;

    @media (max-width: 768px){
        padding: 0 1rem;
        flex-direction: column;
        align-items: stretch;
    }
`;

export const InputBar = styled.form`
    display: flex;
    flex-basis: 70%;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    padding: 1rem 2rem 1rem 2rem;
    border: 1px solid gray;
    border-radius: 1rem;

    @media (max-width: 768px){
        margin-bottom: 1rem;
    }

    input {
        font-size: 1.6rem;
        border: none;
        outline: none;
        padding-left: 1rem;
        width: 70%;
        @media (max-width: 768px){
            width: 100%;
            font-size: 1.2rem;
        }
    }    
`


export const PostStyled = styled.div`
        
    background-color: #fff;
    padding: 2rem;
    margin: 2rem;

    h3 {
        color: #44841a;
        font-size: 1.8rem;
    }

    p {
        font-size: 1.3rem;
    }

    @media (max-width: 768px){
        margin: 0rem;

        div {
            font-size: .8rem;
        }
    }
`;

export const NotFoundContainer = styled.div`
    
    text-align: center;
    margin-top: 2rem;
    color: #545454;

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: 700;
    }
`

const SearchBarComponent = ({state}) => {

    const people = [

        {
            titulo: "Semillas de Papa",
            content: "Para los pueblos indígenas, las semillas son más que alimentos: son miembros de su familia",
            categoria: "Categoria 1",
            fecha : "Noviembre 17, 2020"
        },
   
        {
            titulo: "Cómo el Parque de la Papa del Perú podría evitar la crisis alimentaria mundial",
            content: "El parque agrícola alto en los Andes conserva la experiencia para criar cepas aptas para un clima cambiante. Para los pueblos indígenas, las semillas son más que alimentos: son miembros de su familia",
            categoria: "Categoria 2",
            fecha : "Noviembre 1, 2020"
        },

        {
            titulo: "Nota de Prensa: Rechazo de la papa GM en África",
            content: "Los agricultores andinos y africanos condenan la información de secuencia digital de papas de los centros de origen: abre puertas para la biopiratería.",
            categoria: "Categoria 3",
            fecha : "Octubre 15, 2020"
        },

        {
            titulo:   "El Parque de la Papa – Zona de Agrobiodiversidad",
            content: "El Parque de la Papa fue reconocido recientemente como una Zona de Agrobiodiversidad por el estado peruano.",
            categoria: "Categoria 2",
            fecha : "Septiembre 15, 2020"
        },

        {
            titulo:   "Respuestas locales a la crisis COVID-19",
            content: "Igual que nuestros hermanos y hermanas en todo el mundo, nos enfrentamos a desafíos sin precedentes en el contexto de la pandemia actual. Estamos trabajando para proporcionar recursos a nuestros socios indígenas, apoyar a nuestro personal, y re-imaginar formas de trabajar en un mundo donde las reuniones grupales se han vuelto imposibles.",
            categoria: "Categoria 1",
            fecha : "Julio 15, 2020"
        },
    ];


    const [searchTerm, setSearchTerm] = useState("");
    
    const [searchResults, setSearchResults] = useState([]);

    const [alternativeTerm, setAlternativeTerm] = useState("");

    const handleChange = event => {
       setSearchTerm(event.target.value);
       
    };

    const handleSubmit = e => {

        e.preventDefault();
  
        const results = people.filter(person => person.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || person.content.toLowerCase().includes(searchTerm.toLowerCase()));
     
        setSearchResults(results);

        if(results.length === 0 && searchTerm) {
            setAlternativeTerm(searchTerm);
        }

        setSearchTerm("")
    };
    
    return ( 


        <SectionContainer css={css`margin-top: 18vh;`}>
       
            <SearchBar>
                <InputBar>
                    <FontAwesomeIcon css={css`font-size: 1.8rem; color: #44841a;`}icon={faSearch}/>
                    
                  
                        <input 
                            type="text"
                            placeholder="What are you searching for?"
                            value={searchTerm}
                            onChange={handleChange}
                        />
            
                
                </InputBar>
            
                <ButtonAction  onClick={handleSubmit}>
                        <LinkButton href="/searchbar">BUSCAR</LinkButton>
                </ButtonAction>
            </SearchBar>
            
            { searchResults.length === 0 && alternativeTerm === "" ?

                people.map(item => (
                    <PostStyled>
                        <h3>{item.titulo}</h3>
                        <p>{item.content}</p>
                        <div>
                            <strong>{item.categoria}</strong>
                            &nbsp; &nbsp; &nbsp; 
                            <strong>|</strong>
                            &nbsp; &nbsp; &nbsp; 
                            <strong>Fecha:</strong>
                            &nbsp;&nbsp;
                            {item.fecha}
                        </div>
                    </PostStyled>
                ))

                : null
            }


            {    
                searchResults.map(item => (
                    <PostStyled>
                        <h3>{item.titulo}</h3>
                        <p>{item.content}</p>
                        <div>
                            <strong>{item.categoria}</strong>
                            &nbsp; &nbsp; &nbsp; 
                            <strong>|</strong>
                            &nbsp; &nbsp; &nbsp; 
                            <strong>Fecha:</strong>
                            &nbsp;&nbsp;
                            {item.fecha}
                        </div>
                    </PostStyled>
                ))
            }

            {alternativeTerm!=="" && searchResults.length === 0 ?
                <NotFoundContainer>
                    <h2>Oops!</h2> 
                        
                    <h3>We coudn't find any content related to the word "{alternativeTerm}"</h3>

                    <p>Plase use another term of search</p>

                    <p>Thank you.</p>
                </NotFoundContainer> 
                
                :null
            }

        </SectionContainer>
     );
}
 
export default connect(SearchBarComponent);