export const CONFIG = {

    MAINPROJECTS: [
      {
        title: "DROPTABLE",
        description: "Innovative cross platform game - use phone as an PC game controller",
        role: "Director & Android Platform Developer",
        what: "I gathered the game development the group in 2023",
        img: "/projects/reponse.png",
        linkto: "https://github.com/nadiaz2/DROPTABLE"
      },
      {
        title: "DeadBattery",
        description: "A third person shooter game made by Unreal 5",
        role: "Game Designer & Game Developer",
        what: "This is an class project that allow us developed a game in a term.",
        img: "/projects/codare.jpg",
        linkto: "https://github.com/Azu109/DeadBattery"
      },
    ] as MAINPROJECTS[],
  
    SIDEPROJECTS: [
      {
        title: "Piniverse Content Creation Engine",
        description: "An AI model generator base on human language input",
        img: "/projects/v1.png",
        linkto: "https://github.com/Azu109/Piniverse",
        view: "https://github.com/Azu109/Piniverse",
        mode: "1"
      },
      {
        title: "Hospital Map System",
        description: "A hospital map and service manage system",
        img: "/projects/v1.png",
        linkto: "https://github.com/Azu109/ferocious-furrets",
        view: "https://github.com/Azu109/ferocious-furrets",
        mode: "1"
      },
    ] as SIDEPROJECTS[],
  };
  
  interface MAINPROJECTS {
    title: string;
    description: string;
    role: string;
    what: string;
    img: string;
    linkto: string;
  }

  interface SIDEPROJECTS {
    title: string;
    description: string;
    img: string;
    linkto: any;
    view: string;
    mode: string;
  }
