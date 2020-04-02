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

	const sortData = by => {
		(sortedData ? sortedData : data[selected]).sort((a, b) =>
			orderBy === by ? a[by] - b[by] : b[by] - a[by]
		);
		if (by === orderBy) setOrderBy(null);
		else setOrderBy(by);
	};

	const handleSearchInput = e => {
		const value = e.target.value;
		setSearchText(value);
		if (value.length > 1) {
			searchData(value);
		} else {
			setSortedData(null);
		}
	};
	const searchData = region => {
		const newData = data[selected].filter(item =>
			item.region.toLowerCase().includes(region.toLowerCase())
		);
		setSortedData(newData);
	};

	const handleDataChange = e => {
		setSearchText("");
		setSortedData(null);
		setOrderBy("total_cases");
		setSelected(e.value);
	};

	return (
		<div className="all-countries table-wrapper">
			<div className="header">
				<Select
					onChange={handleDataChange}
					defaultValue={{ value: "worldWide", label: "WorldWide" }}
					options={[
						{ value: "worldWide", label: "WordWide" },
						{ value: "usaData", label: "USA" },
						{ value: "indiaData", label: "India" }
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
							{data[selected][0]["total_cases"] !== undefined ? (
								<TableCell align="center">
									<TableSortLabel
										direction={orderBy === "total_cases" ? "asc" : "desc"}
										onClick={() => sortData("total_cases")}
									>
										Confirmed
									</TableSortLabel>
								</TableCell>
							) : null}

							{data[selected][0]["total_deaths"] !== undefined ? (
								<TableCell align="center">
									<TableSortLabel
										direction={orderBy === "total_deaths" ? "asc" : "desc"}
										onClick={() => sortData("total_deaths")}
									>
										New Deaths
									</TableSortLabel>
								</TableCell>
							) : null}
							{data[selected][0]["new_deaths"] !== undefined ? (
								<TableCell align="center">
									<TableSortLabel
										direction={orderBy === "new_deaths" ? "asc" : "desc"}
										onClick={() => sortData("new_deaths")}
									>
										New Deaths
									</TableSortLabel>
								</TableCell>
							) : null}
							{data[selected][0]["total_recovered"] !== undefined ? (
								<TableCell align="center">
									<TableSortLabel
										direction={orderBy === "total_recovered" ? "asc" : "desc"}
										onClick={() => sortData("total_recovered")}
									>
										Recovered
									</TableSortLabel>
								</TableCell>
							) : null}
							{data[selected][0]["serious"] !== undefined ? (
								<TableCell align="center">
									<TableSortLabel
										direction={orderBy === "serious" ? "asc" : "desc"}
										onClick={() => sortData("serious")}
									>
										Critical
									</TableSortLabel>
								</TableCell>
							) : null}
							{data[selected][0]["new_cases"] !== undefined ? (
								<TableCell align="center">
									<TableSortLabel
										direction={orderBy === "new_cases" ? "asc" : "desc"}
										onClick={() => sortData("new_cases")}
									>
										New Cases
									</TableSortLabel>
								</TableCell>
							) : null}
							{data[selected][0]["active_cases"] !== undefined ? (
								<TableCell align="center">
									<TableSortLabel
										direction={orderBy === "active_cases" ? "asc" : "desc"}
										onClick={() => sortData("active_cases")}
									>
										Active Cases
									</TableSortLabel>
								</TableCell>
							) : null}
						</TableRow>
					</TableHead>
					<TableBody>
						{(sortedData ? sortedData : data[selected] || []).map(row => (
							<TableRow key={row.region}>
								<TableCell component="th" scope="row">
									{row.region}
								</TableCell>
								{data[selected][0]["total_cases"] !== undefined ? (
									<TableCell align="center">
										<NumberFormat
											value={row.total_cases}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</TableCell>
								) : null}
								{data[selected][0]["total_deaths"] !== undefined ? (
									<TableCell align="center">
										<NumberFormat
											value={row.total_deaths}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</TableCell>
								) : null}
								{data[selected][0]["new_deaths"] !== undefined ? (
									<TableCell align="center">
										{row.new_deaths ? "+" : null}
										<NumberFormat
											value={row.new_deaths}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</TableCell>
								) : null}
								{data[selected][0]["total_recovered"] !== undefined ? (
									<TableCell align="center">
										<NumberFormat
											value={row.total_recovered}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</TableCell>
								) : null}

								{data[selected][0]["serious"] !== undefined ? (
									<TableCell align="center">
										<NumberFormat
											value={row.serious}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</TableCell>
								) : null}
								{data[selected][0]["new_cases"] !== undefined ? (
									<TableCell align="center">
										{row.new_cases ? "+" : null}
										<NumberFormat
											value={row.new_cases}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</TableCell>
								) : null}
								{data[selected][0]["active_cases"] !== undefined ? (
									<TableCell align="center">
										<NumberFormat
											value={row.active_cases}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</TableCell>
								) : null}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default AllCountriesTable;
