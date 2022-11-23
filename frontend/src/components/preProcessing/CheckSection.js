import {React} from 'react';
import '../../styles/preProcessing/CheckSection.css'

function CheckSection(props){
     const checkForm=props.checkData;
     const setCheckForm=props.setCheckData;
     const valueForm=props.valueData;
     const setValueForm=props.setValueData;

    return(
      <div className='checkWrapper'>
        <div id='first' className={checkForm.glob_thresh?'checkEl_open':'checkEl'}>
            <h3 className='name'>Global Threshold</h3>

            <input type="checkbox" name="prefiltering_strategy" id="global_threshold" value="global_threshold" className="check-input" 
              checked={checkForm.glob_thresh} onChange={(event)=>{setCheckForm({...checkForm,glob_thresh:event.target.checked})}}/>

            <input type="number" name="global_threshold_threshold" id="global_threshold_threshold" placeholder="Input a value for global threshold" className={checkForm.glob_thresh?"form-input_vis":'form-input'}
             value={valueForm.glob_thresh_value} onChange={(event)=>{setValueForm({...valueForm,glob_thresh_value:event.target.value})}} required={checkForm.glob_thresh?true:false}/> 
        </div>

        <div id='second' className={checkForm.us_av?'us_av':'checkEl'}>
            <h3 className='name'>User Average</h3>

            <input type="checkbox" name="prefiltering_strategy" id="user_average" value="user_average" className="check-input"
              checked={checkForm.us_av} onChange={(event)=>{setCheckForm({...checkForm,us_av:event.target.checked})}}/>
        </div>

        
        <div id='third' className={checkForm.us_k?'checkEl_open':'checkEl'}>
            <h3 className='name'>User k-core</h3>

            <input type="checkbox" name="prefiltering_strategy" id="user_k_core" value="user_k_core" className="check-input"
              checked={checkForm.us_k} onChange={(event)=>{setCheckForm({...checkForm,us_k:event.target.checked})}}/>

            <input type="number" name="user_k_core_core" id="user_k_core_core" placeholder="Input a value of core" className={checkForm.us_k?"form-input_vis":'form-input'}
              value={valueForm.us_k_value} onChange={(event)=>{setValueForm({...valueForm,us_k_value:event.target.value})}} required={checkForm.us_k?true:false}/>
        </div>

        
        <div id='fourth' className={checkForm.it_k?'checkEl_open':'checkEl'}>
            <h3 className='name'>Item k-core</h3>

            <input type="checkbox" name="prefiltering_strategy" id="item_k_core" value="item_k_core" className="check-input"
              checked={checkForm.it_k} onChange={(event)=>{setCheckForm({...checkForm,it_k:event.target.checked})}}/>

            <input type="number" name="item_k_core_core" id="item_k_core_core" placeholder="Input a value of core" className={checkForm.it_k?"form-input_vis":'form-input'}
              value={valueForm.it_k_value} onChange={(event)=>{setValueForm({...valueForm,it_k_value:event.target.value})}} required={checkForm.it_k?true:false}/>
        </div>

        
        <div id='fifth' className={checkForm.iter_k?'checkEl_open':'checkEl'}>
            <h3 className='name'>Iterative k-core</h3>

            <input type="checkbox" name="prefiltering_strategy" id="iterative_k_core" value="iterative_k_core" className="check-input"
             checked={checkForm.iter_k} onChange={(event)=>{setCheckForm({...checkForm,iter_k:event.target.checked})}}/>

            <input type="number" name="iterative_k_core_core" id="iterative_k_core_core" placeholder="Input a value of core" className={checkForm.iter_k?"form-input_vis":'form-input'}
              value={valueForm.iter_k_value} onChange={(event)=>{setValueForm({...valueForm,iter_k_value:event.target.value})}} required={checkForm.iter_k?true:false}/>
        </div>

        
        <div id='sixth' className={checkForm.n_k?'checkEl_open':'checkEl'}>
            <h3 className='name'>N-rounds k-core</h3>

            <input type="checkbox" name="prefiltering_strategy" id="n_rounds_k_core" value="n_rounds_k_core" className="check-input"
              checked={checkForm.n_k} onChange={(event)=>{setCheckForm({...checkForm,n_k:event.target.checked})}}/>

            <input type="number" name="n_rounds_k_core_core" id="n_rounds_k_core_core" placeholder="Input a value of core" className={checkForm.n_k?"form-input_vis":'form-input'}
               value={valueForm.k_value} onChange={(event)=>{setValueForm({...valueForm,k_value:event.target.value})}} required={checkForm.n_k?true:false}/>

            <input type="number" name="n_rounds_k_core_rounds" id="n_rounds_k_core_rounds" placeholder="Input a value of rounds" className={checkForm.n_k?"form-input_vis":'form-input'}
              value={valueForm.n_value} onChange={(event)=>{setValueForm({...valueForm,n_value:event.target.value})}} required={checkForm.n_k?true:false}/>
        </div>

        
        <div id ='seventh' className={checkForm.cold_us?'checkEl_open':'checkEl'}>
            <h3 className='name'>Cold Users</h3>

            <input type="checkbox" name="prefiltering_strategy" id="cold_users" value="cold_users" className="check-input"
            checked={checkForm.cold_us} onChange={(event)=>{setCheckForm({...checkForm,cold_us:event.target.checked})}}/>

            <input type="number" name="cold_users_threshold" id="cold_users_threshold" placeholder="Input a value of threshold for cold users" className={checkForm.cold_us?"form-input_vis":'form-input'}
              value={valueForm.cold_us_value} onChange={(event)=>{setValueForm({...valueForm,cold_us_value:event.target.value})}} required={checkForm.cold_us?true:false}/>
        </div>

      </div>

    );
}

export default CheckSection;