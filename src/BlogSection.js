// BlogSection.js

// BlogSection.js

// BlogSection.js

// BlogSection.js

import React from 'react';
import BlogPost from './BlogPost';
import { Section } from './StyledComponents';

const BlogSection = ({ section }) => {
  console.log('Rendering section:', section.section); // debug statement

  return (
    <Section id={section.section.replace(/\s+/g, '')}>
      <h2>{section.section}</h2> 
      {section.posts.map((post, index) => {
        console.log(`Rendering post ${index} of section ${section.section}:`, post.title); // debug statement
        return <BlogPost key={post.title} id={post.title} title={post.title} section={section.section} />
      })}
    </Section>
  );
};

export default BlogSection;





// import React from 'react';
// import BlogPost from './BlogPost';
// import { Section, SectionTitle, Posts } from './StyledComponents';

// function BlogSection({ section }) {
//   return (
//     <Section>
//       <SectionTitle>{section.section}</SectionTitle>
//       <Posts>
//         {section.posts.map(post => <BlogPost key={post.id} {...post} />)}
//       </Posts>
//     </Section>
//   );
// }

// export default BlogSection;
