declare module "*.module.scss" {
  const classNameMap: {
    [className: string]: string;
  };

  export default classNameMap;
}
