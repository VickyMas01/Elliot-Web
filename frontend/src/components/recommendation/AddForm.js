import React from 'react';

function AddForm(props){
    return(
        <div className='formContent'>
            <div className='modelSelect'>
                <label for="loading_rec_model">Select Recommendation Model</label>
                <select name="loading_rec_model" id="loading_rec_model" class="form-control" required>
                    <option value='null' selected disabled>--- Select one ---</option>
                    {/* capire come richiamare l'API per i modelli, o importare i json affidando questa parte al frontend */}
                </select>
            </div>
        </div>
    );
}

export default AddForm;