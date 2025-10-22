import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTING");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY {""}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMee
      </button>
    </div>
  );
};

export default Community;
