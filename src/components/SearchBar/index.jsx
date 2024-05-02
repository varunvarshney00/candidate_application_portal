import React from "react";

const SearchBar = ({ onFilterChange }) => {
  // Receive onFilterChange prop
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value); // Call onFilterChange prop with filter name and value
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 my-10 px-4 sm:px-10">
      <select
        className=" bg-white w-full sm:w-48 py-3 pl-4 font-semibold rounded-md "
        name="role"
        onChange={handleChange}
        style={{ color: 'gray' }}
      >
        <optgroup label="ENGINEERING" style={{ color: "lightgrey" }}>
          <option value="" disabled hidden selected>
            Roles
          </option>
          <option value="Backend" className="text-black">
            Backend
          </option>
          <option value="Frontend" className="text-black">
            Frontend
          </option>
          <option value="Fullstack" className="text-black">
            Fullstack
          </option>
          <option value="IOS" className="text-black">
            IOS
          </option>
          <option value="Flutter" className="text-black">
            Flutter
          </option>
          <option value="React Native" className="text-black">
            React Native
          </option>
          <option value="Android" className="text-black">
            Android
          </option>
          <option value="Tech Lead" className="text-black">
            Tech Lead
          </option>
          <option value="Dev-Ops" className="text-black">
            Dev-Ops
          </option>
          <option value="Data Engineer" className="text-black">
            Data Engineer
          </option>
          <option value="Data Science" className="text-black">
            Data Science
          </option>
          <option value="Computer-Vision" className="text-black">
            Computer-Vision
          </option>
          <option value="Nlp" className="text-black">
            Nlp
          </option>
          <option value="Deep-Learning" className="text-black">
            Deep-Learning
          </option>
          <option value="Test / Qa" className="text-black">
            Test / Qa
          </option>
          <option value="Web3" className="text-black">
            Web3
          </option>
          <option value="Sre" className="text-black">
            Sre
          </option>
          <option value="Data - Infrastructure" className="text-black">
            Data - Infrastructure
          </option>
        </optgroup>

        <optgroup label="DESIGN" style={{ color: "lightgrey" }}>
          <option value="Designer" className="text-black">
            Designer
          </option>
          <option value="Design Manager" className="text-black">
            Design Manager
          </option>
          <option value="Graphic Designer" className="text-black">
            Graphic Designer
          </option>
          <option value="Product Designer" className="text-black">
            Product Designer
          </option>
        </optgroup>

        <optgroup label="PRODUCT" style={{ color: "lightgrey" }}>
          <option value="Product Manager" className="text-black">
            Product Manager
          </option>
        </optgroup>

        <optgroup label="OPERATIONS" style={{ color: "lightgrey" }}>
          <option value="Operations Manager" className="text-black">
            Operations Manager
          </option>
          <option
            value="Founder's Office/Chief Of Staff"
            className="text-black"
          >
            Founder's Office/Chief Of Staff
          </option>
          <option value="Graphic Designer" className="text-black">
            Graphic Designer
          </option>
          <option value="Product Designer" className="text-black">
            Product Designer
          </option>
        </optgroup>

        <optgroup label="SALES" style={{ color: "lightgrey" }}>
          <option
            value="Sales Development Representative"
            className="text-black"
          >
            Sales Development Representative
          </option>
          <option value="Account Executive" className="text-black">
            Account Executive
          </option>
          <option value="Account Manager" className="text-black">
            Account Manager
          </option>
        </optgroup>

        <optgroup label="MARKETING" style={{ color: "lightgrey" }}>
          <option value="Digital Marketing Manager" className="text-black">
            Digital Marketing Manager
          </option>
          <option value="Growth Hacker" className="text-black">
            Growth Hacker
          </option>
          <option value="Marketing" className="text-black">
            Marketing
          </option>
          <option value="Product Marketing Manager" className="text-black">
            Product Marketing Manager
          </option>
        </optgroup>

        <optgroup label="OTHER ENGINEERING" style={{ color: "lightgrey" }}>
          <option value="Hardware" className="text-black">
            Hardware
          </option>
          <option value="Mechanical" className="text-black">
            Mechanical
          </option>
          <option value="Systems" className="text-black">
            Systems
          </option>
        </optgroup>

        <optgroup label="BUSINESS ANALYST" style={{ color: "lightgrey" }}>
          <option value="Business Analyst" className="text-black">
            Business Analyst
          </option>
        </optgroup>

        <optgroup label="DATA ANALYST" style={{ color: "lightgrey" }}>
          <option value="Data Analyst" className="text-black">
            Data Analyst
          </option>
        </optgroup>

        <optgroup label="PROJECT MANAGER" style={{ color: "lightgrey" }}>
          <option value="Project Manager" className="text-black">
            Project Manager
          </option>
        </optgroup>

        <optgroup label="MANAGEMENT" style={{ color: "lightgrey" }}>
          <option value="Management" className="text-black">
            Management
          </option>
        </optgroup>

        <optgroup label="LEGAL" style={{ color: "lightgrey" }}>
          <option value="Legal" className="text-black">
            Legal
          </option>
        </optgroup>

        <optgroup label="HR" style={{ color: "lightgrey" }}>
          <option value="Hr" className="text-black">
            Hr
          </option>
        </optgroup>

        <optgroup label="FINANCE" style={{ color: "lightgrey" }}>
          <option value="Finance" className="text-black">
            Finance
          </option>
        </optgroup>
      </select>

      <select
        className="bg-white w-full sm:w-56 py-3 pl-4 font-semibold rounded-md"
        name="numberOfEmployees"
        onChange={handleChange}
        style={{ color: 'gray' }}
      >
        <option value="" disabled hidden selected>
          Number of Employees
        </option>
        <option value="1-10" className="text-black">
          1-10
        </option>
        <option value="11-20" className="text-black">
          11-20
        </option>
        <option value="21-50" className="text-black">
          21-50
        </option>
        <option value="51-100" className="text-black">
          51-100
        </option>
        <option value="101-200" className="text-black">
          101-200
        </option>
        <option value="201-500" className="text-black">
          201-500
        </option>
        <option value="500+" className="text-black">
          500+
        </option>
      </select>

      <select
        className="bg-white w-full sm:w-40 py-3 pl-4 font-semibold rounded-md"
        name="experience"
        onChange={handleChange}
        style={{ color: 'gray' }}
      >
        <option value="Experience" disabled hidden selected>
          Experience
        </option>
        <option value="1" className="text-black">
          1
        </option>
        <option value="2" className="text-black">
          2
        </option>
        <option value="3" className="text-black">
          3
        </option>
        <option value="4" className="text-black">
          4
        </option>
        <option value="5" className="text-black">
          5
        </option>
        <option value="6" className="text-black">
          6
        </option>
        <option value="7" className="text-black">
          7
        </option>
        <option value="8" className="text-black">
          8
        </option>
        <option value="9" className="text-black">
          9
        </option>
        <option value="10" className="text-black">
          10
        </option>
      </select>

      <select
        className="bg-white w-full sm:w-32 py-3 pl-4 font-semibold rounded-md"
        name="remote"
        onChange={handleChange}
        style={{ color: 'gray' }}
      >
        <option value="" disabled hidden selected>
          Remote
        </option>
        <option value="Remote" className="text-black">
          Remote
        </option>
        <option value="Hybrid" className="text-black">
          Hybrid
        </option>
        <option value="In-office" className="text-black">
          In-office
        </option>
      </select>

      <select
        className="bg-white w-full sm:w-60 py-3 pl-4 font-semibold rounded-md"
        name="minSalary"
        onChange={handleChange}
        style={{ color: 'gray' }}
      >
        <option value="" disabled hidden selected>
          Minimum Base Pay Salary
        </option>
        <option value="0L" className="text-black">
          0L
        </option>
        <option value="10L" className="text-black">
          10L
        </option>
        <option value="20L" className="text-black">
          20L
        </option>
        <option value="30L" className="text-black">
          30L
        </option>
        <option value="40L" className="text-black">
          40L
        </option>
        <option value="50L" className="text-black">
          50L
        </option>
        <option value="60L" className="text-black">
          60L
        </option>
        <option value="70L" className="text-black">
          70L
        </option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        className="bg-white py-3 pl-4 font-semibold  rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        onChange={handleChange} // Update search filter when input changes
        name="search" // Name of the filter
      />
    </div>
  );
};

export default SearchBar;
