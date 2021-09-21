import React, { PureComponent } from 'react'
import { Copyright } from './copyright.js'

class Footer extends PureComponent {
  render() {
    return (
      <>
        <footer>
          <section className='container'>
            <Copyright key='copyright' language = { this.props.currentLanguage }/>
          </section>
        </footer>
      </>
    );
  }
}

export { Footer }
