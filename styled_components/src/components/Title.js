const TitleOrange = ({user}) => {
  const color = 'orange'; // destructuring value by value
  return(
    <h1 className="title" style={{color: color}}>Hello {user}</h1>
  );
}

const TitleBlue = (props) => {
  const name = props.user; // using props without destructuring
  const color = 'blue';
  return(
    <h1 className="title" style={{color: color}}>Hello {name}</h1>
  );
}

const TitleGray = ({user, age, color}) => {
  return(
    <>
      <h1 className="title" style={{color: color}}>Hello {user}</h1>
      <p>I'm {age} years old.</p>
    </>
  );
}

const Title = ({user = 'user', color = 'green'}) => { // dynamic
  return(
    <h1 className="title" style={{color: color}}>Hello {user}</h1>
  );
}

export {TitleOrange, TitleBlue, TitleGray, Title};