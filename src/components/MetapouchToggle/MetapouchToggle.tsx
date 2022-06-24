import React from 'react';
import { MetapouchStack, MetapouchInput, MetapouchLabel } from './StyledMetapouchToggle';
import { MetapouchToggleProps, scales } from './types';

const MetapouchToggle: React.FC<MetapouchToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <MetapouchStack scale={scale}>
    <MetapouchInput id={props.id || 'pancake-toggle'} scale={scale} type="checkbox" checked={checked} {...props} />
    <MetapouchLabel scale={scale} checked={checked} htmlFor={props.id || 'pancake-toggle'}>
      <div className="pancakes">
        <div className="pancake" />
        <div className="pancake" />
        <div className="pancake" />
        <div className="butter" />
      </div>
    </MetapouchLabel>
  </MetapouchStack>
);

export default MetapouchToggle;
