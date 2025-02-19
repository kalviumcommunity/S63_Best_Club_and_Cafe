const ClubCard = ({ name, location, rating }) => {
    return (
        <div className="club-card">
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Rating: {rating}/5</p>
        </div>
    );
};

export default ClubCard;
