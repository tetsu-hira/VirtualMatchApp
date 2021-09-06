import * as React from 'react';
import ExcelJS from "exceljs";
import { useState } from 'react';

type Cell = {
  id: number
  name: string
  time: number
}

const Excel: React.FC = () => {
  const [ data, setData ] = React.useState<Cell[]>([]);
  const handleClickDownloadButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format:  "xlsx" | "csv"
  ) => {
    e.preventDefault();
    setData

    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("sheet1");
    const worksheet = workbook.getWorksheet("sheet1");

    worksheet.columns = [
      { header: "No.", key: "id"},
      { header: "工程", key: "name"},
      { header: "時間", key: "time"}
    ];

    worksheet.addRows(data);
    
    const uint8Array =
      format === "xlsx"
        ? await workbook.xlsx.writeBuffer() //xlsxの場合
        : await workbook.csv.writeBuffer(); //csvの場合
    const blob = new Blob([uint8Array], { type: "application/octet-binary "});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "NewFile." + format; //フォーマットによって拡張子を変える
    a.click();
    a.remove();
  };

  return (
    <>
        <button onClick={(e) => handleClickDownloadButton(e, "xlsx")}>
          Excel形式
        </button>
        <button onClick={(e) => handleClickDownloadButton(e, "csv")}>
          CSV形式
        </button>
    </>
  );
};

export default Excel;
