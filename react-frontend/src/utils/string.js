import React from 'react';

export const lineBreakText = text => {
  if (!text) return [];
  return text.split('\n').map((v, i) => {
    return v.length === 0 ? <br key={i} /> : <p key={i}>{v}</p>
  })
};