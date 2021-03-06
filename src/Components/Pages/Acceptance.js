import React , {useState} from 'react'
import {Header, Footer} from "./Home"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { blue } from '@material-ui/core/colors';
import { qList } from '../../assets/JSON/bqalist'

const colleges = qList.Sheet.map(item => item.Provider)


 
 const courses = qList.Sheet.map(item => item.Programme)

 export const credits = [
     {
         school:'Botho University',
         module: 'Bachelor Of Science'
     },
     {
         school: 'Botho University',
         module: 'Bachelor Of Computer Science'
     },
     {
         school: 'University Of Botswana',
         module: 'Bachelor Of Science'
     },
     {
         school: 'University Of Botswana',
         module: 'Bachelor Of Computer Science'
     }
     ,
     {
         school: 'University Of Botswana',
         module: 'Bachelor Of Law'
     },
     ,
     {
         school: 'University Of Botswana',
         module: 'Bachelor Of Medicine'
     },
     {
         school: 'Boitekanelo College',
         module: 'Bachelor Of Pharmacy'
     }
 ]
 
 
 


export default function Acceptance() {
    const defaultProps = {
        options: colleges,
        getOptionLabel: (option) => option.school,
      };
    
      const defaultCourse = {
        options: courses,
        getOptionLabel: (option) => option.module,
      };
    
    
      const flatProps = {
        options: colleges.map((option) => option.school),
      };
    
      const CourseProps ={
        options: colleges.map((option) => option.module),
      }

      function checkCredit(school , module){

        const accreditation = qList.Sheet 

        if(school==""  || module==""){
            return "Fields cannot be blank"
        }
    
        for (let item in accreditation){
            if (accreditation[item].Provider== school && accreditation[item].Programme==module ){
                if(accreditation[item].Accreditation!="Approved"){
                        return <h2> Excellent ,{module} has <strong>{accreditation[item].Accreditation}</strong> in {school} from BQA</h2>
              }
              else{
                return <h2> Excellent ,{module} has been <strong>{accreditation[item].Accreditation}</strong> in {school} by BQA</h2>
              }
            }
        }
    
        return <div>Unfortunately, {module} is yet to be properly accredited by {school} &#128546;</div> 
    
     }


    
      const [value, setValue] = React.useState(null);
      const [inst, setInst] = useState("")
      const [mod, setmod] = useState("")
      const [state, setstate] = useState("")
 
       function setModule(event, value){
        
        if (value!= null){
           setmod(value)
        }
        else{
          setmod("")
        }

      }

      function setInstitution(event, value){
        console.log(value)
        if (value!= null){
          setInst(value)
       }
       else{
         setInst("")
       }


      }
    
     

    return (
        <div>
          
            <header class="hero container-fluid border-bottom">
            <Header/>

            <div class="hero__content container mx-auto">
      <div class="row px-0 mx-0 align-items-center">
        <div class="col-lg-6 px-0">

        <div style={{paddingRight:150}} class="hero__img-container">
          <form  noValidate autoComplete="off">
        
              <Autocomplete
       
        id="disable-close-on-select"
        options={[...new Set(colleges)]}
        getOptionLabel={(option) => option}
        onChange={ setInstitution}
          
        renderInput={(params) => (
          <TextField {...params}  id="standard-basic" label="Institution" />
        )}
      />
    <br></br>
              <Autocomplete
        {...defaultCourse}
        id="disable-close-on-select"
        options={[...new Set(courses)]}
        getOptionLabel={option=> option}
        onChange={setModule}
        renderInput={(params) => (
          <TextField {...params}   id="standard-basic" label="Course" />
        )}
      />{'   '}
              
           </form>
      <br></br>   <br></br>  
           <div style={{padding:10}} class="hero__btns-container">
            <a style={{borderRadius:25 , backgroundColor:'#0a1f44' , textTransform:"capitalize" , fontWeight:500}} onClick={e => setstate((checkCredit(inst,mod)))}  class="hero__btn btn btn-primary mb-2 mb-lg-0" href="#">
              <span>Check Accreditation</span>
            </a>
         
          </div>
          </div>
          
          
        </div>
        <div style={{paddingLeft:50}}>
        <div style={{ padding:50, backgroundColor:"aliceblue" , height:300, width:500}} >
            <br></br> 
        <h2>{state}</h2>
          
        </div>
        </div>
      </div>
    </div>
            </header>

            <div>

            </div>
 
          
        </div>
    )
}
