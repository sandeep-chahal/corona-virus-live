import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";
import Select from "react-select";

const AllCountriesTable = ({ data }) => {
	var width = window.innerWidth;
	const [searchText, setSearchText] = useState("");
	const [sortedData, setSortedData] = useState(null);
	const [orderBy, setOrderBy] = useState("total_cases");
	const [selected, setSelected] = useState("worldWide");

	const sortData = (by) => {
		(sortedData ? sortedData : data[selected]).sort((a, b) =>
			orderBy === by ? a[by] - b[by] : b[by] - a[by]
		);
		if (by === orderBy) setOrderBy(null);
		else setOrderBy(by);
	};

	const handleSearchInput = (e) => {
		const value = e.target.value;
		setSearchText(value);
		if (value.length > 1) {
			searchData(value);
		} else {
			setSortedData(null);
		}
	};
	const searchData = (region) => {
		const newData = data[selected].filter((item) =>
			item.region.toLowerCase().includes(region.toLowerCase())
		);
		setSortedData(newData);
	};

	const handleDataChange = (e) => {
		setSearchText("");
		setSortedData(null);
		setOrderBy("total_cases");
		setSelected(e.value);
  };

  const columns = [
    { key: "total_cases", labelText: "Confirmed" },
    { key: "total_deaths", labelText: "Total Deaths" },
    { key: "new_deaths", labelText: "New Deaths", hasPlus: true },
    { key: "total_recovered", labelText: "Recovered" },
    { key: "serious", labelText: "Critical" },
    { key: "new_cases", labelText: "New Cases", hasPlus: true },
    { key: "active_cases", labelText: "Active Cases" },
  ]

	return (
		<div className="all-countries table-wrapper">
			<div className="header">
				<Select
					onChange={handleDataChange}
					defaultValue={{ value: "worldWide", label: "WorldWide" }}
					options={[
						{ value: "worldWide", label: "WordWide" },
						{ value: "usaData", label: "USA" },
						{ value: "indiaData", label: "India" },
					]}
					inputProps={{ readOnly: true }}
					isSearchable={false}
				/>
				<input
					type="text"
					value={searchText}
					onChange={handleSearchInput}
					placeholder="search"
				/>
			</div>
			<div className="recovered-progress"></div>

			<TableContainer component={Paper} className="table-container">
				<Table
					aria-label="sticky table"
					stickyHeader
					className="table"
					size={width < 800 ? "small" : "medium"}
				>
					<TableHead>
						<TableRow>
							<TableCell>Region</TableCell>
              {columns.map((column) => {
                if (data[selected][0][column.key] === undefined) {
                  return null;
                }

                return (
                  <TableCell key={column.key} align="center">
                    <TableSortLabel
                      direction={orderBy === column.key ? "asc" : "desc"}
                      onClick={() => sortData(column.key)}
                    >
                      {column.labelText}
                    </TableSortLabel>
                  </TableCell>
                )
              })}
						</TableRow>
					</TableHead>
					<TableBody>
						{(sortedData ? sortedData : data[selected] || []).map((row) => (
							<TableRow key={row.region}>
								<TableCell component="th" scope="row">
									{row.region}
								</TableCell>
								{columns.map((column) => {
                  if (data[selected][0][column.key] === undefined) {
                    return null;
                  }

                  return (
                    <TableCell key={column.key} align="center">
                      {column.hasPlus && row[column.key] ? "+" : null}
                      <NumberFormat
                        value={row[column.key]}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </TableCell>
                  );
                })}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default AllCountriesTable;
