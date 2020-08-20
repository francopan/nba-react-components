# NBA Stats

This project provides an user interface for NBA stats from a [public api](https://rapidapi.com/theapiguy/api/free-nba).

The project is divided in three projects (git submodules):

- [nba-base-app](https://github.com/francopan/nba-base-app): A backbone app that will list matches, teams and players.
- [nba-react-components](https://github.com/francopan/nba-react-components): A react app that will build the components for the base app to use.
- nba-api: A typescript app that will serve as a middleware application to fetch the data from the api.

Each project will have its own README with its own instructions.
In order to download all projects, you can either clone recursively or pull recursively.

~~~
git clone {url} --recursive
~~~

~~~
git pull --recursive
~~~
