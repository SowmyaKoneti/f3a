import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/Card'; // Correct import statement

import styles from '@/pages/NotFound/NotFound.module.scss';

export const NotFound = () => (
  <div className={styles.NotFound}>
    {/* Use the Card component here */}
    <Card color="red">404 - Page Not Found</Card>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
