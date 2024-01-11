/* StyledComponents.js */

import styled from 'styled-components';

export const Blog = styled.div`
  display: flex;
`;

export const ScrollbarContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  width: 10px;
  background-color: #f7f7f7;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin-bottom: 20px;
  background-color: #f8f8f8;
  padding: 20px;
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export const Post = styled.div`
  background-color: rgba(255, 165, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  color: #000;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const PostTitle = styled.h3`
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
`;

export const ScrollSpyContainer = styled.div`
  width: 100px;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: #f5f5f5;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 20px;
    border: 3px solid #f5f5f5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
}`;

export const ScrollSpyList = styled(Scrollspy)`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    a {
      display: block;
      padding: 10px 20px;
      color: #333;
      text-decoration: none;

      &.is-current {
        background: #ddd;
      }
    }
  }
};






// // StyledComponents.js

// import styled from 'styled-components';
// import Scrollspy from 'react-scrollspy';

// // export const Blog = styled.div`
// //   font-family: Arial, sans-serif;
// //   max-width: 100%;  // Use 100% of screen width
// //   margin: 0 auto;
// //   padding: 20px;
// //   display: flex; // for scroll thing
// // `;

// // export const Section = styled.div`
// //   background-color: #F8F8F8;  // Off-white background for each section
// //   padding: 20px;  // Add padding to each section
// //   margin-bottom: 20px;  // Decreased margin bottom to compensate for padding
// // `;

// // export const SectionTitle = styled.h2`
// //   font-size: 24px;
// //   color: #000;  // Black color for section titles
// //   margin-bottom: 20px;
// // `;

// // export const Posts = styled.div`
// //   display: flex;
// //   flex-wrap: wrap;  // Wrap posts to new lines as needed
// //   justify-content: flex-start;  // Align posts to the start of the row
// // `;

// // export const Post = styled.div`
// //   background-color: rgba(255, 165, 0, 0.2);  // Very transparent orange
// //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// //   padding: 0px;  // Remove padding
// //   margin: 0px;  // Adjust margin
// //   box-sizing: border-box;
// //   color: inherit;  // Reverted to original color
// //   transition: transform 0.3s ease;
// //   word-wrap: break-word;
// //   width: calc(90% - 10px);  // Each post takes at least half the width of the screen

// //   &:hover {
// //     transform: scale(1.02);
// //   }
// // `;

// export const PostTitle = styled.h3`
//   font-size: 18px;
//   color: #000;  // Black color for post titles
//   padding: 20px; // Move padding here to keep spacing inside the box
// `;

// export const ScrollSpyContainer = styled.div`
//   width: 100px;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   background-color: #f5f5f5;
//   overflow: auto;

//   &::-webkit-scrollbar {
//     width: 12px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #f5f5f5;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 20px;
//     border: 3px solid #f5f5f5;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }
// `;

// export const ScrollSpyList = styled(Scrollspy)`
//   padding: 0;
//   margin: 0;
//   list-style: none;

//   li {
//     a {
//       display: block;
//       padding: 10px 20px;
//       color: #333;
//       text-decoration: none;

//       &.is-current {
//         background: #ddd;
//       }
//     }
//   }
// `;

// // for scroll stuff

// /* StyledComponents.js */


// export const Blog = styled.div`
//   display: flex;
// `;

// export const ScrollbarContainer = styled.div`
//   height: 100vh;
//   overflow-y: scroll;
//   width: 10px;
//   background-color: #f7f7f7;
// `;

// export const ContentContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

// export const Section = styled.section`
//   margin-bottom: 20px;
// `;

// export const Posts = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-left: -10px;
//   margin-right: -10px;
// `;

// export const Post = styled.div`
//   width: calc(33.33% - 20px);
//   padding: 10px;
// `;

// // Rest of your styled components...

