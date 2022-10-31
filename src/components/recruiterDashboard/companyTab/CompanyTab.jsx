import { CompanyContainer } from "../../companyContainer/CompanyContainer";

export const CompanyTab = ({ company }) => {
  const items = ["about", "culture"];
  return (
    <>
      <CompanyContainer company={company} items={items} />
    </>
    // <div className="d-flex flex-column gap-3 w-100">
    //   <img
    //     className="img-fluid d-md-block d-none"
    //     style={{ height: 200 }}
    //     src={company.image || companyImage}
    //     alt="companyImage"
    //   />
    //   <div className="d-flex gap-3 p-1 bg-light">
    //     <img
    //       style={{ width: 80, height: 80 }}
    //       src={company.logo || companyLogo}
    //       alt="companyLogo"
    //     />
    //     <div className="d-flex flex-column gap-2 justify-content-center ">
    //       <h3>{company.name}</h3>
    //       <h6>{company.location}</h6>
    //     </div>
    //   </div>
    // </div>
  );
};
