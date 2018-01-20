// @flow

import * as React from 'react';

type IContact = {
  id: number,
  link: string,
  icon: string,
};

const CONTACT_DATA_LIST: Array<IContact> = [
  {
    id: 0,
    link: 'http://t.me/ikarov',
    icon: '/static/icons/telegram.svg'
  },
  {
    id: 1,
    link: 'https://www.instagram.com/inal_karov/',
    icon: '/static/icons/instagram.svg'
  },
  {
    id: 2,
    link: 'https://twitter.com/inal_karov',
    icon: '/static/icons/twitter.svg'
  }
]

const ContactList = (contactDataList) => () =>
  <div className="contacts-wrap">
    {
      contactDataList.map(({ link, icon, id }) => (
        <a href={ link } target="_blank" key={ id }>
          <img src={ icon } style={{ height: '40px', width: 'auto' }} />
        </a>
      ))
    }

    <style jsx>{`
      .contacts-wrap {
        display: flex;
      }

      a {
        margin: 0 10px;
      }
    `}</style>
  </div>

export default ContactList(CONTACT_DATA_LIST);
