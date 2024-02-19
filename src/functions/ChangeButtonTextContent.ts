export default (
  e:
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.MouseEvent<HTMLElement, MouseEvent>,
  text: string
) => {
  const target = e.target as HTMLDivElement;

  if (target?.getAttribute('class')?.includes('follow_btn')) {
    target.classList.remove('unconnected');
    target.classList.add('connected');
    target.textContent = text;
  }
};
