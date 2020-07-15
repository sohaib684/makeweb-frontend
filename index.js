import React from "react"
import ReactDom, { render } from "react-dom"

import Header from "./elements/header.js"
import Slider from "./elements/slider.js"
import ArticleList from "./elements/article_list.js"
import ArticleDashboard from "./elements/article_dashboard.js"
import Subscribe from "./elements/subscribe.js"
import Footer from "./elements/footer.js"

var renderHTML = (
    <div>
        <Header brandname = "MakeDeveloper"
                    menu = {[["home", "index"], 
                            ["blog single", "blog-single"] 
                            ]} 
                    search_tool = {true}
                    />
        <Slider slider={[["Editor's Pick", 
                         "News Needs to Meet Its Audiences Where They Are", 
                         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?", 
                         "Dave Rogers", 
                         "Jan 12 - 3 min read *",
                         "images/big_img_1.jpg"],
                         
                         ["Editor's Pick", 
                         "News Needs to Meet Its Audiences Where They Are", 
                         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?", 
                         "Dave Rogers", 
                         "Jan 12 - 3 min read *",
                         "images/big_img_1.jpg"]]} />
        <ArticleList 
                     section_one_name = "New API's"
                     section_two_name = "Programming"

                     section_one={[["News Needs to Meet Its Audiences Where They Are",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.",
                                    "Dave Rogers in News",
                                    "Jun 14 • 3 min read ",
                                    "images/img_v_1.jpg"],
                                    
                                    ["News Needs to Meet Its Audiences Where They Are",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.",
                                    "Dave Rogers in News",
                                    "Jun 14 • 3 min read ",
                                    "images/img_v_1.jpg"]]}
                     
                     section_two={[["News Needs to Meet Its Audiences Where They Are",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.",
                                    "Dave Rogers in News",
                                    "Jun 14 • 3 min read ",
                                    "images/img_v_1.jpg"],
                                    
                                    ["News Needs to Meet Its Audiences Where They Are",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.",
                                    "Dave Rogers in News",
                                    "Jun 14 • 3 min read ",
                                    "images/img_v_1.jpg"]]} />
        <ArticleDashboard recents={[["News Needs to Meet Its Audiences Where They Are", 
                                     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?", 
                                     "Dave Rogers", 
                                     "Jan 12 - 3 min read *",
                                     "images/big_img_1.jpg"]]}
                          populars={[["News Needs to Meet Its Audiences Where They Are",
                                      "Dave Rogers in News",
                                      "Jun 3 min read "]]} />
        <Subscribe header="Newsletter Subcribe" 
                   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!" />
            
        <Footer footer={["This template is made with", 
                         <i class="icon-heart text-danger" aria-hidden="true"></i>,
                         " by", 
                         <a href="index.html" target="_blank" >MakeDeveloper</a>]}></Footer>
    </div>
);

export default function Home() {
    return (
        renderHTML
    );
}