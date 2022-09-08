import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'
function Content() {
  const [details,setDetails]=useState([])
  useEffect(()=>{
    axios.get('https://swapi.dev/api/people').then(response=>{
    //console.log(response.data)
    const size=response.data.results.slice(0,9)
      setDetails(size)
    }).catch(err=>{
      console.log(err)
    })
  })
  
  
  
  return (
    <div className="Container">
      <div className="heading">
      <h1 className="head">PEOPLE DETAILS</h1>
    </div>
    <div id="grid-container">
      
      {
          details.map((value)=>{
            return (
              <>
              <div className="item1">
        <div className='subheading'>
        <h3>Personal Details</h3>
      </div>
        <div className="arrange">
        
        
        <table className="table">
          <tr>
              <td className="td">Name</td>
              <td className="td">:{value.name}</td>
          </tr>
          <tr>
          <td className="td">Height</td>
          <td className="td">:{value.height} cm</td>
          </tr>
          <tr>
              <td className="td">Mass</td>
              <td className="td">:{value.mass} kg</td>
          </tr>
          <tr>
            <td className="td">Gender</td>
            <td className="td">:{value.gender}</td>
        </tr>
        <tr>
          <td className="td">Birth Year</td>
          <td className="td">:{value.birth_year}</td>
      </tr>
    </table>
    </div>
    </div>
              </>
            )
          }
          
          
          )
        } 
      </div>
      
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>

      </div>   
  )
  
}

export default Content
