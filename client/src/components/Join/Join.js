import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="Box">
        <h1 className="heading">Join Room</h1>
        <div className="inputbox2">
        <i class="fa fa-user colorWhite" aria-hidden="true"></i>
          <input placeholder="Name"  type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="inputbox2 mt-20">
        <i class="fa fa-home colorWhite" aria-hidden="true"></i>
        <input placeholder="Room"  type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
    </div>
  );
}
