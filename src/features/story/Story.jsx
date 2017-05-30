import React from "react";
import PropTypes from "prop-types";

const Story = ( { stories, slug } ) => {
  console.log(stories)
  const content = stories.find( story => (
    story.slug === slug
  ) );

  return (
    <div className="story">
      {content &&
        <div>
          <h1>{ content[0].fields.title }</h1>
          <p>{ content[0].fields.body }</p>
        </div>
      }
    </div>
  );
};

Story.propTypes = {
  slug: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
};

export default Story;
