// This file used to be 100% identical to src/Components/Most Used Components/Connection Fail.tsx. This is a good example of how to use the same component for multiple purposes. This component is used to show a modal when the user is online

// Assigning the default props to the component
type AlertProps = {
    Title: string;
    Message: string;
    ButtonText?: string;
  };
  
  export function Alert({ Title, Message, ButtonText }: AlertProps) {
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
  } // This component is used to show a modal when alerting the user
  
  Alert.defaultProps = {
    Title: "Alert",
    Message: "This is an alert",
    ButtonText: "Close",
  };