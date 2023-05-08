import { useContext } from 'react';
import './Stories.scss'
import { AuthContext } from '../../context/authContext';

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "Adil",
      img: "https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg",
    },
    {
      id: 2,
      name: "Aditi",
      img: "https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg",
    },
    {
      id: 3,
      name: "Mirchi Maharaja",
      img: "https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg",
    },
    {
      id: 4,
      name: "Hemang",
      img: "https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg",
    },
  ];

  return (
    <div className='stories'>
      <div className="story">
        <img src={currentUser.profilePic} alt="story" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={stories.id}>
          <img src={story.img} alt="story" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
