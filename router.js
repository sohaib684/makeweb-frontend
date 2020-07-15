import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./page/index.js";
import BlogSingle from "./page/blog-single.js";
import ArticleListPage from "./page/article-list-page.js";

class RouterPage extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                   <Route path="/index">
                       <Home />
                   </Route>
                   <Route path="/blog-single">
                       <BlogSingle />
                   </Route>
                   <Route path="/article-list-page">
                        <ArticleListPage />
                   </Route>
                </Switch>
            </Router>
        );
    }
}

export default RouterPage;