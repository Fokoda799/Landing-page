import Button from "./Button";

const ComingSoonModal = ({ isOpen, featureName, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-n-8 p-6 shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-n-1 hover:text-color-3 cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-color-1/10 text-color-1 text-2xl">
            🚧
          </div>

          <h3 className="text-xl font-semibold mb-2">
            {featureName} is coming soon
          </h3>

          <p className="body-2 text-n-2 mb-6">
            We’re actively working on this feature to deliver the best experience
            possible. Stay tuned!
          </p>

          <div className="flex justify-center gap-4">
            <Button
              onClick={onClose}
              white
            >
              Maybe later
            </Button>

            {/* <button
              onClick={() => {
                onClose();
                // future: email / analytics hook
              }}
              className="rounded-full bg-color-1 px-5 py-2 text-sm font-semibold text-n-1 hover:bg-color-1/90"
            >
              Notify me
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
