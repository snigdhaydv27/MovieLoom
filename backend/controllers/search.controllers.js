const { fetchFromTMDB } = require("../services/tmdb.service");
const { User } = require("../models/user.models");

//search person
async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }

    const user = await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchPerson controller ",error.message);
    res.status(500).json({ message: error.message });
  }
}

//search movie
async function searchMovie(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }
    const user = await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchMovie controller ",error.message);
    res.status(500).json({ message: error.message });
  }
}

//search tv
async function searchTv(params) {
    const { query } = req.params;
    try {
      const response = await fetchFromTMDB(
        `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
      );
      if (response.results.length === 0) {
        return res.status(404).json({ message: "No results found" });
      }
      const user = await User.findByIdAndUpdate(req.user._id, {
        $push: {
          searchHistory: {
            id: response.results[0].id,
            image: response.results[0].poster_path,
            title: response.results[0].title,
            searchType: "tv",
            createdAt: new Date(),
          },
        },
      });
      res.status(200).json({ success: true, content: response.results });
    } catch (error) {
      console.log("Error in searchTv controller ",error.message);
      res.status(500).json({ message: error.message });
    }
}

//get search history
async function getSearchHistory(req,res) {
    try {
        res.status(200).json({success:true, content: req.user.searchHistory});
    } catch (error) {
        console.log("Error in getSearchHistory controller ",error.message);
        res.status(500).json({message:error.message});   
    }
}

//remove search history
async function removeSearchHistory(req,res) {
     const {id} = req.params;
     id = parseInt(id);
    try {
        await user.findByIdAndUpdate(req.user._id, {
            $pull: {
                searchHistory: {
                    _id:id
                }
            }
        });
        res.status(200).json({success:true, message:"Search history removed successfully"});
    } catch (error) {
        console.log("Error in removeSearchHistory controller ",error.message);
        res.status(500).json({message:error.message});
    }
}


module.exports = {
  searchMovie,
  searchPerson,
  searchTv,
  getSearchHistory,
  removeSearchHistory
};
