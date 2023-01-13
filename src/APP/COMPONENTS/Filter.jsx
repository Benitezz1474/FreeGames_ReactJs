import { useState } from "react";

export const Filter=({
    //Setters of filters
    changeFilterPlatform,
    changeDateFilter,
    changeFilterGender,

    //Value of setters
    filterPlatform,
    dateFilter,
    filterGender
                  
 })=>{
     
     
     //Sub FILTRERS
     
     const [subFilterPlatform, setSubFilterPlatform] = useState(false);
     const [subFilterGender, setSubFilterGender] = useState(false);
     const [subFilterDate, setSubFilterDate] = useState(false);
     




  const handleSelect=(e)=>{

        
             const result = e.target.value;
             
     
             changeDateFilter(result)
             setSubFilterDate(true)

             console.log(result)
         }





return <div className="text-center my-5 ">

        <h4 className="text-light my-3 py-3" >Filters</h4>
       
        <button className="btn btn-primary px-2 m-3" onClick={()=>{
            
            changeFilterPlatform("PC")
            setSubFilterPlatform(true)
                
            
            }} >PC</button>
       
        <button className="btn btn-primary px-2 m-3" onClick={()=>{
            
                changeFilterPlatform("Browser"),
                setSubFilterPlatform(true)
                
            }} >Browser</button>
       
       
        <button className="btn btn-primary px-2 m-3" onClick={()=>{
            

            changeFilterGender("MMORPG")
            setSubFilterGender(true)
            
            }} >MMORPG</button>
       
        <button className="btn btn-primary px-2 m-3" onClick={()=>{
            

            changeFilterGender("Shooter")
            setSubFilterGender(true)
            
            }} >Shooter</button>
        
        <button className="btn btn-primary px-2 m-3" onClick={()=>{
            

            changeFilterGender("Adventure")
            setSubFilterGender(true)
            
            }} >Adventure</button>


        <select className="form-select my-5" aria-label="Default select example" onChange={handleSelect}  >
        
        <option value={"2005-01-01"} >Select Date</option>

        <option disabled className="text-danger" value={"2020-01-01"} > 2020  </option>
        <option disabled className="text-danger" value={"2019-01-01"} > 2019  </option>
        <option disabled className="text-danger" value={"2018-01-01"} > 2018  </option>
        <option value={"2017-01-01"} > 2017 </option>
        <option value={"2015-01-01"} > 2015 </option>
        <option value={"2010-01-01"} > 2010 </option>

        </select>

        <div className="p-5">
             {
             subFilterPlatform && <button className="btn btn-danger m-3" onClick={()=>{

                changeFilterPlatform("PC");
                setSubFilterPlatform(false);

             }} >

                {filterPlatform}
            
            </button>
             }

             {
             subFilterGender && <button className="btn btn-danger m-3" onClick={()=>{

                changeFilterGender("MMORPG");
                setSubFilterGender(false);

             }} > 

                 {filterGender}
            
              </button>
             }

             {
             subFilterDate && <button className="btn btn-danger m-3" onClick={()=>{

                
                changeDateFilter("2005-01-01");
                setSubFilterDate(false);


             }} >
                 {dateFilter}
             </button>
             }

        </div>
        
    </div>
}