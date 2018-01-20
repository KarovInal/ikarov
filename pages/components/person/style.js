import css from 'styled-jsx/css';

export default css`
  p { margin: 5px; }

  .person-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    widht: 100%;
    font-size: 18px;
    font-weight: 100;
  }

  .person-avatar {
    width: 140px;
    height: 140px;
    margin-bottom: 20px;
    border-radius: 50%;
    border: solid rgba(256, 256, 256, .1) 10px;
    cursor: pointer;
  }

  .person-name {
    font-weight: 900;
  }
`