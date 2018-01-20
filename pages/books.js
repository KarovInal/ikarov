// @flow
import React from 'react';
import Head from './layout/head';
import Person from './components/person';
import Navigation from './components/navigation';

export default () =>
  <div>
    <Head title="Home" />
    <div className="content">
      <Person />
      <Navigation />
      <h1>BOOKS</h1>
    </div>

    <style jsx>{`
      .content {
        flex-direction: column;
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
