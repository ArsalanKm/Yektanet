import React from 'react';
import TablesBody from './tables-body';
import TableHeader from './tables-header';
import './_styles.scss';

const DataTable = ({ addFavHandler, data, favorits, bst }) => {
  return (
    <table role="table">
      <TableHeader />

      <TablesBody
        bst={bst}
        favorits={favorits}
        addFavHandler={addFavHandler}
        data={data}
      />
    </table>
  );
};

export default DataTable;
