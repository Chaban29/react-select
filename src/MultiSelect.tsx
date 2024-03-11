import React from 'react';
import { FC } from 'react';
import './app.scss';
import Select, { OnChangeValue } from 'react-select';
import { useState } from 'react';
import { IOption } from './app.interface';
import makeAnimated from 'react-select/animated';

const options: IOption[] = [
  {
    value: 'Ukraine',
    label: 'Ukraine',
  },
  {
    value: 'USA',
    label: 'USA',
  },
  {
    value: 'Spain',
    label: 'Spain',
  },
];

const animatedComponents = makeAnimated();

const MultiSelect: FC = (): JSX.Element => {
  const [currentCountries, setCurrentCountries] = useState(['USA', 'Ukraine']);

  // const isMulti = true;

  const getValue = () => {
    return currentCountries
      ? options.filter((option) => currentCountries.indexOf(option.value) >= 0)
      : [];
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentCountries((newValue as IOption[]).map((v: any) => v.value));
  };

  return (
    <div className='select'>
      <h1 style={{ color: '#323232' }}>Chose Country</h1>
      <Select
        classNamePrefix='custom-select'
        value={getValue()}
        onChange={onChange}
        options={options}
        components={animatedComponents}
        isMulti
        placeholder='Chose Country'
      />
    </div>
  );
};

export default MultiSelect;
