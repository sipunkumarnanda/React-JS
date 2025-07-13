import { useState } from "react";

const Counter = () => {
  const apple = 10;
  const [leftApples, setLeftApples] = useState(apple);
  const [rightApples, setRightApples] = useState(0);

  const moveRight = () => {
    if (leftApples > 0) {
      setLeftApples(leftApples - 1);
      setRightApples(rightApples + 1);
    }
  };
  const moveLeft = () => {
    if (rightApples > 0) {
      setLeftApples(leftApples + 1);
      setRightApples(rightApples - 1);
    }
  };

  return (
    <>
      <div className="flex justify-around items-center w-[50%] text-2xl">
        <div>
          <p>{leftApples} {leftApples > 1 ? "Apples" : "Apple"}</p>
          <h1>Basket 1</h1>
        </div>
        <div className="flex flex-col gap-1">
          <button
            onClick={moveRight}
            className="pt-2 pb-2 pl-5 pr-5 bg-green-500 rounded cursor-pointer hover:bg-green-600"
          >
            <i className="ri-arrow-right-line"></i>
          </button>

          <button
            onClick={moveLeft}
            className="pt-2 pb-2 pl-5 pr-5 bg-amber-400 rounded cursor-pointer hover:bg-amber-500"
          >
            <i className="ri-arrow-left-line"></i>
          </button>
        </div>
        <div>
          <p>{rightApples} {rightApples > 1 ? "Apples" : "Apple"}</p>
          <h1>Basket 2</h1>
        </div>
      </div>
    </>
  );
};

export default Counter;
