export function getAllRoutesItems(menuData) {
  const index = {};

  const addItemsToIndex = (items, parentKey = "") => {
    items.forEach((item) => {
      if (item.hasSubItems && item.subItems) {
        addItemsToIndex(item.subItems, item.id); // recurse with parent id
      } else {
        const key = parentKey ? `${parentKey}.${item.id}` : item.id;
        index[key] = {
          id: key,
          label: item.label,
          path: item.path,
          icon: item.icon,
          parentKey: parentKey || null,
        };
      }
    });
  };

  addItemsToIndex(menuData);
  return index;
}
