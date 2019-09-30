import { useState, useEffect } from 'react';

export const useHttp = (url, requestBody, token = null, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    let headers = {
      "Content-Type": "application/json"
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    useEffect(() => {
      setIsLoading(true);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers
      })
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error("Failed!");
          }
          return res.json();
        })
        .then(resData => {
          setIsLoading(false);
          setFetchedData(resData.data);
          // setEvents(events.push(resData.data.createEvent));
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    }, dependencies);
    return [isLoading, fetchedData];
};
