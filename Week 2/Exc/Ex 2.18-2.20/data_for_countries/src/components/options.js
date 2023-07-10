
const Options = ({ filtered }) => {
    if (filtered.length === 1) {
        return (
            filtered.map((country) => {
                <div>
                    <h2>
                        {country.name.common}
                    </h2>
                    <p>capital {country.capital.map((caps) => {<li>{caps}</li>})}</p>
                    <p>area {country.area}</p>
                </div>
            }) // continue this app later
        )}
    else if (filtered.length < 11) {
        return (
            filtered.map((country) => {                
            <div>
                <p>
                    {country.name.common}
                </p>
            </div>
            })
        )}
    else if (filtered.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )}
    else {
        return (
            <div>
                <p>No matches found</p>
            </div>
        )}
}