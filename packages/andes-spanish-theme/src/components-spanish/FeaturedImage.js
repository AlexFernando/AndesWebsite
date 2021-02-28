import React from 'react'
import {connect, styled} from "frontity";

const FeaturedImage = ({state, imgID, element}) => {
    
    const media = state.source.attachment[imgID];
    
    if(element === 'noticia') {

        return (
            <>
                <img src={media.media_details.sizes.medium.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'publication') {
        return  (
            <>
                <img src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'event') {
        return  (
            <>
                <img src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'singlesearch') {
        return  (
            <>
                <img src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else if (element === 'toolkit') {
        return  (
            <>
                <img src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }

    else {
        return  (
            <>
                <img src={media.media_details.sizes.full.source_url} alt={media.alt_text} />
            </>
        );
    }
    
}
 
export default connect(FeaturedImage);