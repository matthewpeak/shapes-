import React from 'react'
import Cube from './Cube.js'
import Pyramid from './Pyramid.js'
import Sphere from './Sphere.js'

const Display=({shape})=>{
 
    let displayShape = "";
    
    if (shape === 'pyramid'){
        displayShape = <Pyramid/>
    }else if( shape === 'cube' ){
        displayShape = <Cube/>
    }else if( shape === 'sphere' ){
        displayShape = <Sphere/>
    }
 
    return(
        <div>
       { displayShape}
        </div> 

    )
}

export default Display