const User = ({img,name,age,isMarried})=>{
  return (
    <section>
      <img src={img} alt="User Profile Picture" width="200" style={{border:"solid 2px black"}}/>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Maritial Status: {isMarried? "Married":"Single"}</h2>
    </section>
  );
}
export default User;