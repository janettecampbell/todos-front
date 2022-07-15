import NavBar from "../layout/NavBar";

const Home = (props) => {
  return (
    <div>
      <NavBar user={props.user} />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
