import React from 'react'
import Story from '../Storyy/Story';
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
      <Story
        image='https://i.pinimg.com/originals/65/05/e0/6505e03880b21909606e203f88011222.jpg'
        profileSrc="https://images2.alphacoders.com/109/thumbbig-1093136.webp"
        title="Harish"
      />
      <Story
        image='https://i1.wp.com/super.black/wp-content/uploads/2020/08/black-manta-fortnite.jpg?resize=875%2C915&ssl=1'
        profileSrc="https://cdn.akamai.steamstatic.com/steam/apps/872200/capsule_616x353.jpg?t=1670941865"
      />
      <Story
        image='https://i.pinimg.com/originals/c0/a3/8c/c0a38cab4243caf9f5c61790a7eb6bf9.jpg'
        profileSrc="https://pbs.twimg.com/profile_images/1278337668997435393/YaV3HSy0_400x400.jpg"
        title="Rebel"
      />
      <Story
        image='https://progameguides.com/wp-content/uploads/2019/04/fortnite-outfit-stealth-reflex.jpg'
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8Iun2rcj3UDbw-k6dmkEd_H4KdsOMnVhCw&usqp=CAU"
        title="Nanu"
      />
      <Story
        image='https://i2.wp.com/fortniteskins.net/wp-content/uploads/2018/04/tomatohead-skin-02.png?quality=90&strip=all&ssl=1'
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2YNGM26TvqbyMWvFA1EeWWA-LuNnM1uXxJJK5-FLJP9Sj2JBKv1NTQlhwHWGuND6l4g&usqp=CAU"
        title="Subhash"
      />
        </div>
    )
}

export default StoryReel; 
