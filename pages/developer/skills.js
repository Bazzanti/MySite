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
        },
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
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <h2>{skill_name}</h2>
                            {
                            skills[skill_name].items.map(item => {
                                return(<p>{item}</p>)
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