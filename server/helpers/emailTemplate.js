
/**
 *
 * @param  {string} url
 * @param  {string} urlText
 * @param  {string} message
 * @return {string} html
 */
export default (url, urlText, message) => {
  let template =
    `
    <html>
    <head>
      <style>
        .btn {
          text-decoration: none;
          color: #fff;
          background-color: #0275d8;
          text-align: center;
          letter-spacing: .5px;
          -webkit-transition: .2s ease-out;
          transition: .2s ease-out;
          cursor: pointer;
          padding: 8px 25px;
          margin: 10px 0px;
          display: inline-block;
          border-radius: 3px;
          margin: 15px 30px;
          font-family: sans-serif;
        }

        .header {
          font-size: 30px;
          display: inline-block;
          text-decoration: none;
          color: #0275d8;
          font-family: sans-serif;
          margin: 30px
        }

        .header > span > span {
          font-size: 15px;
          margin-left: 5px;
          text-transform: uppercase;
          border-bottom: 3px solid #0275d8;
          display: inline;
          position: relative;
          top: -7px;
          font-weight: bolder;
          vertical-align: super;
        }

        .message{
          margin: 10px 30px;
          font-family: sans-serif;
          font-size: 18px;
          line-height: 30px;
        }
      </style>
    </head>
      <body>
        <div class="header">
          <span>Post<span>It</span></span>
        </div>
        <div class="message">
          ${message}
        </div>`;

  if (url !== null || urlText !== null) {
    template += `
      <a href="${url}" class="btn">${urlText}</a>`;
  }

  template += `
    </body>
  </html>
  `;

  return template;
};
