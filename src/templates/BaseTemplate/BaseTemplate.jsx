import ToastContainer from "../../components/ToastContainer";

export const BaseTemplate = ({title, children}) => {
  return (
    <main>
      {title && <h1 className="mt-lg-5 text-center">{title}</h1>}
      {children}

      <ToastContainer />
    </main>
  );
};
