//name and age props
// age > 18  "please go vote!" <h3>
// age < 18  "you must be 18"<h3>
// name > 8 characters, only display six

//add hobbies props


const Person = (props) => {

let reply;

if (props.age < 18) {
    reply = "You must be 18!"
} else (props.age < 21){
    reply = "Please go vote!"
}   

let hobbies = props.hobbies.map(hobbies =>
    (<li>{hobbies}</li>)
    )

return (
<div>
    About Person:
   <p> Name:{props.name} </p>
   <p> Age: {props.age} </p>
   <p> Hobbies: {hobbies} </p>
    <h3>{reply}</h3>
</div>
)

}