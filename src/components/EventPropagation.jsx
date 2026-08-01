import "./EV.css";

export const EventPropagation = () => {
  

  const handleGrandParent = () => {
    console.log("Grand Parent Clicked");
  };

  const handleParentClick = () => {
    console.log("Parent Clicked");

    
  };

  const handleChildClick = (event) => {
       console.log(event);
  event.stopPropagation();
  console.log("child clicked");
    console.log("Child Clicked");
 
  };

  return (
    <section>
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Button
          </button>
        </div>
      </div>
    </section>
  );
};