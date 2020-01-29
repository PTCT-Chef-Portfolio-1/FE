import React, { useState } from 'react';
import styled from 'styled-components';

export default function video() {
    const Video = styled.video`
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 1;
    transform: translateX(-50%) translateY(-50%);
    `
    return (
        <Video src={require('../images/food.mp4')} loop autoPlay> </Video>
    )
}