import React from 'react';
import {connect, styled} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import ToolkitLogic from './ToolkitLogic';

const Toolkit = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Caja de Herramientas
                </Title>
                <Separator></Separator>
                
            </HeadContainer>


            <ToolkitLogic />
        </MarginTopContainer>


    );
}
 
export default connect(Toolkit);