import * as React from 'react';
import ActiveLink from './active-link';
import { withRouter } from 'next/router'

const Navigation = ({ router }) => {
  const ROUTER_PATH = router.pathname ? router.pathname : '';

  return (
    <div className="navigator-wrap">
      <div>
        <ActiveLink router={router} href="/">{'🏠'}</ActiveLink>
        <ActiveLink router={router} href="/contacts">{'💬'}</ActiveLink>
        <ActiveLink router={router} href="/twitter">{'🤔'}</ActiveLink>
        <ActiveLink router={router} href="/books">{'📚'}</ActiveLink>
      </div>

      <p>{
        (!ROUTER_PATH || ROUTER_PATH === '/' || ROUTER_PATH === '/index')
          ? ''
          : ROUTER_PATH.slice(1)
      }</p>

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
  );
}

export default withRouter(Navigation);
