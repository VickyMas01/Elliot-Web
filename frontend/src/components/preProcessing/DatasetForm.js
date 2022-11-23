import React, {useState, useEffect} from 'react';
import CheckSection from './CheckSection.js';
import RadioSection1 from './RadioSection1.js';
import RadioSection2 from './RadioSection2.js';
import Progressbar from '../Progressbar.js';
import '../../styles/preProcessing/DataSetForm.css'

function DatasetForm(props){

    const defaultCheckState={
      binarize:false,
      glob_thresh:false,
      us_av:false,
      us_k:false,
      it_k:false,
      iter_k:false, 
      n_k:false,  
      cold_us:false,
      fixt:false,     
      tho:false,      
      rand_sub:false,
      rand_sub_c:false,      
      rand_cross:false,      
      fixt2:false, 
      tho2:false,
      tho_c2:false, 
      rand_sub2:false,
      rand_sub_c2:false, 
      rand_cross2:false,  
    };
    const defaultParamState={
      tho_c:false,
      rand_sub_c:false,
    };

    const defaultValueState={
      seed: 42,
      glob_thresh_value:'',
      us_av_value:'',
      us_k_value:'',
      it_k_value:'',
      iter_k_value:'',
      n_value:'',
      k_value:'',
      cold_us_value:'',
      fixt_value:'',
      tho_range:'',
      tho_n_out:'',
      rand_sub_range:'',
      rand_sub_n_out:'',
      rand_sub_folds:'',
      fixt_value2:'',
      tho_range2:'',
      tho_n_out2:'',
      rand_sub_range2:'',
      rand_sub_n_out2:'',
      rand_sub_folds2:'',
      rand_cross_folds2:'',
      rand_cross_folds:'',
    };

    const [checkData,setCheckData]=useState(defaultCheckState);
    const [paramData,setParamData]=useState(defaultParamState);
    const [valueData,setValueData]=useState(defaultValueState);



    useEffect(()=>{
        document.getElementById('next').addEventListener('click',()=>{
            props.setStep(props.step+1);
        });
        if(props.step >0){
          document.getElementById('previous').style='display:block';
        document.getElementById('previous').addEventListener('click',()=>{
          props.setStep(props.step-1);
        })}else document.getElementById('previous').style='display:none';

        if(props.step<4){
          document.getElementById('next').style='display:block';
          document.getElementById('dataset_submit').style='display:none'; 
        }else{
          document.getElementById('dataset_submit').style='display:block'; 
          document.getElementById('next').style='visibility:hidden';    //inserire azione da far svolgere al submit
        }

          document.getElementById('reset').addEventListener('click',()=>{
            setCheckData(defaultCheckState);
            setValueData(defaultValueState);
            setParamData(defaultParamState);
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
                document.getElementById('downloadDF').setAttribute('href', `/api/v1/preprocessing/download/${data}`);
                document.getElementById('loading').setAttribute('hidden', true);
                document.getElementById('result').setAttribute('hidden',false);
            });
            document.getElementById('loading').setAttribute('hidden', false);
        
            }else document.getElementById('disclaimer').innerHTML='Go back and fill required fields';
          })

         });

    return(
        <div className='datSet_container'>
          <div className='pbar'><Progressbar step={props.step} initStyle='twenty%'/></div>
           <form action="" method="POST" encType="multipart/form-data" id="form_data">
            <input type='text' name='loading_strategy' id='loading_strategy' value={props.strategy} hidden/>

                              <div id='step1' className={props.step===0?'show':'s_no'}>
                                 <div className='randSeed'><h2 className='randSeedTit'>Random seed</h2>
                                  <h3 className='randDescr'>Set a random seed for the preprocessing operations</h3>
                                   <input type='number' name='random_seed' id='random_seed' className='randValue' value={valueData.seed} onChange={(event)=>setValueData({...valueData, seed:event.target.value})}/></div>

                                <div className='binar'> <h2 className='binarTit'>Dataset binarization</h2>
                                  <label htmlFor='binarize' className='binLabel'>Check if you want to binarize the dataset</label>
                                    <input type="checkbox" name='binarize' id="binarize" className='binCheck' value="True" checked={checkData.binarize} onChange={(event)=>setCheckData({...checkData, binarize:event.target.checked})}/></div>
                               </div>

                            <div id='step2' className={props.step===1?'show':'s_no'}>
                             <h2 className='preFTitle'>Pre-filtering</h2>
                                 <CheckSection checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData}/>                               
                             </div>

                            <div id='step3' className={props.step===2?'show':'s_no'}>
                               <h2 className='testSpTitle'>Test splitting</h2>
                               <RadioSection1 checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData} 
                                paramData={paramData} setParamData={setParamData} strategy='test_splitting_strategy' type='test'/>
                             </div>

                             <div id='step4' className={props.step===3?'show':'s_no'}>
                               <h2 className='valSTitle'>Validation splitting</h2>
                               <RadioSection2 checkData={checkData} setCheckData={setCheckData} valueData={valueData} setValueData={setValueData} 
                                 paramData={paramData} setParamData={setParamData} strategy='validation_splitting_strategy' type='validation'/>
                             </div>

                              <div id='step5' className={props.step===4?'show':'s_no'}>
                                 <h2 className='upTitle'>Dataset upload</h2>
                                <div className='fiveWrapper'>
                                  <h3 className='upDescription'>Upload dataset in <strong>.tvs</strong> format </h3>
                                  <input type='file' name="dataset_file" id="dataset_file" className="form-control" accept=".tsv" required/>
                                </div> 

                             </div>
           </form>

           <span id='disclaimer'></span>

                                <div id='loading' hidden>
                                <div className="lds-ripple"><div></div><div></div></div>
                                <span className='load_info'> Data preprocessing in progress</span>
                                </div> 
                                
                                <div id='result' hidden>
                                  <h1 className='completedTit'>Preprocessing completed</h1>
                                  <p className='compl_content'>Your dataset has been successfully processed!
                                     <a href='' className="download_link" id="downloadDF">Download ZIP</a>
                                  </p>
                                </div>

           <button id='next' className='navButt' hidden>Next</button>
           <button id='reset' className='navButt'>Reset input parameters</button>
           <button id='previous' className='navButt' hidden>Previous</button>
           <input type='submit' id='dataset_submit' value='Preprocess with Dataset strategy' className='navButt' hidden />

        </div>
    );
}
export default DatasetForm;
