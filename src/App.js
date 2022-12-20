import { useEffect, useState } from "react";
import "./App.css";
import FilterDropdown from "./Components/FilterDropdown";
import TableRow from "./Components/TableRow";

function App() {
  const DATA = [
    {
      id: 1,
      end: 1572,
      sent: " Today we have Elon Musk.",
      start: 0,
      length: 3,
      chapter_no: 1,
      property1: false,
      chapter_idx: 5,
      property2: false,
      scaled_weight: 0.06201550387596899,
      property3: false,
      unscaled_weight: 0.18604651162790697,
    },
    {
      id: 2,
      end: 2797,
      sent: " Elon, thank you for joining us.",
      start: 1572,
      length: 3,
      chapter_no: 1,
      property1: false,
      chapter_idx: 5,
      property2: false,
      scaled_weight: 0.046511627906976744,
      property3: false,
      unscaled_weight: 0.13953488372093023,
    },
    {
      id: 3,
      end: 3832,
      sent: " Yeah, thanks for having me.",
      start: 2797,
      length: 2,
      chapter_no: 1,
      property1: false,
      chapter_idx: 5,
      property2: false,
      scaled_weight: 0.046511627906976744,
      property3: false,
      unscaled_weight: 0.09302325581395349,
    },
    {
      id: 4,
      end: 9877,
      sent: " So we want to spend the time today talking about your view of the future and what people should work on.",
      start: 3832,
      length: 9,
      chapter_no: 1,
      property1: true,
      chapter_idx: 5,
      property2: true,
      scaled_weight: 0.18087855297157623,
      property3: false,
      unscaled_weight: 1.627906976744186,
    },
    {
      id: 5,
      end: 17767,
      sent: " So, to start off, could you tell us, you famously said when you were younger, there were five problems that you thought were most important for you to work on.",
      start: 9877,
      length: 8,
      chapter_no: 1,
      property1: false,
      chapter_idx: 5,
      property2: false,
      scaled_weight: 0.09011627906976744,
      property3: false,
      unscaled_weight: 0.7209302325581395,
    },
  ];
  const [filterValue, setFilterValue] = useState("All");
  const [currentProperty, setCurrentProperty] = useState("");
  const [dataSet, setDataSet] = useState(DATA);
  const dropdownValues = ["All", "True", "False"];

  const dropdownClickHandler = (filterV, currentProp) => {
    setFilterValue(filterV);
    setCurrentProperty(currentProp);
  };

  useEffect(() => {
    if (filterValue === "All") {
      setDataSet(DATA);
    } else {
      const tempArr = DATA.filter(
        (data) =>
          data[currentProperty].toString().toLowerCase() ===
          filterValue.toLocaleLowerCase()
      );
      setDataSet(tempArr);
    }
  }, [currentProperty, filterValue, DATA]);
  return (
    <div className="container">
      <h1>Data Structure Table</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>sent</th>
            <th>
              Property_1{" "}
              <FilterDropdown
                items={{
                  filterClick: "property1",
                  dropdownValues: dropdownValues,
                  dropdownClickHandler: dropdownClickHandler,
                }}
              />
            </th>
            <th>
              Property_2{" "}
              <FilterDropdown
                items={{
                  filterClick: "property2",
                  dropdownValues: dropdownValues,
                  dropdownClickHandler: dropdownClickHandler,
                }}
              />
            </th>
            <th>
              Property_3{" "}
              <FilterDropdown
                items={{
                  filterClick: "property3",
                  dropdownValues: dropdownValues,
                  dropdownClickHandler: dropdownClickHandler,
                }}
              />
            </th>
          </tr>
        </thead>
        {dataSet.length ? (
          <tbody>
            {dataSet.map((data) => (
              <tr key={data.id}>
                <TableRow
                  id={data.id}
                  sent={data.sent}
                  property1={data.property1.toString()}
                  property2={data.property2.toString()}
                  property3={data.property3.toString()}
                />
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr color="black">
              <td colSpan={5} className="text-center">
                No Data Found!
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
