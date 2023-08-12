export type TotalCasesDataType = {
  totalConfirmed: number;
  totalActive?: number;
  totalCritical?: number;
  totalRecovered: number;
  totalDeaths: number;
}

export type CountryCaseData = {
  val: string | number;
  type: 'NORMAL' | 'RED';
  flag?: string;
}

export type MapVizDataType = {
  "id": string;
  "name": string;
  "value": number;
  "deaths": number;
  "rec": number;
  "active": number;
}

export type SortedByType = { by: string; dir: 'ASC' | 'DESC' };
