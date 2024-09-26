import { useNavigate } from "react-router-dom";
import "./Model.scss";

const Model = ({children}) => {

  const navigate = useNavigate();
  function closeHandler(){
    navigate('/');

  }
  return (
    <>
      <div className="backdrop" onClick={closeHandler} />
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
};

export default Model;
