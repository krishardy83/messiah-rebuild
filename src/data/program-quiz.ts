export type QuizPath = { prompt: string; ids: string[] };
export type QuizArea = { slug: string; title: string; paths: QuizPath[] };

export const programQuizAreas: QuizArea[] = [
  {
    slug: "art-design",
    title: "Art and Design",
    paths: [
      {
        prompt: "Creating visual art and digital designs",
        ids: [
          "75a542cf0a0000a91b6e96dc14a1f34b",
          "75a55ac00a0000a91b6e96dcadd6718b",
          "75a5a93f0a0000a91b6e96dc2641e980",
          "75a5940c0a0000a91b6e96dc4d0dab13",
        ],
      },
      {
        prompt: "Creating videos, stories and digital media",
        ids: [
          "75a5c89d0a0000a91b6e96dcbf48a262",
          "75a594d50a0000a91b6e96dcd43cfd2a",
          "75a5d5da0a0000a91b6e96dcb8f21e81",
        ],
      },
      {
        prompt: "Teaching and sharing the arts with others",
        ids: [
          "75a560e20a0000a91b6e96dc33daac9a",
          "eb29e54f0a0000a924fd99be128c7c99",
          "75a5e2e60a0000a91b6e96dccc808571",
        ],
      },
      { prompt: "Studying art and its history", ids: ["75a575520a0000a91b6e96dc5048e6c2"] },
    ],
  },
  {
    slug: "business",
    title: "Business, Leadership and Innovation",
    paths: [
      {
        prompt: "Leading organizations and managing money wisely",
        ids: [
          "75a5c7e90a0000a91b6e96dc59fa7041",
          "75a53cfd0a0000a91b6e96dc981558c3",
          "75a5a8810a0000a91b6e96dc0db11704",
          "75a567fb0a0000a91b6e96dc055f2095",
          "75a5e3ed0a0000a91b6e96dc0f3c1c19",
          "75a58ffa0a0000a91b6e96dc0e162325",
          "75a5a7670a0000a91b6e96dc6a33a73e",
        ],
      },
      {
        prompt: "Launching ideas and growing businesses",
        ids: [
          "75a5ddfc0a0000a91b6e96dc3409715a",
          "75a5a6b00a0000a91b6e96dc5d9cd5cc",
          "75a578660a0000a91b6e96dc9339fd49",
          "75a5ba740a0000a91b6e96dc810461e9",
          "75a53f890a0000a91b6e96dce664692e",
        ],
      },
      {
        prompt: "Building technology and using data to solve problems",
        ids: [
          "75a54d250a0000a91b6e96dc04c66157",
          "75a5d8590a0000a91b6e96dce0eaf9a5",
          "75a5ae9d0a0000a91b6e96dc527c8cbf",
        ],
      },
      {
        prompt: "Strengthening communities and improving lives",
        ids: [
          "75a5d9d70a0000a91b6e96dc26e5ccbf",
          "9bd12b670a0000a9450ed22fab70cf82",
          "0a4c8f450a0000a91d8651be5b485803",
        ],
      },
      {
        prompt: "Managing experiences in music, sports and hospitality",
        ids: [
          "75a596670a0000a91b6e96dc65bd6aa2",
          "75a5d9d70a0000a91b6e96dc26e5ccbf",
          "75a58a8c0a0000a91b6e96dc93188483",
          "75a588d40a0000a91b6e96dc1710a668",
        ],
      },
      {
        prompt: "Leading teams and developing people",
        ids: [
          "75a577a60a0000a91b6e96dcaf46135b",
          "75a5ef4a0a0000a91b6e96dc9e7757ec",
          "f9f823ae0a0000a91d8651be52de5682",
        ],
      },
    ],
  },
  {
    slug: "communication-media",
    title: "Communication and Media",
    paths: [
      {
        prompt: "Reporting stories through journalism and broadcast media",
        ids: ["75a5f0f50a0000a91b6e96dc469074a3", "75a56b020a0000a91b6e96dc57a83e5a"],
      },
      {
        prompt: "Creating videos, stories and digital experiences",
        ids: [
          "75a5c89d0a0000a91b6e96dcbf48a262",
          "75a594d50a0000a91b6e96dcd43cfd2a",
          "75a5d5da0a0000a91b6e96dcb8f21e81",
          "75a578660a0000a91b6e96dc9339fd49",
        ],
      },
      {
        prompt: "Designing digital art and visual experiences",
        ids: ["75a55ac00a0000a91b6e96dcadd6718b", "75a5a93f0a0000a91b6e96dc2641e980"],
      },
      {
        prompt: "Writing and telling stories",
        ids: [
          "75a5c5e40a0000a91b6e96dc3d0d0b9c",
          "75a5a1eb0a0000a91b6e96dc84c259c7",
          "75a589cb0a0000a91b6e96dc8160f63c",
          "75a54df30a0000a91b6e96dcbac91b57",
        ],
      },
    ],
  },
  {
    slug: "education-teaching",
    title: "Education and Teaching",
    paths: [
      {
        prompt: "Teaching and leading my own classroom",
        ids: [
          "75a5a2b10a0000a91b6e96dca23d2366",
          "75a5dba50a0000a91b6e96dce9c16b93",
          "75a5d2350a0000a91b6e96dc6ea8f2c0",
          "75a562df0a0000a91b6e96dc47990721",
          "75a579760a0000a91b6e96dcf0f89072",
          "75a55ccc0a0000a91b6e96dc1a0a0f38",
        ],
      },
      {
        prompt: "Supporting diverse learners and meeting individual needs",
        ids: [
          "75a5ab730a0000a91b6e96dc69331f26",
          "75a5bf3b0a0000a91b6e96dcf0b1c754",
          "75a5dba50a0000a91b6e96dce9c16b93",
          "75a5ee8c0a0000a91b6e96dc44191ee2",
          "75a552950a0000a91b6e96dc6cdcbf97",
        ],
      },
      {
        prompt: "Teaching through the arts, music or movement",
        ids: [
          "75a560e20a0000a91b6e96dc33daac9a",
          "eb29e54f0a0000a924fd99be128c7c99",
          "75a5e2e60a0000a91b6e96dccc808571",
          "75a5be8f0a0000a91b6e96dc0f1d010e",
        ],
      },
      {
        prompt: "Teaching English and working with multilingual learners",
        ids: ["75a573f90a0000a91b6e96dc2e557c44"],
      },
    ],
  },
  {
    slug: "engineering",
    title: "Engineering and Innovation",
    paths: [
      {
        prompt: "Designing systems and solving broad engineering challenges",
        ids: ["75a561c00a0000a91b6e96dc0031ef3e"],
      },
      {
        prompt: "Designing infrastructure and protecting the environment",
        ids: ["75a55d9c0a0000a91b6e96dc651529eb", "75a547a30a0000a91b6e96dc3000dc24"],
      },
      {
        prompt: "Building machines, systems and advanced technology",
        ids: ["75a546de0a0000a91b6e96dc2796c953", "75a590b50a0000a91b6e96dc1918156f"],
      },
      {
        prompt: "Working with electronics, power and electrical systems",
        ids: ["75a572150a0000a91b6e96dc57754e11"],
      },
      {
        prompt: "Applying engineering to healthcare and human biology",
        ids: ["75a5f03e0a0000a91b6e96dc4cdc49b9"],
      },
    ],
  },
  {
    slug: "finance-math",
    title: "Finance, Analytics and Mathematics",
    paths: [
      {
        prompt: "Managing finances and helping others plan for the future",
        ids: [
          "75a5c7e90a0000a91b6e96dc59fa7041",
          "75a5e3ed0a0000a91b6e96dc0f3c1c19",
          "75a53cfd0a0000a91b6e96dc981558c3",
          "75a567fb0a0000a91b6e96dc055f2095",
          "75a5a8810a0000a91b6e96dc0db11704",
        ],
      },
      {
        prompt: "Analyzing markets and making smart financial decisions",
        ids: [
          "75a5c7e90a0000a91b6e96dc59fa7041",
          "75a5e63e0a0000a91b6e96dc51de47f3",
          "75a5e3ed0a0000a91b6e96dc0f3c1c19",
          "75a53cfd0a0000a91b6e96dc981558c3",
          "75a567fb0a0000a91b6e96dc055f2095",
        ],
      },
      {
        prompt: "Solving problems using math and data",
        ids: [
          "75a5e63e0a0000a91b6e96dc51de47f3",
          "75a54d250a0000a91b6e96dc04c66157",
          "75a5e1730a0000a91b6e96dc0ce8afbd",
        ],
      },
    ],
  },
  {
    slug: "government-law",
    title: "Government and Law",
    paths: [
      {
        prompt: "Shaping public policy and understanding how government works",
        ids: [
          "75a587300a0000a91b6e96dce4d6447c",
          "75a580e10a0000a91b6e96dcdef7a7d3",
          "75a5555d0a0000a91b6e96dc91c13b51",
        ],
      },
      {
        prompt: "Understanding global issues and international affairs",
        ids: [
          "9bd12b670a0000a9450ed22fab70cf82",
          "75a5e09d0a0000a91b6e96dc1a1af5e3",
          "75a580e10a0000a91b6e96dcdef7a7d3",
          "75a5555d0a0000a91b6e96dc91c13b51",
        ],
      },
      {
        prompt: "Studying the past to better understand today’s world",
        ids: ["75a58c490a0000a91b6e96dc43eaa891", "75a5c95d0a0000a91b6e96dc72871c1c"],
      },
      {
        prompt: "Preparing for a career in law and justice",
        ids: [
          "75a587300a0000a91b6e96dce4d6447c",
          "75a540470a0000a91b6e96dcf7611d95",
          "75a5e09d0a0000a91b6e96dc1a1af5e3",
          "75a580e10a0000a91b6e96dcdef7a7d3",
          "75a5555d0a0000a91b6e96dc91c13b51",
          "75a5638f0a0000a91b6e96dc4e746f41",
        ],
      },
    ],
  },
  {
    slug: "health-human-services",
    title: "Health, Science and Human Services",
    paths: [
      {
        prompt: "Studying living systems and discovering how life works",
        ids: [
          "75a57a3b0a0000a91b6e96dccd40bbc0",
          "75a5cb420a0000a91b6e96dcff663d6d",
          "75a583ee0a0000a91b6e96dc3414f611",
          "75a5a9fb0a0000a91b6e96dcc3ffc39f",
          "75a584a80a0000a91b6e96dcdf0c5a39",
        ],
      },
      {
        prompt: "Providing care and helping people live healthier lives",
        ids: [
          "75a5c3710a0000a91b6e96dccc9cbdf4",
          "75a5dc640a0000a91b6e96dc5399a3da",
          "75a5c52e0a0000a91b6e96dcf562e54c",
          "75a5b6f30a0000a91b6e96dc126a6aa2",
          "75a5d44e0a0000a91b6e96dc4fbcdbdc",
          "75a5dd330a0000a91b6e96dc5938ef2e",
          "75a54b7d0a0000a91b6e96dc63510f77",
          "75a5832a0a0000a91b6e96dc12acabcc",
          "75a5a3680a0000a91b6e96dc4a797d0a",
        ],
      },
      {
        prompt: "Supporting mental and emotional well-being",
        ids: [
          "75a5715a0a0000a91b6e96dc744f0eb8",
          "53536eb10a0000a96bcb41a5b83c4feb",
          "75a58f1c0a0000a91b6e96dcb56d83bd",
          "75a5b7be0a0000a91b6e96dcd6b9339d",
          "75a587f40a0000a91b6e96dcb4eb45ff",
        ],
      },
      {
        prompt: "Promoting health through nutrition, fitness and lifestyle",
        ids: [
          "75a5691e0a0000a91b6e96dcb6cadff1",
          "75a593130a0000a91b6e96dca86d2cf3",
          "75a543990a0000a91b6e96dcc1c58310",
        ],
      },
      {
        prompt: "Improving health and well-being in communities",
        ids: ["75a576e70a0000a91b6e96dc7572aa68", "75a544560a0000a91b6e96dc541f15d9"],
      },
      {
        prompt: "Preparing for medical or health professional school",
        ids: [
          "75a55eda0a0000a91b6e96dced81be29",
          "75a57ceb0a0000a91b6e96dc954f1808",
          "75a569f70a0000a91b6e96dcc607d51b",
          "75a5a5e70a0000a91b6e96dcdfc71399",
          "75a5b99c0a0000a91b6e96dc09191f3c",
          "75a595980a0000a91b6e96dcd0ca5a77",
          "75a59d290a0000a91b6e96dc36efb77d",
          "75a558a90a0000a91b6e96dc3b23626a",
          "75a56e680a0000a91b6e96dcd70fd601",
          "75a556980a0000a91b6e96dc76700a0b",
          "75a57c250a0000a91b6e96dc282625c7",
          "75a5dd330a0000a91b6e96dc5938ef2e",
          "75a54b7d0a0000a91b6e96dc63510f77",
          "75a5576d0a0000a91b6e96dc7d592cd4",
          "75a5bff20a0000a91b6e96dcb23dfafc",
        ],
      },
      {
        prompt: "Leading and managing sports and athletic programs",
        ids: ["75a58a8c0a0000a91b6e96dc93188483"],
      },
    ],
  },
  {
    slug: "history-culture",
    title: "History, Politics and Culture",
    paths: [
      {
        prompt: "Studying history and how the past shapes our world",
        ids: [
          "75a58e660a0000a91b6e96dc3b9fb165",
          "75a575520a0000a91b6e96dc5048e6c2",
          "75a54eea0a0000a91b6e96dceb6c467a",
          "75a5aab10a0000a91b6e96dce2154ca4",
          "75a58c490a0000a91b6e96dc43eaa891",
          "75a5c95d0a0000a91b6e96dc72871c1c",
          "75a564ee0a0000a91b6e96dc6243e49b",
        ],
      },
      {
        prompt: "Exploring culture, religion and society",
        ids: [
          "75a575520a0000a91b6e96dc5048e6c2",
          "75a58e660a0000a91b6e96dc3b9fb165",
          "75a550ec0a0000a91b6e96dc12219bce",
          "75a5aab10a0000a91b6e96dce2154ca4",
          "75a5826b0a0000a91b6e96dccac466d2",
          "75a540ff0a0000a91b6e96dc6385848e",
        ],
      },
      {
        prompt: "Government, politics and global affairs",
        ids: [
          "75a587300a0000a91b6e96dce4d6447c",
          "9bd12b670a0000a9450ed22fab70cf82",
          "75a5e09d0a0000a91b6e96dc1a1af5e3",
          "75a580e10a0000a91b6e96dcdef7a7d3",
          "75a5555d0a0000a91b6e96dc91c13b51",
          "75a5c95d0a0000a91b6e96dc72871c1c",
        ],
      },
      {
        prompt: "Preparing for a career in law",
        ids: [
          "75a587300a0000a91b6e96dce4d6447c",
          "75a5e09d0a0000a91b6e96dc1a1af5e3",
          "75a580e10a0000a91b6e96dcdef7a7d3",
          "75a5638f0a0000a91b6e96dc4e746f41",
        ],
      },
    ],
  },
  {
    slug: "human-behavior",
    title: "Human Behavior and Society",
    paths: [
      {
        prompt: "Understanding human behavior and mental health",
        ids: [
          "75a5715a0a0000a91b6e96dc744f0eb8",
          "53536eb10a0000a96bcb41a5b83c4feb",
          "75a540470a0000a91b6e96dcf7611d95",
          "75a58f1c0a0000a91b6e96dcb56d83bd",
          "75a5a53a0a0000a91b6e96dce2b27c7d",
        ],
      },
      {
        prompt: "Supporting children, families and healthy development",
        ids: [
          "75a5b7be0a0000a91b6e96dcd6b9339d",
          "75a56f390a0000a91b6e96dca48e2231",
          "75a5bd0d0a0000a91b6e96dc4df08512",
          "75a5daa20a0000a91b6e96dce298d07e",
          "75a591830a0000a91b6e96dcd9714747",
          "75a5d79d0a0000a91b6e96dc8dd8f53e",
        ],
      },
      {
        prompt: "Helping people and serving communities",
        ids: [
          "53536eb10a0000a96bcb41a5b83c4feb",
          "75a5826b0a0000a91b6e96dccac466d2",
          "75a57b600a0000a91b6e96dc9108f7d6",
          "75a587f40a0000a91b6e96dcb4eb45ff",
          "75a5b5c60a0000a91b6e96dcc381117c",
        ],
      },
      {
        prompt: "Studying society, culture and social issues",
        ids: [
          "75a5d50b0a0000a91b6e96dc3f3345c4",
          "75a573350a0000a91b6e96dcc0faa56d",
          "75a564ee0a0000a91b6e96dc6243e49b",
        ],
      },
      {
        prompt: "Justice, peace and solving conflict",
        ids: ["75a540470a0000a91b6e96dcf7611d95", "75a5c1040a0000a91b6e96dc841c9e07"],
      },
      {
        prompt: "Thinking deeply about ethics, ideas and meaning",
        ids: ["75a5d6a60a0000a91b6e96dc9b713ab1"],
      },
    ],
  },
  {
    slug: "language",
    title: "Language",
    paths: [
      {
        prompt: "Writing, storytelling and exploring great literature",
        ids: [
          "75a581a80a0000a91b6e96dcdf514432",
          "75a5598e0a0000a91b6e96dc9c4afdcb",
          "75a5a1eb0a0000a91b6e96dc84c259c7",
          "75a589cb0a0000a91b6e96dc8160f63c",
        ],
      },
      {
        prompt: "Learning languages and connecting with cultures",
        ids: [
          "75a58b540a0000a91b6e96dce6051f9f",
          "75a570400a0000a91b6e96dcc34ace25",
          "75a5d38b0a0000a91b6e96dc9352fda5",
        ],
      },
      {
        prompt: "Exploring culture, history and global perspectives",
        ids: [
          "75a58e660a0000a91b6e96dc3b9fb165",
          "75a54eea0a0000a91b6e96dceb6c467a",
          "75a5aab10a0000a91b6e96dce2154ca4",
          "75a5826b0a0000a91b6e96dccac466d2",
          "9bd12b670a0000a9450ed22fab70cf82",
          "75a58c490a0000a91b6e96dc43eaa891",
          "75a540ff0a0000a91b6e96dc6385848e",
        ],
      },
      {
        prompt: "Thinking deeply about ideas, faith and meaning",
        ids: [
          "75a59c490a0000a91b6e96dc7dacb3eb",
          "75a550ec0a0000a91b6e96dc12219bce",
          "75a5d6a60a0000a91b6e96dc9b713ab1",
          "75a53b810a0000a91b6e96dcc906938b",
          "75a540ff0a0000a91b6e96dc6385848e",
        ],
      },
      {
        prompt: "Serving communities and supporting communication",
        ids: [
          "75a5a1270a0000a91b6e96dce55455f9",
          "75a540470a0000a91b6e96dcf7611d95",
          "75a587f40a0000a91b6e96dcb4eb45ff",
          "75a5b5c60a0000a91b6e96dcc381117c",
          "75a54df30a0000a91b6e96dcbac91b57",
        ],
      },
      {
        prompt: "Expressing ideas through movement and performance",
        ids: [
          "75a55f960a0000a91b6e96dcbc0c2863",
          "75a54c560a0000a91b6e96dcd24e6156",
          "75a5ac880a0000a91b6e96dc11091996",
        ],
      },
    ],
  },
  {
    slug: "faith-ministry",
    title: "Faith, Ministry and Christian Leadership",
    paths: [
      {
        prompt: "Studying the Bible and understanding Christian faith",
        ids: [
          "75a59c490a0000a91b6e96dc7dacb3eb",
          "75a550ec0a0000a91b6e96dc12219bce",
          "75a53b810a0000a91b6e96dcc906938b",
        ],
      },
      {
        prompt: "Leading and serving in church and ministry",
        ids: [
          "75a5dee00a0000a91b6e96dc05bb3ebb",
          "75a553610a0000a91b6e96dca58a0f95",
          "75a5461c0a0000a91b6e96dcf220a9b7",
        ],
      },
      {
        prompt: "Sharing faith across cultures and communities",
        ids: ["75a5761f0a0000a91b6e96dc2191f1b4", "75a5a0550a0000a91b6e96dcf144a1c3"],
      },
      {
        prompt: "Using creativity and media in worship and ministry",
        ids: ["75a554960a0000a91b6e96dc21325f91", "75a5494b0a0000a91b6e96dcb762546c"],
      },
      {
        prompt: "Exploring Christianity in different cultures",
        ids: ["75a58e660a0000a91b6e96dc3b9fb165", "75a540ff0a0000a91b6e96dc6385848e"],
      },
    ],
  },
  {
    slug: "music-theatre",
    title: "Music and Theatre",
    paths: [
      {
        prompt: "Performing music and developing my musical talents",
        ids: [
          "75a56cb60a0000a91b6e96dc73911fec",
          "75a5ac880a0000a91b6e96dc11091996",
          "75a54c560a0000a91b6e96dcd24e6156",
        ],
      },
      {
        prompt: "Creating and composing original music",
        ids: ["75a55b9c0a0000a91b6e96dca8b7ba90"],
      },
      {
        prompt: "Leading and teaching through music and the arts",
        ids: [
          "75a553610a0000a91b6e96dca58a0f95",
          "eb29e54f0a0000a924fd99be128c7c99",
          "75a5e2e60a0000a91b6e96dccc808571",
          "75a5494b0a0000a91b6e96dcb762546c",
        ],
      },
      {
        prompt: "Performing and expressing creativity on stage",
        ids: [
          "75a55f960a0000a91b6e96dcbc0c2863",
          "75a54c560a0000a91b6e96dcd24e6156",
          "75a53c3c0a0000a91b6e96dc4d501b91",
        ],
      },
    ],
  },
  {
    slug: "science-natural-world",
    title: "Science, Health and the Natural World",
    paths: [
      {
        prompt: "Studying living systems and discovering how life works",
        ids: [
          "75a57a3b0a0000a91b6e96dccd40bbc0",
          "75a5cb420a0000a91b6e96dcff663d6d",
          "75a5ca1d0a0000a91b6e96dc21a060c4",
          "75a584a80a0000a91b6e96dcdf0c5a39",
          "75a583ee0a0000a91b6e96dc3414f611",
          "75a5a46e0a0000a91b6e96dc6c57d72e",
        ],
      },
      {
        prompt: "Exploring chemistry, physics and the physical world",
        ids: [
          "75a5a9fb0a0000a91b6e96dcc3ffc39f",
          "75a542050a0000a91b6e96dcc09c86a0",
          "75a59f4a0a0000a91b6e96dcb4ba77d2",
        ],
      },
      {
        prompt: "Protecting the environment and caring for nature",
        ids: ["75a5487e0a0000a91b6e96dccbf6d08d", "75a5d9190a0000a91b6e96dcff9ee248"],
      },
      {
        prompt: "Understanding people, behavior and mental health",
        ids: ["75a5a53a0a0000a91b6e96dce2b27c7d", "75a5715a0a0000a91b6e96dc744f0eb8"],
      },
      {
        prompt: "Helping people live healthier lives",
        ids: [
          "75a5dc640a0000a91b6e96dc5399a3da",
          "75a5691e0a0000a91b6e96dcb6cadff1",
          "75a5c52e0a0000a91b6e96dcf562e54c",
          "75a543990a0000a91b6e96dcc1c58310",
          "75a544560a0000a91b6e96dc541f15d9",
        ],
      },
      {
        prompt: "Promoting health through nutrition and wellness",
        ids: [
          "75a543990a0000a91b6e96dcc1c58310",
          "75a593130a0000a91b6e96dca86d2cf3",
          "75a576e70a0000a91b6e96dc7572aa68",
        ],
      },
      {
        prompt: "Preparing for a career in healthcare",
        ids: [
          "75a5d44e0a0000a91b6e96dc4fbcdbdc",
          "75a5832a0a0000a91b6e96dc12acabcc",
          "75a56e680a0000a91b6e96dcd70fd601",
          "75a556980a0000a91b6e96dc76700a0b",
          "75a57c250a0000a91b6e96dc282625c7",
          "75a569f70a0000a91b6e96dcc607d51b",
          "75a54b7d0a0000a91b6e96dc63510f77",
          "75a5a3680a0000a91b6e96dc4a797d0a",
          "75a5a5e70a0000a91b6e96dcdfc71399",
          "75a558a90a0000a91b6e96dc3b23626a",
          "75a5bff20a0000a91b6e96dcb23dfafc",
          "75a5576d0a0000a91b6e96dc7d592cd4",
          "75a595980a0000a91b6e96dcd0ca5a77",
        ],
      },
    ],
  },
  {
    slug: "sustainability",
    title: "Sustainability and Environment",
    paths: [
      {
        prompt: "Studying living systems and the natural world",
        ids: ["75a57a3b0a0000a91b6e96dccd40bbc0"],
      },
      {
        prompt: "Protecting the environment and promoting sustainability",
        ids: ["75a5d9190a0000a91b6e96dcff9ee248", "75a5487e0a0000a91b6e96dccbf6d08d"],
      },
      {
        prompt: "Strengthening communities and supporting local development",
        ids: [
          "75a5d9d70a0000a91b6e96dc26e5ccbf",
          "9be719f00a0000a9450ed22fec3b21f5",
          "9bec5fa60a0000a9450ed22fe48f9da5",
        ],
      },
    ],
  },
  {
    slug: "technology-data",
    title: "Technology, Computing and Data",
    paths: [
      {
        prompt: "Building software and developing technology",
        ids: [
          "75a5bb340a0000a91b6e96dc0431820f",
          "75a5b8d50a0000a91b6e96dcf558b814",
          "75a5ae9d0a0000a91b6e96dc527c8cbf",
        ],
      },
      {
        prompt: "Protecting systems and solving complex technology problems",
        ids: ["75a53e0b0a0000a91b6e96dcc4874d0b", "75a5d8590a0000a91b6e96dce0eaf9a5"],
      },
      {
        prompt: "Using data and technology to make smarter decisions",
        ids: ["75a54d250a0000a91b6e96dc04c66157", "75a53f890a0000a91b6e96dce664692e"],
      },
    ],
  },
];
