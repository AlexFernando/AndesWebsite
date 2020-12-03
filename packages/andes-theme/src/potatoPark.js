import React from 'react';
import {connect} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';


const PotatoPark = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Parque de la Papa - Pisaq
                </Title>
                <SubTitle>
                El Sistema Ayllu<br></br>Innovaciones Bioculturales
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>
        </MarginTopContainer>
    );
}
 
export default connect(PotatoPark);