import React, {useState, useEffect} from 'react';
import {connect, styled, css} from "frontity";
import {dataToolkit} from '../data/dataToolkitEnglish';
import useFilterSubcategories from '../hooks/useFilterSubcategories';
import {NotFoundContainer} from './SearchBar'

import FeaturedImage from './FeaturedImage';
import Loading from './Loading';

const SectionToolkit = styled.div`
    display: flex;
    padding: 2rem;
    
    justify-content: space-between;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const ContainerPapers = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-basis: 80%;
    padding: 0 2rem;
    flex-wrap: wrap;

    @media(max-width: 768px) {
        flex-direction: column;
        flex-basis: 100%;
        padding: 0;
        margin-top: 2rem;
    }
`;


const ElemPaper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 40%;
    margin: 1rem 1rem;

    @media(max-width: 768px) {
        flex-basis: 100%;
        margin: 2rem 0;
    }

    a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: #545454;
        text-align: center;       
    }

    img {
        max-width: 80%;

        @media(max-width: 768px) {
            max-width: 100%;
        }
    }
    div {
        max-width: 80%;
        text-align: center;
        @media(max-width: 768px) {
            max-width: 100%;
        }
    }
`;

const ToolkitLogic = ({state, actions}) => {

    const [filtered, saveFiltered] = useState([]);

    // categories 
    const {allCategory, FilterSubcategoriesUI} = useFilterSubcategories("");
    
    // Cada vez que se haga un cambio en category el useEffect se vuelve a ejecutar


    useEffect( () => {
        actions.source.fetch("/alltoolkit/");        
    }, [])

    const data = state.source.get('/alltoolkit');
    const categories = state.source.category;
    console.log("la data: ",data)
    console.log("las categories: ", categories);

    //filling the array of publications
    let toolkitData = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {
            
            toolkitData.push(state.source.toolkitposts[id]);
        })
    } 

    if(categories && data.isReady){
        console.log("vamos por las categorias")
        console.log("toolkitdata: ", toolkitData)

        toolkitData.map( item => {
            console.log("las categorias desdes toolki: ", item.categories[0])

            if(item.categories.length === 1) {
              
                let replaceCategory = categories[item.categories[0]].name;
                console.log("categoria name: ", replaceCategory)
                item["category"] = replaceCategory;
                item["subcategory"] = "";
            }

            else if(item.categories.length === 2) {
                let replaceCategory = categories[item.categories[1]].name;
                let replaceSubCategory = categories[item.categories[0]].name;
                console.log("categoria name: ", replaceCategory, " ", replaceSubCategory )
                item["category"] = replaceCategory;
                item["subcategory"] = replaceSubCategory;
            }
        })
    }

    console.log("toolkitdata: ", toolkitData)

    //sorting the taking the recent year first
    toolkitData.sort((a, b) => (a.acf.date < b.acf.date) ? 1 : -1)


    useEffect( () => {
      
            if(allCategory !== "") {
                console.log("cada categoria: ", allCategory);
                const filter = toolkitData.filter(elemToolkit => elemToolkit.category === allCategory || elemToolkit.subcategory === allCategory)
                console.log(filter);
                saveFiltered(filter);
            } 
    }, [allCategory])

    console.log("filtered: ", filtered);

    return ( 

        <>
            {data.isReady?
            <SectionToolkit>

                {FilterSubcategoriesUI()}
         
                { 
                
                
                filtered.length === 0 && allCategory === "" ?
                        
                        <ContainerPapers>
                            
                            {toolkitData.map( elemToolkit => (
                                    <ElemPaper>
                                        <a href={`${elemToolkit.acf.url}`} target="_blank" rel="noopener">
                                            
                                            <FeaturedImage imgID = {elemToolkit.featured_media} element = "toolkit"/>
    
                                            <div>
                                                <h3>{elemToolkit.title.rendered}</h3>
                                                <span>Author: {elemToolkit.acf.author}</span>
                                                <p>{elemToolkit.acf.date}</p>
                                            </div>
                                        </a>  
                                    </ElemPaper> 
                            ))}
                            
                        </ContainerPapers>
                        
                    

                    : 
                    <>
                    {filtered.length > 0 && allCategory !== "" ? 
                    <ContainerPapers>
                    {filtered.map( elemToolkit => (
                            <ElemPaper>
                                <a href={`${elemToolkit.acf.url}`} target="_blank" rel="noopener">
                                    
                                    <FeaturedImage imgID = {elemToolkit.featured_media} element = "toolkit"/>

                                    <div>
                                        <h3>{elemToolkit.title.rendered}</h3>
                                        <span>Author: {elemToolkit.acf.author}</span>
                                        <p>{elemToolkit.acf.date}</p>
                                    </div>
                                </a>  
                            </ElemPaper>
                    ))}
                    </ContainerPapers>

                    : 
                        <ContainerPapers>
                    <NotFoundContainer>
                        <h2>Oops!</h2> 
                            
                        <h3>There's no files to show in this category </h3>

                        <p>Please, click in another category</p>

                        <p>Thank you</p>
                    </NotFoundContainer> 
            
                    <NotFoundContainer>
                        <h2>Oops!</h2> 
                            
                        <h3>There's no files to show in this category </h3>

                        <p>Please, click in another category</p>

                        <p>Thank you</p>
                    </NotFoundContainer>

                    <NotFoundContainer>
                        <h2>Oops!</h2> 
                            
                        <h3>There's no files to show in this category </h3>

                        <p>Please, click in another category</p>

                        <p>Thank you</p>
                    </NotFoundContainer>

                    <NotFoundContainer>
                        <h2>Oops!</h2> 
                                
                        <h3>There's no files to show in this category </h3>

                        <p>Please, click in another category</p>

                        <p>Thank you</p>
                    </NotFoundContainer>
                    </ContainerPapers> 
                    
                }

                </>
            }

                </SectionToolkit>

                : <Loading />

            }
        </>
     );
}
 
export default connect(ToolkitLogic);
