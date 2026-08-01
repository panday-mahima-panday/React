export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    alert(`Hey, thanks for hovering me`);
  };

  return (
    <>
      <Welcome 
        onClick={() => handleWelcomeUser("mahi")} 
        onMouseEnter={handleHover}
      />
    </>
  );
};

// Child Component (must start with capital letter)
const Welcome = (props) => {
  const handleGreeting = () => {
    console.log(`Hey user, Welcome`);
    props.onClick();
  };

  return (
    <>
      <button onClick={props.onClick}>Click Me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting Me</button>
    </>
  );
};