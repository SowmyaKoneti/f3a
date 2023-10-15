import React from 'react';
import Card from '@/components/Card'; // Import the Card component

import styles from '@/pages/About/About.module.scss';

export const About = () => {
  const handleTeamClick = (teamName: string) => {
    // Handle the click event for the team card here
    console.log(`Clicked on ${teamName}`);
  };

  return (
    <div className={styles.About}>
      <h1>Player Availability</h1>
      <p>Click on the respective team card to know the player availability of each team</p>
      <div className={styles['cards-list']}>
        {/* Use the Card component and pass the onClick prop */}
        <Card color="black" onClick={() => handleTeamClick('Team 1')}>
          Team 1
        </Card>
        <Card color="purple" onClick={() => handleTeamClick('Team 2')}>
          Team 2
        </Card>
        <Card color="blue" onClick={() => handleTeamClick('Team 3')}>
          Team 3
        </Card>
        <Card color="orange" onClick={() => handleTeamClick('Team 4')}>
          Team 4
        </Card>
      </div>
    </div>
  );
};

export default About;
