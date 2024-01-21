"use client"
import Image from 'next/image'

import { config } from 'dotenv'
import { useEffect, useState } from 'react'
export default function Home() {
  const [dataDisplay, setDataDisplay] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const fetchGameData = async (id: any) => {
      const options = {
        method: 'GET',
        headers: {
          'Client-ID': 'bq4q2hixf368gf180a0876ue1rk1pt',
          Authorization: 'Bearer 4sctr1s8lrktl9o531lqgp1vo7m92v'
        }
      };

      try {
        const response = await fetch(`https://api.igdb.com/v4/games/${id}?fields=name,cover.url,first_release_date,genres,themes`, options);
        const json = await response.json();

        setDataDisplay(
          <div>
            <h3>{json[0].name}</h3>
            <Image src={json[0].cover.url} alt=""/>
          
          </div>
        );
        
        console.log(json[0]);
      } catch (err) {
        console.error('error:' + err);
      }
    };

    for (let i = 11; i < 20; i++) {
      fetchGameData(i);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      {dataDisplay}
    </main>
  );
}
