import { Link } from "react-router-dom";

function Info() {
   const det = [{
      name : "Maneesh Reddy",
      projects : 20,
      Hack : 15,
      dept : "4th/CSE",
      Ranking : 1,
      src : "https://static.janbharattimes.com/wp-content/uploads/2023/05/IIT-Madras.jpg",
      img : "https://iitb-wustl.org/images/banner-2.jpg"
     },
     {
      name : "Hemanth",
      projects : 18,
      Hack : 9,
      dept : "3rd/ECE",
      Ranking : 2,
      src : "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
      img : " "
     },
     {
      name : "Ram",
      projects :15,
      Hack : 7,
      Ranking : 3,
      dept : "4th/AIML",
      src : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
      img : " "
     }
];
    return(
       
        <div className="mx-5 mb-10 pb-64"> 
            <div className="text-center my-10"> 
                <img className="rounded-3xl my-5 ml-[500px]" src="https://home.iitd.ac.in/images/gallery/gallery-1.jpg"
                 alt=""
                 />
                 <h1 className="text-indigo-600 text-4xl my-5 text-bold">IIT DELHI</h1>
            </div>
             <hr/>
           <div className="mx-10">
           <div className=" text-center font-semibold text-white m-2 py-2 px-1 w-48 text-red bg-indigo-600 rounded-md">
             Description
          </div>
             <p className="text-white text-xl my-4">
             Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.

Established as College of Engineering in 1961, the Institute was later declared as an Institution of National Importance under the “Institutes of Technology (Amendment) Act, 1963” and was renamed as “Indian Institute of Technology Delhi”. It was then accorded the status of a Deemed University with powers to decide its own academic policy, to conduct its own examinations, and to award its own degrees.

Since its inception, over 48000 have graduated from IIT Delhi in various disciplines including Engineering, Physical Sciences, Management and Humanities & Social Sciences. Of these, nearly 5070 received Ph.D. degrees. The number of students who graduated with B.Tech. degree is over 15738. The rest obtained Master’s Degree in Engineering, Sciences and Business Administration. These alumni today work as scientists, technologists, business managers and entrepreneurs. There are several alumni who have moved away from their original disciplines and have taken to administrative services, active politics or are with NGOs. In doing so, they have contributed significantly to building of this nation, and to industrialization around the world.
             </p>
           </div>
           <hr/>
           <div className="flex flex-wrap">
           <div className=" text-center  font-semibold text-white m-3 py-5 px-3 w-48 text-red bg-indigo-600 rounded-md">
             Collab Ranking : 3
          </div>
          <div className=" text-center font-semibold text-white m-3 py-5 px-3 w-48 text-red bg-indigo-600 rounded-md">
             No. of Projects : 480
          </div>
          <div className=" text-center font-semibold text-white m-3 py-5 px-3 w-64 text-red bg-indigo-600 rounded-md">
             Hackathons won : 175
          </div>
         </div>
         <hr/>
         <div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    <div>
      <h2 class="text-white text-center underline font-bold leading-tight">COLLEGE RANKINGS</h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
            <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Ranking
              </th>

              <th
                class="px-8 py-5 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Name
              </th>

              <th
                class="px-8 py-5 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Year-Dept
              </th>

              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                No. of Projects
              </th>
              <th
                class="px-3 py-3 border-b-2 border-gray-200 bg-slate-600 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Hackathons won
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
                  <span class="relative">{node.Ranking}</span>
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
                <p class="text-white whitespace-no-wrap">{node.dept}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <p class="text-white whitespace-no-wrap">{node.projects}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-slate-500 text-sm">
                <p class="text-white whitespace-no-wrap">{node.Hack}</p>
                {/* <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p> */}
              </td>
            </tr> 
                )
            })}
        </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Info;