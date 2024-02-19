export default (
  buttons: string,
  contents: string,
  selected: string,
  active: string,
  dataName: string
) => {
  const buttonsEle = Array.from(
    document.querySelectorAll(buttons)
  ) as HTMLDivElement[];
  const contentsEle = Array.from(
    document.querySelectorAll(contents)
  ) as HTMLDivElement[];

  buttonsEle.forEach((sw) => {
    sw.onclick = (btn) => {
      buttonsEle.forEach((b) => b.classList.remove(selected));
      contentsEle.forEach((c) => c.classList.remove(active));
      const button = btn.target as HTMLDivElement;
      button.classList.add(selected);
      contentsEle.forEach((c) => {
        if (button.getAttribute('id') === c.getAttribute(dataName)) {
          c.classList.add(active);
        }
      });
    };
  });
};
