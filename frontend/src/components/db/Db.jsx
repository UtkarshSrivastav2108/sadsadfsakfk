import React, { useState, useEffect } from 'react'

function Db() {

     const [data, setdata] = useState([]);

     const getCovidData = async () => {
          const response = await fetch('http://localhost:5000/gettravel');
          const actualData = await response.json();
          console.log(actualData);
          setdata(actualData);

     }

     useEffect(() => {
          getCovidData();
     }, [])
     return (
          <>



               {
                    data.map((curElem, index) => {
                         return (

                              <>
                                   <section class="book" id="book" style={{ marginTop: '10rem' }}>

                                        <h1 class="heading">
                                             <span>Y</span>
                                             <span>o</span>
                                             <span>u</span>
                                             <span>r</span>
                                             <span class="space"></span>
                                             <span>B</span>
                                             <span>o</span>
                                             <span>o</span>
                                             <span>k</span>
                                             <span>i</span>
                                             <span>n</span>
                                             <span>g</span>
                                             <span>s</span>
                                        </h1>
                                   </section>

                                   <div className="container"  >
                                        <div className="row">
                                             <div className='col-lg-12 col-md-12 col-sm-12'>
                                                  <table class="table">
                                                       <thead>
                                                            <tr>
                                                                 <th style={{ fontSize: '30px' }} scope="col">#Id</th>
                                                                 <th style={{ fontSize: '30px' }} scope="col">Where To</th>
                                                                 <th style={{ fontSize: '30px' }} scope="col">How Many
                                                                 </th>
                                                                 <th style={{ fontSize: '30px' }} scope="col">Arrivals</th>
                                                                 <th style={{ fontSize: '30px' }} scope="col">Leaving</th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            <tr>
                                                                 <td style={{ fontSize: '20px' }} scope="row">
                                                                      {curElem._id}</td>
                                                                 <td style={{ fontSize: '20px' }}>{curElem.where}</td>
                                                                 <td style={{ fontSize: '20px' }}>{curElem.guest}</td>
                                                                 <td style={{ fontSize: '20px' }}>{curElem.arrivals}</td>
                                                                 <td style={{ fontSize: '20px' }}>{curElem.leaving}</td>
                                                            </tr>

                                                       </tbody>
                                                  </table>
                                             </div>
                                        </div>
                                   </div>
                              </>

                         )

                    })
               }

          </>
     )
}

export default Db