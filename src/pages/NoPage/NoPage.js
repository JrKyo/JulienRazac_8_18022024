import React from 'react';
import "./NoPage.scss";

export default function NoPage() {
  return (
    <div class="body_nopage">
      <p class="error">404</p>
      <p class="oups">Oups! La page que vous demandez n'existe pas.</p>
      <a href='/'>Retourner sur la page d'accueil</a>
    </div>
  )
}
