import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./utils";

function RgWait() {
  const [det, setDet] = useState([]);
  const id = useParams().orgId;
  const [u_id, setu_id] = useState('');
  const [data, setData] = useState({});
  let handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/org/${id}/userapproval/${u_id}`, data)
    .then(res => {
      if(res.status === 200){
        alert("approved");
        window.location.reload();
      }
      else {
        alert("not approved");
        window.location.reload();
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  const handleget = async(e) => {
    await axios.get(`${BASE_URL}/org/${id}/wlistu`)
    .then(res => {
      console.log(res.data);
      setDet(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  
  }
  useEffect(() => {
    handleget();
  }, []);
  return(
    <div className="m-10 mb-20">
     <div>
      <h2 class="text-white text-center underline font-bold leading-tight">STUDENT APPROVAL</h2>
    </div>
    <div class="flex justify-center -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-fit shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-fit leading-normal">
          <thead>
            <tr>
            <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Number
              </th>

              <th
                class="px-8 py-5 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Roll No.
              </th>


              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Approve/Reject
              </th>
            </tr>
          </thead>
          <tbody>
            {det.map((node)=>{
                return(
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">{node.id_w}</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-white text-bold mt-3 whitespace-no-wrap">
                      <Link to='Info'  > {node.name}</Link>
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <form onSubmit={handleSubmit}>
                    <div class="mt-8">
                        <button class="bg-green-500 text-white font-bold py-2 px-4 w-48 rounded hover:bg-green-400" onClick={() => {setData({approve: true}); setu_id(node.id_w)}} type='submit'>Accept</button>
                    </div>
                    <div class="mt-8">
                        <button class="bg-red-500 text-white font-bold py-2 px-4 w-48 rounded hover:bg-red-400" onClick={() => {setData({approve: false}); setu_id(node.id_w)}} type='submit'>Reject</button>
                    </div>
                </form>    
              </td>
            </tr> 
                )
            })}
        </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default RgWait;