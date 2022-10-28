import React from 'react'
import {connect, styled} from "frontity";
import Image from "@frontity/components/image";

const FeaturedImage = ({state, imgID, element}) => {
    
    const media = state.source.attachment[imgID];
    
    if(element === 'noticia') {

        return (
            <>
                <Image src={media.media_details.sizes.thumbnail.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'publication') {
        
            return(
            
                <>
                    <Image src={media.media_details.sizes.thumbnail.source_url} alt={media.alt_text} />
                </>
            );
            
       
        
    }

    else if (element === 'event') {
        if(window.outerHeight < 850) {
            return (
                <>
                    <EventImageStyle src={media.media_details.sizes.medium.source_url} alt={media.alt_text} />
                </>
            )
        }
   
     
        return (
            <>
                <EventImageStyle src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        )
    }

    else if (element === 'singlesearch') {

            if(window.outerHeight < 850) {
                if(media.media_details.sizes.thumbnail) {
                    return (
                        <>
                            <SingleImageStyle src={media.media_details.sizes.thumbnail.source_url} alt={media.alt_text} />
                        </>
                    )
                }

                else {
                    <Image src={media.media_details.sizes.medium.source_url} alt={media.alt_text} />
                }
            }
    
            if(media.media_details.sizes.medium) {
                return (
                    <>
                        <Image src={media.media_details.sizes.medium.source_url} alt={media.alt_text} />
                    </>
                )
            }

            else {
                return (
                    <>
                        <Image src={media.media_details.sizes.thumbnail.source_url} alt={media.alt_text} />
                    </>
                )
            }
       
    }

    else if (element === 'toolkit') {

            if(window.outerHeight < 850) {
                return (
                    <>
                        <ToolkitImageStyle src={media.media_details.sizes.thumbnail.source_url} alt={media.alt_text} />
                    </>
                )
            }
       
            if(media.media_details.sizes.medium) {
                return (
                    <>
                        <ToolkitImageStyle src={media.media_details.sizes.medium.source_url} alt={media.alt_text} />
                    </>
                )
            }

            else {
                return (
                    <>
                        <ToolkitImageStyle src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
                    </>
                )
            }
    }

    else {
        return  (
            <>
                <Image src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }
    
}

const ToolkitImageStyle = styled(Image)`
    width: 200px;
    height: 300px;
    align-self: center;

    @media(max-width: 768px) {
        width: 180px;
        height: 220px;
        align-self: center;
    }
`

const EventImageStyle = styled(Image)`
    
    width: 100%;
    height: 100%;
    align-self: center;

    @media(max-width: 768px) {
        width: 100%;
        height: 200px;
        align-self: center;
    }
`

const SingleImageStyle = styled(Image)`

    @media(max-width: 768px) {
        width: 150px;
        height: 150px;
        align-self: center;
    }
`

export default connect(FeaturedImage);