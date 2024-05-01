// import React from 'react'

function SearchBar() {
  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <select className="w-48 py-3 pl-4 font-semibold rounded-md">
        <optgroup label="ENGINEERING" style={{ color: "lightgrey" }}>
          <option value="" disabled hidden selected>
            Roles
          </option>
          <option value="" className="text-black">
            Backend
          </option>
          <option value="" className="text-black">
            Frontend
          </option>
          <option value="" className="text-black">
            Fullstack
          </option>
          <option value="" className="text-black">
            IOS
          </option>
          <option value="" className="text-black">
            Flutter
          </option>
          <option value="" className="text-black">
            React Native
          </option>
          <option value="" className="text-black">
            Android
          </option>
          <option value="" className="text-black">
            Tech Lead
          </option>
          <option value="" className="text-black">
            Dev-Ops
          </option>
          <option value="" className="text-black">
            Data Engineer
          </option>
          <option value="" className="text-black">
            Data Science
          </option>
          <option value="" className="text-black">
            Computer-Vision
          </option>
          <option value="" className="text-black">
            Nlp
          </option>
          <option value="" className="text-black">
            Deep-Learning
          </option>
          <option value="" className="text-black">
            Test / Qa
          </option>
          <option value="" className="text-black">
            Web3
          </option>
          <option value="" className="text-black">
            Sre
          </option>
          <option value="" className="text-black">
            Data - Infrastructure
          </option>
        </optgroup>

        <optgroup label="DESIGN" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Designer
          </option>
          <option value="" className="text-black">
            Design Manager
          </option>
          <option value="" className="text-black">
            Graphic Designer
          </option>
          <option value="" className="text-black">
            Product Designer
          </option>
        </optgroup>

        <optgroup label="PRODUCT" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Product Manager
          </option>
        </optgroup>

        <optgroup label="OPERATIONS" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Operations Manager
          </option>
          <option value="" className="text-black">
            Founder's Office/Chief Of Staff
          </option>
          <option value="" className="text-black">
            Graphic Designer
          </option>
          <option value="" className="text-black">
            Product Designer
          </option>
        </optgroup>

        <optgroup label="SALES" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Sales Development Representative
          </option>
          <option value="" className="text-black">
            Account Executive
          </option>
          <option value="" className="text-black">
            Account Manager
          </option>
        </optgroup>

        <optgroup label="MARKETING" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Digital Marketing Manager
          </option>
          <option value="" className="text-black">
            Growth Hacker
          </option>
          <option value="" className="text-black">
            Marketing
          </option>
          <option value="" className="text-black">
            Product Marketing Manager
          </option>
        </optgroup>

        <optgroup label="OTHER ENGINEERING" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Hardware
          </option>
          <option value="" className="text-black">
            Mechanical
          </option>
          <option value="" className="text-black">
            Systems
          </option>
        </optgroup>

        <optgroup label="BUSINESS ANALYST" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Business Analyst
          </option>
        </optgroup>

        <optgroup label="DATA ANALYST" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Data Analyst
          </option>
        </optgroup>

        <optgroup label="PROJECT MANAGER" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Project Manager
          </option>
        </optgroup>

        <optgroup label="MANAGEMENT" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Management
          </option>
        </optgroup>

        <optgroup label="LEGAL" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Legal
          </option>
        </optgroup>

        <optgroup label="HR" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Hr
          </option>
        </optgroup>

        <optgroup label="FINANCE" style={{ color: "lightgrey" }}>
          <option value="" className="text-black">
            Finance
          </option>
        </optgroup>
      </select>

      <select className="w-56 py-3 pl-4 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Number of Employees
        </option>
        <option value="" className="text-black">
          1-10
        </option>
        <option value="" className="text-black">
          11-20
        </option>
        <option value="" className="text-black">
          21-50
        </option>
        <option value="" className="text-black">
          51-100
        </option>
        <option value="" className="text-black">
          101-200
        </option>
        <option value="" className="text-black">
          201-500
        </option>
        <option value="" className="text-black">
          500+
        </option>
      </select>

      <select className="w-40 py-3 pl-4 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="" className="text-black">
          1
        </option>
        <option value="" className="text-black">
          2
        </option>
        <option value="" className="text-black">
          3
        </option>
        <option value="" className="text-black">
          4
        </option>
        <option value="" className="text-black">
          5
        </option>
        <option value="" className="text-black">
          6
        </option>
        <option value="" className="text-black">
          7
        </option>
        <option value="" className="text-black">
          8
        </option>
        <option value="" className="text-black">
          9
        </option>
        <option value="" className="text-black">
          10
        </option>
      </select>

      <select className="w-32 py-3 pl-4 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Remote
        </option>
        <option value="" className="text-black">
          Remote
        </option>
        <option value="" className="text-black">
          Hybrid
        </option>
        <option value="" className="text-black">
          In-office
        </option>
      </select>

      <select className="w-60 py-3 pl-4 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Minimum Base Pay Salary
        </option>
        <option value="" className="text-black">
          0L
        </option>
        <option value="" className="text-black">
          10L
        </option>
        <option value="" className="text-black">
          20L
        </option>
        <option value="" className="text-black">
          30L
        </option>
        <option value="" className="text-black">
          40L
        </option>
        <option value="" className="text-black">
          50L
        </option>
        <option value="" className="text-black">
          60L
        </option>
        <option value="" className="text-black">
          70L
        </option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        className="w-60 py-3 pl-4 font-semibold rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
}

export default SearchBar;
