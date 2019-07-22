import React from 'react'

const TableBody = props => {
    const rows = props.CharacterData.map((row,index)=>{
        return(
            <tr>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick = {()=>props.removeCharacter(index)}>delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
    
}
export default TableBody;