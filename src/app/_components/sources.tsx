import styles from '../styles/about.module.scss'

export default function Sources() {

    const sources = [

        {name: "Platformatic", link: "https://blog.platformatic.dev/", icon: ""},
        {name: 'Netflix', link: "https://netflixtechblog.com/", icon:""},
        {name: "Amazon", link: "https://aws.amazon.com/it/blogs/developer/", icon: ""},
        {name: "Cloudflare", link: "https://blog.cloudflare.com/", icon: ""},
        {name: "Meta", link: "https://developers.facebook.com/blog/", icon: ""},
        {name: "Discord", link: "https://discord.com/category/engineering", icon: ""},
        {name: "Slack", link: "https://slack.engineering/", icon: ""},
        {name: "Stripe", link: "https://stripe.com/blog", icon: ""},
        {name: "Primeagen", link: "https://www.youtube.com/c/theprimeagen", icon: ""},
        {name: "Theo", link: "https://www.youtube.com/@t3dotgg", icon: ""},
        {name: "Jack Herrington", link: "https://www.youtube.com/@jherr", icon: ""},
        {name: "Quastor", link: "https://www.quastor.org/", icon: ""},
        {name: "Hacker News", link: "https://news.ycombinator.com/", icon: ""},
        {name: "Dreams of code", link: "https://www.youtube.com/@dreamsofcode", icon: ""},
        {name: "Low Level Learning", link: "https://www.youtube.com/@LowLevelLearning", icon: ""},
        {name: "DEV", link: "https://dev.to/", icon: ""},
        {name: "Paul Graham", link: "https://www.paulgraham.com", icon: ""},  
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