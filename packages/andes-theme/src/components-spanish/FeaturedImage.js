import React from 'react'
import {connect, styled} from "frontity";
import Image from "@frontity/components/image";


const FeaturedImage = ({state, imgID, element}) => {
    
    const media = state.source.attachment[imgID];
    
    if(element === 'noticia') {

        return (
            <>
                <Image src={media.media_details.sizes.medium.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'publication') {
        return  (
            <>
                <Image src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'event') {
        return  (
            <>
                <Image src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'singlesearch') {
        return  (
            <>
                <Image src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'toolkit') {
        return  (
            <>
                <Image src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else {
        return  (
            <>
                <Image src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }
    
}
 
export default connect(FeaturedImage);