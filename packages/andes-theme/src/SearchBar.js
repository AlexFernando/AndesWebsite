import React, {useState, useEffect} from 'react';
import {connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {ButtonAction} from './bgImage';
import {SectionContainer} from './Filosofia';
import LinkButton from "./LinkButton";
import {dataNews} from './data/dataNews';
import {dataEvents} from './data/dataEvents';
import {dataPublications} from './dataPublicaciones';

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
    
 
    background-color: #eaeaea;
    padding: 2rem;
    margin: 2rem;
    border-radius: 1rem;

    a{
        text-decoration: none;
        display: flex;
        justify-content: space-around;

        @media (max-width: 768px){
            flex-direction:column-reverse;
        }

        img {
            flex-basis: 30%;
            object-fit: contain;
            width: 220px;
            height: 300px;

            @media(max-width: 768px) {
                width: 100%;
                height: 100%;
                margin: 1rem 0;
            }
        }

        div{
            flex-basis: 60%;

            h3 {
                color: #44841a;
                font-size: 1.8rem;
            }

            p {
                font-size: 1.3rem;
                color: #545454;
            }

            span, strong {
                color: #545454;
            }

            @media (max-width: 768px){
                margin: 0rem;

                div {
                    font-size: .8rem;
                }
            }
        
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


    const [viewAll , setViewAll] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    
    const [searchResults, setSearchResults] = useState([]);

    const [alternativeTerm, setAlternativeTerm] = useState("");

    

    const handleChange = event => {
       setSearchTerm(event.target.value);
       
    };

    const handleSubmit = e => {

        e.preventDefault();
  
        const news = dataNews.filter(person => person.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || person.content.toLowerCase().includes(searchTerm.toLowerCase()));

        const events = dataEvents.filter(event => event.title.toLowerCase().includes(searchTerm.toLowerCase()));

        const publications = dataPublications.filter(event => event.Title.toLowerCase().includes(searchTerm.toLowerCase()));

        console.log("eventos filtrados ", events);

        console.log("publications filtrados ", publications);

        const results = [...news, ...events, ...publications]
     
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

                dataNews.map(item => (
                    <PostStyled>

                        <a href={`${item.url}`} target="_blank" rel="noopener">
                            <img src={item.urlImage}/>
                            
                            <div>
                                <h3>{item.titulo}</h3>
                                <p>{item.content}</p>
                                <strong>Fecha:</strong>
                                &nbsp;&nbsp;
                                <span>{item.fecha}</span>
                            </div>
                        </a>
                        
                    </PostStyled>
                ))

                : null
            }

            { searchResults.length === 0 && alternativeTerm === "" ?

                dataPublications.map(item => (
                    <PostStyled>
                        <a href={`${item.url}`} target="_blank" rel="noopener">
                            <img src={item.urlImage} />
                            
                            <div>
                                <h3>{item.Title}</h3>
                                <span>Autor: {item.author}</span>
                                <br></br>
                                <span>{item.date}</span>
                            </div>
                        </a>  
                    </PostStyled>
                ))

                : null
            }

            { searchResults.length === 0 && alternativeTerm === "" ?

                dataEvents.map(item => (
                    <PostStyled>
                        <a href="/eventos">
                            <img src={item.urlImage}/>
                            
                            <div>
                                <h3>{item.title}</h3>
                                <strong>Fecha:</strong>
                                &nbsp;&nbsp;
                                <span>{item.date}</span>
                            </div>
                        </a>
                    </PostStyled>
                ))

                : null
            }

            {    
                searchResults.map(item => (
                    <PostStyled>
                        <a href={`${item.url}`} target="_blank" rel="noopener">
                            <img src={item.urlImage}/>
                            
                            <div>
                                <h3>{item.titulo}</h3>
                                <h3>{item.Title}</h3>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <p>{item.author}</p>
                                <span>
                                    <strong>Fecha:</strong>
                                    &nbsp;&nbsp;
                                    {item.fecha}
                                    {item.date}
                                </span>
                            </div>
                            
                        </a>
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