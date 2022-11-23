import React,{useEffect,useState} from 'react';
import '../../styles/evaluation/Cutoffs.css'

function Cutoffs(){
    const[check,setCheck]=useState(false);
    useEffect(()=>{
    
        document.getElementById('cutoffs').addEventListener('change',(event)=>{if(event.target.checked){
         document.getElementById('enSection').className='enable';
         setCheck(true);
        }else{document.getElementById('enSection').className='noEnable'
           setCheck(false);} 
        });

        document.getElementById('cutoffAdd').addEventListener('click',(event)=>{
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
        });

        document.getElementById('cutoffReset').addEventListener('click',()=>{
            const box=document.getElementById('cutoffField');
            while(box.firstChild){box.removeChild(box.lastChild)};
            document.getElementById('n_k').value='';
        });
    });

    return(
        <>
         <label forhtml='cutoffs' id='cutoffsLabel' className='cutCheckLabel'>Use cutoffs</label>
            <input type='checkbox' id='cutoffs' value='cutoffs' />
          <div id='enSection' className='noEnable'>
            <input type='number' id='n_k' name='n_k' min='1' placeholder='Input number of cutoffs'
               required={check?true:false} className='nInput'/>
            <button id='cutoffAdd' className='cutoffButton'>Add fields</button>
            <button id='cutoffReset' className='cutoffButton'>Reset fields</button>
            <div id='cutoffField' className='cutoffsEnabled'>

            </div>          
          </div>
        </>
    );
}

export default Cutoffs;