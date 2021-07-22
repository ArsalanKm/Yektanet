import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { isMobile } from 'react-device-detect';
import './_styles.scss';

const TablesBody = ({ data, addFavHandler, favorits }) => {
  const renderRow = ({ index, style }) => {
    const item = data[index];

    return (
      <tr style={style} className="table-row" key={item.id}>
        <td className="id">{item.id}</td>
        <td className="userName">{item.name}</td>
        <td className="date">{item.date}</td>
        <td className="advertName">{item.title}</td>
        <td className="field">{item.field}</td>
        <td className="old-value">{item.old_value}</td>
        <td className="new-value">{item.new_value}</td>
        <td className="favorite">
          <div onClick={() => addFavHandler(item.id)}>
            <span
              style={{
                color: !favorits.find((el) => el === item.id) ? 'green' : 'red',
                cursor: 'pointer',
              }}
            >
              {!favorits.find((el) => el === item.id) ? 'افزودن' : '‌حذف کردن'}
            </span>
          </div>
        </td>
      </tr>
    );
  };
  return (
    <tbody>
      <List
        style={{
          direction: 'rtl',
          width: '100% !important',
        }}
        height={900}
        width={800}
        itemSize={isMobile ? 550 : 70}
        itemCount={data.length}
      >
        {renderRow}
      </List>
    </tbody>
  );
};

export default TablesBody;
