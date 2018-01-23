import * as React from 'react';

interface ParentProps {
    onFather: () => void;
    onMother: () => void;
}

export const ParentComponent: React.SFC<ParentProps> = props => (
  <div className="main" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
    <div
      style={{display: 'flex', backgroundColor: 'red', cursor: 'pointer'}}
      onClick={(e) => {e.preventDefault(); props.onFather(); }}
    >Father
    </div>
    <div
      style={{display: 'flex', backgroundColor: 'red', cursor: 'pointer'}}
      onClick={(e) => {e.preventDefault(); props.onMother(); }}
    >Mother
    </div>
  </div>
);
