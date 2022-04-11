export const menu = (): void => {
  const menuTrigger = document.querySelector("#menu-trigger");
  const menuWrapper = document.querySelector("#menu-wrapper");
  const main = document.querySelector("main");

  if (!menuTrigger || !menuWrapper || !main) {
    return;
  }

  const clickHandler = () => {
    menuWrapper.classList.toggle("is-open");
    menuTrigger.classList.toggle("is-active");
    main.classList.toggle("hidden");
  };

  menuTrigger.addEventListener("click", clickHandler);
};
