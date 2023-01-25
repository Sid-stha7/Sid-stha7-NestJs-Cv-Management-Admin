import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = () => {
  return (
    <div>
      {/* <Document
        file="./Siddhartha_Intern Feedback Form.pdf"
        onLoadSuccess={console.log('hiiii')}
        onLoadError={console.error}
      >
        <Page height="600" pageNumber={1} />
      </Document> */}

      <object
        data="../image/1674127674493-401648829.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
};

export default Pdf;
