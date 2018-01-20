import * as React from 'react';
import ActiveLink from './active-link';

const Navigation = () =>
  <div className="navigator-wrap">
    <ActiveLink href="/">{'🏠'}</ActiveLink>
    <ActiveLink href="/contacts">{'💬'}</ActiveLink>
    <ActiveLink href="/twitter">{'🤔'}</ActiveLink>
    <ActiveLink href="/books">{'📚'}</ActiveLink>
    <style jsx>{`
      .navigator-wrap {
        max-width: 200px;
        display: flex;
        justify-content: center;
      }
      :global(.navigator-wrap a) {
        text-decoration: none;
        margin: 0 5px;
      }
    `}</style>
  </div>

export default Navigation;
