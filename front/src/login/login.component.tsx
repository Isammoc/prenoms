import * as React from 'react';

interface LoginProps {
    onFather: () => void;
    onMother: () => void;
}

export const LoginComponent: React.SFC<LoginProps> = props => (
  <div className="main" style={{display: 'flex', justifyContent: 'center'}}>
    <div
      style={{
        display: 'flex',
        flex: 1,
        cursor: 'pointer',
        flexDirection: 'column'}}
      onClick={(e) => {e.preventDefault(); props.onFather(); }}
    >
      <img src={require('./father.svg')} />
      <p>Papa</p>
    </div>
    <div
      style={{
        display: 'flex',
        flex: 1,
        cursor: 'pointer',
        flexDirection: 'column'}}
      onClick={(e) => {e.preventDefault(); props.onMother(); }}
    >
      <img src={require('./mother.svg')} />
      <p>Maman</p>
    </div>
  </div>
);
