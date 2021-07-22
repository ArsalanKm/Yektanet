import React from 'react';
import TextInput from '../common/inputs/text-input';
import './_styles.scss';

const FiltersHeader = ({
  onUserNameChange,
  onAdvertNameChange,
  onFieldChange,
  onDateChange,
  filters,
}) => {
  const filterItems = [
    {
      key: 1,
      value: filters.userName,
      lable: 'نام تغییر دهنده',
      placeHolder: 'نام تغییر دهنده  را وارد کنید',
      onChanged: onUserNameChange,
    },
    {
      key: 2,
      value: filters.date,
      lable: 'تاریخ',
      placeHolder: ' تاریخ تغییر را وارد کنید',
      type: 'date',
      onChanged: onDateChange,
    },
    {
      key: 3,
      value: filters.advertName,

      lable: ' نام آگهی ',
      placeHolder: 'نام آگهی را وارد کنید',
      onChanged: onAdvertNameChange,
    },
    {
      key: 4,
      value: filters.field,

      lable: 'فیلد',
      placeHolder: 'قیمت/عنوان',
      onChanged: onFieldChange,
    },
  ];
  return (
    <div className="filters-header">
      {filterItems.map((item) => {
        return (
          <TextInput
            key={item.key}
            placeholder={item.placeHolder}
            label={item.lable}
            onChanged={item.onChanged}
            type={item.type}
            value={item.value}
          />
        );
      })}
    </div>
  );
};

export default FiltersHeader;
