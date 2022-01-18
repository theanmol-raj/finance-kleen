import React from 'react'

function Billing() {
    function Searchbar(){
        return(<div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style={{enableBackground:"new 0 0 56.966 56.966"}}   space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>);
    }
    return (
        <div className=' shadow-lg w-full m-4 p-8'>
        <p className=' font-black text-3xl'> Billing and Balance</p>
        <form className=' mt-6'>
            <div className=' grid grid-cols-3 gap-8'>
            <div><input placeholder='Order Id' className=' text-center bg-transparent border-b hover:border-b-2 py-4 w-full  hover:border-gray-900 border-gray-600 cursor-pointer' /></div>
            <div><input placeholder='Customer' className=' text-center bg-transparent border-b hover:border-b-2 py-4 w-full  hover:border-gray-900 border-gray-600 cursor-pointer' /></div>
            <div><input placeholder='Total' className=' text-center bg-transparent border-b hover:border-b-2 py-4 w-full  hover:border-gray-900 border-gray-600 cursor-pointer' /></div>
            <div><input placeholder='Order status' className=' text-center bg-transparent border-b hover:border-b-2 py-4 w-full  hover:border-gray-900 border-gray-600 cursor-pointer' /></div>
            <div><input placeholder='Added Date' className=' text-center bg-transparent border-b hover:border-b-2 py-4 w-full  hover:border-gray-900 border-gray-600 cursor-pointer' /></div>
            <div><input placeholder='Modified Date' className=' text-center bg-transparent border-b hover:border-b-2 py-4 w-full  hover:border-gray-900 border-gray-600 cursor-pointer' /></div>

            </div>
            <button className=' bg-red-500 text-white px-8 py-1 mt-6 font-medium rounded-md'> Filter</button>
        </form>


{/*  */}
<div className=" overflow-x-auto w-full  pt-8">
        <div className="py-2 align-middle bg-white rounded-2xl inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b pb-32 bg-white border-gray-200 sm:rounded-lg">
          <div className=' mx-4 flex flex-row justify-between mb-8 mt-2 items-center '>
            <div className=' text-2xl text-gray-600'>Billing Details:</div>
            <div className='lg:w-1/3'>
            <Searchbar />
            </div>
          </div>
            <table className="min-w-full divide-y   divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left w-min text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   Order ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Added Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Modified Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                
                    <tr>
                    <td className="pl-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2 w-min">
                        <button className=' text-sm px-8 bg-gray-300 py-1 rounded-md'>Edit</button>
                        <button className=' text-sm px-8 bg-red-500 text-white  py-1 rounded-md'>Delete</button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">pampam</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">dampam</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">boom</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">awooo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">12.01.2001</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">01.12.2022</div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>   
{/*  */}
<div className=" overflow-x-auto w-full  pt-8">
        <div className="py-2 align-middle bg-white rounded-2xl inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b pb-32 bg-white border-gray-200 sm:rounded-lg">
          <div className=' mx-4 flex flex-row justify-between mb-8 mt-2 items-center '>
            <div className=' text-2xl text-gray-600'>Balance:</div>
            <div className='lg:w-1/3'>
            <Searchbar />
            </div>
          </div>
            <table className="min-w-full divide-y   divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left w-min text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   Order ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Customer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Added Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Modified Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                
                    <tr>
                    <td className="pl-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2 w-min">
                        <button className=' text-sm px-8 bg-gray-300 py-1 rounded-md'>Edit</button>
                        <button className=' text-sm px-8 bg-red-500 text-white  py-1 rounded-md'>Delete</button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">pampam</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">dampam</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">boom</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">awooo</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">12.01.2001</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm  text-gray-900">01.12.2022</div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
{/*  */}
    </div>
    )
}

export default Billing
