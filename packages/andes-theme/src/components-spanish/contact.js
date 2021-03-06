import React from 'react';
import {css, styled } from "frontity";
import {faMapMarkedAlt, faStreetView, faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {ButtonAction} from './bgImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import LinkButton from './LinkButton';

const ContactContainer = styled.div`
    display: flex;
    background-color: #333333;
    color: #fff;
    justify-content: space-around;
    align-content: center;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const ContactElement = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @media(max-width: 768px) {
        padding: 1rem;
        h2 {
            font-size: 1rem;
        }
    }

    ul {
        margin: 0;
        padding: 0;

        &:first-of-type {
            display: flex;
            justify-content: center;
            align-content: center;

            li {
                margin: 0 1.5rem 2rem 1.5rem;

                a {
                    color : #fff;
                    font-size: 2rem;
                }
            }
        }
    }

    h2 {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h3 {
        margin-top: 0;
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
    }

    li {
        list-style: none;
        font-weight: 200;
        margin-bottom: 1rem;
        letter-spacing: 1px;

        @media(max-width: 768px) {
            font-size: 1.2rem;
        }

    }
`;

const ContactForm = styled.div`
    
    @media(max-width: 768px) {
        padding: 1rem;
    }
    
    h3 {
        font-size: 2rem;
        font-weight: 300;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 2rem;

        div {
            display: flex;
            flex-direction: column;
        }

        label {
            letter-spacing: 1px;
            font-size: 1.2rem;
        }

        input {
            height: 30px;
        }

        input, textarea {
            margin:1rem 1rem 2rem 1rem;
            border: none;
            border-radius: 5px;
        }
    }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    margin-right: 1rem;
`;


const Contact = () => {

    return ( 
        <ContactContainer>
            <ContactElement>
                <h2>Impulsando un enfoque de conservación <br></br> y desarrollo basado en los derechos <br></br> a través  de la implementación <br></br> de Territorios Bioculturales</h2>
            
                <ul>
                        <li><a href="https://www.facebook.com/AsociacionparalaNaturalezayDesarrolloSostenible/" alt="Share on Twitter" aria-label="Link to Facebook" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                        <li><a href="https://twitter.com/asociacionandes" alt="Share on Twitter" aria-label="Link to Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li><a href="https://www.instagram.com/asociacion.andes/" alt="Share on Twitter" aria-label="Link to Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href="https://www.youtube.com/channel/UCGxjQLt0D5iC2xt_rgMg8IA/featured" alt="Share on Twitter" aria-label="Link to Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a></li>
                </ul>

                <ul>
                    <li><FontAwesomeIconStyled icon={faMapMarkedAlt}/>Asociacion Andes</li>
                   
                    <li><FontAwesomeIconStyled icon={faStreetView}/>Urb. Santa Monica, Wanchaq, Cusco, Peru.</li>
                
                    <li> <FontAwesomeIconStyled icon={faMailBulk}/>Casilla Postal Nº 567, Cusco - Peru </li>
                </ul>
            </ContactElement>
            <ContactForm>
                <h3>Contacto</h3>
                
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" name="email"></input>
                    </div>

                    <div>
                        <label id="message" htmlFor="message">Message</label>

                        <textarea name="message" id="" cols="30" rows="7"></textarea>
                     
                    </div>

                    <ButtonAction> <LinkButton href="/">SUBMIT</LinkButton></ButtonAction>
                </form>
            </ContactForm>
        </ContactContainer>

    );
}
 
export default Contact;