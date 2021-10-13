import React, { useEffect, useState } from 'react'

const Search = () => {

    const [search,setsearch] = useState([]);
    const [data,setData] = useState([]);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
            fetch('http://localhost:8000/api/data/'+`${search}`,{
                method:"get",
                headers:{
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json()).then(result=>{
                console.log(result)
                setData(result)
            })
    }
    return (
      <div className="" >
         <input type="text" placeholder="tariffItem number"  value={search} onChange={(e)=>setsearch(e.target.value)}/>
         <button onClick={handleSubmit}>submit</button>
         
            {(data.length != 0 ? <table class="table table-bordered">
                <thead>
                    <tr>
                  <th scope="col">#</th>
                  <th scope="col">tariffItem</th>
                  <th scope="col">description</th>
                  <th scope="col">FOB</th>
                  <th scope="col">UQC</th>
                  <th scope="col">Cap</th>
                </tr>
                </thead>
            <tbody>
                <tr key = {data._id}>
                  <th scope="row">1</th>
                  <td>{data.data.tariffItem}</td>
                  <td>{data.data.description}</td>
                  <td>{data.data.FOB}</td>
                  <td>{data.data.UQC}</td>
                  <td>{data.data.Cap}</td>
                </tr>
    
                </tbody>
            </table>:
            <div
            ></div>
            ) }
      </div>
    )
}

export default Search
