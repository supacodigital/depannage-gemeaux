// Concatène des noms de classes en ignorant les valeurs vides.
export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
