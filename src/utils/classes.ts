export const classes = (classes: string, newClasses?: string) => {
  if (!newClasses) {
    return classes;
  }
  return classes.split(" ").concat(newClasses.split(" ")).join(" ");
};
