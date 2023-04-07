// This component is used to show a modal when the user is offline
export function Connection_Fail() {
  return (
    <>
      <input type="checkbox" defaultChecked id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
          Connection Error! Please check your internet connection.
          </h3>
          <p className="py-4">
          You are currently offline. Please check your internet connection and
            try again.
          </p>
        </div>
      </div>
    </>
  );
} // This component is used to show a modal when the user is online
