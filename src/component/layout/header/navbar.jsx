import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { query } from "../../../access";
import { NavItem } from "./nav-item";
import { CATEGORIES } from "../../../constant";

export const Navbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await query().category.getAll();
        const { data } = response;
        setData(data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <nav className="nav-global-wrap">
      <section className="container nav-wrap">
        {data.map((record) => (
          <NavItem
            path={`category/${record?.slug}-${record?._id}`}
            icon={<FontAwesomeIcon icon={faFire} />}
            name={record.name}
          />
        ))}
      </section>
    </nav>
  );
};
