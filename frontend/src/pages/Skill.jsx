import React from 'react';
import Avatar from '@mui/material/Avatar';

const links = [
  { name: 'java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'c', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'html5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'css', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'javascript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'reactjs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'vitejs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'nodejs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'mongodb', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'mysql', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'material ui', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
  { name: 'bootstrap', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"  },
  { name: 'git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'github', src: 'https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png' },
  { name: 'figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'photoshop', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'postman', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  
];
const Skill = () => {
  console.log(links);
  return (
    <div>
      <div style={{ display: 'flex', gap: '100px', flexWrap: 'wrap',padding:'0 5vw',justifyContent:"center"}}>
        {links.length > 0 &&
          links.map((data, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding:"15px",
             background: 'rgba( 255, 255, 255, 0.08 )',
boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
backdropFilter: 'blur( 4px )',
webkitBackdropFilter: 'blur( 4px )',
borderRadius: '10px',
border: "1px solid rgba( 255, 255, 255, 0.18 )"
             }}>
             <Avatar sx={{ width: 120, height: 120 }} variant="rounded" src={data.src} alt={data.name} style={{}} />
              <div>{data.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skill;
