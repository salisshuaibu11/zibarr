const axios = require('axios');

// This function initializes the course player and returns a player object
function initPlayer(config) {
  // Implementation details for initializing the player
  const {api} = config;

  return {
    // These methods are the public API that will be exposed to other applications

    // This method loads all the courses
    loadCourses: async () => {
      try {
        const response = await axios.get(api.courses);

        console.log(response);
      } catch (error) {

      }
    },

    // This method loads a specific course

    // This method loads a course by its ID
    loadCourse: (courseId) => {
      // Implementation details for loading the course
    },

    // This method starts playing the loaded course
    play: () => {
      // Implementation details for loading the course
    },

    // This method resumes the current paused course
    resume: () => {
      // Implementation details for resuming the course
    },

    // This method stops the current playing or paused course
    stop: () => {
      // Implementation details for loading the course
    },

    // This method seeks to a specific time in the current course
    seek: (time) => {
      // Implementation details for loading the course
      // ..
    },

    // This method returns the current playing status of the course 
    isPlaying: () => {
      // Implementation details for loading the course
    },

    // This method returns the current time of the playing or paused course 
    getCurrentTime: () => {
      // Implementation details for loading the course
    },

    // This method returns the total duration of the loaded course
    getTotalDuration: () => {
      // Implementation details for loading the course
    }
  }
}
