import { Link } from "react-router-dom";

const SubSiteHeader = ({ name }) => {

  const BGcolor = () => {
    if (name.includes("motivateme")) {
        return "bg-teal-700";
    } else if (name.includes("fitfolio")) {
        return "bg-rose-700";
    } else if (name.includes("clientcheckin")) {
        return "bg-sky-700";
    } else {
        return "";
    }
};

const textColor = () => {
    if (name.includes("motivateme")) {
        return "text-teal-100";
    } else if (name.includes("fitfolio")) {
        return "text-rose-100";
    } else if (name.includes("clientcheckin")) {
        return "text-sky-100";
    } else {
        return "";
    }
};


  return (
    <div className="flex justify-center">
      <Link to={`/${name.split('/')[1]}`} className="flex flex-col items-center">
        <div className={`h1 flex items-center justify-center w-16 h-16 border-0 rounded-full ${BGcolor()} ${textColor()} text-4xl`}
>
          <i className="fa-solid fa-dumbbell"></i>
        </div>
        <h2 className={`-mt-4 h2 text-4xl uppercase text-shadow flex justify-center ${textColor()} font-bold tracking-wide`}>
        {name.split('/')[1]}
        </h2>
      </Link>
    </div>
  );
};

export default SubSiteHeader;