import React, {useState,Fragment} from 'react'
import './style.css'
import Display from './Display.js'


const Menu=()=> {
    const [shape, setShape] = useState('none');
    
    return (
      <Fragment>
        <div className = 'shapeMenu'>
               <ul onClick={()=>setShape('cube')}>CUBE</ul>
               <ul onClick={()=>setShape('pyramid')}>PYRAMID</ul>
               <ul onClick={()=>setShape('sphere')}>SPHERE</ul>
        </div>
          <Display shape={shape}/>
        </Fragment>
       );
  }

export default Menu

