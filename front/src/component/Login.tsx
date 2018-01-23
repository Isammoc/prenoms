import * as React from 'react';

interface LoginProps {
    onFather: () => void;
    onMother: () => void;
}

export const Login: React.SFC<LoginProps> = props => (
  <div className="main">
    <div onClick={(e) => {e.preventDefault(); props.onFather(); }}>Father</div>
    <div onClick={(e) => {e.preventDefault(); props.onMother(); }}>Mother</div>
  </div>
);
