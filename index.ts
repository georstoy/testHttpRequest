const http = require('http');

const pageTag='DoceboLMS';
const lang='en'

const host: string = `https://${lang}.wikipedia.org`;
const path: string = `/w/api.php?action=parse&page=${pageTag}&prop=wikitext&format=json`

const getWikiPage = async () => {
  return new Promise((resolve, reject) => {
    console.log(`declare request options`);
    const options = {
        host,
        path,
        port: 8000,
        method: 'PUT'
    };

    console.log(`declare request`);
    const req = http.request(options, (res: any) => {
      console.log(`Success`);
      console.log(res);
      resolve('Success');
    });

    console.log(`declare error handling`)
    req.on('error', (e: any) => {
      console.log(`Error`);
      console.log(e);
      reject(e.message);
    });

    // send the request
    req.write('');
    req.end();
  });
}

getWikiPage();