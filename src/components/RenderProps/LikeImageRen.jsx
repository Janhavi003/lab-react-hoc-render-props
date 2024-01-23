import React from 'react';
import RenderProp from './Renderprop';

const LikeImageRen = () => {
    return (
        <RenderProp>
            {
                ({ count, handleCount }) => (
                    <div>
                        <button onClick={handleCount}>Like Image Render {count}</button>
                    </div>
                )
            }
        </RenderProp>
    )
}

export default LikeImageRen;
