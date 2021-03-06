import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Jersey from '../../../Resources/images/jersey.jpg';

const Animation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <Zoom>
                    <div>
                        <span>Win a</span>
                        <span>Jersey</span>
                    </div>
                </Zoom>
            </div>
            <div className="right">
                <Zoom>
                    <div style={{ background: `url(${Jersey})` }}></div>
                </Zoom>
            </div>
        </div>
    )
}

export default Animation