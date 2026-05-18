export default function Badge() {
  return (
    <div className="bg-green-300 p-2 w-23 h-6 rounded-4xl flex justify-baseline items-center">
      <img src="award.svg" alt="award" className="w-4 h-4 class" />
      <p className="text-black font-sans">Verified</p>
    </div>
  );
}
