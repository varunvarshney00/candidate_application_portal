// Loading component to display a loading spinner while data is being fetched

const Loading = () => {
  return (
    <div className="loading-container">
      {/* Two divs create the effect of a loading spinner */}
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
