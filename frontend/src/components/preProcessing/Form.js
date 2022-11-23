import React from 'react';
import { useState,useEffect } from 'react';
import '../../styles/preProcessing/Form.css'
import DatasetForm from './DatasetForm.js';
import HierarchyForm from './HierarchyForm.js';
import FixedForm from './FixedForm.js'

function Form(props){

    const[choice,setChoice]=useState('');
    const[step,setStep]=useState(0);


   useEffect(()=>{
    document.getElementById('op1').addEventListener("click",()=>{
    let v=document.getElementById('op1');
    setChoice(v.value); 
   });

   document.getElementById('op2').addEventListener("click",()=>{
    let v=document.getElementById('op2');
    setChoice(v.value);
   });

   document.getElementById('op3').addEventListener("click",()=>{
    let v=document.getElementById('op3');
    setChoice(v.value);
   });
   
   document.getElementById('start').addEventListener('click', ()=>{
    document.getElementById('introduction').className='intro_no';
    document.getElementById('strategy').className='strat_vis';
   });

   });

   const goTo=()=>{
    if(choice!==''){
        document.getElementById('strategy').className='strat_no';
        document.getElementById('main').className='main_vis'
        }else document.getElementById('error').innerHTML='You must select a strategy!'
   };

   const cngStr=()=>{
     document.getElementById('main').className='main_no';
     document.getElementById('strategy').className='strat_vis';
     document.getElementById('error').innerHTML='';
     setStep(0);
     setChoice('');
   }

    return(
        <div className='formContainer'>

          <div id='introduction' className='intro_vis'>
           <h1 className='introTit'>Welcome !</h1>
           <h2 className='introDescr'>Here you can choose among 3 different loading strategies,
             8 prefiltering approaches and several splitting strategies</h2>
             <button id='start' className='start'>Let's start !</button>
          </div>

            <div id='strategy' className='strat_no'>
                <h2 className='titleSt'>Loading strategy</h2>
                <button id='op1' className={choice==='dataset'?'strOpt_selected':'strOpt'} value='dataset'>Dataset</button>
                <button id='op2' className={choice==='fixed'?'strOpt_selected':'strOpt'} value='fixed'>Fixed</button>
                <button id='op3' className={choice==='hierarchy'?'strOpt_selected':'strOpt'} value='hierarchy'>Hierarchy</button>
                <span id='error'/>
                <button id='goTo' className='next' onClick={goTo}>Next</button>
            </div>

            <div id='main' className='main_no'>
                {choice==='dataset'?<DatasetForm step={step} setStep={setStep} strategy={choice}/>:
                 choice==='fixed'?<FixedForm step={step} setStep={setStep}/>:
                 choice==='hierarchy'?<HierarchyForm strategy={choice}/>:
                  console.log('waiting step change')}
                  <button id='cngStr' onClick={cngStr}>Change strategy</button>
            </div>
        </div>
    );
}

export default Form;

