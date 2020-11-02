import React from "react";
import {IBiography} from "../interfaces/iBiography";
import Biography from "./Biography";

const Biographies: React.FC<{biographies:  IBiography[]}> = ({biographies}: {biographies:  IBiography[] }) => {
    return (
        <div>
            {
                biographies.map((biography, index) => <Biography key={`biography${index}`} {...biography} />)
            }
        </div>
    )
}

export default Biographies