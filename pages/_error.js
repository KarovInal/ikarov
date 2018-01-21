import * as React from 'react';
import Head from './layout/head';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <div className="content">
          {
            this.props.statusCode
              ? `🤦 ${this.props.statusCode}...`
              : `An error on client`
          }
        </div>
        <style jsx>{`
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 40px;
          }
        `}</style>
      </div>
    )
  }
}

export default Error;
