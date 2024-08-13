import React from 'react'
import BaseButton from './BaseButton';
export default function B7() {
  return (
    <div>
    <b>B7</b> 
        <BaseButton type="primary">Primary</BaseButton>
        <BaseButton type="success">Success</BaseButton>
        <BaseButton type="warning">Warning</BaseButton>
        <BaseButton type="danger">Danger</BaseButton>
    </div>
  )
}
