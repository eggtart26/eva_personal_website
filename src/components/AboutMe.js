import React from "react";


const AboutMe = () => {
    const data = [
        {
          aboutMe: 'Sharing a little bit of my story...',
          iGeneralOverview:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
          statistics: ['Male, 200 years old.', 'Five feet 110 inches', 'Favorite fonts:Roboto', 'Loves to learn new things'],
        },
      ];

    return (
        <section className="aboutme">
            <div>
            <h1>About Me</h1>
            <h4>{data[0].aboutMe}</h4>
            
            <div>
            <h4>General Overview</h4>
            <p className="aboutparagraph">{data[0].iGeneralOverview}</p>
            </div>
            
            <div>
            <h4>Statistics</h4>
            <h5>And for those that dont fancy reading:</h5>
            
            </div>
            
            </div>
        </section>

    )
}

export default AboutMe;

