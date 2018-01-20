// @flow
import * as React from 'react';
import { withRouter } from 'next/router'

type IPropsActiveLink = {
  href: string,
  router: any,
  children?: React.Node 
};

const ActiveLink = ({ href, router, children }: IPropsActiveLink) => {
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const ROUTER_PATH = router.pathname ? router.pathname : '/';

  const isActive = ROUTER_PATH === href ? 'solid white 2px' : '';

  return (
    <label>
      <a href="#" onClick={handleClick}>{ children }</a>
      <style jsx>{`
        a {
          border-bottom: ${ isActive }
        }
      `}</style>
    </label>
  )
}

export default withRouter(ActiveLink);
