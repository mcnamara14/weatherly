import React from 'react';
import Location from './Location';
import ErrorHandler from './ErrorHandler';

export default function WelcomePage(props) {

  return (
    <main>
      <ErrorHandler />
      <section className="welcomeBox">
          <div>
            <h1>Weathrly</h1>
            <p>Enter a location to view the forecast</p>
            <Location updateLocation={props.updateLocation} toggleWelcome={props.toggleWelcome} />
            </div>
      </section>
    </main>
  );
}