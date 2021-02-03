import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionText} from './HomePage';
import RepoAnniversaryPublications from './RepoAnniversaryPublications';

const AnniversaryPublications = ({state}) => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                 25 Publications
                </Title>
                <Separator></Separator>
            </HeadContainer>

            <SectionText>
            <div>  
                <h1>ANDES Celebrates 25 th Anniversary</h1>             
                <p> As part of our 25th anniversary celebrations, we would like to share some of the
                    results of our investigations through publications which, of course, are only possible
                    thanks to the important contributions of our partners. We recommend you consult the
                    numerous publications on the ANDES website. If you are not familiar with the work of
                    ANDES and wondering where to start, here are 25 suggestions</p>
                
                <h1>25 Publications</h1>
                <p>
                    ANDES publications are often the result of collaborative research
                    with and for the indigenous communities of the Andes.
                </p> 
              
            </div>
            </SectionText>

            
            <RepoAnniversaryPublications />
        </MarginTopContainer>
     );
}
 
export default connect(AnniversaryPublications);

