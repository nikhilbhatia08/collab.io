import { Link } from "react-router-dom";

function Info() {
    return(
       
        <div className="mx-5 mb-10 pb-64"> 
            <div className="text-center my-5"> 
                <img className="rounded-3xl my-5 " src="https://iitb-wustl.org/images/banner-2.jpg"
                 alt=""
                 />
                 <h1 className="text-indigo-600 text-4xl my-5 text-bold">IIT BOMBAY</h1>
            </div>
             <hr/>
           <div className="mx-10">
           <div className=" text-center font-semibold text-white m-2 py-2 px-1 w-48 text-red bg-indigo-600 rounded-md">
             Description
          </div>
             <p className="text-white text-xl my-4">
             IIT Bombay is one of the top rated leading technical universities in the world. The institutes academic and research programmes in Humanities and Social Sciences, in Design and in Management are highly regarded as well. <br />
            Second in the chain of IITs, the institute has flourished for over 53 years. With more than 40,000 graduates, the institute continues to attract the best students from the country for its bachelor's, master's and doctoral programmes.<br />
            Research and academic programmes at IIT Bombay are driven by an outstanding faculty with many faculty members internationally reputed for their research contributions.<br />
            IIT Bombay also builds links with peer universities and institutes, both at national and international levels, to enhance research and educational programmes. The alumni have distinguished themselves through their achievements and contributions in industry, academics, research, business, government and social domains. The institute continues to work closely with the alumni to enhance its activities through interactions in academic and research programmes as well as mobilising financial support.<br />
            Over the years, the institute has created a niche for its innovative short-term courses through continuing education and distance education programmes. In 2011, a total of 1846 degrees, including 173 Ph.D., were awarded, which represent 9.2 per cent increase in the total number of degrees awarded in the previous year. The faculty of the institute has won many prestigious awards and recognitions, including nine Shanti Swaroop Bhatnagar awards.<br />

            Residents at IIT Bombay have the advantage of being located in the financial capital of India while enjoying the serenity of the Powai campus, situated in the northern suburbs of Mumbai, in Western India. A fully residential institute, with all its students staying on campus, students are accommodated in 14 hostels with in-house dining and excellent amenities for sports and other recreational facilities.<br />
             </p>
           </div>
           <hr/>
           <div className="flex flex-wrap">
           <div className=" text-center  font-semibold text-white m-3 py-5 px-3 w-48 text-red bg-indigo-600 rounded-md">
             Collab Ranking : 1
          </div>
          <div className=" text-center font-semibold text-white m-3 py-5 px-3 w-48 text-red bg-indigo-600 rounded-md">
             No. of Projects : 500
          </div>
          <div className=" text-center font-semibold text-white m-3 py-5 px-3 w-64 text-red bg-indigo-600 rounded-md">
             Hackathons won : 200
          </div>
         </div>
         <hr/>
        </div>
    )
}

export default Info;