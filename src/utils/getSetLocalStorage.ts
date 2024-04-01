interface IItemsObject {
  name: string;
  completed: boolean;
  id: string;
}
export const getLocalStorage: () => IItemsObject[] = () => {
  const list: string | null = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

export const setLocalStorage: (items: IItemsObject[]) => void = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
