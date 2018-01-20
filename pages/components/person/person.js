// @flow

import * as React from 'react';
import styles from './style';

type IPropsPerson = {
  avatar: string,
  name: string,
  profession: string,
  skils: string
};

const personData: IPropsPerson = {
  avatar: 'https://avatars3.githubusercontent.com/u/11422713?s=400&u=1a40f538c53a77f0f6667ddbad0602d80932162b&v=4',
  name: 'inal karov',
  profession: 'front-end developer:',
  skils: 'React / Redux / Flow'
}

const Person = (props: IPropsPerson) => {
  const { avatar, name, profession, skils } = props;

  return () => 
    <div className="person-wrap">
      <img className="person-avatar" src={ avatar } />
      <p className="person-name">{ name }</p>
      <p>{ profession }</p>
      <p>{ skils }</p>

      <style jsx>{ styles }</style>
    </div>
};

export default Person(personData);
