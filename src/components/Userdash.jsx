import React from 'react'

function Userdash() {
  return (
    <>
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="bg-white rounded-xl shadow p-4 sm:p-7">
    <form>
      <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
        <div class="sm:col-span-12">
          <h2 class="text-lg font-semibold text-gray-800">
            Submit your application
          </h2>
        </div>

        <div class="sm:col-span-3">
          <label for="af-submit-application-full-name" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Full name
          </label>
        </div>

        <div class="sm:col-span-9">
          <div class="sm:flex">
            <input id="af-submit-application-full-name" type="text" class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 " />
            <input type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 border shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 " />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="af-submit-application-email" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Email
          </label>
        </div>

        <div class="sm:col-span-9">
          <input id="af-submit-application-email" type="email" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 border" />
        </div>

        <div class="sm:col-span-3">
          <div class="inline-block">
            <label for="af-submit-application-phone" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Phone
            </label>
          </div>
        </div>
        

        <div class="sm:col-span-9">
          <input id="af-submit-application-phone" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 border" />

          <p class="mt-3">
            <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              Add phone
            </a>
          </p>
        </div>
        

        <div class="sm:col-span-3">
          <div class="inline-block">
            <label for="af-submit-application-current-company" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Current Company
            </label>
          </div>
        </div>
        

        <div class="sm:col-span-9">
          <input id="af-submit-application-current-company" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 border" />
        </div>
        
      </div>
      

      
      <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
        <div class="sm:col-span-12">
          <h2 class="text-lg font-semibold text-gray-800 ">
            Profile
          </h2>
        </div>
        

        <div class="sm:col-span-3">
          <label for="af-submit-application-resume-cv" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Resume/CV
          </label>
        </div>
        

        <div class="sm:col-span-9">
          <label for="af-submit-application-resume-cv" class="sr-only">Choose file</label>
          <input type="file" name="af-submit-application-resume-cv" id="af-submit-application-resume-cv" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 
            file:bg-transparent file:border-0
            file:bg-gray-100 file:mr-4
            file:py-2 file:px-3
            " />
        </div>
        

        <div class="sm:col-span-3">
          <div class="inline-block">
            <label for="af-submit-application-bio" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Personal summary
            </label>
          </div>
        </div>
        

        <div class="sm:col-span-9">
          <textarea id="af-submit-application-bio" class="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " rows="6" placeholder="Add a cover letter or anything else you want to share."></textarea>
        </div>
        
      </div>
      

      
      <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
        <div class="sm:col-span-12">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Links
          </h2>
        </div>
        

        <div class="sm:col-span-3">
          <label for="af-submit-application-linkedin-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            LinkedIn URL
          </label>
        </div>
        

        <div class="sm:col-span-9">
          <input id="af-submit-application-linkedin-url" type="text" class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 " />
        </div>
        

        <div class="sm:col-span-3">
          <label for="af-submit-application-twitter-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Twitter URL
          </label>
        </div>
        

        <div class="sm:col-span-9">
          <input id="af-submit-application-twitter-url" type="text" class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 " />
        </div>
        

        <div class="sm:col-span-3">
          <label for="af-submit-application-github-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Github URL
          </label>
        </div>
        

        <div class="sm:col-span-9">
          <input id="af-submit-application-github-url" type="text" class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 " />
        </div>
        

        <div class="sm:col-span-3">
          <label for="af-submit-application-portfolio-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Portfolio URL
          </label>
        </div>
        

        <div class="sm:col-span-9">
          <input id="af-submit-application-portfolio-url" type="text" class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 " />
        </div>
        

        <div class="sm:col-span-3">
          <label for="af-submit-application-other-website" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Other website
          </label>
        </div>
        

        <div class="sm:col-span-9">
          <input id="af-submit-application-other-website" type="text" class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 " />
        </div>
        

        <div class="sm:col-start-4 sm:col-span-8">
          <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Add URL
          </a>
        </div>
      </div>
      
      <div class="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Submit application
        </h2>
        <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
          In order to contact you with future jobs that you may be interested in, we need to store your personal data.
        </p>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          If you are happy for us to do so please click the checkbox below.
        </p>

        <div class="mt-5 flex">
          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 " id="af-submit-application-privacy-check" />
          <label for="af-submit-application-privacy-check" class="text-sm text-gray-500 ml-2 dark:text-gray-400">Allow us to process your personal information.</label>
        </div>
      </div>
      

      <button type="button" class="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
        Submit application
      </button>
    </form>
  </div>
</div>
    </>
  )
}

export default Userdash