import styles from '/styles/skills.module.scss'

export default function Skills() {

    const skills = {
        Frontend: { 
            items: ["Angular", "Javascript", "HTML", "Css", "Sass"] 
        },
        Backend: { 
            items: [".NET", "C#", "Liferay", "Java", "SQL", "MongoDB"] 
        },
        Cloud: { 
            items: ["Azure Cloud", "Sharepoint Online"] 
        },
        Systems: { 
            items: ["Git", "Azure Devops"] 
        }
    };
    return (
        <div>
            <div>
                <span className={styles.titleSection}>Skills and Technologies</span>
            </div>
            <div className={styles.row}>
                {
                Object.keys(skills).map(skill_name => {
                    return (
                    <div className={styles.column} key={skill_name}>
                        <div className={styles.card} key={skill_name}>
                            <h2 key={skill_name}>{skill_name}</h2>
                            {
                            skills[skill_name].items.map(item => {
                                return(<p key={item}>{item}</p>)
                            })
                            }
                        </div>
                    </div>
                    )
                })
                }

            </div>
        </div>
    );
}