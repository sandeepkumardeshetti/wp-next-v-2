import { getPlaiceholder } from "plaiceholder";
 

import React from 'react'

const getLocalBase64 = async() => {
    try {
        const src = "https://images.unsplash.com/photo-1621961458348-f013d219b50c";
       
        const buffer = await fetch(src).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        );
       
        const { base64 } = await getPlaiceholder(buffer);
        console.log(base64);
        return base64
       
        
      } catch (err) {
        err;
      }
}

export default getLocalBase64

