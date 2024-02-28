/* eslint-disable react/prop-types */
export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal" id={id || "Modal"}>
        {
          <div className="heading">
            <p>{header ? header : "This is a header"}</p>
            <span onClick={onClose}>&times;</span>
          </div>
        }

        {
          <div className="body">
            <p>{body ? body : "This is a body content"}</p>
          </div>
        }

        {
          <div className="footer">
            <p>{footer ? footer : "This is our footer content"}</p>
          </div>
        }
      </div>
    </div>
  );
}
