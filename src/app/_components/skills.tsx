export default function Skills() {
  const skills = {
    Frontend: {
      items: [
        "Next.js",
        "React.js",
        "Vue.js",
        "Angular",
        "Javascript",
        "HTML",
        "Css",
        "Sass",
      ],
    },
    Backend: {
      items: ["Node.js", "Python", "Docker", "Kubernetes",".NET", "C#", "Java"],
    },
    Database: {
      items: ["SQL", "BigQuery", "Redis", "MongoDB"],
    },
    Cloud: {
      items: ["Google Cloud Platform", "Azure Cloud", "Sharepoint Online"],
    },

  };
  return (
    <div>
      <div>
        <span className="text-[4rem] text-[#ff6868]">
          Skills and Technologies
        </span>
      </div>
      <div className="flex flex-row flex-wrap w-full">
        {Object.keys(skills).map((skill_name) => {
          return (
            <div className="flex flex-col flex-[0.2]" key={skill_name}>
              <div
                className="bg-[rgb(82,_82,_82)] m-4 p-6 text-left [color:inherit] no-underline border-[1px] border-[solid] border-[#eaeaea] rounded-[10px] [transition:color_0.15s_ease,_border-color_0.15s_ease] max-w-[300px]"
                key={skill_name}
              >
                <h2 className="font-bold " key={skill_name}>
                  {skill_name}
                </h2>
                {skills[skill_name].items.map((item, index) => {
                  return (
                    <div key={item + index}>
                      {index > 0 ? <hr className="w-1/2 ml-0"></hr> : null}
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
