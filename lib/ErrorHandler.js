import React from 'react';

export default function ErrorHandler() {

  return (
    <section className="errorContainer hide">
      <article className="errorBox hide">
            <img src="./assets/sad-cloud.png" />
            <p>Your location could not be found. 
               Please enter a different location.</p>
            <button className="submitBtn" onClick={() => {
                const errorContainer = document.querySelector('.errorContainer');
                const errorBox = document.querySelector('.errorBox');
                
                errorContainer.classList.toggle('hide');
                errorBox.classList.toggle('hide');
              }}>Enter your location</button>
      </article>
    </section>
  );
}