import React from 'react'
import { Link } from "react-router-dom";

function Qa() {
    return (
        <div className="w-screen h-screen mx-10 my-10 text-white">
          <div className="text-center">
           <h1 className="font-bold text-blue-600 text-4xl">Question and Answers Forums</h1>
           </div>
           <div className="mx-24 my-5 ">
           <label class="block my-2 mx-auto font-bold text-2xl text-white" for="QuestionName">
			    Question Name
		   </label>
           <input
				class="w-full px-3 py-3 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        		id="Question Name"
				type="text"
				placeholder="Question Name"
			/>
           </div>

           {/* //description  */}
           
           <div className="mx-24 my-5 ">
           <label class="block my-2 mx-auto font-bold text-2xl text-white" for="Description">
			    Question Description
		   </label>
           <input
				class="w-full px-3 py-10 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        		id="Question Description"
				type="text"
				placeholder="Question description"
			/>
           </div>
           <div class="mx-96">
                <button class="bg-blue-500 mx-96 my-5 text-white font-bold py-2 w-min px-4 w-full rounded hover:bg-blue-800">Submit</button>
            </div>
           <div className="my-3 mx-24 px-3 py-3 width h-64 w-192  border-solid border bg-slate-800 rounded-md border-white">
           <ul class="list-disc mx-4 list-inside">
                    <li className="my-3 text-2xl">clearly Describe the purpose or goal of the task..</li>
                    <li className="my-3 text-2xl"> Users must not use offensive, vulgar, or otherwise inappropriate language in any of the Fields</li>
                    <li className="my-3 text-2xl">Clearly state what the Queries.</li>
                    <li className="my-3  text-2xl">Category -&gt; what category your project belongs to.</li>
                    </ul>
           </div>

        </div>
    )
}

export default Qa;