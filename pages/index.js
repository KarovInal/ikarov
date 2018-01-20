// @flow
import React from 'react';
import Head from './layout/head';
import Person from './components/person';

export default () =>
  <div>
    <Head title="Home" />
    <div className="person">
      <Person />
    </div>

    <style jsx>{`
      .person {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
