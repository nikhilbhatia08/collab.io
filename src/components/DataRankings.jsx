

function DataRankings() {
   const det = [{
    name : "IIT BOMBAY",
    projects : 500,
    Hack : 200,
    Ranking : 1,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "IIT Madras",
    projects : 490,
    Hack : 180,
    Ranking : 2,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
   },
   {
    name : "IIT Delhi",
    projects :480,
    Hack : 175,
    Ranking : 3,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
   },
   {
    name : "IIT Hyderabad",
    projects : 470,
    Hack : 174,
    Ranking : 4,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/IIT_Hyderabad_Insignia.svg/1200px-IIT_Hyderabad_Insignia.svg.png",
   },
   {
    name : "IIT Roorkie",
    projects : 468,
    Hack : 172,
    Ranking : 5,
    src : "https://www.iitr.ac.in/dic/img/IITR.jpg",
   },
   {
    name : "IIT Kanpur",
    projects : 465,
    Hack : 170,
    Ranking : 6,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png",
   },
   {
    name : "IIT KHARAGPUR",
    projects : 462,
    Hack : 168,
    Ranking : 7,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png",
   },
   {
    name : "CMR College of Engineering and Technology",
    projects : 120,
    Hack : 80,
    Ranking : 8,
    src : "https://media.licdn.com/dms/image/C560BAQEEf96n13OC1A/company-logo_200_200/0/1658502157654?e=2147483647&v=beta&t=KeBlSx_yrLRoGYConDMa0XxTm-X_zXcLHSFb_R9FbkA",
   },
   {
    name : "St.Peters College",
    projects : 80,
    Hack : 40,
    Ranking : 9,
    src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cN_zNaa6AxHkE0PruzPDTw1yndFdX4XpUSx0ZijaX9C2L0_Cet_xmfjg51tmpPrnxnI&usqp=CAU",
   }
];
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
                      {node.name}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <p class="text-white whitespace-no-wrap">{node.projects}</p>
                {/* <p class="text-gray-600 whitespace-no-wrap">{node.Hack}</p> */}
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <p class="text-white whitespace-no-wrap">{node.Hack}</p>
                {/* <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p> */}
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr> 
                )
            })}
        </tbody>
)

}

export default DataRankings;