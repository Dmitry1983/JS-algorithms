const initialArray = [
  { id: 1, name: "item one", tags: ["music", "sport", "science"] },
  { id: 2, name: "item two", tags: ["music"] },
  { id: 3, name: "item three", tags: ["fun"] },
  { id: 4, name: "item four", tags: ["sport", "science"] },
  { id: 5, name: "item five", tags: [""] },
  { id: 6, name: "item four", tags: ["sport"] },
];

const tags = [...new Set(initialArray.flatMap((item) => item.tags))];

const sorted = () => {
  console.log({ tags });
  for (let tag of tags) {
    console.log("");
    console.log({ tag });
    console.log(initialArray.filter((item) => item.tags.indexOf(tag) !== -1));
  }
};

sorted();

const initialFilterArray = {
  status: {
    working: false,
    missing: true,
    weekend: false,
    replacement: true,
    blocked: false,
    deactivated: false,
  },
  role: {
    cleaner: false,
    brigadier: true,
    admin: false,
  },
  migrationCard: {
    valid: false,
    expired: false,
  },
  patent: {
    valid: false,
    expired: false,
  },
};

const 