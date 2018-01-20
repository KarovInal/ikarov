// @flow
import React from 'react';
import Head from './layout/head';
import Person from './components/person';
import Navigation from './components/navigation';
import ContactList from './layout/contact-list';

export default () =>
  <div>
    <Head title="Home" />
    <div className="content">
      <Person />
      <Navigation />
      <ContactList />
    </div>

    <style jsx>{`
      .content {
        flex-direction: column;
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
