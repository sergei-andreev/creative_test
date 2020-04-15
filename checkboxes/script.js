const selectAllCheckboxId = "all-input";
const arrPairsIds = [
  ["bender-img", "bender-input"],
  ["dart-img", "dart-input"],
  ["gomer-img", "gomer-input"],
  ["wolter-img", "wolter-input"],
];

const createArrElements = (arrPairsIds) => {
  const res = [];
  for (let [imgId, inputId] of arrPairsIds) {
    const img = document.querySelector(`#${imgId}`);
    const input = document.querySelector(`#${inputId}`);
    res.push([img, input]);
  }

  return res;
};

const bindPairs = (arrPairsIds) => {
  const arrElements = createArrElements(arrPairsIds);
  for (let [img, input] of arrElements) {
    input.addEventListener("click", () => {
      if (input.checked) {
        img.classList.remove("hidden");
      } else {
        img.classList.add("hidden");
      }
    });
  }
};

const bindSelectAll = (arrPairsIds, selectAllCheckboxId) => {
  const selectAllCheckbox = document.querySelector(`#${selectAllCheckboxId}`);
  const arrElements = createArrElements(arrPairsIds);

  selectAllCheckbox.addEventListener("click", () => {
    if (selectAllCheckbox.checked) {
      for (let [img, input] of arrElements) {
        img.classList.remove("hidden");
        input.checked = true;
      }
    } else {
      for (let [img, input] of arrElements) {
        img.classList.add("hidden");
        input.checked = false;
      }
    }
  });
};

bindPairs(arrPairsIds);
bindSelectAll(arrPairsIds, selectAllCheckboxId);
