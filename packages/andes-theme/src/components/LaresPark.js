import React from 'react';
import {connect, css, styled } from "frontity";
import {HeadContainer, Title, SubTitle, Separator, MarginTopContainer} from './Filosofia';
import {SectionContainer, CardsContainer, Card} from './potatoPark'
import parqueLaresbiodiversidad from '../static/images/parquemaiz.jpg';
import parqueLaresmercados from '../static/images/parquemaiz2.jpg';
import parqueLaresCocinando from '../static/images/parquemaiz3.png';

const LaresPark = () => {
    return ( 
        <MarginTopContainer>
            <HeadContainer>
                <Title>
                Chalakuy Park - Lares
                </Title>
                <SubTitle>
                    Agrobiodiversity<br></br>Barter Markets
                </SubTitle>
                <Separator></Separator>
            </HeadContainer>

            <SectionContainer>
                <p>
                    Lares is a district of Peru located next to the Sacred Valley of the Incas. The Lares Valley encompasses a territory that stretches from the Amazon basin to the Andes mountains, with an altitudinal range of approximately 1000 meters above sea level to almost 5000 meters above sea level. The highly varied geography of the area imparts a wide variety of habitats, leading to a remarkable diversity of plant species, both cultivated and wild. Despite this rich diversity of species, Lares is one of the poorest districts in Peru and its population struggles with some of the highest percentages of nutrition-related health problems in the country.<br></br><br></br>

                    The project in Lares focuses on scaling, which refers to extending, replicating, adapting, and maintaining successful policies, projects and, programs in a given space and time to create greater impact. In the case of Lares, the scaling focuses on the management of the biodiversity associated with ancestral knowledge and customary laws, taking lessons learned in the Potato Park and adapting them to the reality of Lares. In Lares there is a wider breadth of local crops due to its various ecological niches, which allow data to be collected on the impact of climate change and the adaptability of different native crops, including corn, broad beans, coffee, cocoa, avocado and orange, in addition to varieties of native potato.<br></br><br></br>

                    Using a systems perspective, this project seeks to influence the relationships of food systems at the local and global levels and promotes the active participation of the rural poor for inclusive political governance. The focus is on the knowledge and experiences of indigenous peoples and small farmer communities as key actors in identifying the challenges of climate change and creating appropriate responses.
                </p> 

                 
                <CardsContainer>
                    <Card>
                        <img src={parqueLaresbiodiversidad} />

                        <h3>Using biodiversity to confront anemia</h3>

                        <span>
                            In Lares, we are researching the potential of wild and underutilized species to improve community nutrition. Lares has one of the highest rates of anemia of any region in Peru, which is why our local experts are working hard to help maintain health in their communities.
                        </span>

                        <a href="http://andes.center/wp-content/uploads/2020/01/Neglected-and-Underutilized-Species-for-improved-diets_Briefing-note.pdf" target="_blank" rel="noopener" >READ MORE</a>
                    </Card>


                    <Card>
                        <img src={parqueLaresmercados} />

                        <h3>Barter Markets in Lares</h3>

                        <span>
                            Barter and exchange have been an important strategy to diversify diets and guarantee food security in Peru for centuries, but globalization and neoliberal policies have led to the widespread disappearance of barter markets. However, in the Lares Valley, the tradition of barter remains strong, and we are actively working to preserve these local markets
                        </span>

                        <a href="https://ddd.uab.cat/search?f=title&p=La%20Multidimensionalidad%20de%20los%20sistemas%20locales%20de%20alimentaci%C3%B3n%20en%20los%20Andes%20peruanos%20los%20chalayplasa%20del%20Valle%20de%20Lares%20%28Cusco%29%20/&sc=1&ln=ca" target="_blank" rel="noopener" >READ MORE</a>
                    </Card>

                    <Card>
                        <img src={parqueLaresCocinando} />

                        <h3>Cooking with Agrobiodiversity in Lares</h3>

                        <span>
                            This cookbook serves as a resources for the members of the communities of Lares and as a source of information and inspiration for communities in all of Peru. The focus on local ingredients, both cultivated and wild, creates recipes that are innovative, healhty, and tasty!
                        </span>

                        <a href="https://oxfam.app.box.com/s/bvmc0byvzeklexqbo8l4jz3nyvjg8rhh" target="_blank" rel="noopener" >READ MORE</a>
                    </Card>
                </CardsContainer>
            </SectionContainer>
        </MarginTopContainer>
    );
}
 
export default connect(LaresPark);