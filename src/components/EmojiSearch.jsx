import React, { useState } from 'react'
import axios from 'axios'
import './EmojiSearch.css'

export const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const fetchData = async (value) => {
    try {
        const response = await axios.get('https://emoji-api.com/emojis', {
            params: {
                access_key: '3620c1c73a91a2237da7fe5944b85880fc31b5a9',
                search: value,
            }
        });
        console.log(response.data);
        setResults(response.data);
    } catch (error) {
        console.error('Error fetching emojis:', error);
    }
}

const handleChange = (value) => {
    setSearchTerm(value)
    fetchData(value)
  }

  return (
    <div>
        <div>
            <input placeholder="Search emojis..." value={searchTerm} onChange={(e)=>handleChange(e.target.value)} />
            <p>Type any word in the search bar to see a bunch of matching emojis</p>
        </div>
        <div>
            <ul>
                {results.length > 0 && results.map((result, index) => (
                <li className='icon' key={index}>{result.character}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

