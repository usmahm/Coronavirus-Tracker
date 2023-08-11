import React from "react";
import styles from "./AllCountriesTable.module.scss";

type Props = {
  tableHeadData: string[];
  tableBodyData: {
    val: string;
    type: 'NORMAL' | 'RED';
    flag?: string;
  }[][]
}

const AllCountriesTable: React.FC<Props> = ({ tableHeadData, tableBodyData }) => {
  return (
    <table className={styles.all_countries}>
      <thead>
        <tr>
          {tableHeadData.map((item) => (
            <th key={item} className="country-name" data-sort-param="countryName" data-sortby="asc">{item}
              {/* <svg className="sort-icon"><use className="no-sort" xlink:href="#no-sort" /></svg> */}
            </th>
          ))}
            {/* <p className="country-name" data-sort-param="countryName" data-sortby="asc">Country
                <svg className="sort-icon"><use className="no-sort" xlink:href="#no-sort" /></svg>
            </p>
            <p className="total-cases" data-sort-param="totalCases" data-sortby="asc">Total <br> Cases
                <svg className="sort-icon"><use xlink:href="#no-sort" /></svg>
            </p>
            <p className="new-cases" data-sort-param="newCases" data-sortby="asc">New <br> Cases
                <svg className="sort-icon"><use xlink:href="#no-sort" /></svg>
            </p>
            <p className="total-deaths" data-sort-param="totalDeaths" data-sortby="asc">Total <br> Deaths
                <svg className="sort-icon"><use xlink:href="#no-sort" /></svg>
            </p>
            <p className="new-deaths" data-sort-param="newDeaths" data-sortby="asc">New <br> Deaths
                <svg className="sort-icon"><use xlink:href="#no-sort" /></svg>
            </p>
            <p className="total-recovered" data-sort-param="totalRec" data-sortby="asc">Total <br> Recovered
                <svg className="sort-icon"><use xlink:href="#no-sort" /></svg>
            </p>
            <p className="active-cases" data-sort-param="activeCases" data-sortby="asc">Active <br> Cases
                <svg className="sort-icon"><use xlink:href="#no-sort" /></svg>
            </p> */}
        </tr>
      </thead>

      <div className={styles.body}>
        <tbody>
          {/* {tableBodyData.map((row, i) => {
            const k = `tr-${row}-${i}`;

            return (
              <tr key={k}>
                {row.map((item) => {
                  const key = `${row}-${i}-${item.val}`;

                  return (
                    <td key={key} className={item.type === 'RED' ? styles.danger : undefined}>
                      {item.flag && <img src={item.flag} alt="" />}
                      {item.val}
                    </td>
                  );
                })}
              </tr>
            );
          })} */}
        </tbody>
      </div>
    </table>
  )  
}

export default AllCountriesTable;
