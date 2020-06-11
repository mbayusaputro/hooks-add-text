import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionSave } from "./action";

export default (props) => {
  const isData = useSelector(state => state.user.isData);
  const dispatch = useDispatch();
  const [isText, setText] = useState('')
  const onSave = () => {
    actionSave(dispatch, isText)
  }

  return (
    <div>
      <input type="text" placeholder="type here..." value={isText} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => onSave()}>Save</button>
      {isData && isData.map((item, i) => {
        return (
          <p key={i}>{item}</p>
        )
      })}
    </div>
  );
}