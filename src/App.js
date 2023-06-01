
import React, { useState } from 'react';
/*
import 'bootstrap/dist/css/bootstrap.min.css';
import NavCarousel from './NavCarousel';
import BasicExample from './Cards';
import Recharts from './Recharts';
import DataGridDemo from './DataTables';

*/

function App() {
  var [fName, sName] = useState("first react js text")
  return (
    /*<div>
      <NavCarousel></NavCarousel>

      <BasicExample></BasicExample>
      
      <Recharts></Recharts>
      
      <DataGridDemo></DataGridDemo>
      
      
    </div> */

    <div>
<h2>
{fName}
</h2>

<button onClick={()=>sName("this is second text")}> load second text..</button>
    </div>
  );
}

export default App;