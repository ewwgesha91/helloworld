import PopExit from "../../components/Popups/PopExit";

export default function ExitPage({setLogin}) {
  function logOut() {
    setLogin(false);
  }

  return (
    <PopExit logOut={logOut} />
  )
}