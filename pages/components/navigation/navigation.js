import * as React from 'react';
import ActiveLink from './active-link';

const Navigation = () =>
  <div className="navigator-wrap">
    <div>
      <ActiveLink href="/">{'🏠'}</ActiveLink>
      <ActiveLink href="/contacts">{'💬'}</ActiveLink>
      <ActiveLink href="/twitter">{'🤔'}</ActiveLink>
      <ActiveLink href="/books">{'📚'}</ActiveLink>
    </div>

    <style jsx>{`
      .navigator-wrap {
        max-width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        margin-top: 40px;
        margin-bottom: 40px;
      }
      :global(.navigator-wrap a) {
        text-decoration: none;
        margin: 0 5px;
      }
  `}</style>
  </div>

export default Navigation
