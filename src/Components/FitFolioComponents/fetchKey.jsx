import { useEffect, useState } from 'react';

const fetchKey = () => {
  const [api_key, setApiKey] = useState('');

  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch('/config.json');
        const config = await response.json();
        setApiKey(config.API_KEY);
      } catch (error) {
        console.error('Error loading config.json:', error);
      }
    }

    loadConfig();
  }, []); 
};

export default fetchKey;
