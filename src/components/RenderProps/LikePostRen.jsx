import React from 'react';
import RenderProp from './Renderprop';

const LikePostRen = () => {
    return (
        <RenderProp>
            {
                ({ count, handleCount }) => (
                    <div>
                        <button onClick={handleCount}>Like Post Render {count}</button>
                    </div>
                )
            }
        </RenderProp>
    )
}

export default LikePostRen;
