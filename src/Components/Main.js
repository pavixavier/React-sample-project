import React from 'react';

export const Main = (props) => {
    return{
        <div>
            <h1>This is from main</h1>
            <button onClick={() => props.changeUserName('Aneeja Francis')}>Change Name</button>
        </div>
    };
};