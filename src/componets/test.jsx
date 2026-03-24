function test(){
  return(
<div class="relative w-[260px] h-[380px] rounded-2xl overflow-hidden shadow-lg group">

   
    <img src="../src/assets/black.jpg" 
         class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />


    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>


    <div class="absolute bottom-0 w-full p-4 backdrop-blur-md bg-black/40">

       
        <h2 class="text-white text-lg font-semibold truncate">
            Avatar: The Way of Water
        </h2>

      
        <div class="flex justify-between items-center mt-1 text-sm text-gray-300">
            <span>⭐ 8.5</span>
            <span>HD</span>
        </div>

   
        <div class="flex gap-2 mt-3">
            <button class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm">
                Download
            </button>

            <button class="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg text-sm">
                Watch
            </button>
        </div>

    </div>
</div>
  )

}

export default test;