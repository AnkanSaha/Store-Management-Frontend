export default function Connection() {
  return (
    <>
      <input type="checkbox" defaultChecked id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Connection Error! Please check your internet connection.
          </h3>
          <p className="py-4">
            You are currently offline. Please check your internet connection and
            try again.
          </p>
        </label>
      </label>
    </>
  );
}
