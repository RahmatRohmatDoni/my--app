export default function task2Page(){
    return(
<section className="h-screen bg-gray-100s flex gap-6">
        <div className ="bg-[#e3f6fb] p-8 h-72 w-120 rounded-4xl flex flex-col justify-between text-blue-950" >
            <div className = "flex gap-4 " >
                <img src="palette.svg" alt="palette"/>
                <p className="font-bold">Design</p>
            </div>
            <div className="relative">
                <h2 className="text-4xl font bold mb-2" >Adobe Photoshop</h2>
                <p className="font-bold">in 3 days</p>
                    <div className="absolute right-0 bottom-0 translate-y-2 flex items-center">
                        <img src="/jusufkalla.svg" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="/prabowo.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                        <img src="/ferdysambo.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                        <img src="/tambahan1.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                    </div>
            </div>
        </div>

        <div className ="bg-[#e9f9e6] p-8 h-72 w-120 rounded-4xl flex flex-col justify-between text-blue-950" >
            <div className="flex justify-between items-center">
                <div className = "flex gap-4 " >
                    <img src="terminal-2.svg" alt="terminal"/>
                    <p className="font-bold">AI</p>
                </div>
                <img src="/star.svg" alt="star"/>
            </div>
            <div className="relative">
                <h2 className="text-4xl font bold mb-2" >DALL•E 2, Midjourney,</h2>
                <h2 className="text-4xl font bold mb-2" >Stable Diffusion</h2>
                <p className="font-bold">in 5 days</p>
                    <div className="absolute right-0 bottom-0 translate-y-2 flex items-center">
                        <img src="/gibran.svg" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="/jokowi.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                        <img src="/pigai.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                        <img src="/tambahan2.svg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                    </div>
            </div>
        </div>
</section>
    );
};