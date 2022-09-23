export interface PredictionResponse {
  'bustime-response': BustimePredictionResponse;
}

export interface BustimePredictionResponse {
  prd: Prd[];
  error?: ErrorPredictionResponse[];
}

export interface Prd {
  rid: string;
  tripid: string;
  schdtm: string;
  tmstmp: string;
  typ: string;
  stpnm: string;
  stpid: string;
  vid: string;
  dstp: number;
  rt: string;
  rtdir: string;
  des: string;
  prdtm: string;
  tablockid: string;
  tatripid: string;
  dly: boolean;
  prdctdn: string;
  zone: string;
}

export interface ErrorPredictionResponse {
  stpid: string;
  msg: string;
}
