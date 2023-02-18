

function App() {
  return (
    <div className="flex justify-center  ">
     <div className="bg-white shadow-xl rounded-t-2xl my-10 grid md:grid-cols-2 md: rounded-l-2xl md:rounded-r-2xl">
        <div className="bg-blue-600 rounded-2xl ">
           <div className=" p-4 text-center text-white space-y-2">
               <p className="py-3 text-gray-300 text-sm">Your Result</p> 
               <div className="flex justify-center">
               <div className="   pt-7 w-[110px] h-[110px] bg-gradient-to-b  from-indigo-700 via-indigo-700 to-transparent rounded-full flex justify-center">
    <div className="space-y-1">
      <p className="text-white text-4xl font-bold">76</p>
    <p className="text-xs text-gray-400">of 100</p></div>
    
               </div>
            
    
    </div>
      <p className="py-2 font-semibold">Great</p>
      <div className="hidden md:inline-block px-3 ">
       <p className="text-xs text-gray-300 pb-3">You scored higher than 65% of <br/>the people who have taken<br/> these tests.</p>
      </div>
      <div className="px-3 md:hidden">
       <p className="text-xs text-gray-300 pb-3">You scored higher than 65% of the <br/>people who have taken these tests.</p>
      </div>

  </div>
     
  </div>
<div className="bg-white rounded-r-xl">

  <div className="p-5">
    <p className="pb-3 text-sm font-bold"> Summary</p>
    <div className="py-1 space-y-3">
      <div className=" bg-pink-50 text-xs p-2 flex justify-between rounded-md">
        <div className="text-pink-400 font-semibold flex space-x-1">
          <div ><img src="/icon-reaction.svg" alt="reaction"/></div>
          <div>Reaction</div>
          </div>
        <div >80<span className="text-gray-400">/100</span></div>
      </div>
      <div className=" bg-yellow-50 text-xs p-2 flex justify-between rounded-md">
        <div className="text-yellow-400 font-semibold flex space-x-1" >
        <div ><img src="/icon-memory.svg" alt="Memory"/></div>
          <div>Memory</div>
        </div>
        <div >92<span className="text-gray-400">/100</span></div>
      </div>
      <div className=" bg-green-50 text-xs p-2 flex justify-between rounded-md">
        <div className="text-green-400 font-semibold flex space-x-1" >
        <div ><img src="/icon-verbal.svg" alt="verbal"/></div>
          <div>Verbal</div>
        </div>
        <div >61<span className="text-gray-400">/100</span></div>
      </div>
      <div className=" bg-violet-100 text-xs p-2 flex justify-between rounded-md">
        <div className="text-violet-800 font-semibold flex space-x-1">
        <div ><img src="/icon-visual.svg" alt="verbal"/></div>
          <div>Visual</div>
        </div>
        <div >72<span className="text-gray-400">/100</span></div>
      </div>

     
    </div>
    <button className="rounded-full w-full py-2 mt-4 bg-gray-700 text-white text-xs">Continue</button>
  </div>
</div>
     </div>
       
      
    </div>
  );
}

export default App;
