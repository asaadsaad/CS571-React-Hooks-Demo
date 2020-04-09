import React, { useContext, useRef } from "react";
import { DataContext } from "./DataContext";

/*
If a function component wrapped in React.memo 
has a useState or useContext Hook in its implementation, 
it will still rerender when state or context change.
Increasing Comments will lead to re-render!
Solution:
- Better to use Redux in this situation, to subscribe to one piece!
- Split state (one for likes, one for comments)
*/
export const Likes = React.memo(() => {
  const { likes } = useContext(DataContext);
  const renders = useRef(0);
  return (
    <div>
      <div>number of likes: {likes}</div>
      <div>Likes component renders: {renders.current++}</div>
    </div>
  );
});
