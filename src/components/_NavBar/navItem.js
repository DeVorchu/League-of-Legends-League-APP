import React from 'react';
import { Link } from 'react-router-dom';
import { LinkItems } from '../../styles/components/header/navbar';

export default function navItem({text, link}) {
  return (
    <LinkItems>
        <Link to={link}> {text} </Link>
    </LinkItems>
  );
}
