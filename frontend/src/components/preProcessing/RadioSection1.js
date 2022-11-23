import {React, useState} from 'react';
import '../../styles/preProcessing/RadioSection1.css'
function RadioSection(props){

    const checkForm=props.checkData;
    const setCheckForm=props.setCheckData;
    const valueForm=props.valueData;
    const setValueForm=props.setValueData;
    const paramForm=props.paramData;
    const setParamForm=props.setParamData;

    const[whoChecked,setWhoChecked]=useState('');


    return(
        <div className='radioWrapper'>
          <div className='radioEl'>
            <h3 className='name'>Fixed Timestamp</h3>

            <input type="radio" name={props.strategy} id={props.type+'_fixed_timestamp'} value="fixed_timestamp" className="form-radio-input" 
              checked={checkForm.fixt} onChange={(event)=>setCheckForm({...checkForm,fixt:event.target.checked})}
              onClick={()=>setWhoChecked('fixt')} required/>

            <input type="text" name={props.type+'_fixed_timestamp_value'} id={props.type+'_fixed_timestamp_value'} placeholder="input timestamp in UNIX format or type the string 'best'" className={whoChecked==='fixt'&&checkForm.fixt?"input1":'inputNo'}
             value={valueForm.fixt_value} onChange={(event)=>setValueForm({...valueForm,fixt_value:event.target.value})} required={whoChecked==='fixt'&&checkForm.fixt?true:false}/>

          </div>

          <div className='radioEl'>
            <h3 className='name'>Temporal Hold-out</h3>

            <input type="radio" name={props.strategy} id={props.type+'temporal_hold_out'} value="temporal_hold_out" className="form-radio-input"
              checked={checkForm.tho} onChange={(event)=>setCheckForm({...checkForm, tho:event.target.checked})} onClick={()=>setWhoChecked('tho')} required/>

            <div className={whoChecked==='tho'&&checkForm.tho?'input2':'inputNo'}>
               <div className='slider_container'>Ratio<label className='slider'><input type='checkbox' id='param_choice_tho' checked={paramForm.tho_c} onChange={(event)=>setParamForm({...paramForm,tho_c:event.target.checked})}/>
               <div className="switch round"></div></label>Leave-n-out</div>

               {checkForm.tho_c?
               <input type='number' name={props.type+'temporal_hold_out_leave_n_out'} id={props.type+'_temporal_hold_out_leave_n_out'} placeholder="Input a value for leave-n-out" className="form-control" 
                value={valueForm.tho_n_out} onChange={(event)=>setValueForm({...valueForm,tho_n_out:event.target.value})} required={whoChecked==='tho'&& checkForm.tho_c&&checkForm.tho?true:false}/>:
                <input type='number' name={props.type+'_temporal_hold_out_test_ratio'} id={props.type+'_temporal_hold_out_test_ratio'} placeholder="Input a value for test ratio" className="form-control"  step='0.01' 
                value={valueForm.tho_range} onChange={(event)=>setValueForm({...valueForm,tho_range:event.target.value})} required={whoChecked==='tho'&&checkForm.tho?true:false}/>}
            </div>
          </div>

          <div className='radioEl'>
            <h3 className='name'>Random subsampling</h3>
            
            <input type="radio" name={props.strategy} id={props.type+'_random_subsampling'} value="random_subsampling" className="form-radio-input" 
              checked={checkForm.rand_sub} onChange={(event)=>setCheckForm({...checkForm, rand_sub:event.target.checked})} onClick={()=>setWhoChecked('rans')} required/>
           
              <div className={whoChecked==='rans'&&checkForm.rand_sub?'input3':'inputNo'}>
              <div className='slider_container'>Ratio<label className='slider'><input type='checkbox' id='param_choice_rand' checked={paramForm.rand_sub_c} onChange={(event)=>setParamForm({...paramForm,rand_sub_c:event.target.checked})}/>
              <div className="switch round"></div></label>Leave-n-out</div>

            {checkForm.rand_sub_c?
            <input type='number' name="test_random_subsampling_leave_n_out" id="test_random_subsampling_leave_n_out" placeholder="Input a value of leave-n-out" className="form-control" 
            value={valueForm.rand_sub_n_out} onChange={(event)=>setValueForm({...valueForm,rand_sub_n_out:event.target.value})} required={whoChecked==='rans'&&checkForm.rand_sub_c&&checkForm.rand_sub?true:false}/>:

            <input type='number' name={props.type+'_random_subsampling_test_ratio'} id={props.type+'_random_subsampling_test_ratio'} placeholder="Input a value of test ratio" className="form-control" step='0.01'
              value={valueForm.rand_sub_range} onChange={(event)=>setValueForm({...valueForm,rand_sub_range:event.target.value})} required={whoChecked==='rans'&&checkForm.rand_sub?true:false}/>}

            <input type='number' name={props.type+'_random_subsampling_folds'} id={props.type+'_random_subsampling_folds'} placeholder="Input a value for the folds" className="form-control" 
              value={valueForm.rand_sub_folds} onChange={(event)=>setValueForm({...valueForm,rand_sub_folds:event.target.value})} required={whoChecked==='rans'&&checkForm.rand_sub?true:false}/>
              </div>
            
          </div>

          <div id='single' className='radioEl'>
            <h3  className='name'>Random Cross Validation</h3>
            <input type="radio" name={props.strategy} id={props.type+'_random_cross_validation'} value="random_cross_validation" className="form-radio-input"
              checked={checkForm.rand_cross} onChange={(event)=>setCheckForm({...checkForm, rand_cross:event.target.checked})} onClick={()=>setWhoChecked('ranc')} required/>

            <input type='number' name={props.type+'_random_cross_validation_folds'} id={props.type+'_random_cross_validation_folds'} placeholder="Input a value for the folds" className={whoChecked==='ranc'&&checkForm.rand_cross?"input4":'inputNo'}
              value={valueForm.rand_cross_folds} onChange={(event)=>setValueForm({...valueForm,rand_cross_folds:event.target.value})} required={whoChecked==='ranc'&&checkForm.rand_cross?true:false}/>
          </div>

        </div>
    );
}

export default RadioSection;