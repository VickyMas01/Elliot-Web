import React,{useState,useEffect} from 'react';
import Progressbar from '../Progressbar.js'
import SimpleMetrics from './SimpleMetrics.js';
import ComplexMetrics from './ComplexMetrics.js';
import '../../styles/evaluation/EvForm.css';
import Cutoffs from './Cutoffs.js';

function EvForm(){

    const [evStep,setEvStep]=useState(-1);

    useEffect(()=>{
        if(evStep>-1 && evStep<4){
        document.getElementById('evNext').style='display:block';    
        document.getElementById('evNext').addEventListener('click',()=>{
            setEvStep(evStep+1)
        })}else document.getElementById('evNext').style='display:none'; ;

        if(evStep>0){
            document.getElementById('evPrev').style='display:block';    
            document.getElementById('evPrev').addEventListener('click',()=>{
                setEvStep(evStep-1)
        })};
        
        if(evStep>=1){
            document.getElementById('evReset').style='display:block';    
            document.getElementById('evReset').addEventListener('click',()=>{
                setEvStep(0);
                document.getElementById('evForm').reset();
            })};
        
        if(evStep===4){
            document.getElementById('evFormSubmit').style='display:block'
        }
        const form=document.getElementById('evForm');
        document.getElementById('evFormSubmit').addEventListener('click', ()=>{
            if(form.checkValidity()){
              document.getElementsByClassName('evButton').styley='display:none';
              fetch('/api/v1/recommendationmodel-json', {
                method: 'POST',
                body: new FormData(form)
            }).then(res => res.json())
            .then(data => {
                document.getElementById('evDownloadDF').setAttribute('href', `/api/v1/evaluation/download`);
                document.getElementById('evLoading').setAttribute('hidden', true);
                document.getElementById('evResult').setAttribute('hidden',false);
            });
            document.getElementById('evLoading').setAttribute('hidden', false);
        
            }else document.getElementById('evSubmitError').innerHTML='Go back and fill required fields';
          })
    });

    return(
        <div className='evFormContainer'>
            <div className={evStep>-1?'evPbar':'showNo'}><Progressbar step={evStep} initStyle='twenty%'/></div>
            <div className={evStep===-1?'evIntro':'showNo'}>
                <h1 className='introCont1'>Welcome !</h1>
                <h2 className='introCont2'>
                    Here you can setup evaluation configuration and simple/complex metrics 
                </h2>
                <button id='evStart' onClick={()=>setEvStep(evStep+1)}>Let's start !</button>
            </div>
          <form action='' method='POST' encType="multipart/form-data" id='evForm'>
            <div className={evStep===0?'evFileInput':'showNo'}>
                <div className='fileCard'>
                    <span className='fileTit'>Train</span>
                    <input type='file' name="train_dataset" id="train_dataset" className="sendFile" required/>
                </div>
                <div className='fileCard'>
                    <span className='fileTit'>Test</span>
                    <input type='file' name="test_dataset" id="test_dataset" className="sendFile" required/>
                </div>
                <div className='fileCard'>
                    <span className='fileTit'>Recs</span>
                    <input type='file' name="recs_dataset" id="recs_dataset" className="sendFile" required/>
                </div>
            </div>

            <div className={evStep===1?'otherOptions':'showNo'}>
                <div id='checkOpt' className='optContainer'>
                    <label className="ipoTest" forhtml="paired_t_test">PairedtTest</label>
                      <input  type="checkbox" name="t_test" id="paired_t_test" className='otherBox'/><br/>
                    <label className="ipoTest" forhtml="wilcoxon_test">WilcoxonTest</label>
                      <input  type="checkbox" name="wilcoxon" id="wilcoxon_test" className='otherBox'/>
                </div>
                <div className='optContainer'>
                     <label forhtml="treshold" id="tresh_label" className='optLabel'>Relevance treshold</label>
                       <input type="number" id="treshold" name="treshold" className='optInput'/>
                </div>
                <div className='optContainer'>
                    <label forhtml='top_k' id='top_k_label' className='optLabel'>Top K</label>
                    <input type='number' id='top_k' name='top_k' className='optInput' /> 
                </div>
            </div>

            <div className={evStep===2?'cutoffContainer':'showNo'}>
                <Cutoffs />
            </div>

            <div className={evStep===3?'simpleContainer':'showNo'}>
                <SimpleMetrics />
            </div>

            <div className={evStep===4?'complexContainer':'showNo'}>
                <ComplexMetrics />
            </div>
            <span id='evSubmitError'></span>
            <input type='submit' id='evFormSubmit' value='Evaluate with this options' hidden/>
        </form>  
            <button id='evNext' className='evButton' hidden>Next</button>
            <button id='evPrev' className='evButton' hidden>Previous</button>
            <button id='evReset' className='evButton' hidden>Reset all input</button>

            <div id='evLoading' hidden>
              <div className="lds-ripple"><div></div><div></div></div>
                <span className='load_info'> Data processing in progress</span>
            </div> 
                                
           <div id='evResult' hidden>
             <h1 className='completedTit'>Processing completed</h1>
              <p className='compl_content'>Your dataset has been successfully processed!
                 <a href='' className="download_link" id="evDownloadDF">Download ZIP</a>
              </p>
           </div>
          
        </div>
    );
}

export default EvForm;