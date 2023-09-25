

function DataRankings() {
   const det = [{
    name : "IIT BOMBAY",
    projects : 500,
    Hack : 200,
    Ranking : 1,
   },
   {
    name : "IIT Madras",
    projects : 490,
    Hack : 180,
    Ranking : 2,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "IIT Delhi",
    projects :480,
    Hack : 175,
    Ranking : 3,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "IIT Hyderabad",
    projects : 470,
    Hack : 174,
    Ranking : 4,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "IIT Roorkie",
    projects : 468,
    Hack : 172,
    Ranking : 5,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "IIT Kanpur",
    projects : 465,
    Hack : 170,
    Ranking : 6,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "IIT KHARAGPUR",
    projects : 462,
    Hack : 168,
    Ranking : 7,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "CMR College of Engineering and Technology",
    projects : 120,
    Hack : 80,
    Ranking : 8,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   },
   {
    name : "St.Peters College",
    projects : 80,
    Hack : 40,
    Ranking : 9,
    src : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
   }
];
return(
        <tbody>
            {det.map((node)=>{
                return(
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src={node.src}
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 text-bold mt-3 whitespace-no-wrap">
                      {node.name}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{node.projects}</p>
                {/* <p class="text-gray-600 whitespace-no-wrap">{node.Hack}</p> */}
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{node.Hack}</p>
                {/* <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p> */}
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
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