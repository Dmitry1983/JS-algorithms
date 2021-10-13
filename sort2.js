const filter = {
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

const fun = (obj) => {
  const arr = Object.entries(obj).map((item) => {
    const countTrue = Object.values(item[1]).filter(Boolean).length;
    return { [item[0]]: countTrue };
  });
  return arr;
};

console.log(fun(filter));
