import React, { useState } from "react";
import "./Cat.styles.css";
import { FaThumbsUp, FaThumbsDown, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCat } from "../../store/actions/actions";

interface IProps {
  img: string;
  id: string;
}

type sizeT = 50 | 200 | 350;

const Cat = ({ img, id }: IProps) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [size, setSize] = useState<sizeT>(200);

  return (
    <div className="cat-box">
      <div className="sizes-wrapper">
        <button onClick={() => setSize(50)}>small</button>
        <button onClick={() => setSize(200)}>medium</button>
        <button onClick={() => setSize(350)}>large</button>
      </div>
      <img width={size} src={img} alt="catImage" />
      <div className="icon-wrapper">
        {!isLiked ? (
          <FaThumbsUp
            className="icon thumb-up-icon"
            onClick={() => setIsLiked(true)}
          />
        ) : (
          <FaThumbsDown
            className="icon thumb-down-icon"
            onClick={() => setIsLiked(false)}
          />
        )}
        <FaTrash
          onClick={() => dispatch(removeCat(id))}
          className="icon trash-icon"
        />
      </div>
    </div>
  );
};

export default Cat;
