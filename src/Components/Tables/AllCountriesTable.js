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

const AllCountriesTable = ({ data, header }) => {
	const [sortedData, setSortedData] = useState(null);
	const [orderBy, setOrderBy] = useState("total_cases");
	const sortData = by => {
		(sortedData ? sortedData : data).sort((a, b) =>
			orderBy === by ? a[by] - b[by] : b[by] - a[by]
		);
		if (by === orderBy) setOrderBy(null);
		else setOrderBy(by);
	};

	const handleSearchInput = e => {
		const value = e.target.value;
		if (value.length > 1) {
			searchData(value);
		} else {
			setSortedData(null);
		}
	};
	const searchData = country => {
		const newData = data.filter(item =>
			item.country.toLowerCase().includes(country.toLowerCase())
		);
		setSortedData(newData);
	};

	return (
		<div className="all-countries table-wrapper">
			<div className="header">
				<span>{header}</span>
				<input type="text" onChange={handleSearchInput} placeholder="search" />
			</div>
			<div className="recovered-progress"></div>

			<TableContainer component={Paper} className="table-container">
				<Table aria-label="sticky table" className="table">
					<TableHead>
						<TableRow>
							<TableCell>Region</TableCell>
							<TableCell align="center">
								<TableSortLabel
									direction={orderBy === "total_cases" ? "asc" : "desc"}
									onClick={() => sortData("total_cases")}
								>
									Confirmed
								</TableSortLabel>
							</TableCell>
							<TableCell align="center">
								<TableSortLabel
									direction={orderBy === "total_deaths" ? "asc" : "desc"}
									onClick={() => sortData("total_deaths")}
								>
									Deaths
								</TableSortLabel>
							</TableCell>
							<TableCell align="center">
								<TableSortLabel
									direction={orderBy === "new_deaths" ? "asc" : "desc"}
									onClick={() => sortData("new_deaths")}
								>
									New Deaths
								</TableSortLabel>
							</TableCell>
							<TableCell align="center">
								<TableSortLabel
									direction={orderBy === "total_recovered" ? "asc" : "desc"}
									onClick={() => sortData("total_recovered")}
								>
									Recovered
								</TableSortLabel>
							</TableCell>
							<TableCell align="center">
								<TableSortLabel
									direction={orderBy === "serious" ? "asc" : "desc"}
									onClick={() => sortData("serious")}
								>
									Critical
								</TableSortLabel>
							</TableCell>
							<TableCell align="center">
								<TableSortLabel
									direction={orderBy === "new_cases" ? "asc" : "desc"}
									onClick={() => sortData("new_cases")}
								>
									New Cases
								</TableSortLabel>
							</TableCell>
							<TableCell align="center">
								<TableSortLabel
									direction={orderBy === "active_cases" ? "asc" : "desc"}
									onClick={() => sortData("active_cases")}
								>
									Active Cases
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(sortedData ? sortedData : data).map(row => (
							<TableRow key={row.country}>
								<TableCell component="th" scope="row">
									{row.country}
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.total_cases}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.total_deaths}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									{row.new_deaths ? "+" : null}
									<NumberFormat
										value={row.new_deaths}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.total_recovered}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.serious}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									{row.new_cases ? "+" : null}
									<NumberFormat
										value={row.new_cases}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.active_cases}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default AllCountriesTable;
