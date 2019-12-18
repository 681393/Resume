import React from 'react';
import { Table } from 'react-bootstrap';

function WorkExperienceElement(props) {
    const workExp = props.workexperience.map(e => <tr>
        <th className="bg-info">{e.key}</th>
        <td>{e.value.length == 1 ? e.value : e.value.map(e1 => <ul><li>{e1}</li></ul>)}</td>
    </tr>);
    
    return(
           <>
            <Table bordered> 
                  { workExp }
            </Table>
            <br/>
            </>);
}

export default WorkExperienceElement;