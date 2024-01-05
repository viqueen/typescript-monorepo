import React, { useEffect, useState } from "react";

const HealthStatus = () => {
  const [status, setStatus] = useState<object>({});

  useEffect(() => {
    fetch("/gateway/health")
      .then((response) => response.json())
      .then((data) => setStatus(data))
      .catch(console.error);
  });

  return <pre>{JSON.stringify(status, null, 2)}</pre>;
};

export { HealthStatus };
