import React from 'react'
import MyButton from './MyButton'
import DivPanel from './DivPanel';

const MainPanel = ()=>{
    return (
        // whe create a panel with the two previous created components
        // MyButton and DivPanel, it will be called MainPanel
        <div>
            This is main panel <MyButton></MyButton>
            <DivPanel></DivPanel>
        </div>
    );
}

export default MainPanel;