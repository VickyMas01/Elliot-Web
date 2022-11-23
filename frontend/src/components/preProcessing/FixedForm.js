import React, { useState, useEffect } from 'react';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/FixedForm.css'

function FixedForm(props){
    const defaultRec={
        rnd_seed:42,
        binarize:false,
    };
    const[dataRec, setDataRec]=useState(defaultRec);

    useEffect(()=>{
        document.getElementById('next').addEventListener('click',()=>{
            props.setStep(props.step+1);
        });
        if(props.step >0){
          document.getElementById('previous').style='display:block';
        document.getElementById('previous').addEventListener('click',()=>{
          props.setStep(props.step-1);
        })};

        if(props.step<1){
          document.getElementById('next').style='display:block';
          document.getElementById('dataset_submit').style='visibility:hidden'; 
        }else{
          document.getElementById('dataset_submit').style='display:block'; 
          document.getElementById('next').style='visibility:hidden'    //inserire azione da far svolgere al submit
        }

          document.getElementById('reset').addEventListener('click',()=>{
            setDataRec(defaultRec);
            props.setStep(0);
          });

          let form=document.getElementById('form_data');
          form.addEventListener('change',()=>{
           if(form.checkValidity()){
             form.classList.add('valid')
           }});
 
           document.getElementById('dataset_submit').addEventListener('click', ()=>{
             if(form.checkValidity()){
               document.getElementsByClassName('navButt').style.display='none';
               fetch('/api/v1/preprocessing-json', {
                 method: 'POST',
                 body: new FormData(form)
             }).then(res => res.json())
             .then(data => {
                 document.getElementById('downloadFix').setAttribute('href', `/api/v1/preprocessing/download/${data}`);
                 document.getElementById('loadingFix').setAttribute('hidden', true);
                 document.getElementById('resultFix').setAttribute('hidden',false);
             });
             document.getElementById('loadingFix').setAttribute('hidden', false);
         
             }else document.getElementById('disclaimerFix').innerHTML='Go back and fill required fields';
           })
        
    });
        

    return(
        <div className='fixed_container'>
            <div className='pbar'><Progressbar step={props.step} initStyle='fifty%'/></div>
            <form action="" method="POST" encType="multipart/form-data" id="form_data">
                <h1 className='fixStitle'>Fixed strategy</h1>

                                <div id='step1Fix' className={props.step===0?'s1Fix_vis':'no'}>
                                <div className='randSeedFix'><h2 className='ranSeedTitFix'>Random seed</h2>
                                  <h3 className='randDescrFix'>Set a random seed for the preprocessing operations</h3>
                                   <input type='number' name='random_seed' id='random_seed' className='randValueFix' 
                                   value={dataRec.rnd_seed} onChange={(event)=>setDataRec({...dataRec, rnd_seed:event.target.value})}/></div>

                                 <div className='binarFix'><h2 className='binarTitFix'>Dataset binarization</h2>
                                  <label htmlFor='binarize' className='binLabelFix'>Check if you want to binarize the dataset</label>
                                    <input type="checkbox" name='binarize' id="binarize"  value="True" className='binCheckFix' 
                                      checked={dataRec.binarize} onChange={(event)=>setDataRec({...dataRec, binarize:event.target.checked})}/></div> 
                               </div>
                
                                 <div className={props.step===1?'file_input_sect':'no'}>
                                   <div className='fileSect'>
                                     <h2 className='fileDesc'>Input <strong>train</strong> dataset in <strong>.tsv</strong> format</h2>
                                     <input type="file" name="train_file" id="train_file" className="form-control" accept=".tsv" required/>
                                   </div>

                                   <div className='fileSect'>
                                    <h2 className='fileDesc'>Input <strong>validation</strong> dataset in <strong>.tsv</strong> format {'('}optional{')'}</h2>  
                                    <input type="file" name="validation_file" id="validation_file" className="form-control" accept=".tsv"/>              
                                   </div>

                                   <div className='fileSect'>
                                    <h2 className='fileDesc'>Input <strong>test</strong> dataset in <strong>.tsv</strong> format</h2>
                                    <input type="file" name="test_file" id="test_file" className="form-control" accept=".tsv" required/>
                                   </div>
                                 </div>
            </form>

            <span id='disclaimerFix'></span>

               <div id='loadingFix' hidden>
                  <div className="lds-ripple"><div></div><div></div></div>
                  <span className='load_info'> Data preprocessing in progress</span>
               </div> 

               <div id='resultFix' hidden>
                <h1 className='completedTitFix'>Preprocessing completed</h1>
                <p className='compl_contentFix'>Your dataset has been successfully processed!
                  <a href='' className="download_linkFix" id="downloadFix">Download ZIP</a>
                </p>
               </div>

           <button id='next' className='navButt' hidden>Next</button>
           <button id='reset' className='navButt'>Reset input parameters</button>
           <button id='previous' className='navButt' hidden>Previous</button>
           <input type='submit' id='dataset_submit' value='Preprocess with Fixed strategy' className='navButt' hidden />
        </div>
    );
}

export default FixedForm;