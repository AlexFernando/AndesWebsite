import React, {useState, useEffect} from 'react';
import {connect, styled, css} from "frontity";
import {dataToolkit} from '../data/dataToolkitEnglish';
import useFilterSubcategories from '../hooks/useFilterSubcategoriesEnglish';
import {NotFoundContainer} from './SearchBar'

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

const ToolkitLogic = () => {

    const [filtered, saveFiltered] = useState([]);

    // categories 
    const {allCategory, FilterSubcategoriesUI} = useFilterSubcategories();
    

      //Cada vez que se haga un cambio en category el useEffect se vuelve a ejecutar
    useEffect( () => {
        if(allCategory) {
            console.log("cada categoria: ", allCategory);
            const filter = dataToolkit.filter(elemToolkit => elemToolkit.category === allCategory || elemToolkit.subcategory === allCategory)
            console.log(filter);
            saveFiltered(filter);
        } else {
            saveFiltered(dataToolkit)
        }
    }, [allCategory, dataToolkit])

    return ( 

        <>
            

            <SectionToolkit>
                {FilterSubcategoriesUI()}

                    
                    {filtered.length > 0 ? 
                        <ContainerPapers>
                        {filtered.map( elemToolkit => (
                                <ElemPaper>
                                    <a href={`${elemToolkit.url}`} target="_blank" rel="noopener">
                                        <img src={elemToolkit.urlImage} />
                                        <div>
                                            <h3>{elemToolkit.title}</h3>
                                            <span>Author: {elemToolkit.author}</span>
                                            <p>{elemToolkit.date}</p>
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
                    
            </SectionToolkit>
           

          


        </>
     );
}
 
export default ToolkitLogic;
