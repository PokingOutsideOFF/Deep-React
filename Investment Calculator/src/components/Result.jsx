import { calculateInvestmentResults, formatter } from "../util/investment";

const tableHeadings = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Investment Capital",
];
export default function Result({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          {tableHeadings.map((heading) => (
            <th key={heading} scope="col">{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
