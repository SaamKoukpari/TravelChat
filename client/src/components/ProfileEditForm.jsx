import React, { useState } from 'react';

export default function Form(props) {
  return (
      <div>
        <textarea
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="prop.description"
        />
      </div>
  )
}