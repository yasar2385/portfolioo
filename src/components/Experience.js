import React from 'react';

export const scrollToSection = (id) => {
  console.log("scrollToSection");
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};