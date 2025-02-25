import React from 'react';
import Person from '../components/person';
import NavBar from '../components/NavBar';
import '../styles/board-members.css';

const BoardMembers = () => {
  const boardMembers = [
    {
      id: 3,
      image: "civil-asin/personel/Javad.png",
      name:  "جواد شاه‌حسینی",
      description: "مهندس عمران، مدیر عامل و عضو هیئت مدیره"
  },
    {
      id: 2,
      image: "civil-asin/personel/kaveh.jpeg",
      name: "کاوه میلادی راد",
      description: "دکترای مهندسی عمران، رئیس هیئت مدیره"
  },{
    id: 1,
    image: "civil-asin/personel/manafi.jpg",
    name: "کمال منافی",
    description: "مهندس مکانیک، نایب رئیس هیئت مدیره"
}
  ];

  return (
    <div className="board-members-container">
      <h1>هیات مدیره</h1>
      <div className="members-grid">
        {boardMembers.map(member => (
          <Person
            key={member.id}
            image={member.image}
            name={member.name}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardMembers; 