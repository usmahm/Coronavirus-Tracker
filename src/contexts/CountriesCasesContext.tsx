import axios from 'axios';
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { CountryCaseData, MapVizDataType, SortedByType, TotalCasesDataType } from '../types';

const cCasesHeader = ['Country', 'Total Cases', 'New Cases', 'Total Deaths', 'New Deaths', 'Total Recovered', 'Active Cases']

const cCasesItemToIndexMap: { [key: string]: number } = {};
cCasesHeader.forEach((val, i) => {
  cCasesItemToIndexMap[val] = i
})

type ContextType = {
  countriesCasesData: CountryCaseData[][];
  topCountriesData: CountryCaseData[][];
  mapVizData: MapVizDataType[];
  tHead: string[];
  sortedBy: SortedByType | null;
  sortTableHandler: (sortBy: SortedByType) => void;
};

const CountriesCasesContext = createContext<ContextType | null>(null);

export const CountriesCasesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [countriesCasesData, setCountriesCasesData] = useState<CountryCaseData[][]>([])
  const [topCountriesData, setTopCountriesData] = useState<CountryCaseData[][]>([])
  const [mapVizData, setMapVizData] = useState<MapVizDataType[]>([])
  const [sortedBy, setSortedBy] = useState<ContextType['sortedBy'] | null>(null)

  // Sorts in place
  const sortCases = (cases: CountryCaseData[][], by: string, dir: SortedByType['dir'] = 'DESC') => {
    const index = cCasesItemToIndexMap[by];
    const item = cases[0][index];

    if (typeof item.val === "string") {
      cases.sort((a, b) => {
        if (dir === 'ASC') {
          // @ts-ignore // already checking if val is number
          return a[index].val > b[index].val ? 1 : -1;
        } else {
          // @ts-ignore // already checking if val is number
          return b[index].val > a[index].val ? 1 : -1;
        }

      })
    }

    else if (typeof item.val === 'number') {
      cases.sort((a, b) => {
        if (dir === 'ASC') {
          // @ts-ignore // already checking if val is number
          return a[index].val - b[index].val
        } else {
          // @ts-ignore // already checking if val is number
          return b[index].val - a[index].val
        }
      })
    }

    setSortedBy({
      by,
      dir,
    })
  }

  useEffect(() => {
    const fetchCountriesCases = async () => {
      try {
        const res = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/countries?yesterday&sort`);

        const data = res.data;
        if (data && data.length) {
          let [cCasesData, mapVizD] = data.reduce(([cCases, mVD]: [CountryCaseData[][], MapVizDataType[]], currVal: any) => {
            const currCaseData = [
              { type: 'NORMAL', val: currVal.country, flag: currVal.countryInfo.flag },
              { type: 'NORMAL', val: currVal.cases },
              { type: 'NORMAL', val: currVal.todayCases },
              { type: 'RED', val: currVal.deaths },
              { type: 'RED', val: currVal.todayDeaths },
              { type: 'NORMAL', val: currVal.recovered },
              { type: 'NORMAL', val: currVal.active },
            ];

            const curMapVixData = {
              id: currVal.countryInfo.iso2,
              name: currVal.country,
              value: currVal.cases,
              deaths: currVal.deaths,
              rec: currVal.recovered,
              active: currVal.active
            }
            
            const A1 = [...cCases, currCaseData];
            const A2 = [...mVD, curMapVixData];

            return [A1, A2];
          }, [[] as CountryCaseData[][], [] as MapVizDataType[]])

          

          sortCases(cCasesData, 'Total Cases', 'DESC')
          setCountriesCasesData(cCasesData);
          setTopCountriesData(cCasesData.slice(0, 4));

          setMapVizData(mapVizD);
        }
      } catch (err) {
          console.log(err)
      }
    }

    fetchCountriesCases();
  }, []);

  const sortTableHandler = (sortBy: SortedByType) => {
    setCountriesCasesData((prevVal) => {
      const destructured = [...prevVal]

      sortCases(destructured, sortBy.by, sortBy.dir)

      return destructured;
    })
  }

  return (
    <CountriesCasesContext.Provider
      value={{
        countriesCasesData,
        topCountriesData,
        tHead: cCasesHeader,
        mapVizData,
        sortedBy,
        sortTableHandler,
      }}
    >
      {children}
    </CountriesCasesContext.Provider>
  );
};

export const useCountriesCases = () => {
  const value = useContext(CountriesCasesContext);
  if (!value) {
    throw new Error('useCountriesCases must be inside a Provider.');
  }

  return value;
};
