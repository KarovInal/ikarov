// @flow
import React from 'react';
import Head from './layout/head';
import Person from './components/person';
import Navigation from './components/navigation';
import Books from './components/books';

const BOOKS = [
  {
    cover: 'https://royallib.com/data/images/378/cover_378914.jpg',
    label: 'От нуля к единице как создать стартап который изменит будущее'
  },
  {
    cover: 'https://ozon-st.cdn.ngenix.net/multimedia/1014060099.jpg',
    label: 'Цифровое золото'
  },
  {
    cover: 'https://s.f.kz/prod/358/357531_550.jpg',
    label: 'Бойцовский клуб'
  },
]

export default () =>
  <div>
    <Head title="Home" />
    <div className="content">
      <Person />
      <Navigation />
      <Books books={BOOKS} />
    </div>

    <style jsx>{`
      .content {
        flex-direction: column;
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
