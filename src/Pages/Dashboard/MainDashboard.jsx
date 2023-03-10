import React from 'react'

const MainDashboard = () => {
  return (
    <div>
    <div class="flex    text-gray-800">
  <div class="p-4 w-full">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 sm:col-span-6 md:col-span-3">
        <div class="flex flex-row bg-white shadow-sm rounded p-4">
          <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">Users</div>
            <div class="font-bold text-lg">1259</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3">
        <div class="flex flex-row bg-white shadow-sm rounded p-4">
          <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">Orders</div>
            <div class="font-bold text-lg">230</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3">
        <div class="flex flex-row bg-white shadow-sm rounded p-4">
          <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">New Clients</div>
            <div class="font-bold text-lg">190</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3">
        <div class="flex flex-row bg-white shadow-sm rounded p-4">
          <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">Revenue</div>
            <div class="font-bold text-lg">$ 32k</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>


<script src="https://unpkg.com/tailwindcss-jit-cdn"></script>


<section class="flex flex-col justify-center antialiased  text-gray-600 ">
    <div class="max-w-3xl mx-auto p-4 sm:px-6 h-full">
      
        <div class="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100 flex items-center">
                <h2 class="font-semibold text-gray-800">Analytics</h2>
            </header>
            <div class="px-5 py-1">
                <div class="flex flex-wrap">
                  
                    <div class="flex items-center py-2">
                        <div class="mr-5">
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">24.7K</div>
                                <div class="text-sm font-medium text-green-500">+49%</div>
                            </div>
                            <div class="text-sm text-gray-500">Unique Visitors</div>
                        </div>
                        <div class="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                   
                    <div class="flex items-center py-2">
                        <div class="mr-5">
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">56.9K</div>
                                <div class="text-sm font-medium text-green-500">+7%</div>
                            </div>
                            <div class="text-sm text-gray-500">Total Pageviews</div>
                        </div>
                        <div class="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                   
                    <div class="flex items-center py-2">
                        <div class="mr-5">
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">54%</div>
                                <div class="text-sm font-medium text-yellow-500">-7%</div>
                            </div>
                            <div class="text-sm text-gray-500">Bounce Rate</div>
                        </div>
                        <div class="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                   
                    <div class="flex items-center">
                        <div>
                            <div class="flex items-center">
                                <div class="text-3xl font-bold text-gray-800 mr-2">2m 56s</div>
                                <div class="text-sm font-medium text-yellow-500">+7%</div>
                            </div>
                            <div class="text-sm text-gray-500">Visit Duration</div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="flex-grow">
                <canvas id="analytics-card-01" width="800" height="300"></canvas>
            </div>
        </div>
    </div>
</section>




</div>
  )
}

export default MainDashboard