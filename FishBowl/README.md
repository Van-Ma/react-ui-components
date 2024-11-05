# Fishbowl Component

The Fishbowl component is a fun and interactive React component that displays a goldfish inside a fishbowl. The fish follows the mouse cursor as it moves and performs a gentle swimming animation, creating a lifelike effect.

## Demo
The fish smoothly rotates and flips to face the cursor, and gently swims back and forth in the fishbowl.

## Features
- **Mouse-Responsive Movement**: The fish rotates and flips based on the mouse cursor’s position.
- **Swimming Animation**: The fish swims with a subtle animation, making it appear lively.
- **Stylish Fishbowl Design**: The fishbowl has a soft, rounded look with a shadow effect for depth.

## Usage

### Installation
Ensure React is installed in your project. Copy the `Fishbowl.js` component code, the `fishbowl.css` styling, and the `fish.png` image into your project.

### Example Usage
```javascript
import React from 'react';
import Fishbowl from './Fishbowl';

function App() {
  return (
    <div className="App">
      <Fishbowl />
    </div>
  );
}

export default App;
