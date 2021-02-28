import React,{useState} from 'react';
import {styled} from "frontity";
import {yearsCategories} from '../data/yearsCategoriesEvents';

const Formulario = styled.form`
    width: 60%;
    display: flex;
    border: 1px solid #e1e1e1;
    max-width: 1200px;
    margin: 2rem auto 2rem auto;
    @media(max-width: 768px) {
        width: 100%;
    }
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    background-color: #44841a;
    color: #fff;
    font-family: 'Lato', sans-serif;
    outline-color: #fff;
    font-size: 1.2rem;


    @media(max-width: 768px) {
        font-size: .8rem;
    }
`;

const useFilter = () => {

    const [category, saveCategory] = useState('');

    //porque parentesis y no llaves?
    const FilterUI = () => (
        <Formulario>
            <Select
                onChange = { e => saveCategory(e.target.value) }
                value={category}
            >
                <option value="" label="AllEvents">-- AllEvents --</option>
                {yearsCategories.map(option => (
                    <option key={option.id} label={option.year} value={option.year}>{option.year}</option>
                ))}
            </Select>
        </Formulario>
    )

    return {
        category,
        FilterUI
    }
}

export default useFilter;