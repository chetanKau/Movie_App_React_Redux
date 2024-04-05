import React from 'react'


function SearchTab() {
    
    return (
        <div style={{ height: "400px", background: "rgb(50,50,90)",display:"flex",  alignItems:"center", justifyContent:"center"}}>
            <input type='text' style={{width:"700px", height:"50px",padding:"20px", borderRadius:"5px"}} placeholder='Search Movie'/>
        </div>

    )
}

export default SearchTab;
