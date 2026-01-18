import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <div className="app">
      <h1>Personal Profile Cards</h1>

      <div className="cards-container">

        {/* First Profile Card */}
        <ProfileCard 
          name="Sarah Johnson"
          title="Frontend Developer"
          bio="Passionate about creating beautiful and accessible user interfaces. Love working with React and modern web technologies."
          image="https://i.pravatar.cc/300?img=1"
        />

        {/* Second Profile Card */}
        <ProfileCard 
          name="Alex Chen"
          title="UI/UX Designer"
          bio="Designer with a keen eye for detail. I believe great design should be both beautiful and functional."
          image="https://i.pravatar.cc/300?img=12"
        />

        {/* Third Profile Card */}
        <ProfileCard 
          name="Maria Garcia"
          title="Full Stack Developer"
          bio="I enjoy building complete web applications from database to frontend. Always learning new technologies."
          image="https://i.pravatar.cc/300?img=5"
        />

      </div>
    </div>
  );
}

export default App;