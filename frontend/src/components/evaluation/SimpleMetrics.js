import React from 'react';
import '../../styles/evaluation/SimpleMetrics.css';

function SimpleMetrics(){
    
    return(
        <>
        <span className='titSect'>Simple Metrics</span>
        <div className='content'>
        <div id='accuracy' className='metricOption'>
                    <span className='metricTit'>Accuracy</span>
                    <div className='optShow'>
                      <input type="checkbox"  name="simple_metrics" id="AUC" value="AUC" className='optCheck'/>AUC
                      <input type="checkbox"  name="simple_metrics" id="GAUC" value="GAUC" className='optCheck'/>GAUC
                      <input type="checkbox"  name="simple_metrics" id="LAUC" value="LAUC" className='optCheck'/>LAUC<br/>
                      <input type="checkbox"  name="simple_metrics" id="F1" value="F1" className='optCheck'/>F1
                      <input type="checkbox"  name="simple_metrics" id="HR" value="HR" className='optCheck'/>HR
                      <input type="checkbox"  name="simple_metrics" id="MAP" value="MAP" className='optCheck'/>MAP<br/>
                      <input type="checkbox"  name="simple_metrics" id="MAR" value="MAR" className='optCheck'/>MAR         
                      <input type="checkbox"  name="simple_metrics" id="MRR" value="MRR" className='optCheck'/>MRR
                      <input type="checkbox"  name="simple_metrics" id="nDCG" value="nDCG" className='optCheck'/>nDCG<br/>
                      <input type="checkbox"  name="simple_metrics" id="Precision" value="Precision" className='optCheck'/>Precision
                      <input type="checkbox"  name="simple_metrics" id="Recall" value="Recall" className='optCheck'/>Recall
                    </div>
                </div>
                <div className='metricOption'>
                    <span className='metricTit'>Simple bias</span>
                    <div className='optShow'>
                     <input type="checkbox"  name="simple_metrics" id="ACLT" value="ACLT" className='optCheck'/>ACLT
                      <input type="checkbox"  name="simple_metrics" id="APLT" value="APLT" className='optCheck'/>APLT
                      <input type="checkbox"  name="simple_metrics" id="ARP" value="ARP" className='optCheck'/>ARP<br />
                      <input type="checkbox"  name="simple_metrics" id="PopREO" value="PopREO" className='optCheck'/>PopREO
                      <input type="checkbox"  name="simple_metrics" id="PopRSP" value="PopRSP" className='optCheck'/>PopRSP
                    </div>
                </div>
                <div className='metricOption'>
                    <span className='metricTit'>Coverage</span>
                    <div className='optShow'>
                      <input type="checkbox"  name="simple_metrics" id="ItemCoverage" value="ItemCoverage" className='optCheck'/>ItemCoverage
                      <input type="checkbox"  name="simple_metrics" id="NumRetrieved" value="NumRetrieved" className='optCheck'/>NumRetrieved<br/>
                      <input type="checkbox"  name="simple_metrics" id="UserCoverage" value="UserCoverage" className='optCheck'/>UserCoverage
                      <input type="checkbox"  name="simple_metrics" id="UserCoverageATN" value="UserCoverageATN" className='optCheck'/>UserCoverageATN
                    </div>
                </div>
                <div id ='diversity' className='metricOption'>
                    <span className='metricTit'>Diversity</span>
                    <div className='optShow'>
                      <input type="checkbox"  name="simple_metrics" id="Gini" value="Gini" className='optCheck'/>Gini
                      <input type="checkbox"  name="simple_metrics" id="ShannonEntropy" value="SEntropy" className='optCheck'/>ShannonEntropy
                      <input type="checkbox"  name="simple_metrics" id="SRecall" value="SRecall" className='optCheck'/>SRecall
                    </div>
                </div>
                <div id='rating' className='metricOption'>
                    <span className='metricTit'>Rating</span>
                    <div className='optShow'>
                      <input type="checkbox"  name="simple_metrics" id="MAE" value="MAE" className='optCheck'/>MAE
                      <input type="checkbox"  name="simple_metrics" id="MSE" value="MSE" className='optCheck'/>MSE
                      <input type="checkbox"  name="simple_metrics" id="RMSE" value="RMSE" className='optCheck'/>RMSE
                    </div>
                </div>
                <div id='novelty' className='metricOption'>
                    <span className='metricTit'>Novelty</span>
                    <div className='optShow'>
                      <input type="checkbox"  name="simple_metrics" id="EFD" value="EFD" className='optCheck'/>EFD
                      <input type="checkbox"  name="simple_metrics" id="EPC" value="EPC" className='optCheck'/>EPC
                    </div>
                </div>
            </div>
        </>
    );
}

export default SimpleMetrics;