// Import Interfaces
import { ISkill } from "types/Interfaces";

export const splitSkills = (srcArray: ISkill[]) => {
  const arrLength = srcArray.length;
  const isEven = arrLength % 2 === 0;

  let chunk = 4;
  if (isEven) chunk = arrLength / 2;
  else if (arrLength <= 5 && arrLength > 2) chunk = 3;

  let i = 0;
  let j = 0;
  const temporary = [];
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk));
  }
  return temporary;
};

export const professionalYears = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - 2018;
};
