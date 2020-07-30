'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user__info'>
    <img src='https://avatars3.githubusercontent.com/u/847441?v=4' />

    <h1 className='username'>
      <a href='https://github.com/gabrielbradoki'>Gabriel Araujo</a>
    </h1>

    <ul className='repos__info'>
      <li>Repositórios: 122</li>
      <li>Seguidores: 10</li>
      <li>Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo
