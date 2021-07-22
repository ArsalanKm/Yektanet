import React, { useEffect, useState } from 'react';
import DataTable from '../../components/data-table';
import FiltersHeader from '../../components/filters-header';
import { BinarySearchTree as BST } from '../../Utils/bst';
import './_styles.scss';

const data = require('../../data/data.json');

const HomePage = () => {
  const [state, setState] = useState(data);
  const [favs, setFavs] = useState(
    localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : []
  );
  const [bst, setBST] = useState(new BST());

  const [filters, setFilters] = useState({
    userName: '',
    date: '',
    advertName: '',
    field: '',
  });

  useEffect(() => {
    state.forEach((item) => {
      const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
      bst.insert(itemDate, item);
    });

    const url_string = window.location.href;
    const url = new URL(url_string);
    const userName = url.searchParams.get('name')
      ? url.searchParams.get('name')
      : '';
    // const date = url.searchParams.get('date')
    //   ? url.searchParams.get('date')
    //   : '';
    const advertName = url.searchParams.get('advertName')
      ? url.searchParams.get('advertName')
      : '';
    const field = url.searchParams.get('field')
      ? url.searchParams.get('field')
      : '';

    setFilters((prevState) => ({ ...prevState, userName, advertName, field }));
  }, []);

  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   url.searchParams.set('date', filters.date ? filters.date : '');
  //   window.history.replaceState(null, null, url);
  // }, [filters.date]);
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('name', filters.userName ? filters.userName : '');
    url.searchParams.set(
      'advertName',
      filters.advertName ? filters.advertName : ''
    );
    url.searchParams.set('field', filters.field ? filters.field : '');
    window.history.replaceState(null, null, url);

    let temp = data.filter((item) => {
      return (
        item.name?.toLowerCase().startsWith(filters.userName.toLowerCase()) &&
        item.field?.toLowerCase().startsWith(filters.field.toLowerCase()) &&
        item.title?.toLowerCase().startsWith(filters.advertName.toLowerCase())
      );
    });
    setState(temp);
    setFilters((prevState) => ({ ...prevState, date: '' }));
  }, [filters.userName, filters.field, filters.advertName]);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);

  const addFavHandler = (id) => {
    if (!favs.find((item) => item === id)) {
      const temp = [...favs];
      temp.push(id);
      setFavs(temp);
    } else {
      let temp = [...favs];
      temp = temp.filter((el) => el !== id);
      setFavs(temp);
    }
  };

  const onUserNameChange = (userName) => {
    setFilters((prevState) => ({
      ...prevState,
      userName,
    }));
  };

  const onDateChange = (date) => {
    const temp = bst.find(date);
    if (temp && temp.children) {
      setState(temp.children);
    } else {
      setState([]);
    }
    setFilters((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const onAdvertNameChange = (advertName) => {
    setFilters((prevState) => ({
      ...prevState,
      advertName,
    }));
  };

  const onFieldChange = (field) => {
    setFilters((prevState) => ({
      ...prevState,
      field,
    }));
  };

  return (
    <div className="home-page">
      <FiltersHeader
        onAdvertNameChange={onAdvertNameChange}
        onDateChange={onDateChange}
        onFieldChange={onFieldChange}
        onUserNameChange={onUserNameChange}
        filters={filters}
      />
      <DataTable favorits={favs} addFavHandler={addFavHandler} data={state} />
    </div>
  );
};

export default HomePage;
