import React from 'react';
import { color } from '../utils';
import { useRecoilState } from 'recoil';
import { cellAtom } from './atoms';

export default function EditableCell({ x, y }) {
  const [value, setValue] = useRecoilState(cellAtom(x, y));
  const backgroundColor = `#${color(x, y)}`;

  return (
    <div
      style={{
        width: '40px',
        display: 'inline-block',
        backgroundColor,
        padding: '8px',
        margin: 0,
        textAlign: 'center',
      }}
      onMouseEnter={() => setValue(Math.floor(Math.random() * 100))}
    >
      {value}
    </div>
  );
}
