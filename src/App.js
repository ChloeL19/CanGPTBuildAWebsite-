import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import blogPosts from './blogPosts';
import BlogSection from './BlogSection';
import BlogPostDetails from './BlogPostDetails';
import { Blog, ScrollSpyContainer, ScrollSpyList, ScrollbarContainer, ContentContainer, Section, Posts, Post } from './StyledComponents';
import './App.css';

const sectionIDs = blogPosts.map((section) => section.section.replace(/\s+/g, ''));

function App() {
  return (
    <Router>
      <Blog>
        <ScrollbarContainer>
          <ScrollSpyContainer>
            <ScrollSpyList items={sectionIDs} currentClassName="is-current">
              {blogPosts.map((section, index) => (
                <li key={index}>
                  <a href={`#${section.section.replace(/\s+/g, '')}`}>{section.section}</a>
                </li>
              ))}
            </ScrollSpyList>
          </ScrollSpyContainer>
        </ScrollbarContainer>
        <ContentContainer>
          <Routes>
            {blogPosts.map((section, index) => (
              <Route
                key={index}
                path={`/${section.section.replace(/\s+/g, '')}`}
                element={<BlogSection section={section} />}
              />
            ))}
            {blogPosts.map((section) =>
              section.posts.map((post, index) => (
                <Route
                  key={index}
                  path={`/${section.section.replace(/\s+/g, '')}/${post.title.replace(/\s+/g, '')}`}
                  element={<BlogPostDetails post={post} />}
                />
              ))
            )}
          </Routes>
        </ContentContainer>
      </Blog>
    </Router>
  );
}

export default App;















// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import blogPosts from './blogPosts';
// import BlogSection from './BlogSection';
// import BlogPostDetails from './BlogPostDetails';
// import { Blog, ScrollSpyContainer, ScrollSpyList } from './StyledComponents';
// import './App.css';

// const sectionIDs = blogPosts.map((section) => section.section.replace(/\s+/g, ''));

// function MainContent() {
//   const location = useLocation();

//   // Use the hash value to scroll to the id in the blog posts
//   useEffect(() => {
//     const element = document.querySelector(location.hash);
//     if (element) {
//       element.scrollIntoView();
//     }
//   }, [location]);

//   return (
//     <Blog>
//       <Routes>
//         {blogPosts.map((section) =>
//           <>
//             <Route 
//               path={`/${section.section}`} 
//               element={<BlogSectionOverview section={section} />}
//             />
//             {section.posts.map((post) => (
//               <Route 
//                 path={`/${section.section}/${post.title.replace(/\s+/g, '')}`} 
//                 element={<BlogPostDetails post={post} />}
//               />
//             ))}
//           </>
//         )}
//       </Routes>
//       {/* <Routes>
//         {blogPosts.map((section) =>
//           section.posts.map((post) => (
//             <Route
//               key={post.title}  
//               path={`/${section.section}/${post.title.replace(/\s+/g, '')}`} 
//               element={<BlogPostDetails post={post} />}
//             />
//           ))
//         )}
//       </Routes> */}
//     </Blog>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <ScrollSpyContainer>
//         <ScrollSpyList items={sectionIDs} currentClassName="is-current">
//           {blogPosts.map((section, index) => (
//             <li key={index}><a href={`#${section.section.replace(/\s+/g, '')}`}>{section.section}</a></li>
//           ))}
//         </ScrollSpyList>
//       </ScrollSpyContainer>
//       <MainContent />
//     </Router>
//   );
// }

// export default App;
