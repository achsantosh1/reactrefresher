import "./Model.scss";

const Model = ({onClose, children}) => {
  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
};

export default Model;
