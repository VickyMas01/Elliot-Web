import React, { useEffect,useState} from 'react';
import '../../styles/evaluation/ComplexMetrics.css';

function ComplexMetrics(){
    const defaultFairCheck={
      biasBD:false,
      biasBR:false,
      biasBS:false,
      iMADrank:false,
      iMASrat:false,
      uMADrank:false,
      uMADrat:false,
      reo:false,
      rsp:false
    }
    const[fairCheck,setFairCheck]=useState(defaultFairCheck);

    useEffect(()=>{
      
      document.getElementById('DSC').addEventListener('change',(event)=>{
        if(event.target.checked){
          document.getElementById('beta').className='betaInput';
          document.getElementById('beta').required=true;
        }else document.getElementById('beta').className='optHidden';
      })
    });
    return(
        <>
        <span className='titSect'>Complex Metrics</span>
        <div className='optionWrapper'>
        <div className='metricOption'>
            <span className='metricTit'>Accuracy</span>
            <div className='optShow'>
              <input type="checkbox"  name="complex_metrics" id="DSC" value="DSC"/>DSC
              <input type="number" name="beta" id="beta" placeholder="input a value for beta (es:1)" className='optHidden'/>
              <br/>
              <input type="checkbox"  name="complex_metrics" id="" value=""/>ExtendedF1
            </div>
        </div>
        <div className='metricOption'>
            <span className='metricTit'>Bias</span>
            <div className='optShow'>
              <input type="checkbox"  name="complex_metrics" id="ExtendedPopREO" value="ExtendedPopreo" />Extended PopREO<br/>
              <input type="checkbox"  name="complex_metrics" id="ExtendedPopRSP" value="ExtendendPoprsp" />ExtendedPopRSP
            </div>
        </div>
        <div id='fairSection' className='metricOption'>
            <span id='fairTit' className='metricTit'>Fairness</span>
            <p id='screenChange' className='fairClosed' onClick={(event)=>{if(event.target.className==='fairClosed'){
                                event.target.className='fairOpened';
                                document.getElementById('complNovelty').style='display:none';
                                document.getElementById('fairSection').className='metricOptionOpened';
                                document.getElementById('fairOpt').className='fairOptShow';
                                document.getElementById('fairTit').style='display:none';
                                }else {
                                  event.target.className='fairClosed';
                                  document.getElementById('fairSection').className='metricOption';
                                  document.getElementById('complNovelty').style='display:block';
                                  document.getElementById('fairOpt').className='fairOptHide';
                                  document.getElementById('fairTit').style='display:block';
                                }}}/>
        </ div>
            <div id='fairOpt' className='fairOptHide'>
                <div className='clusterOpt'>
                   <input type="checkbox" name="complex_metrics" id="BiasDisparityBD" value="BiasDisparityBD" className='clustCheck' 
                     onChange={(event)=>setFairCheck({...fairCheck, biasBD:event.target.checked})}/>BiasDisparityBD
                   <div className='optClusShow'>
                     <span className='userClustering'>User clustering name and file</span>
                     <input type="text" name="user_clustering_name_BD" placeholder="user clustering name" id="ucn_BD" className='cluName' required={fairCheck.biasBD?true:false}/>
                     <input type="file" name="user_clustering_file_BD"  id="ucf_BD" className='cluFile' required={fairCheck.biasBD?true:false}></input><br/>

                     <span className='userClustering'>Item clustering name and file</span>
                     <input type="text" name="item_clustering_name_BD" placeholder="item clustering name" id="icn_BD" className='cluName' required={fairCheck.biasBD?true:false}/>
                     <input type="file" name="item_clustering_file_BD"  id="icf_BD" className='cluFile' required={fairCheck.biasBD?true:false}></input>
                   </div>
                </div>

                <div className='clusterOpt'>
                   <input type="checkbox" name="complex_metrics" id="BiasDisparityBR" value="BiasDisparityBR" className='clustCheck'
                     onChange={(event)=>setFairCheck({...fairCheck, biasBR:event.target.checked})}/>BiasDisparityBR<br/>
                   <div className='optClusShow'>
                     <span className='userClustering'>User clustering name and file</span>
                     <input type="text" name="user_clustering_name_BR" placeholder="user clustering name" id="ucn_BR" className='cluName' required={fairCheck.biasBR?true:false}/>
                     <input type="file" name="user_clustering_file_BR"  id="ucf_BR" className='cluFile' required={fairCheck.biasBR?true:false}></input><br/>

                     <span className='itemClustering'>Item clustering name and file</span>
                     <input type="text" name="item_clustering_name_BR" placeholder="item clustering name" id="icn_BR" className='cluName' required={fairCheck.biasBR?true:false}/>
                     <input type="file" name="item_clustering_file_BR"  id="icf_BR" className='cluFile' required={fairCheck.biasBR?true:false}></input>
                   </div>
                </div>

                <div className='clusterOpt'>
                   <input type="checkbox" name="complex_metrics" id="BiasDisparityBS" value="BiasDisparityBS" className='clustCheck'
                     onChange={(event)=>setFairCheck({...fairCheck, biasBS:event.target.checked})}/>BiasDisparityBS<br/>
                   <div className='optClusShow'>
                     <span className='userClustering'>User clustering name and file</span>
                     <input type="text" name="user_clustering_name_BS" placeholder="user clustering name" id="ucn_BS" className='cluName' required={fairCheck.biasBS?true:false}/>
                     <input type="file" name="user_clustering_file_BS"  id="ucf_BS" className='cluFile' required={fairCheck.biasBS?true:false}></input><br/>

                     <span className='itemClustering'>Item clustering name and file</span>
                     <input type="text" name="item_clustering_name_BS" placeholder="item clustering name" id="icn_BS" className='cluName' required={fairCheck.biasBS?true:false}/>
                     <input type="file" name="item_clustering_file_BS"  id="icf_BS" className='cluFile' required={fairCheck.biasBS?true:false}></input>
                   </div>
                </div>

                <div className='clusterOpt2'>
                 <input type="checkbox" name="complex_metrics" id="ItemMADranking" value="ItemMADranking" className='clustCheck'
                   onChange={(event)=>setFairCheck({...fairCheck, iMADrank:event.target.checked})}/>ItemMADranking<br/>
                   <div className='optClusShow'>
                     <span className='descClustering'>Clustering name and file</span>
                     <input type="text" name="clustering_name_iMADranking" placeholder="clustering name"  id="cn_iMADranking" className='cluName' required={fairCheck.iMADrank?true:false}/>
                     <input type="file" name="clustering_file_iMADranking"  id="cf_iMADranking" className='cluFile' required={fairCheck.iMADrank?true:false}/>
                   </div>
                </div>

                <div className='clusterOpt2'>
                 <input type="checkbox" name="complex_metrics" id="ItemMADrating" value="ItemMADrating" className='clustCheck'
                   onChange={(event)=>setFairCheck({...fairCheck, iMADrat:event.target.checked})}/>ItemMADrating<br/>
                   <div className='optClusShow'>
                     <span className='descClustering'>Clustering name and file</span>
                     <input type="text" name="clustering_name_iMADrating" placeholder="clustering name"  id="cn_iMADrating" className='cluName' required={fairCheck.iMADrat?true:false}/>
                     <input type="file" name="clustering_file_iMADrating"  id="cf_iMADrating" className='cluFile' required={fairCheck.iMADrat?true:false}/>
                   </div>
                </div>

                <div className='clusterOpt2'>
                 <input type="checkbox" name="complex_metrics" id="UserMADranking" value="UserMADranking" className='clustCheck'
                   onChange={(event)=>setFairCheck({...fairCheck, uMADrank:event.target.checked})}/>UserMADranking<br/>
                   <div className='optClusShow'>
                     <span className='descClustering'>Clustering name and file</span>
                     <input type="text" name="clustering_name_uMADranking" placeholder="clustering name"  id="cn_uMADranking" className='cluName' required={fairCheck.uMADrank?true:false}/>
                     <input type="file" name="clustering_file_uMADranking"  id="cf_uMADranking" className='cluFile' required={fairCheck.uMADrank?true:false}/>
                   </div>
                </div>

                <div className='clusterOpt2'>
                 <input type="checkbox" name="complex_metrics" id="UserMADrating" value="UserMADrating" className='clustCheck'
                   onChange={(event)=>setFairCheck({...fairCheck, uMADrat:event.target.checked})}/>UserMADrating<br/>
                   <div className='optClusShow'>
                     <span className='descClustering'>Clustering name and file</span>
                     <input type="text" name="clustering_name_uMADrating" placeholder="clustering name" id="cn_uMADrating" className='cluName' required={fairCheck.uMADrat?true:false}/>
                     <input type="file" name="clustering_file_uMADrating"  id="cf_uMADrating" className='cluFile' required={fairCheck.uMADrat?true:false}/>
                   </div>
                </div>

                <div className='clusterOpt2'>
                <input type="checkbox" name="complex_metrics" id="REO" value="REO" className='clustCheck'
                  onChange={(event)=>setFairCheck({...fairCheck, reo:event.target.checked})}/>REO<br/>
                   <div className='optClusShow'>
                     <span className='descClustering'>Clustering name and file</span>
                     <input type="text" name="clustering_name_REO" placeholder="clustering name"  id="cn_REO" className='cluName' required={fairCheck.reo?true:false}/>
                     <input type="file" name="clustering_file_REO" id="cf_REO" className='cluFile' required={fairCheck.reo?true:false}/>
                   </div>
                </div>

                <div className='clusterOpt2'>
                <input type="checkbox" name="complex_metrics" id="RSP" value="RSP" className='clustCheck'
                  onChange={(event)=>setFairCheck({...fairCheck, rsp:event.target.checked})}/>RSP<br/>
                   <div className='optClusShow'>
                     <span className='descClustering'>Clustering name and file</span>
                     <input type="text" name="clustering_name_RSP" placeholder="clustering name"  id="cn_RSP" className='cluName' required={fairCheck.rsp?true:false}/>
                     <input type="file" name="clustering_file_RSP" id="cf_RSP" className='cluFile' required={fairCheck.rsp?true:false}/>
                   </div>
                </div>
            
        </div>
        <div id='complNovelty' className='metricOption'>
            <span className='metricTit'>Novelty</span>
            <div className='optShow'>
              <input type="checkbox"  name="complex_metrics" id="ExtendedEFD" value="ExtendedEFD"/>ExtendedEFD<br/>
              <input type="checkbox"  name="complex_metrics" id="ExtendedEPC" value="ExtendedEPC"/>ExtendedEPC
            </div>
        </div>
      </div>
        </>
    );
}

export default ComplexMetrics;