import { useState } from "react"; 
import arrow from "./assets/icon-arrow.svg";

const App = () => {
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");

  const handleAgeDisplay = (event) => {
    event.preventDefault();

    // Get the input values
    const day = parseInt(event.target.elements.day.value);
    const month = parseInt(event.target.elements.month.value);
    const year = parseInt(event.target.elements.year.value);

    // Calculate the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // January is month 0
    const currentDay = currentDate.getDate();

    // Calculate the age
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    // Adjust for negative age values
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
    if (ageDays < 0) {
      const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
      ageDays += daysInPreviousMonth;
      ageMonths--;
    }

    // Update the state with the calculated age
    setYears(ageYears.toString());
    setMonths(ageMonths.toString());
    setDays(ageDays.toString());
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 flex justify-center items-center font-poppins">
        <div className="bg-white border-2 rounded-xl">
          <form onSubmit={handleAgeDisplay}>
            <div className="flex m-7">
              <div className="mr-5">
                <label 
                  htmlFor="day"
                  className="block text-xs font-bold mb-2"
                > 
                  DAY: 
                </label>
                <input 
                  required
                  type="number" 
                  id="day" 
                  name="day" 
                  min="1" 
                  max="31"
                  placeholder="DD"
                  className="border-2 rounded-md p-2 w-20 font-bold"
                />
              </div>

              <div className="mr-5">
                <label 
                  htmlFor="month" 
                  className="block text-xs font-bold mb-2"
                >
                  MONTH: 
                </label>
                <input 
                  required
                  type="number" 
                  id="month" 
                  name="month" 
                  min="1" 
                  max="12"
                  placeholder="MM"
                  className="border-2 rounded-md p-2 w-20 font-bold"
                />
              </div>

              <div>
                <label 
                  htmlFor="year"
                  className="block text-xs font-bold mb-2"
                >
                  YEAR: 
                </label>
                <input 
                  required
                  type="number" 
                  id="year" 
                  name="year" 
                  min="1900" 
                  max="2023"
                  placeholder="YY"
                  className="border-2 rounded-md p-2 w-20 font-bold"
                />
              </div>
            </div>
            <div className="relative">
              <hr className="m-8"/>
              <button 
                className="h-12 w-12 rounded-full bg-purple-700 absolute -top-6 right-5 flex items-center justify-center">
                <img 
                  src={arrow} 
                  alt="arrow"
                  className="h-6 w-6"  
                />
              </button>
            </div>
          </form>
          <div className="flex justify-center mb-8">
            <div>
              <p>
                <span
                  className="text-6xl text-purple-700 font-bold mr-2"
                >
                  {years ? years : "--"}
                </span>
                <span 
                  className="text-6xl font-bold"
                >
                  years
                </span>
              </p>
              <p>
                <span
                  className="text-6xl text-purple-700 font-bold mr-2"
                >
                  {months ? months : "--"}
                </span>                
                <span 
                  className="text-6xl font-bold"
                >
                  months
                </span>
              </p>
              <p>
                <span
                  className="text-6xl text-purple-700 font-bold mr-2"
                >
                  {days ? days : "--"}
                </span>
                <span 
                  className="text-6xl font-bold"
                >
                  days
                </span>
              </p>
            </div>
          </div>          
        </div>
      </main>
    </>
  )
};

export default App;
