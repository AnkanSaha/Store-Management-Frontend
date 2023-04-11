// This component is used to show a modal when the user is offline

// TypeScript interface for the props
interface Props {
  Title: string;
  Message: string;
}

export function Connection_Fail({ Title, Message }: Props) {
  return (
    <>
      <input
        type="checkbox"
        defaultChecked
        id="my-modal-3"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{Title}</h3>
          <p className="py-4">{Message}</p>
        </div>
      </div>
    </>
  );
} // This component is used to show a modal when the user is online

Connection_Fail.defaultProps = {
  Title: "Connection Error! Please check your internet connection.",
  Message:
    "You are currently offline. Please check your internet connection and try again.",
};
