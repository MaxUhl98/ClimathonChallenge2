import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import './LoadingScreen.scss';

/**
 * This is a LoadingScreen component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-10-11
 */
function LoadingScreen() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(getMessage());
        setInterval(() => {
            setMessage(getMessage());
        }, 3000);
    }, []);

    return (
        <div className="loading-screen">
            <Spinner />
            <p>{message}</p>
        </div>
    );
}

function getMessage() {
    const m = [
        'Loading... grab a snack!',
        "We're building something awesome. Stay tuned.",
        'Reticulating splines...',
        'Bending the laws of physics...',
        'Herding cats...',
        'Charging flux capacitor...',
        'Time is relative, and so is our loading time.',
        'Summoning the loading genie...',
        'Spinning up the hamster wheel...',
        'Did you try turning it off and on again?',
        'Fetching coffee for the developer...',
        'If this takes too long, blame the internet.',
        'Recalibrating the universe...',
        'Finding the perfect GIF...',
        'Translating binary code into English...',
        'Waiting for the internet gods...',
        'Putting in a good word with the server...',
        'Loading the joke of the day...',
        'Trying to figure out what you want...',
        'Pouring pixels into the screen...',
        "Don't panic! It's just loading.",
        'Uploading the loading bar...',
        'Warming up the servers...',
        'Gremlins in the wires. Please wait.',
        'Generating witty dialog...',
        'Loading the fun part...',
        'Are we there yet?',
        "We're on it like a bonnet.",
        'Who knew loading could be this fun?',
        'Brewing digital coffee...',
        'Counting the stars... almost done.',
        "We're not stuck, just thinking hard.",
        "Buckle up! We're almost there.",
        'Let’s pretend this is part of the experience.',
        'It’s a bird! It’s a plane! It’s... still loading.',
        'Bringing you the future... slowly.',
        'Tuning the warp drive...',
        'Downloading more RAM...',
        'Gently coaxing electrons into position...',
        'Updating to the latest technology...',
        'Hold tight! Magic is happening.',
        'Channeling our inner turtle...',
        'Time flies... but not this time.',
        'Doing a barrel roll...',
        'Cooking up something good...',
        'Loading... because patience is a virtue.',
        'Checking for any missing pieces...',
        'Transforming 1s into 0s...',
        'Synchronizing with the cloud...',
        'Calculating Pi... this might take a while.',
        'Loading: Please do not look away!',
        'Hold on while we spin our wheels...',
        'Running with scissors... carefully.',
        'Finding Waldo...',
        'Working on world domination...',
        'Hang in there, good things take time.',
        'Teaching our servers new tricks...',
        'Launching hamsters into space...',
        "Do not hit F5... we're almost there!",
        'Building a better loading screen...',
        'Reading your mind... okay, not really.',
        'Buffering the best parts...',
        'Loading faster than a slow snail!',
        'Firing up the engines...',
        'Almost there, just defying gravity.',
        'Smoothing out the rough edges...',
        'Polishing the pixels...',
        'In a galaxy far, far away... we’re loading.',
        'Taking a deep breath...',
        'Locating the missing piece of the puzzle...',
        "It's still loading? Weird.",
        'Grabbing more popcorn...',
        'Preparing your digital experience...',
        'Fueling the servers with caffeine...',
        'Rebooting the matrix...',
        'Rendering in 3...2...1...',
        'Setting phasers to load...',
        'Outsmarting artificial intelligence...',
        'Coding... with love.',
        'Hold up... this part’s tricky.',
        'Defragmenting the universe...',
        'Pretending to work hard...',
        'Unlocking hidden features...',
        'Engaging hyperdrive...',
        'Gazing into the abyss...',
    ];
    // return random message
    return m[Math.floor(Math.random() * m.length)];
}

export default LoadingScreen;
