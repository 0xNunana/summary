

function App() {
  return (
    <div className="flex justify-center  ">
     <div className="bg-white shadow-xl rounded-t-2xl my-10 grid md:grid-cols-2 md: rounded-l-2xl md:rounded-r-2xl">
        <div className="bg-blue-700 rounded-2xl ">
           <div className=" p-4 text-center text-white space-y-2">
               <p className="py-3 text-gray-300 text-sm">Your Result</p> 
               <div className="flex justify-center">
               <div className="   pt-4 w-[110px] h-[110px] bg-gradient-to-b  from-indigo-700 via-indigo-700 to-transparent rounded-full flex justify-center">
    <div className="space-y-2">
      <p className="text-white text-4xl font-bold">76</p>
    <p className="text-xs text-gray-400">of 100</p></div>
    
               </div>
            
    
    </div>
      <p className="py-2 font-semibold">Great</p>
      <div className="px-3">
       <p className="text-xs text-gray-300 pb-3">You scored higher than 65% of <br/>the people who have taken<br/> these tests.</p>
      </div>
  </div>
     
  </div>
<div className="bg-white rounded-r-xl">

  <div className="p-6">
    <p> Summary</p>
    <div className="p-2 space-y-3">
      <div className=" bg-pink-100 text-xs p-2 flex justify-between rounded-md">
        <div >Reaction</div>
        <div >80<span className="text-gray-400">/100</span></div>
      </div>
    
      <p>Memory</p>
      <p>Verbal</p>
      <p>Visual</p>
    </div>
    <button className="rounded-2xl bg-blue-300">continue</button>
  </div>
</div>
     </div>
       
      
    </div>
  );
}

export default App;
