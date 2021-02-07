// import React, {useState} from 'react'

// const teams_data = [
//     "tottenham",
//     "arsenal",
//     "man utd",
//     "liverpool",
//     "chelsea",
//     "west ham"
//   ];
  
//   function FilterName( {people} ) {
//     const [teams, setTeams] = useState(teams_);
//     const [search, setSearch] = React.useState("");
  
//     return (
//       <div className="App">
//         <input
//           onChange={e => {
//             const test = teams.filter(team => {
//               return team.toLowerCase().includes(e.target.value.toLowerCase());
//             });
//             console.log("test: ", test);
  
//             // uncomment line below and teams is logged as I want
//             setTeams(test);
//             setSearch(e.target.value);
//           }}
//           type="text"
//           value={search}
//         />
//         {teams.map(team => (
//           <p>{team}</p>
//         ))}
//       </div>
//     );
//   }