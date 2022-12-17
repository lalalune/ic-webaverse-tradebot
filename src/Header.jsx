// react header component that takes two props: mode and setMode
// has a centered logo (assets/Logo.svg) and two mode toggle buttons
// the button on the left sets mode to back, and uses the assets/Inventory.svg icon
// the button on the right sets mode to Trade, and uses the assets/Trade.svg icon

import React from 'react'
import Logo from './assets/Logo.svg'
import Console from './assets/Console.svg'
import Inventory from './assets/Inventory.svg'
import Trade from './assets/Trade.svg'

const Header = ({ type, connected, mode = 'inventory', setMode }) => {
  return (
    <div style={{
      width: '100%',
      height: '4em',
    }}>
      <img src={type === 'webaverse' ? Logo : Console} style={{
        position: 'absolute',
        left: '50%',
        top: '1em',
        transform: 'translate(-50%, 0)',
      }} />
      {connected &&
        <button
          style={{
            position: 'absolute',
            opacity: mode === 'inventory' ? 1 : 0.5,
            left: '1em',
            top: '1em',
          }}
          onClick={() => setMode('inventory')}
        >
          <img src={Inventory} />
        </button>
      }
      {connected &&
        <button
          style={{
            position: 'absolute',
            opacity: mode === 'trade' ? 1 : 0.5,
            right: '1em',
            top: '1em',
          }}
          onClick={() => setMode('trade')}
        >
          <img src={Trade} />
        </button>
      }
    </div>
  )
}

export default Header
