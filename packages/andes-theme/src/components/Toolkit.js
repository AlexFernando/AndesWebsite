import React from 'react';
import {connect, styled} from "frontity";
import {HeadContainer, Title, SubTitle, Separator, SectionContainer, MarginTopContainer} from './Filosofia';
import ToolkitLogic from './ToolkitLogic';

const Toolkit = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                    Toolkit 
                </Title>
                <SubTitle>
                    Knowledge <br></br> Portal
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>


            <ToolkitLogic />
        </MarginTopContainer>


    );
}
 
export default connect(Toolkit);