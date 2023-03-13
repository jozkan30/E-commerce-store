import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ListingDetail() {
const [detail, setDetail] = useState({})
let {id} = useParams
useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://fake-store-api-production-c25d.up.railway.app/items"
      );
      const item = await response.json();
      setDetail(item)  
    }

    fetchData();
  }, []);

  async function fetchData() {
    let oneItem = await setDetail(id);
    setDetail(oneItem)
  }


return (
    <div>
    
    
    </div>
  )
}
