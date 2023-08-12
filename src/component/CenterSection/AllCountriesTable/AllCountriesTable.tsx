import React from "react";
import clsx from "clsx";

import { CountryCaseData, SortedByType } from "../../../types";
import { numberWithCommas } from "../../../utils/formatters";
import NoSortIcon from '../../../../public/icons/no_sort.svg';
import SortDescIcon from '../../../../public/icons/sort_desc.svg';
import SortAscIcon from '../../../../public/icons/sort_asc.svg';

import styles from "./AllCountriesTable.module.scss";

type Props = {
  tableHeadData: string[];
  tableBodyData: CountryCaseData[][]
  sortedBy: SortedByType | null;
  sortTableHandler: (sortBy: SortedByType) => void;
}

const AllCountriesTable: React.FC<Props> = ({ tableHeadData, tableBodyData, sortedBy, sortTableHandler }) => {
  console.log("HEYYsd",  sortedBy)
  return (
    <table className={styles.all_countries}>
      <thead>
        <tr>
          {tableHeadData.map((item) => (
            <th key={item} className="country-name" data-sort-param="countryName" data-sortby="asc">
              <button
                onClick={() => sortTableHandler({
                  by: item,
                  dir: sortedBy?.by === item && sortedBy.dir === 'DESC' ? 'ASC' : 'DESC',
                })}
              >
                {item.split(' ').map((el, i) => (
                    <>
                      {i > 0 && <br />}
                      {el}
                    </>
                  )
                )}
                {sortedBy && sortedBy.by === item ? (
                  <>
                    {sortedBy.dir === 'ASC'
                      ? <SortAscIcon className={styles.sort_icon} />
                      : <SortDescIcon className={styles.sort_icon} />
                    }
                  </>
                ) : <NoSortIcon className={styles.sort_icon} />}
              </button>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <div className={styles.body}>
          {tableBodyData.map((row, i) => {
            const k = `tr-${row[0].val}-${i}`;

            return (
              <tr
                key={k}
                className={clsx({
                  [styles.grey_background]: i % 2 !== 0 
                })}
              >
                {row.map((item, j) => {
                  const key = `${row[0].val}-${j}-${item.val}`;

                  return (
                    <td
                      key={key}
                      className={clsx({
                        [styles.danger]: item.type === 'RED',
                      })}
                    >
                      {item.flag && <img src={item.flag} alt="" />}
                      {typeof item.val === 'string' ? item.val : numberWithCommas(item.val)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </div>
      </tbody>
    </table>
  )  
}

export default AllCountriesTable;
