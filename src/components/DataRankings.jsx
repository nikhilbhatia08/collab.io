import {Link} from 'react-router-dom'
import Info from './Info'

function DataRankings() {
   const det = [{
    name : "IIT BOMBAY",
    id : "1",
    projects : 500,
    Hack : 200,
    Ranking : 1,
    li : "Info",
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
    img : "https://iitb-wustl.org/images/banner-2.jpg"
   },
   {
    name : "IIT Madras",
    id : "2",
    projects : 490,
    Hack : 180,
    Ranking : 2,
    li : "Info1",
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
    img : " "
   },
   {
    name : "IIT Delhi",
    id : "3",
    projects :480,
    Hack : 175,
    Ranking : 3,
    li : "Info2",
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
    img : " "
   },
   {
    name : "IIT Hyderabad",
    projects : 470,
    id : "4",
    Hack : 174,
    Ranking : 4,
    li : "Info3",
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/IIT_Hyderabad_Insignia.svg/1200px-IIT_Hyderabad_Insignia.svg.png",
    img : " "
   },
   {
    name : "IIT Roorkie",
    id : "5",
    projects : 468,
    Hack : 172,
    Ranking : 5,
    li : "Info4",
    src : "https://www.iitr.ac.in/dic/img/IITR.jpg",
    img : " "
   },
   {
    name : "IIT Kanpur",
    id : "6",
    projects : 465,
    Hack : 170,
    Ranking : 6,
    li : "Info5",
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png",
    img : " "
   },
   {
    name : "IIT KHARAGPUR",
    id : "7",
    projects : 462,
    Hack : 168,
    Ranking : 7,
    li : "Info6",
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png",
    img : " "
   },
   {
    name : "CMR College of Engineering and Technology",
    id : "8",
    projects : 120,
    Hack : 80,
    Ranking : 8,
    li : "Info7",
    src : "https://media.licdn.com/dms/image/C560BAQEEf96n13OC1A/company-logo_200_200/0/1658502157654?e=2147483647&v=beta&t=KeBlSx_yrLRoGYConDMa0XxTm-X_zXcLHSFb_R9FbkA",
    img : " "
   },
   {
    name : "St.Peters College",
    id : "9",
    projects : 80,
    Hack : 40,
    Ranking : 9,
    li : "Info8",
    src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cN_zNaa6AxHkE0PruzPDTw1yndFdX4XpUSx0ZijaX9C2L0_Cet_xmfjg51tmpPrnxnI&usqp=CAU",
    img : " "
   }
];
var i=1;
return(
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
                  <span class="relative">{node.Ranking}</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src={node.src}
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-white text-bold mt-3 whitespace-no-wrap">
                      <Link to={node.li} > {node.name}</Link>
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <p class="text-white whitespace-no-wrap">{node.projects}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <p class="text-white whitespace-no-wrap">{node.Hack}</p>
              </td>
            </tr> 
                )
            })}
        </tbody>
)

}

export default DataRankings;