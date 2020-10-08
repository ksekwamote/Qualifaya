import React from 'react'
import botho from "../../assets/imgs/botho.jpg"
import ub from "../../assets/imgs/ub.jpg"
import limko from "../../assets/imgs/limko.jpg"


export default function Schools_1() {
    return (
        <div>
            
  <div class="container">

<section>
<div class="container-fluid">
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div style={{borderRadius:15 , outlineStyle: "none" , outline:0}} class="card text-center">
          <div class="title">
            <img style={{borderRadius:15 , width:250 , height:250}}  src={ub}/>
            <h2>University Of Botswana</h2>
          </div>
          
          
          <a href="#">Will you get accepted?</a>
        </div>
      </div>
    
      <div class="col-sm-4">
        <div style={{borderRadius:15 , outlineStyle: "none" , outline:0}} class="card text-center">
          <div class="title">
           <img style={{borderRadius:15 , width:250 , height:250}} src={botho} />
            <h2>Botho University</h2>
          </div>
         
         
          <a href="#">Will you get accepted?</a>
        </div>
      </div>
    
      <div class="col-sm-4">
        <div style={{borderRadius:15 , outlineStyle: "none" , outline:0}} class="card text-center">
          <div class="title">
            <img style={{borderRadius:15 , width:250 , height:250}} src={limko} />
            <h2>Limkokwing</h2>
          </div>
        
         
          <a href="#">Will you get accepted? </a>
        </div>
      </div>
      
    </div>
  </div>
</div>
</section>


</div>
        </div>
    )
}
