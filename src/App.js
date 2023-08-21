import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/Newscards/NewsCards";
import useStyles from "./styles.js";
import logo from "./logos/newsmate-logo.png";
import wordsToNumbers from "words-to-numbers";
const alanKey = process.env.REACT_APP_API_KEY;
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening");
          }
        }
      },
    });
  }, []);
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  ></link>;
  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.alanLogo} alt="NewsMate" />
      </div>
      <div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      </div>
    </div>
  );
};
export default App;
