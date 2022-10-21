const TEFAS_URL = 'https://www.tefas.gov.tr/api/DB/BindComparisonFundReturns';

/**
 * TEFAS da islem goren yatirim fonlarinin karsilastirma bilgilerini doner
 * @param [code]: [OPTIONAL] karsilastirma bilgileri yuklenecek olan fonun kodu
 * @customfunction
 */
async function TefasFundComparisions(...code) {
  // load the data from TEFAS and parse the JSON data
  const { data } = await loadFunds();
  
  // parepare headers
  const headers = buildHeaders(data);

  const filteredData = code.length !== 0 ? 
    data.filter(row => code.indexOf(row['FONKODU']) !== -1) :
    data;
  
  return buildTable (headers, filteredData)
}


async function loadFunds () {
  const requestBody = buildRequest();
  const responseBody = await makePostRequest(TEFAS_URL, requestBody);
  return parseResponseData(responseBody);
}


function buildRequest() {
  const requestBody = {
    calismatipi: 2,
    fontip: 'YAT',
    sfontur: '',
    kurucukod: '',
    fongrup: '',
    bastarih: 'Başlangıç',
    bittarih: 'Bitiş',
    fonturkod: '',
    fonunvantip: '',
    strperiod: '1,1,1,1,1,1,1',
    islemdurum: 1
  }

  return encodeRequestBody(requestBody);
}


function encodeRequestBody(requestBody) {
  return Object.entries(requestBody)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
}


async function makePostRequest (url, requestBody) {
  const options = {
    method: "post",
    payload: requestBody,
  }
  const response = await  UrlFetchApp.fetch(url, options)
  return response.getContentText('utf-8');
}


function parseResponseData (responseBody) {
  if (!responseBody) {
    throw new Error('Failed to load the fund details from TEFAS');
  }
  
  return JSON.parse(responseBody);
}


function buildHeaders (data) {
  const firstRow = data[0];
  return Object.keys(firstRow)
}


function buildTable (headers, data) {
  const table = [];
  table.push(headers);

  for (let key in data) {
    const row = data[key];
    const values = Object.values(row);
    table.push(values);
  }

  return table;
}

