import React, {useEffect} from 'react';
import {connect} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {PostStyled} from './SearchBar';
import Loading from './Loading';
import FeaturedImage from './FeaturedImage';

const News = ({state, actions}) => {

    useEffect( () => {
        actions.source.fetch("/search")
    }, [])

    const data = state.source.get('/search');

    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>News</Title>
                <Separator></Separator>
                <SubTitle>Relevant Information<br></br> Real Stories</SubTitle>
            </HeadContainer>

        {data.isReady ?
        <>

            {
                data.items.map( ({id}) => {

                const singleSearch = state.source.singlesearch[id];

                let typeOfPublication = false;
                
                if(singleSearch.typeofpublication[0] === 2) {
                    typeOfPublication = true;
                }

                    return (

                    <>
                            { typeOfPublication ? 
                            <PostStyled key = {id}>
                                
                                <a href={singleSearch.meta._links_to} target="_blank" rel="noopener noreferrer">
                                <FeaturedImage imgID = {singleSearch.featured_media} element = "singlesearch"/>

                                <div>
                                    <h3>{singleSearch.title.rendered}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: singleSearch.content.rendered}}></div>
                               
                                 
                                    <p>Date : 
                                    <span dangerouslySetInnerHTML={ {__html: singleSearch.acf.date}}></span>
                                    </p>
                                </div>           
                                </a>
                            </PostStyled>
                            : null
                            }
                        
                    </>
                    )
                })
            }
        </>

        : <Loading />
        }

        </MarginTopContainer>
    );
}
 
export default connect(News);