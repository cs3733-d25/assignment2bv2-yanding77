// src/components/Form.tsx
import React from 'react';

const Form2: React.FC = () => {
    return (
    <form>
        <label htmlFor="name">Enter Map Name: </label>
        <input type="text" id="name"/>
        <br/>
        <label htmlFor="mode">Enter Mode Name: </label>
        <input type="text" id="mode"/>
        <br/>
        <br/>
        <label htmlFor="Turf War">Turf War </label>
        <input type="checkbox" id="Turf War"/>
        <br/>
        <label htmlFor="Zones">Splat Zones </label>
        <input type="checkbox" id="Zones"/>
        <br/>
        <label htmlFor="TC">Tower Control </label>
        <input type="checkbox" id="TC"/>
        <br/>
        <label htmlFor="RM">Rainmaker </label>
        <input type="checkbox" id="RM"/>
        <br/>
        <label htmlFor="CB">Clam Blitz </label>
        <input type="checkbox" id="CB"/>
        <br/>
        <label htmlFor="mapsizes">Small </label>
        <input type="radio" id="mapsizes" name="mapsize"/>
        <br/>
        <label htmlFor="mapsizem">Medium </label>
        <input type="radio" id="mapsizem" name="mapsize"/>
        <br/>
        <label htmlFor="mapsizel">Large </label>
        <input type="radio" id="mapsizel" name="mapsize"/>
        <br/>
        <label htmlFor="Comments">Comments
        </label>
        <br />
        <label htmlFor = "submit">Submit Button </label>
        <button type="submit" id = "submit">Submit</button>
    </form>
    );
}

export default Form2;
