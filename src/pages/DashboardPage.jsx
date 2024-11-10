import BarChart from "../components/BarChart";
import BarChartTwo from "../components/BarchartTwo";
import LineChart from "../components/LineChart";
import MinicardDisplay from "../components/Minicardisplay";

export default function Dashboard() {
  return (
    <>
   
      <main className="container mx-auto px-6">
        <h1 className="text-3xl mb-6 mt-8">Dashboard</h1>
        <div className="flex flex-col lg:flex-row justify-between gap-x-6">
          <MinicardDisplay />
        </div>
        <div className="flex flex-col lg:flex-row w-[100%] mt-10 gap-x-10 mb-8">
          <div className="w-[100%] lg:w-1/2 bg-white h-fit py-2">
            <p className="text-lg py-2 px-4 border-b text-[#696f75] font-medium">
              Development Activity
            </p>
            <LineChart />
          </div>
          <div className="w-[100%]  mt-6 lg:w-1/2 lg:mt-0">
            <p className="text-lg py-2 bg-[#dae6f5] px-2 border text-[#586c8a]">
              <span className="font-medium text-[#243752] mr-2">
                Read our documentation
              </span>
              with code sample
            </p>

            <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-6">
              <div className="w-full bg-white p-4 rounded-lg md:w-2/5  ">
              <p className="text-center text-xl font-semibold mb-4 text-[#243752]">
                  Revenue Data
                </p>
              <div >   
                <BarChart/>
              </div>
              </div>
              <div className="w-full bg-white p-4 rounded-lg md:w-2/5 ">
              <p className="text-center text-xl font-semibold mb-4 text-[#243752]">
                  Revenue Data
                </p>
              <div >
                <BarChartTwo/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

