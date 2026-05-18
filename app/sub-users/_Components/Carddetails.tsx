export default function Carddetails({judul1,judul2,img1,img2,nilai1,nilai2} : {judul1 : string; judul2 : string; img1 : string; img2 : string; nilai1 : string ; nilai2 : string}) {
  return (
    <div className="bg-gray-300 p-4 rounded-2xl w-87 h-30">
      <div>
        <p className="text-black font-sans font-bold">Projects</p>
      </div>
      <div className="flex gap-35">
        <div className="flex">
          <div>
            <img src="jam.svg" alt="jam" className="w-6 h-6" />
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
  );
}
