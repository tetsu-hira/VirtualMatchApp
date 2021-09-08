import React, { useRef, useState } from "react";
import XLSX from "xlsx";

const File: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [ fileName, setFileName ] = useState("");
  const [ excelData, setExcelData ] = useState("");

  const handleTriggerReadFile = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  }
  const handleReadFile = (fileObj: File) => {
    if (fileObj) {
      setFileName(fileObj.name);
      fileObj.arrayBuffer().then((buffer) => {
        // ファイルを読み込む
        const workbook = XLSX.read(buffer, { type: 'buffer', bookVBA: true});
        // 最初のシート名を取得する
        const firstSheetName = workbook.SheetNames[0];
        // 最初のシート名から、ワークシートを取得する
        const worksheet = workbook.Sheets[firstSheetName];
        // シートのデータをJSONとして取得する
        const data = XLSX.utils.sheet_to_json(worksheet);
        // JSON文字列としてstateに保存する
        setExcelData(JSON.stringify(data));
      })
    }
  }

  return (
    <div>
      <p>Excelファイルをアップロードする</p>
      <button onClick={() => handleTriggerReadFile()}>ファイル選択</button>
      {!!fileName && <span>ファイル名：{fileName}</span>}
      <form>
        <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ref={fileInput} onChange={(e) => {
          e.preventDefault();
          handleReadFile(e.currentTarget.files[0])
        }}/>
      </form>
      {!!excelData && (
        <div>
          {excelData}
        </div>
      )}
    </div>
  )
}

export default File;