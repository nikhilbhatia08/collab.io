import axios from "axios";
import { useEffect , useState} from "react";
import { BASE_URL } from "./utils";

function AddOrgDetails() {
    const [desc, setDesc] = useState(0);
    const [description , setDescription] = useState('');
    const [project , setProject] = useState('');
    const [hack_p , setHack_p] = useState('');
    const [hack_w , setHack_w] = useState('');
    const org = JSON.parse(localStorage.getItem('org'));
    useEffect(() => {
        const GetDet = async() => {
            const data = await axios.get(`${BASE_URL}/organization/${org.o_id}`);
            if(data.description.length > 0) {
                setDesc(1);
            }
        }
        GetDet();
    } , [])

    const AddDetails = async() =>{
        const data = {
            description: description,
            projects: project,
            hackathons_p : hack_p,
            hackathons_w : hack_w
        }
        console.log(data)
        const res = await axios.patch(`${BASE_URL}/organization/${org.o_id}` , data);
                if(res.status === 200) {
                    alert('Details added successfully');
                    window.location = '/';
                }
    }
        
    return(
        <div>
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-gray-600">Edit Profile</h2>
      <p class="text-gray-500 mb-6">Change your information.</p>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            {/* <p>Please fill out all the fields.</p> */}
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              {
                desc == 0 && <div class="md:col-span-5">
                <label for="full_name">Add Description</label>
                <input type="text" name="Desc" id="Desc" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Add Organization Details"  value = {description} onChange={(e) => {
                    setDescription(e.target.value);
                }}/>
              </div>
              }

              <div class="md:col-span-5">
                <label for="project">New Project</label>
                <input type="text" name="Project" id="project" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Add your New Project Details" value = {project} onChange={e => {
                    setProject(e.target.value);
                }} />
              </div>

              <div class="md:col-span-5">
                <label for="hack">New Hackthon Participated</label>
                <input type="text" name="hack" id="hack" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Add your Hackthon Project Details" value={hack_p} onChange={e => {
                    setHack_p(e.target.value);
                }}/>
              </div>

              <div class="md:col-span-5">
                <label for="hack">New Hackthon won</label>
                <input type="text" name="hacks" id="hack" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Add your Hackthon Won Project Details" value = {hack_w} onChange={e => {
                    setHack_w(e.target.value);
                }}/>
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={AddDetails}>Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default AddOrgDetails;