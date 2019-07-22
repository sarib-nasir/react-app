import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
class Table extends Component {
    render() {
        const { CharacterData , removeCharacter } = this.props
        return (
            //simple component
           
            <table>
                <TableHeader />
                <TableBody CharacterData ={CharacterData} removeCharacter = {removeCharacter} />
            </table>
        )
    }
}
export default Table;