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
							<TableCell align="center">Recovered</TableCell>
							<TableCell align="center">Critical</TableCell>
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
										value={row.cases}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.deaths}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.recovered}
										displayType={"text"}
										thousandSeparator={true}
									/>
								</TableCell>
								<TableCell align="center">
									<NumberFormat
										value={row.critical}
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
