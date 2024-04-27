import React from 'react'
import { useState, useEffect } from 'react'
//here we will make an api call to get the github followers or the repositories
//and display then on /github route on the website
//we only want to make an api call only when this method is called
//so we will use useEffect() hook (commomly used while fetching data)
function GitHub() {
    const [data, setData] = useState([])
    const [repodata, setRepoData] = useState([])
    useEffect(()=> {
        //here we will make an api call to get the github followers or the repositories
    fetch('https://api.github.com/users/aryansharma9903')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
    fetch('https://api.github.com/users/aryansharma9903/repos')
        .then(response => response.json())
        .then((repodata) => {
            console.log(repodata)
            setRepoData(repodata)
        })
    }, [])
  return (
    <div className='flex m-4 text-center bg-gray-600 text-white p-5 text-3xl h-screen grid-cols-3'>
        <div className='flex border-red-500 h-48 w-48 '>
        <img src={data.avatar_url} alt="profile photo" />
            <ul>
                <li>
                    Name: {data.name}
                </li>
                <li>
                    GitHub followers: {data.followers}
                </li>
                <li>
                    profile link : 
                    <a href={data.html_url} />
                </li>
        Github Repositories:
            <ul>
                {repodata.map((repo) => 
                   (<li
                    key={repo.id}>{repo.name}</li>) 
                )}
            </ul>
        </ul>
        </div>

    </div>
  )
}

export default GitHub


// import React from 'react';
// import { useState, useEffect } from 'react';

// function GitHub() {
//     const [data, setData] = useState({});
//     const [repodata, setRepoData] = useState([]);

//     useEffect(() => {
//         // Fetch user data
//         fetch('https://api.github.com/users/aryansharma9903')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch user data');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setData(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching user data:', error);
//             });

//         // Fetch user's repositories
//         fetch('https://api.github.com/users/aryansharma9903/repos')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch user repositories');
//                 }
//                 return response.json();
//             })
//             .then((repodata) => {
//                 console.log('Fetched repositories:', repodata);
//                 setRepoData(repodata);
//             })
//             .catch(error => {
//                 console.error('Error fetching user repositories:', error);
//             });
//     }, []);

//     return (
//         <div className='text-center bg-gray-600 text-white p-2 text-3xl'>
//             <ul>
//                 <li>
//                     Name: {data.name}
//                 </li>
//                 <li>
//                     GitHub followers: {data.followers}
//                 </li>
//                 <li>
//                     Github repos :
//                     <ul>
//                         {repodata.map(repo => (
//                             <li key={repo.id}>{repo.name}</li>
//                         ))}
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default GitHub;
