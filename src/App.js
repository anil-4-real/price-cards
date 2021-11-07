import "./App.css";
import Card from "./components/Card.js";

function App() {
  let free = {
    title: "Free",
    price: "0",
    users: "Single User",
    userEnabler: true,
    storage: "5GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess: "Community Access",
    communityAccessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: false,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: false,
    subdomain: "Free Subdomain",
    subdomainEnabler: false,
    reports: "Monthly Status Reports",
    reportsEnabler: false,
  };

  let plus = {
    title: "PLUS",
    price: "9",
    users: "5 Users",
    userEnabler: true,
    storage: "50GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess: "Community Access",
    communityAccessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomain: "Free Subdomain",
    subdomainEnabler: true,
    reports: "Monthly Status Reports",
    reportsEnabler: false,
  };

  let pro = {
    title: "PRO",
    price: "49",
    users: "Unlimited Users",
    userEnabler: true,
    storage: "150GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess: "Community Access",
    communityAccessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomain: "Unlimited Free Subdomain",
    subdomainEnabler: true,
    reports: "Monthly Status Reports",
    reportsEnabler: true,
  };

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card type={free} />
          <Card type={plus} />
          <Card type={pro} />
        </div>
      </div>
    </section>
  );
}

export default App;
