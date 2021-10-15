import React, { useContext } from 'react';
import { UserData } from './Process';
import { TeamData } from './Process';

// export type ContextType = number

// import { useState } from 'react';

// type Cell = {
//   name: string
//   time: number
// }

const Match: React.FC = () => {
  const plan = useContext(UserData);
  const team = useContext(TeamData);

  const handleClickMatch = () => {
    console.log("開始")
    console.log({plan})
    console.log({team})
    console.log("終了")
  }

  return (
    <>
      <div className="StartSpace">
        <button className="btn StartButton" onClick={handleClickMatch}>Start</button>
      </div>
    </>
  );
};

export default Match;