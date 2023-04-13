// This component is used to show a modal when the user is offline

// TypeScript interface for the props
interface Props {
  Title: string;
  Message: string;
  ButtonText: string;
}

export function Connection_Fail({ Title, Message, ButtonText }: Props) {
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-6"
        defaultChecked
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{Title}</h3>
          <p className="py-4">{Message}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              {ButtonText}
            </label>
          </div>
        </div>
      </div>
    </>
  );
} // This component is used to show a modal when the user is online

Connection_Fail.defaultProps = {
  Title: "Connection Error! Please check your internet connection.",
  Message:
    "You are currently offline. Please check your internet connection and try again.",
  ButtonText: "Close"
};
