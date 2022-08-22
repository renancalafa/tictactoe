import { memo } from 'react';

const Button = ({ index, onClick, children }) => {
    console.log('first')
    return (
        <div className="grid-item" onClick={() => onClick(index)}>{children}</div>
    );
}
 
export default memo(Button);
