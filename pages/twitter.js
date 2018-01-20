import React from 'react';
import Head from './layout/head';
import Person from './components/person';
import Navigation from './components/navigation';
import { Timeline } from 'react-twitter-widgets'

export default () =>
  <div>
    <Head title="Home" />
    <div className="content">
      <Person />
      <Navigation />

      <p>twitter:</p>

      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'inal_karov'
        }}
        options={{
          username: 'inal_karov',
          height: '400',
          width: '500',
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
    </div>

    <style jsx>{`
      .content {
        flex-direction: column;
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
