import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";

const AllCountriesTable = ({ data, header }) => {
	return (
		<div className="all-countries table">
			<div className="header">{header}</div>
			<div className="recovered-progress"></div>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Region</TableCell>
							<TableCell align="center">Confirmed</TableCell>
							<TableCell align="center">Deaths</TableCell>
							<TableCell align="center">New Deaths</TableCell>
							<TableCell align="center">Recovered</TableCell>
							<TableCell align="center">Critical</TableCell>
							<TableCell align="center">New Cases</TableCell>
							<TableCell align="center">Active Cases</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(row => (
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
