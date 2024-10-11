import React, { useEffect, useState, useCallback } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import SmallSpinner from './SmallSpinner';

const News = ({ country = 'us', pageSize = 12, cat = 'general', apikey, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Function to capitalize the first letter of the category
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to update articles and fetch data
  const Updation = useCallback(async () => {
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=${apikey}&page=1&pageSize=${pageSize}&language=en`;
    try {
      setProgress(10);
      let response = await fetch(url);
      setProgress(40);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let parsedData = await response.json();
      setProgress(70);

      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setPage(1); // Reset page to 1 after fetching new category data
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }

    setProgress(100);
  }, [country, cat, apikey, pageSize, setProgress]); // Dependencies for useCallback

  // Hook to fetch data when the component mounts or updates
  useEffect(() => {
    document.title = `NewsMonkey - ${capitalizeFirstLetter(cat)}`;
    Updation();
  }, [Updation, cat]); // Adding Updation to the dependency array

  // Function to fetch more articles when scrolling
  const fetchMoreData = async () => {
    let nextPage = page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=${apikey}&page=${nextPage}&pageSize=${pageSize}&language=en`;
    try {
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let parsedData = await response.json();
      setArticles(articles.concat(parsedData.articles || []));
      setTotalResults(parsedData.totalResults);
      setPage(nextPage); // Update page number after successful fetch
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4">
        NewsMonkey - Top {capitalizeFirstLetter(cat)} Headlines
      </h1>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<SmallSpinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4 my-2" key={article.url}>
                <Newsitems
                  author={article.author || 'Unknown'}
                  publishedAt={article.publishedAt || 'Unknown Date'}
                  source={article.source.name || 'Unknown Source'}
                  title={article.title ? article.title.slice(0, 50) : 'No Title'}
                  description={article.description ? article.description.slice(0, 100) : 'No Description'}
                  imgurl={article.urlToImage || 'placeholder_image_url'}
                  newurl={article.url || 'xyz.com'}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  cat: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
