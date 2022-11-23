import {React, useState} from 'react';
import '../../styles/preProcessing/RadioSection2.css'
function RadioSection(props){

    const checkForm=props.checkData;
    const setCheckForm=props.setCheckData;
    const valueForm=props.valueData;
    const setValueForm=props.setValueData;
    const paramForm=props.paramData;
    const setParamForm=props.setParamData;

    const[whoChecked2,setWhoChecked2]=useState('');



    return(
        <div className='radioWrapper2'>
          <div className='radioEl2'>
            <h3 className='name2'>Fixed Timestamp</h3>

            <input type="radio" name={props.strategy} id={props.type+'_fixed_timestamp'} value="fixed_timestamp" className="form-radio-input2" 
              checked={checkForm.fixt2} onChange={(event)=>setCheckForm({...checkForm,fixt2:event.target.checked})}
              onClick={()=>setWhoChecked2('fixt2')} required/>

            <input type="text" name={props.type+'_fixed_timestamp_value'} id={props.type+'_fixed_timestamp_value'} placeholder="input timestamp in UNIX format or type the string 'best'" className={whoChecked2==='fixt2'&&checkForm.fixt2?"input12":'inputNo'}
             value={valueForm.fixt_value2} onChange={(event)=>setValueForm({...valueForm,fixt_value2:event.target.value})} required={whoChecked2==='fixt2'&&checkForm.fixt2?true:false}/>

          </div>

          <div className='radioEl'>
            <h3 className='name2'>Temporal Hold-out</h3>

            <input type="radio" name={props.strategy} id={props.type+'temporal_hold_out'} value="temporal_hold_out" className="form-radio-input2"
              checked={checkForm.tho2} onChange={(event)=>setCheckForm({...checkForm, tho2:event.target.checked})} onClick={()=>setWhoChecked2('tho2')} required/>

            <div className={whoChecked2==='tho2'&&checkForm.tho2?'input22':'inputNo'}>
               <div className='slider_container2'>Ratio<label className='slider2'><input type='checkbox' id='param_choice_tho' checked={paramForm.tho_c2} onChange={(event)=>setParamForm({...paramForm,tho_c2:event.target.checked})}/>
               <div className="switch2 round"></div></label>Leave-n-out</div>

               {checkForm.tho_c2?
               <input type='number' name={props.type+'temporal_hold_out_leave_n_out'} id={props.type+'_temporal_hold_out_leave_n_out'} placeholder="Input a value for leave-n-out" className="form-control2" 
                value={valueForm.tho_n_out2} onChange={(event)=>setValueForm({...valueForm,tho_n_out2:event.target.value})} required={whoChecked2==='tho2'&& checkForm.tho_c2&&checkForm.tho2?true:false}/>:
                <input type='number' name={props.type+'_temporal_hold_out_test_ratio'} id={props.type+'_temporal_hold_out_test_ratio'} placeholder="Input a value for test ratio" className="form-control2"  step='0.01' 
                value={valueForm.tho_range2} onChange={(event)=>setValueForm({...valueForm,tho_range2:event.target.value})} required={whoChecked2==='tho2'&&checkForm.tho2?true:false}/>}
            </div>
          </div>

          <div className='radioEl'>
            <h3 className='name2'>Random subsampling</h3>
            
            <input type="radio" name={props.strategy} id={props.type+'_random_subsampling'} value="random_subsampling" className="form-radio-input2" 
              checked={checkForm.rand_sub2} onChange={(event)=>setCheckForm({...checkForm, rand_sub2:event.target.checked})} onClick={()=>setWhoChecked2('rans2')} required/>
           
              <div className={whoChecked2==='rans2'&&checkForm.rand_sub2?'input32':'inputNo'}>
              <div className='slider_container2'>Ratio<label className='slider2'><input type='checkbox' id='param_choice_rand' checked={paramForm.rand_sub_c2} onChange={(event)=>setParamForm({...paramForm,rand_sub_c2:event.target.checked})}/>
              <div className="switch2 round"></div></label>Leave-n-out</div>

            {checkForm.rand_sub_c2?
            <input type='number' name="test_random_subsampling_leave_n_out" id="test_random_subsampling_leave_n_out" placeholder="Input a value of leave-n-out" className="form-control2" 
            value={valueForm.rand_sub_n_out2} onChange={(event)=>setValueForm({...valueForm,rand_sub_n_out2:event.target.value})} required={whoChecked2==='rans2'&&checkForm.rand_sub_c2&&checkForm.rand_sub2?true:false}/>:

            <input type='number' name={props.type+'_random_subsampling_test_ratio'} id={props.type+'_random_subsampling_test_ratio'} placeholder="Input a value of test ratio" className="form-control2" step='0.01'
              value={valueForm.rand_sub_range2} onChange={(event)=>setValueForm({...valueForm,rand_sub_range2:event.target.value})} required={whoChecked2==='rans2'&&checkForm.rand_sub2?true:false}/>}

            <input type='number' name={props.type+'_random_subsampling_folds'} id={props.type+'_random_subsampling_folds'} placeholder="Input a value for the folds" className="form-control2" 
              value={valueForm.rand_sub_folds2} onChange={(event)=>setValueForm({...valueForm,rand_sub_folds2:event.target.value})} required={whoChecked2==='rans2'&&checkForm.rand_sub2?true:false}/>
              </div>
            
          </div>

          <div id='single2' className='radioEl'>
            <h3  className='name2'>Random Cross Validation</h3>
            <input type="radio" name={props.strategy} id={props.type+'_random_cross_validation'} value="random_cross_validation" className="form-radio-input2"
              checked={checkForm.rand_cross2} onChange={(event)=>setCheckForm({...checkForm, rand_cross2:event.target.checked})} onClick={()=>setWhoChecked2('ranc2')} required/>

            <input type='number' name={props.type+'_random_cross_validation_folds'} id={props.type+'_random_cross_validation_folds'} placeholder="Input a value for the folds" className={whoChecked2==='ranc2'&&checkForm.rand_cross2?"input42":'inputNo'}
              value={valueForm.rand_cross_folds2} onChange={(event)=>setValueForm({...valueForm,rand_cross_folds2:event.target.value})} required={whoChecked2==='ranc2'&&checkForm.rand_cross2?true:false}/>
          </div>

        </div>
    );
}

export default RadioSection;