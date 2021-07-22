import React from 'react';
import { HeaderCells } from '../data';
import './_styles.scss';
const TableHeader = () => {
  return (
    <thead>
      <tr role="row">
        {HeaderCells.map((hCell, index) => {
          return (
            <th role="columnheader" className={hCell.name} key={index}>
              {hCell.text}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
