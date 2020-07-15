import React from "react";
import ReactDom from "react-dom";

import ArticleList from "./elements/article_list.js"
import Header from "./elements/header.js"

class ArticleListPage extends React.Component {
    render() {
		return (
        <div>
            <Header brandname = "MakeDeveloper"
                    menu = {[["home", "index"], 
                            ["blog single", "blog-single"] 
                            ]} 
                    search_tool = {true}
                    />
        </div> 
	);
    }
}

export default ArticleListPage;