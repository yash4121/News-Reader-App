import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

const infoCards = [
  {
    id: "1",
    color: "#0A1828",
    // "#00838f",
    title: "Latest News: ",
    text: "Give me the Latest news",
  },
  {
    id: "2",
    color: "#0A1828",
    //"#1565c0",
    title: "News by Categories: ",
    info: "Business, Health, Entertainment, General, Science, Sports, Technology",
    text: "Give me the Latest Technology news",
  },
  {
    id: "3",
    color: "#0A1828",
    //"#4527a0",
    title: "News by Terms: ",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with the PlayStation 5",
  },
  {
    id: "4",
    color: "#0A1828",
    //"#283593",
    title: "News by Sources: ",
    info: "CNN, Wired, Time, BBC News, Buzzfeed, New York Times....",
    text: "Give me the News from CNN or BBC News",
  },
];
const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography className={classes.title} variant="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong> <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography className={classes.title} variant="h6">
                  Try Saying <br />{" "}
                  <i className={classes.text}>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
