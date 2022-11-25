import React from 'react';
import '../../styles/evaluation/Cutoffs.css'

function Cutoffs(){
    
        const cutoffAdd=(event)=>{
            let nCutoffs=document.getElementById('n_k').value;
          if(nCutoffs>0){
            const box= document.getElementById('cutoffField');
            while(box.firstChild){box.removeChild(box.lastChild);}
            for(let i=0;i<nCutoffs;i++){
                let number=i+1;
                const field=document.createElement('input');
                const placeholder='cutoff '+number+' value';
                const space=document.createElement('br');
                field.setAttribute('type','number');
                field.setAttribute('name','c_value');
                field.className='c_value';
                field.setAttribute('placeholder',placeholder);
                field.required=true;
                box.appendChild(field);
                box.appendChild(space);
            }
          }
        }

        const cutoffReset=()=>{
            const box=document.getElementById('cutoffField');
            while(box.firstChild){box.removeChild(box.lastChild)};
            document.getElementById('n_k').value='';
        }


    return(
        <>
         <span id='cutoffsLabel' className='cutCheckLabel'>Use cutoffs</span>
          <div id='enSection' className='enable'>
            <input type='number' id='n_k' name='n_k' min='1' placeholder='Input number of cutoffs'
               required className='nInput'/>
            <button id='cutoffAdd' className='cutoffButton' onClick={cutoffAdd}>Add field</button>
            <button id='cutoffReset' className='cutoffButton' onClick={cutoffReset}>Reset fields</button>
            <div id='cutoffField' className='cutoffsEnabled'>

            </div>          
          </div>
        </>
    );
}

export default Cutoffs;