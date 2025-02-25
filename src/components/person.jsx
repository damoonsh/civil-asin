import '../styles/Person.css';

const Person = ({ image, name, description }) => {
  return (
    <div className="person-card">
      <div className="person-image">
        <img src={image} alt={`${name}`} />
      </div>
      <div className="person-info">
        <h3 className="person-name">{name}</h3>
        <p className="person-description">{description}</p>
      </div>
    </div>
  );
};

export default Person;
