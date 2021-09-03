import { useState } from "react";
import * as React from 'react';
// import Select from 'react-select';
// import ReactDOM from "react-dom";


type Pro = {
  id: number
  name: string
  work: string
}

const MC: Pro[] = [
  {
    id: 10,
    name: "MC仕掛",
    work: "MC"
  }, {
    id: 11,
    name: "MC プログラム作成",
    work: "MC-PRG"
  }, {
    id: 12,
    name: "MC1-40",
    work: "MC1-40"
  }, {
    id: 13,
    name: "MC1-50",
    work: "MC1-50"
  }, {
    id: 14,
    name: "VM53R",
    work: "VM53R"
  }, {
    id: 15,
    name: "VM73",
    work: "VM73"
  }
]
const LE: Pro[] = [
  {
    id: 20,
    name: "LE仕掛",
    work: "LE"
  }, {
    id: 21,
    name: "LE",
    work: "LE"
  }, {
    id: 22,
    name: "LEプログラム作成",
    work: "LE-PRG"
  }, {
    id: 23,
    name: "森精機",
    work: "LE-MORI"
  }, {
    id: 24,
    name: "中村留",
    work: "LE-TOME"
  }
]
const MV: Pro[] = [
  {
    id: 30,
    name: "MV仕掛",
    work: "MV"
  }, {
    id: 31,
    name: "MV-2",
    work: "MV-2"
  }, {
    id: 32,
    name: "MV-3",
    work: "MV-3"
  }, {
    id: 33,
    name: "MV-J",
    work: "MV-J"
  }, {
    id: 34,
    name: "材料取り",
    work: "ZAIRYO"
  }, {
    id: 35,
    name: "DU",
    work: "DU"
  }, {
    id: 36,
    name: "SO",
    work: "SO"
  }
]
const HQ: Pro[] = [
  {
    id: 40,
    name: "熱処理仕掛",
    work: "HQ"
  }, {
    id: 41,
    name: "岡熱",
    work: "OKAYA"
  }, {
    id: 42,
    name: "大和精",
    work: "DAIWA"
  }, {
    id: 43,
    name: "社内HQ",
    work: "HQ1"
  }, {
    id: 44,
    name: "ウメトク熱処理",
    work: "UMETOKU HQ"
  }, {
    id: 45,
    name: "中信高周波",
    work: "KOSHUHA"
  }, {
    id: 46,
    name: "室蘭ヒート",
    work: "MUROHI"
  }
]
const SL: Pro[] = [
  {
    id: 50,
    name: "SG-L仕掛",
    work: "SG-L"
  }
]
const SG: Pro[] = [
  {
    id: 60,
    name: "SG仕掛",
    work: "SG"
  }
]
const CG: Pro[] = [
  {
    id: 70,
    name: "CG仕掛",
    work: "CG"
  }, {
    id: 71,
    name: "CG-1",
    work: "CG-1"
  }, {
    id: 72,
    name: "CG-2",
    work: "CG-2"
  }
]
const PG: Pro[] = [
  {
    id: 80,
    name: "PG仕掛",
    work: "PG"
  }, {
    id: 81,
    name: "PG プログラム作成",
    work: "PG-PRG"
  }, {
    id: 82,
    name: "PG-O",
    work: "PG-O"
  }, {
    id: 83,
    name: "PGX",
    work: "PGX"
  }, {
    id: 84,
    name: "SPG",
    work: "SPG"
  }
]
const ED: Pro[] = [
  {
    id: 90,
    name: "ED仕掛",
    work: "ED"
  }
]
const EH: Pro[] = [
  {
    id: 100,
    name: "EDH仕掛",
    work: "EDH"
  }, {
    id: 101,
    name: "EDH",
    work: "EDH"
  }, {
    id: 102,
    name: "EDH-NC",
    work: "EDH-NC"
  }
]
const JG: Pro[] = [
  {
    id: 110,
    name: "JG仕掛",
    work: "JG-0"
  }, {
    id: 111,
    name: "JG",
    work: "JG"
  }, {
    id: 112,
    name: "NC-JG",
    work: "NC-JG"
  }
]
const WQ: Pro[] = [
  {
    id: 120,
    name: "WE水仕掛",
    work: "WEQ"
  }
]
const WP: Pro[] = [
  {
    id: 130,
    name: "WE油仕掛",
    work: "WEP"
  }
]
const MT: Pro[] = [
  {
    id: 140,
    name: "MC2仕掛",
    work: "MC2"
  }, {
    id: 141,
    name: "MC2-1",
    work: "MC2-1"
  }, {
    id: 142,
    name: "MC2-2",
    work: "MC2-2"
  }, {
    id: 143,
    name: "MC2-3",
    work: "MC2-3"
  }, {
    id: 144,
    name: "MC2-4",
    work: "MC2-4"
  }, {
    id: 145,
    name: "MC2-5",
    work: "MC2-5"
  }, {
    id: 146,
    name: "MC2-6",
    work: "MC2-6"
  }, {
    id: 147,
    name: "モデル NC 作成",
    work: "MODEL-NC"
  }
]
const CH: Pro[] = [
  {
    id: 150,
    name: "検査仕掛",
    work: "CHK"
  }, {
    id: 151,
    name: "検ﾍﾞｱﾄﾞ",
    work: "CHK1"
  }, {
    id: 152,
    name: "検ｺﾝﾄﾚ",
    work: "CHK2"
  }, {
    id: 153,
    name: "検他",
    work: "CHK3"
  }, {
    id: 154,
    name: "検ATOS",
    work: "ATOS"
  }
]
const FL: Pro[] = [
  {
    id: 160,
    name: "仕上仕掛",
    work: "FIN"
  }, {
    id: 161,
    name: "LM",
    work: "LM"
  }, {
    id: 162,
    name: "FL",
    work: "FL"
  }, {
    id: 163,
    name: "仕上",
    work: "FIN"
  }, {
    id: 164,
    name: "バラシ",
    work: "BARASI"
  }, {
    id: 165,
    name: "組立",
    work: "BUILD"
  }
]
const EN: Pro[] = [
  {
    id: 170,
    name: "完了仕掛",
    work: "END"
  }, {
    id: 171,
    name: "出荷",
    work: "SHIP"
  }, {
    id: 172,
    name: "設計保管",
    work: "SEKKEI"
  }, {
    id: 173,
    name: "生産管理保管",
    work: "SEIKAN"
  }
]



const Process: React.FC = () => {
  const [ plan, setPlan] = useState<string[]>(["開始"]);
  const [ mcName, setMCName] = useState<string>(MC[0].name);
  const [ leName, setLEName] = useState<string>(LE[0].name);
  const [ mvName, setMVName] = useState<string>(MV[0].name);
  const [ hqName, setHQName] = useState<string>(HQ[0].name);
  const [ slName, setSLName] = useState<string>(SL[0].name);
  const [ sgName, setSGName] = useState<string>(SG[0].name);
  const [ cgName, setCGName] = useState<string>(CG[0].name);
  const [ pgName, setPGName] = useState<string>(PG[0].name);
  const [ edName, setEDName] = useState<string>(ED[0].name);
  const [ ehName, setEHName] = useState<string>(EH[0].name);
  const [ jgName, setJGName] = useState<string>(JG[0].name);
  const [ wqName, setWQName] = useState<string>(WQ[0].name);
  const [ wpName, setWPName] = useState<string>(WP[0].name);
  const [ mtName, setMTName] = useState<string>(MT[0].name);
  const [ chName, setCHName] = useState<string>(CH[0].name);
  const [ flName, setFLName] = useState<string>(FL[0].name);
  const [ enName, setENName] = useState<string>(EN[0].name);

  const clickAddMC = () => {setPlan([...plan, mcName ]);}
  const clickAddLE = () => {setPlan([...plan, leName ]);}
  const clickAddMV = () => {setPlan([...plan, mvName ]);}
  const clickAddHQ = () => {setPlan([...plan, hqName ]);}
  const clickAddSL = () => {setPlan([...plan, slName ]);}
  const clickAddSG = () => {setPlan([...plan, sgName ]);}
  const clickAddCG = () => {setPlan([...plan, cgName ]);}
  const clickAddPG = () => {setPlan([...plan, pgName ]);}
  const clickAddED = () => {setPlan([...plan, edName ]);}
  const clickAddEH = () => {setPlan([...plan, ehName ]);}
  const clickAddJG = () => {setPlan([...plan, jgName ]);}
  const clickAddWQ = () => {setPlan([...plan, wqName ]);}
  const clickAddWP = () => {setPlan([...plan, wpName ]);}
  const clickAddMT = () => {setPlan([...plan, mtName ]);}
  const clickAddCH = () => {setPlan([...plan, chName ]);}
  const clickAddFL = () => {setPlan([...plan, flName ]);}
  const clickAddEN = () => {setPlan([...plan, enName ]);}
  
  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => { 
  //   setMCName(e.target.value); 
  //   console.log(e);
  //   }

  const message: string = "工程設計";
  console.log(plan);
  return (
    <div className="Process">
      <div className="ProcessContainer">
        <div className="ProcessMain">
          <div className="ProcessList">
            <h1>設備一覧</h1>
            <div className="ProcessList__Border">
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setMCName(e.target.value)}} defaultValue={MC[0].name}>
                  { MC.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMC}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setLEName(e.target.value)}} defaultValue={LE[0].name}>
                  { LE.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddLE}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setMVName(e.target.value)}} defaultValue={MV[0].name}>
                  { MV.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMV}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setHQName(e.target.value)}} defaultValue={HQ[0].name}>
                  { HQ.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddHQ}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setSLName(e.target.value)}} defaultValue={SL[0].name}>
                  { SL.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddSL}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setSGName(e.target.value)}} defaultValue={SG[0].name}>
                  { SG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddSG}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setCGName(e.target.value)}} defaultValue={CG[0].name}>
                  { CG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddCG}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setPGName(e.target.value)}} defaultValue={PG[0].name}>
                  { PG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddPG}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setEDName(e.target.value)}} defaultValue={ED[0].name}>
                  { ED.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddED}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setEHName(e.target.value)}} defaultValue={EH[0].name}>
                  { EH.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddEH}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setJGName(e.target.value)}} defaultValue={JG[0].name}>
                  { JG.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddJG}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setWQName(e.target.value)}} defaultValue={WQ[0].name}>
                  { WQ.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddWQ}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setWPName(e.target.value)}} defaultValue={WP[0].name}>
                  { WP.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddWP}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setMTName(e.target.value)}} defaultValue={MT[0].name}>
                  { MT.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddMT}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setCHName(e.target.value)}} defaultValue={CH[0].name}>
                  { CH.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddCH}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setFLName(e.target.value)}} defaultValue={FL[0].name}>
                  { FL.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddFL}>Enter</button>
              </div>
              <div className="SelectBox">
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>{ setENName(e.target.value)}} defaultValue={EN[0].name}>
                  { EN.map((item: Pro) => (
                    <option key={ item.id }>{ item.name }</option>
                  )) }
                </select>
                <button onClick={clickAddEN}>Enter</button>
              </div>
            </div>
          </div>
          <div className="Result">
            <h1>{ message }</h1>
            <div className="Result__Border">
              { plan.map((item: string, idx: number) => (
                <div className="Flex" key={idx}>
                  <div className="ResultIndex">{idx}</div>
                  <div className="ResultItem">{item}</div>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Process;