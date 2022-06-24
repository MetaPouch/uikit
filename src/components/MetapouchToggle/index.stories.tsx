import React, { useState } from 'react';
import MetapouchToggle from './MetapouchToggle';

export default {
  title: 'Components/MetapouchToggle',
  component: MetapouchToggle
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: '32px' }}>
        <MetapouchToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: '32px' }}>
        <MetapouchToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <MetapouchToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
