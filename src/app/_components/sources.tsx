import styles from '../styles/about.module.scss'

export default function Sources() {

    const sources: {name: string, link?: string, icon?: string, type: "blog" | "youtube" | "book" | "community"}[] = [

        {name: "Platformatic", link: "https://blog.platformatic.dev/", type: "blog"},
        {name: 'Netflix', link: "https://netflixtechblog.com/", type:"blog"},
        {name: "Amazon", link: "https://aws.amazon.com/it/blogs/developer/", type: "blog"},
        {name: "Cloudflare", link: "https://blog.cloudflare.com/", type: "blog"},
        {name: "Meta", link: "https://developers.facebook.com/blog/", type: "blog"},
        {name: "Discord", link: "https://discord.com/category/engineering", type: "blog"},
        {name: "Slack", link: "https://slack.engineering/", type: "blog"},
        {name: "Stripe", link: "https://stripe.com/blog", type: "blog"},
        {name: "Primeagen", link: "https://www.youtube.com/c/theprimeagen", type: "youtube"},
        {name: "Theo", link: "https://www.youtube.com/@t3dotgg", type: "youtube"},
        {name: "Jack Herrington", link: "https://www.youtube.com/@jherr", type: "youtube"},
        {name: "Quastor", link: "https://www.quastor.org/", type: "blog"},
        {name: "Hacker News", link: "https://news.ycombinator.com/", type: "community"},
        {name: "Dreams of code", link: "https://www.youtube.com/@dreamsofcode", type: "youtube"},
        {name: "Low Level Learning", link: "https://www.youtube.com/@LowLevelLearning", type:"youtube",},
        {name: "DEV", link: "https://dev.to/", type: "community"},
        {name: "Paul Graham", link: "https://www.paulgraham.com", type: "youtube"},  
        {name: "Devsecurely", link:"https://www.devsecurely.com/blog",  type:"blog"},
        {name: "TotalTypeScript", link:"https://www.totaltypescript.com",  type:"blog"},
        {name: "Microservices patterns", link:"https://microservices.io/book",type:"book"}
    ];
    
    return (
        <div>
            <div>
                <span className="text-[#ff6868] text-[4rem]">Tech Sources and Blogs</span>
            </div>
            <div className="">
                {sources.map(source => {
                        return (
                            <a className=""
                            key={source.name} href={source.link} >{source.name}</a>
                        )
                    })

                }
            </div>
        </div>
    );
}