import React from 'react';

function PersonalDetailsElement(props) {
    const wordWrap = {wordWrap:'break-word'};
    return (
        <>
            <tr>
                <th width="30%">{props.personalDetail.key}</th>
                <td>{props.personalDetail.value}</td>
            </tr>
        </>);
}
export default PersonalDetailsElement;