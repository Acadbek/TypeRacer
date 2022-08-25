const par1 =
  "We cannot solve problems with the kind of thinking we employed when we came up with them";

const par2 =
  "Learn as if you will live forever, live like you will die tomorrow";

const par3 =
  "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too";

const par4 =
  "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out";

const par5 =
  "When you change your thoughts, remember to also change your world";

export const data = [
  par1.concat(par2).concat(par3).concat(par4).split(" ").join(" "),
];

export const unique = [
  ...new Set(par1.concat(par2).concat(par3).concat(par4).split(" ").join(" ")),
];