const React = require('react');
const Def = require('./default');

const home = (html) => {
        return (
          <Def>
              <main>
                  <h1>HOME</h1>
                  <div>
                    <img src="C:\Users\fxmoo\Downloads\jaredd-craig-HH4WBGNyltc-unsplash (1).jpg" alt="Book of Knowlegde"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@jareddc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jaredd Craig</a> on <a href="https://unsplash.com/photos/HH4WBGNyltc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                  </div>
                  <a href="/places">
                    <button className="btn-primary">Places Page</button>
                  </a>
              </main>
          </Def>
        )
};

module.exports = home;
