import { init as initApm } from '@elastic/apm-rum';
var apm = initApm({
    serviceName: "frontend",
    serverUrl: "http://localhost:8200",
    serviceVersion: "",
    environment: "Development",
    breakdownMetrics: true
});

export default apm;