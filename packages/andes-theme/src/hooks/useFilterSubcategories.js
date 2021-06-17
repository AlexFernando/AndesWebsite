import React,{useState, useEffect} from 'react';
import {styled} from "frontity";

const Categories = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    flex-grow: 0;
    flex-shrink: 1;

    @media(max-width: 768px) {
 
        justify-content: space-between;
        flex-wrap: wrap;
        flex-basis: 100%;
    }
`;

const ButtonCategory = styled.button`
    padding: 1rem;
    text-align: left;
    cursor: pointer;
    background-color: #44841a;
    border-color: #44841a;
    color: #fff;

    span {
        font-size: 1.2rem;
    }

    @media(max-width: 768px) {

        padding: .5rem;
        span {
            font-size: .8rem;
        }
    }
`;

const ButtonSubCategory = styled.button`
    padding: 1rem;
    text-align: left;
    cursor: pointer;
    background-color: #f07723;
    border-color: #f07723;
    color: #fff;

    p {
        font-size: 1.1rem;
        padding: 0;
        margin: 0 0 0 4rem;
   
    }

    @media(max-width: 768px) {

        padding: .5rem;
        p {
            font-size: .8rem;
        }
    }
`;


const useFilterSubcategories = () => {

    const [allCategory, saveCategory] = useState('');

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function fetchMyAPI() {
            let response = await fetch('http://es.andescusco.info/wp-json/wp/v2/categories?per_page=100');
    
            response = await response.json();
    
            setCategories(response);
            }
            
            fetchMyAPI()
    }, []);


    let realCategories = [];
    let realSubCategories = [];

    categories.map( category => {

        if(category.parent === 0){

            if(category.name !== "Uncategorized") {

                const newData = {"id": category.id, "name": category.name, "subcategories": []};
                realCategories.push(newData);
            }
        }
    })



    categories.map( category => {

        if(category.parent !== 0){

            if(category.name !== "Uncategorized") {

                const newData = {"id": category.id, "name": category.name, "parent": category.parent};
                realSubCategories.push(newData);
            }
        }
    })


    realSubCategories.map( subcategory => {
        
        for( var i = 0 ; i < realCategories.length; i++) {
            realCategories[i]["number"] = i+1;
            if( realCategories[i].id === subcategory.parent) {
                realCategories[i]["subcategories"].push(subcategory.name);
            }
        }
    })

    //porque parentesis y no llaves?
    const FilterSubcategoriesUI = () => (

        <Categories>
                
            {realCategories.map(option => (
                <>
                <ButtonCategory onClick = { () => saveCategory(option.name)}><span>{option.number}.- {option.name}</span></ButtonCategory>
                {
                    option.subcategories.length > 0 ? option.subcategories.map( subCategorie => <ButtonSubCategory onClick = { () => saveCategory(subCategorie)}><p>{subCategorie}</p></ButtonSubCategory>) : null 
                }
                </>
            ))}
           
        </Categories>
    )

    return {
        allCategory,
        FilterSubcategoriesUI
    }
}

export default useFilterSubcategories;