import { TotalCasesDataType } from '../types';
import axios from 'axios';
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';

type ContextType = {
  todayData: TotalCasesDataType | null;
  totalData: TotalCasesDataType | null;
  lastUpdatedTime: {
    month: string;
    date: string;
    year: number;
    hours: string;
    min: string;
    timezone: string;
  } | null;
};

const TotalCasesContext = createContext<ContextType | null>(null);

const parseUpdatedTime = (time: string) => {
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  const dateObj = new Date(time);
  
  const timeObj ={
      month: monthArr[dateObj.getMonth()],
      date: ('0' + dateObj.getDate()).slice(-2),
      year: dateObj.getFullYear(),
      hours: ('0' + dateObj.getHours()).slice(-2),
      min: ('0' + dateObj.getMinutes()).slice(-2),
      timezone: `${dateObj.toString().split(' ')[5].slice(0, 3)} ${dateObj.toString().split(' ')[5].slice(3, 6)}`,
  }

  return timeObj;
}

export const TotalCasesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalData, setTotalData] = useState<TotalCasesDataType | null>(null);
  const [todayData, setTodayData] = useState<TotalCasesDataType | null>(null);
  const [lastUpdatedTime, setLastUpdatedTime] = useState<ContextType['lastUpdatedTime'] | null>(null)

  useEffect(() => {
    const fetchTotalCases = async () => {
      try {
        const res = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/all?yesterday`);

        const data = res.data;
        if (data) {
          const totalData: TotalCasesDataType = {
            totalConfirmed: data.cases,
            totalActive: data.active,
            totalDeaths: data.deaths,
            totalRecovered: data.recovered,
          }
  
          const todayData: TotalCasesDataType = {
            totalConfirmed: data.todayCases,
            totalCritical: data.critical,
            totalDeaths: data.todayDeaths,
            totalRecovered: data.todayRecovered,
          }
        
          setTotalData(totalData)
          setTodayData(todayData)

          const parsetTime = parseUpdatedTime(data.updated);
          setLastUpdatedTime(parsetTime);
        }
      } catch (err) {
          console.log(err)
      }
    }

    fetchTotalCases();
  }, []);

  return (
    <TotalCasesContext.Provider
      value={{
        todayData,
        totalData,
        lastUpdatedTime,
      }}
    >
      {children}
    </TotalCasesContext.Provider>
  );
};

export const useTotalCases = () => {
  const value = useContext(TotalCasesContext);
  if (!value) {
    throw new Error('useTotalCases must be inside a Provider.');
  }

  return value;
};
