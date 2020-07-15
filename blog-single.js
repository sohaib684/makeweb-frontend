import React from "react"

import Header from "./elements/header.js"
import SingleBlogPage from "./elements/single_blogpage.js"
import Subscribe from "./elements/subscribe.js"
import Footer from "./elements/footer.js"

export default function BlogSingle() {
    return(
        <div>
            <Header brandname = "MakeDeveloper"
                    menu = {[["home", "index"], 
                            ["blog single", "blog-single"] 
                            ]} 
                    search_tool = {true}
                    />
            <SingleBlogPage populars={[["News Needs to Meet Its Audiences Where They Are",
                                        "Dave Rogers in News",
                                        "Jun 3 min read "]]}
                            header="News Needs to Meet Its Audiences Where They Are"
                            author="Dave Rogers in News"
                            timestamp="Jun 14 3 min read "
                            content={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.",
                                      "Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni.",
                                      "Nulla nesciunt eligendi ratione, atque, hic, ullam suscipit quos enim vitae fugiat ducimus, dolore delectus iste id culpa. Ducimus, iste magnam sed reprehenderit architecto perferendis odio voluptas molestiae quidem ab numquam debitis, dolorem incidunt, tempore a quod qui nobis. Voluptates!",
                                      "Blanditiis, ipsum sed odio reprehenderit sequi ut vitae, dolor minima ab! Architecto nesciunt nemo sint est aspernatur fugit consequatur, magnam suscipit asperiores illo eum repellendus officia dolorem, molestiae commodi nam voluptatem quis quia vel cumque quos, aliquam ex incidunt sapiente!",
                                      "Suscipit, officiis, vero! Perferendis accusamus quos voluptatum culpa, provident maiores! Illo itaque ullam fugit molestiae, eaque accusamus impedit autem numquam. Placeat molestias tempore eaque ipsam vel voluptatum velit enim quam iusto maxime delectus, sint sapiente ea, quo excepturi nisi! Quia.",
                                      "Dolores debitis excepturi maxime earum sapiente totam, quos dolore inventore tempore illum. Dolores explicabo sed amet aut atque, facere aliquid repudiandae quod possimus quo hic similique et voluptates fugit iure dolore quam ipsa numquam assumenda corporis? Dignissimos expedita fugit sapiente.",
                                      "Cupiditate ut, aspernatur labore obcaecati, eveniet aut velit nulla facere suscipit est recusandae vel error itaque earum doloremque hic necessitatibus dignissimos dolores libero laudantium ducimus! Rem dolorem ratione officia et, fugit non, fuga suscipit eos veritatis enim perspiciatis, magni sit!"]}
                            category="Design, Events"
                            tags="#html, #trends"
                            head_image="images/big_img_1.jpg"
                            author_image="images/person_1.jpg"
                            comment_visible={true}
                            />
            <Subscribe header="Newsletter Subcribe" 
                       description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!" />
            
            <Footer footer={["This template is made with", 
                             <i class="icon-heart text-danger" aria-hidden="true"></i>,
                             " by", 
                             <a href="index.html" target="_blank" >MakeDeveloper</a>]}></Footer>
        </div>
    );
}