import Badge from "./_Components/Badge";
import Mailbutton from "./_Components/Mailbutton";
import Menubutton from "./_Components/Menubutton";

export default function UsersPages(){
    return(
        <section className="h-screen bg-white flex flex-col justify-center items-center">
                <div className="bg-gray-100 h-100 w-100 rounded-4xl p-6 flex flex-col gap-3">
                    <div className="flex">
                        <p className="text-black font-sans font-bold">Client Details</p>
                        <img src="x.svg" alt="x" className="ml-auto" />
                    </div>
                    <hr className="border-t-2 border-black"/>
                    <div className="flex gap-2">
                        <div>
                            <img src="gibran.svg" alt="gibran" className="w-20" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div>      
                                <p className="text-black font-sans font-bold">Gibran Rakabuming Raka</p>
                            </div> 
                            <Badge />
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded-2xl w-87 h-30">
                        <div>
                            <p className="text-black font-sans font-bold">Projects</p>  
                        </div>
                        <div className="flex gap-35">
                            <div className="flex">
                                <div>
                                    <img src="jam.svg" alt="jam" className="w-6 h-6"/>
                                </div>
                                <p className="text-black font-sans text-gray-600">ongoing</p>
                            </div>
                            <div className="flex">
                                <div>
                                    <img src="complete.svg" alt="" />
                                </div>
                                <p className="text-black font-sans text-gray-600">complete</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-40">
                            <p className="text-black font-sans font-bold">2 ($3.8K)</p>
                            <p className="text-black font-sans font-bold">25 ($54K)</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-27">
                            <p className="text-black font-sans font-semibold">Location</p>
                            <p className="text-black font-sans text-gray-600">United States, New York</p>
                        </div>
                        <div className="flex">
                            <p className="text-black font-sans font-semibold">With Us</p>
                            <p className="text-black font-sans text-gray-600 ml-auto">6 Jan 2024</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Menubutton />
                        <Mailbutton />
                    </div>
                </div>
        </section>
    );  
};