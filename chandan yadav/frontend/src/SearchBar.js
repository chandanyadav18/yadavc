import React, {useState} from 'react'


 const [searchInput, setSearchInput] = useState("");

 
 const company = () => {
   const [people, setPeople] = useState([]);
 
   useEffect(() => {
     const fetchData = async () => {
       const req = await axios.get("/tinder/cards");
       setPeople(req.data);
     };
     fetchData();
   });

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    company.filter((value) => {
    return value.name.match(searchInput);
});
}

return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    <th>value</th>
    <th>Continent</th>
  </tr>

{company.map((value, *index*) => {

<div>
  <tr>
    <td>{value.name}</td>
    <td>{value.continent}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default searchBar;