
import { useEffect, useState } from 'react';
import './App.css';
import UserUI from './components/UserUI';
import Hero from './components/Hero';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='bg-gray-200 mxa-h-s'>      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>

          <section class="py-24 flex items-center min-h-screen justify-center bg-white">
            <div class="mx-auto max-w-[43rem]">
              <div class="text-center">
                <p class="text-lg font-medium leading-8 text-indigo-600/95">Introducing Design Data Platform</p>
                <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Cryptonet Technologies Private Limited</h1>
                <p class="mt-3 text-lg leading-relaxed text-slate-400">Changing the world for humans securely through technology.</p>
              </div>

              <div class="mt-6 flex items-center justify-center gap-4">
                {data.results.map((item) => (
                  // <li key={item.id}>{item.name.title}</li>
                  <UserUI data={item} key={item.id} />
                ))}
              </div>
            </div>
          </section>

        </div>
      )}
    </div>

  );
}

export default App;
