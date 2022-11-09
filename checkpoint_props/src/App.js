import Profile from './profile/Profile'
import Micar from './Assets/Micar.jpg'
import Profile2 from './profile/Profile2'
function App() {
  const big ={
    border:"5px black solid",
    borderRadius: "5%",
  }
  return (
    <>
    <div style={big}>

      <Profile/>
      <br/>
      <Profile2 
          fullName="Micar Ibda"
          bio="One of the strongest athletes in the world in the field of bodybuilding and swimming. he has won the international 50 meter swimming championship 5 times.
          He has now become a sports coach."
          profession="Professional trainer"
      >{Micar}</Profile2>

    </div>
    
    </>
  );
}

export default App;
