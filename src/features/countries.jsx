import React from 'react'
import { useGetAllcountriesQuery } from '../services/countries'

function Countries() {
    var{isLoading,data}= useGetAllcountriesQuery()
    console.log(data);
  return(
    <div class="border border-danger">
    <h1>countries</h1>
        {isLoading && <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> }
        <ol className='d-flex flex-wrap' >
            {isLoading===false && (
                data.map((country)=>{
                    return <li className='w-25 border border-2 border-info p-1 m-2'>
                       <h1>NAME:{country.name.common}</h1>
                       <br></br>
                       <h1>CAPITAL:{country.capital}</h1>
                       <br></br>
                        <img src={country.flags[0]} alt="" width="200px"/>
                     
                        </li>
                         
                    

                })
            )
                
            }
        </ol>


 </div>
  )
}

export default Countries