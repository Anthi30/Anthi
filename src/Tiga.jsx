function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Anthi',
    lastName: 'Daeng salasa'
  };
  
  const element = (
    <h1>
      Assalamualaikum {formatName(user)}
    </h1>
  );

  function Tiga() {
    return (
      element
    );
  }
  
  export default Tiga;
  